import { NewsletterSignup } from "@/components/newsletter-signup"

export function NewsletterSection() {
  return (
    <section className="py-16 lg:py-20 bg-cream border-t border-navy/5">
      <div className="container mx-auto px-6 lg:px-12">
        <NewsletterSignup variant="homepage" />
      </div>
    </section>
  )
}
