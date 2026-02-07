import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Users, MapPin, Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import WhatsAppFloat from "@/components/whatsapp-float"
import { BookNowButton } from "@/components/book-now-button"

export default function Northern8DaysPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <WhatsAppFloat />

      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] lg:h-[70vh]">
        <Image
          src="/images/northern-circuit-elephant.jpg"
          alt="8-Day Elephant Kingdom Safari"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-16 w-full">
            <Link
              href="/itineraries"
              className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 text-sm md:text-base transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Itineraries
            </Link>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-black mb-4 leading-tight text-white">
            8-Day Elephant Kingdom Safari
          </h1>
          <p className="text-lg md:text-xl mb-6 text-white/95">8 Days / 7 Nights - Tarangire, Serengeti & Ngorongoro</p>

          <div className="flex flex-wrap gap-4 md:gap-6 text-white/90">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span className="text-sm md:text-base">8 Days / 7 Nights</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span className="text-sm md:text-base">2-6 people</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span className="text-sm md:text-base">Tarangire, Serengeti, Ngorongoro</span>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left Column - Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#d97706] mb-4">
                  Safari Overview
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  This is our bestseller and one of Tanzania's most popular itineraries. Experience the complete Northern Circuit with ample time to fully explore each destination.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Begin at Tarangire National Park, known as the "Kingdom of Elephants" for its massive herds and ancient baobab trees. Spend three full days tracking the Great Migration in the Serengeti before descending into the world-famous Ngorongoro Crater, home to the Big Five.
                </p>
              </div>

              {/* Itinerary */}
              <div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#d97706] mb-6">
                  Day by Day Itinerary
                </h2>
                <div className="space-y-6">
                  {/* Day 1 */}
                  <div className="border-l-4 border-[#d97706] pl-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Day 1: Arrival in Arusha</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Arrive at Kilimanjaro International Airport where you'll be met by your safari guide. Transfer to your hotel in Arusha for a pre-safari briefing and equipment check. Overnight at comfortable accommodation with dinner included.
                    </p>
                  </div>

                  {/* Day 2 */}
                  <div className="border-l-4 border-[#d97706] pl-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Day 2: Tarangire National Park</h3>
                    <p className="text-gray-700 leading-relaxed">
                      After breakfast, drive to Tarangire National Park. Known for its giant elephant herds and ancient baobab trees, Tarangire offers exceptional wildlife viewing along the Tarangire River. Expect to see lions, leopards, and over 550 bird species. Full day game drive with picnic lunch in the park.
                    </p>
                  </div>

                  {/* Day 3 */}
                  <div className="border-l-4 border-[#d97706] pl-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Day 3: Tarangire to Serengeti</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Depart after breakfast for the legendary Serengeti National Park. Journey through the Ngorongoro Conservation Area with spectacular views. Arrive in the Serengeti for an afternoon game drive. The endless plains host the world's greatest wildlife spectacle - the Great Migration.
                    </p>
                  </div>

                  {/* Day 4-5 */}
                  <div className="border-l-4 border-[#d97706] pl-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Days 4-5: Full Days in Serengeti</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Two full days exploring different regions of the Serengeti. Morning and afternoon game drives offer opportunities to witness predator hunts, river crossings (seasonal), and massive herds of wildebeest and zebra. Optional hot air balloon safari available (extra cost).
                    </p>
                  </div>

                  {/* Day 6 */}
                  <div className="border-l-4 border-[#d97706] pl-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Day 6: Serengeti to Ngorongoro</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Morning game drive in the Serengeti, then drive to the Ngorongoro Conservation Area. Arrive at your lodge on the crater rim in time for sunset with breathtaking views over the caldera. Optional visit to a Maasai village can be arranged.
                    </p>
                  </div>

                  {/* Day 7 */}
                  <div className="border-l-4 border-[#d97706] pl-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Day 7: Ngorongoro Crater</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Early descent into the Ngorongoro Crater for a full day game drive. This UNESCO World Heritage Site is home to over 25,000 animals including the endangered black rhino. Picnic lunch on the crater floor surrounded by hippos and flamingos.
                    </p>
                  </div>

                  {/* Day 8 */}
                  <div className="border-l-4 border-[#d97706] pl-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Day 8: Return to Arusha & Departure</h3>
                    <p className="text-gray-700 leading-relaxed">
                      After breakfast, drive back to Arusha. Depending on your flight schedule, enjoy a hot lunch in town before your airport transfer. End of safari services.
                    </p>
                  </div>
                </div>
              </div>

              {/* Included/Excluded */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold text-[#d97706] mb-4">Included</h3>
                  <ul className="space-y-2">
                    {[
                      "Airport transfers",
                      "7 nights accommodation",
                      "All meals during safari",
                      "Private 4x4 safari vehicle",
                      "Professional safari guide",
                      "Park fees & conservation fees",
                      "Crater service fees",
                      "Game drives as per itinerary",
                      "Bottled water in vehicle",
                      "Binoculars & field guides",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-700">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#d97706] mb-4">Not Included</h3>
                  <ul className="space-y-2">
                    {[
                      "International flights",
                      "Tanzania visa ($50-100)",
                      "Travel insurance",
                      "Tips for guide & staff",
                      "Personal expenses",
                      "Alcoholic beverages",
                      "Hot air balloon safari ($599pp)",
                      "Maasai village visit ($20pp)",
                      "Medical expenses",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-700">
                        <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Column - Booking Card */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24 border-2 border-[#d97706] shadow-xl">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <p className="text-sm text-gray-600 mb-2">Starting from</p>
                    <p className="text-4xl font-bold text-[#d97706]">$3,284</p>
                    <p className="text-sm text-gray-500 mt-1">per person</p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3 text-sm">
                      <Calendar className="w-5 h-5 text-[#d97706]" />
                      <span className="text-gray-700">8 Days / 7 Nights</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Users className="w-5 h-5 text-[#d97706]" />
                      <span className="text-gray-700">2-6 people</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <MapPin className="w-5 h-5 text-[#d97706]" />
                      <span className="text-gray-700">Tarangire, Serengeti, Ngorongoro</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <BookNowButton tourName="8-Day Elephant Kingdom Safari" className="w-full bg-[#d97706] hover:bg-[#b45309] text-white py-6">Book This Safari</BookNowButton>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-[#d97706] text-[#d97706] hover:bg-[#d97706] hover:text-white py-6"
                    >
                      <Link href="https://wa.me/255745371468" target="_blank">
                        WhatsApp Inquiry
                      </Link>
                    </Button>
                  </div>

                  <div className="mt-6 pt-6 border-t">
                    <p className="text-xs text-gray-600 text-center">
                      Price varies by season and group size. Contact us for a personalized quote.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-amber-100 to-orange-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#d97706] mb-4">
            Ready for Your Northern Safari?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Join us for an unforgettable journey through Tanzania's most iconic wildlife destinations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#d97706] hover:bg-[#b45309] text-white">
              <Link href="/contact">Get Custom Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-[#d97706] text-[#d97706] hover:bg-[#d97706] hover:text-white">
              <Link href="/itineraries">View All Safaris</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
