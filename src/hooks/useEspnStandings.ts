import { useEffect, useState } from 'react'
import type { SportId } from '../types'
import { fetchEspnStandings, standingsPathForSport, type EspnStandingsBundle } from '../api/espnStandings'

export type EspnStandingsState =
  | { kind: 'unsupported' }
  | { kind: 'loading' }
  | { kind: 'ok'; data: EspnStandingsBundle }
  | { kind: 'error'; message: string }

export function useEspnStandings(sportId: SportId): EspnStandingsState {
  const [state, setState] = useState<EspnStandingsState>(() =>
    standingsPathForSport(sportId) ? { kind: 'loading' } : { kind: 'unsupported' },
  )

  useEffect(() => {
    if (!standingsPathForSport(sportId)) {
      setState({ kind: 'unsupported' })
      return
    }

    let cancelled = false
    setState({ kind: 'loading' })

    fetchEspnStandings(sportId)
      .then((data) => {
        if (cancelled) return
        setState({ kind: 'ok', data })
      })
      .catch((e: unknown) => {
        if (cancelled) return
        const message = e instanceof Error ? e.message : 'Could not load standings'
        setState({ kind: 'error', message })
      })

    return () => {
      cancelled = true
    }
  }, [sportId])

  return state
}
