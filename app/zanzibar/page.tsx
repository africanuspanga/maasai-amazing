import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navigation from "@/components/navigation"
import WhatsAppFloat from "@/components/whatsapp-float"
import { BookNowButton } from "@/components/book-now-button"
import Link from "next/link"

export default function ZanzibarPage() {
  const tours = [
    {
      name: "Stone Town Tour",
      description: "Historic UNESCO site exploration",
      duration: "Half Day",
      highlights: ["UNESCO World Heritage Site", "Spice markets and bazaars", "Historical architecture"],
    },
    {
      name: "Prison Island Tour",
      description: "Giant tortoises and history",
      duration: "Half Day",
      highlights: ["Giant Aldabra tortoises", "Historical prison ruins", "Snorkeling opportunities"],
    },
    {
      name: "Spice Tour",
      description: "Aromatic spice plantation experience",
      duration: "Half Day",
      highlights: ["Tropical spice plantations", "Fresh fruit tasting", "Traditional cooking demonstrations"],
    },
    {
      name: "Nungwi Turtle Sanctuary",
      description: "Marine conservation experience",
      duration: "Half Day",
      highlights: ["Sea turtle conservation", "Marine education", "Beautiful Nungwi beach"],
    },
    {
      name: "The Rock Restaurant",
      description: "Iconic dining experience",
      duration: "Evening",
      highlights: ["Unique rock location", "Fresh seafood", "Stunning ocean views"],
    },
    {
      name: "Nakupenda Beach",
      description: "Sandbank paradise",
      duration: "Full Day",
      highlights: ["Pristine sandbank", "Crystal clear waters", "Seafood barbecue"],
    },
    {
      name: "Sunset Yachting",
      description: "Romantic dhow cruise",
      duration: "Evening",
      highlights: ["Traditional dhow sailing", "Spectacular sunsets", "Romantic atmosphere"],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <WhatsAppFloat />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center bg-gradient-to-r from-[#55331e]/90 to-[#f88f2f]/90">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif">Zanzibar</h1>
          <p className="text-xl md:text-2xl mb-8 font-sans">The Spice Island Paradise</p>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Discover the magic of Zanzibar, where pristine beaches meet rich cultural heritage. This tropical paradise
            offers the perfect blend of relaxation and adventure, from historic Stone Town to crystal-clear waters and
            spice-scented breezes.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#55331e] mb-6 font-serif">
            Where History Meets Paradise
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Zanzibar is more than just a destination—it's a sensory journey through centuries of culture, trade, and
            natural beauty. From the labyrinthine streets of Stone Town to the powder-soft beaches of the north coast,
            every corner tells a story of sultans, spices, and seafaring adventures.
          </p>
        </div>
      </section>

      {/* Featured Tours */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#55331e] mb-4 font-serif">
              Featured Zanzibar Experiences
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Immerse yourself in the diverse experiences that make Zanzibar truly magical.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gray-200 overflow-hidden">
                  {tour.name === "Stone Town Tour" && (
                    <img
                      src="/images/stone-town-fort.jpeg"
                      alt="Historic Stone Town fort with Islamic architecture"
                      className="w-full h-full object-cover"
                    />
                  )}
                  {tour.name === "Prison Island Tour" && (
                    <img
                      src="/images/prison-island-aerial.jpeg"
                      alt="Aerial view of Prison Island with pristine beaches"
                      className="w-full h-full object-cover"
                    />
                  )}
                  {tour.name === "Spice Tour" && (
                    <img
                      src="/images/spice-tour-seeds.jpeg"
                      alt="Hands holding spice pod with red seeds"
                      className="w-full h-full object-cover"
                    />
                  )}
                  {tour.name === "Nungwi Turtle Sanctuary" && (
                    <img
                      src="/images/sea-turtle.png"
                      alt="Sea turtle swimming in clear waters"
                      className="w-full h-full object-cover"
                    />
                  )}
                  {tour.name === "The Rock Restaurant" && (
                    <img
                      src="/images/rock-restaurant.png"
                      alt="Traditional thatched restaurant on stilts over water"
                      className="w-full h-full object-cover"
                    />
                  )}
                  {tour.name === "Nakupenda Beach" && (
                    <img
                      src="/images/prison-island-sandbank.png"
                      alt="Pristine white sandbank surrounded by turquoise water"
                      className="w-full h-full object-cover"
                    />
                  )}
                  {tour.name === "Sunset Yachting" && (
                    <img
                      src="/images/dhow-sunset.png"
                      alt="Traditional dhow sailboat silhouetted against sunset"
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>

                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-[#55331e] font-serif">{tour.name}</h3>
                    <span className="text-sm bg-[#f88f2f] text-white px-2 py-1 rounded">{tour.duration}</span>
                  </div>
                  <p className="text-gray-600 mb-4 font-sans">{tour.description}</p>
                  <ul className="space-y-2 mb-6">
                    {tour.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-[#f88f2f] mt-1">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <BookNowButton tourName={`Zanzibar - ${tour.name}`} className="w-full bg-[#f88f2f] hover:bg-[#e67e1a] text-white">Book Experience</BookNowButton>
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
              <h2 className="text-3xl md:text-4xl font-bold text-[#55331e] mb-6 font-serif">
                Pristine Beaches & Crystal Waters
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Zanzibar's coastline is a masterpiece of nature, featuring some of the world's most beautiful beaches.
                From the bustling shores of Stone Town to the tranquil northern beaches of Nungwi and Kendwa, each
                stretch of sand offers its own unique charm.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#f88f2f] rounded-full"></span>
                  <span>Powder-soft white sand beaches</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#f88f2f] rounded-full"></span>
                  <span>Crystal-clear turquoise waters</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#f88f2f] rounded-full"></span>
                  <span>World-class snorkeling and diving</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#f88f2f] rounded-full"></span>
                  <span>Romantic sunset sailing</span>
                </li>
              </ul>
              <Button size="lg" className="bg-[#f88f2f] hover:bg-[#e67e1a] text-white">
                <Link href="/contact">Explore Beach Experiences</Link>
              </Button>
            </div>
            <div className="h-96 bg-gray-200 rounded-lg overflow-hidden">
              <img
                src="/images/tropical-beach.jpg"
                alt="Pristine tropical beach with crystal clear waters"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#55331e] text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">Ready to Experience Zanzibar Magic?</h2>
          <p className="text-lg mb-8 opacity-90">
            Let us create your perfect Zanzibar getaway, combining culture, adventure, and relaxation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#f88f2f] hover:bg-[#e67e1a] text-white px-8">
              <Link href="/contact">Plan Your Trip</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#55331e] px-8 bg-transparent"
            >
              <Link href="/contact">Get Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
