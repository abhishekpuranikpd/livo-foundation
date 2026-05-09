"use client"

import { useEffect, useRef, useState } from "react"
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  CheckCircle,
  AlertCircle,
} from "lucide-react"
import { toast } from "react-hot-toast"

export default function FooterSection() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const response = await fetch("/api/contact-us", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const data = await response.json().catch(() => ({}))
        throw new Error(data.error || "Failed to send message")
      }

      const data = await response.json()
      toast.success(data.message || "Thank You! We will contact you soon!")
      setSubmitted(true)
      setFormData({ name: "", email: "", phone: "", message: "" })
      setTimeout(() => setSubmitted(false), 3000)
    } catch (err) {
      setError(err.message || "Failed to send message. Please try again.")
      toast.error(err.message || "Failed to send message.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <footer
      ref={sectionRef}
      id="contact"
      className="relative w-full py-20 lg:py-32 bg-[#003c3c] text-white overflow-hidden"
    >
      {/* Decorative background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          {/* Left Side: Info & Mission */}
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="inline-block px-4 py-1.5 bg-accent/10 rounded-full text-accent font-bold text-xs tracking-widest uppercase mb-4">
                Get In Touch
              </div>
              <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight">
                Let's Build a <br />
                <span className="text-accent">Healthier Future</span> Together
              </h2>
              <p className="text-lg text-white/70 max-w-md font-medium leading-relaxed">
                Join us in our mission to transform lives through accessible healthcare and community empowerment across India.
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  icon: MapPin,
                  label: "Registered Office",
                  value: "18, Yashwant Nagar, Range Hill Road, Shivajinagar, Pune, Maharashtra - 411007",
                },
                { icon: Phone, label: "Phone", value: "+91 9145078001" },
                { icon: Mail, label: "Email", value: "livofoundation@gmail.com" },
              ].map((item, i) => {
                const Icon = item.icon
                return (
                  <div key={i} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-accent uppercase tracking-widest mb-1">{item.label}</p>
                      <p className="text-lg font-semibold text-white/90">{item.value}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="space-y-4 pt-8 border-t border-white/10">
              <p className="text-sm font-bold uppercase tracking-widest text-white/50">Follow Our Impact</p>
              <div className="flex gap-4">
                {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                  <button
                    key={i}
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-all duration-300 transform hover:scale-110"
                  >
                    <Icon size={18} />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form Card */}
          <div className="relative">
            <div className="bg-white rounded-[2.5rem] p-8 lg:p-12 shadow-2xl text-foreground relative z-10">
              <h3 className="text-3xl font-extrabold mb-8">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">Full Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      placeholder="John Doe"
                      className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-primary focus:bg-white focus:outline-none transition-all font-medium"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">Email Address</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      placeholder="john@example.com"
                      className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-primary focus:bg-white focus:outline-none transition-all font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">Phone Number</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-primary focus:bg-white focus:outline-none transition-all font-medium"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={4}
                    placeholder="Tell us how we can help..."
                    className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-primary focus:bg-white focus:outline-none transition-all font-medium resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-5 bg-primary text-white rounded-2xl font-bold text-lg hover:bg-primary/90 transition-all shadow-xl hover:shadow-primary/30 disabled:opacity-50 active:scale-95"
                >
                  {loading ? "SENDING..." : "SUBMIT MESSAGE"}
                </button>
              </form>
            </div>
            {/* Decorative dots for card */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-2xl z-0" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl z-0" />
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-20 lg:mt-32 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-medium text-white/40">
          <p>© 2018 LIVO Foundation. All rights reserved.</p>
          <div className="flex gap-8">
            <button className="hover:text-accent transition-colors">Privacy Policy</button>
            <button className="hover:text-accent transition-colors">Terms of Use</button>
            <button className="hover:text-accent transition-colors">Sitemap</button>
          </div>
        </div>
      </div>
    </footer>
  )
}
