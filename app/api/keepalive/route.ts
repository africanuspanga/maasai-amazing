import { NextResponse } from "next/server"
import { createSupabasePublicClient, hasSupabasePublicEnv } from "@/lib/supabase"

export const dynamic = "force-dynamic"
export const revalidate = 0

export async function GET() {
  if (!hasSupabasePublicEnv()) {
    return NextResponse.json({ ok: false, error: "missing_supabase_env" }, { status: 503 })
  }

  try {
    const client = createSupabasePublicClient()
    const { error } = await client.from("cms_settings").select("key").limit(1)

    if (error) {
      console.error("Supabase keepalive failed", error)
      return NextResponse.json({ ok: false, error: "supabase_query_failed" }, { status: 502 })
    }

    return NextResponse.json(
      {
        ok: true,
        checkedAt: new Date().toISOString(),
      },
      {
        headers: {
          "Cache-Control": "no-store, max-age=0",
        },
      },
    )
  } catch (error) {
    console.error("Supabase keepalive crashed", error)
    return NextResponse.json({ ok: false, error: "unexpected_error" }, { status: 500 })
  }
}
