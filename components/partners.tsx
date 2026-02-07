"use client"

import Image from "next/image"
import { useLanguage } from "@/components/language-provider"

const partners = [
  {
    name: "TripAdvisor",
    logo: "/images/partners/tripadvisor-logo.webp",
    width: 180,
    height: 60,
  },
  {
    name: "Trustpilot",
    logo: "/images/partners/trustpilot-logo.png",
    width: 160,
    height: 60,
  },
  {
    name: "Google Reviews",
    logo: "/images/partners/google-reviews-logo.png",
    width: 180,
    height: 60,
  },
  {
    name: "Safariogo",
    logo: "/images/partners/safariogo-logo.png",
    width: 160,
    height: 60,
  },
  {
    name: "Tanzania Tourist Board",
    logo: "/images/partners/tanzania-tourist-board.jpg",
    width: 140,
    height: 60,
  },
  {
    name: "APTA",
    logo: "/images/partners/apta-logo.jpg",
    width: 140,
    height: 60,
  },
  {
    name: "Get Your Guide",
    logo: "/images/partners/getyourguide-logo.png",
    width: 140,
    height: 60,
  },
]

export function Partners() {
  const { t } = useLanguage()
  return (
    <section className="py-12 md:py-16 bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-[#55331e] mb-3">
            {t("partners.title")}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t("partners.subtitle")}
          </p>
        </div>

        {/* Scrolling logos container */}
        <div className="relative overflow-hidden py-4">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-white to-transparent z-10" />

          {/* Scrolling animation */}
          <div className="flex animate-scroll" style={{ width: "max-content" }}>
            {/* First set */}
            <div className="flex items-center gap-16 md:gap-20 lg:gap-28 px-8 md:px-12">
              {partners.map((partner, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 hover:scale-110 transition-transform duration-300"
                >
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    width={partner.width}
                    height={partner.height}
                    className="h-10 md:h-12 lg:h-14 w-auto object-contain"
                  />
                </div>
              ))}
            </div>

            {/* Second set (duplicate for seamless loop) */}
            <div className="flex items-center gap-16 md:gap-20 lg:gap-28 px-8 md:px-12">
              {partners.map((partner, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 hover:scale-110 transition-transform duration-300"
                >
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    width={partner.width}
                    height={partner.height}
                    className="h-10 md:h-12 lg:h-14 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-10 md:mt-12 flex flex-wrap justify-center gap-6 md:gap-8">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-[#f88f2f] mb-1">100+</div>
            <div className="text-sm text-gray-600">{t("partners.starReviews")}</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-[#f88f2f] mb-1">98%</div>
            <div className="text-sm text-gray-600">{t("partners.satisfactionRate")}</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-[#f88f2f] mb-1">3+</div>
            <div className="text-sm text-gray-600">{t("home.yearsExperience")}</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-[#f88f2f] mb-1">15+</div>
            <div className="text-sm text-gray-600">{t("home.destinations")}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
