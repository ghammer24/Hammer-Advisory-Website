import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { InsightsNavigation } from "@/components/insights-navigation"
import { Footer } from "@/components/footer"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { Clock, ArrowLeft, ArrowRight } from "lucide-react"

// This would come from your CMS or data source
const posts: Record<string, {
  title: string
  subtitle: string
  excerpt: string
  publishedAt: string
  readTime: string
  content: React.ReactNode
}> = {
  "the-hidden-constraint": {
    title: "The Hidden Constraint High Performers Can't Quite Name",
    subtitle: "State regulation and recursive self-awareness as the foundation of lasting transformation",
    excerpt: "You've built the career. You have the team. Yet somehow something still feels off. This is a common thread among high-performing executives. The strategy is solid, but there's one constraint most leadership frameworks never mention.",
    publishedAt: "2026-04-21",
    readTime: "7 min read",
    content: (
      <>
        <p className="text-navy/70 leading-[1.75] mb-5 first-letter:text-2xl first-letter:font-serif first-letter:text-navy first-letter:mr-1">
          You&apos;ve built the career. You have the team. You can scroll through page after page of results. Yet somehow... something still just feels off.
        </p>

        <p>
          Not off to the point of total compromise, but a persistent, subtle friction that you can&apos;t quite shake.
        </p>

        <p>
          This is a common thread among high-performing executives and leaders. The strategy is solid. The execution is there. But there is one constraint most leadership frameworks never mention: your internal state.
        </p>

        <p>
          Your state at any given moment shapes everything. It is the subtle filter through which you make decisions, show up in rooms, lead relationships, and notice (or miss) opportunities.
        </p>

        <p>
          Many high achievers treat state as background noise, something to push through with more discipline, more output, or another round of coffee. More, more, more. But I invite you to pause here for a moment of gentle inquiry: instead of &ldquo;more,&rdquo; ask yourself, &ldquo;What is enough?&rdquo;
        </p>

        <h2>Where This Understanding Comes From</h2>

        <p>
          After years in critical care and psychiatric mental health nursing, I learned what true regulation looks like and what dysregulation costs in the highest-stakes environments. That understanding now sits at the heart of the non-clinical advisory work I do with leaders who sense the next level requires something different from themselves.
        </p>

        <h2>What Changes When Your State Is Regulated</h2>

        <p>
          When your internal state is regulated, decisions flow with greater clarity. Your presence feels steady rather than reactive. Relationships land as collaborative instead of effortful. Opportunities that were always there suddenly become visible.
        </p>

        <p>
          When it is dysregulated, even subtly, the opposite occurs. Decisions are made from a noisier internal place. Presence stays competent but lacks the ease that draws people in. And the patterns worth paying attention to stay just out of reach.
        </p>

        <h2>The Hidden Cost of Friction Left Unaddressed</h2>

        <p>
          One dysregulated moment cascades into a slightly off-strategy choice, a conversation that lands heavier than intended, or engagement with a distraction that risks what you&apos;ve built. Weeks end with a quiet, creeping exhaustion that gets subconsciously reframed as the cost of caring deeply about your work.
        </p>

        <p>
          Over months and years, these micro-frictions accumulate. You wake up living a life shaped by choices made from a dysregulated state, an identity that feels like something you keep trying on, but it never quite fits. That is, perhaps, the &ldquo;off&rdquo; feeling itself, the macro friction underneath everything, the one that quietly contains all the others and refuses to be outworked.
        </p>

        <p>
          Most leaders respond by doubling down on external tactics: new frameworks, better time management, more aggressive goals. They treat the internal gap as something to simply outwork. The result? Temporary wins followed by the same quiet return of that feeling.
        </p>

        <h2>The Framework: Two Practices That Change Everything</h2>

        <p>
          The real path forward is different. It&apos;s building the internal architecture that makes sustained high performance not just possible, but natural. That architecture rests on two practices I return to with every client: consistent state regulation and recursive self-awareness.
        </p>

        <p>
          Friction is the entry point. It&apos;s what signals that your state needs attention. From there, the work begins. Regulate your state first. This isn&apos;t about feeling calm 24/7. The contrast that friction provides is necessary because we wouldn&apos;t recognize regulation without it. This is about developing a repeatable way to return to the internal condition where your best thinking and leadership naturally emerge.
        </p>

        <blockquote>
          <p>&ldquo;Without one, we would not know the other.&rdquo;</p>
        </blockquote>

        <p>
          From that regulated state, you make the decision. You receive real-world feedback. You reflect. Each loop reveals patterns and blind spots in real time rather than months later during a painful review. Through repeated cycles, the changes compound. You don&apos;t just perform better in isolated moments. You build a new, more consistent identity that finally feels like you and performs at a higher level without constant effort.
        </p>

        {/* Diagram */}
        <figure className="my-12">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-21%20at%206.23.11%E2%80%AFPM-LezqerCeoQGD4MmFshznAZ34ai9bSS.png"
            alt="The Recursive Loop: Friction initiates the loop. 1) Regulate State - Return to your best baseline. 2) Make Decision - Act from a clear internal place. 3) Receive Feedback - Real-world signal returns. 4) Reflect - Notice patterns and blind spots. Each loop compounds."
            width={1200}
            height={900}
            className="w-full rounded-lg"
          />
          <figcaption className="text-center text-navy/50 text-sm mt-4 italic">
            The recursive loop: how friction becomes transformation through state regulation and self-awareness.
          </figcaption>
        </figure>

        <h2>Who This Work Is For</h2>

        <p>
          This is the work I do with executives and leaders who have already achieved a great deal and now sense the next chapter demands a different kind of alignment. It is strictly advisory and non-clinical, strategic work at the intersection of human performance and identity.
        </p>

        <h2>What Comes Next</h2>

        <p>
          If this piece resonated, the next installment goes deeper into the practice itself, specific ways to regulate your state so the loop can actually begin. Subscribe to the blog to receive it directly, and to follow the thinking as it continues to develop.
        </p>

        <h2>Let&apos;s Talk</h2>

        <p>
          If something in this piece named the friction you&apos;ve been feeling, the one no KPI or strategy session has quite touched, that&apos;s worth a conversation. My work is by application only, and all conversations are held in strict confidence.
        </p>

        <p>
          If you&apos;re ready to explore what&apos;s possible when your internal state becomes the foundation rather than the friction, book a discovery call. I look forward to hearing what&apos;s next for you.
        </p>
      </>
    ),
  },
}

// Related posts for the bottom section
const relatedPosts: Array<{
  slug: string
  title: string
  excerpt: string
  readTime: string
}> = []

type PageProps = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = posts[slug]
  
  if (!post) {
    return {
      title: "Post Not Found | Hammer Advisory",
    }
  }

  return {
    title: `${post.title} | Insights | Hammer Advisory`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      authors: ["Gabriella Hammer"],
    },
  }
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = posts[slug]

  if (!post) {
    return (
      <main className="min-h-screen bg-cream">
        <InsightsNavigation />
        <div className="pt-32 pb-24 lg:pt-40">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <h1 className="font-serif text-4xl text-navy mb-4">Post Not Found</h1>
            <p className="text-navy/70 mb-8">The article you&apos;re looking for doesn&apos;t exist.</p>
            <Link 
              href="/insights"
              className="inline-flex items-center gap-2 text-gold hover:text-gold/80 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Insights
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-cream">
      <InsightsNavigation />
      
      {/* Featured Image - Wide cinematic container with generous spacing */}
      <div className="pt-24 lg:pt-28 pb-8 lg:pb-12">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="aspect-[2.4/1] bg-navy/5 relative rounded-md overflow-hidden">
            <Image
              src="/images/clarity-reflection.jpg"
              alt="Still mountain lake at dawn with perfect mirror reflection - representing inner clarity and state regulation"
              fill
              className="object-cover object-[50%_50%]"
              priority
            />
          </div>
        </div>
      </div>
      
      {/* Article Header */}
      <header className="pt-6 pb-8 lg:pt-8 lg:pb-10">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl">
            {/* Back link */}
            <Link 
              href="/insights"
              className="inline-flex items-center gap-2 text-navy/40 hover:text-gold transition-colors text-xs tracking-wide mb-6"
            >
              <ArrowLeft className="w-3 h-3" />
              Back to Insights
            </Link>

            {/* Title - refined size */}
            <h1 className="font-serif text-xl md:text-2xl lg:text-[1.75rem] text-navy tracking-tight leading-snug mb-3">
              {post.title}
            </h1>

            {/* Subtitle */}
            {post.subtitle && (
              <p className="text-navy/50 text-sm md:text-base leading-relaxed mb-6">
                {post.subtitle}
              </p>
            )}

            {/* Meta line */}
            <div className="flex flex-wrap items-center gap-2 text-xs text-navy/40 pb-6 border-b border-navy/10">
              <span className="font-medium text-navy/60">Gabriella Hammer</span>
              <span>•</span>
              <span>{formatDate(post.publishedAt)}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <article className="pb-12 lg:pb-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl prose">
            {post.content}
          </div>
        </div>
      </article>

      {/* Author Box */}
      <section className="pb-12 lg:pb-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl">
            <div className="bg-white/80 rounded-md p-6 border border-navy/5">
              <div className="flex flex-col sm:flex-row gap-5 items-start">
                <div className="w-16 h-16 rounded-full bg-navy/10 overflow-hidden relative shrink-0">
                  <Image
                    src="/images/gabriella-hammer.jpg"
                    alt="Gabriella Hammer"
                    fill
                    className="object-cover object-[50%_20%]"
                  />
                </div>
                <div>
                  <p className="text-gold/80 text-[10px] tracking-[0.2em] uppercase mb-1">About the Author</p>
                  <h3 className="font-serif text-base text-navy mb-1">Gabriella Hammer</h3>
                  <p className="text-navy/60 text-xs leading-relaxed mb-3">
                    Founder of Hammer Advisory. I work with executives, leaders, and high performers who are operating at the top of their field and know the next level requires something different.
                  </p>
                  <Link 
                    href="/#about"
                    className="text-gold text-xs font-medium hover:text-gold/80 transition-colors"
                  >
                    Learn more about Gabriella
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts - only show if there are related posts */}
      {relatedPosts.length > 0 && (
        <section className="pb-16 lg:pb-20 border-t border-navy/10 pt-16 lg:pt-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl">
              <h2 className="font-serif text-2xl text-navy mb-8">Related Insights</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <Link 
                    key={relatedPost.slug}
                    href={`/insights/${relatedPost.slug}`}
                    className="group block"
                  >
                    <article className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow h-full">
                      <h3 className="font-serif text-lg text-navy mb-2 group-hover:text-gold transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-navy/70 text-sm leading-relaxed mb-4">
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex items-center gap-1 text-xs text-navy/50">
                        <Clock className="w-3 h-3" />
                        {relatedPost.readTime}
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-14 lg:py-16 bg-navy">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="font-serif text-lg md:text-xl text-cream mb-3">
              If this resonated, let&apos;s talk.
            </h2>
            <p className="text-cream/60 text-sm mb-6">
              Book a discovery call to explore whether this work is right for you.
            </p>
            <Link 
              href="https://calendly.com/gabriellahammer/discovery-call"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold text-navy px-6 py-3 text-sm font-medium tracking-wide hover:bg-gold/90 transition-colors rounded-sm"
            >
              Book a Discovery Call
              <ArrowRight className="w-3 h-3" />
            </Link>
            <p className="text-cream/30 text-[10px] mt-5 tracking-wide">
              All conversations held in strict confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Signup - Large, prominent section */}
      <section className="py-16 lg:py-20 bg-cream">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg p-10 md:p-12 lg:p-14 shadow-sm border border-navy/5">
              <NewsletterSignup variant="default" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
