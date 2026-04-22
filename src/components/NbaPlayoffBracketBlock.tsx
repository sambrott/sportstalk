import { useNbaPlayoffBracket } from '../hooks/useNbaPlayoffBracket'

function MatchupList({
  label,
  matchups,
}: {
  label: string
  matchups: { seedHigh: number; seedLow: number; teamHigh: { abbr: string; name: string }; teamLow: { abbr: string; name: string } }[]
}) {
  if (matchups.length === 0) {
    return <p className="nba-bracket__empty">No {label} first-round matchups parsed yet.</p>
  }
  return (
    <div className="nba-bracket__col" aria-label={label}>
      <div className="nba-bracket__col-title">{label}</div>
      <ol className="nba-bracket__list">
        {matchups.map((m) => (
          <li key={`${m.seedHigh}-${m.seedLow}`} className="nba-bracket__game">
            <div className="nba-bracket__seeds">
              ({m.seedHigh}) {m.teamHigh.abbr} vs ({m.seedLow}) {m.teamLow.abbr}
            </div>
            <div className="nba-bracket__names">
              <span title={m.teamHigh.name}>{m.teamHigh.name}</span>
              <span className="nba-bracket__vs">–</span>
              <span title={m.teamLow.name}>{m.teamLow.name}</span>
            </div>
            <div className="nba-bracket__note">First round (best of 7)</div>
          </li>
        ))}
      </ol>
    </div>
  )
}

export function NbaPlayoffBracketBlock() {
  const st = useNbaPlayoffBracket()

  if (st.kind === 'loading' || st.kind === 'idle') {
    return <p className="nba-bracket__placeholder">Loading NBA playoff matchups from ESPN…</p>
  }
  if (st.kind === 'error') {
    return <p className="nba-bracket__warn">{st.message}</p>
  }

  return (
    <section className="nba-bracket" aria-label="NBA playoff first round">
      <div className="nba-bracket__head">
        <div className="nba-bracket__kicker">Playoffs</div>
        <h3 className="nba-bracket__title">Current bracket (first round)</h3>
        <p className="nba-bracket__sub">ESPN · {st.seasonLabel} · pairings from playoff seeds (3–0—7 series)</p>
      </div>
      <div className="nba-bracket__grid">
        <MatchupList label="Eastern Conference" matchups={st.east} />
        <MatchupList label="Western Conference" matchups={st.west} />
      </div>
    </section>
  )
}
