"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { getCmsIcon } from "@/lib/cms/icons"
import type { AboutContent } from "@/lib/cms/schema"
import { useSiteSettings } from "@/components/site-settings-provider"

export default function AboutPageClient({ content }: { content: AboutContent }) {
  const settings = useSiteSettings()

  return (
    <div className="min-h-screen">
      <Navigation />

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
            {content.heroTitle}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            {content.heroSubtitle}
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#210c00] tracking-tight mb-6">
                {content.storyTitle}
              </h2>
              {content.storyParagraphs.map((paragraph) => (
                <p key={paragraph} className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {paragraph}
                </p>
              ))}

              <div className="grid grid-cols-2 gap-6">
                {content.storyStats.map((item) => (
                  <div key={`${item.value}-${item.label}`} className="text-center">
                    <div className="text-3xl font-bold text-[#f88518] mb-2">{item.value}</div>
                    <div className="text-sm text-gray-500">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-[2rem] overflow-hidden">
                <Image src={content.storyImage} alt={content.storyTitle} fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#faf6f1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#210c00] tracking-tight mb-6">
              {content.whyTitle}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{content.whySubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.whyItems.map((item) => {
              const Icon = getCmsIcon(item.icon)
              return (
                <div key={item.title} className="text-center group">
                  <div className="w-16 h-16 bg-[#f88518] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#210c00] mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[4/3] rounded-[2rem] overflow-hidden">
                <Image src={content.expertiseImage} alt={content.expertiseTitle} fill className="object-cover" />
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#210c00] tracking-tight mb-6">
                {content.expertiseTitle}
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">{content.expertiseBody}</p>

              <div className="grid grid-cols-2 gap-6">
                {content.expertiseItems.map((item) => {
                  const Icon = getCmsIcon(item.icon)
                  return (
                    <div key={item.label} className="flex items-center space-x-3">
                      <Icon className="w-6 h-6 text-[#f88518]" />
                      <span className="text-gray-700">{item.label}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#210c00] via-[#3d1800] to-[#c24503] text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">{content.ctaTitle}</h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">{content.ctaSubtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#f88518] hover:bg-[#c24503] text-white text-lg px-8 py-3">
              <Link href={content.ctaPrimaryHref}>{content.ctaPrimaryLabel}</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#210c00] text-lg px-8 py-3 bg-transparent"
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
