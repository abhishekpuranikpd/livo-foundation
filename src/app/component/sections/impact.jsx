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
      className="group flex flex-col items-center text-center p-6 transition-all duration-500"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="mb-6 relative">
        {/* Circular Icon Container */}
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white shadow-lg flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-500 border border-gray-100">
          <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-primary group-hover:text-accent transition-colors duration-500" />
        </div>
        {/* Animated Background Ring */}
        <div className="absolute inset-0 rounded-full bg-primary/5 group-hover:bg-accent/10 scale-125 transition-all duration-500 blur-sm"></div>
      </div>
      
      <div className="space-y-1">
        <p className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
          {count}{suffix}
        </p>
        <p className="text-xs sm:text-sm text-muted-foreground font-bold uppercase tracking-wider">
          {label}
        </p>
      </div>
    </div>
  )
}

export default function ImpactSection() {
  const sectionRef = useRef(null)

  const impactStats = [
    { label: "Lives Impacted", value: "10M+", icon: Heart },
    { label: "Health Camps", value: "150+", icon: Stethoscope },
    { label: "Free Surgeries", value: "10K+", icon: Building2 },
    { label: "Pads Distributed", value: "500K+", icon: Flower2 },
    { label: "Animals Treated", value: "1K+", icon: PawPrint },
    { label: "Years of Service", value: "6+", icon: Users },
  ]

  return (
    <section
      ref={sectionRef}
      id="impact"
      className="relative w-full py-20 lg:py-32 px-4 bg-background overflow-hidden"
    >
      {/* Decorative background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-black/[0.02] select-none pointer-events-none whitespace-nowrap">
        OUR IMPACT
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-24">
          <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary font-bold text-xs tracking-widest uppercase mb-4">
            Our Footprint
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-foreground mb-6">
            Impact <span className="text-primary">Every Day</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        {/* Impact Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-4">
          {impactStats.map((stat, index) => (
            <CounterStat key={index} {...stat} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  )
}
