export interface Moment {
  year: number;
  image: string;
  title: string;
  caption: string;
}

export interface Chapter {
  id: string;
  number: string;
  era: string;
  title: string;
  heroImage: string;
  narrative: string;
  moments: Moment[];
  stats: { value: string; label: string }[];
}

export const chapters: Chapter[] = [
  {
    id: "origins",
    number: "01",
    era: "2006 - 2009",
    title: "Early Behaviour Change Experiments",
    heroImage: "/images/timeline/2006-team.jpg",
    narrative:
      "White Rice began as a bold experiment - could storytelling and design create real social change? In an Islamabad studio, a small team started building Pakistan's first gamified learning programs, award-winning animated films, and the country's first online philanthropy portal. These weren't just projects - they were proof that communication could shift behaviour at scale.",
    moments: [
      {
        year: 2006,
        image: "/images/timeline/2006.png",
        title: "BHAID - Gamified Learning",
        caption: "First gamified multimedia program deployed across 100+ schools",
      },
      {
        year: 2007,
        image: "/images/timeline/2007.png",
        title: "Abdullah's Story",
        caption: "Gold award-winning film on visual impairment and disability stigma",
      },
      {
        year: 2008,
        image: "/images/timeline/2008.png",
        title: "Oxfam & Aflatoun",
        caption: "First international NGO collaboration and award-winning e-learning series",
      },
    ],
    stats: [
      { value: "100+", label: "Schools impacted" },
      { value: "3", label: "Award-winning films" },
      { value: "1st", label: "Online philanthropy portal" },
    ],
  },
  {
    id: "expertise",
    number: "02",
    era: "2010 - 2014",
    title: "Building Behaviour Design Expertise",
    heroImage: "/images/timeline/2012.png",
    narrative:
      "The next chapter was about proving that behaviour change could work at national scale. White Rice raised $1 million for Oxfam, helped re-enroll 100,000 children through the Alif Ailaan campaign, and built a movement of 600,000 changemakers fighting violence against women. Design Thinking and Human-Centered Design became the operating system. Pakistan's first mental health app for teenagers was born.",
    moments: [
      {
        year: 2011,
        image: "/images/timeline/2011.png",
        title: "We Can - 600K Changemakers",
        caption: "A movement of 600,000 people fighting violence against women and girls",
      },
      {
        year: 2012,
        image: "/images/timeline/2012-b.png",
        title: "Alif Ailaan",
        caption: "Pakistan's largest education campaign - 100,000 kids re-enrolled in schools",
      },
      {
        year: 2013,
        image: "/images/timeline/2013.png",
        title: "Relax App",
        caption: "Pakistan's first online mental health app reaching 10,000 teenagers",
      },
    ],
    stats: [
      { value: "$1M", label: "Raised for Oxfam" },
      { value: "100K", label: "Children re-enrolled" },
      { value: "10M", label: "Citizens reached" },
    ],
  },
  {
    id: "global",
    number: "03",
    era: "2015 - 2019",
    title: "Scaling with Global Partners",
    heroImage: "/images/timeline/2018.png",
    narrative:
      "By 2015, White Rice had evolved from a communications agency into a behavioural science powerhouse. International recognition followed - the Australian High Commission Award, partnerships with Nike Foundation, UNICEF, and IKEA Foundation. The Girl Effect platform reached over 1 million girls. The world's largest storytelling exercise captured 11,000 mothers' voices. Clean & Green Punjab touched 30 million people on digital platforms alone.",
    moments: [
      {
        year: 2016,
        image: "/images/timeline/2016-b.png",
        title: "Polio Frontline Workers",
        caption: "Training videos for 27,000+ workers addressing community resistance",
      },
      {
        year: 2017,
        image: "/images/timeline/2017.png",
        title: "Girl Effect - 1M Girls",
        caption: "100+ life-skills stories accessed by over 1 million girls across Pakistan",
      },
      {
        year: 2019,
        image: "/images/timeline/2019.png",
        title: "Clean & Green Punjab",
        caption: "Largest WASH behaviour change initiative - 30M+ digital reach",
      },
    ],
    stats: [
      { value: "1M+", label: "Girls reached" },
      { value: "250K", label: "Health workers trained" },
      { value: "30M+", label: "Digital reach" },
    ],
  },
  {
    id: "digital",
    number: "04",
    era: "2020 - 2021",
    title: "Digital Behaviour Change & AI-Enabled Systems",
    heroImage: "/images/timeline/2021.png",
    narrative:
      "When the pandemic struck, White Rice mobilized to reach 50 million people with life-saving information. The Ehsaas emergency cash program supported 10.7 million families. But crisis also accelerated innovation - VR film series on water and sanitation, AI-driven impact initiatives, and a new vision for technology-powered behaviour change.",
    moments: [
      {
        year: 2020,
        image: "/images/timeline/2020.png",
        title: "COVID-19 Response",
        caption:
          "Nationwide response reaching 50 million+ people on safety and health",
      },
      {
        year: 2020,
        image: "/images/timeline/2020-b.png",
        title: "Ehsaas Emergency Program",
        caption:
          "Supporting the government's largest cash distribution - 10.7 million people",
      },
      {
        year: 2021,
        image: "/images/timeline/2021-b.png",
        title: "VR/AI Initiatives",
        caption:
          "Pakistan's first VR film series and AI-driven impact programs",
      },
    ],
    stats: [
      { value: "50M+", label: "People reached" },
      { value: "10.7M", label: "Emergency recipients" },
      { value: "1st", label: "VR impact series" },
    ],
  },
  {
    id: "scaling",
    number: "05",
    era: "2022 - Present",
    title: "Scaling Behaviour Change Systems",
    heroImage: "/images/timeline/2022/playlabs-session.jpg",
    narrative:
      "With two decades of evidence behind it, White Rice entered a new phase - designing behaviour change systems that governments and global institutions could deploy at national scale. From community play labs in Sindh to nationwide food safety campaigns, and from World Bank early childhood programs to films driving climate action, the work became bigger, more systematic, and more deeply rooted in behavioural science.",
    moments: [
      {
        year: 2022,
        image: "/images/timeline/2022/playlabs-hero.jpg",
        title: "Sindh Community PlayLabs",
        caption:
          "UNICEF-backed community play spaces promoting early childhood development and parenting engagement across Sindh",
      },
      {
        year: 2023,
        image: "/images/timeline/2023/parenting-hero.jpg",
        title: "Parental Engagement for ECD",
        caption:
          "UNICEF behaviourally designed parenting program strengthening child stimulation and responsive caregiving",
      },
      {
        year: 2024,
        image: "/images/timeline/2024/food-safety-hero.jpg",
        title: "National Food Safety Campaign",
        caption:
          "ITC nationwide campaign helping food vendors adopt safer hygiene practices through visual nudges",
      },
      {
        year: 2024,
        image: "/images/timeline/2024/child-stim-hero.jpg",
        title: "Child Stimulation Program",
        caption:
          "World Bank large-scale initiative improving early childhood stimulation through caregiver engagement",
      },
      {
        year: 2025,
        image: "/images/timeline/2025/films-hero.jpg",
        title: "Films for Change",
        caption:
          "Storytelling platform using films and documentaries to drive behaviour change across climate, health, and gender",
      },
    ],
    stats: [
      { value: "5", label: "National programs" },
      { value: "4", label: "Global partners" },
      { value: "20+", label: "Years of impact" },
    ],
  },
];

export const impactStats = [
  { value: "20", label: "Years" },
  { value: "100+", label: "Organizations" },
  { value: "500+", label: "Projects" },
  { value: "50M+", label: "Lives Impacted" },
];
