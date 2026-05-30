/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import WhatsAppFloat from "@/components/whatsapp-float"
import { BookNowButton } from "@/components/book-now-button"
import { ItineraryCard } from "@/components/itinerary-card"
import Link from "next/link"
import { getPublishedItineraries, getZanzibarPageContent } from "@/lib/cms/service"

export const dynamic = "force-dynamic"
export const revalidate = 0

export const metadata = {
  title: "Zanzibar Beach Holidays & Tours | Spice Island Packages",
  description:
    "Discover Zanzibar's pristine beaches, historic Stone Town, and spice plantations. 4-8 day beach holiday packages with Maasai Amazing Safaris. Book your tropical escape.",
  alternates: {
    canonical: "https://maasaiamazingsafaris.com/zanzibar",
  },
}

export default async function ZanzibarPage() {
  const [itineraries, content] = await Promise.all([
    getPublishedItineraries(),
    getZanzibarPageContent(),
  ])
  const zanzibarPackages = itineraries.filter((itinerary) => itinerary.category === "zanzibar")

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <WhatsAppFloat />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center bg-gradient-to-r from-[#210c00]/90 to-[#f88518]/90">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif">{content.heroTitle}</h1>
          <p className="text-xl md:text-2xl mb-8 font-sans">{content.heroKicker}</p>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            {content.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#210c00] mb-6 font-serif">
            {content.introTitle}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {content.introBody}
          </p>
        </div>
      </section>

      {zanzibarPackages.length ? (
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#210c00] mb-4 font-serif">
                {content.packagesTitle}
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {content.packagesSubtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {zanzibarPackages.map((itinerary) => (
                <ItineraryCard key={itinerary.slug} itinerary={itinerary} theme="teal" />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Featured Tours */}
      <section className="py-16 px-4 bg-[#faf6f1]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#210c00] mb-4 font-serif">
              {content.experiencesTitle}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {content.experiencesSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.experiences.map((tour) => (
              <Card key={tour.name} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img
                    src={tour.image}
                    alt={tour.alt}
                    className="w-full h-full object-cover"
                  />
                </div>

                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-[#210c00] font-serif">{tour.name}</h3>
                    <span className="text-sm bg-[#f88518] text-white px-2 py-1 rounded">{tour.duration}</span>
                  </div>
                  <p className="text-gray-600 mb-4 font-sans">{tour.description}</p>
                  <ul className="space-y-2 mb-6">
                    {tour.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-[#f88518] mt-1">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <BookNowButton tourName={tour.bookTourName} className="w-full bg-[#f88518] hover:bg-[#c24503] text-white">Book Experience</BookNowButton>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Beach Paradise Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#210c00] mb-6 font-serif">
                {content.beachTitle}
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {content.beachBody}
              </p>
              <ul className="space-y-3 mb-8">
                {content.beachHighlights.map((highlight) => (
                  <li key={highlight} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#f88518] rounded-full"></span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" className="bg-[#f88518] hover:bg-[#c24503] text-white">
                <Link href={content.beachCtaHref}>{content.beachCtaLabel}</Link>
              </Button>
            </div>
            <div className="h-96 bg-gray-200 rounded-lg overflow-hidden">
              <img
                src={content.beachImage}
                alt={content.beachImageAlt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#210c00] text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">{content.ctaTitle}</h2>
          <p className="text-lg mb-8 opacity-90">
            {content.ctaSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#f88518] hover:bg-[#c24503] text-white px-8">
              <Link href={content.ctaPrimaryHref}>{content.ctaPrimaryLabel}</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#210c00] px-8 bg-transparent"
            >
              <Link href={content.ctaSecondaryHref}>{content.ctaSecondaryLabel}</Link>
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
