"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { clearAdminSession, createAdminSession, requireAdminSession, verifyAdminCredentials } from "@/lib/admin-session"
import {
  aboutContentSchema,
  contactContentSchema,
  globalSettingsSchema,
  homeContentSchema,
  itinerariesIndexContentSchema,
  normalizeItineraryPageDetails,
  itineraryRecordSchema,
  partnerRecordSchema,
  testimonialRecordSchema,
  zanzibarPageContentSchema,
} from "@/lib/cms/schema"
import {
  deleteItinerary,
  deletePartner,
  deleteTestimonial,
  updateInquiryStatus,
  upsertCmsSetting,
  upsertItinerary,
  upsertPartner,
  upsertTestimonial,
} from "@/lib/cms/service"

function getString(formData: FormData, field: string) {
  return String(formData.get(field) ?? "").trim()
}

function getOptionalString(formData: FormData, field: string) {
  const value = getString(formData, field)
  return value ? value : null
}

function getBoolean(formData: FormData, field: string) {
  return formData.get(field) === "on"
}

function getNumber(formData: FormData, field: string) {
  return Number(getString(formData, field) || 0)
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

function parseJsonField(formData: FormData, field: string) {
  const raw = getString(formData, field)
  return raw ? JSON.parse(raw) : []
}

function parseLinesField(formData: FormData, field: string) {
  return getString(formData, field)
    .split(/\r?\n/)
    .map((item) => item.trim())
    .filter(Boolean)
}

function revalidateCmsPaths() {
  revalidatePath("/", "layout")
  revalidatePath("/")
  revalidatePath("/about")
  revalidatePath("/contact")
  revalidatePath("/itineraries")
  revalidatePath("/zanzibar")
  revalidatePath("/admin")
  revalidatePath("/admin/settings")
  revalidatePath("/admin/itineraries")
}

export async function loginAction(formData: FormData) {
  const email = getString(formData, "email")
  const password = getString(formData, "password")

  if (!(await verifyAdminCredentials(email, password))) {
    redirect("/admin/login?error=invalid")
  }

  await createAdminSession()
  redirect("/admin")
}

export async function logoutAction() {
  await clearAdminSession()
  redirect("/admin/login")
}

export async function saveGlobalSettingsAction(formData: FormData) {
  await requireAdminSession()

  const payload = globalSettingsSchema.parse({
    companyName: getString(formData, "companyName"),
    companyTagline: getString(formData, "companyTagline"),
    footerDescription: getString(formData, "footerDescription"),
    contactEmail: getString(formData, "contactEmail"),
    adminEmail: getString(formData, "adminEmail"),
    phoneNumber: getString(formData, "phoneNumber"),
    phoneDisplay: getString(formData, "phoneDisplay"),
    whatsappNumber: getString(formData, "whatsappNumber"),
    whatsappDisplay: getString(formData, "whatsappDisplay"),
    addressLines: parseLinesField(formData, "addressLines"),
    responseTimeLabel: getString(formData, "responseTimeLabel"),
    emergencyAvailabilityLabel: getString(formData, "emergencyAvailabilityLabel"),
    businessHours: parseLinesField(formData, "businessHours"),
    timezoneLabel: getString(formData, "timezoneLabel"),
    trustStats: parseJsonField(formData, "trustStats"),
  })

  await upsertCmsSetting("global", "Global Settings", payload)
  revalidateCmsPaths()
  redirect("/admin/settings?saved=global")
}

export async function saveHomeSettingsAction(formData: FormData) {
  await requireAdminSession()

  const payload = homeContentSchema.parse({
    heroBadge: getString(formData, "heroBadge"),
    heroTitle: getString(formData, "heroTitle"),
    heroSubtitle: getString(formData, "heroSubtitle"),
    heroPrimaryCtaLabel: getString(formData, "heroPrimaryCtaLabel"),
    heroPrimaryCtaHref: getString(formData, "heroPrimaryCtaHref"),
    heroSecondaryCtaLabel: getString(formData, "heroSecondaryCtaLabel"),
    heroSecondaryCtaHref: getString(formData, "heroSecondaryCtaHref"),
    stats: parseJsonField(formData, "stats"),
    aboutEyebrow: getString(formData, "aboutEyebrow"),
    aboutTitle: getString(formData, "aboutTitle"),
    aboutBody: getString(formData, "aboutBody"),
    aboutCtaLabel: getString(formData, "aboutCtaLabel"),
    aboutCtaHref: getString(formData, "aboutCtaHref"),
    aboutImage: getString(formData, "aboutImage"),
    ratingLabel: getString(formData, "ratingLabel"),
    whyEyebrow: getString(formData, "whyEyebrow"),
    whyTitle: getString(formData, "whyTitle"),
    whySubtitle: getString(formData, "whySubtitle"),
    whyItems: parseJsonField(formData, "whyItems"),
    destinationsEyebrow: getString(formData, "destinationsEyebrow"),
    destinationsTitle: getString(formData, "destinationsTitle"),
    destinationsSubtitle: getString(formData, "destinationsSubtitle"),
    destinationCards: parseJsonField(formData, "destinationCards"),
    featuredSections: parseJsonField(formData, "featuredSections"),
    partnersTitle: getString(formData, "partnersTitle"),
    partnersSubtitle: getString(formData, "partnersSubtitle"),
    testimonialsTitle: getString(formData, "testimonialsTitle"),
    testimonialsSubtitle: getString(formData, "testimonialsSubtitle"),
    testimonialsRatingLabel: getString(formData, "testimonialsRatingLabel"),
    testimonialsHappyTravelersLabel: getString(formData, "testimonialsHappyTravelersLabel"),
    ctaTitle: getString(formData, "ctaTitle"),
    ctaSubtitle: getString(formData, "ctaSubtitle"),
    ctaPrimaryLabel: getString(formData, "ctaPrimaryLabel"),
    ctaPrimaryHref: getString(formData, "ctaPrimaryHref"),
    ctaSecondaryLabel: getString(formData, "ctaSecondaryLabel"),
  })

  await upsertCmsSetting("home", "Home Page", payload)
  revalidateCmsPaths()
  redirect("/admin/settings?saved=home")
}

export async function saveAboutSettingsAction(formData: FormData) {
  await requireAdminSession()

  const payload = aboutContentSchema.parse({
    heroTitle: getString(formData, "heroTitle"),
    heroSubtitle: getString(formData, "heroSubtitle"),
    storyTitle: getString(formData, "storyTitle"),
    storyParagraphs: parseLinesField(formData, "storyParagraphs"),
    storyImage: getString(formData, "storyImage"),
    storyStats: parseJsonField(formData, "storyStats"),
    whyTitle: getString(formData, "whyTitle"),
    whySubtitle: getString(formData, "whySubtitle"),
    whyItems: parseJsonField(formData, "whyItems"),
    expertiseTitle: getString(formData, "expertiseTitle"),
    expertiseBody: getString(formData, "expertiseBody"),
    expertiseImage: getString(formData, "expertiseImage"),
    expertiseItems: parseJsonField(formData, "expertiseItems"),
    ctaTitle: getString(formData, "ctaTitle"),
    ctaSubtitle: getString(formData, "ctaSubtitle"),
    ctaPrimaryLabel: getString(formData, "ctaPrimaryLabel"),
    ctaPrimaryHref: getString(formData, "ctaPrimaryHref"),
    ctaSecondaryLabel: getString(formData, "ctaSecondaryLabel"),
  })

  await upsertCmsSetting("about", "About Page", payload)
  revalidateCmsPaths()
  redirect("/admin/settings?saved=about")
}

export async function saveContactSettingsAction(formData: FormData) {
  await requireAdminSession()

  const payload = contactContentSchema.parse({
    heroTitle: getString(formData, "heroTitle"),
    heroSubtitle: getString(formData, "heroSubtitle"),
    infoTitle: getString(formData, "infoTitle"),
    infoSubtitle: getString(formData, "infoSubtitle"),
    experienceTitle: getString(formData, "experienceTitle"),
    experienceCards: parseJsonField(formData, "experienceCards"),
    whyChooseTitle: getString(formData, "whyChooseTitle"),
    whyChooseItems: parseLinesField(formData, "whyChooseItems"),
    findUsTitle: getString(formData, "findUsTitle"),
    findUsSubtitle: getString(formData, "findUsSubtitle"),
    locationCards: parseJsonField(formData, "locationCards"),
  })

  await upsertCmsSetting("contact", "Contact Page", payload)
  revalidateCmsPaths()
  redirect("/admin/settings?saved=contact")
}

export async function saveZanzibarPageSettingsAction(formData: FormData) {
  await requireAdminSession()

  const payload = zanzibarPageContentSchema.parse({
    heroTitle: getString(formData, "heroTitle"),
    heroKicker: getString(formData, "heroKicker"),
    heroSubtitle: getString(formData, "heroSubtitle"),
    introTitle: getString(formData, "introTitle"),
    introBody: getString(formData, "introBody"),
    packagesTitle: getString(formData, "packagesTitle"),
    packagesSubtitle: getString(formData, "packagesSubtitle"),
    experiencesTitle: getString(formData, "experiencesTitle"),
    experiencesSubtitle: getString(formData, "experiencesSubtitle"),
    experiences: parseJsonField(formData, "experiences"),
    beachTitle: getString(formData, "beachTitle"),
    beachBody: getString(formData, "beachBody"),
    beachHighlights: parseLinesField(formData, "beachHighlights"),
    beachCtaLabel: getString(formData, "beachCtaLabel"),
    beachCtaHref: getString(formData, "beachCtaHref"),
    beachImage: getString(formData, "beachImage"),
    beachImageAlt: getString(formData, "beachImageAlt"),
    ctaTitle: getString(formData, "ctaTitle"),
    ctaSubtitle: getString(formData, "ctaSubtitle"),
    ctaPrimaryLabel: getString(formData, "ctaPrimaryLabel"),
    ctaPrimaryHref: getString(formData, "ctaPrimaryHref"),
    ctaSecondaryLabel: getString(formData, "ctaSecondaryLabel"),
    ctaSecondaryHref: getString(formData, "ctaSecondaryHref"),
  })

  await upsertCmsSetting("zanzibarPage", "Zanzibar Page", payload)
  revalidateCmsPaths()
  redirect("/admin/settings?saved=zanzibar")
}

export async function saveItinerariesIndexSettingsAction(formData: FormData) {
  await requireAdminSession()

  const payload = itinerariesIndexContentSchema.parse({
    heroTitle: getString(formData, "heroTitle"),
    heroSubtitle: getString(formData, "heroSubtitle"),
    heroImage: getString(formData, "heroImage"),
    destinationTitle: getString(formData, "destinationTitle"),
    destinationSubtitle: getString(formData, "destinationSubtitle"),
    kilimanjaroTitle: getString(formData, "kilimanjaroTitle"),
    kilimanjaroSubtitle: getString(formData, "kilimanjaroSubtitle"),
    northernTitle: getString(formData, "northernTitle"),
    northernSubtitle: getString(formData, "northernSubtitle"),
    zanzibarTitle: getString(formData, "zanzibarTitle"),
    zanzibarSubtitle: getString(formData, "zanzibarSubtitle"),
    southernTitle: getString(formData, "southernTitle"),
    southernSubtitle: getString(formData, "southernSubtitle"),
    ctaTitle: getString(formData, "ctaTitle"),
    ctaSubtitle: getString(formData, "ctaSubtitle"),
    ctaPrimaryLabel: getString(formData, "ctaPrimaryLabel"),
    ctaPrimaryHref: getString(formData, "ctaPrimaryHref"),
    ctaSecondaryLabel: getString(formData, "ctaSecondaryLabel"),
  })

  await upsertCmsSetting("itinerariesIndex", "Itineraries Index Page", payload)
  revalidateCmsPaths()
  redirect("/admin/settings?saved=itineraries")
}

export async function saveItineraryAction(formData: FormData) {
  await requireAdminSession()

  const title = getString(formData, "title")
  const slug = getString(formData, "slug") || slugify(title)
  const redirectMode = getString(formData, "redirectMode")

  const record = itineraryRecordSchema.parse({
    slug,
    title,
    shortTitle: getString(formData, "shortTitle") || title,
    featuredSubtitle: getOptionalString(formData, "featuredSubtitle"),
    duration: getString(formData, "duration"),
    image: getString(formData, "image"),
    destinations: getString(formData, "destinations"),
    groupSize: getString(formData, "groupSize"),
    description: getString(formData, "description"),
    highlights: parseLinesField(formData, "highlights"),
    priceFrom: getString(formData, "priceFrom"),
    category: getString(formData, "category"),
    featuredSection: getOptionalString(formData, "featuredSection"),
    sortOrder: getNumber(formData, "sortOrder"),
    bookTourName: getOptionalString(formData, "bookTourName"),
  })

  const rawDetails = getString(formData, "details")
  const detailsInput = rawDetails ? JSON.parse(rawDetails) : {}
  const details = normalizeItineraryPageDetails(detailsInput, record)

  await upsertItinerary({ ...record, details, isPublished: getBoolean(formData, "isPublished") })
  revalidateCmsPaths()
  revalidatePath(`/admin/itineraries/${slug}`)
  revalidatePath(`/itineraries/${slug}`)

  if (redirectMode === "editor") {
    redirect(`/admin/itineraries/${slug}?saved=1`)
  }

  redirect("/admin/itineraries?saved=1")
}

export async function deleteItineraryAction(formData: FormData) {
  await requireAdminSession()
  const slug = getString(formData, "slug")
  const redirectTo = getString(formData, "redirectTo")

  await deleteItinerary(slug)
  revalidateCmsPaths()
  revalidatePath(`/admin/itineraries/${slug}`)
  revalidatePath(`/itineraries/${slug}`)
  redirect(redirectTo || "/admin/itineraries?deleted=1")
}

export async function saveTestimonialAction(formData: FormData) {
  await requireAdminSession()

  const record = testimonialRecordSchema.parse({
    id: getString(formData, "id"),
    name: getString(formData, "name"),
    location: getString(formData, "location"),
    country: getOptionalString(formData, "country"),
    image: getString(formData, "image"),
    rating: getNumber(formData, "rating"),
    quote: getString(formData, "quote"),
    tour: getString(formData, "tour"),
    sortOrder: getNumber(formData, "sortOrder"),
  })

  await upsertTestimonial({ ...record, isPublished: getBoolean(formData, "isPublished") })
  revalidateCmsPaths()
  redirect("/admin/testimonials?saved=1")
}

export async function deleteTestimonialAction(formData: FormData) {
  await requireAdminSession()
  await deleteTestimonial(getString(formData, "id"))
  revalidateCmsPaths()
  redirect("/admin/testimonials?deleted=1")
}

export async function savePartnerAction(formData: FormData) {
  await requireAdminSession()

  const record = partnerRecordSchema.parse({
    id: getString(formData, "id"),
    name: getString(formData, "name"),
    logo: getString(formData, "logo"),
    websiteUrl: getOptionalString(formData, "websiteUrl"),
    width: getNumber(formData, "width"),
    height: getNumber(formData, "height"),
    sortOrder: getNumber(formData, "sortOrder"),
  })

  await upsertPartner({ ...record, isPublished: getBoolean(formData, "isPublished") })
  revalidateCmsPaths()
  redirect("/admin/partners?saved=1")
}

export async function deletePartnerAction(formData: FormData) {
  await requireAdminSession()
  await deletePartner(getString(formData, "id"))
  revalidateCmsPaths()
  redirect("/admin/partners?deleted=1")
}

export async function updateInquiryStatusAction(formData: FormData) {
  await requireAdminSession()

  const status = getString(formData, "status")

  if (status !== "new" && status !== "contacted" && status !== "closed") {
    redirect("/admin/inquiries?error=status")
  }

  await updateInquiryStatus(getString(formData, "id"), status)
  revalidateCmsPaths()
  redirect("/admin/inquiries?updated=1")
}
