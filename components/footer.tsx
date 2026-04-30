import Link from "next/link"
import { HourglassIcon } from "@/components/hourglass-icon"

export function Footer() {
  return (
    <footer className="bg-navy py-16 lg:py-20">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Top section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12 pb-12 border-b border-cream/10">
          {/* Logo */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <HourglassIcon className="w-10 h-12" variant="gold" />
              <span className="font-serif text-xl text-cream tracking-wide">
                Hammer Advisory
              </span>
            </div>
            <p className="text-cream/50 text-sm">
              Strategic Alignment & Trusted Advisor
            </p>
          </div>

          {/* Navigation & Social */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-12">
            <nav className="flex flex-wrap gap-8">
              <Link href="#about" className="text-cream/60 hover:text-gold transition-colors text-sm">
                About
              </Link>
              <Link href="#philosophy" className="text-cream/60 hover:text-gold transition-colors text-sm">
                Philosophy
              </Link>
              <Link href="/services" className="text-cream/60 hover:text-gold transition-colors text-sm">
                Services
              </Link>
              <Link href="/insights" className="text-cream/60 hover:text-gold transition-colors text-sm">
                Insights
              </Link>
              <Link href="https://calendly.com/gabriellahammer/discovery-call" target="_blank" rel="noopener noreferrer" className="text-cream/60 hover:text-gold transition-colors text-sm">
                Contact
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-cream/40">
            <p>&copy; {new Date().getFullYear()} Hammer Advisory, a DBA of Not A Moment Sooner, LLC. All rights reserved.</p>
            <span className="hidden sm:inline">|</span>
            <p>Pasadena, California & Virtually Worldwide</p>
          </div>

          {/* Legal links */}
          <div className="flex items-center gap-6 text-sm">
            <Link href="#" className="text-cream/40 hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-cream/40 hover:text-gold transition-colors">
              Disclaimer
            </Link>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 pt-8 border-t border-cream/5">
          <p className="text-cream/30 text-xs leading-relaxed max-w-3xl">
            <span className="font-medium">Disclaimer:</span> Services provided by Hammer Advisory are advisory services focused on strategic alignment and personal development. These services are non-clinical in nature. If you require mental health treatment or clinical care, please consult with an appropriate licensed healthcare provider.
          </p>
        </div>
      </div>
    </footer>
  )
}
