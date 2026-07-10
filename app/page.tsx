import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { PhilosophySection } from "@/components/philosophy-section"
import { ContactSection } from "@/components/contact-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <PhilosophySection />
      <ContactSection />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
