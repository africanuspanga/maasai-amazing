import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Search, MapPin } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Illustration */}
        <div className="mb-8">
          <div className="text-9xl md:text-[12rem] font-bold text-[#f88518] opacity-20 leading-none">
            404
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-[#210c00] tracking-tight mb-4">
          Oops! Safari Route Not Found
        </h1>
        
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-md mx-auto">
          Looks like you've wandered off the beaten path. Let's get you back on track to your Tanzanian adventure.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button asChild size="lg" className="bg-[#f88518] hover:bg-[#c24503] text-white">
            <Link href="/">
              <Home className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
          </Button>
          
          <Button asChild size="lg" variant="outline" className="border-[#f88518] text-[#f88518] hover:bg-[#f88518] hover:text-white">
            <Link href="/itineraries">
              <MapPin className="w-5 h-5 mr-2" />
              Explore Itineraries
            </Link>
          </Button>
        </div>

        {/* Popular Links */}
        <div className="mt-12 pt-8 border-t border-gray-300">
          <p className="text-sm text-gray-500 mb-4">Looking for something specific?</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/about" className="text-sm text-[#f88518] hover:underline">
              About Us
            </Link>
            <span className="text-gray-300">•</span>
            <Link href="/itineraries" className="text-sm text-[#f88518] hover:underline">
              Safari Packages
            </Link>
            <span className="text-gray-300">•</span>
            <Link href="/contact" className="text-sm text-[#f88518] hover:underline">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
