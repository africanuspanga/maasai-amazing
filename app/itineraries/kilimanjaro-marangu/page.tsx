import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Users, MapPin, Check, X, Mountain, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import WhatsAppFloat from "@/components/whatsapp-float"
import { BookNowButton } from "@/components/book-now-button"

export default function KilimanjaroMaranguPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <WhatsAppFloat />

      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] lg:h-[70vh]">
        <Image
          src="/images/kilimanjaro-climbing.jpg"
          alt="Kilimanjaro Marangu Route"
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
            Kilimanjaro - Marangu Route
          </h1>
          <p className="text-lg md:text-xl mb-6 text-white/95">6 Days / 5 Nights - The Classic "Coca-Cola Route" with Huts</p>

          <div className="flex flex-wrap gap-4 md:gap-6 text-white/90">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span className="text-sm md:text-base">6 Days / 5 Nights</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span className="text-sm md:text-base">1-10+ people</span>
            </div>
            <div className="flex items-center gap-2">
              <Home className="w-5 h-5" />
              <span className="text-sm md:text-base">Hut Accommodation</span>
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
                  Route Overview
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The Marangu Route, nicknamed the "Coca-Cola Route," is the oldest and most established path up Kilimanjaro. It's the only route offering hut accommodation instead of camping, making it popular with climbers seeking a bit more comfort.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our 6-day itinerary includes a crucial acclimatization day at Horombo Huts, significantly improving summit success rates. The gradual ascent profile and extra day help your body adjust to altitude.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Success Rate:</strong> Approximately 75% with our 6-day program (vs. 50% on 5-day routes). <strong>Unique Features:</strong> Sleeping huts with beds, dining halls, and the only route with up and down on same path.
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
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Day 1: Marangu Gate to Mandara Hut</h3>
                    <p className="text-gray-700 leading-relaxed mb-2">
                      <strong>Elevation:</strong> 1,870m to 2,700m | <strong>Distance:</strong> 8km | <strong>Time:</strong> 4-5 hours
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Drive from Moshi to Marangu Gate for registration and permit checks. Begin trekking through lush tropical rainforest with excellent chances of spotting blue monkeys and colobus monkeys. The well-maintained trail leads to Mandara Hut, which has dormitory-style accommodation and a dining hall.
                    </p>
                  </div>

                  {/* Day 2 */}
                  <div className="border-l-4 border-[#c24503] pl-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Day 2: Mandara Hut to Horombo Hut</h3>
                    <p className="text-gray-700 leading-relaxed mb-2">
                      <strong>Elevation:</strong> 2,700m to 3,720m | <strong>Distance:</strong> 12km | <strong>Time:</strong> 6-8 hours
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Trek out of the rainforest into the moorland zone. The landscape opens up with spectacular views of Kibo and Mawenzi peaks. Pass the last water point. Horombo Hut is a larger complex with great views, solar lighting, and multiple accommodation blocks.
                    </p>
                  </div>

                  {/* Day 3 */}
                  <div className="border-l-4 border-[#c24503] pl-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Day 3: Acclimatization Day at Horombo Hut</h3>
                    <p className="text-gray-700 leading-relaxed mb-2">
                      <strong>Elevation:</strong> 3,720m to 4,300m to 3,720m | <strong>Distance:</strong> 10km | <strong>Time:</strong> 4-6 hours
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Critical acclimatization day! Hike to Zebra Rocks (4,300m) for lunch with stunning views, then return to Horombo for overnight. This "climb high, sleep low" strategy greatly improves your summit chances. Spend afternoon resting and hydrating.
                    </p>
                  </div>

                  {/* Day 4 */}
                  <div className="border-l-4 border-[#c24503] pl-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Day 4: Horombo Hut to Kibo Hut</h3>
                    <p className="text-gray-700 leading-relaxed mb-2">
                      <strong>Elevation:</strong> 3,720m to 4,703m | <strong>Distance:</strong> 10km | <strong>Time:</strong> 6-8 hours
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Trek through the alpine desert zone - a lunar-like landscape with little vegetation. Pass "The Saddle" between Mawenzi and Kibo peaks. Arrive at Kibo Hut, your base camp for the summit attempt. Early dinner at 18:00, then rest before midnight wake-up call.
                    </p>
                  </div>

                  {/* Day 5 */}
                  <div className="border-l-4 border-[#c24503] pl-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Day 5: Summit Day - Uhuru Peak & Descend to Horombo</h3>
                    <p className="text-gray-700 leading-relaxed mb-2">
                      <strong>Elevation:</strong> 4,703m to 5,895m to 3,720m | <strong>Distance:</strong> 21km | <strong>Time:</strong> 12-15 hours
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Start at midnight. Ascend steep scree slope to Gilman's Point (5,681m) on crater rim at sunrise. Continue along crater rim to Uhuru Peak (5,895m), the highest point in Africa! After summit photos, descend to Kibo Hut for rest and lunch, then continue down to Horombo Hut for overnight.
                    </p>
                  </div>

                  {/* Day 6 */}
                  <div className="border-l-4 border-[#c24503] pl-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Day 6: Horombo Hut to Marangu Gate</h3>
                    <p className="text-gray-700 leading-relaxed mb-2">
                      <strong>Elevation:</strong> 3,720m to 1,870m | <strong>Distance:</strong> 20km | <strong>Time:</strong> 5-7 hours
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Final descent through moorland and rainforest to Marangu Gate. Receive your official summit certificate. Transfer back to Moshi for hot shower and celebration!
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
                      "Professional mountain guide",
                      "Assistant guides (1:2 ratio)",
                      "Cook & support crew",
                      "Porters for equipment",
                      "All park fees & permits",
                      "Rescue fees & camping fees",
                      "3 meals daily on mountain",
                      "Hut accommodation (beds)",
                      "Drinking water on trek",
                      "Oxygen & first aid kit",
                      "Pre & post trek hotel",
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
                  <h3 className="text-xl font-bold text-[#c24503] mb-4">Not Included</h3>
                  <ul className="space-y-2">
                    {[
                      "International flights",
                      "Tanzania visa ($50-100)",
                      "Travel insurance (required)",
                      "Sleeping bag rental ($30)",
                      "Trekking poles rental ($15)",
                      "Tips for crew ($250-300pp)",
                      "Personal clothing & gear",
                      "Snacks & energy bars",
                      "Alcoholic beverages",
                      "Extra accommodation",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-700">
                        <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Why Choose Marangu */}
              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#c24503] mb-4">Why Choose the Marangu Route?</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3 text-gray-700">
                    <Home className="w-5 h-5 text-[#c24503] flex-shrink-0 mt-0.5" />
                    <span><strong>Hut Accommodation:</strong> Sleep in bunk beds with mattresses instead of tents</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <Check className="w-5 h-5 text-[#c24503] flex-shrink-0 mt-0.5" />
                    <span><strong>Dining Halls:</strong> Eat meals in communal dining areas</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <Check className="w-5 h-5 text-[#c24503] flex-shrink-0 mt-0.5" />
                    <span><strong>Gradual Ascent:</strong> Gentler slope compared to other routes</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <Check className="w-5 h-5 text-[#c24503] flex-shrink-0 mt-0.5" />
                    <span><strong>Acclimatization Day:</strong> Extra day at Horombo increases success rate</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column - Booking Card */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24 border-2 border-[#c24503] shadow-xl">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <p className="text-sm text-gray-600 mb-2">Starting from</p>
                    <p className="text-4xl font-bold text-[#c24503]">$2,349</p>
                    <p className="text-sm text-gray-500 mt-1">per person</p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3 text-sm">
                      <Calendar className="w-5 h-5 text-[#c24503]" />
                      <span className="text-gray-700">6 Days / 5 Nights</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Users className="w-5 h-5 text-[#c24503]" />
                      <span className="text-gray-700">1-10+ people</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Home className="w-5 h-5 text-[#c24503]" />
                      <span className="text-gray-700">Hut Accommodation</span>
                    </div>
                  </div>

                  <div className="bg-amber-50 p-4 rounded-lg mb-6">
                    <p className="text-sm text-gray-700 font-semibold mb-2">Success Rate: ~75%</p>
                    <p className="text-xs text-gray-600">
                      The only route with hut accommodation and an established classic path.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <BookNowButton tourName="Kilimanjaro - Marangu Route" className="w-full bg-[#c24503] hover:bg-[#a33d02] text-white py-6">Book This Climb</BookNowButton>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-[#c24503] text-[#c24503] hover:bg-[#c24503] hover:text-white py-6"
                    >
                      <Link href="https://wa.me/255760246801" target="_blank">
                        WhatsApp Inquiry
                      </Link>
                    </Button>
                  </div>

                  <div className="mt-6 pt-6 border-t">
                    <p className="text-xs text-gray-600 text-center">
                      Group discounts available. Contact us for custom dates and pricing.
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
            Climb the Classic Route to the Roof of Africa
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Experience Kilimanjaro with the comfort of hut accommodation on the historic Marangu Route
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#c24503] hover:bg-[#a33d02] text-white">
              <Link href="/contact">Begin Your Climb</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-[#c24503] text-[#c24503] hover:bg-[#c24503] hover:text-white">
              <Link href="/kilimanjaro">Kilimanjaro Info</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
