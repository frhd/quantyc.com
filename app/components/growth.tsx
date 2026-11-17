'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

// A structure that grows from one red square into a tangle of lines and nodes,
// holds, fades, and starts over with a different layout each time.
// Rendered once in the root layout, so it keeps going across page navigations.

const COLS = 9
const ROWS = 14
const PITCH = 20 // the mark is 20px; the grid shares its measure
const PAD = 6
const MAX_STEPS = 42
const MS_PER_CELL = 150
const HOLD = 7000
const FADE = 1400

type Step = {
  x1: number
  y1: number
  x2: number
  y2: number
  cells: number
  glyph: 'box' | 'dot' | null
}

// Grid index to pixel, on the half pixel so 1px strokes stay sharp.
const px = (i: number) => PAD + i * PITCH + 0.5

const width = PAD * 2 + (COLS - 1) * PITCH + 1
const height = PAD * 2 + (ROWS - 1) * PITCH + 1

// Random walk over the grid points. Lines never cross or overlap, because every
// point a line passes through is taken.
function plan(): Step[] {
  const taken = new Set<number>([0])
  const tips = [{ x: 0, y: 0 }]
  const steps: Step[] = []
  let misses = 0

  while (steps.length < MAX_STEPS && misses < 300) {
    // Mostly carry on from the newest end; sometimes branch off an older one.
    const tip =
      Math.random() < 0.55 ? tips[tips.length - 1] : tips[Math.floor(Math.random() * tips.length)]
    const r = Math.random()
    const [dx, dy] = r < 0.45 ? [0, 1] : r < 0.7 ? [1, 0] : r < 0.9 ? [-1, 0] : [0, -1]
    const want = 1 + Math.floor(Math.random() * 3)

    let { x, y } = tip
    let cells = 0
    while (cells < want) {
      const nx = x + dx
      const ny = y + dy
      if (nx < 0 || nx >= COLS || ny < 0 || ny >= ROWS || taken.has(ny * COLS + nx)) break
      x = nx
      y = ny
      taken.add(y * COLS + x)
      cells++
    }
    if (cells === 0) {
      misses++
      continue
    }
    misses = 0

    const g = Math.random()
    steps.push({
      x1: tip.x,
      y1: tip.y,
      x2: x,
      y2: y,
      cells,
      glyph: g < 0.3 ? 'box' : g < 0.45 ? 'dot' : null,
    })
    tips.push({ x, y })
  }
  return steps
}

export function Growth() {
  // The blog uses the full width, so there is no free margin to sit in.
  const onBlog = usePathname().startsWith('/blog')
  const [steps, setSteps] = useState<Step[]>([])
  const [count, setCount] = useState(0)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const still = matchMedia('(prefers-reduced-motion: reduce)').matches
    let timeout: ReturnType<typeof setTimeout>

    const run = () => {
      const next = plan()
      setSteps(next)
      setFading(false)
      if (still) {
        setCount(next.length)
        return
      }
      setCount(0)

      let i = 0
      const advance = () => {
        const step = next[i]
        i++
        setCount(i)
        if (i >= next.length) {
          timeout = setTimeout(() => {
            setFading(true)
            timeout = setTimeout(run, FADE)
          }, HOLD)
          return
        }
        // Unhurried at first, quicker as it goes, with the odd pause.
        const pace = 1.3 - 0.8 * (i / next.length)
        const pause = Math.random() < 0.12 ? 700 : 60 + Math.random() * 220
        timeout = setTimeout(advance, step.cells * MS_PER_CELL + pause * pace)
      }
      timeout = setTimeout(advance, 1200)
    }

    run()
    return () => clearTimeout(timeout)
  }, [])

  const shown = steps.slice(0, count)

  return (
    <svg
      aria-hidden="true"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      shapeRendering="crispEdges"
      className={`absolute left-[464px] top-[9px] hidden text-neutral-400 dark:text-neutral-500 ${onBlog ? '' : 'md:block'}`}
      style={{ opacity: fading ? 0 : 1, transition: `opacity ${FADE}ms ease-in-out` }}
    >
      <g stroke="currentColor" fill="none">
        {shown.map((s, i) => (
          <line
            key={i}
            x1={px(s.x1)}
            y1={px(s.y1)}
            x2={px(s.x2)}
            y2={px(s.y2)}
            pathLength={1}
            strokeDasharray={1}
            style={{ animation: `growth-draw ${s.cells * MS_PER_CELL}ms ease-out both` }}
          />
        ))}
      </g>
      <g>
        {shown.map((s, i) => {
          if (!s.glyph) return null
          const style = { animation: `growth-appear 300ms ease-out ${s.cells * MS_PER_CELL}ms both` }
          return s.glyph === 'box' ? (
            <rect
              key={i}
              x={px(s.x2) - 3.5}
              y={px(s.y2) - 3.5}
              width={7}
              height={7}
              stroke="currentColor"
              className="fill-white dark:fill-[#1c1c1c]"
              style={style}
            />
          ) : (
            <rect key={i} x={px(s.x2) - 2} y={px(s.y2) - 2} width={4} height={4} fill="currentColor" style={style} />
          )
        })}
      </g>
      <rect x={px(0) - 4.5} y={px(0) - 4.5} width={9} height={9} className="fill-red-600" />
    </svg>
  )
}
