import Image from "next/image"
import Link from "next/link"
import { ChevronDown, Search, Youtube, Instagram, Facebook, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import HeroSlider from "@/components/hero-slider"
import TransformSection from "@/components/transform-section"
import MobileNav from "@/components/mobile-nav"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800 sticky top-0 z-50 bg-black/95 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link href="/" className="flex items-center space-x-3">
                <Image
                  src="/images/nextgen-logo.png"
                  alt="NextGen Cube IT Solutions"
                  width={40}
                  height={40}
                  className="w-8 h-8 sm:w-10 sm:h-10"
                />
                <div className="flex flex-col">
                  <div className="text-lg sm:text-xl font-bold">NextGen Cube</div>
                  <div className="text-xs text-gray-400 hidden sm:block">IT SOLUTIONS</div>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center space-x-6">
                <div className="flex items-center space-x-1 cursor-pointer hover:text-red-400 transition-colors">
                  <span>What we do</span>
                  <ChevronDown className="w-4 h-4" />
                </div>
                <div className="flex items-center space-x-1 cursor-pointer hover:text-red-400 transition-colors">
                  <span>Who we are</span>
                  <ChevronDown className="w-4 h-4" />
                </div>
                <div className="flex items-center space-x-1 cursor-pointer hover:text-red-400 transition-colors">
                  <span>Insights</span>
                  <ChevronDown className="w-4 h-4" />
                </div>
                <div className="flex items-center space-x-1 cursor-pointer hover:text-red-400 transition-colors">
                  <span>Careers</span>
                  <ChevronDown className="w-4 h-4" />
                </div>
                <div className="flex items-center space-x-1 cursor-pointer hover:text-red-400 transition-colors">
                  <span>Newsroom</span>
                  <ChevronDown className="w-4 h-4" />
                </div>
                <div className="flex items-center space-x-1 cursor-pointer hover:text-red-400 transition-colors">
                  <span>Investors</span>
                  <ChevronDown className="w-4 h-4" />
                </div>
                <div className="flex items-center space-x-1 cursor-pointer hover:text-red-400 transition-colors">
                  <span>Worldwide</span>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </nav>
            </div>

            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                className="hidden md:flex border-red-500 text-red-400 hover:bg-red-500 hover:text-white text-sm"
              >
                CONTACT US
              </Button>
              <Search className="w-5 h-5 cursor-pointer hover:text-red-400 transition-colors" />
              <div className="text-sm font-bold text-red-400 hidden sm:block">NEXTGEN</div>

              {/* Mobile Navigation */}
              <MobileNav />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Slider */}
      <HeroSlider />

      {/* Content Sections */}
      <section className="py-12 sm:py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 mb-16">
            <Card className="bg-gray-800 border-gray-700 hover:bg-gray-700 transition-colors">
              <CardContent className="p-4 sm:p-6">
                <Image
                  src="/images/digital-transformation.jpg"
                  alt="Digital transformation"
                  width={300}
                  height={200}
                  className="w-full h-24 sm:h-32 object-cover rounded mb-4"
                />
                <h3 className="text-white font-semibold mb-2 text-sm sm:text-base">Digital Transformation</h3>
                <p className="text-gray-400 text-xs sm:text-sm">Accelerate your digital journey</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:bg-gray-700 transition-colors">
              <CardContent className="p-4 sm:p-6">
                <Image
                  src="/images/cloud-services.jpg"
                  alt="Cloud services"
                  width={300}
                  height={200}
                  className="w-full h-24 sm:h-32 object-cover rounded mb-4"
                />
                <h3 className="text-white font-semibold mb-2 text-sm sm:text-base">Cloud Services</h3>
                <p className="text-gray-400 text-xs sm:text-sm">Scale with confidence</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:bg-gray-700 transition-colors">
              <CardContent className="p-4 sm:p-6">
                <Image
                  src="/images/ai-analytics.jpg"
                  alt="AI & Analytics"
                  width={300}
                  height={200}
                  className="w-full h-24 sm:h-32 object-cover rounded mb-4"
                />
                <h3 className="text-white font-semibold mb-2 text-sm sm:text-base">AI & Analytics</h3>
                <p className="text-gray-400 text-xs sm:text-sm">Intelligent insights</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:bg-gray-700 transition-colors">
              <CardContent className="p-4 sm:p-6">
                <Image
                  src="/images/cybersecurity.jpg"
                  alt="Cybersecurity"
                  width={300}
                  height={200}
                  className="w-full h-24 sm:h-32 object-cover rounded mb-4"
                />
                <h3 className="text-white font-semibold mb-2 text-sm sm:text-base">Cybersecurity</h3>
                <p className="text-gray-400 text-xs sm:text-sm">Secure your future</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:bg-gray-700 transition-colors sm:col-span-2 lg:col-span-1">
              <CardContent className="p-4 sm:p-6">
                <Image
                  src="/images/consulting.jpg"
                  alt="Consulting"
                  width={300}
                  height={200}
                  className="w-full h-24 sm:h-32 object-cover rounded mb-4"
                />
                <h3 className="text-white font-semibold mb-2 text-sm sm:text-base">Consulting</h3>
                <p className="text-gray-400 text-xs sm:text-sm">Strategic guidance</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Transform Section with 3D */}
      <TransformSection />

      {/* Transforming Businesses Section */}
      <section className="py-12 sm:py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light mb-8 sm:mb-12 text-center px-4">
            Transforming businesses with NextGen technologies
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-0">
                <Image
                  src="/images/manufacturing.jpg"
                  alt="Manufacturing"
                  width={400}
                  height={200}
                  className="w-full h-40 sm:h-48 object-cover"
                />
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">Manufacturing</h3>
                  <p className="text-gray-400 text-sm sm:text-base">Smart manufacturing solutions for the future</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-0">
                <Image
                  src="/images/healthcare.jpg"
                  alt="Healthcare"
                  width={400}
                  height={200}
                  className="w-full h-40 sm:h-48 object-cover"
                />
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">Healthcare</h3>
                  <p className="text-gray-400 text-sm sm:text-base">Revolutionizing patient care</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 md:col-span-2 lg:col-span-1">
              <CardContent className="p-0">
                <Image
                  src="/images/financial-services.jpg"
                  alt="Financial Services"
                  width={400}
                  height={200}
                  className="w-full h-40 sm:h-48 object-cover"
                />
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">Financial Services</h3>
                  <p className="text-gray-400 text-sm sm:text-base">Next-gen banking solutions</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industry Selection Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light mb-8 sm:mb-12 text-black text-center sm:text-left">
            Select your industry. Discover our impact.
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-x-16 lg:gap-y-8 max-w-6xl mx-auto lg:mx-0">
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center space-x-4 py-3 sm:py-4 cursor-pointer hover:text-red-600 transition-colors group">
                <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 group-hover:text-red-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <span className="text-base sm:text-lg text-gray-900 group-hover:text-red-600">Banking</span>
              </div>

              <div className="flex items-center space-x-4 py-3 sm:py-4 cursor-pointer hover:text-red-600 transition-colors group">
                <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 group-hover:text-red-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <span className="text-base sm:text-lg text-gray-900 group-hover:text-red-600">
                  Communications, Media, and Information Services
                </span>
              </div>

              <div className="flex items-center space-x-4 py-3 sm:py-4 cursor-pointer hover:text-red-600 transition-colors group">
                <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 group-hover:text-red-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
                  </svg>
                </div>
                <span className="text-base sm:text-lg text-gray-900 group-hover:text-red-600">Education</span>
              </div>

              <div className="flex items-center space-x-4 py-3 sm:py-4 cursor-pointer hover:text-red-600 transition-colors group">
                <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 group-hover:text-red-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 8l-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z" />
                  </svg>
                </div>
                <span className="text-base sm:text-lg text-gray-900 group-hover:text-red-600">Healthcare</span>
              </div>

              <div className="flex items-center space-x-4 py-3 sm:py-4 cursor-pointer hover:text-red-600 transition-colors group">
                <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 group-hover:text-red-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <span className="text-base sm:text-lg text-gray-900 group-hover:text-red-600">Insurance</span>
              </div>

              <div className="flex items-center space-x-4 py-3 sm:py-4 cursor-pointer hover:text-red-600 transition-colors group">
                <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 group-hover:text-red-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <span className="text-base sm:text-lg text-gray-900 group-hover:text-red-600">Manufacturing</span>
              </div>

              <div className="flex items-center space-x-4 py-3 sm:py-4 cursor-pointer hover:text-red-600 transition-colors group">
                <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 group-hover:text-red-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                  </svg>
                </div>
                <span className="text-base sm:text-lg text-gray-900 group-hover:text-red-600">Retail</span>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center space-x-4 py-3 sm:py-4 cursor-pointer hover:text-red-600 transition-colors group">
                <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 group-hover:text-red-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z" />
                  </svg>
                </div>
                <span className="text-base sm:text-lg text-gray-900 group-hover:text-red-600">Capital Markets</span>
              </div>

              <div className="flex items-center space-x-4 py-3 sm:py-4 cursor-pointer hover:text-red-600 transition-colors group">
                <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 group-hover:text-red-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                  </svg>
                </div>
                <span className="text-base sm:text-lg text-gray-900 group-hover:text-red-600">
                  Consumer Goods and Distribution
                </span>
              </div>

              <div className="flex items-center space-x-4 py-3 sm:py-4 cursor-pointer hover:text-red-600 transition-colors group">
                <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 group-hover:text-red-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <span className="text-base sm:text-lg text-gray-900 group-hover:text-red-600">
                  Energy, Resources, and Utilities
                </span>
              </div>

              <div className="flex items-center space-x-4 py-3 sm:py-4 cursor-pointer hover:text-red-600 transition-colors group">
                <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 group-hover:text-red-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-base sm:text-lg text-gray-900 group-hover:text-red-600">High Tech</span>
              </div>

              <div className="flex items-center space-x-4 py-3 sm:py-4 cursor-pointer hover:text-red-600 transition-colors group">
                <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 group-hover:text-red-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 8l-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z" />
                  </svg>
                </div>
                <span className="text-base sm:text-lg text-gray-900 group-hover:text-red-600">Life Sciences</span>
              </div>

              <div className="flex items-center space-x-4 py-3 sm:py-4 cursor-pointer hover:text-red-600 transition-colors group">
                <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 group-hover:text-red-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <span className="text-base sm:text-lg text-gray-900 group-hover:text-red-600">Public Services</span>
              </div>

              <div className="flex items-center space-x-4 py-3 sm:py-4 cursor-pointer hover:text-red-600 transition-colors group">
                <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 group-hover:text-red-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                  </svg>
                </div>
                <span className="text-base sm:text-lg text-gray-900 group-hover:text-red-600">
                  Travel and Logistics
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products and Platforms Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-8 sm:mb-12">
            <p className="text-sm font-semibold text-gray-600 tracking-wider uppercase mb-2">PRODUCTS AND PLATFORMS</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-black mb-8 sm:mb-16">
              Cutting edge solutions to power up your business.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {/* NextGen Cloud Platform */}
            <Card className="bg-white border-0 shadow-none hover:shadow-lg transition-all duration-300 group cursor-pointer">
              <CardContent className="p-6 sm:p-8 border-b border-gray-200">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-black group-hover:text-red-600 transition-colors">
                      NextGen Cloud Platform™
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      The Foundation for Future Enterprise. Unified. Scalable. Intelligent cloud infrastructure for
                      modern businesses.
                    </p>
                  </div>
                  <div className="ml-4 sm:ml-6 flex-shrink-0">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center text-red-500 group-hover:text-red-600 transition-colors">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* NextGen AI Suite */}
            <Card className="bg-white border-0 shadow-none hover:shadow-lg transition-all duration-300 group cursor-pointer">
              <CardContent className="p-6 sm:p-8 border-b border-gray-200">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-black group-hover:text-red-600 transition-colors">
                      NextGen AI Suite™
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      Modern and intelligent AI platforms for business automation and cognitive decision-making
                      processes.
                    </p>
                  </div>
                  <div className="ml-4 sm:ml-6 flex-shrink-0">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center text-red-500 group-hover:text-red-600 transition-colors">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* NextGen Security Framework */}
            <Card className="bg-white border-0 shadow-none hover:shadow-lg transition-all duration-300 group cursor-pointer">
              <CardContent className="p-6 sm:p-8 border-b border-gray-200">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-black group-hover:text-red-600 transition-colors">
                      NextGen Security Framework™
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      Growth and Protection in Digital Transformation. Enabled by Intelligent, Adaptive Security
                      Solutions.
                    </p>
                  </div>
                  <div className="ml-4 sm:ml-6 flex-shrink-0">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center text-red-500 group-hover:text-red-600 transition-colors">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* NextGen Analytics Platform */}
            <Card className="bg-white border-0 shadow-none hover:shadow-lg transition-all duration-300 group cursor-pointer">
              <CardContent className="p-6 sm:p-8 border-b border-gray-200">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-black group-hover:text-red-600 transition-colors">
                      NextGen Analytics Platform
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      Power the Data-Driven Decision Making. Advanced Analytics, Machine Learning, and Business
                      Intelligence.
                    </p>
                  </div>
                  <div className="ml-4 sm:ml-6 flex-shrink-0">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center text-red-500 group-hover:text-red-600 transition-colors">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* NextGen DevOps Suite */}
            <Card className="bg-white border-0 shadow-none hover:shadow-lg transition-all duration-300 group cursor-pointer">
              <CardContent className="p-6 sm:p-8 border-b border-gray-200">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-black group-hover:text-red-600 transition-colors">
                      NextGen DevOps Suite™
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      Streamlined development lifecycle, automated deployment, invisible infrastructure management.
                    </p>
                  </div>
                  <div className="ml-4 sm:ml-6 flex-shrink-0">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center text-red-500 group-hover:text-red-600 transition-colors">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* NextGen Customer Experience */}
            <Card className="bg-white border-0 shadow-none hover:shadow-lg transition-all duration-300 group cursor-pointer">
              <CardContent className="p-6 sm:p-8 border-b border-gray-200">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-black group-hover:text-red-600 transition-colors">
                      NextGen Customer Experience™
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      Deliver personalized experiences to build loyalty and drive engagement across all customer
                      touchpoints.
                    </p>
                  </div>
                  <div className="ml-4 sm:ml-6 flex-shrink-0">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center text-red-500 group-hover:text-red-600 transition-colors">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Spotlight Section */}
      <section className="py-12 sm:py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-light mb-8 sm:mb-12">Spotlight on NextGen Cube IT</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="bg-black border-gray-800 relative overflow-hidden group cursor-pointer">
              <CardContent className="p-0">
                <div className="relative">
                  <Image
                    src="/images/innovation-video.jpg"
                    alt="NextGen Innovation Video"
                    width={400}
                    height={200}
                    className="w-full h-40 sm:h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="w-10 h-10 sm:w-12 sm:h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg font-semibold mb-2 text-white">Innovation at Scale</h3>
                  <p className="text-gray-400 text-sm">
                    Discover how NextGen Cube IT drives innovation across industries
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black border-gray-800 relative overflow-hidden group cursor-pointer">
              <CardContent className="p-0">
                <div className="relative">
                  <Image
                    src="/images/digital-transformation-video.jpg"
                    alt="Digital Transformation Video"
                    width={400}
                    height={200}
                    className="w-full h-40 sm:h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="w-10 h-10 sm:w-12 sm:h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg font-semibold mb-2 text-white">Digital Transformation</h3>
                  <p className="text-gray-400 text-sm">
                    Leading enterprises through their digital journey with NextGen solutions
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black border-gray-800 relative overflow-hidden group cursor-pointer md:col-span-2 lg:col-span-1">
              <CardContent className="p-0">
                <div className="relative">
                  <Image
                    src="/images/future-work-video.jpg"
                    alt="Future of Work Video"
                    width={400}
                    height={200}
                    className="w-full h-40 sm:h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="w-10 h-10 sm:w-12 sm:h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg font-semibold mb-2 text-white">Future of Work</h3>
                  <p className="text-gray-400 text-sm">
                    Reimagining the workplace with NextGen Cube IT's innovative solutions
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="py-12 sm:py-16 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light mb-6 sm:mb-8">Join our team.</h2>
          <p className="text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base px-4">
            Be part of a global team that's shaping the future of technology and business transformation.
          </p>
          <Button className="bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 py-3 text-sm sm:text-base">
            Explore careers
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-lg sm:text-xl font-light mb-4">Follow us for the latest updates</h3>
            <div className="flex justify-center space-x-4 sm:space-x-6">
              <a
                href="https://youtube.com/@nextgencubeit"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-600 transition-colors duration-300 group"
                aria-label="Follow us on YouTube"
              >
                <Youtube className="w-5 h-5 text-white group-hover:text-white" />
              </a>
              <a
                href="https://instagram.com/nextgencubeit"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 transition-all duration-300 group"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5 text-white group-hover:text-white" />
              </a>
              <a
                href="https://facebook.com/nextgencubeit"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-600 transition-colors duration-300 group"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5 text-white group-hover:text-white" />
              </a>
              <a
                href="https://x.com/nextgencubeit"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-black transition-colors duration-300 group"
                aria-label="Follow us on X"
              >
                <Twitter className="w-5 h-5 text-white group-hover:text-white" />
              </a>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 sm:pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-3">
                <Image
                  src="/images/nextgen-logo.png"
                  alt="NextGen Cube IT Solutions"
                  width={32}
                  height={32}
                  className="w-6 h-6 sm:w-8 sm:h-8"
                />
                <div className="flex flex-col">
                  <div className="text-base sm:text-lg font-bold">NextGen Cube</div>
                  <div className="text-xs text-gray-400">IT SOLUTIONS</div>
                </div>
              </div>

              <div className="flex flex-wrap justify-center md:justify-end space-x-4 sm:space-x-6 text-xs sm:text-sm text-gray-400">
                <Link href="#" className="hover:text-white">
                  Privacy Policy
                </Link>
                <Link href="#" className="hover:text-white">
                  Terms of Use
                </Link>
                <Link href="#" className="hover:text-white">
                  Cookie Policy
                </Link>
                <Link href="#" className="hover:text-white">
                  Accessibility
                </Link>
              </div>
            </div>

            <div className="text-center text-xs text-gray-500 mt-6 sm:mt-8">
              © 2024 NextGen Cube IT Solutions. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
