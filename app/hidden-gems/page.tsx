import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import WhatsAppFloat from "@/components/whatsapp-float"
import Link from "next/link"

export default function HiddenGemsPage() {
  const gems = [
    {
      name: "Materuni Waterfall",
      description: "Spectacular 80-meter waterfall",
      location: "Kilimanjaro Region",
      duration: "Half Day",
      highlights: [
        "Coffee plantation tours",
        "Chagga cultural experience",
        "Swimming in natural pools",
        "Local guide storytelling",
      ],
      details:
        "Hidden in the lush foothills of Mount Kilimanjaro, Materuni Waterfall cascades 80 meters into a crystal-clear pool. The journey includes walking through coffee plantations where you'll learn about traditional coffee processing from local Chagga farmers.",
    },
    {
      name: "Lake Duluti",
      description: "Crater lake paradise",
      location: "Arusha Region",
      duration: "Half Day",
      highlights: [
        "Canoeing and forest walks",
        "Peaceful retreat near Arusha",
        "Bird watching paradise",
        "Local community interaction",
      ],
      details:
        "This serene crater lake, formed thousands of years ago, offers a tranquil escape just outside Arusha. Paddle across the calm waters while spotting colorful birds and enjoying the reflection of Mount Meru in the lake's surface.",
    },
    {
      name: "Rundugai Hot Springs",
      description: "Natural thermal springs",
      location: "Kilimanjaro Region",
      duration: "Half Day",
      highlights: [
        "Healing mineral waters",
        "Local community experience",
        "Natural spa treatment",
        "Cultural storytelling",
      ],
      details:
        "These natural hot springs, believed by locals to have healing properties, offer a unique cultural and wellness experience. The mineral-rich waters are maintained by the local community who share stories of their traditional uses.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <WhatsAppFloat />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center bg-gradient-to-r from-[#210c00]/90 to-[#f88518]/90">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif">Hidden Gems</h1>
          <p className="text-xl md:text-2xl mb-8 font-sans">Tanzania's Secret Treasures</p>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Beyond the famous parks and peaks lie Tanzania's best-kept secrets. Discover enchanting waterfalls, serene
            crater lakes, and healing hot springs where authentic cultural experiences await the curious traveler.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#210c00] mb-6 font-serif">
            Discover Tanzania's Best-Kept Secrets
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            While millions visit the Serengeti and climb Kilimanjaro, few discover the intimate treasures that reveal
            Tanzania's soul. These hidden gems offer authentic encounters with local communities, pristine natural
            beauty, and experiences that connect you deeply with the land and its people.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#f88518] mb-2">3</div>
              <p className="text-gray-600">Secret Locations</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#f88518] mb-2">Authentic</div>
              <p className="text-gray-600">Cultural Experiences</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#f88518] mb-2">Untouched</div>
              <p className="text-gray-600">Natural Beauty</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hidden Gems Grid */}
      <section className="py-20 px-4 bg-[#faf6f1]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#210c00] mb-4 font-serif">
              Three Extraordinary Hidden Treasures
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Each hidden gem offers a unique window into Tanzania's natural wonders and cultural richness.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {gems.map((gem, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full">
                <div className="h-64 bg-gray-200 flex items-center justify-center relative overflow-hidden">
                  <img
                    src={
                      gem.name === "Materuni Waterfall"
                        ? "/images/materuni-waterfall.jpeg"
                        : gem.name === "Lake Duluti"
                          ? "/images/lake-duluti-birds.jpeg"
                          : "/images/rundugai-hot-springs.jpeg"
                    }
                    alt={gem.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-[#210c00] font-serif">{gem.name}</h3>
                      <p className="text-[#f88518] font-medium">{gem.description}</p>
                    </div>
                    <div className="text-right text-sm">
                      <p className="font-medium">{gem.duration}</p>
                      <p className="text-gray-600">{gem.location}</p>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed flex-grow">{gem.details}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-[#210c00] mb-3">Experience Highlights:</h4>
                    <ul className="space-y-2">
                      {gem.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="text-[#f88518] mt-1">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="w-full bg-[#f88518] hover:bg-[#c24503] text-white mt-auto">
                    <Link href="/contact">Discover This Gem</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Visit Hidden Gems */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="h-96 bg-gray-200 rounded-lg flex items-center justify-center relative overflow-hidden">
              <img
                src="/images/aerial-landscape.png"
                alt="Aerial view of Tanzania's hidden landscapes"
                className="w-full h-full object-cover object-center rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#210c00] mb-6 font-serif">
                Why Explore Tanzania's Hidden Gems?
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                These secret treasures offer something that famous destinations cannot: intimacy, authenticity, and the
                joy of discovery. Here, you'll create memories that are uniquely yours, away from crowds and tourist
                trails.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#f88518] rounded-full mt-2"></span>
                  <div>
                    <span className="font-semibold text-[#210c00]">Authentic Cultural Exchange:</span>
                    <span className="text-gray-600 ml-2">Meet local communities and learn traditional practices</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#f88518] rounded-full mt-2"></span>
                  <div>
                    <span className="font-semibold text-[#210c00]">Pristine Natural Beauty:</span>
                    <span className="text-gray-600 ml-2">Untouched landscapes perfect for photography</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#f88518] rounded-full mt-2"></span>
                  <div>
                    <span className="font-semibold text-[#210c00]">Personal Discovery:</span>
                    <span className="text-gray-600 ml-2">Create unique stories and unforgettable memories</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#f88518] rounded-full mt-2"></span>
                  <div>
                    <span className="font-semibold text-[#210c00]">Peaceful Experiences:</span>
                    <span className="text-gray-600 ml-2">Escape crowds and connect with nature</span>
                  </div>
                </li>
              </ul>
              <Button size="lg" className="bg-[#f88518] hover:bg-[#c24503] text-white">
                <Link href="/contact">Plan Your Hidden Gems Tour</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Combination Tours */}
      <section className="py-16 px-4 bg-[#faf6f1]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#210c00] mb-6 font-serif">Perfect Combinations</h2>
          <p className="text-lg text-gray-600 mb-8">
            These hidden gems pair beautifully with our main safari and trekking experiences, adding depth and
            authenticity to your Tanzania adventure.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold text-[#210c00] mb-3 font-serif">Safari + Hidden Gems</h3>
                <p className="text-gray-600">
                  Combine your Northern Circuit safari with visits to Materuni Waterfall and Lake Duluti for a perfect
                  blend of wildlife and cultural experiences.
                </p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold text-[#210c00] mb-3 font-serif">Kilimanjaro + Wellness</h3>
                <p className="text-gray-600">
                  After conquering Kilimanjaro, relax and rejuvenate at Rundugai Hot Springs while learning about local
                  healing traditions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#210c00] text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">Ready to Discover Tanzania's Secrets?</h2>
          <p className="text-lg mb-8 opacity-90">
            Let us guide you to the hidden treasures that reveal the true heart of Tanzania.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#f88518] hover:bg-[#c24503] text-white px-8">
              <Link href="/contact">Explore Hidden Gems</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#210c00] px-8 bg-transparent"
            >
              <Link href="/contact">Customize Your Journey</Link>
            </Button>
          </div>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-[#f88518] via-[#c24503] to-[#f88518]" />
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
