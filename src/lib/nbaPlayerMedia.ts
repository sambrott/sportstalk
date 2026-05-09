/**
 * NBA glossary chips: player photos from ESPN’s public CDN (same headshots as espn.com player pages).
 * IDs are ESPN athlete IDs — see roster JSON `headshot.href` on site.api.espn.com.
 * Template: https://a.espncdn.com/i/headshots/nba/players/full/{id}.png
 */
const norm = (s: string) =>
  s
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()

/** Normalized player name → ESPN athlete id */
const NBA_ESPN_HEADSHOT_ID_BY_NAME: Record<string, string> = {
  'luka doncic': '3945274',
  'austin reaves': '4066457',
  'lebron james': '1966',
  'victor wembanyama': '5104157',
  'nikola jokic': '3112335',
  'shai gilgeous-alexander': '4278073',
  'cade cunningham': '4432166',
}

function espnNbaPlayerHeadshotUrl(athleteId: string): string {
  return `https://a.espncdn.com/i/headshots/nba/players/full/${athleteId}.png`
}

/** ESPN team logo paths (3-letter slug) — for glossary terms that are teams. */
const NBA_TEAM_LOGO_SLUG: Record<string, string> = {
  'okc thunder': 'okc',
  'lakers': 'lal',
  'los angeles lakers': 'lal',
  'nuggets': 'den',
  'denver nuggets': 'den',
  'spurs': 'sa',
  'san antonio spurs': 'sa',
  'detroit pistons': 'det',
  'pistons': 'det',
}

export type NbaTermVisual = { kind: 'player'; url: string } | { kind: 'team'; url: string }

export function nbaTermVisualForWord(word: string): NbaTermVisual | undefined {
  const n = norm(word)
  const espnId = NBA_ESPN_HEADSHOT_ID_BY_NAME[n]
  if (espnId) {
    return { kind: 'player', url: espnNbaPlayerHeadshotUrl(espnId) }
  }
  const slug = NBA_TEAM_LOGO_SLUG[n]
  if (slug) {
    return { kind: 'team', url: `https://a.espncdn.com/i/teamlogos/nba/500/${slug}.png` }
  }
  return undefined
}

/** @deprecated use nbaTermVisualForWord */
export function nbaHeadshotUrlForTerm(word: string): string | undefined {
  const v = nbaTermVisualForWord(word)
  if (!v) return undefined
  return v.url
}

export function isMvpRaceTerm(word: string): boolean {
  const n = norm(word)
  return n === 'mvp race' || n.includes('mvp race')
}
