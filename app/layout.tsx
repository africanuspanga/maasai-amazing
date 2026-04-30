import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display } from "next/font/google"
import { Inter } from "next/font/google"
import { ScrollToTop } from "@/components/scroll-to-top"
import { BookingProvider } from "@/components/booking-provider"
import { LanguageProvider } from "@/components/language-provider"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "900"],
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://maasaiamazingsafaris.com"),
  title: "Maasai Amazing Safaris - Discover the Soul of Tanzania",
  description:
    "Authentic safaris, epic treks, and cultural adventures in East Africa's crown jewel. Experience Tanzania's wildlife and natural wonders with expert Maasai guides.",
  generator: "next.js",
  keywords: "Tanzania safari, Kilimanjaro trekking, Serengeti tours, Zanzibar, wildlife photography, African adventure, Maasai safari",
  authors: [{ name: "Maasai Amazing Safaris" }],
  icons: {
    icon: "/Maasai%20Favicon.png",
    apple: "/Maasai%20Favicon.png",
    shortcut: "/Maasai%20Favicon.png",
  },
  openGraph: {
    title: "Maasai Amazing Safaris - Discover the Soul of Tanzania",
    description: "Authentic safaris, epic treks, and cultural adventures in East Africa's crown jewel",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Maasai Amazing Safaris - Discover the Soul of Tanzania",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maasai Amazing Safaris - Discover the Soul of Tanzania",
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
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <style>{`
html {
  font-family: ${inter.style.fontFamily};
  --font-sans: ${inter.style.fontFamily};
  --font-serif: ${playfair.style.fontFamily};
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
