import Image from "next/image"
import Link from "next/link"
import { ChevronDown, Search, Play, ArrowRight, ArrowLeft, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link href="/" className="flex items-center space-x-2">
                <div className="text-2xl font-bold">tcs</div>
                <div className="text-xs text-gray-400">
                  <div>TATA</div>
                  <div>CONSULTANCY</div>
                  <div>SERVICES</div>
                </div>
              </Link>

              <nav className="hidden lg:flex items-center space-x-6">
                <div className="flex items-center space-x-1 cursor-pointer hover:text-red-400">
                  <span>What we do</span>
                  <ChevronDown className="w-4 h-4" />
                </div>
                <div className="flex items-center space-x-1 cursor-pointer hover:text-red-400">
                  <span>Who we are</span>
                  <ChevronDown className="w-4 h-4" />
                </div>
                <div className="flex items-center space-x-1 cursor-pointer hover:text-red-400">
                  <span>Insights</span>
                  <ChevronDown className="w-4 h-4" />
                </div>
                <div className="flex items-center space-x-1 cursor-pointer hover:text-red-400">
                  <span>Careers</span>
                  <ChevronDown className="w-4 h-4" />
                </div>
                <div className="flex items-center space-x-1 cursor-pointer hover:text-red-400">
                  <span>Newsroom</span>
                  <ChevronDown className="w-4 h-4" />
                </div>
                <div className="flex items-center space-x-1 cursor-pointer hover:text-red-400">
                  <span>Investors</span>
                  <ChevronDown className="w-4 h-4" />
                </div>
                <div className="flex items-center space-x-1 cursor-pointer hover:text-red-400">
                  <span>Worldwide</span>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </nav>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="outline" className="hidden md:flex">
                CONTACT US
              </Button>
              <Search className="w-5 h-5 cursor-pointer hover:text-red-400" />
              <div className="text-xl font-bold">TATA</div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />

        {/* Animated Wave Graphics */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg width="800" height="400" viewBox="0 0 800 400" className="opacity-80">
            <defs>
              <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#dc2626" />
                <stop offset="50%" stopColor="#ef4444" />
                <stop offset="100%" stopColor="#f59e0b" />
              </linearGradient>
              <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#b91c1c" />
                <stop offset="50%" stopColor="#dc2626" />
                <stop offset="100%" stopColor="#ef4444" />
              </linearGradient>
            </defs>
            <path
              d="M0,200 Q200,100 400,200 T800,200"
              stroke="url(#waveGradient1)"
              strokeWidth="3"
              fill="none"
              className="animate-pulse"
            />
            <path
              d="M0,220 Q200,120 400,220 T800,220"
              stroke="url(#waveGradient2)"
              strokeWidth="2"
              fill="none"
              className="animate-pulse"
              style={{ animationDelay: "0.5s" }}
            />
            <path
              d="M0,180 Q200,80 400,180 T800,180"
              stroke="url(#waveGradient1)"
              strokeWidth="2"
              fill="none"
              className="animate-pulse"
              style={{ animationDelay: "1s" }}
            />
          </svg>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-light mb-8 leading-tight">
            Perpetually Adaptive
            <br />
            <span className="text-red-400">Enterprise</span>
          </h1>
        </div>

        {/* Navigation Controls */}
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4">
          <Button size="icon" variant="ghost" className="text-white hover:text-red-400">
            <Pause className="w-6 h-6" />
          </Button>
          <Button size="icon" variant="ghost" className="text-white hover:text-red-400">
            <ArrowRight className="w-6 h-6" />
          </Button>
          <Button size="icon" variant="ghost" className="text-white hover:text-red-400">
            <ArrowLeft className="w-6 h-6" />
          </Button>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-8 mb-16">
            <Card className="bg-gray-800 border-gray-700 hover:bg-gray-700 transition-colors">
              <CardContent className="p-6">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Digital transformation"
                  width={300}
                  height={200}
                  className="w-full h-32 object-cover rounded mb-4"
                />
                <h3 className="text-white font-semibold mb-2">Digital Transformation</h3>
                <p className="text-gray-400 text-sm">Accelerate your digital journey</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:bg-gray-700 transition-colors">
              <CardContent className="p-6">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Cloud services"
                  width={300}
                  height={200}
                  className="w-full h-32 object-cover rounded mb-4"
                />
                <h3 className="text-white font-semibold mb-2">Cloud Services</h3>
                <p className="text-gray-400 text-sm">Scale with confidence</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:bg-gray-700 transition-colors">
              <CardContent className="p-6">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="AI & Analytics"
                  width={300}
                  height={200}
                  className="w-full h-32 object-cover rounded mb-4"
                />
                <h3 className="text-white font-semibold mb-2">AI & Analytics</h3>
                <p className="text-gray-400 text-sm">Intelligent insights</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:bg-gray-700 transition-colors">
              <CardContent className="p-6">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Cybersecurity"
                  width={300}
                  height={200}
                  className="w-full h-32 object-cover rounded mb-4"
                />
                <h3 className="text-white font-semibold mb-2">Cybersecurity</h3>
                <p className="text-gray-400 text-sm">Secure your future</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:bg-gray-700 transition-colors">
              <CardContent className="p-6">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Consulting"
                  width={300}
                  height={200}
                  className="w-full h-32 object-cover rounded mb-4"
                />
                <h3 className="text-white font-semibold mb-2">Consulting</h3>
                <p className="text-gray-400 text-sm">Strategic guidance</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Transforming Businesses Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-light mb-12 text-center">Transforming businesses with advanced technologies</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-0">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Manufacturing"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white">Manufacturing</h3>
                  <p className="text-gray-400">Smart manufacturing solutions for the future</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-0">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Healthcare"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white">Healthcare</h3>
                  <p className="text-gray-400">Revolutionizing patient care</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-0">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Financial Services"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white">Financial Services</h3>
                  <p className="text-gray-400">Next-gen banking solutions</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industry Selection Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light mb-12">Select your industry. Discover our impact.</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-gray-700 cursor-pointer hover:text-red-400">
                <span>Banking</span>
                <ArrowRight className="w-4 h-4" />
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-700 cursor-pointer hover:text-red-400">
                <span>Capital Markets</span>
                <ArrowRight className="w-4 h-4" />
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-700 cursor-pointer hover:text-red-400">
                <span>Communications, Media & Technology</span>
                <ArrowRight className="w-4 h-4" />
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-700 cursor-pointer hover:text-red-400">
                <span>Consumer Goods & Distribution</span>
                <ArrowRight className="w-4 h-4" />
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-700 cursor-pointer hover:text-red-400">
                <span>Education</span>
                <ArrowRight className="w-4 h-4" />
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-700 cursor-pointer hover:text-red-400">
                <span>Energy, Resources & Utilities</span>
                <ArrowRight className="w-4 h-4" />
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-700 cursor-pointer hover:text-red-400">
                <span>Government</span>
                <ArrowRight className="w-4 h-4" />
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-700 cursor-pointer hover:text-red-400">
                <span>Healthcare</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-gray-700 cursor-pointer hover:text-red-400">
                <span>High Tech</span>
                <ArrowRight className="w-4 h-4" />
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-700 cursor-pointer hover:text-red-400">
                <span>Insurance</span>
                <ArrowRight className="w-4 h-4" />
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-700 cursor-pointer hover:text-red-400">
                <span>Life Sciences</span>
                <ArrowRight className="w-4 h-4" />
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-700 cursor-pointer hover:text-red-400">
                <span>Manufacturing</span>
                <ArrowRight className="w-4 h-4" />
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-700 cursor-pointer hover:text-red-400">
                <span>Public Services</span>
                <ArrowRight className="w-4 h-4" />
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-700 cursor-pointer hover:text-red-400">
                <span>Retail</span>
                <ArrowRight className="w-4 h-4" />
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-700 cursor-pointer hover:text-red-400">
                <span>Travel, Transportation & Hospitality</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cutting Edge Solutions Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light mb-12">Cutting edge solutions to power up your business</h2>

          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-red-400">TCS BaNCS™</h3>
                <p className="text-gray-400 mb-4">
                  Core banking platform that enables banks to offer innovative products and services
                </p>
                <Button variant="outline" className="text-red-400 border-red-400 hover:bg-red-400 hover:text-white">
                  Learn more
                </Button>
              </div>
              <div className="text-right">
                <span className="text-4xl font-light text-gray-600">01</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-red-400">TCS BFSI Platforms</h3>
                <p className="text-gray-400 mb-4">
                  Comprehensive suite of platforms for banking, financial services, and insurance
                </p>
                <Button variant="outline" className="text-red-400 border-red-400 hover:bg-red-400 hover:text-white">
                  Learn more
                </Button>
              </div>
              <div className="text-right">
                <span className="text-4xl font-light text-gray-600">02</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-red-400">TCS Cognitive Intelligence Platform</h3>
                <p className="text-gray-400 mb-4">
                  AI-powered platform that helps organizations make intelligent decisions
                </p>
                <Button variant="outline" className="text-red-400 border-red-400 hover:bg-red-400 hover:text-white">
                  Learn more
                </Button>
              </div>
              <div className="text-right">
                <span className="text-4xl font-light text-gray-600">03</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spotlight Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light mb-12">Spotlight on TCS</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-black border-gray-800 relative overflow-hidden group cursor-pointer">
              <CardContent className="p-0">
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="TCS Video 1"
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 text-white">Innovation at Scale</h3>
                  <p className="text-gray-400 text-sm">Discover how TCS drives innovation across industries</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black border-gray-800 relative overflow-hidden group cursor-pointer">
              <CardContent className="p-0">
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="TCS Video 2"
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 text-white">Digital Transformation</h3>
                  <p className="text-gray-400 text-sm">Leading enterprises through their digital journey</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black border-gray-800 relative overflow-hidden group cursor-pointer">
              <CardContent className="p-0">
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="TCS Video 3"
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 text-white">Future of Work</h3>
                  <p className="text-gray-400 text-sm">Reimagining the workplace for tomorrow</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-light mb-8">Join our team.</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Be part of a global team that's shaping the future of technology and business transformation.
          </p>
          <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">Explore careers</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-xl font-light mb-4">Follow us for the latest updates</h3>
            <div className="flex justify-center space-x-6">
              <div className="w-8 h-8 bg-gray-700 rounded cursor-pointer hover:bg-red-600 transition-colors"></div>
              <div className="w-8 h-8 bg-gray-700 rounded cursor-pointer hover:bg-red-600 transition-colors"></div>
              <div className="w-8 h-8 bg-gray-700 rounded cursor-pointer hover:bg-red-600 transition-colors"></div>
              <div className="w-8 h-8 bg-gray-700 rounded cursor-pointer hover:bg-red-600 transition-colors"></div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-2 mb-4 md:mb-0">
                <div className="text-xl font-bold">tcs</div>
                <div className="text-xs text-gray-400">
                  <div>TATA CONSULTANCY SERVICES</div>
                </div>
              </div>

              <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm text-gray-400">
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

            <div className="text-center text-xs text-gray-500 mt-8">
              © 2024 Tata Consultancy Services Limited. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
