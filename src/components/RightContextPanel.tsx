import { useEffect } from 'react'
import type { FanLevel, SportContent, SportId } from '../types'
import { MomentCard } from './MomentCard'
import { StandingsBlock } from './StandingsBlock'
import { LiveScoresBlock } from './LiveScoresBlock'

type Props = {
  open: boolean
  onClose: () => void
  /** Selected sport from state — must match `sport.id` (single source of truth for rail data). */
  sportId: SportId
  sport: SportContent
  /** Novice-only primer copy in the rail. */
  level: FanLevel
}

function RightPanelToolbarRow({ sport, onClose }: { sport: SportContent; onClose: () => void }) {
  return (
    <div className="right-panel__toolbar">
      <div className="right-panel__toolbar-text">
        <div className="right-panel__toolbar-title">
          <span className="right-panel__toolbar-sport">{sport.name}</span>
          <span className="right-panel__toolbar-sep">·</span>
          <span className="right-panel__toolbar-glance">At a glance</span>
        </div>
      </div>
      <button type="button" className="right-panel__close" onClick={onClose} aria-label="Close panel">
        ✕
      </button>
    </div>
  )
}

function PanelScroll({
  sportId,
  sport,
  level,
}: {
  sportId: SportId
  sport: SportContent
  level: FanLevel
}) {
  const primer = level === 'novice' ? sport.railAtAGlance : undefined

  return (
    <div className="right-panel__scroll">
      {primer ? (
        <section className="rail-agl" aria-label={`${sport.name} context`}>
          <p className="rail-agl__intro">{primer.intro}</p>
          <ul className="rail-agl__list">
            {primer.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </section>
      ) : null}
      {sport.moment ? <MomentCard moment={sport.moment} /> : null}

      <StandingsBlock sportId={sportId} />

      <LiveScoresBlock key={sportId} sportId={sportId} />
    </div>
  )
}

/** Mobile: fixed overlay + scrim. */
export function RightContextMobile({ open, onClose, sportId, sport, level }: Props) {
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  return (
    <>
      <div
        className={`right-panel-scrim ${open ? 'open' : ''}`}
        onClick={onClose}
        aria-hidden={!open}
      />
      <div
        className={`right-panel right-panel--overlay ${open ? 'open' : ''}`}
        role="dialog"
        aria-modal={open}
        aria-hidden={!open}
        aria-label="Tonight, standings, and scores"
      >
        <RightPanelToolbarRow sport={sport} onClose={onClose} />
        <div className="right-panel__body">
          <PanelScroll sportId={sportId} sport={sport} level={level} />
        </div>
      </div>
    </>
  )
}

/** Desktop: flex rail compresses the feed, no lightbox. */
export function RightContextDesktopRail({ open, onClose, sportId, sport, level }: Props) {
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  return (
    <div
      className={`right-rail ${open ? 'open' : ''}`}
      aria-hidden={!open}
      aria-label="Tonight, standings, and scores"
    >
      <div className="right-rail__inner">
        <RightPanelToolbarRow sport={sport} onClose={onClose} />
        <div className="right-panel__body">
          <PanelScroll sportId={sportId} sport={sport} level={level} />
        </div>
      </div>
    </div>
  )
}
