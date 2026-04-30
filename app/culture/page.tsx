import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import WhatsAppFloat from "@/components/whatsapp-float"
import { BookNowButton } from "@/components/book-now-button"
import Link from "next/link"

export default function CulturePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <WhatsAppFloat />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center bg-gradient-to-r from-[#210c00]/90 to-[#f88518]/90">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif">Cultural Experiences</h1>
          <p className="text-xl md:text-2xl mb-8 font-sans">Meet Tanzania's Living Heritage</p>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Immerse yourself in the vibrant cultures that make Tanzania truly special. Meet communities that have
            preserved their traditions for centuries and discover the authentic heart of East Africa.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#210c00] mb-6 font-serif">
            Authentic Cultural Encounters
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Tanzania is home to over 120 distinct ethnic groups, each with unique traditions, languages, and ways of
            life. Our cultural experiences offer respectful, authentic encounters that benefit local communities while
            providing you with profound insights into Africa's rich cultural tapestry.
          </p>
        </div>
      </section>

      {/* Maasai Bomas Section */}
      <section className="py-20 px-4 bg-[#faf6f1]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#210c00] mb-4 font-serif">Maasai Bomas</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the legendary warrior culture of the Maasai people in traditional village settings.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-[#210c00] mb-4 font-serif">Traditional Maasai Villages</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Visit authentic Maasai bomas (villages) where you'll be welcomed by warriors and elders who maintain
                their ancestral way of life. Learn about their deep connection to cattle, their sophisticated social
                structure, and their harmonious relationship with wildlife.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#f88518] rounded-full"></span>
                  <span>Traditional warrior culture and customs</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#f88518] rounded-full"></span>
                  <span>Authentic cultural exchange</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#f88518] rounded-full"></span>
                  <span>Traditional dances and ceremonies</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#f88518] rounded-full"></span>
                  <span>Handcraft demonstrations and shopping</span>
                </li>
              </ul>
              <Button size="lg" className="bg-[#f88518] hover:bg-[#c24503] text-white">
                <Link href="/contact">Visit Maasai Bomas</Link>
              </Button>
            </div>
            <div className="space-y-4">
              <div className="h-64 rounded-lg overflow-hidden">
                <img
                  src="/images/maasai-village-aerial.png"
                  alt="Aerial view of traditional Maasai boma village with circular houses"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-64 rounded-lg overflow-hidden">
                <img
                  src="/images/maasai-village-ground.png"
                  alt="Traditional Maasai village with mud houses and person in red clothing"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hadzabe Tribes Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#210c00] mb-4 font-serif">Hadzabe Tribes</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet one of the world's last hunter-gatherer societies and experience humanity's oldest way of life.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <div className="h-64 rounded-lg overflow-hidden">
                <img
                  src="/images/hadzabe-hunters.png"
                  alt="Three Hadzabe hunters sitting on rocks with traditional bows and arrows"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-64 rounded-lg overflow-hidden">
                <img
                  src="/images/hadzabe-elder.png"
                  alt="Portrait of elderly Hadzabe man in traditional clothing"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#210c00] mb-4 font-serif">Ancient Bushmen Traditions</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                The Hadzabe people around Lake Eyasi represent one of humanity's oldest continuous cultures. With fewer
                than 1,000 members remaining, they maintain traditional hunting and gathering practices that have
                sustained them for thousands of years.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#f88518] rounded-full"></span>
                  <span>Ancient bushmen traditions</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#f88518] rounded-full"></span>
                  <span>Unique clicking language</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#f88518] rounded-full"></span>
                  <span>Primitive survival skills demonstration</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#f88518] rounded-full"></span>
                  <span>Traditional hunting and gathering</span>
                </li>
              </ul>
              <Button size="lg" className="bg-[#f88518] hover:bg-[#c24503] text-white">
                <Link href="/contact">Meet the Hadzabe</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Experiences Grid */}
      <section className="py-20 px-4 bg-[#faf6f1]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#210c00] mb-4 font-serif">What You'll Experience</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our cultural encounters are designed to be respectful, educational, and mutually beneficial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold text-[#210c00] mb-3 font-serif">Traditional Ceremonies</h3>
                <p className="text-gray-600">
                  Witness authentic ceremonies and rituals that have been passed down through generations, gaining
                  insight into spiritual beliefs and community bonds.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold text-[#210c00] mb-3 font-serif">Traditional Skills</h3>
                <p className="text-gray-600">
                  Learn traditional skills like fire-making, hunting techniques, beadwork, and other crafts that
                  represent centuries of accumulated knowledge.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold text-[#210c00] mb-3 font-serif">Community Support</h3>
                <p className="text-gray-600">
                  Your visit directly supports these communities through fair compensation and sustainable tourism
                  practices that preserve their way of life.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#210c00] text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">Ready for Authentic Cultural Encounters?</h2>
          <p className="text-lg mb-8 opacity-90">
            Join us for respectful, meaningful cultural exchanges that enrich both visitors and communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BookNowButton tourName="Cultural Experience" size="lg" className="bg-[#f88518] hover:bg-[#c24503] text-white px-8">Book Cultural Experience</BookNowButton>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#210c00] px-8 bg-transparent"
            >
              <Link href="/contact">Learn More</Link>
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
