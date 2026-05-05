"use client"

import { createContext, useContext, useState, useSyncExternalStore, useCallback, type ReactNode } from "react"
import { type Locale, t as translate } from "@/lib/translations"

const supportedLocales: Locale[] = ["en", "fr", "es", "zh"]

function getInitialLocale(): Locale {
  if (typeof window === "undefined") {
    return "en"
  }

  const saved = localStorage.getItem("maasai-lang") as Locale | null
  return saved && supportedLocales.includes(saved) ? saved : "en"
}

function subscribe() {
  return () => {}
}

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
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale)
  const mounted = useSyncExternalStore(subscribe, () => true, () => false)

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
