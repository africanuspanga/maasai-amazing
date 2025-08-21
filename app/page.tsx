import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Star, Shield, Users, Award, Clock } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/herd-elephants.jpg"
            alt="Herd of elephants in African savanna at sunset"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-black mb-6 leading-tight">
            Discover the Soul of Tanzania
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Authentic safaris, epic treks, and cultural adventures in East Africa's crown jewel
          </p>
          <div className="flex justify-center">
            <Button asChild size="lg" className="bg-[#f88f2f] hover:bg-[#e67e1e] text-white text-xl px-12 py-4">
              <Link href="/contact">Discover Tanzania</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#55331e] mb-6">
                Your Gateway to Tanzania's Wonders
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With years of experience, unwavering passion, and deep local knowledge, Saitoti Tours and Safaris crafts
                extraordinary journeys through one of the world's most spectacular destinations. From the endless plains
                of the Serengeti to the snow-capped peaks of Kilimanjaro, we bring you closer to the heart of Tanzania.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 md:gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-[#f88f2f] mb-2">3+</div>
                  <div className="text-xs md:text-sm text-gray-500">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-[#f88f2f] mb-2">500+</div>
                  <div className="text-xs md:text-sm text-gray-500">Happy Travelers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-[#f88f2f] mb-2">15+</div>
                  <div className="text-xs md:text-sm text-gray-500">Destinations</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-gray-500">Rated 5.0 by our travelers</span>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/images/gazelle.jpg"
                  alt="Gazelle in African savanna at sunset"
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#55331e] mb-6">
              Why Choose Saitoti Tours & Safaris?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the difference with our commitment to excellence, local expertise, and personalized service
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-[#f88f2f] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-200 will-change-transform">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#55331e] mb-3">Safety First</h3>
              <p className="text-gray-600 text-sm md:text-base">
                Your safety is our top priority with experienced guides and well-maintained equipment
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-[#f88f2f] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-200 will-change-transform">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#55331e] mb-3">Local Expertise</h3>
              <p className="text-gray-600 text-sm md:text-base">
                Born and raised in Tanzania, we know the hidden gems and best wildlife spots
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-[#f88f2f] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-200 will-change-transform">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#55331e] mb-3">Award Winning</h3>
              <p className="text-gray-600 text-sm md:text-base">
                Recognized for excellence in service and sustainable tourism practices
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-[#f88f2f] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-200 will-change-transform">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#55331e] mb-3">24/7 Support</h3>
              <p className="text-gray-600 text-sm md:text-base">
                Round-the-clock assistance to ensure your adventure goes smoothly
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Top Destinations */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#55331e] mb-6">
              Top Travel Destinations
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore Tanzania's most iconic destinations, each offering unique wildlife encounters and breathtaking
              landscapes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Serengeti */}
            <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/wildebeest-migration.png"
                  alt="Wildebeest migration in Serengeti National Park"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300 will-change-transform"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-1">Serengeti National Park</h3>
                  <p className="text-sm opacity-90">Witness the Great Migration</p>
                </div>
              </div>
              <CardContent className="p-4 md:p-6">
                <p className="text-gray-600 mb-4 text-sm md:text-base">
                  Experience the world's most spectacular wildlife migration in Tanzania's most famous park.
                </p>
                <Button asChild className="w-full bg-[#f88f2f] hover:bg-[#e67e1e]">
                  <Link href="/northern-circuit">Explore Serengeti</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Zanzibar */}
            <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/tropical-beach.jpg"
                  alt="Beautiful tropical beach in Zanzibar"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300 will-change-transform"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-1">Zanzibar</h3>
                  <p className="text-sm opacity-90">Tropical paradise awaits</p>
                </div>
              </div>
              <CardContent className="p-4 md:p-6">
                <p className="text-gray-600 mb-4 text-sm md:text-base">
                  Pristine beaches, rich culture, and spice tours on the enchanting Spice Island.
                </p>
                <Button asChild className="w-full bg-[#f88f2f] hover:bg-[#e67e1e]">
                  <Link href="/zanzibar">Discover Zanzibar</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Kilimanjaro */}
            <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-200 md:col-span-2 lg:col-span-1">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/giraffe-wild.jpg"
                  alt="Giraffes in Tanzania with Mount Kilimanjaro in background"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300 will-change-transform"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-1">Mount Kilimanjaro</h3>
                  <p className="text-sm opacity-90">Conquer Africa's highest peak</p>
                </div>
              </div>
              <CardContent className="p-4 md:p-6">
                <p className="text-gray-600 mb-4 text-sm md:text-base">
                  Challenge yourself with an unforgettable trek to the Roof of Africa.
                </p>
                <Button asChild className="w-full bg-[#f88f2f] hover:bg-[#e67e1e]">
                  <Link href="/kilimanjaro">Climb Kilimanjaro</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-[#55331e] text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
            Ready for Your African Adventure?
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Let us craft the perfect Tanzania experience tailored just for you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#f88f2f] hover:bg-[#e67e1e] text-white text-lg px-8 py-3">
              <Link href="/contact">Start Planning</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#55331e] text-lg px-8 py-3 bg-transparent"
            >
              <Link href="https://wa.me/255784258765" target="_blank">
                WhatsApp Us
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
