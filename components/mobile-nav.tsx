"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [expandedItems, setExpandedItems] = useState<string[]>([])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const toggleExpanded = (item: string) => {
    setExpandedItems((prev) => (prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]))
  }

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
        className="lg:hidden text-white hover:text-red-400 hover:bg-red-400/10"
        onClick={toggleMenu}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </Button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={toggleMenu} />

          {/* Menu Panel */}
          <div className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-gray-900 shadow-xl transform transition-transform duration-300 ease-in-out">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-800">
              <div className="flex items-center space-x-3">
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
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-red-400 hover:bg-red-400/10"
                onClick={toggleMenu}
              >
                <X className="w-6 h-6" />
              </Button>
            </div>

            {/* Navigation Items */}
            <div className="flex flex-col h-full overflow-y-auto">
              <nav className="flex-1 p-4 space-y-2">
                {navItems.map((item) => (
                  <div key={item.label}>
                    <button
                      className="w-full flex items-center justify-between p-3 text-left text-white hover:text-red-400 hover:bg-gray-800 rounded-lg transition-colors"
                      onClick={() => item.hasSubmenu && toggleExpanded(item.label)}
                    >
                      <span className="font-medium">{item.label}</span>
                      {item.hasSubmenu && (
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            expandedItems.includes(item.label) ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </button>

                    {/* Submenu */}
                    {item.hasSubmenu && expandedItems.includes(item.label) && (
                      <div className="ml-4 mt-2 space-y-1">
                        {item.submenu?.map((subItem) => (
                          <Link
                            key={subItem}
                            href="#"
                            className="block p-2 text-gray-300 hover:text-red-400 hover:bg-gray-800 rounded transition-colors"
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
              <div className="p-4 border-t border-gray-800">
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white" onClick={toggleMenu}>
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
