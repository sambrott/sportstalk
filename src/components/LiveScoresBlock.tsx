import type { SportId } from '../types'
import { getSport } from '../data/sports'
import { useLiveScores } from '../hooks/useLiveScores'

type Props = {
  sportId: SportId
}

const UNSUPPORTED: SportId[] = ['soccer', 'f1', 'tennis']

export function LiveScoresBlock({ sportId }: Props) {
  const state = useLiveScores(sportId)
  const sport = getSport(sportId)

  if (UNSUPPORTED.includes(sportId)) {
    return (
      <section className="live-scores" aria-labelledby="live-heading">
        <div className="sr-hd sr-hd--static">
          <div>
            <div className="sr-hd-title" id="live-heading">
              {sport.name} · live scores
            </div>
            <div className="sr-hd-sub">Feed not wired for this sport yet</div>
          </div>
        </div>
        <p className="live-scores__placeholder">
          NBA, NFL, MLB, NHL, and college football use ESPN&apos;s public scoreboard API in this app.
          Soccer, F1, and tennis need a different source (league-specific APIs or schedules).
        </p>
      </section>
    )
  }

  return (
    <section className="live-scores" aria-labelledby="live-heading">
      <div className="sr-hd sr-hd--static">
        <div>
          <div className="sr-hd-title" id="live-heading">
            {sport.name} · today&apos;s games
          </div>
          <div className="sr-hd-sub">ESPN scoreboard for {sport.name} only</div>
        </div>
      </div>

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
    </section>
  )
}
