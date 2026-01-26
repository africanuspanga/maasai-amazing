import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Calendar, DollarSign, Users, CheckCircle, X } from "lucide-react"

export const metadata = {
  title: "6 Day Bush to Beach Experience | Saitoti Tours",
  description:
    "The perfect combination of wild adventure and tropical relaxation. Start with wildlife tracking in Nyerere NP and end on the white sands of Zanzibar.",
}

export default function BushToBeachPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/zanzibar-aerial.jpg"
            alt="Bush to Beach - Zanzibar"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </div>
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-black mb-4 leading-tight">
            6 Day Bush to Beach Experience
          </h1>
          <p className="text-lg md:text-xl mb-6">Nyerere National Park to Zanzibar Island</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>6 Days</span>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5" />
              <span>$1,947 - $2,102</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span>2-6 people</span>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#55331e] mb-6">Tour Overview</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                The perfect combination of wild adventure and tropical relaxation. Start with wildlife tracking in Nyerere National Park, then transition to the pristine white sands and turquoise waters of Zanzibar.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Experience boat safaris on the Rufiji River, walking safaris through untouched wilderness, spice plantation tours, historical Stone Town exploration, and beach relaxation in one unforgettable journey.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-[#55331e] mb-3">Tour Highlights</h3>
                    <ul className="space-y-2">
                      {[
                        "Rufiji River boat safari",
                        "Walking safari in Nyerere",
                        "Stone Town historical tour",
                        "Prison Island giant tortoises",
                        "Zanzibar spice plantations",
                        "Beach relaxation in Nungwi",
                      ].map((highlight, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#f88f2f] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-[#55331e] mb-3">What's Included</h3>
                    <ul className="space-y-2">
                      {[
                        "4x4 safari vehicle",
                        "All park fees",
                        "Full board meals",
                        "Boat/walking safaris",
                        "Zanzibar activities",
                        "Ferry tickets",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="lg:col-span-1">
              <Card className="sticky top-24 shadow-xl border-2 border-[#f88f2f]/20">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <p className="text-sm text-gray-600 mb-2">Price per person</p>
                    <p className="text-4xl font-bold text-[#f88f2f]">$1,947 - $2,102</p>
                    <p className="text-sm text-gray-500 mt-1">Group size dependent</p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <Button asChild className="w-full bg-[#f88f2f] hover:bg-[#e67e1e] text-white text-lg py-6">
                      <Link href="/contact">Book This Tour</Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-[#f88f2f] text-[#f88f2f] hover:bg-[#f88f2f] hover:text-white text-lg py-6 bg-transparent"
                    >
                      <Link href="https://wa.me/255784258765" target="_blank">
                        WhatsApp Inquiry
                      </Link>
                    </Button>
                  </div>

                  <div className="border-t pt-6">
                    <h3 className="font-bold text-[#55331e] mb-3">Quick Info</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Duration:</span>
                        <span className="font-semibold">6 Days</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Group Size:</span>
                        <span className="font-semibold">2-6 People</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Style:</span>
                        <span className="font-semibold">Safari + Beach</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Start/End:</span>
                        <span className="font-semibold">Dar es Salaam</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Itinerary */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#55331e] mb-12 text-center">
            Detailed Day-by-Day Itinerary
          </h2>

          <div className="space-y-6">
            {[
              {
                day: "1-2",
                title: "Nyerere National Park Safari",
                description:
                  "Wildlife viewing and boat safaris in Nyerere National Park. Experience the diverse ecosystems along the Rufiji River, spot hippos, crocodiles, elephants, and abundant birdlife as you explore this vast wilderness.",
              },
              {
                day: 3,
                title: "Walking Safari & Ferry to Zanzibar",
                description:
                  "Morning walking safari to see animals on foot - an exhilarating experience that brings you closer to nature. After lunch, transfer by ferry to Zanzibar. Check-in at your beachfront resort in Nungwi.",
              },
              {
                day: 4,
                title: "Beach Relaxation Day",
                description:
                  "Full day of relaxation on the pristine beaches of Nungwi. Swim in the crystal-clear turquoise waters, snorkel among colorful fish, or simply unwind on the white sand with a refreshing drink.",
              },
              {
                day: 5,
                title: "Zanzibar Culture & History",
                description:
                  "Morning spice tour through fragrant plantations of cloves, vanilla, and cardamom. Visit the giant Aldabra tortoises on Prison Island, then explore the winding alleys and historical buildings of UNESCO-listed Stone Town.",
              },
              {
                day: 6,
                title: "Departure",
                description:
                  "Enjoy a final breakfast with ocean views before catching the ferry back to Dar es Salaam. Arrive with incredible memories of wildlife encounters and tropical paradise.",
              },
            ].map((item) => (
              <Card key={item.day} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-[#f88f2f] rounded-full flex items-center justify-center">
                        <span className="text-xl font-bold text-white">Day {item.day}</span>
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl md:text-2xl font-bold text-[#55331e] mb-3">{item.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Included/Excluded */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#55331e] mb-12 text-center">
            What's Included & Excluded
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-2 border-green-200">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-2xl font-bold text-green-700 mb-6 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6" />
                  Included
                </h3>
                <ul className="space-y-3">
                  {[
                    "4x4 safari vehicle with pop-up roof",
                    "Professional English-speaking guide",
                    "All park entrance fees",
                    "Full board meals throughout",
                    "Boat safari on Rufiji River",
                    "Walking safari in Nyerere",
                    "Ferry tickets to Zanzibar",
                    "Stone Town tour",
                    "Prison Island excursion",
                    "Spice plantation tour",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-200">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-2xl font-bold text-red-700 mb-6 flex items-center gap-2">
                  <X className="w-6 h-6" />
                  Excluded
                </h3>
                <ul className="space-y-3">
                  {[
                    "International flights",
                    "Tanzania tourist visa",
                    "Travel insurance",
                    "Tips and gratuities",
                    "Alcoholic beverages",
                    "Personal items and souvenirs",
                    "Optional activities not mentioned",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-[#55331e] text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">Experience the Best of Both Worlds</h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Combine thrilling wildlife encounters with tropical beach paradise on this unforgettable journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#f88f2f] hover:bg-[#e67e1e] text-white text-lg px-8 py-3">
              <Link href="/contact">Book Now</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#55331e] text-lg px-8 py-3 bg-transparent"
            >
              <Link href="/itineraries">View All Itineraries</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
