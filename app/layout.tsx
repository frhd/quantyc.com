import './global.css'
import type { Metadata } from 'next'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/react'
import Footer from './components/footer'
import { baseUrl } from './sitemap'
import { GeistMono } from 'geist/font/mono'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'quantyc',
    template: '%s | quantyc',
  },
  description: 'quantyc is a development studio.',
  openGraph: {
    title: 'quantyc',
    description: 'quantyc is a development studio.',
    url: baseUrl,
    siteName: 'quantyc.com',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🟥</text></svg>',
    shortcut: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🟥</text></svg>',
    apple: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🟥</text></svg>',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Script
        defer
        src="https://analytics.quantyc.com/script.js"
        data-website-id="97fecd45-ccb8-4261-8edd-c36a5ff97aad"
        strategy="afterInteractive"
      />
      <body className={`${GeistMono.className} bg-white text-black antialiased max-w-3xl mx-auto p-4 md:p-6 lg:p-8`}>
        <main className="min-h-screen flex flex-col py-8 pt-16 md:py-12 md:pt-24 lg:py-16 lg:pt-32">
          {children}
          <Footer />
          <Analytics />
        </main>
      </body>
    </html>
  );
}
