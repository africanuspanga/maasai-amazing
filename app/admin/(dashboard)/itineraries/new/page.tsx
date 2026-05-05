import { ItineraryEditorForm } from "@/components/admin/itinerary-editor-form"
import { getPublicImageSuggestions } from "@/lib/cms/media"
import { createEmptyAdminItinerary } from "@/lib/cms/service"

export default async function NewItineraryPage() {
  const [imageSuggestions, defaults] = await Promise.all([
    getPublicImageSuggestions(),
    Promise.resolve(createEmptyAdminItinerary()),
  ])

  return <ItineraryEditorForm mode="create" defaults={defaults} imageSuggestions={imageSuggestions} />
}
