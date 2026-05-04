import { existsSync, readFileSync } from "node:fs"
import { resolve } from "node:path"
import { createClient } from "@supabase/supabase-js"
import cmsSeed from "../content/cms-seed.json" with { type: "json" }

function loadLocalEnvFile() {
  const envPath = resolve(process.cwd(), ".env.local")

  if (!existsSync(envPath)) {
    return
  }

  const contents = readFileSync(envPath, "utf8")

  for (const line of contents.split(/\r?\n/)) {
    const trimmed = line.trim()

    if (!trimmed || trimmed.startsWith("#")) {
      continue
    }

    const separatorIndex = trimmed.indexOf("=")

    if (separatorIndex === -1) {
      continue
    }

    const key = trimmed.slice(0, separatorIndex).trim()
    const value = trimmed.slice(separatorIndex + 1).trim()

    if (!process.env[key]) {
      process.env[key] = value
    }
  }
}

loadLocalEnvFile()

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !serviceRoleKey) {
  console.error("Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY")
  process.exit(1)
}

const supabase = createClient(supabaseUrl, serviceRoleKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
})

const settingsRows = [
  { key: "global", label: "Global Settings", payload: cmsSeed.global },
  { key: "home", label: "Home Page", payload: cmsSeed.home },
  { key: "about", label: "About Page", payload: cmsSeed.about },
  { key: "contact", label: "Contact Page", payload: cmsSeed.contact },
  { key: "itinerariesIndex", label: "Itineraries Index Page", payload: cmsSeed.itinerariesIndex },
]

const itineraryRows = cmsSeed.itineraries.map((item) => ({
  slug: item.slug,
  title: item.title,
  short_title: item.shortTitle,
  featured_subtitle: item.featuredSubtitle,
  duration: item.duration,
  image: item.image,
  destinations: item.destinations,
  group_size: item.groupSize,
  description: item.description,
  highlights: item.highlights,
  price_from: item.priceFrom,
  category: item.category,
  book_tour_name: item.bookTourName,
  featured_section: item.featuredSection,
  sort_order: item.sortOrder,
  is_published: true,
}))

const testimonialRows = cmsSeed.testimonials.map((item) => ({
  id: item.id,
  name: item.name,
  location: item.location,
  country: item.country,
  image: item.image,
  rating: item.rating,
  quote: item.quote,
  tour: item.tour,
  sort_order: item.sortOrder,
  is_published: true,
}))

const partnerRows = cmsSeed.partners.map((item) => ({
  id: item.id,
  name: item.name,
  logo: item.logo,
  website_url: item.websiteUrl,
  width: item.width,
  height: item.height,
  sort_order: item.sortOrder,
  is_published: true,
}))

async function run() {
  const { error: settingsError } = await supabase
    .from("cms_settings")
    .upsert(settingsRows, { onConflict: "key" })

  if (settingsError) throw settingsError

  const { error: itineraryError } = await supabase
    .from("cms_itineraries")
    .upsert(itineraryRows, { onConflict: "slug" })

  if (itineraryError) throw itineraryError

  const { error: testimonialError } = await supabase
    .from("cms_testimonials")
    .upsert(testimonialRows, { onConflict: "id" })

  if (testimonialError) throw testimonialError

  const { error: partnerError } = await supabase
    .from("cms_partners")
    .upsert(partnerRows, { onConflict: "id" })

  if (partnerError) throw partnerError

  console.log("CMS seed completed successfully.")
}

run().catch((error) => {
  console.error(error)
  process.exit(1)
})
