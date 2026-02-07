import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Calendar, DollarSign, Users, CheckCircle, X, ArrowLeft } from "lucide-react"
import { BookNowButton } from "@/components/book-now-button"

export const metadata = {
  title: "7 Days Coastal & Mountain Adventure | Saitoti Tours",
  description:
    "A unique journey that bridges Tanzania's rich history with its coastal beauty and lush mountain landscapes. Visit ancient ruins, Saadani National Park, and Amani Nature Reserve.",
}

export default function CoastalMountainAdventurePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/waterfall-hiker.jpg"
            alt="Coastal & Mountain Adventure"
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
            7 Days Coastal & Mountain Adventure
          </h1>
          <p className="text-lg md:text-xl mb-6">Bagamoyo - Saadani - Pangani - Usambara</p>
          <div className="mb-6">
            <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-[#55331e]">
              <Link href="/itineraries">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to All Itineraries
              </Link>
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>7 Days</span>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5" />
              <span>From $1,600 per person</span>
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
                A unique journey that bridges Tanzania's rich history with its coastal beauty and lush mountain landscapes. Visit ancient ruins dating back to the 8th century, experience a national park where wildlife meets the sea, and discover a "secret paradise" hidden in the forest.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                From exploring the historical town of Bagamoyo and its ancient ruins, to boat safaris in Saadani National Park where elephants roam along the beach, to night hiking in the mystical Amani Nature Reserve - this itinerary offers an extraordinary blend of history, wildlife, and natural beauty.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-[#55331e] mb-3">Tour Highlights</h3>
                    <ul className="space-y-2">
                      {[
                        "Explore 8th-century Bagamoyo ruins",
                        "Boat safari in Saadani National Park",
                        "Night hiking in Amani Nature Reserve",
                        "Cycling to hidden waterfalls",
                        "Historic Pangani town tour",
                        "Magoroto Forest canoeing",
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
                        "Park entry fees",
                        "All activities mentioned",
                        "Professional guide",
                        "4x4 transportation",
                        "Airport transfers",
                        "Full board meals",
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
                    <p className="text-4xl font-bold text-[#f88f2f]">From $1,600</p>
                    <p className="text-sm text-gray-500 mt-1">Contact for exact quote</p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <BookNowButton tourName="7 Days Coastal & Mountain Adventure" className="w-full bg-[#f88f2f] hover:bg-[#e67e1e] text-white text-lg py-6">Book This Tour</BookNowButton>
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
                        <span className="font-semibold">7 Days</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Group Size:</span>
                        <span className="font-semibold">2-6 People</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Style:</span>
                        <span className="font-semibold">Adventure</span>
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
                day: 1,
                title: "History in Bagamoyo",
                description:
                  "Explore Old Bagamoyo Town, Holy Ghost Mission, and Kaole Ruins to learn about ancient East African civilizations. Discover the rich history of this UNESCO World Heritage site candidate that was once a major slave trade port.",
              },
              {
                day: 2,
                title: "Saadani National Park",
                description:
                  "Experience the unique sight of wildlife on the shores of the Indian Ocean. Enjoy a boat safari on the Wami River to see hippos and crocodiles before driving to Pangani. Saadani is the only park in East Africa where the beach meets the bush.",
              },
              {
                day: 3,
                title: "Pangani City Tour",
                description:
                  "A 2-hour morning tour of the historic town of Pangani, followed by a relaxing afternoon with stunning sea views. Learn about the Swahili coast trading history and Arab influence.",
              },
              {
                day: 4,
                title: "Magoroto Forest Estate",
                description:
                  "Travel to the lush Magoroto for hiking, canoeing on the lake, and cycling to hidden waterfalls. This secret paradise in the Usambara Mountains offers breathtaking scenery and adventure activities.",
              },
              {
                day: 5,
                title: "Amani Nature Reserve - Night Hike",
                description:
                  "Evening arrival at Amani Nature Reserve and a thrilling night hike to spot rare nocturnal animal species. The reserve is one of Africa's most biodiverse areas with many endemic species.",
              },
              {
                day: 6,
                title: "Nature Trekking in Amani",
                description:
                  "A full day of hiking and birdwatching in the Amani forest, visiting waterfalls and spotting endemic species including rare birds, butterflies, and primates unique to this region.",
              },
              {
                day: 7,
                title: "Return to Dar es Salaam",
                description:
                  "Enjoy a final breakfast surrounded by nature before the return journey with a hot lunch on the way. Arrive in Dar es Salaam with memories of an extraordinary adventure.",
              },
            ].map((item) => (
              <Card key={item.day} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-[#f88f2f] rounded-full flex items-center justify-center">
                        <span className="text-2xl font-bold text-white">Day {item.day}</span>
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
                    "Park entry fees to all reserves",
                    "All activities as per itinerary",
                    "Professional English-speaking guide",
                    "4x4 safari vehicle transportation",
                    "Airport transfers",
                    "Full board meals throughout",
                    "Boat safari on Wami River",
                    "Night hike in Amani",
                    "Canoeing and cycling equipment",
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">Discover Tanzania's Hidden Gems</h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Experience the perfect blend of history, wildlife, and mountain adventures on this unique journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BookNowButton tourName="7 Days Coastal & Mountain Adventure" size="lg" className="bg-[#f88f2f] hover:bg-[#e67e1e] text-white text-lg px-8 py-3">Book Now</BookNowButton>
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
