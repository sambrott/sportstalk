import { useId, useState } from 'react'
import type { SportContent } from '../types'

type Moment = NonNullable<SportContent['moment']>

type Props = {
  moment: Moment
}

export function MomentCard({ moment }: Props) {
  const [open, setOpen] = useState(false)
  const articleId = useId()

  return (
    <div className="moment-card moment-card--in-panel">
      <div className="moment-vis" aria-hidden>
        {moment.emoji}
      </div>
      <div className="moment-body">
        <div className="moment-kicker">{moment.kicker}</div>
        <div className="moment-hl">{moment.headline}</div>
        <div className="moment-why">{moment.why}</div>
        <button
          type="button"
          className="moment-expand"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls={articleId}
        >
          {open ? 'Show less' : 'Read more'}
        </button>
        {open ? (
          <div className="moment-article" id={articleId}>
            {moment.article.map((p, i) => (
              <p key={i} className="moment-article__p">
                {p}
              </p>
            ))}
            {moment.footnote ? (
              <aside className="moment-footnote">{moment.footnote}</aside>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  )
}
