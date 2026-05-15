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
  title: 'Hammer Advisory | Master Your State. Master Your Life.',
  description: 'Hammer Advisory helps you regulate your state, choose which thoughts to follow, and act from the ones that serve you. The result is transformation.',
  keywords: ['state regulation', 'executive coaching', 'leadership consultant', 'trusted advisor', 'executive advisor', 'Pasadena', 'Los Angeles', 'transformation'],
  authors: [{ name: 'Gabriella Hammer' }],
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    title: 'Hammer Advisory | Master Your State. Master Your Life.',
    description: 'Hammer Advisory helps you regulate your state, choose which thoughts to follow, and act from the ones that serve you.',
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
              "description": "Hammer Advisory helps you regulate your state, choose which thoughts to follow, and act from the ones that serve you.",
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
