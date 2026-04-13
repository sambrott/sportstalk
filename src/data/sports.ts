import type { FanLevel, SportContent, SportId } from '../types'

export const LEVEL_LABEL: Record<FanLevel, string> = {
  novice: 'Novice',
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
    metaSuffix: 'Lakers pressure · West bracket',
    briefPill: 'HOT',
    briefParts: [
      {
        kind: 'text',
        text: 'The postseason is almost here. In Los Angeles, the first round could turn into a survival test: ',
      },
      {
        kind: 'term',
        word: 'Luka Dončić',
        definition:
          'Slovenian superstar—elite scorer, passer, and shot creator. The Lakers built their offense around him after he arrived; losing him for any stretch shifts every matchup plan.',
      },
      { kind: 'text', text: ' and ' },
      {
        kind: 'term',
        word: 'Austin Reaves',
        definition:
          'Homegrown Lakers guard—tough shot-making, secondary playmaking, and chemistry with the stars. When he’s out, spacing and ball-handling thin out fast.',
      },
      {
        kind: 'text',
        text: ' are both expected to miss early playoff games. That leaves the series on ',
      },
      {
        kind: 'term',
        word: 'LeBron James',
        definition:
          'Four-time champion; once the most dominant athlete in the league. At 41 he’s far past his athletic peak—yet he’s still playing at something like an All-NBA level, which almost never happens this deep into a career. If it’s the last time he leads a real contender through a spring run, the spotlight will be brutal.',
      },
      {
        kind: 'text',
        text: ' to manufacture offense, manage minutes, and steal enough wins to buy time for his co-stars to heal. Past his prime or not, he’s still the engine the opponent game-plans for first. Elsewhere in the West, ',
      },
      {
        kind: 'term',
        word: 'Victor Wembanyama',
        definition:
          '21-year-old Spur from France. Generational defensive talent at 7\'3" with an 8-foot wingspan. One of the most physically unique players in recent league history.',
      },
      { kind: 'text', text: ' is rewriting shot-blocking numbers, and the ' },
      {
        kind: 'term',
        word: 'MVP race',
        definition:
          'Most Valuable Player: an annual award for the best regular season player. Voted by media. It matters for legacy and contract discussions.',
      },
      { kind: 'text', text: ' between him and ' },
      {
        kind: 'term',
        word: 'Nikola Jokic',
        definition:
          'Center for the Denver Nuggets. Three-time MVP. Serbian. Incredible passer for his size. Currently on his fourth MVP run.',
      },
      { kind: 'text', text: ' is still unsettled—while ' },
      {
        kind: 'term',
        word: 'OKC Thunder',
        definition:
          'The Oklahoma City Thunder rebuilt fast; Shai Gilgeous-Alexander has them near the top of the West.',
      },
      { kind: 'text', text: ' sit where few preseason boards expected.' },
    ],
    stats: {
      kind: 'bar-h',
      title: 'The Wembanyama defensive outlier',
      subtitle: 'Blocks per game · 2025-26 leaders (ties MVP / DPOY talk to real volume)',
      footnote: 'Editorial snapshot for context — not a live league feed.',
      bars: [
        { label: 'Wembanyama', value: '3.8', pct: 100, highlight: true },
        { label: 'B. Adebayo', value: '2.0', pct: 53 },
        { label: 'A. Davis', value: '1.8', pct: 47 },
        { label: 'M. Turner', value: '1.3', pct: 34 },
      ],
    },
    narratives: [
      {
        icon: '🩹',
        html: '<strong>Lakers:</strong> If Dončić and Reaves miss the opening round, rotations shrink and every possession falls heavier on LeBron. Surviving a series isn’t just pride—it’s buying days for stars to ramp back up.',
      },
      {
        icon: '👑',
        html: '<strong>Longevity:</strong> At 41, still playing near an All-NBA level is the story analysts keep saying shouldn’t be possible. Playoff basketball without his two best partners turns that into a pressure cooker.',
      },
      {
        icon: '⚡',
        html: '<strong>West bracket:</strong> Wembanyama and Jokic still headline the MVP debate; OKC and Denver shape how tough every out becomes. Seed and health decide who gets an extra breath before the next round.',
      },
    ],
    gameDay: {
      blurb: 'NBA · five threads heading into the first round.',
      points: [
        'Los Angeles may open the playoffs without Dončić and Reaves—two players who handle creation, spacing, and late-clock offense. LeBron’s usage and rest management become the whole conversation.',
        'The fair question: can the Lakers advance anyway and give those two time to return, or does the first round end the runway on this roster’s title hopes?',
        'Wembanyama’s block numbers are still in another zip code from the rest of the league—defensive impact that shows up on film even when the box score looks quiet.',
        'Jokic vs. Wembanyama in January (including a game-winner in OT) is one reason national MVP chatter never settled. Denver still runs through him every trip down.',
        'Seeding and tiebreakers set home court in round one; in a short series, two home dates can be the margin between advancing and an early exit.',
      ],
    },
    moment: {
      emoji: '🏀',
      kicker: 'L.A. crossroads',
      headline: 'LeBron without his two best options',
      why: 'If the first round is mostly him against the West, it’s the hardest—and maybe the last—version of that story in purple and gold.',
      article: [
        'LeBron James (born December 30, 1984) is a four-time NBA champion and the league’s all-time scoring leader—widely documented milestones. At 41 in 2026 he is in an age range where almost no perimeter stars still anchor a contender’s offense.',
        'The Lakers are staring down a brutal opening-round picture: with Luka Dončić and Austin Reaves expected to miss early playoff games, creation, spacing, and late-clock offense lean hard on LeBron. Best-of-seven series turn on health, depth, and who holds home court.',
        'If those two stay sidelined, every possession gets louder—surviving a round buys time for the roster to get whole again; the West bracket does not wait.',
      ],
    },
    railAtAGlance: {
      intro:
        'Each NBA team plays 82 regular-season games. Playoffs are best-of-seven series; injuries and rest days can swing a round as much as talent on paper.',
      bullets: [
        'The league splits into Eastern and Western conferences; the Finals match the East champion against the West champion.',
        'Sixteen teams make the playoffs—eight per conference—with seeding from regular-season record and tiebreak rules.',
        'When stars sit, minutes and shot creation flow to bench players; coaches shorten rotations and lean on matchups.',
        'Awards like MVP are regular-season honors; playoff performance writes a separate history.',
      ],
    },
  },
  {
    id: 'nfl',
    emoji: '🏈',
    name: 'NFL',
    headline: 'NFL · April 2026',
    metaSuffix: 'Draft & cap season',
    briefPill: 'DRAFT',
    briefParts: [
      { kind: 'text', text: 'The league is between games. The ' },
      {
        kind: 'term',
        word: 'NFL Draft',
        definition:
          'Annual event where all 32 teams select college players entering the pros. Held in April. The first round is primetime TV, with trades, surprises, and franchise-altering decisions.',
      },
      { kind: 'text', text: ' is the headline. Front offices live in the ' },
      {
        kind: 'term',
        word: 'salary cap',
        definition:
          'Hard ceiling on team spending on players in a given year. Forces cuts, restructures, and trade math. GMs talk about "cap space" the way fans talk about wins.',
      },
      { kind: 'text', text: ' and ' },
      {
        kind: 'term',
        word: 'Quarterback',
        definition:
          'The most important position in football. Teams are defined by their QB. A great one can mask almost every other weakness on the roster.',
      },
      { kind: 'text', text: ' rooms. ' },
      {
        kind: 'term',
        word: 'Free agency',
        definition:
          'Period when veterans can sign with new teams. Often March frenzy. Big names move; cap casualties get cut.',
      },
      { kind: 'text', text: ' reshapes rosters before the draft. The ' },
      {
        kind: 'term',
        word: 'Kansas City Chiefs',
        definition:
          'Dynasty team. Won multiple Super Bowls with Patrick Mahomes at QB. The eternal offseason question: can the dynasty keep going?',
      },
      {
        kind: 'text',
        text: ' tweak around the edges. Detroit has been competitive deep into January; the front office is under pressure to keep the window open.',
      },
    ],
    stats: {
      kind: 'bar-v',
      title: 'Which QBs defined the scoreboard?',
      subtitle: 'Passing touchdowns · full 2025 season through the playoff window',
      footnote: 'Illustrative leaderboard for April draft / cap chatter — totals depend on playoff length.',
      valueSuffix: ' TD',
      bars: [
        { label: 'J. Allen', value: '43', pct: 100, highlight: true },
        { label: 'L. Jackson', value: '41', pct: 95 },
        { label: 'P. Mahomes', value: '39', pct: 91 },
        { label: 'J. Burrow', value: '36', pct: 84 },
      ],
    },
    narratives: [
      {
        icon: '📋',
        html: '<strong>GM theater:</strong> Mock drafts are guesses; real boards trade privacy for leverage. Smoke screens before the draft are normal.',
      },
      {
        icon: '💰',
        html: '<strong>Cap gymnastics:</strong> Restructures and post-June 1 cuts free space. Stars who stay often redo deals to help the team add pieces.',
      },
      {
        icon: '🏈',
        html: '<strong>Rebuild vs reload:</strong> Some teams are collecting picks for a QB; others are one piece away from a deep playoff run.',
      },
    ],
    gameDay: {
      blurb: 'NFL · five things going on before the draft.',
      points: [
        'Late April is draft month: the first round is prime time for trades, surprise picks, and instant reactions.',
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
      article: [
        'The NFL Draft is traditionally held in spring (late April): seven rounds, 32 franchises, with the first round carrying the most TV attention. Draft order generally tracks the prior season’s standings, modified by trades.',
        'The league operates under a hard salary cap; rookie contracts are slotted, but veterans are signed, cut, and restructured under cap rules that change slightly with each collective bargaining cycle.',
        'Public mock drafts are speculation. Real team boards stay private until picks are announced.',
      ],
    },
    railAtAGlance: {
      intro:
        'The NFL has 32 teams in two conferences (AFC and NFC). The regular season is 17 games per team; standings decide playoff seeds and division titles.',
      bullets: [
        'Each conference sends seven teams to the playoffs per season under the current format: four division winners plus three wild cards.',
        'The Super Bowl matches the AFC champion against the NFC champion.',
        'The draft is how teams acquire college players; trade rules and salary cap shape roster moves.',
        'Officiating, injuries, and weather matter in a short season where every game shifts tiebreakers.',
      ],
    },
  },
  {
    id: 'cfb',
    emoji: '🏟',
    name: 'College Football',
    badge: 'NEW',
    headline: 'College Football · April 2026',
    metaSuffix: 'Spring storylines',
    briefPill: 'SPRING',
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
      { kind: 'text', text: 'There are no regular-season games in spring. The ' },
      {
        kind: 'term',
        word: 'Transfer Portal',
        definition:
          'Lets players switch schools and play immediately · like free agency for students. Introduced in 2021. Has completely reshaped how rosters are built.',
      },
      { kind: 'text', text: ' stays open on windows; coaches rebuild through adds and losses. ' },
      {
        kind: 'term',
        word: 'NIL',
        definition:
          'Name, Image, Likeness · since 2021, players can be paid for endorsements, social media, appearances. Top recruits choose schools partly for NIL money.',
      },
      { kind: 'text', text: ' deals steer recruiting pitches. The ' },
      {
        kind: 'term',
        word: 'coaching carousel',
        definition:
          'Annual cycle of firings and hires. ADs chase proven winners; buyouts are huge. One hire can flip a recruiting territory.',
      },
      { kind: 'text', text: ' already reshaped several programs. Conference realignment and TV money still decide who plays whom each fall.' },
    ],
    stats: {
      kind: 'lollipop',
      title: 'Portal season — who added the most?',
      subtitle: 'Estimated net scholarship adds · spring window (roster churn story)',
      footnote: 'Rounded estimates for narrative context, not NCAA official portal accounting.',
      items: [
        { label: 'USC', value: '+14', pct: 100, highlight: true },
        { label: 'Miami', value: '+11', pct: 79 },
        { label: 'Colorado', value: '+10', pct: 71 },
        { label: 'Ole Miss', value: '+9', pct: 64 },
      ],
    },
    narratives: [
      {
        icon: '🔄',
        html: '<strong>Portal strategy:</strong> Some teams patch holes fast; others lose depth and scramble in fall camp.',
      },
      {
        icon: '⭐',
        html: '<strong>Recruiting:</strong> Early commitments can flip on signing day; NIL and playing time are the levers.',
      },
      {
        icon: '📺',
        html: '<strong>TV inventory:</strong> The SEC and Big Ten drive the biggest national windows; other leagues expand or merge to stay visible.',
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
      article: [
        'Major college football is organized by conferences and the NCAA. The on-field season is in the fall; spring practice is lighter and used to evaluate depth and install basics.',
        'The transfer portal lets eligible players change schools under published windows; NIL allows endorsement income separate from scholarships—both are real systems with detailed compliance rules.',
        'Playoff formats and conference membership have changed over time; check the current year’s rules for brackets and eligibility.',
      ],
    },
    railAtAGlance: {
      intro:
        'College football is organized by conferences and the NCAA. The regular season is in the fall; spring is for practice, recruiting, and roster changes.',
      bullets: [
        'The College Football Playoff selects a small number of teams for a postseason bracket; formats have changed over time.',
        'The transfer portal lets players change schools under eligibility rules; NIL allows endorsement income.',
        'Polls and rankings influence perception, but conference championship games and head-to-head results drive who advances.',
        'Rivalry weeks and bowl season pack the calendar when games return in late summer.',
      ],
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
      { kind: 'text', text: ' has shortened average game length compared to a few years ago. Front offices obsess over ' },
      {
        kind: 'term',
        word: 'prospects',
        definition:
          'Minor-league players who might reach the majors. Traded at the deadline for stars. Farm system rankings fuel offseason talk.',
      },
      { kind: 'text', text: ' and payroll tiers; July trade season is still months away, but April injuries already shift roster plans.' },
    ],
    stats: {
      kind: 'bar-h',
      title: 'Who is driving early offense?',
      subtitle: 'wRC+ · first month (100 = league average; ties payroll / injury narratives)',
      footnote: 'Weighted runs created plus — one number for total offensive value vs league.',
      bars: [
        { label: 'Judge', value: '198', pct: 100, highlight: true },
        { label: 'Ohtani', value: '191', pct: 96 },
        { label: 'Soto', value: '176', pct: 89 },
        { label: 'Riley', value: '162', pct: 82 },
      ],
    },
    narratives: [
      {
        icon: '💵',
        html: '<strong>Payroll tiers:</strong> The Dodgers spend at the top; small markets rely on development and deadline creativity.',
      },
      {
        icon: '🩹',
        html: '<strong>Injury luck:</strong> Starting pitching depth decides who survives the 162-game grind.',
      },
      {
        icon: '📅',
        html: '<strong>July deadline:</strong> Contenders buy; rebuilders trade stars for prospects. April standings hint who is which.',
      },
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
      article: [
        'Shohei Ohtani is covered globally as a rare modern two-way player: elite offense and, when healthy, frontline pitching. His long-term contract with the Dodgers was widely reported at a record dollar figure.',
        'Tommy John surgery is a standard elbow reconstruction for pitchers; return timelines vary by athlete. MLB’s pitch clock and related pace rules are official rulebook changes from recent seasons.',
        'Early-season leaderboards (e.g., wRC+) move daily—use live stats sites for current rankings.',
      ],
    },
    railAtAGlance: {
      intro:
        'MLB plays a 162-game regular season. Teams are split between the American League and National League; interleague play is common.',
      bullets: [
        'Standings use wins and losses; winning percentage breaks ties before detailed head-to-head rules.',
        'The postseason is a series of best-of rounds ending in the World Series between AL and NL champions.',
        'Pitching rotations, bullpen usage, and the designated hitter rule differ by league and ballpark.',
        'Rule changes like the pitch clock and bigger bases have sped up games compared with prior years.',
      ],
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
        text: " drives Edmonton. The ",
      },
      {
        kind: 'term',
        word: 'salary cap',
        definition:
          'NHL teams cannot exceed a league-wide player payroll ceiling. Trades and LTIR moves are how GMs balance stars and depth.',
      },
      { kind: 'text', text: ' forces hard choices at the ' },
      {
        kind: 'term',
        word: 'trade deadline',
        definition:
          'Spring date when contenders rent stars and sellers stockpile picks. One rental goalie can swing a playoff series.',
      },
      {
        kind: 'text',
        text: '. Florida has been a recent Cup winner with structure up and down the lineup; seeding and goalie health will shape April.',
      },
    ],
    stats: {
      kind: 'diverging',
      title: 'Playoff push — who is outscoring problems?',
      subtitle: 'Team goal differential · last 10 games (momentum into April)',
      footnote: 'Positive = more goals scored than allowed in the sample window.',
      rows: [
        { label: 'WPG', net: 14 },
        { label: 'EDM', net: 11 },
        { label: 'FLA', net: 6 },
        { label: 'CHI', net: -4 },
      ],
    },
    narratives: [
      {
        icon: '🥅',
        html: '<strong>Goalie health:</strong> Playoff hockey shrinks margins; a hot netminder can steal a series.',
      },
      {
        icon: '⚡',
        html: '<strong>Special teams:</strong> Power plays decide tight games; coaches scout penalty killers all spring.',
      },
      {
        icon: '🚌',
        html: '<strong>Travel grind:</strong> Cross-country series wear rosters; depth matters more each round.',
      },
    ],
    gameDay: {
      blurb: 'NHL · five things worth knowing.',
      points: [
        'McDavid is the offensive standard; Edmonton\'s playoff runs draw national attention.',
        'Playoff hockey uses sudden-death overtime; games can end on any shot.',
        'Goalies face more rubber in April; save percentage swings series.',
        'Recent champions have leaned on depth, defense, and goaltending through four playoff rounds.',
        'The Stanley Cup is a best-of-seven each round; travel and injuries stack up fast.',
      ],
    },
    moment: {
      emoji: '🏒',
      kicker: 'Playoffs',
      headline: 'Seeding and health matter',
      why: 'The bracket is a grind; special teams and goaltending decide who advances.',
      article: [
        'The Stanley Cup playoffs are four rounds of best-of-seven series, then the Finals. Seeds follow regular-season points and published NHL tiebreakers.',
        'Goalies face intense shot volumes in April; save percentage and special teams often decide one-goal games.',
        'Star skaters (e.g., Connor McDavid) are well documented; whether a team wins the Cup is decided on the ice, not in previews.',
      ],
    },
    railAtAGlance: {
      intro:
        'The NHL plays an 82-game regular season. Standings award points for wins and overtime losses; playoff spots go to division leaders and wild cards.',
      bullets: [
        'Games have three periods; overtime in the regular season can end in a shootout.',
        'The Stanley Cup playoffs are four best-of-seven rounds, then the Finals.',
        'Roster limits, salary cap, and long road trips make depth and goaltending decisive.',
        'Hockey assists and plus-minus are common box-score stats; expected-goals models are used in deeper analysis.',
      ],
    },
  },
  {
    id: 'soccer',
    emoji: '⚽',
    name: 'Soccer',
    headline: 'Soccer · April 2026',
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
      { kind: 'text', text: ' in the same attack. Off the pitch, ' },
      {
        kind: 'term',
        word: 'Financial Fair Play',
        definition:
          'UEFA rules that limit club spending relative to revenue. Big transfers still happen, but lawyers and accountants are part of the sport.',
      },
      { kind: 'text', text: ' and summer ' },
      {
        kind: 'term',
        word: 'transfer windows',
        definition:
          'Fixed periods when clubs can register new players. January and summer markets drive endless rumors.',
      },
      { kind: 'text', text: ' dominate offseason headlines when leagues pause.' },
    ],
    stats: {
      kind: 'diverging',
      title: 'Knockout control — chance balance',
      subtitle: 'UCL knockout ties · expected goals difference per 90 (editorial model)',
      footnote: 'Positive = creating more high-quality chances than conceded on average.',
      rows: [
        { label: 'Arsenal', net: 1.1 },
        { label: 'Barcelona', net: 0.7 },
        { label: 'Inter', net: -0.2 },
        { label: 'Atlético', net: -0.6 },
      ],
    },
    narratives: [
      {
        icon: '🌍',
        html: '<strong>Two-leg ties:</strong> Aggregate score decides who advances; away form still matters tactically even without the old away-goals rule in many ties.',
      },
      {
        icon: '🏟',
        html: '<strong>Domestic overlap:</strong> Leagues keep playing; managers rotate squads to survive the schedule.',
      },
      {
        icon: '🔁',
        html: '<strong>Summer rebuilds:</strong> Sporting directors line up targets early; one signing can shift a league title race.',
      },
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
      article: [
        'UEFA Champions League knockouts are usually two-legged ties; aggregate goals advance a side, with tiebreaker rules published by UEFA and updated when regulations change.',
        'Domestic leagues run on parallel calendars—managers rotate squads to survive congested schedules.',
        'Clubs like Real Madrid carry a long European record; current form requires live tables and match reports.',
      ],
    },
    railAtAGlance: {
      intro:
        'Club soccer uses leagues (double round-robin in many top divisions) and cup tournaments. European club play includes the Champions League knockout stage.',
      bullets: [
        'Three points for a win, one for a draw, zero for a loss is the standard league scoring.',
        'Two-leg ties add home-and-away strategy; away goals have been removed from many UEFA competitions.',
        'Domestic leagues (Premier League, La Liga, etc.) run on their own calendars alongside cups.',
        'The sport is low-scoring; one goal often changes tactics for the rest of the match.',
      ],
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
      { kind: 'text', text: ' is the defending champion; the midfield has closed on Red Bull in race trim. ' },
      {
        kind: 'term',
        word: 'Aerodynamics',
        definition:
          'How the car shapes air for downforce and drag. Teams spend wind-tunnel hours chasing hundredths of a second.',
      },
      { kind: 'text', text: ' and ' },
      {
        kind: 'term',
        word: 'power unit',
        definition:
          'Engine plus hybrid systems. Limited development tokens and reliability caps shape reliability battles.',
      },
      { kind: 'text', text: ' rules keep factories honest between seasons.' },
    ],
    stats: {
      kind: 'lollipop',
      title: 'Race-pace gap to the front',
      subtitle: 'Average deficit to pole lap in dry qualifying · season to date (%)',
      footnote: 'Smaller gap = closer to raw one-lap pace; illustrative race averages.',
      items: [
        { label: 'McLaren', value: '0.31%', pct: 100, highlight: true },
        { label: 'Ferrari', value: '0.38%', pct: 81 },
        { label: 'Red Bull', value: '0.45%', pct: 69 },
        { label: 'Mercedes', value: '0.52%', pct: 60 },
      ],
    },
    narratives: [
      {
        icon: '🛠',
        html: '<strong>Development race:</strong> Teams ship upgrades all season; B-spec floors and wings can flip midfield order.',
      },
      {
        icon: '🛑',
        html: '<strong>Strategy:</strong> One-stops vs two-stops; safety cars and tire degradation rewrite plans on the fly.',
      },
      {
        icon: '📐',
        html: '<strong>Regs:</strong> Budget cap and wind-tunnel limits aim to close the grid; loopholes still spark protests.',
      },
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
      article: [
        'Lewis Hamilton moved from Mercedes to Ferrari; his seven world titles are on record. In 2026 he is in his second season with the team as the grid chases race wins and the constructors’ fight.',
        'Max Verstappen has been the driver to beat in recent seasons with Red Bull—check official F1 results for current standings.',
        'Qualifying gaps and upgrade timelines swing every weekend; use official timing sheets for live pace.',
      ],
    },
    railAtAGlance: {
      intro:
        'Formula 1 is a world championship of Grands Prix. Teams build their own cars under technical rules; drivers score points toward two titles (drivers and constructors).',
      bullets: [
        'Weekends usually include practice, qualifying grid order, then a Sunday race.',
        'Tire compounds, fuel load, and pit strategy matter as much as raw lap time.',
        'Sprint weekends add a short race that can set part of the grid on select events.',
        'Regulations and budget caps evolve season to season and can reshuffle competitiveness.',
      ],
    },
  },
  {
    id: 'tennis',
    emoji: '🎾',
    name: 'Tennis',
    headline: 'Tennis · April 2026',
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
      { kind: 'text', text: ' trade the top rankings on hard and clay. Off-season coaching changes and ' },
      {
        kind: 'term',
        word: 'ATP Race',
        definition:
          'Rolling points toward year-end finals and seeding. Big results at Masters and Slams swing the standings fast.',
      },
      { kind: 'text', text: ' points decide who gets top seeds at Slams. The WTA tour runs parallel storylines with the same calendar.' },
    ],
    stats: {
      kind: 'paired',
      title: 'Clay vs hard — who shifts gears?',
      subtitle: 'Match win rate · 2026 season split (surface schedule context)',
      footnote: 'Percent of matches won on each surface; clay swing is underway.',
      leftMetric: 'Clay',
      rightMetric: 'Hard',
      rows: [
        { label: 'Sinner', left: '78%', right: '74%', leftPct: 78, rightPct: 74, highlight: true },
        { label: 'Alcaraz', left: '81%', right: '77%', leftPct: 81, rightPct: 77 },
        { label: 'Zverev', left: '71%', right: '68%', leftPct: 71, rightPct: 68 },
        { label: 'Fritz', left: '64%', right: '72%', leftPct: 64, rightPct: 72 },
      ],
    },
    narratives: [
      {
        icon: '🧱',
        html: '<strong>Clay shift:</strong> Slower courts reward patience; big hitters adjust spin and footwork.',
      },
      {
        icon: '🎫',
        html: '<strong>Seeding math:</strong> Top 8 seeds avoid each other until round four at Slams; every ranking spot matters.',
      },
      {
        icon: '⚖️',
        html: '<strong>WTA parity:</strong> Multiple winners per major; depth is higher than in the Big Three era on the men\'s side.',
      },
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
      article: [
        'Clay courts slow the ball and lengthen rallies compared with grass and many hard courts. Roland Garros is the Grand Slam played on clay in Paris.',
        'ATP and WTA rankings use rolling points from the prior 52 weeks; seeding depends on that ladder at entry deadlines.',
        'Rivalries and results change with each tournament—match outcomes drive the story, not preseason copy.',
      ],
    },
    railAtAGlance: {
      intro:
        'Pro tennis has separate tours (ATP for men, WTA for women). Rankings use a rolling points system from tournament results over the past year.',
      bullets: [
        'Grand Slams are best-of-five sets for men at majors; other events are usually best-of-three.',
        'Surfaces change speed: clay slows the ball, grass rewards serve-and-volley, hard courts sit in the middle.',
        'Seeding affects early-round matchups; upsets still happen often in single elimination.',
        'Tiebreaks resolve sets at 6-6 except the deciding set rules, which vary by event.',
      ],
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
      return 'Novice'
    case 'casual':
      return 'Casual'
    case 'diehard':
      return 'Diehard'
  }
}
