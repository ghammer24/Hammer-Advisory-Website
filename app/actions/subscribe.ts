"use server"

interface SubscribeResult {
  success: boolean
  message: string
}

export async function subscribeToInsights(
  prevState: SubscribeResult | null,
  formData: FormData
): Promise<SubscribeResult> {
  const email = formData.get("email") as string
  const firstName = formData.get("firstName") as string | null

  if (!email) {
    return { success: false, message: "Please enter your email address." }
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return { success: false, message: "Please enter a valid email address." }
  }

  const webhookUrl = process.env.ZAPIER_WEBHOOK_URL

  if (!webhookUrl) {
    console.error("ZAPIER_WEBHOOK_URL is not configured")
    return { 
      success: false, 
      message: "Newsletter signup is temporarily unavailable. Please try again later." 
    }
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email.trim().toLowerCase(),
        firstName: firstName || "",
        source: "gabriellahammer.com",
        subscribedAt: new Date().toISOString(),
      }),
    })

    if (!response.ok) {
      console.error("Zapier error:", response.status)
      return { success: false, message: "Something went wrong. Please try again." }
    }

    return { success: true, message: "Thank you — you're now aligned." }
  } catch (error) {
    console.error("Subscription error:", error)
    return { 
      success: false, 
      message: "Something went wrong. Please try again later." 
    }
  }
}
}
