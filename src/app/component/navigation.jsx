"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export default function Navigation({ onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { id: "home", label: "Home" },
    { id: "impact", label: "Our Impact" },
    { id: "objectives", label: "Objectives" },
    { id: "services", label: "Services" },
    { id: "arrogyaDhan", label: "AarogyaDhan" },  // Add AarogyaDhan
    { id: "about", label: "About Us" },
    { id: "contact", label: "Contact Us" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollY = window.scrollY;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 60;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">

          <div className="flex-shrink-0 flex items-center gap-4">
            <div className="relative h-12 sm:h-14 w-auto flex items-center gap-4">
              <Image 
                src="https://gpo7e0fz6e.ufs.sh/f/KD5H5HN5C4X1mVOolZKrBAan0liRZoh25vKJT83XwkbFYQ7I" 
                alt="LIVO Foundation Logo" 
                width={120} 
                height={60} 
                className="h-full w-auto object-contain" 
                priority 
              />
              <div className="h-8 w-px bg-gray-200 hidden sm:block"></div>
              <Image 
                src="https://gpo7e0fz6e.ufs.sh/f/KD5H5HN5C4X1nXbvAYt2bOKkEz3IciJBo26URH89l1jLqugG" 
                alt="Aarogyadhan Logo" 
                width={100} 
                height={50} 
                className="h-4/5 w-auto object-contain" 
                priority 
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-4 py-2 text-[15px] font-semibold transition-all duration-300 relative group ${
                  activeSection === item.id
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {item.label}
                <span className={`absolute bottom-1 left-4 right-4 h-0.5 bg-primary transform transition-transform duration-300 ${
                  activeSection === item.id ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}></span>
              </button>
            ))}
            
            <button
              onClick={() => onNavigate("contact")}
              className="ml-4 px-6 py-2 bg-primary text-white rounded-full font-bold text-sm hover:bg-primary/90 transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              DONATE
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-4">
            <button
              onClick={() => onNavigate("contact")}
              className="px-4 py-1.5 bg-primary text-white rounded-full font-bold text-xs shadow-sm"
            >
              DONATE
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-foreground hover:bg-gray-100 rounded-lg transition"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-[500px] border-t border-gray-100" : "max-h-0"
        }`}>
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-3 text-[16px] font-semibold rounded-lg transition ${
                  activeSection === item.id
                    ? "bg-secondary text-primary"
                    : "text-foreground hover:bg-gray-50"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
