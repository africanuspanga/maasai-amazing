import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Users, MapPin, Check, X, Mountain } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import WhatsAppFloat from "@/components/whatsapp-float"

export default function KilimanjaroMachamePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <WhatsAppFloat />

      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] lg:h-[70vh]">
        <Image
          src="/images/kilimanjaro-sunrise.jpg"
          alt="Kilimanjaro Machame Route"
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
            Kilimanjaro - Machame Route
          </h1>
          <p className="text-lg md:text-xl mb-6 text-white/95">7 Days / 6 Nights - The Scenic "Whiskey Route"</p>

          <div className="flex flex-wrap gap-4 md:gap-6 text-white/90">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span className="text-sm md:text-base">7 Days / 6 Nights</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span className="text-sm md:text-base">1-10+ people</span>
            </div>
            <div className="flex items-center gap-2">
              <Mountain className="w-5 h-5" />
              <span className="text-sm md:text-base">5,895m / 19,341ft</span>
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
                  Route Overview
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The Machame Route, affectionately known as the "Whiskey Route," is one of the most popular and scenic paths to the summit of Mount Kilimanjaro. It offers the best acclimatization profile with the "climb high, sleep low" strategy.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  This 7-day itinerary provides an extra acclimatization day, significantly increasing your summit success rate. Trek through lush rainforests, heath moorlands, alpine deserts, and finally the glaciated summit zone.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Success Rate:</strong> Approximately 85% with our 7-day program (vs. 65% on 6-day routes)
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
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Day 1: Machame Gate to Machame Camp</h3>
                    <p className="text-gray-700 leading-relaxed mb-2">
                      <strong>Elevation:</strong> 1,800m to 3,000m | <strong>Distance:</strong> 11km | <strong>Time:</strong> 5-7 hours
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Drive from Moshi to Machame Gate (1 hour). After registration, begin trekking through the montane rainforest. Look for colobus monkeys and diverse birdlife. The trail is steep and can be muddy. Camp in the moorland zone with stunning views.
                    </p>
                  </div>

                  {/* Day 2 */}
                  <div className="border-l-4 border-[#d97706] pl-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Day 2: Machame Camp to Shira Camp</h3>
                    <p className="text-gray-700 leading-relaxed mb-2">
                      <strong>Elevation:</strong> 3,000m to 3,840m | <strong>Distance:</strong> 5km | <strong>Time:</strong> 4-6 hours
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Trek through heather moorland into the Shira Plateau. The landscape opens up with spectacular views of Kibo peak. This is a relatively short day to aid acclimatization. Arrive at Shira Camp with panoramic vistas.
                    </p>
                  </div>

                  {/* Day 3 */}
                  <div className="border-l-4 border-[#d97706] pl-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Day 3: Shira Camp to Barranco Camp via Lava Tower</h3>
                    <p className="text-gray-700 leading-relaxed mb-2">
                      <strong>Elevation:</strong> 3,840m to 4,640m to 3,960m | <strong>Distance:</strong> 10km | <strong>Time:</strong> 6-8 hours
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Critical acclimatization day: climb to Lava Tower (4,640m) for lunch, then descend to Barranco Camp (3,960m). This "climb high, sleep low" strategy greatly improves summit success. Pass through the alpine desert zone with unique vegetation.
                    </p>
                  </div>

                  {/* Day 4 */}
                  <div className="border-l-4 border-[#d97706] pl-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Day 4: Barranco Camp to Karanga Camp</h3>
                    <p className="text-gray-700 leading-relaxed mb-2">
                      <strong>Elevation:</strong> 3,960m to 3,995m | <strong>Distance:</strong> 5km | <strong>Time:</strong> 4-5 hours
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Climb the famous Barranco Wall (not technical, but thrilling!) with stunning views. Cross valleys and ridges with spectacular scenery. Short day to continue acclimatization before summit push.
                    </p>
                  </div>

                  {/* Day 5 */}
                  <div className="border-l-4 border-[#d97706] pl-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Day 5: Karanga Camp to Barafu Camp</h3>
                    <p className="text-gray-700 leading-relaxed mb-2">
                      <strong>Elevation:</strong> 3,995m to 4,673m | <strong>Distance:</strong> 4km | <strong>Time:</strong> 4-5 hours
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Ascend to Barafu Camp, your summit base camp. The landscape becomes increasingly barren and lunar-like. Arrive by early afternoon, rest, and prepare equipment. Early dinner and sleep before midnight summit attempt.
                    </p>
                  </div>

                  {/* Day 6 */}
                  <div className="border-l-4 border-[#d97706] pl-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Day 6: Summit Day - Uhuru Peak & Descend to Mweka</h3>
                    <p className="text-gray-700 leading-relaxed mb-2">
                      <strong>Elevation:</strong> 4,673m to 5,895m to 3,068m | <strong>Distance:</strong> 17km | <strong>Time:</strong> 12-15 hours
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Start at midnight for summit push. Climb steep scree to Stella Point (5,739m) at crater rim for sunrise. Final 1-hour push to Uhuru Peak (5,895m), the highest point in Africa! Descend to Barafu for rest, then continue to Mweka Camp for overnight.
                    </p>
                  </div>

                  {/* Day 7 */}
                  <div className="border-l-4 border-[#d97706] pl-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Day 7: Mweka Camp to Mweka Gate</h3>
                    <p className="text-gray-700 leading-relaxed mb-2">
                      <strong>Elevation:</strong> 3,068m to 1,640m | <strong>Distance:</strong> 10km | <strong>Time:</strong> 3-4 hours
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Final descent through rainforest to Mweka Gate. Receive your summit certificate. Transfer back to Moshi for celebration dinner and hot shower!
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
                      "Professional mountain guide",
                      "Assistant guides (1:2 ratio)",
                      "Cook & support crew",
                      "Porters for equipment",
                      "All park fees & permits",
                      "Rescue fees & taxes",
                      "3 meals daily on mountain",
                      "Camping equipment (tents, sleeping mat)",
                      "Portable toilet",
                      "Oxygen & first aid kit",
                      "Pre & post trek accommodation",
                      "Airport transfers",
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
                      "Travel insurance (mandatory)",
                      "Sleeping bag rental ($30)",
                      "Trekking poles rental ($15)",
                      "Tips for crew ($250-300pp)",
                      "Personal gear & clothing",
                      "Snacks & beverages",
                      "Laundry services",
                      "Extra hotel nights",
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
                    <p className="text-4xl font-bold text-[#d97706]">$2,589</p>
                    <p className="text-sm text-gray-500 mt-1">per person</p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3 text-sm">
                      <Calendar className="w-5 h-5 text-[#d97706]" />
                      <span className="text-gray-700">7 Days / 6 Nights</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Users className="w-5 h-5 text-[#d97706]" />
                      <span className="text-gray-700">1-10+ people</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Mountain className="w-5 h-5 text-[#d97706]" />
                      <span className="text-gray-700">5,895m Summit</span>
                    </div>
                  </div>

                  <div className="bg-amber-50 p-4 rounded-lg mb-6">
                    <p className="text-sm text-gray-700 font-semibold mb-2">Success Rate: ~85%</p>
                    <p className="text-xs text-gray-600">
                      Our 7-day itinerary offers superior acclimatization compared to shorter routes.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <Button asChild className="w-full bg-[#d97706] hover:bg-[#b45309] text-white py-6">
                      <Link href="/contact">Book This Climb</Link>
                    </Button>
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
                      Price decreases with group size. Solo climbers welcome with single supplement.
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
            Ready to Summit Africa's Highest Peak?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Join us on the scenic Machame Route for the adventure of a lifetime
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#d97706] hover:bg-[#b45309] text-white">
              <Link href="/contact">Start Your Journey</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-[#d97706] text-[#d97706] hover:bg-[#d97706] hover:text-white">
              <Link href="/kilimanjaro">Kilimanjaro Info</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
