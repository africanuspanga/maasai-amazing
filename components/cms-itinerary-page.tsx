import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, CheckCircle2, MapPin, MessageCircle, Users, XCircle } from "lucide-react"
import { BookNowButton } from "@/components/book-now-button"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { getGlobalSettings, getPublishedItineraryBySlug } from "@/lib/cms/service"

const themeStyles = {
  northern: {
    heroOverlay: "bg-gradient-to-b from-[#210c00]/80 via-[#c24503]/55 to-[#210c00]/80",
    sectionBg: "bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50",
    accentText: "text-[#c24503]",
    accentBorder: "border-[#c24503]",
    accentBg: "bg-[#c24503]",
    accentSoft: "bg-[#fff6ed]",
    secondaryBg: "bg-white",
    secondaryText: "text-gray-700",
    ctaBg: "bg-[#210c00]",
    primaryButton: "bg-[#c24503] hover:bg-[#a33d02] text-white",
    outlineButton: "border-[#c24503] text-[#c24503] hover:bg-[#c24503] hover:text-white",
  },
  southern: {
    heroOverlay: "bg-gradient-to-b from-[#0f0600]/80 via-[#210c00]/65 to-[#0f0600]/85",
    sectionBg: "bg-gradient-to-br from-[#fff8f2] via-[#fff3e7] to-[#fff8f2]",
    accentText: "text-[#f88518]",
    accentBorder: "border-[#f88518]",
    accentBg: "bg-[#f88518]",
    accentSoft: "bg-[#fff2e3]",
    secondaryBg: "bg-white",
    secondaryText: "text-gray-700",
    ctaBg: "bg-[#210c00]",
    primaryButton: "bg-[#f88518] hover:bg-[#c24503] text-white",
    outlineButton: "border-[#f88518] text-[#f88518] hover:bg-[#f88518] hover:text-white",
  },
  zanzibar: {
    heroOverlay: "bg-gradient-to-b from-[#0f2f3a]/75 via-[#0e7490]/55 to-[#0f2f3a]/80",
    sectionBg: "bg-gradient-to-br from-cyan-50 via-blue-50 to-teal-50",
    accentText: "text-[#0f766e]",
    accentBorder: "border-[#0f766e]",
    accentBg: "bg-[#0f766e]",
    accentSoft: "bg-[#eefcf9]",
    secondaryBg: "bg-white",
    secondaryText: "text-gray-700",
    ctaBg: "bg-[#083344]",
    primaryButton: "bg-[#0f766e] hover:bg-[#115e59] text-white",
    outlineButton: "border-[#0f766e] text-[#0f766e] hover:bg-[#0f766e] hover:text-white",
  },
  mountain: {
    heroOverlay: "bg-gradient-to-b from-slate-900/80 via-slate-700/60 to-slate-950/85",
    sectionBg: "bg-gradient-to-br from-slate-50 via-stone-50 to-orange-50",
    accentText: "text-[#b45309]",
    accentBorder: "border-[#b45309]",
    accentBg: "bg-[#b45309]",
    accentSoft: "bg-[#fff7ed]",
    secondaryBg: "bg-white",
    secondaryText: "text-gray-700",
    ctaBg: "bg-slate-900",
    primaryButton: "bg-[#b45309] hover:bg-[#92400e] text-white",
    outlineButton: "border-[#b45309] text-[#b45309] hover:bg-[#b45309] hover:text-white",
  },
} as const

function InfoBadge({
  label,
  value,
}: {
  label: string
  value: string
}) {
  return (
    <div className="rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur">
      <span className="block text-[0.65rem] uppercase tracking-[0.24em] text-white/70">{label}</span>
      <span className="block text-sm font-semibold text-white">{value}</span>
    </div>
  )
}

export async function generateItineraryMetadata(slug: string): Promise<Metadata> {
  const itinerary = await getPublishedItineraryBySlug(slug)

  if (!itinerary) {
    return {
      title: "Tour Not Found | Maasai Amazing Safaris",
    }
  }

  return {
    title: itinerary.details.seoTitle ?? `${itinerary.title} | Maasai Amazing Safaris`,
    description: itinerary.details.seoDescription ?? itinerary.description,
  }
}

export async function CmsItineraryPage({ slug }: { slug: string }) {
  const [itinerary, settings] = await Promise.all([
    getPublishedItineraryBySlug(slug),
    getGlobalSettings(),
  ])

  if (!itinerary) {
    notFound()
  }

  const theme = themeStyles[itinerary.details.pageTheme]
  const heroFacts = itinerary.details.heroFacts.filter((item) => item.label && item.value)
  const overviewParagraphs = itinerary.details.overviewParagraphs.filter(Boolean)
  const highlights = itinerary.details.highlights.filter(Boolean)
  const itineraryDays = itinerary.details.itineraryDays.filter((item) => item.title || item.description)
  const included = itinerary.details.included.filter(Boolean)
  const excluded = itinerary.details.excluded.filter(Boolean)
  const quickFacts = itinerary.details.quickFacts.filter((item) => item.label && item.value)

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="relative flex min-h-[65vh] items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={itinerary.details.heroImage || itinerary.image || "/placeholder.jpg"}
            alt={itinerary.details.heroAlt || itinerary.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className={`absolute inset-0 ${theme.heroOverlay}`} />
        </div>

        <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.2fr,0.8fr] lg:px-8">
          <div className="text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-white/80">{itinerary.details.heroEyebrow}</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-serif font-black leading-tight md:text-5xl lg:text-6xl">
              {itinerary.details.heroTitle}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/88 md:text-xl">
              {itinerary.details.heroSubtitle}
            </p>

            {heroFacts.length ? (
              <div className="mt-8 flex flex-wrap gap-3">
                {heroFacts.map((item) => (
                  <InfoBadge key={`${item.label}-${item.value}`} label={item.label} value={item.value} />
                ))}
              </div>
            ) : null}
          </div>

          <Card className="self-end border-white/15 bg-white/10 text-white shadow-2xl backdrop-blur-sm">
            <CardContent className="p-6">
              <p className="text-xs uppercase tracking-[0.25em] text-white/65">{itinerary.details.pricingTitle}</p>
              <p className="mt-3 text-sm text-white/70">{itinerary.details.startingPriceLabel}</p>
              <p className="mt-1 text-4xl font-black">{itinerary.details.startingPrice || itinerary.priceFrom}</p>
              {itinerary.details.pricingNote ? (
                <p className="mt-4 text-sm leading-relaxed text-white/80">{itinerary.details.pricingNote}</p>
              ) : null}

              <div className="mt-6 grid gap-3">
                <BookNowButton tourName={itinerary.bookTourName ?? itinerary.title} className={`w-full ${theme.primaryButton}`}>
                  {itinerary.details.primaryCtaLabel}
                </BookNowButton>
                <Button asChild variant="outline" className={`w-full bg-white/5 ${theme.outlineButton}`}>
                  <Link href={`https://wa.me/${settings.whatsappNumber}`} target="_blank">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    {itinerary.details.secondaryCtaLabel}
                  </Link>
                </Button>
              </div>

              {quickFacts.length ? (
                <div className="mt-6 border-t border-white/15 pt-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">Quick Facts</p>
                  <div className="mt-4 space-y-3">
                    {quickFacts.map((fact) => (
                      <div key={`${fact.label}-${fact.value}`} className="flex items-start justify-between gap-4 text-sm">
                        <span className="text-white/70">{fact.label}</span>
                        <span className="text-right font-semibold text-white">{fact.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </CardContent>
          </Card>
        </div>
      </section>

      <div className={`border-b ${theme.accentBorder} ${theme.sectionBg}`}>
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
          <Button asChild variant="ghost" className={`${theme.accentText} hover:bg-white/70`}>
            <Link href="/itineraries">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Itineraries
            </Link>
          </Button>
        </div>
      </div>

      <section className={`py-14 md:py-20 ${theme.sectionBg}`}>
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.15fr,0.85fr] lg:px-8">
          <div className="space-y-8">
            <div className={`rounded-[2rem] border ${theme.accentBorder} ${theme.secondaryBg} p-6 shadow-sm`}>
              <h2 className={`text-3xl font-serif font-bold ${theme.accentText}`}>{itinerary.details.overviewTitle}</h2>
              <div className="mt-5 space-y-4 text-base leading-8 text-gray-700">
                {overviewParagraphs.map((paragraph, index) => (
                  <p key={`overview-${index}`}>{paragraph}</p>
                ))}
              </div>
            </div>

            {highlights.length ? (
              <div className={`rounded-[2rem] border ${theme.accentBorder} ${theme.secondaryBg} p-6 shadow-sm`}>
                <h2 className={`text-3xl font-serif font-bold ${theme.accentText}`}>{itinerary.details.highlightsTitle}</h2>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {highlights.map((highlight, index) => (
                    <div key={`highlight-${index}`} className={`rounded-2xl ${theme.accentSoft} px-4 py-4`}>
                      <p className="flex items-start gap-3 text-sm font-medium text-[#210c00]">
                        <CheckCircle2 className={`mt-0.5 h-5 w-5 shrink-0 ${theme.accentText}`} />
                        <span>{highlight}</span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            {itineraryDays.length ? (
              <div className={`rounded-[2rem] border ${theme.accentBorder} ${theme.secondaryBg} p-6 shadow-sm`}>
                <h2 className={`text-3xl font-serif font-bold ${theme.accentText}`}>{itinerary.details.itineraryTitle}</h2>
                <div className="mt-6 space-y-4">
                  {itineraryDays.map((day, index) => (
                    <Card key={`${day.title}-${index}`} className={`border-l-4 ${theme.accentBorder} shadow-sm`}>
                      <CardContent className="p-6">
                        <p className={`text-sm font-semibold uppercase tracking-[0.22em] ${theme.accentText}`}>Stop {index + 1}</p>
                        <h3 className="mt-2 text-xl font-bold text-[#210c00]">{day.title}</h3>
                        <p className="mt-3 leading-7 text-gray-700">{day.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ) : null}

            {itinerary.details.extraSectionTitle || itinerary.details.extraSectionBody ? (
              <div className={`rounded-[2rem] border ${theme.accentBorder} ${theme.secondaryBg} p-6 shadow-sm`}>
                {itinerary.details.extraSectionTitle ? (
                  <h2 className={`text-3xl font-serif font-bold ${theme.accentText}`}>{itinerary.details.extraSectionTitle}</h2>
                ) : null}
                {itinerary.details.extraSectionBody ? (
                  <p className="mt-5 whitespace-pre-line leading-8 text-gray-700">{itinerary.details.extraSectionBody}</p>
                ) : null}
              </div>
            ) : null}
          </div>

          <div className="space-y-8">
            <div className={`rounded-[2rem] border ${theme.accentBorder} ${theme.secondaryBg} p-6 shadow-sm`}>
              <h3 className={`text-2xl font-serif font-bold ${theme.accentText}`}>{itinerary.details.includedTitle}</h3>
              <div className="mt-5 space-y-3">
                {included.map((item, index) => (
                  <div key={`included-${index}`} className="flex items-start gap-3 text-sm leading-7 text-gray-700">
                    <CheckCircle2 className={`mt-1 h-5 w-5 shrink-0 ${theme.accentText}`} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={`rounded-[2rem] border ${theme.accentBorder} ${theme.secondaryBg} p-6 shadow-sm`}>
              <h3 className={`text-2xl font-serif font-bold ${theme.accentText}`}>{itinerary.details.excludedTitle}</h3>
              <div className="mt-5 space-y-3">
                {excluded.map((item, index) => (
                  <div key={`excluded-${index}`} className="flex items-start gap-3 text-sm leading-7 text-gray-700">
                    <XCircle className={`mt-1 h-5 w-5 shrink-0 ${theme.accentText}`} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={`rounded-[2rem] ${theme.ctaBg} p-6 text-white shadow-xl`}>
              <p className="text-xs uppercase tracking-[0.3em] text-white/65">Need help tailoring this trip?</p>
              <h3 className="mt-3 text-2xl font-serif font-bold">We can adjust dates, pace, and accommodation level.</h3>
              <div className="mt-5 space-y-3 text-sm text-white/80">
                <div className="flex items-start gap-3">
                  <Calendar className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>{itinerary.duration}</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>{itinerary.destinations}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>{itinerary.groupSize}</span>
                </div>
              </div>
              <div className="mt-6 grid gap-3">
                <BookNowButton tourName={itinerary.bookTourName ?? itinerary.title} className={`w-full ${theme.primaryButton}`}>
                  {itinerary.details.primaryCtaLabel}
                </BookNowButton>
                <Button asChild variant="outline" className="w-full border-white/25 bg-white/5 text-white hover:bg-white hover:text-[#210c00]">
                  <Link href={`https://wa.me/${settings.whatsappNumber}`} target="_blank">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    {itinerary.details.secondaryCtaLabel}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
