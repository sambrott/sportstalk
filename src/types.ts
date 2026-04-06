export type SportId =
  | 'nba'
  | 'nfl'
  | 'cfb'
  | 'mlb'
  | 'nhl'
  | 'soccer'
  | 'f1'
  | 'tennis'

export type FanLevel = 'novice' | 'casual' | 'diehard'

export type BriefPart =
  | { kind: 'text'; text: string }
  | { kind: 'term'; word: string; definition: string }

export type Narrative = {
  icon: string
  html: string
}

export type StatBar = {
  label: string
  value: string
  pct: number
  highlight?: boolean
}

/** Chart data — may be editorial (`sport.stats`) or derived live from ESPN standings in the feed. */
export type StatChart =
  | {
      kind: 'bar-h'
      title: string
      subtitle: string
      footnote?: string
      bars: StatBar[]
    }
  | {
      kind: 'bar-v'
      title: string
      subtitle: string
      footnote?: string
      bars: StatBar[]
      valueSuffix?: string
    }
  | {
      kind: 'lollipop'
      title: string
      subtitle: string
      footnote?: string
      items: StatBar[]
    }
  | {
      kind: 'diverging'
      title: string
      subtitle: string
      footnote?: string
      rows: { label: string; net: number }[]
    }
  | {
      kind: 'paired'
      title: string
      subtitle: string
      footnote?: string
      leftMetric: string
      rightMetric: string
      rows: {
        label: string
        left: string
        right: string
        leftPct: number
        rightPct: number
        highlight?: boolean
      }[]
    }

export type CrashCourse = {
  kicker: string
  title: string
  parts: BriefPart[]
}

export type SportContent = {
  id: SportId
  emoji: string
  name: string
  badge?: string
  headline: string
  metaSuffix: string
  briefPill?: string
  briefParts: BriefPart[]
  stats?: StatChart
  statsDefaultOpen?: boolean
  narratives?: Narrative[]
  narrativesDefaultOpen?: boolean
  crashCourse?: CrashCourse
  gameDay: {
    blurb: string
    points: string[]
  }
  moment?: {
    emoji: string
    kicker: string
    headline: string
    why: string
    /** Expandable short article (2–4 tight paragraphs). */
    article: string[]
    /** Optional fine print below the article. */
    footnote?: string
  }
  /** Extra context shown only in the right rail for this sport. */
  railAtAGlance?: {
    intro: string
    bullets: string[]
  }
}
