"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Heart, Users, Apple, Flower2, PawPrint, Stethoscope } from "lucide-react"

export default function ServicesSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in")
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      id: 1,
      title: "Healthcare Financial Support",
      description:
        "Providing financial assistance for medical treatments and emergency healthcare needs to underprivileged families.",
      icon: Heart,
      image: "/healthcare.png",
      stats: [
        { label: "Families Helped", value: "5000+" },
        { label: "Medical Cases", value: "8000+" },
        { label: "Amount Distributed", value: "₹2Cr+" },
      ],
    },
    {
      id: 2,
      title: "Healthcare CSR Activities",
      description:
        "Community health camps, awareness programs, and partnerships with healthcare providers for preventive care.",
      icon: Users,
      image: "/community-health-camp-medical-checkup-poor-people-.jpg",
      stats: [
        { label: "Health Camps", value: "150+" },
        { label: "People Screened", value: "50000+" },
        { label: "Awareness Programs", value: "200+" },
      ],
    },
    {
      id: 3,
      title: "Nutrition Program",
      description:
        "School meal programs, nutritional supplements, and organic farming initiatives to combat malnutrition.",
      icon: Apple,
      image: "/children-eating-nutritious-meal-school-poor-commun.jpg",
      stats: [
        { label: "Children Fed Daily", value: "10000+" },
        { label: "Schools Covered", value: "100+" },
        { label: "Nutrition Kits", value: "50000+" },
      ],
    },
    {
      id: 4,
      title: "AarogyaPado (Female Hygiene - Sanitary Pad)",
      description:
        "Providing sanitary pads and hygiene education to empower girls and women in underserved communities.",
      icon: Flower2,
      image: "/sanitaryprogram.jpg",
      stats: [
        { label: "Girls Supported", value: "15000+" },
        { label: "Pads Distributed", value: "500000+" },
        { label: "Awareness Sessions", value: "300+" },
      ],
    },
    {
      id: 5,
      title: "Animal Health",
      description:
        "Offering veterinary health care services to ensure the well-being of animals in our communities.",
      icon: PawPrint,
      image: "/animalservice.png",
      stats: [
        { label: "Animals Treated", value: "2000+" },
        { label: "Centers", value: "15+" },
        { label: "Health Camps", value: "50+" },
      ],
    },
    {
      id: 6,
      title: "Healthcare Services (*)",
      description:
        "Providing a wide range of healthcare services with applicable terms and conditions.",
      icon: Stethoscope,
      image: "/healthcareservices.jpg",
      stats: [
        { label: "Services Offered", value: "100+" },
        { label: "Clinics", value: "25+" },
        { label: "Professional Staff", value: "300+" },
      ],
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-blue-50/30 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            <span className="bg-gradient-to-r from-primary via-blue-600 to-accent bg-clip-text text-transparent">
              Our Services & Programs
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Comprehensive initiatives designed to transform lives and build healthier, more dignified communities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100 hover:border-primary/50 animate-in fade-in slide-in-from-bottom-4"
              >
                {/* Image */}
                <div className="relative h-72 overflow-hidden bg-gradient-to-br from-blue-100 to-blue-50">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    layout="fill"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-4 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl">
                      <Icon className="text-primary" size={28} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                  </div>

                  <p className="text-gray-600 mb-8 leading-relaxed">{service.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}