import type { ReactNode } from 'react'
import type { NarrativeIconId } from '../types'

const s = (children: ReactNode) => (
  <svg className="narr-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
    {children}
  </svg>
)

const GLYPHS: Record<NarrativeIconId, ReactNode> = {
  bandage: s(
    <>
      <rect x="6" y="4" width="12" height="6" rx="1" />
      <path d="M10 7h4M12 5v4" />
      <rect x="8" y="14" width="8" height="6" rx="1" />
    </>,
  ),
  crown: s(<path d="M4 9l2 10h12l2-10-3 2-3-3-3 2-3-2-2 1z" />),
  bolt: s(<path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />),
  clipboard: s(
    <>
      <path d="M8 4h6l3 3v12a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z" />
      <path d="M8 8h6M8 12h6M8 16h4" />
    </>,
  ),
  coins: s(
    <>
      <ellipse cx="12" cy="8" rx="6" ry="2.4" />
      <path d="M6 8v3c0 1.1 2.7 2 6 2s6-.9 6-2V8" />
      <path d="M6 11v3c0 1.1 2.7 2 6 2s6-.9 6-2v-3" />
    </>,
  ),
  football: s(<path d="M12 2c3 3 3 5 3 10s0 7-3 10c-3-3-3-5-3-10s0-7 3-10z" />),
  cycle: s(
    <>
      <path d="M23 4v6h-6" />
      <path d="M1 20v-6h6" />
      <path d="M3.51 9a9 9 0 0 1 14.25-3.36L23 10M1 14l4.25 4.36A9 9 0 0 0 20.49 15" />
    </>,
  ),
  star: s(<path d="M12 2l2.2 5.6L20 9.3l-4.2 3.1 1.6 5.6-5.4-3.2-5.4 3.2L8 12.4 3.8 9.3l5.8-1.7L12 2z" />),
  tv: s(
    <>
      <rect x="3" y="5" width="18" height="12" rx="1" />
      <path d="M7 21h10" />
    </>,
  ),
  cash: s(
    <>
      <rect x="3" y="5" width="18" height="10" rx="1" />
      <path d="M7 7h0M7 9h10" />
    </>,
  ),
  goal: s(
    <>
      <path d="M3 5h18v2H3z" />
      <path d="M3 5v8c0 2 1.5 3 2.5 3H18.5c1 0 2.5-1 2.5-3V5" />
    </>,
  ),
  bus: s(
    <>
      <path d="M5 17h14v2H5z" />
      <path d="M6 17V8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9" />
      <circle cx="8.5" cy="18" r="1.25" />
      <circle cx="15.5" cy="18" r="1.25" />
      <path d="M6 11h12" />
    </>,
  ),
  globe: s(
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a15 15 0 0 0 0 18" />
    </>,
  ),
  stadium: s(
    <>
      <path d="M4 15h16v3H4z" />
      <path d="M4 10c0-2 3.5-4 8-4s8 2 8 4v5H4v-5z" />
      <path d="M8 6V4M12 5V3M16 6V4" />
    </>,
  ),
  swap: s(
    <>
      <path d="M17 1l4 4-4 4" />
      <path d="M3 11V9a4 4 0 0 1 4-4h14" />
      <path d="M7 23l-4-4 4-4" />
      <path d="M21 13v2a4 4 0 0 1-4 4H3" />
    </>,
  ),
  wrench: s(
    <>
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L18 4.1" />
      <path d="M5 14l-2 2 3 3 2-2" />
    </>,
  ),
  stop: s(<circle cx="12" cy="12" r="7" />),
  setSquare: s(
    <>
      <path d="M4 20L20 4" />
      <path d="M4 4h6v6H4" />
    </>,
  ),
  bricks: s(
    <>
      <path d="M4 4h6v4H4z" />
      <path d="M12 4h6v4h-6z" />
      <path d="M4 10h4v4H4z" />
    </>,
  ),
  ticket: s(<rect x="3" y="5" width="18" height="14" rx="1" />),
  scales: s(
    <>
      <path d="M5 4h2v2H5zM17 4h2v2h-2z" />
      <path d="M6 6v2M18 6v2M4 8h2M18 8h2" />
      <path d="M12 8v6M3 8h4M17 8h4" strokeLinecap="round" />
    </>,
  ),
  calendar: s(
    <>
      <rect x="4" y="5" width="16" height="14" rx="1" />
      <path d="M4 9h16M8 3v2M16 3v2" strokeLinecap="round" />
    </>,
  ),
}

export function narrativeGlyph(id: NarrativeIconId): ReactNode {
  const g = GLYPHS[id]
  if (g) return g
  return <span className="glyph-fallback" aria-hidden />
}
