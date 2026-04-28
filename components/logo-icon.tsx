import Image from "next/image"
import { cn } from "@/lib/utils"

interface LogoIconProps {
  className?: string
  variant?: "default" | "light"
  priority?: boolean
}

export function LogoIcon({ className, variant = "default", priority = false }: LogoIconProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div 
        className="absolute inset-0"
        style={{
          // Scale up the image and position to show only the hourglass icon
          transform: "scale(2.2) translateY(-12%)",
        }}
      >
        <Image
          src="/images/hammer-advisory-logo.jpg"
          alt="Hammer Advisory"
          fill
          priority={priority}
          sizes="(max-width: 768px) 80px, 100px"
          className={cn(
            "object-contain",
            variant === "light" && "brightness-[1.1]"
          )}
        />
      </div>
    </div>
  )
}
