import Image from "next/image"
import { cn } from "@/lib/utils"

interface HourglassIconProps {
  className?: string
  variant?: "gold" | "navy" | "cream" | "current"
  priority?: boolean
}

export function HourglassIcon({ className, variant = "gold", priority = false }: HourglassIconProps) {
  // Use CSS filters to change color based on variant
  // The SVG is gold (#bfa07d) by default
  const filterClasses = {
    gold: "", // Original color - no filter needed
    cream: "brightness-[1.4] saturate-[0.3]", // Lighten for light backgrounds
    navy: "brightness-[0.15] saturate-[0.5]", // Darken for dark variant
    current: "",
  }

  return (
    <Image
      src="/images/logo-icon.svg"
      alt="Hammer Advisory"
      width={68}
      height={62}
      priority={priority}
      className={cn(
        "object-contain",
        filterClasses[variant],
        className
      )}
      sizes="(max-width: 768px) 36px, 44px"
    />
  )
}
