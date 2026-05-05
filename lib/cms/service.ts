import { cache } from "react"
import { createSupabaseAdminClient, createSupabasePublicClient, hasSupabaseAdminEnv, hasSupabasePublicEnv } from "@/lib/supabase"
import {
  aboutContentSchema,
  contactContentSchema,
  createDefaultItineraryPageDetails,
  defaultCmsContent,
  globalSettingsSchema,
  homeContentSchema,
  inquiryInsertSchema,
  itinerariesIndexContentSchema,
  itineraryRecordSchema,
  normalizeItineraryPageDetails,
  partnerRecordSchema,
  testimonialRecordSchema,
  type AboutContent,
  type ContactContent,
  type GlobalSettings,
  type HomeContent,
  type InquiryInsert,
  type ItineraryPageDetails,
  type ItinerariesIndexContent,
  type ItineraryRecord,
  type PartnerRecord,
  type TestimonialRecord,
} from "@/lib/cms/schema"

type SettingKey = "global" | "home" | "about" | "contact" | "itinerariesIndex"
export type AdminItineraryRecord = ItineraryRecord & { isPublished: boolean; details: ItineraryPageDetails }

function getPublicClientSafe() {
  if (!hasSupabasePublicEnv()) {
    return null
  }

  try {
    return createSupabasePublicClient()
  } catch {
    return null
  }
}

function getAdminClientSafe() {
  if (!hasSupabaseAdminEnv()) {
    throw new Error("Supabase admin environment variables are missing.")
  }

  return createSupabaseAdminClient()
}

function coerceString(value: unknown, fallback = "") {
  if (typeof value === "string") {
    return value
  }

  if (typeof value === "number") {
    return String(value)
  }

  return fallback
}

function coerceNullableString(value: unknown) {
  const normalized = coerceString(value).trim()
  return normalized ? normalized : null
}

function coerceNumber(value: unknown, fallback = 0) {
  if (typeof value === "number" && Number.isFinite(value)) {
    return value
  }

  if (typeof value === "string") {
    const parsed = Number(value)
    return Number.isFinite(parsed) ? parsed : fallback
  }

  return fallback
}

function coerceStringArray(value: unknown) {
  if (!Array.isArray(value)) {
    return []
  }

  return value
    .map((entry) => coerceString(entry).trim())
    .filter(Boolean)
}

function coerceItineraryCategory(value: unknown): ItineraryRecord["category"] {
  if (value === "destination" || value === "kilimanjaro" || value === "northern" || value === "zanzibar" || value === "safari") {
    return value
  }

  return "safari"
}

function coerceFeaturedSection(value: unknown): ItineraryRecord["featuredSection"] {
  if (value === "northern" || value === "zanzibar" || value === "southern") {
    return value
  }

  return null
}

async function getSetting<T>(key: SettingKey, fallback: T, parse: (value: unknown) => T): Promise<T> {
  const client = getPublicClientSafe()

  if (!client) {
    return fallback
  }

  const { data, error } = await client.from("cms_settings").select("payload").eq("key", key).maybeSingle()

  if (error || !data?.payload) {
    return fallback
  }

  try {
    return parse(data.payload)
  } catch {
    return fallback
  }
}

function mapItineraryRecord(row: Record<string, unknown>): ItineraryRecord {
  const record = {
    slug: coerceString(row.slug),
    title: coerceString(row.title),
    shortTitle: coerceString(row.short_title, coerceString(row.title)),
    featuredSubtitle: coerceNullableString(row.featured_subtitle),
    duration: coerceString(row.duration),
    image: coerceString(row.image),
    destinations: coerceString(row.destinations),
    groupSize: coerceString(row.group_size),
    description: coerceString(row.description),
    highlights: coerceStringArray(row.highlights),
    priceFrom: coerceString(row.price_from),
    category: coerceItineraryCategory(row.category),
    featuredSection: coerceFeaturedSection(row.featured_section),
    sortOrder: coerceNumber(row.sort_order),
    bookTourName: coerceNullableString(row.book_tour_name),
  }

  return itineraryRecordSchema.parse(record)
}

function mapAdminItineraryRecord(row: Record<string, unknown>): AdminItineraryRecord {
  const record = mapItineraryRecord(row)

  return {
    ...record,
    isPublished: typeof row.is_published === "boolean" ? row.is_published : true,
    details: normalizeItineraryPageDetails(row.details, record),
  }
}

function mapTestimonialRecord(row: Record<string, unknown>): TestimonialRecord {
  return testimonialRecordSchema.parse({
    id: row.id,
    name: row.name,
    location: row.location,
    country: row.country ?? null,
    image: row.image,
    rating: row.rating,
    quote: row.quote,
    tour: row.tour,
    sortOrder: row.sort_order ?? 0,
  })
}

function mapPartnerRecord(row: Record<string, unknown>): PartnerRecord {
  return partnerRecordSchema.parse({
    id: row.id,
    name: row.name,
    logo: row.logo,
    websiteUrl: row.website_url ?? null,
    width: row.width,
    height: row.height,
    sortOrder: row.sort_order ?? 0,
  })
}

export const getGlobalSettings = cache(async (): Promise<GlobalSettings> => {
  return getSetting("global", defaultCmsContent.global, (value) => globalSettingsSchema.parse(value))
})

export const getHomeContent = cache(async (): Promise<HomeContent> => {
  return getSetting("home", defaultCmsContent.home, (value) => homeContentSchema.parse(value))
})

export const getAboutContent = cache(async (): Promise<AboutContent> => {
  return getSetting("about", defaultCmsContent.about, (value) => aboutContentSchema.parse(value))
})

export const getContactContent = cache(async (): Promise<ContactContent> => {
  return getSetting("contact", defaultCmsContent.contact, (value) => contactContentSchema.parse(value))
})

export const getItinerariesIndexContent = cache(async (): Promise<ItinerariesIndexContent> => {
  return getSetting("itinerariesIndex", defaultCmsContent.itinerariesIndex, (value) => itinerariesIndexContentSchema.parse(value))
})

export const getPublishedItineraries = cache(async (): Promise<ItineraryRecord[]> => {
  const client = getPublicClientSafe()

  if (!client) {
    return defaultCmsContent.itineraries
  }

  const { data, error } = await client
    .from("cms_itineraries")
    .select("*")
    .eq("is_published", true)
    .order("category", { ascending: true })
    .order("sort_order", { ascending: true })

  if (error || !data?.length) {
    return defaultCmsContent.itineraries
  }

  try {
    return data.map((row) => mapItineraryRecord(row))
  } catch {
    return defaultCmsContent.itineraries
  }
})

export async function getFeaturedItineraries(slugs: string[]) {
  const itineraries = await getPublishedItineraries()
  const itineraryBySlug = new Map(itineraries.map((item) => [item.slug, item]))

  return slugs.map((slug) => itineraryBySlug.get(slug)).filter(Boolean) as ItineraryRecord[]
}

export const getPublishedTestimonials = cache(async (): Promise<TestimonialRecord[]> => {
  const client = getPublicClientSafe()

  if (!client) {
    return defaultCmsContent.testimonials
  }

  const { data, error } = await client
    .from("cms_testimonials")
    .select("*")
    .eq("is_published", true)
    .order("sort_order", { ascending: true })

  if (error || !data?.length) {
    return defaultCmsContent.testimonials
  }

  try {
    return data.map((row) => mapTestimonialRecord(row))
  } catch {
    return defaultCmsContent.testimonials
  }
})

export const getPublishedPartners = cache(async (): Promise<PartnerRecord[]> => {
  const client = getPublicClientSafe()

  if (!client) {
    return defaultCmsContent.partners
  }

  const { data, error } = await client
    .from("cms_partners")
    .select("*")
    .eq("is_published", true)
    .order("sort_order", { ascending: true })

  if (error || !data?.length) {
    return defaultCmsContent.partners
  }

  try {
    return data.map((row) => mapPartnerRecord(row))
  } catch {
    return defaultCmsContent.partners
  }
})

export async function getAdminDashboardData() {
  const client = getAdminClientSafe()

  const [settings, itineraries] = await Promise.all([
    client.from("cms_settings").select("key, updated_at"),
    client.from("cms_itineraries").select("slug, category, is_published"),
  ])

  const itineraryRows = (itineraries.data ?? []) as Array<{
    slug: string
    category: ItineraryRecord["category"]
    is_published: boolean
  }>

  const categoryCounts = itineraryRows.reduce<Record<ItineraryRecord["category"], number>>(
    (counts, item) => {
      counts[item.category] = (counts[item.category] ?? 0) + 1
      return counts
    },
    {
      destination: 0,
      kilimanjaro: 0,
      northern: 0,
      safari: 0,
      zanzibar: 0,
    },
  )

  return {
    settings: settings.data ?? [],
    itinerariesCount: itineraryRows.length,
    publishedCount: itineraryRows.filter((item) => item.is_published).length,
    categoryCounts,
  }
}

export async function getAdminItineraries() {
  const client = getAdminClientSafe()
  const { data, error } = await client.from("cms_itineraries").select("*").order("category").order("sort_order")

  if (error) {
    throw error
  }

  return (data ?? []).map((row) => mapAdminItineraryRecord(row))
}

export async function getAdminItineraryBySlug(slug: string) {
  const client = getAdminClientSafe()
  const { data, error } = await client.from("cms_itineraries").select("*").eq("slug", slug).maybeSingle()

  if (error) {
    throw error
  }

  if (!data) {
    return null
  }

  return mapAdminItineraryRecord(data)
}

export function createEmptyAdminItinerary(): AdminItineraryRecord {
  const record: ItineraryRecord = {
    slug: "",
    title: "",
    shortTitle: "",
    featuredSubtitle: null,
    duration: "",
    image: "",
    destinations: "",
    groupSize: "",
    description: "",
    highlights: [],
    priceFrom: "",
    category: "safari",
    featuredSection: null,
    sortOrder: 0,
    bookTourName: null,
  }

  return {
    ...record,
    isPublished: true,
    details: createDefaultItineraryPageDetails(record),
  }
}

export async function getAdminTestimonials() {
  const client = getAdminClientSafe()
  const { data, error } = await client.from("cms_testimonials").select("*").order("sort_order")

  if (error) {
    throw error
  }

  return (data ?? []).map((row) => mapTestimonialRecord(row))
}

export async function getAdminPartners() {
  const client = getAdminClientSafe()
  const { data, error } = await client.from("cms_partners").select("*").order("sort_order")

  if (error) {
    throw error
  }

  return (data ?? []).map((row) => mapPartnerRecord(row))
}

export async function getAdminInquiries() {
  const client = getAdminClientSafe()
  const { data, error } = await client.from("cms_inquiries").select("*").order("created_at", { ascending: false })

  if (error) {
    throw error
  }

  return data ?? []
}

export async function upsertCmsSetting(key: SettingKey, label: string, payload: unknown) {
  const client = getAdminClientSafe()
  const { error } = await client.from("cms_settings").upsert([{ key, label, payload }], { onConflict: "key" })

  if (error) {
    throw error
  }
}

export async function upsertItinerary(record: AdminItineraryRecord) {
  const client = getAdminClientSafe()
  const { error } = await client.from("cms_itineraries").upsert([
    {
      slug: record.slug,
      title: record.title,
      short_title: record.shortTitle,
      featured_subtitle: record.featuredSubtitle,
      duration: record.duration,
      image: record.image,
      destinations: record.destinations,
      group_size: record.groupSize,
      description: record.description,
      highlights: record.highlights,
      price_from: record.priceFrom,
      category: record.category,
      book_tour_name: record.bookTourName,
      featured_section: record.featuredSection,
      sort_order: record.sortOrder,
      is_published: record.isPublished,
      details: record.details,
    },
  ], { onConflict: "slug" })

  if (error) {
    throw error
  }
}

export const getPublishedItineraryBySlug = cache(async (slug: string): Promise<(ItineraryRecord & { details: ItineraryPageDetails }) | null> => {
  const fallback = defaultCmsContent.itineraries.find((item) => item.slug === slug)
  const client = getPublicClientSafe()

  if (!client) {
    if (!fallback) {
      return null
    }

    return {
      ...fallback,
      details: createDefaultItineraryPageDetails(fallback),
    }
  }

  const { data, error } = await client
    .from("cms_itineraries")
    .select("*")
    .eq("slug", slug)
    .eq("is_published", true)
    .maybeSingle()

  if (error || !data) {
    if (!fallback) {
      return null
    }

    return {
      ...fallback,
      details: createDefaultItineraryPageDetails(fallback),
    }
  }

  const record = mapItineraryRecord(data)

  return {
    ...record,
    details: normalizeItineraryPageDetails(data.details, record),
  }
})

export async function deleteItinerary(slug: string) {
  const client = getAdminClientSafe()
  const { error } = await client.from("cms_itineraries").delete().eq("slug", slug)

  if (error) {
    throw error
  }
}

export async function upsertTestimonial(record: TestimonialRecord & { isPublished?: boolean }) {
  const client = getAdminClientSafe()
  const { error } = await client.from("cms_testimonials").upsert([
    {
      id: record.id,
      name: record.name,
      location: record.location,
      country: record.country,
      image: record.image,
      rating: record.rating,
      quote: record.quote,
      tour: record.tour,
      sort_order: record.sortOrder,
      is_published: record.isPublished ?? true,
    },
  ], { onConflict: "id" })

  if (error) {
    throw error
  }
}

export async function deleteTestimonial(id: string) {
  const client = getAdminClientSafe()
  const { error } = await client.from("cms_testimonials").delete().eq("id", id)

  if (error) {
    throw error
  }
}

export async function upsertPartner(record: PartnerRecord & { isPublished?: boolean }) {
  const client = getAdminClientSafe()
  const { error } = await client.from("cms_partners").upsert([
    {
      id: record.id,
      name: record.name,
      logo: record.logo,
      website_url: record.websiteUrl,
      width: record.width,
      height: record.height,
      sort_order: record.sortOrder,
      is_published: record.isPublished ?? true,
    },
  ], { onConflict: "id" })

  if (error) {
    throw error
  }
}

export async function deletePartner(id: string) {
  const client = getAdminClientSafe()
  const { error } = await client.from("cms_partners").delete().eq("id", id)

  if (error) {
    throw error
  }
}

export async function createInquiry(input: InquiryInsert) {
  const client = getAdminClientSafe()
  const inquiry = inquiryInsertSchema.parse(input)

  const { error } = await client.from("cms_inquiries").insert([
    {
      inquiry_type: inquiry.inquiryType,
      locale: inquiry.locale,
      source_page: inquiry.sourcePage,
      tour_slug: inquiry.tourSlug,
      tour_name: inquiry.tourName,
      full_name: inquiry.fullName,
      nationality: inquiry.nationality,
      email: inquiry.email,
      phone: inquiry.phone,
      preferred_travel_date: inquiry.preferredTravelDate || null,
      accommodation: inquiry.accommodation,
      adults: inquiry.adults,
      children: inquiry.children,
      special_requests: inquiry.specialRequests,
      payload: inquiry.payload,
    },
  ])

  if (error) {
    throw error
  }
}

export async function updateInquiryStatus(id: string, status: "new" | "contacted" | "closed") {
  const client = getAdminClientSafe()
  const { error } = await client.from("cms_inquiries").update({ status }).eq("id", id)

  if (error) {
    throw error
  }
}
