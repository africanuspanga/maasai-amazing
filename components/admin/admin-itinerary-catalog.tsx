/* eslint-disable @next/next/no-img-element */
"use client"

import Link from "next/link"
import { useDeferredValue, useState } from "react"
import { Eye, Package2, Pencil, Plus, Search, Trash2 } from "lucide-react"
import { deleteItineraryAction } from "@/app/admin/actions"
import type { AdminItineraryRecord } from "@/lib/cms/service"

const categoryMeta: Record<
  AdminItineraryRecord["category"] | "all",
  { label: string; listLabel?: string }
> = {
  all: { label: "All Items" },
  destination: { label: "Destinations", listLabel: "Destination" },
  kilimanjaro: { label: "Kilimanjaro", listLabel: "Kilimanjaro Route" },
  northern: { label: "Northern", listLabel: "Northern Safari" },
  safari: { label: "Packages", listLabel: "Southern Safari" },
  zanzibar: { label: "Zanzibar", listLabel: "Zanzibar Tour" },
}

function StatCard({
  title,
  value,
  accentClassName,
}: {
  title: string
  value: number
  accentClassName: string
}) {
  return (
    <div className="rounded-[2rem] border border-[#eadcc8] bg-white p-5 shadow-sm">
      <div className={`inline-flex rounded-2xl px-4 py-3 ${accentClassName}`}>
        <Package2 className="h-6 w-6" />
      </div>
      <p className="mt-4 text-sm font-medium text-gray-500">{title}</p>
      <p className="mt-1 text-4xl font-semibold text-[#210c00]">{value}</p>
    </div>
  )
}

export function AdminItineraryCatalog({
  itineraries,
  loadError,
  saved,
  deleted,
}: {
  itineraries: AdminItineraryRecord[]
  loadError: string | null
  saved?: boolean
  deleted?: boolean
}) {
  const [search, setSearch] = useState("")
  const [activeFilter, setActiveFilter] = useState<keyof typeof categoryMeta>("all")
  const deferredSearch = useDeferredValue(search)

  const totalPackages = itineraries.length
  const activePackages = itineraries.filter((item) => item.isPublished).length
  const inactivePackages = totalPackages - activePackages
  const counts = itineraries.reduce<Record<AdminItineraryRecord["category"], number>>(
    (result, item) => {
      result[item.category] = (result[item.category] ?? 0) + 1
      return result
    },
    {
      destination: 0,
      kilimanjaro: 0,
      northern: 0,
      safari: 0,
      zanzibar: 0,
    },
  )

  const filteredItems = itineraries.filter((item) => {
    const matchesFilter = activeFilter === "all" ? true : item.category === activeFilter
    const query = deferredSearch.trim().toLowerCase()
    const haystack = [item.title, item.shortTitle, item.destinations, item.slug, item.priceFrom]
      .join(" ")
      .toLowerCase()
    const matchesSearch = !query || haystack.includes(query)

    return matchesFilter && matchesSearch
  })

  return (
    <div className="space-y-6">
      <section className="grid gap-4 lg:grid-cols-3">
        <StatCard title="Total Packages" value={totalPackages} accentClassName="bg-[#f9ebeb] text-[#d6111a]" />
        <StatCard title="Active Packages" value={activePackages} accentClassName="bg-[#e8f8ee] text-[#0f9f4f]" />
        <StatCard title="Inactive Packages" value={inactivePackages} accentClassName="bg-[#fff2e2] text-[#f28c18]" />
      </section>

      <section className="rounded-[2rem] border border-[#eadcc8] bg-white p-5 shadow-sm">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-[#210c00] sm:text-3xl">Package Manager</h1>
            <p className="mt-2 max-w-3xl text-sm text-gray-600 sm:text-base">
              Edit safari packages, destinations, Kilimanjaro routes, and Zanzibar tours from one clean dashboard.
            </p>
          </div>
          <Link
            href="/admin/itineraries/new"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d6111a] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#b30e16]"
          >
            <Plus className="h-4 w-4" />
            Add New Package
          </Link>
        </div>

        {saved ? (
          <div className="mt-4 rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
            Package saved successfully.
          </div>
        ) : null}

        {deleted ? (
          <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-700">
            Package deleted successfully.
          </div>
        ) : null}

        {loadError ? (
          <div className="mt-4 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            We could not load your existing packages: {loadError}
          </div>
        ) : null}
      </section>

      <section className="space-y-4 rounded-[2rem] border border-[#eadcc8] bg-white p-5 shadow-sm">
        <label className="relative block">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search packages..."
            className="w-full rounded-2xl border border-[#eadcc8] bg-[#fcfaf7] py-3 pl-12 pr-4 text-base text-[#210c00] outline-none transition focus:border-[#d6111a]"
          />
        </label>

        <div className="flex flex-wrap gap-2">
          {Object.entries(categoryMeta).map(([key, value]) => {
            const filterKey = key as keyof typeof categoryMeta
            const count = filterKey === "all" ? totalPackages : counts[filterKey]
            const active = activeFilter === filterKey

            return (
              <button
                key={filterKey}
                type="button"
                onClick={() => setActiveFilter(filterKey)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  active
                    ? "bg-[#210c00] text-white"
                    : "border border-[#eadcc8] bg-[#fcfaf7] text-[#210c00] hover:border-[#d6111a] hover:text-[#d6111a]"
                }`}
              >
                {value.label} ({count})
              </button>
            )
          })}
        </div>
      </section>

      <section className="overflow-hidden rounded-[2rem] border border-[#eadcc8] bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-[#faf5ee]">
              <tr className="text-left text-sm font-semibold text-gray-600">
                <th className="px-5 py-4">Package</th>
                <th className="px-5 py-4">Type</th>
                <th className="px-5 py-4">Duration</th>
                <th className="px-5 py-4">Price</th>
                <th className="px-5 py-4">Status</th>
                <th className="px-5 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredItems.length ? (
                filteredItems.map((item) => (
                  <tr key={item.slug} className="border-t border-[#f0e4d4] align-top">
                    <td className="px-5 py-5">
                      <div className="flex min-w-[300px] items-center gap-4">
                        {item.image ? (
                          <img
                            src={item.image}
                            alt={item.title}
                            className="h-16 w-16 rounded-2xl border border-[#eadcc8] object-cover"
                          />
                        ) : (
                          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#f7f1ea] text-gray-500">
                            <Package2 className="h-6 w-6" />
                          </div>
                        )}
                        <div>
                          <p className="text-base font-semibold text-[#210c00]">{item.title}</p>
                          <p className="mt-1 text-sm text-gray-500">{item.destinations || item.slug}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-5 text-base text-gray-600">
                      {categoryMeta[item.category].listLabel ?? categoryMeta[item.category].label}
                    </td>
                    <td className="px-5 py-5 text-base text-gray-600">{item.duration || "-"}</td>
                    <td className="px-5 py-5 text-base font-semibold text-[#210c00]">{item.priceFrom || "-"}</td>
                    <td className="px-5 py-5">
                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-sm font-medium ${
                          item.isPublished ? "bg-[#e8f8ee] text-[#0f9f4f]" : "bg-[#f6efe7] text-[#7b6b58]"
                        }`}
                      >
                        {item.isPublished ? "Active" : "Inactive"}
                      </span>
                    </td>
                    <td className="px-5 py-5">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          href={`/itineraries/${item.slug}`}
                          target="_blank"
                          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#eadcc8] text-[#210c00] transition hover:border-[#d6111a] hover:text-[#d6111a]"
                          aria-label={`Preview ${item.title}`}
                        >
                          <Eye className="h-4 w-4" />
                        </Link>

                        <Link
                          href={`/admin/itineraries/${item.slug}`}
                          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#eadcc8] text-[#210c00] transition hover:border-[#d6111a] hover:text-[#d6111a]"
                          aria-label={`Edit ${item.title}`}
                        >
                          <Pencil className="h-4 w-4" />
                        </Link>

                        <form
                          action={deleteItineraryAction}
                          onSubmit={(event) => {
                            if (!window.confirm(`Delete "${item.title}"?`)) {
                              event.preventDefault()
                            }
                          }}
                        >
                          <input type="hidden" name="slug" value={item.slug} />
                          <input type="hidden" name="redirectTo" value="/admin/itineraries?deleted=1" />
                          <button
                            type="submit"
                            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-red-200 text-[#d6111a] transition hover:bg-red-50"
                            aria-label={`Delete ${item.title}`}
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </form>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="px-5 py-12 text-center text-sm text-gray-500">
                    No packages match your search yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
