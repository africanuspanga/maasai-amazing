"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Testimonials } from "@/components/testimonials"
import { Partners } from "@/components/partners"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Star, Shield, Users, Award, Clock, Calendar } from "lucide-react"
import { BookNowButton } from "@/components/book-now-button"
import { useLanguage } from "@/components/language-provider"

export default function HomePage() {
  const { t } = useLanguage()

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
            {t("home.heroTitle")}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            {t("home.heroSubtitle")}
          </p>
          <div className="flex justify-center">
            <Button asChild size="lg" className="bg-[#f88f2f] hover:bg-[#e67e1e] text-white text-xl px-12 py-4">
              <Link href="/contact">{t("home.heroCta")}</Link>
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
                {t("home.aboutGatewayTitle")}
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {t("home.aboutGatewayText")}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 md:gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-[#f88f2f] mb-2">3+</div>
                  <div className="text-xs md:text-sm text-gray-500">{t("home.yearsExperience")}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-[#f88f2f] mb-2">100+</div>
                  <div className="text-xs md:text-sm text-gray-500">{t("home.happyTravelers")}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-[#f88f2f] mb-2">15+</div>
                  <div className="text-xs md:text-sm text-gray-500">{t("home.destinations")}</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-gray-500">{t("home.ratedByTravelers")}</span>
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
              {t("home.whyChooseTitle")}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t("home.whyChooseSubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-[#f88f2f] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-200 will-change-transform">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#55331e] mb-3">{t("home.safetyFirst")}</h3>
              <p className="text-gray-600 text-sm md:text-base">
                {t("home.safetyFirstDesc")}
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-[#f88f2f] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-200 will-change-transform">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#55331e] mb-3">{t("home.localExpertise")}</h3>
              <p className="text-gray-600 text-sm md:text-base">
                {t("home.localExpertiseDesc")}
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-[#f88f2f] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-200 will-change-transform">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#55331e] mb-3">{t("home.awardWinning")}</h3>
              <p className="text-gray-600 text-sm md:text-base">
                {t("home.awardWinningDesc")}
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-[#f88f2f] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-200 will-change-transform">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#55331e] mb-3">{t("home.support247")}</h3>
              <p className="text-gray-600 text-sm md:text-base">
                {t("home.support247Desc")}
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
              {t("home.topDestTitle")}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t("home.topDestSubtitle")}
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
                  <h3 className="text-xl font-bold mb-1">{t("home.serengetiTitle")}</h3>
                  <p className="text-sm opacity-90">{t("home.serengetiSubtitle")}</p>
                </div>
              </div>
              <CardContent className="p-4 md:p-6">
                <p className="text-gray-600 mb-4 text-sm md:text-base">
                  {t("home.serengetiDesc")}
                </p>
                <Button asChild className="w-full bg-[#f88f2f] hover:bg-[#e67e1e]">
                  <Link href="/northern-circuit">{t("home.exploreSerengeti")}</Link>
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
                  <h3 className="text-xl font-bold mb-1">{t("home.zanzibarDestTitle")}</h3>
                  <p className="text-sm opacity-90">{t("home.zanzibarDestSubtitle")}</p>
                </div>
              </div>
              <CardContent className="p-4 md:p-6">
                <p className="text-gray-600 mb-4 text-sm md:text-base">
                  {t("home.zanzibarDestDesc")}
                </p>
                <Button asChild className="w-full bg-[#f88f2f] hover:bg-[#e67e1e]">
                  <Link href="/zanzibar">{t("home.discoverZanzibar")}</Link>
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
                  <h3 className="text-xl font-bold mb-1">{t("home.kilimanjaroDestTitle")}</h3>
                  <p className="text-sm opacity-90">{t("home.kilimanjaroDestSubtitle")}</p>
                </div>
              </div>
              <CardContent className="p-4 md:p-6">
                <p className="text-gray-600 mb-4 text-sm md:text-base">
                  {t("home.kilimanjaroDestDesc")}
                </p>
                <Button asChild className="w-full bg-[#f88f2f] hover:bg-[#e67e1e]">
                  <Link href="/kilimanjaro">{t("home.climbKilimanjaro")}</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Northern Circuit Itineraries */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#d97706] mb-6">
              {t("home.northernCircuitTitle")}
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              {t("home.northernCircuitSubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* 7-Day Natural Wonders */}
            <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/northern-circuit-flamingos.jpg"
                  alt="Northern Circuit Safari"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-1">7-Day Natural Wonders</h3>
                  <p className="text-sm opacity-90">Serengeti & Ngorongoro</p>
                </div>
                <div className="absolute top-4 right-4 bg-[#d97706] text-white px-3 py-1 rounded-full text-sm font-semibold">
                  $2,714
                </div>
              </div>
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center gap-2 mb-3 text-sm text-gray-600">
                  <Calendar className="w-4 h-4 text-[#d97706]" />
                  <span>7 Days / 6 Nights</span>
                </div>
                <p className="text-gray-600 mb-4 text-sm">
                  Experience two of Africa's Seven Natural Wonders with the Great Migration and Ngorongoro Crater descent.
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <Button asChild variant="outline" size="sm" className="border-[#d97706] text-[#d97706] hover:bg-[#d97706] hover:text-white">
                    <Link href="/itineraries/northern-7-days">{t("home.viewDetails")}</Link>
                  </Button>
                  <BookNowButton tourName="7-Day Natural Wonders Safari" size="sm" className="bg-[#d97706] hover:bg-[#b45309] text-white" />
                </div>
              </CardContent>
            </Card>

            {/* 8-Day Elephant Kingdom */}
            <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/northern-circuit-elephant.jpg"
                  alt="Elephant Kingdom Safari"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-1">8-Day Elephant Kingdom</h3>
                  <p className="text-sm opacity-90">Our Bestseller</p>
                </div>
                <div className="absolute top-4 right-4 bg-[#d97706] text-white px-3 py-1 rounded-full text-sm font-semibold">
                  $3,284
                </div>
              </div>
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center gap-2 mb-3 text-sm text-gray-600">
                  <Calendar className="w-4 h-4 text-[#d97706]" />
                  <span>8 Days / 7 Nights</span>
                </div>
                <p className="text-gray-600 mb-4 text-sm">
                  Our most popular safari featuring Tarangire's giant elephant herds and three days in the Serengeti.
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <Button asChild variant="outline" size="sm" className="border-[#d97706] text-[#d97706] hover:bg-[#d97706] hover:text-white">
                    <Link href="/itineraries/northern-8-days">{t("home.viewDetails")}</Link>
                  </Button>
                  <BookNowButton tourName="8-Day Elephant Kingdom Safari" size="sm" className="bg-[#d97706] hover:bg-[#b45309] text-white" />
                </div>
              </CardContent>
            </Card>

            {/* Kilimanjaro Machame */}
            <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/kilimanjaro-sunrise.jpg"
                  alt="Kilimanjaro Climb"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-1">Kilimanjaro Machame</h3>
                  <p className="text-sm opacity-90">{"Africa's Highest Peak"}</p>
                </div>
                <div className="absolute top-4 right-4 bg-[#d97706] text-white px-3 py-1 rounded-full text-sm font-semibold">
                  $2,589
                </div>
              </div>
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center gap-2 mb-3 text-sm text-gray-600">
                  <Calendar className="w-4 h-4 text-[#d97706]" />
                  <span>7 Days / 6 Nights</span>
                </div>
                <p className="text-gray-600 mb-4 text-sm">
                  The Whiskey Route offers stunning scenery and the best acclimatization for summiting Uhuru Peak.
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <Button asChild variant="outline" size="sm" className="border-[#d97706] text-[#d97706] hover:bg-[#d97706] hover:text-white">
                    <Link href="/itineraries/kilimanjaro-machame">{t("home.viewDetails")}</Link>
                  </Button>
                  <BookNowButton tourName="Kilimanjaro Machame Route" size="sm" className="bg-[#d97706] hover:bg-[#b45309] text-white" />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button asChild size="lg" variant="outline" className="border-[#d97706] text-[#d97706] hover:bg-[#d97706] hover:text-white">
              <Link href="/itineraries">{t("home.viewAllNorthern")}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Zanzibar Packages */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-cyan-50 via-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#0891b2] mb-6">
              {t("home.zanzibarBeachTitle")}
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              {t("home.zanzibarBeachSubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Zanzibar Short Escape */}
            <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/tropical-beach.jpg"
                  alt="Zanzibar Beach"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-1">4-Day Short Escape</h3>
                  <p className="text-sm opacity-90">Perfect Quick Getaway</p>
                </div>
                <div className="absolute top-4 right-4 bg-[#0891b2] text-white px-3 py-1 rounded-full text-sm font-semibold">
                  $765
                </div>
              </div>
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center gap-2 mb-3 text-sm text-gray-600">
                  <Calendar className="w-4 h-4 text-[#0891b2]" />
                  <span>4 Days / 3 Nights</span>
                </div>
                <p className="text-gray-600 mb-4 text-sm">
                  Stone Town, Prison Island tortoises, and dolphin swimming at Mnemba. All-inclusive with transfers.
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <Button asChild variant="outline" size="sm" className="border-[#0891b2] text-[#0891b2] hover:bg-[#0891b2] hover:text-white">
                    <Link href="/itineraries/zanzibar-4-days">{t("home.viewDetails")}</Link>
                  </Button>
                  <BookNowButton tourName="4-Day Zanzibar Short Escape" size="sm" className="bg-[#0891b2] hover:bg-[#0e7490] text-white" />
                </div>
              </CardContent>
            </Card>

            {/* Zanzibar Classic */}
            <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/dhow-sunset.png"
                  alt="Zanzibar Classic"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-1">6-Day Zanzibar Classic</h3>
                  <p className="text-sm opacity-90">Complete Experience</p>
                </div>
                <div className="absolute top-4 right-4 bg-[#0891b2] text-white px-3 py-1 rounded-full text-sm font-semibold">
                  $1,130
                </div>
              </div>
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center gap-2 mb-3 text-sm text-gray-600">
                  <Calendar className="w-4 h-4 text-[#0891b2]" />
                  <span>6 Days / 5 Nights</span>
                </div>
                <p className="text-gray-600 mb-4 text-sm">
                  The full Zanzibar experience with spice tours, beach time, snorkeling, and cultural immersion.
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <Button asChild variant="outline" size="sm" className="border-[#0891b2] text-[#0891b2] hover:bg-[#0891b2] hover:text-white">
                    <Link href="/itineraries/zanzibar-6-days">{t("home.viewDetails")}</Link>
                  </Button>
                  <BookNowButton tourName="6-Day Zanzibar Classic" size="sm" className="bg-[#0891b2] hover:bg-[#0e7490] text-white" />
                </div>
              </CardContent>
            </Card>

            {/* Zanzibar Luxury */}
            <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/beach-umbrellas.jpg"
                  alt="Luxury Zanzibar"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-1">8-Day Luxury Paradise</h3>
                  <p className="text-sm opacity-90">Ultimate Relaxation</p>
                </div>
                <div className="absolute top-4 right-4 bg-[#0891b2] text-white px-3 py-1 rounded-full text-sm font-semibold">
                  $1,570
                </div>
              </div>
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center gap-2 mb-3 text-sm text-gray-600">
                  <Calendar className="w-4 h-4 text-[#0891b2]" />
                  <span>8 Days / 7 Nights</span>
                </div>
                <p className="text-gray-600 mb-4 text-sm">
                  Indulge in luxury beachfront resorts, private excursions, and gourmet dining on the Spice Island.
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <Button asChild variant="outline" size="sm" className="border-[#0891b2] text-[#0891b2] hover:bg-[#0891b2] hover:text-white">
                    <Link href="/itineraries/zanzibar-8-days">{t("home.viewDetails")}</Link>
                  </Button>
                  <BookNowButton tourName="8-Day Luxury Zanzibar Paradise" size="sm" className="bg-[#0891b2] hover:bg-[#0e7490] text-white" />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button asChild size="lg" variant="outline" className="border-[#0891b2] text-[#0891b2] hover:bg-[#0891b2] hover:text-white">
              <Link href="/itineraries">{t("home.viewAllZanzibar")}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Southern Circuit Safaris */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#55331e] mb-6">
              {t("home.southernCircuitTitle")}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t("home.southernCircuitSubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Luxury Southern Circuit */}
            <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/safari-vehicle.jpg"
                  alt="Southern Circuit Safari"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-1">9-Day Luxury Expedition</h3>
                  <p className="text-sm opacity-90">Ultimate Southern Circuit</p>
                </div>
                <div className="absolute top-4 right-4 bg-[#f88f2f] text-white px-3 py-1 rounded-full text-sm font-semibold">
                  $2,426
                </div>
              </div>
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center gap-2 mb-3 text-sm text-gray-600">
                  <Calendar className="w-4 h-4 text-[#f88f2f]" />
                  <span>9 Days / 8 Nights</span>
                </div>
                <p className="text-gray-600 mb-4 text-sm">
                  Luxury lodges in Nyerere, Mikumi, Udzungwa, and Ruaha with boat safaris and waterfall treks.
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <Button asChild variant="outline" size="sm" className="border-[#f88f2f] text-[#f88f2f] hover:bg-[#f88f2f] hover:text-white">
                    <Link href="/itineraries/luxury-southern-circuit">{t("home.viewDetails")}</Link>
                  </Button>
                  <BookNowButton tourName="9-Day Luxury Southern Circuit Expedition" size="sm" className="bg-[#f88f2f] hover:bg-[#e67e1e] text-white" />
                </div>
              </CardContent>
            </Card>

            {/* Grand Southern Adventure */}
            <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/giraffe-baobab.jpg"
                  alt="Grand Southern Adventure"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-1">9-Day Grand Adventure</h3>
                  <p className="text-sm opacity-90">{"Cultural & Wildlife"}</p>
                </div>
                <div className="absolute top-4 right-4 bg-[#f88f2f] text-white px-3 py-1 rounded-full text-sm font-semibold">
                  $1,800
                </div>
              </div>
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center gap-2 mb-3 text-sm text-gray-600">
                  <Calendar className="w-4 h-4 text-[#f88f2f]" />
                  <span>9 Days</span>
                </div>
                <p className="text-gray-600 mb-4 text-sm">
                  Comprehensive journey through Southern Tanzania with Maasai cultural visits and mountain trekking.
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <Button asChild variant="outline" size="sm" className="border-[#f88f2f] text-[#f88f2f] hover:bg-[#f88f2f] hover:text-white">
                    <Link href="/itineraries/grand-southern-adventure">{t("home.viewDetails")}</Link>
                  </Button>
                  <BookNowButton tourName="9-Day Grand Southern Adventure" size="sm" className="bg-[#f88f2f] hover:bg-[#e67e1e] text-white" />
                </div>
              </CardContent>
            </Card>

            {/* Bush to Beach */}
            <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/zanzibar-aerial.jpg"
                  alt="Bush to Beach"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-1">6-Day Bush to Beach</h3>
                  <p className="text-sm opacity-90">{"Safari & Zanzibar"}</p>
                </div>
                <div className="absolute top-4 right-4 bg-[#f88f2f] text-white px-3 py-1 rounded-full text-sm font-semibold">
                  $1,947
                </div>
              </div>
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center gap-2 mb-3 text-sm text-gray-600">
                  <Calendar className="w-4 h-4 text-[#f88f2f]" />
                  <span>6 Days</span>
                </div>
                <p className="text-gray-600 mb-4 text-sm">
                  Perfect combo of Nyerere wildlife tracking and Zanzibar beach relaxation with Stone Town tours.
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <Button asChild variant="outline" size="sm" className="border-[#f88f2f] text-[#f88f2f] hover:bg-[#f88f2f] hover:text-white">
                    <Link href="/itineraries/bush-to-beach">{t("home.viewDetails")}</Link>
                  </Button>
                  <BookNowButton tourName="6-Day Bush to Beach Adventure" size="sm" className="bg-[#f88f2f] hover:bg-[#e67e1e] text-white" />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button asChild size="lg" variant="outline" className="border-[#f88f2f] text-[#f88f2f] hover:bg-[#f88f2f] hover:text-white">
              <Link href="/itineraries">{t("home.viewAllSouthern")}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Partners / Recommended By */}
      <Partners />

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-[#55331e] text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
            {t("home.ctaTitle")}
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            {t("home.ctaSubtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#f88f2f] hover:bg-[#e67e1e] text-white text-lg px-8 py-3">
              <Link href="/contact">{t("home.startPlanning")}</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#55331e] text-lg px-8 py-3 bg-transparent"
            >
              <Link href="https://wa.me/255784258765" target="_blank">
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
