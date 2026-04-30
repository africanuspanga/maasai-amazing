import type { Metadata } from "next"
import HomePageClient from "@/components/home-page-client"

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

export default function HomePage() {
  return <HomePageClient />
}
