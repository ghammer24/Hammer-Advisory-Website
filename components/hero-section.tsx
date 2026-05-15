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
      {/* Smooth gradient background - dark navy left to warm beige right */}
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(90deg, 
            #0A1428 0%, 
            #0A1428 25%, 
            #0f1d32 35%,
            #1a2a42 45%,
            #3d4a5c 55%,
            #8a8578 65%,
            #c4b8a8 75%,
            #e8dfd0 85%,
            #f5efe6 100%
          )`
        }}
      />
      
      {/* Portrait image - softly blended on right side */}
      <div className="absolute right-0 top-0 bottom-0 w-[55%] md:w-[50%] lg:w-[45%]">
        <Image
          src="/images/gabriella-signature.jpg"
          alt="Gabriella Hammer"
          fill
          className="object-cover object-[center_20%] brightness-105 contrast-105"
          priority
          sizes="55vw"
        />
        {/* Soft left edge blend into gradient */}
        <div 
          className="absolute inset-y-0 left-0 w-48 md:w-64"
          style={{
            background: `linear-gradient(90deg, 
              #c4b8a8 0%,
              rgba(196, 184, 168, 0.95) 20%,
              rgba(196, 184, 168, 0.7) 40%,
              rgba(196, 184, 168, 0.4) 60%,
              rgba(196, 184, 168, 0.15) 80%,
              transparent 100%
            )`
          }}
        />
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
