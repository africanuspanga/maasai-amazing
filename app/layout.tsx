import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display } from "next/font/google"
import { Inter } from "next/font/google"
import { ScrollToTop } from "@/components/scroll-to-top"
import { BookingProvider } from "@/components/booking-provider"
import { LanguageProvider } from "@/components/language-provider"
import { SiteSettingsProvider } from "@/components/site-settings-provider"
import { getGlobalSettings } from "@/lib/cms/service"
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
  title: {
    default: "Maasai Amazing Safaris | Authentic Tanzania Safari & Kilimanjaro Tours",
    template: "%s | Maasai Amazing Safaris",
  },
  description:
    "Discover Tanzania's soul with Maasai Amazing Safaris. Expert-guided wildlife safaris, Kilimanjaro treks, Zanzibar beach holidays & cultural adventures. Book your dream African journey today.",
  generator: "next.js",
  keywords: [
    "Tanzania safari",
    "Kilimanjaro trekking",
    "Serengeti tours",
    "Zanzibar beach holiday",
    "Ngorongoro Crater safari",
    "Maasai safari",
    "African adventure",
    "wildlife photography",
    "Tarangire National Park",
    "Mount Kilimanjaro climb",
    "Tanzania travel",
    "safari packages",
    "Northern Circuit safari",
    "Southern Circuit safari",
    "cultural tours Tanzania",
  ],
  authors: [{ name: "Maasai Amazing Safaris" }],
  creator: "Maasai Amazing Safaris",
  publisher: "Maasai Amazing Safaris",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/Maasai%20Favicon.png",
    apple: "/Maasai%20Favicon.png",
    shortcut: "/Maasai%20Favicon.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Maasai Amazing Safaris | Authentic Tanzania Safari & Kilimanjaro Tours",
    description:
      "Discover Tanzania's soul with Maasai Amazing Safaris. Expert-guided wildlife safaris, Kilimanjaro treks, Zanzibar beach holidays & cultural adventures.",
    type: "website",
    locale: "en_US",
    siteName: "Maasai Amazing Safaris",
    url: "https://maasaiamazingsafaris.com",
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
    title: "Maasai Amazing Safaris | Authentic Tanzania Safari & Kilimanjaro Tours",
    description:
      "Discover Tanzania's soul with Maasai Amazing Safaris. Expert-guided wildlife safaris, Kilimanjaro treks, Zanzibar beach holidays & cultural adventures.",
    images: ["/images/og-image.png"],
  },
  alternates: {
    canonical: "https://maasaiamazingsafaris.com",
  },
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const globalSettings = await getGlobalSettings()
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: globalSettings.companyName,
    alternateName: `${globalSettings.companyName} Tanzania`,
    url: "https://maasaiamazingsafaris.com",
    logo: "https://maasaiamazingsafaris.com/Maasai%20Favicon.png",
    image: "https://maasaiamazingsafaris.com/images/og-image.png",
    description:
      "Premier Tanzania-based safari and travel company specializing in authentic African adventures, Kilimanjaro climbing, and Zanzibar beach holidays.",
    address: {
      "@type": "PostalAddress",
      streetAddress: globalSettings.addressLines.slice(1, 3).join(", "),
      addressLocality: globalSettings.addressLines[0],
      addressCountry: "TZ",
    },
    telephone: globalSettings.phoneNumber,
    email: globalSettings.contactEmail,
    priceRange: "$$$",
    currenciesAccepted: "USD, TZS",
    paymentAccepted: "Cash, Credit Card, Bank Transfer",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "16:00",
      },
    ],
    areaServed: {
      "@type": "Place",
      name: "Tanzania",
      containsPlace: [
        { "@type": "TouristAttraction", name: "Serengeti National Park" },
        { "@type": "TouristAttraction", name: "Ngorongoro Crater" },
        { "@type": "TouristAttraction", name: "Mount Kilimanjaro" },
        { "@type": "TouristAttraction", name: "Zanzibar Island" },
        { "@type": "TouristAttraction", name: "Tarangire National Park" },
        { "@type": "TouristAttraction", name: "Lake Manyara National Park" },
        { "@type": "TouristAttraction", name: "Ruaha National Park" },
        { "@type": "TouristAttraction", name: "Nyerere National Park (Selous)" },
      ],
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Safari & Tour Packages",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "TouristAttraction",
            name: "Northern Circuit Safari",
            description: "Serengeti, Ngorongoro, Tarangire & Lake Manyara safaris",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "TouristAttraction",
            name: "Kilimanjaro Climbing",
            description: "Machame, Marangu, Lemosho & Rongai route expeditions",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "TouristAttraction",
            name: "Zanzibar Beach Holiday",
            description: "Stone Town, spice tours, pristine beaches & water sports",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "TouristAttraction",
            name: "Southern Circuit Safari",
            description: "Ruaha, Nyerere (Selous), Mikumi & Saadani wilderness",
          },
        },
      ],
    },
    sameAs: [`https://wa.me/${globalSettings.whatsappNumber}`],
  }

  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <style>{`
html {
  font-family: ${inter.style.fontFamily};
  --font-sans: ${inter.style.fontFamily};
  --font-serif: ${playfair.style.fontFamily};
}
        `}</style>
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <SiteSettingsProvider settings={globalSettings}>
          <LanguageProvider>
            <BookingProvider>
              <ScrollToTop />
              {children}
            </BookingProvider>
          </LanguageProvider>
        </SiteSettingsProvider>
      </body>
    </html>
  )
}
