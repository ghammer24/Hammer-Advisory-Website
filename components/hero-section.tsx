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
    <section className="relative min-h-screen overflow-hidden">
      {/* Desktop Layout: Side by side */}
      <div className="hidden lg:flex min-h-screen">
        {/* Left side - Dark content area */}
        <div className="w-[55%] bg-navy flex items-center">
          <div className="px-12 xl:px-20 py-20 max-w-2xl ml-auto mr-12">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              {/* COACH label - larger, more visible */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-sm tracking-[0.3em] uppercase mb-8 font-normal"
                style={{ color: '#c4a97d' }}
              >
                Coach
              </motion.p>

              {/* Main Heading */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="font-serif text-cream tracking-tight leading-[1.15] mb-6"
                style={{ fontSize: 'clamp(2.8rem, 3.5vw, 3.6rem)' }}
              >
                <span className="block">You Built the Life.</span>
                <span className="block mt-1">Why Doesn&apos;t It Feel Like Yours?</span>
              </motion.h1>

              {/* Subheading */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="font-light tracking-wide mb-10 leading-relaxed text-lg"
                style={{ color: 'rgba(200, 180, 160, 0.8)' }}
              >
                Strategic alignment that turns success into fulfillment.
              </motion.p>

              {/* CTA Button */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
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
        </div>

        {/* Right side - Portrait with more prominence */}
        <div className="w-[45%] relative">
          <Image
            src="/images/gabriella-hammer.jpg"
            alt="Gabriella Hammer"
            fill
            className="object-cover object-[center_15%] brightness-105 contrast-105"
            priority
            sizes="45vw"
          />
          {/* Subtle blend into dark side */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-transparent to-transparent w-24" />
        </div>
      </div>

      {/* Mobile/Tablet Layout: Stacked vertically */}
      <div className="lg:hidden min-h-screen flex flex-col">
        {/* Mobile content area */}
        <div className="bg-navy px-6 md:px-10 pt-28 pb-12 md:pt-32 md:pb-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-lg mx-auto"
          >
            {/* COACH label */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-sm tracking-[0.3em] uppercase mb-6 font-normal"
              style={{ color: '#c4a97d' }}
            >
              Coach
            </motion.p>

            {/* Main Heading - comfortable mobile size */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-serif text-cream tracking-tight leading-[1.2] mb-5"
              style={{ fontSize: 'clamp(2rem, 7vw, 2.5rem)' }}
            >
              <span className="block">You Built the Life.</span>
              <span className="block mt-1">Why Doesn&apos;t It Feel Like Yours?</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="font-light tracking-wide mb-8 leading-relaxed"
              style={{ fontSize: '1.1rem', color: 'rgba(200, 180, 160, 0.8)' }}
            >
              Strategic alignment that turns success into fulfillment.
            </motion.p>

            {/* CTA Button */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-[#d4a853] text-[#0a1628] hover:bg-[#e0b863] font-semibold px-8 py-5 text-base tracking-wide transition-all duration-300 shadow-xl shadow-black/30 border-2 border-[#e8c36a]"
              >
                <Link href="https://calendly.com/gabriellahammer/discovery-call" target="_blank" rel="noopener noreferrer">
                  Let&apos;s Talk
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Mobile portrait - full width, no overlap */}
        <div className="relative flex-1 min-h-[50vh]">
          <Image
            src="/images/gabriella-hammer.jpg"
            alt="Gabriella Hammer"
            fill
            className="object-cover object-[center_15%] brightness-105 contrast-105"
            priority
            sizes="100vw"
          />
          {/* Subtle top blend */}
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-navy to-transparent" />
        </div>
      </div>

      {/* Scroll indicator - desktop only */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden lg:block"
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
