import type { SportId } from '../types'

export type TeamDetail = {
  teamName: string
  sportId: SportId
  /** Positions or roles shown as "starting" style snapshot (demo data). */
  lineup: { role: string; name: string }[]
  history: string
  news: { title: string; summary: string }[]
}

function lineupForSport(sportId: SportId): string[] {
  switch (sportId) {
    case 'nba':
      return ['PG', 'SG', 'SF', 'PF', 'C']
    case 'nfl':
      return ['QB', 'RB', 'WR', 'TE', 'LT']
    case 'mlb':
      return ['P', 'C', '1B', 'SS', 'OF']
    case 'nhl':
      return ['C', 'LW', 'RW', 'D', 'G']
    case 'soccer':
      return ['GK', 'CB', 'CM', 'LW', 'ST']
    case 'cfb':
      return ['QB', 'RB', 'WR', 'TE', 'LT']
    case 'f1':
      return ['Driver', 'Reserve', 'Principal', 'Technical chief', 'Strategist']
    case 'wnba':
      return ['G', 'G', 'F', 'F', 'C']
    case 'tennis':
      return ['Singles 1', 'Singles 2', 'Doubles', 'Coach', 'Fitness']
    default:
      return ['1', '2', '3', '4', '5']
  }
}

/** Demo roster names (fictional placeholders where not real). */
export function getTeamDetail(sportId: SportId, teamName: string): TeamDetail {
  const roles = lineupForSport(sportId)
  const lineup = roles.map((role, i) => ({
    role,
    name: `Player ${String.fromCharCode(65 + i)} (demo)`,
  }))

  const history = `${teamName}: this profile uses sample text. For a shipping app, wire an API for franchise history, titles, and key eras. Sports Talk stays literacy-first, so facts stay short and sourced.`

  const news = [
    {
      title: 'Team notes (demo)',
      summary: `Recent storyline placeholder for ${teamName}. Replace with headlines from a news provider you license.`,
    },
    {
      title: 'Injury and rotation (demo)',
      summary: 'Health reports and minutes would appear here from an official or partner feed.',
    },
    {
      title: 'Schedule snapshot (demo)',
      summary: 'Upcoming games or travel could list here without pushing live score chasing as the core experience.',
    },
  ]

  return {
    teamName,
    sportId,
    lineup,
    history,
    news,
  }
}
