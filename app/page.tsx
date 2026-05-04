import type { Metadata } from "next"
import HomePageClient from "@/components/home-page-client"
import {
  getFeaturedItineraries,
  getHomeContent,
  getPublishedPartners,
  getPublishedTestimonials,
} from "@/lib/cms/service"

export const metadata: Metadata = {
  title: "Maasai Amazing Safaris | Authentic Tanzania Safari & Kilimanjaro Tours",
  description:
    "Discover Tanzania's soul with Maasai Amazing Safaris. Expert-guided wildlife safaris, Kilimanjaro treks, Zanzibar beach holidays & cultural adventures. Book your dream African journey today.",
  alternates: {
    canonical: "https://maasaiamazingsafaris.com",
  },
  openGraph: {
    title: "Maasai Amazing Safaris | Authentic Tanzania Safari & Kilimanjaro Tours",
    description:
      "Discover Tanzania's soul with Maasai Amazing Safaris. Expert-guided wildlife safaris, Kilimanjaro treks, Zanzibar beach holidays & cultural adventures.",
    url: "https://maasaiamazingsafaris.com",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Maasai Amazing Safaris - Discover the Soul of Tanzania",
      },
    ],
  },
}

export default async function HomePage() {
  const [content, partners, testimonials] = await Promise.all([
    getHomeContent(),
    getPublishedPartners(),
    getPublishedTestimonials(),
  ])

  const [northern, zanzibar, southern] = await Promise.all([
    getFeaturedItineraries(content.featuredSections.find((section) => section.key === "northern")?.slugs ?? []),
    getFeaturedItineraries(content.featuredSections.find((section) => section.key === "zanzibar")?.slugs ?? []),
    getFeaturedItineraries(content.featuredSections.find((section) => section.key === "southern")?.slugs ?? []),
  ])

  return (
    <HomePageClient
      content={content}
      featuredBySection={{ northern, zanzibar, southern }}
      partners={partners}
      testimonials={testimonials}
    />
  )
}
