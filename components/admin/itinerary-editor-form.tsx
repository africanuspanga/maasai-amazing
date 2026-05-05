/* eslint-disable @next/next/no-img-element */
"use client"

import Link from "next/link"
import { useId, useState } from "react"
import { ArrowLeft, ImageIcon, Plus, Save, Trash2 } from "lucide-react"
import { deleteItineraryAction, saveItineraryAction } from "@/app/admin/actions"
import type { ItineraryPageDetails } from "@/lib/cms/schema"
import type { AdminItineraryRecord } from "@/lib/cms/service"

type TabKey = "basic" | "overview" | "itinerary" | "inclusions" | "pricing"

const tabs: Array<{ key: TabKey; label: string }> = [
  { key: "basic", label: "Basic Info" },
  { key: "overview", label: "Overview & Highlights" },
  { key: "itinerary", label: "Itinerary" },
  { key: "inclusions", label: "Inclusions/Exclusions" },
  { key: "pricing", label: "Group Pricing" },
]

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

function getBestForLabel(category: AdminItineraryRecord["category"], pageTheme: ItineraryPageDetails["pageTheme"]) {
  if (category === "kilimanjaro" || pageTheme === "mountain") {
    return "Climbers and adventure travelers"
  }

  if (category === "zanzibar" || pageTheme === "zanzibar") {
    return "Beach, culture, and relaxation"
  }

  return "Wildlife and tailor-made safaris"
}

function getCategoryLabel(category: AdminItineraryRecord["category"]) {
  if (category === "destination") {
    return "Destination"
  }

  if (category === "kilimanjaro") {
    return "Kilimanjaro Route"
  }

  if (category === "northern") {
    return "Northern Safari"
  }

  if (category === "zanzibar") {
    return "Zanzibar Tour"
  }

  return "Southern Safari"
}

function getIncludedFallback(theme: ItineraryPageDetails["pageTheme"]) {
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

function getExcludedFallback(theme: ItineraryPageDetails["pageTheme"]) {
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

function cleanStringArray(items: string[]) {
  return items.map((item) => item.trim()).filter(Boolean)
}

function cleanDayPlans(items: ItineraryPageDetails["itineraryDays"]) {
  return items
    .map((item) => ({
      title: item.title.trim(),
      description: item.description.trim(),
    }))
    .filter((item) => item.title || item.description)
}

function cleanPricingItems(items: ItineraryPageDetails["pricingItems"]) {
  return items
    .map((item) => ({
      label: item.label.trim(),
      price: item.price.trim(),
      note: item.note?.trim() ? item.note.trim() : null,
    }))
    .filter((item) => item.label && item.price)
}

function SectionCard({
  title,
  description,
  children,
}: {
  title: string
  description: string
  children: React.ReactNode
}) {
  return (
    <section className="rounded-[2rem] border border-[#eadcc8] bg-white p-5 shadow-sm">
      <h2 className="text-xl font-semibold text-[#210c00]">{title}</h2>
      <p className="mt-2 text-sm text-gray-600">{description}</p>
      <div className="mt-5 space-y-5">{children}</div>
    </section>
  )
}

function InputField({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-[#210c00]">{label}</span>
      {children}
    </label>
  )
}

function AddRowButton({ onClick, label }: { onClick: () => void; label: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center gap-2 rounded-full border border-[#eadcc8] px-4 py-2 text-sm font-medium text-[#210c00] transition hover:border-[#d6111a] hover:text-[#d6111a]"
    >
      <Plus className="h-4 w-4" />
      {label}
    </button>
  )
}

function RemoveRowButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center justify-center rounded-full border border-red-200 px-3 py-2 text-xs font-semibold text-[#d6111a] transition hover:bg-red-50"
    >
      Remove
    </button>
  )
}

export function ItineraryEditorForm({
  mode,
  defaults,
  imageSuggestions,
  saved,
}: {
  mode: "create" | "edit"
  defaults: AdminItineraryRecord
  imageSuggestions: string[]
  saved?: boolean
}) {
  const formId = useId()
  const [activeTab, setActiveTab] = useState<TabKey>("basic")
  const [slugTouched, setSlugTouched] = useState(Boolean(defaults.slug))
  const [record, setRecord] = useState({
    slug: defaults.slug,
    title: defaults.title,
    shortTitle: defaults.shortTitle,
    featuredSubtitle: defaults.featuredSubtitle ?? "",
    duration: defaults.duration,
    image: defaults.image,
    destinations: defaults.destinations,
    groupSize: defaults.groupSize,
    description: defaults.description,
    highlights: defaults.highlights.length ? defaults.highlights : [""],
    priceFrom: defaults.priceFrom,
    category: defaults.category,
    featuredSection: defaults.featuredSection ?? "",
    sortOrder: String(defaults.sortOrder),
    bookTourName: defaults.bookTourName ?? "",
    isPublished: defaults.isPublished,
  })
  const [details, setDetails] = useState<ItineraryPageDetails>(defaults.details)

  const normalizedHighlights = cleanStringArray(record.highlights)
  const cleanedOverviewParagraphs = cleanStringArray(details.overviewParagraphs)
  const cleanedIncluded = cleanStringArray(details.included)
  const cleanedExcluded = cleanStringArray(details.excluded)
  const cleanedDays = cleanDayPlans(details.itineraryDays)
  const cleanedPricingItems = cleanPricingItems(details.pricingItems)
  const pageTheme = details.pageTheme

  const detailsPayload = JSON.stringify({
    ...defaults.details,
    ...details,
    pageTheme,
    heroImage: details.heroImage.trim() || record.image.trim(),
    heroAlt: details.heroAlt.trim() || record.title.trim(),
    heroEyebrow: details.heroEyebrow.trim() || defaults.details.heroEyebrow,
    heroTitle: details.heroTitle.trim() || record.title.trim(),
    heroSubtitle: details.heroSubtitle.trim() || record.featuredSubtitle.trim() || record.description.trim(),
    heroFacts: [
      { label: "Duration", value: record.duration.trim() },
      { label: "Destinations", value: record.destinations.trim() },
      { label: "Group Size", value: record.groupSize.trim() },
    ].filter((item) => item.value),
    overviewTitle: details.overviewTitle.trim() || defaults.details.overviewTitle,
    overviewParagraphs:
      cleanedOverviewParagraphs.length
        ? cleanedOverviewParagraphs
        : [
            record.description.trim(),
            "Every departure can be tailored around your dates, accommodation style, pace, and special interests.",
          ].filter(Boolean),
    highlightsTitle: details.highlightsTitle.trim() || defaults.details.highlightsTitle,
    highlights: cleanStringArray(details.highlights).length ? cleanStringArray(details.highlights) : normalizedHighlights,
    itineraryTitle: details.itineraryTitle.trim() || defaults.details.itineraryTitle,
    itineraryDays: cleanedDays,
    includedTitle: details.includedTitle.trim() || defaults.details.includedTitle,
    included: cleanedIncluded.length ? cleanedIncluded : getIncludedFallback(pageTheme),
    excludedTitle: details.excludedTitle.trim() || defaults.details.excludedTitle,
    excluded: cleanedExcluded.length ? cleanedExcluded : getExcludedFallback(pageTheme),
    pricingTitle: details.pricingTitle.trim() || defaults.details.pricingTitle,
    startingPriceLabel: details.startingPriceLabel.trim() || defaults.details.startingPriceLabel,
    startingPrice: details.startingPrice.trim() || record.priceFrom.trim(),
    pricingNote: details.pricingNote?.trim() ? details.pricingNote.trim() : null,
    pricingItems: cleanedPricingItems,
    primaryCtaLabel: details.primaryCtaLabel.trim() || defaults.details.primaryCtaLabel,
    secondaryCtaLabel: details.secondaryCtaLabel.trim() || defaults.details.secondaryCtaLabel,
    quickFacts: [
      { label: "Category", value: getCategoryLabel(record.category) },
      { label: "Best For", value: getBestForLabel(record.category, pageTheme) },
      { label: "Destinations", value: record.destinations.trim() },
    ].filter((item) => item.value),
  })

  const titleText = mode === "create" ? "New Package" : "Edit Package"

  return (
    <div className="space-y-6">
      <section className="rounded-[2rem] border border-[#eadcc8] bg-white shadow-sm">
        <div className="flex flex-col gap-4 border-b border-[#f0e4d4] px-5 py-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-2">
            <Link href="/admin/itineraries" className="inline-flex items-center gap-2 text-sm font-medium text-[#210c00] hover:text-[#d6111a]">
              <ArrowLeft className="h-4 w-4" />
              Back
            </Link>
            <div>
              <h1 className="text-2xl font-semibold text-[#210c00] sm:text-3xl">{titleText}</h1>
              <p className="mt-2 text-sm text-gray-600">
                {mode === "create"
                  ? "Add a safari package, destination, route, or Zanzibar tour."
                  : "Update the package details and publish changes when you're ready."}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            {mode === "edit" && record.slug ? (
              <Link
                href={`/itineraries/${record.slug}`}
                target="_blank"
                className="inline-flex items-center justify-center rounded-full border border-[#eadcc8] px-4 py-3 text-sm font-medium text-[#210c00] transition hover:border-[#d6111a] hover:text-[#d6111a]"
              >
                Preview Page
              </Link>
            ) : null}
            <button
              form={formId}
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d6111a] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#b30e16]"
            >
              <Save className="h-4 w-4" />
              Save Package
            </button>
          </div>
        </div>

        <div className="overflow-x-auto border-b border-[#f0e4d4] px-5">
          <div className="flex min-w-max gap-6">
            {tabs.map((tab) => {
              const active = activeTab === tab.key

              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveTab(tab.key)}
                  className={`border-b-2 px-1 py-4 text-sm font-medium transition ${
                    active ? "border-[#d6111a] text-[#d6111a]" : "border-transparent text-gray-500 hover:text-[#210c00]"
                  }`}
                >
                  {tab.label}
                </button>
              )
            })}
          </div>
        </div>

        {saved ? (
          <div className="mx-5 mt-5 rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
            Package saved successfully.
          </div>
        ) : null}

        <form id={formId} action={saveItineraryAction} className="space-y-6 p-5">
          <input type="hidden" name="redirectMode" value="editor" />
          <input type="hidden" name="details" value={detailsPayload} />
          <input type="hidden" name="highlights" value={normalizedHighlights.join("\n")} />

          <datalist id="cms-package-image-suggestions">
            {imageSuggestions.map((image) => (
              <option key={image} value={image} />
            ))}
          </datalist>

          {activeTab === "basic" ? (
            <SectionCard
              title="Basic Information"
              description="The main card details used in the admin list, public package cards, and booking labels."
            >
              <div className="grid gap-4 md:grid-cols-2">
                <InputField label="Package Name *">
                  <input
                    name="title"
                    required
                    value={record.title}
                    onChange={(event) => {
                      const nextTitle = event.target.value
                      setRecord((current) => {
                        const shouldSyncShortTitle = !current.shortTitle || current.shortTitle === current.title

                        return {
                          ...current,
                          title: nextTitle,
                          slug: slugTouched ? current.slug : slugify(nextTitle),
                          shortTitle: shouldSyncShortTitle ? nextTitle : current.shortTitle,
                        }
                      })
                    }}
                    placeholder="e.g. 3-Day Serengeti Safari"
                    className="w-full rounded-2xl border border-[#eadcc8] px-4 py-3 outline-none transition focus:border-[#d6111a]"
                  />
                </InputField>

                <InputField label="URL Slug">
                  <input
                    name="slug"
                    value={record.slug}
                    onChange={(event) => {
                      setSlugTouched(true)
                      setRecord((current) => ({ ...current, slug: slugify(event.target.value) }))
                    }}
                    placeholder="Auto-generated from name"
                    className="w-full rounded-2xl border border-[#eadcc8] px-4 py-3 outline-none transition focus:border-[#d6111a]"
                  />
                </InputField>

                <InputField label="Short Title">
                  <input
                    name="shortTitle"
                    value={record.shortTitle}
                    onChange={(event) => setRecord((current) => ({ ...current, shortTitle: event.target.value }))}
                    placeholder="Used where space is tighter"
                    className="w-full rounded-2xl border border-[#eadcc8] px-4 py-3 outline-none transition focus:border-[#d6111a]"
                  />
                </InputField>

                <InputField label="Featured Subtitle">
                  <input
                    name="featuredSubtitle"
                    value={record.featuredSubtitle}
                    onChange={(event) => setRecord((current) => ({ ...current, featuredSubtitle: event.target.value }))}
                    placeholder="Optional subtitle for cards and hero intro"
                    className="w-full rounded-2xl border border-[#eadcc8] px-4 py-3 outline-none transition focus:border-[#d6111a]"
                  />
                </InputField>

                <InputField label="Package Type">
                  <select
                    name="category"
                    value={record.category}
                    onChange={(event) =>
                      setRecord((current) => ({
                        ...current,
                        category: event.target.value as AdminItineraryRecord["category"],
                      }))
                    }
                    className="w-full rounded-2xl border border-[#eadcc8] px-4 py-3 outline-none transition focus:border-[#d6111a]"
                  >
                    <option value="safari">Safari Package</option>
                    <option value="destination">Destination</option>
                    <option value="kilimanjaro">Kilimanjaro Route</option>
                    <option value="northern">Northern Safari</option>
                    <option value="zanzibar">Zanzibar Tour</option>
                  </select>
                </InputField>

                <InputField label="Short Description *">
                  <textarea
                    name="description"
                    required
                    value={record.description}
                    onChange={(event) => setRecord((current) => ({ ...current, description: event.target.value }))}
                    rows={5}
                    placeholder="Brief description for package cards"
                    className="w-full rounded-2xl border border-[#eadcc8] px-4 py-3 outline-none transition focus:border-[#d6111a] md:col-span-2"
                  />
                </InputField>
              </div>

              <div className="grid gap-4 lg:grid-cols-[1.2fr,0.8fr]">
                <div className="space-y-4">
                  <InputField label="Main Image Path or URL *">
                    <input
                      name="image"
                      required
                      list="cms-package-image-suggestions"
                      value={record.image}
                      onChange={(event) => setRecord((current) => ({ ...current, image: event.target.value }))}
                      placeholder="/images/example.jpg or https://..."
                      className="w-full rounded-2xl border border-[#eadcc8] px-4 py-3 outline-none transition focus:border-[#d6111a]"
                    />
                  </InputField>

                  <div className="rounded-[1.75rem] border border-dashed border-[#d7ccc0] bg-[#fcfaf7] p-5">
                    {record.image ? (
                      <img
                        src={record.image}
                        alt={record.title || "Package image preview"}
                        className="h-64 w-full rounded-[1.5rem] object-cover"
                      />
                    ) : (
                      <div className="flex h-64 flex-col items-center justify-center gap-3 rounded-[1.5rem] border border-dashed border-[#d7ccc0] bg-white text-center text-sm text-gray-500">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f4ede5] text-gray-500">
                          <ImageIcon className="h-6 w-6" />
                        </div>
                        <div>
                          <p className="font-medium text-[#210c00]">Paste an image URL or public image path</p>
                          <p className="mt-1 text-xs text-gray-500">Example: /images/zanzibar-aerial.jpg</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-4">
                  <InputField label="Duration *">
                    <input
                      name="duration"
                      required
                      value={record.duration}
                      onChange={(event) => setRecord((current) => ({ ...current, duration: event.target.value }))}
                      placeholder="e.g. 3 Days"
                      className="w-full rounded-2xl border border-[#eadcc8] px-4 py-3 outline-none transition focus:border-[#d6111a]"
                    />
                  </InputField>

                  <InputField label="Price *">
                    <input
                      name="priceFrom"
                      required
                      value={record.priceFrom}
                      onChange={(event) => setRecord((current) => ({ ...current, priceFrom: event.target.value }))}
                      placeholder="USD 1,250"
                      className="w-full rounded-2xl border border-[#eadcc8] px-4 py-3 outline-none transition focus:border-[#d6111a]"
                    />
                  </InputField>

                  <InputField label="Destinations *">
                    <input
                      name="destinations"
                      required
                      value={record.destinations}
                      onChange={(event) => setRecord((current) => ({ ...current, destinations: event.target.value }))}
                      placeholder="Serengeti, Ngorongoro, Zanzibar..."
                      className="w-full rounded-2xl border border-[#eadcc8] px-4 py-3 outline-none transition focus:border-[#d6111a]"
                    />
                  </InputField>

                  <InputField label="Group Size *">
                    <input
                      name="groupSize"
                      required
                      value={record.groupSize}
                      onChange={(event) => setRecord((current) => ({ ...current, groupSize: event.target.value }))}
                      placeholder="2-6 travelers"
                      className="w-full rounded-2xl border border-[#eadcc8] px-4 py-3 outline-none transition focus:border-[#d6111a]"
                    />
                  </InputField>

                  <InputField label="Booking Tour Name">
                    <input
                      name="bookTourName"
                      value={record.bookTourName}
                      onChange={(event) => setRecord((current) => ({ ...current, bookTourName: event.target.value }))}
                      placeholder="Optional custom booking label"
                      className="w-full rounded-2xl border border-[#eadcc8] px-4 py-3 outline-none transition focus:border-[#d6111a]"
                    />
                  </InputField>

                  <InputField label="Homepage Feature Section">
                    <select
                      name="featuredSection"
                      value={record.featuredSection}
                      onChange={(event) => setRecord((current) => ({ ...current, featuredSection: event.target.value }))}
                      className="w-full rounded-2xl border border-[#eadcc8] px-4 py-3 outline-none transition focus:border-[#d6111a]"
                    >
                      <option value="">Not featured</option>
                      <option value="northern">Northern</option>
                      <option value="zanzibar">Zanzibar</option>
                      <option value="southern">Southern</option>
                    </select>
                  </InputField>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <InputField label="Sort Order">
                      <input
                        name="sortOrder"
                        type="number"
                        value={record.sortOrder}
                        onChange={(event) => setRecord((current) => ({ ...current, sortOrder: event.target.value }))}
                        className="w-full rounded-2xl border border-[#eadcc8] px-4 py-3 outline-none transition focus:border-[#d6111a]"
                      />
                    </InputField>

                    <label className="flex items-center gap-3 rounded-2xl border border-[#eadcc8] px-4 py-3">
                      <input
                        name="isPublished"
                        type="checkbox"
                        checked={record.isPublished}
                        onChange={(event) => setRecord((current) => ({ ...current, isPublished: event.target.checked }))}
                        className="h-4 w-4"
                      />
                      <span className="text-sm font-medium text-[#210c00]">Published</span>
                    </label>
                  </div>
                </div>
              </div>
            </SectionCard>
          ) : null}

          {activeTab === "overview" ? (
            <div className="space-y-6">
              <SectionCard
                title="Overview"
                description="Control the hero area and the intro copy on the public package page."
              >
                <div className="grid gap-4 md:grid-cols-2">
                  <InputField label="Page Theme">
                    <select
                      value={details.pageTheme}
                      onChange={(event) =>
                        setDetails((current) => ({
                          ...current,
                          pageTheme: event.target.value as ItineraryPageDetails["pageTheme"],
                        }))
                      }
                      className="w-full rounded-2xl border border-[#eadcc8] px-4 py-3 outline-none transition focus:border-[#d6111a]"
                    >
                      <option value="southern">Southern Safari</option>
                      <option value="northern">Northern Safari</option>
                      <option value="zanzibar">Zanzibar</option>
                      <option value="mountain">Mountain / Climb</option>
                    </select>
                  </InputField>

                  <InputField label="Hero Eyebrow">
                    <input
                      value={details.heroEyebrow}
                      onChange={(event) => setDetails((current) => ({ ...current, heroEyebrow: event.target.value }))}
                      className="w-full rounded-2xl border border-[#eadcc8] px-4 py-3 outline-none transition focus:border-[#d6111a]"
                    />
                  </InputField>

                  <InputField label="Hero Title">
                    <input
                      value={details.heroTitle}
                      onChange={(event) => setDetails((current) => ({ ...current, heroTitle: event.target.value }))}
                      placeholder={record.title || "Falls back to package name"}
                      className="w-full rounded-2xl border border-[#eadcc8] px-4 py-3 outline-none transition focus:border-[#d6111a]"
                    />
                  </InputField>

                  <InputField label="Hero Alt Text">
                    <input
                      value={details.heroAlt}
                      onChange={(event) => setDetails((current) => ({ ...current, heroAlt: event.target.value }))}
                      placeholder={record.title || "Falls back to package name"}
                      className="w-full rounded-2xl border border-[#eadcc8] px-4 py-3 outline-none transition focus:border-[#d6111a]"
                    />
                  </InputField>

                  <InputField label="Hero Subtitle">
                    <textarea
                      value={details.heroSubtitle}
                      onChange={(event) => setDetails((current) => ({ ...current, heroSubtitle: event.target.value }))}
                      rows={4}
                      placeholder={record.featuredSubtitle || record.description || "Falls back to description"}
                      className="w-full rounded-2xl border border-[#eadcc8] px-4 py-3 outline-none transition focus:border-[#d6111a] md:col-span-2"
                    />
                  </InputField>

                  <InputField label="Hero Image Path or URL">
                    <input
                      value={details.heroImage}
                      list="cms-package-image-suggestions"
                      onChange={(event) => setDetails((current) => ({ ...current, heroImage: event.target.value }))}
                      placeholder={record.image || "Falls back to main image"}
                      className="w-full rounded-2xl border border-[#eadcc8] px-4 py-3 outline-none transition focus:border-[#d6111a] md:col-span-2"
                    />
                  </InputField>

                  <InputField label="Overview Title">
                    <input
                      value={details.overviewTitle}
                      onChange={(event) => setDetails((current) => ({ ...current, overviewTitle: event.target.value }))}
                      className="w-full rounded-2xl border border-[#eadcc8] px-4 py-3 outline-none transition focus:border-[#d6111a] md:col-span-2"
                    />
                  </InputField>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-medium text-[#210c00]">Overview Paragraphs</p>
                    <AddRowButton
                      onClick={() =>
                        setDetails((current) => ({
                          ...current,
                          overviewParagraphs: [...current.overviewParagraphs, ""],
                        }))
                      }
                      label="Add Paragraph"
                    />
                  </div>

                  {details.overviewParagraphs.map((paragraph, index) => (
                    <div key={`overview-${index}`} className="flex flex-col gap-3 sm:flex-row">
                      <textarea
                        value={paragraph}
                        onChange={(event) =>
                          setDetails((current) => ({
                            ...current,
                            overviewParagraphs: current.overviewParagraphs.map((item, itemIndex) =>
                              itemIndex === index ? event.target.value : item,
                            ),
                          }))
                        }
                        rows={4}
                        className="w-full rounded-2xl border border-[#eadcc8] px-4 py-3 outline-none transition focus:border-[#d6111a]"
                      />
                      <RemoveRowButton
                        onClick={() =>
                          setDetails((current) => ({
                            ...current,
                            overviewParagraphs: current.overviewParagraphs.filter((_, itemIndex) => itemIndex !== index),
                          }))
                        }
                      />
                    </div>
                  ))}
                </div>
              </SectionCard>

              <SectionCard
                title="Highlights"
                description="List the main selling points that should appear on the package page."
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-medium text-[#210c00]">Highlights List</p>
                    <p className="mt-1 text-sm text-gray-500">These also support the package card summary.</p>
                  </div>
                  <AddRowButton
                    onClick={() => setRecord((current) => ({ ...current, highlights: [...current.highlights, ""] }))}
                    label="Add Highlight"
                  />
                </div>

                <InputField label="Highlights Section Title">
                  <input
                    value={details.highlightsTitle}
                    onChange={(event) => setDetails((current) => ({ ...current, highlightsTitle: event.target.value }))}
                    className="w-full rounded-2xl border border-[#eadcc8] px-4 py-3 outline-none transition focus:border-[#d6111a]"
                  />
                </InputField>

                <div className="space-y-3">
                  {record.highlights.map((highlight, index) => (
                    <div key={`highlight-${index}`} className="flex flex-col gap-3 sm:flex-row">
                      <input
                        value={highlight}
                        onChange={(event) =>
                          setRecord((current) => ({
                            ...current,
                            highlights: current.highlights.map((item, itemIndex) =>
                              itemIndex === index ? event.target.value : item,
                            ),
                          }))
                        }
                        placeholder="Add a package highlight"
                        className="w-full rounded-2xl border border-[#eadcc8] px-4 py-3 outline-none transition focus:border-[#d6111a]"
                      />
                      <RemoveRowButton
                        onClick={() =>
                          setRecord((current) => ({
                            ...current,
                            highlights: current.highlights.filter((_, itemIndex) => itemIndex !== index),
                          }))
                        }
                      />
                    </div>
                  ))}
                </div>
              </SectionCard>
            </div>
          ) : null}

          {activeTab === "itinerary" ? (
            <SectionCard
              title="Itinerary"
              description="Build the day-by-day structure for longer tours and safari packages."
            >
              <div className="space-y-4">
                <InputField label="Itinerary Section Title">
                  <input
                    value={details.itineraryTitle}
                    onChange={(event) => setDetails((current) => ({ ...current, itineraryTitle: event.target.value }))}
                    className="w-full rounded-2xl border border-[#eadcc8] px-4 py-3 outline-none transition focus:border-[#d6111a]"
                  />
                </InputField>

                <div className="flex justify-end">
                  <AddRowButton
                    onClick={() =>
                      setDetails((current) => ({
                        ...current,
                        itineraryDays: [...current.itineraryDays, { title: "", description: "" }],
                      }))
                    }
                    label="Add Day"
                  />
                </div>

                <div className="space-y-4">
                  {details.itineraryDays.map((day, index) => (
                    <div key={`day-${index}`} className="rounded-[1.75rem] border border-[#eadcc8] bg-[#fcfaf7] p-4">
                      <div className="grid gap-4">
                        <InputField label={`Day ${index + 1} Title`}>
                          <input
                            value={day.title}
                            onChange={(event) =>
                              setDetails((current) => ({
                                ...current,
                                itineraryDays: current.itineraryDays.map((item, itemIndex) =>
                                  itemIndex === index ? { ...item, title: event.target.value } : item,
                                ),
                              }))
                            }
                            className="w-full rounded-2xl border border-[#eadcc8] px-4 py-3 outline-none transition focus:border-[#d6111a]"
                          />
                        </InputField>
                        <InputField label="Description">
                          <textarea
                            value={day.description}
                            onChange={(event) =>
                              setDetails((current) => ({
                                ...current,
                                itineraryDays: current.itineraryDays.map((item, itemIndex) =>
                                  itemIndex === index ? { ...item, description: event.target.value } : item,
                                ),
                              }))
                            }
                            rows={4}
                            className="w-full rounded-2xl border border-[#eadcc8] px-4 py-3 outline-none transition focus:border-[#d6111a]"
                          />
                        </InputField>
                        <div className="flex justify-end">
                          <RemoveRowButton
                            onClick={() =>
                              setDetails((current) => ({
                                ...current,
                                itineraryDays: current.itineraryDays.filter((_, itemIndex) => itemIndex !== index),
                              }))
                            }
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </SectionCard>
          ) : null}

          {activeTab === "inclusions" ? (
            <div className="grid gap-6 xl:grid-cols-2">
              <SectionCard
                title="Inclusions"
                description="Everything covered in the package price."
              >
                <InputField label="Inclusions Section Title">
                  <input
                    value={details.includedTitle}
                    onChange={(event) => setDetails((current) => ({ ...current, includedTitle: event.target.value }))}
                    className="w-full rounded-2xl border border-[#eadcc8] px-4 py-3 outline-none transition focus:border-[#d6111a]"
                  />
                </InputField>

                <div className="flex justify-end">
                  <AddRowButton
                    onClick={() =>
                      setDetails((current) => ({
                        ...current,
                        included: [...current.included, ""],
                      }))
                    }
                    label="Add Included Item"
                  />
                </div>

                <div className="space-y-3">
                  {details.included.map((item, index) => (
                    <div key={`included-${index}`} className="flex flex-col gap-3 sm:flex-row">
                      <input
                        value={item}
                        onChange={(event) =>
                          setDetails((current) => ({
                            ...current,
                            included: current.included.map((entry, itemIndex) =>
                              itemIndex === index ? event.target.value : entry,
                            ),
                          }))
                        }
                        className="w-full rounded-2xl border border-[#eadcc8] px-4 py-3 outline-none transition focus:border-[#d6111a]"
                      />
                      <RemoveRowButton
                        onClick={() =>
                          setDetails((current) => ({
                            ...current,
                            included: current.included.filter((_, itemIndex) => itemIndex !== index),
                          }))
                        }
                      />
                    </div>
                  ))}
                </div>
              </SectionCard>

              <SectionCard
                title="Exclusions"
                description="What guests should expect to pay separately."
              >
                <InputField label="Exclusions Section Title">
                  <input
                    value={details.excludedTitle}
                    onChange={(event) => setDetails((current) => ({ ...current, excludedTitle: event.target.value }))}
                    className="w-full rounded-2xl border border-[#eadcc8] px-4 py-3 outline-none transition focus:border-[#d6111a]"
                  />
                </InputField>

                <div className="flex justify-end">
                  <AddRowButton
                    onClick={() =>
                      setDetails((current) => ({
                        ...current,
                        excluded: [...current.excluded, ""],
                      }))
                    }
                    label="Add Excluded Item"
                  />
                </div>

                <div className="space-y-3">
                  {details.excluded.map((item, index) => (
                    <div key={`excluded-${index}`} className="flex flex-col gap-3 sm:flex-row">
                      <input
                        value={item}
                        onChange={(event) =>
                          setDetails((current) => ({
                            ...current,
                            excluded: current.excluded.map((entry, itemIndex) =>
                              itemIndex === index ? event.target.value : entry,
                            ),
                          }))
                        }
                        className="w-full rounded-2xl border border-[#eadcc8] px-4 py-3 outline-none transition focus:border-[#d6111a]"
                      />
                      <RemoveRowButton
                        onClick={() =>
                          setDetails((current) => ({
                            ...current,
                            excluded: current.excluded.filter((_, itemIndex) => itemIndex !== index),
                          }))
                        }
                      />
                    </div>
                  ))}
                </div>
              </SectionCard>
            </div>
          ) : null}

          {activeTab === "pricing" ? (
            <SectionCard
              title="Pricing & Actions"
              description="Control the pricing box and CTA buttons on the public package page."
            >
              <div className="grid gap-4 md:grid-cols-2">
                <InputField label="Pricing Section Title">
                  <input
                    value={details.pricingTitle}
                    onChange={(event) => setDetails((current) => ({ ...current, pricingTitle: event.target.value }))}
                    className="w-full rounded-2xl border border-[#eadcc8] px-4 py-3 outline-none transition focus:border-[#d6111a]"
                  />
                </InputField>

                <InputField label="Starting Price Label">
                  <input
                    value={details.startingPriceLabel}
                    onChange={(event) => setDetails((current) => ({ ...current, startingPriceLabel: event.target.value }))}
                    className="w-full rounded-2xl border border-[#eadcc8] px-4 py-3 outline-none transition focus:border-[#d6111a]"
                  />
                </InputField>

                <InputField label="Starting Price">
                  <input
                    value={details.startingPrice}
                    onChange={(event) => setDetails((current) => ({ ...current, startingPrice: event.target.value }))}
                    placeholder={record.priceFrom || "Falls back to package price"}
                    className="w-full rounded-2xl border border-[#eadcc8] px-4 py-3 outline-none transition focus:border-[#d6111a]"
                  />
                </InputField>

                <InputField label="Pricing Note">
                  <textarea
                    value={details.pricingNote ?? ""}
                    onChange={(event) => setDetails((current) => ({ ...current, pricingNote: event.target.value || null }))}
                    rows={4}
                    className="w-full rounded-2xl border border-[#eadcc8] px-4 py-3 outline-none transition focus:border-[#d6111a]"
                  />
                </InputField>

                <InputField label="Primary Button Label">
                  <input
                    value={details.primaryCtaLabel}
                    onChange={(event) => setDetails((current) => ({ ...current, primaryCtaLabel: event.target.value }))}
                    className="w-full rounded-2xl border border-[#eadcc8] px-4 py-3 outline-none transition focus:border-[#d6111a]"
                  />
                </InputField>

                <InputField label="Secondary Button Label">
                  <input
                    value={details.secondaryCtaLabel}
                    onChange={(event) => setDetails((current) => ({ ...current, secondaryCtaLabel: event.target.value }))}
                    className="w-full rounded-2xl border border-[#eadcc8] px-4 py-3 outline-none transition focus:border-[#d6111a]"
                  />
                </InputField>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-medium text-[#210c00]">Group Pricing Rows</p>
                    <p className="mt-1 text-sm text-gray-500">Add rows for seasons, group sizes, or hotel levels.</p>
                  </div>
                  <AddRowButton
                    onClick={() =>
                      setDetails((current) => ({
                        ...current,
                        pricingItems: [...current.pricingItems, { label: "", price: "", note: null }],
                      }))
                    }
                    label="Add Price Row"
                  />
                </div>

                {details.pricingItems.map((item, index) => (
                  <div key={`price-${index}`} className="rounded-[1.75rem] border border-[#eadcc8] bg-[#fcfaf7] p-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <InputField label="Label">
                        <input
                          value={item.label}
                          onChange={(event) =>
                            setDetails((current) => ({
                              ...current,
                              pricingItems: current.pricingItems.map((entry, itemIndex) =>
                                itemIndex === index ? { ...entry, label: event.target.value } : entry,
                              ),
                            }))
                          }
                          placeholder="2 people / low season"
                          className="w-full rounded-2xl border border-[#eadcc8] px-4 py-3 outline-none transition focus:border-[#d6111a]"
                        />
                      </InputField>
                      <InputField label="Price">
                        <input
                          value={item.price}
                          onChange={(event) =>
                            setDetails((current) => ({
                              ...current,
                              pricingItems: current.pricingItems.map((entry, itemIndex) =>
                                itemIndex === index ? { ...entry, price: event.target.value } : entry,
                              ),
                            }))
                          }
                          placeholder="USD 1,850"
                          className="w-full rounded-2xl border border-[#eadcc8] px-4 py-3 outline-none transition focus:border-[#d6111a]"
                        />
                      </InputField>
                      <InputField label="Note">
                        <textarea
                          value={item.note ?? ""}
                          onChange={(event) =>
                            setDetails((current) => ({
                              ...current,
                              pricingItems: current.pricingItems.map((entry, itemIndex) =>
                                itemIndex === index ? { ...entry, note: event.target.value || null } : entry,
                              ),
                            }))
                          }
                          rows={3}
                          className="w-full rounded-2xl border border-[#eadcc8] px-4 py-3 outline-none transition focus:border-[#d6111a] md:col-span-2"
                        />
                      </InputField>
                    </div>
                    <div className="mt-4 flex justify-end">
                      <RemoveRowButton
                        onClick={() =>
                          setDetails((current) => ({
                            ...current,
                            pricingItems: current.pricingItems.filter((_, itemIndex) => itemIndex !== index),
                          }))
                        }
                      />
                    </div>
                  </div>
                ))}
              </div>
            </SectionCard>
          ) : null}
        </form>
      </section>

      {mode === "edit" ? (
        <section className="rounded-[2rem] border border-red-200 bg-white p-5 shadow-sm">
          <h2 className="text-xl font-semibold text-[#210c00]">Delete Package</h2>
          <p className="mt-2 text-sm text-gray-600">
            This removes the package from the admin dashboard and the public site.
          </p>

          <form
            action={deleteItineraryAction}
            className="mt-5"
            onSubmit={(event) => {
              if (!window.confirm(`Delete "${defaults.title}"?`)) {
                event.preventDefault()
              }
            }}
          >
            <input type="hidden" name="slug" value={defaults.slug} />
            <input type="hidden" name="redirectTo" value="/admin/itineraries?deleted=1" />
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full border border-red-200 px-5 py-3 text-sm font-semibold text-[#d6111a] transition hover:bg-red-50"
            >
              <Trash2 className="h-4 w-4" />
              Delete Package
            </button>
          </form>
        </section>
      ) : null}
    </div>
  )
}
