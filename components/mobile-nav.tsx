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
    } else {
      document.body.style.overflow = "unset"
    }
  }

  const toggleExpanded = (item: string) => {
    setExpandedItems((prev) => (prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]))
  }

  useEffect(() => {
    return () => {
      document.body.style.overflow = "unset"
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
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={toggleMenu}
        />

        {/* Menu Panel */}
        <div
          className={`absolute top-0 left-0 h-full w-full bg-gray-900 transform transition-transform duration-300 ease-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-700">
            <Link href="/" className="flex items-center space-x-3" onClick={toggleMenu}>
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
              onClick={toggleMenu}
              aria-label="Close mobile menu"
            >
              <X className="w-6 h-6" />
            </Button>
          </div>

          {/* Navigation Items */}
          <div className="flex flex-col h-full overflow-y-auto">
            <nav className="flex-1">
              {navItems.map((item, index) => (
                <div key={item.label} className="border-b border-gray-700/50">
                  <button
                    className="w-full flex items-center justify-between px-6 py-5 text-left text-white hover:bg-gray-800/50 transition-colors duration-200"
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
                    <div className="bg-gray-800/30 border-t border-gray-700/30">
                      {item.submenu?.map((subItem) => (
                        <Link
                          key={subItem}
                          href="#"
                          className="block px-12 py-3 text-gray-300 hover:text-white hover:bg-gray-700/30 transition-colors duration-200"
                          onClick={toggleMenu}
                        >
                          {subItem}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Contact Button */}
            <div className="p-6 border-t border-gray-700">
              <Button
                className="w-full bg-transparent border border-gray-500 text-white hover:bg-white hover:text-black transition-all duration-300 py-4 text-base font-normal tracking-widest"
                onClick={toggleMenu}
              >
                CONTACT US
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
