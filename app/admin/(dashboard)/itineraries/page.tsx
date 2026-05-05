import { AdminItineraryCatalog } from "@/components/admin/admin-itinerary-catalog"
import { getAdminItineraries } from "@/lib/cms/service"

export default async function AdminItinerariesPage({
  searchParams,
}: {
  searchParams: Promise<{ saved?: string; deleted?: string }>
}) {
  const params = await searchParams

  let itineraries: Awaited<ReturnType<typeof getAdminItineraries>> = []
  let loadError: string | null = null

  try {
    itineraries = await getAdminItineraries()
  } catch (error) {
    loadError = error instanceof Error ? error.message : "We couldn't load your existing packages from Supabase."
  }

  return (
    <AdminItineraryCatalog
      itineraries={itineraries}
      loadError={loadError}
      saved={params.saved === "1"}
      deleted={params.deleted === "1"}
    />
  )
}
