import type { Metadata } from "next"
import { loginAction } from "@/app/admin/actions"

export const metadata: Metadata = {
  title: "Admin Login | Maasai Amazing Safaris",
}

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>
}) {
  const params = await searchParams

  return (
    <div className="min-h-screen bg-[#f7f1ea] flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-3xl bg-white shadow-2xl p-8 border border-[#eadcc8]">
        <div className="mb-8 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[#c24503] mb-3">Admin</p>
          <h1 className="text-3xl font-serif font-bold text-[#210c00]">Maasai Amazing Safaris CMS</h1>
          <p className="mt-3 text-sm text-gray-600">
            Sign in to update tours, homepage content, testimonials, partners, and booking leads.
          </p>
        </div>

        {params.error ? (
          <div className="mb-5 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            The email or password did not match the admin credentials.
          </div>
        ) : null}

        <form action={loginAction} className="space-y-4">
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-[#210c00]">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-2xl border border-[#d9c3a8] px-4 py-3 outline-none transition focus:border-[#f88518] focus:ring-2 focus:ring-[#f88518]/20"
            />
          </div>

          <div>
            <label htmlFor="password" className="mb-2 block text-sm font-medium text-[#210c00]">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="w-full rounded-2xl border border-[#d9c3a8] px-4 py-3 outline-none transition focus:border-[#f88518] focus:ring-2 focus:ring-[#f88518]/20"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-2xl bg-[#f88518] px-4 py-3 text-white font-semibold transition hover:bg-[#c24503]"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  )
}
