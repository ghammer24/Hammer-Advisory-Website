"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { HourglassIcon } from "@/components/hourglass-icon"
import { cn } from "@/lib/utils"

const navLinks = [
  { 
    href: "/#about", 
    label: "Who I Am",
    dropdown: [
      { href: "/#philosophy", label: "Philosophy" }
    ]
  },
  { href: "/services", label: "Services" },
  { href: "/#testimonials", label: "Client Experiences" },
  { href: "/insights", label: "Insights" },
]

export function InsightsNavigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const isInsightsActive = pathname?.startsWith("/insights")

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled 
          ? "bg-navy/98 backdrop-blur-md shadow-sm py-3" 
          : "bg-navy py-5"
      )}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-3 transition-all duration-300 shrink-0"
          >
            <HourglassIcon 
              className="w-9 h-11 transition-colors duration-300"
              variant="cream"
            />
            <span className="font-serif text-lg tracking-wide transition-colors duration-300 hidden sm:inline text-cream">
              Hammer Advisory
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10" ref={dropdownRef}>
            {navLinks.map((link) => (
              link.dropdown ? (
                <div key={link.href} className="relative">
                  <button
                    onClick={() => setOpenDropdown(openDropdown === link.href ? null : link.href)}
                    className="flex items-center gap-1 text-sm tracking-wide transition-colors duration-300 hover:text-gold whitespace-nowrap text-cream/90"
                  >
                    <Link href={link.href} onClick={(e) => { e.stopPropagation(); setOpenDropdown(null); }}>
                      {link.label}
                    </Link>
                    <ChevronDown className={cn(
                      "w-3.5 h-3.5 transition-transform duration-200",
                      openDropdown === link.href && "rotate-180"
                    )} />
                  </button>
                  {openDropdown === link.href && (
                    <div className="absolute top-full left-0 mt-2 py-2 bg-navy/98 backdrop-blur-md rounded-sm shadow-lg border border-cream/10 min-w-[140px]">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setOpenDropdown(null)}
                          className="block px-4 py-2 text-sm text-cream/80 hover:text-gold hover:bg-cream/5 transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm tracking-wide transition-colors duration-300 hover:text-gold whitespace-nowrap",
                    link.href === "/insights" && isInsightsActive
                      ? "text-gold"
                      : "text-cream/90"
                  )}
                >
                  {link.label}
                </Link>
              )
            ))}
            <Button
              asChild
              size="sm"
              className="bg-gold text-navy hover:bg-gold/90 font-medium tracking-wide rounded-sm px-6"
            >
              <Link href="https://calendly.com/gabriellahammer/discovery-call" target="_blank" rel="noopener noreferrer">Let&apos;s Talk</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden transition-colors text-cream p-1"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-navy/98 backdrop-blur-lg border-t border-cream/10 shadow-lg">
            <div className="container mx-auto px-6 py-6 flex flex-col gap-3">
              {navLinks.map((link) => (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "text-lg tracking-wide py-2 hover:text-gold transition-colors block",
                      link.href === "/insights" && isInsightsActive
                        ? "text-gold"
                        : "text-cream/80"
                    )}
                  >
                    {link.label}
                  </Link>
                  {link.dropdown && (
                    <div className="pl-4 mt-1">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="text-cream/60 hover:text-gold text-base tracking-wide py-1.5 block"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Button
                asChild
                className="bg-gold text-navy hover:bg-gold/90 font-medium tracking-wide mt-2"
              >
                <Link href="https://calendly.com/gabriellahammer/discovery-call" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)}>
                  Let&apos;s Talk
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
