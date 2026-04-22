import { useMemo, useState } from 'react'
import { SPORTS, getSport, levelMeta } from './data/sports'
import type { FanLevel, SportId } from './types'
import { SportDrawer } from './components/SportDrawer'
import { SportFeed } from './components/SportFeed'
import { GameDayModal } from './components/GameDayModal'
import { TermSheet } from './components/TermSheet'
import { RightContextDesktopRail, RightContextMobile } from './components/RightContextPanel'
import { MobileAssistantLanding } from './components/MobileAssistantLanding'
import { DesktopAssistantFab } from './components/DesktopAssistantFab'
import { useMediaQuery } from './hooks/useMediaQuery'
import { sportSidebarLogo } from './lib/sportLogos'

const LEVELS: FanLevel[] = ['novice', 'casual', 'diehard']
const LEVEL_LABEL: Record<FanLevel, string> = {
  novice: 'Novice',
  casual: 'Casual',
  diehard: 'Diehard',
}

export default function App() {
  const isDesktop = useMediaQuery('(min-width: 900px)')
  const [sportId, setSportId] = useState<SportId>('nba')
  const [level, setLevel] = useState<FanLevel>('casual')
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [term, setTerm] = useState<{
    word: string
    definition: string
    headshotUrl?: string
    kiaMvpTrophy?: boolean
    imageKind?: 'player' | 'team'
  } | null>(null)
  const [rightPanelOpen, setRightPanelOpen] = useState(false)
  /** Mobile: assistant landing first; user taps Deeper dive to see the feed. */
  const [mobileEnteredMain, setMobileEnteredMain] = useState(false)
  const [assistantOpen, setAssistantOpen] = useState(false)

  const sport = useMemo(() => getSport(sportId), [sportId])

  const showCrash =
    !!sport.crashCourse && (sport.id === 'cfb' || sport.id === 'nhl') && level === 'novice'

  const metaLine = `${sport.metaSuffix} · ${levelMeta(level)}`

  const onTermPress = (
    word: string,
    definition: string,
    media?: { headshotUrl?: string; kiaMvpTrophy?: boolean; imageKind?: 'player' | 'team' },
  ) => {
    setTerm({
      word,
      definition,
      headshotUrl: media?.headshotUrl,
      kiaMvpTrophy: media?.kiaMvpTrophy,
      imageKind: media?.imageKind,
    })
  }

  return (
    <div className="app">
      <GameDayModal sport={sport} open={modalOpen} onClose={() => setModalOpen(false)} />

      {term ? (
        <TermSheet
          word={term.word}
          definition={term.definition}
          headshotUrl={term.headshotUrl}
          imageKind={term.imageKind}
          kiaMvpTrophy={term.kiaMvpTrophy}
          onClose={() => setTerm(null)}
        />
      ) : null}

      {isDesktop && !rightPanelOpen ? (
        <button
          type="button"
          className="right-panel-trigger"
          onClick={() => setRightPanelOpen(true)}
          aria-label="Open at a glance: tonight, standings, scores"
        >
          <span className="right-panel-trigger__chev" aria-hidden>
            ◀
          </span>
          <span className="right-panel-trigger__label">Tonight</span>
        </button>
      ) : null}

      <SportDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sports={SPORTS}
        current={sportId}
        onPick={setSportId}
        level={level}
        onLevel={setLevel}
        onGameDay={() => setModalOpen(true)}
      />

      {!isDesktop && !mobileEnteredMain ? (
        <MobileAssistantLanding
          sportId={sportId}
          sport={sport}
          onGameDay={() => setModalOpen(true)}
          onEnterMain={() => setMobileEnteredMain(true)}
          onOpenMenu={() => setDrawerOpen(true)}
          onOpenAtAGlance={() => setRightPanelOpen(true)}
        />
      ) : null}

      {!isDesktop && mobileEnteredMain ? (
        <div className="app__mobile-shell">
          <header className="m-nav">
            <div className="m-nav-top">
              <button type="button" className="hbg" onClick={() => setDrawerOpen(true)} aria-label="Open menu">
                <span className="hbg-line" />
                <span className="hbg-line" />
                <span className="hbg-line" />
              </button>
              <div className="m-brand">
                SPORTS<em>TALK</em>
              </div>
              <button
                type="button"
                className="m-nav-peek"
                onClick={() => setRightPanelOpen(true)}
                aria-label="Open at a glance panel"
              >
                ◀
              </button>
            </div>
            <div className="m-levels">
              {LEVELS.map((lv) => (
                <button
                  key={lv}
                  type="button"
                  className={`m-lv ${level === lv ? 'on' : ''}`}
                  onClick={() => setLevel(lv)}
                >
                  {LEVEL_LABEL[lv]}
                </button>
              ))}
            </div>
            <div className="m-topmeta">{sport.headline}</div>
            <div className="m-topmeta" style={{ paddingTop: 0 }}>
              {metaLine}
            </div>
          </header>

          <div className="m-gd-wrap m-gd-wrap--top">
            <button type="button" className="m-gd-btn" onClick={() => setModalOpen(true)}>
              Game Day Brief
            </button>
          </div>

          <main className="m-feed">
            <SportFeed
              key={sportId}
              sport={sport}
              mobile
              onTermPress={onTermPress}
              showCrash={showCrash}
            />
          </main>
        </div>
      ) : null}

      <div className="app__desktop-shell">
        <aside className="sl" aria-label="Sports and level">
          <div className="sl-brand">
            SPORTS<em>TALK</em>
          </div>
          <div className="sl-section">
            <div className="sl-label">My level</div>
            <div className="level-pills">
              {LEVELS.map((lv) => (
                <button
                  key={lv}
                  type="button"
                  className={`lv-pill ${level === lv ? 'on' : ''}`}
                  onClick={() => setLevel(lv)}
                >
                  {LEVEL_LABEL[lv]}
                </button>
              ))}
            </div>
          </div>
          <div className="sl-label" style={{ padding: '16px 22px 0' }}>
            Sports
          </div>
          <div className="sl-sports-wrap">
            <div className="sl-sports">
              {SPORTS.map((s) => {
                const logo = sportSidebarLogo(s.id)
                return (
                  <button
                    key={s.id}
                    type="button"
                    className={`sport-row ${sportId === s.id ? 'on' : ''}`}
                    onClick={() => setSportId(s.id)}
                  >
                    <img
                      className="ico ico--logo"
                      src={logo.src}
                      alt=""
                      width={20}
                      height={20}
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="name">{s.name}</span>
                    {s.badge ? <span className="badge">{s.badge}</span> : null}
                  </button>
                )
              })}
            </div>
            <div className="sl-sports-spacer" aria-hidden />
          </div>
        </aside>

        <div className="center">
          <header className="topbar">
            <div>
              <div className="topbar-sport">{sport.headline}</div>
              <div className="topbar-meta">{metaLine}</div>
            </div>
          </header>
          <main className="feed">
            <SportFeed
              key={sportId}
              sport={sport}
              mobile={false}
              onTermPress={onTermPress}
              showCrash={showCrash}
            />
          </main>
        </div>

        {isDesktop ? (
          <RightContextDesktopRail
            key="at-a-glance-desktop"
            open={rightPanelOpen}
            onClose={() => setRightPanelOpen(false)}
            sportId={sportId}
            sport={sport}
            level={level}
          />
        ) : null}
      </div>

      {!isDesktop ? (
        <RightContextMobile
          key="at-a-glance-mobile"
          open={rightPanelOpen}
          onClose={() => setRightPanelOpen(false)}
          sportId={sportId}
          sport={sport}
          level={level}
        />
      ) : null}

      {isDesktop ? (
        <>
          <div className="desktop-gd-floating">
            <button type="button" className="gd-btn-floating" onClick={() => setModalOpen(true)}>
              Game Day Brief
            </button>
          </div>
          <DesktopAssistantFab
            sportId={sportId}
            sport={sport}
            open={assistantOpen}
            onToggle={() => setAssistantOpen((o) => !o)}
          />
        </>
      ) : null}
    </div>
  )
}
