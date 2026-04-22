import type { ReactNode } from 'react'
import type { SportId } from '../types'

const svg = (d: string): ReactNode => (
  <svg className="sport-glyph" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
    <path d={d} />
  </svg>
)

const BY_SPORT: Partial<Record<SportId, ReactNode>> = {
  nba: svg('M4 4h16v2H4zM6 7h0M12 2c3.5 1.2 3.5 4 3.5 10S15.5 20.5 12 22c-3.5-1.2-3.5-3.5-3.5-10S8.5 3.2 12 2z'),
  wnba: svg('M4 4h16v2H4zM6 7h0M12 2c3.5 1.2 3.5 4 3.5 10S15.5 20.5 12 22c-3.5-1.2-3.5-3.5-3.5-10S8.5 3.2 12 2z'),
  nfl: svg('M12 2c3 2.5 3.5 4.5 3.5 10S15 17.5 12 20c-3-2.5-3.5-3.5-3.5-10S9 4.5 12 2z'),
  cfb: svg('M4 6h16v2H4zM4 4l2-2M20 4l-2-2M6 12h4M6 16h3'),
  mlb: svg('M12 3c-4.5 2-4.5 5-4.5 9s0 6 4.5 8c4.5-2 4.5-4 4.5-8s0-7-4.5-9zM8 7h0M10 5h0'),
  nhl: svg('M3 8h3v3H3zM18 8h3v3h-3zM7 6h10M9 3l-2 2M15 3l2 2M8 20h8M10 10h4M10 16h4'),
  soccer: svg('M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM2 12h20M12 2a14 14 0 0 0 0 20'),
  f1: svg('M4 12h12l2-2 2 2-2 2H4a2 2 0 0 1-2-2v0a2 2 0 0 1 2-2zM18 6l2-2M6 6L4 4'),
  tennis: svg('M6 4a8 6 0 0 0 0 9c2 0 2.5-1.5 3-1.5s1.5 1.5 3.5 1.5A8 6 0 0 0 6 4zM10 6l6.5-2'),
}

type Props = { sportId: SportId }

export function SportGlyph({ sportId }: Props) {
  return BY_SPORT[sportId] ?? svg('M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z')
}
