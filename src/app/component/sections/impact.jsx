import { useEffect, useRef, useState } from "react"
import { Heart, Users, Apple, Flower2, PawPrint, Stethoscope, Building2 } from "lucide-react"

function CounterStat({ value, label, icon: Icon, delay = 0 }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !isVisible) setIsVisible(true)
    }, { threshold: 0.1 })

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return
    const numericValue = Number.parseInt(value.replace(/\D/g, ""))
    const duration = 2000
    const steps = 60
    const stepValue = numericValue / steps
    let currentStep = 0
    const timer = setInterval(() => {
      currentStep++
      setCount(Math.floor(stepValue * currentStep))
      if (currentStep >= steps) {
        setCount(numericValue)
        clearInterval(timer)
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [isVisible, value])

  const suffix = value.replace(/\d/g, "")

  return (
    <div
      ref={ref}
      className="group p-6 rounded-xl bg-gradient-to-br from-white to-blue-50 border border-blue-200 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="mb-3 inline-block p-3 rounded-lg bg-gradient-to-br from-primary/15 to-primary/10 group-hover:from-primary/25 group-hover:to-primary/15 transition-all duration-300">
        <Icon className="w-7 h-7 text-primary" />
      </div>
      <p className="text-3xl md:text-4xl font-bold text-primary mb-1">
        {count}{suffix}
      </p>
      <p className="text-sm md:text-base text-gray-600 font-semibold">{label}</p>
    </div>
  )
}

export default function ImpactSection() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true)
    }, { threshold: 0.1 })
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const impactStats = [
    { label: "Lives Impacted", value: "50000+", icon: Heart },
    { label: "Health Camps", value: "150+", icon: Stethoscope },
    { label: "Free Surgery and Treatment", value: "10000+", icon: Building2 },
    { label: "Pads Distributed", value: "500000+", icon: Flower2 },
    { label: "Animals Treated", value: "2000+", icon: PawPrint },
    { label: "Years of Service", value: "15+", icon: Users },
  ]

  const additionalImpactStats = [
    { title: "Healthcare Support", value: "10000+", icon: Heart },
    { title: "Nutrition Programs", value: "1500+", icon: Apple },
    { title: "Community Empowerment", value: "2000+", icon: Users },
  ]

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-blue-50/30 to-background overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="px-5 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold">
            Our Achievement
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-3 bg-gradient-to-r from-primary via-blue-600 to-accent bg-clip-text text-transparent">
            Our Impact & Reach
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transforming lives through healthcare, nutrition, and community empowerment across India.
          </p>
        </div>

        {/* Main Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {impactStats.map((stat, index) => (
            <CounterStat
              key={index}
              value={stat.value}
              label={stat.label}
              icon={stat.icon}
              delay={index * 100}
            />
          ))}
        </div>

        {/* Additional Stats */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {additionalImpactStats.map((item, index) => (
            <CounterStat
              key={index}
              value={item.value}
              label={item.title}
              icon={item.icon}
              delay={(index + 6) * 100}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
