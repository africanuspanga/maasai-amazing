"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Michael Thompson",
    location: "Sydney, Australia",
    country: "Australia",
    flag: "🇦🇺",
    rating: 5,
    quote:
      "An absolutely incredible safari experience! The guides were knowledgeable and the wildlife viewing was beyond our expectations. Saitoti Tours made our dream come true.",
    tour: "Serengeti Migration Safari",
  },
  {
    name: "Li Wei",
    location: "Beijing, China",
    country: "China",
    flag: "🇨🇳",
    rating: 5,
    quote:
      "Professional service from start to finish. The accommodation was excellent, and our guide's knowledge of the wildlife was amazing. Highly recommend for Chinese travelers!",
    tour: "Northern Circuit Adventure",
  },
  {
    name: "Marco Rossi",
    location: "Rome, Italy",
    country: "Italy",
    flag: "🇮🇹",
    rating: 5,
    quote:
      "The attention to detail and authentic cultural experiences made this trip truly special. The Maasai village visit was a highlight. Grazie Saitoti Tours!",
    tour: "Cultural Safari Experience",
  },
  {
    name: "Emma Williams",
    location: "London, UK",
    country: "United Kingdom",
    flag: "🇬🇧",
    rating: 5,
    quote:
      "Outstanding organization and passionate guides. The Serengeti migration was breathtaking. Best safari company in Tanzania - worth every penny!",
    tour: "Luxury Safari Package",
  },
  {
    name: "Hans Mueller",
    location: "Berlin, Germany",
    country: "Germany",
    flag: "🇩🇪",
    rating: 5,
    quote:
      "Fantastic experience! Very well organized with great attention to safety. The landscapes were stunning and we saw all the Big Five. Danke Saitoti!",
    tour: "Tanzania Highlights Tour",
  },
  {
    name: "Sophie Martin",
    location: "Paris, France",
    country: "France",
    flag: "🇫🇷",
    rating: 5,
    quote:
      "Magnifique! The combination of safari and Zanzibar beach was perfect. Our guide was so knowledgeable and friendly. An unforgettable adventure!",
    tour: "Bush to Beach Experience",
  },
]

export function Testimonials() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#55331e] mb-6">
            What Our Travelers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real experiences from adventurers who explored Tanzania with us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <CardContent className="p-6 md:p-8">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="w-16 h-16 text-[#f88f2f]" />
                </div>

                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-gray-700 mb-6 leading-relaxed text-sm md:text-base relative z-10">
                  "{testimonial.quote}"
                </blockquote>

                {/* Tour Tag */}
                <div className="mb-4">
                  <span className="inline-block bg-[#f88f2f]/10 text-[#f88f2f] text-xs font-semibold px-3 py-1 rounded-full">
                    {testimonial.tour}
                  </span>
                </div>

                {/* Traveler Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#f88f2f] to-[#e67e1e] flex items-center justify-center text-2xl">
                    {testimonial.flag}
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-[#55331e] text-sm md:text-base">{testimonial.name}</div>
                    <div className="text-gray-500 text-xs md:text-sm">{testimonial.location}</div>
                  </div>
                </div>
              </CardContent>

              {/* Decorative accent */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#f88f2f] to-[#e67e1e] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 md:mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md">
            <div className="flex -space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-gray-700 font-semibold">5.0 Rating</span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-600">500+ Happy Travelers</span>
          </div>
        </div>
      </div>
    </section>
  )
}
