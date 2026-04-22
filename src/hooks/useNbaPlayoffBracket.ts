import { useEffect, useState } from 'react'
import { ESPN_ORIGIN } from '../api/espnOrigin'

export type BracketMatchup = {
  seedHigh: number
  seedLow: number
  teamHigh: { abbr: string; name: string }
  teamLow: { abbr: string; name: string }
  logoHigh?: string
  logoLow?: string
}

export type NbaPlayoffBracketState =
  | { kind: 'idle' }
  | { kind: 'loading' }
  | { kind: 'ok'; seasonLabel: string; east: BracketMatchup[]; west: BracketMatchup[] }
  | { kind: 'error'; message: string }

type EspnEntry = {
  team?: { abbreviation?: string; displayName?: string; shortDisplayName?: string; logos?: { href?: string }[] }
  stats?: { name?: string; value?: number }[]
}

function getStat(e: EspnEntry, name: string): number | undefined {
  const s = (e.stats ?? []).find((x) => x.name === name)
  return s?.value != null ? Number(s.value) : undefined
}

function buildMatchups(entries: EspnEntry[]): BracketMatchup[] {
  const withSeed = entries
    .map((e) => ({
      e,
      seed: getStat(e, 'playoffSeed'),
      wins: getStat(e, 'wins') ?? 0,
    }))
    .filter((x) => x.seed != null && !Number.isNaN(x.seed))
    .sort((a, b) => (a.seed ?? 99) - (b.seed ?? 99))

  const top8 = withSeed.filter((x) => (x.seed ?? 0) >= 1 && (x.seed ?? 0) <= 8)
  if (top8.length < 4) return []

  const raw = [
    [1, 8],
    [2, 7],
    [3, 6],
    [4, 5],
  ] as const
  const pairs: BracketMatchup[] = []
  for (const [hi, lo] of raw) {
    const a = top8.find((t) => t.seed === hi)
    const b = top8.find((t) => t.seed === lo)
    if (!a || !b) continue
    const ta = a.e.team
    const tb = b.e.team
    const logA = ta?.logos?.[0]?.href
    const logB = tb?.logos?.[0]?.href
    pairs.push({
      seedHigh: hi,
      seedLow: lo,
      teamHigh: {
        abbr: ta?.abbreviation ?? '—',
        name: ta?.shortDisplayName ?? ta?.displayName ?? 'TBD',
      },
      teamLow: {
        abbr: tb?.abbreviation ?? '—',
        name: tb?.shortDisplayName ?? tb?.displayName ?? 'TBD',
      },
      logoHigh: logA,
      logoLow: logB,
    })
  }
  return pairs
}

export function useNbaPlayoffBracket(): NbaPlayoffBracketState {
  const [st, setSt] = useState<NbaPlayoffBracketState>({ kind: 'loading' })

  useEffect(() => {
    let cancel = false
    setSt({ kind: 'loading' })
    ;(async () => {
      try {
        const url = `${ESPN_ORIGIN}/apis/v2/sports/basketball/nba/standings?seasontype=3`
        const res = await fetch(url, { credentials: 'omit' })
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const json = (await res.json()) as { children?: { name?: string; standings?: { entries?: EspnEntry[]; seasonDisplayName?: string } }[] }
        const children = json.children ?? []
        const seasonLabel = children[0]?.standings?.seasonDisplayName ?? 'Postseason'
        let east: BracketMatchup[] = []
        let west: BracketMatchup[] = []
        for (const ch of children) {
          const n = (ch.name ?? '').toLowerCase()
          const entries = ch.standings?.entries ?? []
          if (n.includes('eastern')) east = buildMatchups(entries)
          if (n.includes('western')) west = buildMatchups(entries)
        }
        if (cancel) return
        setSt({ kind: 'ok', seasonLabel, east, west })
      } catch (e) {
        if (cancel) return
        setSt({ kind: 'error', message: e instanceof Error ? e.message : 'Could not load bracket' })
      }
    })()
    return () => {
      cancel = true
    }
  }, [])

  return st
}
