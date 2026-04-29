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
      {/* Background Image - positioned to show full head and shoulders */}
      <div className="absolute inset-0">
        <Image
          src="/images/gabriella-hammer.jpg"
          alt="Gabriella Hammer"
          fill
          className="object-cover object-[90%_25%] sm:object-[85%_22%] md:object-[80%_18%] lg:object-[75%_15%]"
          priority
          sizes="100vw"
        />
        {/* Refined warm overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/40 md:to-transparent" />
        {/* Subtle warm vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 py-32 lg:py-40">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-2xl"
        >
          {/* Logo text */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gold text-sm tracking-[0.3em] uppercase mb-6"
          >
            Hammer Advisory
          </motion.p>

          {/* Main Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream tracking-tight leading-tight mb-6"
          >
            Strategic Alignment for High Achievers Ready for the Next Threshold
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-cream/80 text-lg md:text-xl leading-relaxed max-w-xl mb-10"
          >
            You have built significant success. Yet you sense there is still an internal gap between where you are and what you are truly capable of. We close that gap by training the mind to lead your emotions and body so regulation becomes consistent, ownership becomes automatic, and high performance compounds even when it is uncomfortable.
          </motion.p>

          {/* CTA Button */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex items-start"
          >
            <Button
              asChild
              size="lg"
              className="bg-gold text-navy hover:bg-gold/90 font-medium px-10 py-6 text-base tracking-wide transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-gold/20"
            >
              <Link href="#contact">
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
