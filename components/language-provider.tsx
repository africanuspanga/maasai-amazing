"use client"

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react"
import { type Locale, t as translate } from "@/lib/translations"

interface LanguageContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    // Return a fallback so components work even outside the provider during SSR
    return {
      locale: "en" as Locale,
      setLocale: () => {},
      t: (key: string) => translate("en", key),
    }
  }
  return context
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem("maasai-lang") as Locale | null
    if (saved && ["en", "fr", "es", "zh"].includes(saved)) {
      setLocaleState(saved)
    }
    setMounted(true)
  }, [])

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale)
    localStorage.setItem("maasai-lang", newLocale)
  }, [])

  const t = useCallback(
    (key: string) => translate(locale, key),
    [locale]
  )

  // During SSR / hydration, always render English to avoid mismatch
  const value: LanguageContextType = {
    locale: mounted ? locale : "en",
    setLocale,
    t: mounted ? t : (key: string) => translate("en", key),
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}
