import { useEffect, useState } from 'react'
import type { SportId } from '../types'
import { getSport } from '../data/sports'
import {
  getPreviewTableForSport,
  getStandingsForSport,
  standingBarWidthPct,
  type StandingRow,
  type StandingsTable,
} from '../data/standings'
import { getTeamDetail } from '../data/teamDetails'
import { useEspnStandings } from '../hooks/useEspnStandings'
import { TeamDetailSheet } from './TeamDetailSheet'

type Props = {
  sportId: SportId
}

function Row({
  row,
  sportId,
  tableRows,
  onTeamClick,
}: {
  row: StandingRow
  sportId: SportId
  tableRows: StandingRow[]
  onTeamClick: (name: string) => void
}) {
  const barW = standingBarWidthPct(row, sportId, tableRows)
  return (
    <button type="button" className="st-row-btn" onClick={() => onTeamClick(row.name)}>
      <div className="st-pos">{row.pos}</div>
      <div className="st-name">{row.name}</div>
      <div className="st-rec">{row.record}</div>
      <div
        className="st-bar"
        aria-hidden
        title={`${barW.toFixed(1)}%`}
      >
        <div className="st-fill" style={{ width: `${barW}%` }} />
      </div>
    </button>
  )
}

function TableBlock({
  table,
  previewOnly,
  sportId,
  onTeamClick,
  railHeading,
  railHeadingId,
}: {
  table: StandingsTable
  previewOnly: boolean
  sportId: SportId
  onTeamClick: (name: string) => void
  railHeading?: string
  railHeadingId?: string
}) {
  const rows = previewOnly ? table.rows.slice(0, 5) : table.rows
  return (
    <div className="standings-block__table">
      {railHeading ? (
        <div className="standings-block__rail-hd" id={railHeadingId}>
          {railHeading}
        </div>
      ) : null}
      {!previewOnly ? (
        <div className="standings-block__hd">
          <div className="standings-block__title">{table.title}</div>
          {table.subtitle ? <div className="standings-block__sub">{table.subtitle}</div> : null}
        </div>
      ) : null}
      <div className="standings">
        {rows.map((row) => (
          <Row
            key={`${table.id}-${row.pos}-${row.name}`}
            row={row}
            sportId={sportId}
            tableRows={table.rows}
            onTeamClick={onTeamClick}
          />
        ))}
      </div>
    </div>
  )
}

export function StandingsBlock({ sportId }: Props) {
  const [full, setFull] = useState(false)
  const [confIdx, setConfIdx] = useState(0)
  const [teamSheet, setTeamSheet] = useState<string | null>(null)
  const live = useEspnStandings(sportId)
  const tables =
    live.kind === 'ok' ? live.data.tables : getStandingsForSport(sportId)
  const previewTable =
    live.kind === 'ok' ? live.data.previewTable : getPreviewTableForSport(sportId)
  const sport = getSport(sportId)
  const canExpand =
    tables.length > 1 || tables.some((t) => t.rows.length > 5) || previewTable.rows.length > 5

  useEffect(() => {
    setFull(false)
    setConfIdx(0)
    setTeamSheet(null)
  }, [sportId])

  const safeIdx = tables.length > 0 ? Math.min(confIdx, tables.length - 1) : 0
  const fullTable = tables[safeIdx]

  const onTeamClick = (name: string) => {
    setTeamSheet(name)
  }

  const headingId = `standings-heading-${sportId}`

  return (
    <>
      {teamSheet ? (
        <TeamDetailSheet detail={getTeamDetail(sportId, teamSheet)} onClose={() => setTeamSheet(null)} />
      ) : null}

      <div className="rail-standings" role="region" aria-labelledby={headingId}>
        {live.kind === 'loading' ? (
          <p className="standings-rail-status">Loading standings from ESPN…</p>
        ) : null}
        {live.kind === 'error' ? (
          <p className="standings-rail-status standings-rail-status--warn">
            Couldn’t refresh ({live.message}). Showing saved sample data.
          </p>
        ) : null}
        {live.kind === 'ok' ? (
          <p className="standings-rail-status standings-rail-status--live">
            Live · ESPN {live.data.seasonLabel ? `· ${live.data.seasonLabel}` : ''}
          </p>
        ) : null}

        {full ? (
          <div className="standings-block__full">
            <div className="standings-block__rail-hd" id={headingId}>
              {sport.name} standings
            </div>
            {tables.length > 1 ? (
              <div className="standings-block__seg" role="tablist" aria-label="Standings group">
                {tables.map((t, i) => (
                  <button
                    key={t.id}
                    type="button"
                    role="tab"
                    aria-selected={i === safeIdx}
                    className={`standings-block__seg-btn ${i === safeIdx ? 'on' : ''}`}
                    onClick={() => setConfIdx(i)}
                  >
                    {t.title}
                  </button>
                ))}
              </div>
            ) : null}
            {fullTable ? (
              <TableBlock
                key={fullTable.id}
                table={fullTable}
                previewOnly={false}
                sportId={sportId}
                onTeamClick={onTeamClick}
              />
            ) : null}
          </div>
        ) : (
          <TableBlock
            table={previewTable}
            previewOnly
            sportId={sportId}
            onTeamClick={onTeamClick}
            railHeading={`${sport.name} standings`}
            railHeadingId={headingId}
          />
        )}

        {canExpand ? (
          <button
            type="button"
            className="standings-block__expand"
            onClick={() => setFull((f) => !f)}
            aria-expanded={full}
          >
            {full ? 'Show top five only' : 'Full standings (all teams)'}
          </button>
        ) : null}
      </div>
    </>
  )
}
