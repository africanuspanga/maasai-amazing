"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useLanguage } from "@/components/language-provider"
import { type Locale, localeNames, localeFlags } from "@/lib/translations"
import { Logo } from "@/components/logo"

function LanguageSwitcher({ variant = "desktop" }: { variant?: "desktop" | "mobile" }) {
  const { locale, setLocale, t } = useLanguage()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const locales: Locale[] = ["en", "fr", "es", "zh"]

  if (variant === "mobile") {
    return (
      <div className="px-2 py-3">
        <div className="flex items-center gap-2 mb-3 text-sm font-semibold text-[#210c00]">
          <Globe className="w-4 h-4 text-[#f88518]" />
          <span>Language</span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {locales.map((loc) => (
            <button
              key={loc}
              onClick={() => setLocale(loc)}
              className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                locale === loc
                  ? "bg-[#f88518] text-white"
                  : "bg-gray-50 text-[#210c00] hover:bg-gray-100"
              }`}
            >
              <span className="text-lg">{localeFlags[loc]}</span>
              <span>{localeNames[loc]}</span>
            </button>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-[#210c00] hover:bg-gray-50 transition-colors text-sm font-medium"
        aria-label="Select language"
        aria-expanded={open}
      >
        <span className="text-lg">{localeFlags[locale]}</span>
        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-44 bg-white rounded-xl shadow-lg border border-gray-100 py-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
          {locales.map((loc) => (
            <button
              key={loc}
              onClick={() => {
                setLocale(loc)
                setOpen(false)
              }}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                locale === loc
                  ? "bg-[#f88518]/10 text-[#f88518] font-semibold"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              <span className="text-lg">{localeFlags[loc]}</span>
              <span>{localeNames[loc]}</span>
              {locale === loc && (
                <svg className="w-4 h-4 ml-auto text-[#f88518]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useLanguage()

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
        <div className="flex justify-between items-center h-20 md:h-22 lg:h-24">
          {/* Logo */}
          <div onClick={handleLinkClick} className="py-2">
            <Logo size="xl" showText={false} />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-5 xl:space-x-7">
            <Link
              href="/"
              className="text-[#210c00] hover:text-[#f88518] transition-colors font-medium text-sm xl:text-base"
            >
              {t("nav.home")}
            </Link>
            <Link
              href="/about"
              className="text-[#210c00] hover:text-[#f88518] transition-colors font-medium text-sm xl:text-base"
            >
              {t("nav.about")}
            </Link>

            {/* Safari Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-[#210c00] hover:text-[#f88518] transition-colors font-medium text-sm xl:text-base">
                <span>{t("nav.safari")}</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-48">
                <DropdownMenuItem asChild>
                  <Link href="/northern-circuit" className="w-full">
                    {t("nav.northernCircuit")}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/southern-circuit" className="w-full">
                    {t("nav.southernCircuit")}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/hidden-gems" className="w-full">
                    {t("nav.hiddenGems")}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/historical-sites" className="w-full">
                    {t("nav.historicalSites")}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/culture" className="w-full">
                    {t("nav.culture")}
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/zanzibar"
              className="text-[#210c00] hover:text-[#f88518] transition-colors font-medium text-sm xl:text-base"
            >
              {t("nav.zanzibar")}
            </Link>

            <Link
              href="/itineraries"
              className="text-[#210c00] hover:text-[#f88518] transition-colors font-medium text-sm xl:text-base"
            >
              {t("nav.itineraries")}
            </Link>

            {/* Trekking Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-[#210c00] hover:text-[#f88518] transition-colors font-medium text-sm xl:text-base">
                <span>{t("nav.trekking")}</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-48">
                <DropdownMenuItem asChild>
                  <Link href="/kilimanjaro" className="w-full">
                    {t("nav.kilimanjaro")}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/mt-meru" className="w-full">
                    {t("nav.mtMeru")}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/oldonyo-lengai" className="w-full">
                    {t("nav.oldonyoLengai")}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/usambara-mountains" className="w-full">
                    {t("nav.usambaraMountains")}
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <LanguageSwitcher variant="desktop" />

            <Button asChild className="bg-[#f88518] hover:bg-[#c24503] text-white text-sm xl:text-base">
              <Link href="/contact">{t("nav.contact")}</Link>
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
                className="text-[#210c00] hover:text-[#f88518] transition-colors font-medium py-2 px-2 rounded-md hover:bg-gray-50"
                onClick={handleLinkClick}
              >
                {t("nav.home")}
              </Link>
              <Link
                href="/about"
                className="text-[#210c00] hover:text-[#f88518] transition-colors font-medium py-2 px-2 rounded-md hover:bg-gray-50"
                onClick={handleLinkClick}
              >
                {t("nav.about")}
              </Link>

              {/* Mobile Safari Section */}
              <div className="pl-2 space-y-2 py-2">
                <div className="font-semibold text-[#210c00] text-sm mb-2">{t("nav.safari")}</div>
                <Link
                  href="/northern-circuit"
                  className="block text-[#210c00] hover:text-[#f88518] transition-colors py-2 px-3 rounded-md hover:bg-gray-50 text-sm"
                  onClick={handleLinkClick}
                >
                  {t("nav.northernCircuit")}
                </Link>
                <Link
                  href="/southern-circuit"
                  className="block text-[#210c00] hover:text-[#f88518] transition-colors py-2 px-3 rounded-md hover:bg-gray-50 text-sm"
                  onClick={handleLinkClick}
                >
                  {t("nav.southernCircuit")}
                </Link>
                <Link
                  href="/hidden-gems"
                  className="block text-[#210c00] hover:text-[#f88518] transition-colors py-2 px-3 rounded-md hover:bg-gray-50 text-sm"
                  onClick={handleLinkClick}
                >
                  {t("nav.hiddenGems")}
                </Link>
                <Link
                  href="/historical-sites"
                  className="block text-[#210c00] hover:text-[#f88518] transition-colors py-2 px-3 rounded-md hover:bg-gray-50 text-sm"
                  onClick={handleLinkClick}
                >
                  {t("nav.historicalSites")}
                </Link>
                <Link
                  href="/culture"
                  className="block text-[#210c00] hover:text-[#f88518] transition-colors py-2 px-3 rounded-md hover:bg-gray-50 text-sm"
                  onClick={handleLinkClick}
                >
                  {t("nav.culture")}
                </Link>
              </div>

              <Link
                href="/zanzibar"
                className="text-[#210c00] hover:text-[#f88518] transition-colors font-medium py-2 px-2 rounded-md hover:bg-gray-50"
                onClick={handleLinkClick}
              >
                {t("nav.zanzibar")}
              </Link>

              <Link
                href="/itineraries"
                className="text-[#210c00] hover:text-[#f88518] transition-colors font-medium py-2 px-2 rounded-md hover:bg-gray-50"
                onClick={handleLinkClick}
              >
                {t("nav.itineraries")}
              </Link>

              {/* Mobile Trekking Section */}
              <div className="pl-2 space-y-2 py-2">
                <div className="font-semibold text-[#210c00] text-sm mb-2">{t("nav.trekking")}</div>
                <Link
                  href="/kilimanjaro"
                  className="block text-[#210c00] hover:text-[#f88518] transition-colors py-2 px-3 rounded-md hover:bg-gray-50 text-sm"
                  onClick={handleLinkClick}
                >
                  {t("nav.kilimanjaro")}
                </Link>
                <Link
                  href="/mt-meru"
                  className="block text-[#210c00] hover:text-[#f88518] transition-colors py-2 px-3 rounded-md hover:bg-gray-50 text-sm"
                  onClick={handleLinkClick}
                >
                  {t("nav.mtMeru")}
                </Link>
                <Link
                  href="/oldonyo-lengai"
                  className="block text-[#210c00] hover:text-[#f88518] transition-colors py-2 px-3 rounded-md hover:bg-gray-50 text-sm"
                  onClick={handleLinkClick}
                >
                  {t("nav.oldonyoLengai")}
                </Link>
                <Link
                  href="/usambara-mountains"
                  className="block text-[#210c00] hover:text-[#f88518] transition-colors py-2 px-3 rounded-md hover:bg-gray-50 text-sm"
                  onClick={handleLinkClick}
                >
                  {t("nav.usambaraMountains")}
                </Link>
              </div>

              {/* Mobile Language Switcher */}
              <div className="border-t border-gray-100 pt-3 mt-1">
                <LanguageSwitcher variant="mobile" />
              </div>

              <div className="pt-2">
                <Button asChild className="bg-[#f88518] hover:bg-[#c24503] w-full" onClick={handleLinkClick}>
                  <Link href="/contact">{t("nav.contact")}</Link>
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
