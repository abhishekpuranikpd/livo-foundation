"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import {
  Heart,
  Users,
  Apple,
  Flower2,
  PawPrint,
  Stethoscope,
} from "lucide-react";

export default function ServicesSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add("animate-in");
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const services = [
    {
      id: 1,
      title: "Healthcare Financial Support",
      description:
        "Offering financial assistance for emergency treatments and medical care to underprivileged families.",
      icon: Heart,
      image: "/healthcare.png",
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 2,
      title: "Healthcare CSR Activities",
      description:
        "Organizing community health camps, awareness drives, and preventive healthcare programs.",
      icon: Users,
      image: "/community-health-camp-medical-checkup-poor-people-.jpg",
      color: "from-green-500 to-green-600",
    },
    {
      id: 3,
      title: "Nutrition Program",
      description:
        "Implementing school meal and nutrition support programs to fight malnutrition.",
      icon: Apple,
      image: "/children-eating-nutritious-meal-school-poor-commun.jpg",
      color: "from-orange-500 to-orange-600",
    },
    {
      id: 4,
      title: "AarogyaPado (Female Hygiene)",
      description:
        "Distributing sanitary pads and conducting hygiene education to empower young girls and women.",
      icon: Flower2,
      image: "/sanitaryprogram.jpg",
      color: "from-pink-500 to-pink-600",
    },
    {
      id: 5,
      title: "Animal Health",
      description:
        "Delivering veterinary health care and welfare services for community animals.",
      icon: PawPrint,
      image: "/animalservice.png",
      color: "from-purple-500 to-purple-600",
    },
    {
      id: 6,
      title: "Healthcare Services",
      description:
        "Providing a wide range of essential healthcare services and wellness programs.",
      icon: Stethoscope,
      image: "/healthcareservices.jpg",
      color: "from-cyan-500 to-cyan-600",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative w-full scroll-mt-28 py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden"
    >
      {/* Decorative background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-24">
          <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary font-bold text-xs tracking-widest uppercase mb-6">
            What We Do
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-foreground mb-6">
            Our Key <span className="text-primary">Focus Areas</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full"
                style={{
                  transitionDelay: `${index * 50}ms`,
                }}
              >
                {/* Visual Header */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Icon Badge */}
                  <div className="absolute top-6 left-6 w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center transform -rotate-3 group-hover:rotate-0 transition-transform duration-500">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground font-medium leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>
                  
                  <div className="pt-4 border-t border-gray-50 flex items-center justify-between">
                    <button className="text-primary font-bold text-sm tracking-widest uppercase hover:text-accent transition-colors">
                      Learn More
                    </button>
                    <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}