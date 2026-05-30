"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/itineraries", label: "Packages" },
  { href: "/admin/settings", label: "Settings" },
]

function isActive(pathname: string, href: string) {
  if (href === "/admin") {
    return pathname === href
  }

  return pathname === href || pathname.startsWith(`${href}/`)
}

export function AdminDashboardNav() {
  const pathname = usePathname()

  return (
    <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {navItems.map((item) => {
        const active = isActive(pathname, item.href)

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`shrink-0 whitespace-nowrap rounded-full px-4 py-2.5 text-sm font-medium transition ${
              active
                ? "bg-[#d6111a] text-white shadow-sm"
                : "border border-[#eadcc8] bg-white text-[#210c00] hover:border-[#d6111a] hover:text-[#d6111a]"
            }`}
          >
            {item.label}
          </Link>
        )
      })}
    </div>
  )
}
