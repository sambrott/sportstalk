import type { SportId } from '../types'

/**
 * League marks for the sport rail. ESPN serves transparent PNGs under teamlogos/leagues/500;
 * a few sports use stable Wikimedia Commons URLs where ESPN has no league slug.
 */
const espnLeague = (slug: string, w = 40, h = 40) =>
  `https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/${slug}.png&w=${w}&h=${h}&transparent=true`

const LOGO: Record<SportId, { src: string; label: string }> = {
  nba: { src: espnLeague('nba'), label: 'NBA' },
  wnba: { src: espnLeague('wnba'), label: 'WNBA' },
  nfl: { src: espnLeague('nfl'), label: 'NFL' },
  cfb: {
    src: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/NCAA_logo.svg',
    label: 'NCAA',
  },
  mlb: { src: espnLeague('mlb'), label: 'MLB' },
  nhl: { src: espnLeague('nhl'), label: 'NHL' },
  /** Global football (FIFA); aligns with general “Soccer” feed. */
  soccer: { src: espnLeague('fifa'), label: 'FIFA' },
  f1: { src: espnLeague('f1'), label: 'Formula 1' },
  tennis: {
    src: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Tennis_pictogram.svg',
    label: 'Tennis',
  },
}

export function sportSidebarLogo(id: SportId): { src: string; label: string } {
  return LOGO[id]
}
