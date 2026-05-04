import { updateInquiryStatusAction } from "@/app/admin/actions"
import { getAdminInquiries } from "@/lib/cms/service"

export default async function AdminInquiriesPage() {
  const inquiries = await getAdminInquiries()

  return (
    <div className="space-y-8">
      <section className="rounded-[2rem] border border-[#eadcc8] bg-white p-6 shadow-sm">
        <h1 className="text-3xl font-serif font-bold text-[#210c00]">Booking Inquiries</h1>
        <p className="mt-2 max-w-3xl text-gray-600">
          Every booking request from the modal is captured here in addition to being sent via WhatsApp. This gives the
          owner a follow-up queue even if someone never finishes the chat conversation.
        </p>
      </section>

      <div className="grid gap-6">
        {inquiries.length === 0 ? (
          <div className="rounded-[2rem] border border-dashed border-[#d9c3a8] bg-white p-8 text-center text-gray-600">
            No inquiries yet.
          </div>
        ) : null}

        {inquiries.map((item) => (
          <article key={item.id} className="rounded-[2rem] border border-[#eadcc8] bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div className="space-y-2">
                <h2 className="text-2xl font-serif font-bold text-[#210c00]">{item.full_name}</h2>
                <p className="text-sm text-gray-600">
                  {item.tour_name || "Custom trip inquiry"} • {item.email} • {item.phone}
                </p>
                <p className="text-sm text-gray-600">
                  Created: {item.created_at ? new Date(item.created_at).toLocaleString() : "Unknown"}
                </p>
              </div>

              <form action={updateInquiryStatusAction} className="flex items-center gap-3">
                <input type="hidden" name="id" value={item.id} />
                <select
                  name="status"
                  defaultValue={item.status}
                  className="rounded-full border border-[#d9c3a8] px-4 py-2 text-sm"
                >
                  <option value="new">New</option>
                  <option value="contacted">Contacted</option>
                  <option value="closed">Closed</option>
                </select>
                <button
                  type="submit"
                  className="rounded-full bg-[#210c00] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#c24503]"
                >
                  Update
                </button>
              </form>
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-[#f7f1ea] p-4 text-sm text-gray-700">
                <p><strong>Nationality:</strong> {item.nationality || "Not provided"}</p>
                <p><strong>Preferred Date:</strong> {item.preferred_travel_date || "Not provided"}</p>
                <p><strong>Accommodation:</strong> {item.accommodation || "Not provided"}</p>
                <p><strong>Adults:</strong> {item.adults ?? "Not provided"}</p>
                <p><strong>Children:</strong> {item.children ?? "Not provided"}</p>
                <p><strong>Source Page:</strong> {item.source_page || "Unknown"}</p>
              </div>

              <div className="rounded-2xl bg-[#f7f1ea] p-4 text-sm text-gray-700">
                <p className="font-semibold text-[#210c00]">Special Requests</p>
                <p className="mt-2 whitespace-pre-wrap">{item.special_requests || "None provided"}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
