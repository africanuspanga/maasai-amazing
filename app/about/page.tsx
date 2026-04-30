import type { Metadata } from "next"
import AboutPageClient from "@/components/about-page-client"

export const metadata: Metadata = {
  title: "About Maasai Amazing Safaris | Tanzania's Premier Safari Company",
  description:
    "Learn about Maasai Amazing Safaris - a local Tanzanian company with 5+ years of experience crafting authentic safaris, Kilimanjaro climbs, and cultural adventures with expert Maasai guides.",
  alternates: {
    canonical: "https://maasaiamazingsafaris.com/about",
  },
  openGraph: {
    title: "About Maasai Amazing Safaris | Tanzania's Premier Safari Company",
    description:
      "Learn about Maasai Amazing Safaris - a local Tanzanian company with 5+ years of experience crafting authentic safaris, Kilimanjaro climbs, and cultural adventures.",
    url: "https://maasaiamazingsafaris.com/about",
  },
}

export default function AboutPage() {
  return <AboutPageClient />
}
