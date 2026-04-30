import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { InsightsNavigation } from "@/components/insights-navigation"
import { Footer } from "@/components/footer"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { Clock, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Insights | Hammer Advisory",
  description: "Thoughts on strategic alignment, internal state, and identity-level leadership from Gabriella Hammer.",
  openGraph: {
    title: "Insights | Hammer Advisory",
    description: "Thoughts on strategic alignment, internal state, and identity-level leadership.",
  },
}

// Placeholder blog posts - replace with your CMS or data source
const posts = [
  {
    slug: "the-hidden-constraint",
    title: "The Hidden Constraint High Performers Can't Quite Name",
    excerpt: "You've built the career. You have the team. Yet somehow something still feels off. This is a common thread among high-performing executives. The strategy is solid, but there's one constraint most leadership frameworks never mention.",
    publishedAt: "2026-04-21",
    readTime: "7 min read",
    featured: true,
  },
]

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export default function InsightsPage() {
  const featuredPost = posts.find((post) => post.featured)
  const otherPosts = posts.filter((post) => !post.featured)

  return (
    <main className="min-h-screen bg-cream">
      <InsightsNavigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl">
            <p className="text-gold text-sm tracking-[0.2em] uppercase mb-4">
              Insights
            </p>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy tracking-tight leading-tight mb-6">
              Thoughts on Strategic Alignment
            </h1>
            <p className="text-navy/60 text-lg md:text-xl leading-relaxed">
              Thoughts on strategic alignment, state regulation, and recursive self-awareness for high performers.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="pb-16 lg:pb-24">
          <div className="container mx-auto px-6 lg:px-12">
            <Link 
              href={`/insights/${featuredPost.slug}`}
              className="group block"
            >
              <article className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Featured Image */}
                  <div className="aspect-[4/3] md:aspect-auto bg-navy/5 relative min-h-[280px] md:min-h-[360px]">
                    <Image
                      src="/images/clarity-reflection.jpg"
                      alt="Still mountain lake at dawn with perfect mirror reflection - representing inner clarity and state regulation"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="p-8 lg:p-10 flex flex-col justify-center">
                    <p className="text-gold text-xs tracking-[0.2em] uppercase mb-3">
                      Featured
                    </p>
                    <h2 className="font-serif text-xl md:text-2xl lg:text-3xl text-navy mb-4 group-hover:text-gold transition-colors leading-tight">
                      {featuredPost.title}
                    </h2>
                    <p className="text-navy/70 leading-relaxed mb-6">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-navy/50 mb-6">
                      <span>{formatDate(featuredPost.publishedAt)}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readTime}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gold font-medium text-sm group-hover:gap-3 transition-all duration-300">
                      Read Article <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          </div>
        </section>
      )}

      {/* Other Posts Grid */}
      {otherPosts.length > 0 && (
        <section className="pb-20 lg:pb-28">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherPosts.map((post) => (
                <Link 
                  key={post.slug}
                  href={`/insights/${post.slug}`}
                  className="group block"
                >
                  <article className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
                    {/* Image placeholder */}
                    <div className="aspect-[16/10] bg-navy/5 relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-navy/20 text-sm">Post Image</span>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="font-serif text-lg lg:text-xl text-navy mb-3 group-hover:text-gold transition-colors leading-tight">
                        {post.title}
                      </h3>
                      <p className="text-navy/70 text-sm leading-relaxed mb-4 flex-1">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-navy/50">
                        <span>{formatDate(post.publishedAt)}</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter Signup Section */}
      <section className="py-16 lg:py-20 bg-white/50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-xl mx-auto">
            <div className="bg-white rounded-lg p-8 md:p-10 shadow-sm border border-navy/5">
              <NewsletterSignup variant="compact" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-navy">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-serif text-2xl md:text-3xl text-cream mb-4">
            Ready to explore what&apos;s next?
          </h2>
          <p className="text-cream/70 mb-8 max-w-xl mx-auto">
            If something here resonated, that&apos;s worth a conversation.
          </p>
          <Link 
            href="https://calendly.com/gabriellahammer/discovery-call"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gold text-navy px-8 py-4 font-medium tracking-wide hover:bg-gold/90 transition-colors rounded"
          >
            Book a Discovery Call
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
