import { CardFooter } from "@/components/ui/card"
import { CardDescription } from "@/components/ui/card"
import { CardTitle } from "@/components/ui/card"
import { CardHeader } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Calendar, Users, MapPin, CheckCircle } from "lucide-react"

export const metadata = {
  title: "Tanzania Safari Itineraries | Saitoti Tours",
  description:
    "Explore our carefully crafted Tanzania safari itineraries. From luxury safaris to bush-to-beach adventures, find the perfect journey through Tanzania's wonders.",
}

const itineraries = [
  {
    id: "luxury-southern-circuit",
    title: "9 Days Luxury Southern Circuit Expedition",
    duration: "9 Days / 8 Nights",
    image: "/images/safari-vehicle.jpg",
    destinations: "Nyerere, Mikumi, Udzungwa, Ruaha",
    groupSize: "2-6 people",
    description:
      "Experience the ultimate luxury in Tanzania's southern parks. This tour combines high-end accommodations with diverse landscapes of Nyerere, Mikumi, Udzungwa, and Ruaha.",
    highlights: [
      "Boat safaris on Rufiji River",
      "Trekking Sanje Waterfalls",
      "Extensive game viewing in Ruaha",
      "Luxury accommodations",
    ],
    priceFrom: "$2,426",
    category: "safari",
  },
  {
    id: "grand-southern-adventure",
    title: "9 Days Grand Southern Adventure",
    duration: "9 Days",
    image: "/images/giraffe-baobab.jpg",
    destinations: "Nyerere, Mikumi, Udzungwa, Ruaha",
    groupSize: "2-6 people",
    description:
      "A comprehensive journey through the heart of Southern Tanzania, featuring three major national parks and a deep dive into local culture.",
    highlights: [
      "Extended game drives in Ruaha",
      "Visit to Maasai Boma",
      "Trekking Udzungwa Mountains",
      "Mid-range comfortable stays",
    ],
    priceFrom: "$1,800",
    category: "safari",
  },
  {
    id: "bush-to-beach",
    title: "6 Day Bush to Beach Experience",
    duration: "6 Days",
    image: "/images/zanzibar-aerial.jpg",
    destinations: "Nyerere NP to Zanzibar Island",
    groupSize: "2-6 people",
    description:
      "The perfect combination of wild adventure and tropical relaxation. Start with wildlife tracking in Nyerere NP and end on the white sands of Zanzibar.",
    highlights: [
      "Rufiji River boat safari",
      "Walking safari experiences",
      "Exploring Stone Town",
      "Prison Island visit",
    ],
    priceFrom: "$1,947",
    category: "safari",
  },
  {
    id: "coastal-mountain-adventure",
    title: "7 Days Coastal & Mountain Adventure",
    duration: "7 Days",
    image: "/images/waterfall-hiker.jpg",
    destinations: "Bagamoyo to Usambara",
    groupSize: "2-6 people",
    description:
      "A unique journey that bridges Tanzania's rich history with its coastal beauty and lush mountain landscapes. Visit ancient ruins and hidden forest paradise.",
    highlights: [
      "8th-century Bagamoyo ruins",
      "Boat safari in Saadani",
      "Night hiking in Amani Reserve",
      "Historical coastal towns",
    ],
    priceFrom: "$1,600",
    category: "safari",
  },
  {
    id: "wonderful-southern-expedition",
    title: "6 Days Wonderful Southern Expedition",
    duration: "6 Days",
    image: "/images/boat-sunset.jpg",
    destinations: "Nyerere, Mikumi, Udzungwa",
    groupSize: "2-6 people",
    description:
      "This comprehensive safari takes you through the diverse ecosystems of Nyerere (Selous), Mikumi, and the Udzungwa Mountains.",
    highlights: [
      "Boat safari on Rufiji River",
      "Trekking to Sanje Waterfalls",
      "Maasai village cultural visit",
      "Walking safari experience",
    ],
    priceFrom: "$1,198",
    category: "safari",
  },
  {
    id: "serengeti-of-south",
    title: "6 Days Serengeti of the South",
    duration: "6 Days",
    image: "/images/maasai-women.jpg",
    destinations: "Mikumi, Ruaha & Maasai Culture",
    groupSize: "2-6 people",
    description:
      "A deep dive into the rugged landscapes of Ruaha National Park combined with the accessible wildlife of Mikumi and authentic Maasai cultural experience.",
    highlights: [
      "Multi-day Ruaha exploration",
      "Massive elephant herds",
      "Lion and leopard tracking",
      "Authentic Maasai Boma visit",
    ],
    priceFrom: "$1,420",
    category: "safari",
  },
  {
    id: "zanzibar-4-days",
    title: "Zanzibar 4 Days / 3 Nights Package",
    duration: "4 Days / 3 Nights",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/istockphoto-1297190187-612x612-tU5KAe7obcLRdB9MwYrfXj1awvu7uC.jpg",
    destinations: "Stone Town, Prison Island, Mnemba",
    groupSize: "Flexible",
    description:
      "Perfect for a quick tropical getaway. This stress-free package includes airport transfers, breakfast and dinner, and two of Zanzibar's most iconic excursions.",
    highlights: [
      "Stone Town & Spice Farm tour",
      "Prison Island giant tortoises",
      "Mnemba dolphin swimming",
      "Snorkeling crystal waters",
    ],
    priceFrom: "$90",
    category: "zanzibar",
  },
  {
    id: "zanzibar-5-days",
    title: "Zanzibar 5 Days / 4 Nights Package",
    duration: "5 Days / 4 Nights",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/istockphoto-2198492232-612x612-DrbeX1istrIy8ckBCumvHYcubq92Wo.jpg",
    destinations: "Safari Blue, Stone Town, Mnemba",
    groupSize: "Flexible",
    description:
      "An extended stay that adds the famous Safari Blue experience to your itinerary. Includes all transfers, half-board meals, and professional guides.",
    highlights: [
      "Full-day Safari Blue trip",
      "Seafood BBQ on sandbanks",
      "Dolphin encounters",
      "Cultural Stone Town tour",
    ],
    priceFrom: "$90",
    category: "zanzibar",
  },
  {
    id: "zanzibar-6-days",
    title: "Zanzibar 6 Days / 5 Nights Package",
    duration: "6 Days / 5 Nights",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/istockphoto-2191376209-612x612-Pg774cMeJGiVjsE5UgT4KhpyS9zrdo.jpg",
    destinations: "Safari Blue, Stone Town, Free Time",
    groupSize: "Flexible",
    description:
      "This package balances adventure with a 'Chilling Day,' allowing you time to soak up the sun at your own pace while still seeing the island's top sights.",
    highlights: [
      "Safari Blue ocean adventure",
      "Full relaxation day",
      "Prison Island visit",
      "Spice plantation tour",
    ],
    priceFrom: "$90",
    category: "zanzibar",
  },
  {
    id: "zanzibar-7-days",
    title: "Zanzibar 7 Days / 6 Nights Package",
    duration: "7 Days / 6 Nights",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/istockphoto-2132790250-612x612-mx41ERncAmmDzYbHB9fcSMVDEzuXPA.jpg",
    destinations: "Safari Blue, Jozani, The Rock",
    groupSize: "Flexible",
    description:
      "Our most comprehensive tour. This week-long experience includes the legendary Rock Restaurant and the rare wildlife of Jozani Forest.",
    highlights: [
      "Red Colobus monkeys in Jozani",
      "The Rock Restaurant lunch",
      "Safari Blue experience",
      "Complete island exploration",
    ],
    priceFrom: "$90",
    category: "zanzibar",
  },
]

export default function ItinerariesPage() {
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
            Tanzania Safari Itineraries
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl leading-relaxed">
            Carefully crafted journeys through Tanzania's most spectacular destinations
          </p>
        </div>
      </section>

      {/* Southern Circuit Safaris */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#55331e] mb-4">
              Southern Circuit Safari Packages
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore Tanzania's untamed wilderness on expertly crafted safari expeditions through the Southern Circuit
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {itineraries.filter(itinerary => itinerary.category === 'safari').map((itinerary) => (
              <Card
                key={itinerary.id}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={itinerary.image || "/placeholder.svg"}
                    alt={itinerary.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 will-change-transform"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 right-4 bg-[#f88f2f] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {itinerary.priceFrom}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold mb-1 pr-4">{itinerary.title}</h3>
                  </div>
                </div>

                <CardContent className="p-6">
                  {/* Tour Info */}
                  <div className="flex flex-wrap gap-3 mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4 text-[#f88f2f]" />
                      <span>{itinerary.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4 text-[#f88f2f]" />
                      <span>{itinerary.groupSize}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 mb-4">
                    <MapPin className="w-4 h-4 text-[#f88f2f] mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-600">{itinerary.destinations}</p>
                  </div>

                  <p className="text-gray-700 mb-4 text-sm leading-relaxed line-clamp-3">{itinerary.description}</p>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-[#55331e] text-sm mb-2">Highlights:</h4>
                    <ul className="space-y-1">
                      {itinerary.highlights.slice(0, 3).map((highlight, index) => (
                        <li key={index} className="text-xs text-gray-600 flex items-start gap-2">
                          <span className="text-[#f88f2f] mt-0.5">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Buttons */}
                  <div className="grid grid-cols-2 gap-3">
                    <Button asChild variant="outline" className="w-full border-[#f88f2f] text-[#f88f2f] hover:bg-[#f88f2f] hover:text-white bg-transparent">
                      <Link href={`/itineraries/${itinerary.id}`}>More Details</Link>
                    </Button>
                    <Button asChild className="w-full bg-[#f88f2f] hover:bg-[#e67e1e] text-white">
                      <Link href="/contact">Book Now</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Zanzibar Beach Packages */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-cyan-50 via-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0891b2] mb-4">
              Zanzibar Beach Holiday Packages
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Discover the Spice Island with our all-inclusive beach getaways. From culture to crystal waters, we handle the details.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {itineraries.filter(itinerary => itinerary.category === 'zanzibar').map((itinerary) => (
              <Card
                key={itinerary.id}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={itinerary.image || "/placeholder.svg"}
                    alt={itinerary.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 will-change-transform"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute top-4 right-4 bg-[#0891b2] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    From {itinerary.priceFrom}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-bold mb-1 pr-4">{itinerary.title}</h3>
                  </div>
                </div>

                <CardContent className="p-6">
                  {/* Tour Info */}
                  <div className="flex flex-wrap gap-3 mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4 text-[#0891b2]" />
                      <span>{itinerary.duration}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 mb-4">
                    <MapPin className="w-4 h-4 text-[#0891b2] mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-600">{itinerary.destinations}</p>
                  </div>

                  <p className="text-gray-700 mb-4 text-sm leading-relaxed line-clamp-3">{itinerary.description}</p>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-[#0891b2] text-sm mb-2">Highlights:</h4>
                    <ul className="space-y-1">
                      {itinerary.highlights.slice(0, 3).map((highlight, index) => (
                        <li key={index} className="text-xs text-gray-600 flex items-start gap-2">
                          <span className="text-[#0891b2] mt-0.5">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Buttons */}
                  <div className="grid grid-cols-2 gap-3">
                    <Button asChild variant="outline" className="w-full border-[#0891b2] text-[#0891b2] hover:bg-[#0891b2] hover:text-white bg-transparent">
                      <Link href={`/itineraries/${itinerary.id}`}>More Details</Link>
                    </Button>
                    <Button asChild className="w-full bg-[#0891b2] hover:bg-[#0e7490] text-white">
                      <Link href="/contact">Book Now</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-[#55331e] text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
            Can't Find the Perfect Itinerary?
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Let us create a custom safari experience tailored to your preferences, schedule, and budget
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#f88f2f] hover:bg-[#e67e1e] text-white text-lg px-8 py-3">
              <Link href="/contact">Plan Custom Safari</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#55331e] text-lg px-8 py-3 bg-transparent"
            >
              <Link href="https://wa.me/255784258765" target="_blank">
                Chat on WhatsApp
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
