"use client"

import { createContext, useContext, type ReactNode } from "react"
import type { GlobalSettings } from "@/lib/cms/schema"

const SiteSettingsContext = createContext<GlobalSettings | null>(null)

export function SiteSettingsProvider({
  settings,
  children,
}: {
  settings: GlobalSettings
  children: ReactNode
}) {
  return <SiteSettingsContext.Provider value={settings}>{children}</SiteSettingsContext.Provider>
}

export function useSiteSettings() {
  const context = useContext(SiteSettingsContext)

  if (!context) {
    throw new Error("useSiteSettings must be used within SiteSettingsProvider")
  }

  return context
}
