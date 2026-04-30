"use client"

import Link from "next/link"
import Image from "next/image"

interface LogoProps {
  variant?: "dark" | "light"
  size?: "sm" | "md" | "lg" | "xl"
  showText?: boolean
}

export function Logo({ variant = "dark", size = "md", showText = true }: LogoProps) {
  const imageSizes = {
    sm: 40,
    md: 48,
    lg: 64,
    xl: 80,
  }

  const textSizes = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
  }

  const textColor = variant === "dark" ? "text-[#210c00]" : "text-white"

  return (
    <Link href="/" className="flex items-center gap-3 group">
      <div className="relative flex-shrink-0">
        <img
          src="/maasai-logo.png.png"
          alt="Maasai Amazing Safaris"
          className="object-contain w-auto h-auto"
          style={{ maxHeight: imageSizes[size] }}
        />
      </div>
      {showText && (
        <div className={`font-serif font-bold ${textSizes[size]} ${textColor} leading-tight hidden sm:block`}>
          <span className="block">Maasai</span>
          <span className="block -mt-0.5 text-[#c24503]">Amazing Safaris</span>
        </div>
      )}
    </Link>
  )
}

export function LogoMark({ size = "md", className = "" }: { size?: "sm" | "md" | "lg" | "xl"; className?: string }) {
  const imageSizes = {
    sm: 40,
    md: 64,
    lg: 80,
    xl: 120,
  }

  return (
    <div className={`${className} flex items-center justify-center`}>
      <Image
        src="/Maasai%20Amazing%20footer%20logo%20Safari%20Logo.png"
        alt="Maasai Amazing Safaris"
        width={imageSizes[size]}
        height={imageSizes[size]}
        className="object-contain h-auto"
        style={{ maxHeight: imageSizes[size] }}
        priority
      />
    </div>
  )
}
