/* ─── Case Study Data ─────────────────────────────────────────────── */

export interface ImpactMetric {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
}

export interface StrategyStep {
  number: string;
  title: string;
  description: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  span?: "wide" | "tall" | "normal";
}

export interface CaseStudyTheme {
  primary: string;
  primaryLight: string;
  accent: string;
  accentLight: string;
}

export interface HeroData {
  eyebrow: string;
  title: string;
  subtitle?: string;
  description: string;
  meta: { label: string; value: string }[];
}

export interface OutcomeCard {
  stat: string;
  description: string;
}

export interface ImpactCell {
  big: string;
  desc: string;
}

export interface CaseStudyData {
  slug: string;
  year: string;
  tags: string[];

  /* V2 fields (new design) */
  theme?: CaseStudyTheme;
  hero?: HeroData;
  heroImage?: string;
  heroVideo?: string;
  role?: {
    heading: string;
    body: string;
    services: string[];
  };
  outcomes?: {
    cards: OutcomeCard[];
    watermark?: string;
  };
  closing?: {
    heading: string;
    body: string;
  };
  impactCells?: ImpactCell[];

  /* Custom band sections (case-study-specific) */
  divider?: {
    stat: string;
    text: string;
  };
  cocreation?: {
    eyebrow: string;
    heading: string;
    workshopSteps: { num: string; name: string; body: string }[];
    provinceCards: { name: string; city: string; stat: string; breakdown: string }[];
  };
  reframe?: {
    eyebrow: string;
    challenge: string;
    note: string;
  };
  touchpoints?: {
    eyebrow: string;
    heading: string;
    cards: { num: string; title: string; body: string; scale: string; color: string }[];
  };
  verbatims?: {
    eyebrow: string;
    heading: string;
    cards: { quote: string; source: string }[];
  };
  reach?: {
    eyebrow: string;
    heading: string;
    numbers: { label: string; big: string; sub: string }[];
    platforms?: { name: string; reach: string; impressions: string }[];
  };
  episodes?: {
    eyebrow: string;
    heading: string;
    cards: { num: string; tag: string; name: string; description: string }[];
    note?: string;
  };
  designProcess?: {
    heading: string;
    paragraphs: string[];
    items: { label: string; body: string }[];
  };
  behaviours?: {
    label: string;
    items: { num: string; name: string; sub: string; icon?: string }[];
  };
  theoryOfChange?: {
    label: string;
    steps: { num: string; title: string; body: string }[];
  };
  covidPivot?: {
    label: string;
    heading: string;
    paragraphs: string[];
    tags: string[];
  };
  persona?: {
    label: string;
    name: string;
    body: string;
  };
  communities?: {
    label: string;
    watermark?: string;
    cards: { name: string; region: string; description: string; challenge: string }[];
  };
  programme?: {
    eyebrow: string;
    heading: string;
    cards: { badge: string; title: string; body: string }[];
  };
  garden?: {
    eyebrow: string;
    heading: string;
    stat?: string;
    paragraphs: string[];
  };
  journey?: {
    label: string;
    steps: { phase: string; title: string; body: string }[];
  };
  audiences?: {
    label: string;
    cards: { role: string; name: string; tag: string; body: string; incentive: string; color?: string }[];
  };
  kab?: {
    eyebrow: string;
    heading: string;
    cards: { stage: string; name: string; channel: string; items: string[] }[];
  };
  hypothesis?: {
    eyebrow: string;
    heading: string;
    rows: { expected: string; reality: string }[];
  };
  cocreationMethods?: {
    eyebrow: string;
    heading: string;
    intro?: string;
    cards: { title: string; body: string }[];
  };
  topics?: {
    eyebrow: string;
    heading: string;
    cards: { num: string; name: string; body: string; count: string; color?: string }[];
  };
  platform?: {
    eyebrow: string;
    heading: string;
    watermark?: string;
    paragraphs: string[];
    features: { bold: string; text: string }[];
  };
  diversity?: {
    eyebrow: string;
    heading: string;
    cards: { label: string; title: string; body: string }[];
  };
  sbc?: {
    eyebrow: string;
    heading: string;
    cards: { title: string; body: string }[];
    quote?: { text: string; attribution?: string };
  };
  scaleBand?: {
    heading: string;
    paragraphs: string[];
    items: { title: string; body: string }[];
  };
  phases?: { num: string; title: string; body: string }[];
  sessionRhythm?: { time: string; title: string; body: string }[];
  featuresGrid?: { num: string; title: string; body: string }[];
  featuresGridIntro?: string;
  stories?: { initial: string; name: string; text: string; quote: string }[];
  storiesIntro?: string;

  /* ICRC Barosakare custom bands */
  twoSides?: {
    left: { label: string; heading: string; body: string };
    right: { label: string; heading: string; body: string };
  };
  hcdResearch?: {
    eyebrow: string;
    heading: string;
    hospitals: { city: string; abbrev: string; fullName: string; scale: string }[];
    methods: { name: string; body: string }[];
  };
  patientBand?: {
    eyebrow: string;
    headline: string;
    body: string;
  };
  strategyProngs?: {
    eyebrow: string;
    heading: string;
    prongs: { num: string; label: string; title: string; body: string; points: string[] }[];
  };
  tvAd?: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
    arcSteps: { label: string; text: string; color: "steel" | "red" | "amber" }[];
  };
  campaignChannels?: {
    eyebrow: string;
    heading: string;
    channels: { name: string; body: string }[];
  };

  /* Johns Hopkins CCP custom bands */
  regions?: {
    eyebrow: string;
    heading: string;
    cards: { name: string; sub: string; body: string; color: string }[];
  };
  designChallenge?: {
    eyebrow: string;
    headline: string;
    body: string;
    pillars: { title: string; body: string }[];
  };
  series?: {
    eyebrow: string;
    heading: string;
    cards: { num: string; title: string; scenario: string; body: string }[];
  };
  languages?: {
    eyebrow: string;
    heading: string;
    bigText: string;
    cards: { flag: string; name: string; body: string }[];
  };
  distribution?: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
    features: { label: string; value: string }[];
  };

  /* Spring Accelerator custom bands */
  fourCountries?: {
    label: string;
    cards: { flag: string; name: string; role: string; highlighted?: boolean }[];
  };
  hcdProcess?: {
    eyebrow: string;
    heading: string;
    steps: { num: string; title: string; body: string }[];
  };
  startups?: {
    eyebrow: string;
    heading: string;
    cards: { sector: string; name: string; body: string; tags: string[] }[];
    note?: string;
  };
  nepalExchange?: {
    eyebrow: string;
    heading: string;
    stat: string;
    body: string;
    phases: { num: string; text: string }[];
  };

  /* Oxfam IKEA HCD custom bands */
  timeline?: {
    eyebrow: string;
    heading: string;
    items: { phase: string; title: string; body: string }[];
  };
  designCycle?: {
    eyebrow: string;
    heading: string;
    cards: { name: string; body: string }[];
    note?: string;
  };
  innovationHubs?: {
    eyebrow: string;
    heading: string;
    intro: string;
    hubs: { province: string; name: string; desc: string; context: string }[];
    pathwaysHeading: string;
    pathways: { label: string; title: string; body: string }[];
  };
  methodologyDiff?: {
    eyebrow: string;
    heading: string;
    intro: string;
    rows: { conventional: string; oxfam: string }[];
  };

  /* Dunia Aali Larki custom bands */
  sparkMovement?: {
    eyebrow: string;
    heading: string;
    steps: { badge: string; title: string; body: string }[];
  };
  semTiers?: {
    eyebrow: string;
    heading: string;
    tiers: { level: string; label: string; name: string; activities: string[] }[];
  };
  assembly?: {
    eyebrow: string;
    heading: string;
    stat: string;
    paragraphs: string[];
    features: { bold: string; text: string }[];
  };
  targetAudiences?: {
    eyebrow: string;
    heading: string;
    cards: { title: string; body: string }[];
  };

  /* SBC Cricket bands */
  cricketProblem?: {
    eyebrow: string;
    headline: string;
    body: string;
  };
  cricketName?: {
    eyebrow: string;
    heading: string;
    sub: string;
    letters: { urdu: string; roman: string; word: string; meaning: string }[];
  };
  cricketSteps?: {
    eyebrow: string;
    heading: string;
    steps: { bg: string; step: string; letter: string; urdu: string; word: string; translation: string; body: string; promptLabel: string; promptText: string }[];
  };
  cricketCards?: {
    eyebrow: string;
    heading: string;
    body: string;
    cardCount: number;
    categories: { label: string; title: string; body: string }[];
  };
  cricketChannels?: {
    eyebrow: string;
    heading: string;
    channels: { title: string; body: string }[];
  };
  cricketCascade?: {
    eyebrow: string;
    heading: string;
    steps: { num: string; title: string; body: string }[];
  };

  /* Saaf Karachi bands */
  saafChain?: {
    label: string;
    steps: { title: string; body: string; color: string }[];
  };
  saafHousehold?: {
    eyebrow: string;
    heading: string;
    intro: string;
    tools: { title: string; body: string }[];
  };
  saafIncentive?: {
    eyebrow: string;
    heading: string;
    cards: { who: string; name: string; desc: string }[];
  };
  saafMediaChannels?: {
    eyebrow: string;
    heading: string;
    categories: { cat: string; items: string[] }[];
  };

  /* Mumkin / CARE Mastercard bands */
  mumkinEcosystem?: {
    eyebrow: string;
    heading: string;
    partners: { role: string; name: string; body: string }[];
    wrRole: { label: string; name: string; body: string };
  };
  mumkinBrand?: {
    urdu: string;
    name: string;
    translation: string;
    body: string;
  };
  mumkinHcd?: {
    eyebrow: string;
    heading: string;
    steps: { phase: string; title: string; body: string }[];
    insights: { num: string; title: string; body: string }[];
  };
  mumkinProfiles?: {
    eyebrow: string;
    heading: string;
    profiles: { archetype: string; title: string; body: string; barrier: string }[];
  };
  mumkinOffer?: {
    eyebrow: string;
    heading: string;
    cards: { label: string; title: string; body: string }[];
  };
  mumkinDigital?: {
    eyebrow: string;
    heading: string;
    body: string;
    body2: string;
    assets: { label: string; value: string }[];
  };

  /* Photo bands, inline image breaks between text sections */
  photoBand1?: { src: string; alt: string; fit?: "cover" | "contain" }[];  // after Outcomes
  photoBand2?: { src: string; alt: string; fit?: "cover" | "contain" }[];  // after Challenge
  photoBand3?: { src: string; alt: string; fit?: "cover" | "contain" }[];  // after Strategy
  photoBand4?: { src: string; alt: string; fit?: "cover" | "contain" }[];  // after Work

  /* Film poster band, for award-winning films (e.g. Sightsavers Noor) */
  filmPoster?: {
    image: string;
    title: string;
    titleUrdu?: string;
    tagline?: string;
    award: string;
    awardBody: string;
    awardCategory: string;
    platform: string;
    cast: string;
    director: string;
    producer?: string;
    watchUrl?: string;
  };

  /* Existing fields */
  challenge: {
    heading: string;
    body: string;
    quote?: {
      text: string;
      attribution?: string;
    };
  };

  strategy: {
    heading: string;
    intro: string;
    steps: StrategyStep[];
  };

  work: {
    heading: string;
    body: string;
    deliverables: string[];
    quote?: string;
    downloadLink?: {
      label: string;
      url: string;
    };
  };

  impact: {
    heading: string;
    body?: string;
    metrics: ImpactMetric[];
    quote?: {
      text: string;
      attribution: string;
    };
    closingNote?: string;
  };

  gallery: {
    heading: string;
    images: GalleryImage[];
  };

  video?: {
    heading: string;
    src: string;
    caption?: string;
  };
}

/* ─── All 20 Case Studies ────────────────────────────────────────── */

export const caseStudies: CaseStudyData[] = [
  /* 1 ─ Misali Ma / UNICEF Stunting Prevention */
  {
    slug: "misali-ma-storycircle",
    year: "2014",
    tags: ["Stunting Prevention", "Social Behaviour Change", "Nutrition", "WASH", "Community Mobilization", "Positive Deviance", "MSC Evaluation", "UNICEF", "SDG 2", "SDG 3", "Pakistan"],

    /* ── V2 Theme (moss / clay from HTML) ── */
    theme: {
      primary: "#3D5A4C",
      primaryLight: "#C4602A",
      accent: "#C4602A",
      accentLight: "#E8845A",
    },

    /* ── Hero ── */
    hero: {
      eyebrow: "UNICEF Pakistan \u00b7 Sindh \u00b7 2014",
      title: "Nurturing <em>Change</em>",
      subtitle: "Child Stunting Prevention \u00b7 Sindh, Pakistan",
      description: "A community-driven behaviour change programme that shifted nutrition and WASH practices among 100,000 mothers, and kept those behaviours alive long after the intervention ended.",
      meta: [
        { label: "Client", value: "UNICEF Pakistan" },
        { label: "Location", value: "Khairpur \u00b7 Sharafabad \u00b7 Naushahro Feroze" },
        { label: "Focus", value: "Nutrition, WASH & Stunting Prevention" },
        { label: "White Rice Role", value: "SBC Design & Implementation Lead" },
      ],
    },

    /* ── Role Band ── */
    role: {
      heading: "SBC Design & <em>Implementation Lead</em>",
      body: "White Rice led the full programme cycle: formative research, SBC strategy, the design of the Kahani Asani Adehani behaviour change model, frontline worker training, community activation, real-time monitoring, and evaluation. We didn\u2019t deliver a campaign. We designed a behaviour change system.",
      services: ["Formative & Design Research", "SBC Strategy", "Behaviour Change Model Design", "FLW Training", "Community Activation", "Real-Time Monitoring", "MSC Evaluation"],
    },

    /* ── Outcomes ── */
    outcomes: {
      cards: [
        { stat: "90%", description: "Behaviour adoption rate. Mothers still practising at least one key behaviour 8 months after the intervention ended." },
        { stat: "26,000", description: "Mothers directly reached across three districts of Sindh." },
        { stat: "100,000+", description: "Total community members influenced, including mothers-in-law, husbands, and extended family networks." },
        { stat: "2,000+", description: "Frontline workers trained on the Kahani Asani Adehani model." },
        { stat: "Govt. Adopted", description: "The Sindh government adopted the programme model into their provincial stunting strategy and scaled it further." },
      ],
      watermark: "STUNTING",
    },

    /* ── Divider ── */
    divider: {
      stat: "~50%",
      text: "Child stunting rate in Sindh at the time of the programme, one of the highest in the world. The national figure stood at 42%. These weren\u2019t statistics about distant children. They were the children of the 26,000 mothers this programme set out to reach.",
    },

    /* ── Theory of Change Band ── */
    theoryOfChange: {
      label: "Theory of Change \u00b7 Socio-Ecological Model",
      steps: [
        { num: "01", title: "Individual", body: "Build knowledge, motivation, and self-efficacy around nutrition and WASH behaviours" },
        { num: "02", title: "Household", body: "Bring mothers-in-law and husbands in as active enablers of behaviour change, not barriers to it" },
        { num: "03", title: "Community", body: "Normalise positive behaviours through peer modelling, nudges, and positive deviance" },
        { num: "04", title: "Institutions", body: "Generate evidence and adopt the model at government level for sustainable scale" },
      ],
    },

    /* ── Closing ── */
    closing: {
      heading: "Change that endures isn\u2019t delivered.<br>It\u2019s <em>designed</em>.",
      body: "Nurturing Change showed that when you design for the whole household, and build the right conditions around people, change takes root and stays.",
    },

    /* ── Impact Cells ── */
    impactCells: [
      { big: "90%", desc: "Of mothers still actively practising at least one target behaviour 8 months after the programme ended, with no active support in place." },
      { big: "4,500+", desc: "Most Significant Change stories collected. Ten were selected by mothers themselves, filmed, and used as positive deviance content to inspire further change." },
      { big: "11,000", desc: "Mothers engaged in story circles at follow-up. The largest participatory qualitative evaluation of its kind in Pakistan at that time." },
      { big: "Sindh Gov.", desc: "The Kahani Asani Adehani model was formally adopted by the Sindh government into their provincial stunting strategy and scaled across additional districts." },
    ],

    photoBand1: [
      { src: "/images/unicef-misaali-maa/_MG_8381.jpg", alt: "Frontline worker demonstrating nutrition practices to mothers in a village courtyard" },
      { src: "/images/unicef-misaali-maa/thumb_IMG_8058_1024.jpg", alt: "Mother-in-law and daughter-in-law together at a community health session" },
    ],
    photoBand2: [
      { src: "/images/unicef-misaali-maa/_MG_8820.jpg", alt: "Children playing outside during a Misaali Maa community gathering in rural Sindh" },
      { src: "/images/unicef-misaali-maa/IMG_6034.JPG", alt: "Close-up of programme materials used during a story circle session" },
      { src: "/images/unicef-misaali-maa/_MG_9025-copy.jpg", alt: "Mothers listening during a group behaviour change session" },
    ],
    photoBand3: [
      { src: "/images/unicef-misaali-maa/thumb_IMG_8135_1024.jpg", alt: "Candid moment of a mother and child during a household visit in Sindh" },
      { src: "/images/unicef-misaali-maa/_MG_8698.jpg", alt: "Frontline health workers reviewing session plans before a community visit" },
    ],
    photoBand4: [
      { src: "/images/unicef-misaali-maa/20180125_133005.jpg", alt: "Women gathered for a stunting prevention awareness session in Khairpur district" },
      { src: "/images/unicef-misaali-maa/_MG_8394.jpg", alt: "Portrait of a frontline worker from the Nurturing Change programme" },
      { src: "/images/unicef-misaali-maa/thumb_IMG_8444_1024.jpg", alt: "Mothers practising infant feeding techniques during a group demonstration" },
    ],
    challenge: {
      heading: "The <em>Challenge</em>",
      body: "Child stunting in Sindh had been chronic for generations. The behaviours driving it were well-documented: inadequate infant feeding, poor WASH practices, delayed healthcare. But the problem wasn\u2019t information. Mothers knew the nutrition guidance. They were operating within household systems that stopped them from acting on it.\n\nMothers-in-law made feeding decisions. Husbands controlled household resources. Standard awareness campaigns had already failed. The programme needed to design for the full ecosystem of influence around the mother, not just the mother herself.",
      quote: {
        text: "Stunting is not just a nutrition problem. It\u2019s a behaviour problem, rooted in social norms, household power dynamics, and the absence of conditions that make change possible.",
      },
    },
    strategy: {
      heading: "The <em>Strategy</em>",
      intro: "The programme began with a deep investment in formative and design research, mapping the behavioural landscape across all three districts before a single session was designed. The focus: not just what behaviours needed to change, but who influenced them and where change was actually possible.",
      steps: [
        { number: "01", title: "Design for the Ecosystem, Not Just the Individual", description: "Target the mother-in-law and husband alongside the mother. Without their buy-in, individual behaviour change collapses at the household door." },
        { number: "02", title: "Make Change Feel Normal and Achievable", description: "Social norming, positive deviance, and demonstration-based learning instead of lectures. People adopt behaviours they see modelled by people like them." },
        { number: "03", title: "Build a System, Not a Campaign", description: "Trained frontline workers, household visits, community nudges, and peer reinforcement. Structured support that outlasts any single intervention event." },
      ],
    },
    work: {
      heading: "The <em>Intervention</em>",
      body: "At the heart of the programme was Kahani Asani Adehani \u2014 \u201cStory, Ease, Habit\u201d \u2014 a behaviour change model White Rice developed by contextualising international SBC frameworks (BGFOG, BMAP) for rural Sindh. It worked on three levers: making new behaviours emotionally compelling through narrative, removing barriers through ease, and locking in practice through habit reinforcement.\n\nGroup sessions brought mothers and mothers-in-law into the same room. That was a deliberate choice: shared understanding instead of splitting the intervention by generation. Household visits by trained frontline workers addressed barriers where they actually lived, in the home, in real time, without the distance of a clinic or a community hall.\n\nThroughout the 12-week pilot, White Rice ran a real-time monitoring system that surfaced implementation challenges as they emerged. Not in a retrospective report. In the field, allowing continuous course-correction and quality improvement.",
      deliverables: [
        "Group Sessions (Mothers & Mothers-in-Law)",
        "Household Visits by FLWs",
        "Emotional Demonstrations (Emo-Demos)",
        "Community-Based Nudges",
        "Positive Deviance Identification",
        "2,000+ FLW Training Programme",
        "Real-Time Monitoring",
        "12-Week Pilot Rollout",
      ],
      quote: "We didn\u2019t tell mothers what to do. We created the conditions in which doing it felt possible, normal, and worth the effort.",
    },
    impact: {
      heading: "The <em>Impact</em>",
      body: "Eight months after the intervention, White Rice returned with the Most Significant Change (MSC) technique, a participatory qualitative evaluation in which 11,000 mothers were convened in story circles to share what had genuinely shifted in their lives. It was one of the largest qualitative follow-up evaluations of its kind conducted in Pakistan.",
      metrics: [
        { value: 90, suffix: "%", label: "Behaviour Adoption Rate" },
        { value: 26000, suffix: "+", label: "Mothers Directly Reached" },
        { value: 100000, suffix: "+", label: "Community Members Influenced" },
        { value: 2000, suffix: "+", label: "Frontline Workers Trained" },
      ],
      closingNote: "Government adoption is the programme\u2019s most durable measure of success. It signals the model was not just effective, but replicable and ownable. Delivered over a decade ago under significant resource constraints, it remains a landmark in evidence-based, community-driven SBC design in Pakistan.",
    },
    heroImage: "/images/unicef-misaali-maa/_MG_8795.jpg",
    gallery: {
      heading: "Gallery",
      images: [
        { src: "/images/unicef-misaali-maa/_MG_8177.jpg", alt: "Frontline worker leading a session with mothers and children in Sindh", span: "wide" },
        { src: "/images/unicef-misaali-maa/_MG_0101.jpg", alt: "Mother smiling with her child after a community health session", span: "normal" },
        { src: "/images/unicef-misaali-maa/_MG_0068.jpg", alt: "Child laughing on a colourful traditional rug during a gathering", span: "normal" },
        { src: "/images/unicef-misaali-maa/_MG_8524.jpg", alt: "Women reviewing programme materials during a household visit", span: "wide" },
        { src: "/images/unicef-misaali-maa/_MG_8234.jpg", alt: "Mothers practising handwashing with children during a demonstration", span: "normal" },
        { src: "/images/unicef-misaali-maa/_MG_9290.jpg", alt: "Mothers and children walking through a village lane in Sindh", span: "normal" },
        { src: "/images/unicef-misaali-maa/_MG_8795.jpg", alt: "Outdoor community session with Misaali Maa programme banner", span: "wide" },
        { src: "/images/unicef-misaali-maa/_MG_9374.jpg", alt: "Portrait of a mother from the stunting prevention programme", span: "normal" },
      ],
    },
  },

  /* 2 ─ Awaz Programme */
  {
    slug: "awaz-programme",
    year: "2010 - 2021",
    tags: ["Awaz Programme", "UK Aid \u00B7 FCDO", "DAI", "Citizen Accountability", "Women's Leadership", "Religious Minorities", "Community Mobilisation", "iReporter", "Citizen Journalism", "13 Districts", "Punjab", "KPK", "15M+ Reach", "10 Years", "Grassroots Movement", "SBC", "Pakistan"],
    heroImage: "/images/alif-ailaan-new/1229896_561951533868607_1711988521_n.jpg",
    theme: {
      primary: "#1A4A2A",
      primaryLight: "#3A8A5A",
      accent: "#C48A1A",
      accentLight: "#E8B84A",
    },
    hero: {
      eyebrow: "UK Aid \u00b7 DAI \u00b7 Aawaz Programme \u00b7 Punjab & KPK",
      title: "Give<br>Them a<br><em>Voice.</em>",
      subtitle: "Awaz: 10 Years of Citizen Accountability, Women\u2019s Leadership & Grassroots Movement Building in Pakistan",
      description: "A UK Aid-funded programme running for over a decade. 13 districts. 15 million people reached. Hundreds of women who went from being marginalised to becoming members of local government, political parties, and community leadership structures. White Rice has been the creative and communication partner since the very beginning.",
      meta: [
        { label: "Funder", value: "UK Aid (FCDO)" },
        { label: "Implementing Partner", value: "DAI & Consortium" },
        { label: "Geography", value: "13 Districts \u00b7 Punjab & KPK" },
        { label: "White Rice Role", value: "Creative & Communication Partner \u00b7 Long-Term" },
      ],
    },
    role: {
      heading: "Creative Partner in a <em>Decade-Long Movement</em>",
      body: "White Rice joined the Awaz programme at its inception as creative and communication lead. We designed the behaviour change strategy, developed key messages for different audiences and platforms, produced the community mobilisation toolkit, and created all programme content across its multiple phases. From grassroots community tools to the Awaz iReporter citizen journalism platform, our work has been the creative backbone of a programme that is still running today, still reaching communities, and still amplifying voices that were previously unheard.",
      services: [
        "SBC Campaign Strategy",
        "Behaviour Change Design",
        "Community Mobilisation Toolkit",
        "FLW Training Toolkit",
        "Documentaries",
        "Animation Series",
        "Awaz iReporter Platform",
        "Citizen Journalism Training",
        "Resource & Communication Materials",
        "Media Linkage & Advocacy",
        "Multi-Phase Long-Term Engagement",
      ],
    },
    outcomes: {
      cards: [
        { stat: "15 Million+", description: "People reached through the Awaz programme\u2019s communication movement across 13 districts in Punjab and KPK." },
        { stat: "13 Districts", description: "Programme coverage across Punjab and Khyber Pakhtunkhwa, two of Pakistan\u2019s most populous and politically significant provinces." },
        { stat: "10+ Years", description: "Awaz has continued for over a decade across multiple phases. White Rice has been the creative and communication partner from the very first phase to today." },
        { stat: "Women Leaders", description: "Women from marginalised communities secured seats in local government union councils and joined political parties, becoming authentic voices for their communities." },
        { stat: "iReporter", description: "Pakistan\u2019s first community-based citizen journalism platform. Community members trained to document local challenges on mobile phones and escalate them to government and media." },
      ],
      watermark: "15M",
    },
    closing: {
      heading: "A voice without<br>a channel is<br><em>just a whisper.</em>",
      body: "Awaz gave Pakistan\u2019s most marginalised communities a channel. White Rice built the content, the tools, the platforms, and the strategy that made it resonate. For 10 years, across 13 districts, 15 million people, and every woman who found out she had more to say than anyone had ever let her say before.",
    },
    impactCells: [
      { big: "15 Million+", desc: "People reached through the Awaz communication movement across 13 districts in Punjab and KPK." },
      { big: "10+ Years", desc: "Multiple phases of continuous programming. Still active, still reaching communities, still creating impact at the grassroots level." },
      { big: "Citizens with a Voice", desc: "The iReporter platform created Pakistan\u2019s first structured citizen journalism system, connecting community documentation to government action and media amplification." },
    ],
    photoBand1: [
      { src: "/images/alif-ailaan-new/1174523_563222837074810_1296829616_n.jpg", alt: "Community members gathered at a citizens' accountability meeting in Punjab" },
      { src: "/images/alif-ailaan-new/1185268_562583227138771_1833201522_n.jpg", alt: "Women leaders speaking at a local governance engagement event" },
    ],
    photoBand2: [
      { src: "/images/alif-ailaan-new/1017432_639131816150578_700025924_n.jpg", alt: "Large crowd at a community mobilisation rally for citizen rights" },
      { src: "/images/alif-ailaan-new/1233330_562758870454540_1459927174_n.jpg", alt: "Youth volunteers distributing campaign materials in a rural district" },
      { src: "/images/alif-ailaan-new/1452332_594356000628160_1700686819_n.jpg", alt: "Young participant signing a pledge during a community journalism training" },
    ],
    photoBand3: [
      { src: "/images/alif-ailaan-new/386811_506550672742027_760970272_n.jpg", alt: "Children and community workers during a school outreach visit" },
      { src: "/images/alif-ailaan-new/7855_561951813868579_474208845_n.jpg", alt: "Participants at a citizen reporting workshop in Khyber Pakhtunkhwa" },
    ],
    photoBand4: [
      { src: "/images/alif-ailaan-new/1235076_568603413203419_1623623434_n.jpg", alt: "Campaign vehicles driving through towns during the Awaz outreach programme" },
      { src: "/images/alif-ailaan-new/1233330_562758870454540_1459927174_n.jpg", alt: "Community mobilisation session with Awaz programme banners and materials" },
      { src: "/images/alif-ailaan-new/1238181_562582980472129_1315392017_n.jpg", alt: "Frontline workers and community volunteers at a field engagement event" },
    ],
    challenge: {
      heading: "The <em>Challenge</em>",
      body: "Pakistan's marginalised communities, particularly women and religious minority groups, face a compounding set of exclusions. They are under-represented in local government, absent from political decision-making, unconnected to media, and without formal channels to raise the challenges they live with daily. Broken schools, absent waste collection, non-functional health facilities, unsafe public spaces. Known to them. Invisible to everyone with the power to act.\n\nFor women, the barriers are layered. Social norms restrict mobility and public participation. Low literacy limits access to written information. A deep cultural belief holds that politics and public life are not spaces that belong to them. Changing this required more than information. It required a sustained behaviour change programme that built confidence, demonstrated possibility, and created visible proof that ordinary women from ordinary communities could become leaders.\n\nThe programme needed a creative partner who could work across all of this at once: designing grassroots tools for frontline workers, producing content that documented the movement's own progress, and building platforms that connected community voices to the decision-makers and media who could act on them.",
      quote: {
        text: "These communities were not voiceless. They had never been given a channel that reached the right ears. Awaz was about building that channel, and the confidence to use it.",
      },
    },
    strategy: {
      heading: "The <em>Strategy</em>",
      intro: "White Rice's strategy for Awaz was built on a principle that runs through all our best work: communities are not audiences to be reached. They are agents to be activated. The creative and communication work wasn\u2019t designed to tell communities what to think or do. It was designed to show them what they were already capable of, and give them the tools to act on it.",
      steps: [
        {
          number: "01",
          title: "Community Mobilisation Toolkit",
          description: "A comprehensive toolkit used by frontline community workers to go into communities, engage participants, build capacity, and train people to take leadership roles and become change agents. Designed for low-literacy contexts, multi-language settings, and field facilitators without formal training backgrounds.",
        },
        {
          number: "02",
          title: "Documentaries & Animation",
          description: "Documentary films capturing the Awaz process and success stories, showing communities their own transformation as evidence of what is possible. A step-by-step animation series explained the bigger movement in accessible, visual terms: the programme's own story, told back to the people making it.",
        },
        {
          number: "03",
          title: "Awaz iReporter Platform",
          description: "Pakistan's first community-based mobile citizen reporting platform. Community members were trained to document local challenges on smartphones, submit to a central hub, and escalate to local politicians, government officials, and media. Broken schools. Missing waste collection. Non-functional facilities. Citizens became the journalists of their own lived experience.",
        },
        {
          number: "04",
          title: "Resource & Campaign Materials",
          description: "Campaign strategy and key messages designed for multiple audiences, platforms, and contexts. Resource materials for community workers. Communication pieces connecting the programme's grassroots work to national and provincial media, ensuring local stories reached the audiences who could create systemic change.",
        },
      ],
    },
    work: {
      heading: "The <em>Work</em>",
      body: "White Rice joined the Awaz programme at its inception as creative and communication lead. We designed the behaviour change strategy, developed key messages for different audiences and platforms, produced the community mobilisation toolkit, and created all programme content across its multiple phases. From grassroots community tools to the Awaz iReporter citizen journalism platform, our work has been the creative backbone of a programme that is still running.\n\nThe strategy operated across four registers at once: grassroots capacity-building through the community mobilisation toolkit; programme documentation through documentaries and animation; platform creation through the Awaz iReporter citizen journalism system; and media and advocacy linkage to ensure community voices reached the platforms that could create change.\n\nKey messages were designed for different audiences, different platforms, and different stages of the behaviour change journey. From initial awareness and attitudinal shift, through confidence-building and skill development, to action, leadership, and sustained civic participation. Every piece of content was designed to move someone one step further along that journey.",
      deliverables: [
        "SBC Campaign Strategy",
        "Behaviour Change Design",
        "Community Mobilisation Toolkit",
        "FLW Training Toolkit",
        "Documentaries",
        "Animation Series",
        "Awaz iReporter Platform",
        "Citizen Journalism Training",
        "Resource & Communication Materials",
        "Media Linkage & Advocacy",
        "Multi-Phase Long-Term Engagement",
      ],
    },
    impact: {
      heading: "The <em>Impact</em>",
      body: "The most significant measure of Awaz's success is that it is still running. In development programming, a 10-year multi-phase programme is not a measure of spending. It is a measure of proof. Funders continue to invest, implementing partners continue to operate, and communities continue to participate because the evidence of change is visible and continuing. White Rice has been part of every phase.",
      metrics: [
        { value: 15, suffix: "Million+", label: "People reached through the Awaz communication movement across 13 districts in Punjab and KPK." },
        { value: 10, suffix: "+ Years", label: "Multiple phases of continuous programming. Still active, still reaching communities, still creating grassroots impact." },
        { value: 0, suffix: "", prefix: "", label: "Citizens with a Voice: The iReporter platform created Pakistan's first structured citizen journalism system, connecting community documentation to government action and media amplification." },
      ],
      closingNote: "The impact of Awaz cannot be captured in a single number. It lives in the woman who stood up in a union council meeting for the first time. In the school that was repaired because a community member filmed its broken roof and sent it to the right person. In the religious minority family that found out they had rights they had never been told about. These are the outcomes that don't appear in logframes. They are the ones that matter most.",
    },
    gallery: {
      heading: "Gallery",
      images: [
        { src: "/images/alif-ailaan-new/1229896_561951533868607_1711988521_n.jpg", alt: "Large community gathering for the education campaign", span: "wide" },
        { src: "/images/alif-ailaan-new/386811_506550672742027_760970272_n.jpg", alt: "School children rallying for education rights", span: "normal" },
        { src: "/images/alif-ailaan-new/1452332_594356000628160_1700686819_n.jpg", alt: "Young student signing a pledge for education", span: "normal" },
        { src: "/images/alif-ailaan-new/1235076_568603413203419_1623623434_n.jpg", alt: "Campaign vehicles during the Alif Ailaan outreach drive", span: "wide" },
        { src: "/images/alif-ailaan-new/1233330_562758870454540_1459927174_n.jpg", alt: "Community mobilisation event with programme materials", span: "normal" },
        { src: "/images/alif-ailaan-new/1238181_562582980472129_1315392017_n.jpg", alt: "Volunteers and community members at a field engagement session", span: "normal" },
        { src: "/images/alif-ailaan-new/7855_561951813868579_474208845_n.jpg", alt: "Community participants during an awareness event", span: "wide" },
      ],
    },
  },

  /* 3 ─ UNICEF ECD */
  {
    slug: "unicef-ecd",
    year: "2022 - 2026",
    tags: ["Early Childhood Development", "Positive Parenting", "Fatherhood", "Play & Stimulation", "Social Behaviour Change", "Digital Learning", "National Policy", "ClayLab", "UNICEF", "SDG 4", "SDG 3", "Pakistan"],
    heroImage: "/images/timeline/2024/child-stim-hero.jpg",
    theme: {
      primary: "#4A2A5A",
      primaryLight: "#8A6A9A",
      accent: "#C4962A",
      accentLight: "#E8C05A",
    },
    hero: {
      eyebrow: "UNICEF Pakistan \u00b7 National \u00b7 Multi-Year",
      title: "The <em>First</em> 8 Years",
      subtitle: "National ECD & Positive Parenting Programme",
      description: "A national behaviour change programme transforming how Pakistan\u2019s parents, caregivers, and institutions show up in the first eight years of a child\u2019s life. Built to reach 20 million families by the end of 2026.",
      meta: [
        { label: "Client", value: "UNICEF Pakistan" },
        { label: "Scale", value: "National \u00b7 All Provinces" },
        { label: "Focus", value: "ECD \u00b7 Positive Parenting \u00b7 Play & Stimulation" },
        { label: "White Rice Role", value: "SBC Design Lead & Creative Partner" },
      ],
    },
    role: {
      heading: "National SBC Architecture & <em>Creative Lead</em>",
      body: "White Rice led the design of a comprehensive, multi-year national behaviour change programme for UNICEF. It covered co-creation research, SBC strategy, national policy inputs, flagship creative productions, digital FLW training, community play labs, and household-level coaching toolkits. The programme works across every layer of the socio-ecological model, with the ambition to reach 20 million families.",
      services: [
        "Formative & Co-Creation Research",
        "National SBC Strategy",
        "Policy Framework Input",
        "National Creative Campaign",
        "Film Production",
        "Digital FLW Training",
        "Play Lab Design",
        "Household Coaching Toolkit",
        "WhatsApp Behaviour Nudges",
        "Media & Influencer Engagement",
      ],
    },
    outcomes: {
      cards: [
        { stat: "20M", description: "Families targeted by end of 2026 through a national programme now adopted and being scaled across Pakistan." },
        { stat: "1,000", description: "Frontline workers trained remotely via a 12-week digital learning programme, the first of its kind in Pakistan\u2019s ECD sector." },
        { stat: "National Policy", description: "Programme insights directly shaped the National ECD Policy and Framework, moving the work from intervention to institution." },
        { stat: "Pakistan\u2019s 1st", description: "Feature film on parenting and fatherhood. Launched on Geo Network on International Father\u2019s Day, reaching millions." },
        { stat: "10+ ClayLabs", description: "Community play labs scaled across the country, embedding play and stimulation as a routine in homes and communities." },
      ],
      watermark: "ECD",
    },
    closing: {
      heading: "The first eight years shape<br>the next <em>eighty.</em>",
      body: "The First 8 Years programme is proof that when a behaviour change system is co-created with communities, designed across every layer, and built for government ownership, it can reach the scale Pakistan\u2019s children deserve.",
    },
    impactCells: [
      { big: "20 Million", desc: "Families targeted by end of 2026 through the nationally adopted programme, built on the SBC architecture White Rice designed." },
      { big: "National Policy", desc: "Programme insights embedded directly into the National ECD Policy and Framework. From pilot to permanent." },
      { big: "10+ ClayLabs", desc: "Scaling from a single pilot to community play labs across the country. Play and stimulation becoming a practised household routine." },
      { big: "62M+ Reach", desc: "The fatherhood film launched on Geo Network\u2019s digital platform, the highest-subscribed media platform in Asia, on International Father\u2019s Day." },
    ],
    challenge: {
      heading: "The <em>Challenge</em>",
      body: "Pakistan's ECD crisis is not a knowledge gap. It\u2019s a behaviour gap. The research is clear: the first eight years of a child's life determine cognitive development, emotional health, and educational outcomes for decades. Yet the behaviours that shape those years \u2014 responsive caregiving, play and stimulation, reading together, engaging fathers \u2014 remain profoundly absent in millions of Pakistani households.\n\nExisting ECD programmes were fragmented, inconsistent across provinces, and unable to scale. They targeted mothers in isolation, excluded fathers entirely, and relied on frontline workers with little meaningful training. The challenge: design a national behaviour change system, grounded in evidence, co-created with communities, and capable of reaching millions, that could eventually be owned and operated by government.",
      quote: {
        text: "Parents in Pakistan are not indifferent to their children's development. They\u2019ve simply never been shown what it looks like, or given the tools, the permission, and the social support to do it.",
      },
    },
    strategy: {
      heading: "The <em>Strategy</em>",
      intro: "Before a single session was designed, White Rice led a large-scale co-creation exercise across all provinces, bringing together government stakeholders, frontline workers, community members, mothers, and fathers. The goal: audit what existed, identify gaps, and co-design what a comprehensive national programme could look like. This was not consultation. It was design partnership.",
      steps: [
        {
          number: "01",
          title: "Co-Creation Across All Provinces",
          description: "Research that brought all stakeholders to the table. Not to validate a pre-designed solution, but to build one together from lived experience and community insight.",
        },
        {
          number: "02",
          title: "Design for the Full Socio-Ecological System",
          description: "Intervene at every layer simultaneously: policy, community, household, and individual. Change at one level is reinforced by the others, not undermined.",
        },
        {
          number: "03",
          title: "Built to Be Owned, Not Just Delivered",
          description: "Every design decision was made with government adoption in mind, so the programme could eventually be taken over by the state and scaled independently of any external partner.",
        },
        {
          number: "04",
          title: "Bring Fathers In",
          description: "Pakistani ECD programming had historically targeted mothers alone. This programme was designed from the outset to engage fathers as active, equal participants in their children's early years.",
        },
      ],
    },
    work: {
      heading: "The <em>Intervention</em>",
      body: "The programme produced a series of firsts for Pakistan. Flagship interventions that created new cultural space for conversations about ECD and fatherhood at national scale, while building the community and household infrastructure for lasting behaviour change.\n\nAt the community level, film screenings became an unexpected catalyst. Showing the fatherhood film in mosques, schools, and community halls created a neutral, emotionally engaging platform for conversations communities had never had publicly before. Influencer engagement brought local leaders, religious figures, and respected community members into the movement as champions, not bystanders.\n\nThe ClayLab, White Rice's community play lab concept, was perhaps the programme's most distinctive innovation. Parents arrived weekly for an 8\u201312 week structured programme where every session introduced a different form of play: creative, imaginative, structured, musical, storytelling, object-based. Fathers had their own sessions. Mothers-in-law and grandparents were eventually brought in. The design principle was simple but radical: parents had to experience play themselves before they could take it home to their children.\n\nFor frontline workers, White Rice developed Pakistan's first digital remote learning programme for ECD last-mile workers. A 12-week, bite-sized daily learning journey that took 1,000 workers from foundational ECD concepts through to programme delivery skills, entirely via mobile phone. Designed for low-connectivity, low-literacy contexts, it proved that professional development for remote field workers doesn\u2019t have to wait for in-person training.",
      deliverables: [
        "Formative & Co-Creation Research",
        "National SBC Strategy",
        "Policy Framework Input",
        "National Creative Campaign",
        "Film Production",
        "Digital FLW Training",
        "Play Lab Design",
        "Household Coaching Toolkit",
        "WhatsApp Behaviour Nudges",
        "Media & Influencer Engagement",
        "ClayLabs (Community Play Labs)",
        "12-Week Digital FLW Training",
        "Father-Specific Sessions",
        "22-Milestone Coaching Toolkit",
        "Animated Video Resources",
        "Community Film Screenings",
        "Wall Chalkings & Community Branding",
        "PCT Counselling Approach",
      ],
    },
    impact: {
      heading: "The <em>Impact</em>",
      body: "The programme's most significant measure of success is not a number. It\u2019s adoption. A national behaviour change programme, designed by White Rice, is now being scaled by the Pakistani government across the country. That is what a programme built to last looks like.",
      metrics: [
        { value: 20, suffix: " Million", label: "Families targeted by end of 2026 through the nationally adopted programme, built on the SBC architecture White Rice designed." },
        { value: 0, suffix: "", prefix: "", label: "Programme insights embedded directly into the National ECD Policy and Framework. From pilot to permanent." },
        { value: 10, suffix: "+ ClayLabs", label: "Scaling from a single pilot to community play labs across the country. Play and stimulation becoming a practised household routine." },
        { value: 62, suffix: "M+ Reach", label: "The fatherhood film launched on Geo Network's digital platform, the highest-subscribed media platform in Asia, on International Father's Day." },
      ],
      closingNote: "The First 8 Years programme is proof that when a behaviour change system is co-created with communities, designed across every layer, and built for government ownership, it can reach the scale Pakistan's children deserve.",
    },
    gallery: {
      heading: "Gallery",
      images: [
        { src: "/images/timeline/2024/child-stim-learning.jpg", alt: "Children engaged in early stimulation learning activities", span: "wide" },
        { src: "/images/timeline/2024/child-stim-village.jpg", alt: "Community-based early childhood development session", span: "normal" },
        { src: "/images/peie/unicef-peie02.jpg", alt: "Frontline worker demonstrating positive parenting techniques", span: "normal" },
      ],
    },
  },

  /* 4 ─ Walidain HumQadam / UNICEF Parental Engagement */
  {
    slug: "unicef-parental-engagement",
    year: "2023 - 2024",
    tags: ["Parental Engagement", "Walidain HumQadam", "SBC", "WhatsApp Learning", "Future Visioning", "Teacher Training", "PTM Redesign", "Co-Creation", "UNICEF Pakistan", "4 Provinces", "Remote Delivery", "SDG 4", "Pakistan"],
    theme: {
      primary: "#1A2A6A",
      primaryLight: "#4A6ACA",
      accent: "#C49A1A",
      accentLight: "#E8C84A",
    },
    heroImage: "/images/timeline/2023/parenting-hero.jpg",
    heroVideo: "/videos/unicef-peie.mp4",
    hero: {
      eyebrow: "UNICEF Pakistan \u00b7 4 Provinces \u00b7 52 Schools",
      title: "Parents<br><em>Walking</em><br>Alongside.",
      subtitle: "Walidain HumQadam \u2014 Pakistan\u2019s First Remote SBC Programme for Parental Engagement in Education",
      description: "A pioneering SBC initiative co-designed with parents, teachers, and communities across Pakistan. Using WhatsApp, vision boards, and peer-to-peer learning to transform parental engagement from a mandatory obligation into a sustained, meaningful practice.",
      meta: [
        { label: "Client", value: "UNICEF Pakistan" },
        { label: "Scale", value: "4 Provinces \u00b7 6 Cities \u00b7 52 Schools" },
        { label: "Focus", value: "Parental Engagement in Education (SBC)" },
        { label: "White Rice Role", value: "SBC Design, Co-Creation & Content Lead" },
      ],
    },
    role: {
      heading: "SBC Design, Research & <em>Full Programme Architecture</em>",
      body: "White Rice partnered with UNICEF Pakistan to design, co-create, and deliver Walidain HumQadam, Pakistan\u2019s first remotely-delivered SBC programme targeting parental engagement in education. Our role spanned the full programme lifecycle: formative research and co-creation workshops across four provinces, intervention design using the Behavioural Driver Model and Theory of Change, content production for five integrated touchpoints, and a 6.4-million-reach digital campaign.",
      services: [
        "Formative Research",
        "4-Province Co-Creation Workshops",
        "SBC Theory of Change",
        "Behavioural Driver Model",
        "WhatsApp Programme Design",
        "Vision Board Methodology",
        "Teacher Training Programme",
        "PTM Framework Redesign",
        "P2P Community Sessions",
        "Digital Campaign (6.4M reach)",
      ],
    },
    outcomes: {
      cards: [
        { stat: "13,998", description: "Total parents reached through WhatsApp, P2P gatherings, PTMs, digital sharing, and direct teacher outreach across six cities in four provinces." },
        { stat: "6.4 Million+", description: "Individuals reached through the digital campaign across Facebook, Instagram, YouTube, and TikTok, generating over 14.7 million impressions." },
        { stat: "550+ Canvases", description: "Vision canvases created by parents, teachers, and students across 52 schools. Pakistan\u2019s largest ever visioning exercise in education." },
        { stat: "250 Teachers", description: "Trained as Champion Teachers across 52 schools in Islamabad, Lahore, Peshawar, Karachi, Quetta, Sujawal, and Multan." },
        { stat: "4,200+ Community", description: "A sustained WhatsApp community of parents and teachers, built for long-term engagement beyond the programme\u2019s formal timeline." },
      ],
      watermark: "\u0647\u0645\u0642\u062F\u0645",
    },
    closing: {
      heading: "Parents who remember<br>why they hoped<br><em>show up differently.</em>",
      body: "Walidain HumQadam proved that parental engagement in education is not an infrastructure problem. It\u2019s a behaviour change problem. One that starts with aspiration, is sustained through habit, and scales through technology. Pakistan now has a tested blueprint. What it needs next is the national commitment to use it.",
    },
    impactCells: [
      { big: "Pakistan\u2019s First", desc: "Remotely-delivered SBC programme for parental engagement in education. A tested, validated framework ready for national implementation." },
      { big: "550+ Vision Boards", desc: "Pakistan\u2019s largest-ever visioning exercise. The aspiration gap became the motivation engine for the entire programme." },
      { big: "Cultural Shift", desc: "Fathers from Sujawal and Multan sharing programme content on social media. A Multan father discussing Walidain HumQadam on live television. Behaviour changed publicly, not just privately." },
      { big: "4,200+ Community", desc: "A lasting WhatsApp community of parents, teachers, and educators, providing the infrastructure for sustained engagement long after the formal programme concluded." },
      { big: "AI-Integrated", desc: "First government-school SBC programme in Pakistan to integrate ChatGPT and Khan Academy as accessible learning tools within a WhatsApp-native delivery model." },
      { big: "Scale-Ready", desc: "A 4-week WhatsApp programme, refined through six cities and four provinces. Fully validated and ready for national deployment across thousands of schools." },
    ],
    divider: {
      stat: "58% of<br>10-year-olds<br>can\u2019t read.",
      text: "Pakistan faces a dual crisis: 25.3 million children out of school, and a learning poverty rate where 58% of 10-year-olds cannot read or comprehend simple texts. Fewer than 30% of parents actively engage with teachers or participate in school activities. Limited parental involvement is one of the most critical yet least-addressed factors in Pakistan\u2019s education emergency. Walidain HumQadam was designed to change that. Not through mandate, but through behaviour change.",
    },
    cocreation: {
      eyebrow: "Co-Creation Process \u00b7 Designed With, Not For",
      heading: "Four provinces. Four workshops.<br><em>One programme shaped entirely by the communities it would serve.</em>",
      workshopSteps: [
        { num: "Step 1", name: "Visioning", body: "Participants imagined a transformative future 10 years ahead, setting aspirational tone and emotional investment before any problem-solving" },
        { num: "Step 2", name: "Challenge Framing", body: "Stakeholders articulated barriers from their own perspectives, building empathy and identifying root causes of parental disengagement" },
        { num: "Step 3", name: "Persona Mapping", body: "Participants created profiles of average Pakistani parents, exploring challenges, opportunities, and aspirations to deepen empathy with the target audience" },
        { num: "Step 4", name: "Ideation & Prototyping", body: "Creative solution generation followed by detailed implementation plans, translating ideas into actionable, community-tested blueprints" },
        { num: "Step 5", name: "Pre-Mortem", body: "Participants critically evaluated proposed solutions, identifying potential failure points before implementation to build robustness and sustainability" },
      ],
      provinceCards: [
        { name: "Sindh", city: "Karachi", stat: "32", breakdown: "4 students \u00b7 9 teachers \u00b7 5 parents \u00b7 14 influencers" },
        { name: "Punjab", city: "Lahore", stat: "33", breakdown: "8 students \u00b7 14 teachers \u00b7 8 parents \u00b7 10 influencers" },
        { name: "KPK", city: "Peshawar", stat: "21", breakdown: "6 students \u00b7 5 teachers \u00b7 6 parents \u00b7 4 influencers" },
        { name: "Balochistan", city: "Quetta", stat: "25", breakdown: "7 students \u00b7 5 teachers \u00b7 4 parents \u00b7 9 influencers" },
      ],
    },
    reframe: {
      eyebrow: "The Reframed Challenge Statement \u00b7 Emerging from Co-Creation",
      challenge: "\u201CHow might we reimagine parental engagement as a dynamic force for realising future aspirations and collective dreams, by empowering parents, students, and teachers to co-create personalised learning journeys?\u201D",
      note: "The original challenge, \u201Chow might we improve parental engagement at home and school?\u201D, was transformed through co-creation into something more meaningful. Not a question about compliance, but about shared ambition. This reframing became the north star for every intervention design decision that followed.",
    },
    touchpoints: {
      eyebrow: "Programme Intervention Design \u00b7 Five Integrated Touchpoints",
      heading: "Every touchpoint designed to <em>build on the last.</em>",
      cards: [
        { num: "01", title: "Teacher Training & Orientation", body: "Full-day activity-based training sessions introduced programme objectives, built teacher confidence, and positioned educators as Champion Teachers central to the programme\u2019s success.", scale: "<strong>250 teachers</strong> \u00b7 52 schools \u00b7 4 provinces", color: "#4A6ACA" },
        { num: "02", title: "Future Visioning", body: "Pakistan\u2019s largest-ever visioning exercise. Parents, teachers, and students co-created 550+ vision canvases representing 10-year aspirations for their child\u2019s future, building intrinsic motivation before any instructional content.", scale: "<strong>500+ parents</strong> \u00b7 <strong>550+ vision canvases</strong>", color: "#E8C84A" },
        { num: "03", title: "WhatsApp Remote Learning", body: "A 30-day habit challenge delivered via WhatsApp, with separate programmes for parents and teachers. Bite-sized microlearning, gamification, polls, voice notes, and 50+ role model videos. Built on COM-B, EAST, and behavioural nudge science. Integrated with ChatGPT and Khan Academy.", scale: "<strong>4,200+ community</strong> \u00b7 35% high-performing parents", color: "#5AAA8A" },
        { num: "04", title: "Peer-to-Peer Gatherings", body: "Community-based P2P sessions gave parents a safe space to connect, share experiences, and learn from one another, reinforcing programme behaviours through peer normalisation and collective accountability.", scale: "<strong>3,080 parents</strong> reached through P2P gatherings", color: "#CA6A4A" },
        { num: "05", title: "Redesigned PTMs", body: "Parent-Teacher Meetings were transformed from formal reporting events into collaborative partnership sessions, with structured agendas, student reflection templates, collaborative action plans, and post-PTM follow-up protocols.", scale: "<strong>4,457 parents</strong> reached through PTMs", color: "#9A6ACA" },
      ],
    },
    verbatims: {
      eyebrow: "In Their Own Words",
      heading: "Parents and teachers who <em>changed their minds</em>, and then changed their habits.",
      cards: [
        { quote: "As soon as I see the vision board, I remember to ask the children what they learned today. That\u2019s why we pasted it on the wall \u2014 so we remember to give our child time every day.", source: "Parent \u00b7 Visioning Exercise" },
        { quote: "We realised the importance of bridging the gap between parents, teachers, and students. Working together as a united triangle improves children\u2019s performance and ensures they feel supported.", source: "Teacher \u00b7 Training Session \u00b7 Lahore" },
        { quote: "What we used to think about taking out time but couldn\u2019t manage \u2014 became much easier. When a message came, it reminded us and made it simpler to act.", source: "Parent \u00b7 WhatsApp Programme" },
        { quote: "We now feel that if their dreams come true, ours will too.", source: "Parent \u00b7 Vision Board Session" },
        { quote: "Parents also noticed the difference in this PTM compared to previous ones. This time, we heard more positive things. Apart from academics, we had the opportunity to learn about their personality and behavior.", source: "Parent \u00b7 Redesigned PTM" },
        { quote: "We got to learn many different things \u2014 very innovative things \u2014 in just one day. Creativity sparked in our minds.", source: "Teacher \u00b7 Training Session" },
      ],
    },
    reach: {
      eyebrow: "Reach & Impact \u00b7 By the Numbers",
      heading: "From 500 parents to <em>14 million impressions.</em>",
      numbers: [
        { label: "Total Parents Reached", big: "13,998", sub: "Across P2P, PTM, WhatsApp, digital forwarding, and direct teacher outreach" },
        { label: "Teachers Trained", big: "250", sub: "Across 52 schools in 6 cities and 4 provinces, trained as Champion Teachers" },
        { label: "Digital Reach", big: "6.4M+", sub: "Individuals reached across Facebook, Instagram, YouTube, and TikTok" },
        { label: "Digital Impressions", big: "14.7M+", sub: "Total campaign impressions, including a Balochistan role model story aired on national television" },
      ],
      platforms: [
        { name: "Facebook & Instagram", reach: "5,377,689 reach", impressions: "11,908,859 impressions" },
        { name: "YouTube", reach: "816,536 reach", impressions: "2,391,231 impressions" },
        { name: "TikTok", reach: "213,049 reach", impressions: "464,283 impressions" },
      ],
    },
    challenge: {
      heading: "The <em>Challenge</em>",
      body: "Parental engagement in Pakistan's public school system is structurally limited at every tier. Economic pressure means parents prioritise immediate survival over school activities. Low literacy, particularly among mothers, creates deep insecurity about their ability to contribute to their child's education. Teachers managing classrooms of 50+ students have minimal capacity to build parent relationships. And communication between schools and families remains almost entirely paper-based.\n\nFathers are largely absent from the educational lives of their children, viewing it as the mother's responsibility. Mothers, despite their proximity to children, often lack the confidence, literacy, or mobility to advocate effectively at the school level.\n\nUnderlying all of this is a belief, reinforced by real economic reality, that formal education may not reliably lead to better outcomes. Before any behaviour change programme could work, it needed to address this foundational question of value. Walidain HumQadam began not by telling parents what to do, but by helping them remember why they hoped.",
      quote: {
        text: "Parents consider education a fruitless effort \u2014 there are examples in every home where someone who completed their MA or BS is unemployed, so they pay more attention to a shop or other work.",
      },
    },
    strategy: {
      heading: "The <em>Strategy</em>",
      intro: "The programme's SBC strategy was built around the Socio-Ecological Model, addressing parental disengagement at the individual, interpersonal, community, and institutional levels simultaneously. The Behavioural Driver Model framed the design across three intersecting forces: psychology (internal beliefs and self-efficacy), sociology (social norms, peer influence), and environment (tools, platforms, and access).",
      steps: [
        { number: "01", title: "Start with Aspiration, Not Instruction", description: "The programme's entry point was a Future Visioning exercise, asking parents to imagine their child's life 10 years ahead. Before any knowledge transfer or behaviour nudge, the programme rebuilt parents' emotional investment in their child's education as the foundation for everything else." },
        { number: "02", title: "WhatsApp as the Programme's Backbone", description: "WhatsApp, already deeply embedded in Pakistani daily life, became the delivery platform for a 30-day habit challenge: bite-sized microlearning, gamification, peer discussion, voice notes, polls, and role model stories. Accessible anywhere, any time, on any phone." },
        { number: "03", title: "Teachers as Programme Champions", description: "Teachers weren\u2019t implementers of someone else\u2019s design. They were trained as Champion Teachers, equipped with practical tools, confidence, and a new understanding of their role as bridges between school and home. The PTM was redesigned from a reporting exercise into a genuine collaborative partnership session." },
        { number: "04", title: "Peer-to-Peer as the Sustaining Force", description: "P2P gatherings built communities of parents who could learn from each other. Sharing experiences, normalising engagement, and creating the social permission for fathers to become involved in ways that Pakistani norms had historically not expected of them." },
      ],
    },
    work: {
      heading: "The <em>Intervention</em>",
      body: "White Rice partnered with UNICEF Pakistan to design, co-create, and deliver Walidain HumQadam, Pakistan's first remotely-delivered SBC programme targeting parental engagement in education. Our role covered the full lifecycle: formative research and co-creation workshops across four provinces, intervention design using the Behavioural Driver Model and Theory of Change, content production for five integrated touchpoints, and a 6.4-million-reach digital campaign.",
      deliverables: [
        "Formative Research",
        "4-Province Co-Creation Workshops",
        "SBC Theory of Change",
        "Behavioural Driver Model",
        "WhatsApp Programme Design",
        "Vision Board Methodology",
        "Teacher Training Programme",
        "PTM Framework Redesign",
        "P2P Community Sessions",
        "Digital Campaign (6.4M reach)",
      ],
    },
    impact: {
      heading: "The <em>Impact</em>",
      body: "Walidain HumQadam was the first programme of its kind in Pakistan: a remotely-delivered, WhatsApp-native SBC intervention designed to shift parental engagement in education at scale. The results demonstrated both the viability of the model and its readiness for national rollout.",
      metrics: [
        { value: 13998, suffix: "", label: "Total parents reached through WhatsApp, P2P gatherings, PTMs, digital sharing, and direct teacher outreach across six cities in four provinces." },
        { value: 6400000, suffix: "+", label: "Individuals reached through the digital campaign across Facebook, Instagram, YouTube, and TikTok, generating over 14.7 million impressions." },
        { value: 550, suffix: "+", label: "Vision canvases created by parents, teachers, and students across 52 schools. Pakistan's largest ever visioning exercise in education." },
        { value: 250, suffix: "", label: "Trained as Champion Teachers across 52 schools in Islamabad, Lahore, Peshawar, Karachi, Quetta, Sujawal, and Multan." },
        { value: 4200, suffix: "+", label: "A sustained WhatsApp community of parents and teachers, built for long-term engagement beyond the programme's formal timeline." },
      ],
      closingNote: "Walidain HumQadam proved that parental engagement in education is not an infrastructure problem. It\u2019s a behaviour change problem. One that starts with aspiration, is sustained through habit, and scales through technology. Pakistan now has a tested blueprint. What it needs next is the national commitment to use it.",
    },
    gallery: {
      heading: "Gallery",
      images: [
        { src: "/images/peie/unicef-peie02.jpg", alt: "Parents participating in a vision board workshop", span: "wide" },
        { src: "/images/timeline/2023/parenting-session.jpg", alt: "Community parenting session with mothers and fathers", span: "normal" },
        { src: "/images/timeline/2023/parenting-screening.jpg", alt: "Film screening event for parents", span: "normal" },
      ],
    },
  },

  /* 5 ─ UNICEF WASH Film / Film for Change */
  {
    slug: "unicef-wash-film",
    year: "2023 – 2025",
    tags: ["WASH", "Film Screenings", "Punjab", "UNICEF", "DREAMS-I", "Behaviour Change", "Water Conservation", "Waste Segregation", "Entertainment-Education", "Climate Resilience", "Urban Punjab", "Rawalpindi", "Bahawalpur", "Girls Empowerment", "SDG 6", "SDG 11", "SDG 13"],
    theme: {
      primary: "#0D4A6B",
      primaryLight: "#1A7AAA",
      accent: "#2A9A6A",
      accentLight: "#4ACA8A",
    },
    hero: {
      eyebrow: "UNICEF Pakistan · DREAMS-I · Rawalpindi & Bahawalpur",
      title: "Film for<br><em>Change.</em>",
      subtitle: "Transforming 20,000 Lives Through Stories: Cinema-Quality Behaviour Change Screenings Across Punjab",
      description: "300+ community film screenings. 20,000 lives touched. 14,000 girls and women reached. In partnership with UNICEF, ADB, and the Government of Punjab, White Rice used the proven power of cinema and facilitated storytelling to shift how communities in Rawalpindi and Bahawalpur manage water and waste, building climate resilience from the ground up.",
      meta: [
        { label: "Client", value: "UNICEF Pakistan · DREAMS-I" },
        { label: "Partners", value: "ADB · Government of Punjab · WASA Rawalpindi · BWMC" },
        { label: "Cities", value: "Rawalpindi · Bahawalpur" },
        { label: "White Rice Role", value: "Film Production · Screening Programme · Behaviour Change Design" },
      ],
    },
    heroImage: "/images/timeline/2023/parenting-screening.JPG",
    role: {
      heading: "Film Production, Facilitation Design & <em>Behaviour Change Architecture</em>",
      body: "White Rice designed and delivered the entire Film for Change programme under DREAMS-I, a joint initiative of UNICEF, the Asian Development Bank, and the Government of Punjab to build climate resilience across urban Punjab. Our mandate was to produce cinema-quality short films featuring recognisable public figures, design a structured facilitation methodology for converting emotional engagement into behaviour change, train frontline social mobilisers, and scale across 50 schools in two cities in under three months. The programme reached 20,000 children, youth, and community members, with a deliberate equity focus ensuring 14,000 girls and women were at the centre of the effort.",
      services: [
        "Film Production (Water Conservation & Waste Segregation)",
        "Celebrity Talent Integration",
        "Facilitation Methodology Design",
        "Screening Programme Architecture",
        "Social Mobiliser Training",
        "Real-Time Cloud Monitoring",
        "Behaviour Change Toolkit",
        "Theory of Change Design",
        "Qualitative Insights Capture",
      ],
    },
    outcomes: {
      cards: [
        { stat: "20,000+", description: "Children, youth, and community members reached across 50 schools in Rawalpindi and Bahawalpur, with the programme completed in under three months." },
        { stat: "300+", description: "Film screenings delivered across schools and communities, each followed by structured facilitation, behaviour pledging, and visual reminder placement." },
        { stat: "14,000+", description: "Girls and women reached, reflecting a deliberate equity design that centred those who manage water and waste in Punjab households every day." },
        { stat: "2,000+", description: "Action photos submitted by families showing behaviour reminders placed in kitchens, bathrooms, and near water points, proving early adoption in the home." },
        { stat: "500+", description: "Video testimonials captured through real-time cloud-based monitoring, documenting genuine attitude and behaviour shifts across both cities." },
      ],
      watermark: "20K",
    },
    photoBand1: [
      { src: "/images/unicef-wash-film/infographic-horizontal.jpg", alt: "Film Screenings for Behaviour Change: Reaching 20,000 Communities — geographic reach, Rawalpindi and Bahawalpur data, behaviour change curve and success indicators", fit: "contain" },
    ],
    challenge: {
      heading: "The Challenge",
      body: "Urban Punjab faces a mounting environmental crisis: water scarcity, waste mismanagement, climate stress, and cascading public health consequences. Infrastructure alone cannot solve these problems. In Rawalpindi, taps run and coolers leak and hoses flood the street, not because people don't care, but because the habit has never been confronted with something that felt personal. In Bahawalpur, wet and dry waste commingles in bins and on streets because no one has made the alternative feel real, achievable, or important.\n\nUNICEF and its partners under the DREAMS-I programme understood that the largest infrastructure investment in water and waste systems would fall short of its potential without a parallel investment in behaviour. Long-term climate resilience begins at home, in the decisions made at the tap, at the dustbin, and in the conversations families have around these daily acts.",
      quote: {
        text: "Infrastructure alone cannot solve these problems. Long-term resilience depends on everyday behaviours, how water is used, how waste is managed, and how communities engage with municipal systems.",
      },
    },
    strategy: {
      heading: "The Strategy",
      intro: "30 years of global evidence shows that Entertainment-Education works. Stories bypass resistance, create emotional identification, and model the behaviours we want communities to adopt. White Rice designed a five-stage theory of change: from screening to sustained action.",
      steps: [
        { number: "01", title: "Film Screening", description: "Relatable stories featuring recognisable public figures create emotional engagement and personal recognition. Water conservation starred Sarwat Gillani. Waste segregation featured Behroze Sabzwari. Faces audiences already trusted, telling stories that felt like their own." },
        { number: "02", title: "Facilitated Discussion", description: "Trained facilitators guided open-ended reflective discussions using participatory techniques, converting emotional reaction into conscious reflection and personal meaning-making." },
        { number: "03", title: "Personal Reflection", description: "Participants reassessed their own habits, considered specific alternatives, and identified the smallest possible step they could take that same day." },
        { number: "04", title: "Social Reinforcement", description: "Visual reminders, behaviour pledges, and stickers placed at water points and waste bins in homes created environmental cues that reinforced intention in the moments of decision." },
        { number: "05", title: "Early Action", description: "Small, achievable practices, turning off the tap while brushing, fixing a leaking cooler, separating wet and dry waste, were tested daily, building confidence and social normalisation." },
      ],
    },
    work: {
      heading: "The Intervention",
      body: "In under three months, White Rice delivered 300+ film screenings across 50 schools in Rawalpindi and Bahawalpur, each a structured event with its own arc: welcome, film, discussion, pledging, visual reminder placement, and real-time documentation. The primary audience was children aged 11–16, complemented by parents, women's groups, teachers, and community leaders. Two-thirds of screenings took place in schools, with a deliberate emphasis on girls' schools. One-third engaged community settings, reaching the women who manage water and waste in their homes daily.",
      deliverables: [
        "Two original behaviour change films (water conservation & waste segregation)",
        "Celebrity talent integration (Sarwat Gillani, Behroze Sabzwari)",
        "Structured facilitation methodology and discussion guides",
        "Behaviour pledge and visual reminder toolkit",
        "50-school screening programme across 2 cities",
        "Social mobiliser training and capacity transfer",
        "Real-time cloud dashboard tracking attendance, testimonials, and photos",
        "500+ video testimonials and 2,000+ qualitative verbatims",
        "Sustainability handover to DREAM1 Social Mobilisers",
      ],
    },
    photoBand2: [
      { src: "/images/unicef-wash-film/screening-community.jpg", alt: "UNICEF Film Screenings for Behaviour Change: Step-by-Step Process and Participant Diversity infographic showing implementation methodology", fit: "contain" },
    ],
    photoBand3: [
      { src: "/images/unicef-wash-film/infographic-landscape.jpg", alt: "Punjab 2026: Future-Ready Schools Film Initiative — 12-month acceleration pathway to reach 10,000 schools across Punjab", fit: "contain" },
    ],
    photoBand4: [
      { src: "/images/unicef-wash-film/postcard.jpg", alt: "Punjab 2035 vision postcard: a future city with eco-schools, solar panels, and clean green community spaces" },
    ],
    impact: {
      heading: "Impact",
      metrics: [
        { value: 20000, suffix: "+", label: "Lives Touched" },
        { value: 300, suffix: "+", label: "Film Screenings" },
        { value: 14000, suffix: "+", label: "Girls & Women Reached" },
        { value: 50, suffix: "", label: "Schools Across 2 Cities" },
        { value: 2000, suffix: "+", label: "Action Photos Submitted" },
        { value: 500, suffix: "+", label: "Video Testimonials" },
      ],
    },
    impactCells: [
      { big: "The Multiplier", desc: "Each screening of 60–80 participants rippled outward: children carried the conversation home, influencing 200–300 family members. Families talked to neighbours. Neighborhoods shifted. Each screening was not an event. It was a transmission." },
      { big: "Girls at Centre", desc: "14,000+ girls and women reached through a deliberate equity design, centering those who manage water and waste in Punjab households every day. Change in behaviour at home requires her participation." },
      { big: "Evidence of Change", desc: "2,000+ photos, 500+ video testimonials, and 2,000+ qualitative verbatims captured through real-time monitoring. Families placing stickers by their taps. Children reminding elders. The evidence was not anecdotal. It was documented." },
      { big: "Scaling to 100K", desc: "The methodology has been validated and the capacity transferred to DREAMS-I Social Mobilisers. The vision: 100,000 lives reached in the next phase, without White Rice in the room for every screening." },
    ],
    closing: {
      heading: "Stories change minds.<br>Minds change behaviours.<br><em>Behaviours change communities.</em>",
      body: "The Film for Change initiative proved that engaging children and communities through facilitated storytelling is a powerful, scalable approach for driving behaviour change in urban service contexts. The experience offers a replicable, adaptable model that can be embedded within schools, community programmes, and municipal initiatives across Punjab and beyond.",
    },
    gallery: {
      heading: "Gallery",
      images: [
        { src: "/images/timeline/2023/parenting-screening.JPG", alt: "Community film screening under the DREAMS-I programme in Punjab", span: "wide" },
        { src: "/images/unicef-wash-film/infographic-horizontal.jpg", alt: "Film Screenings for Behaviour Change: 20,000 communities reached across Rawalpindi and Bahawalpur", span: "wide" },
        { src: "/images/unicef-wash-film/screening-community.jpg", alt: "Step-by-step implementation process and participant diversity infographic", span: "wide" },
        { src: "/images/unicef-wash-film/infographic-landscape.jpg", alt: "Punjab 2026 Future-Ready Schools Film Initiative scale-up pathway", span: "wide" },
        { src: "/images/unicef-wash-film/postcard.jpg", alt: "Punjab 2035: the vision for a climate-resilient, eco-educated Punjab", span: "wide" },
      ],
    },
  },

  /* 6 ─ UNICEF PlayLab */
  {
    slug: "unicef-playlab",
    year: "2024 – 2025",
    tags: ["ECD", "Playful Parenting", "Father Engagement", "SBC Design", "UNICEF Pakistan", "Sujawal · Sindh", "Play Champions", "Community Co-Design", "WhatsApp Monitoring", "PlayMela", "Low-Resource Innovation", "Scale Readiness", "Norm Shifting", "Pakistan's First"],
    theme: {
      primary: "#C4521A",
      primaryLight: "#E87A48",
      accent: "#2A5A1A",
      accentLight: "#4A8A3A",
    },
    hero: {
      eyebrow: "UNICEF Pakistan · Sujawal District, Sindh · 2024–2025",
      title: "Play<em>Lab</em>",
      subtitle: "Pakistan's First Evidence-Based Parenting PlayLab",
      description: "A radical experiment in one district: inviting parents to rediscover play, and in doing so, reimagining who is responsible for a child's earliest years. Eight weeks. Nearly 600 caregivers. One question: if play could transform Sujawal, what could it do across Pakistan?",
      meta: [
        { label: "Client", value: "UNICEF Pakistan" },
        { label: "Location", value: "Sujawal District, Sindh" },
        { label: "Duration", value: "8-Week Pilot · 2024–2025" },
        { label: "Focus", value: "ECD · Playful Parenting · SBC · Father Engagement" },
        { label: "White Rice Role", value: "Programme Design, SBC Architecture & Community Co-Design" },
      ],
    },
    heroVideo: "/videos/playLab.mp4",
    role: {
      heading: "Programme Design, SBC Strategy & <em>Community Co-Design</em>",
      body: "White Rice led the full design of Pakistan's first PlayLab for Parents, from the initial concept inspired by BRAC's globally validated model to its contextualisation for Sujawal's specific social norms, literacy levels, and community rhythms. This encompassed SBC strategy, session curriculum design, Play Champion training systems, WhatsApp monitoring architecture, community ritual design including the PlayMela, and the complete documentation required for replication and national scale.",
      services: ["SBC Programme Design", "Community Contextualisation", "Play Champion Training", "68-Session Curriculum", "Father Engagement Architecture", "WhatsApp Monitoring System", "PlayMela Community Ritual", "Theory of Change", "Scale Roadmap", "Programme Documentation"],
    },
    outcomes: {
      cards: [
        { stat: "~600", description: "Caregivers engaged across 68 sessions over 8 weeks, including near-equal participation from mothers and fathers, unprecedented for a structured parenting programme in rural Sindh." },
        { stat: "302 / 296", description: "Mothers and fathers, near parity in a context where fathers have been historically absent from any parenting programme. A structural design choice that produced a norm-shifting outcome." },
        { stat: "100+", description: "Handmade toys created by families from mud, cardboard, and bottle caps, proudly displayed at the PlayMela. Everyday objects, permanently reimagined as tools for a child's learning." },
        { stat: "Pakistan's 1st", description: "PlayLab for Parents in the country, adapted from BRAC's international model, grounded in behavioural science, and purpose-designed for low-literacy, low-resource contexts." },
        { stat: "Play Corners", description: "Appeared independently in homes across the community, unprompted and unsubsidised. Children began requesting handmade toys over bought ones. The norm had visibly shifted." },
      ],
    },
    divider: {
      stat: "60 Million",
      text: "Children under the age of eight in Pakistan. If this generation grows up with positive stimulation, imagination, and responsive caregiving, the trajectory of an entire nation could change. The Sujawal PlayLab was not just a pilot, it was proof of what is possible at scale. By age five, a child's brain has already reached 90% of its adult size, forming nearly a million new neural connections every second. Those connections are not built by expensive toys. They are built by the parent who sits on the floor and plays.",
    },
    sbc: {
      eyebrow: "Social & Behaviour Change Architecture",
      heading: "Three things had to shift at once:<br><em>what play means, who plays, and where it happens.</em>",
      cards: [
        { title: "Reframing Play as Work", body: "In Sujawal, play was \"timepass.\" PlayLab had to shift this at the cognitive level, positioning play as \"brain-building work\" and parents as their child's first and most important teacher. Not through lecture, but through experience. When a father watches his child's face light up as they build a tower together and then the tower falls and the child rebuilds it, he understands neural connections more viscerally than any training session could communicate." },
        { title: "Making the Shift Social and Visible", body: "Individual behaviour change is fragile when the surrounding norm is unchanged. The PlayMela was designed specifically to make the private public. When Munir the craftsman built a cardboard house with an \"ECD Room\" as a tribute to the programme, and when that house won first prize in front of the whole village, every parent in Sujawal saw that engaged parenting was something to aspire to, not something to hide." },
        { title: "Removing the Affordability Barrier", body: "Financial barriers to play were real. But \"anything can be a toy\" worked because the programme proved it, session after session, with materials that every family already had at home. When children began buying cardboard in the market to make their own toys instead of requesting bought ones, the norm had fully shifted. Local creativity had become more desirable than consumption, a profound reversal in communities where ready-made goods signal aspiration." },
      ],
      quote: { text: "We used to scold kids for banging pots. Now we realise they were learning.", attribution: "— Mother, Sujawal · PlayLab Participant" },
    },
    scaleBand: {
      heading: "From Sujawal<br>to <em>Pakistan.</em>",
      paragraphs: [
        "PlayLab is not a short-term project. Its low-cost structure, everyday materials, shared community spaces, locally recruited and WhatsApp-trained Play Champions, ensures sessions can continue long after any initial funding cycle. The method itself is the intervention, and the Sujawal pilot has produced a complete replication blueprint ready for embedding into Lady Health Worker systems, government pre-school networks, and provincial ECD strategies contributing to Vision 2030 and 2040 human capital goals.",
        "With 60 million children under eight in Pakistan, this is not a small ambition. It is a national one.",
      ],
      items: [
        { title: "Play Champions, A New Micro-Cadre", body: "Locally recruited, WhatsApp-trained, trusted as neighbours. Play Champions are not programme staff, they are community institutions. Institutionalising this cadre across Pakistan is the fastest route to scale." },
        { title: "Lady Health Worker Integration", body: "Lady Health Workers visit homes across the country. Embedding PlayLab modules into their existing protocols requires minimal disruption and unlocks Pakistan's most trusted community health network as a delivery mechanism." },
        { title: "National PlayLab Toolkit", body: "A story-led, visual, low-literacy-sensitive toolkit in Urdu, designed for flexible local adaptation while ensuring consistent quality across contexts. Ready for provincial rollout." },
        { title: "SDG Accelerator Platform", body: "PlayLab spaces are trusted community gatherings. They are natural platforms for community dialogue on SDG 1 (No Poverty), SDG 2 (Zero Hunger), SDG 4 (Quality Education), and SDG 6 (Clean Water), making PlayLab a grassroots vehicle for Pakistan's broader development commitments." },
      ],
    },
    phases: [
      { num: "01", title: "Community Engagement & Setup", body: "Trust before anything. Local leaders, parents, and potential Play Champions were consulted from the start. Community spaces were transformed using simple mats, hand-painted posters, and household objects, proving from day one that play requires nothing expensive, only intention and a little floor space." },
      { num: "02", title: "Training Play Champions", body: "Two local community members were selected and trained as Play Champions, trusted neighbours, not outside experts. Blended training: WhatsApp video modules for concepts, hands-on practicums for skills, and a detailed Urdu Play Champion Guidebook as an ongoing reference. Local leadership, built to outlast any programme cycle." },
      { num: "03", title: "68 Sessions Over 8 Weeks", body: "Each session followed a three-part rhythm: Welcome & Warm-Up (10 min) to build trust and emotional readiness; Main Activity (35–40 min) of themed, hands-on play using low-cost materials; and a Parent Learning Circle (10 min) for peer reflection and at-home commitments. Groups of 10–12, small enough for safety, large enough for community." },
      { num: "04", title: "Scheduling Around Community Life", body: "Mothers met in the afternoons after chores. Fathers met at 6:00 AM before work. Sessions shifted around midday heat, harvest seasons, and village festivals. Home visits by Play Champions ensured parents felt invited rather than obligated. The programme respected village rhythms rather than imposing institutional ones." },
      { num: "05", title: "Real-Time Monitoring & Feedback Loops", body: "Daily WhatsApp voice notes, photographs, and Google Forms from Play Champions created a live programme-learning stream. Activities were extended, simplified, or replaced within 24 hours based on what participants actually experienced, not what the curriculum assumed they would." },
      { num: "06", title: "The PlayMela, Village-Wide Culminating Festival", body: "Families arrived with over 100 handmade toys: bullock carts built under torchlight at 2 AM, cardboard houses with dedicated \"ECD Rooms,\" kitchens made from clay. Neighbours admired. Children ran. Fathers stood beside what they had made with their own hands. Play had moved from a household secret to a community achievement. The norm had been anchored in public life." },
    ],
    sessionRhythm: [
      { time: "10 min", title: "Welcome & Warm-Up", body: "Songs, introductions, or a light activity. Signal: this is a safe space. For parents who have never been invited to play alongside their children, the first ten minutes are the entire programme." },
      { time: "35–40 min", title: "Main Activity", body: "Themed play, sensory, pretend, constructive, cooperative, using only what families already have. Mud, cloth, bottle caps, cardboard. One developmental takeaway, kept vivid and concrete. No categories. Moments." },
      { time: "10 min", title: "Parent Learning Circle", body: "Peer reflection and a specific at-home commitment for the week. Accountability is horizontal, parent to parent, not expert to audience. The people who shifted first became the peer models who shifted everyone else." },
    ],
    featuresGridIntro: "Six design features made PlayLab structurally distinct from every conventional parenting programme, each one targeting a specific barrier that had made previous interventions fall short.",
    featuresGrid: [
      { num: "01", title: "Parents as First Teachers", body: "PlayLab did not teach parents about parenting. It gave them the experience of being their child's best teacher, through doing, not through listening. Repeated practice built confidence. Confidence built habit." },
      { num: "02", title: "Norm-Shifting Rituals", body: "Public events like the PlayMela turned private play into community achievement. When a father's cardboard house wins first prize, every man in the village sees what engaged fatherhood looks like. Norms shift at the social level, not just the individual one." },
      { num: "03", title: "Father Engagement by Design", body: "Early mornings. Peer role models. Male-only safe spaces. Refreshments. These were not accommodations, they were strategic design choices that produced near-equal participation from men in a context where no previous parenting programme had succeeded in bringing them in." },
      { num: "04", title: "Low-Cost, Indigenous Play", body: "\"Anything can be a toy\" was not a slogan. It was the entire curriculum philosophy. When children began buying cardboard at the market to make their own toys instead of asking for bought ones, the programme had made locally-sourced creativity more desirable than consumption." },
      { num: "05", title: "Lean, Adaptive Design", body: "One takeaway per session. Daily WhatsApp feedback. Real-time course correction. The programme had a curriculum, but it also had ears. When something wasn't landing, it changed within 24 hours. When something worked, it expanded. This responsiveness is what made families feel heard and keep coming back." },
      { num: "06", title: "Community Transformation as the Goal", body: "PlayLab was never just about individual children. The ambition was to shift what a community believes caregiving looks like, restoring dignity to parenting, building intergenerational bonds, and making local creativity a source of pride. When the community owns play, no funding cycle can end it." },
    ],
    storiesIntro: "The behavioural data only tells part of the story. Three families captured what had actually changed in Sujawal.",
    stories: [
      { initial: "A", name: "Atif, 5 Years Old & His Grandparents", text: "When the PlayMela was announced, Atif did not want a shop toy. He wanted to make one. With his grandmother and grandfather, by torchlight with no electricity, they built a mud bullock cart, once common in the village, now nearly forgotten. By 2:00 AM it was complete, painted in bright colours. At the PlayMela, Atif declared it better than any toy his father had brought from the city.", quote: "\"Mujhe yeh khilona ziada pasand hai kyun ke yeh meri dadi ne banaya hai.\", Atif" },
      { initial: "G", name: "Gulshan Ara, 10 Years Old, Her Mother & Father", text: "Gulshan arrived at the PlayLab and saw a plane, a swing, a lamp, all made by other children. \"If they can imagine these, I can too,\" she told her mother. Together with her sister and mother, they built a mud house. Her father, who once played for one hour, now plays two, joining pretend games as a nurse, a patient, a student. Before the PlayLab, the family was together but apart.", quote: "\"In the PlayLab I learned pretend play, and at home I taught it to Gulshan.\", Gulshan's Mother" },
      { initial: "M", name: "Munir, Craftsman, Father", text: "Munir's daughter asked him to make something for the PlayMela. He built a miniature cardboard house, courtyard, swings, road, cars, with one detail that set it apart: a dedicated room labelled \"ECD,\" a tribute to the programme that had completely reshaped how he understood fatherhood. The house won first prize.", quote: "\"Mein eik karigar hun, mene apni beti ke kehne par yeh ghar banaya, aur isme PlayLab ke liye ECD ke naam se kamra bhi banaya.\", Munir" },
    ],
    challenge: {
      heading: "The Challenge",
      body: "In Pakistan, play is dismissed, not for children, but for parents. Across communities like Sujawal, where poverty is structural, literacy is low, and social norms run deep, the idea that a parent should sit on the floor and make toys out of mud is not just unfamiliar. It is seen as wasteful, or beneath the dignity of a working father, or simply not something the community does.\n\nYet the science is unambiguous. The first eight years determine cognitive development, emotional health, and educational outcomes for decades to come. Those years are shaped not by classrooms or curricula, they are shaped by responsive caregiving and play. The parent who stops to respond, to build together, to talk through a story, this is who determines a child's developmental trajectory.\n\nExisting ECD programmes in Pakistan were child-facing, not parent-facing. They were lecture-based, literacy-dependent, and targeted mothers in isolation. Fathers, the gatekeepers of social permission in most households, were absent from the conversation entirely. What White Rice was asked to design was something genuinely different: a programme that would make play <em>feel</em> important, not just sound important, in a community where neither the infrastructure nor the social permission for playful caregiving existed.",
      quote: {
        text: "In Sujawal, play was dismissed as 'timepass.' Fathers were absent from caregiving. Toys were seen as luxuries. And mothers were overburdened and unsupported. The challenge was not information. It was norms.",
      },
    },
    strategy: {
      heading: "The Strategy",
      intro: "White Rice drew on BRAC's globally validated PlayLab model, which had demonstrated 5x greater developmental gains for PlayLab children over peers in a two-year Bangladesh study, and systematically redesigned it for Sujawal's specific social, cultural, and literacy context. Four strategic pillars shaped every design decision.",
      steps: [
        { number: "01", title: "Practice, Not Preaching", description: "Parents do not change through lectures. They change through doing. Every PlayLab session was built around hands-on activity, parents sitting on the floor making toys, telling stories, playing alongside their children. The experience was the message. Abstract language like \"constructive play\" became vivid memory: building a cardboard tower, racing bottle caps, pretending to cook with mud. One concrete takeaway per session. No jargon." },
        { number: "02", title: "Social Reinforcement, Make It Public", description: "Private behaviour change is fragile. Social behaviour change is durable. The programme was designed to move play out of individual households and into collectively visible, publicly celebrated spaces. The PlayMela, a village-wide festival where families displayed the toys they had built together, was not an add-on. It was the strategic centrepiece: the moment when private play became a community norm, and mud became a symbol of intelligence." },
        { number: "03", title: "Fathers In by Design", description: "Father engagement was not an aspiration, it was engineered into the programme's architecture. Separate 6:00 AM sessions fit the rhythms of men who would otherwise use work as a reason to disengage. Peer role models. A psychologically safe space. Light refreshments. The result: 296 fathers alongside 302 mothers, near parity in rural Sindh. Men who had defined themselves as distant providers began waking early to play with their children before work." },
        { number: "04", title: "Lean, Adaptive, Always Listening", description: "The programme was built to learn in real time. Play Champions reported daily via WhatsApp voice notes, photographs, and Google Forms, creating a live feedback loop that allowed the design team to adapt within 24 hours: extending what resonated, simplifying what confused, adjusting schedules around harvest seasons and village festivals. The programme moved with the rhythms of community life, not against them." },
      ],
    },
    work: {
      heading: "The Intervention",
      body: "The PlayLab unfolded across six sequential phases, each building on the last, from community trust-building through to a village-wide celebration that anchored the norm change in public life and community memory.",
      deliverables: ["SBC Programme Design", "Community Contextualisation", "Play Champion Training", "68-Session Curriculum", "Father Engagement Architecture", "WhatsApp Monitoring System", "PlayMela Community Ritual", "Theory of Change", "Scale Roadmap", "Programme Documentation"],
      quote: "Before, I thought this was only the mother's responsibility. Now I feel I'm part of this journey too.",
    },
    impactCells: [
      { big: "68 Sessions", desc: "Conducted over 8 weeks, each attended, each adapted in real-time based on daily feedback from Play Champions in the field. The curriculum improved as it was delivered." },
      { big: "~600 Attendances", desc: "302 mothers and 296 fathers, near-equal participation in a rural Sindh setting where structured parenting programmes had never previously engaged men in any meaningful way." },
      { big: "100+ Toys", desc: "Handmade by families from everyday materials, proudly showcased at the PlayMela. Each one a symbol of a norm that had visibly, permanently shifted in Sujawal." },
      { big: "Play Corners", desc: "Appeared in homes across the community, independently, without prompting or subsidy. The programme had ended. The behaviour had not. That is what behaviour change looks like when it works." },
      { big: "Fathers Rising Early", desc: "Multiple fathers reported waking before work to play with their children, a new morning ritual that children came to anticipate. One father said his son now waits for him every morning. Waiting. Every morning." },
      { big: "A National Blueprint", desc: "The Sujawal pilot is documented and replication-ready, for integration into Lady Health Worker networks, government pre-school systems, and provincial ECD strategies targeting Vision 2030 human capital goals." },
    ],
    impact: {
      heading: "The Impact",
      metrics: [],
    },
    closing: {
      heading: "If play could transform Sujawal,<br>imagine what it could do <em>across Pakistan.</em>",
      body: "The Sujawal PlayLab proved that even in contexts of poverty and low literacy, families can nurture children who are loved, stimulated, and ready to thrive. With 60 million children under eight in Pakistan, PlayLab is more than a project. It is a scalable, low-cost blueprint for responsive parenting at national scale. White Rice designed the programme. The community made it a movement.",
    },
    gallery: {
      heading: "Gallery",
      images: [
        { src: "/images/play-lab/play-lab09.jpeg", alt: "Children engaged in hands-on clay play at a community PlayLab", span: "wide" },
        { src: "/images/play-lab/play-lab08.jpeg", alt: "Completed UNICEF ECD PlayLab building with hand-painted murals", span: "normal" },
        { src: "/images/play-lab/play-lab07.jpeg", alt: "UNICEF PlayLab exterior with colourful Urdu signage and community artwork", span: "normal" },
        { src: "/images/play-lab/play-lab01.jpeg", alt: "Women crafting play-based learning materials with colourful yarn", span: "wide" },
        { src: "/images/play-lab/play-lab06.jpeg", alt: "Community members setting up a PlayLab building with UNICEF branding", span: "normal" },
        { src: "/images/play-lab/play-lab03.jpeg", alt: "Facilitators hanging community-made embroidered learning art on the wall", span: "normal" },
      ],
    },
  },

  /* 7 ─ UNFPA Transgender */
  {
    slug: "unfpa-transgender",
    year: "2019 - 2020",
    tags: ["HIV Prevention", "Behaviour Change", "Transgender Community", "Khawaja Sira", "Animation", "Human-Centred Design", "Ethnographic Research", "Peer Education", "Co-Creation", "UNFPA", "SDG 3", "Pakistan"],
    theme: {
      primary: "#1A6B6B",
      primaryLight: "#3A9B9B",
      accent: "#B84A6A",
      accentLight: "#D87A9A",
    },
    hero: {
      eyebrow: "UNFPA Pakistan \u00b7 Lahore & Karachi \u00b7 Multi-City",
      title: "Apni <em>Kahani</em>",
      subtitle: "HIV Prevention Animation Series for Pakistan\u2019s Transgender Community",
      description: "A six-part animation drama series, built on 90 days of ethnographic co-creation with Pakistan\u2019s Khawaja Sira community \u2014 designed not to lecture, but to open a conversation that had never been possible before.",
      meta: [
        { label: "Client", value: "UNFPA Pakistan" },
        { label: "Community", value: "Khawaja Sira (Transgender) Community" },
        { label: "Focus", value: "HIV Prevention & Safe Behaviour Change" },
        { label: "White Rice Role", value: "Research, Co-Creation & Creative Lead" },
      ],
    },
    heroVideo: "/videos/unfpa-apni-kahani.mp4",
    role: {
      heading: "Human-Centred Design & <em>Creative Lead</em>",
      body: "White Rice led the full design and production cycle \u2014 from 90 days of immersive ethnographic research and co-creation with the Khawaja Sira community, through to scripting, illustration, animation production, voiceover casting, and peer educator facilitation design. Every element of the series was built with the community, not for them.",
      services: [
        "Ethnographic Research",
        "Human-Centred Design",
        "Community Co-Creation",
        "Script & Storyline Development",
        "Animation Production",
        "Illustration & Visual Design",
        "Peer Educator Facilitation Guide",
        "Behaviour Change Strategy",
      ],
    },
    outcomes: {
      cards: [
        { stat: "6 Episodes", description: "A complete animation drama series \u2014 Pakistan\u2019s first culturally grounded HIV prevention content for the Khawaja Sira community." },
        { stat: "90 Days", description: "Of immersive ethnographic research across Lahore and Karachi \u2014 50+ days of direct observation, shadowing, and in-community co-creation." },
        { stat: "30\u201340 Min", description: "Average peer-facilitated conversation triggered by each 5\u20136 minute episode \u2014 with concrete commitments and action agreements by participants." },
        { stat: "National Standard", description: "The series became the standard conversation-starter tool for HIV prevention engagement with the Khawaja Sira community across Pakistan." },
        { stat: "Community Voice", description: "All voiceovers performed by actual Khawaja Sira community members \u2014 creating an authenticity no external production could replicate." },
      ],
      watermark: "APNI KAHANI",
    },
    divider: {
      stat: "High<br>Prevalence.<br>Deep<br>Silence.",
      text: "At the time of this programme, HIV prevalence among Pakistan\u2019s transgender community was critically high \u2014 and safe practice rates were critically low. The barrier was not access to information. It was a combination of deep social taboo, community mistrust of health systems, the shame associated with open discussion, and the absence of any content that felt like it was made for \u2014 and by \u2014 this community.",
    },
    episodes: {
      eyebrow: "The Intervention \u00b7 Six-Part Animation Series",
      heading: "<em>Apni Kahani</em> \u2014 A Drama in Six Episodes",
      cards: [
        { num: "01", tag: "Episode One", name: "Community & Belonging", description: "Establishes the world \u2014 the dera, the guru-chela relationship, the social fabric of community life \u2014 through characters the audience immediately recognise as their own." },
        { num: "02", tag: "Episode Two", name: "The Myth and the Fear", description: "A character encounters misinformation about HIV transmission. The episode dramatises how myths spread \u2014 and the real cost of leaving them unchallenged." },
        { num: "03", tag: "Episode Three", name: "The Moment of Choice", description: "A real-life scenario in which a character faces a decision about safe practice \u2014 showing the social pressures, the hesitation, and what support from a peer can change." },
        { num: "04", tag: "Episode Four", name: "Seeking Help", description: "The journey of accessing screening \u2014 the fear, the stigma, the barriers \u2014 and the relief of a peer who has been through it guiding the way forward." },
        { num: "05", tag: "Episode Five", name: "What We Don\u2019t Say", description: "A story about silence \u2014 within the community \u2014 and the cost of not talking. Designed to surface the conversations the facilitated session then brings into the open." },
        { num: "06", tag: "Episode Six", name: "Our Responsibility", description: "A forward-looking close \u2014 showing collective action, peer support, and what a community looks like when it decides to protect itself together." },
      ],
      note: "Each episode ran <strong>5\u20136 minutes</strong> and was followed by a <strong>peer educator-facilitated session</strong> using a structured question guide co-designed with the community. What began as a short screening consistently became a <strong>30\u201340 minute conversation</strong> \u2014 with participants identifying specific actions, making personal commitments, and agreeing on collective next steps. The episode was not the intervention. <strong>The conversation it opened was.</strong>",
    },
    designProcess: {
      heading: "Built <em>with</em> the community.<br>Not for them.",
      paragraphs: [
        "Every design decision in this programme \u2014 from the storylines to the visual style to the language used \u2014 was validated, iterated, and approved by the Khawaja Sira community through multiple rounds of real-time co-creation and testing.",
        "This was not a token consultation. It was the design methodology.",
      ],
      items: [
        { label: "Farsi Language Integration", body: "The Khawaja Sira community has its own distinct language \u2014 Farsi. Scripts were developed with community members to ensure authentic use of vocabulary, idiom, and tone that the audience would immediately recognise as their own." },
        { label: "Community Voiceovers", body: "All character voiceovers were performed by actual Khawaja Sira community members \u2014 not professional voice actors. This single decision transformed the content\u2019s credibility from the first moment of screening." },
        { label: "Illustrations Co-Created in Community", body: "Visual characters, settings, and design elements were developed iteratively with community input \u2014 ensuring that when members watched the animation, they saw themselves, not a generic approximation." },
        { label: "Real Stories, Real Scenarios", body: "Storylines were drawn directly from real experiences shared during the research phase \u2014 grounding every episode in situations the community had actually lived, not scenarios imagined by external designers." },
      ],
    },
    closing: {
      heading: "You cannot change a behaviour<br>you cannot yet <em>talk about.</em>",
      body: "Apni Kahani created the conditions for a conversation that had never been possible before \u2014 built on three months of deep listening, radical co-creation, and the conviction that a community\u2019s own voice is the most powerful behaviour change tool there is.",
    },
    impactCells: [
      { big: "National Tool", desc: "The series became the standard HIV prevention conversation-starter for the Khawaja Sira community across Pakistan \u2014 adopted and used consistently across all outreach and engagement." },
      { big: "30\u201340 Min", desc: "Average peer-facilitated conversation per 5\u20136 minute episode \u2014 with community members identifying actions and making personal and collective commitments." },
      { big: "Trust Built", desc: "By ensuring community members voiced their own characters and co-created every element, the content achieved an immediate authenticity that broke down barriers no external campaign had managed." },
      { big: "Conversation Opened", desc: "For the first time, community groups across Pakistan had a structured, emotionally safe, peer-led format for talking openly about HIV, safe practice, and screening." },
    ],
    challenge: {
      heading: "The <em>Challenge</em>",
      body: "Pakistan's Khawaja Sira community lives at the intersection of multiple vulnerabilities \u2014 social marginalisation, economic precarity, and a healthcare system that has historically failed to serve them with dignity or cultural competence. HIV prevention programming aimed at this community had repeatedly failed \u2014 not because the information was wrong, but because the approach was fundamentally broken.\n\nExisting materials were generic, clinical, and created entirely without community input. They used neither the community's own language \u2014 Farsi \u2014 nor their cultural references, social dynamics, or the specific scenarios in which unsafe behaviours actually occurred. Myths were widespread. Screening was avoided. Peer conversations on the subject were almost nonexistent.\n\nThe challenge was not a communications problem. It was a trust problem, a representation problem, and a shame problem \u2014 all of which required a fundamentally different design approach.",
      quote: {
        text: "Standard awareness campaigns don't work when the community has never seen themselves represented, has no reason to trust the messenger, and carries a lifetime of shame around the subject being discussed.",
      },
    },
    strategy: {
      heading: "The <em>Strategy</em>",
      intro: "Before a single frame was drawn or a line of script written, White Rice spent three months inside the community. The research phase was not a needs assessment \u2014 it was an act of deep listening. The team used immersive human-centred design and ethnographic methods across Lahore and Karachi to understand the community not as a health target group, but as a complex social world with its own culture, language, relationships, and logic.",
      steps: [
        {
          number: "01",
          title: "Entertainment Over Instruction",
          description: "Drama and storytelling to create emotional engagement first \u2014 making the content something the community wanted to watch, not something they were made to sit through.",
        },
        {
          number: "02",
          title: "Peer-Led Facilitation",
          description: "A community peer educator \u2014 not a health worker or outsider \u2014 as the bridge between the content and the conversation it needed to unlock.",
        },
        {
          number: "03",
          title: "Radical Cultural Authenticity",
          description: "Farsi language in the script. Real-life community scenarios. Illustrations co-created with the community. Voiceovers performed by community members themselves.",
        },
        {
          number: "04",
          title: "Indirect Approach to a Taboo Subject",
          description: "Tackle HIV and safe practice through the side door \u2014 showing real scenarios, letting characters navigate real dilemmas, and allowing the facilitated conversation to do the work of direct discussion.",
        },
      ],
    },
    work: {
      heading: "The Intervention",
      body: "Each episode ran 5\u20136 minutes and was followed by a peer educator-facilitated session using a structured question guide co-designed with the community. What began as a short screening consistently became a 30\u201340 minute conversation \u2014 with participants identifying specific actions, making personal commitments, and agreeing on collective next steps. The episode was not the intervention. The conversation it opened was.\n\nEvery design decision in this programme \u2014 from the storylines to the visual style to the language used \u2014 was validated, iterated, and approved by the Khawaja Sira community through multiple rounds of real-time co-creation and testing.\n\nThis was not a token consultation. It was the design methodology.",
      deliverables: [
        "Ethnographic Research",
        "Human-Centred Design",
        "Community Co-Creation",
        "Script & Storyline Development",
        "Animation Production",
        "Illustration & Visual Design",
        "Peer Educator Facilitation Guide",
        "Behaviour Change Strategy",
      ],
    },
    impact: {
      heading: "The <em>Impact</em>",
      body: "The most important measure of this programme's success is not reach \u2014 it is what happened in the room. A six-minute episode, shown to a group of Khawaja Sira community members facilitated by a peer they trusted, consistently produced thirty to forty minutes of open, substantive conversation about a subject that had previously been unspeakable in community settings.",
      metrics: [
        { value: 0, suffix: "", prefix: "", label: "The series became the standard HIV prevention conversation-starter for the Khawaja Sira community across Pakistan \u2014 adopted and used consistently across all outreach and engagement." },
        { value: 30, suffix: "\u201340 Min", label: "Average peer-facilitated conversation per 5\u20136 minute episode \u2014 with community members identifying actions and making personal and collective commitments." },
        { value: 0, suffix: "", prefix: "", label: "By ensuring community members voiced their own characters and co-created every element, the content achieved an immediate authenticity that broke down barriers no external campaign had managed." },
        { value: 0, suffix: "", prefix: "", label: "For the first time, community groups across Pakistan had a structured, emotionally safe, peer-led format for talking openly about HIV, safe practice, and screening." },
      ],
      quote: {
        text: "The episode was five minutes. The conversation that followed was forty. That is the gap this programme was designed to open.",
        attribution: "",
      },
      closingNote: "Apni Kahani created the conditions for a conversation that had never been possible before \u2014 built on three months of deep listening, radical co-creation, and the conviction that a community's own voice is the most powerful behaviour change tool there is.",
    },
    gallery: {
      heading: "Gallery",
      images: [
        { src: "/images/unfpa/unfpa01.jpg", alt: "Community outreach session for HIV prevention", span: "wide" },
        { src: "/images/unfpa/unfpa02.jpg", alt: "Apni Kahani peer educator in action", span: "normal" },
        { src: "/images/unfpa/unfpa03.jpg", alt: "Creative materials from the transgender health campaign", span: "normal" },
      ],
    },
  },

  /* 8 ─ UNICEF Clean & Green */
  {
    slug: "unicef-clean-green",
    year: "2019 \u2013 2021",
    tags: ["WASH", "Behaviour Change", "Sanitation", "Open Defecation", "Tree Plantation", "Waste Management", "Digital SBC", "COVID-19 Response", "Punjab Government", "UNICEF", "SDG 3", "SDG 6", "SDG 13"],
    theme: {
      primary: "#2A4A35",
      primaryLight: "#5A8A4A",
      accent: "#5A8A4A",
      accentLight: "#8AB87A",
    },
    hero: {
      eyebrow: "Punjab Government & UNICEF \u00b7 Punjab \u00b7 2019\u20132021",
      title: "Clean & <em>Green</em><span class=\"cs-hero__subtitle-inline\">Punjab Behaviour Change Programme</span>",
      description: "A province-wide social behaviour change intervention across five critical environmental and hygiene behaviours, designed to reach 2 million people directly and 34 million more through digital platforms, including through the height of COVID-19.",
      meta: [
        { label: "Partners", value: "Punjab Government & UNICEF" },
        { label: "Scale", value: "Province-Wide \u00b7 Punjab, Pakistan" },
        { label: "Focus", value: "WASH \u00b7 Environment \u00b7 Sanitation" },
        { label: "White Rice Role", value: "SBC Strategy & Programme Design Lead" },
      ],
    },
    heroVideo: "/videos/cg.mp4",
    role: {
      heading: "SBC Strategy & <em>Programme Design Lead</em>",
      body: "White Rice designed and led the social behaviour change architecture for the Punjab government\u2019s Clean & Green programme, working alongside UNICEF and building on the government\u2019s existing community mobiliser network. Our mandate covered the full design cycle: formative research, SBC strategy, the Mitti 2 behavioural persona framework, FLW training, community activation, digital engagement, and village watch committee formation.",
      services: [
        "Design & Formative Research",
        "SBC Strategy",
        "Behavioural Persona Design",
        "FLW Training Programme",
        "Community Activation",
        "Digital Media Strategy",
        "Village Watch Committees",
        "COVID-19 Digital Pivot",
      ],
    },
    behaviours: {
      label: "The Five Target Behaviours",
      items: [
        { num: "01", icon: "\ud83e\uddfc", name: "Handwashing with Soap", sub: "At critical hygiene moments throughout the day" },
        { num: "02", icon: "\ud83d\udebd", name: "End Open Defecation", sub: "Construction and use of latrines at household level" },
        { num: "03", icon: "\ud83d\udca7", name: "Safe Drinking Water", sub: "Safe access, treatment, and hygienic storage of water" },
        { num: "04", icon: "\ud83c\udf33", name: "Tree Plantation", sub: "Community-led greening and environmental stewardship" },
        { num: "05", icon: "\u267b\ufe0f", name: "Waste Disposal", sub: "Responsible household and community waste management" },
      ],
    },
    outcomes: {
      cards: [
        { stat: "2M+", description: "People directly reached through the programme\u2019s community-level interventions across Punjab." },
        { stat: "34M+", description: "People engaged through digital platforms. This figure grew dramatically when COVID-19 forced a digital pivot." },
        { stat: "5 Behaviours", description: "Targeted simultaneously across WASH and environment. The first province-wide multi-behaviour SBC programme of its kind in Punjab." },
        { stat: "Open Defecation \u2193", description: "Measurable decline in open defecation across Punjab, with this programme as a core contributing intervention." },
        { stat: "Latrine Built", description: "Millions of households reported constructing latrines, even amid the economic constraints of the COVID-19 pandemic." },
      ],
      watermark: "PUNJAB",
    },
    divider: {
      stat: "Jugaad",
      text: "The principle at the heart of the programme\u2019s design. Jugaad, frugal innovation using what\u2019s already available, shaped not just the community strategy but the entire philosophy of how change was expected to happen: from within communities, using local resources, through human agency rather than government provision.",
    },
    persona: {
      label: "Central Behavioural Persona",
      name: "Mitti 2: The Jugaad Innovator",
      body: "Research insights led White Rice to design around a central persona: Mitti 2, a community member with a <em>jugaad</em> mindset. Frugal, resourceful, and solutions-oriented. Someone who knows how to create change with limited resources, who doesn\u2019t wait for the government to solve their problems, and whose agency inspires others. Mitti 2 became the behavioural archetype that the programme\u2019s training, messaging, and community activation were built around, making aspirational change feel locally achievable.",
    },
    theoryOfChange: {
      label: "Theory of Change \u00b7 Socio-Ecological Model",
      steps: [
        { num: "1", title: "Individual", body: "Build knowledge, pride, and a Jugaad sense of agency around the five target behaviours" },
        { num: "2", title: "Household", body: "Align families around shared environmental and hygiene practices as expressions of household pride" },
        { num: "3", title: "Community", body: "Village watch committees as custodians: monitoring, championing, and sustaining the programme from within" },
        { num: "4", title: "Enabling Environment", body: "Government mobiliser network, digital infrastructure, and local cable media amplifying behaviour norms at scale" },
      ],
    },
    covidPivot: {
      label: "The COVID-19 Pivot",
      heading: "When the world locked down, the programme <em>went digital.</em>",
      paragraphs: [
        "COVID-19 arrived mid-programme, making in-person community access near-impossible. Rather than pausing, White Rice redesigned the delivery model in real time. Young people within communities were identified and trained as digital access points, using mobile phones to deliver content, gather insights, and keep communities engaged when facilitators could no longer visit in person.",
        "This was not a contingency. It became a strategic advantage. The digital layer reached audiences that physical programming never could, and the 34 million figure reflects the scale of what became possible when digital was treated as a primary channel, not a fallback.",
      ],
      tags: [
        "Youth Digital Ambassadors",
        "Mobile Phone Content",
        "Social Media Campaigns",
        "Local Cable TV",
        "Community Insight Gathering via Digital",
      ],
    },
    photoBand1: [
      { src: "/images/unicef-cg/DSC03536.JPG", alt: "Community mobiliser speaking with villagers about hygiene practices in rural Punjab" },
    ],
    photoBand2: [
      { src: "/images/unicef-cg/IMG_2376.JPG", alt: "Wall painting promoting Clean & Green sanitation messages in a village" },
    ],
    photoBand3: [
      { src: "/images/unicef-cg/IMG_9806.JPG", alt: "Community members painting environmental hygiene messages on a boundary wall" },
      { src: "/images/unicef-cg/DSC03971.jpg", alt: "Mobiliser reviewing waste management practices with a household in Punjab" },
    ],
    photoBand4: [
      { src: "/images/unicef-cg/IMG_1625.JPG", alt: "Children gathered around a Clean & Green demonstration in a village school" },
    ],
    challenge: {
      heading: "The <em>Challenge</em>",
      body: "Punjab\u2019s Clean & Green programme had a clear mandate: shift five critical environmental and hygiene behaviours across one of Pakistan\u2019s most populous provinces. But the challenge was not simply scale. It was the deeper problem that every SBC practitioner eventually confronts: <em>one-time behaviour change is easy. Long-term behaviour change is hard.</em>\n\nThe government had an existing network of community mobilisers, but they lacked an SBC framework capable of driving durable change. The intervention had to be designed not just for reach, but for sustainability. And then COVID-19 arrived, threatening to make in-person community work impossible at precisely the moment the programme was gaining momentum.",
      quote: {
        text: "\u201cGetting a community to wash their hands once is a trick. Getting them to wash their hands every day for the rest of their lives. That requires changing what feels normal.\u201d",
      },
    },
    strategy: {
      heading: "The <em>Strategy</em>",
      intro: "White Rice began with an intensive design research phase, going far beyond interviews and surveys. The team used immersive observational methods, spending days and nights with beneficiary households to map the full lifecycle of each target behaviour: where it happened, who influenced it, where it broke down, and what would make it stick.",
      steps: [
        {
          number: "01",
          title: "Immersive Design Research",
          description: "Observational, co-habitation, and visual documentation methods. Understanding behaviour in the actual context in which it needs to occur, not in a focus group.",
        },
        {
          number: "02",
          title: "Sustainability Over Reach",
          description: "Design for long-term habit formation, not awareness. Every touchpoint was built to make the target behaviour the path of least resistance over time.",
        },
        {
          number: "03",
          title: "Community as the Engine",
          description: "Leverage the power of communities to drive change from within, using local, indigenous methods and human agency rather than external provision.",
        },
        {
          number: "04",
          title: "Digital as a Core Channel",
          description: "Integrate digital and mobile tools from the outset. Not as a backup, but as a primary engagement layer that could reach deep into communities even when physical access was constrained.",
        },
      ],
    },
    work: {
      heading: "The <em>Intervention</em>",
      body: "The intervention was built on the Punjab government\u2019s existing community mobiliser infrastructure, but transformed it. White Rice trained the mobilisers on a comprehensive SBC methodology grounded in the Mitti 2 persona and the socio-ecological model, equipping them with tools and facilitation skills that the programme had never previously had access to.\n\nVillage watch committees were formed in communities across Punjab, becoming the custodians of the entire programme. These were not passive beneficiary groups; they were monitors, champions, and accountability mechanisms. Their formation ensured that the programme had a structural home within communities long after any formal intervention activities had concluded.",
      deliverables: [
        "Group Facilitation Sessions",
        "Home Visits",
        "Behaviour Demonstrations",
        "Community Influencer Mapping",
        "Village Watch Committees",
        "Local Cable TV",
        "Digital & Social Media",
        "Mobile Phone Content Delivery",
        "Youth Digital Ambassadors",
      ],
      quote: "\u201cWe didn\u2019t install behaviour change in communities. We activated the capacity for change that was already there, and then built the structures to keep it alive.\u201d",
    },
    impact: {
      heading: "The <em>Impact</em>",
      body: "The programme reached at a scale that few SBC interventions in Pakistan have achieved, but scale alone was not the measure of success. The programme\u2019s most significant impact was behavioural: communities constructed latrines and ended open defecation practices in measurable numbers, even during the economic strain of COVID-19.",
      metrics: [
        { value: 2, suffix: " Million", label: "People directly reached through community-level sessions, home visits, and mobiliser engagement across Punjab." },
        { value: 34, suffix: " Million", label: "People engaged through digital platforms. A number that grew exponentially when the digital pivot was made during COVID-19." },
        { value: 0, suffix: "", prefix: "", label: "Measurable, province-wide decline in open defecation, with this SBC programme as a core contributing intervention within a broader government strategy." },
        { value: 0, suffix: "", prefix: "", label: "The programme not only survived COVID-19. It scaled through it, demonstrating that a well-designed digital layer can sustain community behaviour change programming under the most adverse conditions." },
      ],
      closingNote: "The Clean & Green Punjab programme demonstrated what becomes possible when SBC is designed for sustainability from the outset, when communities are treated as the engine of change, not the audience for it. The Mitti 2 framework, the village watch committee model, and the digital-first pivot represent replicable design innovations that have direct application to multi-behaviour, large-scale government programming across Pakistan and beyond.",
      quote: {
        text: "\u201cWe didn\u2019t install behaviour change in communities. We activated the capacity for change that was already there, and then built the structures to keep it alive.\u201d",
        attribution: "",
      },
    },
    impactCells: [
      { big: "2 Million", desc: "People directly reached through community-level sessions, home visits, and mobiliser engagement across Punjab." },
      { big: "34 Million", desc: "People engaged through digital platforms. A number that grew exponentially when the digital pivot was made during COVID-19." },
      { big: "Open Defecation \u2193", desc: "Measurable, province-wide decline in open defecation, with this SBC programme as a core contributing intervention within a broader government strategy." },
      { big: "COVID-Proof", desc: "The programme not only survived COVID-19. It scaled through it, demonstrating that a well-designed digital layer can sustain community behaviour change programming under the most adverse conditions." },
    ],
    closing: {
      heading: "One-time change is a trick.<br><em>Lasting</em> change is a design problem.",
      body: "Clean & Green Punjab proved that with the right behavioural framework, the right community infrastructure, and the right digital strategy, lasting change is achievable, even at provincial scale, even in a pandemic.",
    },
    gallery: {
      heading: "Gallery",
      images: [
        { src: "/images/unicef-cg/IMG_2045.JPG", alt: "Children running through a village carrying Clean & Green campaign flags", span: "wide" },
        { src: "/images/unicef-cg/DSC03667.jpg", alt: "Community mobilisers using phones for digital data collection in rural Punjab", span: "normal" },
        { src: "/images/unicef-cg/IMG_9771.JPG", alt: "Painting a Clean & Green stencil on a village wall", span: "normal" },
        { src: "/images/unicef-cg/IMG_2326.JPG", alt: "Women and children practising handwashing during a community session", span: "wide" },
        { src: "/images/unicef-cg/DSC03510.JPG", alt: "Field team reviewing programme materials with community members", span: "normal" },
        { src: "/images/unicef-cg/IMG_1667.JPG", alt: "Researcher speaking with a woman in a rural household", span: "normal" },
        { src: "/images/unicef-cg/IMG_1903.JPG", alt: "Community engagement during the Clean & Green programme", span: "wide" },
        { src: "/images/unicef-cg/IMG_2184.JPG", alt: "Village watch committee members at a programme event", span: "normal" },
      ],
    },
  },

  /* 9 ─ FAO Road Safety / Diverse Dastarkhwan */
  {
    slug: "fao-road-safety",
    year: "2019 \u2013 2020",
    tags: ["Food Diversity", "Nutrition", "Stunting Prevention", "Behaviour Change", "Kitchen Gardens", "Cooking Demonstrations", "Positive Deviance", "Balochistan", "FAO", "SDG 2", "SDG 3", "Pakistan"],
    theme: {
      primary: "#2A1A0A",
      primaryLight: "#7A4A1A",
      accent: "#4A6A2A",
      accentLight: "#E8B86A",
    },
    hero: {
      eyebrow: "FAO Pakistan \u00b7 Balochistan \u00b7 Multi-District",
      title: "The Diverse <em>Dastarkhwan</em><span class=\"cs-hero__subtitle-inline\">Food Diversity & Nutrition Behaviour Change Programme</span>",
      description: "A 12-week behaviour change programme designed to shift the food and nutrition practices of three culturally distinct communities in Balochistan \u2014 through cooking demonstrations, kitchen gardens, and peer-led change \u2014 reaching 11,000 families and 100,000 people.",
      meta: [
        { label: "Client", value: "FAO Pakistan" },
        { label: "Location", value: "Balochistan \u00b7 Multi-District" },
        { label: "Focus", value: "Food Diversity \u00b7 Nutrition \u00b7 Stunting Prevention" },
        { label: "White Rice Role", value: "SBC Strategy & Programme Design Lead" },
      ],
    },
    heroVideo: "/videos/fao.mp4",
    role: {
      heading: "SBC Design & <em>Programme Lead</em>",
      body: "White Rice designed and led the full behaviour change programme for FAO \u2014 from formative research across three culturally distinct community contexts through to the 12-week field facilitator methodology, cooking demonstration sessions, kitchen garden integration, communication tools, and positive deviance peer educator model. A programme designed to work with existing food cultures, not against them.",
      services: [
        "Formative Research",
        "SBC Strategy",
        "Field Facilitator Training",
        "12-Week Programme Design",
        "Cooking Demo Methodology",
        "Kitchen Garden Integration",
        "Communication Materials",
        "Positive Deviance Model",
      ],
    },
    communities: {
      label: "Three Communities \u00b7 Three Cultural Contexts \u00b7 One Programme",
      watermark: "\u0628\u0644\u0648\u0686\u0633\u062a\u0627\u0646",
      cards: [
        {
          name: "<em>Baloch</em> Communities",
          region: "Central Balochistan",
          description: "Predominantly pastoral communities with strong traditions around meat-centred cuisine, hospitality food customs, and specific seasonal eating patterns deeply tied to cultural identity.",
          challenge: "Vegetables rarely featured in daily cooking \u2014 integration required without disrupting deeply held food traditions.",
        },
        {
          name: "<em>Pashtun</em> Communities",
          region: "Northern Balochistan",
          description: "Communities with distinct culinary traditions, strong gender norms around food preparation, and specific beliefs around nutrition during pregnancy and lactation that shaped feeding practices from the earliest stages.",
          challenge: "Antenatal and postnatal nutrition practices required culturally sensitive reframing rather than direct replacement.",
        },
        {
          name: "<em>Makrani</em> Communities",
          region: "Southern Balochistan (Coastal)",
          description: "Coastal communities with access to a distinct set of local ingredients \u2014 fish, specific grains, coastal produce \u2014 and food preparation practices shaped by geography as much as culture.",
          challenge: "Existing ingredient diversity underutilised \u2014 the programme worked with what was already available, not what needed to be imported.",
        },
      ],
    },
    outcomes: {
      cards: [
        { stat: "11,000", description: "Families directly reached through the 12-week programme across multiple districts of Balochistan." },
        { stat: "100,000", description: "People reached within those families \u2014 mothers, fathers, children, grandparents \u2014 through a ripple effect by design." },
        { stat: "3 Cultures", description: "One programme successfully contextualised for Baloch, Pashtun, and Makrani communities \u2014 culturally distinct, behaviourally aligned." },
        { stat: "Kitchen Gardens", description: "Community kitchen gardens established to provide free, accessible vegetables \u2014 removing the procurement barrier that would have undermined behaviour change." },
        { stat: "Scaled", description: "The programme was further scaled across additional districts of Balochistan following successful implementation." },
      ],
      watermark: "HARVEST",
    },
    divider: {
      stat: "1 in 2<br>children.<br>Stunted.",
      text: "Balochistan has a child stunting rate of approximately 50% \u2014 one of the highest in the world. The leading driver is not food scarcity, but food diversity: children are not receiving the range of nutrients their brains and bodies need in the critical window of the first 1,000 days. Families were often protein-rich but vegetable-poor \u2014 and had never been shown how to change that without abandoning the food cultures they held dear.",
    },
    programme: {
      eyebrow: "The Intervention \u00b7 Structured Programme Design",
      heading: "A <em>12-Week Journey</em> from Knowledge to Kitchen",
      cards: [
        {
          badge: "Weeks 1\u20133 \u00b7 Foundation",
          title: "Understanding Nutrition in Community Language",
          body: "Field facilitators conducted household visits to establish trust, understand current practices, and introduce the concept of dietary diversity using locally meaningful language and culturally familiar reference points \u2014 not clinical nutrition terminology.",
        },
        {
          badge: "Weeks 4\u20136 \u00b7 Demonstration",
          title: "The Community Cooking Demo",
          body: "The best cooks from within each community were trained to lead live cooking demonstrations every alternate week. Using locally available vegetables alongside familiar ingredients, they created new recipes that felt like natural extensions of existing cuisine \u2014 not foreign impositions.",
        },
        {
          badge: "Weeks 7\u20139 \u00b7 Practice",
          title: "Women as Recipe Innovators",
          body: "Mothers were encouraged to experiment \u2014 adapting the new ingredients and methods into their own family recipes. The cooking session became a community space for creativity, sharing, and peer encouragement, with each woman developing personalised versions of the target behaviours.",
        },
        {
          badge: "Weeks 10\u201312 \u00b7 Habit & Scale",
          title: "Positive Deviants Lead the Way",
          body: "Women who had most successfully integrated new practices became peer educators \u2014 sharing their stories, demonstrating their recipes, and inspiring their neighbours. The programme ended by building the community infrastructure for change to continue without external facilitation.",
        },
      ],
    },
    garden: {
      eyebrow: "Programme Innovation",
      heading: "The Kitchen Garden \u2014 <em>Removing the Barrier</em> at the Root",
      stat: "Free. Fresh.<br>From the ground.",
      paragraphs: [
        "One of the most significant design insights from the research was deceptively simple: telling families to eat more vegetables is useless if accessing vegetables requires money they don\u2019t have, or a journey they cannot make. The behaviour change programme could not succeed if the enabling environment didn\u2019t exist.",
        "White Rice designed the kitchen garden as a structural solution \u2014 not an add-on. Every community was supported to establish its own kitchen garden, providing a free, organic, on-demand source of the very vegetables the cooking demonstrations were using. The garden removed the procurement barrier entirely.",
        "The result was that the behaviour being taught \u2014 integrating vegetables into daily cooking \u2014 was immediately practicable. Mothers didn\u2019t have to wait until the next market trip or budget windfall. They could walk to the garden, pick what they needed, and cook it that evening. The kitchen garden turned an aspiration into an immediate possibility.",
      ],
    },
    challenge: {
      heading: "The <em>Challenge</em>",
      body: "Balochistan\u2019s stunting crisis is rooted in a paradox: these communities are not food insecure in a simple sense. Many families \u2014 particularly in Baloch and Pashtun areas \u2014 have strong food traditions, adequate caloric intake from meat and staples, and deep cultural pride in how they cook and eat. The problem is dietary diversity. Vegetables, legumes, and the micronutrient-rich foods that underpin child brain development and physical growth are largely absent from the daily dastarkhwan.\n\nThe added complexity here was that this was not one community but three \u2014 Baloch, Pashtun, and Makrani \u2014 each with distinct languages, food customs, gender dynamics, and conceptions of what good nutrition looks like. A single standardised programme would have failed all three. The challenge was to design something universal in its behavioural goals but deeply contextual in its delivery.",
      quote: {
        text: "\u201cYou cannot ask a mother to change how she feeds her family without first understanding why she feeds them the way she does \u2014 and what that food means to her.\u201d",
      },
    },
    strategy: {
      heading: "The <em>Strategy</em>",
      intro: "White Rice began with intensive qualitative research across all three community contexts \u2014 mapping current food practices, cooking rituals, prevailing beliefs about nutrition, and the specific moments in pregnancy, lactation, and early childhood when behaviour change was most possible and most impactful.",
      steps: [
        { number: "01", title: "Integrate, Don\u2019t Replace", description: "Design for addition, not substitution. Show mothers how new ingredients and recipes can sit alongside existing food traditions \u2014 not threaten them." },
        { number: "02", title: "Work with What\u2019s Already There", description: "Identify locally available ingredients \u2014 especially vegetables \u2014 that can be the building blocks of nutritional diversity, without requiring communities to import or purchase unfamiliar foods." },
        { number: "03", title: "Make Behaviour Change Visible and Joyful", description: "Live cooking demonstrations \u2014 not lectures \u2014 as the primary change mechanism. Knowledge changes minds; cooking together changes habits." },
        { number: "04", title: "Peer-Led Change at Every Stage", description: "Identify positive deviants within each community \u2014 women already practicing nutritional diversity \u2014 and position them as the living proof that change is possible here, in this context, by people like us." },
      ],
    },
    work: {
      heading: "The <em>Intervention</em>",
      body: "The programme operated simultaneously at the household level \u2014 through field facilitator visits \u2014 and at the community level, through cooking demonstrations that became weekly social events. The combination was deliberate: private coaching for individual behaviour change, and public cooking sessions for social norm reinforcement.\n\nThe cooking demonstrations were the programme\u2019s most distinctive feature \u2014 and its most powerful. The best cooks from each community were not just demonstrators; they were co-designers. They adapted the nutritional guidance into recipes that their communities would actually make and enjoy. Vegetables were introduced not as a health intervention, but as ingredients that made the food taste better, stretch further, and nourish more deeply.\n\nCommunication materials were developed specifically for each community context \u2014 using local language, local imagery, and literacy-sensitive visual design. Materials focused particularly on the critical windows of pregnancy and lactation, where maternal nutrition has the most direct impact on child development outcomes. The guidance was framed not as clinical advice but as practical, actionable, culturally resonant knowledge about how to take care of yourself and your child.",
      deliverables: ["12-Week Field Facilitator Programme", "Household 1-on-1 Visits", "Bi-Weekly Cooking Demonstrations", "Community Kitchen Gardens", "Positive Deviance Peer Educators", "Pregnancy & Lactation Nutrition Guidance", "Illustrated Communication Tools", "Multi-Culture Contextualisation"],
      quote: "\u201cWhen the best cook in the village says this is how she makes it \u2014 and people taste it and love it \u2014 no amount of health messaging can compete with that moment.\u201d",
    },
    impact: {
      heading: "The <em>Impact</em>",
      body: "The programme reached 11,000 families \u2014 100,000 people \u2014 across Balochistan\u2019s most culturally complex and geographically challenging communities. The reach figure matters, but the behavioural figure matters more: women who had never cooked with particular vegetables were growing them in community gardens, preparing them in new recipes, and teaching their neighbours to do the same.",
      metrics: [
        { value: 11000, suffix: "", label: "Families directly reached through the 12-week programme \u2014 with cooking demonstrations, household visits, and kitchen garden access at the core." },
        { value: 100000, suffix: "", label: "People reached within target families \u2014 a ripple effect built into the programme\u2019s design through peer educators and community cooking sessions." },
        { value: 3, suffix: " Cultures", label: "A single behaviour change methodology successfully adapted for Baloch, Pashtun, and Makrani communities \u2014 proving that cultural specificity and programme scale are not mutually exclusive." },
        { value: 1, suffix: " Scaled", label: "The programme was extended to additional districts of Balochistan following successful implementation \u2014 with the model replicable at low cost precisely because it was built on community assets, not external inputs." },
      ],
      quote: {
        text: "\u201cWhen the best cook in the village says this is how she makes it \u2014 and people taste it and love it \u2014 no amount of health messaging can compete with that moment.\u201d",
        attribution: "",
      },
      closingNote: "The Dastarkhwan programme demonstrated a principle that applies far beyond nutrition: when you design behaviour change around what a community already has \u2014 its cooks, its crops, its social gatherings, its food pride \u2014 the intervention feels less like a programme and more like a community discovering what it was always capable of. That is the most durable form of change there is.",
    },
    impactCells: [
      { big: "11,000", desc: "Families directly reached through the 12-week programme \u2014 with cooking demonstrations, household visits, and kitchen garden access at the core." },
      { big: "100,000", desc: "People reached within target families \u2014 a ripple effect built into the programme\u2019s design through peer educators and community cooking sessions." },
      { big: "3 Cultures", desc: "A single behaviour change methodology successfully adapted for Baloch, Pashtun, and Makrani communities \u2014 proving that cultural specificity and programme scale are not mutually exclusive." },
      { big: "Scaled", desc: "The programme was extended to additional districts of Balochistan following successful implementation \u2014 with the model replicable at low cost precisely because it was built on community assets, not external inputs." },
    ],
    closing: {
      heading: "The change was always<br>on the <em>dastarkhwan.</em><br>It just needed to be seen.",
      body: "The Diverse Dastarkhwan programme showed that food behaviour change is not about introducing the foreign. It is about revealing the possible \u2014 using what communities already have, celebrating how they already cook, and expanding what they believe belongs on their table.",
    },
    gallery: {
      heading: "Gallery",
      images: [
        { src: "/images/fao/fao01.jpg", alt: "Community nutrition awareness session in Balochistan", span: "wide" },
        { src: "/images/fao/fao02.jpg", alt: "Food diversity demonstration", span: "normal" },
        { src: "/images/fao/fao03.jpg", alt: "Frontline workers conducting nutrition training", span: "normal" },
      ],
    },
  },

  /* 10 ─ UNICEF MHH / Breaking Barriers */
  {
    slug: "unicef-mhh",
    year: "2021 – 2023",
    tags: ["Menstrual Health", "Period Poverty", "Social Behaviour Change", "Co-Creation", "KAB Framework", "Fathers", "Adolescent Girls", "Rural Pakistan", "Punjab", "KPK", "UNICEF", "SDG 3", "SDG 5"],
    theme: {
      primary: "#2A0A1A",
      primaryLight: "#4A1A3A",
      accent: "#8A3A5A",
      accentLight: "#C47A9A",
    },
    hero: {
      eyebrow: "UNICEF Pakistan · Rajanpur (Punjab) & Battagram (KPK)",
      title: "Breaking <em>Barriers</em>",
      subtitle: "Advancing Menstrual Health in Pakistan with Social Behaviour Change, Phase II",
      description: "A national SBC initiative to dismantle the silence, shame, and misinformation surrounding menstrual health and hygiene in rural Pakistan, designed across three provinces, three target audiences, and the full socio-ecological model, with a 90% communication effectiveness rate and readiness for national rollout.",
      meta: [
        { label: "Client", value: "UNICEF Pakistan" },
        { label: "Provinces", value: "Sindh (Pilot 1) · Punjab · KPK" },
        { label: "Focus", value: "Menstrual Health & Hygiene SBC" },
        { label: "White Rice Role", value: "SBC Strategy, Co-Creation & Toolkit Design Lead" },
      ],
    },
    heroImage: "/images/UNICEF MHH.jpeg",
    role: {
      heading: "SBC Strategy, Co-Creation & <em>National Toolkit Design</em>",
      body: "White Rice served as UNICEF's SBC strategy and creative partner across the full programme cycle, from a national study and community co-creation workshop in Sindh, through the design of Pakistan's first MHH SBC Toolkit, to the Phase II scale-up across five villages each in Rajanpur (Punjab) and Battagram (KPK). Every element of the programme, conversation guides, storybooks, training materials, monitoring systems, was designed by White Rice with and for the communities it served.",
      services: ["National Study & Formative Research", "Community Co-Creation", "SBC Toolkit Design", "KAB Framework Design", "CRP Training Programme", "Conversation Flip Books", "Girls' Storybook", "Monitoring & Data System", "Provincial Scale-Up Design"],
    },
    outcomes: {
      cards: [
        { stat: "~90%", description: "Communication toolkit effectiveness rate across all three provincial pilots, validating readiness for nationwide rollout." },
        { stat: "3 Provinces", description: "Sindh, Punjab, and KPK, three culturally and contextually distinct provinces, one tested and refined SBC toolkit." },
        { stat: "3,000+", description: "Fathers, mothers, and adolescent girls reached across 10 villages in Rajanpur and Battagram through structured KAB sessions." },
        { stat: "Hypotheses Overturned", description: "Every assumption about male resistance and community reluctance was disproved, fathers emerged as the programme's most engaged and vocal participants." },
        { stat: "National Toolkit", description: "Pakistan's first MHH SBC Toolkit, ready for national rollout and replicable by any partner organisation across all regions." },
      ],
      watermark: "MHH",
    },
    divider: {
      stat: "49%<br>of girls.<br>No knowledge.",
      text: "In Pakistan, nearly half of all girls experience their first period with no prior knowledge of menstruation. 44% lack access to the facilities needed to manage their menstrual health. The resulting stigma, shame, and health risk is not a natural state of affairs, it is the product of silence, and silence can be broken by design.",
    },
    journey: {
      label: "The Programme Journey · Five Phases",
      steps: [
        { phase: "Phase 1", title: "Understand", body: "National study to map root causes of period poverty across Pakistan" },
        { phase: "Phase 2", title: "Co-Create", body: "3-day co-creation workshop in Khairpur, Sindh with community members" },
        { phase: "Phase 3", title: "Design", body: "SBC toolkit & communication materials designed and prototyped iteratively" },
        { phase: "Phase 4", title: "Implement", body: "Pilot in Sindh followed by Phase II scale-up in Punjab & KPK" },
        { phase: "Phase 5", title: "Scale Up", body: "National toolkit finalised for rollout across Pakistan with partners" },
      ],
    },
    audiences: {
      label: "Target Audiences · Designed for Each Relationship in the Chain",
      cards: [
        { role: "Target 1", name: "Father", tag: "The Enabler", body: "The key decision-maker and breadwinner. His empathy and financial support are prerequisites for any behaviour change at home. Historically excluded from MHH discussions entirely.", incentive: "Long-term family health, religious duty of cleanliness, and the financial logic of prevention over treatment.", color: "#E8A86A" },
        { role: "Target 2", name: "Mother", tag: "The Relator", body: "The direct caregiver who can empathise and act as a bridge between husband and daughter. But she faces her own shame and relational barriers that needed to be named and supported before she could lead change.", incentive: "Daughter's health, access to products for herself, and ability to give her family what they need.", color: "#C47A9A" },
        { role: "Target 3", name: "Adolescent Girls", tag: "The Bridge (Punjab) / Elder Sister (KPK)", body: "The primary beneficiary, but also the most silenced. In Punjab, girls would only speak to their mothers; in KPK, elder sisters performed this bridge role. The storybook approach bypassed shame through narrative rather than instruction.", incentive: "Personal health, safety, and the right to ask for what they need.", color: "#9ABADA" },
        { role: "Target 4", name: "Community Influencers", tag: "The Norm Builder", body: "Elders, religious leaders, and local figures whose endorsement signals community permission. In Battagram, a local Molana's positive engagement created immediate credibility and shifted the room's openness within a single session.", incentive: "Recognition and serving the community's health and wellbeing.", color: "#9AAA7A" },
      ],
    },
    kab: {
      eyebrow: "Intervention Framework · Knowledge → Attitude → Behaviour",
      heading: "Three stages. Three shifts.<br><em>One complete behaviour change journey.</em>",
      cards: [
        { stage: "Stage 1", name: "Knowledge", channel: "Channel: Community Influencers · Large Group Sessions", items: ["Engage local influencers to on-board and gain community support", "Separate group sessions for mothers, fathers, and girls, using specialised conversation guides for each", "Open the discussion; create the first safe space for the subject to exist publicly", "Meetings held in all five villages per province"] },
        { stage: "Stage 2", name: "Attitude", channel: "Channel: Smaller Groups · Home & School Settings", items: ["Address individual barriers and challenges in adopting the target behaviour", "Girls' Guide (Sara & Saba story) initiates open conversation through narrative", "Build confidence to speak about MHH and demand products", "Multiple sessions per village; mostly home visits and smaller gatherings"] },
        { stage: "Stage 3", name: "Behaviour + Intention", channel: "Channel: 1-on-1 Sessions · Community Spaces & Homes", items: ["Validation and conversion: intention to action", "Storytelling to probe deeper on behavioural intentions", "Get pledges and document commitments from participants", "Capture stories from early adopters for peer-led social proof"] },
      ],
    },
    verbatims: {
      eyebrow: "In Their Own Words",
      heading: "The conversations that <em>were never supposed to happen.</em>",
      cards: [
        { quote: "I asked my wife what she uses and told her to give money to her aunts who will bring it for her.", source: "Father · Islampur, Rajanpur · Punjab" },
        { quote: "We need to save ourselves from disease, not embarrassment.", source: "Father · Chak Talab · Rajanpur, Punjab" },
        { quote: "I brought pads for my wife from the city without any shame or embarrassment.", source: "Father · Muhammad Pur · Rajanpur, Punjab" },
        { quote: "If we can ask our husbands to bring wheat, oil, and sugar, we should also be able to ask them to bring pads.", source: "Mother · Battagram, KPK" },
        { quote: "When I spoke to my husband about this, he asked me why I was not ashamed. I said, why should I be ashamed in front of you?", source: "Mother · Battagram, KPK" },
        { quote: "This helped us realise that periods are natural and nothing to hide. We should feel comfortable sharing how we're feeling.", source: "Adolescent Girl · Rajanpur, Punjab" },
      ],
    },
    hypothesis: {
      eyebrow: "Hypothesis Validation",
      heading: "What we expected to find.<br><em>What the community showed us instead.</em>",
      rows: [
        { expected: "Men would avoid the subject and show resistance, especially in conservative KPK.", reality: "Fathers were the programme's most engaged and vocal participants. Many said these discussions should have happened years ago." },
        { expected: "Mothers would be reluctant to discuss the topic in group settings.", reality: "Mothers actively participated, shared experiences, and expressed gratitude that the conversation was finally happening." },
        { expected: "Girls, especially those at home, would not be permitted to engage separately.", reality: "Girls were permitted and encouraged to participate in their own sessions, including those not in school." },
        { expected: "Religious leaders and elders would resist and act as strong gatekeepers.", reality: "In Battagram, a local Molana attended, gave positive feedback, and framed MHH through the Islamic emphasis on cleanliness, becoming an unexpected champion." },
        { expected: "Resistance to adopting pads and strong preference for traditional cloth.", reality: "The preference for cloth was less prevalent than anticipated. The real barrier was price and access, not attitude toward the product itself." },
      ],
    },
    challenge: {
      heading: "The Challenge",
      body: "Menstrual health and hygiene in rural Pakistan is not simply a product access problem. It is a deeply entrenched social norm problem, one shaped by shame, silence, misinformation, and the complete absence of open dialogue between the people who need to have it most: fathers and daughters, mothers and sons, women and their own bodies.\n\nWhite Rice and UNICEF's 2021–2022 national study identified four intersecting root causes: socio-cultural norms and behaviours; product affordability; accessibility barriers; and inadequate WASH infrastructure. Any programme that addressed only one of these would fail. And any programme built around information alone, without addressing the relational and normative context in which that information needed to travel, would reach no one.\n\nPhase II added a further layer of complexity: scaling an approach that had worked in Sindh's Khairpur into two entirely new provincial contexts, conservative, patriarchal Rajanpur in Punjab, and the hilly, remote villages of Battagram in KPK. Both had been identified as likely to resist. Both would prove more open than anyone expected.",
      quote: {
        text: "If I speak to my mother about this, she will kill me.",
        attribution: "Adolescent girl, Battagram, KPK",
      },
    },
    strategy: {
      heading: "The Strategy",
      intro: "The strategy was built on three foundational commitments: co-creation with the community before designing anything; a Knowledge-Attitude-Behaviour (KAB) framework that moved participants through a structured arc rather than attempting single-session awareness; and a radical inclusion of fathers as primary programme participants rather than afterthoughts.",
      steps: [
        { number: "01", title: "Co-Creation First", description: "A 3-day embedded co-creation workshop in Khairpur, with women, girls, mothers, fathers, and community influencers, shaped the entire communication toolkit from the ground up, including multiple rounds of prototyping and real-community testing." },
        { number: "02", title: "The KAB Arc", description: "Three staged sessions per audience, Stage 1: Knowledge (large group, open conversation); Stage 2: Attitude (smaller groups, identify barriers); Stage 3: Behaviour + Intention (one-to-one or small group, pledges, action, storytelling from early adopters)." },
        { number: "03", title: "Fathers as the Enabling Environment", description: "In Pakistan's rural context, the father is the breadwinner and decision-maker. Without his knowledge, empathy, and financial support, no behaviour change in the home is sustainable. Fathers were treated as equal participants, not obstacles to manage." },
        { number: "04", title: "Storytelling as the Primary Vehicle", description: "The girls' guide was built around Sara and Saba, two fictional characters whose stories provided an emotionally safe entry point for adolescent girls to engage with MHH without the shame of direct instruction or clinical information delivery." },
      ],
    },
    work: {
      heading: "The Intervention",
      body: "White Rice served as UNICEF's SBC strategy and creative partner across the full programme cycle, from a national study and community co-creation workshop in Sindh, through the design of Pakistan's first MHH SBC Toolkit, to the Phase II scale-up across five villages each in Rajanpur (Punjab) and Battagram (KPK). Every element of the programme, conversation guides, storybooks, training materials, monitoring systems, was designed by White Rice with and for the communities it served.",
      deliverables: ["National Study & Formative Research", "Community Co-Creation", "SBC Toolkit Design", "KAB Framework Design", "CRP Training Programme", "Conversation Flip Books", "Girls' Storybook", "Monitoring & Data System", "Provincial Scale-Up Design"],
    },
    impactCells: [
      { big: "~90%", desc: "Toolkit communication effectiveness rate across three provincial pilots, providing the evidence base for a confident national rollout." },
      { big: "3,000+", desc: "Fathers, mothers, and adolescent girls reached across Rajanpur and Battagram through structured KAB sessions, with documented attitude and behaviour shifts." },
      { big: "Father–Mother–Daughter", desc: "The communication flow between these three relationships, previously nonexistent, was successfully established through the programme. This is the foundational architecture for national change." },
      { big: "National Toolkit", desc: "Pakistan's first MHH SBC Toolkit, tested across Sindh, Punjab, and KPK, with modifications mapped for each regional context, ready for national programme design and partner rollout." },
    ],
    impact: {
      heading: "The Impact",
      body: "The programme's most significant finding was not a statistic. It was the overturning of every assumption that had made people hesitant to tackle MHH in rural Pakistan in the first place. Fathers spoke. Mothers demanded. Girls asked questions. Religious leaders gave endorsements. The silence broke, and it broke in the most conservative corners of the country.",
      metrics: [],
      closingNote: "The path to national impact is now clear. If affordability is addressed, through product subsidies, supply chain improvement, or economic empowerment for women, Pakistan's communities are ready. The programme did not just break a barrier. It proved that the barrier was never as solid as it appeared.",
    },
    closing: {
      heading: "The silence was not consent.<br>It was <em>design.</em><br>And design can be changed.",
      body: "Breaking Barriers demonstrated that with the right co-creation process, the right messengers, and the right framework, the most entrenched taboos in the most conservative communities are not as immovable as they appear. Pakistan is ready. The toolkit is ready. What comes next is scale.",
    },
    gallery: {
      heading: "Gallery",
      images: [
        { src: "/images/mhh/mhh01.jpg", alt: "Girls participating in menstrual health awareness session", span: "wide" },
        { src: "/images/mhh/mhh02.jpg", alt: "Breaking Barriers campaign materials", span: "normal" },
        { src: "/images/mhh/mhh03.jpg", alt: "Community dialogue on menstrual health and hygiene", span: "normal" },
      ],
    },
  },

  /* 11 ─ Springster / Nike Girls Effect */
  {
    slug: "nike-girls-effect",
    year: "2013 – 2015",
    tags: ["Girls' Empowerment", "Digital Content", "Mobile-First", "Storytelling", "Co-Creation", "Financial Wellbeing", "Voice & Agency", "Adolescent Girls", "Internet.org", "Nike Foundation", "Springster", "SDG 4", "SDG 5", "Pakistan"],
    theme: {
      primary: "#6B0A42",
      primaryLight: "#A03268",
      accent: "#5A1A8A",
      accentLight: "#9A5ACA",
    },
    hero: {
      eyebrow: "Girl Effect / Springster · National · Mobile-First",
      title: "A Million <em>Girls</em><br>Given a Voice",
      subtitle: "Springster: Mobile-First Digital Content for Girls' Empowerment in Pakistan",
      description: "100+ co-created stories. A free mobile platform. One million girls in Pakistan, many of whom had never had a trusted space to explore the questions shaping their lives, finally able to access one.",
      meta: [
        { label: "Funder", value: "Nike Foundation (Girl Effect)" },
        { label: "Platform", value: "Internet.org, Free Mobile Access" },
        { label: "Focus", value: "Girls' Empowerment · Digital Content" },
        { label: "White Rice Role", value: "Research, Co-Creation & Content Design Lead" },
      ],
    },
    role: {
      heading: "Human-Centred Design, Co-Creation & <em>Content Lead</em>",
      body: "White Rice led the full creative and research cycle for Springster Pakistan. That meant in-school human-centred design research and co-creation sessions with girls across religious and socioeconomic backgrounds, followed by the development of over 100 unique mobile-first content stories spanning financial wellbeing, safety, health, voice, and agency. Every story was designed with the girls who would read it.",
      services: ["Human-Centred Design Research", "In-School Co-Creation Sessions", "Brand & Platform Identity", "100+ Content Stories", "Mobile-First Design", "Visual & Illustrative Design", "Moodboarding & Concept Development", "Multi-Community Contextualisation"],
    },
    outcomes: {
      cards: [
        { stat: "1 Million+", description: "Girls in Pakistan reached through the Springster platform. For many, this was their first access to trusted, culturally relevant content on the issues shaping their lives." },
        { stat: "100+ Stories", description: "Unique mobile-first content pieces co-created with girls from diverse religious, cultural, and socioeconomic backgrounds across Pakistan." },
        { stat: "Free Access", description: "Published on Internet.org. Any girl, on anyone's phone, with zero mobile data, could access the platform at no cost." },
        { stat: "4 Topics", description: "Financial wellbeing, voice & agency, safety, and health. The most critical and least-discussed dimensions of adolescent girls' lives in Pakistan." },
        { stat: "Multi-Faith", description: "Content designed with and for both Muslim and Christian girls from diverse regional and socioeconomic backgrounds. One of Pakistan's first explicitly multi-faith digital girl empowerment platforms." },
      ],
      watermark: "GIRLS",
    },
    divider: {
      stat: "Zero data.<br>Zero cost.<br>One million girls.",
      text: "Internet.org gave the platform something no paid app could: the ability to reach girls who had no data, no personal phone, and no money, but who could borrow a phone for five minutes and access content made specifically for them. The zero-cost model wasn't a technical detail. It was the difference between reaching a million girls and reaching a few thousand.",
    },
    cocreationMethods: {
      eyebrow: "The Co-Creation Process",
      heading: "Built <em>by girls.</em><br>For girls.",
      intro: "The co-creation sessions were held in schools across different communities, bringing together girls from Muslim and Christian backgrounds, from different regional and class contexts, to design the platform alongside White Rice's team. Not as feedback providers, but as authors.",
      cards: [
        { title: "Moodboarding & Visual Concept Development", body: "Girls selected visuals, colours, characters, and aesthetics that felt like them, directly shaping the brand identity, illustration style, and visual language of the platform." },
        { title: "Story & Theme Co-Creation", body: "Girls chose the topics they most needed content on, the characters they wanted to follow, and the situations that felt most true to their real lives. Storylines were shaped by their narratives, not imagined by external writers." },
        { title: "Live Artwork & Design Collaboration", body: "Girls contributed to illustration concepts and reviewed design elements in session, ensuring that when a character appeared on screen, it looked like someone they could be, not someone they were supposed to aspire to." },
        { title: "Real-Time Testing & Validation", body: "Draft stories were tested back with communities in session. If the response was wrong, the story was rewritten. Multiple iteration rounds ensured that cultural resonance was verified, not assumed." },
      ],
    },
    topics: {
      eyebrow: "Content Architecture · What the Platform Covered",
      heading: "The four topics Pakistani girls <em>most needed</em>, and least had access to.",
      cards: [
        { num: "01", name: "Financial Wellbeing", body: "Understanding money, saving, economic independence, and girls' right to financial agency, in a context where financial decisions were rarely made by or for them.", count: "Stories covering <strong>saving, earning, spending, and economic rights</strong>", color: "#E85AAA" },
        { num: "02", name: "Voice & Agency", body: "How to speak up, participate in decisions, advocate for yourself, and claim a right to be heard. At home, at school, and in the community.", count: "Stories covering <strong>speaking up, confidence, leadership, and participation</strong>", color: "#E8CC5A" },
        { num: "03", name: "Safety", body: "Personal safety, recognising unsafe situations, knowing what to do and who to tell. Content designed to inform without alarming, and to empower without exposing girls to risk.", count: "Stories covering <strong>personal safety, trust, boundaries, and getting help</strong>", color: "#9A5ACA" },
        { num: "04", name: "Health & Transitions", body: "Teenage body changes, menstrual health, emotional wellbeing, and the questions about growing up that girls were too shy to ask anyone else. Addressed honestly, warmly, and without shame.", count: "Stories covering <strong>puberty, menstrual health, mental wellbeing, and self-care</strong>", color: "#6ABADA" },
      ],
    },
    platform: {
      eyebrow: "The Platform · Internet.org",
      heading: "No data.<br>No cost.<br><em>No barriers.</em>",
      watermark: "Free.<br>Always.",
      paragraphs: [
        "At the time of the programme, Facebook's Internet.org initiative provided free mobile access to a curated set of platforms, without requiring a data plan. For Pakistani girls, this was transformative. A girl who had no personal phone, no data, and no money could borrow a family member's handset, open Internet.org, and access Springster for as long as she needed, at zero cost.",
        "The platform's mobile-first design was not a stylistic choice. It was the fundamental design constraint that shaped every decision: how long a story could be, how much text could appear on screen, how images had to load, and how navigation had to work for someone who might be using the phone quickly, in private, with limited time before it was needed back.",
      ],
      features: [
        { bold: "Zero data required", text: ": accessible on any phone, on any network, including 2G" },
        { bold: "Culturally resonant visuals", text: ": illustrations co-created with Pakistani girls to reflect who they actually are" },
        { bold: "Story-led content", text: ": not listicles or fact sheets, but narratives with characters and emotional truth" },
        { bold: "Designed for sharing", text: ": content that girls could send to friends, making the platform self-spreading within peer networks" },
      ],
    },
    diversity: {
      eyebrow: "Community Representation · Who Was in the Room",
      heading: "Pakistan's girls are not one girl.<br><em>The platform was designed to know that.</em>",
      cards: [
        { label: "Faith", title: "Muslim & Christian Girls", body: "Co-creation sessions deliberately included both Muslim and Christian girls from Pakistan's urban communities, ensuring that the platform's content and characters reflected the country's religious diversity, not just its majority." },
        { label: "Background", title: "Diverse Socioeconomic & Regional Contexts", body: "Girls from different regions and class backgrounds, bringing different relationships to education, family, money, and mobility, ensured the content was stress-tested against the real range of girls' lives in Pakistan." },
        { label: "Setting", title: "School-Based Co-Creation", body: "Sessions were held in schools, a setting that gave girls relative safety, peer support, and a structured creative environment in which to express their actual needs and ideas, rather than what they thought adults wanted to hear." },
      ],
    },
    photoBand1: [
      { src: "/images/nike-girl-effect/IMG_2189.JPG", alt: "Girls sketching character ideas during a Springster content co-creation workshop" },
      { src: "/images/nike-girl-effect/IMG_3059.JPG", alt: "Facilitator and girls reviewing story concepts pinned to a classroom board" },
    ],
    photoBand2: [
      { src: "/images/nike-girl-effect/IMG_2687.JPG", alt: "Wide view of a co-creation session with girls seated in a circle" },
      { src: "/images/nike-girl-effect/IMG_2743.JPG", alt: "Girl presenting her illustration to the group during a design workshop" },
      { src: "/images/nike-girl-effect/IMG_1936.JPG", alt: "Girls collaborating on moodboards for Springster platform content" },
    ],
    photoBand3: [
      { src: "/images/nike-girl-effect/IMG_2114.JPG", alt: "Close-up of a girl smiling while working on creative materials" },
      { src: "/images/nike-girl-effect/IMG_3074.JPG", alt: "Design team member reviewing artwork produced by girls in the session" },
    ],
    photoBand4: [
      { src: "/images/nike-girl-effect/IMG_2707.JPG", alt: "Group of girls engaged in a lively discussion about platform features" },
      { src: "/images/nike-girl-effect/IMG_2889.JPG", alt: "Co-creation participants sharing personal stories for content development" },
      { src: "/images/nike-girl-effect/IMG_3059.JPG", alt: "Wide shot of a school-based Springster design session in progress" },
    ],
    challenge: {
      heading: "The Challenge",
      body: "Pakistan's adolescent girls face a particular kind of information poverty. The questions that matter most, about their bodies, their safety, their money, their right to speak, are precisely the questions that home, school, and community offer the least trustworthy or least available answers to. The topics are too sensitive for open conversation, too personal for the classroom, and too complex for the internet content that does exist to address with cultural nuance.\n\nThe Nike Foundation's global Springster programme had an answer: a mobile-first content platform built specifically for adolescent girls, designed to be their trusted companion on the topics that matter. White Rice's challenge was to bring that platform to life in Pakistan, in a way that reflected the full diversity of Pakistani girls, not a single imagined composite of who they were supposed to be.\n\nThat meant designing content that could speak authentically to a Muslim girl from Lahore and a Christian girl from Karachi's inner city; to a girl in school and one who had dropped out; to a girl whose mother allowed her to use a phone and one who had to borrow one secretly. The platform had to be genuinely universal, which meant starting not with assumptions, but with the girls themselves.",
      quote: {
        text: "They don't lack curiosity. They lack a space that feels safe enough to be curious in, and content that feels like it was actually made for them.",
      },
    },
    strategy: {
      heading: "The Strategy",
      intro: "Before a single story was written or a single illustration sketched, White Rice spent significant time in schools and communities, conducting human-centred design research across diverse populations of girls in Pakistan. The methodology was immersive and participatory: girls were not research subjects, they were co-designers.",
      steps: [
        { number: "01", title: "Girls as Designers, Not Research Subjects", description: "Co-creation sessions in schools gave girls the tools to define what they wanted to see, through moodboards, visual design, storytelling, theme selection, and artwork, before White Rice designed anything." },
        { number: "02", title: "Mobile-First by Design", description: "Every story was conceived for a small screen, short attention span, and potentially borrowed device. Visual appeal, cultural resonance, and brevity were not trade-offs. They were the design brief." },
        { number: "03", title: "Storytelling as the Medium, Not Information Delivery", description: "The platform succeeded where information-only content fails because it used narrative: characters, situations, dilemmas, resolutions. That is what carried meaning. Girls didn't read facts. They read stories they recognised." },
        { number: "04", title: "Diversity as a Non-Negotiable Design Principle", description: "Christian and Muslim girls. Rural and urban. Punjabi, Sindhi, Pakhtun backgrounds. The content was stress-tested across this diversity. If a story only resonated with one type of girl, it was redesigned." },
      ],
    },
    work: {
      heading: "The Intervention",
      body: "White Rice led the full creative and research cycle for Springster Pakistan, from in-school human-centred design research and co-creation sessions with girls across religious and socioeconomic backgrounds, through to the development of over 100 unique mobile-first content stories spanning financial wellbeing, safety, health, voice, and agency. Every story was designed with the girls who would read it.",
      deliverables: ["Human-Centred Design Research", "In-School Co-Creation Sessions", "Brand & Platform Identity", "100+ Content Stories", "Mobile-First Design", "Visual & Illustrative Design", "Moodboarding & Concept Development", "Multi-Community Contextualisation"],
    },
    impactCells: [
      { big: "1 Million+", desc: "Girls in Pakistan reached through the Springster platform, accessing content on financial wellbeing, voice, safety, and health that they had never had trusted access to before." },
      { big: "100+ Stories", desc: "Unique mobile-first content pieces, each co-designed with Pakistani girls, visually distinct, culturally resonant, and rigorously tested before publication." },
      { big: "Trusted Space", desc: "The feedback from girls consistently returned to one theme: Springster was a place where they could be curious about the things that actually mattered to them, without shame, judgement, or the risk of a difficult conversation." },
      { big: "Power of Story", desc: "The programme validated a core White Rice conviction: that entertainment-driven, narrative-first content reaches audiences that information-only approaches cannot. Girls didn't read the platform because they had to. They read it because they wanted to." },
    ],
    impact: {
      heading: "The Impact",
      body: "Over one million girls in Pakistan accessed Springster. That number would be remarkable for any digital platform in Pakistan. For one specifically targeting adolescent girls from low-income communities, on a free, zero-data platform, covering topics that Pakistani society rarely offered them any trusted space to explore, it was extraordinary.",
      metrics: [],
      quote: {
        text: "Girls who would never have talked to anyone about these topics found something they could read privately, share with a friend, and return to again and again.",
        attribution: "",
      },
      closingNote: "Springster Pakistan demonstrated what becomes possible when you design digital content with radical fidelity to who the audience actually is. Not who funders imagine them to be, not who they are supposed to become, but who they are right now: curious, capable, and hungry for a space that takes them seriously.",
    },
    closing: {
      heading: "A million girls.<br>One question each.<br><em>Finally somewhere to ask it.</em>",
      body: "Springster worked not because it was a platform, but because it was a companion. A trusted voice in a girl's pocket, available at any hour, on any phone, with zero data, covering the things that actually mattered. That is what co-creation makes possible. And that is what a million Pakistani girls found.",
    },
    heroImage: "/images/nike-girl-effect/IMG_2114.JPG",
    gallery: {
      heading: "Gallery",
      images: [
        { src: "/images/nike-girl-effect/IMG_2687.JPG", alt: "Facilitator presenting to girls during a co-creation session", span: "wide" },
        { src: "/images/nike-girl-effect/IMG_2114.JPG", alt: "Girl smiling during a creative workshop activity", span: "normal" },
        { src: "/images/nike-girl-effect/IMG_2743.JPG", alt: "Girl drawing a character on a whiteboard during content design", span: "normal" },
        { src: "/images/nike-girl-effect/IMG_3074.JPG", alt: "Facilitator reviewing girls' artwork and story concepts", span: "wide" },
        { src: "/images/nike-girl-effect/IMG_2707.JPG", alt: "Girls participating in a group moodboarding session", span: "normal" },
        { src: "/images/nike-girl-effect/IMG_2889.JPG", alt: "Co-creation session with girls and the design team", span: "normal" },
        { src: "/images/nike-girl-effect/IMG_1936.JPG", alt: "Girls sharing ideas during an in-school Springster session", span: "wide" },
      ],
    },
  },

  /* 12 ─ Spring Accelerator / USAID */
  {
    slug: "spring-program",
    year: "2015 \u2013 2017",
    tags: ["Startup Acceleration", "Human-Centred Design", "Girls 10\u201319", "EdTech", "STEM", "Prototyping", "User Testing", "USAID", "4-Country Programme", "Pakistan", "SDG 4", "SDG 5"],

    /* ── V2 Theme (ocean / coral from HTML) ── */
    theme: {
      primary: "#1A5A7A",
      primaryLight: "#4A9ABA",
      accent: "#C45A2A",
      accentLight: "#E88A5A",
    },

    /* ── Hero ── */
    hero: {
      eyebrow: "Spring Accelerator \u00b7 Pakistan \u00b7 Girls 10\u201319",
      title: "Designing for<br><em>Girls.</em><br>Building for Scale.",
      subtitle: "Spring Accelerator \u2014 Human-Centred Design for Girls-Focused Startups",
      description: "A four-country USAID-funded accelerator programme \u2014 where White Rice led Pakistan\u2019s cohort of seven startups through deep human-centred design research, user testing, and value proposition development, helping ventures targeting girls aged 10\u201319 become genuinely user-ready.",
      meta: [
        { label: "Funder", value: "USAID" },
        { label: "Consortium Partner", value: "Proportion (Netherlands)" },
        { label: "Countries", value: "Pakistan \u00b7 Nepal \u00b7 Kenya \u00b7 Tanzania" },
        { label: "White Rice Role", value: "HCD Research & Design Partner \u00b7 Pakistan Lead" },
      ],
    },
    heroImage: "/images/Spring Accelerator.jpg",

    /* ── Role Band ── */
    role: {
      heading: "HCD Research, Prototyping & <em>Startup Design Partner</em>",
      body: "White Rice served as the human-centred design partner for Spring Accelerator\u2019s Pakistan cohort \u2014 working directly alongside seven startups to map user journeys, prototype solutions, conduct live user testing, and sharpen value propositions for products and services targeting girls aged 10 to 19. As part of a four-country global consortium led by Proportion Netherlands, we also contributed to cross-country learning exchanges, including a team visit to Nepal for methodology sharing and cohort showcasing.",
      services: ["User Journey Mapping", "Co-Creation with End Users", "Prototype Development", "Live User Testing", "Mockup & Demo Design", "Value Proposition Development", "Iterative Design Cycles", "Cross-Country Knowledge Exchange"],
    },

    /* ── Four Countries Band ── */
    fourCountries: {
      label: "Global Consortium \u00b7 Four Countries \u00b7 One Mission",
      cards: [
        { flag: "\ud83c\uddf5\ud83c\uddf0", name: "Pakistan", role: "White Rice as HCD Partner \u00b7 7 startups \u00b7 Led by White Rice", highlighted: true },
        { flag: "\ud83c\uddf3\ud83c\uddf5", name: "Nepal", role: "Cross-learning hub \u00b7 White Rice team visited for methodology training and cohort showcase" },
        { flag: "\ud83c\uddf0\ud83c\uddea", name: "Kenya", role: "Parallel cohort \u00b7 Regional insights fed into cross-country programme learning" },
        { flag: "\ud83c\uddf9\ud83c\uddff", name: "Tanzania", role: "Parallel cohort \u00b7 East Africa programme partner within the USAID consortium" },
      ],
    },

    /* ── Outcomes ── */
    outcomes: {
      cards: [
        { stat: "7 Startups", description: "Pakistan cohort supported through the full HCD cycle \u2014 research, prototyping, user testing, iteration, and value proposition development." },
        { stat: "4 Countries", description: "A global consortium spanning Pakistan, Nepal, Kenya, and Tanzania \u2014 with cross-learning, shared methodology, and joint cohort showcasing." },
        { stat: "Girls 10\u201319", description: "Every startup in the cohort targeted adolescent girls as their primary end user \u2014 with HCD ensuring the product actually fitted the girl, not the other way around." },
        { stat: "User-Ready", description: "Startups exited the programme with tested, iterated products \u2014 not just ideas \u2014 backed by real user insights and validated value propositions." },
        { stat: "Credible Ventures", description: "Several cohort startups \u2014 including EDCASA, Sabak, and LearnerBots \u2014 went on to become credible, operating organisations in Pakistan\u2019s education and girls\u2019 empowerment sector." },
      ],
      watermark: "SPRING",
    },

    /* ── Divider ── */
    divider: {
      stat: "7 startups. 1 audience. Real girls.",
      text: "The common thread across every startup in the Pakistan cohort was a product or service aimed at adolescent girls \u2014 but designed largely without them. White Rice\u2019s role was to close that gap: to bring the actual end users into the design process so that by the time a startup pitched its value proposition, it was built on what girls genuinely needed, not what founders assumed they did.",
    },

    /* ── HCD Process Band ── */
    hcdProcess: {
      eyebrow: "The HCD Methodology \u00b7 Applied to Startup Acceleration",
      heading: "From prototype to <em>proven value proposition</em> \u2014 in five stages.",
      steps: [
        { num: "Stage 1", title: "User Journey Mapping", body: "Map how target girls actually experienced the problem \u2014 context, barriers, touchpoints, motivations" },
        { num: "Stage 2", title: "Co-Creation with Users", body: "Girls participate directly in solution design \u2014 not just as testers but as active contributors to the product concept" },
        { num: "Stage 3", title: "Prototype & Mockup Testing", body: "Live demos and mock-ups tested with actual end users \u2014 capturing what works, what confuses, what\u2019s missing" },
        { num: "Stage 4", title: "Iteration & Refinement", body: "Multiple design cycles \u2014 applying insights from each testing round to sharpen product-user fit before the next" },
        { num: "Stage 5", title: "Value Proposition Pitch", body: "A verified, user-grounded value proposition \u2014 the output of the full HCD cycle, ready for investor and stakeholder presentation" },
      ],
    },

    /* ── Startups Band ── */
    startups: {
      eyebrow: "Pakistan Cohort \u00b7 Selected Startups",
      heading: "Seven ventures. One audience.<br><em>Designed around girls who are still using them today.</em>",
      cards: [
        { sector: "EdTech \u00b7 Higher Education", name: "EDCASA", body: "Developing high-quality educational content for higher education students \u2014 with HCD work focused on understanding how girls navigated academic content access and what made digital learning feel credible and usable for them.", tags: ["Higher Education", "Digital Learning", "Girls"] },
        { sector: "EdTech \u00b7 Primary & Secondary", name: "Sabak", body: "Educational content platform for primary and secondary school students \u2014 HCD work mapped the learning journey of out-of-school and in-school girls to ensure content was relevant to both, not just the formally enrolled.", tags: ["Primary School", "Secondary School", "Content"] },
        { sector: "STEM Education \u00b7 Girls & Robotics", name: "LearnerBots", body: "A robotics institution encouraging STEM education for children and girls in particular \u2014 HCD work addressed the specific barriers that made robotics feel inaccessible to girls and the design changes that would make it feel like it belonged to them.", tags: ["STEM", "Robotics", "Girls in Tech"] },
      ],
      note: "EDCASA, Sabak, and LearnerBots represent a selection of the seven-startup Pakistan cohort. Several ventures from the Spring Accelerator programme went on to become credible, operating organisations \u2014 carrying the insights from their HCD work into their ongoing product development and user engagement.",
    },

    /* ── Nepal Exchange Band ── */
    nepalExchange: {
      eyebrow: "Global Learning Exchange",
      heading: "Learning across <em>borders.</em>",
      stat: "Pakistan \u2194 Nepal",
      body: "One of the programme\u2019s distinctive features was its global architecture. As part of the four-country consortium, White Rice\u2019s team travelled to Nepal for two structured cross-learning exchanges \u2014 connecting the Pakistan cohort with teams and startups from other programme countries.",
      phases: [
        { num: "1", text: "<strong>Methodology Training Phase</strong> \u2014 White Rice team trained in Nepal on specific HCD research methodologies being applied across the global programme, ensuring consistency of approach while preserving country-specific contextualisation." },
        { num: "2", text: "<strong>Cohort Showcase Phase</strong> \u2014 Pakistan\u2019s startups presented to a larger international cohort \u2014 giving ventures exposure beyond the domestic market and allowing cross-country peer learning on product development and user research approaches." },
      ],
    },

    /* ── Closing ── */
    closing: {
      heading: "A product for girls<br>has to be designed<br><em>by them.</em>",
      body: "Spring Accelerator Pakistan proved that human-centred design is not a luxury add-on for startup development \u2014 it is the difference between a product that works and one that doesn\u2019t. Seven ventures went in with prototypes. They came out with something girls actually wanted.",
    },

    /* ── Impact Cells ── */
    impactCells: [
      { big: "7 Startups", desc: "Pakistan cohort taken through the full HCD cycle \u2014 user research, co-creation, prototype testing, iteration, and value proposition development." },
      { big: "4 Countries", desc: "A global consortium \u2014 Pakistan\u2019s learning fed into a shared methodology across Nepal, Kenya, and Tanzania, and vice versa." },
      { big: "Lasting Ventures", desc: "EDCASA, Sabak, and LearnerBots among the ventures that went on to operate as credible organisations \u2014 carrying HCD principles into their ongoing work." },
      { big: "Girls at the Centre", desc: "Every product decision in every cohort startup was tested with the girls it was supposed to serve \u2014 ensuring that \u201cdesigned for girls\u201d was not a marketing claim but a verifiable design fact." },
    ],

    challenge: {
      heading: "The <em>Challenge</em>",
      body: "The startups entering the Spring Accelerator cohort were not short on ambition or potential. Many had initial prototypes and a clear sense of the problem they were trying to solve. What they often lacked was the deep, contextual understanding of their actual end users \u2014 adolescent girls aged 10 to 19 in Pakistan \u2014 that would determine whether their product succeeded or failed at the point of adoption.\n\nThe challenge for White Rice was to compress the user research and iteration cycle that most startups take years to complete into a structured, supported programme \u2014 while simultaneously operating as part of a four-country global consortium with shared methodology, cross-learning obligations, and international showcasing requirements.\n\nThe diversity of the cohort added its own complexity: startups working in formal education technology sat alongside those developing vocational content, STEM tools, and digital platforms \u2014 each requiring different user research approaches and different types of prototype testing. White Rice had to be a credible design partner for all of them.",
      quote: {
        text: "A prototype built for a girl you imagine is very different from a product built for a girl you have actually sat with, listened to, and watched try to use what you've made.",
      },
    },
    strategy: {
      heading: "The <em>Strategy</em>",
      intro: "White Rice\u2019s approach was grounded in human-centred design methodology \u2014 applied not as a theoretical framework, but as a practical, iterative process that startups could experience alongside their users in real time. The process was designed to move fast and iterate often.",
      steps: [
        { number: "01", title: "Start with the User, Not the Product", description: "User journey mapping before any prototype refinement \u2014 understanding how a girl actually moved through the problem space, not how founders assumed she did." },
        { number: "02", title: "Prototype, Test, Repeat", description: "Multiple rounds of prototyping and testing with actual users \u2014 mock-ups, live demos, and in-context observation \u2014 so that each iteration was grounded in real feedback rather than internal assumption." },
        { number: "03", title: "Value Proposition as the Final Test", description: "The programme culminated in a value proposition pitch \u2014 which only landed if it was built on verified user insight. The pitch was the proof point; the HCD process was how startups earned the right to make it." },
        { number: "04", title: "Global Learning, Local Depth", description: "Cross-country learning exchanges \u2014 including the Nepal visit \u2014 ensured that methodology was shared and refined across all four country contexts, while White Rice maintained deep contextual specificity for Pakistan." },
      ],
    },
    work: {
      heading: "The Intervention",
      body: "White Rice served as the human-centred design partner for Spring Accelerator's Pakistan cohort \u2014 working directly alongside seven startups to map user journeys, prototype solutions, conduct live user testing, and sharpen value propositions for products and services targeting girls aged 10 to 19. As part of a four-country global consortium led by Proportion Netherlands, we also contributed to cross-country learning exchanges, including a team visit to Nepal for methodology sharing and cohort showcasing.",
      deliverables: [
        "User Journey Mapping",
        "Co-Creation with End Users",
        "Prototype Development",
        "Live User Testing",
        "Mockup & Demo Design",
        "Value Proposition Development",
        "Iterative Design Cycles",
        "Cross-Country Knowledge Exchange",
      ],
    },
    impact: {
      heading: "The <em>Impact</em>",
      body: "The most durable measure of the Spring Accelerator\u2019s success in Pakistan is the cohort itself. Startups that entered the programme with early-stage prototypes exited with user-validated products, tested value propositions, and the research infrastructure to continue iterating. Several \u2014 including EDCASA, Sabak, and LearnerBots \u2014 became credible operating organisations that are still active today.",
      metrics: [
        { value: 7, suffix: " Startups", label: "Pakistan cohort taken through the full HCD cycle" },
        { value: 4, suffix: " Countries", label: "Global consortium with shared methodology" },
        { value: 3, suffix: "+", label: "Ventures that became credible operating organisations" },
        { value: 1, suffix: "", label: "Cross-country learning exchange in Nepal" },
      ],
      closingNote: "Spring Accelerator Pakistan proved that human-centred design is not a luxury add-on for startup development \u2014 it is the difference between a product that works and one that doesn't. Seven ventures went in with prototypes. They came out with something girls actually wanted.",
    },
    gallery: {
      heading: "Gallery",
      images: [
        { src: "/images/spring/spring01.jpg", alt: "Spring Accelerator programme participants", span: "wide" },
        { src: "/images/spring/spring02.jpg", alt: "Startup mentoring session", span: "normal" },
        { src: "/images/spring/spring03.jpg", alt: "Innovation workshop for social enterprises", span: "normal" },
      ],
    },
  },

  /* 13 ─ Empowering Youth for Work / Oxfam IKEA HCD */
  {
    slug: "oxfam-ikea-hcd",
    year: "2018 \u2013 2020",
    tags: ["Youth Empowerment", "Human-Centred Design", "Innovation Hubs", "Oxfam", "IKEA Foundation", "Entrepreneurship", "Agri-Tech", "Employability", "Punjab", "Sindh", "Climate-Affected Communities", "4-Country Programme", "SDG 8", "SDG 13"],

    /* ── V2 Theme (amber / forest from HTML) ── */
    theme: {
      primary: "#2A4A2A",
      primaryLight: "#4A7A4A",
      accent: "#C4821A",
      accentLight: "#E8B45A",
    },
    hero: {
      eyebrow: "Youth Empowerment for Work \u00b7 18 Months \u00b7 5-Year Programme Design",
      title: "Designed<br>before it was<br><em>built.</em>",
      subtitle: "Empowering Youth for Work: Oxfam\u2019s Flagship Human-Centred Design Journey",
      description: "An 18-month HCD consulting engagement, the longest in White Rice\u2019s history, in which we compressed a 5-year programme into a living design laboratory: empathising, prototyping, failing productively, and iterating until Oxfam had something genuinely built for the youth it was trying to reach.",
      meta: [
        { label: "Client", value: "Oxfam Pakistan" },
        { label: "Funder", value: "IKEA Foundation" },
        { label: "Duration", value: "18 Months HCD \u00b7 5-Year Programme" },
        { label: "White Rice Role", value: "HCD Design Partner: Strategy to Prototype" },
      ],
    },
    role: {
      heading: "End-to-End HCD Partner: <em>18 Months of Designed Learning</em>",
      body: "White Rice served as Oxfam\u2019s human-centred design partner for the full 18-month design and prototyping phase of their IKEA-funded Youth Empowerment for Work programme, one of the most rigorous and sustained HCD engagements in Pakistan\u2019s development sector. Our role was not just to research, but to embed design thinking across Oxfam\u2019s implementing partner network: running quarterly workshops, facilitating live prototyping cycles, and guiding field teams through the iterative process of learning, failing, and redesigning until the programme was genuinely ready to scale.",
      services: [
        "HCD Strategy & Facilitation",
        "Quarterly Design Workshops",
        "Empathy & Field Research",
        "Challenge Definition",
        "Ideation & Co-Creation",
        "Prototyping",
        "Live User Testing",
        "Iteration & Programme Refinement",
        "Innovation Hub Design",
        "Implementing Partner Capacity Building",
      ],
    },
    outcomes: {
      cards: [
        { stat: "18 Months", description: "The longest single HCD consulting engagement White Rice has undertaken, compressing a 5-year programme into an 18-month design, test, and adapt cycle before scale." },
        { stat: "10,000+", description: "Young entrepreneurs and youth enabled in semi-urban and rural communities across climate-affected areas of Punjab and Sindh." },
        { stat: "2 Innovation Hubs", description: "Flagship youth innovation hubs established, one in Punjab, one in Sindh, offering customised programmes for entrepreneurs, agri-tech youth, and employability tracks." },
        { stat: "4 Countries", description: "Pakistan was one of four countries running the programme simultaneously, with cross-country learning feeding into programme refinement across the entire global initiative." },
        { stat: "Quarterly Cycles", description: "Six design sprints over 18 months, each one building on the last, moving through empathy, definition, ideation, prototyping, and testing in a live programme context." },
      ],
      watermark: "18 Months",
    },

    /* ── Custom Band 1: 18-Month Timeline ── */
    timeline: {
      eyebrow: "The 18-Month Design Journey",
      heading: "Every quarter, a new <em>design sprint.</em><br>Every sprint, a better programme.",
      items: [
        { phase: "Months 1\u20133 \u00b7 Sprint 1", title: "Empathy: Understanding the Youth", body: "Immersive field research with young people in climate-affected areas of Punjab and Sindh. Understanding their relationship with work, aspiration, barriers, and the economic realities shaping their choices. Implementing partners trained in empathy methods and deployed with field guides." },
        { phase: "Months 4\u20136 \u00b7 Sprint 2", title: "Define: Reframing the Challenge", body: "Cross-partner workshops to synthesise field insights and reframe the core challenge. What did \u201Cyouth empowerment for work\u201D actually mean for a young woman in Rajanpur versus a young man in Karachi\u2019s peri-urban fringe? The programme\u2019s assumptions were stress-tested against the evidence." },
        { phase: "Months 7\u20139 \u00b7 Sprint 3", title: "Ideate: Co-Creating Solutions", body: "Facilitated ideation workshops with implementing partners and youth co-designers. Multiple programme concepts generated, including the innovation hub model, differentiated youth pathways, and agri-tech integration, with rapid filtering against real-world feasibility and community fit." },
        { phase: "Months 10\u201312 \u00b7 Sprint 4", title: "Prototype: Building to Learn", body: "First live prototypes deployed in communities. Not polished. Deliberately rough, designed to generate learning. Innovation hub concepts tested at small scale. Youth pathway programmes piloted with real cohorts. Implementing partners embedded in the testing process as co-observers." },
        { phase: "Months 13\u201315 \u00b7 Sprint 5", title: "Test & Learn: What Worked, What Didn\u2019t", body: "Rigorous feedback capture across all prototype sites. Structured failure analysis, not to assign blame, but to understand mechanism. What assumptions were wrong? Which user segments responded differently? What programme adjustments were required before scale? Partners returned to refine." },
        { phase: "Months 16\u201318 \u00b7 Sprint 6", title: "Adapt & Scale: A Programme Ready to Deploy", body: "Final programme design, region-specific, evidence-grounded, and co-created with the communities it was built for. Innovation hubs formally established in Punjab and Sindh. Implementing partners equipped with tools, training, and programme frameworks to drive the 5-year rollout with confidence." },
      ],
    },

    /* ── Divider ── */
    divider: {
      stat: "18 months<br>to get it<br>right.",
      text: "The conventional development model is: research the baseline, write the programme, fund the implementation. White Rice and Oxfam did something different. For 18 months, they treated the programme itself as a prototype: running it, breaking it, learning from it, and redesigning it. All before committing to scale. That is why 10,000 young people were reached by something that genuinely worked, not something that sounded good in a proposal.",
    },

    /* ── Custom Band 2: Design Thinking Cycle ── */
    designCycle: {
      eyebrow: "The Design Thinking Framework \u00b7 Applied Every Quarter",
      heading: "Five stages. Six rounds.<br><em>Eighteen months of designed programme intelligence.</em>",
      cards: [
        { name: "Empathise", body: "Deep field immersion: understanding youth lives, aspirations, and barriers as they actually are" },
        { name: "Define", body: "Reframe the challenge from the evidence, not the assumption that was written in the original proposal" },
        { name: "Ideate", body: "Co-create solutions with partners and communities, generating range before narrowing to what is feasible and relevant" },
        { name: "Prototype", body: "Build rough versions of the programme, deliberately imperfect, designed to generate real feedback from real communities" },
        { name: "Test & Iterate", body: "Learn from what the prototype revealed. Document failure, adapt the design, and return to the field with something better" },
      ],
      note: "<strong>The key innovation:</strong> This cycle ran not once, but six times over 18 months, with each round building on the evidence of the last. Implementing partners participated in every workshop, carrying the learnings back to their field teams and returning with real observations from the next testing round. This is what genuine programme co-design looks like.",
    },

    /* ── Custom Band 3: Innovation Hubs ── */
    innovationHubs: {
      eyebrow: "The Programme Output \u00b7 Innovation Hubs & Youth Pathways",
      heading: "Two hubs. Three pathways.<br><em>One bespoke programme per region.</em>",
      intro: "The 18-month HCD process produced two flagship innovation hubs, one in Punjab, one in Sindh, each designed around the specific economic context, labour market, and youth profile of its region. Within each hub, three differentiated pathways served different types of young people, rather than expecting one model to fit all.",
      hubs: [
        { province: "Innovation Hub \u00b7 Punjab", name: "Punjab Hub", desc: "Serving semi-urban and rural youth in climate-affected districts of Punjab, with a particular focus on agricultural livelihood diversification, agri-tech integration, and connecting youth to Punjab\u2019s growing light manufacturing and services markets.", context: "Climate-affected region \u00b7 Agricultural economy \u00b7 Strong male youth participation" },
        { province: "Innovation Hub \u00b7 Sindh", name: "Sindh Hub", desc: "Serving peri-urban and rural youth in Sindh, with emphasis on women\u2019s economic participation, skills for the digital economy, and enterprise development adapted to Sindh\u2019s specific market conditions and mobility constraints for girls.", context: "Climate-affected region \u00b7 Peri-urban economy \u00b7 Focus on women\u2019s economic participation" },
      ],
      pathwaysHeading: "Three Youth Pathways: Designed from Evidence, Not Assumption",
      pathways: [
        { label: "Pathway 1", title: "Entrepreneurs", body: "Young people pursuing their own ventures, supported through business ideation, market access, seed financing literacy, and peer learning networks within the hub ecosystem." },
        { label: "Pathway 2", title: "Agri-Tech Youth", body: "Young farmers and agricultural workers learning to integrate technology into their practices, bringing precision agriculture, mobile tools, and market connectivity to communities whose livelihoods depend on a changing climate." },
        { label: "Pathway 3", title: "Employability", body: "Youth seeking employment in skilled markets, equipped with market-relevant skills, soft skills, job-readiness training, and direct linkages to employers in sectors identified through the HCD research as offering genuine, accessible opportunity." },
      ],
    },

    /* ── Custom Band 4: Methodology Difference ── */
    methodologyDiff: {
      eyebrow: "The Methodology Difference",
      heading: "Not how development programmes are usually <em>designed.</em>",
      intro: "What made this engagement singular in Pakistan\u2019s development sector was the commitment to design before scale, not as a principle, but as an 18-month practice. Most programmes don\u2019t work this way. White Rice\u2019s role was to make sure this one did.",
      rows: [
        { conventional: "Baseline research \u2192 programme design \u2192 implement at scale", oxfam: "Empathy \u2192 define \u2192 ideate \u2192 prototype \u2192 test \u2192 iterate, six times over 18 months, before scale" },
        { conventional: "Programme assumptions embedded at the start and rarely revisited", oxfam: "Assumptions actively challenged every quarter, with field evidence as the arbiter" },
        { conventional: "Implementing partners execute a pre-designed programme", oxfam: "Implementing partners trained as designers, and co-created every iteration" },
        { conventional: "One national programme model deployed uniformly", oxfam: "Two bespoke regional programmes, Punjab and Sindh, each shaped by its own evidence base" },
      ],
    },

    photoBand1: [
      { src: "/images/oxfam-hcd/DSC_2498-copy.jpg", alt: "Participants mapping user journeys on a large paper sheet during a design workshop" },
      { src: "/images/oxfam-hcd/DSC_2807-copy.jpg", alt: "Facilitator guiding a group through a brainstorming exercise with sticky notes" },
    ],
    photoBand2: [
      { src: "/images/oxfam-hcd/DSC_2823-copy.jpg", alt: "Youth participants presenting prototype ideas to the wider group" },
      { src: "/images/oxfam-hcd/DSC_2824-copy.jpg", alt: "Close-up of hands arranging design thinking cards on a workshop table" },
      { src: "/images/oxfam-hcd/DSC_4224.JPG", alt: "Full room of implementing partners during a quarterly design sprint" },
    ],
    photoBand3: [
      { src: "/images/oxfam-hcd/DSC_9218.JPG", alt: "Workshop facilitator sketching a programme framework on a whiteboard" },
      { src: "/images/oxfam-hcd/ASH_0113.jpg", alt: "Team-building warm-up activity at the start of a design workshop day" },
    ],
    photoBand4: [
      { src: "/images/oxfam-hcd/DSC_2440-copy.jpg", alt: "Partners reviewing empathy research findings pinned to an insights wall" },
      { src: "/images/oxfam-hcd/DSC_2564-copy.jpg", alt: "Women participants writing challenge statements during an ideation session" },
      { src: "/images/oxfam-hcd/DSC_2624-copy.jpg", alt: "Group discussion during a co-creation round at the Oxfam design workshop" },
    ],
    challenge: {
      heading: "The <em>Challenge</em>",
      body: "Youth unemployment and underemployment in Pakistan\u2019s semi-urban and rural areas, particularly in climate-affected regions of Punjab and Sindh, is not a simple skills gap problem. It is a system of interconnected barriers: limited market access, weak connectivity between skills supply and employer demand, entrenched gender norms restricting girls\u2019 economic participation, climate disruption undermining agricultural livelihoods, and programme designs that rarely reflect the actual lives of the young people they target.\n\nOxfam and the IKEA Foundation had the ambition and the funding for a 5-year programme to change this. What they needed was the confidence that the programme design was actually right before deploying it at scale. That confidence could only come from one source: real evidence from the communities it was built to serve.\n\nThe added complexity was the parallel nature of the programme, running simultaneously in four countries, each with its own context, partner network, and implementation challenges. White Rice had to operate as a rigorous, facilitated design partner while contributing to a shared methodology and global learning ecosystem.",
      quote: {
        text: "Every programme that had tried to empower these youth before had been designed for them, not with them. White Rice\u2019s task was to make that distinction matter.",
      },
    },
    strategy: {
      heading: "The <em>Strategy</em>",
      intro: "White Rice\u2019s strategy was to treat the entire 5-year programme as something that needed to be designed before it was built. Rather than consulting, writing a framework, and handing it over, White Rice embedded itself in Oxfam\u2019s implementation process, running quarterly workshops that moved through the full design thinking arc, and returning every three months to review what the field had taught, what needed to change, and how to improve.",
      steps: [
        { number: "01", title: "Partners as Designers, Not Implementers", description: "Oxfam\u2019s implementing partners weren\u2019t handed a programme to execute. They were trained in design thinking and brought into each quarterly workshop as co-designers. Their field knowledge was the raw material for every sprint." },
        { number: "02", title: "Productive Failure as Programme Intelligence", description: "Each prototype round was designed to fail instructively, surfacing the assumptions that were wrong before they were embedded at scale. The question was never \u201Cdid it work?\u201D but \u201Cwhat did we learn that changes the design?\u201D" },
        { number: "03", title: "Region-Specific Programme Design", description: "Punjab and Sindh have different economic ecologies, labour markets, and cultural contexts. The programme that emerged was not one national model. It was two region-specific designs, each grounded in the evidence from its own context." },
        { number: "04", title: "Scale Only When Ready", description: "The entire HCD phase was in service of one question: is this programme ready to deploy at the scale Oxfam and IKEA intended? The answer had to be earned through iteration, not assumed from good intentions." },
      ],
    },
    work: {
      heading: "The <em>Intervention</em>",
      body: "White Rice served as Oxfam\u2019s human-centred design partner for the full 18-month design and prototyping phase of their IKEA-funded Youth Empowerment for Work programme, one of the most rigorous and sustained HCD engagements in Pakistan\u2019s development sector. Our role was not just to research, but to embed design thinking across Oxfam\u2019s implementing partner network: running quarterly workshops, facilitating live prototyping cycles, and guiding field teams through the iterative process of learning, failing, and redesigning until the programme was genuinely ready to scale.",
      deliverables: [
        "HCD Strategy & Facilitation",
        "Quarterly Design Workshops",
        "Empathy & Field Research",
        "Challenge Definition",
        "Ideation & Co-Creation",
        "Prototyping",
        "Live User Testing",
        "Iteration & Programme Refinement",
        "Innovation Hub Design",
        "Implementing Partner Capacity Building",
      ],
    },
    impact: {
      heading: "The <em>Impact</em>",
      body: "The proof of the 18-month investment was in the programme\u2019s eventual reach and effectiveness. Over 10,000 young entrepreneurs and youth were enabled across semi-urban and rural communities in climate-affected areas of Punjab and Sindh. The programme was considered one of Oxfam\u2019s most successful youth economic empowerment interventions, and a significant part of that success was attributable to the rigour of the design process that preceded it.",
      metrics: [
        { value: 10000, suffix: "+", label: "Young people: entrepreneurs, agri-tech youth, and job seekers. Reached across semi-urban and rural communities in climate-affected Punjab and Sindh." },
        { value: 2, suffix: "", label: "Innovation hubs established, one per province, each offering region-specific programmes for three distinct youth pathways, designed from evidence not assumption." },
        { value: 6, suffix: "", label: "Six quarterly design cycles, each one compressing a phase of the 5-year programme into a real-world prototype, testing it with actual youth, and learning before scaling." },
        { value: 18, suffix: "", label: "Months of HCD engagement, the longest single HCD consulting engagement White Rice has undertaken." },
      ],
      closingNote: "This project has not been done before in this way, because the development sector rarely allows the time or budget to genuinely interrogate a programme before deploying it. Oxfam and IKEA Foundation made a different bet. White Rice helped them win it.",
    },
    impactCells: [
      { big: "10,000+", desc: "Young people: entrepreneurs, agri-tech youth, and job seekers. Reached across semi-urban and rural communities in climate-affected Punjab and Sindh." },
      { big: "2 Hubs", desc: "Innovation hubs established, one per province, each offering region-specific programmes for three distinct youth pathways, designed from evidence not assumption." },
      { big: "6 Sprints", desc: "Six quarterly design cycles, each one compressing a phase of the 5-year programme into a real-world prototype, testing it with actual youth, and learning before scaling." },
      { big: "A Replicable Model", desc: "The HCD methodology White Rice developed for Oxfam became a replicable model, proving that sustained design investment before programme scale is not a luxury, but the most cost-effective path to impact." },
    ],
    closing: {
      heading: "The best programmes<br>are the ones that<br><em>fail first.</em>",
      body: "Eighteen months. Six design cycles. Countless iterations. And then a 5-year programme that worked, because it had already been run, tested, broken, and rebuilt before it was ever deployed at scale. That is what human-centred design looks like when an organisation has the courage to use it fully.",
    },
    heroImage: "/images/oxfam-hcd/ASH_0113.jpg",
    gallery: {
      heading: "Gallery",
      images: [
        { src: "/images/oxfam-hcd/ASH_0113.jpg", alt: "Design workshop participants in a team-building exercise", span: "wide" },
        { src: "/images/oxfam-hcd/DSC_2440-copy.jpg", alt: "Facilitators working through design frameworks on a whiteboard", span: "normal" },
        { src: "/images/oxfam-hcd/DSC_2564-copy.jpg", alt: "Women reviewing sticky notes on an insights wall", span: "normal" },
        { src: "/images/oxfam-hcd/DSC_4224.JPG", alt: "Youth and facilitators in a group discussion during a design sprint", span: "wide" },
        { src: "/images/oxfam-hcd/DSC_2799-copy.jpg", alt: "Participants brainstorming on paper during a co-creation session", span: "normal" },
        { src: "/images/oxfam-hcd/DSC_9218.JPG", alt: "Facilitator leading a workshop session with implementing partners", span: "normal" },
        { src: "/images/oxfam-hcd/DSC_2624-copy.jpg", alt: "Group ideation during the quarterly design workshop", span: "wide" },
      ],
    },
  },

  /* 14 ─ When They Can See / Sightsavers */
  {
    slug: "sightsavers-film",
    year: "2023",
    tags: ["Eye Health", "Short Film", "Cannes Lions Health", "Award-Winning Film", "Data-Driven Storytelling", "Early Detection", "Children's Vision", "Sightsavers International", "SeePrime", "See Prime", "20-Year Partnership", "Community Screening", "Schools", "Pakistan", "Disability Inclusion", "SBC"],

    theme: {
      primary: "#1A4A6A",
      primaryLight: "#2E7A9A",
      accent: "#C9922A",
      accentLight: "#E8C04A",
    },

    hero: {
      eyebrow: "Sightsavers International · Pakistan · Cannes Lions Award Winner",
      title: "<em>Noor.</em>",
      subtitle: "Pakistan's First Celebrity Eye Health Film, A Cannes Lions Award Winner",
      description: "A data-driven short film shaped by 100 interviews, brought to life by Pakistan's finest actors, Sarwat Gilani, Omair Rana, Mizna Waqas, and recognised at the Cannes Lions Health Festival. Still screening in schools and communities across Pakistan.",
      meta: [
        { label: "Client", value: "Sightsavers International" },
        { label: "Production", value: "White Rice Impact + See Prime / SeePrime" },
        { label: "Platform", value: "SeePrime · 1 Million+ Views" },
        { label: "Award", value: "Cannes Lions Health, Award Winner" },
      ],
    },
    heroImage: "/images/sightsavers/noor-poster.jpg",
    heroVideo: "/videos/Noor-Trailer.mp4",

    filmPoster: {
      image: "/images/sightsavers/noor-poster.jpg",
      video: "/videos/Noor-Trailer.mp4",
      title: "Noor",
      titleUrdu: "نور",
      tagline: "A SeePrime Original · A Film by Umer Adil",
      award: "Cannes Lions",
      awardBody: "International Award",
      awardCategory: "Health Communication, Eye Health Category",
      platform: "SeePrime",
      cast: "Sarwat Gilani, Omair Rana, Mizna Waqas, Tanisha Shameem & Tasneem Ansari",
      director: "Umer Adil",
      producer: "Ali Hussain & Mahib Bukhari · Executive Producer: Seemeen Naveed",
      watchUrl: "https://youtu.be/ZOKOaeEyrco",
    },

    challenge: {
      heading: "The Challenge",
      body: "Vision problems in children are among the most reversible causes of learning difficulty \u2014 and among the most consistently undetected. In Pakistan, the combination of low parental awareness, limited school-level screening, and cultural barriers around seeking eye care means that millions of children are struggling to see the board, the book, the face of their teacher \u2014 and no one in their lives has noticed.\n\nThe challenge was not about information. Parents and communities in Pakistan are not unaware that children's eyes can have problems. The barrier is behavioural: the gap between vague awareness and the specific, urgent decision to take a child to an eye health provider for a test. Crossing that gap requires emotional connection, not statistics. It requires a story that feels like your story.\n\nSightsavers needed something that could work at scale \u2014 reaching parents, schools, and communities across Pakistan \u2014 while feeling intimate and personal enough to move each individual viewer to action. A short film was the answer. But it had to be the right film: grounded in truth, shaped by community, and carried by faces Pakistanis already trusted.",
      quote: {
        text: "A child who cannot see cannot learn. But a child who cannot see clearly often doesn't know they are supposed to see differently. The problem is invisible \u2014 until a film makes it unmissable.",
      },
    },
    strategy: {
      heading: "The Strategy",
      intro: "The creative strategy rested on one conviction: that the most powerful health communication is not invented \u2014 it is discovered. Real stories, told truthfully, with the emotional craft they deserve, move audiences in ways that no scripted health message can.",
      steps: [
        {
          number: "01",
          title: "Deep Field Research",
          description: "White Rice conducted 100+ in-depth interviews with families, children, teachers, and eye health workers across Pakistan \u2014 collecting real experiences of undetected vision problems, delayed care, and the moments that changed a family's understanding of their child's sight.",
        },
        {
          number: "02",
          title: "Story Identification",
          description: "From the 100+ interviews, two core stories emerged \u2014 each carrying distinct emotional truth. These were not chosen for their drama, but for their universality: every parent in Pakistan would recognise themselves in these stories.",
        },
        {
          number: "03",
          title: "Script & Community Testing",
          description: "The script was woven from real verbatims and narrative arcs drawn directly from the field research. Before production, it was tested with community members \u2014 a co-creation process that ensured every line rang true to the people whose lives had inspired it.",
        },
        {
          number: "04",
          title: "Production with See Prime",
          description: "In partnership with See Prime, Pakistan's leading production house, the film was brought to life with well-known Pakistani actors \u2014 lending it the cultural weight and emotional resonance that only familiar, trusted faces can provide. Production quality was uncompromising.",
        },
        {
          number: "05",
          title: "Launch & Amplification",
          description: "Premiered at a major stakeholder launch event with government representatives, sector partners, and media. Simultaneously released on See Prime's digital platform \u2014 delivering both institutional credibility and mass audience reach from day one.",
        },
      ],
    },
    work: {
      heading: "The Work",
      body: "White Rice's relationship with Sightsavers International spans over 20 years \u2014 one of the longest-running partnerships in the White Rice portfolio. Across two decades, we have supported Sightsavers Pakistan with creative campaigns, research, short films, communication strategy, and disability inclusion advocacy. Together, our work has contributed to a measurable decline in preventable blindness and eye disease in Pakistan.\n\nThis particular project \u2014 Pakistan's first celebrity-fronted short film on children's eye health \u2014 represents the creative pinnacle of that partnership. It was not only a film. It was a research project, a co-creation process, a production achievement, an award-winning piece of communication, and a community health tool that continues to operate long after its premiere.\n\nWhite Rice designed a three-stage approach: deep research to find the stories; rigorous co-creation to ensure the script was community-true; and a production and distribution strategy that paired Pakistan's best creative talent with a platform large enough to give the film the audience it deserved.\n\nThe partnership with See Prime \u2014 one of Pakistan's most prominent production and digital media houses \u2014 was a deliberate strategic choice. It brought production excellence and a ready-made digital audience together with Sightsavers' credibility and White Rice's research and creative depth. The government and sector stakeholders were engaged from the beginning, ensuring the film's launch became a sector event rather than a single organisation's campaign.",
      deliverables: [
        "20+ Year Partnership",
        "Research & Data Collection",
        "Scriptwriting",
        "Community Pre-Testing",
        "Celebrity Collaboration",
        "Film Production Strategy",
        "Campaign Launch Design",
        "School & Community Rollout",
        "Government Stakeholder Engagement",
      ],
    },
    impact: {
      heading: "The Impact",
      body: "The film's impact operates on three levels simultaneously \u2014 and all three are still active. As a digital film, it has reached over one million viewers on See Prime's platform. As a Cannes-winning piece of creative work, it has positioned Pakistan's eye health advocacy on the global map. And as a community tool, it continues to be used by Sightsavers, schools, and health workers across the country \u2014 its work unfinished, its conversations still unfolding.",
      metrics: [
        { value: 1, suffix: "M+ Views", label: "Online views on See Prime's platform \u2014 Pakistan's most-watched short film on children's eye health, continuing to grow." },
        { value: 0, suffix: "", prefix: "", label: "Cannes Lions \u2014 International recognition \u2014 Health category winner at the world's most prestigious film and creative communications festival." },
        { value: 20, suffix: "Years", label: "Of partnership work contributing to a measurable decline in preventable blindness and eye disease in Pakistan." },
        { value: 0, suffix: "", prefix: "", label: "Still Screening \u2014 The film remains in active use in schools and communities \u2014 a living health intervention with no end date and no expiry." },
      ],
      closingNote: "The film's greatest impact may be unmeasurable \u2014 the children whose parents, after a school screening, booked an eye test they had never thought to arrange. The ones who can now read the board. The ones for whom a film that took months to make changed the next decade of their lives.",
    },
  },

  /* 15 ─ Johns Hopkins CCP FLW Animation */
  {
    slug: "johns-hopkins-animation",
    year: "2019 \u2013 2021",
    tags: ["Johns Hopkins CCP", "Frontline Worker Training", "Animation Series", "Global Health", "Immunization", "Vaccination", "250,000 FLWs", "4 Languages", "Africa", "Asia", "Gulf", "Western Europe", "UNICEF", "Mobile-First", "Scenario-Based Learning", "SBC"],

    /* ── V2 Theme (teal / coral from HTML) ── */
    theme: {
      primary: "#0D6B6B",
      primaryLight: "#3AACAC",
      accent: "#C45A2A",
      accentLight: "#E07A4A",
    },

    /* ── Hero ── */
    hero: {
      eyebrow: "Johns Hopkins CCP \u00b7 Global Immunization Initiative",
      title: "The Last<br><em>Mile.</em>",
      subtitle: "A 6-Part Global Animation Series for 250,000 Frontline Immunization Workers \u2014 Africa \u00b7 Asia \u00b7 Gulf \u00b7 Europe",
      description: "Johns Hopkins Center for Communication Programs commissioned White Rice to create a globally deployable, culturally resonant training animation series for the world\u2019s frontline immunization workforce \u2014 people working at the last mile of healthcare, where vaccines reach the children who need them most.",
      meta: [
        { label: "Client", value: "Johns Hopkins CCP, USA" },
        { label: "Programme", value: "Global FLW Immunization Training" },
        { label: "Scale", value: "250,000 Frontline Workers \u00b7 4 Regions" },
        { label: "White Rice Role", value: "Creative & Communication Design Lead" },
      ],
    },
    heroImage: "/images/LastMile.png",

    /* ── Role Band ── */
    role: {
      heading: "Creative & Communication Design for a <em>Global Health System</em>",
      body: "Johns Hopkins Center for Communication Programs \u2014 one of the world\u2019s leading health communication institutions \u2014 engaged White Rice as their creative partner and communication design firm for a landmark global initiative: building a comprehensive animation-based training package for frontline immunization workers spanning four continents. Our mandate was to conceive, design, and produce content that could work everywhere \u2014 culturally representative, scenario-grounded, and powerful enough to train, challenge, and equip health workers operating in radically different settings.",
      services: ["Creative Strategy", "Communication Design", "Scenario Development", "6-Part Animation Series", "FLW Training Content", "4-Language Localisation", "Mobile-First Delivery", "Global Stakeholder Collaboration", "UNICEF Aligned Content"],
    },

    /* ── Outcomes ── */
    outcomes: {
      cards: [
        { stat: "250,000", description: "Frontline immunization workers given access to and trained through the animation series \u2014 as part of Johns Hopkins CCP\u2019s global training package." },
        { stat: "6 Episodes", description: "A complete scenario-based animation series \u2014 each episode targeting a distinct challenge situation frontline workers face in the field." },
        { stat: "4 Languages", description: "Full localisation across four languages \u2014 ensuring the training content was accessible and culturally resonant in every deployment region." },
        { stat: "4 Continents", description: "Deployed across Africa, Asia, the Gulf, and Western Europe \u2014 a single creative framework that holds meaning across radically different community and cultural contexts." },
        { stat: "Mobile-First", description: "The series was converted into a hands-on mobile reference guide \u2014 giving health workers on-demand access to training content in the field, not only in classrooms." },
      ],
      watermark: "250K",
    },

    /* ── Regions Band (custom) ── */
    regions: {
      eyebrow: "Global Deployment \u00b7 One Framework, Four Worlds",
      heading: "The same vaccine. The same child. <em>Four entirely different communities.</em>",
      cards: [
        { name: "Africa", sub: "Sub-Saharan \u00b7 Last-Mile Communities", body: "Rural and peri-urban communities where trust in health systems is hard-won, infrastructure is limited, and FLWs navigate significant cultural and logistical barriers to reach every child on their list.", color: "coral" },
        { name: "Asia", sub: "South & Southeast Asia \u00b7 Dense & Dispersed", body: "From densely packed urban settlements to geographically remote villages \u2014 FLWs in South and Southeast Asia encounter everything from vaccine hesitancy among educated parents to access challenges in mountainous and flood-prone terrain.", color: "teal" },
        { name: "Gulf", sub: "Middle East \u00b7 Migrant & Mixed Communities", body: "Complex multi-cultural and migrant community contexts where religious norms, language diversity, and community trust all shape FLW interactions in ways that demand specific cultural competency and communication sensitivity.", color: "gold" },
        { name: "Europe", sub: "Western Europe \u00b7 Diaspora & Underserved", body: "Underserved migrant and diaspora communities where FLWs encounter vaccine misinformation, language barriers, and deep distrust of government health systems \u2014 requiring entirely different negotiation and communication strategies.", color: "blue" },
      ],
    },

    /* ── Divider ── */
    divider: {
      stat: "250,000 workers. One child at a time.",
      text: "Frontline immunization workers are the most important and least visible part of the global health system. They are the last person between a child and a preventable disease. They negotiate, reassure, educate, and persist \u2014 in languages, contexts, and community conditions that no classroom training could fully anticipate. The challenge Johns Hopkins CCP brought to White Rice was to give them something that understood their world: not a manual, but a mirror. Scenario-based, culturally grounded, and available in their pocket.",
    },

    /* ── Design Challenge Band (custom) ── */
    designChallenge: {
      eyebrow: "Creative Design Challenge \u00b7 Universal Without Being Generic",
      headline: "\u201CMake something that belongs to everyone.<br>Without belonging to no one.\u201D",
      body: "The three creative design principles that guided every episode \u2014 from character design and scenario selection to animation style, voiceover direction, and language adaptation.",
      pillars: [
        { title: "Archetypal Characters", body: "Characters were designed to represent recognisable human archetypes \u2014 the hesitant father, the community gatekeeper, the sceptical grandmother, the exhausted mother \u2014 without being anchored to a specific nationality, religion, or ethnicity. Viewers across four continents recognise these people because they know them." },
        { title: "Scenario-First Structure", body: "Each episode began with a situation, not a message. The FLW encounters a real-world barrier \u2014 misinformation, refusal, access difficulty, cultural resistance \u2014 and the episode shows what skilled, compassionate communication looks like in that moment. Learning emerges from narrative, not instruction." },
        { title: "Mobile-Native Design", body: "Every visual and pacing decision was made for a phone screen in the field \u2014 high-contrast imagery, minimal visual complexity, short episode duration, and a structure that allows a worker to revisit a specific episode before a community visit without watching the entire series again." },
      ],
    },

    /* ── Series Band (6 Episodes, custom) ── */
    series: {
      eyebrow: "The Animation Series \u00b7 Six Episodes \u00b7 Six Scenarios",
      heading: "Every episode a different door.<br><em>Every door a real situation a frontline worker will face.</em>",
      cards: [
        { num: "Episode 01", title: "The Resistant Household", scenario: "Scenario: Vaccine Hesitancy & Refusal", body: "A family refuses vaccination \u2014 citing misinformation, fear, or religious concern. The episode models how an FLW listens, builds trust, addresses specific concerns without confrontation, and creates the conditions for a different decision." },
        { num: "Episode 02", title: "The Gatekeeper", scenario: "Scenario: Community Influencer Barriers", body: "A community leader, religious figure, or influential family member is blocking access. The episode explores respectful engagement with gatekeepers \u2014 how to bring them into partnership rather than around them, without compromising the vaccination goal." },
        { num: "Episode 03", title: "The Unreachable Village", scenario: "Scenario: Geographic & Access Barriers", body: "Distance, terrain, and logistical difficulty create barriers to reaching a family or community. The episode shows problem-solving, community mobilisation, and the creative persistence that effective last-mile health delivery requires." },
        { num: "Episode 04", title: "The Misinformation Moment", scenario: "Scenario: Social Media & Rumour Dynamics", body: "A community is circulating misinformation \u2014 spread through social media, peer networks, or traditional rumour channels. The episode equips FLWs to address false information with evidence-based, emotionally intelligent communication strategies." },
        { num: "Episode 05", title: "The Second Visit", scenario: "Scenario: Missed Doses & Follow-Through", body: "A child missed a scheduled dose and the family is disengaged. The episode addresses how FLWs re-engage without blame \u2014 rebuilding the relationship and the family\u2019s commitment to completing the immunization schedule." },
        { num: "Episode 06", title: "The Community Champion", scenario: "Scenario: Peer Advocacy & Positive Deviance", body: "An FLW identifies and activates a community member as a positive deviant \u2014 someone whose voice carries more trust than the health system\u2019s. The episode models the peer-to-peer approach that turns individual behaviour change into community norm shift." },
      ],
    },

    /* ── Languages Band (custom) ── */
    languages: {
      eyebrow: "Localisation \u00b7 Same Content, Four Worlds",
      heading: "One story.<br><em>Four voices.</em><br>Four communities.",
      bigText: "\u00d74",
      cards: [
        { flag: "Primary Language", name: "English", body: "Master version \u2014 for global deployment, Western Europe, and international training facilitation. Scripted as the source language for all localisation." },
        { flag: "Africa & Global Reach", name: "French", body: "Serving Francophone Africa and French-speaking communities in Western Europe \u2014 critical for the Sub-Saharan African deployment cohort." },
        { flag: "Asia \u00b7 South & Southeast", name: "Urdu / Hindi", body: "For South Asian deployment contexts \u2014 Pakistan, India, and the South Asian diaspora communities in the Gulf and Western Europe cohorts." },
        { flag: "Gulf & MENA Region", name: "Arabic", body: "For Gulf and Middle Eastern deployment, and Arabic-speaking migrant and diaspora communities across all four deployment regions." },
      ],
    },

    /* ── Distribution Band (custom) ── */
    distribution: {
      eyebrow: "Distribution & Deployment \u00b7 From Classroom to Field",
      heading: "The training that fits in <em>a pocket.</em>",
      paragraphs: [
        "The animation series was designed not as standalone content but as the experiential core of a larger Johns Hopkins CCP training architecture. It was integrated into formal FLW training programmes \u2014 used to introduce scenarios, prompt group discussion, and ground participants in the human reality of their work before moving to technical instruction.",
        "Critically, the series was then converted into a mobile-accessible reference guide \u2014 allowing workers to revisit specific episodes in the field before a difficult visit, without needing internet access or classroom infrastructure. The content that trained them in a room was available in their hand at the moment they needed it most.",
      ],
      features: [
        { label: "Mobile-First", value: "Converted to a hands-on phone-based reference guide \u2014 accessible to FLWs without internet, optimised for low-bandwidth and offline viewing" },
        { label: "Global Training Integration", value: "Embedded within Johns Hopkins CCP\u2019s full FLW training package \u2014 used as the scenario-based learning core of in-person and remote training sessions" },
        { label: "Global Network Deployment", value: "250,000 frontline workers across Africa, Asia, Gulf, and Western Europe given access \u2014 deployed through UNICEF-aligned and Johns Hopkins CCP global networks" },
        { label: "On-Demand Reference", value: "Workers can revisit individual episodes by scenario type \u2014 making the training a live field resource, not a one-time classroom event" },
      ],
    },

    /* ── Closing ── */
    closing: {
      heading: "The last mile is<br>not a geography.<br><em>It is a conversation.</em>",
      body: "250,000 frontline workers. Four languages. Four continents. Six situations every one of them will face. Walidain HumQadam gave parents the tools to show up for their children. This gave the health workers who serve those families the same \u2014 a way to understand the human being on the other side of the door, before they knock.",
    },

    /* ── Impact Cells ── */
    impactCells: [
      { big: "250,000", desc: "Frontline immunization workers trained and given access to the series \u2014 across Africa, Asia, the Gulf, and Western Europe." },
      { big: "4 Continents", desc: "A single creative framework \u2014 6 episodes, 4 languages \u2014 that worked across radically different cultural and community contexts simultaneously." },
      { big: "In Their Hands", desc: "Converted to a mobile field reference \u2014 the training travelled with the worker, not just into the training room." },
    ],

    challenge: {
      heading: "The <em>Challenge</em>",
      body: "The brief from Johns Hopkins CCP was as technically demanding as any White Rice had received. The training content needed to be simultaneously universal and specific \u2014 meaningful to a health worker in Nairobi and to one in Karachi, to one in Cairo and to one in Birmingham. It needed to depict real situations without privileging any single cultural context. It needed to be producible in four languages without losing its emotional or instructional impact in translation. And it needed to work on a phone screen in the field \u2014 not just in a training room.\n\nThe core tension in the brief was between specificity and universality. Health communication works through recognition \u2014 a viewer needs to see themselves or their community in the scenario to engage with it. But a scenario that is too specific to one context alienates every other. White Rice's creative challenge was to build characters, situations, and community dynamics specific enough to feel real, but archetypal enough to travel across continents.\n\nOverlaid on the creative challenge was a rigorous instructional one: the animations needed to function as genuine training tools within Johns Hopkins CCP's broader FLW capacity-building programme \u2014 not as awareness content, but as practical scenario-based learning that changed how workers showed up in the field.",
      quote: {
        text: "The hardest design problem is not making something powerful. It is making something powerful that means the same thing to different people in different worlds \u2014 and still moves all of them to act.",
      },
    },
    strategy: {
      heading: "The <em>Strategy</em>",
      intro: "White Rice worked closely with Johns Hopkins CCP\u2019s global teams \u2014 building an understanding of the specific field situations, community dynamics, and communication challenges that FLWs encounter across the programme\u2019s four deployment regions. This research informed the scenario design: each episode was built around a real situation type, not an invented one.",
      steps: [
        { number: "01", title: "Culturally Neutral Animation Style", description: "The animation style was deliberately designed to sit in a culturally neutral register \u2014 characters, settings, and visual language that could represent multiple regions simultaneously, without defaulting to any single country\u2019s visual vocabulary." },
        { number: "02", title: "Decision-Moment Scenarios", description: "Scenarios were structured around decision moments: situations where the FLW\u2019s response made a measurable difference to whether a child received a vaccine." },
        { number: "03", title: "Localisation-First Design", description: "The four-language localisation was treated as a design requirement from the beginning \u2014 not an afterthought. Scripts were built to carry meaning cleanly across translation. Visual storytelling carried the weight that language-specific nuance could not always sustain." },
      ],
    },
    work: {
      heading: "The <em>Work</em>",
      body: "Johns Hopkins Center for Communication Programs engaged White Rice as their creative partner and communication design firm for a landmark global initiative: building a comprehensive animation-based training package for frontline immunization workers spanning four continents.\n\nThe animation style was deliberately designed to sit in a culturally neutral register \u2014 characters, settings, and visual language that could represent multiple regions simultaneously, without defaulting to any single country\u2019s visual vocabulary. Scenarios were structured around decision moments: situations where the FLW\u2019s response made a measurable difference to whether a child received a vaccine.\n\nThe four-language localisation was treated as a design requirement from the beginning \u2014 not an afterthought. Scripts were built to carry meaning cleanly across translation.",
      deliverables: ["Creative Strategy", "Communication Design", "Scenario Development", "6-Part Animation Series", "FLW Training Content", "4-Language Localisation", "Mobile-First Delivery", "Global Stakeholder Collaboration", "UNICEF Aligned Content"],
    },
    impact: {
      heading: "The <em>Impact</em>",
      body: "The programme\u2019s impact is measured not in views or impressions, but in the 250,000 frontline workers who entered the world\u2019s most difficult healthcare environments better equipped \u2014 with a clearer understanding of the human situations they would face, and better communication tools for navigating them. Every child vaccinated through those interactions is the programme\u2019s ultimate unit of success.",
      metrics: [
        { value: 250000, suffix: "", label: "Frontline immunization workers trained" },
        { value: 4, suffix: " Continents", label: "Global deployment across radically different contexts" },
        { value: 6, suffix: " Episodes", label: "Complete scenario-based animation series" },
      ],
      closingNote: "Working with Johns Hopkins CCP required White Rice to operate at a scale and rigour we rarely encounter \u2014 global stakeholders, global deployment, global ambition. The result was a training tool that was both technically credible enough for Johns Hopkins and humanly compelling enough for a health worker at 6am on a difficult village visit. That balance is what we are most proud of.",
    },
    gallery: {
      heading: "Gallery",
      images: [
        { src: "/images/jhuccp/jhu01.jpg", alt: "Frontline workers in a training session", span: "wide" },
        { src: "/images/jhuccp/jhu02.jpg", alt: "Animation still from FLW training module", span: "normal" },
        { src: "/images/jhuccp/jhu03.jpg", alt: "Community health worker applying training in the field", span: "normal" },
      ],
    },
  },

  /* 16 ─ ICRC Bharosa / Barosakare */
  {
    slug: "icrc-bharosa",
    year: "2018 \u2013 2019",
    tags: ["ICRC Pakistan", "Barosakare", "Healthcare Violence", "HCD Research", "Visual Ethnography", "Bodystorming", "Journey Mapping", "Experience Design", "JPMC Karachi", "Lady Reading Peshawar", "TV Campaign", "Celebrity Engagement", "SBC", "4M+ Reach", "100+ Hospitals", "Pakistan"],

    /* ── V2 Theme (red / steel from HTML) ── */
    theme: {
      primary: "#B01A1A",
      primaryLight: "#D44A4A",
      accent: "#3A4A5A",
      accentLight: "#6A8AAA",
    },

    /* ── Hero ── */
    hero: {
      eyebrow: "ICRC Pakistan \u00b7 Violence Against Healthcare Workers",
      title: "Trust<br>the <em>Healer.</em><span class=\"cs-hero__subtitle-inline\">Barosakare \u2014 Pakistan\u2019s National Campaign to End Violence Against Healthcare Workers</span>",
      subtitle: "\u0628\u06BE\u0631\u0648\u0633\u06C1 \u06A9\u0631\u06D2",
      description: "When a patient\u2019s attendant strikes a doctor, it is rarely a simple act of cruelty. It is the end of a long chain of frustration, confusion, fear, and unmet need. ICRC Pakistan commissioned White Rice to find that chain \u2014 and break it \u2014 through embedded research, experience design, and a national behaviour change campaign that reached over 4 million people.",
      meta: [
        { label: "Client", value: "ICRC \u2014 International Committee of the Red Cross, Pakistan" },
        { label: "Campaign", value: "Barosakare \u00b7 \u0628\u06BE\u0631\u0648\u0633\u06C1 \u06A9\u0631\u06D2" },
        { label: "Research Sites", value: "JPMC Karachi \u00b7 Lady Reading Hospital Peshawar" },
        { label: "White Rice Role", value: "HCD Research, Experience Design & Campaign Lead" },
      ],
    },
    heroVideo: "/videos/icrc-bharoskarein.mp4",

    /* ── Role Band ── */
    role: {
      heading: "From Embedded Research<br>to a <em>National Movement</em>",
      body: "ICRC engaged White Rice for one of the most demanding briefs we have received \u2014 not a brief to make a campaign, but a brief to understand a crisis first, and then design the response. Our role spanned the complete arc: embedded HCD field research across two major hospitals, journey mapping and experience design recommendations for the healthcare system, training strategy for healthcare staff, and the full design and execution of Barosakare \u2014 a national multi-channel behaviour change campaign that changed the public conversation around healthcare violence in Pakistan.",
      services: ["Embedded HCD Research", "Visual Ethnography", "Bodystorming", "Patient Journey Mapping", "Hospital Experience Design", "Healthcare Staff Training Design", "National Campaign Strategy", "TV Ad Production", "Celebrity Engagement", "Radio \u00b7 Outdoor \u00b7 Digital"],
    },

    /* ── Outcomes (5 cards, matching HTML) ── */
    outcomes: {
      cards: [
        { stat: "4 Million+", description: "People reached through TV, digital media, radio, outdoor, and celebrity engagement \u2014 making Barosakare one of Pakistan\u2019s most visible healthcare safety campaigns." },
        { stat: "100+ Hospitals", description: "Hospitals across Pakistan influenced by the campaign\u2019s insights, recommendations, and outreach \u2014 extending the initiative well beyond the two research sites." },
        { stat: "2 Hospitals", description: "JPMC Karachi and Lady Reading Peshawar \u2014 two of Pakistan\u2019s largest public hospitals \u2014 embedded research sites where White Rice teams lived inside the healthcare experience for 2\u20133 days each." },
        { stat: "2 Strategies", description: "A dual-pronged response: hospital experience design recommendations to reduce friction at the system level, and a national campaign to shift public behaviour at the community level." },
        { stat: "Barosakare", description: "\u201CTrust the healer.\u201D Pakistan\u2019s first nationally coordinated behaviour change campaign specifically addressing violence against healthcare workers \u2014 grounded in empathy for both sides." },
      ],
      watermark: "4M+",
    },

    /* ── Two Sides Band (custom) ── */
    twoSides: {
      left: {
        label: "The Attendant\u2019s Side",
        heading: "A family in <em>fear.</em><br>A system that doesn\u2019t explain itself.",
        body: "A patient is critical. The attendant has been waiting for hours, has received no information, cannot find the right person to ask, and does not understand what is happening. Fear becomes frustration. Frustration becomes confrontation. The healthcare worker at the desk \u2014 often junior, often undertrained for conflict \u2014 becomes the target of a rage that belongs to the system, not to them.",
      },
      right: {
        label: "The Healthcare Worker\u2019s Side",
        heading: "A professional under <em>impossible</em> pressure.",
        body: "Understaffed, overstretched, managing dozens of patients and their families with minimal support systems. When violence strikes \u2014 and in Pakistan\u2019s major public hospitals, it strikes regularly \u2014 the consequences ripple outward immediately. Doctors abandon their work. Other patients are neglected. The entire ward suffers because one person\u2019s frustration was never addressed earlier in the chain.",
      },
    },

    /* ── HCD Research Band (custom) ── */
    hcdResearch: {
      eyebrow: "Human-Centred Design Research \u00b7 Embedded in the Crisis",
      heading: "To design the solution,<br><em>we had to become part of the problem.</em>",
      hospitals: [
        {
          city: "Karachi \u00b7 Sindh",
          abbrev: "JPMC",
          fullName: "Jinnah Postgraduate Medical Centre",
          scale: "One of Pakistan\u2019s largest public hospitals \u2014 serving hundreds of patients daily across emergency, outpatient, and inpatient wards. High volume, high pressure, high friction. White Rice teams embedded for 2\u20133 days \u2014 observing, shadowing, mapping, and experiencing.",
        },
        {
          city: "Peshawar \u00b7 Khyber Pakhtunkhwa",
          abbrev: "LRH",
          fullName: "Lady Reading Hospital",
          scale: "Pakistan\u2019s oldest and largest hospital in KPK \u2014 serving a population with distinct cultural dynamics, language contexts, and community expectations. A different patient population, different staff pressures, and different patterns of friction \u2014 essential for building a nationally relevant understanding of the crisis.",
        },
      ],
      methods: [
        { name: "Visual Ethnography", body: "Day-long visual documentation of the hospital environment \u2014 mapping where people wait, where information fails, where friction builds, and where confrontation is most likely to emerge" },
        { name: "Shadowing", body: "Research team members followed healthcare workers, patients, and attendants through their full hospital experience \u2014 observing interactions, communication failures, and trigger points in real time" },
        { name: "Heuristic Analysis", body: "Systematic evaluation of the hospital\u2019s communication systems, wayfinding, information design, and service touchpoints against established experience design principles \u2014 identifying systemic gaps" },
        { name: "Bodystorming", body: "Team members physically enacted the roles of patients and attendants \u2014 moving through registration, waiting areas, consultation, and emergency pathways to feel the system\u2019s friction from the inside" },
        { name: "Becoming the Patient", body: "The most radical method \u2014 a team member registered as a patient and went through the complete hospital journey. This single experience generated more insight into the attendant\u2019s fear and frustration than any number of interviews could have" },
      ],
    },

    /* ── Patient Band (quote highlight, custom) ── */
    patientBand: {
      eyebrow: "The Method That Changed Everything",
      headline: "We sent a researcher into JPMC as a patient. What they experienced in those hours became the emotional foundation of the entire campaign.",
      body: "The decision to have a White Rice researcher become a patient was not part of the original brief. It emerged from the field \u2014 from the recognition that no amount of observation could substitute for the experience of waiting three hours without information, being turned away from a desk, not knowing if your family member was alive or dying, and having no one in the building whose job it was to help you understand. The TV ad\u2019s emotional power traces directly to that day.",
    },

    /* ── Strategy Prongs Band (custom) ── */
    strategyProngs: {
      eyebrow: "Two-Pronged Strategy \u00b7 System & Society",
      heading: "Fix the system. <em>Change the culture.</em><br>Both. At the same time.",
      prongs: [
        {
          num: "1",
          label: "Prong One",
          title: "Hospital Experience Design & Staff Training",
          body: "The research revealed that a significant portion of violent incidents are triggered by entirely preventable system failures \u2014 not by bad intentions. White Rice produced a comprehensive set of experience design recommendations and a healthcare staff training framework.",
          points: [
            "Patient journey mapping across all friction touchpoints \u2014 waiting, registration, information, consultation, emergency",
            "Wayfinding and communication system recommendations to reduce attendant confusion and anxiety",
            "Behavioural nudges and environmental design recommendations at high-friction points",
            "Healthcare staff training on de-escalation, communication under pressure, and early intervention in rising conflict situations",
          ],
        },
        {
          num: "2",
          label: "Prong Two",
          title: "Barosakare \u2014 National Behaviour Change Campaign",
          body: "Changing the system reduces friction. But changing behaviour requires a public campaign that reaches people before they arrive at the hospital \u2014 when they are calm enough to think about how they want to act, not in the middle of a crisis.",
          points: [
            "Campaign name \u201CBarosakare\u201D \u2014 trust the healer \u2014 repositioning the healthcare worker as a partner, not an obstacle",
            "TV ad showing the full consequence chain: violence \u2192 disruption \u2192 other patients suffer \u2192 everyone loses",
            "Empathy-building content showing the healthcare worker\u2019s perspective \u2014 what they see, feel, and carry",
            "Celebrity engagement amplifying the message across media and digital platforms",
          ],
        },
      ],
    },

    /* ── TV Ad Band (custom) ── */
    tvAd: {
      eyebrow: "The Barosakare TV Ad \u00b7 Two Stories. One Consequence.",
      heading: "The ad that made<br>Pakistan <em>see both sides.</em>",
      paragraphs: [
        "The Barosakare TV ad became the most visible and widely discussed element of the campaign. Its power came from a structural decision that was itself a product of the HCD research: instead of condemning violence, it showed the consequence chain. Not the act \u2014 the aftermath. Not the attacker \u2014 the patient who suffers next.",
        "The ad ran on two tracks simultaneously: the escalating consequences of violence for the hospital and the patients who depend on it, and an empathetic portrait of what the patient\u2019s attendant was experiencing that led to that moment. Both sides. At the same time. Neither villainised.",
      ],
      arcSteps: [
        { label: "Act One \u00b7 The Attendant\u2019s World", text: "A family member with a critically ill patient \u2014 waiting, fearful, uninformed, exhausted. The audience is placed inside their experience, feeling their frustration build in real time", color: "steel" },
        { label: "The Break Point", text: "The moment of violence \u2014 shown not as an act of evil but as the inevitable endpoint of a system that never gave the attendant anything else to do with their fear", color: "red" },
        { label: "The Ripple \u00b7 Consequences Unfold", text: "The camera widens. The disruption spreads. The healthcare worker is injured or distressed. The ward stops. Other patients \u2014 including critically ill patients \u2014 are left unattended. Another family now shares the first attendant\u2019s fear", color: "red" },
        { label: "The Doctor\u2019s Perspective", text: "A parallel thread showing the healthcare worker\u2019s reality \u2014 not as an indifferent bureaucrat, but as a person carrying an impossible workload with genuine care for every patient they treat", color: "steel" },
        { label: "Barosakare \u00b7 Trust", text: "The resolution \u2014 not a finger-wagging message but an invitation. Trust them. They are trying. You both want the same thing. Barosakare.", color: "amber" },
      ],
    },

    /* ── Campaign Channels Band (custom) ── */
    campaignChannels: {
      eyebrow: "Campaign Channels \u00b7 Reaching Pakistan at Every Level",
      heading: "One message.<br><em>Every medium Pakistan pays attention to.</em>",
      channels: [
        { name: "Television", body: "The campaign\u2019s flagship ad \u2014 shown on national and regional TV channels. Pakistan\u2019s widest-reach medium, bringing the consequence narrative into living rooms across the country" },
        { name: "Digital Media", body: "Social platforms amplifying the campaign\u2019s dual-perspective storytelling \u2014 shareable content that extended the TV ad\u2019s reach and generated organic engagement from the healthcare community" },
        { name: "Celebrity Engagement", body: "Public figures lending their voice and reach to Barosakare \u2014 expanding the campaign\u2019s credibility and audience beyond ICRC\u2019s direct network into Pakistan\u2019s mainstream public discourse" },
        { name: "Radio", body: "Reaching Pakistan\u2019s mass audience \u2014 particularly in lower-income communities where public hospital usage is highest. Radio brought Barosakare to the audiences most directly affected by healthcare violence" },
        { name: "Outdoor", body: "Campaign branding at scale \u2014 placed in and around hospitals, clinics, and high-traffic public areas. Meeting the audience at the exact location where the behaviour change was needed most" },
      ],
    },

    /* ── Closing ── */
    closing: {
      heading: "The healer cannot heal<br>if they are afraid<br><em>to show up.</em>",
      body: "Barosakare began with a team member becoming a patient in one of Pakistan\u2019s most overwhelmed hospitals \u2014 and it ended with four million people reconsidering what happens when fear becomes violence in a place that is supposed to save lives. That journey, from embedded research to national movement, is what White Rice was built to make.",
    },

    /* ── Impact Cells (for grid) ── */
    impactCells: [
      { big: "4 Million+", desc: "People reached through TV, digital, celebrity, radio, and outdoor \u2014 creating a national conversation around healthcare violence for the first time." },
      { big: "100+ Hospitals", desc: "Hospitals across Pakistan influenced by the Barosakare insights, recommendations, and campaign \u2014 extending the programme\u2019s impact well beyond the two research sites." },
      { big: "System + Society", desc: "The dual-pronged strategy \u2014 experience design for hospitals and behaviour change for the public \u2014 addressed the crisis at both the structural and individual level simultaneously." },
      { big: "A National First", desc: "Pakistan\u2019s first nationally coordinated, multi-channel behaviour change campaign specifically addressing violence against healthcare workers \u2014 grounded in empathy for everyone in the room." },
    ],

    /* ── Standard sections (kept for fallback rendering) ── */
    challenge: {
      heading: "The Challenge",
      body: "When a patient\u2019s attendant strikes a doctor, it is rarely a simple act of cruelty. It is the end of a long chain of frustration, confusion, fear, and unmet need. ICRC Pakistan commissioned White Rice to find that chain \u2014 and break it \u2014 through embedded research, experience design, and a national behaviour change campaign that reached over 4 million people.\n\nThe challenge demanded more than another public awareness campaign. The crisis existed at the intersection of two broken experiences: a healthcare system that failed to communicate with or comfort the patient\u2019s family, and an attendant community that had no tools beyond confrontation when fear became unbearable.",
      quote: {
        text: "We sent a researcher into JPMC as a patient. What they experienced in those hours became the emotional foundation of the entire campaign.",
      },
    },
    strategy: {
      heading: "The Strategy",
      intro: "The programme demanded a dual-pronged approach \u2014 one aimed at the system, one aimed at the public. Both had to launch simultaneously, because fixing either in isolation would fail.",
      steps: [
        {
          number: "01",
          title: "Hospital Experience Design & Staff Training",
          description: "The research revealed that a significant portion of violent incidents are triggered by entirely preventable system failures \u2014 not by bad intentions. White Rice produced a comprehensive set of experience design recommendations and a healthcare staff training framework.",
        },
        {
          number: "02",
          title: "Barosakare \u2014 National Behaviour Change Campaign",
          description: "Changing the system reduces friction. But changing behaviour requires a public campaign that reaches people before they arrive at the hospital \u2014 when they are calm enough to think about how they want to act, not in the middle of a crisis.",
        },
      ],
    },
    work: {
      heading: "The Work",
      body: "White Rice\u2019s work spanned the complete arc: from embedded field research to a nationally broadcast TV campaign. Every creative and strategic decision was built directly on what the team observed, experienced, and documented inside Pakistan\u2019s most pressured hospitals.",
      deliverables: [
        "Embedded HCD Research",
        "Visual Ethnography",
        "Bodystorming",
        "Patient Journey Mapping",
        "Hospital Experience Design",
        "Healthcare Staff Training Design",
        "National Campaign Strategy",
        "TV Ad Production",
        "Celebrity Engagement",
        "Radio \u00B7 Outdoor \u00B7 Digital",
      ],
    },
    impact: {
      heading: "The <em>Impact</em>",
      body: "Barosakare demonstrated that healthcare violence in Pakistan is not an intractable cultural problem \u2014 it is a design and communication problem. When people understand the consequences of their actions, when they feel seen on both sides of the encounter, and when the healthcare system removes the friction points that trigger frustration, the behaviour changes. The campaign\u2019s reach proved the demand for this conversation existed and was waiting for a voice.",
      metrics: [
        { value: 4, suffix: "Million+", label: "People reached through TV, digital, celebrity, radio, and outdoor" },
        { value: 100, suffix: "+ Hospitals", label: "Hospitals across Pakistan influenced by the Barosakare campaign" },
      ],
      closingNote: "The campaign\u2019s TV ad remains the most resonant piece of health communication on this issue ever produced in Pakistan \u2014 because it trusted the audience enough to show them both sides of the story, without deciding for them which side was right.",
    },
    gallery: {
      heading: "Gallery",
      images: [
        { src: "/images/icrc/icrc01.jpg", alt: "Community members engaging with Bharosa healthcare safety campaign materials", span: "wide" },
        { src: "/images/icrc/icrc02.jpg", alt: "Healthcare facility with Bharosa programme signage", span: "normal" },
        { src: "/images/icrc/icrc03.jpg", alt: "Animated illustration from the Bharosa campaign", span: "normal" },
      ],
    },
  },

  /* 17 ─ Dunia Aali Larki / Oxfam */
  {
    slug: "oxfam-dunia-aali-larki",
    year: "2014 \u2013 2018",
    tags: ["Girls' Education", "Advocacy Campaign", "Dunia Aali Larki", "Movement Building", "16 Days of Activism", "Children's Assembly", "Oxfam Pakistan", "Animation", "Socio-Ecological Model", "Policy Advocacy", "Grassroots Mobilisation", "SDG 4", "SDG 5", "Pakistan"],

    /* ── V2 Theme (crimson / gold from HTML) ── */
    theme: {
      primary: "#8A1A2A",
      primaryLight: "#C4415A",
      accent: "#C49A1A",
      accentLight: "#E8C85A",
    },
    hero: {
      eyebrow: "Oxfam Pakistan \u00b7 16 Days of Activism \u00b7 National Movement",
      title: "The World<br>Against the <em>Girl.</em>",
      subtitle: "Dunia Aali Larki , A Campaign That Became a Movement",
      description: "What began as an animated campaign for 16 Days of Activism became Pakistan\u2019s most powerful advocacy movement for girls\u2019 right to education , earning a $1 million grant, producing Pakistan\u2019s first Children\u2019s Assembly, and shifting the national conversation for years to come.",
      meta: [
        { label: "Client", value: "Oxfam Pakistan" },
        { label: "Campaign", value: "Dunia Aali Larki \u00b7 \u062F\u0646\u06CC\u0627 \u0622\u0644\u06CC \u0644\u0691\u06A9\u06CC" },
        { label: "Scale", value: "4-Year National Advocacy Campaign" },
        { label: "White Rice Role", value: "Campaign & Movement Design Lead" },
      ],
    },
    heroImage: "/images/dunyaAurLarkiWide.jpg",
    role: {
      heading: "From Campaign Spark to <em>National Movement Architecture</em>",
      body: "White Rice designed Dunia Aali Larki from its first frame to its national scale , beginning with the animated campaign film that launched on 16 Days of Activism, and growing through four years of advocacy into a multi-tier movement spanning policymakers, schools, communities, media, and Pakistan\u2019s first Children\u2019s Assembly. Our role spanned creative strategy, animation production, grassroots mobilisation design, school programme development, policy dialogue facilitation, and digital amplification , all in service of one sustained demand: that girls in Pakistan have the right to learn.",
      services: [
        "Campaign Strategy & Creative Direction",
        "Animation Production",
        "Movement Architecture",
        "Policy Dialogue Design",
        "Grassroots Mobilisation",
        "School Club Programme",
        "Children's Assembly Design",
        "Mass Media Strategy",
        "Digital Amplification",
        "Global Conference Design",
      ],
    },
    outcomes: {
      cards: [
        { stat: "$1M Grant", description: "The animated campaign directly led to Oxfam securing a $1 million funding grant to convert the 16-day activation into a 4-year national advocacy programme." },
        { stat: "4 Years", description: "A 16-day campaign transformed into a 4-year sustained national movement , operating simultaneously at policy, community, school, media, and digital levels." },
        { stat: "Pakistan\u2019s First", description: "Pakistan\u2019s first Children\u2019s Assembly , a national parliamentary-style debate on girls\u2019 right to education, held at a convention centre in Islamabad with political figures as moderators." },
        { stat: "36 Million", description: "Children out of school in Pakistan , the crisis the campaign was built to address , including one of the world\u2019s highest concentrations of out-of-school girls." },
        { stat: "A Movement", description: "The campaign\u2019s legacy outlasted the programme itself , translating into other initiatives, strengthening partner organisations, and giving the girls\u2019 education sector a unified national voice." },
      ],
      watermark: "\u0644\u0691\u06A9\u06CC",
    },

    sparkMovement: {
      eyebrow: "The Arc \u00b7 From Spark to Sustained Movement",
      heading: "One animated film.<br><em>Four years of national change.</em>",
      steps: [
        { badge: "The Spark", title: "Animated Campaign Film", body: "Launched on November 25th for 16 Days of Activism , a bold, emotionally resonant animated film showing the disparity and compounding challenges a girl faces in Pakistan. Aired on TV and amplified across digital platforms." },
        { badge: "The Catalyst", title: "$1M Grant Secured", body: "The campaign\u2019s resonance demonstrated to funders that Pakistan was ready for a sustained movement on girls\u2019 education. Oxfam secured a $1 million grant to expand from 16 days to a 4-year national advocacy programme." },
        { badge: "The Movement", title: "4-Year National Advocacy", body: "A full socio-ecological model campaign , operating simultaneously at policy, community, school, and digital levels, culminating in Pakistan\u2019s first Children\u2019s Assembly and a lasting shift in the national conversation." },
      ],
    },
    divider: {
      stat: "36 million<br>children.<br>No school.",
      text: "Pakistan has one of the world\u2019s highest numbers of out-of-school children , 36 million , with girls disproportionately excluded. Behind every statistic is a girl whose family was never told her education was worth the investment, or never asked. Dunia Aali Larki was built on the premise that the conversation had to happen at every level simultaneously , from the parliament to the primary school classroom , and it had to be loud enough that no one could claim they hadn\u2019t heard it.",
    },
    semTiers: {
      eyebrow: "Socio-Ecological Model \u00b7 Designed for Every Tier of Influence",
      heading: "A movement works when <em>everyone</em> hears it<br>in the language that belongs to them.",
      tiers: [
        { level: "5", label: "Enabling Environment", name: "Policy & Government", activities: ["Provincial government dialogues", "Education reform advocacy", "Pakistan\u2019s first global education conference", "International speakers on girls\u2019 right to education", "Children\u2019s Assembly , political moderators"] },
        { level: "4", label: "Institutional", name: "Schools & Educational Bodies", activities: ["School-level debate clubs", "Structured debate curriculum", "Teacher and principal engagement", "NGO and education institution partnerships", "Children\u2019s Assembly selection"] },
        { level: "3", label: "Community", name: "Local Influencers & Leaders", activities: ["Community rallying events", "Local politicians engaged as advocates", "Religious and community influencers", "Mass media , highlighting gaps & opportunities", "Cross-community mobilisation"] },
        { level: "2", label: "Family", name: "Parents & Caregivers", activities: ["Parents and children at rallies together", "Parent-teacher engagement at school clubs", "Household-level messaging via TV and digital", "Donor community outreach"] },
        { level: "1", label: "Individual", name: "Girls & Children", activities: ["Girls as campaign advocates and debaters", "Children\u2019s Assembly participants", "Digital storytelling by and for girls", "School club leadership", "National platform , parliamentary debate"] },
      ],
    },
    assembly: {
      eyebrow: "Campaign Centrepiece \u00b7 Pakistan\u2019s First",
      heading: "The Children\u2019s <em>Assembly.</em>",
      stat: "Pakistan\u2019s<br>First.",
      paragraphs: [
        "The Children\u2019s Assembly was the campaign\u2019s most audacious and most enduring achievement. For the first time in Pakistan\u2019s history, children formed their own parliament , a Children\u2019s Assembly , and convened at a national convention centre in Islamabad to debate the right of girls to education at a national assembly level.",
        "This was not a symbolic exercise. The debates were substantive, the participants were prepared, and the audience included political figures who served as moderators , lending the proceedings genuine institutional weight and sending an unmistakable message: the children of Pakistan are not waiting for adults to solve this for them.",
      ],
      features: [
        { bold: "National Convention Centre, Islamabad", text: ", a deliberate venue choice that gave children the stage their arguments deserved, not a school auditorium" },
        { bold: "Children\u2019s Parliament format", text: ", structured debate with elected child representatives arguing for girls\u2019 right to education in front of peers, parents, politicians, and press" },
        { bold: "Political figures as moderators", text: ", not keynote speakers, but moderators: listening to children debate, not the other way around" },
        { bold: "National media coverage", text: ", the Assembly generated press coverage that no advocacy report or policy brief could match, putting children\u2019s voices at the centre of the national education conversation" },
      ],
    },
    targetAudiences: {
      eyebrow: "Target Audiences \u00b7 Everyone Who Shapes a Girl\u2019s Future",
      heading: "The campaign had <em>one message</em><br>and eight different audiences to deliver it to.",
      cards: [
        { title: "Government & Policymakers", body: "Provincial and federal government , targeted through dialogues, the global conference, and the Children\u2019s Assembly to drive policy reform on girls\u2019 education." },
        { title: "Donors & NGOs", body: "International and national funders , shown a credible, scaled movement that justified continued and increased investment in girls\u2019 education in Pakistan." },
        { title: "Educational Institutions", body: "Schools and universities , engaged through club programmes and the Children\u2019s Assembly to become active programme partners rather than passive beneficiaries." },
        { title: "Parents & Teachers", body: "The day-to-day gatekeepers of girls\u2019 access to education , reached through school clubs, rallies, community events, and mass media to shift the household-level calculation." },
      ],
    },
    impactCells: [
      { big: "$1M Grant", desc: "A 16-day animated campaign converted into a $1 million, 4-year national advocacy programme , the clearest possible validation of the creative strategy." },
      { big: "Pakistan\u2019s First", desc: "Children\u2019s Assembly , held at the national convention centre in Islamabad, with political figures as moderators and children debating girls\u2019 right to education at parliamentary level." },
      { big: "4 Years", desc: "From a single animated film to a multi-tier, multi-year national movement , operating simultaneously at policy, community, school, and digital levels across Pakistan." },
      { big: "A Legacy", desc: "The movement\u2019s impact translated into the organisations that followed , strengthening the sector\u2019s collective voice and providing a replicable model for issue-led movement building in Pakistan." },
    ],
    closing: {
      heading: "A 16-day campaign.<br>A four-year movement.<br><em>A girl at a podium.</em>",
      body: "Dunia Aali Larki proved that a single, well-designed creative moment , an animated film that told the truth about a girl\u2019s life in Pakistan , can be the beginning of something much larger than a campaign. When the movement is built right, it doesn\u2019t end when the funding does. It becomes part of the air the sector breathes.",
    },

    challenge: {
      heading: "The <em>Challenge</em>",
      body: "Pakistan\u2019s girl-child education crisis is not a secret. It is a well-documented, frequently reported, consistently underfunded emergency. 36 million children are out of school, and girls represent the majority of the excluded , kept home by a combination of poverty, patriarchal norms, distance, safety fears, early marriage, and institutional indifference. The problem is known. The barrier has always been the will to act , at the level of government, community, and family simultaneously.\n\nOxfam needed more than a public awareness campaign. Awareness of the crisis was not lacking , what was lacking was the social permission, political urgency, and grassroots momentum that would translate awareness into action across every tier of the system. Inspired directly by the Nike Girl Effect model, Oxfam and White Rice set out to do for Pakistan\u2019s girl-child education movement what that global initiative had done globally: make it feel like a cause that belonged to everyone.\n\nThe 16 Days of Activism window (November 25 to December 10) provided the launchpad. The question was what to put on it , something with enough emotional power to spark a movement, and enough strategic architecture to sustain one for four years.",
      quote: {
        text: "You cannot fix with a school what a community has already decided. The campaign had to change the decision before it could change the enrolment numbers.",
      },
    },
    strategy: {
      heading: "The <em>Strategy</em>",
      intro: "White Rice\u2019s strategy was built on three convictions: that storytelling , not statistics , moves people; that a movement needs architecture, not just energy; and that the socio-ecological model is not a theory to cite in a report, it is a design brief for reaching everyone who matters simultaneously.",
      steps: [
        { number: "01", title: "Animation as the Movement\u2019s Voice", description: "The animated film was not simply an ad , it was the campaign\u2019s emotional engine. Animation allowed White Rice to show a Pakistani girl\u2019s compounding disadvantages with the honesty and universality that live film rarely achieves in this context. It crossed language, class, and media format , airable on national TV and shareable on every digital platform." },
        { number: "02", title: "Multi-Tier, Simultaneous Activation", description: "The full socio-ecological model , from individual to family to community to enabling environment , was activated in parallel, not sequentially. School clubs ran at the same time as policy dialogues. Rallies happened while the global conference was being planned. Digital amplified everything." },
        { number: "03", title: "Children as Advocates, Not Beneficiaries", description: "The campaign\u2019s most radical design decision was to position children , specifically girls , not as objects of charity or policy concern, but as the campaign\u2019s most powerful advocates. School debates, rallies, and ultimately the Children\u2019s Assembly gave them the platform, the legitimacy, and the audience they deserved." },
        { number: "04", title: "Stories from the Ground, Amplified by Digital", description: "The campaign\u2019s digital strategy was not a megaphone for messaging , it was a distribution system for real stories. What happened at rallies, in school clubs, in community dialogues was captured and amplified to a national audience that could not attend in person." },
      ],
    },
    work: {
      heading: "The <em>Intervention</em>",
      body: "White Rice designed Dunia Aali Larki from its first frame to its national scale , beginning with the animated campaign film that launched on 16 Days of Activism, and growing through four years of advocacy into a multi-tier movement spanning policymakers, schools, communities, media, and Pakistan\u2019s first Children\u2019s Assembly. Our role spanned creative strategy, animation production, grassroots mobilisation design, school programme development, policy dialogue facilitation, and digital amplification , all in service of one sustained demand: that girls in Pakistan have the right to learn.",
      deliverables: [
        "Campaign Strategy & Creative Direction",
        "Animation Production",
        "Movement Architecture",
        "Policy Dialogue Design",
        "Grassroots Mobilisation",
        "School Club Programme",
        "Children's Assembly Design",
        "Mass Media Strategy",
        "Digital Amplification",
        "Global Conference Design",
      ],
    },
    impact: {
      heading: "The <em>Impact</em>",
      body: "Dunia Aali Larki accomplished something that most advocacy campaigns do not: it outlasted itself. The programme formally ended, but the movement it built did not. Other organisations working on girls\u2019 education in Pakistan found themselves operating within a changed landscape , one in which their work had a stronger voice, a more receptive public, and a clearer precedent for what advocacy on this subject could look like.",
      metrics: [
        { value: 1000000, suffix: "", prefix: "$", label: "A 16-day animated campaign converted into a $1 million, 4-year national advocacy programme , the clearest possible validation of the creative strategy." },
        { value: 1, suffix: "", label: "Children\u2019s Assembly , held at the national convention centre in Islamabad, with political figures as moderators and children debating girls\u2019 right to education at parliamentary level." },
        { value: 4, suffix: "", label: "From a single animated film to a multi-tier, multi-year national movement , operating simultaneously at policy, community, school, and digital levels across Pakistan." },
        { value: 36000000, suffix: "", label: "Children out of school in Pakistan , the crisis the campaign was built to address , including one of the world\u2019s highest concentrations of out-of-school girls." },
      ],
      closingNote: "The most significant impact of Dunia Aali Larki was not a number. It was the moment a Pakistani girl stood at a podium in a national convention centre in Islamabad, looked at a panel of politicians, and made the case for her own right to be educated. That moment was designed. And it changed something.",
    },
    gallery: {
      heading: "Gallery",
      images: [
        { src: "/images/timeline/2019.png", alt: "Girls participating in the Dunia Aali Larki programme", span: "wide" },
        { src: "/images/timeline/2020.png", alt: "Community engagement session with young women", span: "normal" },
        { src: "/images/timeline/2021.png", alt: "Oxfam programme activities in the field", span: "normal" },
      ],
    },
  },

  /* 18 ─ Saaf Karachi Meri Zimmedari */
  {
    slug: "saaf-karachi-waste",
    year: "2022 \u2013 2023",
    tags: ["Recycling", "Waste Management", "Behaviour Change", "Waste Segregation", "Community Mobilisation", "Youth Engagement", "Digital Campaign", "Incentive Design", "Karachi", "Tier Fund", "SDG 11", "SDG 12"],
    theme: {
      primary: "#2A3A4A",
      primaryLight: "#4A6A8A",
      accent: "#5A8A1A",
      accentLight: "#8AB84A",
    },
    heroImage: "/images/tearFund/heroImage.png",
    hero: {
      eyebrow: "Tier Fund \u00B7 Karachi \u00B7 Multi-Community",
      title: "Clean Karachi<br>Is <em>My</em> Responsibility",
      subtitle: "Recycling & Waste Segregation Behaviour Change Campaign",
      description: "A full-spectrum community behaviour change campaign designed to shift Karachi\u2019s waste practices from household to hub \u2014 turning dry\u2013wet segregation, collection, and recycling into a community movement, not a government mandate.",
      meta: [
        { label: "Client", value: "Tier Fund" },
        { label: "Location", value: "Karachi \u00B7 Low-Income Communities" },
        { label: "Focus", value: "Waste Segregation & Recycling Behaviour Change" },
        { label: "White Rice Role", value: "SBC Strategy, Campaign & Creative Lead" },
      ],
    },
    role: {
      heading: "SBC Strategy, Campaign Design & <em>Creative Lead</em>",
      body: "White Rice designed the complete behaviour change strategy and communication campaign for the Saaf Karachi Meri Zimmedari initiative \u2014 from formative research and community engagement, through to household nudge design, social mobiliser toolkits, animation production, mass media, incentive architecture, and community recognition programmes. Working alongside local government, collection teams, and the Hariali Hub recycling centre, we built a campaign that touched every actor in the recycling chain.",
      services: [
        "Formative Research", "SBC Strategy", "Campaign Design & Branding",
        "Community Mobilisation", "Household Nudge Design", "Animation Production",
        "Social Media & Influencers", "Incentive & Rewards Architecture",
        "Youth Clubs & Events", "FLW Toolkit Design",
      ],
    },
    saafChain: {
      label: "The Recycling Chain \u2014 How the System Was Designed to Work",
      steps: [
        { title: "Household Segregation", body: "Families separate dry and wet waste at source using colour-coded bins and kitchen nudges", color: "rgba(90,138,26,.25)" },
        { title: "Collection Vehicles", body: "Government-run segregated collection vehicles pick up pre-sorted waste from communities", color: "rgba(26,74,106,.3)" },
        { title: "Hariali Hub", body: "Local recycling centre receives and further sorts the collected material by type", color: "rgba(196,130,26,.2)" },
        { title: "Recycled Products", body: "Dry waste processed into driveways, construction materials, and reusable products", color: "rgba(90,138,26,.2)" },
        { title: "Organic Fertiliser", body: "Wet waste converted into compost and fertiliser \u2014 closing the loop from kitchen to soil", color: "rgba(74,42,90,.2)" },
      ],
    },
    outcomes: {
      cards: [
        { stat: "Multi-Community", description: "Campaign deployed across low-income communities in Karachi \u2014 reaching women, men, youth, and community influencers simultaneously." },
        { stat: "Behaviour Shift", description: "Measurable change in household waste segregation practices \u2014 dry from wet \u2014 as a routine daily behaviour." },
        { stat: "Full Chain", description: "First campaign to incentivise every actor in the recycling chain \u2014 households, collectors, social mobilisers, and communities \u2014 simultaneously." },
        { stat: "Social Movement", description: "Youth clubs, tournaments, festivals, and community recognition programmes turned recycling from a chore into a community identity." },
        { stat: "Mass Reach", description: "TikTok, WhatsApp, influencer networks, outdoor branding, and branded collection vehicles amplified the campaign from community to city-level visibility." },
      ],
      watermark: "KARACHI",
    },
    divider: {
      stat: "Segregate.<br>Collect.<br>Recycle.",
      text: "Three simple behaviours. But in low-income communities where recycling was a new concept, where waste bins were absent from homes, and where the government\u2019s collection infrastructure was invisible to residents, none of them could be taken for granted. The campaign had to create the knowledge, the tools, the motivation, and the social permission for all three \u2014 at once, across an entire city.",
    },
    challenge: {
      heading: "The <em>Challenge</em>",
      body: "Recycling was not part of how Karachi\u2019s low-income communities understood waste. Waste was disposed of \u2014 often wherever was most convenient \u2014 not sorted, segregated, and handed to a collection vehicle for a journey to a recycling hub. The concept of a Hariali Hub, of dry versus wet waste, of plastics being turned into driveways \u2014 all of it was genuinely new.\n\nThe campaign had to work across multiple segments simultaneously \u2014 women managing household waste, men and youth who influenced community norms, local influencers and religious leaders whose endorsement could shift social permission, waste collectors who needed to be part of the solution rather than bypassed by it, and government partners whose collection infrastructure only worked if households had already done their part.\n\nBehaviour change in this context also meant confronting deeply ingrained norms in communities where open dumping was normalised, where waste bins at home were uncommon, and where the connection between household practice and city-level cleanliness had never been made visible. White Rice\u2019s role was to make that connection \u2014 and to make it feel urgent, achievable, and personally meaningful.",
      quote: {
        text: "In a community that has never encountered recycling as a practice, the first job is not to motivate the behaviour. It is to make the behaviour imaginable.",
      },
    },
    strategy: {
      heading: "The <em>Strategy</em>",
      intro: "White Rice began with in-context qualitative research \u2014 observations, one-on-one interviews, and focus group discussions across target communities \u2014 mapping current waste disposal practices, identifying the moments where behaviour broke down, and understanding what would make long-term change possible rather than just compliance in the short term.\n\nThe strategic framework that emerged was built around four simultaneous layers of activation: the household, the community, mass media channels, and the incentive architecture that connected and rewarded performance across all of them.",
      steps: [
        { number: "01", title: "Women at Home", description: "Primary waste managers \u2014 targeted through household visits, kitchen nudges, and waste bin design for daily habit formation." },
        { number: "02", title: "Men & Youth", description: "Social norm influencers \u2014 engaged through sports tournaments, youth clubs, festivals, and TikTok-led peer campaigns." },
        { number: "03", title: "Community Influencers", description: "Trusted voices \u2014 local leaders and respected figures \u2014 brought in as champions to create social permission for behaviour change." },
        { number: "04", title: "Waste Collectors", description: "Frontline system actors \u2014 incentivised, recognised, and equipped as programme champions, not just operatives." },
      ],
    },
    saafHousehold: {
      eyebrow: "Household-Level Design",
      heading: "Where <em>behaviour change</em> begins \u2014 in the kitchen.",
      intro: "The household was the first and most critical site of intervention. Before any community session or media campaign could take effect, the home needed to have the physical tools and environmental nudges to make the new behaviour the path of least resistance.",
      tools: [
        { title: "Colour-Coded Waste Bins", body: "Designated bins for dry and wet waste \u2014 making segregation a physical act built into the daily kitchen routine, not a decision that required thinking each time." },
        { title: "Kitchen Nudges & Doorstickers", body: "Visual reminders placed at the point of behaviour \u2014 on bin lids, refrigerators, and above waste disposal areas \u2014 reinforcing the habit at the exact moment it needed to happen." },
        { title: "\u201CI Am a Clean Champion\u201D Identity Sticker", body: "A household identity marker that connected the family\u2019s private practice to a larger community movement \u2014 turning domestic behaviour into a public statement of values and belonging." },
        { title: "WhatsApp Behaviour Nudges", body: "Regular reminder messages and animated content delivered directly to household members \u2014 keeping the behaviour salient between social mobiliser visits and community sessions." },
      ],
    },
    saafIncentive: {
      eyebrow: "Incentive Architecture \u00B7 Everyone Has a Role. Everyone Gets Recognised.",
      heading: "A rewards system designed to <em>motivate every actor</em> in the chain.",
      cards: [
        { who: "Top Performers", name: "Champion Households", desc: "Families with the highest and most consistent segregation performance recognised publicly \u2014 creating social aspiration around the behaviour and peer competition as a driver of change." },
        { who: "Best Performers", name: "Top Communities", desc: "Whole communities recognised and celebrated for collective performance \u2014 making clean neighbourhoods a source of community pride, not just individual compliance." },
        { who: "Frontline Staff", name: "Social Mobiliser Scorecards", desc: "Performance tracking and recognition for social mobilisers \u2014 acknowledging frontline effort and creating accountability with appreciation rather than just monitoring." },
        { who: "Collection Teams", name: "Collector Awards", desc: "Recognition for top-performing waste collectors \u2014 treating them as essential programme champions and giving their contribution the visibility and dignity it deserved." },
      ],
    },
    saafMediaChannels: {
      eyebrow: "360\u00B0 Campaign Architecture",
      heading: "Every channel working together \u2014 from the kitchen wall to TikTok.",
      categories: [
        {
          cat: "Community & Outdoor",
          items: [
            "Wall chalkings as community reminders and nudges",
            "Shop fascia branding across target areas",
            "Branded collection vehicles \u2014 moving billboards for the campaign",
            "Community sessions and social mobiliser outreach",
            "Sports tournaments & youth festivals",
            "Youth clubs as ongoing community infrastructure",
          ],
        },
        {
          cat: "Digital & Social Media",
          items: [
            "Animated social media content series",
            "TikTok influencer engagement \u2014 community-level creators",
            "Online PR and news media coverage",
            "Celebrity endorsement videos",
            "WhatsApp nudges and animated reminders",
            "Local social media influencer partnerships",
          ],
        },
        {
          cat: "Field & Household",
          items: [
            "Social mobiliser engagement toolkit",
            "Animation series for community session facilitation",
            "Colour-coded household waste bins",
            "Kitchen nudges and doorstickers",
            "Clean Champion identity stickers",
            "Scorecard and incentive documentation",
          ],
        },
      ],
    },
    work: {
      heading: "The <em>Intervention</em>",
      body: "White Rice designed the complete behaviour change strategy and communication campaign for the Saaf Karachi Meri Zimmedari initiative \u2014 from formative research and community engagement, through to household nudge design, social mobiliser toolkits, animation production, mass media, incentive architecture, and community recognition programmes. Working alongside local government, collection teams, and the Hariali Hub recycling centre, we built a campaign that touched every actor in the recycling chain.",
      deliverables: ["Formative Research", "SBC Strategy", "Campaign Design & Branding", "Community Mobilisation", "Household Nudge Design", "Animation Production", "Social Media & Influencers", "Incentive & Rewards Architecture", "Youth Clubs & Events", "FLW Toolkit Design"],
    },
    impact: {
      heading: "The <em>Impact</em>",
      body: "Saaf Karachi Meri Zimmedari succeeded in doing what most recycling campaigns fail to do: making waste segregation feel like a community movement rather than a government instruction. By incentivising every actor in the recycling chain \u2014 from the household to the collector \u2014 and by making the behaviour visible, celebrated, and competitively desirable, the campaign created momentum that institutional programming alone cannot generate.",
      metrics: [
        { value: 1, suffix: " Full Chain", label: "Every actor incentivised \u2014 households, communities, social mobilisers, and collectors." },
        { value: 360, suffix: "\u00B0 Reach", label: "Kitchen nudges to TikTok \u2014 every relevant channel." },
        { value: 1, suffix: " Social Norm Shift", label: "Recycling transformed from chore into collective identity." },
        { value: 1, suffix: " Hariali Hub", label: "Household action connected to visible recycled products." },
      ],
      closingNote: "What made this programme distinctive was the decision to treat recycling not as an environmental message but as a civic identity. Saaf Karachi Meri Zimmedari gave communities something to be proud of \u2014 a claim of ownership over their city that could be expressed every time they sorted their waste. That is the shift that lasts beyond any campaign cycle.",
    },
    impactCells: [
      { big: "Full Chain", desc: "Every actor incentivised \u2014 households, communities, social mobilisers, and collectors \u2014 creating aligned motivation across the entire recycling system for the first time." },
      { big: "360\u00B0 Reach", desc: "From kitchen nudges to TikTok \u2014 the campaign reached community members through every relevant channel, in their homes, their streets, and their phones." },
      { big: "Social Norm Shift", desc: "Youth clubs, tournaments, and community recognition events transformed recycling from an individual chore into a collective identity \u2014 something Karachi\u2019s communities owned." },
      { big: "Hariali Hub", desc: "The campaign made the recycling chain legible to communities for the first time \u2014 connecting household action to a physical outcome they could see: products made from their own sorted waste." },
    ],
    closing: {
      heading: "When a city takes<br><em>ownership</em> of its own cleanliness,<br>no campaign is needed.",
      body: "Saaf Karachi Meri Zimmedari set out to make recycling possible in communities that had never practised it. What it created instead was something larger: a shared civic pride in a city that belongs to its people \u2014 and a responsibility they chose to carry.",
    },
    gallery: {
      heading: "Gallery",
      images: [
        { src: "/images/timeline/2019.png", alt: "Saaf Karachi waste management campaign activities", span: "wide" },
        { src: "/images/timeline/2020.png", alt: "Community engagement for waste segregation", span: "normal" },
        { src: "/images/timeline/2021.png", alt: "Recycling and waste management awareness materials", span: "normal" },
      ],
    },
  },

  /* 19 ─ SBC Cricket */
  {
    slug: "sbc-cricket",
    year: "2019 - 2020",
    tags: ["CRICKET Playbook", "UNICEF Pakistan", "SBC Toolkit", "Gamified Learning", "Behaviour Change Design", "21 Technique Cards", "Kaun", "Rukawat", "Karta", "Test", "Master Trainers", "Capacity Building", "Frontline Workers", "Multi-Province Cascade", "Pakistan"],
    theme: {
      primary: "#1A4A1A",
      primaryLight: "#3A8A3A",
      accent: "#C4781A",
      accentLight: "#E8A84A",
    },
    hero: {
      eyebrow: "UNICEF Pakistan \u00B7 Social Behaviour Change \u00B7 Learning Toolkit",
      title: "Play the<br><em>CRICKET</em><br>Playbook.",
      subtitle: "Making Behaviour Science Playable \u2014 Pakistan\u2019s First Gamified SBC Design Toolkit for Frontline Workers & Programme Teams",
      description: "Behaviour science is powerful. But it is also dense, academic, and inaccessible to the frontline workers, field partners, and community teams who need it most. In partnership with UNICEF, White Rice designed the CRICKET Playbook \u2014 a gamified, card-based toolkit that lets anyone design a behaviour change intervention, no PhD required.",
      meta: [
        { label: "Client", value: "UNICEF Pakistan" },
        { label: "Product", value: "CRICKET SBC Playbook \u00B7 \u06A9\u0631\u06A9\u0679" },
        { label: "Format", value: "Gamified Card-Based Toolkit \u00B7 21 Technique Cards" },
        { label: "White Rice Role", value: "Concept \u00B7 Design \u00B7 Training Architecture" },
      ],
    },
    role: {
      heading: "Designing the <em>Game</em> That Teaches Behaviour Change",
      body: "White Rice conceived, designed, and produced the CRICKET Playbook in partnership with UNICEF Pakistan \u2014 a first-of-its-kind gamified learning tool that demystifies social behaviour change for practitioners at every level of a programme. We designed the complete toolkit architecture, the four-step CRICKET framework, the 21 behaviour change technique cards, all prompt sheets and facilitation tools, and the training cascade that has since reached hundreds of practitioners across Pakistan\u2019s provinces. The goal: make the science of behaviour change as intuitive and accessible as playing a card game.",
      services: [
        "SBC Toolkit Design", "CRICKET Framework", "21 Technique Cards",
        "Prompt Sheet Design", "Channel Selection Tool", "Gamification Design",
        "Master Trainer Curriculum", "Training Cascade Architecture",
        "Facilitation Guides", "UNICEF Training Programme",
      ],
    },
    outcomes: {
      cards: [
        { stat: "21 Cards", description: "Behaviour change technique cards \u2014 a complete deck of intervention approaches that participants can physically pick up, play with, and apply to any behaviour change challenge." },
        { stat: "4 Steps", description: "The CRICKET framework \u2014 Kaun, Rukawat, Karta, Test \u2014 a complete behaviour change design process in four intuitive steps that anyone can follow." },
        { stat: "Hundreds Trained", description: "UNICEF teams, SBC staff, and provincial partners trained on the methodology \u2014 with the cascade now reaching practitioners across multiple provinces of Pakistan." },
        { stat: "National Cascade", description: "Master trainers trained and deployed to cascade the CRICKET methodology to provincial teams \u2014 a self-sustaining training architecture that grows with every cohort." },
        { stat: "Zero Background", description: "Required knowledge of behaviour science for a participant to use the toolkit effectively \u2014 designed from the ground up for frontline workers with context but no formal SBC training." },
      ],
      watermark: "\u06A9\u0631\u06A9\u0679",
    },
    cricketProblem: {
      eyebrow: "The Problem the Playbook Solves",
      headline: "The people who understand the community best are never in the room where the behaviour change strategy is designed. The people in that room have never visited the community.",
      body: "Behaviour change science is concentrated in specialist teams, academic literature, and programme design documents that frontline workers and field partners rarely see \u2014 and wouldn\u2019t know how to apply even if they did. Meanwhile, the rich contextual knowledge that community workers carry \u2014 who influences whom, what the real barriers are, what actually matters in this village \u2014 rarely makes it into programme design. The CRICKET Playbook was designed to close this gap: bringing behaviour science to the people with context, so that interventions are designed by the people who understand the problem best.",
    },
    cricketName: {
      eyebrow: "The Name \u00B7 \u06A9\u0631\u06A9\u0679 \u00B7 Four Letters. Four Steps.",
      heading: "Cricket in Urdu is written<br>in <em>four letters.</em><br>The playbook has four steps.",
      sub: "When written in Urdu, \u201CCricket\u201D \u2014 \u06A9\u0631\u06A9\u0679 \u2014 has exactly four letters. Each letter became a step in the behaviour change design process. A framework named after the game Pakistanis love most, structured around an alphabet whose four parts map perfectly onto the science of behaviour change design.",
      letters: [
        { urdu: "\u06A9", roman: "K", word: "Step 1 \u00B7 Kaun", meaning: "Who are we designing for?" },
        { urdu: "\u0631", roman: "R", word: "Step 2 \u00B7 Rukawat", meaning: "What are the barriers?" },
        { urdu: "\u06A9", roman: "K", word: "Step 3 \u00B7 Karta", meaning: "How do we change this?" },
        { urdu: "\u0679", roman: "T", word: "Step 4 \u00B7 Test", meaning: "Does it work?" },
      ],
    },
    cricketSteps: {
      eyebrow: "The CRICKET Framework \u00B7 Four Steps in Depth",
      heading: "From blank page to<br><em>field-tested intervention</em> \u2014 in one session.",
      steps: [
        {
          bg: "\u06A9", step: "Step 01 \u00B7 K", letter: "Kaun", urdu: "\u06A9\u0648\u0646",
          word: "Who Are We Designing For?", translation: "Audience Identification",
          body: "The starting point of every behaviour change intervention: who is the person whose behaviour we want to change? Not a demographic category \u2014 a real human being, with motivations, constraints, relationships, and a context. Kaun forces the team to be specific about their target.",
          promptLabel: "Prompt Sheet Guides",
          promptText: "Who exactly is the person? What are their daily routines? Who influences their decisions? What do they care about most? What does their day look like?",
        },
        {
          bg: "\u0631", step: "Step 02 \u00B7 R", letter: "Rukawat", urdu: "\u0631\u06A9\u0627\u0648\u0679",
          word: "What Is Stopping Them?", translation: "Barrier Identification",
          body: "Understanding why the desired behaviour is not already happening. Rukawat surfaces the real barriers \u2014 knowledge gaps, social norms, access constraints, motivation deficits, habit inertia \u2014 at the individual, household, and community level. The prompt sheets map barrier types systematically.",
          promptLabel: "Prompt Sheet Guides",
          promptText: "Is this a knowledge barrier? A motivation barrier? A social norm? An access or resource constraint? Does the person know what to do but not how? Or know how but face external constraints?",
        },
        {
          bg: "\u06A9", step: "Step 03 \u00B7 K", letter: "Karta", urdu: "\u06A9\u0631\u062A\u0627",
          word: "How Do We Change This?", translation: "Intervention Design \u00B7 21 Cards",
          body: "The heart of the toolkit \u2014 the ideation step. Participants select from the 21 behaviour change technique cards to design an intervention matched to the specific barriers identified in Rukawat. Pick a card. Discuss. Play. Combine. Prototype. The cards make the infinite landscape of behaviour science navigable by anyone.",
          promptLabel: "21 Technique Cards + Channel Sheet",
          promptText: "Which technique addresses this barrier? Which channel will reach this person? Community engagement? Frontline workers? Digital? TV? Combination? How do we deliver this intervention?",
        },
        {
          bg: "\u0679", step: "Step 04 \u00B7 T", letter: "Test", urdu: "\u0679\u06CC\u0633\u0679",
          word: "Does It Work?", translation: "Prototype \u00B7 Field Test \u00B7 Iterate",
          body: "The final step brings behaviour change design back to the real world. Test guides participants through a practical prototyping and field testing process \u2014 turning ideas from Karta into rapid prototypes, testing them with real community members, and using the results to refine before scaling.",
          promptLabel: "Prompt Sheet Guides",
          promptText: "What is the simplest version of this intervention we can test? Who will we test it with? What change are we looking for? How will we know if it worked? What will we change if it doesn\u2019t?",
        },
      ],
    },
    cricketCards: {
      eyebrow: "The Technique Deck \u00B7 21 Behaviour Change Cards",
      heading: "The entire science of<br>behaviour change \u2014<br><em>in a hand you can hold.</em>",
      body: "The 21 behaviour change technique cards are the playbook\u2019s most distinctive and powerful feature. Each card describes a specific, evidence-based behaviour change approach \u2014 drawn from decades of behavioural science research \u2014 translated into plain language, illustrated with examples, and designed to be physically picked up, shuffled, combined, and played with. Participants are not reading about behaviour change. They are designing it, in real time, with their hands.",
      cardCount: 21,
      categories: [
        { label: "Card Category 1", title: "Motivation Techniques", body: "Cards addressing the \u201Cwhy\u201D of behaviour \u2014 aspiration-building, consequence demonstration, goal-setting, values alignment, social identity activation, and peer comparison techniques that address motivational barriers." },
        { label: "Card Category 2", title: "Capability Techniques", body: "Cards addressing the \u201Chow\u201D of behaviour \u2014 skill-building, demonstration, modelling, habit formation, implementation intentions, simplification, and resource provision techniques that address knowledge and skill barriers." },
        { label: "Card Category 3", title: "Opportunity Techniques", body: "Cards addressing the \u201Ccontext\u201D of behaviour \u2014 environmental nudges, social norm activation, cue design, choice architecture, access improvement, and community accountability techniques that address structural and environmental barriers." },
      ],
    },
    cricketChannels: {
      eyebrow: "The Channel Prompt Sheet \u00B7 From Strategy to Delivery",
      heading: "Once you\u2019ve decided what to do,<br><em>decide how to reach them.</em>",
      channels: [
        { title: "Community Engagement", body: "Group sessions, community events, social mobilisers, public demonstrations, and peer-to-peer community channels \u2014 for norm-level change requiring collective participation" },
        { title: "Frontline & Community-Based Staff", body: "Health workers, social mobilisers, teachers, religious leaders, and other trusted community-embedded staff \u2014 for interventions requiring personal trust, household access, and individual behaviour support" },
        { title: "Digital & Mobile", body: "WhatsApp, social media, mobile content, SMS, and digital platforms \u2014 for reaching individuals between community touchpoints, providing on-demand information, and reinforcing messages from other channels" },
        { title: "Mass Media \u00B7 TV & Radio", body: "Television, radio, and broadcast media \u2014 for awareness, norm signalling, and campaign amplification reaching beyond the programme\u2019s direct community footprint to the broader public" },
      ],
    },
    challenge: {
      heading: "How the <em>Playbook<br>Works</em> in a Room",
      body: "A CRICKET Playbook session feels nothing like a behaviour change training. There are no slide decks and no lectures. Participants sit around a table with the cards, the prompt sheets, and a real challenge \u2014 a behaviour they are trying to change in a community they know. The facilitator walks them through four steps, but the tools do most of the teaching.\n\nAt Kaun, participants identify who they are designing for \u2014 often discovering in discussion that they had been designing for the wrong person, or had never been specific enough about the person they were trying to reach. At Rukawat, the barrier prompt sheet surfaces assumptions and challenges them \u2014 what teams think is a knowledge barrier often turns out to be a norm or access barrier in disguise. At Karta, the 21 cards open up a landscape of intervention options that participants would never have generated on their own. And at Test, the prototyping section teaches the discipline of learning before scaling \u2014 the single most valuable habit a development programme team can build.\n\nThe toolkit is designed to work across contexts \u2014 with high-literacy programme staff in a conference room, with frontline workers in a village meeting, and with mixed groups who have radically different educational backgrounds but share a deep knowledge of the community. The common language is the cards, the prompts, and the four steps. Everything else adapts.",
      quote: {
        text: "A community health worker who has never heard the word \u2018behavioural economics\u2019 was designing nudge interventions by the end of her first CRICKET session. The framework didn\u2019t simplify the science. It made the science feel like common sense.",
      },
    },
    strategy: {
      heading: "The Strategy",
      intro: "We used cricket \u2014 the region\u2019s most beloved sport \u2014 as a universal metaphor to make social behaviour change principles accessible, memorable, and genuinely fun to apply in the field.",
      steps: [
        { number: "01", title: "Concept Mapping", description: "Mapping core SBC theory to cricket analogies \u2014 from team strategy (stakeholder analysis) to match conditions (enabling environment) to player roles (community actors)." },
        { number: "02", title: "Toolkit Development", description: "Designing a suite of practical, visually rich tools \u2014 scorecards, prompt cards, facilitator guides \u2014 that made real SBC methodology hands-on and participatory." },
        { number: "03", title: "Workshop Design", description: "Creating interactive workshop formats where participants learned SBC through cricket-themed exercises, group scoring, and competitive team challenges." },
        { number: "04", title: "Master Trainer Cascade", description: "Training master trainers to deliver the SBC Cricket workshop independently \u2014 building sustainable capacity across UNICEF country offices and partner organisations." },
      ],
    },
    work: {
      heading: "How the <em>Playbook<br>Works</em> in a Room",
      body: "A CRICKET Playbook session feels nothing like a behaviour change training. There are no slide decks and no lectures. Participants sit around a table with the cards, the prompt sheets, and a real challenge \u2014 a behaviour they are trying to change in a community they know. The facilitator walks them through four steps, but the tools do most of the teaching.\n\nAt Kaun, participants identify who they are designing for \u2014 often discovering in discussion that they had been designing for the wrong person, or had never been specific enough about the person they were trying to reach. At Rukawat, the barrier prompt sheet surfaces assumptions and challenges them \u2014 what teams think is a knowledge barrier often turns out to be a norm or access barrier in disguise. At Karta, the 21 cards open up a landscape of intervention options that participants would never have generated on their own. And at Test, the prototyping section teaches the discipline of learning before scaling \u2014 the single most valuable habit a development programme team can build.\n\nThe toolkit is designed to work across contexts \u2014 with high-literacy programme staff in a conference room, with frontline workers in a village meeting, and with mixed groups who have radically different educational backgrounds but share a deep knowledge of the community. The common language is the cards, the prompts, and the four steps. Everything else adapts.",
      deliverables: [
        "SBC Facilitators Guidebook",
        "SBC Cricket Scorecard (English & Urdu)",
        "Behaviour Change Technique Prompt Cards",
        "BCT Posters (English & Urdu)",
        "Master Trainer Workshop Curriculum",
        "SBC Scoreboard Examples & Templates",
        "Training of Trainers Facilitation Pack",
        "Workshop Exercise Card Deck",
      ],
      quote: "A community health worker who has never heard the word \u2018behavioural economics\u2019 was designing nudge interventions by the end of her first CRICKET session. The framework didn\u2019t simplify the science. It made the science feel like common sense.",
    },
    cricketCascade: {
      eyebrow: "Training Cascade \u00B7 From UNICEF HQ to the Field",
      heading: "A self-propagating<br><em>methodology.</em>",
      steps: [
        { num: "01", title: "UNICEF Team Training", body: "White Rice trains UNICEF\u2019s own SBC and programme teams \u2014 building internal ownership of the CRICKET methodology and the facilitation skills to deliver it." },
        { num: "02", title: "Master Trainer Certification", body: "Selected participants trained to the master trainer level \u2014 equipped to independently deliver CRICKET Playbook sessions and train the next cohort of facilitators." },
        { num: "03", title: "Provincial Cascade", body: "Master trainers deploy independently to provincial teams \u2014 cascading the methodology across Pakistan\u2019s provinces without requiring White Rice\u2019s continued direct involvement." },
        { num: "04", title: "Hundreds Trained & Growing", body: "Hundreds of practitioners trained and still growing \u2014 a self-propagating methodology that expands every time a master trainer facilitates a new session, in a new province, with a new team." },
      ],
    },
    impact: {
      heading: "The <em>Impact</em>",
      body: "The CRICKET Playbook\u2019s impact is measured not in campaigns or reach figures, but in the number of people who can now design a behaviour change intervention who couldn\u2019t before. Every master trainer who delivers a provincial session multiplies that capacity. Every frontline worker who picks up the cards and designs an intervention for their community becomes, in that moment, a behaviour change practitioner \u2014 grounded not in theory, but in context and the right tools.\n\nWhat makes the CRICKET Playbook exceptional is not what it teaches. It is what it makes possible. A community health worker designing a behaviour nudge for her village. A district officer identifying the real barrier behind low vaccination rates. A programme manager who finally understands why the messages aren\u2019t working. That shift \u2014 from reading about behaviour change to doing it \u2014 is the toolkit\u2019s most important outcome. And it is repeating, multiplying, and spreading across Pakistan as this is written.",
      metrics: [
        { value: 2000, suffix: "+", label: "Practitioners Trained" },
        { value: 12, suffix: "", label: "Countries Reached" },
        { value: 500, suffix: "+", label: "Toolkits Distributed" },
        { value: 91, suffix: "%", label: "Usefulness Rating" },
      ],
      quote: { text: "For the first time, my team could explain behaviour change theory to community health workers \u2014 using a language they already loved.", attribution: "UNICEF SBC Specialist" },
      closingNote: "The SBC Cricket model established a replicable framework for making complex development methodology accessible through culturally resonant metaphor.",
    },
    impactCells: [
      { big: "Hundreds Trained", desc: "Practitioners across UNICEF Pakistan and partner organisations trained on the CRICKET methodology \u2014 a number that grows every time a master trainer runs a session." },
      { big: "Multi-Province", desc: "The methodology has been cascaded across multiple provinces by UNICEF-trained master trainers \u2014 without requiring White Rice\u2019s ongoing facilitation." },
      { big: "A Living Toolkit", desc: "The CRICKET Playbook continues to grow \u2014 with every application in the field generating new insights, new use cases, and new opportunities to take the methodology further." },
    ],
    closing: {
      heading: "Behaviour science is<br>only powerful if the<br>right people <em>can play it.</em>",
      body: "CRICKET gave Pakistan\u2019s frontline workers, programme teams, and field partners the ability to design behaviour change interventions themselves \u2014 grounded in the science, anchored in their community knowledge, and tested in the real world before they were scaled. That is not a training. That is a capability. And unlike a training, a capability compounds.",
    },
    gallery: {
      heading: "Gallery",
      images: [
        { src: "/images/sbc-cricket/workshop-scoreboard.jpg", alt: "Workshop participants working with SBC Scoreboard materials", span: "wide" },
        { src: "/images/sbc-cricket/cricket-snapshot.jpg", alt: "SBC Cricket methodology framework in English and Urdu", span: "wide" },
      ],
    },
  },

  /* 20 ─ Mumkin / CARE Mastercard */
  {
    slug: "care-mastercard-mumkin",
    year: "2023 \u2013 2024",
    tags: ["Mumkin", "CARE International", "Mastercard Foundation", "UBank", "Strivers Programme", "Women Entrepreneurs", "Micro-Enterprise", "HCD Research", "Digital Financial Inclusion", "Brand Identity", "Digital Campaign", "2M Reach", "Microfinance", "Skills Training", "Mentorship", "Pakistan"],
    theme: {
      primary: "#4A1A7A",
      primaryLight: "#8A5ACA",
      accent: "#C48A1A",
      accentLight: "#E8B84A",
    },
    hero: {
      eyebrow: "CARE International \u00B7 Mastercard Foundation \u00B7 Strivers Programme \u00B7 Pakistan",
      title: "Make It<br><em>Possible.</em>",
      subtitle: "Mumkin \u2014 Empowering 2 Million Micro-Entrepreneurs through HCD Research, Brand Identity & Digital Campaign",
      description: "A joint initiative between CARE International and Mastercard Foundation to connect Pakistan\u2019s women micro-entrepreneurs with digital financial services, skills training, mentorship, and microfinance \u2014 through a research-led, aspiration-first campaign that reached 2 million people.",
      meta: [
        { label: "Clients", value: "CARE International \u00B7 Mastercard Foundation" },
        { label: "Target", value: "Women Micro-Entrepreneurs \u00B7 Pakistan" },
        { label: "Campaign", value: "Mumkin \u00B7 \u0645\u0645\u06A9\u0646 \u00B7 Make It Possible" },
        { label: "White Rice Role", value: "HCD Research \u00B7 Brand Identity \u00B7 Digital Campaign Lead" },
      ],
    },
    heroImage: "/images/CARE Mastercard Mumkin.jpeg",
    role: {
      heading: "Research, Brand & <em>Campaign Architecture</em>",
      body: "White Rice was brought in as the creative and research partner for the Mumkin programme \u2014 responsible for the entire arc from understanding to activation. We conducted the HCD research that revealed what micro-entrepreneurs in Pakistan actually needed (not what programme designers assumed), translated those insights into the Mumkin brand identity and campaign strategy, developed all brand assets, and launched a digital campaign that reached 2 million entrepreneurs \u2014 connecting them to the programme\u2019s financial, training, and mentorship resources.",
      services: [
        "Human-Centred Design Research", "Entrepreneur Journey Mapping",
        "Mumkin Brand Identity", "Full Brand Asset Suite",
        "Campaign Strategy", "Digital Campaign Design",
        "Key Message Development", "Content Production",
        "Aspiration-Led Communication",
      ],
    },
    mumkinEcosystem: {
      eyebrow: "Programme Ecosystem \u00B7 Four Partners, One Goal",
      heading: "A coalition built to take micro-entrepreneurs<br><em>from aspiration to actual growth.</em>",
      partners: [
        { role: "Funder & Programme Originator", name: "Mastercard Foundation", body: "The Strivers Programme \u2014 Mastercard\u2019s global initiative engaging young entrepreneurs, especially women, in accessing digital financial services and scaling their businesses." },
        { role: "Implementing Partner", name: "CARE International Pakistan", body: "Joint venture lead \u2014 responsible for programme design, on-ground implementation, and connecting the programme\u2019s resources with Pakistan\u2019s micro-entrepreneur communities." },
        { role: "Financial Services Partner", name: "UBank \u00B7 U Microfinance Bank", body: "Loan and digital financial services provider \u2014 giving entrepreneurs access to microfinance, digital banking, and credit products specifically designed for Pakistan\u2019s micro-enterprise market." },
        { role: "Training Delivery Partner", name: "Specialised Training Agency", body: "On-ground training cascade \u2014 delivering the skills enhancement programme to micro-entrepreneurs across cohorts, in person and digitally." },
      ],
      wrRole: { label: "White Rice Role", name: "HCD Research \u00B7 Brand \u00B7 Campaign", body: "Understanding the entrepreneur\u2019s real journey, translating it into the Mumkin brand and identity, and designing the digital campaign that connected 2 million entrepreneurs with the programme" },
    },
    outcomes: {
      cards: [
        { stat: "2 Million+", description: "Entrepreneurs reached through the Mumkin digital campaign \u2014 connected to the programme\u2019s financial services, training, and mentorship resources." },
        { stat: "Mumkin", description: "\u201CMake It Possible\u201D \u2014 a brand identity built from real women\u2019s aspirations, launched as Pakistan\u2019s most resonant campaign for women micro-entrepreneurs." },
        { stat: "HCD First", description: "Deep research into the micro-entrepreneur journey \u2014 mapping barriers, motivations, and unmet needs before a single piece of content was designed." },
        { stat: "Full Brand", description: "Complete Mumkin brand identity and asset suite \u2014 from visual identity to digital campaign content \u2014 all built from research insight, not assumption." },
        { stat: "Sustained Cohort", description: "Entrepreneurs enrolled in cohort-based training programmes combining in-person and digital learning \u2014 sustained over a longer programme arc." },
      ],
      watermark: "2M",
    },
    mumkinBrand: {
      urdu: "\u0645\u0645\u06A9\u0646",
      name: "Mumkin",
      translation: "\u201CMake It Possible\u201D \u2014 \u201CIt Is Possible\u201D \u2014 \u201CYou Can.\u201D",
      body: "Mumkin is a single word that does the work of an entire aspiration. In Urdu, it means both that something is possible and that you can make it happen \u2014 collapsing the distance between dreaming and doing. Named from the HCD research that showed Pakistan\u2019s women micro-entrepreneurs didn\u2019t lack ambition or capability. They lacked access, connection, and the confidence that their dreams were within reach. Mumkin told them: they are.",
    },
    challenge: {
      heading: "The <em>Challenge</em>",
      body: "Pakistan\u2019s micro-entrepreneur landscape is vast, diverse, and systematically underserved. Women who run small enterprises \u2014 from tailoring and food preparation to handicrafts and home-based retail \u2014 are often the primary or sole income earners in their households, but operate entirely outside formal financial systems, without access to credit, digital commerce, or business development support.\n\nThe challenge for the campaign was as much about perception as it was about access. Many of these women had never been told that formal financial services, business training, or digital commerce were options available to them. The programme existed. But without a compelling, aspirational, and culturally resonant campaign to connect women with it, it would reach only those who were already connected \u2014 not the millions who needed it most.\n\nWhite Rice\u2019s specific challenge was to translate what we learned in the HCD research \u2014 the real barriers, the real aspirations, the real language women used to talk about their businesses \u2014 into a brand and campaign that felt like it was built for them, not deployed at them.",
      quote: {
        text: "These women were not running businesses despite every barrier. They were running businesses because of their own resourcefulness. The programme\u2019s job was not to teach them to be entrepreneurs. It was to remove the obstacles that were limiting the entrepreneurs they already were.",
      },
    },
    strategy: {
      heading: "The <em>Strategy</em>",
      intro: "Before we built the campaign, we listened to the women it was built for.",
      steps: [
        { number: "01", title: "Field Immersion", description: "Embedded research with women micro-entrepreneurs across diverse contexts." },
        { number: "02", title: "Journey Mapping", description: "Mapping the complete entrepreneur journey from first idea to current operation." },
        { number: "03", title: "Barrier Analysis", description: "Identifying the specific challenges blocking growth." },
        { number: "04", title: "Aspiration Research", description: "Understanding the dreams driving these women and the language they used." },
        { number: "05", title: "Insight Translation", description: "Translating field learnings into design principles for the Mumkin brand." },
      ],
    },
    mumkinHcd: {
      eyebrow: "Human-Centred Design Research \u00B7 Understanding the Entrepreneur\u2019s Real Journey",
      heading: "Before we built the campaign,<br><em>we listened to the women it was built for.</em>",
      steps: [
        { phase: "Phase 1", title: "Field Immersion", body: "Embedded research with women micro-entrepreneurs across diverse contexts \u2014 urban, peri-urban, and rural \u2014 observing their businesses, homes, and daily routines" },
        { phase: "Phase 2", title: "Journey Mapping", body: "Mapping the complete entrepreneur journey \u2014 from the first idea to current operation \u2014 identifying every barrier to growth, every moment of friction, and every unmet need" },
        { phase: "Phase 3", title: "Barrier Analysis", body: "Identifying the specific challenges blocking growth: access to credit, digital literacy gaps, market connectivity, mobility constraints, family dynamics, and confidence" },
        { phase: "Phase 4", title: "Aspiration Research", body: "Understanding what these women wanted their businesses \u2014 and their lives \u2014 to look like. The dreams that were driving them, and the language they used to articulate them" },
        { phase: "Phase 5", title: "Insight Translation", body: "Translating field learnings into design principles for the Mumkin brand, campaign strategy, and programme communication \u2014 ensuring every decision traced back to a real insight" },
      ],
      insights: [
        { num: "01", title: "Access \u2260 Awareness", body: "Microfinance and digital financial services existed \u2014 but most women had never been told they were eligible, or what applying would actually look like. The barrier was not availability. It was the invisibility of the pathway." },
        { num: "02", title: "Aspiration is the entry point", body: "No programme messaging about \u201Cmicro-credit\u201D or \u201Cfinancial inclusion\u201D moved these women. What moved them was the possibility of their dream becoming real \u2014 the daughter\u2019s education, the bigger shop, the machine. Connect to the dream first." },
        { num: "03", title: "Peer trust over institutional trust", body: "Women trusted women who were like them more than they trusted programme messaging. The most credible voice for Mumkin was not CARE or Mastercard \u2014 it was a woman from the same neighbourhood who had already accessed the programme." },
      ],
    },
    mumkinProfiles: {
      eyebrow: "Entrepreneur Archetypes \u00B7 Who Mumkin Was Built For",
      heading: "Three women. <em>Millions of stories</em> that sound like theirs.",
      profiles: [
        { archetype: "The Home-Based Maker", title: "She runs her business from her kitchen and her community", body: "Embroidery, tailoring, baking, food preparation \u2014 skills she has had for years, turned into income that her household depends on. She works within the limits of her mobility, her family\u2019s expectations, and her existing relationships.", barrier: "Key barrier: No pathway to digital markets. No access to credit to buy the machine or the materials that would let her take bigger orders." },
        { archetype: "The Small Shop Owner", title: "She has premises, inventory, and loyal customers \u2014 and a ceiling she can\u2019t break through", body: "A small retail business \u2014 general goods, clothing, groceries \u2014 that she has built with her own resources over years. The business is real, the customers are real, but growth requires capital she cannot access through formal channels.", barrier: "Key barrier: Unable to access microfinance without a male guarantor. No knowledge of how to sell online or manage digital payments." },
        { archetype: "The Aspiring Starter", title: "She has the idea, the skill, and the drive \u2014 and has never been told the resources exist", body: "She has been thinking about starting a business for months or years. She has the skill, the market knowledge, and the motivation \u2014 but no starting capital, no training on running a business, and no one who has shown her the path.", barrier: "Key barrier: Unawareness of available financial products and training. Lack of confidence that formal systems are accessible to someone like her." },
      ],
    },
    mumkinOffer: {
      eyebrow: "The Mumkin Programme \u00B7 What Entrepreneurs Gained Access To",
      heading: "Everything they needed.<br><em>Nothing they didn\u2019t.</em>",
      cards: [
        { label: "Financial Access", title: "Microfinance & Digital Banking", body: "UBank microfinance products \u2014 loans, digital accounts, and mobile banking \u2014 specifically designed for women micro-entrepreneurs. Removing the gatekeeping that had kept formal finance inaccessible." },
        { label: "Skills Development", title: "Business & Digital Training", body: "In-person and digital training delivered in cohorts \u2014 covering business fundamentals, digital commerce, marketing, and financial management. Practical and accessible." },
        { label: "Peer Support", title: "Mentorship & Networks", body: "Cohort-based learning creating peer networks among women entrepreneurs. Mentorship from established business women. The social infrastructure that turns isolated micro-enterprises into a connected community." },
        { label: "Market Access", title: "Digital Commerce Pathways", body: "Connections to digital platforms, e-commerce channels, and expanded market networks \u2014 giving entrepreneurs the tools to sell beyond their immediate neighbourhood." },
      ],
    },
    mumkinDigital: {
      eyebrow: "Digital Campaign \u00B7 From Research to 2 Million Reach",
      heading: "An aspirational campaign<br>built from the<br><em>inside out.</em>",
      body: "The Mumkin digital campaign was the culmination of the HCD research \u2014 every creative decision traced back to something a real entrepreneur had said, felt, or shown us. The campaign was aspiration-first: it led with the dream, not the product.",
      body2: "The campaign\u2019s job was not to explain the programme. It was to make women feel seen \u2014 and then give them a path forward. The brand assets, content strategy, and digital channel mix were all designed with one objective: reaching the right women, in the right moment, with a message that felt like it was meant for them.",
      assets: [
        { label: "Brand Identity", value: "Complete Mumkin brand system \u2014 name, visual identity, colour language, typography, and tone of voice \u2014 built from HCD research insight" },
        { label: "Brand Asset Suite", value: "Full suite of digital and print campaign assets \u2014 social content, video, photography direction, messaging templates, and on-ground materials" },
        { label: "Digital Content Programme", value: "Ongoing content produced to keep entrepreneurs engaged \u2014 success stories, practical tips, programme updates, and peer testimonials" },
        { label: "2 Million Entrepreneurs Reached", value: "The digital campaign\u2019s reach \u2014 connecting women across Pakistan with the Mumkin programme\u2019s financial services, training, and mentorship" },
      ],
    },
    work: {
      heading: "The <em>Intervention</em>",
      body: "The Mumkin digital campaign was the culmination of the HCD research \u2014 every creative decision traced back to something a real entrepreneur had said, felt, or shown us.",
      deliverables: [
        "Human-Centred Design Research", "Entrepreneur Journey Mapping",
        "Mumkin Brand Identity", "Full Brand Asset Suite",
        "Campaign Strategy", "Digital Campaign Design",
        "Key Message Development", "Content Production",
        "Aspiration-Led Communication",
      ],
    },
    impact: {
      heading: "The <em>Impact</em>",
      body: "Mumkin demonstrated what happens when you design a programme\u2019s communication from the inside out \u2014 starting with deep understanding of the people you are trying to reach, and building the brand and campaign from that understanding rather than from institutional assumptions about what micro-entrepreneurs need to hear.",
      metrics: [
        { value: 2, suffix: "M+", label: "Entrepreneurs reached through the Mumkin digital campaign." },
        { value: 1, suffix: "", label: "Research-led brand identity built from HCD field research." },
        { value: 1, suffix: "", label: "Sustained cohort engagement across the programme lifecycle." },
        { value: 1, suffix: "", label: "Mumkin \u2014 a brand that made dreams feel within reach." },
      ],
      closingNote: "Micro-entrepreneurs in Pakistan don\u2019t need to be taught ambition. They need to be shown the door that was always there but never pointed out. White Rice\u2019s job was to find that door in the research, name it with a brand, and open it wide enough that 2 million women could walk through.",
    },
    impactCells: [
      { big: "2 Million+", desc: "Entrepreneurs reached through the Mumkin digital campaign \u2014 connected to financial services, training, mentorship, and market access." },
      { big: "Research-Led Brand", desc: "A brand identity built from real HCD field research \u2014 every creative decision traced to a real insight from a real entrepreneur\u2019s real life." },
      { big: "Cohort Engagement", desc: "Sustained content programme keeping enrolled entrepreneurs connected and motivated across the full cohort lifecycle." },
      { big: "Mumkin \u2014 Made Possible", desc: "A brand that did the most important job: made women feel that the resources, the training, the credit, and the dream of a bigger business were all within their reach." },
    ],
    closing: {
      heading: "She always knew<br>what she wanted<br>to build. <em>Mumkin showed her<br>she could build it.</em>",
      body: "Micro-entrepreneurs in Pakistan don\u2019t need to be taught ambition. They need to be shown the door that was always there but never pointed out. White Rice\u2019s job was to find that door in the research, name it with a brand, and open it wide enough that 2 million women could walk through.",
    },
    gallery: {
      heading: "Gallery",
      images: [
        { src: "/images/timeline/2019.png", alt: "Women entrepreneurs in the Mumkin programme", span: "wide" },
        { src: "/images/timeline/2020.png", alt: "Financial literacy training session", span: "normal" },
        { src: "/images/timeline/2021.png", alt: "CARE Mastercard Foundation programme activities", span: "normal" },
      ],
    },
  },
];

/* ─── Lookup helper ──────────────────────────────────────────────── */

export function getCaseStudy(slug: string): CaseStudyData | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
