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

  const team = [
    {
      name: "Shubham Gadge",
      role: "Founder",
      image: "https://gpo7e0fz6e.ufs.sh/f/KD5H5HN5C4X1WJb8EiVD2yPs87SXI5m3YxQcAjEthpzqnHog",
      bio: "With 2 years in corporate governance, Shubham leads LIVO Foundation’s strategic vision, ensuring impactful healthcare and social initiatives for underserved communities.",
    },
    {
      name: "Sanjay Pandurang Pandhare",
      role: "Co-Founder",
      image: "https://gpo7e0fz6e.ufs.sh/f/KD5H5HN5C4X1aYHv0hQzBWD2uisjVdTx7nU9FG30oAXm6C8O",
      bio: "With over 9 years of experience in corporate leadership, Sanjay drives sustainable healthcare models and ethical management practices across multiple ventures.",
    },
  ]

  return (
<section
  ref={sectionRef}
  id="about"
  className="relative w-full scroll-mt-32 py-10 md:py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-blue-50/20 to-background overflow-hidden"
>

      {/* Soft background orbs */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="px-5 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            Who We Are
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-4 bg-gradient-to-r from-primary via-blue-600 to-accent bg-clip-text text-transparent">
            About LIVO Foundation
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A non-profit organization transforming healthcare access, nutrition, and dignity for underprivileged communities across India.
          </p>
        </div>

        {/* About Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          {/* Text */}
          <div className="space-y-6">
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              LIVO Foundation works to ensure healthcare is not a privilege but a right. We empower marginalized communities through medical support, nutrition programs, and dignity-driven social initiatives.
            </p>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Our mission is to build a compassionate ecosystem that bridges healthcare disparities and creates sustainable impact across rural and urban areas.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="flex flex-col items-center justify-center p-4 h-32 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl border border-primary/20 shadow-sm">
                <p className="text-3xl font-bold text-primary">50,000+</p>
                <p className="text-sm text-gray-700 mt-1 font-medium text-center">
                  Lives Impacted
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-4 h-32 bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl border border-accent/20 shadow-sm">
                <p className="text-3xl font-bold text-accent">15+</p>
                <p className="text-sm text-gray-700 mt-1 font-medium text-center">
                  Years of Service
                </p>
              </div>
            </div>
          </div>

          {/* Image Slideshow */}
          <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-xl border border-blue-100">
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
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
        </div>

        {/* ✅ Team Section */}
        <div className="mt-14 flex flex-col items-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Meet Our Dedicated Team
            </span>
          </h3>

        
          <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 justify-center">
            {team.map((member, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-blue-100 hover:border-primary/50"
              >
<div className="relative w-full h-72 bg-gray-100">
  <Image
    src={member.image}
    alt={member.name}
    fill
    className="object-contain p-0.5 transition-transform duration-500 group-hover:scale-105"
  />
</div>


                <div className="p-4 text-center">
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h4>
                  <p className="text-sm text-primary font-bold mb-2">{member.role}</p>
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-4">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
