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
  title: "9 Days Grand Southern Adventure | Saitoti Tours",
  description:
    "A comprehensive journey through the heart of Southern Tanzania, featuring three major national parks and a deep dive into local culture.",
}

export default function GrandSouthernAdventurePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/giraffe-baobab.jpg"
            alt="Grand Southern Adventure"
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
            9 Days Grand Southern Adventure
          </h1>
          <p className="text-lg md:text-xl mb-6">Nyerere - Mikumi - Udzungwa - Ruaha</p>
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
              <span>9 Days</span>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5" />
              <span>From $1,850 per person</span>
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
                A comprehensive journey through the heart of Southern Tanzania, featuring four major national parks and a deep dive into local culture. This mid-range adventure combines wildlife viewing, mountain trekking, and authentic Maasai cultural experiences.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                From boat and walking safaris in Nyerere to trekking the stunning Sanje Waterfalls in Udzungwa Mountains, and from extensive game drives in Mikumi to exploring the vast wilderness of Ruaha - this itinerary offers the complete Southern Tanzania experience.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-[#55331e] mb-3">Tour Highlights</h3>
                    <ul className="space-y-2">
                      {[
                        "Extended game drives in Ruaha",
                        "Visit to a Maasai Boma",
                        "Trekking the Udzungwa Mountains",
                        "Boat and walking safaris in Nyerere",
                        "Diverse wildlife viewing",
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
                        "All park fees & activities",
                        "Professional guide",
                        "Transportation",
                        "Full board meals",
                        "Mid-range accommodations",
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
                    <p className="text-4xl font-bold text-[#f88f2f]">From $1,850</p>
                    <p className="text-sm text-gray-500 mt-1">Mid-range accommodations</p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <BookNowButton tourName="9 Days Grand Southern Adventure" className="w-full bg-[#f88f2f] hover:bg-[#e67e1e] text-white text-lg py-6">Book This Tour</BookNowButton>
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
                        <span className="font-semibold">9 Days</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Group Size:</span>
                        <span className="font-semibold">2-6 People</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Style:</span>
                        <span className="font-semibold">Mid-Range</span>
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
                title: "Nyerere National Park",
                description:
                  "Travel to Nyerere National Park for boat and walking safaris. Experience wildlife from both water and land perspectives. Cruise the Rufiji River spotting hippos, crocodiles, and elephants along the banks.",
              },
              {
                day: "3-4",
                title: "Transfer to Mikumi",
                description:
                  "Morning half-game drive at Nyerere for final wildlife sightings, then transfer to Mikumi National Park. Check into comfortable Mikumi Bandas with views across the savanna. Evening game drive to catch predators on the hunt.",
              },
              {
                day: 5,
                title: "Udzungwa Mountains Trekking",
                description:
                  "Day trip to the Udzungwa Mountains for trekking the Sanje route. Hike through lush rainforest to witness the magnificent 170m Sanje Waterfalls and spot endemic primates before returning to Mikumi.",
              },
              {
                day: 6,
                title: "Full Day Mikumi",
                description:
                  "Full-day game drive in Mikumi National Park exploring the Mkata Floodplain. This open savanna offers excellent Big Five viewing opportunities with lions, elephants, buffalo, and more.",
              },
              {
                day: 7,
                title: "Journey to Ruaha",
                description:
                  "Journey from Mikumi to Ruaha National Park with a scenic picnic lunch en route. Travel through the Southern Highlands and arrive at Tanzania's largest national park for an evening game drive.",
              },
              {
                day: 8,
                title: "Ruaha Exploration",
                description:
                  "Full-day exploration of Ruaha National Park. Track large lion prides, massive elephant herds, and elusive leopards across the rocky landscapes and along the Great Ruaha River. Stay at comfortable Ruaha Cottages.",
              },
              {
                day: 9,
                title: "Return Journey",
                description:
                  "Enjoy a final breakfast in the wilderness before beginning the return journey to Dar es Salaam. Arrive with incredible memories of four spectacular national parks and authentic Tanzanian experiences.",
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
                    "All park fees and activities",
                    "Professional English-speaking guide",
                    "4x4 safari vehicle transportation",
                    "Full board meals throughout",
                    "Mid-range accommodation",
                    "Boat safari on Rufiji River",
                    "Walking safari in Nyerere",
                    "Udzungwa Mountains trekking",
                    "Airport transfers",
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
                    "Drinks during meals",
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">Ready to Explore Southern Tanzania?</h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Join us for this comprehensive adventure through Tanzania's most spectacular southern parks
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BookNowButton tourName="9 Days Grand Southern Adventure" size="lg" className="bg-[#f88f2f] hover:bg-[#e67e1e] text-white text-lg px-8 py-3">Book Now</BookNowButton>
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
