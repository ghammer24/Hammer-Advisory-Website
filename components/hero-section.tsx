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
    <section className="relative min-h-screen flex overflow-hidden">
      {/* Portrait as full-width background - zoomed out to show upper body */}
      <div className="absolute inset-0">
        <Image
          src="/images/gabriella-signature.jpg"
          alt="Gabriella Hammer"
          fill
          className="object-cover object-[75%_45%] md:object-[70%_40%] lg:object-[68%_35%]"
          priority
          sizes="100vw"
        />
      </div>
      
      {/* Single seamless gradient overlay - navy fading to transparent */}
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(90deg, 
            #0A1428 0%,
            #0A1428 30%,
            rgba(10, 20, 40, 0.97) 38%,
            rgba(10, 20, 40, 0.9) 45%,
            rgba(10, 20, 40, 0.75) 52%,
            rgba(10, 20, 40, 0.55) 58%,
            rgba(10, 20, 40, 0.35) 64%,
            rgba(10, 20, 40, 0.18) 70%,
            rgba(10, 20, 40, 0.08) 76%,
            rgba(10, 20, 40, 0.02) 82%,
            transparent 90%
          )`
        }}
      />

      {/* Content container */}
      <div className="relative z-10 w-full flex items-center min-h-screen">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-lg lg:max-w-xl"
          >
            {/* COACH label */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[#c9a55c] text-xs tracking-[0.35em] uppercase mb-8 font-medium"
            >
              Coach
            </motion.p>

            {/* Main Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] text-white tracking-tight leading-[1.15] mb-10"
            >
              <span className="block">Master Your State.</span>
              <span className="block">Master Your Life.</span>
            </motion.h1>

            {/* CTA Button */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-[#c9a55c] text-[#0A1428] hover:bg-[#d4b06a] font-semibold px-12 py-7 text-base tracking-wide transition-all duration-300 hover:scale-[1.02] shadow-lg"
              >
                <Link href="https://calendly.com/gabriellahammer/discovery-call" target="_blank" rel="noopener noreferrer">
                  Let&apos;s Talk
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Subtle scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div 
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-10 bg-gradient-to-b from-white/0 via-white/40 to-white/60"
        />
      </motion.div>
    </section>
  )
}
