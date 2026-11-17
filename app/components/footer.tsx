'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const link = 'transition-colors hover:text-neutral-700 dark:hover:text-neutral-300'

function berlinTime() {
  return new Date().toLocaleTimeString('en-DE', {
    timeZone: 'Europe/Berlin',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  })
}

// Flip to the other theme. If that matches the system setting, unpin instead,
// so the site goes back to following the system.
function toggleTheme() {
  const root = document.documentElement
  const system = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  const next = (root.dataset.theme ?? system) === 'dark' ? 'light' : 'dark'
  try {
    if (next === system) {
      delete root.dataset.theme
      localStorage.removeItem('theme')
    } else {
      root.dataset.theme = next
      localStorage.setItem('theme', next)
    }
  } catch {
    root.dataset.theme = next
  }
}

export default function Footer() {
  // Rendered only after mount, so server and client markup agree.
  const [time, setTime] = useState<string | null>(null)

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>
    const tick = () => {
      setTime(berlinTime())
      // Re-run on the next minute boundary rather than a drifting 60s interval.
      timeout = setTimeout(tick, 60000 - (Date.now() % 60000))
    }
    tick()
    return () => clearTimeout(timeout)
  }, [])

  return (
    <footer className="mt-auto mb-12 max-w-[400px]">
      <div className="mt-8 flex items-center justify-between text-neutral-500 dark:text-neutral-400">
        <p>Göttingen{time && ` ${time}`}</p>
        <nav>
          <Link href="/projects" className={link}>projects</Link>
          <span aria-hidden="true"> · </span>
          <Link href="/imprint" className={link}>imprint</Link>
          <span aria-hidden="true"> · </span>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Switch between light and dark theme"
            title="light / dark"
            className={`${link} inline-block size-[0.7em] cursor-pointer rounded-full border border-current bg-[linear-gradient(90deg,currentColor_50%,transparent_50%)]`}
          />
        </nav>
      </div>
    </footer>
  )
}
