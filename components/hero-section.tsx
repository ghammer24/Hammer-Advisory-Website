"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToNextSection = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-cream">
      {/* Subtle geometric background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#0A1428" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-cream to-gold/5" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center min-h-screen py-24 lg:py-0">
          
          {/* Left side - Text content (60%) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-3 order-2 lg:order-1"
          >
            {/* Logo text */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gold text-sm tracking-[0.3em] uppercase mb-8"
            >
              Hammer Advisory
            </motion.p>

            {/* Main Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-navy tracking-tight leading-[1.1] mb-8"
            >
              Close the Gap Between Outer Success and Inner Alignment
            </motion.h1>

            {/* Subheadline */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-navy/70 text-lg md:text-xl lg:text-2xl leading-relaxed max-w-2xl mb-10"
            >
              You&apos;ve built significant success. Yet something still feels off. I help high achievers close the internal gap through strategic alignment.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <Button
                asChild
                size="lg"
                className="bg-navy text-cream hover:bg-navy/90 font-medium px-8 py-6 text-base tracking-wide transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-navy/10"
              >
                <Link href="https://calendly.com/gabriellahammer/discovery-call" target="_blank" rel="noopener noreferrer">
                  Schedule Your Discovery Call
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={scrollToNextSection}
                className="border-navy/20 text-navy hover:bg-navy/5 font-medium px-8 py-6 text-base tracking-wide transition-all duration-300"
              >
                Learn More
                <ArrowDown className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>

            {/* Social Proof */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-navy/50 text-sm tracking-wide"
            >
              Trusted by C-suite leaders and high performers
            </motion.p>
          </motion.div>

          {/* Right side - Portrait (40%) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="lg:col-span-2 order-1 lg:order-2"
          >
            <div className="relative aspect-[3/4] lg:aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none">
              {/* Decorative frame */}
              <div className="absolute -inset-3 lg:-inset-4 border border-gold/20 rounded-sm" />
              <div className="absolute -inset-1.5 lg:-inset-2 border border-navy/10 rounded-sm" />
              
              {/* Image container */}
              <div className="relative w-full h-full overflow-hidden rounded-sm shadow-2xl shadow-navy/20">
                <Image
                  src="/images/gabriella-hammer.jpg"
                  alt="Gabriella Hammer - Executive Advisor and Founder of Hammer Advisory"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 768px) 90vw, (max-width: 1024px) 50vw, 40vw"
                />
                {/* Subtle overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/10 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden lg:block"
      >
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-navy/40 text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-navy/40 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  )
}
