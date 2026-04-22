import type { ReactNode } from 'react'

/**
 * Replaces narrative row emojis in the feed (the sport rail uses league logos, not emojis).
 * Maps the legacy emoji from `sports.ts` to small inline SVGs.
 */
export function narrativeGlyph(emoji: string): ReactNode {
  const g = GLYPHS[emoji]
  if (g) return g
  return <span className="glyph-fallback" aria-hidden />
}

const s = (children: ReactNode) => (
  <svg className="narr-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
    {children}
  </svg>
)

const GLYPHS: Record<string, ReactNode> = {
  // NBA + shared
  '🩹': s(
    <>
      <rect x="6" y="4" width="12" height="6" rx="1" />
      <path d="M10 7h4M12 5v4" />
      <rect x="8" y="14" width="8" height="6" rx="1" />
    </>,
  ),
  '👑': s(<path d="M4 9l2 10h12l2-10-3 2-3-3-3 2-3-2-2 1z" />),
  '⚡': s(<path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />),
  // NFL/CFL
  '📋': s(<><path d="M8 4h6l3 3v12a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z" /><path d="M8 8h6M8 12h6M8 16h4" /></>),
  '💰': s(<><ellipse cx="12" cy="8" rx="6" ry="2.4" /><path d="M6 8v3c0 1.1 2.7 2 6 2s6-.9 6-2V8" /><path d="M6 11v3c0 1.1 2.7 2 6 2s6-.9 6-2v-3" /></>),
  '🏈': s(<path d="M12 2c3 3 3 5 3 10s0 7-3 10c-3-3-3-5-3-10s0-7 3-10z" />),
  // CFB
  '🔄': s(<><path d="M23 4v6h-6" /><path d="M1 20v-6h6" /><path d="M3.51 9a9 9 0 0 1 14.25-3.36L23 10M1 14l4.25 4.36A9 9 0 0 0 20.49 15" /></>),
  '⭐': s(<path d="M12 2l2.2 5.6L20 9.3l-4.2 3.1 1.6 5.6-5.4-3.2-5.4 3.2L8 12.4 3.8 9.3l5.8-1.7L12 2z" />),
  '📺': s(<><rect x="3" y="5" width="18" height="12" rx="1" /><path d="M7 21h10" /></>),
  // MLB
  '💵': s(<><rect x="3" y="5" width="18" height="10" rx="1" /><path d="M7 7h0M7 9h10" /></>),
  // NHL
  '🥅': s(<><path d="M3 5h18v2H3z" /><path d="M3 5v8c0 2 1.5 3 2.5 3H18.5c1 0 2.5-1 2.5-3V5" /></>),
  // Soccer
  '🌍': s(<><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a15 15 0 0 0 0 18" /></>),
  '🔁': s(<><path d="M17 1l4 4-4 4" /><path d="M3 11V9a4 4 0 0 1 4-4h14" /><path d="M7 23l-4-4 4-4" /><path d="M21 13v2a4 4 0 0 1-4 4H3" /></>),
  // F1
  '🛠': s(<><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L18 4.1" /><path d="M5 14l-2 2 3 3 2-2" /></>),
  '🛑': s(<circle cx="12" cy="12" r="7" />),
  '📐': s(<><path d="M4 20L20 4" /><path d="M4 4h6v6H4" /></>),
  // Tennis
  '🧱': s(<><path d="M4 4h6v4H4z" /><path d="M12 4h6v4h-6z" /><path d="M4 10h4v4H4z" /></>),
  '🎫': s(<rect x="3" y="5" width="18" height="14" rx="1" />),
  '⚖️': s(<><path d="M5 4h2v2H5zM17 4h2v2h-2z" /><path d="M6 6v2M18 6v2M4 8h2M18 8h2" /><path d="M12 8v6M3 8h4M17 8h4" strokeLinecap="round" /></>),
  '📅': s(<><rect x="4" y="5" width="16" height="14" rx="1" /><path d="M4 9h16M8 3v2M16 3v2" strokeLinecap="round" /></>),
}
