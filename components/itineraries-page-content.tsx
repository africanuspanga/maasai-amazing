"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { ItineraryCard } from "@/components/itinerary-card"
import { useSiteSettings } from "@/components/site-settings-provider"
import type { ItinerariesIndexContent, ItineraryRecord } from "@/lib/cms/schema"

function ListingSection({
  title,
  subtitle,
  className,
  titleClassName,
  subtitleClassName,
  itineraries,
  theme,
  maxWidthClassName = "",
}: {
  title: string
  subtitle: string
  className: string
  titleClassName: string
  subtitleClassName: string
  itineraries: ItineraryRecord[]
  theme: "amber" | "teal" | "brown"
  maxWidthClassName?: string
}) {
  if (!itineraries.length) {
    return null
  }

  return (
    <section className={className}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-serif font-bold mb-4 ${titleClassName}`}>{title}</h2>
          <p className={`text-lg max-w-3xl mx-auto ${subtitleClassName}`}>{subtitle}</p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 ${maxWidthClassName}`}>
          {itineraries.map((itinerary) => (
            <ItineraryCard key={itinerary.slug} itinerary={itinerary} theme={theme} />
          ))}
        </div>
      </div>
    </section>
  )
}

export function ItinerariesPageContent({
  itineraries,
  content,
}: {
  itineraries: ItineraryRecord[]
  content: ItinerariesIndexContent
}) {
  const settings = useSiteSettings()
  const destinationItems = itineraries.filter((itinerary) => itinerary.category === "destination")
  const kilimanjaroItems = itineraries.filter((itinerary) => itinerary.category === "kilimanjaro")
  const northernItems = itineraries.filter((itinerary) => itinerary.category === "northern")
  const zanzibarItems = itineraries.filter((itinerary) => itinerary.category === "zanzibar")
  const safariItems = itineraries.filter((itinerary) => itinerary.category === "safari")

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={content.heroImage}
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
            {content.heroTitle}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl leading-relaxed">
            {content.heroSubtitle}
          </p>
        </div>
      </section>

      <ListingSection
        title={content.destinationTitle}
        subtitle={content.destinationSubtitle}
        className="py-16 md:py-20 bg-[#fff9f2]"
        titleClassName="text-[#210c00]"
        subtitleClassName="text-gray-700"
        itineraries={destinationItems}
        theme="amber"
      />

      <ListingSection
        title={content.kilimanjaroTitle}
        subtitle={content.kilimanjaroSubtitle}
        className="py-16 md:py-20 bg-gradient-to-br from-slate-50 via-stone-50 to-orange-50"
        titleClassName="text-[#210c00]"
        subtitleClassName="text-gray-700"
        itineraries={kilimanjaroItems}
        theme="brown"
      />

      <ListingSection
        title={content.northernTitle}
        subtitle={content.northernSubtitle}
        className="py-16 md:py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50"
        titleClassName="text-[#c24503]"
        subtitleClassName="text-gray-700"
        itineraries={northernItems}
        theme="amber"
      />

      <ListingSection
        title={content.zanzibarTitle}
        subtitle={content.zanzibarSubtitle}
        className="py-16 md:py-20 bg-gradient-to-br from-cyan-50 via-blue-50 to-teal-50"
        titleClassName="text-[#c24503]"
        subtitleClassName="text-gray-700"
        itineraries={zanzibarItems}
        theme="teal"
        maxWidthClassName="max-w-6xl mx-auto"
      />

      <ListingSection
        title={content.southernTitle}
        subtitle={content.southernSubtitle}
        className="py-16 md:py-20 bg-white"
        titleClassName="text-[#210c00]"
        subtitleClassName="text-gray-600"
        itineraries={safariItems}
        theme="brown"
      />

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-[#210c00] text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
            {content.ctaTitle}
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            {content.ctaSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#f88518] hover:bg-[#c24503] text-white text-lg px-8 py-3">
              <Link href={content.ctaPrimaryHref}>{content.ctaPrimaryLabel}</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#210c00] text-lg px-8 py-3 bg-transparent"
            >
              <Link href={`https://wa.me/${settings.whatsappNumber}`} target="_blank">
                {content.ctaSecondaryLabel}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-[#f88518] via-[#c24503] to-[#f88518]" />
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
