import { useEffect, useRef, useState } from "react"
import { Heart, Users, Apple, Flower2, PawPrint, Stethoscope, Building2 } from "lucide-react"

// Counter component with animation
function CounterStat({ value, label, icon: Icon, delay = 0 }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

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
      className="group p-8 rounded-2xl bg-gradient-to-br from-white to-blue-50 border-2 border-blue-200 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-center"
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      <div className="mb-4 inline-block p-4 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300">
        <Icon className="w-8 h-8 text-primary" />
      </div>
      <p className="text-4xl md:text-5xl font-bold text-primary mb-2">
        {count}
        {suffix}
      </p>
      <p className="text-sm md:text-base text-gray-600 font-semibold">{label}</p>
    </div>
  )
}

export default function ImpactSection() {
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

  const impactStats = [
    { label: "Lives Impacted", value: "50000+", icon: Heart },
    { label: "Health Camps", value: "150+", icon: Stethoscope },
    { label: "Free Surgery and Treatment", value: "10000+", icon: Building2 },
    { label: "Pads Distributed", value: "500000+", icon: Flower2 },
    { label: "Animals Treated", value: "2000+", icon: PawPrint },
    { label: "Years of Service", value: "15+", icon: Users },
  ]

  const additionalImpactStats = [
    { title: "Healthcare Support", description: "Providing financial assistance and medical treatments to underprivileged families", value: "10000+", icon: Heart },
    { title: "Nutrition Programs", description: "School meal programs and nutritional supplements for children in need", value: "1500+", icon: Apple },
    { title: "Community Empowerment", description: "Training, education, and skill development for sustainable growth", value: "2000+", icon: Users },
  ]

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-blue-50/30 to-background overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="mb-6 inline-block">
            <span className="px-6 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold">Our Achievement</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            <span className="bg-gradient-to-r from-primary via-blue-600 to-accent bg-clip-text text-transparent">
              Our Impact & Reach
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Transforming lives through healthcare, nutrition, and community empowerment across India.
          </p>
        </div>

        {/* Impact Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {impactStats.map((stat, index) => (
            <CounterStat key={index} value={stat.value} label={stat.label} icon={stat.icon} delay={index * 100} />
          ))}
        </div>

        {/* Additional Impact Info with Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {additionalImpactStats.map((item, index) => {
            const Icon = item.icon
            return (
              <CounterStat
                key={index}
                value={item.value}
                label={item.title}
                icon={Icon}
                delay={(index + 6) * 100}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}