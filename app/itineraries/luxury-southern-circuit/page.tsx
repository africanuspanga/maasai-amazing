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
  title: "9 Days Luxury Southern Circuit Expedition | Maasai Amazing Safaris",
  description:
    "Experience the ultimate luxury in Tanzania's southern parks. This 9-day tour combines high-end accommodations with the diverse landscapes of Nyerere, Mikumi, Udzungwa, and Ruaha.",
}

export default function LuxurySouthernCircuitPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/safari-vehicle.jpg"
            alt="Luxury Safari in Southern Tanzania"
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
            9 Days Luxury Southern Circuit Expedition
          </h1>
          <p className="text-lg md:text-xl mb-6">Nyerere • Mikumi • Udzungwa • Ruaha</p>
          <div className="mb-6">
            <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-[#210c00]">
              <Link href="/itineraries">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to All Itineraries
              </Link>
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>9 Days / 8 Nights</span>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5" />
              <span>$2,426 per person</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span>Based on 2 people</span>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#210c00] tracking-tight mb-6">Tour Overview</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Experience the ultimate luxury in Tanzania's southern parks with this exclusive 9-day expedition.
                This carefully crafted journey combines high-end accommodations with the diverse and pristine
                landscapes of Nyerere National Park (formerly Selous), Mikumi National Park, the Udzungwa Mountains,
                and the vast wilderness of Ruaha National Park.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                From boat safaris on the mighty Rufiji River to trekking through mountain forests to see spectacular
                waterfalls, and from walking safaris to extensive game drives in Ruaha's predator-rich plains, this
                itinerary offers the perfect blend of adventure, wildlife, and luxury.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-[#210c00] mb-3">Tour Highlights</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#f88518] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Boat safaris on the Rufiji River</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#f88518] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Trekking the 170m Sanje Waterfalls</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#f88518] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Extensive game viewing in Ruaha</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#f88518] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Luxury accommodations throughout</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#f88518] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Walking safari experiences</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-[#210c00] mb-3">What's Included</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">All transfers & transport</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Luxury meals & accommodation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">All park entrance fees</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Professional guide</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">4x4 safari vehicle</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="lg:col-span-1">
              <Card className="sticky top-24 shadow-xl border-2 border-[#f88518]/20">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <p className="text-sm text-gray-600 mb-2">Price per person</p>
                    <p className="text-4xl font-bold text-[#f88518]">$2,426</p>
                    <p className="text-sm text-gray-500 mt-1">Based on 2 people</p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <BookNowButton tourName="9 Days Luxury Southern Circuit Expedition" className="w-full bg-[#f88518] hover:bg-[#c24503] text-white text-lg py-6">Book This Tour</BookNowButton>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-[#f88518] text-[#f88518] hover:bg-[#f88518] hover:text-white text-lg py-6 bg-transparent"
                    >
                      <Link href="https://wa.me/255754746464" target="_blank">
                        WhatsApp Inquiry
                      </Link>
                    </Button>
                  </div>

                  <div className="border-t pt-6">
                    <h3 className="font-bold text-[#210c00] mb-3">Quick Info</h3>
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
                        <span className="font-semibold">Luxury</span>
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
      <section className="py-16 md:py-20 bg-[#faf6f1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#210c00] tracking-tight mb-12 text-center">
            Detailed Day-by-Day Itinerary
          </h2>

          <div className="space-y-6">
            {[
              {
                day: 1,
                title: "Arrival & Nyerere National Park",
                description:
                  "Arrival and transfer to Nyerere National Park for an evening boat safari on the Rufiji River. Watch hippos, crocodiles, and diverse birdlife as the sun sets over the water.",
              },
              {
                day: 2,
                title: "Full-Day Game Drive in Nyerere",
                description:
                  "Full-day game drive in Nyerere National Park, spotting elephants, lions, and giraffes. Explore the vast grasslands and riverbanks teeming with wildlife.",
              },
              {
                day: 3,
                title: "Walking Safari & Transfer to Mikumi",
                description:
                  "Morning walking safari to track animals on foot, followed by a scenic drive to Mikumi National Park. Experience the thrill of being close to nature.",
              },
              {
                day: 4,
                title: "Mikumi Game Viewing",
                description:
                  "Full-day game viewing in Mikumi, exploring the 'Mkata Floodplain.' This area is known for its high concentration of wildlife including zebras, wildebeest, and elephants.",
              },
              {
                day: 5,
                title: "Udzungwa Mountains Trekking",
                description:
                  "Trekking in the Udzungwa Mountains to see the spectacular 170m Sanje Waterfalls. The forest is home to endemic primates including the Sanje Mangabey.",
              },
              {
                day: 6,
                title: "Journey to Ruaha",
                description:
                  "Travel to Ruaha National Park, passing through the scenic Southern Highlands. Ruaha is Tanzania's largest national park and a true wilderness.",
              },
              {
                day: 7,
                title: "Ruaha Exploration - Day 1",
                description:
                  "First full day of game drives in Ruaha National Park, focusing on large prides of lions and herds of elephants. The park is known for its predator sightings.",
              },
              {
                day: 8,
                title: "Ruaha Exploration - Day 2",
                description:
                  "Second full day exploring Ruaha's rocky landscapes and the Great Ruaha River. Look for leopards, wild dogs, and the incredible diversity of antelope species.",
              },
              {
                day: 9,
                title: "Final Game Drive & Departure",
                description:
                  "Final morning game drive in Ruaha before beginning the journey back to Dar es Salaam with memories of an unforgettable luxury safari experience.",
              },
            ].map((item) => (
              <Card key={item.day} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-[#f88518] rounded-2xl flex items-center justify-center">
                        <span className="text-2xl font-bold text-white">Day {item.day}</span>
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl md:text-2xl font-bold text-[#210c00] mb-3">{item.title}</h3>
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
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#210c00] tracking-tight mb-12 text-center">
            What's Included & Excluded
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Included */}
            <Card className="border-2 border-green-200">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-2xl font-bold text-green-700 mb-6 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6" />
                  Included
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">All transfers and transport in 4x4 safari vehicle</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Professional English-speaking guide</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">All park entrance fees</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Luxury and mid-range accommodation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">All meals as specified</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Boat safari on Rufiji River</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Walking safari in Nyerere</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Drinking water throughout</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Airport pickup and drop-off</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Excluded */}
            <Card className="border-2 border-red-200">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-2xl font-bold text-red-700 mb-6 flex items-center gap-2">
                  <X className="w-6 h-6" />
                  Excluded
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">International flights</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Tanzania tourist visa</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Travel insurance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Personal items and souvenirs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Tips and gratuities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Alcoholic beverages</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Optional activities not mentioned</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 md:py-20 bg-[#faf6f1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#210c00] tracking-tight mb-12 text-center">
            Tour Gallery
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: "/images/safari-vehicle.jpg", alt: "Safari vehicle in wilderness" },
              { src: "/images/giraffe-baobab.jpg", alt: "Giraffe with baobab tree" },
              { src: "/images/waterfall-hiker.jpg", alt: "Hiking to waterfall" },
              { src: "/images/boat-sunset.jpg", alt: "Boat safari at sunset" },
              { src: "/images/maasai-women.jpg", alt: "Maasai cultural experience" },
              { src: "/images/zanzibar-aerial.jpg", alt: "Aerial view of coastline" },
            ].map((image, index) => (
              <div key={index} className="relative aspect-[4/3] overflow-hidden rounded-lg group">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-[#210c00] text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">Ready to Start Your Adventure?</h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Book this incredible journey today or contact us to customize this itinerary to your preferences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BookNowButton tourName="9 Days Luxury Southern Circuit Expedition" size="lg" className="bg-[#f88518] hover:bg-[#c24503] text-white text-lg px-8 py-3">Book Now</BookNowButton>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#210c00] text-lg px-8 py-3 bg-transparent"
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
