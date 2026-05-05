"use client"

import { useState } from "react"
import type { ItineraryPageDetails } from "@/lib/cms/schema"

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
    <div className="rounded-[1.75rem] border border-[#eadcc8] bg-[#fcfaf7] p-5">
      <h3 className="text-lg font-semibold text-[#210c00]">{title}</h3>
      <p className="mt-1 text-sm text-gray-600">{description}</p>
      <div className="mt-4 space-y-4">{children}</div>
    </div>
  )
}

function AddButton({ onClick, label }: { onClick: () => void; label: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-full border border-[#d9c3a8] px-4 py-2 text-sm font-medium text-[#210c00] transition hover:border-[#f88518] hover:text-[#c24503]"
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
      className="rounded-full border border-red-200 px-3 py-2 text-xs font-semibold text-red-700 transition hover:bg-red-50"
    >
      Remove
    </button>
  )
}

function TextListEditor({
  title,
  description,
  items,
  onChange,
  addLabel,
  placeholder,
}: {
  title: string
  description: string
  items: string[]
  onChange: (items: string[]) => void
  addLabel: string
  placeholder: string
}) {
  return (
    <SectionShell title={title} description={description}>
      <div className="flex justify-end">
        <AddButton onClick={() => onChange([...items, ""])} label={addLabel} />
      </div>
      <div className="grid gap-3">
        {items.map((item, index) => (
          <div key={`${title}-${index}`} className="flex gap-3">
            <input
              value={item}
              onChange={(event) => onChange(items.map((entry, itemIndex) => (itemIndex === index ? event.target.value : entry)))}
              placeholder={placeholder}
              className="w-full rounded-2xl border border-[#d9c3a8] px-4 py-3"
            />
            <RemoveButton onClick={() => onChange(items.filter((_, itemIndex) => itemIndex !== index))} />
          </div>
        ))}
      </div>
    </SectionShell>
  )
}

function KeyValueEditor({
  title,
  description,
  items,
  onChange,
  addLabel,
}: {
  title: string
  description: string
  items: ItineraryPageDetails["heroFacts"]
  onChange: (items: ItineraryPageDetails["heroFacts"]) => void
  addLabel: string
}) {
  return (
    <SectionShell title={title} description={description}>
      <div className="flex justify-end">
        <AddButton onClick={() => onChange([...items, { label: "", value: "" }])} label={addLabel} />
      </div>
      <div className="grid gap-3">
        {items.map((item, index) => (
          <div key={`${title}-${index}`} className="rounded-2xl border border-[#eadcc8] bg-white p-4">
            <div className="grid gap-3 md:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-[#210c00]">Label</span>
                <input
                  value={item.label}
                  onChange={(event) =>
                    onChange(items.map((entry, itemIndex) => (itemIndex === index ? { ...entry, label: event.target.value } : entry)))
                  }
                  className="w-full rounded-2xl border border-[#d9c3a8] px-4 py-3"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-[#210c00]">Value</span>
                <input
                  value={item.value}
                  onChange={(event) =>
                    onChange(items.map((entry, itemIndex) => (itemIndex === index ? { ...entry, value: event.target.value } : entry)))
                  }
                  className="w-full rounded-2xl border border-[#d9c3a8] px-4 py-3"
                />
              </label>
            </div>
            <div className="mt-3 flex justify-end">
              <RemoveButton onClick={() => onChange(items.filter((_, itemIndex) => itemIndex !== index))} />
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  )
}

function DayPlanEditor({
  items,
  onChange,
}: {
  items: ItineraryPageDetails["itineraryDays"]
  onChange: (items: ItineraryPageDetails["itineraryDays"]) => void
}) {
  return (
    <SectionShell
      title="Day-by-Day Plan"
      description="Add the detailed tour schedule for the public itinerary page."
    >
      <div className="flex justify-end">
        <AddButton
          onClick={() => onChange([...items, { title: "", description: "" }])}
          label="Add Day"
        />
      </div>
      <div className="grid gap-4">
        {items.map((item, index) => (
          <div key={`day-${index}`} className="rounded-[1.5rem] border border-[#eadcc8] bg-white p-4">
            <div className="grid gap-3">
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-[#210c00]">Day Title</span>
                <input
                  value={item.title}
                  onChange={(event) =>
                    onChange(items.map((entry, itemIndex) => (itemIndex === index ? { ...entry, title: event.target.value } : entry)))
                  }
                  className="w-full rounded-2xl border border-[#d9c3a8] px-4 py-3"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-[#210c00]">Description</span>
                <textarea
                  value={item.description}
                  onChange={(event) =>
                    onChange(items.map((entry, itemIndex) => (itemIndex === index ? { ...entry, description: event.target.value } : entry)))
                  }
                  rows={4}
                  className="w-full rounded-2xl border border-[#d9c3a8] px-4 py-3"
                />
              </label>
              <div className="flex justify-end">
                <RemoveButton onClick={() => onChange(items.filter((_, itemIndex) => itemIndex !== index))} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  )
}

export function ItineraryDetailsEditor({
  initialDetails,
  imageSuggestions,
}: {
  initialDetails: ItineraryPageDetails
  imageSuggestions: string[]
}) {
  const [details, setDetails] = useState<ItineraryPageDetails>(initialDetails)

  return (
    <div className="space-y-5">
      <input type="hidden" name="details" value={JSON.stringify(details)} />

      <datalist id="cms-itinerary-image-suggestions">
        {imageSuggestions.map((image) => (
          <option key={image} value={image} />
        ))}
      </datalist>

      <SectionShell
        title="Tour Page Hero"
        description="This controls the public itinerary page banner, supporting text, and top facts."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-[#210c00]">Theme</span>
            <select
              value={details.pageTheme}
              onChange={(event) => setDetails((current) => ({ ...current, pageTheme: event.target.value as ItineraryPageDetails["pageTheme"] }))}
              className="w-full rounded-2xl border border-[#d9c3a8] px-4 py-3"
            >
              <option value="northern">Northern Safari</option>
              <option value="southern">Southern Safari</option>
              <option value="zanzibar">Zanzibar</option>
              <option value="mountain">Mountain / Climb</option>
            </select>
          </label>
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-[#210c00]">Eyebrow</span>
            <input
              value={details.heroEyebrow}
              onChange={(event) => setDetails((current) => ({ ...current, heroEyebrow: event.target.value }))}
              className="w-full rounded-2xl border border-[#d9c3a8] px-4 py-3"
            />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-[#210c00]">Hero Title</span>
            <input
              value={details.heroTitle}
              onChange={(event) => setDetails((current) => ({ ...current, heroTitle: event.target.value }))}
              className="w-full rounded-2xl border border-[#d9c3a8] px-4 py-3"
            />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-[#210c00]">Hero Alt Text</span>
            <input
              value={details.heroAlt}
              onChange={(event) => setDetails((current) => ({ ...current, heroAlt: event.target.value }))}
              className="w-full rounded-2xl border border-[#d9c3a8] px-4 py-3"
            />
          </label>
          <label className="block md:col-span-2">
            <span className="mb-2 block text-sm font-medium text-[#210c00]">Hero Subtitle</span>
            <textarea
              value={details.heroSubtitle}
              onChange={(event) => setDetails((current) => ({ ...current, heroSubtitle: event.target.value }))}
              rows={3}
              className="w-full rounded-2xl border border-[#d9c3a8] px-4 py-3"
            />
          </label>
          <label className="block md:col-span-2">
            <span className="mb-2 block text-sm font-medium text-[#210c00]">Hero Image Path or URL</span>
            <input
              value={details.heroImage}
              list="cms-itinerary-image-suggestions"
              onChange={(event) => setDetails((current) => ({ ...current, heroImage: event.target.value }))}
              className="w-full rounded-2xl border border-[#d9c3a8] px-4 py-3"
            />
          </label>
        </div>
        {details.heroImage ? (
          <div className="overflow-hidden rounded-[1.75rem] border border-[#eadcc8] bg-white">
            <img src={details.heroImage} alt={details.heroAlt || details.heroTitle} className="h-56 w-full object-cover" />
          </div>
        ) : null}
      </SectionShell>

      <KeyValueEditor
        title="Hero Facts"
        description="Small fact chips such as duration, destinations, and group size."
        items={details.heroFacts}
        onChange={(heroFacts) => setDetails((current) => ({ ...current, heroFacts }))}
        addLabel="Add Fact"
      />

      <SectionShell
        title="Overview Copy"
        description="Use this for the main introduction on the public tour page."
      >
        <div className="grid gap-4">
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-[#210c00]">Section Title</span>
            <input
              value={details.overviewTitle}
              onChange={(event) => setDetails((current) => ({ ...current, overviewTitle: event.target.value }))}
              className="w-full rounded-2xl border border-[#d9c3a8] px-4 py-3"
            />
          </label>
          <div className="flex justify-end">
            <AddButton
              onClick={() => setDetails((current) => ({ ...current, overviewParagraphs: [...current.overviewParagraphs, ""] }))}
              label="Add Paragraph"
            />
          </div>
          {details.overviewParagraphs.map((paragraph, index) => (
            <div key={`overview-${index}`} className="flex gap-3">
              <textarea
                value={paragraph}
                onChange={(event) =>
                  setDetails((current) => ({
                    ...current,
                    overviewParagraphs: current.overviewParagraphs.map((item, itemIndex) => (itemIndex === index ? event.target.value : item)),
                  }))
                }
                rows={4}
                className="w-full rounded-2xl border border-[#d9c3a8] px-4 py-3"
              />
              <RemoveButton
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
      </SectionShell>

      <SectionShell
        title="Section Labels"
        description="Change the headings shown on the public itinerary page."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-[#210c00]">Highlights Title</span>
            <input
              value={details.highlightsTitle}
              onChange={(event) => setDetails((current) => ({ ...current, highlightsTitle: event.target.value }))}
              className="w-full rounded-2xl border border-[#d9c3a8] px-4 py-3"
            />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-[#210c00]">Day-by-Day Title</span>
            <input
              value={details.itineraryTitle}
              onChange={(event) => setDetails((current) => ({ ...current, itineraryTitle: event.target.value }))}
              className="w-full rounded-2xl border border-[#d9c3a8] px-4 py-3"
            />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-[#210c00]">Included Title</span>
            <input
              value={details.includedTitle}
              onChange={(event) => setDetails((current) => ({ ...current, includedTitle: event.target.value }))}
              className="w-full rounded-2xl border border-[#d9c3a8] px-4 py-3"
            />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-[#210c00]">Excluded Title</span>
            <input
              value={details.excludedTitle}
              onChange={(event) => setDetails((current) => ({ ...current, excludedTitle: event.target.value }))}
              className="w-full rounded-2xl border border-[#d9c3a8] px-4 py-3"
            />
          </label>
        </div>
      </SectionShell>

      <TextListEditor
        title="Highlights"
        description="These appear in the tour highlights area."
        items={details.highlights}
        onChange={(highlights) => setDetails((current) => ({ ...current, highlights }))}
        addLabel="Add Highlight"
        placeholder="Add a selling point"
      />

      <DayPlanEditor
        items={details.itineraryDays}
        onChange={(itineraryDays) => setDetails((current) => ({ ...current, itineraryDays }))}
      />

      <div className="grid gap-5 lg:grid-cols-2">
        <TextListEditor
          title="Included"
          description="What is included in the package."
          items={details.included}
          onChange={(included) => setDetails((current) => ({ ...current, included }))}
          addLabel="Add Included Item"
          placeholder="Included item"
        />
        <TextListEditor
          title="Excluded"
          description="What is not included in the package."
          items={details.excluded}
          onChange={(excluded) => setDetails((current) => ({ ...current, excluded }))}
          addLabel="Add Excluded Item"
          placeholder="Excluded item"
        />
      </div>

      <SectionShell
        title="Booking Sidebar"
        description="This controls the pricing card and call-to-action block."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-[#210c00]">Pricing Title</span>
            <input
              value={details.pricingTitle}
              onChange={(event) => setDetails((current) => ({ ...current, pricingTitle: event.target.value }))}
              className="w-full rounded-2xl border border-[#d9c3a8] px-4 py-3"
            />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-[#210c00]">Starting Price Label</span>
            <input
              value={details.startingPriceLabel}
              onChange={(event) => setDetails((current) => ({ ...current, startingPriceLabel: event.target.value }))}
              className="w-full rounded-2xl border border-[#d9c3a8] px-4 py-3"
            />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-[#210c00]">Starting Price</span>
            <input
              value={details.startingPrice}
              onChange={(event) => setDetails((current) => ({ ...current, startingPrice: event.target.value }))}
              className="w-full rounded-2xl border border-[#d9c3a8] px-4 py-3"
            />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-[#210c00]">Primary Button Label</span>
            <input
              value={details.primaryCtaLabel}
              onChange={(event) => setDetails((current) => ({ ...current, primaryCtaLabel: event.target.value }))}
              className="w-full rounded-2xl border border-[#d9c3a8] px-4 py-3"
            />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-[#210c00]">Secondary Button Label</span>
            <input
              value={details.secondaryCtaLabel}
              onChange={(event) => setDetails((current) => ({ ...current, secondaryCtaLabel: event.target.value }))}
              className="w-full rounded-2xl border border-[#d9c3a8] px-4 py-3"
            />
          </label>
          <label className="block md:col-span-2">
            <span className="mb-2 block text-sm font-medium text-[#210c00]">Pricing Note</span>
            <textarea
              value={details.pricingNote ?? ""}
              onChange={(event) => setDetails((current) => ({ ...current, pricingNote: event.target.value || null }))}
              rows={3}
              className="w-full rounded-2xl border border-[#d9c3a8] px-4 py-3"
            />
          </label>
        </div>
      </SectionShell>

      <KeyValueEditor
        title="Quick Facts"
        description="Useful sidebar facts like meal plan, airport, or accommodation level."
        items={details.quickFacts}
        onChange={(quickFacts) => setDetails((current) => ({ ...current, quickFacts }))}
        addLabel="Add Fact"
      />

      <SectionShell
        title="Extra Flexible Section"
        description="Use this for accommodation notes, route notes, or any extra sales copy."
      >
        <div className="grid gap-4">
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-[#210c00]">Section Title</span>
            <input
              value={details.extraSectionTitle}
              onChange={(event) => setDetails((current) => ({ ...current, extraSectionTitle: event.target.value }))}
              className="w-full rounded-2xl border border-[#d9c3a8] px-4 py-3"
            />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-[#210c00]">Section Body</span>
            <textarea
              value={details.extraSectionBody}
              onChange={(event) => setDetails((current) => ({ ...current, extraSectionBody: event.target.value }))}
              rows={5}
              className="w-full rounded-2xl border border-[#d9c3a8] px-4 py-3"
            />
          </label>
        </div>
      </SectionShell>

      <SectionShell
        title="SEO"
        description="Optional search result title and description. Leave blank to use the main tour title and summary."
      >
        <div className="grid gap-4">
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-[#210c00]">SEO Title</span>
            <input
              value={details.seoTitle ?? ""}
              onChange={(event) => setDetails((current) => ({ ...current, seoTitle: event.target.value || null }))}
              className="w-full rounded-2xl border border-[#d9c3a8] px-4 py-3"
            />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-[#210c00]">SEO Description</span>
            <textarea
              value={details.seoDescription ?? ""}
              onChange={(event) => setDetails((current) => ({ ...current, seoDescription: event.target.value || null }))}
              rows={4}
              className="w-full rounded-2xl border border-[#d9c3a8] px-4 py-3"
            />
          </label>
        </div>
      </SectionShell>
    </div>
  )
}
