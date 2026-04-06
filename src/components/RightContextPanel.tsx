import { useEffect } from 'react'
import type { SportContent } from '../types'
import { StandingsBlock } from './StandingsBlock'
import { LiveScoresBlock } from './LiveScoresBlock'

type Props = {
  open: boolean
  onClose: () => void
  sport: SportContent
}

function RightPanelToolbarRow({ sport, onClose }: { sport: SportContent; onClose: () => void }) {
  return (
    <div className="right-panel__toolbar">
      <div className="right-panel__toolbar-text">
        <div className="right-panel__toolbar-title">At a glance</div>
        <div className="right-panel__toolbar-sub">{sport.name}</div>
      </div>
      <button type="button" className="right-panel__close" onClick={onClose} aria-label="Close panel">
        ✕
      </button>
    </div>
  )
}

function PanelScroll({ sport }: { sport: SportContent }) {
  return (
    <div className="right-panel__scroll">
      <div className="rail-sport-banner" role="status">
        Selected sport: <strong>{sport.name}</strong> (this rail updates when you change sport in the menu)
      </div>
      {sport.moment ? (
        <div className="moment-card moment-card--in-panel">
          <div className="moment-vis">{sport.moment.emoji}</div>
          <div className="moment-body">
            <div className="moment-kicker">{sport.moment.kicker}</div>
            <div className="moment-hl">{sport.moment.headline}</div>
            <div className="moment-why">{sport.moment.why}</div>
          </div>
        </div>
      ) : null}

      <StandingsBlock key={sport.id} sportId={sport.id} />

      <LiveScoresBlock key={sport.id} sportId={sport.id} />
    </div>
  )
}

/** Mobile: fixed overlay + scrim. */
export function RightContextMobile({ open, onClose, sport }: Props) {
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
        <PanelScroll sport={sport} />
      </div>
    </>
  )
}

/** Desktop: flex rail compresses the feed, no lightbox. */
export function RightContextDesktopRail({ open, onClose, sport }: Props) {
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
        <PanelScroll sport={sport} />
      </div>
    </div>
  )
}
