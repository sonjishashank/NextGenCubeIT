"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [expandedItems, setExpandedItems] = useState<string[]>([])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    // Prevent body scroll when menu is open
    if (!isOpen) {
      document.body.style.overflow = "hidden"
      document.body.style.position = "fixed"
      document.body.style.width = "100%"
      document.body.style.height = "100%"
    } else {
      document.body.style.overflow = ""
      document.body.style.position = ""
      document.body.style.width = ""
      document.body.style.height = ""
    }
  }

  const closeMenu = () => {
    setIsOpen(false)
    document.body.style.overflow = ""
    document.body.style.position = ""
    document.body.style.width = ""
    document.body.style.height = ""
  }

  const toggleExpanded = (item: string) => {
    setExpandedItems((prev) => (prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]))
  }

  useEffect(() => {
    return () => {
      document.body.style.overflow = ""
      document.body.style.position = ""
      document.body.style.width = ""
      document.body.style.height = ""
    }
  }, [])

  const navItems = [
    {
      label: "What we do",
      href: "#",
      hasSubmenu: true,
      submenu: ["Services", "Solutions", "Industries", "Technologies"],
    },
    {
      label: "Who we are",
      href: "#",
      hasSubmenu: true,
      submenu: ["About Us", "Leadership", "Our Story", "Values"],
    },
    {
      label: "Insights",
      href: "#",
      hasSubmenu: true,
      submenu: ["Blog", "Case Studies", "Research", "Whitepapers"],
    },
    {
      label: "Careers",
      href: "#",
      hasSubmenu: true,
      submenu: ["Open Positions", "Life at NextGen", "Benefits", "Apply"],
    },
    {
      label: "Newsroom",
      href: "#",
      hasSubmenu: true,
      submenu: ["Press Releases", "News", "Events", "Media Kit"],
    },
    {
      label: "Investors",
      href: "#",
      hasSubmenu: true,
      submenu: ["Financial Reports", "Investor Relations", "Stock Info", "Governance"],
    },
    {
      label: "Worldwide",
      href: "#",
      hasSubmenu: true,
      submenu: ["Global Offices", "Regional Sites", "Contact Locations", "Support"],
    },
  ]

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        className="lg:hidden text-white hover:text-red-400 hover:bg-red-400/10 p-2"
        onClick={toggleMenu}
        aria-label="Toggle mobile menu"
      >
        <Menu className="w-6 h-6" />
      </Button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[9999] lg:hidden">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={closeMenu} />

          {/* Menu Panel - Full viewport height */}
          <div
            className="absolute inset-0 bg-gray-900"
            style={{
              height: "100vh",
              height: "100dvh", // Dynamic viewport height for modern browsers
              maxHeight: "100vh",
              maxHeight: "100dvh",
              overflow: "hidden",
            }}
          >
            {/* Header - Fixed height */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-700 h-16 flex-shrink-0">
              <Link href="/" className="flex items-center space-x-3" onClick={closeMenu}>
                <Image
                  src="/images/nextgen-logo.png"
                  alt="NextGen Cube IT Solutions"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
                <div className="flex flex-col">
                  <div className="text-lg font-bold text-white">NextGen Cube</div>
                  <div className="text-xs text-gray-400">IT SOLUTIONS</div>
                </div>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-red-400 hover:bg-red-400/10 p-2"
                onClick={closeMenu}
                aria-label="Close mobile menu"
              >
                <X className="w-6 h-6" />
              </Button>
            </div>

            {/* Navigation Content - Calculated height */}
            <div
              className="flex flex-col"
              style={{
                height: "calc(100vh - 8rem)", // Total height minus header (4rem) and footer (4rem)
                height: "calc(100dvh - 8rem)",
                maxHeight: "calc(100vh - 8rem)",
                maxHeight: "calc(100dvh - 8rem)",
              }}
            >
              {/* Navigation Items - Scrollable if needed */}
              <nav className="flex-1 overflow-y-auto px-6 py-2">
                {navItems.map((item, index) => (
                  <div key={item.label} className="border-b border-gray-700/30 last:border-b-0">
                    <button
                      className="w-full flex items-center justify-between py-4 text-left text-white hover:bg-gray-800/30 transition-colors duration-200 rounded-lg px-2"
                      onClick={() => item.hasSubmenu && toggleExpanded(item.label)}
                    >
                      <span className="text-lg font-light tracking-wide">{item.label}</span>
                      {item.hasSubmenu && (
                        <ChevronDown
                          className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                            expandedItems.includes(item.label) ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </button>

                    {/* Submenu */}
                    {item.hasSubmenu && expandedItems.includes(item.label) && (
                      <div className="bg-gray-800/20 rounded-lg mb-2 overflow-hidden">
                        {item.submenu?.map((subItem) => (
                          <Link
                            key={subItem}
                            href="#"
                            className="block px-6 py-2 text-gray-300 hover:text-white hover:bg-gray-700/30 transition-colors duration-200"
                            onClick={closeMenu}
                          >
                            {subItem}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              {/* Contact Button - Fixed at bottom */}
              <div className="px-6 py-4 border-t border-gray-700 h-16 flex-shrink-0 flex items-center">
                <Button
                  className="w-full bg-transparent border border-gray-500 text-white hover:bg-white hover:text-black transition-all duration-300 py-3 text-base font-normal tracking-widest"
                  onClick={closeMenu}
                >
                  CONTACT US
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
