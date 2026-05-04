import Link from "next/link"
import { getAdminDashboardData } from "@/lib/cms/service"

const cards = [
  {
    href: "/admin/settings",
    title: "Page Settings",
    description: "Update the Home, About, Contact, and global brand content.",
    key: "settings",
  },
  {
    href: "/admin/itineraries",
    title: "Itineraries",
    description: "Manage itinerary cards, featured prices, durations, and sales copy.",
    key: "itineraries",
  },
  {
    href: "/admin/testimonials",
    title: "Testimonials",
    description: "Edit traveler quotes, ratings, headshots, and featured tour references.",
    key: "testimonials",
  },
  {
    href: "/admin/partners",
    title: "Partners",
    description: "Control trust logos and partner badges shown on the homepage.",
    key: "partners",
  },
  {
    href: "/admin/inquiries",
    title: "Inquiries",
    description: "Review booking requests captured from the website and update follow-up status.",
    key: "inquiries",
  },
]

export default async function AdminOverviewPage() {
  const data = await getAdminDashboardData()

  const metrics = {
    settings: data.settings.length,
    itineraries: data.itinerariesCount,
    testimonials: data.testimonialsCount,
    partners: data.partnersCount,
    inquiries: data.inquiriesCount,
  }

  return (
    <div className="space-y-8">
      <section className="rounded-[2rem] bg-white p-6 shadow-sm border border-[#eadcc8]">
        <h2 className="text-3xl font-serif font-bold text-[#210c00]">Overview</h2>
        <p className="mt-2 max-w-3xl text-gray-600">
          This dashboard is connected to Supabase for editable site content and lead capture. Use the sections below
          to keep tour pricing, homepage messaging, contact details, testimonials, and partner logos current without
          editing code.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {cards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="rounded-[2rem] border border-[#eadcc8] bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-[#c24503]">Count</p>
            <p className="mt-2 text-3xl font-serif font-bold text-[#210c00]">
              {metrics[card.key as keyof typeof metrics]}
            </p>
            <h3 className="mt-4 text-lg font-semibold text-[#210c00]">{card.title}</h3>
            <p className="mt-2 text-sm text-gray-600">{card.description}</p>
          </Link>
        ))}
      </section>

      <section className="rounded-[2rem] border border-[#eadcc8] bg-white p-6 shadow-sm">
        <h3 className="text-2xl font-serif font-bold text-[#210c00]">Recent CMS Sections</h3>
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
