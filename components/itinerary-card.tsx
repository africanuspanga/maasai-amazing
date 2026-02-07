"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Users, MapPin } from "lucide-react"
import { BookNowButton } from "@/components/book-now-button"

interface Itinerary {
  id: string
  title: string
  duration: string
  image: string
  destinations: string
  groupSize: string
  description: string
  highlights: string[]
  priceFrom: string
  category: string
}

type ColorTheme = "amber" | "teal" | "brown"

const themeColors: Record<ColorTheme, { primary: string; hover: string; text: string; border: string; badge: string }> = {
  amber: {
    primary: "bg-[#d97706] hover:bg-[#b45309]",
    hover: "hover:bg-[#d97706] hover:text-white",
    text: "text-[#d97706]",
    border: "border-[#d97706]",
    badge: "bg-[#d97706]",
  },
  teal: {
    primary: "bg-[#0891b2] hover:bg-[#0e7490]",
    hover: "hover:bg-[#0891b2] hover:text-white",
    text: "text-[#0891b2]",
    border: "border-[#0891b2]",
    badge: "bg-[#0891b2]",
  },
  brown: {
    primary: "bg-[#f88f2f] hover:bg-[#e67e1e]",
    hover: "hover:bg-[#f88f2f] hover:text-white",
    text: "text-[#f88f2f]",
    border: "border-[#f88f2f]",
    badge: "bg-[#f88f2f]",
  },
}

export function ItineraryCard({ itinerary, theme = "brown" }: { itinerary: Itinerary; theme?: ColorTheme }) {
  const colors = themeColors[theme]

  return (
    <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={itinerary.image || "/placeholder.svg"}
          alt={itinerary.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500 will-change-transform"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className={`absolute top-4 right-4 ${colors.badge} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
          From {itinerary.priceFrom}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-lg font-bold mb-1 pr-4">{itinerary.title}</h3>
        </div>
      </div>

      <CardContent className="p-6">
        {/* Tour Info */}
        <div className="flex flex-wrap gap-3 mb-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Calendar className={`w-4 h-4 ${colors.text}`} />
            <span>{itinerary.duration}</span>
          </div>
          {itinerary.groupSize && (
            <div className="flex items-center gap-1">
              <Users className={`w-4 h-4 ${colors.text}`} />
              <span>{itinerary.groupSize}</span>
            </div>
          )}
        </div>

        <div className="flex items-start gap-2 mb-4">
          <MapPin className={`w-4 h-4 ${colors.text} mt-0.5 flex-shrink-0`} />
          <p className="text-sm text-gray-600">{itinerary.destinations}</p>
        </div>

        <p className="text-gray-700 mb-4 text-sm leading-relaxed line-clamp-3">{itinerary.description}</p>

        {/* Highlights */}
        <div className="mb-6">
          <h4 className={`font-semibold ${theme === "brown" ? "text-[#55331e]" : colors.text} text-sm mb-2`}>Highlights:</h4>
          <ul className="space-y-1">
            {itinerary.highlights.slice(0, 3).map((highlight, index) => (
              <li key={index} className="text-xs text-gray-600 flex items-start gap-2">
                <span className={`${colors.text} mt-0.5`}>•</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <Button
            asChild
            variant="outline"
            className={`w-full ${colors.border} ${colors.text} ${colors.hover} bg-transparent`}
          >
            <Link href={`/itineraries/${itinerary.id}`}>More Details</Link>
          </Button>
          <BookNowButton
            tourName={itinerary.title}
            className={`w-full ${colors.primary} text-white`}
          />
        </div>
      </CardContent>
    </Card>
  )
}
