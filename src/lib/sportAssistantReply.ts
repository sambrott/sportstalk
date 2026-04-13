import type { SportContent, SportId } from '../types'

/** Demo assistant: keyword hints + sport context. Replace with API when ready. */
export function getSportAssistantReply(sportId: SportId, sport: SportContent, question: string): string {
  const q = question.trim().toLowerCase()
  if (!q) {
    return `Ask me anything about ${sport.name}. I can explain terms, storylines, or point you to the Game Day Brief.`
  }

  const generic = () =>
    `For "${question.slice(0, 80)}${question.length > 80 ? '…' : ''}": I work best with ${sport.name}-specific questions (rules, players, what is happening now). Open Game Day Brief for a structured rundown, or try words like playoffs, MVP, draft, or standings.`

  // Cross-sport
  if (/playoff|postseason|bracket/i.test(q)) {
    return `${sport.name}: playoffs are how champions are decided. In most leagues it’s a seeded bracket after the regular season; exact format varies. Check your sport’s feed for the current picture.`
  }
  if (/mvp|award|voting/i.test(q) && sportId === 'nba') {
    return `NBA MVP is a media vote for the best regular-season player. Late-season games and head-to-head matchups can still shift the narrative. Your feed covers the main candidates.`
  }
  if (/salary|cap|contract/i.test(q) && (sportId === 'nfl' || sportId === 'nhl' || sportId === 'nba')) {
    return `Salary cap limits total player spending. Teams restructure deals, trade players, or use exceptions (NBA) to fit under the ceiling. Off-season is when cap space drives headlines.`
  }
  if (/draft/i.test(q) && (sportId === 'nfl' || sportId === 'nba')) {
    return sportId === 'nfl'
      ? `The NFL Draft assigns college players to teams by round. Early picks cost cap space via rookie wage scale; trades swap picks for veterans.`
      : `The NBA Draft brings in rookies with slotted contracts. Teams trade picks years in advance; lottery odds reward weaker records.`
  }
  if (/trade|deadline/i.test(q)) {
    return `Trades swap players and/or picks. Deadlines concentrate activity—MLB July, NHL spring, NBA February, NFL mostly off-season. Check the Brief for what’s hot in ${sport.name} right now.`
  }

  switch (sportId) {
    case 'nba':
      if (/luka|dončić|doncic|laker|lebron|reaves|injury/i.test(q))
        return `The Lakers’ playoff path in 2026 hinges on health: if creation guards miss time, minutes and shot-making lean on LeBron while the West bracket stays brutal. Check the Brief for the full thread.`
      if (/wemby|wembanyama|spur/i.test(q))
        return `Victor Wembanyama (Spurs) is a unique 7'3" defender and scorer; he’s central to MVP and defensive storylines.`
      if (/jokic|nugget/i.test(q))
        return `Nikola Jokić anchors Denver’s offense as a passing big; multiple MVP seasons. Matchups vs OKC and West seeding matter in spring.`
      if (/okc|thunder|sga|shai/i.test(q))
        return `OKC built around Shai Gilgeous-Alexander; they’ve been near the top of the West. Pace, defense, and health decide their playoff ceiling.`
      if (/three|3-?point|shot clock/i.test(q))
        return `The three-point line and 24-second shot clock shape modern NBA offense—more spacing, more threes than a generation ago.`
      break
    case 'nfl':
      if (/quarterback|qb\b/i.test(q))
        return `Quarterback is the NFL’s highest-impact position. Off-season mock drafts and free agency often revolve around who needs a long-term QB.`
      if (/mahomes|chief/i.test(q))
        return `Kansas City has won multiple Super Bowls with Patrick Mahomes; the story is whether the roster around him stays deep enough each year.`
      break
    case 'cfb':
      if (/portal|transfer/i.test(q))
        return `The transfer portal lets players change schools without sitting out a year (under current rules). It’s reshaped roster building like free agency.`
      if (/nil\b/i.test(q))
        return `NIL lets college athletes earn from endorsements; recruiting and retention now include marketing deals, not just scholarships.`
      break
    case 'mlb':
      if (/ohtani/i.test(q))
        return `Shohei Ohtani both pitches and hits at an elite level—rare in the modern game. His usage and health drive Dodgers coverage.`
      if (/inning|designated hitter|dh\b/i.test(q))
        return `The AL uses a designated hitter; the NL adopted it too. Pitch clocks sped up games compared to five years ago.`
      break
    case 'nhl':
      if (/mcdavid|oiler/i.test(q))
        return `Connor McDavid is the offensive standard; Edmonton’s playoff runs draw huge attention. Goalie and depth decide how far they go.`
      if (/stanley|playoff/i.test(q))
        return `Stanley Cup playoffs are four best-of-seven rounds; overtime is sudden death. Special teams and goaltending swing series.`
      break
    case 'soccer':
      if (/champions league|ucl\b/i.test(q))
        return `The Champions League is Europe’s top club knockout. Two-leg ties until a one-off final; domestic leagues run on separate schedules.`
      if (/messi|inter miami/i.test(q))
        return `Inter Miami gets extra coverage with Lionel Messi in MLS; European coverage often focuses on UCL and top five leagues.`
      break
    case 'f1':
      if (/verstappen|red bull/i.test(q))
        return `Max Verstappen has been the driver to beat; Red Bull’s pace and reliability set the bar. Midfield teams close the gap as rules evolve.`
      if (/hamilton|ferrari/i.test(q))
        return `Lewis Hamilton’s move to Ferrari is one of the biggest driver stories—legacy team, huge fanbase, championship expectations.`
      break
    case 'tennis':
      if (/sinner|alcaraz|rank/i.test(q))
        return `Sinner and Alcaraz trade rankings at the top; clay vs hard vs grass changes who’s favored. Grand Slams matter most for legacy points.`
      if (/grand slam|major/i.test(q))
        return `Four majors a year (Australian, French, Wimbledon, US Open). Best-of-five for men at Slams; seeding protects top players early.`
      break
    default:
      break
  }

  return generic()
}
