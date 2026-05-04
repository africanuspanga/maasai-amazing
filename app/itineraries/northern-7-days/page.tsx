import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Calendar, Users, MapPin, Check, ArrowLeft, Phone } from "lucide-react"
import { BookNowButton } from "@/components/book-now-button"
import { getGlobalSettings } from "@/lib/cms/service"

export const metadata = {
  title: "7-Day Tanzania Natural Wonders Safari | Maasai Amazing Safaris",
  description:
    "Experience two of Africa's Seven Natural Wonders: the Serengeti and Ngorongoro Crater. 7-day safari through Lake Manyara, Serengeti, and Ngorongoro.",
}

export default async function Northern7DaysSafari() {
  const settings = await getGlobalSettings()
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/northern-circuit-flamingos.jpg"
            alt="Flamingos at Ngorongoro Crater"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
        </div>

        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-black mb-4 leading-tight">
            7-Day Tanzania Natural Wonders Safari
          </h1>
          <p className="text-lg md:text-xl mb-6">Experience Two of Africa's Seven Natural Wonders</p>
          <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>7 Days / 6 Nights</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Lake Manyara, Serengeti, Ngorongoro</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span>2-6 People</span>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Breadcrumb */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Button asChild variant="ghost" className="text-[#c24503] hover:text-[#a33d02] hover:bg-amber-100">
            <Link href="/itineraries">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to All Itineraries
            </Link>
          </Button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <section>
              <h2 className="text-3xl font-serif font-bold text-[#c24503] mb-6">Safari Overview</h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p>
                  Experience Africa's greatest national parks on this 7-day safari, including two of the Seven Natural
                  Wonders of Africa: the <strong>Serengeti National Park</strong> and the{" "}
                  <strong>Ngorongoro Crater</strong>.
                </p>
                <p>
                  Start your journey in Lake Manyara, famous for its tree-climbing lions and pink-hued soda lake. Then
                  spend two unforgettable days in the legendary Serengeti, witnessing the Great Migration and tracking
                  the Big Five. Conclude with a descent into the Ngorongoro Crater, the world's largest inactive
                  volcanic caldera and home to the highest concentration of wildlife in Africa.
                </p>
              </div>
            </section>

            {/* Day by Day Itinerary */}
            <section>
              <h2 className="text-3xl font-serif font-bold text-[#c24503] mb-8">Day by Day Itinerary</h2>
              <div className="space-y-6">
                <Card className="border-l-4 border-l-[#c24503] shadow-md">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-[#c24503] mb-3">Day 1: Arrival at Kilimanjaro (JRO)</h3>
                    <p className="text-gray-700">
                      Welcome to Tanzania! Meet your private safari guide at Kilimanjaro International Airport and
                      transfer to your lodge in Arusha. Relax, acclimate, and prepare for your incredible journey
                      ahead. Your guide will brief you on the safari experience.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-[#c24503] shadow-md">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-[#c24503] mb-3">Day 2: Lake Manyara National Park</h3>
                    <p className="text-gray-700">
                      After breakfast, depart for Lake Manyara National Park. Explore diverse landscapes from
                      groundwater forests to the alkaline soda lake, famous for its spectacular birdlife including
                      thousands of flamingos. Watch for the park's famous tree-climbing lions, elephants, and troops of
                      baboons. Overnight near the park.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-[#c24503] shadow-md">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-[#c24503] mb-3">Days 3-4: Serengeti National Park</h3>
                    <p className="text-gray-700">
                      Spend two full days in the heart of the Serengeti. Witness the Great Migration (seasonal),
                      endless plains, and search for lions, leopards, cheetahs, and all members of the Big Five. Early
                      morning and late afternoon game drives maximize wildlife viewing. Experience the raw beauty of
                      Africa's most famous park. Optional balloon safari available.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-[#c24503] shadow-md">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-[#c24503] mb-3">Day 5: Ngorongoro Crater</h3>
                    <p className="text-gray-700">
                      Descend 600 meters into the magnificent Ngorongoro Crater for a full day game drive. This unique
                      ecosystem hosts an incredible density of wildlife including the rare black rhino, lions,
                      elephants, hippos, and vast herds of wildebeest and zebras. Enjoy a picnic lunch on the crater
                      floor before ascending for overnight on the crater rim.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-[#c24503] shadow-md">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-[#c24503] mb-3">Days 6-7: Departure</h3>
                    <p className="text-gray-700">
                      Enjoy a final morning in the bush with an optional early game drive. After breakfast, transfer
                      back to Kilimanjaro International Airport for your outbound flight, carrying memories of an
                      extraordinary Tanzanian adventure.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* What's Included/Excluded */}
            <section className="grid md:grid-cols-2 gap-8">
              <Card className="shadow-lg bg-green-50 border-green-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
                    <Check className="w-5 h-5" />
                    What's Included
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      <span>Private 4x4 Safari Jeep with pop-up roof</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      <span>Expert English-speaking safari guide</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      <span>Full board meals (Breakfast, Lunch, Dinner)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      <span>All National Park entrance fees</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      <span>Ngorongoro Crater fees and VAT</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      <span>Hand-picked accommodations (all tiers)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      <span>Unlimited drinking water in vehicle</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      <span>24/7 travel support</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg bg-red-50 border-red-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-red-800 mb-4">What's Not Included</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>International flights and Visa fees</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>Travel and medical insurance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>Tips for guides and lodge staff</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>Personal items and laundry</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>Optional activities (balloon safari, etc.)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </section>

            {/* Accommodation Tiers */}
            <section>
              <h2 className="text-3xl font-serif font-bold text-[#c24503] mb-6">Accommodation Options</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">Silver Tier</h3>
                    <p className="text-sm text-gray-600 mb-3">Comfortable, high-quality lodges</p>
                    <p className="text-xs text-gray-500">Examples: Ahadi Lodge, Manyara Best View</p>
                  </CardContent>
                </Card>
                <Card className="shadow-md hover:shadow-lg transition-shadow border-2 border-[#c24503]">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-[#c24503] mb-2">Gold Tier</h3>
                    <p className="text-sm text-gray-600 mb-3">Mid-range luxury with enhanced amenities</p>
                    <p className="text-xs text-gray-500">Examples: Arusha Villa, Asanja Moru</p>
                  </CardContent>
                </Card>
                <Card className="shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">Platinum Tier</h3>
                    <p className="text-sm text-gray-600 mb-3">Ultimate luxury, premier locations</p>
                    <p className="text-xs text-gray-500">Examples: Ngare Sero, Serengeti Sametu</p>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>

          {/* Sidebar - Booking Card */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 shadow-xl border-2 border-[#c24503]">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-[#c24503] mb-4">Pricing</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center pb-3 border-b">
                    <span className="text-gray-600">Low Season (Apr-May)</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div>
                      <p className="text-gray-500 text-xs">2 People</p>
                      <p className="font-bold text-[#c24503]">$2,147</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs">4 People</p>
                      <p className="font-bold text-[#c24503]">$1,728</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs">6 People</p>
                      <p className="font-bold text-[#c24503]">$1,588</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pb-3 border-b mt-4">
                    <span className="text-gray-600">Mid Season (Rest of Year)</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div>
                      <p className="text-gray-500 text-xs">2 People</p>
                      <p className="font-bold text-[#c24503]">$2,386</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs">4 People</p>
                      <p className="font-bold text-[#c24503]">$1,869</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs">6 People</p>
                      <p className="font-bold text-[#c24503]">$1,697</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pb-3 border-b mt-4">
                    <span className="text-gray-600 font-semibold">High Season (Jul-Sep, Dec-Jan)</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div>
                      <p className="text-gray-500 text-xs">2 People</p>
                      <p className="font-bold text-[#c24503]">$2,714</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs">4 People</p>
                      <p className="font-bold text-[#c24503]">$2,107</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs">6 People</p>
                      <p className="font-bold text-[#c24503]">$1,905</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <BookNowButton tourName="7-Day Natural Wonders Safari" className="w-full bg-[#c24503] hover:bg-[#a33d02] text-white text-lg py-6">Book This Safari</BookNowButton>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-[#c24503] text-[#c24503] hover:bg-[#c24503] hover:text-white py-6"
                  >
                    <Link href={`https://wa.me/${settings.whatsappNumber}`} target="_blank">
                      <Phone className="w-4 h-4 mr-2" />
                      WhatsApp Us
                    </Link>
                  </Button>
                </div>

                <p className="text-xs text-gray-500 mt-4 text-center">
                  Prices are per person based on group size. All rates in USD.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-amber-100 to-orange-100">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#c24503] mb-6">
            Ready to Experience Tanzania's Natural Wonders?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Contact us today to customize this itinerary or ask any questions about your safari adventure
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#c24503] hover:bg-[#a33d02] text-white text-lg px-8">
              <Link href="/contact">Get a Custom Quote</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-[#c24503] text-[#c24503] hover:bg-[#c24503] hover:text-white text-lg px-8 bg-white"
            >
              <Link href="/itineraries">View Other Itineraries</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
