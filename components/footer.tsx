"use client"

import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { LogoMark } from "@/components/logo"
import { useSiteSettings } from "@/components/site-settings-provider"

function Footer() {
  const { t } = useLanguage()
  const settings = useSiteSettings()

  return (
    <footer className="bg-[#210c00] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <LogoMark size="xl" />
            </div>
            <p className="text-sm text-gray-300">
              {settings.footerDescription}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">{t("footer.quickLinks")}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-[#f88518] transition-colors">
                  {t("footer.aboutUs")}
                </Link>
              </li>
              <li>
                <Link href="/northern-circuit" className="text-gray-300 hover:text-[#f88518] transition-colors">
                  {t("footer.northernCircuit")}
                </Link>
              </li>
              <li>
                <Link href="/zanzibar" className="text-gray-300 hover:text-[#f88518] transition-colors">
                  {t("footer.zanzibar")}
                </Link>
              </li>
              <li>
                <Link href="/kilimanjaro" className="text-gray-300 hover:text-[#f88518] transition-colors">
                  {t("footer.kilimanjaro")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Safari Tours */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">{t("footer.safariTours")}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/southern-circuit" className="text-gray-300 hover:text-[#f88518] transition-colors">
                  {t("footer.southernCircuit")}
                </Link>
              </li>
              <li>
                <Link href="/hidden-gems" className="text-gray-300 hover:text-[#f88518] transition-colors">
                  {t("footer.hiddenGems")}
                </Link>
              </li>
              <li>
                <Link href="/culture" className="text-gray-300 hover:text-[#f88518] transition-colors">
                  {t("footer.culturalTours")}
                </Link>
              </li>
              <li>
                <Link href="/historical-sites" className="text-gray-300 hover:text-[#f88518] transition-colors">
                  {t("footer.historicalSites")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">{t("footer.contactInfo")}</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5 text-[#f88518] flex-shrink-0" />
                <div className="text-gray-300">
                  {settings.addressLines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Phone className="w-4 h-4 mt-0.5 text-[#f88518] flex-shrink-0" />
                <div className="text-gray-300">
                  <p>WhatsApp: {settings.whatsappDisplay}</p>
                  <p>Phone: {settings.phoneDisplay}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#f88518] flex-shrink-0" />
                <a href={`mailto:${settings.contactEmail}`} className="text-gray-300 hover:text-[#f88518] transition-colors">
                  {settings.contactEmail}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} {settings.companyName}. {t("footer.allRightsReserved")} | {settings.companyTagline}
          </p>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
export default Footer
