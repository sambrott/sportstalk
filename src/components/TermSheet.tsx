type Props = {
  word: string
  definition: string
  onClose: () => void
}

export function TermSheet({ word, definition, onClose }: Props) {
  return (
    <div className="term-sheet-bg" onClick={onClose}>
      <div
        className="term-sheet"
        role="dialog"
        aria-label={word}
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className="term-sheet__close" onClick={onClose} aria-label="Close">
          ✕
        </button>
        <div className="term-sheet__label">{word}</div>
        <p className="term-sheet__def">{definition}</p>
      </div>
    </div>
  )
}
