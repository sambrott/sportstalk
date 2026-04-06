import type { SportId } from '../types'

export type StandingRow = {
  pos: number
  name: string
  record: string
  barPct: number
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
  subtitle: 'Playoff picture',
  rows: [
    { pos: 1, name: 'OKC Thunder', record: '62-18', barPct: 90 },
    { pos: 2, name: 'Denver Nuggets', record: '57-23', barPct: 74 },
    { pos: 3, name: 'LA Clippers', record: '52-28', barPct: 62 },
    { pos: 4, name: 'San Antonio Spurs', record: '44-36', barPct: 46 },
    { pos: 5, name: 'Memphis Grizzlies', record: '41-39', barPct: 38 },
    { pos: 6, name: 'Minnesota Timberwolves', record: '40-40', barPct: 36 },
    { pos: 7, name: 'Houston Rockets', record: '39-41', barPct: 34 },
    { pos: 8, name: 'Golden State Warriors', record: '38-42', barPct: 32 },
    { pos: 9, name: 'LA Lakers', record: '37-43', barPct: 30 },
    { pos: 10, name: 'Dallas Mavericks', record: '36-44', barPct: 28 },
    { pos: 11, name: 'Phoenix Suns', record: '35-45', barPct: 26 },
    { pos: 12, name: 'Sacramento Kings', record: '33-47', barPct: 22 },
    { pos: 13, name: 'Portland Trail Blazers', record: '30-50', barPct: 18 },
    { pos: 14, name: 'Utah Jazz', record: '28-52', barPct: 14 },
    { pos: 15, name: 'New Orleans Pelicans', record: '25-55', barPct: 10 },
  ],
}

const nbaEast: StandingsTable = {
  id: 'east',
  title: 'Eastern Conference',
  subtitle: 'Playoff picture',
  rows: [
    { pos: 1, name: 'Boston Celtics', record: '59-21', barPct: 86 },
    { pos: 2, name: 'Cleveland Cavaliers', record: '55-25', barPct: 78 },
    { pos: 3, name: 'New York Knicks', record: '52-28', barPct: 70 },
    { pos: 4, name: 'Milwaukee Bucks', record: '48-32', barPct: 62 },
    { pos: 5, name: 'Indiana Pacers', record: '46-34', barPct: 56 },
    { pos: 6, name: 'Detroit Pistons', record: '44-36', barPct: 50 },
    { pos: 7, name: 'Orlando Magic', record: '42-38', barPct: 44 },
    { pos: 8, name: 'Miami Heat', record: '40-40', barPct: 38 },
    { pos: 9, name: 'Atlanta Hawks', record: '38-42', barPct: 32 },
    { pos: 10, name: 'Chicago Bulls', record: '35-45', barPct: 26 },
    { pos: 11, name: 'Philadelphia 76ers', record: '33-47', barPct: 22 },
    { pos: 12, name: 'Toronto Raptors', record: '31-49', barPct: 18 },
    { pos: 13, name: 'Brooklyn Nets', record: '29-51', barPct: 14 },
    { pos: 14, name: 'Charlotte Hornets', record: '26-54', barPct: 10 },
    { pos: 15, name: 'Washington Wizards', record: '22-58', barPct: 6 },
  ],
}

const nflAfc: StandingsTable = {
  id: 'afc',
  title: 'AFC (snapshot)',
  subtitle: 'Illustrative order',
  rows: [
    { pos: 1, name: 'Buffalo Bills', record: '13-4', barPct: 88 },
    { pos: 2, name: 'Baltimore Ravens', record: '12-5', barPct: 80 },
    { pos: 3, name: 'Kansas City Chiefs', record: '11-6', barPct: 72 },
    { pos: 4, name: 'Houston Texans', record: '10-7', barPct: 64 },
    { pos: 5, name: 'Denver Broncos', record: '10-7', barPct: 60 },
    { pos: 6, name: 'LA Chargers', record: '9-8', barPct: 52 },
    { pos: 7, name: 'Pittsburgh Steelers', record: '9-8', barPct: 48 },
    { pos: 8, name: 'Cincinnati Bengals', record: '8-9', barPct: 40 },
  ],
}

const nflNfc: StandingsTable = {
  id: 'nfc',
  title: 'NFC (snapshot)',
  subtitle: 'Illustrative order',
  rows: [
    { pos: 1, name: 'Detroit Lions', record: '13-4', barPct: 88 },
    { pos: 2, name: 'Philadelphia Eagles', record: '12-5', barPct: 80 },
    { pos: 3, name: 'Tampa Bay Buccaneers', record: '11-6', barPct: 72 },
    { pos: 4, name: 'LA Rams', record: '11-6', barPct: 70 },
    { pos: 5, name: 'Chicago Bears', record: '10-7', barPct: 62 },
    { pos: 6, name: 'Green Bay Packers', record: '10-7', barPct: 58 },
    { pos: 7, name: 'Washington Commanders', record: '9-8', barPct: 50 },
    { pos: 8, name: 'Minnesota Vikings', record: '8-9', barPct: 42 },
  ],
}

const mlb: StandingsTable = {
  id: 'mlb',
  title: 'MLB · early snapshot',
  subtitle: 'Division leaders (sample)',
  rows: [
    { pos: 1, name: 'Los Angeles Dodgers', record: '18-10', barPct: 85 },
    { pos: 2, name: 'Atlanta Braves', record: '17-11', barPct: 78 },
    { pos: 3, name: 'New York Yankees', record: '17-12', barPct: 75 },
    { pos: 4, name: 'Philadelphia Phillies', record: '16-12', barPct: 70 },
    { pos: 5, name: 'San Diego Padres', record: '16-13', barPct: 65 },
    { pos: 6, name: 'Milwaukee Brewers', record: '15-13', barPct: 58 },
    { pos: 7, name: 'Houston Astros', record: '15-14', barPct: 52 },
    { pos: 8, name: 'Texas Rangers', record: '14-14', barPct: 48 },
  ],
}

const nhl: StandingsTable = {
  id: 'nhl',
  title: 'NHL · Metropolitan (sample)',
  subtitle: 'Points pace',
  rows: [
    { pos: 1, name: 'Carolina Hurricanes', record: '52-22-8', barPct: 88 },
    { pos: 2, name: 'NY Rangers', record: '50-24-8', barPct: 82 },
    { pos: 3, name: 'Washington Capitals', record: '48-26-8', barPct: 76 },
    { pos: 4, name: 'Pittsburgh Penguins', record: '44-30-8', barPct: 65 },
    { pos: 5, name: 'Philadelphia Flyers', record: '42-32-8', barPct: 58 },
    { pos: 6, name: 'NY Islanders', record: '40-34-8', barPct: 50 },
    { pos: 7, name: 'New Jersey Devils', record: '38-36-8', barPct: 42 },
    { pos: 8, name: 'Columbus Blue Jackets', record: '35-39-8', barPct: 35 },
  ],
}

const soccer: StandingsTable = {
  id: 'ucl',
  title: 'UCL · knockout stage',
  subtitle: 'Form snapshot (illustrative)',
  rows: [
    { pos: 1, name: 'Real Madrid', record: 'W5 D1 L0', barPct: 90 },
    { pos: 2, name: 'Man City', record: 'W4 D1 L1', barPct: 78 },
    { pos: 3, name: 'Arsenal', record: 'W4 D0 L2', barPct: 70 },
    { pos: 4, name: 'Bayern Munich', record: 'W3 D2 L1', barPct: 65 },
    { pos: 5, name: 'Inter Milan', record: 'W3 D1 L2', barPct: 55 },
    { pos: 6, name: 'PSG', record: 'W3 D0 L3', barPct: 48 },
  ],
}

const f1: StandingsTable = {
  id: 'f1',
  title: '2026 · Constructor (sample)',
  subtitle: 'Points',
  rows: [
    { pos: 1, name: 'Red Bull Racing', record: '112 pts', barPct: 92 },
    { pos: 2, name: 'Ferrari', record: '98 pts', barPct: 82 },
    { pos: 3, name: 'McLaren', record: '86 pts', barPct: 72 },
    { pos: 4, name: 'Mercedes', record: '74 pts', barPct: 60 },
    { pos: 5, name: 'Aston Martin', record: '52 pts', barPct: 45 },
  ],
}

const tennis: StandingsTable = {
  id: 'atp',
  title: 'ATP · top of the race',
  subtitle: 'Illustrative ranking points',
  rows: [
    { pos: 1, name: 'Jannik Sinner', record: '9180', barPct: 92 },
    { pos: 2, name: 'Carlos Alcaraz', record: '8850', barPct: 88 },
    { pos: 3, name: 'Alexander Zverev', record: '5160', barPct: 58 },
    { pos: 4, name: 'Taylor Fritz', record: '4780', barPct: 52 },
    { pos: 5, name: 'Novak Djokovic', record: '4630', barPct: 48 },
  ],
}

const cfb: StandingsTable = {
  id: 'sec',
  title: 'SEC · spring snapshot',
  subtitle: 'Illustrative',
  rows: [
    { pos: 1, name: 'Georgia', record: '11-2', barPct: 88 },
    { pos: 2, name: 'Texas', record: '10-3', barPct: 78 },
    { pos: 3, name: 'Alabama', record: '10-3', barPct: 76 },
    { pos: 4, name: 'Ole Miss', record: '9-4', barPct: 65 },
    { pos: 5, name: 'Tennessee', record: '9-4', barPct: 62 },
    { pos: 6, name: 'LSU', record: '8-5', barPct: 52 },
    { pos: 7, name: 'South Carolina', record: '8-5', barPct: 48 },
  ],
}

const BY_SPORT: Record<SportId, StandingsTable[]> = {
  nba: [nbaWest, nbaEast],
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

/** Parses W-L records (NBA/NFL style). */
function parseWinLoss(record: string): { wins: number; losses: number; pct: number } | null {
  const m = /^(\d+)-(\d+)$/.exec(record.trim())
  if (!m) return null
  const wins = Number(m[1])
  const losses = Number(m[2])
  const gp = wins + losses
  if (gp <= 0) return null
  return { wins, losses, pct: wins / gp }
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
  const maxPct = top.length ? top[0].pct : 1
  return {
    id: 'league-top',
    title,
    subtitle,
    rows: top.map((r, i) => ({
      pos: i + 1,
      name: r.name,
      record: r.record,
      barPct: maxPct > 0 ? Math.round((r.pct / maxPct) * 100) : 0,
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
  if (id === 'nfl') return NFL_LEAGUE_PREVIEW
  return getStandingsForSport(id)[0]
}

/** Top N rows from the first table (preview strip like the prototype). */
export function getStandingsPreview(id: SportId, n = 5): { table: StandingsTable; rows: StandingRow[] } {
  const table = getPreviewTableForSport(id)
  return { table, rows: table.rows.slice(0, n) }
}
