import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, DollarSign, Users, CheckCircle } from "lucide-react"

export const metadata = {
  title: "6 Day Bush to Beach Experience | Saitoti Tours",
  description:
    "The perfect combination of wild adventure and tropical relaxation. Start with wildlife tracking in Nyerere NP and end on the white sands of Zanzibar.",
}

export default function BushToBeachPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-end">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/itineraries/zanzibar-aerial.jpg"
            alt="Bush to Beach - Zanzibar"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 text-white">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance">
            6 Day Bush to Beach Experience
          </h1>
          <div className="flex flex-wrap gap-4 md:gap-6 text-sm md:text-base">
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
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-[#55331e] mb-6">Tour Overview</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                The perfect combination of wild adventure and tropical relaxation. Start with wildlife tracking in Nyerere National Park, then transition to the pristine white sands and turquoise waters of Zanzibar. Experience boat safaris, walking safaris, spice tours, and beach relaxation in one unforgettable journey.
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
              <Card className="sticky top-20">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-[#55331e] mb-2">$1,947 - $2,102</h3>
                  <p className="text-gray-600 mb-6">per person (group size dependent)</p>

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
                title: "Nyerere National Park Safari",
                description:
                  "Wildlife viewing and boat safaris in Nyerere National Park. Experience the diverse ecosystems and abundant wildlife.",
              },
              {
                day: 3,
                title: "Walking Safari & Ferry to Zanzibar",
                description:
                  "Morning walking safari to see animals on foot, followed by a ferry transfer to Zanzibar. Check-in at Nungwi beach resort.",
              },
              {
                day: 4,
                title: "Beach Relaxation Day",
                description:
                  "Full day of relaxation on the pristine beaches of Nungwi. Swim, snorkel, or simply unwind by the turquoise waters.",
              },
              {
                day: 5,
                title: "Zanzibar Culture & History",
                description:
                  "Spice tour in the plantations, visit to the giant tortoises on Prison Island, and a historical tour of Stone Town.",
              },
              {
                day: 6,
                title: "Departure",
                description:
                  "Final breakfast in Zanzibar before catching the ferry back to Dar es Salaam for your onward journey.",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience the Best of Both Worlds</h2>
          <p className="text-lg text-gray-200 mb-8 text-balance">
            Combine thrilling wildlife encounters with tropical beach paradise on this unforgettable journey.
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
