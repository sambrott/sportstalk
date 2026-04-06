import { useState } from 'react'
import type { SportId } from '../types'
import { getSport } from '../data/sports'
import {
  getPreviewTableForSport,
  getStandingsForSport,
  type StandingRow,
  type StandingsTable,
} from '../data/standings'
import { getTeamDetail } from '../data/teamDetails'
import { TeamDetailSheet } from './TeamDetailSheet'

type Props = {
  sportId: SportId
}

function Row({
  row,
  onTeamClick,
}: {
  row: StandingRow
  onTeamClick: (name: string) => void
}) {
  return (
    <button type="button" className="st-row-btn" onClick={() => onTeamClick(row.name)}>
      <div className="st-pos">{row.pos}</div>
      <div className="st-name">{row.name}</div>
      <div className="st-rec">{row.record}</div>
      <div className="st-bar" aria-hidden>
        <div className="st-fill" style={{ width: `${row.barPct}%` }} />
      </div>
    </button>
  )
}

function TableBlock({
  table,
  previewOnly,
  onTeamClick,
}: {
  table: StandingsTable
  previewOnly: boolean
  onTeamClick: (name: string) => void
}) {
  const rows = previewOnly ? table.rows.slice(0, 5) : table.rows
  return (
    <div className="standings-block__table">
      <div className="standings-block__hd">
        <div className="standings-block__title">{table.title}</div>
        {table.subtitle ? <div className="standings-block__sub">{table.subtitle}</div> : null}
      </div>
      <div className="standings">
        {rows.map((row) => (
          <Row key={`${table.id}-${row.pos}-${row.name}`} row={row} onTeamClick={onTeamClick} />
        ))}
      </div>
    </div>
  )
}

export function StandingsBlock({ sportId }: Props) {
  const [full, setFull] = useState(false)
  const [teamSheet, setTeamSheet] = useState<string | null>(null)
  const tables = getStandingsForSport(sportId)
  const previewTable = getPreviewTableForSport(sportId)
  const sport = getSport(sportId)

  const onTeamClick = (name: string) => {
    setTeamSheet(name)
  }

  return (
    <>
      {teamSheet ? (
        <TeamDetailSheet detail={getTeamDetail(sportId, teamSheet)} onClose={() => setTeamSheet(null)} />
      ) : null}

      <section className="standings-block" aria-labelledby="standings-heading">
        <div className="sr-hd sr-hd--static">
          <div>
            <div className="sr-hd-title" id="standings-heading">
              {sport.name} standings
            </div>
            <div className="sr-hd-sub">Illustrative order for {sport.name} only · tap a team for more</div>
          </div>
        </div>

        {full ? (
          <div className="standings-block__full">
            {tables.map((t) => (
              <TableBlock key={t.id} table={t} previewOnly={false} onTeamClick={onTeamClick} />
            ))}
          </div>
        ) : (
          <TableBlock table={previewTable} previewOnly onTeamClick={onTeamClick} />
        )}

        {tables.length > 1 || tables[0].rows.length > 5 ? (
          <button
            type="button"
            className="standings-block__expand"
            onClick={() => setFull((f) => !f)}
          >
            {full ? 'Show top five only' : 'Full standings (all teams)'}
          </button>
        ) : null}
      </section>
    </>
  )
}
