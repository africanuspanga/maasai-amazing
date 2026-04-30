"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Shield, Users, Heart, Globe, Camera, Mountain } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export default function AboutPage() {
  const { t } = useLanguage()

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
            {t("about.heroTitle")}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            {t("about.heroSubtitle")}
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#210c00] tracking-tight mb-6">{t("about.ourStory")}</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {t("about.ourStoryP1")}
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {t("about.ourStoryP2")}
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#f88518] mb-2">10+</div>
                  <div className="text-sm text-gray-500">{t("about.teamExperience")}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#f88518] mb-2">5+</div>
                  <div className="text-sm text-gray-500">{t("home.yearsExperience")}</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-[2rem] overflow-hidden">
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
      <section className="py-20 bg-[#faf6f1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#210c00] tracking-tight mb-6">
              {t("about.whyChooseUs")}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t("about.whyChooseUsSubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-[#f88518] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#210c00] mb-3">{t("home.safetyFirst")}</h3>
              <p className="text-gray-600">
                {t("home.safetyFirstDesc")}
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-[#f88518] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#210c00] mb-3">{t("home.localExpertise")}</h3>
              <p className="text-gray-600">
                {t("home.localExpertiseDesc")}
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-[#f88518] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#210c00] mb-3">{t("about.passionateService")}</h3>
              <p className="text-gray-600">
                {t("about.passionateServiceDesc")}
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-[#f88518] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#210c00] mb-3">{t("about.sustainableTourism")}</h3>
              <p className="text-gray-600">
                {t("about.sustainableTourismDesc")}
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
              <div className="aspect-[4/3] rounded-[2rem] overflow-hidden">
                <Image
                  src="/images/giraffe-serengeti.jpg"
                  alt="Giraffe in Serengeti National Park Tanzania"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#210c00] tracking-tight mb-6">
                {t("about.ourExpertise")}
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {t("about.ourExpertiseText")}
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <Camera className="w-6 h-6 text-[#f88518]" />
                  <span className="text-gray-700">{t("about.wildlifePhotography")}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mountain className="w-6 h-6 text-[#f88518]" />
                  <span className="text-gray-700">{t("about.mountainTrekking")}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-[#f88518]" />
                  <span className="text-gray-700">{t("about.culturalTours")}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="w-6 h-6 text-[#f88518]" />
                  <span className="text-gray-700">{t("about.beachHolidays")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#210c00] via-[#3d1800] to-[#c24503] text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">{t("about.ctaTitle")}</h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            {t("about.ctaSubtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#f88518] hover:bg-[#c24503] text-white text-lg px-8 py-3">
              <Link href="/contact">{t("home.startPlanning")}</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#210c00] text-lg px-8 py-3 bg-transparent"
            >
              <Link href="https://wa.me/255760246801" target="_blank">
                {t("home.whatsappUs")}
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
