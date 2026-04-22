import { deriveLiveStatChart } from '../api/espnStandings'
import type { SportContent } from '../types'
import { useEspnStandings } from '../hooks/useEspnStandings'
import { BriefText } from './BriefText'
import { narrativeGlyph } from './NarrativeGlyph'
import { CollapsibleCard } from './CollapsibleCard'
import { StatChartView } from './StatChartView'

type Props = {
  sport: SportContent
  mobile: boolean
  onTermPress: (
    word: string,
    definition: string,
    media?: { headshotUrl?: string; kiaMvpTrophy?: boolean; imageKind?: 'player' | 'team' },
  ) => void
  showCrash: boolean
}

export function SportFeed({ sport, mobile, onTermPress, showCrash }: Props) {
  const cc = sport.crashCourse
  const liveStandings = useEspnStandings(sport.id)
  const liveChart =
    liveStandings.kind === 'ok' ? deriveLiveStatChart(sport.id, liveStandings.data) : null
  const statsToShow = liveChart ?? sport.stats

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
          <BriefText sportId={sport.id} parts={cc.parts} dark onTermPress={onTermPress} />
        </CollapsibleCard>
      ) : null}

      {sport.briefParts.length > 0 ? (
        <CollapsibleCard
          key={`${sport.id}-brief`}
          kicker="What's happening"
          title="The Brief"
          pill={sport.briefPill}
          pillVariant={
            sport.briefPill === 'DRAFT' ||
            sport.briefPill === 'UCL' ||
            sport.briefPill === 'CLAY' ||
            sport.briefPill === 'SPRING'
              ? 'info'
              : 'hot'
          }
          defaultOpen
          mobile={mobile}
        >
          <BriefText sportId={sport.id} parts={sport.briefParts} onTermPress={onTermPress} />
        </CollapsibleCard>
      ) : null}

      {statsToShow ? (
        <CollapsibleCard
          key={`${sport.id}-stats`}
          kicker="By the numbers"
          title={statsToShow.title}
          pill={liveChart ? 'Live' : 'Stat'}
          pillVariant={liveChart ? 'hot' : 'info'}
          defaultOpen
          mobile={mobile}
        >
          {(open) => {
            return open ? (
              <StatChartView chart={statsToShow} animate={open} mobile={mobile} omitHeader />
            ) : null
          }}
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
                <div className="tp-num" aria-hidden>
                  {narrativeGlyph(n.icon)}
                </div>
                <div className="tp-text" dangerouslySetInnerHTML={{ __html: n.html }} />
              </div>
            ))}
          </div>
        </CollapsibleCard>
      ) : null}
    </div>
  )
}
