import { createClient, type SupabaseClient } from "@supabase/supabase-js"

function getSupabaseUrl() {
  return process.env.NEXT_PUBLIC_SUPABASE_URL
}

function getPublicKey() {
  return process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
}

function getServiceRoleKey() {
  return process.env.SUPABASE_SERVICE_ROLE_KEY
}

export function hasSupabasePublicEnv() {
  return Boolean(getSupabaseUrl() && getPublicKey())
}

export function hasSupabaseAdminEnv() {
  return Boolean(getSupabaseUrl() && getServiceRoleKey())
}

function createConfiguredClient(key: string): SupabaseClient {
  const url = getSupabaseUrl()

  if (!url) {
    throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL")
  }

  return createClient(url, key, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  })
}

export function createSupabasePublicClient() {
  const publicKey = getPublicKey()

  if (!publicKey) {
    throw new Error("Missing NEXT_PUBLIC_SUPABASE_ANON_KEY")
  }

  return createConfiguredClient(publicKey)
}

export function createSupabaseAdminClient() {
  const serviceRoleKey = getServiceRoleKey()

  if (!serviceRoleKey) {
    throw new Error("Missing SUPABASE_SERVICE_ROLE_KEY")
  }

  return createConfiguredClient(serviceRoleKey)
}
