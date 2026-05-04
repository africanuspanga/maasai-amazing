import { z } from "zod"
import cmsSeed from "@/content/cms-seed.json"

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
  key: z.enum(["northern", "zanzibar", "southern"]),
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
  category: z.enum(["northern", "zanzibar", "safari"]),
  featuredSection: z.enum(["northern", "zanzibar", "southern"]).nullable(),
  sortOrder: z.number(),
  bookTourName: z.string().nullable(),
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

export type GlobalSettings = z.infer<typeof globalSettingsSchema>
export type HomeContent = z.infer<typeof homeContentSchema>
export type AboutContent = z.infer<typeof aboutContentSchema>
export type ContactContent = z.infer<typeof contactContentSchema>
export type ItinerariesIndexContent = z.infer<typeof itinerariesIndexContentSchema>
export type ItineraryRecord = z.infer<typeof itineraryRecordSchema>
export type TestimonialRecord = z.infer<typeof testimonialRecordSchema>
export type PartnerRecord = z.infer<typeof partnerRecordSchema>
export type InquiryInsert = z.infer<typeof inquiryInsertSchema>
