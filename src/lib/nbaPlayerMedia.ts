/**
 * Headshots: NBA.com CDN (public). IDs are NBA stats person IDs.
 * https://cdn.nba.com/headshots/nba/latest/1040x760/{id}.png
 */
const norm = (s: string) =>
  s
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()

const NBA_HEADSHOT_BY_NAME: Record<string, string> = {
  'luka doncic': '1629029',
  'austin reaves': '1630559',
  'lebron james': '2544',
  'victor wembanyama': '1641705',
  'nikola jokic': '203999',
  'shai gilgeous-alexander': '1628983',
  'cade cunningham': '1630595',
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
  const tid = NBA_HEADSHOT_BY_NAME[n]
  if (tid) {
    return { kind: 'player', url: `https://cdn.nba.com/headshots/nba/latest/1040x190/${tid}.png` }
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
