"use client"

import { useState } from "react"
import type { HomeContent, ItineraryRecord } from "@/lib/cms/schema"

type FeaturedSection = HomeContent["featuredSections"][number]
type DestinationCard = HomeContent["destinationCards"][number]
type WhyItem = HomeContent["whyItems"][number]
type StatItem = HomeContent["stats"][number]

const featuredSectionOrder: FeaturedSection["key"][] = ["northern", "zanzibar", "southern"]

function SectionShell({
  title,
  description,
  children,
}: {
  title: string
  description: string
  children: React.ReactNode
}) {
  return (
    <div className="rounded-[1.75rem] border border-[#eadcc8] bg-[#fcfaf7] p-4 sm:p-5">
      <h3 className="text-lg font-semibold text-[#210c00]">{title}</h3>
      <p className="mt-1 text-sm text-gray-600">{description}</p>
      <div className="mt-4 space-y-4">{children}</div>
    </div>
  )
}

function SectionHeading({
  title,
  action,
}: {
  title: string
  action?: React.ReactNode
}) {
  return (
    <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c24503]">{title}</p>
      {action}
    </div>
  )
}

function AddButton({ onClick, label }: { onClick: () => void; label: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full rounded-full border border-[#d9c3a8] px-4 py-2.5 text-sm font-medium text-[#210c00] transition hover:border-[#f88518] hover:text-[#c24503] sm:w-auto"
    >
      {label}
    </button>
  )
}

function RemoveButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full rounded-full border border-red-200 px-3 py-2.5 text-xs font-semibold text-red-700 transition hover:bg-red-50 sm:w-auto"
    >
      Remove
    </button>
  )
}

function ImagePreview({ src, alt }: { src: string; alt: string }) {
  if (!src) {
    return null
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-[#eadcc8] bg-white">
      <img src={src} alt={alt} className="h-32 w-full object-cover sm:h-40" />
    </div>
  )
}

export function HomeStructuredFields({
  initialContent,
  availableItineraries,
  imageSuggestions,
}: {
  initialContent: HomeContent
  availableItineraries: ItineraryRecord[]
  imageSuggestions: string[]
}) {
  const [stats, setStats] = useState<StatItem[]>(initialContent.stats)
  const [whyItems, setWhyItems] = useState<WhyItem[]>(initialContent.whyItems)
  const [destinationCards, setDestinationCards] = useState<DestinationCard[]>(initialContent.destinationCards)
  const [featuredSections, setFeaturedSections] = useState<FeaturedSection[]>(
    featuredSectionOrder.map((key) => initialContent.featuredSections.find((section) => section.key === key) ?? {
      key,
      eyebrow: "",
      title: "",
      subtitle: "",
      ctaLabel: "",
      ctaHref: "",
      slugs: [],
    }),
  )

  const updateStat = (index: number, field: keyof StatItem, value: string) => {
    setStats((current) => current.map((item, itemIndex) => (itemIndex === index ? { ...item, [field]: value } : item)))
  }

  const updateWhyItem = (index: number, field: keyof WhyItem, value: string) => {
    setWhyItems((current) => current.map((item, itemIndex) => (itemIndex === index ? { ...item, [field]: value } : item)))
  }

  const updateDestinationCard = <K extends keyof DestinationCard>(index: number, field: K, value: DestinationCard[K]) => {
    setDestinationCards((current) => current.map((item, itemIndex) => (itemIndex === index ? { ...item, [field]: value } : item)))
  }

  const updateFeaturedSection = <K extends keyof FeaturedSection>(index: number, field: K, value: FeaturedSection[K]) => {
    setFeaturedSections((current) => current.map((item, itemIndex) => (itemIndex === index ? { ...item, [field]: value } : item)))
  }

  const toggleSectionSlug = (sectionIndex: number, slug: string) => {
    setFeaturedSections((current) =>
      current.map((section, index) => {
        if (index !== sectionIndex) {
          return section
        }

        const slugs = section.slugs.includes(slug)
          ? section.slugs.filter((entry) => entry !== slug)
          : [...section.slugs, slug]

        return {
          ...section,
          slugs,
        }
      }),
    )
  }

  const filteredItineraries = (sectionKey: FeaturedSection["key"]) =>
    availableItineraries.filter((item) => {
      if (item.featuredSection === sectionKey) {
        return true
      }

      if (sectionKey === "southern") {
        return item.category === "safari"
      }

      if (sectionKey === "northern") {
        return item.category === "northern" || item.category === "kilimanjaro" || item.category === "destination"
      }

      return item.category === sectionKey
    })

  return (
    <div className="space-y-5 [&_input]:text-base [&_textarea]:text-base [&_select]:text-base [&_button]:touch-manipulation">
      <input type="hidden" name="stats" value={JSON.stringify(stats)} />
      <input type="hidden" name="whyItems" value={JSON.stringify(whyItems)} />
      <input type="hidden" name="destinationCards" value={JSON.stringify(destinationCards)} />
      <input type="hidden" name="featuredSections" value={JSON.stringify(featuredSections)} />

      <datalist id="cms-image-suggestions">
        {imageSuggestions.map((image) => (
          <option key={image} value={image} />
        ))}
      </datalist>

      <SectionShell
        title="Homepage Stats"
        description="These are the bold numbers shown under the hero video."
      >
        <SectionHeading
          title="Stats"
          action={<AddButton onClick={() => setStats((current) => [...current, { value: "", label: "" }])} label="Add Stat" />}
        />
        <div className="grid gap-4 md:grid-cols-2">
          {stats.map((item, index) => (
            <div key={`stat-${index}`} className="rounded-2xl border border-[#eadcc8] bg-white p-4">
              <div className="grid gap-3">
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-[#210c00]">Value</span>
                  <input
                    value={item.value}
                    onChange={(event) => updateStat(index, "value", event.target.value)}
                    className="w-full rounded-2xl border border-[#d9c3a8] px-4 py-3"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-[#210c00]">Label</span>
                  <input
                    value={item.label}
                    onChange={(event) => updateStat(index, "label", event.target.value)}
                    className="w-full rounded-2xl border border-[#d9c3a8] px-4 py-3"
                  />
                </label>
                <div className="flex justify-end">
                  <RemoveButton onClick={() => setStats((current) => current.filter((_, itemIndex) => itemIndex !== index))} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        title="Why Travelers Choose You"
        description="These are the icon cards on the homepage."
      >
        <SectionHeading
          title="Why Items"
          action={
            <AddButton
              onClick={() =>
                setWhyItems((current) => [...current, { icon: "star", title: "", description: "" }])
              }
              label="Add Item"
            />
          }
        />
        <div className="grid gap-4">
          {whyItems.map((item, index) => (
            <div key={`why-${index}`} className="rounded-2xl border border-[#eadcc8] bg-white p-4">
              <div className="grid gap-3 md:grid-cols-3">
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-[#210c00]">Icon</span>
                  <input
                    value={item.icon}
                    onChange={(event) => updateWhyItem(index, "icon", event.target.value)}
                    className="w-full rounded-2xl border border-[#d9c3a8] px-4 py-3"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-[#210c00]">Title</span>
                  <input
                    value={item.title}
                    onChange={(event) => updateWhyItem(index, "title", event.target.value)}
                    className="w-full rounded-2xl border border-[#d9c3a8] px-4 py-3"
                  />
                </label>
                <div className="flex items-end justify-end">
                  <RemoveButton onClick={() => setWhyItems((current) => current.filter((_, itemIndex) => itemIndex !== index))} />
                </div>
              </div>
              <label className="mt-3 block">
                <span className="mb-2 block text-sm font-medium text-[#210c00]">Description</span>
                <textarea
                  value={item.description}
                  onChange={(event) => updateWhyItem(index, "description", event.target.value)}
                  rows={3}
                  className="w-full rounded-2xl border border-[#d9c3a8] px-4 py-3"
                />
              </label>
            </div>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        title="Destination Cards"
        description="Control the cards shown on the homepage destination section, including which one is the larger lead card."
      >
        <SectionHeading
          title="Cards"
          action={
            <AddButton
              onClick={() =>
                setDestinationCards((current) => [
                  ...current,
                  {
                    title: "",
                    description: "",
                    image: "",
                    href: "/contact",
                    ctaLabel: "Explore",
                    isLarge: false,
                  },
                ])
              }
              label="Add Card"
            />
          }
        />
        <div className="grid gap-5">
          {destinationCards.map((item, index) => (
            <div key={`destination-${index}`} className="rounded-[1.75rem] border border-[#eadcc8] bg-white p-5">
              <div className="grid gap-4 lg:grid-cols-[1.2fr,0.8fr]">
                <div className="grid gap-3 md:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-[#210c00]">Title</span>
                    <input
                      value={item.title}
                      onChange={(event) => updateDestinationCard(index, "title", event.target.value)}
                      className="w-full rounded-2xl border border-[#d9c3a8] px-4 py-3"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-[#210c00]">CTA Label</span>
                    <input
                      value={item.ctaLabel}
                      onChange={(event) => updateDestinationCard(index, "ctaLabel", event.target.value)}
                      className="w-full rounded-2xl border border-[#d9c3a8] px-4 py-3"
                    />
                  </label>
                  <label className="block md:col-span-2">
                    <span className="mb-2 block text-sm font-medium text-[#210c00]">Description</span>
                    <textarea
                      value={item.description}
                      onChange={(event) => updateDestinationCard(index, "description", event.target.value)}
                      rows={4}
                      className="w-full rounded-2xl border border-[#d9c3a8] px-4 py-3"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-[#210c00]">Link</span>
                    <input
                      value={item.href}
                      onChange={(event) => updateDestinationCard(index, "href", event.target.value)}
                      className="w-full rounded-2xl border border-[#d9c3a8] px-4 py-3"
                    />
                  </label>
                  <label className="flex items-center gap-3 rounded-2xl border border-[#d9c3a8] px-4 py-3">
                    <input
                      type="checkbox"
                      checked={item.isLarge}
                      onChange={(event) => {
                        const checked = event.target.checked
                        setDestinationCards((current) =>
                          current.map((card, cardIndex) => ({
                            ...card,
                            isLarge: cardIndex === index ? checked : checked ? false : card.isLarge,
                          })),
                        )
                      }}
                      className="h-4 w-4"
                    />
                    <span className="text-sm font-medium leading-6 text-[#210c00]">Use as the large lead card</span>
                  </label>
                </div>
                <div className="space-y-3">
                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-[#210c00]">Image Path or URL</span>
                    <input
                      value={item.image}
                      list="cms-image-suggestions"
                      onChange={(event) => updateDestinationCard(index, "image", event.target.value)}
                      className="w-full rounded-2xl border border-[#d9c3a8] px-4 py-3"
                    />
                  </label>
                  <ImagePreview src={item.image} alt={item.title || "Destination preview"} />
                  <div className="flex justify-end">
                    <RemoveButton
                      onClick={() => setDestinationCards((current) => current.filter((_, itemIndex) => itemIndex !== index))}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        title="Homepage Promoted Tours"
        description="Choose exactly which itineraries appear in each homepage tour section."
      >
        <div className="grid gap-5">
          {featuredSections.map((section, index) => (
            <div key={section.key} className="rounded-[1.75rem] border border-[#eadcc8] bg-white p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#c24503]">{section.key}</p>
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-[#210c00]">Eyebrow</span>
                  <input
                    value={section.eyebrow}
                    onChange={(event) => updateFeaturedSection(index, "eyebrow", event.target.value)}
                    className="w-full rounded-2xl border border-[#d9c3a8] px-4 py-3"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-[#210c00]">Title</span>
                  <input
                    value={section.title}
                    onChange={(event) => updateFeaturedSection(index, "title", event.target.value)}
                    className="w-full rounded-2xl border border-[#d9c3a8] px-4 py-3"
                  />
                </label>
                <label className="block md:col-span-2">
                  <span className="mb-2 block text-sm font-medium text-[#210c00]">Subtitle</span>
                  <textarea
                    value={section.subtitle}
                    onChange={(event) => updateFeaturedSection(index, "subtitle", event.target.value)}
                    rows={3}
                    className="w-full rounded-2xl border border-[#d9c3a8] px-4 py-3"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-[#210c00]">Section Button Label</span>
                  <input
                    value={section.ctaLabel}
                    onChange={(event) => updateFeaturedSection(index, "ctaLabel", event.target.value)}
                    className="w-full rounded-2xl border border-[#d9c3a8] px-4 py-3"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-[#210c00]">Section Button Link</span>
                  <input
                    value={section.ctaHref}
                    onChange={(event) => updateFeaturedSection(index, "ctaHref", event.target.value)}
                    className="w-full rounded-2xl border border-[#d9c3a8] px-4 py-3"
                  />
                </label>
              </div>

              <div className="mt-5 rounded-2xl border border-[#eadcc8] bg-[#fcfaf7] p-4">
                <p className="text-sm font-semibold text-[#210c00]">Promoted Cards</p>
                <p className="mt-1 text-sm text-gray-600">Tick the tours you want promoted in this section.</p>
                <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                  {filteredItineraries(section.key).map((itinerary) => (
                    <label key={`${section.key}-${itinerary.slug}`} className="flex items-start gap-3 rounded-2xl border border-[#eadcc8] bg-white px-4 py-3">
                      <input
                        type="checkbox"
                        checked={section.slugs.includes(itinerary.slug)}
                        onChange={() => toggleSectionSlug(index, itinerary.slug)}
                        className="mt-1 h-4 w-4 shrink-0"
                      />
                      <span>
                        <span className="block text-sm font-medium text-[#210c00]">{itinerary.title}</span>
                        <span className="block text-xs text-gray-500">{itinerary.slug}</span>
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionShell>
    </div>
  )
}
