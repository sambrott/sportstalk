import { useEffect, useState } from 'react'
import { ESPN_ORIGIN } from '../api/espnOrigin'
import type { SportId } from '../types'

export type LiveGame = {
  id: string
  awayLabel: string
  homeLabel: string
  awayScore: string
  homeScore: string
  status: string
}

type State =
  | { kind: 'loading' }
  | { kind: 'ok'; games: LiveGame[]; source: 'espn' }
  | { kind: 'error'; message: string; games: LiveGame[] }

/** ESPN site API paths (same feed style apps like Real use for fast score updates). */
function espnPathForSport(id: SportId): string | null {
  switch (id) {
    case 'nba':
      return '/apis/site/v2/sports/basketball/nba/scoreboard'
    case 'nfl':
      return '/apis/site/v2/sports/football/nfl/scoreboard'
    case 'mlb':
      return '/apis/site/v2/sports/baseball/mlb/scoreboard'
    case 'nhl':
      return '/apis/site/v2/sports/hockey/nhl/scoreboard'
    case 'cfb':
      return '/apis/site/v2/sports/football/college-football/scoreboard'
    default:
      return null
  }
}

function parseEspnScoreboard(json: unknown): LiveGame[] {
  const root = json as { events?: unknown[] }
  const events = root.events ?? []
  const out: LiveGame[] = []

  events.forEach((raw, i) => {
    const ev = raw as {
      id?: string
      competitions?: { competitors?: unknown[] }[]
      status?: { type?: { detail?: string; shortDetail?: string } }
    }
    const comp = ev.competitions?.[0]
    const competitors = (comp?.competitors ?? []) as {
      homeAway?: string
      score?: string
      team?: { displayName?: string }
    }[]
    const home = competitors.find((c) => c.homeAway === 'home')
    const away = competitors.find((c) => c.homeAway === 'away')
    if (!home || !away) return

    const status =
      ev.status?.type?.detail ?? ev.status?.type?.shortDetail ?? 'Scheduled'

    out.push({
      id: String(ev.id ?? i),
      homeLabel: home.team?.displayName ?? 'Home',
      awayLabel: away.team?.displayName ?? 'Away',
      homeScore: String(home.score ?? ' - '),
      awayScore: String(away.score ?? ' - '),
      status,
    })
  })

  return out
}

const MOCK_NBA: LiveGame[] = [
  {
    id: 'demo',
    awayLabel: 'Denver Nuggets',
    homeLabel: 'San Antonio Spurs',
    awayScore: ' - ',
    homeScore: ' - ',
    status: 'Demo (offline)',
  },
]

export function useLiveScores(sportId: SportId): State {
  const [state, setState] = useState<State>({ kind: 'loading' })

  useEffect(() => {
    const path = espnPathForSport(sportId)
    if (!path) {
      setState({ kind: 'ok', games: [], source: 'espn' })
      return
    }

    let cancelled = false
    setState({ kind: 'loading' })

    ;(async () => {
      try {
        const url = `${ESPN_ORIGIN}${path}`
        const res = await fetch(url, { credentials: 'omit' })
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const json = await res.json()
        const games = parseEspnScoreboard(json)
        if (cancelled) return
        setState({ kind: 'ok', games, source: 'espn' })
      } catch (e) {
        if (cancelled) return
        const message = e instanceof Error ? e.message : 'Could not load scores'
        setState({
          kind: 'error',
          message,
          games: sportId === 'nba' ? MOCK_NBA : [],
        })
      }
    })()

    return () => {
      cancelled = true
    }
  }, [sportId])

  return state
}
