import Link from "next/link"
import { logoutAction } from "@/app/admin/actions"
import { requireAdminSession } from "@/lib/admin-session"

const navItems = [
  { href: "/admin", label: "Overview" },
  { href: "/admin/settings", label: "Settings" },
  { href: "/admin/itineraries", label: "Itineraries" },
  { href: "/admin/testimonials", label: "Testimonials" },
  { href: "/admin/partners", label: "Partners" },
  { href: "/admin/inquiries", label: "Inquiries" },
]

export default async function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await requireAdminSession()

  return (
    <div className="min-h-screen bg-[#f7f1ea]">
      <header className="border-b border-[#e5d6c2] bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#c24503]">Maasai Amazing Safaris</p>
            <h1 className="text-2xl font-serif font-bold text-[#210c00]">Content Dashboard</h1>
            <p className="text-sm text-gray-600">{session.email}</p>
          </div>

          <form action={logoutAction}>
            <button
              type="submit"
              className="rounded-full border border-[#d9c3a8] px-4 py-2 text-sm font-medium text-[#210c00] transition hover:border-[#f88518] hover:text-[#c24503]"
            >
              Sign Out
            </button>
          </form>
        </div>

        <nav className="mx-auto max-w-7xl px-4 pb-5 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full bg-[#210c00] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#c24503]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 lg:px-8">{children}</main>
    </div>
  )
}
