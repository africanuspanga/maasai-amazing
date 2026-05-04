import { deleteTestimonialAction, saveTestimonialAction } from "@/app/admin/actions"
import { getAdminTestimonials } from "@/lib/cms/service"

function TestimonialForm({
  heading,
  defaults,
}: {
  heading: string
  defaults: {
    id: string
    name: string
    location: string
    country: string
    image: string
    rating: number
    quote: string
    tour: string
    sortOrder: number
    isPublished: boolean
  }
}) {
  return (
    <div className="rounded-[2rem] border border-[#eadcc8] bg-white p-5 shadow-sm">
      <h2 className="text-xl font-serif font-bold text-[#210c00]">{heading}</h2>
      <form action={saveTestimonialAction} className="mt-5 space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-[#210c00]">ID</span>
            <input name="id" defaultValue={defaults.id} className="w-full rounded-2xl border border-[#d9c3a8] px-4 py-3" />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-[#210c00]">Name</span>
            <input name="name" defaultValue={defaults.name} className="w-full rounded-2xl border border-[#d9c3a8] px-4 py-3" />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-[#210c00]">Location</span>
            <input
              name="location"
              defaultValue={defaults.location}
              className="w-full rounded-2xl border border-[#d9c3a8] px-4 py-3"
            />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-[#210c00]">Country</span>
            <input
              name="country"
              defaultValue={defaults.country}
              className="w-full rounded-2xl border border-[#d9c3a8] px-4 py-3"
            />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-[#210c00]">Image Path</span>
            <input name="image" defaultValue={defaults.image} className="w-full rounded-2xl border border-[#d9c3a8] px-4 py-3" />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-[#210c00]">Tour</span>
            <input name="tour" defaultValue={defaults.tour} className="w-full rounded-2xl border border-[#d9c3a8] px-4 py-3" />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-[#210c00]">Rating</span>
            <input
              name="rating"
              type="number"
              min="1"
              max="5"
              defaultValue={String(defaults.rating)}
              className="w-full rounded-2xl border border-[#d9c3a8] px-4 py-3"
            />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-[#210c00]">Sort Order</span>
            <input
              name="sortOrder"
              type="number"
              defaultValue={String(defaults.sortOrder)}
              className="w-full rounded-2xl border border-[#d9c3a8] px-4 py-3"
            />
          </label>
          <label className="flex items-center gap-3 rounded-2xl border border-[#d9c3a8] px-4 py-3">
            <input name="isPublished" type="checkbox" defaultChecked={defaults.isPublished} className="h-4 w-4" />
            <span className="text-sm font-medium text-[#210c00]">Published</span>
          </label>
        </div>
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-[#210c00]">Quote</span>
          <textarea
            name="quote"
            rows={5}
            defaultValue={defaults.quote}
            className="w-full rounded-2xl border border-[#d9c3a8] px-4 py-3"
          />
        </label>
        <button
          type="submit"
          className="rounded-full bg-[#f88518] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#c24503]"
        >
          Save Testimonial
        </button>
      </form>
      {defaults.id ? (
        <form action={deleteTestimonialAction} className="mt-3">
          <input type="hidden" name="id" value={defaults.id} />
          <button
            type="submit"
            className="rounded-full border border-red-200 px-5 py-3 text-sm font-semibold text-red-700 transition hover:bg-red-50"
          >
            Delete
          </button>
        </form>
      ) : null}
    </div>
  )
}

export default async function AdminTestimonialsPage() {
  const testimonials = await getAdminTestimonials()

  return (
    <div className="space-y-8">
      <section className="rounded-[2rem] border border-[#eadcc8] bg-white p-6 shadow-sm">
        <h1 className="text-3xl font-serif font-bold text-[#210c00]">Testimonials</h1>
        <p className="mt-2 max-w-3xl text-gray-600">
          Update social proof on the homepage, including traveler names, quotes, headshots, and featured tour labels.
        </p>
      </section>

      <TestimonialForm
        heading="Add New Testimonial"
        defaults={{
          id: "",
          name: "",
          location: "",
          country: "",
          image: "",
          rating: 5,
          quote: "",
          tour: "",
          sortOrder: 0,
          isPublished: true,
        }}
      />

      <div className="grid gap-6">
        {testimonials.map((item) => (
          <TestimonialForm
            key={item.id}
            heading={item.name}
            defaults={{
              id: item.id,
              name: item.name,
              location: item.location,
              country: item.country ?? "",
              image: item.image,
              rating: item.rating,
              quote: item.quote,
              tour: item.tour,
              sortOrder: item.sortOrder,
              isPublished: true,
            }}
          />
        ))}
      </div>
    </div>
  )
}
