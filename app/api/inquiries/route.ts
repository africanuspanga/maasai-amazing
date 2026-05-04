import { NextResponse } from "next/server"
import { inquiryInsertSchema } from "@/lib/cms/schema"
import { createInquiry } from "@/lib/cms/service"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const inquiry = inquiryInsertSchema.parse(body)

    await createInquiry(inquiry)

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("Failed to create inquiry", error)
    return NextResponse.json({ ok: false }, { status: 400 })
  }
}
