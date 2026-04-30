import { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ArrowRight, Calendar, Users, Mic } from "lucide-react"

export const metadata: Metadata = {
  title: "Services | Hammer Advisory",
  description: "Strategic alignment services for executives and high achievers. Book a complimentary discovery call or explore our ongoing advisory partnership.",
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-navy">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gold text-sm tracking-[0.2em] uppercase mb-4">
              Services
            </p>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-cream tracking-tight leading-tight mb-6">
              How We Work Together
            </h1>
            <p className="text-cream/70 text-lg leading-relaxed max-w-2xl mx-auto">
              Strategic alignment is not a quick fix. It is a deliberate process of closing the internal gaps that separate where you are from what you are truly capable of.
            </p>
          </div>
        </div>
      </section>

      {/* Services Content */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto space-y-16 lg:space-y-24">

            {/* Discovery Call */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-gold" />
                  </div>
                  <span className="text-gold text-xs tracking-[0.15em] uppercase font-medium">
                    Complimentary
                  </span>
                </div>
                <h2 className="font-serif text-2xl md:text-3xl text-navy tracking-tight mb-4">
                  Discovery Call
                </h2>
                <p className="text-navy/70 leading-relaxed mb-6">
                  A focused 30-minute conversation to explore whether we are a good fit. This is not a sales call. It is a genuine exchange to understand where you are, what you are working toward, and whether this work makes sense for your situation.
                </p>
                <ul className="space-y-3 text-navy/60 text-sm mb-8">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                    <span>30 minutes, no obligation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                    <span>Understand your current situation and goals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                    <span>Determine if this work is the right fit</span>
                  </li>
                </ul>
                <Link 
                  href="#book"
                  className="inline-flex items-center gap-2 bg-gold text-navy px-6 py-3 font-medium tracking-wide hover:bg-gold/90 transition-colors rounded-sm"
                >
                  Book a Discovery Call
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Calendly Embed */}
              <div className="bg-white rounded-lg shadow-sm border border-navy/5 overflow-hidden">
                <div 
                  className="calendly-inline-widget" 
                  data-url="https://calendly.com/gabriellahammer/discovery-call"
                  style={{ minWidth: "320px", height: "700px" }}
                />
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-navy/10" />

            {/* Strategic Alignment Partnership */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-gold" />
                </div>
                <span className="text-gold text-xs tracking-[0.15em] uppercase font-medium">
                  Ongoing Advisory
                </span>
              </div>
              <h2 className="font-serif text-2xl md:text-3xl text-navy tracking-tight mb-4">
                Strategic Alignment Partnership
              </h2>
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
                <div>
                  <p className="text-navy/70 leading-relaxed mb-6">
                    High-touch, 1:1 advisory for executives and leaders who have achieved significant success but sense an internal gap between where they are and what they are truly capable of.
                  </p>
                  <p className="text-navy/70 leading-relaxed mb-6">
                    We help you create deep congruence between your internal state and your external pace so your leadership, decisions, and presence feel fully aligned with the level of success you have built.
                  </p>
                  <p className="text-navy/60 text-sm italic mb-8">
                    This is selective, application-only work.
                  </p>
                </div>
                <div className="bg-navy/5 rounded-lg p-8">
                  <h3 className="font-serif text-lg text-navy mb-4">What This Includes</h3>
                  <ul className="space-y-3 text-navy/70 text-sm">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                      <span>Regular 1:1 advisory sessions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                      <span>State regulation training and practice</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                      <span>Recursive self-awareness development</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                      <span>Real-time support between sessions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                      <span>Personalized alignment framework</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-8">
                <Link 
                  href="#book"
                  className="inline-flex items-center gap-2 bg-navy text-cream px-6 py-3 font-medium tracking-wide hover:bg-navy/90 transition-colors rounded-sm"
                >
                  Apply via Discovery Call
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-navy/10" />

            {/* Workshops & Speaking */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center">
                  <Mic className="w-5 h-5 text-navy/40" />
                </div>
                <span className="text-navy/40 text-xs tracking-[0.15em] uppercase font-medium">
                  Coming Soon
                </span>
              </div>
              <h2 className="font-serif text-2xl md:text-3xl text-navy/60 tracking-tight mb-4">
                Workshops & Speaking Engagements
              </h2>
              <p className="text-navy/50 leading-relaxed max-w-2xl">
                Group workshops and speaking engagements for organizations seeking to develop internal alignment and state regulation capabilities across their leadership teams. Details coming soon.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 lg:py-20 bg-navy">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mx-auto text-center">
            <blockquote className="font-serif text-xl md:text-2xl lg:text-3xl text-cream/90 italic leading-relaxed mb-6">
              &ldquo;Everything in perfect timing... not a moment sooner.&rdquo;
            </blockquote>
            <p className="text-gold text-sm tracking-wide">
              — Gabriella Hammer
            </p>
          </div>
        </div>
      </section>

      {/* Book Section with Zapier Form */}
      <section id="book" className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-xl mx-auto text-center mb-8">
            <h2 className="font-serif text-2xl md:text-3xl text-navy tracking-tight mb-4">
              Book a Discovery Call
            </h2>
            <p className="text-navy/70 leading-relaxed">
              Ready to explore whether this work is right for you? Schedule a complimentary 30-minute conversation.
            </p>
          </div>

          {/* Zapier Form */}
          <div className="max-w-lg mx-auto">
            <iframe 
              src="https://interfaces.zapier.com/embed/page/cmo39egjj0005c77wyex458ou?noBackground=false"
              className="w-full rounded-sm"
              style={{ height: "580px" }}
              frameBorder="0"
              title="Book a Discovery Conversation"
            />
          </div>

          <p className="text-center text-navy/50 text-sm mt-6">
            All conversations held in strict confidence.
          </p>
        </div>
      </section>

      {/* Calendly Script for Discovery Call section */}
      <Script 
        src="https://assets.calendly.com/assets/external/widget.js" 
        strategy="lazyOnload"
      />

      <Footer />
    </main>
  )
}
