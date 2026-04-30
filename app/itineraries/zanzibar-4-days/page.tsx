import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Calendar, Users, CheckCircle, X, ArrowLeft, Waves } from "lucide-react"
import { BookNowButton } from "@/components/book-now-button"

export const metadata = {
  title: "Zanzibar 4 Days / 3 Nights Package | Maasai Amazing Safaris",
  description:
    "Perfect for a quick tropical getaway. This stress-free package includes airport transfers, breakfast and dinner, and two of Zanzibar's most iconic excursions.",
}

export default function Zanzibar4DaysPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/istockphoto-1297190187-612x612-tU5KAe7obcLRdB9MwYrfXj1awvu7uC.jpg"
            alt="Zanzibar Beach Paradise"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/70 via-blue-900/50 to-teal-900/70" />
        </div>
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Waves className="w-8 h-8 text-cyan-300" />
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-black mb-4 leading-tight">
            Zanzibar Short Escape
          </h1>
          <p className="text-lg md:text-xl mb-6">Quick Tropical Getaway to the Spice Island</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>4 Days / 3 Nights</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span>Flexible Group Size</span>
            </div>
          </div>
        </div>
      </section>

      {/* Back Button */}
      <div className="bg-gradient-to-br from-cyan-50 to-blue-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button asChild variant="ghost" className="text-[#c24503] hover:text-[#a33d02] hover:bg-cyan-100">
            <Link href="/itineraries">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to All Itineraries
            </Link>
          </Button>
        </div>
      </div>

      {/* Overview Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#c24503] mb-6">Package Overview</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Perfect for a quick tropical getaway. This stress-free package includes airport transfers, breakfast and dinner, and two of Zanzibar's most iconic excursions.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Experience the sensory journey through the "Spice Island," explore historic Stone Town, meet giant Aldabra tortoises on Prison Island, and swim with dolphins while snorkeling in crystal-clear waters.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <Card className="border-2 border-cyan-200 bg-white">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-[#c24503] mb-3">Package Highlights</h3>
                    <ul className="space-y-2">
                      {[
                        "Stone Town historical tour",
                        "Spice Farm sensory experience",
                        "Prison Island giant tortoises",
                        "Mnemba dolphin swimming",
                        "Snorkeling coral reefs",
                        "Traditional spiced rice lunch",
                      ].map((highlight, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#c24503] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2 border-cyan-200 bg-white">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-[#c24503] mb-3">What's Included</h3>
                    <ul className="space-y-2">
                      {[
                        "Airport transfers",
                        "Breakfast & dinner daily",
                        "All entrance fees",
                        "Professional guides",
                        "Transport to excursions",
                        "Snorkeling equipment",
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
              <Card className="sticky top-24 shadow-xl border-2 border-cyan-200 bg-white">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <p className="text-sm text-gray-600 mb-2">Starting from</p>
                    <p className="text-4xl font-bold text-[#c24503]">$706</p>
                    <p className="text-sm text-gray-500 mt-1">Per person</p>
                    <p className="text-xs text-gray-500 mt-2">Contact for 3*, 4*, and 5* hotel tiers</p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <BookNowButton tourName="Zanzibar 4 Days / 3 Nights Package" className="w-full bg-[#c24503] hover:bg-[#a33d02] text-white text-lg py-6">Book This Package</BookNowButton>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-[#c24503] text-[#c24503] hover:bg-[#c24503] hover:text-white text-lg py-6 bg-transparent"
                    >
                      <Link href="https://wa.me/255760246801" target="_blank">
                        WhatsApp Inquiry
                      </Link>
                    </Button>
                  </div>

                  <div className="border-t pt-6">
                    <h3 className="font-bold text-[#c24503] mb-3">Quick Info</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Duration:</span>
                        <span className="font-semibold">4 Days / 3 Nights</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Meals:</span>
                        <span className="font-semibold">Half Board</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Activities:</span>
                        <span className="font-semibold">2 Excursions</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Airport:</span>
                        <span className="font-semibold">ZNZ Included</span>
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
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#c24503] mb-12 text-center">
            Day-by-Day Itinerary
          </h2>

          <div className="space-y-6">
            {[
              {
                day: 1,
                title: "Arrival & Hotel Transfer",
                description:
                  "Meet our driver at Zanzibar International Airport. Look for your name on our signboard! We'll handle your luggage and provide a smooth transfer to your hotel. Check in, relax, and enjoy your first evening in paradise.",
              },
              {
                day: 2,
                title: "Stone Town, Spice Farms & Prison Island",
                description:
                  "A sensory journey through the 'Spice Island.' Smell and taste fresh cardamom and cloves at authentic spice plantations, explore the historic UNESCO-listed streets of Stone Town, enjoy a traditional spiced rice lunch, and visit the giant Aldabra tortoises on Prison Island. Learn about the island's rich Swahili culture and colonial history.",
              },
              {
                day: 3,
                title: "Mnemba Dolphins & Snorkeling (Half Day)",
                description:
                  "Head to the North Coast (Matemwe) for an early morning dolphin encounter. Swim alongside these playful creatures in their natural habitat, then snorkel among the vibrant coral reefs of Mnemba Island. Marvel at colorful tropical fish, sea turtles, and stunning underwater landscapes. Return to your hotel for a relaxing afternoon.",
              },
              {
                day: 4,
                title: "Departure Transfer",
                description:
                  "Enjoy your final breakfast with ocean views before our driver transfers you back to Zanzibar International Airport in time for your flight. Depart with unforgettable memories of the Spice Island.",
              },
            ].map((item) => (
              <Card key={item.day} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-2 border-cyan-100">
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-[#c24503] rounded-full flex items-center justify-center">
                        <span className="text-xl font-bold text-white">Day {item.day}</span>
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl md:text-2xl font-bold text-[#c24503] mb-3">{item.title}</h3>
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
      <section className="py-16 md:py-20 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#c24503] mb-12 text-center">
            What's Included & Excluded
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-2 border-green-200 bg-white">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-2xl font-bold text-green-700 mb-6 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6" />
                  Included
                </h3>
                <ul className="space-y-3">
                  {[
                    "3, 4, or 5-Star accommodation",
                    "Daily breakfast & dinner",
                    "Round-trip airport transfers",
                    "All entrance fees",
                    "Professional English-speaking guides",
                    "Stone Town tour",
                    "Prison Island excursion",
                    "Spice plantation tour",
                    "Mnemba dolphin & snorkeling",
                    "Snorkeling equipment provided",
                    "Excursion transport",
                    "Drinking water during tours",
                    "Local SIM card",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-200 bg-white">
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
                    "Lunch meals",
                    "Alcoholic beverages",
                    "Tips and gratuities",
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
      <section className="py-16 md:py-20 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
            Ready for Your Zanzibar Escape?
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Book your 4-day tropical getaway and experience the magic of the Spice Island
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BookNowButton tourName="Zanzibar 4 Days / 3 Nights Package" size="lg" className="bg-white text-[#c24503] hover:bg-gray-100 text-lg px-8 py-3">Book Now</BookNowButton>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#c24503] text-lg px-8 py-3 bg-transparent"
            >
              <Link href="/itineraries">View All Packages</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
