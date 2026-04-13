import { useEffect } from 'react'
import type { SportContent, SportId } from '../types'
import { SportAssistantChat } from './SportAssistantChat'

type Props = {
  sportId: SportId
  sport: SportContent
  open: boolean
  onToggle: () => void
}

export function DesktopAssistantFab({ sportId, sport, open, onToggle }: Props) {
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onToggle()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onToggle])

  return (
    <>
      <button
        type="button"
        className={`fab-assistant ${open ? 'fab-assistant--open' : ''}`}
        onClick={onToggle}
        aria-expanded={open}
        aria-controls="desktop-assistant-panel"
        aria-label={`Open ${sport.name} assistant`}
      >
        <span className="fab-assistant__spark" aria-hidden>
          ✦
        </span>
        <span className="fab-assistant__label">Ask</span>
      </button>

      {open ? (
        <>
          <div className="assistant-scrim" aria-hidden onClick={onToggle} />
          <div
            id="desktop-assistant-panel"
            className="assistant-panel"
            role="dialog"
            aria-modal="true"
            aria-label={`${sport.name} assistant`}
          >
            <div className="assistant-panel__toolbar">
              <div className="assistant-panel__title">
                <span className="assistant-panel__sport">{sport.name}</span>
                <span className="assistant-panel__sub">Quick answers · demo</span>
              </div>
              <button type="button" className="assistant-panel__close" onClick={onToggle} aria-label="Close">
                ×
              </button>
            </div>
            <SportAssistantChat sportId={sportId} sport={sport} variant="floating" formId="desk-assist-chat" />
          </div>
        </>
      ) : null}
    </>
  )
}
