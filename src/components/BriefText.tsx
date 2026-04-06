import type { BriefPart } from '../types'

type Props = {
  parts: BriefPart[]
  dark?: boolean
  onTermPress: (word: string, definition: string) => void
}

export function BriefText({ parts, dark, onTermPress }: Props) {
  return (
    <p className={`brief ${dark ? 'brief--dark' : ''}`}>
      {parts.map((p, i) =>
        p.kind === 'text' ? (
          <span key={i}>{p.text}</span>
        ) : (
          <button
            key={i}
            type="button"
            className="term"
            onClick={() => onTermPress(p.word, p.definition)}
          >
            {p.word}
          </button>
        ),
      )}
    </p>
  )
}
