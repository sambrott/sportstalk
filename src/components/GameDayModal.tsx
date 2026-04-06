import type { SportContent } from '../types'

type Props = {
  sport: SportContent
  open: boolean
  onClose: () => void
}

export function GameDayModal({ sport, open, onClose }: Props) {
  if (!open) return null

  return (
    <div className="modal-bg" role="dialog" aria-modal="true" aria-labelledby="gd-title" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-top">
          <h2 id="gd-title">Game Day Brief</h2>
          <p>
            {sport.name} · {sport.gameDay.blurb}
          </p>
        </div>
        <div className="modal-body">
          {sport.gameDay.points.map((t, i) => (
            <div key={i} className="modal-pt">
              <div className="modal-n">{i + 1}</div>
              <div className="modal-t">{t}</div>
            </div>
          ))}
        </div>
        <button type="button" className="modal-close" onClick={onClose}>
          Done
        </button>
      </div>
    </div>
  )
}
