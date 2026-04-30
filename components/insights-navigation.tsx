"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { HourglassIcon } from "@/components/hourglass-icon"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/#about", label: "Who I Am" },
  { href: "/#philosophy", label: "Philosophy" },
  { href: "/#testimonials", label: "Client Experiences" },
  { href: "/insights", label: "Insights" },
]

export function InsightsNavigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
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

          {/* Desktop Navigation - use lg breakpoint for proper spacing */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
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
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "text-lg tracking-wide py-2 hover:text-gold transition-colors",
                    link.href === "/insights" && isInsightsActive
                      ? "text-gold"
                      : "text-cream/80"
                  )}
                >
                  {link.label}
                </Link>
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
