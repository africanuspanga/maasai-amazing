import { deletePartnerAction, savePartnerAction } from "@/app/admin/actions"
import { getAdminPartners } from "@/lib/cms/service"

function PartnerForm({
  heading,
  defaults,
}: {
  heading: string
  defaults: {
    id: string
    name: string
    logo: string
    websiteUrl: string
    width: number
    height: number
    sortOrder: number
    isPublished: boolean
  }
}) {
  return (
    <div className="rounded-[2rem] border border-[#eadcc8] bg-white p-5 shadow-sm">
      <h2 className="text-xl font-serif font-bold text-[#210c00]">{heading}</h2>
      <form action={savePartnerAction} className="mt-5 space-y-4">
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
            <span className="mb-2 block text-sm font-medium text-[#210c00]">Logo Path</span>
            <input name="logo" defaultValue={defaults.logo} className="w-full rounded-2xl border border-[#d9c3a8] px-4 py-3" />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-[#210c00]">Website URL</span>
            <input
              name="websiteUrl"
              defaultValue={defaults.websiteUrl}
              className="w-full rounded-2xl border border-[#d9c3a8] px-4 py-3"
            />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-[#210c00]">Width</span>
            <input
              name="width"
              type="number"
              defaultValue={String(defaults.width)}
              className="w-full rounded-2xl border border-[#d9c3a8] px-4 py-3"
            />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-[#210c00]">Height</span>
            <input
              name="height"
              type="number"
              defaultValue={String(defaults.height)}
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
        <button
          type="submit"
          className="rounded-full bg-[#f88518] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#c24503]"
        >
          Save Partner
        </button>
      </form>
      {defaults.id ? (
        <form action={deletePartnerAction} className="mt-3">
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

export default async function AdminPartnersPage() {
  const partners = await getAdminPartners()

  return (
    <div className="space-y-8">
      <section className="rounded-[2rem] border border-[#eadcc8] bg-white p-6 shadow-sm">
        <h1 className="text-3xl font-serif font-bold text-[#210c00]">Partners</h1>
        <p className="mt-2 max-w-3xl text-gray-600">
          Manage trust logos and recommendation badges displayed on the homepage.
        </p>
      </section>

      <PartnerForm
        heading="Add New Partner"
        defaults={{
          id: "",
          name: "",
          logo: "",
          websiteUrl: "",
          width: 160,
          height: 60,
          sortOrder: 0,
          isPublished: true,
        }}
      />

      <div className="grid gap-6">
        {partners.map((item) => (
          <PartnerForm
            key={item.id}
            heading={item.name}
            defaults={{
              id: item.id,
              name: item.name,
              logo: item.logo,
              websiteUrl: item.websiteUrl ?? "",
              width: item.width,
              height: item.height,
              sortOrder: item.sortOrder,
              isPublished: true,
            }}
          />
        ))}
      </div>
    </div>
  )
}
