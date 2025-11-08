"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export default function Navigation({ onNavigate }) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  const navItems = [
    { id: "home", label: "Home" },
    { id: "impact", label: "Our Impact" },
    { id: "objectives", label: "Objectives" },
    { id: "services", label: "Services" },
    { id: "about", label: "About Us" },
    { id: "contact", label: "Contact Us" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = Array.from(document.querySelectorAll("section[id]"))
      const scrollY = window.scrollY

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 60
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute("id")

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // ... existing code ...

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Image
              src="https://gpo7e0fz6e.ufs.sh/f/KD5H5HN5C4X1mVOolZKrBAan0liRZoh25vKJT83XwkbFYQ7I"
              alt="Company Logo"
              width={150}
              height={100}
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-3"> {/* Reduced gap */}
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-4 py-2 rounded-lg text-sm md:text-base font-semibold ${
                  activeSection === item.id ? "bg-blue-600 text-white" : "text-gray-800"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-700"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden space-y-1 bg-white"> {/* Reduced space-y */}
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id)
                  setIsOpen(false)
                }}
                className={`w-full text-left px-4 py-2 font-semibold ${
                  activeSection === item.id ? "bg-blue-600 text-white" : "text-gray-800"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}