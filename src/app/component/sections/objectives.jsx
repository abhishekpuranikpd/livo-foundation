"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import {
  CheckCircle2,
  BookOpen,
  Stethoscope,
  Users,
  Lightbulb,
  DollarSign,
  Handshake,
  Scale,
  Building2,
} from "lucide-react"

export default function ObjectivesSection() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const objectives = [
    {
      id: 1,
      icon: BookOpen,
      title: "Healthcare Education & Training",
      description:
        "Establish and run healthcare training institutes, counseling centers, skill development programs, and educational research centers to empower communities with healthcare knowledge.",
      fullText:
        "We promote healthcare education through institutes, counseling centers, healthcare skill development programs, educational research centers, online education, and distance learning courses.",
      image: "https://gpo7e0fz6e.ufs.sh/f/KD5H5HN5C4X1UDZZfIqxIpuSeNAPk0rfCdQMb5coYDzWKjHG",
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 2,
      icon: Scale,
      title: "Non-Commercial & Authorized Operations",
      description:
        "All activities are conducted on a non-profit basis with proper permissions from competent authorities, ensuring ethical and transparent operations.",
      fullText:
        "No objects of the Company shall be carried out without permission of competent authorities. All activities are conducted on a non-commercial basis, prioritizing community welfare over profit.",
      image: "https://gpo7e0fz6e.ufs.sh/f/KD5H5HN5C4X1zURcGqHHgMqYZ59Azlx7LCTb0XhctyuB284i",
      color: "from-green-500 to-green-600",
    },
    {
      id: 3,
      icon: Users,
      title: "Seminars, Workshops & Conferences",
      description:
        "Organize educational seminars, workshops, elocution competitions, and conferences to promote healthcare awareness and knowledge sharing.",
      fullText:
        "We conduct various seminars, workshops, elocution competitions, and conferences in furtherance of our main objectives to educate and empower communities.",
      image: "/healthcare-awareness-campaign-community.jpg",
      color: "from-purple-500 to-purple-600",
    },
    {
      id: 4,
      icon: Lightbulb,
      title: "Healthcare Innovation & Incubation",
      description:
        "Run training centers and incubation programs for healthcare innovations, new projects, and development of healthcare software and hardware solutions.",
      fullText:
        "We conduct programs and run centers for providing training for healthcare innovations and incubation centers for all types of healthcare projects.",
      image: "https://gpo7e0fz6e.ufs.sh/f/KD5H5HN5C4X1kHDXxLt8bewUh19xrpF6Oj5BYKNqfWGXu7di",
      color: "from-orange-500 to-orange-600",
    },
    {
      id: 5,
      icon: DollarSign,
      title: "Financial Management & Fundraising",
      description:
        "Raise funds, manage finances responsibly, and ensure proper allocation of resources for sustainable healthcare initiatives.",
      fullText:
        "We raise funds or borrow with or without security in line with objectives and repay the same. We deposit in banks and manage company funds responsibly.",
      image: "https://gpo7e0fz6e.ufs.sh/f/KD5H5HN5C4X1iANspXPQbdyqkpvc84gVYh09nZofxL5UHrum",
      color: "from-red-500 to-red-600",
    },
    {
      id: 6,
      icon: Handshake,
      title: "Asset Management & Charitable Contributions",
      description:
        "Manage properties and funds through sales, leases, loans, and charitable contributions to support educational and social welfare institutions.",
      fullText:
        "We alienate properties or funds through sale, lease, loan, charge, mortgage, or gift to charitable institutions and social welfare bodies as deemed necessary.",
      image: "https://gpo7e0fz6e.ufs.sh/f/KD5H5HN5C4X1FKTMClisFNL9CoRPq7u85Uie2dpIvkzGhD0s",
      color: "from-pink-500 to-pink-600",
    },
    {
      id: 7,
      icon: Scale,
      title: "Dispute Resolution & Partnerships",
      description:
        "Settle disputes between members and enter into agreements with other associations for advancing our healthcare mission.",
      fullText:
        "We settle disputes and controversies between members and enter into agreements with other associations and bodies for advancement of our objectives.",
      image: "https://gpo7e0fz6e.ufs.sh/f/KD5H5HN5C4X1rDVKqrVGdfXEBVzuP5qpoHm3n4SY9lDcjT7e",
      color: "from-indigo-500 to-indigo-600",
    },
    {
      id: 8,
      icon: Building2,
      title: "PPP Model for Government Healthcare Projects",
      description:
        "Implement Public-Private Partnership models for government healthcare projects through Aarogya Aadhar initiative.",
      fullText:
        "We implement PPP (Public-Private Partnership) models for government and upcoming healthcare projects by Aarogya Aadhar to maximize impact and reach.",
      image: "https://gpo7e0fz6e.ufs.sh/f/KD5H5HN5C4X13Tqwp6LLhaCruXEyjZIixbvYnHSfoQedm2l0",
      color: "from-cyan-500 to-cyan-600",
    },
  ]

  return (
    <section
      id="objectives"
      ref={sectionRef}
      className="relative w-full py-4 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-blue-50/20 to-background overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="mb-6 inline-block">
            <span className="px-6 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold">
              Our Foundation
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            <span className="bg-gradient-to-r from-primary via-blue-600 to-accent bg-clip-text text-transparent">
              8 Core Objectives & Mission
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Comprehensive initiatives designed to transform lives through healthcare, education, and community
            empowerment across India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {objectives.map((objective, index) => {
            const Icon = objective.icon
            return (
              <div
                key={objective.id}
                className={`group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-blue-100 hover:border-primary/50 transform h-96 cursor-pointer ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 80}ms` : "0ms",
                }}
              >
                {/* Image Container with Motion Effect */}
                <div className="relative h-full overflow-hidden bg-gradient-to-br from-blue-100 to-blue-50">
                  <Image
                    src={objective.image || "/placeholder.svg"}
                    alt={objective.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  {/* Animated Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/60 transition-all duration-500" />

                  {/* Icon Badge */}
                  <div
                    className={`absolute top-4 right-4 p-3 rounded-lg bg-gradient-to-br ${objective.color} shadow-lg transform group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <h3 className="text-xl font-bold mb-2 group-hover:translate-y-0 transition-transform duration-300">
                    {objective.title}
                  </h3>
                  <p className="text-sm text-white/90 leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                    {objective.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-8 md:p-12 border border-blue-200 shadow-lg mb-20">
          <h3 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 text-center">
            Detailed Objectives Overview
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {objectives.map((objective, index) => {
              const Icon = objective.icon
              return (
                <div
                  key={objective.id}
                  className={`flex items-start gap-4 p-4 rounded-xl bg-white border border-blue-200 hover:border-primary/50 hover:shadow-lg transition-all duration-300 transform ${
                    isVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
                  }`}
                  style={{
                    transitionDelay: isVisible ? `${index * 60}ms` : "0ms",
                  }}
                >
                  <div className={`flex-shrink-0 p-2 rounded-lg bg-gradient-to-br ${objective.color} shadow-md`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">{objective.title}</h4>
                    <p className="text-sm text-gray-700 leading-relaxed">{objective.fullText}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Healthcare Programs", value: "50+", icon: Stethoscope },
            { label: "Training Centers", value: "15+", icon: BookOpen },
            { label: "Communities Served", value: "100+", icon: Users },
            { label: "Lives Transformed", value: "50000+", icon: CheckCircle2 },
          ].map((stat, index) => {
            const StatIcon = stat.icon
            return (
              <div
                key={index}
                className={`p-6 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 text-center transform transition-all duration-500 hover:shadow-lg hover:scale-105 ${
                  isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
                }`}
                style={{
                  transitionDelay: isVisible ? `${(index + 8) * 100}ms` : "0ms",
                }}
              >
                <StatIcon className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-3xl md:text-4xl font-bold text-primary mb-3">{stat.value}</p>
                <p className="text-sm text-gray-600 font-semibold">{stat.label}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}