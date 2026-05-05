import { readdir } from "node:fs/promises"
import path from "node:path"

const PUBLIC_DIR = path.join(process.cwd(), "public")
const IMAGE_EXTENSIONS = new Set([".png", ".jpg", ".jpeg", ".webp", ".gif", ".svg"])

async function walk(dir: string, baseDir: string, output: string[]) {
  const entries = await readdir(dir, { withFileTypes: true })

  for (const entry of entries) {
    if (entry.name.startsWith(".")) {
      continue
    }

    const fullPath = path.join(dir, entry.name)

    if (entry.isDirectory()) {
      await walk(fullPath, baseDir, output)
      continue
    }

    const extension = path.extname(entry.name).toLowerCase()

    if (!IMAGE_EXTENSIONS.has(extension)) {
      continue
    }

    const relative = path.relative(baseDir, fullPath).split(path.sep).join("/")
    output.push(`/${relative}`)
  }
}

export async function getPublicImageSuggestions() {
  const images: string[] = []

  try {
    await walk(PUBLIC_DIR, PUBLIC_DIR, images)
  } catch {
    return []
  }

  return images.sort((left, right) => left.localeCompare(right))
}
