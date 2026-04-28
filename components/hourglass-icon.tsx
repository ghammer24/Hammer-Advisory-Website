interface HourglassIconProps {
  className?: string
  variant?: "gold" | "navy" | "cream" | "current"
}

export function HourglassIcon({ className, variant = "current" }: HourglassIconProps) {
  const colors = {
    gold: { outline: "#D4B48C", sand: "#D4B48C" },
    navy: { outline: "#0A1428", sand: "#D4B48C" },
    cream: { outline: "#FAF8F5", sand: "#FAF8F5" },
    current: { outline: "currentColor", sand: "currentColor" },
  }

  const { outline, sand } = colors[variant]

  return (
    <svg
      viewBox="0 0 100 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Hourglass outline - smooth curved shape */}
      <path
        d="M20 15
           C20 15 20 18 20 20
           Q20 35 35 50
           Q40 55 40 60
           Q40 65 35 70
           Q20 85 20 100
           C20 102 20 105 20 105
           L80 105
           C80 105 80 102 80 100
           Q80 85 65 70
           Q60 65 60 60
           Q60 55 65 50
           Q80 35 80 20
           C80 18 80 15 80 15
           L20 15 Z"
        stroke={outline}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      
      {/* Top sand - wavy line with partial fill in upper chamber */}
      <path
        d="M28 22
           L72 22
           L72 28
           Q72 38 62 48
           Q55 55 50 58
           Q45 55 38 48
           Q28 38 28 28
           L28 22 Z"
        fill={sand}
        opacity="0.25"
      />
      
      {/* Wavy sand line in top chamber */}
      <path
        d="M32 32
           Q38 28 50 32
           Q62 36 68 32"
        stroke={sand}
        strokeWidth="2"
        fill="none"
        opacity="0.6"
      />
      
      {/* Bottom sand - fully filled */}
      <path
        d="M28 98
           L72 98
           L72 92
           Q72 82 62 72
           Q55 65 50 62
           Q45 65 38 72
           Q28 82 28 92
           L28 98 Z"
        fill={sand}
        opacity="0.85"
      />
      
      {/* Arrow emerging from top right - diagonal with arrowhead */}
      <line
        x1="68"
        y1="28"
        x2="88"
        y2="8"
        stroke={outline}
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Arrowhead */}
      <path
        d="M88 8 L82 8 L88 14 Z"
        fill="none"
        stroke={outline}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
