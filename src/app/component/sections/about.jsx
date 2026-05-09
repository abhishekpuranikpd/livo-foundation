"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export default function AboutSection() {
  const sectionRef = useRef(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const aboutImages = [
    {
      src: "https://gpo7e0fz6e.ufs.sh/f/KD5H5HN5C4X1AApJyL1gwqDHaUZoxjvt0Pp3SlXzWIEu5KcM",
      alt: "LIVO Foundation community helping families",
    },
    {
      src: "https://gpo7e0fz6e.ufs.sh/f/KD5H5HN5C4X1yKT5BO9eiIqaF14h2AbxfXHVZCszLRlGNYM9",
      alt: "Healthcare support for underprivileged communities",
    },
    {
      src: "https://gpo7e0fz6e.ufs.sh/f/KD5H5HN5C4X1W5HEbwVD2yPs87SXI5m3YxQcAjEthpzqnHog",
      alt: "Medical treatment and healthcare services",
    },
    {
      src: "https://gpo7e0fz6e.ufs.sh/f/KD5H5HN5C4X1AApJyL1gwqDHaUZoxjvt0Pp3SlXzWIEu5KcM",
      alt: "Community health camps and medical checkups",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add("animate-in")
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % aboutImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [aboutImages.length])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative w-full scroll-mt-28 py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-secondary overflow-hidden"
    >
      {/* Decorative background accents */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Visual Side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
              {aboutImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    index === currentImageIndex ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transform hover:scale-105 transition-transform duration-700"
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>
            {/* Floating Achievement Badge */}
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-3xl shadow-xl border border-gray-100 hidden sm:block animate-float">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-accent font-bold text-xl">6+</span>
                </div>
                <div>
                  <p className="text-sm font-extrabold text-foreground">YEARS OF</p>
                  <p className="text-xs text-muted-foreground font-bold uppercase tracking-wider">dedication</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8 order-1 lg:order-2">
            <div>
              <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary font-bold text-xs tracking-widest uppercase mb-6">
                About Our Journey
              </div>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-foreground mb-8 leading-tight">
                Empowering <span className="text-primary">India</span> Through Care & Compassion
              </h2>
              <div className="w-20 h-1 bg-accent rounded-full mb-8"></div>
            </div>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed font-medium">
              <p>
                LIVO Foundation is a non-profit organization dedicated to ensuring that healthcare is not a privilege but a fundamental right for every citizen.
              </p>
              <p>
                We bridge the gap in healthcare disparities by providing medical support, nutrition programs, and hygiene initiatives to marginalized communities across the nation.
              </p>
            </div>

            {/* Core Values / Stats */}
            <div className="grid grid-cols-2 gap-6 py-4">
              <div className="p-4 rounded-2xl bg-white shadow-sm border border-gray-100">
                <h4 className="text-primary font-extrabold text-xl mb-1">Our Vision</h4>
                <p className="text-sm text-muted-foreground font-medium">Sustainable healthcare for all underserved communities.</p>
              </div>
              <div className="p-4 rounded-2xl bg-white shadow-sm border border-gray-100">
                <h4 className="text-accent font-extrabold text-xl mb-1">Our Mission</h4>
                <p className="text-sm text-muted-foreground font-medium">Providing dignity through health and empowerment.</p>
              </div>
            </div>

            <div className="pt-4">
              <button
                className="px-8 py-3.5 bg-primary text-white rounded-full font-bold hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/40 active:scale-95"
              >
                KNOW MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
