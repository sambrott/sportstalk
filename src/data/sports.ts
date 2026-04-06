import type { FanLevel, SportContent, SportId } from '../types'

export const LEVEL_LABEL: Record<FanLevel, string> = {
  novice: 'Just In',
  casual: 'Casual',
  diehard: 'Diehard',
}

export const SPORTS: SportContent[] = [
  {
    id: 'nba',
    emoji: '🏀',
    name: 'NBA',
    badge: 'HOT',
    headline: 'NBA · April 2026',
    metaSuffix: 'Playoff push',
    briefPill: 'HOT',
    briefParts: [
      { kind: 'text', text: 'The NBA is two weeks from playoffs. ' },
      {
        kind: 'term',
        word: 'Victor Wembanyama',
        definition:
          '21-year-old Spur from France. Generational defensive talent at 7\'3" with an 8-foot wingspan. One of the most physically unique players in recent league history.',
      },
      { kind: 'text', text: ' is rewriting defensive records at 21. The ' },
      {
        kind: 'term',
        word: 'MVP race',
        definition:
          'Most Valuable Player: an annual award for the best regular season player. Voted by media. It matters for legacy and contract discussions.',
      },
      { kind: 'text', text: ' is genuinely open between him and ' },
      {
        kind: 'term',
        word: 'Nikola Jokic',
        definition:
          'Center for the Denver Nuggets. Three-time MVP. Serbian. Incredible passer for his size. Currently on his fourth MVP run.',
      },
      { kind: 'text', text: '. And ' },
      {
        kind: 'term',
        word: 'OKC Thunder',
        definition:
          'The Oklahoma City Thunder was in a full rebuild recently. Now led by Shai Gilgeous-Alexander, they have been among the West\'s strongest teams.',
      },
      { kind: 'text', text: ' have been a surprise contender compared with many preseason expectations.' },
    ],
    stats: {
      title: 'Nobody blocks shots like this',
      subtitle: 'Blocks per game · 2025-26 NBA season',
      bars: [
        { label: 'Wembanyama', value: '3.8', pct: 95, highlight: true },
        { label: 'B. Adebayo', value: '2.0', pct: 50 },
        { label: 'A. Davis', value: '1.8', pct: 45 },
        { label: 'M. Turner', value: '1.3', pct: 32 },
      ],
    },
    narratives: [
      {
        icon: '👑',
        html: '<strong>MVP:</strong> Jokic and Wembanyama are the two names at the front of most voter conversations. A late-season head-to-head can still move perception.',
      },
      {
        icon: '⚡',
        html: '<strong>OKC:</strong> The Thunder rebuilt quickly around SGA and now sit near the top of the West.',
      },
      {
        icon: '🏀',
        html: '<strong>East picture:</strong> Several teams are in the mix behind the headline favorites. Seed order still matters for home court in the first round.',
      },
    ],
    gameDay: {
      blurb: 'NBA · five facts that explain the stretch run.',
      points: [
        'Wembanyama blocks nearly twice as many shots per game as the next closest player. At 21, the gap from first to second on that stat is unusually wide.',
        'Jokic hit a game-winning shot over Wembanyama in overtime in January. That game is one reason the MVP conversation stayed unsettled.',
        'Oklahoma City climbed the West faster than most preseason projections. Shai Gilgeous-Alexander is the offensive engine.',
        'Denver still runs through Jokic; health and bench minutes matter as the schedule tightens.',
        'Playoff seeding sets home-court order for the first round. Tiebreakers can decide a series location.',
      ],
    },
    moment: {
      emoji: '🏀',
      kicker: 'Why it matters',
      headline: 'MVP voting is still live',
      why: 'National coverage often highlights Jokic and Wembanyama when discussing the MVP field.',
    },
  },
  {
    id: 'nfl',
    emoji: '🏈',
    name: 'NFL',
    headline: 'NFL · April 2026',
    metaSuffix: 'Draft season',
    briefPill: 'DRAFT',
    briefParts: [
      { kind: 'text', text: 'The ' },
      {
        kind: 'term',
        word: 'NFL Draft',
        definition:
          'Annual event where all 32 teams select college players entering the pros. Held in April. The first round is primetime TV, with trades, surprises, and franchise-altering decisions.',
      },
      { kind: 'text', text: ' is three weeks out. ' },
      {
        kind: 'term',
        word: 'Quarterback',
        definition:
          'The most important position in football. Teams are defined by their QB. A great one can mask almost every other weakness on the roster.',
      },
      { kind: 'text', text: ' needs are driving a lot of mock drafts. The ' },
      {
        kind: 'term',
        word: 'Kansas City Chiefs',
        definition:
          'Dynasty team. Won multiple Super Bowls with Patrick Mahomes at QB. The eternal offseason question: can the dynasty keep going?',
      },
      { kind: 'text', text: ' return with roster turnover around the edges. Detroit has been competitive deep into January in recent seasons.' },
    ],
    gameDay: {
      blurb: 'NFL · five things going on before the draft.',
      points: [
        'The first round is where trades and surprise picks draw the most attention.',
        'Several teams near the top of the draft order need a long-term answer at quarterback.',
        'Kansas City has reshaped parts of the roster while keeping Mahomes at center.',
        'Detroit has moved from rebuild to contender in a short window; offseason moves will be watched closely.',
        'After the draft, rookie minicamps and summer camp battles decide who actually plays in September.',
      ],
    },
    moment: {
      emoji: '🏈',
      kicker: 'Calendar',
      headline: 'The draft is the main event',
      why: 'April is when college players land with pro teams and depth charts start to take shape.',
    },
  },
  {
    id: 'cfb',
    emoji: '🏟',
    name: 'College Football',
    badge: 'NEW',
    headline: 'College Football',
    metaSuffix: 'Spring storylines',
    crashCourse: {
      kicker: 'Crash Course',
      title: 'College Football 101',
      parts: [
        { kind: 'text', text: 'College football is 133 teams competing in conferences. The ' },
        {
          kind: 'term',
          word: 'SEC',
          definition:
            'Southeastern Conference · the most powerful conference in CFB. Alabama, Georgia, Tennessee, LSU. At SEC schools, football is a near-religious experience.',
        },
        { kind: 'text', text: ' and ' },
        {
          kind: 'term',
          word: 'Big Ten',
          definition:
            'The other powerhouse conference. Ohio State, Michigan, Penn State · now expanded to include USC, Oregon, Washington.',
        },
        { kind: 'text', text: ' are the power conferences. The ' },
        {
          kind: 'term',
          word: 'Transfer Portal',
          definition:
            'Lets players switch schools and play immediately · like free agency for students. Introduced in 2021. Has completely reshaped how rosters are built.',
        },
        { kind: 'text', text: ' and ' },
        {
          kind: 'term',
          word: 'NIL',
          definition:
            'Name, Image, Likeness · since 2021, players can be paid for endorsements, social media, appearances. Top recruits choose schools partly for NIL money.',
        },
        { kind: 'text', text: ' money have changed how rosters are built.' },
      ],
    },
    briefParts: [
      {
        kind: 'text',
        text: 'There are no regular-season games in spring. Spring practice, recruiting visits, and portal movement fill the news. Conference alignment and TV deals still reshape who plays whom each year.',
      },
    ],
    gameDay: {
      blurb: 'College football · five things to know in the offseason.',
      points: [
        'The transfer portal is open on scheduled windows; players can move and play without sitting out a year.',
        'NIL rules let players earn from endorsements; deals vary widely by school and market.',
        'Spring practice is lighter than fall camp; coaches test depth and install basics.',
        'Recruiting classes for the next cycle are signed in phases; late flips still happen.',
        'The SEC and Big Ten draw the most national TV inventory; other conferences are expanding or realigning to keep pace.',
      ],
    },
    moment: {
      emoji: '🏟',
      kicker: 'Timing',
      headline: 'Spring is roster season',
      why: 'Games stop, but staff changes, transfers, and recruiting keep the sport in headlines.',
    },
  },
  {
    id: 'mlb',
    emoji: '⚾',
    name: 'MLB',
    headline: 'MLB · April 2026',
    metaSuffix: 'Opening stretch',
    briefPill: 'OPENING',
    briefParts: [
      {
        kind: 'term',
        word: 'Shohei Ohtani',
        definition:
          'Pitches and hits at elite level · something nobody has done since Babe Ruth. Signed a $700M deal with the Dodgers. Fully healthy after Tommy John surgery. Widely considered the most unique player in baseball history.',
      },
      {
        kind: 'text',
        text: ' signed the largest contract in sports history ($700M, Dodgers) and is fully healthy after ',
      },
      {
        kind: 'term',
        word: 'Tommy John surgery',
        definition:
          'A procedure to reconstruct the elbow ligament. Common in pitchers. 12-18 months to recover. Ohtani had it in 2023, sat out pitching last season, and is now fully back.',
      },
      {
        kind: 'text',
        text: '. The Dodgers are loaded. The ',
      },
      {
        kind: 'term',
        word: 'pitch clock',
        definition:
          'Rule requiring pitchers to throw within 15-20 seconds. Reduced average game time by about 30 minutes. Most lapsed fans are pleasantly surprised when they tune back in.',
      },
      { kind: 'text', text: ' has shortened average game length compared to a few years ago.' },
    ],
    gameDay: {
      blurb: 'MLB · five things in the early season.',
      points: [
        'Ohtani is pitching and hitting in the same season again after recovering from elbow surgery.',
        'The Dodgers carry high expectations every year because of payroll and star depth.',
        'The Yankees remain a high-profile AL team; their season is judged against October.',
        'The pitch clock rule changed pace of play; game times dropped versus pre-2023 norms.',
        'Division races run six months; April standings are a snapshot, not a verdict.',
      ],
    },
    moment: {
      emoji: '⚾',
      kicker: 'Headline',
      headline: 'Two-way Ohtani is the story',
      why: 'He is the rare player who moves both pitching and hitting coverage.',
    },
  },
  {
    id: 'nhl',
    emoji: '🏒',
    name: 'NHL',
    headline: 'NHL · April 2026',
    metaSuffix: 'Playoff push',
    briefPill: 'PLAYOFFS',
    crashCourse: {
      kicker: 'New to hockey?',
      title: 'Hockey in 90 Seconds',
      parts: [
        {
          kind: 'text',
          text: 'Six players per side. Puck in the net = goal. Three periods of 20 min. ',
        },
        {
          kind: 'term',
          word: 'Stanley Cup',
          definition:
            'The NHL championship trophy. Oldest professional sports trophy in North America. Players who win it often cry. It\'s a very big deal · awarded every June.',
        },
        {
          kind: 'text',
          text: ' is the championship. Games are fast and physical. The ',
        },
        {
          kind: 'term',
          word: 'penalty box',
          definition:
            'Where players sit for 2-5 minutes after fouls. The penalized team plays one man short · called a power play for the other team.',
        },
        {
          kind: 'text',
          text: ' is one of sport\'s great traditions · players literally sit in a box while their team plays down a man.',
        },
      ],
    },
    briefParts: [
      {
        kind: 'term',
        word: 'Connor McDavid',
        definition:
          'Center for Edmonton Oilers. Widely considered the best hockey player alive · possibly ever. Has never won the Stanley Cup. If Edmonton goes deep, it\'s the sport\'s biggest unresolved story getting an answer.',
      },
      {
        kind: 'text',
        text: ' is widely seen as the best player in the league. Edmonton is expected to contend for a long playoff run. The Florida Panthers have won the last two Cups with a tight, structured game.',
      },
    ],
    gameDay: {
      blurb: 'NHL · five things worth knowing.',
      points: [
        'McDavid is the offensive standard; Edmonton\'s playoff runs draw national attention.',
        'Playoff hockey uses sudden-death overtime; games can end on any shot.',
        'Goalies face more rubber in April; save percentage swings series.',
        'Florida has won back-to-back championships with depth and defense.',
        'The Stanley Cup is a best-of-seven each round; travel and injuries stack up fast.',
      ],
    },
    moment: {
      emoji: '🏒',
      kicker: 'Playoffs',
      headline: 'Seeding and health matter',
      why: 'The bracket is a grind; special teams and goaltending decide who advances.',
    },
  },
  {
    id: 'soccer',
    emoji: '⚽',
    name: 'Soccer',
    headline: 'Soccer · Spring 2026',
    metaSuffix: 'Club season',
    briefPill: 'UCL',
    briefParts: [
      { kind: 'text', text: 'The ' },
      {
        kind: 'term',
        word: 'Champions League',
        definition:
          'UEFA Champions League · Europe\'s top club competition. Like the NFL playoffs but for the best clubs across 50+ countries. The biggest club soccer event in the world.',
      },
      { kind: 'text', text: ' knockouts are live. ' },
      {
        kind: 'term',
        word: 'Real Madrid',
        definition:
          'Most successful club in Champions League history. Based in Madrid. Now have both Mbappé and Vinicius Jr. · two of the three best players in the world.',
      },
      { kind: 'text', text: ' have ' },
      {
        kind: 'term',
        word: 'Kylian Mbappé',
        definition:
          'French forward · arguably the world\'s fastest player. Moved from PSG to Real Madrid. Forms a frightening duo with Vinicius Jr.',
      },
      { kind: 'text', text: ' and ' },
      {
        kind: 'term',
        word: 'Vinicius Jr.',
        definition:
          'Brazilian winger for Real Madrid. Won the Ballon d\'Or (world\'s best player award). Incredibly fast and skillful.',
      },
      { kind: 'text', text: ' in the same attack.' },
    ],
    gameDay: {
      blurb: 'Soccer · five things on the map.',
      points: [
        'Champions League is two-leg knockout rounds until a one-off final.',
        'Real Madrid carries the most European titles in history.',
        'Domestic leagues run on separate schedules; cup ties can overlap.',
        'MLS operates on a different calendar; Inter Miami gets extra coverage with Messi on the roster.',
        'International windows pause club play so players join national teams.',
      ],
    },
    moment: {
      emoji: '⚽',
      kicker: 'Europe',
      headline: 'Knockout rounds trim the field',
      why: 'Each round cuts famous clubs; upsets are common over two legs.',
    },
  },
  {
    id: 'f1',
    emoji: '🏎',
    name: 'F1',
    headline: 'F1 · 2026 Season',
    metaSuffix: 'Grid tightening',
    briefPill: 'SEASON ON',
    briefParts: [
      {
        kind: 'term',
        word: 'Lewis Hamilton',
        definition:
          'Seven-time World Champion · tied for the all-time record. Moved from Mercedes to Ferrari this season. The biggest driver move in years. Chasing championship number 8.',
      },
      { kind: 'text', text: ' moved to ' },
      {
        kind: 'term',
        word: 'Ferrari',
        definition:
          'The most iconic team in F1. Italian. Red cars. Enormous global following. Has struggled to win championships lately. Hamilton joining is a massive moment.',
      },
      { kind: 'text', text: '. ' },
      {
        kind: 'term',
        word: 'Max Verstappen',
        definition:
          'Three-time World Champion. Dutch. Drives for Red Bull. Has been dominant since 2021. This year the gap to the field has closed significantly.',
      },
      { kind: 'text', text: ' is the defending champion; the midfield has closed on Red Bull in race trim.' },
    ],
    gameDay: {
      blurb: 'F1 · five structural facts.',
      points: [
        'Hamilton switched to Ferrari; Mercedes filled his seat with a new lineup.',
        'Verstappen starts the year as defending champion.',
        'Sprint weekends award fewer practice minutes before a short race.',
        'Tire compounds and pit strategy decide race outcomes as much as raw pace.',
        'Regulation changes can shuffle the order year to year.',
      ],
    },
    moment: {
      emoji: '🏎',
      kicker: 'Grid',
      headline: 'Driver moves reshuffle expectations',
      why: 'Seat changes at top teams reset how analysts rank the field.',
    },
  },
  {
    id: 'tennis',
    emoji: '🎾',
    name: 'Tennis',
    headline: 'Tennis · Clay 2026',
    metaSuffix: 'Tour swing',
    briefPill: 'CLAY',
    briefParts: [
      { kind: 'text', text: 'Clay court season building toward ' },
      {
        kind: 'term',
        word: 'Roland Garros',
        definition:
          'The French Open · one of tennis\'s four Grand Slams. Played on red clay in Paris in May-June. Historically dominated by Rafael Nadal (retired). Now Sinner and Alcaraz are the players to watch.',
      },
      { kind: 'text', text: '. ' },
      {
        kind: 'term',
        word: 'Carlos Alcaraz',
        definition:
          'Spanish prodigy, 22. Already won multiple Grand Slams. High-energy game, huge personality. Considered the future face of tennis.',
      },
      { kind: 'text', text: ' and ' },
      {
        kind: 'term',
        word: 'Jannik Sinner',
        definition:
          'Italian, world number one. Methodical and technically brilliant. Won the Australian Open. His rivalry with Alcaraz is the best thing in tennis right now.',
      },
      { kind: 'text', text: ' trade the top rankings on hard and clay.' },
    ],
    gameDay: {
      blurb: 'Tennis · five things on clay.',
      points: [
        'Clay slows the ball and favors longer rallies than hard courts.',
        'Roland Garros is the second major of the year on the calendar.',
        'Alcaraz and Sinner are the most discussed rivalry at the top of the men\'s game.',
        'The previous Big Three era set the bar for major counts; the tour is in a transition phase.',
        'Women\'s draws run parallel Slams with the same calendar.',
      ],
    },
    moment: {
      emoji: '🎾',
      kicker: 'Surface',
      headline: 'Clay rewards patience',
      why: 'Points last longer; fitness and defense matter more than on grass.',
    },
  },
]

export function getSport(id: SportId): SportContent {
  const s = SPORTS.find((x) => x.id === id)
  if (!s) throw new Error(`Unknown sport: ${id}`)
  return s
}

export function levelMeta(level: FanLevel): string {
  switch (level) {
    case 'novice':
      return 'Just In'
    case 'casual':
      return 'Casual'
    case 'diehard':
      return 'Diehard'
  }
}
