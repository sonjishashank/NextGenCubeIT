"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, Brain, Cloud, Cog, Users } from "lucide-react"
import ThreeScene from "./three-scene"

const services = [
  {
    id: 1,
    title: "Artificial Intelligence",
    description:
      "Harness the power of AI with NextGen Cube IT's innovative solutions to transform your business operations.",
    icon: Brain,
    image: "/placeholder.svg?height=400&width=300",
    color: "from-red-500/20 to-orange-500/20",
    borderColor: "border-red-500/30",
  },
  {
    id: 2,
    title: "Cloud Solutions",
    description:
      "Accelerate your cloud journey with NextGen Cube IT's scalable, secure, and innovative cloud platforms.",
    icon: Cloud,
    image: "/placeholder.svg?height=400&width=300",
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/30",
  },
  {
    id: 3,
    title: "Cognitive Business Operations",
    description: "Optimize your processes with NextGen Cube IT's intelligent automation and cognitive technologies.",
    icon: Cog,
    image: "/placeholder.svg?height=400&width=300",
    color: "from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-500/30",
  },
  {
    id: 4,
    title: "IT Consulting",
    description: "Strategic consulting services from NextGen Cube IT to guide your digital transformation journey.",
    icon: Users,
    image: "/placeholder.svg?height=400&width=300",
    color: "from-green-500/20 to-emerald-500/20",
    borderColor: "border-green-500/30",
  },
]

export default function TransformSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)
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

  return (
    <section ref={sectionRef} className="relative py-20 bg-gray-900 overflow-hidden">
      {/* 3D Background */}
      <ThreeScene />

      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black opacity-90" />

      {/* Floating particles effect */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
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
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-light mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Transform your business with{" "}
            <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              NextGen technologies
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => {
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
                  transitionDelay: `${index * 100}ms`,
                }}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <CardContent className="p-0 relative h-80">
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-50`} />

                  {/* Icon */}
                  <div className="absolute top-6 left-6 z-20">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                    <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-red-400 transition-colors">
                      {service.title}
                    </h3>
                    <p
                      className={`text-gray-300 text-sm transition-all duration-300 ${
                        hoveredCard === service.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                      }`}
                    >
                      {service.description}
                    </p>
                  </div>

                  {/* Hover effect overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent transition-opacity duration-300 ${
                      hoveredCard === service.id ? "opacity-100" : "opacity-60"
                    }`}
                  />

                  {/* Animated border */}
                  <div
                    className={`absolute inset-0 border-2 border-transparent transition-all duration-300 ${
                      hoveredCard === service.id ? service.borderColor : ""
                    }`}
                  />
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* View All Topics Button */}
        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className={`group relative overflow-hidden bg-transparent border-2 border-red-500/50 text-white hover:text-black px-8 py-4 rounded-full transition-all duration-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            {/* Button background animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

            <span className="relative z-10 flex items-center space-x-2">
              <span>View all topics</span>
              <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
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
