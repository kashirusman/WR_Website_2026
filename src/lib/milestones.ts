/* ── Timeline data: one entry per project/milestone ──────────────────
   2006–2021 sourced from whiterice15x.com/15-years-story/
   2022–2026 kept from existing site content
   Images for 2006–2021 live in /images/timeline/15x/YYYY/
   Images for 2022–2026 live in /images/timeline/YYYY/ or /images/timeline/
─────────────────────────────────────────────────────────────────── */

export type LayoutType =
  | "hero-bg"     // full-bleed background image with text overlay
  | "big-number"  // large stat/number display
  | "text-image"  // text left, image right
  | "image-text"  // image left, text right
  | "full-image"; // cinematic full-width image with caption

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
  imageAlt?: string;
  focalPoint?: "center" | "top" | "bottom" | "left" | "right";
  stat?: { value: string; label: string };
  quote?: { text: string; author: string };
  highlight?: boolean;
}

export const timelineEntries: TimelineEntry[] = [

  /* ════════════════════════════════════════════════════════════
     2006 — White Rice Founded
  ════════════════════════════════════════════════════════════ */
  {
    id: "wr-founded-2006",
    year: 2006,
    layout: "hero-bg",
    category: "MILESTONE",
    title: "White Rice Founded",
    subtitle: "A communications agency built to create change",
    description:
      "White Rice launched in Islamabad with a single conviction: that design, storytelling, and behavioural science could shift how people think, feel, and act at scale.",
    image: "/images/timeline/15x/2006/2006-team.jpg",
    imageAlt: "The founding White Rice team",
    highlight: true,
  },
  {
    id: "bhaid-2006",
    year: 2006,
    layout: "text-image",
    category: "INNOVATION",
    title: "BHAID — Life Skills for Teens",
    description:
      "Pakistan's first gamified interactive multimedia program and comic book for teenagers on life skills — distributed to over 100 schools nationwide. A bold experiment asking whether design could drive real social change.",
    image: "/images/timeline/15x/2006/2006-foto1.png",
    imageAlt: "BHAID gamified learning program",
    stat: { value: "100+", label: "Schools Reached" },
  },
  {
    id: "disaster-edu-2006",
    year: 2006,
    layout: "image-text",
    category: "PARTNERSHIP",
    title: "Disaster Education Program",
    description:
      "An animated video and visual book for JICA — a standardised tool for schools and government bodies on disaster risk reduction. White Rice's first international partnership.",
    image: "/images/timeline/15x/2006/2006-foto2.png",
    imageAlt: "Disaster Education Program materials",
  },

  /* ════════════════════════════════════════════════════════════
     2007 — Award-Winning Content
  ════════════════════════════════════════════════════════════ */
  {
    id: "give2pak-2007",
    year: 2007,
    layout: "text-image",
    category: "INNOVATION",
    title: "Give2Pakistan.org",
    description:
      "Pakistan's first online philanthropy portal — connecting donors with vetted NGOs through digital storytelling. A pioneering step in building a culture of online giving in Pakistan.",
    image: "/images/timeline/15x/2007/2007-foto1.png",
    imageAlt: "Give2Pakistan online philanthropy portal",
  },
  {
    id: "abdullahs-story-2007",
    year: 2007,
    layout: "image-text",
    category: "AWARD",
    title: "Abdullah's Story",
    description:
      "An award-winning animated short film addressing stigma around visual impairment and disabilities — one of Pakistan's earliest examples of using film as a behaviour change tool.",
    image: "/images/timeline/15x/2007/2007-foto2.png",
    imageAlt: "Abdullah's Story animated film",
    stat: { value: "🏆 Gold", label: "Chinh India Kids Film Festival 2009" },
    highlight: true,
  },

  /* ════════════════════════════════════════════════════════════
     2008 — Gamified Learning & International NGOs
  ════════════════════════════════════════════════════════════ */
  {
    id: "oxfam-livelihoods-2008",
    year: 2008,
    layout: "text-image",
    category: "PARTNERSHIP",
    title: "Oxfam Livelihoods Project",
    description:
      "White Rice's first international NGO collaboration — a documentary and communication series showcasing vulnerable communities confronting climate change and building livelihoods.",
    image: "/images/timeline/15x/2008/2008-foto1.png",
    imageAlt: "Oxfam livelihoods project communities",
  },
  {
    id: "aflatoun-2008",
    year: 2008,
    layout: "image-text",
    category: "INNOVATION",
    title: "Aflatoun — E-Learning for Street Kids",
    description:
      "An award-winning animated e-learning series for street children and teenagers in detention centres — teaching life and financial skills through engaging storytelling. Proved Pakistani creative talent could operate at a global standard.",
    image: "/images/timeline/15x/2008/2008-foto2.png",
    imageAlt: "Aflatoun e-learning animated series",
    stat: { value: "10,000+", label: "Teenagers Reached" },
    highlight: true,
  },

  /* ════════════════════════════════════════════════════════════
     2009 — Expansion & Recognition
  ════════════════════════════════════════════════════════════ */
  {
    id: "ceo-recognition-2009",
    year: 2009,
    layout: "text-image",
    category: "AWARD",
    title: "Asia's Top 100 Entrepreneurs Under 30",
    description:
      "White Rice CEO Raheel Waqar was selected by FYSE Paragon as one of Asia's top 100 entrepreneurs under 30 — putting White Rice on the regional map as a social innovation leader.",
    image: "/images/timeline/15x/2009/2009-foto2.png",
    imageAlt: "Raheel Waqar CEO recognition",
    highlight: true,
  },
  {
    id: "food-security-2009",
    year: 2009,
    layout: "image-text",
    category: "CAMPAIGN",
    title: "Food Security Campaign (Oxfam)",
    description:
      "A two-year Oxfam campaign supporting farmers' livelihoods and community collaboration on food security — combining field research, visual storytelling, and community mobilisation.",
    image: "/images/timeline/15x/2009/2009-foto3.png",
    imageAlt: "Oxfam food security campaign",
    stat: { value: "400+", label: "Schools Impacted" },
  },

  /* ════════════════════════════════════════════════════════════
     2010 — Community Movements Launched
  ════════════════════════════════════════════════════════════ */
  {
    id: "activism-2010",
    year: 2010,
    layout: "hero-bg",
    category: "CAMPAIGN",
    title: "16 Days of Activism",
    subtitle: "$1,000,000 Raised for Girls' Rights",
    description:
      "A nationwide campaign on girls' rights and violence against women and girls for Oxfam — which grew into a multi-year movement and raised over $1 million for Oxfam's four-year programme.",
    image: "/images/timeline/15x/2010/2010-foto1.png",
    imageAlt: "16 Days of Activism campaign",
    stat: { value: "$1,000,000", label: "Raised for Oxfam Campaign" },
    highlight: true,
  },
  {
    id: "dunia-larki-2010",
    year: 2010,
    layout: "text-image",
    category: "CAMPAIGN",
    title: "Dunya Aur Larki — The Girl vs World",
    description:
      "A campaign that led directly to Pakistan's first children's assembly on girls' access to education — amplifying young voices in national policy conversations.",
    image: "/images/timeline/15x/2010/2010-foto2.png",
    imageAlt: "Dunya Aur Larki campaign",
  },
  {
    id: "disaster-toolkit-2010",
    year: 2010,
    layout: "image-text",
    category: "INNOVATION",
    title: "Disaster Education Toolkit",
    description:
      "Interactive educational materials deployed to over 400 schools in AJK (Azad Jammu & Kashmir) regions — building resilience in communities most vulnerable to natural disasters.",
    image: "/images/timeline/15x/2010/2010-foto3.png",
    imageAlt: "Disaster Education Toolkit materials",
    stat: { value: "400+", label: "Schools in AJK" },
  },

  /* ════════════════════════════════════════════════════════════
     2011 — Behaviour Change & Movement Building
  ════════════════════════════════════════════════════════════ */
  {
    id: "we-can-2011",
    year: 2011,
    layout: "hero-bg",
    category: "CAMPAIGN",
    title: "We Can — 600,000 Changemakers",
    subtitle: "Pakistan's Largest VAWG Campaign",
    description:
      "A movement of 600,000 people united against violence against women and girls — one of Pakistan's largest citizen-driven advocacy campaigns, powered by community storytelling and grassroots mobilisation.",
    image: "/images/timeline/15x/2011/2011-foto1.png",
    imageAlt: "We Can campaign changemakers",
    stat: { value: "600,000", label: "Changemakers Mobilised" },
    highlight: true,
  },
  {
    id: "hiv-prevention-2011",
    year: 2011,
    layout: "text-image",
    category: "INNOVATION",
    title: "HIV Prevention Strategy",
    description:
      "A behaviour change communication strategy for injecting drug users — combining empathy-led design with evidence-based messaging to reduce transmission and reduce stigma.",
    image: "/images/timeline/15x/2011/2011-foto2.png",
    imageAlt: "HIV prevention behaviour change programme",
  },
  {
    id: "sightsavers-2011",
    year: 2011,
    layout: "image-text",
    category: "AWARD",
    title: "Sightsavers — Most Innovative Campaign",
    description:
      "A five-year awareness and advocacy campaign for the visually impaired and diabetic persons — recognised by Standard Chartered Bank Malaysia as the most innovative communication campaign of the year.",
    image: "/images/timeline/15x/2011/2011-foto3.png",
    imageAlt: "Sightsavers campaign visually impaired",
    stat: { value: "🏆 Award", label: "Most Innovative Campaign — Standard Chartered" },
  },

  /* ════════════════════════════════════════════════════════════
     2012 — Pakistan's Largest Educational Reforms
  ════════════════════════════════════════════════════════════ */
  {
    id: "alif-ailaan-2012",
    year: 2012,
    layout: "hero-bg",
    category: "CAMPAIGN",
    title: "Alif Ailaan",
    subtitle: "Pakistan's Largest Education Transformation",
    description:
      "A five-year campaign that directly engaged 12,000+ politicians and decision-makers on education reform — and helped bring 100,000 out-of-school children back into classrooms.",
    image: "/images/timeline/15x/2012/2012-foto1.png",
    imageAlt: "Alif Ailaan education campaign",
    stat: { value: "100,000", label: "Kids Re-enrolled in Schools" },
    highlight: true,
  },
  {
    id: "awaaz-2012",
    year: 2012,
    layout: "text-image",
    category: "PARTNERSHIP",
    title: "Awaaz — Citizen Accountability (DFID)",
    description:
      "A five-year DFID-funded programme on inclusiveness and citizen accountability — reaching 10 million citizens across 4,500 villages and transforming how communities engage with governance.",
    image: "/images/timeline/15x/2012/2012-logo.png",
    imageAlt: "Awaaz citizen accountability programme",
    stat: { value: "10,000,000", label: "Citizens Reached · 4,500 Villages" },
  },

  /* ════════════════════════════════════════════════════════════
     2013 — Design Thinking Integration
  ════════════════════════════════════════════════════════════ */
  {
    id: "hiv-trans-2013",
    year: 2013,
    layout: "text-image",
    category: "INNOVATION",
    title: "HIV/AIDS Behaviour Change — Transgender Community",
    description:
      "An animation series developed for transgender communities on HIV prevention — integrating Design Thinking and Human-Centered Design into White Rice's practice for the first time.",
    image: "/images/timeline/15x/2013/2013-foto1.png",
    imageAlt: "HIV AIDS behaviour change animation transgender",
  },
  {
    id: "aflatoun-award-2013",
    year: 2013,
    layout: "image-text",
    category: "AWARD",
    title: "Aflatoun Wins PASHA ICT Award",
    description:
      "The Aflatoun e-learning series — originally created in 2008 — received the PASHA ICT Award for best e-learning application, validating White Rice's model of education through storytelling.",
    image: "/images/timeline/15x/2013/2013-foto2.png",
    imageAlt: "PASHA ICT Award for Aflatoun e-learning",
    stat: { value: "🏆 Award", label: "PASHA ICT — Best E-Learning Application" },
    highlight: true,
  },
  {
    id: "relax-app-2013",
    year: 2013,
    layout: "text-image",
    category: "INNOVATION",
    title: "Relax — Pakistan's First Teen Mental Health App",
    description:
      "Pakistan's first online self-help app for teenage stress and mental health — reaching 10,000 teenagers and opening a new chapter in digital behaviour change.",
    image: "/images/timeline/15x/2013/2013-foto3.png",
    imageAlt: "Relax mental health app for teenagers",
    stat: { value: "10,000", label: "Teenagers Impacted" },
  },

  /* ════════════════════════════════════════════════════════════
     2014 — Active Citizenship & Training
  ════════════════════════════════════════════════════════════ */
  {
    id: "everyone-2014",
    year: 2014,
    layout: "image-text",
    category: "CAMPAIGN",
    title: "Everyone Campaign (Save the Children)",
    description:
      "A national media campaign for Save the Children focused on infant mortality and newborn deaths — using emotional storytelling to shift public attention toward Pakistan's most vulnerable children.",
    image: "/images/timeline/15x/2014/2014-foto1.png",
    imageAlt: "Everyone Campaign Save the Children",
  },
  {
    id: "awaaz-reporter-2014",
    year: 2014,
    layout: "text-image",
    category: "CAMPAIGN",
    title: "Awaaz I-Reporter Series",
    description:
      "A TV series designed to encourage active citizenship through issue documentation — training community members to become reporters of the problems affecting their own lives.",
    image: "/images/timeline/15x/2014/2014-foto2.png",
    imageAlt: "Awaaz I-Reporter TV series",
    stat: { value: "1,200", label: "Community Trainers Supported" },
  },

  /* ════════════════════════════════════════════════════════════
     2015 — Research & Awards
  ════════════════════════════════════════════════════════════ */
  {
    id: "aus-award-2015",
    year: 2015,
    layout: "hero-bg",
    category: "AWARD",
    title: "Australian High Commission Award",
    subtitle: "Business Leadership Excellence",
    description:
      "International recognition for White Rice's contribution to social impact through design. The world started paying attention to what was happening in a studio in Islamabad.",
    image: "/images/timeline/15x/2015/2015-ausAward.png",
    imageAlt: "Australian High Commission Business Leadership Award",
    highlight: true,
  },
  {
    id: "british-council-2015",
    year: 2015,
    layout: "text-image",
    category: "PARTNERSHIP",
    title: "British Council Communication Pack",
    description:
      "A policy communication pack for the British Council highlighting key government policies and their social impact — translating complex governance into accessible public narrative.",
    image: "/images/timeline/15x/2015/2015-icon-book.png",
    imageAlt: "British Council communication pack",
  },
  {
    id: "usip-peace-2015",
    year: 2015,
    layout: "image-text",
    category: "INNOVATION",
    title: "USIP Peace Toolkit",
    description:
      "Action research engaging children and mothers on social conflict dynamics — producing a peace-building toolkit grounded in community voices and Human-Centered Design.",
    image: "/images/timeline/15x/2015/2015-foto1.png",
    imageAlt: "USIP Peace Toolkit community engagement",
  },

  /* ════════════════════════════════════════════════════════════
     2016 — Human-Centered Design at Scale
  ════════════════════════════════════════════════════════════ */
  {
    id: "polio-2016",
    year: 2016,
    layout: "hero-bg",
    category: "CAMPAIGN",
    title: "Polio Frontline Workers Campaign",
    subtitle: "27,000+ Health Workers Trained",
    description:
      "An animation series and training videos for frontline health workers addressing community resistance to polio vaccination — behavioural science applied to one of Pakistan's most critical public health challenges.",
    image: "/images/timeline/15x/2016/2016-foto1.png",
    imageAlt: "Polio frontline worker training campaign",
    stat: { value: "27,000+", label: "People Trained" },
    highlight: true,
  },
  {
    id: "wateraid-2016",
    year: 2016,
    layout: "text-image",
    category: "PARTNERSHIP",
    title: "WaterAid WASH Campaign",
    description:
      "A five-year behaviour change strategy for WaterAid Pakistan — laying the strategic foundation that would eventually grow into the Clean & Green Pakistan national initiative.",
    image: "/images/timeline/15x/2016/2016-foto2.png",
    imageAlt: "WaterAid WASH behaviour change campaign",
  },
  {
    id: "ikea-oxfam-2016",
    year: 2016,
    layout: "image-text",
    category: "INNOVATION",
    title: "IKEA Foundation / Oxfam HCD Project",
    description:
      "Pakistan's first extensive Human-Centered Design-enabled impact project — design consulting for young farmers and entrepreneurs, reaching 10,000 youth across rural communities.",
    image: "/images/timeline/15x/2016/2016-foto3.png",
    imageAlt: "IKEA Oxfam HCD youth farmers project",
    stat: { value: "10,000", label: "Youth Reached" },
  },

  /* ════════════════════════════════════════════════════════════
     2017 — Behavioural Science & Design Thinking Focus
  ════════════════════════════════════════════════════════════ */
  {
    id: "girl-effect-2017",
    year: 2017,
    layout: "hero-bg",
    category: "PARTNERSHIP",
    title: "The Girl Effect Mobile",
    subtitle: "Nike Foundation · 1 Million Girls",
    description:
      "In partnership with Nike Foundation's Girl Effect, over 100 life-skills stories were delivered through mobile — accessed by more than 1 million girls across Pakistan. Storytelling as empowerment.",
    image: "/images/timeline/15x/2017/2017-foto1.png",
    imageAlt: "Girl Effect mobile life skills stories",
    stat: { value: "1,000,000", label: "Girls Reached in Pakistan" },
    highlight: true,
  },
  {
    id: "unicef-stunting-2017",
    year: 2017,
    layout: "text-image",
    category: "PARTNERSHIP",
    title: "UNICEF Child Stunting Programme",
    description:
      "A two-year behaviour change programme in Sindh targeting child stunting — reaching 100,000 mothers with evidence-based nutrition and caregiving messaging through community storytelling.",
    image: "/images/timeline/15x/2017/2017-foto2.png",
    imageAlt: "UNICEF child stunting prevention Sindh",
    stat: { value: "100,000", label: "Mothers Reached" },
  },

  /* ════════════════════════════════════════════════════════════
     2018 — World's Largest Storytelling Exercise
  ════════════════════════════════════════════════════════════ */
  {
    id: "storytelling-2018",
    year: 2018,
    layout: "hero-bg",
    category: "INNOVATION",
    title: "World's Largest Storytelling Exercise",
    subtitle: "11,000 Mothers' Voices Captured",
    description:
      "White Rice conducted what became the world's largest storytelling exercise with mothers — 11,000 voices shaping a national maternal health campaign from the ground up. Community as the author.",
    image: "/images/timeline/15x/2018/2018-foto1.png",
    imageAlt: "Storytelling exercise with mothers",
    stat: { value: "11,000", label: "Mothers' Voices" },
    highlight: true,
  },
  {
    id: "spring-2018",
    year: 2018,
    layout: "text-image",
    category: "PARTNERSHIP",
    title: "USAID SPRING Accelerator",
    description:
      "A four-country Human-Centered Design research programme for adolescent girls' nutrition products — White Rice's first multi-country HCD engagement with USAID.",
    image: "/images/timeline/15x/2018/2018-foto3.png",
    imageAlt: "USAID SPRING adolescent girls nutrition",
  },
  {
    id: "unicef-immun-2018",
    year: 2018,
    layout: "image-text",
    category: "PARTNERSHIP",
    title: "UNICEF Immunisation Initiative",
    description:
      "Animated and interactive content developed for over 250,000 frontline health workers globally — building their confidence and competence to address vaccine hesitancy in communities.",
    image: "/images/timeline/15x/2018/2018-foto4.png",
    imageAlt: "UNICEF immunisation frontline workers",
    stat: { value: "250,000+", label: "Frontline Workers Empowered" },
  },

  /* ════════════════════════════════════════════════════════════
     2019 — Design Sprints & Large-Scale Campaigns
  ════════════════════════════════════════════════════════════ */
  {
    id: "clean-green-2019",
    year: 2019,
    layout: "hero-bg",
    category: "CAMPAIGN",
    title: "Clean & Green Punjab",
    subtitle: "Punjab's Largest WASH Campaign · 30M+ Reached",
    description:
      "The largest WASH behaviour change initiative in Pakistan's history — five target behaviours, 36 districts, 2 million people reached directly, and over 30 million on digital media.",
    image: "/images/timeline/15x/2019/2019-foto1.png",
    imageAlt: "Clean and Green Punjab WASH campaign",
    stat: { value: "30M+", label: "Digital Reach" },
    highlight: true,
  },
  {
    id: "bharosa-2019",
    year: 2019,
    layout: "text-image",
    category: "CAMPAIGN",
    title: "Bharosa Karain (ICRC)",
    description:
      "A behaviour change campaign for ICRC reducing violence against healthcare staff — part of a global initiative to protect medical personnel and restore trust in health systems.",
    image: "/images/timeline/15x/2019/2019-foto2.png",
    imageAlt: "Bharosa Karain ICRC healthcare workers",
  },
  {
    id: "inclusive-hiring-2019",
    year: 2019,
    layout: "image-text",
    category: "INNOVATION",
    title: "Inclusive Hiring Design Sprint",
    description:
      "A design sprint reimagining private sector hiring practices — followed by the Grassroots Innovators programme connecting local entrepreneurs with new economic opportunities.",
    image: "/images/timeline/15x/2019/2019-foto3.png",
    imageAlt: "Inclusive hiring design sprint",
  },

  /* ════════════════════════════════════════════════════════════
     2020 — COVID-19 Response
  ════════════════════════════════════════════════════════════ */
  {
    id: "covid-2020",
    year: 2020,
    layout: "hero-bg",
    category: "CAMPAIGN",
    title: "COVID-19 National Response",
    subtitle: "50 Million+ People Reached",
    description:
      "When the pandemic struck, White Rice mobilised immediately — delivering life-saving behaviour change campaigns on safety, WASH, health, and nutrition that reached over 50 million people across Pakistan.",
    image: "/images/timeline/15x/2020/2020-foto1.png",
    imageAlt: "COVID-19 national response campaign",
    stat: { value: "50M+", label: "People Reached" },
    highlight: true,
  },
  {
    id: "ehsaas-2020",
    year: 2020,
    layout: "text-image",
    category: "PARTNERSHIP",
    title: "Ehsaas Emergency Cash Programme",
    description:
      "Supporting the government's largest emergency cash distribution using digital platforms — communication design that helped 10.7 million families access critical financial support during the crisis.",
    image: "/images/timeline/15x/2020/2020-foto2.png",
    imageAlt: "Ehsaas cash programme communication",
    stat: { value: "10,700,000", label: "People Reached" },
  },

  /* ════════════════════════════════════════════════════════════
     2021 — VR / AR & AI-Driven Innovation
  ════════════════════════════════════════════════════════════ */
  {
    id: "glof-2021",
    year: 2021,
    layout: "text-image",
    category: "CAMPAIGN",
    title: "UNDP — Glacier Lake Outburst Floods",
    description:
      "A behaviour-driven prevention and protection campaign for UNDP in Northern Pakistan — helping communities understand and respond to the growing threat of glacial lake outburst floods.",
    image: "/images/timeline/15x/2021/2021-foto1.png",
    imageAlt: "UNDP GLOF glacier lake campaign Northern Pakistan",
  },
  {
    id: "vr-films-2021",
    year: 2021,
    layout: "image-text",
    category: "INNOVATION",
    title: "Pakistan's First VR Film Series",
    description:
      "A pioneering VR film series highlighting water and sanitation challenges across Pakistan — combining immersive storytelling with AI-driven impact to open a new frontier in behaviour change.",
    image: "/images/timeline/15x/2021/2021-foto2.png",
    imageAlt: "VR film series water sanitation Pakistan",
    highlight: true,
  },

  /* ════════════════════════════════════════════════════════════
     2022 — UNICEF PlayLabs
  ════════════════════════════════════════════════════════════ */
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
    imageAlt: "UNICEF PlayLabs community play spaces",
    highlight: true,
  },
  {
    id: "playlabs-session-2022",
    year: 2022,
    layout: "text-image",
    category: "IMPACT",
    title: "PlayLabs in Action",
    description:
      "Community sessions where mothers and children learn together through structured play, building cognitive and social skills from the earliest years.",
    image: "/images/timeline/2022/playlabs-session.jpg",
    imageAlt: "PlayLab session with mothers and children",
  },

  /* ════════════════════════════════════════════════════════════
     2023 — Parental Engagement
  ════════════════════════════════════════════════════════════ */
  {
    id: "parenting-2023",
    year: 2023,
    layout: "text-image",
    category: "PARTNERSHIP",
    title: "Parental Engagement for ECD",
    description:
      "A UNICEF behaviourally designed parenting programme strengthening child stimulation and responsive caregiving. Shifting how families interact with their children.",
    image: "/images/timeline/2023/parenting-hero.png",
    imageAlt: "Parental engagement early childhood programme",
  },

  /* ════════════════════════════════════════════════════════════
     2024 — Food Safety & World Bank
  ════════════════════════════════════════════════════════════ */
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
    imageAlt: "National food safety campaign",
  },
  {
    id: "child-stim-2024",
    year: 2024,
    layout: "image-text",
    category: "PARTNERSHIP",
    title: "World Bank Child Stimulation Programme",
    description:
      "A large-scale initiative improving early childhood stimulation through caregiver engagement. Behaviour change at the systems level.",
    image: "/images/timeline/2024/child-stim-hero.jpg",
    imageAlt: "World Bank child stimulation programme",
  },

  /* ════════════════════════════════════════════════════════════
     2025 — Films for Change
  ════════════════════════════════════════════════════════════ */
  {
    id: "films-2025",
    year: 2025,
    layout: "hero-bg",
    category: "INNOVATION",
    title: "Films for Change",
    subtitle: "Storytelling as Systems Change",
    description:
      "A new storytelling platform using films and documentaries to drive behaviour change across climate, health, and gender. Twenty years of learning, distilled into moving images.",
    image: "/images/timeline/2025/films-hero.jpg",
    imageAlt: "Films for change documentary storytelling",
    highlight: true,
  },

  /* ════════════════════════════════════════════════════════════
     2026 — 20 Years
  ════════════════════════════════════════════════════════════ */
  {
    id: "twenty-years",
    year: 2026,
    layout: "big-number",
    category: "MILESTONE",
    title: "years of changing behaviour",
    description:
      "From a studio in Islamabad to a force for social impact across continents. The journey continues.",
    image: "/images/timeline/15x/2006/2006-team.jpg",
    imageAlt: "White Rice 20 years",
    stat: { value: "20", label: "Years of Impact" },
    highlight: true,
  },
];

/* ── Legacy exports (used by JourneyHero trail images) ── */
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
  { value: "20",   label: "Years" },
  { value: "100+", label: "Organisations" },
  { value: "500+", label: "Projects" },
  { value: "50M+", label: "Lives Impacted" },
];
