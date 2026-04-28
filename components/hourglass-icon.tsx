interface HourglassIconProps {
  className?: string
  variant?: "gold" | "navy" | "cream" | "current"
}

export function HourglassIcon({ className, variant = "current" }: HourglassIconProps) {
  const colors = {
    gold: "#C9A86C",
    navy: "#0A1428",
    cream: "#FAF8F5",
    current: "currentColor",
  }

  const color = colors[variant]

  return (
    <svg
      viewBox="0 0 100 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Hammer Advisory"
    >
      {/* Hourglass outline - elegant curved shape matching the logo */}
      <path
        d="M18 20
           L18 25
           C18 35 25 45 35 55
           C42 62 45 65 45 70
           C45 75 42 78 35 85
           C25 95 18 105 18 115
           L18 120
           L82 120
           L82 115
           C82 105 75 95 65 85
           C58 78 55 75 55 70
           C55 65 58 62 65 55
           C75 45 82 35 82 25
           L82 20
           L18 20 Z"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      
      {/* Sand in top chamber - wavy surface */}
      <path
        d="M26 30
           Q35 34 50 30
           Q65 26 74 30
           L74 35
           C74 42 68 50 60 58
           C54 64 50 67 50 70
           C50 67 46 64 40 58
           C32 50 26 42 26 35
           L26 30 Z"
        fill={color}
        opacity="0.3"
      />
      
      {/* Sand wavy line */}
      <path
        d="M28 32 Q40 38 50 32 Q60 26 72 32"
        stroke={color}
        strokeWidth="2"
        fill="none"
        opacity="0.5"
      />
      
      {/* Sand in bottom chamber - filled */}
      <path
        d="M26 110
           L74 110
           L74 105
           C74 98 68 90 60 82
           C54 76 50 73 50 70
           C50 73 46 76 40 82
           C32 90 26 98 26 105
           L26 110 Z"
        fill={color}
        opacity="0.85"
      />
      
      {/* Arrow emerging from top right corner */}
      <line
        x1="72"
        y1="28"
        x2="92"
        y2="8"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      
      {/* Arrowhead */}
      <polyline
        points="85,8 92,8 92,15"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}
