import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, DollarSign, CheckCircle, X } from "lucide-react"

export const metadata = {
  title: "9 Days Grand Southern Adventure | Saitoti Tours",
  description:
    "A comprehensive journey through the heart of Southern Tanzania, featuring three major national parks and a deep dive into local culture.",
}

export default function GrandSouthernAdventurePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-end">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/itineraries/giraffe-baobab.jpg"
            alt="Grand Southern Adventure"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 text-white">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance">
            9 Days Grand Southern Adventure
          </h1>
          <div className="flex flex-wrap gap-4 md:gap-6 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>9 Days</span>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5" />
              <span>From $1,850 per person</span>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-[#55331e] mb-6">Tour Overview</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                A comprehensive journey through the heart of Southern Tanzania, featuring three major national parks and a deep dive into local culture. This mid-range adventure combines wildlife viewing, mountain trekking, and authentic Maasai cultural experiences.
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
              <Card className="sticky top-20">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-[#55331e] mb-2">From $1,850</h3>
                  <p className="text-gray-600 mb-6">per person</p>

                  <div className="space-y-3">
                    <Button asChild className="w-full bg-[#f88f2f] hover:bg-[#e67e1e] text-lg py-6">
                      <Link href="/contact">Book This Tour</Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full border-[#f88f2f] text-[#f88f2f] hover:bg-[#f88f2f] hover:text-white bg-transparent">
                      <Link href="/contact">Request Custom Quote</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Itinerary */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#55331e] mb-8">Detailed Itinerary</h2>

          <div className="space-y-6">
            {[
              {
                day: "1-2",
                title: "Nyerere National Park",
                description:
                  "Travel to Nyerere National Park for boat and walking safaris. Experience wildlife from both water and land perspectives.",
              },
              {
                day: "3-4",
                title: "Transfer to Mikumi",
                description:
                  "Half-game drive at Nyerere, then transfer to Mikumi National Park for an evening stay at Mikumi Bandas.",
              },
              {
                day: 5,
                title: "Udzungwa Mountains Day Trip",
                description:
                  "Day trip to Udzungwa Mountains for trekking the Sanje route before returning to Mikumi.",
              },
              {
                day: 6,
                title: "Full Day Mikumi",
                description:
                  "Full-day game drive in Mikumi National Park exploring the abundant wildlife.",
              },
              {
                day: 7,
                title: "Journey to Ruaha",
                description:
                  "Journey from Mikumi to Ruaha National Park with a picnic lunch on the way.",
              },
              {
                day: 8,
                title: "Ruaha Exploration",
                description:
                  "Full-day exploration of Ruaha National Park, staying at Ruaha Cottages.",
              },
              {
                day: 9,
                title: "Return Journey",
                description:
                  "Breakfast and return journey to Dar es Salaam with unforgettable memories.",
              },
            ].map((item) => (
              <Card key={item.day}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 min-w-[3rem] h-12 bg-[#f88f2f] text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {item.day}
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-[#55331e] mb-2">Day {item.day}: {item.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-[#55331e] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Explore Southern Tanzania?</h2>
          <p className="text-lg text-gray-200 mb-8 text-balance">
            Join us for this comprehensive adventure through Tanzania's most spectacular southern parks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#f88f2f] hover:bg-[#e67e1e] text-lg">
              <Link href="/contact">Book Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[#55331e]">
              <Link href="/itineraries">View All Tours</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
