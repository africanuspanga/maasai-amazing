import { deleteItineraryAction, saveItineraryAction } from "@/app/admin/actions"
import { getAdminItineraries } from "@/lib/cms/service"

function ItineraryForm({
  title,
  defaults,
}: {
  title: string
  defaults: {
    slug: string
    title: string
    shortTitle: string
    featuredSubtitle: string
    duration: string
    image: string
    destinations: string
    groupSize: string
    description: string
    highlights: string[]
    priceFrom: string
    category: string
    featuredSection: string
    sortOrder: number
    bookTourName: string
    isPublished: boolean
  }
}) {
  return (
    <div className="rounded-[2rem] border border-[#eadcc8] bg-white p-5 shadow-sm">
      <h2 className="text-xl font-serif font-bold text-[#210c00]">{title}</h2>
      <form action={saveItineraryAction} className="mt-5 space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-[#210c00]">Slug</span>
            <input name="slug" defaultValue={defaults.slug} className="w-full rounded-2xl border border-[#d9c3a8] px-4 py-3" />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-[#210c00]">Full Title</span>
            <input name="title" defaultValue={defaults.title} className="w-full rounded-2xl border border-[#d9c3a8] px-4 py-3" />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-[#210c00]">Short Title</span>
            <input name="shortTitle" defaultValue={defaults.shortTitle} className="w-full rounded-2xl border border-[#d9c3a8] px-4 py-3" />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-[#210c00]">Featured Subtitle</span>
            <input
              name="featuredSubtitle"
              defaultValue={defaults.featuredSubtitle}
              className="w-full rounded-2xl border border-[#d9c3a8] px-4 py-3"
            />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-[#210c00]">Duration</span>
            <input name="duration" defaultValue={defaults.duration} className="w-full rounded-2xl border border-[#d9c3a8] px-4 py-3" />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-[#210c00]">Price From</span>
            <input name="priceFrom" defaultValue={defaults.priceFrom} className="w-full rounded-2xl border border-[#d9c3a8] px-4 py-3" />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-[#210c00]">Image Path</span>
            <input name="image" defaultValue={defaults.image} className="w-full rounded-2xl border border-[#d9c3a8] px-4 py-3" />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-[#210c00]">Destinations</span>
            <input
              name="destinations"
              defaultValue={defaults.destinations}
              className="w-full rounded-2xl border border-[#d9c3a8] px-4 py-3"
            />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-[#210c00]">Group Size</span>
            <input name="groupSize" defaultValue={defaults.groupSize} className="w-full rounded-2xl border border-[#d9c3a8] px-4 py-3" />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-[#210c00]">Booking Tour Name</span>
            <input
              name="bookTourName"
              defaultValue={defaults.bookTourName}
              className="w-full rounded-2xl border border-[#d9c3a8] px-4 py-3"
            />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-[#210c00]">Category</span>
            <select name="category" defaultValue={defaults.category} className="w-full rounded-2xl border border-[#d9c3a8] px-4 py-3">
              <option value="northern">Northern</option>
              <option value="zanzibar">Zanzibar</option>
              <option value="safari">Safari</option>
            </select>
          </label>
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-[#210c00]">Featured Section</span>
            <select
              name="featuredSection"
              defaultValue={defaults.featuredSection}
              className="w-full rounded-2xl border border-[#d9c3a8] px-4 py-3"
            >
              <option value="">Not featured</option>
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

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-[#210c00]">Description</span>
          <textarea
            name="description"
            rows={4}
            defaultValue={defaults.description}
            className="w-full rounded-2xl border border-[#d9c3a8] px-4 py-3"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-[#210c00]">Highlights (one per line)</span>
          <textarea
            name="highlights"
            rows={5}
            defaultValue={defaults.highlights.join("\n")}
            className="w-full rounded-2xl border border-[#d9c3a8] px-4 py-3"
          />
        </label>

        <button
          type="submit"
          className="rounded-full bg-[#f88518] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#c24503]"
        >
          Save Itinerary
        </button>
      </form>
      {defaults.slug ? (
        <form action={deleteItineraryAction} className="mt-3">
          <input type="hidden" name="slug" value={defaults.slug} />
          <button
            type="submit"
            className="rounded-full border border-red-200 px-5 py-3 text-sm font-semibold text-red-700 transition hover:bg-red-50"
          >
            Delete
          </button>
        </form>
      ) : null}
    </div>
  )
}

export default async function AdminItinerariesPage({
  searchParams,
}: {
  searchParams: Promise<{ saved?: string; deleted?: string }>
}) {
  await searchParams
  const itineraries = await getAdminItineraries()

  return (
    <div className="space-y-8">
      <section className="rounded-[2rem] border border-[#eadcc8] bg-white p-6 shadow-sm">
        <h1 className="text-3xl font-serif font-bold text-[#210c00]">Itineraries</h1>
        <p className="mt-2 max-w-3xl text-gray-600">
          These records drive the homepage featured tour cards, the `/itineraries` page, and the booking modal tour
          labels. The detailed itinerary pages are still largely static, but their most important sales data now comes
          from this central catalog.
        </p>
      </section>

      <ItineraryForm
        title="Add New Itinerary"
        defaults={{
          slug: "",
          title: "",
          shortTitle: "",
          featuredSubtitle: "",
          duration: "",
          image: "",
          destinations: "",
          groupSize: "",
          description: "",
          highlights: [],
          priceFrom: "",
          category: "safari",
          featuredSection: "",
          sortOrder: 0,
          bookTourName: "",
          isPublished: true,
        }}
      />

      <div className="grid gap-6">
        {itineraries.map((item) => (
          <ItineraryForm
            key={item.slug}
            title={item.title}
            defaults={{
              slug: item.slug,
              title: item.title,
              shortTitle: item.shortTitle,
              featuredSubtitle: item.featuredSubtitle ?? "",
              duration: item.duration,
              image: item.image,
              destinations: item.destinations,
              groupSize: item.groupSize,
              description: item.description,
              highlights: item.highlights,
              priceFrom: item.priceFrom,
              category: item.category,
              featuredSection: item.featuredSection ?? "",
              sortOrder: item.sortOrder,
              bookTourName: item.bookTourName ?? "",
              isPublished: true,
            }}
          />
        ))}
      </div>
    </div>
  )
}
