import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Calendar, DollarSign, Users, CheckCircle, X, ArrowLeft } from "lucide-react"

export const metadata = {
  title: "6 Days Wonderful Southern Expedition | Saitoti Tours",
  description:
    "This comprehensive safari takes you through the diverse ecosystems of Nyerere (Selous), Mikumi, and the Udzungwa Mountains with boat safaris, trekking, and cultural experiences.",
}

export default function WonderfulSouthernExpeditionPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/boat-sunset.jpg"
            alt="Wonderful Southern Expedition"
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
            6 Days Wonderful Southern Expedition
          </h1>
          <p className="text-lg md:text-xl mb-6">Nyerere - Mikumi - Udzungwa Mountains</p>
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
              <span>6 Days</span>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5" />
              <span>$1,198 - $1,420 per person</span>
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
                This comprehensive safari takes you through the diverse ecosystems of Nyerere National Park (formerly Selous), Mikumi National Park, and the stunning Udzungwa Mountains. Experience boat safaris on the mighty Rufiji River, trek to spectacular waterfalls, and immerse yourself in authentic Maasai culture.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                From close encounters with hippos and crocodiles on the water, to tracking wildlife on foot in walking safaris, to climbing through rainforests to see the magnificent four-stage Sanje Waterfalls - this expedition offers the perfect introduction to Tanzania's spectacular Southern Circuit.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-[#55331e] mb-3">Tour Highlights</h3>
                    <ul className="space-y-2">
                      {[
                        "Boat safari on Rufiji River",
                        "Trekking to Sanje Waterfalls",
                        "Maasai village cultural visit",
                        "Walking safari experience",
                        "Big Five game viewing",
                        "Mkata Floodplain exploration",
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
                        "All park fees",
                        "Professional guide",
                        "4x4 safari car",
                        "Airport transfers",
                        "Full board meals",
                        "All accommodation",
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
                    <p className="text-4xl font-bold text-[#f88f2f]">$1,198 - $1,420</p>
                    <p className="text-sm text-gray-500 mt-1">Depending on group size</p>
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
                        <span className="font-semibold">Mid-Range Safari</span>
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
                title: "Dar es Salaam to Nyerere NP",
                description:
                  "Drive to Nyerere National Park for an evening boat safari to see hippos and crocodiles. Watch the sun set over the Rufiji River as you spot wildlife along the banks - elephants, giraffes, and countless bird species.",
              },
              {
                day: 2,
                title: "Nyerere Full-Day Game Drive",
                description:
                  "A full day exploring the vast grasslands and riverbanks for lions, elephants, and giraffes. Nyerere is one of the largest protected areas in Africa, offering incredible wildlife diversity and fewer tourists than the northern parks.",
              },
              {
                day: 3,
                title: "Walking Safari & Transfer to Mikumi",
                description:
                  "Early morning walking safari to track animals on foot - an exhilarating experience that brings you face to face with nature. After lunch, transfer to Mikumi National Park for an evening game drive.",
              },
              {
                day: 4,
                title: "Udzungwa Mountains Trekking",
                description:
                  "Climb the Sanje route to see the magnificent four-stage waterfalls cascading 170 meters through the rainforest. Spot endemic primates including the rare Sanje Mangabey and Iringa Red Colobus monkeys.",
              },
              {
                day: 5,
                title: "Mikumi Full-Day Game View",
                description:
                  "Sunrise game drive and a full day exploring the Mkata Floodplain. This open savanna is excellent for spotting the Big Five - lions, elephants, buffalo, leopards, and with luck, the elusive rhino.",
              },
              {
                day: 6,
                title: "Maasai Culture & Return",
                description:
                  "Visit a Maasai village to learn about their traditions and join in their traditional dances. Experience authentic cultural exchange before returning to Dar es Salaam with unforgettable memories.",
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
                    "All park entrance fees",
                    "Professional English-speaking guide",
                    "4x4 safari vehicle with pop-up roof",
                    "Full board accommodation",
                    "All meals as per itinerary",
                    "Boat safari on Rufiji River",
                    "Walking safari in Nyerere",
                    "Udzungwa Mountains trekking",
                    "Maasai village visit",
                    "Airport transfers",
                    "Drinking water throughout",
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">Ready for Adventure?</h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Experience the wonders of Southern Tanzania on this incredible expedition
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
