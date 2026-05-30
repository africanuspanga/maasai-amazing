import { CmsItineraryPage, generateItineraryMetadata } from "@/components/cms-itinerary-page"

export const dynamic = "force-dynamic"
export const revalidate = 0

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  return generateItineraryMetadata(slug)
}

export default async function DynamicItineraryPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  return <CmsItineraryPage slug={slug} />
}
