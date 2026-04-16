/* ── Timeline data: Squarespace-style entries ─────────────────────── */

export type LayoutType =
  | "hero-bg"        // full-bleed background image with text overlay
  | "big-number"     // large stat/number display
  | "text-image"     // text left, image right
  | "image-text"     // image left, text right
  | "full-image";    // cinematic full-width image with caption

export type CategoryTag =
  | "CAMPAIGN"
  | "PARTNERSHIP"
  | "MILESTONE"
  | "INNOVATION"
  | "AWARD"
  | "IMPACT";

export interface TimelineEntry {
  id: string;
  year: number;
  month?: string;
  layout: LayoutType;
  category: CategoryTag;
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  stat?: { value: string; label: string };
  highlight?: boolean;
}

export const timelineEntries: TimelineEntry[] = [
  /* ── 2006 ── */
  {
    id: "bhaid-2006",
    year: 2006,
    layout: "hero-bg",
    category: "INNOVATION",
    title: "BHAID - Gamified Learning",
    subtitle: "Where It All Began",
    description:
      "White Rice launched Pakistan's first gamified multimedia learning program, deployed across 100+ schools. A bold experiment asking whether design could drive real social change.",
    image: "/images/timeline/2006.png",
    highlight: true,
  },
  {
    id: "team-2006",
    year: 2006,
    layout: "text-image",
    category: "MILESTONE",
    title: "The Founding Team",
    description:
      "A small team in an Islamabad studio set out to prove that storytelling and behavioural science could shift behaviour at scale. The journey begins.",
    image: "/images/timeline/2006-team.jpg",
  },
  /* ── 2007 ── */
  {
    id: "abdullah-2007",
    year: 2007,
    layout: "image-text",
    category: "AWARD",
    title: "Abdullah's Story",
    description:
      "A Gold award-winning animated film on visual impairment and disability stigma. One of Pakistan's earliest examples of using film as a tool for behaviour change.",
    image: "/images/timeline/2007.png",
    highlight: true,
  },
  /* ── 2008 ── */
  {
    id: "oxfam-aflatoun-2008",
    year: 2008,
    layout: "text-image",
    category: "PARTNERSHIP",
    title: "Oxfam & Aflatoun",
    description:
      "First international NGO collaboration. An award-winning e-learning series that proved Pakistani creative talent could operate at a global standard.",
    image: "/images/timeline/2008.png",
  },
  /* ── 2009 ── */
  {
    id: "schools-100",
    year: 2009,
    layout: "big-number",
    category: "MILESTONE",
    title: "schools impacted",
    subtitle: "First chapter closes with",
    description: "Gamified learning reaches classrooms across Pakistan.",
    image: "/images/timeline/2009.png",
    stat: { value: "100+", label: "Schools Impacted" },
    highlight: true,
  },
  /* ── 2010 ── */
  {
    id: "wr-studio-2010",
    year: 2010,
    layout: "hero-bg",
    category: "MILESTONE",
    title: "New Studio, New Ambitions",
    description:
      "White Rice expanded into a full-service creative studio. Design Thinking and Human-Centered Design became the operating system for everything that followed.",
    image: "/images/timeline/2010.png",
  },
  /* ── 2011 ── */
  {
    id: "we-can-2011",
    year: 2011,
    layout: "image-text",
    category: "CAMPAIGN",
    title: "We Can - 600K Changemakers",
    description:
      "A movement of 600,000 people fighting violence against women and girls. One of Pakistan's largest citizen-driven advocacy campaigns, powered by grassroots storytelling.",
    image: "/images/timeline/2011.png",
    highlight: true,
  },
  {
    id: "changemakers-600k",
    year: 2011,
    layout: "big-number",
    category: "IMPACT",
    title: "changemakers mobilized",
    description: "A movement that proved behaviour change could scale through community power.",
    image: "/images/timeline/2011-b.png",
    stat: { value: "600K", label: "Changemakers" },
    highlight: true,
  },
  /* ── 2012 ── */
  {
    id: "alif-ailaan-2012",
    year: 2012,
    layout: "hero-bg",
    category: "CAMPAIGN",
    title: "Alif Ailaan",
    subtitle: "Pakistan's Largest Education Campaign",
    description:
      "100,000 children re-enrolled in schools. The campaign reached 10 million citizens and fundamentally shifted the national conversation on education.",
    image: "/images/timeline/2012.png",
    highlight: true,
  },
  /* ── 2013 ── */
  {
    id: "relax-app-2013",
    year: 2013,
    layout: "text-image",
    category: "INNOVATION",
    title: "Relax - Pakistan's First Mental Health App",
    description:
      "Reaching 10,000 teenagers, this was Pakistan's first digital mental health intervention. A pioneering step in using technology for wellbeing at scale.",
    image: "/images/timeline/2013.png",
  },
  /* ── 2014 ── */
  {
    id: "oxfam-million-2014",
    year: 2014,
    layout: "big-number",
    category: "IMPACT",
    title: "raised for Oxfam",
    description: "A benchmark in fundraising through behaviour-centred design and storytelling.",
    image: "/images/timeline/2014.png",
    stat: { value: "$1M", label: "Raised for Oxfam" },
    highlight: true,
  },
  /* ── 2015 ── */
  {
    id: "ahc-award-2015",
    year: 2015,
    layout: "image-text",
    category: "AWARD",
    title: "Australian High Commission Award",
    description:
      "International recognition for White Rice's contribution to social impact through design. The world started paying attention.",
    image: "/images/timeline/2015.png",
  },
  /* ── 2016 ── */
  {
    id: "polio-2016",
    year: 2016,
    layout: "hero-bg",
    category: "CAMPAIGN",
    title: "Polio Frontline Workers",
    subtitle: "27,000+ Workers Trained",
    description:
      "Training videos designed for frontline health workers addressing community resistance to polio vaccination. Behavioural science meets public health at national scale.",
    image: "/images/timeline/2016-b.png",
    highlight: true,
  },
  /* ── 2017 ── */
  {
    id: "girl-effect-2017",
    year: 2017,
    layout: "text-image",
    category: "PARTNERSHIP",
    title: "Girl Effect - 1 Million Girls",
    description:
      "In partnership with Nike Foundation, over 100 life-skills stories were accessed by more than 1 million girls across Pakistan. Storytelling as empowerment.",
    image: "/images/timeline/2017.png",
    highlight: true,
  },
  {
    id: "girls-1m",
    year: 2017,
    layout: "big-number",
    category: "IMPACT",
    title: "girls reached",
    description: "Life-skills content reaching young women across Pakistan through mobile storytelling.",
    image: "/images/timeline/2017-b.png",
    stat: { value: "1M+", label: "Girls Reached" },
    highlight: true,
  },
  /* ── 2018 ── */
  {
    id: "misaali-maa-2018",
    year: 2018,
    layout: "image-text",
    category: "CAMPAIGN",
    title: "Misaali Maa - 11,000 Mothers' Voices",
    description:
      "The world's largest storytelling exercise captured the voices of 11,000 mothers. Their stories became the foundation for a nationwide maternal health campaign.",
    image: "/images/timeline/2018.png",
  },
  /* ── 2019 ── */
  {
    id: "clean-green-2019",
    year: 2019,
    layout: "hero-bg",
    category: "CAMPAIGN",
    title: "Clean & Green Punjab",
    subtitle: "30 Million+ Digital Reach",
    description:
      "The largest WASH behaviour change initiative in Pakistan's history. Five target behaviours, 36 districts, and a digital reach of over 30 million people.",
    image: "/images/timeline/2019.png",
    highlight: true,
  },
  /* ── 2020 ── */
  {
    id: "covid-2020",
    year: 2020,
    layout: "hero-bg",
    category: "CAMPAIGN",
    title: "COVID-19 National Response",
    subtitle: "50 Million+ People Reached",
    description:
      "When the pandemic struck, White Rice mobilized to deliver life-saving information across Pakistan. Behaviour change campaigns reached over 50 million people with safety and health messaging.",
    image: "/images/timeline/2020.png",
    highlight: true,
  },
  {
    id: "ehsaas-2020",
    year: 2020,
    layout: "text-image",
    category: "PARTNERSHIP",
    title: "Ehsaas Emergency Cash Program",
    description:
      "Supporting the government's largest emergency cash distribution. Communication design that helped 10.7 million families access critical financial support during the crisis.",
    image: "/images/timeline/2020-b.png",
  },
  {
    id: "reach-50m",
    year: 2020,
    layout: "big-number",
    category: "IMPACT",
    title: "people reached during COVID-19",
    description: "Life-saving behaviour change messaging at unprecedented national scale.",
    image: "/images/timeline/2020.png",
    stat: { value: "50M+", label: "People Reached" },
    highlight: true,
  },
  /* ── 2021 ── */
  {
    id: "vr-ai-2021",
    year: 2021,
    layout: "image-text",
    category: "INNOVATION",
    title: "VR & AI Initiatives",
    description:
      "Pakistan's first VR film series on water and sanitation, paired with AI-driven impact programs. Technology-powered behaviour change entered a new era.",
    image: "/images/timeline/2021.png",
  },
  /* ── 2022 ── */
  {
    id: "playlabs-2022",
    year: 2022,
    layout: "hero-bg",
    category: "PARTNERSHIP",
    title: "UNICEF Sindh Community PlayLabs",
    subtitle: "Early Childhood Development",
    description:
      "UNICEF-backed community play spaces promoting early childhood development and parenting engagement across Sindh. Behaviour change through play.",
    image: "/images/timeline/2022/playlabs-hero.jpg",
    highlight: true,
  },
  {
    id: "playlabs-session-2022",
    year: 2022,
    layout: "full-image",
    category: "IMPACT",
    title: "PlayLabs in Action",
    description:
      "Community sessions where mothers and children learn together through structured play, building cognitive and social skills from the earliest years.",
    image: "/images/timeline/2022/playlabs-session.jpg",
  },
  /* ── 2023 ── */
  {
    id: "parenting-2023",
    year: 2023,
    layout: "text-image",
    category: "PARTNERSHIP",
    title: "Parental Engagement for ECD",
    description:
      "A UNICEF behaviourally designed parenting program strengthening child stimulation and responsive caregiving. Shifting how families interact with their children.",
    image: "/images/timeline/2023/parenting-hero.jpg",
  },
  /* ── 2024 ── */
  {
    id: "food-safety-2024",
    year: 2024,
    layout: "hero-bg",
    category: "CAMPAIGN",
    title: "National Food Safety Campaign",
    subtitle: "ITC Nationwide Initiative",
    description:
      "A nationwide campaign helping food vendors adopt safer hygiene practices through visual nudges. Behavioural science applied to everyday commerce.",
    image: "/images/timeline/2024/food-safety-hero.jpg",
  },
  {
    id: "child-stim-2024",
    year: 2024,
    layout: "image-text",
    category: "PARTNERSHIP",
    title: "World Bank Child Stimulation Program",
    description:
      "A large-scale initiative improving early childhood stimulation through caregiver engagement. Behaviour change at the systems level.",
    image: "/images/timeline/2024/child-stim-hero.jpg",
  },
  /* ── 2025 ── */
  {
    id: "films-2025",
    year: 2025,
    layout: "hero-bg",
    category: "INNOVATION",
    title: "Films for Change",
    subtitle: "Storytelling as Systems Change",
    description:
      "A new storytelling platform using films and documentaries to drive behaviour change across climate, health, and gender. Twenty years of learning, distilled into moving images.",
    image: "/images/timeline/2025/films-hero.png",
    highlight: true,
  },
  /* ── 2026 ── */
  {
    id: "twenty-years",
    year: 2026,
    layout: "big-number",
    category: "MILESTONE",
    title: "years of changing behaviour",
    description: "From a studio in Islamabad to a force for social impact across continents. The journey continues.",
    image: "/images/timeline/2006-team.jpg",
    stat: { value: "20", label: "Years of Impact" },
    highlight: true,
  },
];

/* ── Legacy exports (used by JourneyHero) ── */
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

export const chapters: Chapter[] = [];

export const impactStats = [
  { value: "20", label: "Years" },
  { value: "100+", label: "Organizations" },
  { value: "500+", label: "Projects" },
  { value: "50M+", label: "Lives Impacted" },
];
