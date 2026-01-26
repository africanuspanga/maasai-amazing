"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false)
      }
    }

    const handleClickOutside = (event: MouseEvent) => {
      const nav = document.querySelector("nav")
      if (nav && !nav.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    document.addEventListener("click", handleClickOutside)

    return () => {
      window.removeEventListener("resize", handleResize)
      document.removeEventListener("click", handleClickOutside)
    }
  }, [])

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center py-2 flex-shrink-0" onClick={handleLinkClick}>
            <Image
              src="/images/saitoti-new-logo.png"
              alt="Saitoti Tours & Safaris"
              width={120}
              height={120}
              className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link
              href="/"
              className="text-[#55331e] hover:text-[#f88f2f] transition-colors font-medium text-sm xl:text-base"
            >
              HOME
            </Link>
            <Link
              href="/about"
              className="text-[#55331e] hover:text-[#f88f2f] transition-colors font-medium text-sm xl:text-base"
            >
              ABOUT
            </Link>

            {/* Safari Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-[#55331e] hover:text-[#f88f2f] transition-colors font-medium text-sm xl:text-base">
                <span>SAFARI</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-48">
                <DropdownMenuItem asChild>
                  <Link href="/northern-circuit" className="w-full">
                    Northern Circuit
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/southern-circuit" className="w-full">
                    Southern Circuit
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/hidden-gems" className="w-full">
                    Hidden Gems
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/historical-sites" className="w-full">
                    Historical Sites
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/culture" className="w-full">
                    Culture
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/zanzibar"
              className="text-[#55331e] hover:text-[#f88f2f] transition-colors font-medium text-sm xl:text-base"
            >
              ZANZIBAR
            </Link>

            <Link
              href="/itineraries"
              className="text-[#55331e] hover:text-[#f88f2f] transition-colors font-medium text-sm xl:text-base"
            >
              ITINERARIES
            </Link>

            {/* Trekking Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-[#55331e] hover:text-[#f88f2f] transition-colors font-medium text-sm xl:text-base">
                <span>TREKKING</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-48">
                <DropdownMenuItem asChild>
                  <Link href="/kilimanjaro" className="w-full">
                    Kilimanjaro
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/mt-meru" className="w-full">
                    Mt Meru
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/oldonyo-lengai" className="w-full">
                    Oldonyo Lengai
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/usambara-mountains" className="w-full">
                    Usambara Mountains
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button asChild className="bg-[#f88f2f] hover:bg-[#e67e1e] text-sm xl:text-base">
              <Link href="/contact">CONTACT</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="h-10 w-10"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 bg-white/95 backdrop-blur">
            <div className="flex flex-col space-y-3">
              <Link
                href="/"
                className="text-[#55331e] hover:text-[#f88f2f] transition-colors font-medium py-2 px-2 rounded-md hover:bg-gray-50"
                onClick={handleLinkClick}
              >
                HOME
              </Link>
              <Link
                href="/about"
                className="text-[#55331e] hover:text-[#f88f2f] transition-colors font-medium py-2 px-2 rounded-md hover:bg-gray-50"
                onClick={handleLinkClick}
              >
                ABOUT
              </Link>

              {/* Mobile Safari Section */}
              <div className="pl-2 space-y-2 py-2">
                <div className="font-semibold text-[#55331e] text-sm mb-2">SAFARI</div>
                <Link
                  href="/northern-circuit"
                  className="block text-[#55331e] hover:text-[#f88f2f] transition-colors py-2 px-3 rounded-md hover:bg-gray-50 text-sm"
                  onClick={handleLinkClick}
                >
                  Northern Circuit
                </Link>
                <Link
                  href="/southern-circuit"
                  className="block text-[#55331e] hover:text-[#f88f2f] transition-colors py-2 px-3 rounded-md hover:bg-gray-50 text-sm"
                  onClick={handleLinkClick}
                >
                  Southern Circuit
                </Link>
                <Link
                  href="/hidden-gems"
                  className="block text-[#55331e] hover:text-[#f88f2f] transition-colors py-2 px-3 rounded-md hover:bg-gray-50 text-sm"
                  onClick={handleLinkClick}
                >
                  Hidden Gems
                </Link>
                <Link
                  href="/historical-sites"
                  className="block text-[#55331e] hover:text-[#f88f2f] transition-colors py-2 px-3 rounded-md hover:bg-gray-50 text-sm"
                  onClick={handleLinkClick}
                >
                  Historical Sites
                </Link>
                <Link
                  href="/culture"
                  className="block text-[#55331e] hover:text-[#f88f2f] transition-colors py-2 px-3 rounded-md hover:bg-gray-50 text-sm"
                  onClick={handleLinkClick}
                >
                  Culture
                </Link>
              </div>

              <Link
                href="/zanzibar"
                className="text-[#55331e] hover:text-[#f88f2f] transition-colors font-medium py-2 px-2 rounded-md hover:bg-gray-50"
                onClick={handleLinkClick}
              >
                ZANZIBAR
              </Link>

              <Link
                href="/itineraries"
                className="text-[#55331e] hover:text-[#f88f2f] transition-colors font-medium py-2 px-2 rounded-md hover:bg-gray-50"
                onClick={handleLinkClick}
              >
                ITINERARIES
              </Link>

              {/* Mobile Trekking Section */}
              <div className="pl-2 space-y-2 py-2">
                <div className="font-semibold text-[#55331e] text-sm mb-2">TREKKING</div>
                <Link
                  href="/kilimanjaro"
                  className="block text-[#55331e] hover:text-[#f88f2f] transition-colors py-2 px-3 rounded-md hover:bg-gray-50 text-sm"
                  onClick={handleLinkClick}
                >
                  Kilimanjaro
                </Link>
                <Link
                  href="/mt-meru"
                  className="block text-[#55331e] hover:text-[#f88f2f] transition-colors py-2 px-3 rounded-md hover:bg-gray-50 text-sm"
                  onClick={handleLinkClick}
                >
                  Mt Meru
                </Link>
                <Link
                  href="/oldonyo-lengai"
                  className="block text-[#55331e] hover:text-[#f88f2f] transition-colors py-2 px-3 rounded-md hover:bg-gray-50 text-sm"
                  onClick={handleLinkClick}
                >
                  Oldonyo Lengai
                </Link>
                <Link
                  href="/usambara-mountains"
                  className="block text-[#55331e] hover:text-[#f88f2f] transition-colors py-2 px-3 rounded-md hover:bg-gray-50 text-sm"
                  onClick={handleLinkClick}
                >
                  Usambara Mountains
                </Link>
              </div>

              <div className="pt-2">
                <Button asChild className="bg-[#f88f2f] hover:bg-[#e67e1e] w-full" onClick={handleLinkClick}>
                  <Link href="/contact">CONTACT</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
