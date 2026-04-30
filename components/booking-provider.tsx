"use client"

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode, type FormEvent } from "react"
import { X, User, Mail, Calendar, Users, MessageSquare, Phone, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import { LogoMark } from "@/components/logo"

interface BookingContextType {
  openBooking: (tourName?: string) => void
  closeBooking: () => void
}

const BookingContext = createContext<BookingContextType | null>(null)

export function useBooking() {
  const context = useContext(BookingContext)
  if (!context) throw new Error("useBooking must be used within BookingProvider")
  return context
}

interface FormData {
  fullName: string
  nationality: string
  email: string
  phone: string
  travelDate: string
  accommodation: string
  adults: string
  children: string
  specialRequests: string
}

const initialFormData: FormData = {
  fullName: "",
  nationality: "",
  email: "",
  phone: "",
  travelDate: "",
  accommodation: "",
  adults: "1",
  children: "0",
  specialRequests: "",
}

function BookingModal({ tourName, onClose }: { tourName: string; onClose: () => void }) {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = ""
    }
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [onClose])

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    const message = [
      `*${t("booking.whatsappMessage")}*`,
      ``,
      tourName ? `*${t("booking.tour")}:* ${tourName}` : "",
      ``,
      `*--- ${t("booking.personalInfo")} ---*`,
      `*${t("booking.fullName")}:* ${formData.fullName}`,
      `*${t("booking.nationality")}:* ${formData.nationality}`,
      ``,
      `*--- ${t("booking.contactInfo")} ---*`,
      `*${t("booking.email")}:* ${formData.email}`,
      `*${t("booking.phone")}:* ${formData.phone}`,
      ``,
      `*--- ${t("booking.travelDetails")} ---*`,
      `*${t("booking.travelDate")}:* ${formData.travelDate}`,
      formData.accommodation ? `*${t("booking.accommodation")}:* ${formData.accommodation}` : "",
      ``,
      `*--- ${t("booking.groupSize")} ---*`,
      `*${t("booking.adults")}:* ${formData.adults}`,
      `*${t("booking.children")}:* ${formData.children}`,
      formData.specialRequests ? `\n*--- ${t("booking.specialRequests")} ---*\n${formData.specialRequests}` : "",
    ]
      .filter(Boolean)
      .join("\n")

    window.open(`https://wa.me/255760246801?text=${encodeURIComponent(message)}`, "_blank")
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label="Booking confirmation"
      >
        <div
          className="bg-white rounded-2xl shadow-2xl max-w-md w-full text-center p-8"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-serif font-bold text-[#210c00] mb-2">{t("booking.successTitle")}</h3>
          <p className="text-gray-600 mb-6">{t("booking.successMessage")}</p>
          <Button onClick={onClose} className="bg-[#f88518] hover:bg-[#c24503] text-white px-8">
            {t("booking.close")}
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={t("booking.title")}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#210c00] to-[#c24503] px-6 py-5 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-4">
            <LogoMark size="md" />
            <div>
              <h2 className="text-xl md:text-2xl font-serif font-bold text-white">{t("booking.title")}</h2>
              <p className="text-white/80 text-sm">
                {tourName || "Maasai Amazing Safaris"}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10"
            aria-label={t("booking.close")}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="overflow-y-auto flex-1 p-6">
          <div className="space-y-6">
            {/* Personal Information */}
            <fieldset>
              <legend className="flex items-center gap-2 text-lg font-serif font-bold text-[#210c00] mb-4">
                <User className="w-5 h-5 text-[#f88518]" />
                {t("booking.personalInfo")}
              </legend>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-1">
                    {t("booking.fullName")} <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={(e) => handleChange("fullName", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f88518]/50 focus:border-[#f88518] outline-none transition-colors text-sm bg-white text-gray-900"
                  />
                </div>
                <div>
                  <label htmlFor="nationality" className="block text-sm font-semibold text-gray-700 mb-1">
                    {t("booking.nationality")} <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="nationality"
                    type="text"
                    required
                    placeholder="e.g., United States"
                    value={formData.nationality}
                    onChange={(e) => handleChange("nationality", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f88518]/50 focus:border-[#f88518] outline-none transition-colors text-sm bg-white text-gray-900"
                  />
                </div>
              </div>
            </fieldset>

            {/* Contact Information */}
            <fieldset>
              <legend className="flex items-center gap-2 text-lg font-serif font-bold text-[#210c00] mb-4">
                <Mail className="w-5 h-5 text-[#f88518]" />
                {t("booking.contactInfo")}
              </legend>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">
                    {t("booking.email")} <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f88518]/50 focus:border-[#f88518] outline-none transition-colors text-sm bg-white text-gray-900"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1">
                    {t("booking.phone")} <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    placeholder="+1 234 567 8900"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f88518]/50 focus:border-[#f88518] outline-none transition-colors text-sm bg-white text-gray-900"
                  />
                </div>
              </div>
            </fieldset>

            {/* Travel Details */}
            <fieldset>
              <legend className="flex items-center gap-2 text-lg font-serif font-bold text-[#210c00] mb-4">
                <Calendar className="w-5 h-5 text-[#f88518]" />
                {t("booking.travelDetails")}
              </legend>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="travelDate" className="block text-sm font-semibold text-gray-700 mb-1">
                    {t("booking.travelDate")} <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="travelDate"
                    type="date"
                    required
                    value={formData.travelDate}
                    onChange={(e) => handleChange("travelDate", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f88518]/50 focus:border-[#f88518] outline-none transition-colors text-sm bg-white text-gray-900"
                  />
                </div>
                <div>
                  <label htmlFor="accommodation" className="block text-sm font-semibold text-gray-700 mb-1">
                    {t("booking.accommodation")}
                  </label>
                  <select
                    id="accommodation"
                    value={formData.accommodation}
                    onChange={(e) => handleChange("accommodation", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f88518]/50 focus:border-[#f88518] outline-none transition-colors text-sm bg-white text-gray-900"
                  >
                    <option value="">{t("booking.selectAccommodation")}</option>
                    <option value="Budget / Camping">{t("booking.budgetCamping")}</option>
                    <option value="Mid-Range Lodge">{t("booking.midRange")}</option>
                    <option value="Luxury Lodge">{t("booking.luxury")}</option>
                    <option value="Tented Camp">{t("booking.tentedCamp")}</option>
                    <option value="Mixed">{t("booking.mixed")}</option>
                  </select>
                </div>
              </div>
            </fieldset>

            {/* Group Size */}
            <fieldset>
              <legend className="flex items-center gap-2 text-lg font-serif font-bold text-[#210c00] mb-4">
                <Users className="w-5 h-5 text-[#f88518]" />
                {t("booking.groupSize")}
              </legend>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="adults" className="block text-sm font-semibold text-gray-700 mb-1">
                    {t("booking.adults")} <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="adults"
                    required
                    value={formData.adults}
                    onChange={(e) => handleChange("adults", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f88518]/50 focus:border-[#f88518] outline-none transition-colors text-sm bg-white text-gray-900"
                  >
                    {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                      <option key={n} value={String(n)}>
                        {n} {n === 1 ? t("booking.adult") : t("booking.adultsPlural")}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="children" className="block text-sm font-semibold text-gray-700 mb-1">
                    {t("booking.children")}
                  </label>
                  <select
                    id="children"
                    value={formData.children}
                    onChange={(e) => handleChange("children", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f88518]/50 focus:border-[#f88518] outline-none transition-colors text-sm bg-white text-gray-900"
                  >
                    {Array.from({ length: 7 }, (_, i) => i).map((n) => (
                      <option key={n} value={String(n)}>
                        {n} {n === 1 ? t("booking.child") : t("booking.childrenPlural")}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </fieldset>

            {/* Special Requests */}
            <fieldset>
              <legend className="flex items-center gap-2 text-lg font-serif font-bold text-[#210c00] mb-4">
                <MessageSquare className="w-5 h-5 text-[#f88518]" />
                {t("booking.specialRequests")}
              </legend>
              <div>
                <label htmlFor="specialRequests" className="block text-sm font-semibold text-gray-700 mb-1">
                  {t("booking.specialRequestsLabel")}
                </label>
                <textarea
                  id="specialRequests"
                  rows={3}
                  placeholder={t("booking.specialRequestsPlaceholder")}
                  value={formData.specialRequests}
                  onChange={(e) => handleChange("specialRequests", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f88518]/50 focus:border-[#f88518] outline-none transition-colors text-sm resize-none bg-white text-gray-900"
                />
              </div>
            </fieldset>
          </div>

          {/* Submit */}
          <div className="mt-6 flex flex-col gap-3">
            <Button
              type="submit"
              className="w-full bg-[#f88518] hover:bg-[#c24503] text-white text-lg py-6 font-semibold rounded-xl"
            >
              {t("booking.submit")}
            </Button>
            <p className="text-center text-xs text-gray-500">
              {t("booking.emailUs")}{" "}
              <a href="mailto:info@maasaiamazingsafaris.com" className="text-[#f88518] hover:underline">
                info@maasaiamazingsafaris.com
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [tourName, setTourName] = useState("")

  const openBooking = useCallback((name?: string) => {
    setTourName(name || "")
    setIsOpen(true)
  }, [])

  const closeBooking = useCallback(() => {
    setIsOpen(false)
    setTourName("")
  }, [])

  return (
    <BookingContext.Provider value={{ openBooking, closeBooking }}>
      {children}
      {isOpen && <BookingModal tourName={tourName} onClose={closeBooking} />}
    </BookingContext.Provider>
  )
}
