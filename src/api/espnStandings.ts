import type { SportId } from '../types'
import type { StatBar, StatChart } from '../types'
import type { StandingRow, StandingsTable } from '../data/standings'
import { ESPN_ORIGIN } from './espnOrigin'

type EspnStat = { type: string; value?: number; displayValue?: string }
type EspnEntry = {
  team?: { displayName?: string; shortDisplayName?: string }
  athlete?: { displayName?: string; shortName?: string }
  stats?: EspnStat[]
}
type EspnStandingsGroup = {
  name?: string
  abbreviation?: string
  standings?: { entries?: EspnEntry[]; seasonDisplayName?: string }
}
type EspnStandingsRoot = {
  name?: string
  seasonDisplayName?: string
  children?: EspnStandingsGroup[]
}

function statNum(entry: EspnEntry, type: string): number | undefined {
  const v = entry.stats?.find((s) => s.type === type)?.value
  return typeof v === 'number' ? v : undefined
}

function teamName(entry: EspnEntry): string | null {
  return entry.team?.displayName ?? entry.athlete?.displayName ?? null
}

function recordTeam(entry: EspnEntry, sportId: SportId): string {
  const w = statNum(entry, 'wins')
  const l = statNum(entry, 'losses')
  if (sportId === 'nhl') {
    const otl = statNum(entry, 'overtimelosses') ?? statNum(entry, 'otlosses')
    if (w !== undefined && l !== undefined) {
      return otl !== undefined && otl > 0 ? `${w}-${l}-${otl}` : `${w}-${l}`
    }
  }
  if (sportId === 'soccer') {
    const total = entry.stats?.find((s) => s.type === 'total')?.displayValue
    if (total) return total
    const d = statNum(entry, 'ties') ?? 0
    if (w !== undefined && l !== undefined) return `${w}-${d}-${l}`
  }
  if (w !== undefined && l !== undefined) return `${w}-${l}`
  return entry.stats?.find((s) => s.type === 'points')?.displayValue ?? '—'
}

function recordF1(entry: EspnEntry): string {
  const pts = statNum(entry, 'points')
  return pts !== undefined ? `${pts} pts` : '—'
}

function parseEntriesToRows(entries: EspnEntry[], sportId: SportId, startPos = 1): StandingRow[] {
  const rows: StandingRow[] = []
  entries.forEach((entry, i) => {
    const name = teamName(entry)
    if (!name) return
    const record = sportId === 'f1' ? recordF1(entry) : recordTeam(entry, sportId)
    rows.push({ pos: startPos + i, name, record })
  })
  return rows
}

function parseTeamSport(root: EspnStandingsRoot, sportId: SportId): { tables: StandingsTable[]; seasonLabel?: string } {
  const tables: StandingsTable[] = []
  let seasonLabel: string | undefined
  const children = root.children ?? []
  for (const ch of children) {
    const entries = ch.standings?.entries ?? []
    if (!entries.length) continue
    if (ch.standings?.seasonDisplayName) seasonLabel = ch.standings.seasonDisplayName
    const title = ch.name ?? 'Standings'
    const id = (ch.abbreviation ?? title).toLowerCase().replace(/\s+/g, '-').slice(0, 32)
    const rows = parseEntriesToRows(entries, sportId)
    tables.push({
      id,
      title,
      subtitle: seasonLabel ? `Season: ${seasonLabel}` : undefined,
      rows,
    })
  }
  return { tables, seasonLabel }
}

function parseF1(root: EspnStandingsRoot): { tables: StandingsTable[]; seasonLabel?: string } {
  const ch = root.children?.find((c) => /driver/i.test(c.name ?? '')) ?? root.children?.[0]
  const entries = ch?.standings?.entries ?? []
  const seasonLabel = ch?.standings?.seasonDisplayName
  const rows = entries.map((entry, i) => {
    const name = teamName(entry)
    const record = recordF1(entry)
    return { pos: i + 1, name: name ?? '—', record }
  })
  return {
    tables: [
      {
        id: 'drivers',
        title: ch?.name ?? 'Driver standings',
        subtitle: seasonLabel ? `Season: ${seasonLabel}` : undefined,
        rows,
      },
    ],
    seasonLabel,
  }
}

function mergeLeagueTop(entries: { name: string; record: string; pct: number }[], n: number): StandingsTable {
  const sorted = [...entries].sort((a, b) => b.pct - a.pct || a.name.localeCompare(b.name))
  const top = sorted.slice(0, n)
  return {
    id: 'league-top',
    title: 'League',
    subtitle: `Top ${n} by win % (all groups)`,
    rows: top.map((r, i) => ({ pos: i + 1, name: r.name, record: r.record })),
  }
}

function winPctFromEntry(entry: EspnEntry): number | null {
  const p = entry.stats?.find((s) => s.type === 'winpercent')?.value
  if (typeof p === 'number' && p >= 0 && p <= 1) return p
  const w = statNum(entry, 'wins')
  const l = statNum(entry, 'losses')
  if (w === undefined || l === undefined) return null
  const g = w + l
  return g > 0 ? w / g : null
}

function collectMergedTop(root: EspnStandingsRoot, sportId: SportId): StandingsTable {
  const merged: { name: string; record: string; pct: number }[] = []
  for (const ch of root.children ?? []) {
    for (const entry of ch.standings?.entries ?? []) {
      const name = teamName(entry)
      if (!name) continue
      const pct = winPctFromEntry(entry)
      if (pct === null) continue
      merged.push({ name, record: recordTeam(entry, sportId), pct })
    }
  }
  return mergeLeagueTop(merged, 5)
}

function collectSoccerTop(root: EspnStandingsRoot): StandingsTable {
  const merged: { name: string; record: string; pts: number }[] = []
  for (const ch of root.children ?? []) {
    for (const entry of ch.standings?.entries ?? []) {
      const name = teamName(entry)
      if (!name) continue
      const pts = statNum(entry, 'points') ?? 0
      merged.push({ name, record: recordTeam(entry, 'soccer'), pts })
    }
  }
  merged.sort((a, b) => b.pts - a.pts || a.name.localeCompare(b.name))
  const top = merged.slice(0, 5)
  return {
    id: 'league-top',
    title: 'League',
    subtitle: 'Top 5 by points',
    rows: top.map((r, i) => ({ pos: i + 1, name: r.name, record: r.record })),
  }
}

function collectF1Top(tables: StandingsTable[]): StandingsTable {
  const rows = tables[0]?.rows ?? []
  const top = rows.slice(0, 5)
  return {
    id: 'league-top',
    title: 'League',
    subtitle: 'Top 5 by championship points',
    rows: top.map((r, i) => ({ ...r, pos: i + 1 })),
  }
}

export function buildPreviewTable(sportId: SportId, tables: StandingsTable[], root: EspnStandingsRoot): StandingsTable {
  if (sportId === 'nba' || sportId === 'nfl' || sportId === 'mlb' || sportId === 'nhl') {
    return collectMergedTop(root, sportId)
  }
  if (sportId === 'cfb') {
    return collectMergedTop(root, sportId)
  }
  if (sportId === 'soccer') {
    return collectSoccerTop(root)
  }
  if (sportId === 'f1') {
    return collectF1Top(tables)
  }
  return tables[0] ?? { id: 'empty', title: 'Standings', rows: [] }
}

export function standingsPathForSport(id: SportId): string | null {
  switch (id) {
    case 'nba':
      return '/apis/v2/sports/basketball/nba/standings'
    case 'nfl':
      return '/apis/v2/sports/football/nfl/standings'
    case 'cfb':
      return '/apis/v2/sports/football/college-football/standings'
    case 'mlb':
      return '/apis/v2/sports/baseball/mlb/standings'
    case 'nhl':
      return '/apis/v2/sports/hockey/nhl/standings'
    case 'soccer':
      return '/apis/v2/sports/soccer/uefa.champions/standings'
    case 'f1':
      return '/apis/v2/sports/racing/f1/standings'
    default:
      return null
  }
}

export type EspnStandingsBundle = {
  tables: StandingsTable[]
  previewTable: StandingsTable
  seasonLabel?: string
  fetchedAt: string
}

const cache = new Map<SportId, { at: number; data: EspnStandingsBundle }>()
const TTL_MS = 5 * 60 * 1000
const inflight = new Map<SportId, Promise<EspnStandingsBundle>>()

function parseRoot(json: unknown, sportId: SportId): EspnStandingsBundle {
  const root = json as EspnStandingsRoot
  const fetchedAt = new Date().toISOString()
  let tables: StandingsTable[]
  let seasonLabel: string | undefined

  if (sportId === 'f1') {
    const p = parseF1(root)
    tables = p.tables
    seasonLabel = p.seasonLabel
  } else {
    const p = parseTeamSport(root, sportId)
    tables = p.tables
    seasonLabel = p.seasonLabel
  }

  const previewTable = buildPreviewTable(sportId, tables, root)
  return { tables, previewTable, seasonLabel, fetchedAt }
}

export async function fetchEspnStandings(sportId: SportId): Promise<EspnStandingsBundle> {
  const path = standingsPathForSport(sportId)
  if (!path) throw new Error('No ESPN standings path for sport')

  const now = Date.now()
  const hit = cache.get(sportId)
  if (hit && now - hit.at < TTL_MS) return hit.data

  if (inflight.has(sportId)) return inflight.get(sportId)!

  const p = (async () => {
    const url = `${ESPN_ORIGIN}${path}`
    const res = await fetch(url, { credentials: 'omit' })
    if (!res.ok) throw new Error(`Standings HTTP ${res.status}`)
    const json = await res.json()
    const data = parseRoot(json, sportId)
    cache.set(sportId, { at: Date.now(), data })
    return data
  })()

  inflight.set(sportId, p)
  try {
    return await p
  } finally {
    inflight.delete(sportId)
  }
}

/** Live stat card from ESPN standings (replaces editorial snapshots when fetch succeeds). */
export function deriveLiveStatChart(sportId: SportId, bundle: EspnStandingsBundle): StatChart | null {
  const foot = `ESPN · updated ${new Date(bundle.fetchedAt).toLocaleString()} · ${bundle.seasonLabel ?? 'regular season'}`

  const top = bundle.previewTable.rows.slice(0, 5)
  if (!top.length) return null

  const bars: StatBar[] = top.map((r, i) => {
    const wl = /^(\d+)-(\d+)$/.exec(r.record.trim())
    let pct = 100 - i * 15
    if (wl) {
      const w = Number(wl[1])
      const l = Number(wl[2])
      const g = w + l
      if (g > 0) pct = Math.round((w / g) * 1000) / 10
    }
    const short = r.name.split(' ').pop() ?? r.name
    return {
      label: short.length > 14 ? short.slice(0, 12) + '…' : short,
      value: r.record,
      pct: Math.min(100, Math.max(8, pct)),
      highlight: i === 0,
    }
  })

  switch (sportId) {
    case 'nba':
      return {
        kind: 'bar-h',
        title: 'League snapshot — win column',
        subtitle: 'Top 5 clubs by win % (merged conferences where applicable)',
        footnote: foot,
        bars,
      }
    case 'nfl':
      return {
        kind: 'bar-v',
        title: 'League snapshot — win column',
        subtitle: 'Top 5 teams by win %',
        footnote: foot,
        bars,
      }
    case 'mlb':
      return {
        kind: 'bar-h',
        title: 'League snapshot — records',
        subtitle: 'Top 5 by win % (all divisions combined)',
        footnote: foot,
        bars,
      }
    case 'nhl':
      return {
        kind: 'lollipop',
        title: 'League snapshot — points pace',
        subtitle: 'Top 5 by win % proxy from standings',
        footnote: foot,
        items: bars,
      }
    case 'cfb':
      return {
        kind: 'lollipop',
        title: 'FBS snapshot — win column',
        subtitle: 'Top 5 schools by win % (all conferences)',
        footnote: foot,
        items: bars,
      }
    case 'soccer':
      return {
        kind: 'bar-h',
        title: 'UCL league phase — top form',
        subtitle: 'Top 5 by table points',
        footnote: foot,
        bars,
      }
    case 'f1':
      return {
        kind: 'lollipop',
        title: 'Championship — top drivers',
        subtitle: 'Top 5 by points',
        footnote: foot,
        items: bars,
      }
    default:
      return null
  }
}
