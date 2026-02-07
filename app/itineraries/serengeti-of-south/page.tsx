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
  title: "6 Days Serengeti of the South | Saitoti Tours",
  description:
    "A deep dive into the rugged landscapes of Ruaha National Park combined with the accessible wildlife of Mikumi. Multi-day exploration of massive elephant herds and predators.",
}

export default function SerengetiOfSouthPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/maasai-women.jpg"
            alt="Serengeti of the South - Ruaha"
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
            6 Days Serengeti of the South
          </h1>
          <p className="text-lg md:text-xl mb-6">Mikumi - Ruaha - Maasai Culture</p>
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
              <span>From $1,500 per person</span>
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
                A deep dive into the rugged landscapes of Ruaha National Park combined with the accessible wildlife of Mikumi. This expedition focuses on Tanzania's largest national park, known for its massive elephant herds, large lion prides, and elusive predators like leopards and wild dogs.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Ruaha is often called "The Serengeti of the South" for good reason - it offers incredible wildlife concentrations with a fraction of the tourists. Combined with the scenic beauty of the Great Ruaha River and rocky kopjes, plus an authentic Maasai cultural experience, this safari delivers an unforgettable African adventure.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-[#55331e] mb-3">Tour Highlights</h3>
                    <ul className="space-y-2">
                      {[
                        "Multi-day Ruaha exploration",
                        "Massive elephant herds",
                        "Large lion prides",
                        "Wild dog sightings",
                        "Great Ruaha River",
                        "Maasai Boma cultural visit",
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
                        "Professional guide",
                        "4x4 safari vehicle",
                        "All park fees",
                        "Entry to Ruaha & Mikumi",
                        "Full board accommodation",
                        "Cultural visit fees",
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
                    <p className="text-4xl font-bold text-[#f88f2f]">From $1,500</p>
                    <p className="text-sm text-gray-500 mt-1">Contact for exact quote</p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <BookNowButton tourName="6 Days Serengeti of the South" className="w-full bg-[#f88f2f] hover:bg-[#e67e1e] text-white text-lg py-6">Book This Tour</BookNowButton>
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
                        <span className="font-semibold">Safari + Culture</span>
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
                title: "Dar es Salaam to Mikumi",
                description:
                  "Morning pickup from Dar es Salaam and transfer to Mikumi National Park. Enjoy the changing landscapes as you travel through rural Tanzania. Arrive for a sunset game drive to spot lions, elephants, and zebras in the golden afternoon light.",
              },
              {
                day: 2,
                title: "Mikumi to Ruaha",
                description:
                  "Early morning game drive in Mikumi to catch the animals at their most active. After breakfast, journey to the remote and wild Ruaha National Park - Tanzania's largest. The drive offers stunning views of the Southern Highlands and Baobab Valley.",
              },
              {
                day: 3,
                title: "Full Day in Ruaha - Part 1",
                description:
                  "Your first full day dedicated to exploring Ruaha, known for its high concentration of lions, leopards, and wild dogs. Follow the Great Ruaha River to see huge elephant herds and crocodiles sunning on the banks. Rocky kopjes provide perfect vantage points.",
              },
              {
                day: 4,
                title: "Full Day in Ruaha - Part 2",
                description:
                  "Another full day exploring different areas of Ruaha National Park. Search for the elusive wild dogs, spot cheetahs on the open plains, and watch massive herds of buffalo. The park's rugged beauty and diverse wildlife will leave you breathless.",
              },
              {
                day: 5,
                title: "Ruaha to Mikumi",
                description:
                  "A morning game drive in Ruaha for final wildlife sightings before returning to Mikumi for an overnight stay. The journey offers chances to spot wildlife along the way and appreciate the changing landscapes from wilderness to savanna.",
              },
              {
                day: 6,
                title: "Maasai Village & Return",
                description:
                  "Experience the authentic lifestyle of the Maasai people in their traditional Boma. Learn about their ancient traditions, join in traditional dances, and understand their unique cattle-herding culture. Return to Dar es Salaam with incredible memories.",
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
                    "Professional English-speaking guide",
                    "4x4 safari vehicle with pop-up roof",
                    "All park entrance fees",
                    "Entry to Ruaha and Mikumi parks",
                    "Full board accommodation",
                    "All meals as per itinerary",
                    "Maasai village visit and fees",
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
                    "Travel and personal insurance",
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">Experience the Serengeti of the South</h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Discover Tanzania's largest national park with fewer crowds and incredible wildlife
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BookNowButton tourName="6 Days Serengeti of the South" size="lg" className="bg-[#f88f2f] hover:bg-[#e67e1e] text-white text-lg px-8 py-3">Book Now</BookNowButton>
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
