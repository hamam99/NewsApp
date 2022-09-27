import {ResponseNews} from '../types/ResponseNews';

export const TopHeadlineMocks: ResponseNews = {
  status: 'ok',
  totalResults: 37,
  articles: [
    {
      source: {
        id: null,
        name: 'CBS Sports',
      },
      author: 'Jordan Dajani',
      title:
        'Bills vs. Titans score: Josh Allen, Buffalo make statement in blowout win over Tennessee in prime time - CBS Sports',
      description: "Buffalo's season is off to a blazing start",
      url: 'https://www.cbssports.com/nfl/news/bills-vs-titans-score-josh-allen-buffalo-make-statement-in-blowout-win-over-tennessee-in-prime-time/live/',
      urlToImage:
        'https://sportshub.cbsistatic.com/i/r/2022/09/20/dd24274c-c018-4d43-b7c6-8652b866d2e4/thumbnail/1200x675/6f43408ad4c0083afa7746a99b4df35b/josh-allen.jpg',
      publishedAt: '2022-09-20T02:39:00Z',
      content:
        'In a battle of AFC heavyweights, the Bills delivered a knockout Monday night while sending an emphatic message to the rest of the NFL. In posting an 41-7 victory over the visiting Titans, the Bills m… [+4289 chars]',
    },
    {
      source: {
        id: null,
        name: 'Bleeding Green Nation',
      },
      author: 'Brandon Lee Gowton',
      title:
        'Eagles vs. Vikings live updates, highlights, scores, news - Bleeding Green Nation',
      description: 'A Monday Night Football matchup to remember?',
      url: 'https://www.bleedinggreennation.com/2022/9/19/23362151/eagles-vs-vikings-live-updates-highlights-scores-game-philadelphia-minnesota-monday-night-football',
      urlToImage:
        'https://cdn.vox-cdn.com/thumbor/heUg2SAjMFxkNM099VwPxiwaO2Y=/0x78:2407x1338/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24037436/usa_today_19078783.jpg',
      publishedAt: '2022-09-20T02:37:39Z',
      content:
        'The Philadelphia Eagles are hosting the Minnesota Vikings in their home opener on Monday Night Football. Its a relatively big matchup between two 1-0 teams at Lincoln Financial Field. \r\nThe Birds are… [+7911 chars]',
    },
    {
      source: {
        id: 'politico',
        name: 'Politico',
      },
      author: null,
      title:
        "Biden leaves no doubt: 'Strategic ambiguity' toward Taiwan is dead - POLITICO",
      description:
        "The president's remark that the U.S. would defend Taiwan against a Chinese attack “doesn't really have the hallmark of an off-the-cuff remark,” one expert said.",
      url: 'https://www.politico.com/news/2022/09/19/biden-leaves-no-doubt-strategic-ambiguity-toward-taiwan-is-dead-00057658',
      urlToImage:
        'https://static.politico.com/be/a1/a8f78e00480787d1a99bc4a432dd/ap21320053983809.jpg',
      publishedAt: '2022-09-20T01:39:18Z',
      content:
        'Bidens assertion reflects his administrations recognition that the U.S. must apply a more robust deterrence to Beijing given its worsening military intimidation of Taiwan. That harassment is rooted i… [+7253 chars]',
    },
  ],
};

const ListNewsMock: ResponseNews = {
  status: 'ok',
  totalResults: 2,
  articles: [
    {
      source: {
        id: null,
        name: 'CNET',
      },
      author: 'Monisha Ravisetti, Jackson Ryan',
      title:
        '20 Quadrillion Ants Are Roaming Earth Right Now, Scientists Calculate - CNET',
      description:
        'Inside the race to quantify insect populations before they disappear.',
      url: 'https://www.cnet.com/science/biology/20-quadrillion-ants-are-roaming-earth-right-now-scientists-calculate/',
      urlToImage:
        'https://www.cnet.com/a/img/resize/ff2095291b749c2277214bac915a9958e0464912/hub/2022/09/19/9670bebb-ab5e-4afa-8206-272c1a27a670/gettyimages-525968315.jpg?auto=webp&fit=crop&height=630&width=1200',
      publishedAt: '2022-09-19T23:27:00Z',
      content:
        'When Mark Wong set out to analyze 489 entomological studies spanning every continent, major habitat and biome on Earth, he had a simple goal: Count the ants. The journey to a final answer was long, a… [+4241 chars]',
    },
    {
      source: {
        id: 'associated-press',
        name: 'Associated Press',
      },
      author: 'Mike Corder, Jill Lawless',
      title:
        'Bidens among thousands paying respects to Queen Elizabeth II - The Associated Press - en Español',
      description:
        "LONDON (AP) — U.S. President Joe Biden paid his respects at Queen Elizabeth II's coffin on Sunday as thousands of police, hundreds of British troops and an army of officials made final preparations for the queen's state funeral — a spectacular display of nati…",
      url: 'https://apnews.com/article/queen-elizabeth-ii-biden-king-charles-iii-entertainment-60db7257eda5dbf150d79e8be4f0f778',
      urlToImage:
        'https://storage.googleapis.com/afs-prod/media/e9c17c7250464a67a5658b386ef2e81d/3000.jpeg',
      publishedAt: '2022-09-19T22:43:55Z',
      content:
        'LONDON (AP) U.S. President Joe Biden paid his respects at Queen Elizabeth IIs coffin on Sunday as thousands of police, hundreds of British troops and an army of officials made final preparations for … [+6809 chars]',
    },
    {
      source: {
        id: 'associated-press',
        name: 'Associated Press',
      },
      author: 'Mike Corder, Jill Lawless',
      title:
        'Bidens among thousands paying respects to Queen Elizabeth II - The Associated Press - en Español',
      description:
        "LONDON (AP) — U.S. President Joe Biden paid his respects at Queen Elizabeth II's coffin on Sunday as thousands of police, hundreds of British troops and an army of officials made final preparations for the queen's state funeral — a spectacular display of nati…",
      url: 'https://apnews.com/article/queen-elizabeth-ii-biden-king-charles-iii-entertainment-60db7257eda5dbf150d79e8be4f0f778',
      urlToImage:
        'https://storage.googleapis.com/afs-prod/media/e9c17c7250464a67a5658b386ef2e81d/3000.jpeg',
      publishedAt: '2022-09-19T22:43:55Z',
      content:
        'LONDON (AP) U.S. President Joe Biden paid his respects at Queen Elizabeth IIs coffin on Sunday as thousands of police, hundreds of British troops and an army of officials made final preparations for … [+6809 chars]',
    },
  ],
};

export const HomeMocks = {ListNewsMock, TopHeadlineMocks};
