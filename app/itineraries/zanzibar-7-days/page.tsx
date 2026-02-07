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
  title: "Zanzibar 7 Days / 6 Nights Package | Saitoti Tours",
  description:
    "Our most comprehensive tour. This week-long experience includes the legendary Rock Restaurant and the rare wildlife of Jozani Forest.",
}

export default function Zanzibar7DaysPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/istockphoto-2132790250-612x612-mx41ERncAmmDzYbHB9fcSMVDEzuXPA.jpg"
            alt="Dolphins in Zanzibar Waters"
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
            Zanzibar Ultimate Week
          </h1>
          <p className="text-lg md:text-xl mb-6">7 Days / 6 Nights - Complete Island Discovery with Jozani & The Rock</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>7 Days / 6 Nights</span>
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
          <Button asChild variant="ghost" className="text-[#0891b2] hover:text-[#0e7490] hover:bg-cyan-100">
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
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0891b2] mb-6">Package Overview</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our most comprehensive tour. This week-long experience includes the legendary Rock Restaurant and the rare wildlife of Jozani Forest, along with all of Zanzibar's classic excursions.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Meet the endemic Red Colobus Monkeys in Jozani Forest, learn about traditional herbal medicine, dine at the world-famous Rock Restaurant perched on a rock in the Indian Ocean, sail on Safari Blue, swim with dolphins, and immerse yourself in the rich history of Stone Town. This is the ultimate Zanzibar experience.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <Card className="border-2 border-cyan-200 bg-white">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-[#0891b2] mb-3">Package Highlights</h3>
                    <ul className="space-y-2">
                      {[
                        "Jozani Forest Red Colobus monkeys",
                        "The Rock Restaurant lunch",
                        "Full-day Safari Blue",
                        "Stone Town UNESCO tour",
                        "Mnemba dolphin encounters",
                        "Complete island exploration",
                      ].map((highlight, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#0891b2] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2 border-cyan-200 bg-white">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-[#0891b2] mb-3">What's Included</h3>
                    <ul className="space-y-2">
                      {[
                        "Airport transfers",
                        "Breakfast & dinner daily",
                        "All entrance fees",
                        "Professional guides",
                        "Boat charters",
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
                    <p className="text-4xl font-bold text-[#0891b2]">$1,388</p>
                    <p className="text-sm text-gray-500 mt-1">Per person</p>
                    <p className="text-xs text-gray-500 mt-2">Contact for 3*, 4*, and 5* hotel tiers</p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <BookNowButton tourName="Zanzibar 7 Days / 6 Nights Package" className="w-full bg-[#0891b2] hover:bg-[#0e7490] text-white text-lg py-6">Book This Package</BookNowButton>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-[#0891b2] text-[#0891b2] hover:bg-[#0891b2] hover:text-white text-lg py-6 bg-transparent"
                    >
                      <Link href="https://wa.me/255784258765" target="_blank">
                        WhatsApp Inquiry
                      </Link>
                    </Button>
                  </div>

                  <div className="border-t pt-6">
                    <h3 className="font-bold text-[#0891b2] mb-3">Quick Info</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Duration:</span>
                        <span className="font-semibold">7 Days / 6 Nights</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Meals:</span>
                        <span className="font-semibold">Half Board</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Activities:</span>
                        <span className="font-semibold">4 Excursions</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Free Time:</span>
                        <span className="font-semibold">1 Full Day</span>
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
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0891b2] mb-12 text-center">
            Day-by-Day Itinerary
          </h2>

          <div className="space-y-6">
            {[
              {
                day: 1,
                title: "Arrival & Hotel Transfer",
                description:
                  "Stress-free pickup and transfer to your hotel. Our driver will meet you at Zanzibar International Airport with a personalized signboard. Relax and let us handle everything from luggage to transportation. Welcome to paradise!",
              },
              {
                day: 2,
                title: "Full-Day Safari Blue Trip",
                description:
                  "Experience Zanzibar's #1 excursion! Sail through turquoise waters in a traditional dhow, explore mangrove ecosystems, snorkel among vibrant coral reefs, walk on pristine white sandbanks surrounded by crystal-clear shallows, and enjoy a premium seafood BBQ on Kwale Island featuring lobster, calamari, fresh fish, and tropical fruits. This all-day adventure is the highlight of any Zanzibar trip.",
              },
              {
                day: 3,
                title: "Beach Relaxing Day",
                description:
                  "A day to recharge by the turquoise waters of the Indian Ocean. No scheduled activities - just you, the beach, and endless possibilities. Swim, sunbathe, read a book under swaying palms, enjoy hotel amenities, get a massage, or explore the local area at your own pace. This is your time to truly disconnect and embrace island life.",
              },
              {
                day: 4,
                title: "Stone Town, Spice Farm & Prison Island",
                description:
                  "Immerse yourself in the local heritage, spice trade history, and unique wildlife. Tour aromatic spice plantations where you'll see, smell, and taste fresh cloves, vanilla, cardamom, and cinnamon. Wander through the UNESCO-listed Stone Town with its narrow alleys, historic Arab houses, ornate wooden doors, and bustling markets. Meet the giant Aldabra tortoises (some over 150 years old) on Prison Island and learn about the island's fascinating history.",
              },
              {
                day: 5,
                title: "Mnemba Dolphins & Snorkeling (Half Day)",
                description:
                  "Experience the beautiful North Coast and its abundant tropical marine life. Early morning departure to find wild dolphins near Matemwe - swim alongside these intelligent, playful creatures in their natural habitat. Then explore the world-class snorkeling sites around Mnemba Atoll, known for exceptional visibility, colorful coral gardens, sea turtles, reef sharks, and hundreds of tropical fish species. This is truly a bucket-list experience.",
              },
              {
                day: 6,
                title: "Jozani Forest & The Rock Restaurant (Half Day)",
                description:
                  "Meet the endemic Red Colobus Monkeys in Jozani Forest - these rare primates are found only in Zanzibar. Walk through the lush indigenous forest with a naturalist guide who'll explain the unique ecosystem and traditional herbal medicine plants. Then finish with a visit to the world-famous 'Rock Restaurant' perched dramatically on a rock in the ocean. Enjoy lunch with incredible views and photo opportunities at this iconic location (lunch not included in package price).",
              },
              {
                day: 7,
                title: "Departure Transfer",
                description:
                  "Private transfer to the airport for your flight home. Enjoy your final breakfast overlooking the ocean, pack your memories, and let our driver take you to Zanzibar International Airport. Depart with a piece of Zanzibar in your heart.",
              },
            ].map((item) => (
              <Card key={item.day} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-2 border-cyan-100">
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-[#0891b2] rounded-full flex items-center justify-center">
                        <span className="text-xl font-bold text-white">Day {item.day}</span>
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl md:text-2xl font-bold text-[#0891b2] mb-3">{item.title}</h3>
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
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0891b2] mb-12 text-center">
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
                    "All entrance fees (parks, museums, etc.)",
                    "Professional English-speaking guides",
                    "Full-day Safari Blue experience",
                    "Seafood BBQ lunch on Safari Blue",
                    "Stone Town historical tour",
                    "Prison Island excursion",
                    "Spice plantation tour",
                    "Mnemba dolphin & snorkeling",
                    "Jozani Forest guided tour",
                    "Visit to The Rock Restaurant",
                    "Boat charters for all water activities",
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
                    "Tanzania tourist visa ($50-100 USD)",
                    "Travel insurance",
                    "Lunch meals (except Safari Blue)",
                    "The Rock Restaurant meal cost",
                    "Alcoholic beverages",
                    "Tips and gratuities",
                    "Personal items and souvenirs",
                    "Optional activities on free day",
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
            The Ultimate Zanzibar Experience
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Book your complete 7-day island discovery and experience everything Zanzibar has to offer
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BookNowButton tourName="Zanzibar 7 Days / 6 Nights Package" size="lg" className="bg-white text-[#0891b2] hover:bg-gray-100 text-lg px-8 py-3">Book Now</BookNowButton>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#0891b2] text-lg px-8 py-3 bg-transparent"
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
