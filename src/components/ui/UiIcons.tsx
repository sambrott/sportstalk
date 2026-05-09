export function IconX() {
  return (
    <svg className="ui-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
    </svg>
  )
}

export function IconSpark(props: { className?: string }) {
  const cn = ['ui-ico', 'ui-ico--spark', props.className].filter(Boolean).join(' ')
  return (
    <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M12 2l1.1 4.1L17 7l-3.9 1.1L12 12l-1.1-3.9L7 7l3.9-.9L12 2z" />
    </svg>
  )
}

export function IconSend() {
  return (
    <svg className="ui-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M4 20l4-7 9-1-9-1-4-7 16 8z" strokeLinejoin="round" />
    </svg>
  )
}

export function IconKiaMvpTrophy() {
  return (
    <svg
      className="ui-ico ui-ico--trophy"
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden
    >
      <path
        d="M20 8h24v4c0 6-3 10-7 12 1 1 2 3 2 5v6H25v-6c0-2 1-4 2-5-4-2-7-6-7-12V8z"
        fill="url(#kiaG)"
        stroke="rgba(0,0,0,0.12)"
        strokeWidth="0.5"
      />
      <rect x="22" y="50" width="20" height="6" rx="1" fill="url(#kiaG2)" />
      <rect x="18" y="40" width="28" height="10" rx="1.5" fill="url(#kiaG2)" />
      <defs>
        <linearGradient id="kiaG" x1="20" y1="8" x2="48" y2="30" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f2d38a" />
          <stop offset="0.5" stopColor="#c9a227" />
          <stop offset="1" stopColor="#7a5c12" />
        </linearGradient>
        <linearGradient id="kiaG2" x1="18" y1="40" x2="46" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4a2e08" />
          <stop offset="1" stopColor="#1a1204" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export function IconOrb() {
  return (
    <svg className="ui-ico ui-ico--orb" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden>
      <circle cx="12" cy="12" r="2.2" fill="currentColor" stroke="none" />
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i * Math.PI) / 6
        const x1 = 12 + Math.cos(a) * 4.5
        const y1 = 12 + Math.sin(a) * 4.5
        const x2 = 12 + Math.cos(a) * 9.2
        const y2 = 12 + Math.sin(a) * 9.2
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />
      })}
    </svg>
  )
}
