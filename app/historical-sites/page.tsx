import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import WhatsAppFloat from "@/components/whatsapp-float"
import Link from "next/link"

export const metadata = {
  title: "Tanzania Historical Sites & Heritage Tours | UNESCO World Heritage",
  description:
    "Journey through Tanzania's rich history. Visit Kilwa Kisiwani, Stone Town, Olduvai Gorge, Bagamoyo and Kondoa Rock Art - UNESCO sites spanning millions of years of human heritage.",
  alternates: {
    canonical: "https://maasaiamazingsafaris.com/historical-sites",
  },
}

export default function HistoricalSitesPage() {
  const sites = [
    {
      name: "Kilwa Kisiwani and Songo Mnara",
      status: "UNESCO World Heritage Site",
      period: "13th-16th Century",
      location: "Kilwa District, Lindi Region",
      highlights: [
        "Medieval Swahili trading cities",
        "Islamic architecture and ruins",
        "Ancient gold and ivory trade routes",
        "Great Mosque of Kilwa",
      ],
      details:
        "These remarkable ruins represent the height of Swahili civilization and the Indian Ocean trade network. Kilwa was once one of the most powerful city-states in East Africa, controlling gold trade from Zimbabwe and connecting Africa to Asia.",
      image: "/images/white-fortress.png",
    },
    {
      name: "Stone Town, Zanzibar",
      status: "UNESCO World Heritage Site",
      period: "19th Century",
      location: "Zanzibar City",
      highlights: [
        "Fusion of African, Arab, and European cultures",
        "Labyrinthine streets and ancient buildings",
        "Spice trade heritage",
        "Sultan's Palace and House of Wonders",
      ],
      details:
        "The historic heart of Zanzibar City, Stone Town is a living museum of East African coastal trading culture. Its narrow alleys, bustling bazaars, mosques, and grand Arab houses reflect the complex history of the Spice Islands.",
      image: "/images/stone-town-market.png",
    },
    {
      name: "Olduvai Gorge",
      status: "Archaeological Site",
      period: "2 Million Years Ago",
      location: "Ngorongoro Conservation Area",
      highlights: [
        '"Cradle of Mankind"',
        "Early human fossil discoveries",
        "Archaeological significance",
        "Leakey family research site",
      ],
      details:
        "Known as the 'Cradle of Mankind', Olduvai Gorge has yielded some of the most important early human fossils ever discovered. The Leakey family's groundbreaking work here revolutionized our understanding of human evolution.",
      image: "/images/olduvai-gorge.png",
    },
    {
      name: "Bagamoyo",
      status: "Historic Coastal Town",
      period: "18th-19th Century",
      location: "Pwani Region",
      highlights: [
        "Former slave trade center",
        "German colonial architecture",
        "Caravan trade terminus",
        "Cultural heritage center",
      ],
      details:
        "Once the most important trading port of the central and northern East African coast, Bagamoyo was the end point of the caravan trade routes and a major center of the slave trade. Today it preserves important colonial and pre-colonial architecture.",
      image: "/images/coastal-ruins.png",
    },
    {
      name: "Kondoa Rock-Art Sites",
      status: "UNESCO World Heritage Site",
      period: "Prehistoric Era",
      location: "Kondoa District, Dodoma Region",
      highlights: [
        "Ancient rock paintings",
        "Prehistoric human expression",
        "Hunter-gatherer art",
        "Spiritual significance to local communities",
      ],
      details:
        "These ancient rock art sites contain some of the most important prehistoric paintings in Africa, created by hunter-gatherer communities over thousands of years. The art provides insights into the beliefs and daily life of early inhabitants.",
      image: "/images/kondoa-rock-art.png",
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
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif">Historical Sites</h1>
          <p className="text-xl md:text-2xl mb-8 font-sans">Tanzania's Rich Cultural Heritage</p>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Tanzania is a treasure trove of human history, from ancient civilizations to colonial influences. Explore
            sites that tell the story of humanity itself, from the earliest human ancestors to the great trading empires
            of the Indian Ocean.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#210c00] mb-6 font-serif">
            Journey Through Time and Civilization
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Tanzania's historical sites span millions of years of human history, from the earliest evidence of our
            ancestors to the sophisticated trading civilizations that connected Africa to the world. These UNESCO World
            Heritage Sites and archaeological treasures offer profound insights into the human story.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#f88518] mb-2">3</div>
              <p className="text-gray-600">UNESCO Sites</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#f88518] mb-2">2M+</div>
              <p className="text-gray-600">Years of History</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#f88518] mb-2">5</div>
              <p className="text-gray-600">Historic Destinations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Historical Sites Grid */}
      <section className="py-20 px-4 bg-[#faf6f1]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#210c00] mb-4 font-serif">
              Five Remarkable Historical Destinations
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Each site represents a different chapter in the remarkable story of human civilization in East Africa.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {sites.map((site, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-64 bg-gray-200 overflow-hidden">
                  <img
                    src={site.image || "/placeholder.svg"}
                    alt={site.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-[#210c00] font-serif">{site.name}</h3>
                      <p className="text-[#f88518] font-medium">{site.status}</p>
                    </div>
                    <div className="text-right text-sm">
                      <p className="font-medium">{site.period}</p>
                      <p className="text-gray-600 text-xs">{site.location}</p>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed">{site.details}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-[#210c00] mb-3">Historical Highlights:</h4>
                    <ul className="space-y-2">
                      {site.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="text-[#f88518] mt-1">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="w-full bg-[#f88518] hover:bg-[#c24503] text-white">
                    <Link href="/contact">Explore This Site</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Visit Historical Sites */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#210c00] mb-6 font-serif">
                Why Explore Tanzania's Historical Heritage?
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Tanzania's historical sites offer more than just ancient ruins and artifacts. They provide profound
                connections to our shared human story and the rich cultural tapestry that makes East Africa unique.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#f88518] rounded-full mt-2"></span>
                  <div>
                    <span className="font-semibold text-[#210c00]">Human Origins:</span>
                    <span className="text-gray-600 ml-2">
                      Discover where humanity began and evolved over millions of years
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#f88518] rounded-full mt-2"></span>
                  <div>
                    <span className="font-semibold text-[#210c00]">Trading Civilizations:</span>
                    <span className="text-gray-600 ml-2">
                      Explore the sophisticated societies that connected Africa to the world
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#f88518] rounded-full mt-2"></span>
                  <div>
                    <span className="font-semibold text-[#210c00]">Cultural Understanding:</span>
                    <span className="text-gray-600 ml-2">
                      Gain insights into the diverse cultures that shaped modern Tanzania
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#f88518] rounded-full mt-2"></span>
                  <div>
                    <span className="font-semibold text-[#210c00]">UNESCO Recognition:</span>
                    <span className="text-gray-600 ml-2">
                      Visit sites recognized as having outstanding universal value
                    </span>
                  </div>
                </li>
              </ul>
              <Button size="lg" className="bg-[#f88518] hover:bg-[#c24503] text-white">
                <Link href="/contact">Plan Your Historical Journey</Link>
              </Button>
            </div>
            <div className="h-96 bg-gray-200 rounded-lg overflow-hidden">
              <img
                src="/images/old-castle-heritage.png"
                alt="Tanzania's Historical Heritage"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#210c00] text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">Ready to Walk Through History?</h2>
          <p className="text-lg mb-8 opacity-90">
            Let us guide you through Tanzania's remarkable historical sites and the stories they tell about our shared
            human heritage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#f88518] hover:bg-[#c24503] text-white px-8">
              <Link href="/contact">Explore Historical Sites</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#210c00] px-8 bg-transparent"
            >
              <Link href="/contact">Get Cultural Tour Package</Link>
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
