import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Hammer Advisory | Strategic Alignment Consultant for Executives & Leaders in Pasadena',
  description: 'Hammer Advisory provides strategic alignment for high-performing executives and leaders in Pasadena and Los Angeles. Gabriella Hammer helps you address internal gaps that limit sustained performance and create the conditions for your next level of leadership.',
  keywords: ['strategic alignment', 'executive coaching', 'leadership consultant', 'trusted advisor', 'executive advisor', 'Pasadena', 'Los Angeles', 'high-performing executives'],
  authors: [{ name: 'Gabriella Hammer' }],
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    title: 'Hammer Advisory | Strategic Alignment Consultant for Executives & Leaders',
    description: 'Hammer Advisory provides strategic alignment for high-performing executives and leaders in Pasadena and Los Angeles.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0A1428',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Hammer Advisory",
              "alternateName": "Not A Moment Sooner LLC",
              "url": "https://gabriellahammer.com",
              "description": "Strategic alignment consulting for high achievers and executives in Pasadena and Los Angeles.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Pasadena",
                "addressRegion": "CA",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "hello@gabriellahammer.com"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Gabriella Hammer",
              "jobTitle": "Strategic Alignment Consultant",
              "affiliation": {
                "@type": "Organization",
                "name": "Hammer Advisory"
              }
            })
          }}
        />
      </head>
      <body className="font-sans antialiased bg-background">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
