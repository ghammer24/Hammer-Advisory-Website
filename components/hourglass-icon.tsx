"use client"

import { cn } from "@/lib/utils"

interface HourglassIconProps {
  className?: string
  variant?: "gold" | "navy" | "cream" | "current"
  priority?: boolean
}

export function HourglassIcon({ className, variant = "gold" }: HourglassIconProps) {
  const colors = {
    gold: "#bfa07d",
    cream: "#f5f0e8", 
    navy: "#1a2332",
    current: "currentColor",
  }

  const fillColor = colors[variant]

  return (
    <svg
      viewBox="0 0 40 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      aria-label="Hammer Advisory"
    >
      {/* Hourglass outline */}
      <path
        d="M4 4C4 2.89543 4.89543 2 6 2H34C35.1046 2 36 2.89543 36 4V6C36 6 36 10 32 14L24 22L32 30C36 34 36 38 36 38V44C36 45.1046 35.1046 46 34 46H6C4.89543 46 4 45.1046 4 44V38C4 38 4 34 8 30L16 22L8 14C4 10 4 6 4 6V4Z"
        stroke={fillColor}
        strokeWidth="2.5"
        fill="none"
      />
      {/* Sand in bottom */}
      <path
        d="M10 38C10 34 16 28 20 24C24 28 30 34 30 38V42H10V38Z"
        fill={fillColor}
        opacity="0.6"
      />
      {/* Sand in top */}
      <path
        d="M14 6H26V10C26 12 24 14 20 18C16 14 14 12 14 10V6Z"
        fill={fillColor}
        opacity="0.6"
      />
      {/* Arrow pointing up-right */}
      <path
        d="M30 2L38 2M38 2L38 10M38 2L28 12"
        stroke={fillColor}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
