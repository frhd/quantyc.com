'use client'

import { useState, useEffect } from 'react'

export default function Footer() {
  const [time, setTime] = useState<string | null>(null)

  useEffect(() => {
    const updateTime = () => {
      setTime(new Date().toLocaleTimeString('en-DE', {
        timeZone: 'Europe/Berlin',
        hour: '2-digit',
        minute: '2-digit'
      }))
    }
    updateTime()
    const interval = setInterval(updateTime, 60000)
    return () => clearInterval(interval)
  }, [])

  return (
    <footer className="mt-auto mb-12 max-w-[370px]">
      <div className="mt-8 text-neutral-600 light:text-neutral-300 flex items-center justify-between">
        <p>
          {new Date().getFullYear()}{time && ` • ${time}`}
        </p>
        <a
          className="transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
          rel="noopener noreferrer"
          href="/imprint"
        >
          imprint
        </a>
      </div>
    </footer>
  )
}
