import type { Metadata } from "next"
import ContactPageClient from "@/components/contact-page-client"

export const metadata: Metadata = {
  title: "Contact Maasai Amazing Safaris | Plan Your Tanzania Adventure",
  description:
    "Get in touch with Maasai Amazing Safaris to plan your Tanzania safari, Kilimanjaro climb, or Zanzibar holiday. WhatsApp +255 760 246 801. Based in Dar es Salaam, Tanzania.",
  alternates: {
    canonical: "https://maasaiamazingsafaris.com/contact",
  },
  openGraph: {
    title: "Contact Maasai Amazing Safaris | Plan Your Tanzania Adventure",
    description:
      "Get in touch with Maasai Amazing Safaris to plan your Tanzania safari, Kilimanjaro climb, or Zanzibar holiday. WhatsApp +255 760 246 801.",
    url: "https://maasaiamazingsafaris.com/contact",
  },
}

export default function ContactPage() {
  return <ContactPageClient />
}
