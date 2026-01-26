import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center p-2">
                <Image
                  src="/images/saitoti-new-logo.png"
                  alt="Saitoti Tours & Safaris"
                  width={80}
                  height={80}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <p className="text-sm text-gray-300">
              Your gateway to Tanzania's wonders. Authentic safaris, epic treks, and cultural adventures.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-[#f88f2f] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/northern-circuit" className="text-gray-300 hover:text-[#f88f2f] transition-colors">
                  Northern Circuit
                </Link>
              </li>
              <li>
                <Link href="/zanzibar" className="text-gray-300 hover:text-[#f88f2f] transition-colors">
                  Zanzibar
                </Link>
              </li>
              <li>
                <Link href="/kilimanjaro" className="text-gray-300 hover:text-[#f88f2f] transition-colors">
                  Kilimanjaro
                </Link>
              </li>
            </ul>
          </div>

          {/* Safari Tours */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Safari Tours</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/southern-circuit" className="text-gray-300 hover:text-[#f88f2f] transition-colors">
                  Southern Circuit
                </Link>
              </li>
              <li>
                <Link href="/hidden-gems" className="text-gray-300 hover:text-[#f88f2f] transition-colors">
                  Hidden Gems
                </Link>
              </li>
              <li>
                <Link href="/culture" className="text-gray-300 hover:text-[#f88f2f] transition-colors">
                  Cultural Tours
                </Link>
              </li>
              <li>
                <Link href="/historical-sites" className="text-gray-300 hover:text-[#f88f2f] transition-colors">
                  Historical Sites
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5 text-[#f88f2f]" />
                <div className="text-gray-300">
                  <p>Burka-Olasiti, Arusha</p>
                  <p>P.O. Box 23119, Tanzania</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Phone className="w-4 h-4 mt-0.5 text-[#f88f2f]" />
                <div className="text-gray-300">
                  <p>WhatsApp: +255 784 258 765</p>
                  <p>WeChat: +86 155 2930 9784</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#f88f2f]" />
                <p className="text-gray-300">Osujakisaitoti982@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>
            <Link href="http://driftmark.co.tz/" target="_blank" className="hover:text-gray-300 transition-colors">
              &copy; 2026 Saitoti Tours & Safaris. All rights reserved.
            </Link>{" "}
            | Established 2021
          </p>
        </div>
      </div>
    </footer>
  )
}
