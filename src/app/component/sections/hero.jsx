import { useEffect, useRef, useState } from "react"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function HeroSection({ onExplore }) {
  const canvasRef = useRef(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const imageContainerRef = useRef(null)

  const backgroundImages = [
    "https://gpo7e0fz6e.ufs.sh/f/KD5H5HN5C4X1HhY8finaF68vfqDZSxUEheygkXYHG712CTcK",
    "https://gpo7e0fz6e.ufs.sh/f/KD5H5HN5C4X1jLwMKBIC841JQ6Ddji39PXqBzFstvphywkWL",
    "https://gpo7e0fz6e.ufs.sh/f/KD5H5HN5C4X1I67RQIUJusUjvRqmlx7ZdoQ3NEGwbSC5kKt2",
    "https://gpo7e0fz6e.ufs.sh/f/KD5H5HN5C4X1cE6EArz4xbNSaOjAwTldgE5B2LRskJuoQhGI",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [backgroundImages.length])

  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background images slider */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image}
              alt={`LIVO Foundation Impact ${index + 1}`}
              fill
              className="object-cover scale-105 animate-pulse-slow"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#003c3c]/60 via-[#003c3c]/30 to-transparent z-10" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 text-white">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/20 border border-accent/30 rounded-full text-accent font-bold text-xs sm:text-sm tracking-widest uppercase animate-fade-in">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
            Transforming Lives
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.1] drop-shadow-lg">
            We Care for <br />
            <span className="text-accent">Better India</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/90 max-w-2xl font-medium leading-relaxed drop-shadow-md">
            Delivering accessible healthcare, nutrition, and empowerment to underserved communities across India — one life at a time.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button
              onClick={onExplore}
              className="group px-8 py-3.5 bg-primary text-white rounded-full font-bold hover:bg-primary/90 transition-all duration-300 flex items-center gap-2 shadow-xl hover:shadow-primary/40 active:scale-95"
            >
              OUR MISSION
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3.5 bg-white/10 border border-white/30 text-white rounded-full font-bold hover:bg-white/20 transition-all duration-300"
            >
              CONTACT US
            </button>
          </div>
        </div>

        {/* Navigation Dots - Bottom Right */}
        <div className="absolute bottom-12 left-6 sm:left-12 lg:left-20 flex gap-3 z-30">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                index === currentImageIndex
                  ? "w-12 bg-accent"
                  : "w-6 bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Decorative side element */}
      <div className="absolute right-0 bottom-0 w-1/3 h-full bg-gradient-to-l from-black/20 to-transparent pointer-events-none z-10 hidden lg:block" />
    </section>
  )
}
