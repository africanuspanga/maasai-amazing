import { notFound } from "next/navigation"
import { ItineraryEditorForm } from "@/components/admin/itinerary-editor-form"
import { getPublicImageSuggestions } from "@/lib/cms/media"
import { getAdminItineraryBySlug } from "@/lib/cms/service"

export default async function EditItineraryPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ saved?: string }>
}) {
  const [{ slug }, query, imageSuggestions] = await Promise.all([
    params,
    searchParams,
    getPublicImageSuggestions(),
  ])

  const itinerary = await getAdminItineraryBySlug(slug)

  if (!itinerary) {
    notFound()
  }

  return (
    <ItineraryEditorForm
      mode="edit"
      defaults={itinerary}
      imageSuggestions={imageSuggestions}
      saved={query.saved === "1"}
    />
  )
}
