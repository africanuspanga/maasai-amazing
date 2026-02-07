import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import { Open_Sans } from "next/font/google"
import { ScrollToTop } from "@/components/scroll-to-top"
import { BookingProvider } from "@/components/booking-provider"
import { LanguageProvider } from "@/components/language-provider"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "600", "700", "900"],
})

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
  weight: ["400", "500", "600"],
})

export const metadata: Metadata = {
  title: "Saitoti Tours & Safaris - Discover the Soul of Tanzania",
  description:
    "Authentic safaris, epic treks, and cultural adventures in East Africa's crown jewel. Experience Tanzania's wildlife and natural wonders with expert guides.",
  generator: "v0.app",
  keywords: "Tanzania safari, Kilimanjaro trekking, Serengeti tours, Zanzibar, wildlife photography, African adventure",
  authors: [{ name: "Saitoti Tours & Safaris" }],
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Saitoti Tours & Safaris - Discover the Soul of Tanzania",
    description: "Authentic safaris, epic treks, and cultural adventures in East Africa's crown jewel",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Saitoti Tours & Safaris - Discover the Soul of Tanzania",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saitoti Tours & Safaris - Discover the Soul of Tanzania",
    description: "Authentic safaris, epic treks, and cultural adventures in East Africa's crown jewel",
    images: ["/images/og-image.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable}`}>
      <head>
        <style>{`
html {
  font-family: ${openSans.style.fontFamily};
  --font-sans: ${openSans.style.fontFamily};
  --font-serif: ${montserrat.style.fontFamily};
}
        `}</style>
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <LanguageProvider>
          <BookingProvider>
            <ScrollToTop />
            {children}
          </BookingProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
