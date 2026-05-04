import { createHmac, timingSafeEqual } from "node:crypto"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

const SESSION_COOKIE = "maasai_admin_session"

type SessionPayload = {
  email: string
  exp: number
}

function getAdminEmail() {
  const value = process.env.CMS_ADMIN_EMAIL?.trim().toLowerCase()

  if (!value) {
    throw new Error("CMS_ADMIN_EMAIL is required")
  }

  return value
}

function getAdminPassword() {
  const value = process.env.CMS_ADMIN_PASSWORD

  if (!value) {
    throw new Error("CMS_ADMIN_PASSWORD is required")
  }

  return value
}

function getSessionSecret() {
  const value = process.env.CMS_SESSION_SECRET

  if (!value) {
    throw new Error("CMS_SESSION_SECRET is required")
  }

  return value
}

function sign(value: string) {
  return createHmac("sha256", getSessionSecret()).update(value).digest("base64url")
}

function encodeSession(payload: SessionPayload) {
  const body = Buffer.from(JSON.stringify(payload)).toString("base64url")
  const signature = sign(body)
  return `${body}.${signature}`
}

function decodeSession(token: string | undefined) {
  if (!token) {
    return null
  }

  const [body, signature] = token.split(".")

  if (!body || !signature) {
    return null
  }

  const expectedSignature = sign(body)
  const expectedBuffer = Buffer.from(expectedSignature)
  const providedBuffer = Buffer.from(signature)

  if (expectedBuffer.length !== providedBuffer.length) {
    return null
  }

  if (!timingSafeEqual(expectedBuffer, providedBuffer)) {
    return null
  }

  try {
    const payload = JSON.parse(Buffer.from(body, "base64url").toString("utf8")) as SessionPayload

    if (!payload.email || payload.exp <= Date.now()) {
      return null
    }

    if (payload.email.toLowerCase() !== getAdminEmail()) {
      return null
    }

    return payload
  } catch {
    return null
  }
}

function constantTimeEqual(left: string, right: string) {
  const leftBuffer = Buffer.from(left)
  const rightBuffer = Buffer.from(right)

  if (leftBuffer.length !== rightBuffer.length) {
    return false
  }

  return timingSafeEqual(leftBuffer, rightBuffer)
}

export async function verifyAdminCredentials(email: string, password: string) {
  return (
    constantTimeEqual(email.trim().toLowerCase(), getAdminEmail()) &&
    constantTimeEqual(password, getAdminPassword())
  )
}

export async function createAdminSession() {
  const cookieStore = await cookies()
  const token = encodeSession({
    email: getAdminEmail(),
    exp: Date.now() + 1000 * 60 * 60 * 24 * 30,
  })

  cookieStore.set(SESSION_COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  })
}

export async function clearAdminSession() {
  const cookieStore = await cookies()
  cookieStore.delete(SESSION_COOKIE)
}

export async function getAdminSession() {
  const cookieStore = await cookies()
  return decodeSession(cookieStore.get(SESSION_COOKIE)?.value)
}

export async function requireAdminSession() {
  const session = await getAdminSession()

  if (!session) {
    redirect("/admin/login")
  }

  return session
}
