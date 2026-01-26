"use client"

import { useState } from "react"

export function WhatsAppFloat() {
  const [isHovered, setIsHovered] = useState(false)

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/255784258765", "_blank")
  }

  return (
    <button
      onClick={handleWhatsAppClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 group"
      aria-label="Contact us on WhatsApp"
    >
      <div
        className={`
        relative w-16 h-16 md:w-20 md:h-20 
        bg-[#25D366] hover:bg-[#20BA5A] 
        rounded-full shadow-2xl 
        flex items-center justify-center 
        transition-all duration-300 ease-out
        ${isHovered ? "scale-110" : "scale-100"}
        hover:shadow-[0_10px_40px_rgba(37,211,102,0.4)]
      `}
      >
        {/* WhatsApp Icon */}
        <svg
          viewBox="0 0 32 32"
          className="w-10 h-10 md:w-12 md:h-12 text-white fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M27.281 4.65C24.318 1.688 20.373 0.045 16.175 0.043c-8.555 0-15.515 6.958-15.518 15.514a15.466 15.466 0 0 0 2.068 7.758L0 32l8.857-2.322a15.47 15.47 0 0 0 7.4 1.884h.007c8.552 0 15.515-6.958 15.518-15.515a15.429 15.429 0 0 0-4.501-10.387zm-11.106 23.88h-.006a12.9 12.9 0 0 1-6.567-1.797l-.47-.28-4.882 1.28 1.303-4.757-.308-.488a12.802 12.802 0 0 1-1.965-6.833c.002-7.058 5.754-12.808 12.817-12.808a12.73 12.73 0 0 1 9.062 3.758 12.723 12.723 0 0 1 3.742 9.07c-.003 7.059-5.755 12.81-12.816 12.81zm7.032-9.586c-.385-.193-2.28-1.124-2.633-1.253-.352-.128-.608-.192-.865.193-.256.385-1.002 1.253-1.228 1.51-.225.257-.451.289-.836.096-.385-.193-1.625-.599-3.095-1.91-1.144-1.019-1.916-2.277-2.141-2.662-.225-.386-.024-.595.17-.787.173-.173.385-.45.577-.674.192-.225.256-.385.385-.642.128-.257.064-.481-.032-.674-.097-.193-.865-2.083-1.185-2.853-.312-.749-.631-.649-.865-.661-.224-.011-.481-.013-.737-.013s-.674.097-1.026.481c-.353.386-1.348 1.317-1.348 3.21s1.38 3.722 1.572 3.979c.193.257 2.716 4.147 6.578 5.816.919.397 1.637.633 2.197.81.923.293 1.763.252 2.427.153.74-.11 2.28-.932 2.601-1.832.321-.9.321-1.673.225-1.832-.097-.16-.353-.257-.738-.45z" />
        </svg>

        {/* Pulse animation ring */}
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
      </div>

      {/* Tooltip */}
      <div
        className={`
        absolute right-full mr-4 top-1/2 -translate-y-1/2
        bg-gray-900 text-white text-sm font-medium
        px-4 py-2 rounded-lg whitespace-nowrap
        shadow-lg
        transition-all duration-200
        ${isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2 pointer-events-none"}
      `}
      >
        Chat with us on WhatsApp
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
          <div className="border-8 border-transparent border-l-gray-900" />
        </div>
      </div>
    </button>
  )
}

export default WhatsAppFloat
