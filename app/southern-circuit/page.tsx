import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navigation from "@/components/navigation"
import WhatsAppFloat from "@/components/whatsapp-float"
import Link from "next/link"

export default function SouthernCircuitPage() {
  const parks = [
    {
      name: "Mikumi National Park",
      description: "Tanzania's fourth-largest park",
      highlights: [
        "Easy access with abundant wildlife",
        "Mini-Serengeti experience",
        "Great for photography",
        "Year-round wildlife viewing",
      ],
      details:
        "Often called the 'mini-Serengeti', Mikumi offers an accessible safari experience with reliable wildlife sightings including elephants, lions, leopards, and over 400 bird species.",
    },
    {
      name: "Ruaha National Park",
      description: "Tanzania's largest park",
      highlights: [
        "Untamed wilderness and massive elephant herds",
        "Remote and exclusive safari experience",
        "Great River Ruaha ecosystem",
        "Exceptional predator viewing",
      ],
      details:
        "Africa's largest elephant sanctuary, Ruaha is a pristine wilderness where ancient baobab trees dot the landscape and the Great Ruaha River sustains incredible wildlife diversity.",
    },
    {
      name: "Nyerere National Park",
      description: "Africa's largest protected area (Formerly Selous)",
      highlights: [
        "UNESCO World Heritage Site",
        "Boat safaris and walking adventures",
        "Pristine wilderness experience",
        "Diverse safari activities",
      ],
      details:
        "This vast wilderness offers unique safari experiences including boat safaris along the Rufiji River, walking safaris, and fly camping in one of Africa's most pristine ecosystems.",
    },
    {
      name: "Saadani National Park",
      description: "Unique beach and bush combination",
      highlights: [
        "Where the ocean meets the safari",
        "Rare coastal wildlife experience",
        "Beach relaxation after safari",
        "Marine and terrestrial wildlife",
      ],
      details:
        "The only park in Tanzania where you can see elephants walking on the beach. Saadani uniquely combines traditional safari with Indian Ocean coastline relaxation.",
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
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif">Southern Circuit Safaris</h1>
          <p className="text-xl md:text-2xl mb-8 font-sans">Tanzania's Hidden Wilderness</p>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Discover Tanzania's best-kept secrets in the Southern Circuit, where vast wilderness areas offer exclusive
            safari experiences away from the crowds. From Africa's largest elephant sanctuary to unique beach-and-bush
            combinations, the south reveals Tanzania's untamed beauty.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#210c00] mb-6 font-serif">Untouched Wilderness Awaits</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            The Southern Circuit represents Tanzania's wild heart - vast, remote, and spectacularly beautiful. These
            parks offer intimate wildlife encounters in pristine environments where you'll often have sightings to
            yourself. Experience authentic African wilderness as it was meant to be.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#f88518] mb-2">4</div>
              <p className="text-gray-600">Spectacular Parks</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#f88518] mb-2">50,000+</div>
              <p className="text-gray-600">Square Kilometers</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#f88518] mb-2">Exclusive</div>
              <p className="text-gray-600">Wildlife Experiences</p>
            </div>
          </div>
        </div>
      </section>

      {/* Parks Grid */}
      <section className="py-20 px-4 bg-[#faf6f1]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#210c00] mb-4 font-serif">
              Four Magnificent Southern Parks
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Each park in the Southern Circuit offers unique landscapes and wildlife experiences that showcase
              Tanzania's incredible diversity.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {parks.map((park, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-64 bg-gray-200 relative overflow-hidden">
                  <img
                    src={
                      park.name === "Mikumi National Park"
                        ? "/images/buffalo-mikumi.png"
                        : park.name === "Ruaha National Park"
                          ? "/images/elephants-ruaha.png"
                          : park.name === "Nyerere National Park"
                            ? "/images/elephants-nyerere.png"
                            : park.name === "Saadani National Park"
                              ? "/images/sunset-saadani.png"
                              : "/placeholder.svg?height=256&width=400"
                    }
                    alt={park.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#210c00] mb-2 font-serif">{park.name}</h3>
                  <p className="text-[#f88518] font-medium mb-4">{park.description}</p>
                  <p className="text-gray-600 mb-4 leading-relaxed">{park.details}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-[#210c00] mb-3">Park Highlights:</h4>
                    <ul className="space-y-2">
                      {park.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="text-[#f88518] mt-1">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="w-full bg-[#f88518] hover:bg-[#c24503] text-white">
                    <Link href="/contact" className="w-full block">
                      Explore This Park
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Southern Circuit */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#210c00] mb-6 font-serif">
                Why Choose the Southern Circuit?
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                The Southern Circuit offers a completely different safari experience from the famous northern parks.
                Here, you'll find exclusivity, authenticity, and wilderness experiences that few travelers ever
                discover.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#f88518] rounded-full mt-2"></span>
                  <div>
                    <span className="font-semibold text-[#210c00]">Exclusive Experiences:</span>
                    <span className="text-gray-600 ml-2">Fewer crowds, more intimate wildlife encounters</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#f88518] rounded-full mt-2"></span>
                  <div>
                    <span className="font-semibold text-[#210c00]">Diverse Activities:</span>
                    <span className="text-gray-600 ml-2">Boat safaris, walking safaris, and beach combinations</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#f88518] rounded-full mt-2"></span>
                  <div>
                    <span className="font-semibold text-[#210c00]">Pristine Wilderness:</span>
                    <span className="text-gray-600 ml-2">Untouched landscapes and authentic African experiences</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#f88518] rounded-full mt-2"></span>
                  <div>
                    <span className="font-semibold text-[#210c00]">Year-Round Destination:</span>
                    <span className="text-gray-600 ml-2">Excellent wildlife viewing in all seasons</span>
                  </div>
                </li>
              </ul>
              <Button size="lg" className="bg-[#f88518] hover:bg-[#c24503] text-white">
                <Link href="/contact">Plan Your Southern Safari</Link>
              </Button>
            </div>
            <div className="h-96 bg-gray-200 rounded-lg relative overflow-hidden">
              <img
                src="/images/lilac-breasted-roller.png"
                alt="Colorful lilac-breasted roller bird representing Southern Circuit wildlife diversity"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#210c00] text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
            Ready to Explore Tanzania's Hidden Wilderness?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Discover the authentic Africa that few travelers experience in the pristine Southern Circuit parks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#f88518] hover:bg-[#c24503] text-white px-8">
              <Link href="/contact">Start Your Adventure</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#210c00] px-8 bg-transparent"
            >
              <Link href="/contact">Get Detailed Itinerary</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
