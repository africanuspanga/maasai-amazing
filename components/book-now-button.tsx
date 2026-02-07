"use client"

import { useBooking } from "@/components/booking-provider"
import { useLanguage } from "@/components/language-provider"
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
  children,
  className,
  variant = "default",
  size = "default",
}: BookNowButtonProps) {
  const { openBooking } = useBooking()
  const { t } = useLanguage()

  return (
    <Button
      onClick={() => openBooking(tourName)}
      variant={variant}
      size={size}
      className={cn(className)}
    >
      {children || t("card.bookNow")}
    </Button>
  )
}
