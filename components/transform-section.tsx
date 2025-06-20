"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ChevronDown,
  Brain,
  Cloud,
  Cog,
  Users,
  Shield,
  BarChart3,
  Building2,
  Cpu,
  Network,
  Leaf,
  Zap,
} from "lucide-react"
import ThreeScene from "./three-scene"
import Image from "next/image"

const services = [
  {
    id: 1,
    title: "Artificial Intelligence",
    description:
      "Harness the power of AI with NextGen Cube IT's innovative machine learning and deep learning solutions to transform your business operations.",
    icon: Brain,
    image: "/placeholder.svg?height=300&width=400",
    color: "from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-500/30",
    hoverColor: "group-hover:text-purple-400",
  },
  {
    id: 2,
    title: "Cloud",
    description:
      "Accelerate your cloud journey with NextGen Cube IT's scalable, secure, and innovative cloud platforms and migration services.",
    icon: Cloud,
    image: "/placeholder.svg?height=300&width=400",
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/30",
    hoverColor: "group-hover:text-blue-400",
  },
  {
    id: 3,
    title: "Cognitive Business Operations",
    description:
      "Optimize your processes with NextGen Cube IT's intelligent automation and cognitive technologies for enhanced efficiency.",
    icon: Cog,
    image: "/placeholder.svg?height=300&width=400",
    color: "from-orange-500/20 to-red-500/20",
    borderColor: "border-orange-500/30",
    hoverColor: "group-hover:text-orange-400",
  },
  {
    id: 4,
    title: "Consulting",
    description:
      "Strategic consulting services from NextGen Cube IT to guide your digital transformation journey and business growth.",
    icon: Users,
    image: "/placeholder.svg?height=300&width=400",
    color: "from-green-500/20 to-emerald-500/20",
    borderColor: "border-green-500/30",
    hoverColor: "group-hover:text-green-400",
  },
  {
    id: 5,
    title: "Cybersecurity",
    description:
      "Protect your digital assets with NextGen Cube IT's comprehensive cybersecurity solutions and threat protection services.",
    icon: Shield,
    image: "/placeholder.svg?height=300&width=400",
    color: "from-red-500/20 to-rose-500/20",
    borderColor: "border-red-500/30",
    hoverColor: "group-hover:text-red-400",
  },
  {
    id: 6,
    title: "Data & Analytics",
    description:
      "Unlock insights from your data with NextGen Cube IT's advanced analytics, business intelligence, and data science solutions.",
    icon: BarChart3,
    image: "/placeholder.svg?height=300&width=400",
    color: "from-indigo-500/20 to-purple-500/20",
    borderColor: "border-indigo-500/30",
    hoverColor: "group-hover:text-indigo-400",
  },
  {
    id: 7,
    title: "Enterprise Solutions",
    description:
      "Comprehensive enterprise-grade solutions designed to streamline operations and drive digital transformation at scale.",
    icon: Building2,
    image: "/placeholder.svg?height=300&width=400",
    color: "from-slate-500/20 to-gray-500/20",
    borderColor: "border-slate-500/30",
    hoverColor: "group-hover:text-slate-400",
  },
  {
    id: 8,
    title: "IoT Digital Engineering",
    description:
      "Connect and optimize your devices with NextGen Cube IT's Internet of Things solutions and digital engineering expertise.",
    icon: Cpu,
    image: "/placeholder.svg?height=300&width=400",
    color: "from-teal-500/20 to-cyan-500/20",
    borderColor: "border-teal-500/30",
    hoverColor: "group-hover:text-teal-400",
  },
  {
    id: 9,
    title: "Network Solutions and Service",
    description:
      "Build robust and scalable network infrastructure with NextGen Cube IT's comprehensive networking solutions and services.",
    icon: Network,
    image: "/placeholder.svg?height=300&width=400",
    color: "from-violet-500/20 to-purple-500/20",
    borderColor: "border-violet-500/30",
    hoverColor: "group-hover:text-violet-400",
  },
  {
    id: 10,
    title: "Sustainability Services",
    description:
      "Drive sustainable business practices with NextGen Cube IT's eco-friendly technology solutions and green IT initiatives.",
    icon: Leaf,
    image: "/placeholder.svg?height=300&width=400",
    color: "from-emerald-500/20 to-green-500/20",
    borderColor: "border-emerald-500/30",
    hoverColor: "group-hover:text-emerald-400",
  },
  {
    id: 11,
    title: "NextGen Interactive",
    description:
      "Create immersive digital experiences with NextGen Cube IT's interactive solutions, AR/VR technologies, and user engagement platforms.",
    icon: Zap,
    image: "/placeholder.svg?height=300&width=400",
    color: "from-yellow-500/20 to-orange-500/20",
    borderColor: "border-yellow-500/30",
    hoverColor: "group-hover:text-yellow-400",
  },
]

export default function TransformSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [showAll, setShowAll] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Show only first 3 services initially, then all when expanded
  const displayedServices = showAll ? services : services.slice(0, 3)

  return (
    <section ref={sectionRef} className="relative py-20 bg-gray-900 overflow-hidden">
      {/* 3D Background */}
      <ThreeScene />

      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black opacity-90" />

      {/* Floating particles effect */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-red-400 rounded-full animate-pulse opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-light mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Transform your business with{" "}
            <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              NextGen technologies
            </span>
          </h2>
          <p
            className={`text-lg text-gray-300 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Discover our comprehensive suite of cutting-edge solutions designed to accelerate your digital
            transformation and drive innovation across your organization.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {displayedServices.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={service.id}
                className={`group relative overflow-hidden bg-black/40 backdrop-blur-sm border transition-all duration-500 cursor-pointer ${
                  service.borderColor
                } ${hoveredCard === service.id ? "scale-105 shadow-2xl" : "hover:scale-102"} ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <CardContent className="p-0 relative h-80">
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-300"
                    />
                  </div>

                  {/* Background gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-60`} />

                  {/* Icon */}
                  <div className="absolute top-6 left-6 z-20">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                    <h3 className={`text-xl font-semibold mb-3 text-white transition-colors ${service.hoverColor}`}>
                      {service.title}
                    </h3>
                    <p
                      className={`text-gray-300 text-sm leading-relaxed transition-all duration-300 ${
                        hoveredCard === service.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                      }`}
                    >
                      {service.description}
                    </p>
                  </div>

                  {/* Hover effect overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-300 ${
                      hoveredCard === service.id ? "opacity-100" : "opacity-70"
                    }`}
                  />

                  {/* Animated border */}
                  <div
                    className={`absolute inset-0 border-2 border-transparent transition-all duration-300 ${
                      hoveredCard === service.id ? service.borderColor : ""
                    }`}
                  />

                  {/* Shine effect on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 transition-transform duration-700 ${
                      hoveredCard === service.id ? "translate-x-full" : "-translate-x-full"
                    }`}
                  />
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* View All Services Button */}
        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className={`group relative overflow-hidden bg-transparent border-2 border-red-500/50 text-white hover:text-black px-8 py-4 rounded-full transition-all duration-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "600ms" }}
            onClick={() => setShowAll(!showAll)}
          >
            {/* Button background animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

            <span className="relative z-10 flex items-center space-x-2">
              <span>{showAll ? "Show Less Services" : "View All Services"}</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  showAll ? "rotate-180" : "group-hover:translate-y-1"
                }`}
              />
            </span>

            {/* Ripple effect */}
            <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-700 opacity-0 group-hover:opacity-100" />
          </Button>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  )
}
