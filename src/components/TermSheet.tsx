import { IconKiaMvpTrophy, IconX } from './ui/UiIcons'

type Props = {
  word: string
  definition: string
  headshotUrl?: string
  imageKind?: 'player' | 'team'
  kiaMvpTrophy?: boolean
  onClose: () => void
}

export function TermSheet({ word, definition, headshotUrl, imageKind, kiaMvpTrophy, onClose }: Props) {
  return (
    <div className="term-sheet-bg" onClick={onClose}>
      <div
        className="term-sheet"
        role="dialog"
        aria-label={word}
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className="term-sheet__close" onClick={onClose} aria-label="Close">
          <IconX />
        </button>
        <div className="term-sheet__hero">
          {headshotUrl ? (
            <img
              className={`term-sheet__face ${imageKind === 'team' ? 'term-sheet__face--team' : ''}`}
              src={headshotUrl}
              alt=""
              width={72}
              height={72}
            />
          ) : null}
          {kiaMvpTrophy ? (
            <div className="term-sheet__trophy" aria-hidden title="Kia NBA MVP trophy (illustration)">
              <IconKiaMvpTrophy />
            </div>
          ) : null}
          <div className="term-sheet__label">{word}</div>
        </div>
        <p className="term-sheet__def">{definition}</p>
      </div>
    </div>
  )
}
