"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import Image from "next/image"
import type { TestimonialRecord } from "@/lib/cms/schema"

interface TestimonialsProps {
  title: string
  subtitle: string
  ratingLabel: string
  happyTravelersLabel: string
  testimonials: TestimonialRecord[]
}

export function Testimonials({
  title,
  subtitle,
  ratingLabel,
  happyTravelersLabel,
  testimonials,
}: TestimonialsProps) {

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#210c00] mb-6">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <CardContent className="p-6 md:p-8">
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="w-16 h-16 text-[#f88518]" />
                </div>

                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <blockquote className="text-gray-700 mb-6 leading-relaxed text-sm md:text-base relative z-10">
                  &quot;{testimonial.quote}&quot;
                </blockquote>

                <div className="mb-4">
                  <span className="inline-block bg-[#f88518]/10 text-[#f88518] text-xs font-semibold px-3 py-1 rounded-full">
                    {testimonial.tour}
                  </span>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                  <div className="w-12 h-12 rounded-full overflow-hidden relative flex-shrink-0">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-[#210c00] text-sm md:text-base">{testimonial.name}</div>
                    <div className="text-gray-500 text-xs md:text-sm">{testimonial.location}</div>
                  </div>
                </div>
              </CardContent>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#f88518] to-[#c24503] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </Card>
          ))}
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md">
            <div className="flex -space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-gray-700 font-semibold">{ratingLabel}</span>
            <span className="text-gray-400">{"•"}</span>
            <span className="text-gray-600">{happyTravelersLabel}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
