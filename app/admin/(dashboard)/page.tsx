import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import { AlertCircle, ArrowRight, CheckCircle2, Clock3, Handshake, Inbox, Package2, Settings, Star } from "lucide-react"
import { getAdminDashboardData } from "@/lib/cms/service"

const statToneClasses = {
  red: "bg-[#f9ebeb] text-[#d6111a]",
  green: "bg-[#e8f8ee] text-[#0f9f4f]",
  amber: "bg-[#fff2e2] text-[#c66a00]",
  blue: "bg-[#eaf2ff] text-[#2563eb]",
  purple: "bg-[#f1eaff] text-[#7c3aed]",
  teal: "bg-[#e6f7f5] text-[#0f766e]",
}

const categoryRows = [
  { key: "destination", label: "Destinations" },
  { key: "kilimanjaro", label: "Kilimanjaro" },
  { key: "northern", label: "Northern" },
  { key: "zanzibar", label: "Zanzibar" },
  { key: "safari", label: "Southern Safari" },
] as const

type DashboardData = Awaited<ReturnType<typeof getAdminDashboardData>>

function formatDate(value: string | null | undefined) {
  if (!value) {
    return "No updates yet"
  }

  return new Intl.DateTimeFormat("en", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value))
}

function StatCard({
  title,
  value,
  detail,
  icon: Icon,
  tone,
  href,
}: {
  title: string
  value: number
  detail: string
  icon: LucideIcon
  tone: keyof typeof statToneClasses
  href?: string
}) {
  const content = (
    <div className="h-full rounded-[2rem] border border-[#eadcc8] bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className={`inline-flex rounded-2xl px-4 py-3 ${statToneClasses[tone]}`}>
        <Icon className="h-6 w-6" />
      </div>
      <p className="mt-4 text-sm font-medium text-gray-500">{title}</p>
      <p className="mt-1 text-4xl font-semibold text-[#210c00]">{value}</p>
      <p className="mt-2 text-sm text-gray-600">{detail}</p>
    </div>
  )

  if (!href) {
    return content
  }

  return (
    <Link href={href} className="block h-full">
      {content}
    </Link>
  )
}

function ActionLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#210c00] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#3a1808]"
    >
      {label}
      <ArrowRight className="h-4 w-4" />
    </Link>
  )
}

function PackageMix({ data }: { data: DashboardData }) {
  return (
    <section className="rounded-[2rem] border border-[#eadcc8] bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold text-[#210c00]">Package Mix</h2>
          <p className="mt-1 text-sm text-gray-600">Catalog categories used by the package manager.</p>
        </div>
        <Package2 className="h-6 w-6 text-[#d6111a]" />
      </div>

      <div className="mt-5 space-y-3">
        {categoryRows.map((item) => {
          const count = data.categoryCounts[item.key]
          const percent = data.itinerariesCount ? Math.round((count / data.itinerariesCount) * 100) : 0

          return (
            <div key={item.key}>
              <div className="mb-1 flex items-center justify-between text-sm">
                <span className="font-medium text-[#210c00]">{item.label}</span>
                <span className="text-gray-500">{count}</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-[#f3e7d8]">
                <div className="h-full rounded-full bg-[#d6111a]" style={{ width: `${percent}%` }} />
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

function RecentInquiries({ data }: { data: DashboardData }) {
  return (
    <section className="rounded-[2rem] border border-[#eadcc8] bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold text-[#210c00]">Recent Inquiries</h2>
          <p className="mt-1 text-sm text-gray-600">{data.newInquiriesCount} new requests waiting.</p>
        </div>
        <Inbox className="h-6 w-6 text-[#2563eb]" />
      </div>

      <div className="mt-5 space-y-3">
        {data.recentInquiries.length ? (
          data.recentInquiries.map((item) => (
            <div key={item.id} className="rounded-2xl border border-[#eadcc8] bg-[#fcfaf7] px-4 py-3">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <p className="font-medium text-[#210c00]">{item.full_name || item.email}</p>
                <span className="text-xs font-semibold uppercase text-[#2563eb]">{item.status}</span>
              </div>
              <p className="mt-1 text-sm text-gray-600">{item.tour_name || item.inquiry_type}</p>
              <p className="mt-1 text-xs text-gray-500">{formatDate(item.created_at)}</p>
            </div>
          ))
        ) : (
          <div className="rounded-2xl border border-[#eadcc8] bg-[#fcfaf7] px-4 py-5 text-sm text-gray-600">
            No inquiries yet.
          </div>
        )}
      </div>
    </section>
  )
}

function SystemStatus({ data }: { data: DashboardData }) {
  const latestSettingsUpdate = data.settings.reduce<string | null>((latest, item) => {
    if (!item.updated_at) {
      return latest
    }

    if (!latest || new Date(item.updated_at).getTime() > new Date(latest).getTime()) {
      return item.updated_at
    }

    return latest
  }, null)

  return (
    <section className="rounded-[2rem] border border-[#eadcc8] bg-white p-5 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="inline-flex rounded-2xl bg-[#e8f8ee] px-4 py-3 text-[#0f9f4f]">
          <CheckCircle2 className="h-6 w-6" />
        </span>
        <div>
          <h2 className="text-xl font-semibold text-[#210c00]">System Status</h2>
          <p className="mt-1 text-sm text-gray-600">Supabase admin connection is live.</p>
        </div>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl border border-[#eadcc8] bg-[#fcfaf7] px-4 py-3">
          <p className="text-sm font-medium text-gray-500">CMS Sections</p>
          <p className="mt-1 text-2xl font-semibold text-[#210c00]">{data.settings.length}</p>
        </div>
        <div className="rounded-2xl border border-[#eadcc8] bg-[#fcfaf7] px-4 py-3">
          <p className="text-sm font-medium text-gray-500">Last CMS Update</p>
          <p className="mt-1 text-base font-semibold text-[#210c00]">{formatDate(latestSettingsUpdate)}</p>
        </div>
      </div>
    </section>
  )
}

export default async function AdminOverviewPage() {
  let data: DashboardData | null = null
  let loadError: string | null = null

  try {
    data = await getAdminDashboardData()
  } catch (error) {
    loadError = error instanceof Error ? error.message : "Dashboard data could not be loaded."
  }

  return (
    <div className="space-y-6">
      <section className="rounded-[2rem] border border-[#eadcc8] bg-white p-5 shadow-sm sm:p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-[#210c00] sm:text-3xl">Admin Dashboard</h1>
            <p className="mt-2 max-w-3xl text-sm text-gray-600 sm:text-base">
              Live CMS totals from Supabase for packages, settings, leads, partners, and testimonials.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ActionLink href="/admin/itineraries" label="Manage Packages" />
            <ActionLink href="/admin/settings" label="Edit Settings" />
          </div>
        </div>
      </section>

      {loadError ? (
        <section className="rounded-[2rem] border border-red-200 bg-red-50 p-5 text-red-800 shadow-sm">
          <div className="flex items-start gap-3">
            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
            <div>
              <h2 className="font-semibold">Dashboard data could not load</h2>
              <p className="mt-1 text-sm">{loadError}</p>
            </div>
          </div>
        </section>
      ) : null}

      {data ? (
        <>
          <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            <StatCard
              title="Packages"
              value={data.itinerariesCount}
              detail={`${data.publishedCount} active, ${data.inactiveCount} inactive`}
              icon={Package2}
              tone="red"
              href="/admin/itineraries"
            />
            <StatCard
              title="Inquiries"
              value={data.inquiriesCount}
              detail={`${data.newInquiriesCount} new requests`}
              icon={Inbox}
              tone="blue"
            />
            <StatCard
              title="Page Settings"
              value={data.settings.length}
              detail="Editable CMS sections"
              icon={Settings}
              tone="amber"
              href="/admin/settings"
            />
            <StatCard
              title="Testimonials"
              value={data.testimonialsCount}
              detail={`${data.publishedTestimonialsCount} published`}
              icon={Star}
              tone="purple"
            />
            <StatCard
              title="Partners"
              value={data.partnersCount}
              detail={`${data.publishedPartnersCount} published`}
              icon={Handshake}
              tone="teal"
            />
            <StatCard
              title="Published Packages"
              value={data.publishedCount}
              detail="Visible on the public site"
              icon={Clock3}
              tone="green"
              href="/admin/itineraries"
            />
          </section>

          <section className="grid gap-4 xl:grid-cols-2">
            <PackageMix data={data} />
            <RecentInquiries data={data} />
          </section>

          <SystemStatus data={data} />
        </>
      ) : null}
    </div>
  )
}
