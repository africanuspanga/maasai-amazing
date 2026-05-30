import Image from "next/image"
import Link from "next/link"
import { Eye, LogOut } from "lucide-react"
import { logoutAction } from "@/app/admin/actions"
import { AdminDashboardNav } from "@/components/admin/admin-dashboard-nav"
import { requireAdminSession } from "@/lib/admin-session"

export default async function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await requireAdminSession()

  return (
    <div className="min-h-screen bg-[#f7f1ea]">
      <header className="sticky top-0 z-40 border-b border-[#e8dccd] bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:py-5 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="flex items-center gap-4">
            <div className="relative h-14 w-24 shrink-0">
              <Image
                src="/images/saitoti-logo-new.png"
                alt="Maasai Amazing Safaris logo"
                fill
                className="object-contain"
                sizes="96px"
              />
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-[#210c00]">Admin Dashboard</h1>
              <p className="text-sm text-gray-600">Manage CMS content and safari packages</p>
              <p className="break-all text-xs text-gray-500">{session.email}</p>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#eadcc8] px-4 py-3 text-sm font-medium text-[#210c00] transition hover:border-[#d6111a] hover:text-[#d6111a]"
            >
              <Eye className="h-4 w-4" />
              View Site
            </Link>

            <form action={logoutAction}>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#eadcc8] px-4 py-3 text-sm font-medium text-[#210c00] transition hover:border-[#d6111a] hover:text-[#d6111a] sm:w-auto"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </button>
            </form>
          </div>
        </div>

        <nav className="mx-auto max-w-7xl px-4 pb-4 lg:px-8 lg:pb-5">
          <AdminDashboardNav />
        </nav>
      </header>

      <main className="mx-auto max-w-7xl px-3 py-5 pb-10 sm:px-4 sm:py-6 lg:px-8 lg:py-8">{children}</main>
    </div>
  )
}
