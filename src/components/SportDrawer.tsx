import type { FanLevel, SportContent, SportId } from '../types'
import { LEVEL_LABEL } from '../data/sports'

type Props = {
  open: boolean
  onClose: () => void
  sports: SportContent[]
  current: SportId
  onPick: (id: SportId) => void
  level: FanLevel
  onLevel: (l: FanLevel) => void
  onGameDay: () => void
}

const levels: FanLevel[] = ['novice', 'casual', 'diehard']

export function SportDrawer({
  open,
  onClose,
  sports,
  current,
  onPick,
  level,
  onLevel,
  onGameDay,
}: Props) {
  return (
    <>
      <div className={`drawer-scrim ${open ? 'open' : ''}`} onClick={onClose} aria-hidden={!open} />
      <aside className={`drawer ${open ? 'open' : ''}`} aria-hidden={!open}>
        <div className="drawer-hd">
          <div className="drawer-brand">
            SPORTS<em>TALK</em>
          </div>
          <button type="button" className="drawer-close" onClick={onClose} aria-label="Close menu">
            ✕
          </button>
        </div>
        <div className="drawer-section">
          <div className="drawer-label">My level</div>
          <div className="drawer-levels">
            {levels.map((lv) => (
              <button
                key={lv}
                type="button"
                className={`drawer-lv ${level === lv ? 'on' : ''}`}
                onClick={() => onLevel(lv)}
              >
                {LEVEL_LABEL[lv]}
              </button>
            ))}
          </div>
        </div>
        <div className="drawer-label" style={{ padding: '0 18px' }}>
          Sports
        </div>
        <nav className="drawer-sports">
          {sports.map((s) => (
            <button
              key={s.id}
              type="button"
              className={`drawer-row ${current === s.id ? 'on' : ''}`}
              onClick={() => {
                onPick(s.id)
                onClose()
              }}
            >
              <span className="drawer-ico">{s.emoji}</span>
              <span className="drawer-name">{s.name}</span>
              {s.badge ? <span className="drawer-badge">{s.badge}</span> : null}
            </button>
          ))}
        </nav>
        <div className="drawer-foot">
          <button type="button" className="drawer-gd" onClick={() => { onGameDay(); onClose(); }}>
            Game Day Brief
          </button>
        </div>
      </aside>
    </>
  )
}
