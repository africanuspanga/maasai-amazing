import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Users, MapPin, Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import WhatsAppFloat from "@/components/whatsapp-float"
import { BookNowButton } from "@/components/book-now-button"
import { getGlobalSettings } from "@/lib/cms/service"

export const metadata = {
  title: "3-Day Tanzania Safari | Tarangire, Ngorongoro & Manyara",
  description:
    "Perfect short safari covering Tarangire, Ngorongoro Crater & Lake Manyara. 3 days of incredible wildlife including Big Five. Ideal for time-conscious travelers from $1,558.",
  alternates: {
    canonical: "https://maasaiamazingsafaris.com/itineraries/northern-3-days",
  },
}

export default async function Northern3DaysPage() {
  const settings = await getGlobalSettings()
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <WhatsAppFloat />

      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] lg:h-[70vh]">
        <Image
          src="/images/northern-circuit-lions.jpg"
          alt="3-Day Classic Northern Trio"
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
            3-Day Classic Northern Trio
          </h1>
          <p className="text-lg md:text-xl mb-6 text-white/95">3 Days / 2 Nights - Tarangire, Ngorongoro & Manyara</p>

          <div className="flex flex-wrap gap-4 md:gap-6 text-white/90">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span className="text-sm md:text-base">3 Days / 2 Nights</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span className="text-sm md:text-base">1-6 people</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span className="text-sm md:text-base">Tarangire, Ngorongoro, Manyara</span>
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
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#c24503] mb-4">
                  Safari Overview
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  A high-impact, short-duration safari perfect for time-conscious travelers who want to experience the best of Northern Tanzania's wildlife without the commitment of a longer trip.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  This carefully designed itinerary covers three spectacular parks: Tarangire's elephant kingdom, the world-famous Ngorongoro Crater, and Lake Manyara's diverse ecosystems. Ideal for those on business trips or limited vacation time.
                </p>
              </div>

              {/* Itinerary */}
              <div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#c24503] mb-6">
                  Day by Day Itinerary
                </h2>
                <div className="space-y-6">
                  {/* Day 1 */}
                  <div className="border-l-4 border-[#c24503] pl-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Day 1: Arusha to Tarangire National Park</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Depart Arusha after early breakfast (7:00 AM) for Tarangire National Park (2-hour drive). Famous for its giant elephant herds and iconic baobab trees, Tarangire offers exceptional game viewing year-round. Full day game drive with picnic lunch. Over 550 bird species recorded. Drive to Karatu for dinner and overnight.
                    </p>
                  </div>

                  {/* Day 2 */}
                  <div className="border-l-4 border-[#c24503] pl-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Day 2: Ngorongoro Crater - Full Day</h3>
                    <p className="text-gray-700 leading-relaxed">
                      After early breakfast, descend into the Ngorongoro Crater for a full day of game viewing. This UNESCO World Heritage Site and one of Africa's Seven Natural Wonders hosts over 25,000 animals including all Big Five. High chances of spotting the endangered black rhino. Picnic lunch on the crater floor. Ascend in late afternoon and return to Karatu lodge.
                    </p>
                  </div>

                  {/* Day 3 */}
                  <div className="border-l-4 border-[#c24503] pl-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Day 3: Lake Manyara to Arusha</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Morning game drive in Lake Manyara National Park, famous for tree-climbing lions, huge elephant herds, and pink flamingos along the alkaline lake. The park packs incredible biodiversity into a small area. After lunch, drive back to Arusha arriving mid-afternoon. Drop off at your hotel or airport.
                    </p>
                  </div>
                </div>
              </div>

              {/* Included/Excluded */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold text-[#c24503] mb-4">Included</h3>
                  <ul className="space-y-2">
                    {[
                      "Airport/hotel pick up & drop off",
                      "2 nights accommodation",
                      "All meals during safari",
                      "Private 4x4 Land Cruiser",
                      "Professional safari guide",
                      "All park entrance fees",
                      "Crater conservation fees",
                      "Crater service fees",
                      "Unlimited bottled water",
                      "Binoculars & wildlife books",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-700">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#c24503] mb-4">Not Included</h3>
                  <ul className="space-y-2">
                    {[
                      "International flights",
                      "Tanzania visa ($50-100)",
                      "Travel insurance (required)",
                      "Tips for guide & staff",
                      "Personal shopping",
                      "Alcoholic beverages",
                      "Laundry services",
                      "Telephone calls",
                      "Optional activities",
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
              <Card className="sticky top-24 border-2 border-[#c24503] shadow-xl">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <p className="text-sm text-gray-600 mb-2">Starting from</p>
                    <p className="text-4xl font-bold text-[#c24503]">$1,558</p>
                    <p className="text-sm text-gray-500 mt-1">per person</p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3 text-sm">
                      <Calendar className="w-5 h-5 text-[#c24503]" />
                      <span className="text-gray-700">3 Days / 2 Nights</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Users className="w-5 h-5 text-[#c24503]" />
                      <span className="text-gray-700">1-6 people</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <MapPin className="w-5 h-5 text-[#c24503]" />
                      <span className="text-gray-700">Tarangire, Ngorongoro, Manyara</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <BookNowButton tourName="3-Day Classic Northern Trio" className="w-full bg-[#c24503] hover:bg-[#a33d02] text-white py-6">Book This Safari</BookNowButton>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-[#c24503] text-[#c24503] hover:bg-[#c24503] hover:text-white py-6"
                    >
                      <Link href={`https://wa.me/${settings.whatsappNumber}`} target="_blank">
                        WhatsApp Inquiry
                      </Link>
                    </Button>
                  </div>

                  <div className="mt-6 pt-6 border-t">
                    <p className="text-xs text-gray-600 text-center">
                      Solo travelers welcome. Price decreases with group size. Contact us for exact pricing.
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
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#c24503] mb-4">
            Short on Time? Not on Adventure!
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Experience three legendary parks in just three action-packed days
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BookNowButton tourName="3-Day Classic Northern Trio" size="lg" className="bg-[#c24503] hover:bg-[#a33d02] text-white">Book Now</BookNowButton>
            <Button asChild size="lg" variant="outline" className="border-[#c24503] text-[#c24503] hover:bg-[#c24503] hover:text-white">
              <Link href="/itineraries">View All Safaris</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
