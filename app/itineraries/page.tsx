import { ItinerariesPageContent } from "@/components/itineraries-page-content"
import { getItinerariesIndexContent, getPublishedItineraries } from "@/lib/cms/service"

export const dynamic = "force-dynamic"
export const revalidate = 0

export const metadata = {
  title: "Tanzania Safari Itineraries | Maasai Amazing Safaris",
  description:
    "Explore our carefully crafted Tanzania safari itineraries. From luxury safaris to bush-to-beach adventures, find the perfect journey through Tanzania's wonders.",
}

export default async function ItinerariesPage() {
  const [itineraries, content] = await Promise.all([
    getPublishedItineraries(),
    getItinerariesIndexContent(),
  ])

  return <ItinerariesPageContent itineraries={itineraries} content={content} />
}
