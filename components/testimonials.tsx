"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/components/language-provider"

const testimonials = [
  {
    name: "Emily R.",
    location: "California, USA",
    country: "United States",
    image: "/images/testimonials/profile-1.jpg",
    rating: 5,
    quote:
      "We booked the 8-day Northern Circuit and honestly didn't know what to expect. Our guide was patient with all our questions and the lodges were way nicer than I anticipated. Saw lions, elephants, and even a leopard in a tree. Worth every dollar.",
    tour: "8-Day Elephant Kingdom Safari",
  },
  {
    name: "James T.",
    location: "London, UK",
    country: "United Kingdom",
    image: "/images/testimonials/profile-2.jpg",
    rating: 5,
    quote:
      "Did the Kilimanjaro Machame route with my son. The porters were incredible - always smiling despite carrying so much. Summit day was brutal but standing at Uhuru Peak made it all worthwhile. Good company, would trek with them again.",
    tour: "Kilimanjaro - Machame Route",
  },
  {
    name: "Michael S.",
    location: "Toronto, Canada",
    country: "Canada",
    image: "/images/testimonials/profile-3.jpg",
    rating: 5,
    quote:
      "Zanzibar was exactly what we needed after safari. The beach time was perfect and Stone Town tour was really interesting. Prison Island was fun but crowded. Overall a great balance of adventure and relaxation.",
    tour: "Zanzibar Classic",
  },
  {
    name: "Olivia M.",
    location: "Sydney, Australia",
    country: "Australia",
    image: "/images/testimonials/profile-4.jpg",
    rating: 5,
    quote:
      "The Southern Circuit was less crowded than I expected, which was amazing. Ruaha had so many elephants! Our guide knew where to find the animals and was really flexible with our schedule. Solid experience.",
    tour: "Grand Southern Adventure",
  },
  {
    name: "The Johnson Family",
    location: "Texas, USA",
    country: "United States",
    image: "/images/testimonials/profile-5.jpg",
    rating: 5,
    quote:
      "Traveling with two teenagers was easier than expected. They actually put their phones down during game drives! The Ngorongoro Crater was the highlight for all of us. Food at the camps was surprisingly good too.",
    tour: "7-Day Natural Wonders Safari",
  },
  {
    name: "Sophie D.",
    location: "Brussels, Belgium",
    country: "Belgium",
    image: "/images/testimonials/profile-6.jpg",
    rating: 5,
    quote:
      "My third trip to Tanzania and first with Maasai Amazing Safaris. The 5-day extension after Kilimanjaro was perfect timing. Saw the migration in Serengeti - thousands of wildebeest crossing the river. Already planning to come back next year.",
    tour: "5-Day Safari Extension",
  },
]

export function Testimonials() {
  const { t } = useLanguage()

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#210c00] mb-6">
            {t("testimonials.title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("testimonials.subtitle")}
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
            <span className="text-gray-700 font-semibold">{t("testimonials.rating")}</span>
            <span className="text-gray-400">{"•"}</span>
            <span className="text-gray-600">{t("testimonials.happyTravelers")}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
