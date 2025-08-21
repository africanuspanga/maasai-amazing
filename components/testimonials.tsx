"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "California, USA",
    quote:
      "An absolutely incredible safari experience! The guides were knowledgeable and the wildlife viewing was beyond our expectations.",
  },
  {
    name: "Li Wei",
    location: "Beijing, China",
    quote: "Saitoti Tours made our dream African adventure come true. Professional service and unforgettable memories.",
  },
  {
    name: "Marco Rossi",
    location: "Rome, Italy",
    quote:
      "The attention to detail and authentic cultural experiences made this trip truly special. Highly recommended!",
  },
  {
    name: "Hans Mueller",
    location: "Berlin, Germany",
    quote: "Outstanding organization and passionate guides. The Serengeti migration was the highlight of our lives.",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">What Our Travelers Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from adventurers who have experienced the magic of Tanzania with us
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Card className="bg-card border-border shadow-lg">
            <CardContent className="p-8 md:p-12">
              <div className="text-center">
                <blockquote className="text-lg md:text-xl text-foreground mb-6 italic">
                  "{testimonials[currentIndex].quote}"
                </blockquote>
                <div className="font-semibold text-primary text-lg">{testimonials[currentIndex].name}</div>
                <div className="text-muted-foreground">{testimonials[currentIndex].location}</div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
