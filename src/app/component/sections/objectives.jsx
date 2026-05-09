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
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const objectives = [
    {
      id: 1,
      icon: BookOpen,
      title: "Healthcare Education & Training",
      description:
        "Run institutes, counseling, and research centers to empower communities with healthcare knowledge.",
      fullText:
        "We promote healthcare education through institutes, counseling centers, research hubs, and distance learning programs.",
      image:
        "https://gpo7e0fz6e.ufs.sh/f/KD5H5HN5C4X1UDZZfIqxIpuSeNAPk0rfCdQMb5coYDzWKjHG",
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 2,
      icon: Scale,
      title: "Non-Commercial Operations",
      description:
        "All initiatives are non-profit, ensuring ethical and transparent community-driven operations.",
      fullText:
        "All activities are conducted on a non-commercial basis, prioritizing community welfare over profit.",
      image:
        "https://gpo7e0fz6e.ufs.sh/f/KD5H5HN5C4X1zURcGqHHgMqYZ59Azlx7LCTb0XhctyuB284i",
      color: "from-green-500 to-green-600",
    },
    {
      id: 3,
      icon: Users,
      title: "Workshops & Conferences",
      description:
        "Organize educational seminars, awareness workshops, and healthcare conferences nationwide.",
      fullText:
        "We conduct workshops, competitions, and conferences to promote community healthcare awareness.",
      image:
        "https://gpo7e0fz6e.ufs.sh/f/KD5H5HN5C4X1ADUDZp1gwqDHaUZoxjvt0Pp3SlXzWIEu5KcM",
      color: "from-purple-500 to-purple-600",
    },
    {
      id: 4,
      icon: Lightbulb,
      title: "Innovation & Incubation",
      description:
        "Support healthcare innovation and startups through incubation and development programs.",
      fullText:
        "We run training centers and incubation programs for healthcare software and hardware innovation.",
      image:
        "https://gpo7e0fz6e.ufs.sh/f/KD5H5HN5C4X1kHDXxLt8bewUh19xrpF6Oj5BYKNqfWGXu7di",
      color: "from-orange-500 to-orange-600",
    },
    {
      id: 5,
      icon: DollarSign,
      title: "Finance & Fundraising",
      description:
        "Ensure transparent fund management and responsible allocation for sustainable healthcare.",
      fullText:
        "We raise funds responsibly, manage financial resources, and ensure sustainable healthcare initiatives.",
      image:
        "https://gpo7e0fz6e.ufs.sh/f/KD5H5HN5C4X1iANspXPQbdyqkpvc84gVYh09nZofxL5UHrum",
      color: "from-red-500 to-red-600",
    },
    {
      id: 6,
      icon: Handshake,
      title: "Asset & Charity Management",
      description:
        "Manage properties and contributions to support educational and social welfare programs.",
      fullText:
        "We manage and allocate resources to charitable and welfare organizations responsibly.",
      image:
        "https://gpo7e0fz6e.ufs.sh/f/KD5H5HN5C4X1FKTMClisFNL9CoRPq7u85Uie2dpIvkzGhD0s",
      color: "from-pink-500 to-pink-600",
    },
    {
      id: 7,
      icon: Scale,
      title: "Dispute Resolution & Partnerships",
      description:
        "Collaborate with associations and resolve disputes to further our healthcare mission.",
      fullText:
        "We engage in partnerships and resolve member disputes through transparent dialogue.",
      image:
        "https://gpo7e0fz6e.ufs.sh/f/KD5H5HN5C4X1rDVKqrVGdfXEBVzuP5qpoHm3n4SY9lDcjT7e",
      color: "from-indigo-500 to-indigo-600",
    },
    {
      id: 8,
      icon: Building2,
      title: "PPP Model Implementation",
      description:
        "Partner with government bodies for healthcare projects under Aarogya Aadhar PPP model.",
      fullText:
        "We collaborate in PPP (Public-Private Partnership) models for government healthcare projects.",
      image:
        "https://gpo7e0fz6e.ufs.sh/f/KD5H5HN5C4X13Tqwp6LLhaCruXEyjZIixbvYnHSfoQedm2l0",
      color: "from-cyan-500 to-cyan-600",
    },
  ]

  return (
    <section
      id="objectives"
      ref={sectionRef}
      className="relative w-full scroll-mt-28 py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden"
    >
      {/* Decorative background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-24">
          <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary font-bold text-xs tracking-widest uppercase mb-6">
            Our Mission
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-foreground mb-6">
            Our 8 Core <span className="text-primary">Objectives</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        {/* Objectives Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {objectives.map((objective, index) => {
            const Icon = objective.icon
            return (
              <div
                key={objective.id}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-72"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <Image
                  src={objective.image}
                  alt={objective.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#003c3c]/90 via-[#003c3c]/40 to-transparent" />
                
                {/* Icon Badge */}
                <div className="absolute top-4 left-4 w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center border border-white/20">
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                    {objective.title}
                  </h3>
                  <p className="text-sm text-white/80 font-medium line-clamp-2 leading-relaxed">
                    {objective.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Detailed List Section */}
        <div className="bg-secondary rounded-[3rem] p-8 lg:p-16 border border-gray-100 shadow-sm mb-20">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-extrabold text-foreground mb-12 text-center">
              Strategic Focus & Operations
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {objectives.map((objective, index) => {
                const Icon = objective.icon
                return (
                  <div
                    key={objective.id}
                    className="flex items-start gap-5 p-6 rounded-2xl bg-white shadow-sm border border-gray-50 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-2">{objective.title}</h4>
                      <p className="text-sm text-muted-foreground font-medium leading-relaxed">{objective.fullText}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Impact Stats Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[ 
            { label: "Programs", value: "50+", icon: Stethoscope },
            { label: "Centers", value: "15+", icon: BookOpen },
            { label: "Communities", value: "100+", icon: Users },
            { label: "Lives", value: "50K+", icon: CheckCircle2 },
          ].map((stat, index) => {
            const StatIcon = stat.icon
            return (
              <div
                key={index}
                className="text-center space-y-3 p-6 rounded-3xl bg-white shadow-sm border border-gray-100 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mx-auto">
                  <StatIcon size={24} />
                </div>
                <div>
                  <p className="text-3xl font-black text-primary">{stat.value}</p>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{stat.label}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
