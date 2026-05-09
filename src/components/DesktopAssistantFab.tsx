import { type PointerEvent as ReactPointerEvent, useCallback, useEffect, useState } from 'react'
import type { SportContent, SportId } from '../types'
import { SportAssistantChat } from './SportAssistantChat'
import { IconSpark } from './ui/UiIcons'

type Props = {
  sportId: SportId
  sport: SportContent
  open: boolean
  onToggle: () => void
}

const PANEL_H_STORAGE = 'sportstalk-assistant-panel-h-v1'
const PANEL_H_MIN = 260

function getPanelHMax() {
  if (typeof window === 'undefined') return 680
  return Math.min(680, Math.round(window.innerHeight * 0.9))
}

function clampPanelH(n: number) {
  return Math.min(getPanelHMax(), Math.max(PANEL_H_MIN, Math.round(n)))
}

export function DesktopAssistantFab({ sportId, sport, open, onToggle }: Props) {
  const [panelH, setPanelH] = useState(() => {
    if (typeof window === 'undefined') return 400
    try {
      const raw = sessionStorage.getItem(PANEL_H_STORAGE)
      if (raw) {
        const v = Number(raw)
        if (Number.isFinite(v)) return clampPanelH(v)
      }
    } catch {
      /* ignore */
    }
    return clampPanelH(400)
  })

  useEffect(() => {
    if (!open) return
    const onWin = () => setPanelH((h) => clampPanelH(h))
    window.addEventListener('resize', onWin)
    return () => window.removeEventListener('resize', onWin)
  }, [open])

  useEffect(() => {
    try {
      sessionStorage.setItem(PANEL_H_STORAGE, String(panelH))
    } catch {
      /* ignore */
    }
  }, [panelH])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onToggle()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onToggle])

  const onResizePointerDown = useCallback(
    (e: ReactPointerEvent<HTMLDivElement>) => {
      e.preventDefault()
      const startY = e.clientY
      const startH = panelH
      const move = (ev: PointerEvent) => {
        const dy = ev.clientY - startY
        setPanelH(clampPanelH(startH - dy))
      }
      const up = () => {
        window.removeEventListener('pointermove', move)
        window.removeEventListener('pointerup', up)
        document.body.style.removeProperty('user-select')
        document.body.style.removeProperty('cursor')
      }
      document.body.style.userSelect = 'none'
      document.body.style.cursor = 'ns-resize'
      window.addEventListener('pointermove', move)
      window.addEventListener('pointerup', up)
    },
    [panelH],
  )

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
          <IconSpark />
        </span>
        <span className="fab-assistant__label">Ask</span>
      </button>

      {open ? (
        <>
          <div className="assistant-scrim" aria-hidden onClick={onToggle} />
          <div
            id="desktop-assistant-panel"
            className="assistant-panel assistant-panel--resizable"
            style={{ height: panelH }}
            role="dialog"
            aria-modal="true"
            aria-label={`${sport.name} assistant`}
          >
            <div
              className="assistant-panel__resize"
              onPointerDown={onResizePointerDown}
              role="separator"
              aria-orientation="horizontal"
              aria-label="Drag to resize panel height"
            />
            <div className="assistant-panel__toolbar">
              <div className="assistant-panel__title">
                <span className="assistant-panel__sport">{sport.name}</span>
              </div>
              <button type="button" className="assistant-panel__close" onClick={onToggle} aria-label="Close">
                ×
              </button>
            </div>
            <div className="assistant-panel__body">
              <SportAssistantChat
                sportId={sportId}
                sport={sport}
                variant="floating"
                embeddedInDesktopPanel
                formId="desk-assist-chat"
              />
            </div>
          </div>
        </>
      ) : null}
    </>
  )
}
