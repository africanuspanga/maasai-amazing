"use client"

import { useBooking } from "@/components/booking-provider"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface BookNowButtonProps {
  tourName?: string
  children?: ReactNode
  className?: string
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "sm" | "lg" | "icon"
}

export function BookNowButton({
  tourName,
  children = "Book Now",
  className,
  variant = "default",
  size = "default",
}: BookNowButtonProps) {
  const { openBooking } = useBooking()

  return (
    <Button
      onClick={() => openBooking(tourName)}
      variant={variant}
      size={size}
      className={cn(className)}
    >
      {children}
    </Button>
  )
}
