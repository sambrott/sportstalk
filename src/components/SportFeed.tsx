import type { SportContent } from '../types'
import { BriefText } from './BriefText'
import { BarChart } from './BarChart'
import { CollapsibleCard } from './CollapsibleCard'

type Props = {
  sport: SportContent
  mobile: boolean
  onTermPress: (word: string, definition: string) => void
  showCrash: boolean
}

export function SportFeed({ sport, mobile, onTermPress, showCrash }: Props) {
  const cc = sport.crashCourse

  return (
    <div className="feed-inner">
      {showCrash && cc ? (
        <CollapsibleCard
          key={`${sport.id}-crash`}
          kicker={cc.kicker}
          title={cc.title}
          dark
          pill="Start here"
          pillVariant="dark"
          defaultOpen
          mobile={mobile}
        >
          <BriefText parts={cc.parts} dark onTermPress={onTermPress} />
        </CollapsibleCard>
      ) : null}

      {sport.briefParts.length > 0 ? (
        <CollapsibleCard
          key={`${sport.id}-brief`}
          kicker="What's happening"
          title="The Brief"
          pill={sport.briefPill}
          pillVariant={
            sport.briefPill === 'DRAFT' || sport.briefPill === 'UCL' || sport.briefPill === 'CLAY'
              ? 'info'
              : 'hot'
          }
          defaultOpen
          mobile={mobile}
        >
          <BriefText parts={sport.briefParts} onTermPress={onTermPress} />
        </CollapsibleCard>
      ) : null}

      {sport.stats ? (
        <CollapsibleCard
          key={`${sport.id}-stats`}
          kicker="By the numbers"
          title={sport.stats.title}
          pill="Stat"
          pillVariant="info"
          defaultOpen
          mobile={mobile}
        >
          {(open) =>
            open ? (
              <BarChart
                title={sport.stats!.title}
                subtitle={sport.stats!.subtitle}
                bars={sport.stats!.bars}
                animate={open}
                mobile={mobile}
              />
            ) : null
          }
        </CollapsibleCard>
      ) : null}

      {sport.narratives && sport.narratives.length > 0 ? (
        <CollapsibleCard
          key={`${sport.id}-nar`}
          kicker="The storylines"
          title="Narratives"
          pill={`${sport.narratives.length} live`}
          pillVariant="muted"
          defaultOpen
          mobile={mobile}
        >
          <div className={`tp-list ${mobile ? 'tp-list--m' : ''}`}>
            {sport.narratives.map((n, i) => (
              <div key={i} className="tp">
                <div className="tp-num">{n.icon}</div>
                <div className="tp-text" dangerouslySetInnerHTML={{ __html: n.html }} />
              </div>
            ))}
          </div>
        </CollapsibleCard>
      ) : null}
    </div>
  )
}
