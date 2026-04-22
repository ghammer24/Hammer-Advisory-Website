"use client"

import { useRef } from "react"
import { Target, Zap, Heart } from "lucide-react"
import { motion, useInView } from "framer-motion"

const principles = [
  {
    icon: Heart,
    title: "State Regulation",
    description: "Every decision is downstream of your internal state. We help you regulate your state so you can show up with steadier presence and clearer thinking.",
  },
  {
    icon: Target,
    title: "Recursive Self-Awareness",
    description: "From that regulated state, you make decisions, receive real-world feedback, and reflect. This recursive self-awareness reveals patterns and blind spots as they happen.",
  },
  {
    icon: Zap,
    title: "Lasting Transformation",
    description: "Through repeated cycles of regulation, decision-making, feedback, and reflection, the changes compound. You build a new, more consistent identity that performs at a higher level without constant effort.",
  },
]

export function PhilosophySection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section
      id="philosophy"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-navy relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }} />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left column - Main content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="font-serif text-2xl lg:text-3xl text-cream mb-6 leading-tight text-balance">
              The Philosophy.
            </h2>

            <div className="space-y-4 text-cream/70 text-sm leading-relaxed">
              <p>
                Your current state shapes everything: your decisions, how you show up, the relationships you lead, and the opportunities you notice.
              </p>

              <p>
                Most high achievers already know what to do. The real constraint is usually internal.
              </p>

              <p>
                At Hammer Advisory, we help you close those internal gaps through consistent state regulation and recursive self-awareness. You regulate your state, act from it, receive feedback, and reflect. Each cycle compounds.
              </p>
              
              <p className="text-cream/90 font-medium">
                The goal is simple. Build the internal foundation so you can eventually self-guide with no gaps in identity or performance.
              </p>
            </div>

            {/* Quote */}
            <blockquote className="mt-8 pl-4 border-l-2 border-gold">
              <p className="text-cream/90 text-sm italic font-serif">
                &ldquo;Everything in perfect timing… not a moment sooner.&rdquo;
              </p>
              <cite className="text-gold/80 text-xs mt-2 block not-italic">
                Gabriella Hammer
              </cite>
            </blockquote>
          </motion.div>

          {/* Right column - Principles */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="space-y-8"
          >
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="flex gap-6 group"
              >
                <div className="w-12 h-12 shrink-0 rounded-full bg-cream/5 border border-cream/10 flex items-center justify-center group-hover:border-gold/50 transition-colors">
                  <principle.icon className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-cream mb-1">
                    {principle.title}
                  </h3>
                  <p className="text-cream/60 text-sm leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
