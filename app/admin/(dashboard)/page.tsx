import Link from "next/link"
import { getAdminDashboardData } from "@/lib/cms/service"

const cards = [
  {
    href: "/admin/settings",
    title: "Site Settings",
    description: "Edit homepage messaging, destination cards, itinerary section headers, and brand contact details.",
    countKey: "settings",
  },
  {
    href: "/admin/itineraries",
    title: "Tours & Pricing",
    description: "Add and edit destinations, Kilimanjaro routes, Zanzibar tours, safaris, and their pricing.",
    countKey: "itineraries",
  },
] as const

export default async function AdminOverviewPage() {
  const data = await getAdminDashboardData()

  const metrics = {
    settings: data.settings.length,
    itineraries: data.itinerariesCount,
  }

  return (
    <div className="space-y-6 sm:space-y-8">
      <section className="rounded-[2rem] border border-[#eadcc8] bg-white p-5 shadow-sm sm:p-6">
        <h2 className="text-2xl font-serif font-bold text-[#210c00] sm:text-3xl">Overview</h2>
        <p className="mt-2 max-w-3xl text-gray-600">
          This dashboard is now focused on the parts that matter most for your team: destinations, routes, tours, and
          pricing. Use the sections below to keep the trip catalog and homepage promotions current without editing
          code.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {cards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="rounded-[2rem] border border-[#eadcc8] bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-[#c24503]">Count</p>
            <p className="mt-2 text-3xl font-serif font-bold text-[#210c00]">
              {metrics[card.countKey]}
            </p>
            <h3 className="mt-4 text-lg font-semibold text-[#210c00]">{card.title}</h3>
            <p className="mt-2 text-sm text-gray-600">{card.description}</p>
          </Link>
        ))}
      </section>

      <section className="rounded-[2rem] border border-[#eadcc8] bg-white p-5 shadow-sm sm:p-6">
        <h3 className="text-xl font-serif font-bold text-[#210c00] sm:text-2xl">Catalog Snapshot</h3>
        <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          <div className="rounded-2xl bg-[#f7f1ea] px-4 py-4">
            <p className="text-xs uppercase tracking-[0.24em] text-[#c24503]">Published</p>
            <p className="mt-2 text-2xl font-serif font-bold text-[#210c00]">{data.publishedCount}</p>
          </div>
          <div className="rounded-2xl bg-[#f7f1ea] px-4 py-4">
            <p className="text-xs uppercase tracking-[0.24em] text-[#c24503]">Destinations</p>
            <p className="mt-2 text-2xl font-serif font-bold text-[#210c00]">{data.categoryCounts.destination}</p>
          </div>
          <div className="rounded-2xl bg-[#f7f1ea] px-4 py-4">
            <p className="text-xs uppercase tracking-[0.24em] text-[#c24503]">Kilimanjaro</p>
            <p className="mt-2 text-2xl font-serif font-bold text-[#210c00]">{data.categoryCounts.kilimanjaro}</p>
          </div>
          <div className="rounded-2xl bg-[#f7f1ea] px-4 py-4">
            <p className="text-xs uppercase tracking-[0.24em] text-[#c24503]">Northern</p>
            <p className="mt-2 text-2xl font-serif font-bold text-[#210c00]">{data.categoryCounts.northern}</p>
          </div>
          <div className="rounded-2xl bg-[#f7f1ea] px-4 py-4">
            <p className="text-xs uppercase tracking-[0.24em] text-[#c24503]">Zanzibar</p>
            <p className="mt-2 text-2xl font-serif font-bold text-[#210c00]">{data.categoryCounts.zanzibar}</p>
          </div>
          <div className="rounded-2xl bg-[#f7f1ea] px-4 py-4">
            <p className="text-xs uppercase tracking-[0.24em] text-[#c24503]">Southern</p>
            <p className="mt-2 text-2xl font-serif font-bold text-[#210c00]">{data.categoryCounts.safari}</p>
          </div>
        </div>
      </section>

      <section className="rounded-[2rem] border border-[#eadcc8] bg-white p-5 shadow-sm sm:p-6">
        <h3 className="text-xl font-serif font-bold text-[#210c00] sm:text-2xl">Recent CMS Sections</h3>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {data.settings.map((item) => (
            <div key={item.key} className="rounded-2xl bg-[#f7f1ea] px-4 py-3">
              <p className="font-medium text-[#210c00]">{item.key}</p>
              <p className="text-sm text-gray-600">
                Last updated: {item.updated_at ? new Date(item.updated_at).toLocaleString() : "Not available"}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
