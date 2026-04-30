import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navigation from "@/components/navigation"
import WhatsAppFloat from "@/components/whatsapp-float"
import { BookNowButton } from "@/components/book-now-button"
import Link from "next/link"

export default function OldonyoLengaiPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <WhatsAppFloat />

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-gradient-to-r from-[#210c00]/90 to-[#f88518]/90">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
          <h1 className="text-4xl md:text-7xl font-bold mb-6 font-serif">Oldonyo Lengai</h1>
          <p className="text-xl md:text-3xl mb-8 font-sans">The Mountain of God</p>
          <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Rising 2,962 meters above the Rift Valley floor, Oldonyo Lengai is Tanzania's only active volcano and holds
            deep spiritual significance for the Maasai people. Known as "The Mountain of God," this unique volcano
            produces the world's coolest lava and offers one of the most challenging and rewarding climbs in East
            Africa.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <div className="h-64 rounded-lg overflow-hidden">
                <img
                  src="/images/oldonyo-lengai-crater.jpeg"
                  alt="Interior view of Oldonyo Lengai volcanic crater showing active volcanic formations"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="h-64 rounded-lg overflow-hidden">
                <img
                  src="/images/oldonyo-lengai-distant.webp"
                  alt="Oldonyo Lengai mountain rising from the Rift Valley with traditional Maasai huts in foreground"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#210c00] mb-6 font-serif">
                Active Volcano Experience
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Oldonyo Lengai is the world's only volcano that erupts natrocarbonatite lava - a unique type of lava
                that is much cooler than typical volcanic lava and turns white when exposed to moisture. This creates an
                otherworldly landscape that changes constantly due to ongoing volcanic activity.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                The climb is typically done at night to avoid the extreme daytime heat and to reach the summit for
                sunrise. The challenging ascent rewards climbers with spectacular views of the Rift Valley, Lake Natron,
                and on clear days, Mount Kilimanjaro.
              </p>
              <Button size="lg" className="bg-[#f88518] hover:bg-[#c24503] text-white">
                <Link href="/contact">Plan Your Volcano Climb</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 bg-[#faf6f1]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#210c00] mb-4 font-serif">
              Unique Volcanic Experience
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover what makes Oldonyo Lengai one of the world's most unique volcanic climbing experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold text-[#210c00] mb-3 font-serif">Active Volcano</h3>
                <p className="text-gray-600">
                  Experience climbing an active volcano with ongoing geological activity and unique lava formations.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold text-[#210c00] mb-3 font-serif">Sacred to Maasai</h3>
                <p className="text-gray-600">
                  Learn about the deep spiritual significance of this mountain to the Maasai people and their
                  traditions.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold text-[#210c00] mb-3 font-serif">Unique Lava</h3>
                <p className="text-gray-600">
                  Witness natrocarbonatite lava - the world's coolest lava that turns white when exposed to moisture.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold text-[#210c00] mb-3 font-serif">Night Climb</h3>
                <p className="text-gray-600">
                  Challenge yourself with a demanding night climb to witness spectacular sunrise from the summit.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Climbing Information */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#210c00] mb-4 font-serif">Climbing Information</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Essential details for your Oldonyo Lengai climbing adventure.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-[#210c00] mb-4 font-serif">Climb Details</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-medium">Duration:</span>
                    <span className="text-gray-600">1-2 days</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-medium">Difficulty:</span>
                    <span className="text-gray-600">Very Challenging</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-medium">Summit Height:</span>
                    <span className="text-gray-600">2,962 meters</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-medium">Climb Time:</span>
                    <span className="text-gray-600">Night climb (6-8 hours)</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-medium">Best Time:</span>
                    <span className="text-gray-600">June-September, December-March</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-[#210c00] mb-4 font-serif">Important Notes</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#f88518] rounded-full mt-2"></span>
                    <span>Extremely challenging climb requiring good fitness</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#f88518] rounded-full mt-2"></span>
                    <span>Night climb to avoid extreme daytime heat</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#f88518] rounded-full mt-2"></span>
                    <span>Volcanic activity may affect climbing conditions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#f88518] rounded-full mt-2"></span>
                    <span>Spectacular sunrise views from the summit</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#f88518] rounded-full mt-2"></span>
                    <span>Cultural significance to local Maasai communities</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#210c00] text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">Ready for the Ultimate Volcanic Challenge?</h2>
          <p className="text-lg mb-8 opacity-90">
            Conquer Tanzania's active volcano and witness one of nature's most spectacular geological phenomena.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BookNowButton tourName="Ol Doinyo Lengai Volcano Climb" size="lg" className="bg-[#f88518] hover:bg-[#c24503] text-white px-8">Book Volcano Climb</BookNowButton>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#210c00] px-8 bg-transparent"
            >
              <Link href="/contact">Check Conditions</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
