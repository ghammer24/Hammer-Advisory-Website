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
          src="/images/gabriella-hero-full.jpg"
          alt="Gabriella Hammer"
          fill
          className="object-cover object-[100%_30%] sm:object-[100%_25%] md:object-[100%_20%] lg:object-[100%_15%] brightness-105 contrast-105"
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
          className="max-w-md sm:max-w-lg md:max-w-xl lg:max-w-lg xl:max-w-xl"
        >
          {/* Above headline label */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gold text-sm tracking-[0.3em] uppercase mb-6"
          >
            Coach
          </motion.p>

          {/* Main Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl text-cream tracking-tight leading-tight mb-8"
          >
            <span className="block">Master Your State.</span>
            <span className="block">Master Your Life.</span>
          </motion.h1>

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
