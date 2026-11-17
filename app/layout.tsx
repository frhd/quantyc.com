import './global.css'
import type { Metadata } from 'next'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/react'
import Footer from './components/footer'
import { baseUrl } from './sitemap'
import { GeistMono } from 'geist/font/mono'

const favicon =
  'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 16 16%22><rect width=%2216%22 height=%2216%22 fill=%22%23dc2626%22/></svg>'

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
    icon: favicon,
    shortcut: favicon,
    apple: favicon,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Apply a pinned theme before first paint. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t}catch(e){}`,
          }}
        />
      </head>
      <Script
        defer
        src="https://analytics.quantyc.com/script.js"
        data-website-id="97fecd45-ccb8-4261-8edd-c36a5ff97aad"
        strategy="afterInteractive"
      />
      <body className={`${GeistMono.className} bg-white text-black dark:bg-[#1c1c1c] dark:text-neutral-300 antialiased max-w-3xl mx-auto p-4 md:p-6 lg:p-8`}>
        <main className="min-h-screen flex flex-col py-8 pt-16 md:py-12 md:pt-24 lg:py-16 lg:pt-32">
          {children}
          <Footer />
          <Analytics />
        </main>
      </body>
    </html>
  );
}
