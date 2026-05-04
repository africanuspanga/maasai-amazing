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
  title: "5-Day Tanzania Safari | Serengeti, Ngorongoro & Manyara",
  description:
    "5-day Northern Circuit safari to Serengeti, Ngorongoro Crater & Lake Manyara. Perfect post-Kilimanjaro adventure with private 4x4 vehicle from $1,960.",
  alternates: {
    canonical: "https://maasaiamazingsafaris.com/itineraries/northern-5-days",
  },
}

export default async function Northern5DaysPage() {
  const settings = await getGlobalSettings()
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <WhatsAppFloat />

      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] lg:h-[70vh]">
        <Image
          src="/images/northern-circuit-balloon.jpg"
          alt="5-Day Safari Extension"
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
            5-Day Safari Extension
          </h1>
          <p className="text-lg md:text-xl mb-6 text-white/95">5 Days / 4 Nights - Perfect Post-Kilimanjaro Adventure</p>

          <div className="flex flex-wrap gap-4 md:gap-6 text-white/90">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span className="text-sm md:text-base">5 Days / 4 Nights</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span className="text-sm md:text-base">2-6 people</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span className="text-sm md:text-base">Manyara, Serengeti, Ngorongoro</span>
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
                  Perfect for travelers who have just completed a Kilimanjaro climb or a Zanzibar beach holiday and want to experience Tanzania's world-famous Northern Circuit parks.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  This condensed itinerary covers the "Big Three" parks of Northern Tanzania: Lake Manyara, Serengeti, and Ngorongoro Crater. Enjoy private 4x4 safari vehicle throughout with an experienced driver-guide.
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
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Day 1: Arusha to Lake Manyara</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Pick up from your Arusha hotel after breakfast and drive to Lake Manyara National Park. Known for tree-climbing lions, large elephant herds, and pink flamingos along the lake shore. Full day game drive with picnic lunch. Overnight at lodge near the park.
                    </p>
                  </div>

                  {/* Day 2 */}
                  <div className="border-l-4 border-[#c24503] pl-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Day 2: Manyara to Serengeti</h3>
                    <p className="text-gray-700 leading-relaxed">
                      After early breakfast, depart for Serengeti National Park via the Ngorongoro Conservation Area. Game drive en route. Arrive in the Serengeti for afternoon game viewing in the endless plains. Dinner and overnight at Serengeti lodge/camp.
                    </p>
                  </div>

                  {/* Day 3 */}
                  <div className="border-l-4 border-[#c24503] pl-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Day 3: Full Day Serengeti</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Spend the entire day exploring the Serengeti ecosystem. Morning and afternoon game drives offer chances to witness the Great Migration (seasonal), predator hunts, and vast herds of wildlife. Optional hot air balloon safari available at extra cost.
                    </p>
                  </div>

                  {/* Day 4 */}
                  <div className="border-l-4 border-[#c24503] pl-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Day 4: Serengeti to Ngorongoro</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Morning game drive in the Serengeti, then journey to Ngorongoro Conservation Area. Stop at Olduvai Gorge if time permits. Arrive at your lodge on the crater rim for spectacular sunset views. Overnight on the crater rim.
                    </p>
                  </div>

                  {/* Day 5 */}
                  <div className="border-l-4 border-[#c24503] pl-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Day 5: Ngorongoro Crater to Arusha</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Early morning descent into the Ngorongoro Crater for game viewing. This natural amphitheater is home to over 25,000 animals including the Big Five. After picnic lunch on the crater floor, ascend and drive back to Arusha. Airport drop-off or hotel transfer.
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
                      "Pick up & drop off Arusha",
                      "4 nights accommodation",
                      "All meals during safari",
                      "Private 4x4 safari vehicle",
                      "Professional English-speaking guide",
                      "All park entry fees",
                      "Ngorongoro Crater fees",
                      "Game drives as per itinerary",
                      "Bottled drinking water",
                      "Flying Doctor insurance",
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
                      "Tanzania visa fees",
                      "Travel & medical insurance",
                      "Tips for guide & camp staff",
                      "Personal items & expenses",
                      "Alcoholic drinks & sodas",
                      "Balloon safari ($599pp)",
                      "Laundry services",
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
                    <p className="text-4xl font-bold text-[#c24503]">$1,960</p>
                    <p className="text-sm text-gray-500 mt-1">per person</p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3 text-sm">
                      <Calendar className="w-5 h-5 text-[#c24503]" />
                      <span className="text-gray-700">5 Days / 4 Nights</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Users className="w-5 h-5 text-[#c24503]" />
                      <span className="text-gray-700">2-6 people</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <MapPin className="w-5 h-5 text-[#c24503]" />
                      <span className="text-gray-700">Manyara, Serengeti, Ngorongoro</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <BookNowButton tourName="5-Day Safari Extension" className="w-full bg-[#c24503] hover:bg-[#a33d02] text-white py-6">Book This Safari</BookNowButton>
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
                      Perfect addition after Kilimanjaro or Zanzibar. Contact us for combination packages.
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
            Perfect Safari Extension
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Complete your Tanzania adventure with the iconic Northern Circuit parks
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#c24503] hover:bg-[#a33d02] text-white">
              <Link href="/contact">Request Quote</Link>
            </Button>
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
