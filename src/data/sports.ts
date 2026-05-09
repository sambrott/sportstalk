import type { FanLevel, SportContent, SportId } from '../types'

export const LEVEL_LABEL: Record<FanLevel, string> = {
  novice: 'Novice',
  casual: 'Casual',
  diehard: 'Diehard',
}

export const SPORTS: SportContent[] = [
  {
    id: 'nba',
    name: 'NBA',
    badge: 'HOT',
    headline: 'NBA · 2026 postseason',
    metaSuffix: 'May bracket · live scores & rail',
    briefPill: 'HOT',
    briefParts: [
      { kind: 'text', text: 'The 2025-26 ' },
      {
        kind: 'term',
        word: 'MVP race',
        definition:
          'Most Valuable Player: a media vote for the best regular season player, presented with the Kia-branded Michael Jordan Trophy. Playoff basketball is scored on a different clock.',
      },
      {
        kind: 'text',
        text: ' is settled on paper, but May is about the bracket: ',
      },
      {
        kind: 'term',
        word: 'Detroit Pistons',
        definition:
          'Young East contender that surged to the conference’s best regular-season record in 2025-26. Defense, depth, and shot-making from the backcourt decide how long a run lasts.',
      },
      { kind: 'text', text: ' took the East’s top seed, while the ' },
      {
        kind: 'term',
        word: 'OKC Thunder',
        definition:
          'Oklahoma City: league-best 64 wins in 2025-26 with a deep two-way roster built around MVP-level play from Shai Gilgeous-Alexander.',
      },
      {
        kind: 'text',
        text: ' posted the NBA’s best mark and chase a Finals trip that honors that regular season. Out West, ',
      },
      {
        kind: 'term',
        word: 'Victor Wembanyama',
        definition:
          'Spurs big: generational length and rim protection. San Antonio jumped to the West’s two-seed; his minutes and foul ties matter in a half-court series.',
      },
      { kind: 'text', text: ' and ' },
      {
        kind: 'term',
        word: 'Nikola Jokic',
        definition:
          'Nuggets center: one of the great offensive bigs ever—passing hub, post scorer, late-clock answer—on a Denver team that remains a tactician’s problem.',
      },
      { kind: 'text', text: ' still headline the big-man matchups, while ' },
      {
        kind: 'term',
        word: 'LeBron James',
        definition:
          'Four-time champion; hub on offense in his 40s. The Lakers secured a top-four West seed; his minutes and creation still tilt defensive game plans.',
      },
      { kind: 'text', text: ', ' },
      {
        kind: 'term',
        word: 'Luka Dončić',
        definition:
          'Slovenian superstar: elite shot creation and passing. LA’s offense has a top gear when he is healthy and available down the stretch.',
      },
      { kind: 'text', text: ', and ' },
      {
        kind: 'term',
        word: 'Cade Cunningham',
        definition:
          'Pistons lead guard: size, pace, and pick-and-roll scoring. How he handles playoff pressure is a central plot in Detroit’s return to relevance.',
      },
      { kind: 'text', text: ' carry the stars-and-schemes story as the conference finals picture sharpens.' },
    ],
    stats: {
      kind: 'bar-h',
      title: 'Defense still tilts the TV window',
      subtitle: 'Blocks per game · 2025-26 regular season (editorial snapshot)',
      footnote: 'For live leaders, use NBA.com/ESPN; this card highlights rim protection names fans recognize.',
      bars: [
        { label: 'Wembanyama', value: '3.7+', pct: 100, highlight: true },
        { label: 'Jaren Jackson', value: '1.6', pct: 43 },
        { label: 'Brook López', value: '1.5', pct: 40 },
        { label: 'Walker Kessler', value: '1.4', pct: 38 },
      ],
    },
    narratives: [
      {
        icon: 'bandage',
        html: '<strong>Health:</strong> Multi-round basketball is a grind; who can keep their rotation intact through extra travel nights decides who still has counters in late May.',
      },
      {
        icon: 'crown',
        html: '<strong>Short-clock execution:</strong> Possessions shrink in the paint; late-shot discipline and foul avoidance swing games more than raw talent on a whiteboard.',
      },
      {
        icon: 'bolt',
        html: '<strong>Seeding echo:</strong> Home dates and rest edges earned in the 82-game ledger still echo in game locations until someone lifts the trophy.',
      },
    ],
    gameDay: {
      blurb: 'NBA · May 2026 postseason checklist',
      points: [
        'Conference rounds are best-of-seven; every series resets matchups—switches, zone stretches, and intentional fouls reappear as coaches hunt edges.',
        'Open the right panel for ESPN-fed first-round/postseason context; lineups and injury reports can shift between morning shootaround and tipoff.',
        'The West still runs through elite bigs and shot-making wings; one cold night from deep can flip a home game.',
        'Regular-season awards are decided; what fans remember from this month is who closed quarters and who stayed efficient on short rest.',
        'This app’s scoreboard pulls ESPN’s public API—refresh between quarters for the latest line scores.',
      ],
    },
    moment: {
      kicker: 'Postseason',
      headline: 'Seeds meet scar tissue',
      why: 'May basketball is about who still has counters when possessions tighten and the crowd gets loud.',
      article: [
        'The 2025-26 bracket followed an 82-game ladder: Detroit led the East, Oklahoma City paced the league, and San Antonio vaulted toward the top of the West behind a dominant defense-first identity.',
        'Los Angeles and Denver still blend star shot creation with playoff-tested coaching; matchups on the wing and at the rim decide how far each trip goes.',
        'Use live scores and the rail in this app for what is happening tonight—this copy is a storyline lens, not a substitute for the box score.',
      ],
    },
    railAtAGlance: {
      intro:
        'The NBA plays best-of-seven series through four rounds. The right panel can mirror public postseason pairings and tonight’s scoreboard.',
      bullets: [
        'Sixteen teams open on each side of the draw; conference champions meet in the Finals.',
        'Overtime swings rest and travel—depth and foul trouble compound faster in round three than in round one.',
      ],
    },
  },
  {
    id: 'wnba',
    name: 'WNBA',
    headline: 'WNBA · 2026 season',
    metaSuffix: 'Indiana, Las Vegas, New York, Seattle',
    briefPill: 'WNBA',
    briefParts: [
      { kind: 'text', text: "The WNBA is the world's premier women's professional basketball league: fast pace, elite skill, and rosters that mix veterans with recent college stars. " },
      {
        kind: 'term',
        word: "Caitlin Clark",
        definition:
          "Former Iowa phenom; one of the biggest ratings draws in the sport. Playmaking range and three-level scoring for Indiana.",
      },
      { kind: 'text', text: ' and ' },
      {
        kind: 'term',
        word: "A'ja Wilson",
        definition:
          "Two-time MVP; dominant interior presence for the Aces. Championship experience and a nightly mismatch problem for defenses.",
      },
      { kind: 'text', text: " headline different markets. Women's college coverage stays massive in March; the pro league carries that attention into the summer. Scores and table snapshots can pull from ESPN in this app when the season is live." },
    ],
    stats: {
      kind: 'bar-h',
      title: 'WNBA · pace vs efficiency',
      subtitle: 'Narrative snapshot: WNBA play-by-play and stats update nightly in season',
      footnote: '2026 opening week: sample efficiency marks; live stats when games are on the board',
      bars: [
        { label: 'Liberty', value: '1.12', pct: 100, highlight: true },
        { label: 'Aces', value: '1.09', pct: 97 },
        { label: 'Lynx', value: '1.06', pct: 95 },
        { label: 'Fever', value: '1.04', pct: 93 },
      ],
    },
    narratives: [
      { icon: 'star', html: "<strong>Star power:</strong> Women's basketball viewership is setting records; distribution deals keep growing." },
      { icon: 'bolt', html: "<strong>Style:</strong> WNBA play emphasizes spacing, ball movement, and help defense in a slightly different game rhythm than the NBA." },
      { icon: 'calendar', html: "<strong>Calendar:</strong> The league runs a spring/summer season with a clear playoff finish; tune the feed when games return." },
    ],
    gameDay: {
      blurb: 'WNBA · what to know this season',
      points: [
        'Thirteen-plus teams after expansion; playoff seeding still runs East/West with a Commissioner’s Cup window mid-season.',
        "Roster rules and salary cap shape free agency; stars changing teams is offseason theater.",
        "The college game feeds the pro draft; lottery odds and team needs set draft-night drama.",
        "In-season, pace and two-point vs three-point mix often decide who can survive a short rotation night.",
        "ESPN WNBA scoreboard is wired the same way as NBA in this app when games are on the board.",
      ],
    },
    moment: {
      kicker: 'League',
      headline: "The women's pro product keeps scaling",
      why: 'Talent depth, broadcast investment, and cross-over stars mean the story is as much about culture as it is about box scores.',
      article: [
        "The WNBA plays a distinct professional season: summer windows, a playoff bracket, and a Finals series that can swing on one player's foul trouble or a hot three-point night.",
        "College stars transition under rookie contracts; veterans anchor playoff teams. Follow live scores in this app for current-season numbers.",
        "The league is also a policy story: compensation, travel, and media rights are part of the public conversation year-round.",
      ],
    },
    railAtAGlance: {
      intro:
        'The WNBA is a growing pro league with a playoff bracket and Finals. Expansion cities and the collective bargaining thread keep the off-court story busy too.',
      bullets: [
        "Rosters are tight; one injury to a playmaker can change a season's ceiling.",
        "Pace and three-point rate keep climbing as coaching staffs borrow NBA spacing concepts where they fit.",
        "International players add a world-championship thread alongside the pro calendar.",
        "Awards and All-WNBA teams matter for legacies; playoff runs write the public memory.",
      ],
    },
  },
  {
    id: 'nfl',
    name: 'NFL',
    headline: 'NFL · May 2026',
    metaSuffix: 'OTAs & roster build',
    briefPill: 'ROOKIES',
    briefParts: [
      { kind: 'text', text: 'The ' },
      {
        kind: 'term',
        word: 'NFL Draft',
        definition:
          'Annual event where all 32 teams select college players entering the pros. Held in April. The first round is primetime TV, with trades, surprises, and franchise-altering decisions.',
      },
      { kind: 'text', text: ' just reshaped depth charts; May is when draft picks and undrafted free agents race through installs at ' },
      {
        kind: 'term',
        word: 'rookie minicamps',
        definition:
          'Non-padded practices where rookies learn terminology, rehab nagging injuries, and audition for roster spots before veterans report later in the summer.',
      },
      { kind: 'text', text: '. Front offices still live in the ' },
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
      { kind: 'text', text: ' market can still spin late into spring. The ' },
      {
        kind: 'term',
        word: 'Kansas City Chiefs',
        definition:
          'Dynasty team. Won multiple Super Bowls with Patrick Mahomes at QB. The eternal offseason question: can the dynasty keep going?',
      },
      {
        kind: 'text',
        text: ' tweak around the edges. Seattle earned the NFC’s best record in 2025; New England matched that mark in the AFC—both enter summer with expectations and injury luck to manage.',
      },
    ],
    stats: {
      kind: 'bar-v',
      title: 'Which QBs defined the scoreboard?',
      subtitle: 'Passing touchdowns · full 2025 season through the playoff window',
      footnote: 'Illustrative leaderboard after the 2025 season — totals depend on playoff length.',
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
        icon: 'clipboard',
        html: '<strong>GM theater:</strong> Mock drafts are guesses; real boards trade privacy for leverage. Smoke screens before the draft are normal.',
      },
      {
        icon: 'coins',
        html: '<strong>Cap gymnastics:</strong> Restructures and post-June 1 cuts free space. Stars who stay often redo deals to help the team add pieces.',
      },
      {
        icon: 'football',
        html: '<strong>Rebuild vs reload:</strong> Some teams are collecting picks for a QB; others are one piece away from a deep playoff run.',
      },
    ],
    gameDay: {
      blurb: 'NFL · five things happening after the draft.',
      points: [
        'May is when drafted rookies meet coaches: installs, testing, and depth-chart hints without pads.',
        'Veteran free-agency waves continue; June 1 cap mechanics still shape late additions.',
        'Seattle and New England posted the NFL’s best records in 2025; summer proves whether that translates forward.',
        'Kansas City still orbits Patrick Mahomes; retooling never stops for contenders.',
        'Detroit took a step back in the standings but stays a national story—fit and health in camp will draw clicks all summer.',
      ],
    },
    moment: {
      kicker: 'Calendar',
      headline: 'Rookies meet the playbook',
      why: 'May installs set the tone before training camp pads go on in the summer.',
      article: [
        'The NFL Draft is traditionally held in spring (late April): seven rounds, 32 franchises, with the first round carrying the most TV attention. In May, the focus shifts to coaching rookies and rebuilding depth charts.',
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
    name: 'College Football',
    badge: 'NEW',
    headline: 'College Football · May 2026',
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
        icon: 'cycle',
        html: '<strong>Portal strategy:</strong> Some teams patch holes fast; others lose depth and scramble in fall camp.',
      },
      {
        icon: 'star',
        html: '<strong>Recruiting:</strong> Early commitments can flip on signing day; NIL and playing time are the levers.',
      },
      {
        icon: 'tv',
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
    name: 'MLB',
    headline: 'MLB · May 2026',
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
      { kind: 'text', text: ' and payroll tiers; July trade season approaches, and early-summer injuries already shift roster plans.' },
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
        icon: 'cash',
        html: '<strong>Payroll tiers:</strong> The Dodgers spend at the top; small markets rely on development and deadline creativity.',
      },
      {
        icon: 'bandage',
        html: '<strong>Injury luck:</strong> Starting pitching depth decides who survives the 162-game grind.',
      },
      {
        icon: 'calendar',
        html: '<strong>July deadline:</strong> Contenders buy; rebuilders trade stars for prospects. May standings hint who is which.',
      },
    ],
    gameDay: {
      blurb: 'MLB · five things in the early season.',
      points: [
        'Ohtani is pitching and hitting in the same season again after recovering from elbow surgery.',
        'The Dodgers carry high expectations every year because of payroll and star depth.',
        'The Yankees remain a high-profile AL team; their season is judged against October.',
        'The pitch clock rule changed pace of play; game times dropped versus pre-2023 norms.',
        'Division races run six months; May standings are an early read, not a verdict.',
      ],
    },
    moment: {
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
    name: 'NHL',
    headline: 'NHL · May 2026',
    metaSuffix: 'Stanley Cup playoffs',
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
        text: '. Colorado and Carolina posted elite regular seasons; seeding and goalie health still write the nightly script.',
      },
    ],
    stats: {
      kind: 'diverging',
      title: 'Playoff push — who is outscoring problems?',
      subtitle: 'Team goal differential · momentum into May',
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
        icon: 'goal',
        html: '<strong>Goalie health:</strong> Playoff hockey shrinks margins; a hot netminder can steal a series.',
      },
      {
        icon: 'bolt',
        html: '<strong>Special teams:</strong> Power plays decide tight games; coaches scout penalty killers all spring.',
      },
      {
        icon: 'bus',
        html: '<strong>Travel grind:</strong> Cross-country series wear rosters; depth matters more each round.',
      },
    ],
    gameDay: {
      blurb: 'NHL · five things worth knowing.',
      points: [
        'McDavid is the offensive standard; Edmonton\'s playoff runs draw national attention.',
        'Playoff hockey uses sudden-death overtime; games can end on any shot.',
        'Goalies face more rubber in May; save percentage swings series.',
        'Recent champions have leaned on depth, defense, and goaltending through four playoff rounds.',
        'The Stanley Cup is a best-of-seven each round; travel and injuries stack up fast.',
      ],
    },
    moment: {
      kicker: 'Playoffs',
      headline: 'Seeding and health matter',
      why: 'The bracket is a grind; special teams and goaltending decide who advances.',
      article: [
        'The Stanley Cup playoffs are four rounds of best-of-seven series, then the Finals. Seeds follow regular-season points and published NHL tiebreakers.',
        'Goalies face intense shot volumes in May; save percentage and special teams often decide one-goal games.',
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
    name: 'Soccer',
    headline: 'Soccer · May 2026',
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
        icon: 'globe',
        html: '<strong>Two-leg ties:</strong> Aggregate score decides who advances; away form still matters tactically even without the old away-goals rule in many ties.',
      },
      {
        icon: 'stadium',
        html: '<strong>Domestic overlap:</strong> Leagues keep playing; managers rotate squads to survive the schedule.',
      },
      {
        icon: 'swap',
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
        icon: 'wrench',
        html: '<strong>Development race:</strong> Teams ship upgrades all season; B-spec floors and wings can flip midfield order.',
      },
      {
        icon: 'stop',
        html: '<strong>Strategy:</strong> One-stops vs two-stops; safety cars and tire degradation rewrite plans on the fly.',
      },
      {
        icon: 'setSquare',
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
    name: 'Tennis',
    headline: 'Tennis · May 2026',
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
        icon: 'bricks',
        html: '<strong>Clay shift:</strong> Slower courts reward patience; big hitters adjust spin and footwork.',
      },
      {
        icon: 'ticket',
        html: '<strong>Seeding math:</strong> Top 8 seeds avoid each other until round four at Slams; every ranking spot matters.',
      },
      {
        icon: 'scales',
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
