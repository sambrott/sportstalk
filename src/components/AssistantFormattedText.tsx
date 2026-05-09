import { Fragment, type ReactNode } from 'react'

/** Lightweight structure: `##` / `###` headers, `-` bullets, `**bold**`, paragraphs. */
export function AssistantFormattedText({ text }: { text: string }) {
  if (!text) return null
  const blocks = text.split(/\n\n+/)
  return (
    <div className="asst-fmt">
      {blocks.map((block, i) => (
        <Fragment key={i}>{formatBlock(block)}</Fragment>
      ))}
    </div>
  )
}

function formatBlock(block: string): ReactNode {
  const lines = block.split('\n')
  const firstRaw = lines[0] ?? ''
  const first = firstRaw.trimStart()
  const hm = /^(#{1,3})\s*(.+)$/.exec(first)
  if (hm) {
    const level = hm[1].length
    const title = hm[2]
    const rest = lines.slice(1)
    const Tag = level <= 2 ? 'h3' : 'h4'
    return (
      <section className="asst-fmt__section">
        <Tag className={`asst-fmt__h asst-fmt__h--l${level}`}>{formatInline(title)}</Tag>
        {formatBodyLines(rest)}
      </section>
    )
  }
  return <div className="asst-fmt__block">{formatBodyLines(lines)}</div>
}

function formatBodyLines(lines: string[]): ReactNode {
  const out: ReactNode[] = []
  const listItems: string[] = []
  let k = 0
  const flushList = () => {
    if (listItems.length === 0) return
    out.push(
      <ul className="asst-fmt__ul" key={`ul-${k++}`}>
        {listItems.map((t, j) => (
          <li key={j} className="asst-fmt__li">
            {formatInline(t)}
          </li>
        ))}
      </ul>,
    )
    listItems.length = 0
  }
  for (const line of lines) {
    const trimmed = line.trim()
    const bullet = /^[-*]\s+(.+)$/.exec(trimmed)
    if (bullet) {
      listItems.push(bullet[1])
      continue
    }
    flushList()
    if (trimmed.length > 0) {
      out.push(
        <p className="asst-fmt__p" key={`p-${k++}`}>
          {formatInline(trimmed)}
        </p>,
      )
    }
  }
  flushList()
  return <>{out}</>
}

function formatInline(s: string): ReactNode {
  const parts = s.split(/(\*\*[^*]+\*\*)/g)
  return parts.map((seg, i) => {
    const m = /^\*\*([^*]+)\*\*$/.exec(seg)
    if (m) {
      return (
        <strong key={i} className="asst-fmt__strong">
          {m[1]}
        </strong>
      )
    }
    return <Fragment key={i}>{seg}</Fragment>
  })
}
