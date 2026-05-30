/* eslint-disable @next/next/no-img-element */
"use client"

import { useState } from "react"
import type { ZanzibarPageContent } from "@/lib/cms/schema"

type ZanzibarExperience = ZanzibarPageContent["experiences"][number]

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
      <img src={src} alt={alt} className="h-36 w-full object-cover sm:h-44" />
    </div>
  )
}

function cleanExperience(item: ZanzibarExperience): ZanzibarExperience {
  return {
    ...item,
    name: item.name.trim(),
    description: item.description.trim(),
    duration: item.duration.trim(),
    image: item.image.trim(),
    alt: item.alt.trim(),
    highlights: item.highlights.map((highlight) => highlight.trim()).filter(Boolean),
    bookTourName: item.bookTourName.trim() || `Zanzibar - ${item.name.trim()}`,
  }
}

export function ZanzibarStructuredFields({
  initialContent,
  imageSuggestions,
}: {
  initialContent: ZanzibarPageContent
  imageSuggestions: string[]
}) {
  const [experiences, setExperiences] = useState<ZanzibarExperience[]>(initialContent.experiences)

  const updateExperience = <K extends keyof ZanzibarExperience>(index: number, field: K, value: ZanzibarExperience[K]) => {
    setExperiences((current) => current.map((item, itemIndex) => (itemIndex === index ? { ...item, [field]: value } : item)))
  }

  const cleanedExperiences = experiences.map(cleanExperience).filter((item) => item.name && item.description)

  return (
    <div className="space-y-5 [&_input]:text-base [&_textarea]:text-base [&_button]:touch-manipulation">
      <input type="hidden" name="experiences" value={JSON.stringify(cleanedExperiences)} />

      <datalist id="cms-zanzibar-image-suggestions">
        {imageSuggestions.map((image) => (
          <option key={image} value={image} />
        ))}
      </datalist>

      <SectionShell
        title="Signature Experiences"
        description="Add, remove, and edit the Zanzibar day experiences shown below the holiday packages."
      >
        <div className="flex justify-end">
          <AddButton
            label="Add Experience"
            onClick={() =>
              setExperiences((current) => [
                ...current,
                {
                  name: "",
                  description: "",
                  duration: "Half Day",
                  image: "",
                  alt: "",
                  highlights: [""],
                  bookTourName: "",
                },
              ])
            }
          />
        </div>

        <div className="grid gap-5">
          {experiences.map((experience, index) => (
            <div key={`zanzibar-experience-${index}`} className="rounded-[1.75rem] border border-[#eadcc8] bg-white p-5">
              <div className="grid gap-4 lg:grid-cols-[1.2fr,0.8fr]">
                <div className="grid gap-3 md:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-[#210c00]">Name</span>
                    <input
                      value={experience.name}
                      onChange={(event) => updateExperience(index, "name", event.target.value)}
                      className="w-full rounded-2xl border border-[#d9c3a8] px-4 py-3"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-[#210c00]">Duration</span>
                    <input
                      value={experience.duration}
                      onChange={(event) => updateExperience(index, "duration", event.target.value)}
                      className="w-full rounded-2xl border border-[#d9c3a8] px-4 py-3"
                    />
                  </label>
                  <label className="block md:col-span-2">
                    <span className="mb-2 block text-sm font-medium text-[#210c00]">Description</span>
                    <textarea
                      value={experience.description}
                      onChange={(event) => updateExperience(index, "description", event.target.value)}
                      rows={3}
                      className="w-full rounded-2xl border border-[#d9c3a8] px-4 py-3"
                    />
                  </label>
                  <label className="block md:col-span-2">
                    <span className="mb-2 block text-sm font-medium text-[#210c00]">Highlights (one per line)</span>
                    <textarea
                      value={experience.highlights.join("\n")}
                      onChange={(event) => updateExperience(index, "highlights", event.target.value.split(/\r?\n/))}
                      rows={5}
                      className="w-full rounded-2xl border border-[#d9c3a8] px-4 py-3"
                    />
                  </label>
                  <label className="block md:col-span-2">
                    <span className="mb-2 block text-sm font-medium text-[#210c00]">Booking Tour Name</span>
                    <input
                      value={experience.bookTourName}
                      onChange={(event) => updateExperience(index, "bookTourName", event.target.value)}
                      placeholder={experience.name ? `Zanzibar - ${experience.name}` : "Zanzibar - Experience Name"}
                      className="w-full rounded-2xl border border-[#d9c3a8] px-4 py-3"
                    />
                  </label>
                </div>

                <div className="space-y-3">
                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-[#210c00]">Image Path or URL</span>
                    <input
                      value={experience.image}
                      list="cms-zanzibar-image-suggestions"
                      onChange={(event) => updateExperience(index, "image", event.target.value)}
                      className="w-full rounded-2xl border border-[#d9c3a8] px-4 py-3"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-[#210c00]">Image Alt Text</span>
                    <input
                      value={experience.alt}
                      onChange={(event) => updateExperience(index, "alt", event.target.value)}
                      className="w-full rounded-2xl border border-[#d9c3a8] px-4 py-3"
                    />
                  </label>
                  <ImagePreview src={experience.image} alt={experience.alt || experience.name || "Zanzibar experience preview"} />
                  <div className="flex justify-end">
                    <RemoveButton onClick={() => setExperiences((current) => current.filter((_, itemIndex) => itemIndex !== index))} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionShell>
    </div>
  )
}
