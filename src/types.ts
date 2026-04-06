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

export type StatChart = {
  title: string
  subtitle: string
  bars: StatBar[]
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
  }
}
