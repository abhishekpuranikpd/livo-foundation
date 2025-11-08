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
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in")
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % aboutImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [aboutImages.length])

  const team = [
    {
      name: "DShubham Gadge",
      role: "Founder",
      image: "https://gpo7e0fz6e.ufs.sh/f/KD5H5HN5C4X1WJb8EiVD2yPs87SXI5m3YxQcAjEthpzqnHog",
      bio: "Shubham Rajendra Gadge has 2 years in corporate governance. Holds Director and Individual Subscriber roles. Currently with 3 companies, including Livo Foundation and Livo Aarogyaaadhar Private Limited. Engaged in General Business. Contributes to corporate operations.",
    },
    {
      name: "Sanjay Pandurang Pandhare",
      role: "Founder",
      image: "https://gpo7e0fz6e.ufs.sh/f/KD5H5HN5C4X1aYHv0hQzBWD2uisjVdTx7nU9FG30oAXm6C8O",
      bio: "Sanjay Pandurang Pandhare has 9 years in corporate governance. Holds Additional Director and Director roles. Currently with 10 companies, including Nysargik Krishi Farm Producer Company Limited and Kadlag Farmers Producer Company Limited. Formerly with 2 companies, such as Bahiratpatil Industries Private Limited and Kisanvishwa Farmers Producer Company Limited. Engaged in General Business.",
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="w-full py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-blue-50/30"
    >
      <div className="max-w-7xl mx-auto">
        {/* About LIVO */}
        <div className="mb-12">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 text-balance">
            <span className="bg-gradient-to-r from-primary via-blue-600 to-accent bg-clip-text text-transparent">
              About LIVO Foundation
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed font-medium">
                LIVO Foundation is a non-profit organization dedicated to transforming the lives of underprivileged communities through comprehensive healthcare support, nutrition programs, and dignity initiatives.
              </p>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed font-medium">
                Founded with a vision to bridge the healthcare gap in rural and urban poor communities, we work tirelessly to ensure that every individual has access to quality healthcare, proper nutrition, and basic dignity.
              </p>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed font-medium">
                Our mission is to create a healthier, more equitable society where financial constraints do not prevent anyone from receiving essential healthcare and support.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-8">
                <div className="flex flex-col items-center justify-center p-4 h-32 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl border border-primary/20">
                  <p className="text-3xl md:text-4xl font-bold text-primary">50000+</p>
                  <p className="text-xs md:text-sm lg:text-base text-gray-600 mt-2 font-semibold text-center">Lives Impacted</p>
                </div>
                <div className="flex flex-col items-center justify-center p-4 h-32 bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl border border-accent/20">
                  <p className="text-3xl md:text-4xl font-bold text-accent">15+</p>
                  <p className="text-xs md:text-sm lg:text-base text-gray-600 mt-2 font-semibold text-center">Years of Service</p>
                </div>
              </div>
            </div>

            <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-blue-100">
              <div className="relative w-full h-full">
                {aboutImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? "opacity-100" : "opacity-0"}`}
                  >
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  </div>
                ))}
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={() => setCurrentImageIndex((prev) => (prev - 1 + aboutImages.length) % aboutImages.length)}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full transition-all duration-300 backdrop-blur-sm"
                aria-label="Previous image"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={() => setCurrentImageIndex((prev) => (prev + 1) % aboutImages.length)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full transition-all duration-300 backdrop-blur-sm"
                aria-label="Next image"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h3 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Meet Our Dedicated Team
            </span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
            {team.map((member, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100 hover:border-primary/50 animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] md:aspect-[3/3] overflow-hidden bg-gradient-to-br from-blue-100 to-blue-50 rounded-t-2xl">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h4>
                  <p className="text-sm text-primary font-bold mb-4">{member.role}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}