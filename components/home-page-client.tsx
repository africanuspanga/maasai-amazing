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
import { Star, Calendar, ChevronDown } from "lucide-react"
import { BookNowButton } from "@/components/book-now-button"
import { useLanguage } from "@/components/language-provider"
import { useSiteSettings } from "@/components/site-settings-provider"
import { getCmsIcon } from "@/lib/cms/icons"
import type { HomeContent, ItineraryRecord, PartnerRecord, TestimonialRecord } from "@/lib/cms/schema"

type FeaturedSectionKey = "northern" | "zanzibar" | "southern"

const featuredSectionStyles: Record<
  FeaturedSectionKey,
  {
    sectionClassName: string
    eyebrowClassName: string
    titleClassName: string
    subtitleClassName: string
    cardClassName: string
    cardBodyClassName: string
    priceBadgeClassName: string
    iconClassName: string
    primaryButtonClassName: string
    secondaryButtonClassName: string
    sectionButtonClassName: string
    secondaryButtonVariant?: "outline" | "default"
  }
> = {
  northern: {
    sectionClassName: "py-20 md:py-28 bg-gradient-to-br from-[#fff7ed] via-[#fef3c7] to-[#fff7ed]",
    eyebrowClassName: "text-[#c24503]",
    titleClassName: "text-[#210c00]",
    subtitleClassName: "text-gray-600",
    cardClassName: "group overflow-hidden border-0 shadow-sm hover:shadow-2xl transition-all duration-500 rounded-3xl bg-white",
    cardBodyClassName: "p-5 md:p-6",
    priceBadgeClassName: "bg-[#c24503]",
    iconClassName: "text-[#c24503]",
    primaryButtonClassName:
      "flex-1 border-[#c24503] text-[#c24503] hover:bg-[#c24503] hover:text-white rounded-full",
    secondaryButtonClassName: "flex-1 bg-[#c24503] hover:bg-[#a33d02] text-white rounded-full",
    sectionButtonClassName:
      "border-[#c24503] text-[#c24503] hover:bg-[#c24503] hover:text-white rounded-full px-10",
    secondaryButtonVariant: "outline",
  },
  zanzibar: {
    sectionClassName: "py-20 md:py-28 bg-white",
    eyebrowClassName: "text-[#c24503]",
    titleClassName: "text-[#210c00]",
    subtitleClassName: "text-gray-600",
    cardClassName: "group overflow-hidden border-0 shadow-sm hover:shadow-2xl transition-all duration-500 rounded-3xl bg-[#faf6f1]",
    cardBodyClassName: "p-5 md:p-6",
    priceBadgeClassName: "bg-[#f88518]",
    iconClassName: "text-[#f88518]",
    primaryButtonClassName:
      "flex-1 border-[#f88518] text-[#f88518] hover:bg-[#f88518] hover:text-white rounded-full",
    secondaryButtonClassName: "flex-1 bg-[#f88518] hover:bg-[#c24503] text-white rounded-full",
    sectionButtonClassName:
      "border-[#f88518] text-[#f88518] hover:bg-[#f88518] hover:text-white rounded-full px-10",
    secondaryButtonVariant: "outline",
  },
  southern: {
    sectionClassName: "py-20 md:py-28 bg-gradient-to-br from-[#210c00] to-[#3d1800] text-white",
    eyebrowClassName: "text-[#f88518]",
    titleClassName: "text-white",
    subtitleClassName: "text-white/70",
    cardClassName:
      "group overflow-hidden rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500",
    cardBodyClassName: "p-5 md:p-6",
    priceBadgeClassName: "bg-[#f88518]",
    iconClassName: "text-[#f88518]",
    primaryButtonClassName: "flex-1 bg-white text-[#210c00] hover:bg-[#f88518] hover:text-white rounded-full border-0",
    secondaryButtonClassName: "flex-1 bg-[#f88518] hover:bg-[#c24503] text-white rounded-full",
    sectionButtonClassName: "bg-white text-[#210c00] hover:bg-[#f88518] hover:text-white rounded-full px-10",
    secondaryButtonVariant: "default",
  },
}

function FeaturedSection({
  section,
  itineraries,
  buttonLabel,
}: {
  section: HomeContent["featuredSections"][number]
  itineraries: ItineraryRecord[]
  buttonLabel: string
}) {
  const { t } = useLanguage()
  const styles = featuredSectionStyles[section.key]

  return (
    <section className={styles.sectionClassName}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20">
          <span className={`${styles.eyebrowClassName} font-semibold text-sm uppercase tracking-widest mb-4 block`}>
            {section.eyebrow}
          </span>
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight mb-6 ${styles.titleClassName}`}>
            {section.title}
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${styles.subtitleClassName}`}>{section.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {itineraries.map((item) => (
            <Card key={item.slug} className={styles.cardClassName}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-1">{item.shortTitle}</h3>
                  <p className="text-sm opacity-90">{item.featuredSubtitle}</p>
                </div>
                <div className={`absolute top-4 right-4 ${styles.priceBadgeClassName} text-white px-4 py-1.5 rounded-full text-sm font-bold`}>
                  {item.priceFrom}
                </div>
              </div>
              <CardContent className={styles.cardBodyClassName}>
                <div className={`flex items-center gap-2 mb-3 text-sm ${section.key === "southern" ? "text-white/60" : "text-gray-500"}`}>
                  <Calendar className={`w-4 h-4 ${styles.iconClassName}`} />
                  <span>{item.duration}</span>
                </div>
                <div className="flex gap-2">
                  <Button
                    asChild
                    variant={styles.secondaryButtonVariant ?? "outline"}
                    size="sm"
                    className={styles.primaryButtonClassName}
                  >
                    <Link href={`/itineraries/${item.slug}`}>{buttonLabel}</Link>
                  </Button>
                  <BookNowButton
                    tourName={item.bookTourName ?? item.title}
                    size="sm"
                    className={styles.secondaryButtonClassName}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild size="lg" variant={section.key === "southern" ? "default" : "outline"} className={styles.sectionButtonClassName}>
            <Link href={section.ctaHref}>{section.ctaLabel}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default function HomePageClient({
  content,
  featuredBySection,
  partners,
  testimonials,
}: {
  content: HomeContent
  featuredBySection: Record<FeaturedSectionKey, ItineraryRecord[]>
  partners: PartnerRecord[]
  testimonials: TestimonialRecord[]
}) {
  const { t } = useLanguage()
  const settings = useSiteSettings()
  const primaryDestination = content.destinationCards.find((item) => item.isLarge) ?? content.destinationCards[0]
  const secondaryDestinations = content.destinationCards.filter((item) => item.title !== primaryDestination?.title)

  return (
    <div className="min-h-screen">
      <Navigation />

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
            {content.heroBadge}
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-black mb-6 leading-[0.95] tracking-tight">
            {content.heroTitle}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-10 max-w-2xl mx-auto leading-relaxed text-white/90 font-light">
            {content.heroSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#f88518] hover:bg-[#c24503] text-white text-lg px-10 py-6 rounded-full">
              <Link href={content.heroPrimaryCtaHref}>{content.heroPrimaryCtaLabel}</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 text-white hover:bg-white/10 text-lg px-10 py-6 rounded-full bg-white/5 backdrop-blur-sm"
            >
              <Link href={content.heroSecondaryCtaHref}>{content.heroSecondaryCtaLabel}</Link>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/60" />
        </div>
      </section>

      <section className="bg-[#210c00] py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-6 md:gap-12">
            {content.stats.map((item, index) => (
              <div key={`${item.value}-${item.label}`} className={`text-center ${index === 1 ? "border-x border-white/10" : ""}`}>
                <div className="text-4xl md:text-6xl font-serif font-black text-[#f88518] mb-2">{item.value}</div>
                <div className="text-sm md:text-base text-white/70 uppercase tracking-widest">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#f88518]/10 rounded-full blur-2xl" />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#c24503]/10 rounded-full blur-2xl" />
                <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                  <Image
                    src={content.aboutImage}
                    alt={content.aboutTitle}
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
                    <span className="text-sm font-bold text-[#210c00]">{content.ratingLabel}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2">
              <span className="text-[#c24503] font-semibold text-sm uppercase tracking-widest mb-4 block">{content.aboutEyebrow}</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#210c00] tracking-tight mb-8 leading-[1.1]">
                {content.aboutTitle}
              </h2>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-xl">
                {content.aboutBody}
              </p>
              <Button asChild className="bg-[#f88518] hover:bg-[#c24503] text-white rounded-full px-8 py-6 text-base">
                <Link href={content.aboutCtaHref}>{content.aboutCtaLabel}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#faf6f1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-20">
            <span className="text-[#c24503] font-semibold text-sm uppercase tracking-widest mb-4 block">{content.whyEyebrow}</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#210c00] tracking-tight mb-6">
              {content.whyTitle}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{content.whySubtitle}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {content.whyItems.map((item) => {
              const Icon = getCmsIcon(item.icon)
              return (
                <div
                  key={item.title}
                  className="group relative bg-white/60 backdrop-blur-sm rounded-3xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-white/50"
                >
                  <div className="w-14 h-14 bg-[#f88518] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#210c00] mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-20">
            <span className="text-[#c24503] font-semibold text-sm uppercase tracking-widest mb-4 block">{content.destinationsEyebrow}</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#210c00] tracking-tight mb-6">
              {content.destinationsTitle}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{content.destinationsSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {primaryDestination ? (
              <Card className="group overflow-hidden border-0 shadow-none hover:shadow-2xl transition-all duration-500 rounded-3xl md:row-span-2">
                <div className="relative h-full min-h-[400px] md:min-h-full overflow-hidden">
                  <Image
                    src={primaryDestination.image}
                    alt={primaryDestination.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2">{primaryDestination.title}</h3>
                    <p className="text-white/80 mb-4">{primaryDestination.description}</p>
                    <Button asChild className="bg-white text-[#210c00] hover:bg-[#f88518] hover:text-white rounded-full px-6">
                      <Link href={primaryDestination.href}>{primaryDestination.ctaLabel}</Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ) : null}

            {secondaryDestinations.map((item) => (
              <Card key={item.title} className="group overflow-hidden border-0 shadow-none hover:shadow-2xl transition-all duration-500 rounded-3xl">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-serif font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-white/80 text-sm mb-3">{item.description}</p>
                    <Button asChild variant="outline" size="sm" className="border-white text-white hover:bg-white hover:text-[#210c00] rounded-full">
                      <Link href={item.href}>{item.ctaLabel}</Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {content.featuredSections.map((section) => (
        <FeaturedSection
          key={section.key}
          section={section}
          itineraries={featuredBySection[section.key]}
          buttonLabel={t("home.viewDetails")}
        />
      ))}

      <Partners title={content.partnersTitle} subtitle={content.partnersSubtitle} stats={settings.trustStats} partners={partners} />
      <Testimonials
        title={content.testimonialsTitle}
        subtitle={content.testimonialsSubtitle}
        ratingLabel={content.testimonialsRatingLabel}
        happyTravelersLabel={content.testimonialsHappyTravelersLabel}
        testimonials={testimonials}
      />

      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#210c00] via-[#3d1800] to-[#c24503]" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#f88518] rounded-full blur-[128px]" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#c24503] rounded-full blur-[128px]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold mb-8 text-white tracking-tight">
            {content.ctaTitle}
          </h2>
          <p className="text-lg md:text-xl mb-10 text-white/80 max-w-2xl mx-auto">{content.ctaSubtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#f88518] hover:bg-[#c24503] text-white text-lg px-10 py-6 rounded-full">
              <Link href={content.ctaPrimaryHref}>{content.ctaPrimaryLabel}</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white hover:text-[#210c00] text-lg px-10 py-6 rounded-full bg-white/5 backdrop-blur-sm"
            >
              <Link href={`https://wa.me/${settings.whatsappNumber}`} target="_blank">
                {content.ctaSecondaryLabel}
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
