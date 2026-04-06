import { useState } from 'react'
import type { SportId } from '../types'
import { getSport } from '../data/sports'
import { useLiveScores } from '../hooks/useLiveScores'

type Props = {
  sportId: SportId
}

const UNSUPPORTED: SportId[] = ['soccer', 'f1', 'tennis']

export function LiveScoresBlock({ sportId }: Props) {
  const [open, setOpen] = useState(true)
  const state = useLiveScores(sportId)
  const sport = getSport(sportId)
  const liveHeadingId = `live-heading-${sportId}`
  const liveBodyId = `live-scores-body-${sportId}`

  if (UNSUPPORTED.includes(sportId)) {
    return (
      <section className="live-scores" aria-labelledby={liveHeadingId}>
        <button
          type="button"
          className="live-scores__hd"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls={liveBodyId}
        >
          <div className="live-scores__hd-text">
            <div className="sr-hd-title" id={liveHeadingId}>
              {sport.name} · live scores
            </div>
            <div className="sr-hd-sub">Feed not wired for this sport yet</div>
          </div>
          <span className={`live-scores__chev ${open ? 'open' : ''}`} aria-hidden>
            ▾
          </span>
        </button>
        <div id={liveBodyId} className="live-scores__body" hidden={!open}>
          <p className="live-scores__placeholder">
            NBA, NFL, MLB, NHL, and college football use ESPN&apos;s public scoreboard API in this app.
            Soccer, F1, and tennis need a different source (league-specific APIs or schedules).
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="live-scores" aria-labelledby={liveHeadingId}>
      <button
        type="button"
        className="live-scores__hd"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={liveBodyId}
      >
        <div className="live-scores__hd-text">
          <div className="sr-hd-title" id={liveHeadingId}>
            {sport.name} · today&apos;s games
          </div>
          <div className="sr-hd-sub">ESPN scoreboard for {sport.name} only</div>
        </div>
        <span className={`live-scores__chev ${open ? 'open' : ''}`} aria-hidden>
          ▾
        </span>
      </button>

      <div id={liveBodyId} className="live-scores__body" hidden={!open}>
        {state.kind === 'loading' ? <p className="live-scores__placeholder">Loading games…</p> : null}

        {state.kind === 'error' ? (
          <>
            <p className="live-scores__warn">{state.message}</p>
            {state.games.length > 0 ? (
              <ul className="live-scores__list">
                {state.games.map((g) => (
                  <li key={g.id} className="live-scores__game">
                    <div className="live-scores__status">{g.status}</div>
                    <div className="live-scores__line">
                      <span className="live-scores__team">{g.awayLabel}</span>
                      <span className="live-scores__score">{g.awayScore}</span>
                    </div>
                    <div className="live-scores__line">
                      <span className="live-scores__team">{g.homeLabel}</span>
                      <span className="live-scores__score">{g.homeScore}</span>
                    </div>
                  </li>
                ))}
              </ul>
            ) : null}
          </>
        ) : null}

        {state.kind === 'ok' && state.games.length === 0 ? (
          <p className="live-scores__placeholder">No games on the board for today.</p>
        ) : null}

        {state.kind === 'ok' && state.games.length > 0 ? (
          <ul className="live-scores__list">
            {state.games.map((g) => (
              <li key={g.id} className="live-scores__game">
                <div className="live-scores__status">{g.status}</div>
                <div className="live-scores__line">
                  <span className="live-scores__team">{g.awayLabel}</span>
                  <span className="live-scores__score">{g.awayScore}</span>
                </div>
                <div className="live-scores__line">
                  <span className="live-scores__team">{g.homeLabel}</span>
                  <span className="live-scores__score">{g.homeScore}</span>
                </div>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  )
}
