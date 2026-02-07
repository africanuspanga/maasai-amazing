"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { ItineraryCard } from "@/components/itinerary-card"
import { useLanguage } from "@/components/language-provider"

interface Itinerary {
  id: string
  title: string
  duration: string
  image: string
  destinations: string
  groupSize: string
  description: string
  highlights: string[]
  priceFrom: string
  category: string
}

export function ItinerariesPageContent({ itineraries }: { itineraries: Itinerary[] }) {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/safari-zebras-ngorongoro.jpg"
            alt="Safari zebras in Ngorongoro"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black mb-4 leading-tight">
            {t("itineraries.pageTitle")}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl leading-relaxed">
            {t("itineraries.pageSubtitle")}
          </p>
        </div>
      </section>

      {/* Northern Circuit Safaris & Kilimanjaro */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#d97706] mb-4">
              {t("itineraries.northernKiliTitle")}
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              {t("itineraries.northernKiliSubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {itineraries.filter(itinerary => itinerary.category === 'northern').map((itinerary) => (
              <ItineraryCard key={itinerary.id} itinerary={itinerary} theme="amber" />
            ))}
          </div>
        </div>
      </section>

      {/* Zanzibar Beach Packages */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-cyan-50 via-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0891b2] mb-4">
              {t("itineraries.zanzibarBeachTitle")}
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              {t("itineraries.zanzibarBeachSubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {itineraries.filter(itinerary => itinerary.category === 'zanzibar').map((itinerary) => (
              <ItineraryCard key={itinerary.id} itinerary={itinerary} theme="teal" />
            ))}
          </div>
        </div>
      </section>

      {/* Southern Circuit Safaris */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#55331e] mb-4">
              {t("itineraries.southernPackTitle")}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t("itineraries.southernPackSubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {itineraries.filter(itinerary => itinerary.category === 'safari').map((itinerary) => (
              <ItineraryCard key={itinerary.id} itinerary={itinerary} theme="brown" />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-[#55331e] text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
            {t("itineraries.ctaTitle")}
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            {t("itineraries.ctaSubtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#f88f2f] hover:bg-[#e67e1e] text-white text-lg px-8 py-3">
              <Link href="/contact">{t("itineraries.planCustom")}</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#55331e] text-lg px-8 py-3 bg-transparent"
            >
              <Link href="https://wa.me/255784258765" target="_blank">
                {t("itineraries.chatWhatsapp")}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
