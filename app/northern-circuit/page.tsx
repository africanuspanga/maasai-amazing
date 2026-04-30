import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navigation from "@/components/navigation"
import WhatsAppFloat from "@/components/whatsapp-float"
import { BookNowButton } from "@/components/book-now-button"
import Link from "next/link"

export default function NorthernCircuitPage() {
  const parks = [
    {
      name: "Serengeti National Park",
      description: "The world's most famous wildlife sanctuary",
      detailedDescription:
        "Home to the Great Migration where 2 million wildebeest traverse endless plains. The Serengeti hosts incredible wildlife diversity including all Big Five animals with impressive populations of lions, leopards, and cheetahs in varied ecosystems.",
      image: "/images/balloon-serengeti.png",
      highlights: [
        "Home to the Great Migration",
        "Endless plains teeming with Big Five",
        "Iconic African wilderness experience",
      ],
    },
    {
      name: "Ngorongoro Crater",
      description: "UNESCO World Heritage Site",
      detailedDescription:
        "The world's largest inactive volcanic caldera supporting 25,000 large animals year-round. This natural amphitheater offers virtually guaranteed Big Five sightings including rare black rhinoceros in Africa's most concentrated game area.",
      image: "/images/safari-zebras-ngorongoro.jpg",
      highlights: [
        '"Africa\'s Eden" - highest concentration of wildlife',
        "Unique crater ecosystem",
        "Guaranteed wildlife viewing",
      ],
    },
    {
      name: "Lake Manyara National Park",
      description: "Famous tree-climbing lions",
      detailedDescription:
        "Renowned for unique tree-climbing lions and massive flocks of pink flamingos. This compact park offers incredible diversity with groundwater forests, open grasslands, and over 400 bird species in varied ecosystems.",
      image: "/images/lioness-manyara.png",
      highlights: [
        "Pink flamingo spectacles",
        "Diverse ecosystems in compact area",
        "Groundwater forest and alkaline lake",
      ],
    },
    {
      name: "Tarangire National Park",
      description: "Elephant paradise with ancient baobab trees",
      detailedDescription:
        "Famous for massive elephant herds and iconic baobab trees. During dry season, the Tarangire River attracts enormous wildlife concentrations offering authentic safari experiences with fewer crowds in pristine wilderness.",
      image: "/images/elephants-tarangire.jpg",
      highlights: ["Seasonal wildlife concentrations", "Authentic African wilderness", "Massive elephant herds"],
    },
    {
      name: "Arusha National Park",
      description: "Mount Meru's dramatic backdrop",
      detailedDescription:
        "Small but diverse park dominated by Mount Meru offering unique walking safaris and canoeing adventures. Features Ngurdoto Crater, alkaline Momela Lakes, and varied ecosystems from montane forests to grasslands.",
      image: "/images/lions-arusha.jpg",
      highlights: [
        "Walking safaris and canoeing",
        "Diverse landscapes from crater lakes to montane forests",
        "Close to Arusha city",
      ],
    },
    {
      name: "Lake Natron",
      description: "Flamingo breeding ground",
      detailedDescription:
        "Highly alkaline lake serving as primary breeding ground for 2.5 million lesser flamingos. This otherworldly destination offers dramatic mineral formations, vibrant colors, and unique cultural encounters with Maasai communities.",
      image: "/images/flamingos-natron.png",
      highlights: ["Dramatic alkaline lake", "Off-the-beaten-path adventure", "Unique geological formations"],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <WhatsAppFloat />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-r from-[#210c00]/90 to-[#f88518]/90">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif">Northern Circuit Safaris</h1>
          <p className="text-xl md:text-2xl mb-8 font-sans">Tanzania's Wildlife Crown Jewels</p>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Experience the most spectacular wildlife destinations in Tanzania. From the endless plains of the Serengeti
            to the unique ecosystem of Ngorongoro Crater, discover why the Northern Circuit is considered the crown
            jewel of African safaris.
          </p>
        </div>
      </section>

      {/* Parks Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#210c00] mb-4 font-serif">
              Explore Six Magnificent Parks
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Each park offers unique experiences and wildlife encounters that will create memories to last a lifetime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {parks.map((park, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-64 relative overflow-hidden">
                  <img
                    src={park.image || "/placeholder.svg"}
                    alt={park.name}
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#210c00] mb-3 font-serif">{park.name}</h3>
                  <p className="text-gray-600 mb-4 font-sans">{park.description}</p>
                  <p className="text-gray-700 mb-4 text-sm leading-relaxed font-sans">{park.detailedDescription}</p>
                  <ul className="space-y-2 mb-6">
                    {park.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-[#f88518] mt-1">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <BookNowButton tourName={park.name} className="w-full bg-[#f88518] hover:bg-[#c24503] text-white">BOOK NOW</BookNowButton>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#210c00] text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">Ready for Your Northern Circuit Adventure?</h2>
          <p className="text-lg mb-8 opacity-90">
            Let us craft the perfect safari experience tailored to your dreams and preferences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BookNowButton size="lg" className="bg-[#f88518] hover:bg-[#c24503] text-white px-8">BOOK NOW</BookNowButton>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#210c00] px-8 bg-transparent"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
