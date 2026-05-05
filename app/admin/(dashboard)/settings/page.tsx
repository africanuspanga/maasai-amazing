import {
  saveAboutSettingsAction,
  saveContactSettingsAction,
  saveGlobalSettingsAction,
  saveHomeSettingsAction,
  saveItinerariesIndexSettingsAction,
} from "@/app/admin/actions"
import { HomeStructuredFields } from "@/components/admin/home-structured-fields"
import { getPublicImageSuggestions } from "@/lib/cms/media"
import {
  getAboutContent,
  getContactContent,
  getGlobalSettings,
  getHomeContent,
  getItinerariesIndexContent,
  getPublishedItineraries,
} from "@/lib/cms/service"

const adminFormClassName =
  "space-y-4 [&_input]:text-base [&_textarea]:text-base [&_select]:text-base [&_button]:touch-manipulation"

function CardSection({
  title,
  description,
  children,
}: {
  title: string
  description: string
  children: React.ReactNode
}) {
  return (
    <details open className="group rounded-[2rem] border border-[#eadcc8] bg-white shadow-sm">
      <summary className="cursor-pointer list-none px-4 py-4 sm:px-6 sm:py-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-serif font-bold text-[#210c00] sm:text-2xl">{title}</h2>
            <p className="mt-2 text-sm text-gray-600">{description}</p>
          </div>
          <span className="text-xs font-medium uppercase tracking-[0.22em] text-[#c24503]">
            Tap to expand or collapse
          </span>
        </div>
      </summary>
      <div className="border-t border-[#eadcc8] px-4 py-5 sm:px-6">{children}</div>
    </details>
  )
}

function Field({
  label,
  name,
  defaultValue,
  type = "text",
}: {
  label: string
  name: string
  defaultValue: string
  type?: string
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-[#210c00]">{label}</span>
      <input
        name={name}
        type={type}
        defaultValue={defaultValue}
        className="w-full rounded-2xl border border-[#d9c3a8] px-4 py-3 text-base outline-none transition focus:border-[#f88518] focus:ring-2 focus:ring-[#f88518]/20"
      />
    </label>
  )
}

function TextareaField({
  label,
  name,
  defaultValue,
  rows = 4,
  mono = false,
}: {
  label: string
  name: string
  defaultValue: string
  rows?: number
  mono?: boolean
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-[#210c00]">{label}</span>
      <textarea
        name={name}
        rows={rows}
        defaultValue={defaultValue}
        className={`w-full rounded-2xl border border-[#d9c3a8] px-4 py-3 text-base outline-none transition focus:border-[#f88518] focus:ring-2 focus:ring-[#f88518]/20 ${mono ? "font-mono text-sm" : ""}`}
      />
    </label>
  )
}

function SaveButton({ label = "Save Changes" }: { label?: string }) {
  return (
    <div className="pt-2">
      <button
        type="submit"
        className="w-full rounded-full bg-[#f88518] px-5 py-3 text-base font-semibold text-white transition hover:bg-[#c24503] sm:w-auto"
      >
        {label}
      </button>
    </div>
  )
}

export default async function AdminSettingsPage({
  searchParams,
}: {
  searchParams: Promise<{ saved?: string }>
}) {
  const params = await searchParams
  const [globalSettings, homeContent, aboutContent, contactContent, itinerariesIndexContent, availableItineraries, imageSuggestions] = await Promise.all([
    getGlobalSettings(),
    getHomeContent(),
    getAboutContent(),
    getContactContent(),
    getItinerariesIndexContent(),
    getPublishedItineraries(),
    getPublicImageSuggestions(),
  ])

  return (
    <div className="space-y-6 sm:space-y-8">
      <section className="rounded-[2rem] border border-[#eadcc8] bg-white p-4 shadow-sm sm:p-6">
        <h1 className="text-2xl font-serif font-bold text-[#210c00] sm:text-3xl">Page Settings</h1>
        <p className="mt-2 max-w-3xl text-gray-600">
          These sections control the editable page content stored in Supabase. Simple text fields are broken out
          below, while repeatable areas use JSON so we can keep the current design flexible without forcing code
          changes every time the owner wants to tweak a card list.
        </p>
        {params.saved ? (
          <div className="mt-4 rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
            Saved successfully.
          </div>
        ) : null}
      </section>

      <CardSection
        title="Global Brand & Contact"
        description="Used across the footer, WhatsApp links, booking modal, contact blocks, and structured data."
      >
        <form action={saveGlobalSettingsAction} className={adminFormClassName}>
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Company Name" name="companyName" defaultValue={globalSettings.companyName} />
            <Field label="Company Tagline" name="companyTagline" defaultValue={globalSettings.companyTagline} />
            <Field label="Contact Email" name="contactEmail" defaultValue={globalSettings.contactEmail} type="email" />
            <Field label="Admin Email" name="adminEmail" defaultValue={globalSettings.adminEmail} type="email" />
            <Field label="Phone Number" name="phoneNumber" defaultValue={globalSettings.phoneNumber} />
            <Field label="Phone Display" name="phoneDisplay" defaultValue={globalSettings.phoneDisplay} />
            <Field label="WhatsApp Number" name="whatsappNumber" defaultValue={globalSettings.whatsappNumber} />
            <Field label="WhatsApp Display" name="whatsappDisplay" defaultValue={globalSettings.whatsappDisplay} />
            <Field label="Response Time Label" name="responseTimeLabel" defaultValue={globalSettings.responseTimeLabel} />
            <Field
              label="Emergency Availability Label"
              name="emergencyAvailabilityLabel"
              defaultValue={globalSettings.emergencyAvailabilityLabel}
            />
            <Field label="Timezone Label" name="timezoneLabel" defaultValue={globalSettings.timezoneLabel} />
          </div>
          <TextareaField
            label="Footer Description"
            name="footerDescription"
            defaultValue={globalSettings.footerDescription}
            rows={3}
          />
          <TextareaField
            label="Address Lines (one line per row)"
            name="addressLines"
            defaultValue={globalSettings.addressLines.join("\n")}
            rows={4}
          />
          <TextareaField
            label="Business Hours (one line per row)"
            name="businessHours"
            defaultValue={globalSettings.businessHours.join("\n")}
            rows={4}
          />
          <TextareaField
            label="Trust Stats JSON"
            name="trustStats"
            defaultValue={JSON.stringify(globalSettings.trustStats, null, 2)}
            rows={10}
            mono
          />
          <SaveButton />
        </form>
      </CardSection>

      <CardSection
        title="Home Page"
        description="Controls homepage hero copy, promoted itinerary cards, destination cards, and CTA text with structured fields instead of raw JSON."
      >
        <form action={saveHomeSettingsAction} className={adminFormClassName}>
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Hero Badge" name="heroBadge" defaultValue={homeContent.heroBadge} />
            <Field label="Hero Title" name="heroTitle" defaultValue={homeContent.heroTitle} />
            <Field label="Hero Primary CTA Label" name="heroPrimaryCtaLabel" defaultValue={homeContent.heroPrimaryCtaLabel} />
            <Field label="Hero Primary CTA Href" name="heroPrimaryCtaHref" defaultValue={homeContent.heroPrimaryCtaHref} />
            <Field label="Hero Secondary CTA Label" name="heroSecondaryCtaLabel" defaultValue={homeContent.heroSecondaryCtaLabel} />
            <Field label="Hero Secondary CTA Href" name="heroSecondaryCtaHref" defaultValue={homeContent.heroSecondaryCtaHref} />
            <Field label="About Eyebrow" name="aboutEyebrow" defaultValue={homeContent.aboutEyebrow} />
            <Field label="About Title" name="aboutTitle" defaultValue={homeContent.aboutTitle} />
            <Field label="About CTA Label" name="aboutCtaLabel" defaultValue={homeContent.aboutCtaLabel} />
            <Field label="About CTA Href" name="aboutCtaHref" defaultValue={homeContent.aboutCtaHref} />
            <Field label="About Image" name="aboutImage" defaultValue={homeContent.aboutImage} />
            <Field label="Rating Label" name="ratingLabel" defaultValue={homeContent.ratingLabel} />
            <Field label="Why Eyebrow" name="whyEyebrow" defaultValue={homeContent.whyEyebrow} />
            <Field label="Why Title" name="whyTitle" defaultValue={homeContent.whyTitle} />
            <Field label="Destinations Eyebrow" name="destinationsEyebrow" defaultValue={homeContent.destinationsEyebrow} />
            <Field label="Destinations Title" name="destinationsTitle" defaultValue={homeContent.destinationsTitle} />
            <Field label="Partners Title" name="partnersTitle" defaultValue={homeContent.partnersTitle} />
            <Field label="Testimonials Title" name="testimonialsTitle" defaultValue={homeContent.testimonialsTitle} />
            <Field label="Testimonials Rating Label" name="testimonialsRatingLabel" defaultValue={homeContent.testimonialsRatingLabel} />
            <Field
              label="Testimonials Happy Travelers Label"
              name="testimonialsHappyTravelersLabel"
              defaultValue={homeContent.testimonialsHappyTravelersLabel}
            />
            <Field label="CTA Title" name="ctaTitle" defaultValue={homeContent.ctaTitle} />
            <Field label="CTA Primary Label" name="ctaPrimaryLabel" defaultValue={homeContent.ctaPrimaryLabel} />
            <Field label="CTA Primary Href" name="ctaPrimaryHref" defaultValue={homeContent.ctaPrimaryHref} />
            <Field label="CTA Secondary Label" name="ctaSecondaryLabel" defaultValue={homeContent.ctaSecondaryLabel} />
          </div>
          <TextareaField label="Hero Subtitle" name="heroSubtitle" defaultValue={homeContent.heroSubtitle} rows={3} />
          <TextareaField label="About Body" name="aboutBody" defaultValue={homeContent.aboutBody} rows={5} />
          <TextareaField label="Why Subtitle" name="whySubtitle" defaultValue={homeContent.whySubtitle} rows={3} />
          <TextareaField
            label="Destinations Subtitle"
            name="destinationsSubtitle"
            defaultValue={homeContent.destinationsSubtitle}
            rows={3}
          />
          <TextareaField label="Partners Subtitle" name="partnersSubtitle" defaultValue={homeContent.partnersSubtitle} rows={3} />
          <TextareaField
            label="Testimonials Subtitle"
            name="testimonialsSubtitle"
            defaultValue={homeContent.testimonialsSubtitle}
            rows={3}
          />
          <TextareaField label="CTA Subtitle" name="ctaSubtitle" defaultValue={homeContent.ctaSubtitle} rows={3} />
          <HomeStructuredFields
            initialContent={homeContent}
            availableItineraries={availableItineraries}
            imageSuggestions={imageSuggestions}
          />
          <SaveButton />
        </form>
      </CardSection>

      <CardSection
        title="About Page"
        description="Controls the brand story, expertise items, and about-page CTA block."
      >
        <form action={saveAboutSettingsAction} className={adminFormClassName}>
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Hero Title" name="heroTitle" defaultValue={aboutContent.heroTitle} />
            <Field label="Hero Subtitle" name="heroSubtitle" defaultValue={aboutContent.heroSubtitle} />
            <Field label="Story Title" name="storyTitle" defaultValue={aboutContent.storyTitle} />
            <Field label="Story Image" name="storyImage" defaultValue={aboutContent.storyImage} />
            <Field label="Why Title" name="whyTitle" defaultValue={aboutContent.whyTitle} />
            <Field label="Expertise Title" name="expertiseTitle" defaultValue={aboutContent.expertiseTitle} />
            <Field label="Expertise Image" name="expertiseImage" defaultValue={aboutContent.expertiseImage} />
            <Field label="CTA Title" name="ctaTitle" defaultValue={aboutContent.ctaTitle} />
            <Field label="CTA Primary Label" name="ctaPrimaryLabel" defaultValue={aboutContent.ctaPrimaryLabel} />
            <Field label="CTA Primary Href" name="ctaPrimaryHref" defaultValue={aboutContent.ctaPrimaryHref} />
            <Field label="CTA Secondary Label" name="ctaSecondaryLabel" defaultValue={aboutContent.ctaSecondaryLabel} />
          </div>
          <TextareaField
            label="Story Paragraphs (one paragraph per line)"
            name="storyParagraphs"
            defaultValue={aboutContent.storyParagraphs.join("\n")}
            rows={6}
          />
          <TextareaField label="Why Subtitle" name="whySubtitle" defaultValue={aboutContent.whySubtitle} rows={3} />
          <TextareaField label="Expertise Body" name="expertiseBody" defaultValue={aboutContent.expertiseBody} rows={5} />
          <TextareaField label="CTA Subtitle" name="ctaSubtitle" defaultValue={aboutContent.ctaSubtitle} rows={3} />
          <TextareaField
            label="Story Stats JSON"
            name="storyStats"
            defaultValue={JSON.stringify(aboutContent.storyStats, null, 2)}
            rows={10}
            mono
          />
          <TextareaField
            label="Why Items JSON"
            name="whyItems"
            defaultValue={JSON.stringify(aboutContent.whyItems, null, 2)}
            rows={14}
            mono
          />
          <TextareaField
            label="Expertise Items JSON"
            name="expertiseItems"
            defaultValue={JSON.stringify(aboutContent.expertiseItems, null, 2)}
            rows={10}
            mono
          />
          <SaveButton />
        </form>
      </CardSection>

      <CardSection
        title="Contact Page"
        description="Controls the contact page hero, experience cards, selling bullets, and location cards."
      >
        <form action={saveContactSettingsAction} className={adminFormClassName}>
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Hero Title" name="heroTitle" defaultValue={contactContent.heroTitle} />
            <Field label="Info Title" name="infoTitle" defaultValue={contactContent.infoTitle} />
            <Field label="Experience Title" name="experienceTitle" defaultValue={contactContent.experienceTitle} />
            <Field label="Why Choose Title" name="whyChooseTitle" defaultValue={contactContent.whyChooseTitle} />
            <Field label="Find Us Title" name="findUsTitle" defaultValue={contactContent.findUsTitle} />
          </div>
          <TextareaField label="Hero Subtitle" name="heroSubtitle" defaultValue={contactContent.heroSubtitle} rows={3} />
          <TextareaField label="Info Subtitle" name="infoSubtitle" defaultValue={contactContent.infoSubtitle} rows={4} />
          <TextareaField
            label="Why Choose Items (one bullet per line)"
            name="whyChooseItems"
            defaultValue={contactContent.whyChooseItems.join("\n")}
            rows={6}
          />
          <TextareaField label="Find Us Subtitle" name="findUsSubtitle" defaultValue={contactContent.findUsSubtitle} rows={3} />
          <TextareaField
            label="Experience Cards JSON"
            name="experienceCards"
            defaultValue={JSON.stringify(contactContent.experienceCards, null, 2)}
            rows={16}
            mono
          />
          <TextareaField
            label="Location Cards JSON"
            name="locationCards"
            defaultValue={JSON.stringify(contactContent.locationCards, null, 2)}
            rows={12}
            mono
          />
          <SaveButton />
        </form>
      </CardSection>

      <CardSection
        title="Itineraries Index Page"
        description="Controls the `/itineraries` hero, section headers for destinations and routes, and CTA text."
      >
        <form action={saveItinerariesIndexSettingsAction} className={adminFormClassName}>
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Hero Title" name="heroTitle" defaultValue={itinerariesIndexContent.heroTitle} />
            <Field label="Hero Image" name="heroImage" defaultValue={itinerariesIndexContent.heroImage} />
            <Field label="Destinations Title" name="destinationTitle" defaultValue={itinerariesIndexContent.destinationTitle} />
            <Field label="Kilimanjaro Title" name="kilimanjaroTitle" defaultValue={itinerariesIndexContent.kilimanjaroTitle} />
            <Field label="Northern Title" name="northernTitle" defaultValue={itinerariesIndexContent.northernTitle} />
            <Field label="Zanzibar Title" name="zanzibarTitle" defaultValue={itinerariesIndexContent.zanzibarTitle} />
            <Field label="Southern Title" name="southernTitle" defaultValue={itinerariesIndexContent.southernTitle} />
            <Field label="CTA Title" name="ctaTitle" defaultValue={itinerariesIndexContent.ctaTitle} />
            <Field label="CTA Primary Label" name="ctaPrimaryLabel" defaultValue={itinerariesIndexContent.ctaPrimaryLabel} />
            <Field label="CTA Primary Href" name="ctaPrimaryHref" defaultValue={itinerariesIndexContent.ctaPrimaryHref} />
            <Field
              label="CTA Secondary Label"
              name="ctaSecondaryLabel"
              defaultValue={itinerariesIndexContent.ctaSecondaryLabel}
            />
          </div>
          <TextareaField label="Hero Subtitle" name="heroSubtitle" defaultValue={itinerariesIndexContent.heroSubtitle} rows={3} />
          <TextareaField
            label="Destinations Subtitle"
            name="destinationSubtitle"
            defaultValue={itinerariesIndexContent.destinationSubtitle}
            rows={3}
          />
          <TextareaField
            label="Kilimanjaro Subtitle"
            name="kilimanjaroSubtitle"
            defaultValue={itinerariesIndexContent.kilimanjaroSubtitle}
            rows={3}
          />
          <TextareaField
            label="Northern Subtitle"
            name="northernSubtitle"
            defaultValue={itinerariesIndexContent.northernSubtitle}
            rows={3}
          />
          <TextareaField
            label="Zanzibar Subtitle"
            name="zanzibarSubtitle"
            defaultValue={itinerariesIndexContent.zanzibarSubtitle}
            rows={3}
          />
          <TextareaField
            label="Southern Subtitle"
            name="southernSubtitle"
            defaultValue={itinerariesIndexContent.southernSubtitle}
            rows={3}
          />
          <TextareaField label="CTA Subtitle" name="ctaSubtitle" defaultValue={itinerariesIndexContent.ctaSubtitle} rows={3} />
          <SaveButton />
        </form>
      </CardSection>
    </div>
  )
}
