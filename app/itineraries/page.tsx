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
    id: "northern-7-days",
    title: "7-Day Natural Wonders Safari",
    duration: "7 Days / 6 Nights",
    image: "/images/northern-circuit-flamingos.jpg",
    destinations: "Lake Manyara, Serengeti, Ngorongoro",
    groupSize: "2-6 people",
    description:
      "Experience two of Africa's Seven Natural Wonders: the Serengeti and Ngorongoro Crater. This journey showcases the best of Tanzania's northern circuit.",
    highlights: [
      "Great Migration in Serengeti",
      "Ngorongoro Crater descent",
      "Tree-climbing lions in Manyara",
      "Big Five sightings",
    ],
    priceFrom: "$2,714",
    category: "northern",
  },
  {
    id: "northern-8-days",
    title: "8-Day Elephant Kingdom Safari",
    duration: "8 Days / 7 Nights",
    image: "/images/northern-circuit-elephant.jpg",
    destinations: "Tarangire, Serengeti, Ngorongoro",
    groupSize: "2-6 people",
    description:
      "Our bestseller! This extended safari adds Tarangire National Park, the 'Kingdom of Elephants' with massive herds and ancient baobab trees.",
    highlights: [
      "Giant elephant herds in Tarangire",
      "Three days in the Serengeti",
      "Ngorongoro Crater wildlife",
      "Ancient baobab forests",
    ],
    priceFrom: "$3,284",
    category: "northern",
  },
  {
    id: "northern-5-days",
    title: "5-Day Safari Extension",
    duration: "5 Days / 4 Nights",
    image: "/images/northern-circuit-balloon.jpg",
    destinations: "Manyara, Serengeti, Ngorongoro",
    groupSize: "2-6 people",
    description:
      "Perfect for travelers completing a Kilimanjaro climb or Zanzibar holiday. Experience the Big Three parks of Northern Tanzania in a private 4x4.",
    highlights: [
      "Post-Kilimanjaro adventure",
      "Serengeti game drives",
      "Crater floor experience",
      "Private safari vehicle",
    ],
    priceFrom: "$1,960",
    category: "northern",
  },
  {
    id: "northern-3-days",
    title: "3-Day Classic Northern Trio",
    duration: "3 Days / 2 Nights",
    image: "/images/northern-circuit-lions.jpg",
    destinations: "Tarangire, Ngorongoro, Manyara",
    groupSize: "1-6 people",
    description:
      "A high-impact, short-duration safari covering the legendary Tarangire, Ngorongoro Crater, and Lake Manyara. Perfect for time-conscious travelers.",
    highlights: [
      "Tarangire elephant herds",
      "Full day in Ngorongoro Crater",
      "Black rhino sightings",
      "Compact adventure",
    ],
    priceFrom: "$1,558",
    category: "northern",
  },
  {
    id: "kilimanjaro-machame",
    title: "Kilimanjaro - Machame Route",
    duration: "7 Days / 6 Nights",
    image: "/images/kilimanjaro-sunrise.jpg",
    destinations: "Mount Kilimanjaro via Machame",
    groupSize: "1-10+ people",
    description:
      "The 'Whiskey Route' offers the best acclimatization and stunning scenery. Trek through rainforests, moorlands, and high deserts to Africa's roof.",
    highlights: [
      "Climb high, sleep low strategy",
      "Barranco Wall adventure",
      "Summit at Uhuru Peak",
      "Camping under stars",
    ],
    priceFrom: "$2,589",
    category: "northern",
  },
  {
    id: "kilimanjaro-marangu",
    title: "Kilimanjaro - Marangu Route",
    duration: "6 Days / 5 Nights",
    image: "/images/kilimanjaro-climbing.jpg",
    destinations: "Mount Kilimanjaro via Marangu",
    groupSize: "1-10+ people",
    description:
      "The 'Coca-Cola Route' is the only path with hut accommodations. A classic climb with proper acclimatization built into our 6-day itinerary.",
    highlights: [
      "Hut accommodations",
      "Acclimatization day included",
      "Established classic route",
      "Summit certificate ceremony",
    ],
    priceFrom: "$2,349",
    category: "northern",
  },
  {
    id: "zanzibar-4-days",
    title: "Zanzibar Short Escape",
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
    priceFrom: "$706",
    category: "zanzibar",
  },
  {
    id: "zanzibar-5-days",
    title: "Zanzibar Classic",
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
    priceFrom: "$826",
    category: "zanzibar",
  },
  {
    id: "zanzibar-6-days",
    title: "Zanzibar Relax & Explore",
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
    priceFrom: "$1,206",
    category: "zanzibar",
  },
  {
    id: "zanzibar-7-days",
    title: "Zanzibar Ultimate Week",
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
    priceFrom: "$1,388",
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

      {/* Northern Circuit Safaris & Kilimanjaro */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#d97706] mb-4">
              Northern Circuit & Kilimanjaro Adventures
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Witness the Great Migration, climb Africa's highest peak, and explore the legendary parks of Northern Tanzania
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {itineraries.filter(itinerary => itinerary.category === 'northern').map((itinerary) => (
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 right-4 bg-[#d97706] text-white px-3 py-1 rounded-full text-sm font-semibold">
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
                      <Calendar className="w-4 h-4 text-[#d97706]" />
                      <span>{itinerary.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4 text-[#d97706]" />
                      <span>{itinerary.groupSize}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 mb-4">
                    <MapPin className="w-4 h-4 text-[#d97706] mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-600">{itinerary.destinations}</p>
                  </div>

                  <p className="text-gray-700 mb-4 text-sm leading-relaxed line-clamp-3">{itinerary.description}</p>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-[#d97706] text-sm mb-2">Highlights:</h4>
                    <ul className="space-y-1">
                      {itinerary.highlights.slice(0, 3).map((highlight, index) => (
                        <li key={index} className="text-xs text-gray-600 flex items-start gap-2">
                          <span className="text-[#d97706] mt-0.5">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Buttons */}
                  <div className="grid grid-cols-2 gap-3">
                    <Button asChild variant="outline" className="w-full border-[#d97706] text-[#d97706] hover:bg-[#d97706] hover:text-white bg-transparent">
                      <Link href={`/itineraries/${itinerary.id}`}>More Details</Link>
                    </Button>
                    <Button asChild className="w-full bg-[#d97706] hover:bg-[#b45309] text-white">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
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
