"use client"

import { useEffect, useRef, useState } from "react"
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, CheckCircle, AlertCircle } from "lucide-react"
import { toast } from "react-hot-toast"

export default function FooterSection() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

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
  
      // Show toast immediately
      toast.success(data.message || "Thank You! We Will Shortly Connect With You!")
  
      // Update button state temporarily
      setSubmitted(true)
      setFormData({ name: "", email: "", phone: "", message: "" })
  
      // Reset button text after 3 seconds
      setTimeout(() => setSubmitted(false), 3000)
  
    } catch (err) {
      setError(err.message || "Failed to send message. Please try again.")
      toast.error(err.message || "Failed to send message. Please try again.")
      console.error("Form submission error:", err)
    } finally {
      setLoading(false)
    }
  }
  
  

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-16 md:py-20 bg-gradient-to-b from-background to-muted overflow-hidden"> 
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Have questions or want to support our mission? We'd love to hear from you.
          </p>
        </div>

        {/* Contact Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Contact Info */}
          <div
            className={`transform transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
            <div className="space-y-6">
              {[
                {
                  icon: MapPin,
                  label: "Address",
                  value: "18 YASHWANT NAGAR RANGE H, FRONT OF BANK OF BARODA, Ganeshkhind, Pune, Haveli, Maharashtra, India, 411007 - 411007",
                },
                {
                  icon: Phone,
                  label: "Phone",
                  value: "+91 79-7272-7498",
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: "info@livofoundation.org",
                },
              ].map((item, i) => {
                const Icon = item.icon
                return (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-4 rounded-lg bg-white/50 hover:bg-white/80 transition-all duration-300 border border-blue-100"
                  >
                    <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 w-fit flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground font-semibold">{item.label}</p>
                      <p className="font-bold text-gray-900">{item.value}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Social Links */}
            <div className="mt-12">
              <h4 className="font-bold text-lg mb-4">Follow Us</h4>
              <div className="flex gap-4">
                {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                  <button
                    key={i}
                    className="p-4 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 transform"
                  >
                    <Icon size={24} />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className={`p-8 md:p-10 rounded-2xl bg-gradient-to-br from-white to-blue-50 border-2 border-blue-200 shadow-xl transform transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{
              transitionDelay: isVisible ? "100ms" : "0ms",
            }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Send us a Message</h3>

            {/* Success Message */}
            {submitted && (
              <div className="mb-6 p-4 rounded-lg bg-green-50 border border-green-200 flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <p className="text-green-800 font-semibold">Message sent successfully! We'll get back to you soon.</p>
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                <p className="text-red-800 font-semibold">{error}</p>
              </div>
            )}

            <div className="space-y-5">
              <div>
                <label className="block text-sm font-bold mb-2 text-gray-800">Full Name *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white border-2 border-blue-200 focus:border-primary focus:outline-none transition-all duration-300 font-medium placeholder-gray-400"
                  placeholder="Your full name"
                  required
                  disabled={loading}
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2 text-gray-800">Email Address *</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white border-2 border-blue-200 focus:border-primary focus:outline-none transition-all duration-300 font-medium placeholder-gray-400"
                  placeholder="your@email.com"
                  required
                  disabled={loading}
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2 text-gray-800">Phone Number *</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white border-2 border-blue-200 focus:border-primary focus:outline-none transition-all duration-300 font-medium placeholder-gray-400"
                  placeholder="+91 XXXXX XXXXX"
                  pattern="[0-9+\-\s]+"
                  required
                  disabled={loading}
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2 text-gray-800">Message *</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white border-2 border-blue-200 focus:border-primary focus:outline-none transition-all duration-300 font-medium resize-none placeholder-gray-400"
                  placeholder="Your message here..."
                  rows={4}
                  required
                  disabled={loading}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 bg-gradient-to-r from-primary to-blue-700 text-white rounded-lg font-bold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {loading ? "Sending..." : submitted ? "Message Sent Successfully!" : "Send Message"}
              </button>
            </div>
          </form>
        </div>

        {/* Footer Bottom */}
        <div className="border-t-2 border-blue-200 pt-8 text-center text-muted-foreground">
          <p className="font-semibold">
            &copy; 2025 LIVO Foundation. All rights reserved. | Transforming Lives Through Healthcare
          </p>
        </div>
      </div>
    </section>
  )
}