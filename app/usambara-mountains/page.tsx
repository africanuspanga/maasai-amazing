import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navigation from "@/components/navigation"
import WhatsAppFloat from "@/components/whatsapp-float"
import Link from "next/link"

export default function UsambaraMountainsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <WhatsAppFloat />

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-gradient-to-r from-[#55331e]/90 to-[#f88f2f]/90">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/usambara-misty-peaks.png')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
          <h1 className="text-4xl md:text-7xl font-bold mb-6 font-serif">Usambara Mountains</h1>
          <p className="text-xl md:text-3xl mb-8 font-sans">The Galapagos of Africa</p>
          <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Known as the "Galapagos of Africa," the Usambara Mountains are a biodiversity hotspot featuring endemic
            species, lush montane forests, and traditional villages. This cool climate retreat offers incredible hiking,
            cultural experiences, and some of Tanzania's most spectacular mountain scenery.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#55331e] mb-6 font-serif">Biodiversity Hotspot</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                The Usambara Mountains are part of the Eastern Arc Mountains, an ancient mountain range that has been
                isolated for millions of years. This isolation has created a unique ecosystem with an extraordinary
                number of endemic species found nowhere else on Earth.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                The mountains offer a refreshing escape from Tanzania's heat with their cool climate, misty forests, and
                terraced hillsides. Traditional villages dot the landscape, where local communities practice sustainable
                agriculture and maintain their cultural heritage.
              </p>
              <Button size="lg" className="bg-[#f88f2f] hover:bg-[#e67e1a] text-white">
                <Link href="/contact">Explore Usambara Mountains</Link>
              </Button>
            </div>
            <div className="space-y-4">
              <div className="h-64 rounded-lg overflow-hidden">
                <img
                  src="/images/usambara-misty-peaks.png"
                  alt="Misty peaks of Usambara Mountains shrouded in clouds"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-64 rounded-lg overflow-hidden">
                <img
                  src="/images/usambara-cloud-ridges.png"
                  alt="Dramatic cloud-covered ridges of Usambara Mountains"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#55331e] mb-4 font-serif">
              Usambara Mountains Highlights
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover the unique features that make the Usambara Mountains a special destination.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold text-[#55331e] mb-3 font-serif">Endemic Species</h3>
                <p className="text-gray-600">
                  Home to numerous endemic plant and animal species found nowhere else on Earth.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold text-[#55331e] mb-3 font-serif">Lush Forests</h3>
                <p className="text-gray-600">
                  Explore pristine montane forests with incredible biodiversity and misty atmospheres.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold text-[#55331e] mb-3 font-serif">Traditional Villages</h3>
                <p className="text-gray-600">
                  Visit authentic villages with terraced agriculture and preserved cultural traditions.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold text-[#55331e] mb-3 font-serif">Cool Climate</h3>
                <p className="text-gray-600">Enjoy refreshing mountain air and escape from Tanzania's tropical heat.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#55331e] mb-4 font-serif">Mountain Activities</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the diverse activities available in the Usambara Mountains.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-[#55331e] mb-4 font-serif">Hiking & Trekking</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#f88f2f] rounded-full"></span>
                    <span>Forest hiking trails through endemic ecosystems</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#f88f2f] rounded-full"></span>
                    <span>Village-to-village trekking experiences</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#f88f2f] rounded-full"></span>
                    <span>Waterfall hikes and scenic viewpoints</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#f88f2f] rounded-full"></span>
                    <span>Bird watching and nature photography</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-[#55331e] mb-4 font-serif">Cultural Experiences</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#f88f2f] rounded-full"></span>
                    <span>Traditional village homestays</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#f88f2f] rounded-full"></span>
                    <span>Terraced agriculture learning experiences</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#f88f2f] rounded-full"></span>
                    <span>Local craft workshops and markets</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#f88f2f] rounded-full"></span>
                    <span>Traditional cooking classes</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#55331e] text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">Ready to Explore the Galapagos of Africa?</h2>
          <p className="text-lg mb-8 opacity-90">
            Discover the incredible biodiversity and cultural richness of the Usambara Mountains.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#f88f2f] hover:bg-[#e67e1a] text-white px-8">
              <Link href="/contact">Plan Your Mountain Adventure</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#55331e] px-8 bg-transparent"
            >
              <Link href="/contact">Learn About Biodiversity</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
