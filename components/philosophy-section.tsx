"use client"

import { useRef } from "react"
import { Target, Zap, Heart } from "lucide-react"
import { motion, useInView } from "framer-motion"

const principles = [
  {
    icon: Heart,
    title: "State Regulation",
    description: "Every decision flows from your internal state. We train you to stay regulated under pressure, so you can show up calmer, clearer, and more present when it matters most.",
  },
  {
    icon: Target,
    title: "Recursive Self Awareness",
    description: "Act. Get real feedback. Reflect with full ownership and no blame. Repeat. This cycle quickly reveals blind spots and accelerates real growth.",
  },
  {
    icon: Zap,
    title: "Lasting Transformation",
    description: "Through repeated cycles of regulation, action, ownership, and reflection, real change compounds and your identity shifts.",
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
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-2xl lg:text-3xl text-cream leading-tight">
            The Philosophy.
          </h2>
        </motion.div>

        {/* Three Pillars */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-cream/5 border border-cream/10 flex items-center justify-center group-hover:border-gold/50 transition-colors">
                <principle.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-serif text-xl text-cream mb-3">
                {principle.title}
              </h3>
              <p className="text-cream/60 text-sm leading-relaxed">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
