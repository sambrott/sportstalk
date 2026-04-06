import type { TeamDetail } from '../data/teamDetails'

type Props = {
  detail: TeamDetail
  onClose: () => void
}

export function TeamDetailSheet({ detail, onClose }: Props) {
  return (
    <div className="team-sheet-bg" onClick={onClose}>
      <div
        className="team-sheet"
        role="dialog"
        aria-labelledby="team-sheet-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className="team-sheet__close" onClick={onClose} aria-label="Close">
          ✕
        </button>
        <h2 className="team-sheet__title" id="team-sheet-title">
          {detail.teamName}
        </h2>
        <p className="team-sheet__meta">Sample team profile (connect APIs for live data)</p>

        <section className="team-sheet__section">
          <h3 className="team-sheet__h">Starting lineup</h3>
          <ul className="team-sheet__lineup">
            {detail.lineup.map((row) => (
              <li key={row.role} className="team-sheet__line">
                <span className="team-sheet__role">{row.role}</span>
                <span className="team-sheet__name">{row.name}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="team-sheet__section">
          <h3 className="team-sheet__h">History</h3>
          <p className="team-sheet__p">{detail.history}</p>
        </section>

        <section className="team-sheet__section">
          <h3 className="team-sheet__h">News</h3>
          <ul className="team-sheet__news">
            {detail.news.map((n, i) => (
              <li key={i} className="team-sheet__news-item">
                <div className="team-sheet__news-title">{n.title}</div>
                <div className="team-sheet__news-sum">{n.summary}</div>
              </li>
            ))}
          </ul>
        </section>

        <button type="button" className="team-sheet__done" onClick={onClose}>
          Done
        </button>
      </div>
    </div>
  )
}
