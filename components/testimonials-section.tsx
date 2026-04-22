"use client"

import { useRef } from "react"
import { Quote } from "lucide-react"
import { motion, useInView } from "framer-motion"

const testimonials = [
  {
    quote: "I was spread so thin I genuinely thought I had hit my ceiling. I was doing everything right on paper and nothing was working. Gabriella helped me see that the problem wasn't my business.",
    role: "Top 5% Financial Advisor",
  },
  {
    quote: "I'm graduating, I have the capital, I have the vision. Gabriella is part of my team. That's not changing. Let's rip it.",
    role: "Founder, Pre-Series A Startup",
  },
  {
    quote: "I knew how to perform. That was never the issue. But there's a version of you that competes and a version of you that leads. Gabriella helped me find the one that could do both.",
    role: "Professional Athlete",
  },
]

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-cream"
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-gold text-sm tracking-[0.2em] uppercase mb-4">
            Client Experiences
          </p>
          <h2 className="font-serif text-2xl lg:text-3xl text-navy mb-6 text-balance">
            Transformations in Their Words
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="relative"
            >
              {/* Quote icon */}
              <Quote className="w-10 h-10 text-gold/20 mb-6" />

              {/* Quote text */}
              <blockquote className="text-navy/80 text-lg leading-relaxed mb-6 font-light italic">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Role */}
              <div className="pt-6 border-t border-navy/10">
                <p className="text-navy/60 text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        
      </div>
    </section>
  )
}
