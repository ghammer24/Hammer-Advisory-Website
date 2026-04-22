"use client"

import { useActionState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Loader2, CheckCircle2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { subscribeToInsights } from "@/app/actions/subscribe"

interface NewsletterSignupProps {
  variant?: "default" | "compact" | "homepage"
  className?: string
}

export function NewsletterSignup({ variant = "default", className }: NewsletterSignupProps) {
  const [state, formAction, isPending] = useActionState(subscribeToInsights, null)

  // Success state
  if (state?.success) {
    return (
      <div className={cn(
        "text-center",
        variant === "homepage" ? "py-8" : "py-12",
        className
      )}>
        <div className="flex flex-col items-center gap-4">
          <CheckCircle2 className="w-8 h-8 text-gold" />
          <div>
            <p className="font-serif text-xl md:text-2xl text-navy mb-2">
              Thank you — you&apos;re now aligned.
            </p>
            <p className="text-navy/50 text-sm">
              Check your inbox for a welcome note.
            </p>
          </div>
        </div>
      </div>
    )
  }

  // Homepage variant - subtle, inline
  if (variant === "homepage") {
    return (
      <div className={cn("w-full", className)}>
        <div className="text-center mb-8">
          <h3 className="font-serif text-xl md:text-2xl text-navy tracking-tight mb-3">
            Stay Aligned
          </h3>
          <p className="text-navy/50 text-sm md:text-base leading-relaxed max-w-md mx-auto">
            Get occasional insights on state regulation and strategic alignment.
          </p>
        </div>

        <form action={formAction} className="max-w-md mx-auto space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              name="email"
              placeholder="Your email"
              disabled={isPending}
              required
              className="bg-white border-navy/10 text-navy placeholder:text-navy/30 focus-visible:border-gold focus-visible:ring-gold/20 h-12 text-base flex-1"
            />
            <Button
              type="submit"
              disabled={isPending}
              className="bg-gold text-navy hover:bg-gold/90 font-medium tracking-wide h-12 px-8 shrink-0"
            >
              {isPending ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                "Subscribe"
              )}
            </Button>
          </div>

          <input type="hidden" name="firstName" value="" />

          {state && !state.success && state.message && (
            <p className="text-sm text-red-600 text-center">{state.message}</p>
          )}

          <p className="text-xs text-navy/40 text-center pt-2">
            I respect your inbox. Unsubscribe anytime.
          </p>
        </form>
      </div>
    )
  }

  // Compact variant - for Insights index
  if (variant === "compact") {
    return (
      <div className={cn("w-full", className)}>
        <div className="text-center mb-8">
          <h3 className="font-serif text-xl md:text-2xl text-navy tracking-tight mb-3">
            Stay Aligned
          </h3>
          <p className="text-navy/50 text-sm md:text-base leading-relaxed max-w-lg mx-auto">
            Get occasional insights on state regulation and strategic alignment.
          </p>
        </div>

        <form action={formAction} className="max-w-lg mx-auto space-y-5">
          <div className="grid sm:grid-cols-2 gap-4">
            <Input
              type="text"
              name="firstName"
              placeholder="First name (optional)"
              disabled={isPending}
              className="bg-white border-navy/10 text-navy placeholder:text-navy/40 focus-visible:border-gold focus-visible:ring-gold/20 h-12 text-base"
            />
            <Input
              type="email"
              name="email"
              placeholder="Your email"
              disabled={isPending}
              required
              className="bg-white border-navy/10 text-navy placeholder:text-navy/40 focus-visible:border-gold focus-visible:ring-gold/20 h-12 text-base"
            />
          </div>

          <div className="text-center pt-2">
            <Button
              type="submit"
              disabled={isPending}
              className="bg-gold text-navy hover:bg-gold/90 font-medium tracking-wide h-12 px-12 text-base"
            >
              {isPending ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin mr-2" />
                  Subscribing...
                </>
              ) : (
                "Subscribe"
              )}
            </Button>
          </div>

          {state && !state.success && state.message && (
            <p className="text-sm text-red-600 text-center">{state.message}</p>
          )}

          <p className="text-xs text-navy/40 text-center pt-1">
            I respect your inbox. Unsubscribe anytime.
          </p>
        </form>
      </div>
    )
  }

  // Default variant - large, prominent for blog posts
  return (
    <div className={cn("w-full", className)}>
      <div className="text-center mb-10">
        <h3 className="font-serif text-2xl md:text-3xl text-navy tracking-tight mb-4">
          Stay Aligned
        </h3>
        <p className="text-navy/60 text-base md:text-lg leading-relaxed max-w-md mx-auto">
          Get occasional insights on state regulation and strategic alignment.
        </p>
      </div>

      <form action={formAction} className="max-w-md mx-auto space-y-5">
        <Input
          type="text"
          name="firstName"
          placeholder="First name (optional)"
          disabled={isPending}
          className="bg-white border-navy/10 text-navy placeholder:text-navy/40 focus-visible:border-gold focus-visible:ring-gold/20 h-14 text-base px-5"
        />

        <Input
          type="email"
          name="email"
          placeholder="Your email"
          disabled={isPending}
          required
          className="bg-white border-navy/10 text-navy placeholder:text-navy/40 focus-visible:border-gold focus-visible:ring-gold/20 h-14 text-base px-5"
        />

        <Button
          type="submit"
          disabled={isPending}
          className="w-full bg-gold text-navy hover:bg-gold/90 font-medium tracking-wide h-14 text-base"
        >
          {isPending ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin mr-2" />
              Subscribing...
            </>
          ) : (
            "Subscribe"
          )}
        </Button>

        {state && !state.success && state.message && (
          <p className="text-sm text-red-600 text-center">{state.message}</p>
        )}

        <p className="text-sm text-navy/40 text-center pt-2">
          I respect your inbox. Unsubscribe anytime.
        </p>
      </form>
    </div>
  )
}
