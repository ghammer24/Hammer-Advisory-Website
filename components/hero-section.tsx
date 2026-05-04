"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image - brighter, more prominent face */}
      <div className="absolute inset-0">
        <Image
          src="/images/gabriella-hammer.jpg"
          alt="Gabriella Hammer"
          fill
          className="object-cover object-[90%_25%] sm:object-[85%_22%] md:object-[80%_18%] lg:object-[75%_15%] brightness-110 contrast-105"
          priority
          sizes="100vw"
        />
        {/* Reduced overlay - cleaner left edge for text, clean right edge (no fade) */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/60 to-transparent" />
        {/* Subtle bottom vignette only */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy/20 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 py-32 lg:py-40">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-2xl"
        >
          {/* Above headline label */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gold text-xs tracking-[0.35em] uppercase mb-8 font-light"
          >
            Coach
          </motion.p>

          {/* Main Heading - balanced sizing: 2.4rem mobile, 3.6rem desktop */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif text-cream tracking-tight leading-[1.2] mb-6"
            style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)' }}
          >
            <span className="block">You Built the Life.</span>
            <span className="block">Why Doesn&apos;t It Feel Like Yours?</span>
          </motion.h1>

          {/* Subheading - 1.1rem mobile, 1.25rem desktop, warm beige/taupe */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-light tracking-wide mb-10 leading-relaxed"
            style={{ fontSize: 'clamp(1.1rem, 1.4vw, 1.25rem)', color: 'rgba(200, 180, 160, 0.85)' }}
          >
            Strategic alignment that turns success into fulfillment.
          </motion.p>

          {/* CTA Button - high contrast gold with border */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-start"
          >
            <Button
              asChild
              size="lg"
              className="bg-[#d4a853] text-[#0a1628] hover:bg-[#e0b863] font-semibold px-10 py-6 text-base tracking-wide transition-all duration-300 hover:scale-[1.02] shadow-xl shadow-black/30 border-2 border-[#e8c36a]"
            >
              <Link href="https://calendly.com/gabriellahammer/discovery-call" target="_blank" rel="noopener noreferrer">
                Let&apos;s Talk
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Minimal elegant scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div 
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-10 bg-gradient-to-b from-cream/0 via-cream/40 to-cream/60"
        />
      </motion.div>
    </section>
  )
}
