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
  subtitle: '2025-26 sample · not live',
  rows: [
    { pos: 1, name: 'OKC Thunder', record: '62-18' },
    { pos: 2, name: 'Denver Nuggets', record: '57-23' },
    { pos: 3, name: 'LA Clippers', record: '52-28' },
    { pos: 4, name: 'San Antonio Spurs', record: '44-36' },
    { pos: 5, name: 'Memphis Grizzlies', record: '41-39' },
    { pos: 6, name: 'Minnesota Timberwolves', record: '40-40' },
    { pos: 7, name: 'Houston Rockets', record: '39-41' },
    { pos: 8, name: 'Golden State Warriors', record: '38-42' },
    { pos: 9, name: 'LA Lakers', record: '37-43' },
    { pos: 10, name: 'Dallas Mavericks', record: '36-44' },
    { pos: 11, name: 'Phoenix Suns', record: '35-45' },
    { pos: 12, name: 'Sacramento Kings', record: '33-47' },
    { pos: 13, name: 'Portland Trail Blazers', record: '30-50' },
    { pos: 14, name: 'Utah Jazz', record: '28-52' },
    { pos: 15, name: 'New Orleans Pelicans', record: '25-55' },
  ],
}

const wnba: StandingsTable = {
  id: 'wnba',
  title: 'WNBA · sample',
  subtitle: '12 teams; regular season spring–summer',
  rows: [
    { pos: 1, name: 'New York Liberty', record: '28-8' },
    { pos: 2, name: 'Las Vegas Aces', record: '26-10' },
    { pos: 3, name: 'Minnesota Lynx', record: '24-12' },
    { pos: 4, name: 'Indiana Fever', record: '22-14' },
    { pos: 5, name: 'Phoenix Mercury', record: '20-16' },
    { pos: 6, name: 'Seattle Storm', record: '18-18' },
    { pos: 7, name: 'Connecticut Sun', record: '16-20' },
    { pos: 8, name: 'Atlanta Dream', record: '14-22' },
  ],
}

const nbaEast: StandingsTable = {
  id: 'east',
  title: 'Eastern Conference',
  subtitle: '2025-26 sample · not live',
  rows: [
    { pos: 1, name: 'Boston Celtics', record: '59-21' },
    { pos: 2, name: 'Cleveland Cavaliers', record: '55-25' },
    { pos: 3, name: 'New York Knicks', record: '52-28' },
    { pos: 4, name: 'Milwaukee Bucks', record: '48-32' },
    { pos: 5, name: 'Indiana Pacers', record: '46-34' },
    { pos: 6, name: 'Detroit Pistons', record: '44-36' },
    { pos: 7, name: 'Orlando Magic', record: '42-38' },
    { pos: 8, name: 'Miami Heat', record: '40-40' },
    { pos: 9, name: 'Atlanta Hawks', record: '38-42' },
    { pos: 10, name: 'Chicago Bulls', record: '35-45' },
    { pos: 11, name: 'Philadelphia 76ers', record: '33-47' },
    { pos: 12, name: 'Toronto Raptors', record: '31-49' },
    { pos: 13, name: 'Brooklyn Nets', record: '29-51' },
    { pos: 14, name: 'Charlotte Hornets', record: '26-54' },
    { pos: 15, name: 'Washington Wizards', record: '22-58' },
  ],
}

const nflAfc: StandingsTable = {
  id: 'afc',
  title: 'AFC (snapshot)',
  subtitle: 'Sample records',
  rows: [
    { pos: 1, name: 'Buffalo Bills', record: '13-4' },
    { pos: 2, name: 'Baltimore Ravens', record: '12-5' },
    { pos: 3, name: 'Kansas City Chiefs', record: '11-6' },
    { pos: 4, name: 'Houston Texans', record: '10-7' },
    { pos: 5, name: 'Denver Broncos', record: '10-7' },
    { pos: 6, name: 'LA Chargers', record: '9-8' },
    { pos: 7, name: 'Pittsburgh Steelers', record: '9-8' },
    { pos: 8, name: 'Cincinnati Bengals', record: '8-9' },
  ],
}

const nflNfc: StandingsTable = {
  id: 'nfc',
  title: 'NFC (snapshot)',
  subtitle: 'Sample records',
  rows: [
    { pos: 1, name: 'Detroit Lions', record: '13-4' },
    { pos: 2, name: 'Philadelphia Eagles', record: '12-5' },
    { pos: 3, name: 'Tampa Bay Buccaneers', record: '11-6' },
    { pos: 4, name: 'LA Rams', record: '11-6' },
    { pos: 5, name: 'Chicago Bears', record: '10-7' },
    { pos: 6, name: 'Green Bay Packers', record: '10-7' },
    { pos: 7, name: 'Washington Commanders', record: '9-8' },
    { pos: 8, name: 'Minnesota Vikings', record: '8-9' },
  ],
}

const mlb: StandingsTable = {
  id: 'mlb',
  title: 'MLB · early snapshot',
  subtitle: 'Sample records',
  rows: [
    { pos: 1, name: 'Los Angeles Dodgers', record: '18-10' },
    { pos: 2, name: 'Atlanta Braves', record: '17-11' },
    { pos: 3, name: 'New York Yankees', record: '17-12' },
    { pos: 4, name: 'Philadelphia Phillies', record: '16-12' },
    { pos: 5, name: 'San Diego Padres', record: '16-13' },
    { pos: 6, name: 'Milwaukee Brewers', record: '15-13' },
    { pos: 7, name: 'Houston Astros', record: '15-14' },
    { pos: 8, name: 'Texas Rangers', record: '14-14' },
  ],
}

const nhl: StandingsTable = {
  id: 'nhl',
  title: 'NHL · Metropolitan (sample)',
  subtitle: 'Sample records',
  rows: [
    { pos: 1, name: 'Carolina Hurricanes', record: '52-22-8' },
    { pos: 2, name: 'NY Rangers', record: '50-24-8' },
    { pos: 3, name: 'Washington Capitals', record: '48-26-8' },
    { pos: 4, name: 'Pittsburgh Penguins', record: '44-30-8' },
    { pos: 5, name: 'Philadelphia Flyers', record: '42-32-8' },
    { pos: 6, name: 'NY Islanders', record: '40-34-8' },
    { pos: 7, name: 'New Jersey Devils', record: '38-36-8' },
    { pos: 8, name: 'Columbus Blue Jackets', record: '35-39-8' },
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
