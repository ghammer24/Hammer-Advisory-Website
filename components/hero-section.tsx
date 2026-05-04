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
        {/* Left side - Rich gradient background */}
        <div 
          className="w-[55%] flex items-center relative"
          style={{
            background: `
              radial-gradient(ellipse 80% 50% at 20% 40%, rgba(30, 41, 59, 0.8) 0%, transparent 50%),
              radial-gradient(ellipse 60% 40% at 80% 80%, rgba(45, 55, 72, 0.6) 0%, transparent 40%),
              linear-gradient(180deg, 
                #0f172a 0%, 
                #1a1f2e 25%, 
                #151a28 50%, 
                #1e293b 75%,
                #0f172a 100%
              )
            `
          }}
        >
          {/* Subtle texture overlay */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            }}
          />
          
          <div className="px-12 xl:px-20 py-20 max-w-2xl ml-auto mr-12 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              {/* COACH label - elegant, warm gold */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-sm tracking-[0.3em] uppercase mb-8 font-normal"
                style={{ color: '#c9a86c' }}
              >
                Coach
              </motion.p>

              {/* Main Heading - cream/white */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="font-serif tracking-tight leading-[1.15] mb-6"
                style={{ fontSize: 'clamp(2.8rem, 3.5vw, 3.6rem)', color: '#f5f0e8' }}
              >
                <span className="block">You Built the Life.</span>
                <span className="block mt-1">Why Doesn&apos;t It Feel Like Yours?</span>
              </motion.h1>

              {/* Subheading - soft warm tone, lighter weight */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="font-light tracking-wide mb-10 leading-relaxed text-lg"
                style={{ color: 'rgba(210, 190, 170, 0.85)' }}
              >
                Strategic alignment that turns success into fulfillment.
              </motion.p>

              {/* CTA Button - Gold/amber */}
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
          {/* Subtle blend into gradient side */}
          <div 
            className="absolute inset-0 w-32"
            style={{
              background: 'linear-gradient(to right, #0f172a 0%, rgba(15, 23, 42, 0.8) 30%, transparent 100%)'
            }}
          />
        </div>
      </div>

      {/* Mobile/Tablet Layout: Stacked vertically */}
      <div className="lg:hidden min-h-screen flex flex-col">
        {/* Mobile content area with gradient */}
        <div 
          className="px-6 md:px-10 pt-28 pb-12 md:pt-32 md:pb-16 relative"
          style={{
            background: `
              radial-gradient(ellipse 100% 60% at 30% 30%, rgba(30, 41, 59, 0.7) 0%, transparent 50%),
              linear-gradient(180deg, 
                #0f172a 0%, 
                #1a1f2e 40%, 
                #151a28 70%,
                #1e293b 100%
              )
            `
          }}
        >
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
              style={{ color: '#c9a86c' }}
            >
              Coach
            </motion.p>

            {/* Main Heading - comfortable mobile size */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-serif tracking-tight leading-[1.2] mb-5"
              style={{ fontSize: 'clamp(2rem, 7vw, 2.5rem)', color: '#f5f0e8' }}
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
              style={{ fontSize: '1.1rem', color: 'rgba(210, 190, 170, 0.85)' }}
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
          <div 
            className="absolute inset-x-0 top-0 h-20"
            style={{
              background: 'linear-gradient(to bottom, #1e293b 0%, transparent 100%)'
            }}
          />
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
