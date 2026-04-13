import type { SportContent, SportId } from '../types'
import { SportAssistantChat } from './SportAssistantChat'

type Props = {
  sportId: SportId
  sport: SportContent
  onGameDay: () => void
  onEnterMain: () => void
  onOpenMenu: () => void
  onOpenAtAGlance: () => void
}

export function MobileAssistantLanding({
  sportId,
  sport,
  onGameDay,
  onEnterMain,
  onOpenMenu,
  onOpenAtAGlance,
}: Props) {
  return (
    <div className="m-assist">
      <div className="m-assist__gradient" aria-hidden />
      <div className="m-assist__inner">
        <header className="m-assist__hd">
          <div className="m-assist__nav">
            <button type="button" className="hbg" onClick={onOpenMenu} aria-label="Open menu">
              <span className="hbg-line" />
              <span className="hbg-line" />
              <span className="hbg-line" />
            </button>
            <div className="m-brand m-assist__brand">
              SPORTS<em>TALK</em>
            </div>
            <button type="button" className="m-nav-peek" onClick={onOpenAtAGlance} aria-label="Open at a glance">
              ◀
            </button>
          </div>
          <p className="m-assist__invite">
            Not sure about a rule, a player, or what people are arguing about? Ask below. Answers are tailored to{' '}
            <strong>{sport.name}</strong> (change sport in the menu after you dive in).
          </p>
        </header>

        <div className="m-assist__actions">
          <button type="button" className="m-gd-btn m-assist__gd" onClick={onGameDay}>
            Game Day Brief
          </button>
          <button type="button" className="m-assist__dive" onClick={onEnterMain}>
            Deeper dive into the app
          </button>
        </div>

        <SportAssistantChat sportId={sportId} sport={sport} variant="mobile-landing" formId="m-assist-chat" />
      </div>
    </div>
  )
}
