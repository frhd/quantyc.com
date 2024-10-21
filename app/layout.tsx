import './global.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'
import Head from 'next/head'

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
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white light:text-white dark:bg-white'
      )}
    >
           <Head>
        {/* Link to Noto Mono font */}
        <link href="https://fonts.cdnfonts.com/css/noto-mono" rel="stylesheet" />
      </Head>
      <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}
