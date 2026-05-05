import Link from "next/link"
import { deleteItineraryAction, saveItineraryAction } from "@/app/admin/actions"
import { ItineraryDetailsEditor } from "@/components/admin/itinerary-details-editor"
import { getPublicImageSuggestions } from "@/lib/cms/media"
import { createDefaultItineraryPageDetails } from "@/lib/cms/schema"
import { getAdminItineraries } from "@/lib/cms/service"

type EditableItinerary = Awaited<ReturnType<typeof getAdminItineraries>>[number]

function ItineraryForm({
  title,
  defaults,
  imageSuggestions,
  initiallyOpen = false,
}: {
  title: string
  defaults: EditableItinerary
  imageSuggestions: string[]
  initiallyOpen?: boolean
}) {
  return (
    <details
      open={initiallyOpen}
      className="overflow-hidden rounded-[2rem] border border-[#eadcc8] bg-white shadow-sm"
    >
      <summary className="cursor-pointer list-none px-5 py-5">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c24503]">
              {defaults.slug ? defaults.category : "new itinerary"}
            </p>
            <h2 className="mt-2 text-2xl font-serif font-bold text-[#210c00]">{title}</h2>
            <p className="mt-2 text-sm text-gray-600">
              {defaults.slug ? (
                <>
                  Slug: <span className="font-mono">{defaults.slug}</span>
                </>
              ) : (
                "Create a new itinerary, climb, or Zanzibar package from here."
              )}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {defaults.slug ? (
              <Link
                href={`/itineraries/${defaults.slug}`}
                target="_blank"
                className="rounded-full border border-[#d9c3a8] px-4 py-2 text-sm font-medium text-[#210c00] transition hover:border-[#f88518] hover:text-[#c24503]"
              >
                Preview Public Page
              </Link>
            ) : null}
            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ${
                defaults.isPublished ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"
              }`}
            >
              {defaults.isPublished ? "Published" : "Draft"}
            </span>
          </div>
        </div>
      </summary>

      <div className="border-t border-[#eadcc8] px-5 py-5">
        <form action={saveItineraryAction} className="space-y-6">
          <datalist id="cms-admin-itinerary-images">
            {imageSuggestions.map((image) => (
              <option key={image} value={image} />
            ))}
          </datalist>

          <section className="rounded-[1.75rem] border border-[#eadcc8] bg-[#fcfaf7] p-5">
            <h3 className="text-lg font-semibold text-[#210c00]">Catalog Card & Listing</h3>
            <p className="mt-1 text-sm text-gray-600">
              These fields feed the homepage promotions, the itinerary listing page, and the booking tour labels.
            </p>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-[#210c00]">Slug</span>
                <input
                  name="slug"
                  defaultValue={defaults.slug}
                  placeholder="auto-generated from title if left empty"
                  className="w-full rounded-2xl border border-[#d9c3a8] px-4 py-3"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-[#210c00]">Full Title</span>
                <input name="title" required defaultValue={defaults.title} className="w-full rounded-2xl border border-[#d9c3a8] px-4 py-3" />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-[#210c00]">Short Title</span>
                <input
                  name="shortTitle"
                  defaultValue={defaults.shortTitle}
                  placeholder="Used where space is tighter"
                  className="w-full rounded-2xl border border-[#d9c3a8] px-4 py-3"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-[#210c00]">Featured Subtitle</span>
                <input
                  name="featuredSubtitle"
                  defaultValue={defaults.featuredSubtitle ?? ""}
                  className="w-full rounded-2xl border border-[#d9c3a8] px-4 py-3"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-[#210c00]">Duration</span>
                <input name="duration" required defaultValue={defaults.duration} className="w-full rounded-2xl border border-[#d9c3a8] px-4 py-3" />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-[#210c00]">Price From</span>
                <input name="priceFrom" required defaultValue={defaults.priceFrom} className="w-full rounded-2xl border border-[#d9c3a8] px-4 py-3" />
              </label>
              <label className="block md:col-span-2">
                <span className="mb-2 block text-sm font-medium text-[#210c00]">Listing Image Path or URL</span>
                <input
                  name="image"
                  required
                  list="cms-admin-itinerary-images"
                  defaultValue={defaults.image}
                  className="w-full rounded-2xl border border-[#d9c3a8] px-4 py-3"
                />
              </label>
              <label className="block md:col-span-2">
                <span className="mb-2 block text-sm font-medium text-[#210c00]">Destinations</span>
                <input
                  name="destinations"
                  required
                  defaultValue={defaults.destinations}
                  className="w-full rounded-2xl border border-[#d9c3a8] px-4 py-3"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-[#210c00]">Group Size</span>
                <input name="groupSize" required defaultValue={defaults.groupSize} className="w-full rounded-2xl border border-[#d9c3a8] px-4 py-3" />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-[#210c00]">Booking Tour Name</span>
                <input
                  name="bookTourName"
                  defaultValue={defaults.bookTourName ?? ""}
                  className="w-full rounded-2xl border border-[#d9c3a8] px-4 py-3"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-[#210c00]">Category</span>
                <select name="category" defaultValue={defaults.category} className="w-full rounded-2xl border border-[#d9c3a8] px-4 py-3">
                  <option value="northern">Northern / Mountain</option>
                  <option value="zanzibar">Zanzibar</option>
                  <option value="safari">Southern Safari</option>
                </select>
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-[#210c00]">Homepage Promotion Section</span>
                <select
                  name="featuredSection"
                  defaultValue={defaults.featuredSection ?? ""}
                  className="w-full rounded-2xl border border-[#d9c3a8] px-4 py-3"
                >
                  <option value="">Not promoted</option>
                  <option value="northern">Northern</option>
                  <option value="zanzibar">Zanzibar</option>
                  <option value="southern">Southern</option>
                </select>
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-[#210c00]">Sort Order</span>
                <input
                  name="sortOrder"
                  type="number"
                  defaultValue={String(defaults.sortOrder)}
                  className="w-full rounded-2xl border border-[#d9c3a8] px-4 py-3"
                />
              </label>
              <label className="flex items-center gap-3 rounded-2xl border border-[#d9c3a8] px-4 py-3">
                <input name="isPublished" type="checkbox" defaultChecked={defaults.isPublished} className="h-4 w-4" />
                <span className="text-sm font-medium text-[#210c00]">Published</span>
              </label>
            </div>

            <label className="mt-4 block">
              <span className="mb-2 block text-sm font-medium text-[#210c00]">Short Description</span>
              <textarea
                name="description"
                required
                rows={4}
                defaultValue={defaults.description}
                className="w-full rounded-2xl border border-[#d9c3a8] px-4 py-3"
              />
            </label>

            <label className="mt-4 block">
              <span className="mb-2 block text-sm font-medium text-[#210c00]">Highlights (one per line)</span>
              <textarea
                name="highlights"
                rows={5}
                defaultValue={defaults.highlights.join("\n")}
                className="w-full rounded-2xl border border-[#d9c3a8] px-4 py-3"
              />
            </label>
          </section>

          <ItineraryDetailsEditor initialDetails={defaults.details} imageSuggestions={imageSuggestions} />

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="submit"
              className="rounded-full bg-[#f88518] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#c24503]"
            >
              Save Itinerary
            </button>
          </div>
        </form>

        {defaults.slug ? (
          <form action={deleteItineraryAction} className="mt-3">
            <input type="hidden" name="slug" value={defaults.slug} />
            <button
              type="submit"
              className="rounded-full border border-red-200 px-5 py-3 text-sm font-semibold text-red-700 transition hover:bg-red-50"
            >
              Delete Itinerary
            </button>
          </form>
        ) : null}
      </div>
    </details>
  )
}

export default async function AdminItinerariesPage({
  searchParams,
}: {
  searchParams: Promise<{ saved?: string; deleted?: string }>
}) {
  const params = await searchParams
  const imageSuggestions = await getPublicImageSuggestions()

  let itineraries: EditableItinerary[] = []
  let loadError: string | null = null

  try {
    itineraries = await getAdminItineraries()
  } catch (error) {
    loadError = error instanceof Error ? error.message : "We couldn't load your existing itineraries from Supabase."
  }

  const newItineraryDefaults: EditableItinerary = {
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
    isPublished: true,
    details: createDefaultItineraryPageDetails({
      slug: "",
      title: "",
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
    }),
  }

  return (
    <div className="space-y-8">
      <section className="rounded-[2rem] border border-[#eadcc8] bg-white p-6 shadow-sm">
        <h1 className="text-3xl font-serif font-bold text-[#210c00]">Itineraries</h1>
        <p className="mt-2 max-w-3xl text-gray-600">
          Manage the catalog cards, the homepage promoted tours, and the actual public itinerary pages from one place.
          You can now add new Zanzibar packages, mountain climbs, or safari itineraries here without creating a new
          route file.
        </p>

        {params.saved ? (
          <div className="mt-4 rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
            Itinerary saved successfully.
          </div>
        ) : null}

        {params.deleted ? (
          <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-700">
            Itinerary deleted successfully.
          </div>
        ) : null}

        {loadError ? (
          <div className="mt-4 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            Existing itineraries could not be loaded: {loadError}
          </div>
        ) : null}
      </section>

      <ItineraryForm
        title="Add New Itinerary"
        defaults={newItineraryDefaults}
        imageSuggestions={imageSuggestions}
        initiallyOpen
      />

      {itineraries.length ? (
        <section className="space-y-4">
          <div className="rounded-[2rem] border border-[#eadcc8] bg-white p-5 shadow-sm">
            <h2 className="text-2xl font-serif font-bold text-[#210c00]">Existing Itineraries</h2>
            <p className="mt-2 text-sm text-gray-600">
              Expand a tour to update its card data, public page content, pricing note, and day-by-day plan.
            </p>
          </div>

          <div className="grid gap-5">
            {itineraries.map((item) => (
              <ItineraryForm
                key={item.slug}
                title={item.title}
                defaults={item}
                imageSuggestions={imageSuggestions}
              />
            ))}
          </div>
        </section>
      ) : null}
    </div>
  )
}
