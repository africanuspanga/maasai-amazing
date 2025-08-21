import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Shield, Users, Heart, Globe, Camera, Mountain } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/beach-umbrellas.jpg"
            alt="Beautiful beach umbrellas in crystal clear water"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-black mb-6 leading-tight">
            About Saitoti Tours & Safaris
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Your trusted partner for authentic Tanzania adventures since 2021
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#55331e] mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Established in 2021, Saitoti Tours & Safaris was born from a passion for sharing Tanzania's incredible
                natural beauty and rich cultural heritage with the world. Though our company is young, our team brings
                more than a decade of experience in safaris and tours across Tanzania's most spectacular locations.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We believe that travel should be transformative, connecting you not just with breathtaking landscapes
                and wildlife, but with the heart and soul of Tanzania. Every journey we craft is designed to create
                lasting memories while supporting local communities and conservation efforts.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#f88f2f] mb-2">10+</div>
                  <div className="text-sm text-gray-500">Years Team Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#f88f2f] mb-2">2021</div>
                  <div className="text-sm text-gray-500">Company Established</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/safari-bird.jpg"
                  alt="Safari bird on vehicle with safari cars in background"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#55331e] mb-6">
              Why Choose Us?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the difference with our commitment to excellence, local expertise, and personalized service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-[#f88f2f] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#55331e] mb-3">Safety First</h3>
              <p className="text-gray-600">
                Your safety is our top priority with experienced guides and well-maintained equipment
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-[#f88f2f] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#55331e] mb-3">Local Expertise</h3>
              <p className="text-gray-600">
                Born and raised in Tanzania, we know the hidden gems and best wildlife spots
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-[#f88f2f] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#55331e] mb-3">Passionate Service</h3>
              <p className="text-gray-600">
                We're passionate about sharing Tanzania's beauty and creating unforgettable experiences
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-[#f88f2f] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#55331e] mb-3">Sustainable Tourism</h3>
              <p className="text-gray-600">
                Committed to responsible tourism that benefits local communities and wildlife conservation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/giraffe-serengeti.jpg"
                  alt="Giraffe in Serengeti National Park Tanzania"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#55331e] mb-6">
                Our Expertise
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With over a decade of combined experience, our team specializes in creating authentic Tanzania
                experiences. From the vast plains of the Serengeti to the pristine beaches of Zanzibar, from the
                challenging slopes of Kilimanjaro to the hidden gems of the Southern Circuit, we know Tanzania like no
                other.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <Camera className="w-6 h-6 text-[#f88f2f]" />
                  <span className="text-gray-700">Wildlife Photography</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mountain className="w-6 h-6 text-[#f88f2f]" />
                  <span className="text-gray-700">Mountain Trekking</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-[#f88f2f]" />
                  <span className="text-gray-700">Cultural Tours</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="w-6 h-6 text-[#f88f2f]" />
                  <span className="text-gray-700">Beach Holidays</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#55331e] text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">Ready to Explore Tanzania?</h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Let our experienced team create the perfect Tanzania adventure for you
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
