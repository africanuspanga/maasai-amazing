import Link from "next/link"
import { logoutAction } from "@/app/admin/actions"
import { requireAdminSession } from "@/lib/admin-session"

const navItems = [
  { href: "/admin", label: "Overview" },
  { href: "/admin/settings", label: "Settings" },
  { href: "/admin/itineraries", label: "Tours & Pricing" },
]

export default async function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await requireAdminSession()

  return (
    <div className="min-h-screen bg-[#f7f1ea]">
      <header className="sticky top-0 z-40 border-b border-[#e5d6c2] bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:py-5 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#c24503]">Maasai Amazing Safaris</p>
            <h1 className="text-xl font-serif font-bold text-[#210c00] sm:text-2xl">Content Dashboard</h1>
            <p className="break-all text-xs text-gray-600 sm:text-sm">{session.email}</p>
          </div>

          <form action={logoutAction} className="w-full lg:w-auto">
            <button
              type="submit"
              className="w-full rounded-full border border-[#d9c3a8] px-4 py-3 text-sm font-medium text-[#210c00] transition hover:border-[#f88518] hover:text-[#c24503] lg:w-auto lg:px-4 lg:py-2"
            >
              Sign Out
            </button>
          </form>
        </div>

        <nav className="mx-auto max-w-7xl px-4 pb-4 lg:px-8 lg:pb-5">
          <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="shrink-0 whitespace-nowrap rounded-full bg-[#210c00] px-4 py-2.5 text-sm font-medium text-white transition hover:bg-[#c24503]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-7xl px-3 py-5 pb-10 sm:px-4 sm:py-6 lg:px-8 lg:py-8">{children}</main>
    </div>
  )
}
