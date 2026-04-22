import type { BriefPart, SportId } from '../types'
import { isMvpRaceTerm, nbaTermVisualForWord } from '../lib/nbaPlayerMedia'

type Props = {
  sportId: SportId
  parts: BriefPart[]
  dark?: boolean
  onTermPress: (
    word: string,
    definition: string,
    media?: { headshotUrl?: string; kiaMvpTrophy?: boolean; imageKind?: 'player' | 'team' },
  ) => void
}

export function BriefText({ sportId, parts, dark, onTermPress }: Props) {
  return (
    <p className={`brief ${dark ? 'brief--dark' : ''}`}>
      {parts.map((p, i) => {
        if (p.kind === 'text') return <span key={i}>{p.text}</span>
        const nbaVisual = sportId === 'nba' ? nbaTermVisualForWord(p.word) : undefined
        return (
          <button
            key={i}
            type="button"
            className="term term--with-avatar"
            onClick={() => {
              const kiaMvpTrophy = sportId === 'nba' && isMvpRaceTerm(p.word)
              onTermPress(p.word, p.definition, {
                headshotUrl: nbaVisual?.url,
                kiaMvpTrophy,
                imageKind: nbaVisual?.kind,
              })
            }}
          >
            {nbaVisual ? (
              <img
                className={`term__avatar ${nbaVisual.kind === 'team' ? 'term__avatar--team' : ''}`}
                src={nbaVisual.url}
                alt=""
                width={22}
                height={22}
                loading="lazy"
                decoding="async"
              />
            ) : null}
            <span className="term__label">{p.word}</span>
          </button>
        )
      })}
    </p>
  )
}
