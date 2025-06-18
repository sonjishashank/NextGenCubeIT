"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Pause, Play, ArrowRight, ArrowLeft } from "lucide-react"

interface Slide {
  id: number
  title: string
  subtitle?: string
  description?: string
  backgroundImage?: string
  ctaText?: string
  ctaSecondary?: string
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Perpetually Adaptive",
    subtitle: "Enterprise",
    description:
      "Building on NextGen Cube IT's belief that the purpose of business is to improve the human condition, we help our customers navigate their transformation journeys.",
    ctaText: "Explore Our Services",
    ctaSecondary: "Watch Our Story",
  },
  {
    id: 2,
    title: "Integrated Annual Report",
    subtitle: "2024-25",
    description:
      "Discover our comprehensive annual report showcasing our achievements, innovations, and commitment to sustainable growth.",
    ctaText: "Download Report",
    ctaSecondary: "View Highlights",
  },
  {
    id: 3,
    title: "Digital Innovation",
    subtitle: "at Scale",
    description:
      "Transforming businesses worldwide with cutting-edge technology solutions and strategic consulting expertise.",
    ctaText: "Learn More",
    ctaSecondary: "Case Studies",
  },
  {
    id: 4,
    title: "Future-Ready",
    subtitle: "Solutions",
    description:
      "Empowering organizations to thrive in the digital age with AI, cloud, and next-generation technologies.",
    ctaText: "Get Started",
    ctaSecondary: "Contact Us",
  },
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [progress, setProgress] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const slideInterval = 5000 // 5 seconds per slide

  useEffect(() => {
    let interval: NodeJS.Timeout
    let progressInterval: NodeJS.Timeout

    if (isPlaying) {
      // Progress bar animation
      progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            return 0
          }
          return prev + 100 / (slideInterval / 100)
        })
      }, 100)

      // Slide change
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
        setProgress(0)
      }, slideInterval)
    }

    return () => {
      clearInterval(interval)
      clearInterval(progressInterval)
    }
  }, [isPlaying, currentSlide])

  const nextSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
      setProgress(0)
      setIsTransitioning(false)
    }, 150)
  }

  const prevSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
      setProgress(0)
      setIsTransitioning(false)
    }, 150)
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
    if (isPlaying) {
      setProgress(0)
    }
  }

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentSlide(index)
      setProgress(0)
      setIsTransitioning(false)
    }, 150)
  }

  const renderSlideContent = (slide: Slide, index: number) => {
    if (index === 1) {
      // Special layout for Annual Report slide
      return (
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-4 h-full">
          <div className="flex-1 max-w-2xl text-center lg:text-left mb-8 lg:mb-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-light mb-6 lg:mb-8 leading-tight text-white">
              {slide.title}
              <br />
              <span className="text-red-400">{slide.subtitle}</span>
            </h1>
            {slide.description && (
              <p className="text-lg sm:text-xl text-gray-300 mb-6 lg:mb-8 max-w-xl mx-auto lg:mx-0">
                {slide.description}
              </p>
            )}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg"
              >
                {slide.ctaText}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-red-500 text-red-400 hover:bg-red-500 hover:text-white px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg"
              >
                {slide.ctaSecondary}
              </Button>
            </div>
          </div>

          <div className="flex-1 flex justify-center items-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Robot with globe illustration */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-red-500/20 rounded-full animate-pulse" />
              <div
                className="absolute inset-4 bg-gradient-to-br from-cyan-400/30 to-blue-600/30 rounded-full animate-pulse"
                style={{ animationDelay: "0.5s" }}
              />
              <div
                className="absolute inset-8 bg-gradient-to-br from-red-400/20 to-orange-500/20 rounded-full animate-pulse"
                style={{ animationDelay: "1s" }}
              />

              {/* Tech icons around the globe */}
              <div
                className="absolute top-4 left-8 w-6 h-6 sm:w-8 sm:h-8 bg-blue-500/30 rounded-full animate-bounce"
                style={{ animationDelay: "0.2s" }}
              />
              <div
                className="absolute top-12 right-12 w-4 h-4 sm:w-6 sm:h-6 bg-red-500/30 rounded-full animate-bounce"
                style={{ animationDelay: "0.4s" }}
              />
              <div
                className="absolute bottom-8 left-12 w-8 h-8 sm:w-10 sm:h-10 bg-orange-500/30 rounded-full animate-bounce"
                style={{ animationDelay: "0.6s" }}
              />
              <div
                className="absolute bottom-12 right-8 w-5 h-5 sm:w-7 sm:h-7 bg-cyan-500/30 rounded-full animate-bounce"
                style={{ animationDelay: "0.8s" }}
              />

              {/* Central globe representation */}
              <div
                className="absolute inset-12 sm:inset-16 bg-gradient-to-br from-blue-400/40 to-cyan-500/40 rounded-full border-2 border-blue-400/30 animate-spin"
                style={{ animationDuration: "20s" }}
              >
                <div className="absolute inset-2 bg-gradient-to-br from-transparent to-blue-500/20 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      )
    }

    // Default layout for other slides
    return (
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-light mb-6 lg:mb-8 leading-tight">
          {slide.title}
          <br />
          <span className="text-red-400">{slide.subtitle}</span>
        </h1>
        {slide.description && (
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 lg:mb-12 max-w-4xl mx-auto px-4">
            {slide.description}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
          <Button
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg"
          >
            {slide.ctaText}
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-red-500 text-red-400 hover:bg-red-500 hover:text-white px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg"
          >
            {slide.ctaSecondary}
          </Button>
        </div>
      </div>
    )
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />

      {/* Animated Wave Graphics */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg width="1200" height="600" viewBox="0 0 1200 600" className="opacity-60 w-full h-full">
          <defs>
            <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#dc2626" />
              <stop offset="30%" stopColor="#ef4444" />
              <stop offset="70%" stopColor="#f97316" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
            <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#b91c1c" />
              <stop offset="50%" stopColor="#dc2626" />
              <stop offset="100%" stopColor="#ef4444" />
            </linearGradient>
            <linearGradient id="waveGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7c2d12" />
              <stop offset="50%" stopColor="#dc2626" />
              <stop offset="100%" stopColor="#ea580c" />
            </linearGradient>
          </defs>
          <path
            d="M0,300 Q300,150 600,300 T1200,300"
            stroke="url(#waveGradient1)"
            strokeWidth="4"
            fill="none"
            className="animate-pulse"
          />
          <path
            d="M0,320 Q300,170 600,320 T1200,320"
            stroke="url(#waveGradient2)"
            strokeWidth="3"
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: "0.5s" }}
          />
          <path
            d="M0,280 Q300,130 600,280 T1200,280"
            stroke="url(#waveGradient3)"
            strokeWidth="2"
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <path
            d="M0,340 Q300,190 600,340 T1200,340"
            stroke="url(#waveGradient1)"
            strokeWidth="2"
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: "1.5s" }}
          />
        </svg>
      </div>

      {/* Slide Content */}
      <div
        className={`relative z-10 w-full h-full flex items-center justify-center py-20 transition-all duration-500 ease-in-out ${
          isTransitioning ? "opacity-0 transform scale-95" : "opacity-100 transform scale-100"
        }`}
      >
        {renderSlideContent(slides[currentSlide], currentSlide)}
      </div>

      {/* Navigation Controls - Hidden on mobile, visible on tablet+ */}
      <div className="absolute right-4 lg:right-8 top-1/2 transform -translate-y-1/2 hidden sm:flex flex-col space-y-4">
        <Button
          size="icon"
          variant="ghost"
          className="text-white hover:text-red-400 hover:bg-red-400/10"
          onClick={togglePlayPause}
        >
          {isPlaying ? <Pause className="w-5 h-5 lg:w-6 lg:h-6" /> : <Play className="w-5 h-5 lg:w-6 lg:h-6" />}
        </Button>
        <Button
          size="icon"
          variant="ghost"
          className="text-white hover:text-red-400 hover:bg-red-400/10"
          onClick={nextSlide}
        >
          <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6" />
        </Button>
        <Button
          size="icon"
          variant="ghost"
          className="text-white hover:text-red-400 hover:bg-red-400/10"
          onClick={prevSlide}
        >
          <ArrowLeft className="w-5 h-5 lg:w-6 lg:h-6" />
        </Button>
      </div>

      {/* Mobile Navigation Controls */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex sm:hidden space-x-4">
        <Button
          size="icon"
          variant="ghost"
          className="text-white hover:text-red-400 hover:bg-red-400/10"
          onClick={prevSlide}
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <Button
          size="icon"
          variant="ghost"
          className="text-white hover:text-red-400 hover:bg-red-400/10"
          onClick={togglePlayPause}
        >
          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
        </Button>
        <Button
          size="icon"
          variant="ghost"
          className="text-white hover:text-red-400 hover:bg-red-400/10"
          onClick={nextSlide}
        >
          <ArrowRight className="w-5 h-5" />
        </Button>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-48 sm:w-64">
        <div className="w-full bg-gray-700 rounded-full h-1">
          <div
            className="bg-red-500 h-1 rounded-full transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-red-500 scale-125" : "bg-gray-500 hover:bg-gray-400"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-4 right-4 text-white/60 text-xs sm:text-sm">
        {currentSlide + 1} / {slides.length}
      </div>
    </section>
  )
}
