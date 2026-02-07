import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navigation from "@/components/navigation"
import WhatsAppFloat from "@/components/whatsapp-float"
import { BookNowButton } from "@/components/book-now-button"
import Link from "next/link"

export default function MtMeruPage() {
  const highlights = [
    {
      title: "Second Highest Peak",
      description: "At 4,566 meters, Mt. Meru is Tanzania's second highest mountain and offers spectacular views.",
    },
    {
      title: "Kilimanjaro Views",
      description: "Enjoy unobstructed views of Mount Kilimanjaro from the summit - perfect for photography.",
    },
    {
      title: "Diverse Ecosystems",
      description: "Trek through montane forests, moorlands, and alpine deserts with incredible biodiversity.",
    },
    {
      title: "Wildlife Encounters",
      description: "Spot elephants, buffalos, and various primates in Arusha National Park during your climb.",
    },
    {
      title: "Less Crowded",
      description: "Experience a more intimate mountain climbing adventure with fewer crowds than Kilimanjaro.",
    },
    {
      title: "Perfect Preparation",
      description: "Ideal acclimatization climb before attempting Kilimanjaro or as a standalone adventure.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <WhatsAppFloat />

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-gradient-to-r from-[#55331e]/90 to-[#f88f2f]/90">
        <div className="absolute inset-0">
          <img
            src="/images/mt-meru-distant.png"
            alt="Mount Meru rising above clouds"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
          <h1 className="text-4xl md:text-7xl font-bold mb-6 font-serif">Mount Meru</h1>
          <p className="text-xl md:text-3xl mb-8 font-sans">Tanzania's Hidden Giant</p>
          <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Standing majestically at 4,566 meters, Mount Meru is Tanzania's second highest peak and one of Africa's most
            beautiful mountains. Often overshadowed by its famous neighbor Kilimanjaro, Mt. Meru offers an equally
            rewarding but more intimate climbing experience with spectacular views and diverse ecosystems.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#55331e] mb-6 font-serif">Why Climb Mount Meru?</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Mount Meru offers one of Tanzania's most rewarding climbing experiences. This active volcano provides
                stunning views of Kilimanjaro, diverse wildlife encounters, and a challenging yet achievable summit for
                adventurous travelers seeking something special.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                The climb takes you through Arusha National Park, offering the unique opportunity to see wildlife
                including elephants, buffalos, and various primates during your ascent. The summit rewards climbers with
                breathtaking sunrise views and panoramic vistas across northern Tanzania.
              </p>
              <Button size="lg" className="bg-[#f88f2f] hover:bg-[#e67e1a] text-white">
                <Link href="/contact">Plan Your Mt. Meru Climb</Link>
              </Button>
            </div>
            <div className="space-y-4">
              <div className="h-64 rounded-lg overflow-hidden">
                <img
                  src="/images/mt-meru-distant.png"
                  alt="Mount Meru majestic view"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-64 rounded-lg overflow-hidden">
                <img
                  src="/images/mt-meru-climbers.png"
                  alt="Climbers trekking on Mount Meru rocky terrain"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Grid */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#55331e] mb-4 font-serif">
              Mount Meru Climbing Highlights
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover what makes Mount Meru a unique and rewarding climbing destination.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold text-[#55331e] mb-3 font-serif">{highlight.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Climbing Route Information */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#55331e] mb-4 font-serif">The Climbing Experience</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A 3-4 day adventure through diverse ecosystems to the summit of Tanzania's second highest peak.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-[#55331e] mb-4 font-serif">Route Details</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-medium">Duration:</span>
                    <span className="text-gray-600">3-4 days</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-medium">Difficulty:</span>
                    <span className="text-gray-600">Moderate to Challenging</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-medium">Summit Height:</span>
                    <span className="text-gray-600">4,566 meters</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-medium">Best Time:</span>
                    <span className="text-gray-600">June-March</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-medium">Success Rate:</span>
                    <span className="text-gray-600">85-90%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-[#55331e] mb-4 font-serif">What's Included</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#f88f2f] rounded-full"></span>
                    <span>Professional mountain guides</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#f88f2f] rounded-full"></span>
                    <span>Mountain hut accommodation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#f88f2f] rounded-full"></span>
                    <span>All meals during the climb</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#f88f2f] rounded-full"></span>
                    <span>Park fees and permits</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#f88f2f] rounded-full"></span>
                    <span>Safety equipment</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#f88f2f] rounded-full"></span>
                    <span>Certificate of achievement</span>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">Ready to Conquer Mount Meru?</h2>
          <p className="text-lg mb-8 opacity-90">
            Experience Tanzania's hidden giant and enjoy spectacular views of Kilimanjaro from the summit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BookNowButton tourName="Mount Meru Climb" size="lg" className="bg-[#f88f2f] hover:bg-[#e67e1a] text-white px-8">Book Your Climb</BookNowButton>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#55331e] px-8 bg-transparent"
            >
              <Link href="/contact">Get Climbing Guide</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
