import type { SportId } from '../types'

export type StandingRow = {
  pos: number
  name: string
  record: string
  /** Legacy visual hint; bars are derived from the record string when possible. */
  barPct?: number
}

export type StandingsTable = {
  id: string
  title: string
  subtitle?: string
  rows: StandingRow[]
}

const nbaWest: StandingsTable = {
  id: 'west',
  title: 'Western Conference',
  subtitle: '2025-26 final · offline sample (ESPN order)',
  rows: [
    { pos: 1, name: 'Oklahoma City Thunder', record: '64-18' },
    { pos: 2, name: 'San Antonio Spurs', record: '62-20' },
    { pos: 3, name: 'Denver Nuggets', record: '54-28' },
    { pos: 4, name: 'Los Angeles Lakers', record: '53-29' },
    { pos: 5, name: 'Houston Rockets', record: '52-30' },
    { pos: 6, name: 'Minnesota Timberwolves', record: '49-33' },
    { pos: 7, name: 'Phoenix Suns', record: '45-37' },
    { pos: 8, name: 'Portland Trail Blazers', record: '42-40' },
    { pos: 9, name: 'LA Clippers', record: '42-40' },
    { pos: 10, name: 'Golden State Warriors', record: '37-45' },
    { pos: 11, name: 'New Orleans Pelicans', record: '26-56' },
    { pos: 12, name: 'Dallas Mavericks', record: '26-56' },
    { pos: 13, name: 'Memphis Grizzlies', record: '25-57' },
    { pos: 14, name: 'Sacramento Kings', record: '22-60' },
    { pos: 15, name: 'Utah Jazz', record: '22-60' },
  ],
}

const wnba: StandingsTable = {
  id: 'wnba',
  title: 'WNBA · league table',
  subtitle: '2026 season · opening week · offline sample',
  rows: [
    { pos: 1, name: 'New York Liberty', record: '1-0' },
    { pos: 2, name: 'Washington Mystics', record: '1-0' },
    { pos: 3, name: 'Atlanta Dream', record: '0-0' },
    { pos: 4, name: 'Chicago Sky', record: '0-0' },
    { pos: 5, name: 'Dallas Wings', record: '0-0' },
    { pos: 6, name: 'Golden State Valkyries', record: '0-0' },
    { pos: 7, name: 'Indiana Fever', record: '0-0' },
    { pos: 8, name: 'Las Vegas Aces', record: '0-0' },
    { pos: 9, name: 'Los Angeles Sparks', record: '0-0' },
    { pos: 10, name: 'Minnesota Lynx', record: '0-0' },
    { pos: 11, name: 'Phoenix Mercury', record: '0-0' },
    { pos: 12, name: 'Portland Fire', record: '0-0' },
    { pos: 13, name: 'Seattle Storm', record: '0-0' },
    { pos: 14, name: 'Connecticut Sun', record: '0-1' },
    { pos: 15, name: 'Toronto Tempo', record: '0-1' },
  ],
}

const nbaEast: StandingsTable = {
  id: 'east',
  title: 'Eastern Conference',
  subtitle: '2025-26 final · offline sample (ESPN order)',
  rows: [
    { pos: 1, name: 'Detroit Pistons', record: '60-22' },
    { pos: 2, name: 'Boston Celtics', record: '56-26' },
    { pos: 3, name: 'New York Knicks', record: '53-29' },
    { pos: 4, name: 'Cleveland Cavaliers', record: '52-30' },
    { pos: 5, name: 'Atlanta Hawks', record: '46-36' },
    { pos: 6, name: 'Toronto Raptors', record: '46-36' },
    { pos: 7, name: 'Philadelphia 76ers', record: '45-37' },
    { pos: 8, name: 'Orlando Magic', record: '45-37' },
    { pos: 9, name: 'Charlotte Hornets', record: '44-38' },
    { pos: 10, name: 'Miami Heat', record: '43-39' },
    { pos: 11, name: 'Milwaukee Bucks', record: '32-50' },
    { pos: 12, name: 'Chicago Bulls', record: '31-51' },
    { pos: 13, name: 'Brooklyn Nets', record: '20-62' },
    { pos: 14, name: 'Indiana Pacers', record: '19-63' },
    { pos: 15, name: 'Washington Wizards', record: '17-65' },
  ],
}

const nflAfc: StandingsTable = {
  id: 'afc',
  title: 'AFC (snapshot)',
  subtitle: '2025 season · offline sample',
  rows: [
    { pos: 1, name: 'New England Patriots', record: '14-3' },
    { pos: 2, name: 'Denver Broncos', record: '14-3' },
    { pos: 3, name: 'Jacksonville Jaguars', record: '13-4' },
    { pos: 4, name: 'Houston Texans', record: '12-5' },
    { pos: 5, name: 'Buffalo Bills', record: '12-5' },
    { pos: 6, name: 'Los Angeles Chargers', record: '11-6' },
    { pos: 7, name: 'Pittsburgh Steelers', record: '10-7' },
    { pos: 8, name: 'Indianapolis Colts', record: '8-9' },
  ],
}

const nflNfc: StandingsTable = {
  id: 'nfc',
  title: 'NFC (snapshot)',
  subtitle: '2025 season · offline sample',
  rows: [
    { pos: 1, name: 'Seattle Seahawks', record: '14-3' },
    { pos: 2, name: 'Los Angeles Rams', record: '12-5' },
    { pos: 3, name: 'San Francisco 49ers', record: '12-5' },
    { pos: 4, name: 'Chicago Bears', record: '11-6' },
    { pos: 5, name: 'Philadelphia Eagles', record: '11-6' },
    { pos: 6, name: 'Green Bay Packers', record: '9-7' },
    { pos: 7, name: 'Minnesota Vikings', record: '9-8' },
    { pos: 8, name: 'Detroit Lions', record: '9-8' },
  ],
}

const mlb: StandingsTable = {
  id: 'mlb',
  title: 'MLB · league snapshot',
  subtitle: '2026 regular season · offline sample',
  rows: [
    { pos: 1, name: 'Chicago Cubs', record: '26-12' },
    { pos: 2, name: 'Atlanta Braves', record: '26-12' },
    { pos: 3, name: 'New York Yankees', record: '26-13' },
    { pos: 4, name: 'Tampa Bay Rays', record: '25-13' },
    { pos: 5, name: 'Los Angeles Dodgers', record: '23-14' },
    { pos: 6, name: 'St. Louis Cardinals', record: '22-15' },
    { pos: 7, name: 'San Diego Padres', record: '22-15' },
    { pos: 8, name: 'Milwaukee Brewers', record: '20-16' },
  ],
}

const nhl: StandingsTable = {
  id: 'nhl',
  title: 'NHL · league snapshot',
  subtitle: '2025-26 regular season · offline sample',
  rows: [
    { pos: 1, name: 'Colorado Avalanche', record: '55-16-11' },
    { pos: 2, name: 'Carolina Hurricanes', record: '53-22-7' },
    { pos: 3, name: 'Buffalo Sabres', record: '50-23-9' },
    { pos: 4, name: 'Tampa Bay Lightning', record: '50-26-6' },
    { pos: 5, name: 'Dallas Stars', record: '50-20-12' },
    { pos: 6, name: 'Montreal Canadiens', record: '48-24-10' },
    { pos: 7, name: 'Minnesota Wild', record: '46-24-12' },
    { pos: 8, name: 'Boston Bruins', record: '45-27-10' },
  ],
}

const soccer: StandingsTable = {
  id: 'ucl',
  title: 'UCL · knockout stage',
  subtitle: 'Sample group form',
  rows: [
    { pos: 1, name: 'Real Madrid', record: 'W5 D1 L0' },
    { pos: 2, name: 'Man City', record: 'W4 D1 L1' },
    { pos: 3, name: 'Arsenal', record: 'W4 D0 L2' },
    { pos: 4, name: 'Bayern Munich', record: 'W3 D2 L1' },
    { pos: 5, name: 'Inter Milan', record: 'W3 D1 L2' },
    { pos: 6, name: 'PSG', record: 'W3 D0 L3' },
  ],
}

const f1: StandingsTable = {
  id: 'f1',
  title: '2026 · Constructor (sample)',
  subtitle: 'Sample points',
  rows: [
    { pos: 1, name: 'Red Bull Racing', record: '112 pts' },
    { pos: 2, name: 'Ferrari', record: '98 pts' },
    { pos: 3, name: 'McLaren', record: '86 pts' },
    { pos: 4, name: 'Mercedes', record: '74 pts' },
    { pos: 5, name: 'Aston Martin', record: '52 pts' },
  ],
}

const tennis: StandingsTable = {
  id: 'atp',
  title: 'ATP · top of the race',
  subtitle: 'Sample race points',
  rows: [
    { pos: 1, name: 'Jannik Sinner', record: '9180' },
    { pos: 2, name: 'Carlos Alcaraz', record: '8850' },
    { pos: 3, name: 'Alexander Zverev', record: '5160' },
    { pos: 4, name: 'Taylor Fritz', record: '4780' },
    { pos: 5, name: 'Novak Djokovic', record: '4630' },
  ],
}

const cfb: StandingsTable = {
  id: 'sec',
  title: 'SEC · spring snapshot',
  subtitle: 'Sample records',
  rows: [
    { pos: 1, name: 'Georgia', record: '11-2' },
    { pos: 2, name: 'Texas', record: '10-3' },
    { pos: 3, name: 'Alabama', record: '10-3' },
    { pos: 4, name: 'Ole Miss', record: '9-4' },
    { pos: 5, name: 'Tennessee', record: '9-4' },
    { pos: 6, name: 'LSU', record: '8-5' },
    { pos: 7, name: 'South Carolina', record: '8-5' },
  ],
}

const BY_SPORT: Record<SportId, StandingsTable[]> = {
  nba: [nbaWest, nbaEast],
  wnba: [wnba],
  nfl: [nflAfc, nflNfc],
  cfb: [cfb],
  mlb: [mlb],
  nhl: [nhl],
  soccer: [soccer],
  f1: [f1],
  tennis: [tennis],
}

export function getStandingsForSport(id: SportId): StandingsTable[] {
  return BY_SPORT[id]
}

/** Parses W-L records (NBA, NFL, MLB, CFB, etc.). */
function parseWinLoss(record: string): { wins: number; losses: number; pct: number } | null {
  const m = /^(\d+)-(\d+)$/.exec(record.trim())
  if (!m) return null
  const wins = Number(m[1])
  const losses = Number(m[2])
  const gp = wins + losses
  if (gp <= 0) return null
  return { wins, losses, pct: wins / gp }
}

function parseNhlWinsPct(record: string): number | null {
  const m = /^(\d+)-(\d+)-(\d+)$/.exec(record.trim())
  if (!m) return null
  const w = Number(m[1])
  const l = Number(m[2])
  const otl = Number(m[3])
  const gp = w + l + otl
  if (gp <= 0) return null
  return w / gp
}

function parseSoccerWdlPct(record: string): number | null {
  const m = /W\s*(\d+)\s*D\s*(\d+)\s*L\s*(\d+)/i.exec(record.trim())
  if (!m) return null
  const w = Number(m[1])
  const d = Number(m[2])
  const l = Number(m[3])
  const gp = w + d + l
  if (gp <= 0) return null
  return w / gp
}

function parseConstructorPoints(record: string): number | null {
  const m = /^(\d+)\s*pts$/i.exec(record.trim())
  return m ? Number(m[1]) : null
}

function parseAtpPoints(record: string): number | null {
  const m = /^(\d{3,5})$/.exec(record.trim())
  return m ? Number(m[1]) : null
}

/**
 * Bar width 0–100 for the standings strip: win % for team sports, or share of table max for points-only rows.
 */
export function standingBarWidthPct(row: StandingRow, sportId: SportId, tableRows: StandingRow[]): number {
  const pct = (x: number) => Math.min(100, Math.round(x * 1000) / 10)

  const wl = parseWinLoss(row.record)
  if (wl) return pct(wl.pct)

  const nhl = parseNhlWinsPct(row.record)
  if (nhl !== null) return pct(nhl)

  const ucl = parseSoccerWdlPct(row.record)
  if (ucl !== null) return pct(ucl)

  const f1pts = parseConstructorPoints(row.record)
  if (f1pts !== null) {
    const all = tableRows.map((r) => parseConstructorPoints(r.record)).filter((x): x is number => x !== null)
    const maxPts = all.length ? Math.max(...all) : 1
    return maxPts > 0 ? pct(f1pts / maxPts) : 0
  }

  if (sportId === 'tennis') {
    const p = parseAtpPoints(row.record)
    if (p !== null) {
      const all = tableRows.map((r) => parseAtpPoints(r.record)).filter((x): x is number => x !== null)
      const maxPts = all.length ? Math.max(...all) : 1
      return maxPts > 0 ? pct(p / maxPts) : 0
    }
  }

  return row.barPct ?? 0
}

/**
 * Merges conference tables into one league-wide top N by win percentage.
 * Tiebreak: more wins, then team name.
 */
function buildLeagueTopTable(
  tables: StandingsTable[],
  n: number,
  title: string,
  subtitle: string,
): StandingsTable {
  type Scored = StandingRow & { pct: number; wins: number }
  const scored: Scored[] = []
  for (const t of tables) {
    for (const r of t.rows) {
      const p = parseWinLoss(r.record)
      if (!p) continue
      scored.push({ ...r, pct: p.pct, wins: p.wins })
    }
  }
  scored.sort((a, b) => {
    if (b.pct !== a.pct) return b.pct - a.pct
    if (b.wins !== a.wins) return b.wins - a.wins
    return a.name.localeCompare(b.name)
  })
  const top = scored.slice(0, n)
  return {
    id: 'league-top',
    title,
    subtitle,
    rows: top.map((r, i) => ({
      pos: i + 1,
      name: r.name,
      record: r.record,
    })),
  }
}

const NBA_LEAGUE_PREVIEW = buildLeagueTopTable(
  [nbaWest, nbaEast],
  5,
  'League',
  'Top 5 by record (both conferences)',
)

const NFL_LEAGUE_PREVIEW = buildLeagueTopTable(
  [nflAfc, nflNfc],
  5,
  'League',
  'Top 5 by record (AFC + NFC)',
)

/** Table shown in the rail preview: league-wide top 5 when the sport splits by conference. */
export function getPreviewTableForSport(id: SportId): StandingsTable {
  if (id === 'nba') return NBA_LEAGUE_PREVIEW
  if (id === 'wnba') return wnba
  if (id === 'nfl') return NFL_LEAGUE_PREVIEW
  return getStandingsForSport(id)[0]
}

/** Top N rows from the first table (preview strip like the prototype). */
export function getStandingsPreview(id: SportId, n = 5): { table: StandingsTable; rows: StandingRow[] } {
  const table = getPreviewTableForSport(id)
  return { table, rows: table.rows.slice(0, n) }
}
