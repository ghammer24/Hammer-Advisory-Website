"use client"

import { useRef } from "react"
import { MapPin } from "lucide-react"
import { motion, useInView } from "framer-motion"

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" })

  return (
      <section
        id="contact"
        ref={sectionRef}
        className="py-16 lg:py-24 bg-muted"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-xl mx-auto text-center mb-8"
          >
            <p className="text-gold text-sm tracking-[0.2em] uppercase mb-3">
              Begin Your Journey
            </p>
            
            <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl text-navy mb-3 leading-tight text-balance">
              Let&apos;s Find Out If This Is the Right Fit
            </h2>

            <p className="text-navy/70 text-sm leading-relaxed">
              If something on this page named something you haven&apos;t been able to name yourself, that&apos;s worth a conversation. Book a discovery call.
            </p>
            
            <p className="text-navy/60 text-xs mt-3 italic">
              This work is by application only.
            </p>
          </motion.div>

          {/* Zapier Form - Centered */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-lg mx-auto"
          >
            <iframe 
              src="https://interfaces.zapier.com/embed/page/cmo39egjj0005c77wyex458ou?noBackground=false"
              className="w-full rounded-sm"
              style={{ height: "580px" }}
              frameBorder="0"
              title="Book a Discovery Conversation"
            />
          </motion.div>

          {/* Bottom info row */}
          <div className="max-w-lg mx-auto mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
            <div className="flex items-center gap-2 text-navy/50 text-sm">
              <MapPin className="w-4 h-4 text-gold" />
              <span>Pasadena, California & Virtually Worldwide</span>
            </div>
            <span className="hidden sm:inline text-navy/30">|</span>
            <p className="text-navy/50 text-sm">
              All conversations held in strict confidence.
            </p>
          </div>
        </div>
      </section>
  )
}
