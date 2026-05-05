import { z } from "zod"
import cmsSeed from "@/content/cms-seed.json"

const itineraryCategorySchema = z.enum(["destination", "kilimanjaro", "northern", "zanzibar", "safari"])
const featuredSectionKeySchema = z.enum(["northern", "zanzibar", "southern"])
const itineraryPageThemeSchema = z.enum(["northern", "zanzibar", "southern", "mountain"])

const statSchema = z.object({
  value: z.string(),
  label: z.string(),
})

const destinationCardSchema = z.object({
  title: z.string(),
  description: z.string(),
  image: z.string(),
  href: z.string(),
  ctaLabel: z.string(),
  isLarge: z.boolean(),
})

const featureSectionSchema = z.object({
  key: featuredSectionKeySchema,
  eyebrow: z.string(),
  title: z.string(),
  subtitle: z.string(),
  ctaLabel: z.string(),
  ctaHref: z.string(),
  slugs: z.array(z.string()),
})

const iconTextItemSchema = z.object({
  icon: z.string(),
  title: z.string(),
  description: z.string(),
})

const iconLabelItemSchema = z.object({
  icon: z.string(),
  label: z.string(),
})

const imageCardSchema = z.object({
  title: z.string(),
  description: z.string(),
  image: z.string(),
  alt: z.string(),
})

const locationCardSchema = z.object({
  icon: z.string(),
  title: z.string(),
  description: z.string(),
})

const keyValueItemSchema = z.object({
  label: z.string(),
  value: z.string(),
})

const pricingItemSchema = z.object({
  label: z.string(),
  price: z.string(),
  note: z.string().nullable().default(null),
})

const itineraryDaySchema = z.object({
  title: z.string(),
  description: z.string(),
})

export const globalSettingsSchema = z.object({
  companyName: z.string(),
  companyTagline: z.string(),
  footerDescription: z.string(),
  contactEmail: z.string(),
  adminEmail: z.string(),
  phoneNumber: z.string(),
  phoneDisplay: z.string(),
  whatsappNumber: z.string(),
  whatsappDisplay: z.string(),
  addressLines: z.array(z.string()),
  responseTimeLabel: z.string(),
  emergencyAvailabilityLabel: z.string(),
  businessHours: z.array(z.string()),
  timezoneLabel: z.string(),
  trustStats: z.array(statSchema),
})

export const homeContentSchema = z.object({
  heroBadge: z.string(),
  heroTitle: z.string(),
  heroSubtitle: z.string(),
  heroPrimaryCtaLabel: z.string(),
  heroPrimaryCtaHref: z.string(),
  heroSecondaryCtaLabel: z.string(),
  heroSecondaryCtaHref: z.string(),
  stats: z.array(statSchema),
  aboutEyebrow: z.string(),
  aboutTitle: z.string(),
  aboutBody: z.string(),
  aboutCtaLabel: z.string(),
  aboutCtaHref: z.string(),
  aboutImage: z.string(),
  ratingLabel: z.string(),
  whyEyebrow: z.string(),
  whyTitle: z.string(),
  whySubtitle: z.string(),
  whyItems: z.array(iconTextItemSchema),
  destinationsEyebrow: z.string(),
  destinationsTitle: z.string(),
  destinationsSubtitle: z.string(),
  destinationCards: z.array(destinationCardSchema),
  featuredSections: z.array(featureSectionSchema),
  partnersTitle: z.string(),
  partnersSubtitle: z.string(),
  testimonialsTitle: z.string(),
  testimonialsSubtitle: z.string(),
  testimonialsRatingLabel: z.string(),
  testimonialsHappyTravelersLabel: z.string(),
  ctaTitle: z.string(),
  ctaSubtitle: z.string(),
  ctaPrimaryLabel: z.string(),
  ctaPrimaryHref: z.string(),
  ctaSecondaryLabel: z.string(),
})

export const aboutContentSchema = z.object({
  heroTitle: z.string(),
  heroSubtitle: z.string(),
  storyTitle: z.string(),
  storyParagraphs: z.array(z.string()),
  storyImage: z.string(),
  storyStats: z.array(statSchema),
  whyTitle: z.string(),
  whySubtitle: z.string(),
  whyItems: z.array(iconTextItemSchema),
  expertiseTitle: z.string(),
  expertiseBody: z.string(),
  expertiseImage: z.string(),
  expertiseItems: z.array(iconLabelItemSchema),
  ctaTitle: z.string(),
  ctaSubtitle: z.string(),
  ctaPrimaryLabel: z.string(),
  ctaPrimaryHref: z.string(),
  ctaSecondaryLabel: z.string(),
})

export const contactContentSchema = z.object({
  heroTitle: z.string(),
  heroSubtitle: z.string(),
  infoTitle: z.string(),
  infoSubtitle: z.string(),
  experienceTitle: z.string(),
  experienceCards: z.array(imageCardSchema),
  whyChooseTitle: z.string(),
  whyChooseItems: z.array(z.string()),
  findUsTitle: z.string(),
  findUsSubtitle: z.string(),
  locationCards: z.array(locationCardSchema),
})

export const itinerariesIndexContentSchema = z.object({
  heroTitle: z.string(),
  heroSubtitle: z.string(),
  heroImage: z.string(),
  destinationTitle: z.string().default("Featured Destinations"),
  destinationSubtitle: z
    .string()
    .default("Build awareness around the places, landscapes, and regions you want travelers to discover first."),
  kilimanjaroTitle: z.string().default("Kilimanjaro Routes"),
  kilimanjaroSubtitle: z
    .string()
    .default("Compare summit routes, climbing styles, and support levels for Africa's most iconic mountain."),
  northernTitle: z.string(),
  northernSubtitle: z.string(),
  zanzibarTitle: z.string(),
  zanzibarSubtitle: z.string(),
  southernTitle: z.string(),
  southernSubtitle: z.string(),
  ctaTitle: z.string(),
  ctaSubtitle: z.string(),
  ctaPrimaryLabel: z.string(),
  ctaPrimaryHref: z.string(),
  ctaSecondaryLabel: z.string(),
})

export const itineraryRecordSchema = z.object({
  slug: z.string(),
  title: z.string(),
  shortTitle: z.string(),
  featuredSubtitle: z.string().nullable(),
  duration: z.string(),
  image: z.string(),
  destinations: z.string(),
  groupSize: z.string(),
  description: z.string(),
  highlights: z.array(z.string()),
  priceFrom: z.string(),
  category: itineraryCategorySchema,
  featuredSection: featuredSectionKeySchema.nullable(),
  sortOrder: z.number(),
  bookTourName: z.string().nullable(),
})

export const itineraryPageDetailsSchema = z.object({
  pageTheme: itineraryPageThemeSchema.default("southern"),
  heroImage: z.string().default(""),
  heroAlt: z.string().default(""),
  heroEyebrow: z.string().default("Tailor-Made Journey"),
  heroTitle: z.string().default(""),
  heroSubtitle: z.string().default(""),
  heroFacts: z.array(keyValueItemSchema).default([]),
  overviewTitle: z.string().default("Tour Overview"),
  overviewParagraphs: z.array(z.string()).default([]),
  highlightsTitle: z.string().default("Highlights"),
  highlights: z.array(z.string()).default([]),
  itineraryTitle: z.string().default("Day-by-Day Plan"),
  itineraryDays: z.array(itineraryDaySchema).default([]),
  includedTitle: z.string().default("What's Included"),
  included: z.array(z.string()).default([]),
  excludedTitle: z.string().default("What's Not Included"),
  excluded: z.array(z.string()).default([]),
  pricingTitle: z.string().default("Pricing"),
  startingPriceLabel: z.string().default("Starting from"),
  startingPrice: z.string().default(""),
  pricingNote: z.string().nullable().default(null),
  pricingItems: z.array(pricingItemSchema).default([]),
  primaryCtaLabel: z.string().default("Book This Tour"),
  secondaryCtaLabel: z.string().default("WhatsApp Inquiry"),
  quickFacts: z.array(keyValueItemSchema).default([]),
  extraSectionTitle: z.string().default(""),
  extraSectionBody: z.string().default(""),
  seoTitle: z.string().nullable().default(null),
  seoDescription: z.string().nullable().default(null),
})

export const testimonialRecordSchema = z.object({
  id: z.string(),
  name: z.string(),
  location: z.string(),
  country: z.string().nullable(),
  image: z.string(),
  rating: z.number().int().min(1).max(5),
  quote: z.string(),
  tour: z.string(),
  sortOrder: z.number(),
})

export const partnerRecordSchema = z.object({
  id: z.string(),
  name: z.string(),
  logo: z.string(),
  websiteUrl: z.string().nullable(),
  width: z.number().int(),
  height: z.number().int(),
  sortOrder: z.number(),
})

export const inquiryInsertSchema = z.object({
  inquiryType: z.enum(["booking", "contact", "general"]).default("booking"),
  locale: z.string().optional(),
  sourcePage: z.string().optional(),
  tourSlug: z.string().optional(),
  tourName: z.string().optional(),
  fullName: z.string().min(1),
  nationality: z.string().optional(),
  email: z.string().email(),
  phone: z.string().min(1),
  preferredTravelDate: z.string().optional(),
  accommodation: z.string().optional(),
  adults: z.number().int().optional(),
  children: z.number().int().optional(),
  specialRequests: z.string().optional(),
  payload: z.record(z.string(), z.unknown()).default({}),
})

export const cmsSeedSchema = z.object({
  global: globalSettingsSchema,
  home: homeContentSchema,
  about: aboutContentSchema,
  contact: contactContentSchema,
  itinerariesIndex: itinerariesIndexContentSchema,
  itineraries: z.array(itineraryRecordSchema),
  testimonials: z.array(testimonialRecordSchema),
  partners: z.array(partnerRecordSchema),
})

export const defaultCmsContent = cmsSeedSchema.parse(cmsSeed)

function dedupeItems(items: Array<{ label: string; value: string }>) {
  return items.filter((item, index) => item.label && item.value && items.findIndex((entry) => entry.label === item.label) === index)
}

function getDefaultTheme(record: Pick<ItineraryRecord, "category" | "featuredSection" | "slug">) {
  if (record.slug.includes("kilimanjaro") || record.slug.includes("meru")) {
    return "mountain" as const
  }

  if (record.category === "kilimanjaro") {
    return "mountain" as const
  }

  if (record.category === "zanzibar") {
    return "zanzibar" as const
  }

  if (record.featuredSection === "southern" || record.category === "safari") {
    return "southern" as const
  }

  return "northern" as const
}

function getDefaultIncluded(theme: ItineraryPageTheme) {
  if (theme === "zanzibar") {
    return [
      "Private planning support before arrival",
      "Transfers and local coordination",
      "Professional local guides and hosts",
      "Experiences listed in your confirmed program",
      "Drinking water during excursions",
    ]
  }

  if (theme === "mountain") {
    return [
      "Experienced mountain crew and guide support",
      "Park permits and trek logistics",
      "Accommodation and meals as confirmed",
      "Safety briefings and route planning",
      "On-trip support from our local team",
    ]
  }

  return [
    "Private safari planning and local support",
    "Professional guide and transport as confirmed",
    "Accommodation and meals in your selected package",
    "Park and activity logistics included in your quote",
    "Drinking water during game drives and transfers",
  ]
}

function getDefaultExcluded(theme: ItineraryPageTheme) {
  if (theme === "zanzibar") {
    return [
      "International flights",
      "Travel insurance",
      "Visa fees when required",
      "Personal shopping and optional add-ons",
      "Tips for guides, drivers, and hotel staff",
    ]
  }

  if (theme === "mountain") {
    return [
      "International flights",
      "Travel and evacuation insurance",
      "Visa fees when required",
      "Personal trekking gear",
      "Crew tips and optional extras",
    ]
  }

  return [
    "International flights",
    "Travel insurance",
    "Visa fees when required",
    "Personal expenses and laundry",
    "Tips and optional activities",
  ]
}

export function createDefaultItineraryPageDetails(record: Pick<
  ItineraryRecord,
  "slug" | "title" | "featuredSubtitle" | "duration" | "image" | "destinations" | "groupSize" | "description" | "highlights" | "priceFrom" | "category" | "featuredSection"
>) {
  const pageTheme = getDefaultTheme(record)

  return itineraryPageDetailsSchema.parse({
    pageTheme,
    heroImage: record.image,
    heroAlt: record.title,
    heroEyebrow: pageTheme === "zanzibar" ? "Island Escape" : pageTheme === "mountain" ? "Mountain Adventure" : "Signature Safari",
    heroTitle: record.title,
    heroSubtitle: record.featuredSubtitle ?? record.description,
    heroFacts: dedupeItems([
      { label: "Duration", value: record.duration },
      { label: "Destinations", value: record.destinations },
      { label: "Group Size", value: record.groupSize },
    ]),
    overviewParagraphs: [
      record.description,
      "Every departure can be tailored around your dates, accommodation style, pace, and special interests.",
    ],
    highlights: record.highlights,
    included: getDefaultIncluded(pageTheme),
    excluded: getDefaultExcluded(pageTheme),
    startingPrice: record.priceFrom,
    pricingItems: record.priceFrom
      ? [
          {
            label: "Lead price",
            price: record.priceFrom,
            note: "Update this with your full pricing breakdown in admin.",
          },
        ]
      : [],
    quickFacts: dedupeItems([
      {
        label: "Category",
        value:
          record.category === "safari"
            ? "Southern Safari"
            : record.category === "zanzibar"
              ? "Zanzibar Tour"
              : record.category === "kilimanjaro"
                ? "Kilimanjaro Route"
                : record.category === "destination"
                  ? "Destination"
                  : "Northern Safari",
      },
      { label: "Best For", value: pageTheme === "mountain" ? "Climbers and adventure travelers" : pageTheme === "zanzibar" ? "Beach, culture, and relaxation" : "Wildlife and tailor-made safaris" },
      { label: "Destinations", value: record.destinations },
    ]),
  })
}

export function normalizeItineraryPageDetails(
  input: unknown,
  record: Pick<
    ItineraryRecord,
    "slug" | "title" | "featuredSubtitle" | "duration" | "image" | "destinations" | "groupSize" | "description" | "highlights" | "priceFrom" | "category" | "featuredSection"
  >,
) {
  const defaults = createDefaultItineraryPageDetails(record)

  if (!input || typeof input !== "object" || Array.isArray(input)) {
    return defaults
  }

  const parsed = itineraryPageDetailsSchema.safeParse({
    ...defaults,
    ...(input as Record<string, unknown>),
  })

  return parsed.success ? parsed.data : defaults
}

export type GlobalSettings = z.infer<typeof globalSettingsSchema>
export type HomeContent = z.infer<typeof homeContentSchema>
export type AboutContent = z.infer<typeof aboutContentSchema>
export type ContactContent = z.infer<typeof contactContentSchema>
export type ItinerariesIndexContent = z.infer<typeof itinerariesIndexContentSchema>
export type ItineraryRecord = z.infer<typeof itineraryRecordSchema>
export type ItineraryPageTheme = z.infer<typeof itineraryPageThemeSchema>
export type ItineraryPageDetails = z.infer<typeof itineraryPageDetailsSchema>
export type TestimonialRecord = z.infer<typeof testimonialRecordSchema>
export type PartnerRecord = z.infer<typeof partnerRecordSchema>
export type InquiryInsert = z.infer<typeof inquiryInsertSchema>
