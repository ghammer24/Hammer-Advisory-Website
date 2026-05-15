"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-cream"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-navy/5 rounded-sm overflow-hidden relative">
              <Image
                src="/images/gabriella-signature.jpg"
                alt="Gabriella Hammer, Founder of Hammer Advisory"
                fill
                className="object-cover object-[50%_5%]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-gold/30 rounded-sm" />
              <div className="absolute -top-3 -left-3 w-16 h-16 border border-sage/20 rounded-sm" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <p className="text-gold text-sm tracking-[0.2em] uppercase mb-4">
              Who I Am
            </p>
            
            <h2 className="font-serif text-2xl lg:text-3xl text-navy mb-6 leading-tight text-balance">
              Who I Am
            </h2>

            <div className="space-y-5 text-navy/70 text-sm lg:text-base leading-relaxed">
              <p>
                I am Gabriella Hammer, founder of Hammer Advisory.
              </p>
              
              <p>
                With a background as a PMH-NP and years in critical care, I bring a precise understanding of the human system: what true regulation looks like, what dysregulation costs, and how to build real internal consistency.
              </p>

              <p>
                I help people regulate their state, choose which thoughts to follow, and act from the ones that serve them. Simple as that. When your nervous system is steady and your mind is clear, you naturally tell yourself a better story and live it.
              </p>
              
              <p>
                At Hammer Advisory, this is the work. The result is transformation: you consciously choosing who you want to be. In every moment. No matter what.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
