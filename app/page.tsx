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
import { Star, Shield, Users, Award, Clock, Calendar, ChevronDown, MapPin } from "lucide-react"
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
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            poster="/images/herd-elephants.jpg"
          >
            <source src="/new%20maasai%20hero%20video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60" />
        </div>

        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-[#f88518] animate-pulse" />
            Tanzania's Premier Maasai Safari Experience
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-black mb-6 leading-[0.95] tracking-tight">
            {t("home.heroTitle")}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-10 max-w-2xl mx-auto leading-relaxed text-white/90 font-light">
            {t("home.heroSubtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#f88518] hover:bg-[#c24503] text-white text-lg px-10 py-6 rounded-full">
              <Link href="/contact">{t("home.heroCta")}</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 text-white hover:bg-white/10 text-lg px-10 py-6 rounded-full bg-white/5 backdrop-blur-sm"
            >
              <Link href="/itineraries">Explore Tours</Link>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/60" />
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#210c00] py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-6 md:gap-12">
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-serif font-black text-[#f88518] mb-2">5+</div>
              <div className="text-sm md:text-base text-white/70 uppercase tracking-widest">{t("home.yearsExperience")}</div>
            </div>
            <div className="text-center border-x border-white/10">
              <div className="text-4xl md:text-6xl font-serif font-black text-[#f88518] mb-2">100+</div>
              <div className="text-sm md:text-base text-white/70 uppercase tracking-widest">{t("home.happyTravelers")}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-serif font-black text-[#f88518] mb-2">15+</div>
              <div className="text-sm md:text-base text-white/70 uppercase tracking-widest">{t("home.destinations")}</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 md:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#f88518]/10 rounded-full blur-2xl" />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#c24503]/10 rounded-full blur-2xl" />
                <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                  <Image
                    src="/images/gazelle.jpg"
                    alt="Gazelle in African savanna at sunset"
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 bg-white rounded-2xl shadow-2xl p-5 md:p-6 z-10 border border-gray-100">
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm font-bold text-[#210c00]">{t("home.ratedByTravelers")}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2">
              <span className="text-[#c24503] font-semibold text-sm uppercase tracking-widest mb-4 block">About Us</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#210c00] tracking-tight mb-8 leading-[1.1]">
                {t("home.aboutGatewayTitle")}
              </h2>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-xl">
                {t("home.aboutGatewayText")}
              </p>
              <Button asChild className="bg-[#f88518] hover:bg-[#c24503] text-white rounded-full px-8 py-6 text-base">
                <Link href="/about">Learn Our Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-28 bg-[#faf6f1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-20">
            <span className="text-[#c24503] font-semibold text-sm uppercase tracking-widest mb-4 block">Why Travel With Us</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#210c00] tracking-tight mb-6">
              {t("home.whyChooseTitle")}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t("home.whyChooseSubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: Shield, title: t("home.safetyFirst"), desc: t("home.safetyFirstDesc") },
              { icon: Users, title: t("home.localExpertise"), desc: t("home.localExpertiseDesc") },
              { icon: Award, title: t("home.awardWinning"), desc: t("home.awardWinningDesc") },
              { icon: Clock, title: t("home.support247"), desc: t("home.support247Desc") },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group relative bg-white/60 backdrop-blur-sm rounded-3xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-white/50"
              >
                <div className="w-14 h-14 bg-[#f88518] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#210c00] mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Destinations */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-20">
            <span className="text-[#c24503] font-semibold text-sm uppercase tracking-widest mb-4 block">Destinations</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#210c00] tracking-tight mb-6">
              {t("home.topDestTitle")}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t("home.topDestSubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Serengeti */}
            <Card className="group overflow-hidden border-0 shadow-none hover:shadow-2xl transition-all duration-500 rounded-3xl md:row-span-2">
              <div className="relative h-full min-h-[400px] md:min-h-full overflow-hidden">
                <Image
                  src="/images/wildebeest-migration.png"
                  alt="Wildebeest migration in Serengeti National Park"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2">{t("home.serengetiTitle")}</h3>
                  <p className="text-white/80 mb-4">{t("home.serengetiDesc")}</p>
                  <Button asChild className="bg-white text-[#210c00] hover:bg-[#f88518] hover:text-white rounded-full px-6">
                    <Link href="/northern-circuit">{t("home.exploreSerengeti")}</Link>
                  </Button>
                </div>
              </div>
            </Card>

            {/* Zanzibar */}
            <Card className="group overflow-hidden border-0 shadow-none hover:shadow-2xl transition-all duration-500 rounded-3xl">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/tropical-beach.jpg"
                  alt="Beautiful tropical beach in Zanzibar"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-serif font-bold text-white mb-1">{t("home.zanzibarDestTitle")}</h3>
                  <p className="text-white/80 text-sm mb-3">{t("home.zanzibarDestDesc")}</p>
                  <Button asChild variant="outline" size="sm" className="border-white text-white hover:bg-white hover:text-[#210c00] rounded-full">
                    <Link href="/zanzibar">{t("home.discoverZanzibar")}</Link>
                  </Button>
                </div>
              </div>
            </Card>

            {/* Kilimanjaro */}
            <Card className="group overflow-hidden border-0 shadow-none hover:shadow-2xl transition-all duration-500 rounded-3xl">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/giraffe-wild.jpg"
                  alt="Giraffes in Tanzania with Mount Kilimanjaro in background"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-serif font-bold text-white mb-1">{t("home.kilimanjaroDestTitle")}</h3>
                  <p className="text-white/80 text-sm mb-3">{t("home.kilimanjaroDestDesc")}</p>
                  <Button asChild variant="outline" size="sm" className="border-white text-white hover:bg-white hover:text-[#210c00] rounded-full">
                    <Link href="/kilimanjaro">{t("home.climbKilimanjaro")}</Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Northern Circuit Itineraries */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#fff7ed] via-[#fef3c7] to-[#fff7ed]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-20">
            <span className="text-[#c24503] font-semibold text-sm uppercase tracking-widest mb-4 block">Safari Packages</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#210c00] tracking-tight mb-6">
              {t("home.northernCircuitTitle")}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t("home.northernCircuitSubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { title: "7-Day Natural Wonders", sub: "Serengeti & Ngorongoro", price: "$2,714", days: "7 Days / 6 Nights", img: "/images/northern-circuit-flamingos.jpg", link: "/itineraries/northern-7-days", tour: "7-Day Natural Wonders Safari" },
              { title: "8-Day Elephant Kingdom", sub: "Our Bestseller", price: "$3,284", days: "8 Days / 7 Nights", img: "/images/northern-circuit-elephant.jpg", link: "/itineraries/northern-8-days", tour: "8-Day Elephant Kingdom Safari" },
              { title: "Kilimanjaro Machame", sub: "Africa's Highest Peak", price: "$2,589", days: "7 Days / 6 Nights", img: "/images/kilimanjaro-sunrise.jpg", link: "/itineraries/kilimanjaro-machame", tour: "Kilimanjaro Machame Route" },
            ].map((item, idx) => (
              <Card key={idx} className="group overflow-hidden border-0 shadow-sm hover:shadow-2xl transition-all duration-500 rounded-3xl bg-white">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                    <p className="text-sm opacity-90">{item.sub}</p>
                  </div>
                  <div className="absolute top-4 right-4 bg-[#c24503] text-white px-4 py-1.5 rounded-full text-sm font-bold">
                    {item.price}
                  </div>
                </div>
                <CardContent className="p-5 md:p-6">
                  <div className="flex items-center gap-2 mb-3 text-sm text-gray-500">
                    <Calendar className="w-4 h-4 text-[#c24503]" />
                    <span>{item.days}</span>
                  </div>
                  <div className="flex gap-2">
                    <Button asChild variant="outline" size="sm" className="flex-1 border-[#c24503] text-[#c24503] hover:bg-[#c24503] hover:text-white rounded-full">
                      <Link href={item.link}>{t("home.viewDetails")}</Link>
                    </Button>
                    <BookNowButton tourName={item.tour} size="sm" className="flex-1 bg-[#c24503] hover:bg-[#a33d02] text-white rounded-full" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild size="lg" variant="outline" className="border-[#c24503] text-[#c24503] hover:bg-[#c24503] hover:text-white rounded-full px-10">
              <Link href="/itineraries">{t("home.viewAllNorthern")}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Zanzibar Packages */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-20">
            <span className="text-[#c24503] font-semibold text-sm uppercase tracking-widest mb-4 block">Beach Escapes</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#210c00] tracking-tight mb-6">
              {t("home.zanzibarBeachTitle")}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t("home.zanzibarBeachSubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { title: "4-Day Short Escape", sub: "Perfect Quick Getaway", price: "$765", days: "4 Days / 3 Nights", img: "/images/tropical-beach.jpg", link: "/itineraries/zanzibar-4-days", tour: "4-Day Zanzibar Short Escape" },
              { title: "6-Day Zanzibar Classic", sub: "Complete Experience", price: "$1,130", days: "6 Days / 5 Nights", img: "/images/dhow-sunset.png", link: "/itineraries/zanzibar-6-days", tour: "6-Day Zanzibar Classic" },
              { title: "8-Day Luxury Paradise", sub: "Ultimate Relaxation", price: "$1,570", days: "8 Days / 7 Nights", img: "/images/beach-umbrellas.jpg", link: "/itineraries/zanzibar-8-days", tour: "8-Day Luxury Zanzibar Paradise" },
            ].map((item, idx) => (
              <Card key={idx} className="group overflow-hidden border-0 shadow-sm hover:shadow-2xl transition-all duration-500 rounded-3xl bg-[#faf6f1]">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                    <p className="text-sm opacity-90">{item.sub}</p>
                  </div>
                  <div className="absolute top-4 right-4 bg-[#f88518] text-white px-4 py-1.5 rounded-full text-sm font-bold">
                    {item.price}
                  </div>
                </div>
                <CardContent className="p-5 md:p-6">
                  <div className="flex items-center gap-2 mb-3 text-sm text-gray-500">
                    <Calendar className="w-4 h-4 text-[#f88518]" />
                    <span>{item.days}</span>
                  </div>
                  <div className="flex gap-2">
                    <Button asChild variant="outline" size="sm" className="flex-1 border-[#f88518] text-[#f88518] hover:bg-[#f88518] hover:text-white rounded-full">
                      <Link href={item.link}>{t("home.viewDetails")}</Link>
                    </Button>
                    <BookNowButton tourName={item.tour} size="sm" className="flex-1 bg-[#f88518] hover:bg-[#c24503] text-white rounded-full" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild size="lg" variant="outline" className="border-[#f88518] text-[#f88518] hover:bg-[#f88518] hover:text-white rounded-full px-10">
              <Link href="/itineraries">{t("home.viewAllZanzibar")}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Southern Circuit Safaris */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#210c00] to-[#3d1800] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-20">
            <span className="text-[#f88518] font-semibold text-sm uppercase tracking-widest mb-4 block">Adventure</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight mb-6">
              {t("home.southernCircuitTitle")}
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              {t("home.southernCircuitSubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { title: "9-Day Luxury Expedition", sub: "Ultimate Southern Circuit", price: "$2,426", days: "9 Days / 8 Nights", img: "/images/safari-vehicle.jpg", link: "/itineraries/luxury-southern-circuit", tour: "9-Day Luxury Southern Circuit Expedition" },
              { title: "9-Day Grand Adventure", sub: "Cultural & Wildlife", price: "$1,800", days: "9 Days", img: "/images/giraffe-baobab.jpg", link: "/itineraries/grand-southern-adventure", tour: "9-Day Grand Southern Adventure" },
              { title: "6-Day Bush to Beach", sub: "Safari & Zanzibar", price: "$1,947", days: "6 Days", img: "/images/zanzibar-aerial.jpg", link: "/itineraries/bush-to-beach", tour: "6-Day Bush to Beach Adventure" },
            ].map((item, idx) => (
              <div key={idx} className="group overflow-hidden rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                    <p className="text-sm opacity-90">{item.sub}</p>
                  </div>
                  <div className="absolute top-4 right-4 bg-[#f88518] text-white px-4 py-1.5 rounded-full text-sm font-bold">
                    {item.price}
                  </div>
                </div>
                <div className="p-5 md:p-6">
                  <div className="flex items-center gap-2 mb-3 text-sm text-white/60">
                    <Calendar className="w-4 h-4 text-[#f88518]" />
                    <span>{item.days}</span>
                  </div>
                  <div className="flex gap-2">
                    <Button asChild variant="outline" size="sm" className="flex-1 bg-white text-[#210c00] hover:bg-[#f88518] hover:text-white rounded-full border-0">
                      <Link href={item.link}>{t("home.viewDetails")}</Link>
                    </Button>
                    <BookNowButton tourName={item.tour} size="sm" className="flex-1 bg-[#f88518] hover:bg-[#c24503] text-white rounded-full" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild size="lg" className="bg-white text-[#210c00] hover:bg-[#f88518] hover:text-white rounded-full px-10">
              <Link href="/itineraries">{t("home.viewAllSouthern")}</Link>
            </Button>
          </div>
        </div>
      </section>

      <Partners />
      <Testimonials />

      {/* CTA Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#210c00] via-[#3d1800] to-[#c24503]" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#f88518] rounded-full blur-[128px]" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#c24503] rounded-full blur-[128px]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold mb-8 text-white tracking-tight">
            {t("home.ctaTitle")}
          </h2>
          <p className="text-lg md:text-xl mb-10 text-white/80 max-w-2xl mx-auto">
            {t("home.ctaSubtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#f88518] hover:bg-[#c24503] text-white text-lg px-10 py-6 rounded-full">
              <Link href="/contact">{t("home.startPlanning")}</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white hover:text-[#210c00] text-lg px-10 py-6 rounded-full bg-white/5 backdrop-blur-sm"
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
