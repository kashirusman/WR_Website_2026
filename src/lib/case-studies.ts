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
    tags: ["Stunting Prevention", "UNICEF", "SBC", "Sindh"],
    challenge: {
      heading: "The Challenge",
      body: "Child stunting - low height-for-age caused by chronic malnutrition - is one of Pakistan's most persistent public health crises. Nationally, stunting affects approximately 42% of children under five. In Sindh, the figure approaches 50%. In Khairpur, Sharafabad, and Naushahro Feroze, communities had lived with these rates for generations. The crisis had become, in the most damaging sense, normal.\n\nThe behaviours driving stunting - inadequate infant and young child feeding practices, poor WASH, and delays in seeking healthcare - were well-documented. But mothers were not unaware of nutrition guidance; they were operating within household and social systems that constrained their ability to act on it. Mothers-in-law made feeding decisions. Husbands controlled household resources. A standard information-education-communication approach had already failed. The challenge demanded something fundamentally different.",
      quote: {
        text: "Stunting is not merely a nutrition problem - it is a behaviour problem, rooted in social norms, household power dynamics, and the absence of enabling environments for change.",
      },
    },
    strategy: {
      heading: "The Strategy",
      intro: "The programme strategy was built on one foundational commitment: go deep before going wide. White Rice began with a significant investment in formative and design research - not as a procedural box to check, but as the primary design input.",
      steps: [
        { number: "01", title: "Formative Research", description: "In-depth qualitative research across all three districts to map the behavioural landscape - social norms, household dynamics, trusted voices, and the communication touchpoints where change was most likely to occur." },
        { number: "02", title: "Influence the Ecosystem", description: "Design for the mother-in-law, the husband, and the community simultaneously - not sequentially. Targeting mothers alone was insufficient; the mother-in-law was often the primary decision-maker on feeding practices." },
        { number: "03", title: "Social Norming", description: "Make the desired behaviour feel socially normal and achievable. Positive deviance identification and demonstration-based learning were prioritised over didactic instruction." },
        { number: "04", title: "Build a Change System", description: "Sustainable behaviour change requires ongoing support structures - trained frontline workers, household visits, community nudges, and peer reinforcement - not a single intervention event." },
      ],
    },
    work: {
      heading: "The Intervention",
      body: "At the heart of the programme was a bespoke behaviour change model - Kahani Asani Adehani (Story, Ease, Habit) - developed by White Rice through contextualisation and co-design. The model adapted internationally recognised SBC frameworks into a culturally grounded methodology suited to rural Sindh, built around three levers: narrative storytelling to make new behaviours emotionally compelling, removing barriers to make the desired behaviour the path of least resistance, and repetition with community reinforcement to lock in new practices over time.",
      deliverables: [
        "Kahani Asani Adehani SBC Model",
        "2,000+ Frontline Workers Trained",
        "Group Sessions & Community Dialogues",
        "Household Visit Programme",
        "Emotional Demonstrations (Emo-Demos)",
        "Community-Based Nudges & Reminders",
        "Real-Time Monitoring System",
        "Positive Deviant Identification",
      ],
    },
    impact: {
      heading: "Impact",
      body: "Eight months after the intervention concluded, White Rice deployed the Most Significant Change (MSC) technique - a participatory qualitative evaluation - to assess what had genuinely shifted. 11,000 mothers were convened in story circles across all three districts, one of the largest qualitative follow-up evaluations of its kind in Pakistan.",
      metrics: [
        { value: 90, suffix: "%", label: "Behaviour Adoption Rate" },
        { value: 26000, suffix: "+", label: "Mothers Directly Reached" },
        { value: 100000, suffix: "+", label: "Community Members Influenced" },
        { value: 2000, suffix: "+", label: "Frontline Workers Trained" },
      ],
      quote: { text: "We didn't tell mothers what to do. We created the conditions in which doing it felt possible, normal, and worth the effort.", attribution: "White Rice Programme Team" },
      closingNote: "The programme model was formally adopted by the Sindh government as a cornerstone of their provincial stunting strategy - and subsequently replicated and scaled across additional districts.",
    },
    gallery: {
      heading: "Gallery",
      images: [
        { src: "/images/misali-ma/misali-ma01.jpg", alt: "Mothers and children raising hands during a community session in Sindh", span: "wide" },
        { src: "/images/misali-ma/misali-ma02.jpg", alt: "Mother holding her child - portrait from the stunting prevention programme", span: "normal" },
        { src: "/images/misali-ma/misali-ma03.jpg", alt: "Outdoor community gathering with programme banner and discussion materials", span: "normal" },
        { src: "/images/misali-ma/misali-ma04.jpg", alt: "Toddler smiling on a colourful traditional rug during a community session", span: "wide" },
        { src: "/images/misali-ma/misali-ma05.jpg", alt: "Women using Kahani Asani Adehani materials during a facilitated discussion", span: "normal" },
        { src: "/images/misali-ma/misali-ma06.jpg", alt: "Frontline health worker engaging with a mother during a household visit", span: "normal" },
      ],
    },
  },

  /* 2 ─ Awaz Programme */
  {
    slug: "awaz-programme",
    year: "2010 - 2021",
    tags: ["Awaz Programme", "UK Aid \u00B7 FCDO", "DAI", "Citizen Accountability", "Women's Leadership", "Religious Minorities", "Community Mobilisation", "iReporter", "Citizen Journalism", "13 Districts", "Punjab", "KPK", "15M+ Reach", "10 Years", "Grassroots Movement", "SBC", "Pakistan"],
    heroImage: "/images/alif-ailaan/alif-ailaan01.jpg",
    theme: {
      primary: "#1A4A2A",
      primaryLight: "#3A8A5A",
      accent: "#C48A1A",
      accentLight: "#E8B84A",
    },
    hero: {
      eyebrow: "UK Aid \u00b7 DAI \u00b7 Aawaz Programme \u00b7 Punjab & KPK",
      title: "Give<br>Them a<br><em>Voice.</em>",
      subtitle: "Awaz \u2014 10 Years of Citizen Accountability, Women\u2019s Leadership & Grassroots Movement Building in Pakistan",
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
      body: "White Rice joined the Awaz programme at its inception as the creative and communication lead \u2014 designing the behaviour change strategy, developing key messages for different audiences and platforms, producing the community mobilisation toolkit, and creating all programme content across its multiple phases. From community-level grassroots tools to the Awaz iReporter citizen journalism platform, our work has been the creative backbone of a programme that is still running today, still reaching communities, and still amplifying voices that were previously unheard.",
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
        { stat: "15 Million+", description: "People reached through the Awaz programme\u2019s communication movement \u2014 across 13 districts in Punjab and KPK." },
        { stat: "13 Districts", description: "Programme coverage across Punjab and Khyber Pakhtunkhwa \u2014 two of Pakistan\u2019s most populous and politically significant provinces." },
        { stat: "10+ Years", description: "Awaz has continued for over a decade across multiple phases \u2014 with White Rice as the creative and communication partner from the very first phase to today." },
        { stat: "Women Leaders", description: "Women from marginalised communities secured seats in local government union councils and joined political parties \u2014 becoming authentic voices for their communities." },
        { stat: "iReporter", description: "Pakistan\u2019s first community-based citizen journalism platform \u2014 training community members to document local challenges on mobile phones and escalate them to government and media." },
      ],
      watermark: "15M",
    },
    closing: {
      heading: "A voice without<br>a channel is<br><em>just a whisper.</em>",
      body: "Awaz gave Pakistan\u2019s most marginalised communities a channel. White Rice built the content, the tools, the platforms, and the strategy that made that channel resonate \u2014 for 10 years, across 13 districts, 15 million people, and every woman who found out she had more to say than anyone had ever let her say before.",
    },
    impactCells: [
      { big: "15 Million+", desc: "People reached through the Awaz communication movement across 13 districts in Punjab and KPK." },
      { big: "10+ Years", desc: "Multiple phases of continuous programming \u2014 still active, still reaching communities, still creating impact at the grassroots level." },
      { big: "Citizens with a Voice", desc: "The iReporter platform created Pakistan\u2019s first structured citizen journalism system connecting community documentation to government action and media amplification." },
    ],
    challenge: {
      heading: "The <em>Challenge</em>",
      body: "Pakistan's marginalised communities \u2014 particularly women and religious minority groups \u2014 face a compounding set of exclusions. They are under-represented in local government, absent from political decision-making, unconnected to media, and without formal channels to raise the community challenges they live with daily. Their issues \u2014 broken schools, absent waste collection, non-functional health facilities, unsafe public spaces \u2014 are known to them and invisible to everyone with the power to act.\n\nFor women specifically, the barriers are layered: social norms restrict mobility and public participation; low literacy limits access to written information; and a deep cultural belief that politics and public life are not spaces that belong to them. Changing this required not just information \u2014 it required a sustained behaviour change programme that built confidence, demonstrated possibility, and created visible proof that ordinary women from ordinary communities could become leaders.\n\nThe programme needed a creative partner who could operate across all of this simultaneously \u2014 designing grassroots tools for frontline workers, producing content that documented the movement's own progress, and building platforms that connected community voices to the decision-makers and media who could act on them.",
      quote: {
        text: "These communities were not voiceless. They had never been given a channel that reached the right ears. Awaz was about building that channel \u2014 and the confidence to use it.",
      },
    },
    strategy: {
      heading: "The <em>Strategy</em>",
      intro: "White Rice's strategy for Awaz was built on a principle that runs through all our best work: communities are not audiences to be reached \u2014 they are agents to be activated. The creative and communication work was not designed to tell communities what to think or do. It was designed to show them what they were already capable of, and to give them the tools to act on it.",
      steps: [
        {
          number: "01",
          title: "Community Mobilisation Toolkit",
          description: "A comprehensive toolkit used by frontline community workers to go into communities, engage participants, build capacity, and train people to take leadership roles and become change agents. Designed for low-literacy contexts, multi-language settings, and field facilitators without formal training backgrounds.",
        },
        {
          number: "02",
          title: "Documentaries & Animation",
          description: "Documentary films capturing the Awaz process and success stories \u2014 showing communities their own transformation as evidence of what is possible. A step-by-step animation series explaining the bigger movement to communities in accessible, visual terms \u2014 the programme's own story, told back to the people making it.",
        },
        {
          number: "03",
          title: "Awaz iReporter Platform",
          description: "Pakistan's first community-based mobile citizen reporting platform \u2014 trained community members to document local challenges on smartphones, submitted to a central hub, escalated to local politicians, government officials, and media. Broken schools. Missing waste collection. Non-functional facilities. Citizens became the journalists of their own lived experience.",
        },
        {
          number: "04",
          title: "Resource & Campaign Materials",
          description: "Campaign strategy and key messages designed for multiple audiences, platforms, and contexts. Resource gates for community workers. Communication materials connecting the programme's grassroots work to national and provincial media \u2014 ensuring local stories reached the audiences who could create systemic change.",
        },
      ],
    },
    work: {
      heading: "The <em>Work</em>",
      body: "White Rice joined the Awaz programme at its inception as the creative and communication lead \u2014 designing the behaviour change strategy, developing key messages for different audiences and platforms, producing the community mobilisation toolkit, and creating all programme content across its multiple phases. From community-level grassroots tools to the Awaz iReporter citizen journalism platform, our work has been the creative backbone of a programme that is still running today, still reaching communities, and still amplifying voices that were previously unheard.\n\nThe strategy operated across four simultaneous registers: grassroots capacity-building through the community mobilisation toolkit; programme documentation through documentaries and animation; platform creation through the Awaz iReporter citizen journalism system; and media and advocacy linkage to ensure community voices reached the platforms that could create change.\n\nKey messages were designed for different audiences, different platforms, and different stages of the behaviour change journey \u2014 from initial awareness and attitudinal shift, through confidence-building and skill development, to action, leadership, and sustained civic participation. Every piece of content, at every level, was designed to move someone one step further along that journey.",
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
      body: "The most significant measure of Awaz's success is that it is still running. In development programming, a 10-year multi-phase programme is not a measure of spending \u2014 it is a measure of proof. Funders continue to invest, implementing partners continue to operate, and communities continue to participate because the evidence of change is visible and continuing. White Rice has been part of every phase of that evidence.",
      metrics: [
        { value: 15, suffix: "Million+", label: "People reached through the Awaz communication movement across 13 districts in Punjab and KPK." },
        { value: 10, suffix: "+ Years", label: "Multiple phases of continuous programming \u2014 still active, still reaching communities, still creating impact at the grassroots level." },
        { value: 0, suffix: "", prefix: "", label: "Citizens with a Voice \u2014 The iReporter platform created Pakistan's first structured citizen journalism system connecting community documentation to government action and media amplification." },
      ],
      closingNote: "The impact of Awaz cannot be captured in a single number. It lives in the woman who stood up in a union council meeting for the first time. In the school that was repaired because a community member filmed its broken roof and sent it to the right person. In the religious minority family that found out they had rights they had never been told about. These are the outcomes that don't appear in logframes. They are the ones that matter most.",
    },
    gallery: {
      heading: "Gallery",
      images: [
        { src: "/images/alif-ailaan/alif-ailaan01.jpg", alt: "Community mobilisation session under the Awaz programme", span: "wide" },
        { src: "/images/timeline/2017.png", alt: "Awaz programme documentation and field activities", span: "normal" },
        { src: "/images/timeline/2018.png", alt: "Citizen journalism training and iReporter platform deployment", span: "normal" },
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
      description: "A national social behaviour change programme designed to transform how Pakistan\u2019s parents, caregivers, and institutions show up in the first eight years of a child\u2019s life \u2014 built to reach 20 million families by the end of 2026.",
      meta: [
        { label: "Client", value: "UNICEF Pakistan" },
        { label: "Scale", value: "National \u00b7 All Provinces" },
        { label: "Focus", value: "ECD \u00b7 Positive Parenting \u00b7 Play & Stimulation" },
        { label: "White Rice Role", value: "SBC Design Lead & Creative Partner" },
      ],
    },
    role: {
      heading: "National SBC Architecture & <em>Creative Lead</em>",
      body: "White Rice led the design of a comprehensive, multi-year national behaviour change programme for UNICEF \u2014 covering everything from co-creation research and SBC strategy to national policy inputs, flagship creative productions, digital FLW training, community play labs, and household-level coaching toolkits. A programme designed at every layer of the socio-ecological model, with the ambition to reach 20 million families.",
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
        { stat: "20M", description: "Families targeted by end of 2026 \u2014 through a national programme now adopted and being scaled across Pakistan." },
        { stat: "1,000", description: "Frontline workers trained remotely via a 12-week digital learning programme \u2014 the first of its kind in Pakistan\u2019s ECD sector." },
        { stat: "National Policy", description: "Programme insights directly shaped the National ECD Policy and Framework \u2014 moving the work from intervention to institution." },
        { stat: "Pakistan\u2019s 1st", description: "Feature film on parenting and fatherhood \u2014 launched on Geo Network on International Father\u2019s Day, reaching millions." },
        { stat: "10+ ClayLabs", description: "Community play labs scaled across the country \u2014 embedding play and stimulation as a routine in homes and communities." },
      ],
      watermark: "ECD",
    },
    closing: {
      heading: "The first eight years shape<br>the next <em>eighty.</em>",
      body: "The First 8 Years programme is proof that a behaviour change system \u2014 when designed at every layer, co-created with communities, and built to be owned by government \u2014 can reach the scale that Pakistan\u2019s children deserve.",
    },
    impactCells: [
      { big: "20 Million", desc: "Families targeted by end of 2026 through the nationally adopted programme \u2014 built on the SBC architecture White Rice designed." },
      { big: "National Policy", desc: "Programme insights embedded directly into the National ECD Policy and Framework \u2014 moving the work from pilot to permanent." },
      { big: "10+ ClayLabs", desc: "Scaling from a single pilot to community play labs across the country \u2014 with play and stimulation becoming a practised household routine." },
      { big: "62M+ Reach", desc: "The fatherhood film launched on Geo Network\u2019s digital platform \u2014 the highest-subscribed media platform in Asia \u2014 on International Father\u2019s Day." },
    ],
    challenge: {
      heading: "The <em>Challenge</em>",
      body: "Pakistan's ECD crisis is not a knowledge gap \u2014 it is a behaviour gap. The research is clear: the first eight years of a child's life determine cognitive development, emotional health, and educational outcomes for decades to come. Yet the behaviours that shape those years \u2014 responsive caregiving, play and stimulation, reading together, engaging fathers \u2014 remain profoundly absent in millions of Pakistani households.\n\nExisting ECD programmes were fragmented, inconsistent across provinces, and unable to scale. They targeted mothers in isolation, excluded fathers entirely, and relied on frontline workers who had received little meaningful training. The challenge White Rice was asked to solve was not small: design a national behaviour change system \u2014 grounded in evidence, co-created with communities, and capable of reaching millions \u2014 that could eventually be owned and operated by government.",
      quote: {
        text: "Parents in Pakistan are not indifferent to their children's development. They simply have never been shown what it looks like \u2014 or been given the tools, the permission, and the social support to do it.",
      },
    },
    strategy: {
      heading: "The <em>Strategy</em>",
      intro: "Before a single session was designed, White Rice led a massive co-creation exercise across all provinces \u2014 bringing together government stakeholders, frontline workers, community members, mothers, and fathers to audit what existed, identify gaps, and co-design what a comprehensive national programme could look like. This was not consultation. It was design partnership.",
      steps: [
        {
          number: "01",
          title: "Co-Creation Across All Provinces",
          description: "Research that brought all stakeholders to the table \u2014 not to validate a pre-designed solution, but to build one together from lived experience and community insight.",
        },
        {
          number: "02",
          title: "Design for the Full Socio-Ecological System",
          description: "Intervene simultaneously at every layer \u2014 policy, community, household, and individual \u2014 so that change at one level is reinforced, not undermined, by the others.",
        },
        {
          number: "03",
          title: "Built to Be Owned, Not Just Delivered",
          description: "Every design decision was made with government adoption in mind \u2014 so that the programme could eventually be taken over by the state and scaled independently of any external partner.",
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
      body: "The programme produced a series of groundbreaking firsts for Pakistan \u2014 flagship interventions that created new cultural space for conversations about ECD and fatherhood at national scale, while simultaneously building the community and household infrastructure for durable behaviour change.\n\nAt the community level, film screenings became an unexpected catalyst. Showing the fatherhood film in community settings \u2014 mosques, schools, community halls \u2014 created a neutral, emotionally engaging platform for conversations that communities had never had publicly before. Influencer engagement brought local leaders, religious figures, and respected community members into the movement as champions rather than bystanders.\n\nThe ClayLab \u2014 White Rice's community play lab concept \u2014 was perhaps the programme's most distinctive innovation. Parents arrived weekly for an 8\u201312 week structured programme in which every session introduced a different form of play: creative, imaginative, structured, musical, storytelling, object-based. Fathers had their own dedicated sessions. Mothers-in-law and grandparents were eventually brought in. The design principle was simple but radical: parents had to experience play themselves before they could take it home to their children.\n\nFor frontline workers, White Rice developed Pakistan's first digital remote learning programme for ECD last-mile workers \u2014 a 12-week, bite-sized daily learning journey that took 1,000 workers from foundational ECD concepts through to programme delivery skills, entirely via mobile phone. Designed for low-connectivity, low-literacy contexts, it demonstrated that professional development for remote field workers does not have to wait for in-person training.",
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
      body: "The programme's most significant measure of success is not a number \u2014 it is adoption. A national behaviour change programme, designed by White Rice, is now being scaled by the Pakistani government across the country. That is the definition of a programme built to last.",
      metrics: [
        { value: 20, suffix: " Million", label: "Families targeted by end of 2026 through the nationally adopted programme \u2014 built on the SBC architecture White Rice designed." },
        { value: 0, suffix: "", prefix: "", label: "Programme insights embedded directly into the National ECD Policy and Framework \u2014 moving the work from pilot to permanent." },
        { value: 10, suffix: "+ ClayLabs", label: "Scaling from a single pilot to community play labs across the country \u2014 with play and stimulation becoming a practised household routine." },
        { value: 62, suffix: "M+ Reach", label: "The fatherhood film launched on Geo Network's digital platform \u2014 the highest-subscribed media platform in Asia \u2014 on International Father's Day." },
      ],
      closingNote: "The First 8 Years programme is proof that a behaviour change system \u2014 when designed at every layer, co-created with communities, and built to be owned by government \u2014 can reach the scale that Pakistan's children deserve.",
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
    challenge: {
      heading: "The Challenge",
      body: "Parental engagement in Pakistan's public school system is structurally limited at every tier. Economic pressure means parents prioritise immediate survival over school activities. Low literacy \u2014 particularly among mothers \u2014 creates deep insecurity about their ability to meaningfully contribute to their child's education. Public school teachers managing classrooms of 50+ students have minimal capacity to build parent relationships. And communication between schools and families remains almost entirely paper-based.\n\nFathers in particular are largely absent from the educational lives of their children \u2014 viewing it as the mother's responsibility. And mothers, despite their proximity to children, often lack the confidence, literacy, or mobility to advocate effectively at the school level.\n\nUnderlying all of this is a belief \u2014 reinforced by real economic reality \u2014 that formal education may not reliably lead to better outcomes. Before any behaviour change programme could work, it needed to address this foundational question of value. Walidain HumQadam began not by telling parents what to do, but by helping them remember why they hoped.",
      quote: {
        text: "Parents consider education a fruitless effort \u2014 there are examples in every home where someone who completed their MA or BS is unemployed, so they pay more attention to a shop or other work.",
      },
    },
    strategy: {
      heading: "The Strategy",
      intro: "The programme's SBC strategy was built around the Socio-Ecological Model \u2014 addressing parental disengagement at the individual, interpersonal, community, and institutional levels simultaneously. The Behavioural Driver Model framed the programme's design across three intersecting forces: psychology (internal beliefs and self-efficacy), sociology (social norms, peer influence), and environment (tools, platforms, and access).",
      steps: [
        { number: "01", title: "Start with Aspiration, Not Instruction", description: "The programme's entry point was a Future Visioning exercise \u2014 asking parents to imagine their child's life 10 years ahead. Before any knowledge transfer or behaviour nudge, the programme rebuilt parents' emotional investment in their child's education as the foundation for everything else." },
        { number: "02", title: "WhatsApp as the Programme's Backbone", description: "WhatsApp \u2014 already deeply embedded in Pakistani daily life \u2014 became the delivery platform for a 30-day habit challenge: bite-sized microlearning, gamification, peer discussion, voice notes, polls, and role model stories. Accessible anywhere, any time, on any phone." },
        { number: "03", title: "Teachers as Programme Champions", description: "Teachers were not implementers of someone else's design \u2014 they were trained as Champion Teachers, equipped with practical tools, confidence, and a new understanding of their role as bridges between school and home. The PTM was redesigned from a reporting exercise into a genuine collaborative partnership session." },
        { number: "04", title: "Peer-to-Peer as the Sustaining Force", description: "P2P gatherings built communities of parents who could learn from each other \u2014 sharing experiences, normalising engagement, and creating the social permission for fathers to become involved in ways that Pakistani norms had historically not expected of them." },
      ],
    },
    work: {
      heading: "The Intervention",
      body: "White Rice partnered with UNICEF Pakistan to design, co-create, and deliver Walidain HumQadam \u2014 Pakistan's first remotely-delivered SBC programme specifically targeting parental engagement in education. Our role spanned the entire programme lifecycle: from formative research and co-creation workshops across four provinces, through intervention design using the Behavioural Driver Model and Theory of Change, to content production for five integrated programme touchpoints and a 6.4-million-reach digital campaign.",
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
      heading: "The Impact",
      body: "Walidain HumQadam was the first programme of its kind in Pakistan \u2014 a remotely-delivered, WhatsApp-native SBC intervention specifically designed to shift parental engagement in education at scale. The results demonstrated both the viability of the model and its readiness for national rollout.",
      metrics: [
        { value: 13998, suffix: "", label: "Total parents reached \u2014 through WhatsApp, P2P gatherings, PTMs, digital sharing, and direct teacher outreach across six cities in four provinces." },
        { value: 6400000, suffix: "+", label: "Individuals reached through the digital campaign across Facebook, Instagram, YouTube, and TikTok \u2014 generating over 14.7 million impressions." },
        { value: 550, suffix: "+", label: "Vision canvases created by parents, teachers, and students across 52 schools \u2014 Pakistan's largest ever visioning exercise in education." },
        { value: 250, suffix: "", label: "Trained as Champion Teachers across 52 schools in Islamabad, Lahore, Peshawar, Karachi, Quetta, Sujawal, and Multan." },
        { value: 4200, suffix: "+", label: "A sustained WhatsApp community of parents and teachers \u2014 built for long-term engagement beyond the programme's formal timeline." },
      ],
      closingNote: "Walidain HumQadam proved that parental engagement in education is not an infrastructure problem. It is a behaviour change problem \u2014 one that starts with aspiration, is sustained through habit, and is scaled through technology. Pakistan now has a tested blueprint. What it needs next is the national commitment to use it.",
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

  /* 5 ─ UNICEF WASH Film */
  {
    slug: "unicef-wash-film",
    year: "2022 - 2023",
    tags: ["WASH", "Film", "Punjab", "UNICEF"],
    challenge: {
      heading: "The Challenge",
      body: "Water, sanitation, and hygiene practices in rural Punjab communities remained stubbornly resistant to change despite years of conventional messaging. Open defecation, unsafe water handling, and poor handwashing practices contributed to preventable childhood illness.\n\nUNICEF needed an approach that could break through information fatigue and create genuine emotional engagement with WASH behaviours.",
    },
    strategy: {
      heading: "Our Approach",
      intro: "We used the power of cinema-quality storytelling to create emotional resonance around WASH behaviours.",
      steps: [
        { number: "01", title: "Narrative Research", description: "Identifying community stories, cultural triggers, and emotional drivers for WASH behaviour change." },
        { number: "02", title: "Film Production", description: "Producing cinema-quality short films featuring local communities and relatable characters." },
        { number: "03", title: "Mobile Screenings", description: "Setting up community film screening events across Punjab with facilitated post-screening discussions." },
        { number: "04", title: "Action Planning", description: "Converting emotional engagement into concrete community action plans for improved WASH practices." },
      ],
    },
    work: {
      heading: "Our Work",
      body: "We produced and screened a series of WASH-focused films across Punjab, each followed by structured community discussions that converted emotional engagement into practical behaviour commitments.",
      deliverables: ["WASH film series", "Mobile screening infrastructure", "Community discussion facilitation guide", "Post-screening action planning toolkit"],
    },
    impact: {
      heading: "Impact",
      metrics: [
        { value: 30000, suffix: "+", label: "Viewers Reached" },
        { value: 200, suffix: "+", label: "Screenings Held" },
        { value: 12, suffix: "", label: "Districts in Punjab" },
        { value: 67, suffix: "%", label: "Practice Improvement" },
      ],
    },
    gallery: {
      heading: "Gallery",
      images: [
        { src: "/images/timeline/2023/parenting-screening.jpg", alt: "WASH film community screening", span: "wide" },
        { src: "/images/timeline/2019.png", alt: "Clean water awareness campaign", span: "normal" },
        { src: "/images/timeline/2020.png", alt: "Community engagement session", span: "normal" },
      ],
    },
  },

  /* 6 ─ UNICEF PlayLab */
  {
    slug: "unicef-playlab",
    year: "2022 - 2024",
    tags: ["ECD", "Play-Based Learning", "UNICEF"],
    challenge: {
      heading: "The Challenge",
      body: "Millions of Pakistani children lacked access to quality early learning environments. Formal pre-school infrastructure was absent in most rural and peri-urban communities, and existing ECD approaches were too costly and complex to scale.\n\nUNICEF needed a low-cost, community-embedded model that could deliver play-based early learning at national scale.",
    },
    strategy: {
      heading: "Our Approach",
      intro: "We designed Pakistan's first scalable PlayLab model - a community-owned, play-based early learning space.",
      steps: [
        { number: "01", title: "Model Design", description: "Developing a low-cost PlayLab kit with locally sourced, culturally appropriate play materials." },
        { number: "02", title: "Facilitator Training", description: "Training community members as PlayLab facilitators through an intensive, practice-based curriculum." },
        { number: "03", title: "Community Embedding", description: "Establishing PlayLabs within existing community spaces - mosques, community centres, homes." },
        { number: "04", title: "Scale & Systems", description: "Building government and partner pathways for district-wide and provincial PlayLab rollout." },
      ],
    },
    work: {
      heading: "Our Work",
      body: "We designed, piloted, and scaled Pakistan's first PlayLab network - community-owned early learning spaces that bring structured play-based development to children in the most resource-constrained settings.",
      deliverables: ["PlayLab design kit and materials list", "Facilitator training curriculum", "Community setup and sustainability guide", "Government scaling strategy document"],
    },
    impact: {
      heading: "Impact",
      metrics: [
        { value: 5000, suffix: "+", label: "Children Enrolled" },
        { value: 150, suffix: "+", label: "PlayLabs Established" },
        { value: 300, suffix: "+", label: "Facilitators Trained" },
        { value: 3, suffix: "", label: "Provinces Scaled" },
      ],
      quote: { text: "PlayLab showed us that world-class early learning doesn't require world-class budgets - it requires world-class design.", attribution: "UNICEF ECD Specialist" },
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
    challenge: {
      heading: "The Challenge",
      body: "Pakistan's Khawaja Sira community lives at the intersection of multiple vulnerabilities \u2014 social marginalisation, economic precarity, and a healthcare system that has historically failed to serve them with dignity or cultural competence. HIV prevention programming aimed at this community had repeatedly failed \u2014 not because the information was wrong, but because the approach was fundamentally broken.\n\nExisting materials were generic, clinical, and created entirely without community input. They used neither the community's own language \u2014 Farsi \u2014 nor their cultural references, social dynamics, or the specific scenarios in which unsafe behaviours actually occurred. Myths were widespread. Screening was avoided. Peer conversations on the subject were almost nonexistent.\n\nThe challenge was not a communications problem. It was a trust problem, a representation problem, and a shame problem \u2014 all of which required a fundamentally different design approach.",
      quote: {
        text: "Standard awareness campaigns don't work when the community has never seen themselves represented, has no reason to trust the messenger, and carries a lifetime of shame around the subject being discussed.",
      },
    },
    strategy: {
      heading: "The Strategy",
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
      heading: "The Impact",
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
    year: "2019",
    tags: ["WASH", "Behaviour Change", "Sanitation", "Open Defecation", "Tree Plantation", "Waste Management", "Digital SBC", "COVID-19 Response", "Punjab Government", "UNICEF", "SDG 3", "SDG 6", "SDG 13"],
    challenge: {
      heading: "The Challenge",
      body: "Punjab's Clean & Green programme had a clear mandate: shift five critical environmental and hygiene behaviours across one of Pakistan's most populous provinces. But the challenge was not simply scale. It was the deeper problem that every SBC practitioner eventually confronts \u2014 one-time behaviour change is easy. Long-term behaviour change is hard.\n\nThe government had an existing network of community mobilisers \u2014 but they lacked an SBC framework capable of driving durable change. The intervention had to be designed not just for reach, but for sustainability. And then COVID-19 arrived, threatening to make in-person community work impossible at precisely the moment the programme was gaining momentum.",
      quote: {
        text: "Getting a community to wash their hands once is a trick. Getting them to wash their hands every day for the rest of their lives \u2014 that requires changing what feels normal.",
      },
    },
    strategy: {
      heading: "The Strategy",
      intro: "White Rice began with an intensive design research phase \u2014 going far beyond interviews and surveys. The team used immersive observational methods, spending days and nights with beneficiary households to map the full lifecycle of each target behaviour: where it happened, who influenced it, where it broke down, and what would make it stick.",
      steps: [
        {
          number: "01",
          title: "Immersive Design Research",
          description: "Observational, co-habitation, and visual documentation methods \u2014 understanding behaviour in the actual context in which it needs to occur, not in a focus group.",
        },
        {
          number: "02",
          title: "Sustainability Over Reach",
          description: "Design for long-term habit formation, not awareness. Every touchpoint was built to make the target behaviour the path of least resistance over time.",
        },
        {
          number: "03",
          title: "Community as the Engine",
          description: "Leverage the power of communities to drive change from within \u2014 using local, indigenous methods and human agency rather than external provision.",
        },
        {
          number: "04",
          title: "Digital as a Core Channel",
          description: "Integrate digital and mobile tools from the outset \u2014 not as a backup, but as a primary engagement layer that could reach deep into communities even when physical access was constrained.",
        },
      ],
    },
    work: {
      heading: "The Intervention",
      body: "The intervention was built on the Punjab government's existing community mobiliser infrastructure \u2014 but transformed it. White Rice trained the mobilisers on a comprehensive SBC methodology grounded in the Mitti 2 persona and the socio-ecological model, equipping them with tools and facilitation skills that the programme had never previously had access to.\n\nVillage watch committees were formed in communities across Punjab \u2014 becoming the custodians of the entire programme. These were not passive beneficiary groups; they were monitors, champions, and accountability mechanisms. Their formation ensured that the programme had a structural home within communities long after any formal intervention activities had concluded.",
      deliverables: [
        "Design & Formative Research",
        "SBC Strategy",
        "Behavioural Persona Design",
        "FLW Training Programme",
        "Community Activation",
        "Digital Media Strategy",
        "Village Watch Committees",
        "COVID-19 Digital Pivot",
        "Group Facilitation Sessions",
        "Home Visits",
        "Behaviour Demonstrations",
        "Community Influencer Mapping",
        "Local Cable TV",
        "Digital & Social Media",
        "Mobile Phone Content Delivery",
        "Youth Digital Ambassadors",
      ],
    },
    impact: {
      heading: "The Impact",
      body: "The programme reached at a scale that few SBC interventions in Pakistan have achieved \u2014 but scale alone was not the measure of success. The programme's most significant impact was behavioural: communities constructed latrines and ended open defecation practices in measurable numbers, even during the economic strain of COVID-19.",
      metrics: [
        { value: 2, suffix: " Million", label: "People directly reached through community-level sessions, home visits, and mobiliser engagement across Punjab." },
        { value: 34, suffix: " Million", label: "People engaged through digital platforms \u2014 a number that grew exponentially when the digital pivot was made during COVID-19." },
        { value: 0, suffix: "", prefix: "", label: "Measurable, province-wide decline in open defecation \u2014 with this SBC programme as a core contributing intervention within a broader government strategy." },
        { value: 0, suffix: "", prefix: "", label: "The programme not only survived COVID-19 \u2014 it scaled through it, demonstrating that a well-designed digital layer can sustain community behaviour change programming under the most adverse conditions." },
      ],
      closingNote: "Clean & Green Punjab proved that with the right behavioural framework, the right community infrastructure, and the right digital strategy \u2014 lasting change is achievable, even at provincial scale, even in a pandemic.",
    },
    gallery: {
      heading: "Gallery",
      images: [
        { src: "/images/pakkay-dost/pd01.jpg", alt: "Clean Green Punjab campaign mascot Pakkay Dost", span: "wide" },
        { src: "/images/pakkay-dost/pd02.jpg", alt: "Community cleanup drive under the Clean Green initiative", span: "normal" },
        { src: "/images/pakkay-dost/pd03.jpg", alt: "Children engaging with WASH education materials", span: "normal" },
      ],
    },
  },

  /* 9 ─ FAO Road Safety / Diverse Dastarkhwan */
  {
    slug: "fao-road-safety",
    year: "2019 - 2020",
    tags: ["Food Diversity", "Nutrition", "Stunting Prevention", "Behaviour Change", "Kitchen Gardens", "Cooking Demonstrations", "Positive Deviance", "Balochistan", "FAO", "SDG 2", "SDG 3", "Pakistan"],
    challenge: {
      heading: "The Challenge",
      body: "Balochistan's stunting crisis is rooted in a paradox: these communities are not food insecure in a simple sense. Many families \u2014 particularly in Baloch and Pashtun areas \u2014 have strong food traditions, adequate caloric intake from meat and staples, and deep cultural pride in how they cook and eat. The problem is dietary diversity. Vegetables, legumes, and the micronutrient-rich foods that underpin child brain development and physical growth are largely absent from the daily dastarkhwan.\n\nThe added complexity here was that this was not one community but three \u2014 Baloch, Pashtun, and Makrani \u2014 each with distinct languages, food customs, gender dynamics, and conceptions of what good nutrition looks like. A single standardised programme would have failed all three. The challenge was to design something universal in its behavioural goals but deeply contextual in its delivery.",
      quote: {
        text: "You cannot ask a mother to change how she feeds her family without first understanding why she feeds them the way she does \u2014 and what that food means to her.",
      },
    },
    strategy: {
      heading: "The Strategy",
      intro: "White Rice began with intensive qualitative research across all three community contexts \u2014 mapping current food practices, cooking rituals, prevailing beliefs about nutrition, and the specific moments in pregnancy, lactation, and early childhood when behaviour change was most possible and most impactful.",
      steps: [
        { number: "01", title: "Integrate, Don't Replace", description: "Design for addition, not substitution. Show mothers how new ingredients and recipes can sit alongside existing food traditions \u2014 not threaten them." },
        { number: "02", title: "Work with What's Already There", description: "Identify locally available ingredients \u2014 especially vegetables \u2014 that can be the building blocks of nutritional diversity, without requiring communities to import or purchase unfamiliar foods." },
        { number: "03", title: "Make Behaviour Change Visible and Joyful", description: "Live cooking demonstrations \u2014 not lectures \u2014 as the primary change mechanism. Knowledge changes minds; cooking together changes habits." },
        { number: "04", title: "Peer-Led Change at Every Stage", description: "Identify positive deviants within each community \u2014 women already practicing nutritional diversity \u2014 and position them as the living proof that change is possible here, in this context, by people like us." },
      ],
    },
    work: {
      heading: "The Intervention",
      body: "The programme operated simultaneously at the household level \u2014 through field facilitator visits \u2014 and at the community level, through cooking demonstrations that became weekly social events. The combination was deliberate: private coaching for individual behaviour change, and public cooking sessions for social norm reinforcement.\n\nThe cooking demonstrations were the programme's most distinctive feature \u2014 and its most powerful. The best cooks from each community were not just demonstrators; they were co-designers. They adapted the nutritional guidance into recipes that their communities would actually make and enjoy. Vegetables were introduced not as a health intervention, but as ingredients that made the food taste better, stretch further, and nourish more deeply.\n\nCommunication materials were developed specifically for each community context \u2014 using local language, local imagery, and literacy-sensitive visual design. Materials focused particularly on the critical windows of pregnancy and lactation, where maternal nutrition has the most direct impact on child development outcomes. The guidance was framed not as clinical advice but as practical, actionable, culturally resonant knowledge about how to take care of yourself and your child.",
      deliverables: ["12-Week Field Facilitator Programme", "Household 1-on-1 Visits", "Bi-Weekly Cooking Demonstrations", "Community Kitchen Gardens", "Positive Deviance Peer Educators", "Pregnancy & Lactation Nutrition Guidance", "Illustrated Communication Tools", "Multi-Culture Contextualisation"],
    },
    impact: {
      heading: "The Impact",
      body: "The programme reached 11,000 families \u2014 100,000 people \u2014 across Balochistan's most culturally complex and geographically challenging communities. The reach figure matters, but the behavioural figure matters more: women who had never cooked with particular vegetables were growing them in community gardens, preparing them in new recipes, and teaching their neighbours to do the same.",
      metrics: [
        { value: 11000, suffix: "", label: "Families directly reached through the 12-week programme \u2014 with cooking demonstrations, household visits, and kitchen garden access at the core." },
        { value: 100000, suffix: "", label: "People reached within target families \u2014 a ripple effect built into the programme's design through peer educators and community cooking sessions." },
        { value: 3, suffix: " Cultures", label: "A single behaviour change methodology successfully adapted for Baloch, Pashtun, and Makrani communities \u2014 proving that cultural specificity and programme scale are not mutually exclusive." },
        { value: 1, suffix: " Scaled", label: "The programme was extended to additional districts of Balochistan following successful implementation \u2014 with the model replicable at low cost precisely because it was built on community assets, not external inputs." },
      ],
      quote: {
        text: "When the best cook in the village says this is how she makes it \u2014 and people taste it and love it \u2014 no amount of health messaging can compete with that moment.",
        attribution: "",
      },
      closingNote: "The Dastarkhwan programme demonstrated a principle that applies far beyond nutrition: when you design behaviour change around what a community already has \u2014 its cooks, its crops, its social gatherings, its food pride \u2014 the intervention feels less like a programme and more like a community discovering what it was always capable of. That is the most durable form of change there is.",
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
    year: "2021 - 2023",
    tags: ["Menstrual Health", "Period Poverty", "Social Behaviour Change", "Co-Creation", "KAB Framework", "Fathers", "Adolescent Girls", "Rural Pakistan", "Punjab", "KPK", "UNICEF", "SDG 3", "SDG 5"],
    challenge: {
      heading: "The Challenge",
      body: "Menstrual health and hygiene in rural Pakistan is not simply a product access problem. It is a deeply entrenched social norm problem \u2014 one shaped by shame, silence, misinformation, and the complete absence of open dialogue between the people who need to have it most: fathers and daughters, mothers and sons, women and their own bodies.\n\nWhite Rice and UNICEF's 2021\u20132022 national study identified four intersecting root causes: socio-cultural norms and behaviours; product affordability; accessibility barriers; and inadequate WASH infrastructure. Any programme that addressed only one of these would fail. And any programme built around information alone \u2014 without addressing the relational and normative context in which that information needed to travel \u2014 would reach no one.\n\nPhase II added a further layer of complexity: scaling an approach that had worked in Sindh's Khairpur into two entirely new provincial contexts \u2014 conservative, patriarchal Rajanpur in Punjab, and the hilly, remote villages of Battagram in KPK. Both had been identified as likely to resist. Both would prove more open than anyone expected.",
      quote: {
        text: "If I speak to my mother about this, she will kill me.",
        attribution: "Adolescent girl, Battagram, KPK",
      },
    },
    strategy: {
      heading: "The Strategy",
      intro: "The strategy was built on three foundational commitments: co-creation with the community before designing anything; a Knowledge-Attitude-Behaviour (KAB) framework that moved participants through a structured arc rather than attempting single-session awareness; and a radical inclusion of fathers as primary programme participants rather than afterthoughts.",
      steps: [
        { number: "01", title: "Co-Creation First", description: "A 3-day embedded co-creation workshop in Khairpur \u2014 with women, girls, mothers, fathers, and community influencers \u2014 shaped the entire communication toolkit from the ground up, including multiple rounds of prototyping and real-community testing." },
        { number: "02", title: "The KAB Arc", description: "Three staged sessions per audience \u2014 Stage 1: Knowledge (large group, open conversation); Stage 2: Attitude (smaller groups, identify barriers); Stage 3: Behaviour + Intention (one-to-one or small group, pledges, action, storytelling from early adopters)." },
        { number: "03", title: "Fathers as the Enabling Environment", description: "In Pakistan's rural context, the father is the breadwinner and decision-maker. Without his knowledge, empathy, and financial support, no behaviour change in the home is sustainable. Fathers were treated as equal participants \u2014 not obstacles to manage." },
        { number: "04", title: "Storytelling as the Primary Vehicle", description: "The girls' guide was built around Sara and Saba \u2014 two fictional characters whose stories provided an emotionally safe entry point for adolescent girls to engage with MHH without the shame of direct instruction or clinical information delivery." },
      ],
    },
    work: {
      heading: "The Intervention",
      body: "White Rice served as UNICEF's SBC strategy and creative partner across the full programme cycle \u2014 from a national study and community co-creation workshop in Sindh, through the design of Pakistan's first MHH SBC Toolkit, to the Phase II scale-up across five villages each in Rajanpur (Punjab) and Battagram (KPK). Every element of the programme \u2014 conversation guides, storybooks, training materials, monitoring systems \u2014 was designed by White Rice with and for the communities it served.",
      deliverables: ["National Study & Formative Research", "Community Co-Creation", "SBC Toolkit Design", "KAB Framework Design", "CRP Training Programme", "Conversation Flip Books", "Girls' Storybook", "Monitoring & Data System", "Provincial Scale-Up Design"],
    },
    impact: {
      heading: "The Impact",
      body: "The programme's most significant finding was not a statistic. It was the overturning of every assumption that had made people hesitant to tackle MHH in rural Pakistan in the first place. Fathers spoke. Mothers demanded. Girls asked questions. Religious leaders gave endorsements. The silence broke \u2014 and it broke in the most conservative corners of the country.",
      metrics: [
        { value: 90, suffix: "%", prefix: "~", label: "Toolkit communication effectiveness rate across three provincial pilots \u2014 providing the evidence base for a confident national rollout." },
        { value: 3000, suffix: "+", label: "Fathers, mothers, and adolescent girls reached across Rajanpur and Battagram through structured KAB sessions \u2014 with documented attitude and behaviour shifts." },
        { value: 1, suffix: " Father\u2013Mother\u2013Daughter", label: "The communication flow between these three relationships \u2014 previously nonexistent \u2014 was successfully established through the programme. This is the foundational architecture for national change." },
        { value: 1, suffix: " National Toolkit", label: "Pakistan's first MHH SBC Toolkit \u2014 tested across Sindh, Punjab, and KPK, with modifications mapped for each regional context \u2014 ready for national programme design and partner rollout." },
      ],
      closingNote: "The path to national impact is now clear. If affordability is addressed \u2014 through product subsidies, supply chain improvement, or economic empowerment for women \u2014 Pakistan's communities are ready. The programme did not just break a barrier. It proved that the barrier was never as solid as it appeared.",
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
    year: "2013 - 2015",
    tags: ["Girls' Empowerment", "Digital Content", "Mobile-First", "Storytelling", "Co-Creation", "Financial Wellbeing", "Voice & Agency", "Adolescent Girls", "Internet.org", "Nike Foundation", "Springster", "SDG 4", "SDG 5", "Pakistan"],
    challenge: {
      heading: "The Challenge",
      body: "Pakistan's adolescent girls face a particular kind of information poverty. The questions that matter most \u2014 about their bodies, their safety, their money, their right to speak \u2014 are precisely the questions that home, school, and community offer the least trustworthy or least available answers to. The topics are too sensitive for open conversation, too personal for the classroom, and too complex for the internet content that does exist to address with cultural nuance.\n\nThe Nike Foundation's global Springster programme had an answer: a mobile-first content platform built specifically for adolescent girls, designed to be their trusted companion on the topics that matter. White Rice's challenge was to bring that platform to life in Pakistan \u2014 in a way that reflected the full diversity of Pakistani girls, not a single imagined composite of who they were supposed to be.\n\nThat meant designing content that could speak authentically to a Muslim girl from Lahore and a Christian girl from Karachi's inner city; to a girl in school and one who had dropped out; to a girl whose mother allowed her to use a phone and one who had to borrow one secretly. The platform had to be genuinely universal \u2014 which meant starting not with assumptions, but with the girls themselves.",
      quote: {
        text: "They don't lack curiosity. They lack a space that feels safe enough to be curious in \u2014 and content that feels like it was actually made for them.",
      },
    },
    strategy: {
      heading: "The Strategy",
      intro: "Before a single story was written or a single illustration sketched, White Rice spent significant time in schools and communities \u2014 conducting human-centred design research across diverse populations of girls in Pakistan. The methodology was immersive and participatory: girls were not research subjects, they were co-designers.",
      steps: [
        { number: "01", title: "Girls as Designers, Not Research Subjects", description: "Co-creation sessions in schools gave girls the tools to define what they wanted to see \u2014 through moodboards, visual design, storytelling, theme selection, and artwork \u2014 before White Rice designed anything." },
        { number: "02", title: "Mobile-First by Design", description: "Every story was conceived for a small screen, short attention span, and potentially borrowed device. Visual appeal, cultural resonance, and brevity were not trade-offs \u2014 they were the design brief." },
        { number: "03", title: "Storytelling as the Medium, Not Information Delivery", description: "The platform succeeded where information-only content fails because it used narrative \u2014 characters, situations, dilemmas, resolutions \u2014 to carry meaning. Girls didn't read facts. They read stories they recognised." },
        { number: "04", title: "Diversity as a Non-Negotiable Design Principle", description: "Christian and Muslim girls. Rural and urban. Punjabi, Sindhi, Pakhtun backgrounds. The content was stress-tested across this diversity \u2014 if a story only resonated with one type of girl, it was redesigned." },
      ],
    },
    work: {
      heading: "The Intervention",
      body: "White Rice led the full creative and research cycle for Springster Pakistan \u2014 from in-school human-centred design research and co-creation sessions with girls across religious and socioeconomic backgrounds, through to the development of over 100 unique mobile-first content stories spanning financial wellbeing, safety, health, voice, and agency. Every story was designed with the girls who would read it.\n\nAt the time of the programme, Facebook's Internet.org initiative provided free mobile access to a curated set of platforms \u2014 without requiring a data plan. For Pakistani girls, this was transformative. A girl who had no personal phone, no data, and no money could borrow a family member's handset, open Internet.org, and access Springster \u2014 for as long as she needed, at zero cost.\n\nThe platform's mobile-first design was not a stylistic choice. It was the fundamental design constraint that shaped every decision: how long a story could be, how much text could appear on screen, how images had to load, and how navigation had to work for someone who might be using the phone quickly, in private, with limited time before it was needed back.",
      deliverables: ["Human-Centred Design Research", "In-School Co-Creation Sessions", "Brand & Platform Identity", "100+ Content Stories", "Mobile-First Design", "Visual & Illustrative Design", "Moodboarding & Concept Development", "Multi-Community Contextualisation"],
    },
    impact: {
      heading: "The Impact",
      body: "Over one million girls in Pakistan accessed Springster. That number would be remarkable for any digital platform in Pakistan. For one specifically targeting adolescent girls from low-income communities \u2014 on a free, zero-data platform, covering topics that Pakistani society rarely offered them any trusted space to explore \u2014 it was extraordinary.",
      metrics: [
        { value: 1000000, suffix: "+", label: "Girls in Pakistan reached through the Springster platform \u2014 accessing content on financial wellbeing, voice, safety, and health that they had never had trusted access to before." },
        { value: 100, suffix: "+ Stories", label: "Unique mobile-first content pieces \u2014 each co-designed with Pakistani girls, visually distinct, culturally resonant, and rigorously tested before publication." },
        { value: 1, suffix: " Trusted Space", label: "The feedback from girls consistently returned to one theme: Springster was a place where they could be curious about the things that actually mattered to them, without shame, judgement, or the risk of a difficult conversation." },
        { value: 1, suffix: " Power of Story", label: "The programme validated a core White Rice conviction \u2014 that entertainment-driven, narrative-first content reaches audiences that information-only approaches cannot. Girls didn't read the platform because they had to. They read it because they wanted to." },
      ],
      quote: {
        text: "Girls who would never have talked to anyone about these topics found something they could read privately, share with a friend, and return to again and again.",
        attribution: "",
      },
      closingNote: "Springster Pakistan demonstrated what becomes possible when you design digital content with radical fidelity to who the audience actually is \u2014 not who funders imagine them to be, not who they are supposed to become, but who they are right now: curious, capable, and hungry for a space that takes them seriously.",
    },
    gallery: {
      heading: "Gallery",
      images: [
        { src: "/images/nike/nike01.jpg", alt: "Girls engaging with Springster digital content", span: "wide" },
        { src: "/images/nike/nike02.jpg", alt: "Interactive storytelling session", span: "normal" },
        { src: "/images/nike/nike03.jpg", alt: "Community event for girls empowerment", span: "normal" },
      ],
    },
  },

  /* 12 ─ Spring Accelerator / USAID */
  {
    slug: "spring-program",
    year: "2015 - 2017",
    tags: ["Startup Acceleration", "Human-Centred Design", "Girls 10\u201319", "EdTech", "STEM", "Prototyping", "User Testing", "USAID", "4-Country Programme", "Pakistan", "SDG 4", "SDG 5"],
    challenge: {
      heading: "The Challenge",
      body: "The startups entering the Spring Accelerator cohort were not short on ambition or potential. Many had initial prototypes and a clear sense of the problem they were trying to solve. What they often lacked was the deep, contextual understanding of their actual end users \u2014 adolescent girls aged 10 to 19 in Pakistan \u2014 that would determine whether their product succeeded or failed at the point of adoption.\n\nThe challenge for White Rice was to compress the user research and iteration cycle that most startups take years to complete into a structured, supported programme \u2014 while simultaneously operating as part of a four-country global consortium with shared methodology, cross-learning obligations, and international showcasing requirements.\n\nThe diversity of the cohort added its own complexity: startups working in formal education technology sat alongside those developing vocational content, STEM tools, and digital platforms \u2014 each requiring different user research approaches and different types of prototype testing. White Rice had to be a credible design partner for all of them.",
      quote: {
        text: "A prototype built for a girl you imagine is very different from a product built for a girl you have actually sat with, listened to, and watched try to use what you've made.",
      },
    },
    strategy: {
      heading: "The Strategy",
      intro: "White Rice's approach was grounded in human-centred design methodology \u2014 applied not as a theoretical framework, but as a practical, iterative process that startups could experience alongside their users in real time. The process was designed to move fast and iterate often.",
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
      heading: "The Impact",
      body: "The most durable measure of the Spring Accelerator's success in Pakistan is the cohort itself. Startups that entered the programme with early-stage prototypes exited with user-validated products, tested value propositions, and the research infrastructure to continue iterating. Several \u2014 including EDCASA, Sabak, and LearnerBots \u2014 became credible operating organisations that are still active today.",
      metrics: [
        { value: 7, suffix: "", label: "Pakistan cohort taken through the full HCD cycle \u2014 user research, co-creation, prototype testing, iteration, and value proposition development." },
        { value: 4, suffix: "", label: "A global consortium \u2014 Pakistan's learning fed into a shared methodology across Nepal, Kenya, and Tanzania, and vice versa." },
        { value: 3, suffix: "+", label: "EDCASA, Sabak, and LearnerBots among the ventures that went on to operate as credible organisations \u2014 carrying HCD principles into their ongoing work." },
        { value: 1, suffix: "", label: "Cross-country learning exchange \u2014 White Rice team visited Nepal for methodology training and cohort showcasing." },
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
    year: "2018 - 2020",
    tags: ["Youth Empowerment", "Human-Centred Design", "Innovation Hubs", "Oxfam", "IKEA Foundation", "Entrepreneurship", "Agri-Tech", "Employability", "Punjab", "Sindh", "Climate-Affected Communities", "4-Country Programme", "SDG 8", "SDG 13"],
    challenge: {
      heading: "The Challenge",
      body: "Youth unemployment and underemployment in Pakistan's semi-urban and rural areas \u2014 particularly in climate-affected regions of Punjab and Sindh \u2014 is not a simple skills gap problem. It is a system of interconnected barriers: limited market access, weak connectivity between skills supply and employer demand, entrenched gender norms restricting girls' economic participation, climate disruption undermining agricultural livelihoods, and programme designs that rarely reflect the actual lives of the young people they target.\n\nOxfam and the IKEA Foundation had the ambition and the funding for a 5-year programme to change this. What they needed was the confidence that the programme design was actually right before deploying it at scale. That confidence could only come from one source: real evidence from the communities it was built to serve.\n\nThe added complexity was the parallel nature of the programme \u2014 running simultaneously in four countries, each with its own context, partner network, and implementation challenges. White Rice had to operate as a rigorous, facilitated design partner while contributing to a shared methodology and global learning ecosystem.",
      quote: {
        text: "Every programme that had tried to empower these youth before had been designed for them, not with them. White Rice's task was to make that distinction matter.",
      },
    },
    strategy: {
      heading: "The Strategy",
      intro: "White Rice's strategy was to treat the entire 5-year programme as something that needed to be designed before it was built. Rather than consulting, writing a framework, and handing it over, White Rice embedded itself in Oxfam's implementation process \u2014 running quarterly workshops that moved through the full design thinking arc, and returning every three months to review what the field had taught, what needed to change, and how to improve.",
      steps: [
        { number: "01", title: "Partners as Designers, Not Implementers", description: "Oxfam's implementing partners weren't handed a programme to execute \u2014 they were trained in design thinking and brought into each quarterly workshop as co-designers. Their field knowledge was the raw material for every sprint." },
        { number: "02", title: "Productive Failure as Programme Intelligence", description: "Each prototype round was designed to fail instructively \u2014 surfacing the assumptions that were wrong before they were embedded at scale. The question was never \"did it work?\" but \"what did we learn that changes the design?\"" },
        { number: "03", title: "Region-Specific Programme Design", description: "Punjab and Sindh have different economic ecologies, labour markets, and cultural contexts. The programme that emerged was not one national model \u2014 it was two region-specific designs, each grounded in the evidence from its own context." },
        { number: "04", title: "Scale Only When Ready", description: "The entire HCD phase was in service of one question: is this programme ready to deploy at the scale Oxfam and IKEA intended? The answer had to be earned \u2014 through iteration \u2014 not assumed from good intentions." },
      ],
    },
    work: {
      heading: "The Intervention",
      body: "White Rice served as Oxfam's human-centred design partner for the full 18-month design and prototyping phase of their IKEA-funded Youth Empowerment for Work programme \u2014 one of the most rigorous and sustained HCD engagements in Pakistan's development sector. Our role was not just to research, but to embed design thinking across Oxfam's implementing partner network: running quarterly workshops, facilitating live prototyping cycles, and guiding field teams through the iterative process of learning, failing, and redesigning until the programme was genuinely ready to scale.",
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
      heading: "The Impact",
      body: "The proof of the 18-month investment was in the programme's eventual reach and effectiveness. Over 10,000 young entrepreneurs and youth were enabled across semi-urban and rural communities in climate-affected areas of Punjab and Sindh. The programme was considered one of Oxfam's most successful youth economic empowerment interventions \u2014 and a significant part of that success was attributable to the rigour of the design process that preceded it.",
      metrics: [
        { value: 10000, suffix: "+", label: "Young people \u2014 entrepreneurs, agri-tech youth, and job seekers \u2014 reached across semi-urban and rural communities in climate-affected Punjab and Sindh." },
        { value: 2, suffix: "", label: "Innovation hubs established \u2014 one per province \u2014 each offering region-specific programmes for three distinct youth pathways, designed from evidence not assumption." },
        { value: 6, suffix: "", label: "Six quarterly design cycles \u2014 each one compressing a phase of the 5-year programme into a real-world prototype, testing it with actual youth, and learning before scaling." },
        { value: 18, suffix: "", label: "Months of HCD engagement \u2014 the longest single HCD consulting engagement White Rice has undertaken." },
      ],
      closingNote: "Eighteen months. Six design cycles. Countless iterations. And then a 5-year programme that worked \u2014 because it had already been run, tested, broken, and rebuilt before it was ever deployed at scale. That is what human-centred design looks like when an organisation has the courage to use it fully.",
    },
    gallery: {
      heading: "Gallery",
      images: [
        { src: "/images/oxfam-ikea/oxfam-ikea01.jpg", alt: "Youth participants in the HCD empowerment programme", span: "wide" },
        { src: "/images/oxfam-ikea/oxfam-ikea02.jpg", alt: "Human-centred design workshop with young participants", span: "normal" },
        { src: "/images/oxfam-ikea/oxfam-ikea03.jpg", alt: "Community session for youth economic empowerment", span: "normal" },
      ],
    },
  },

  /* 14 ─ When They Can See / Sightsavers */
  {
    slug: "sightsavers-film",
    year: "2018",
    tags: ["Eye Health", "Short Film", "Cannes Lions Health", "Data-Driven Storytelling", "Early Detection", "Children's Vision", "Sightsavers International", "C Prime", "20-Year Partnership", "Community Screening", "Schools", "Pakistan", "Disability Inclusion", "SBC"],
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
          title: "Production with C Prime",
          description: "In partnership with C Prime, Pakistan's leading production house, the film was brought to life with well-known Pakistani actors \u2014 lending it the cultural weight and emotional resonance that only familiar, trusted faces can provide. Production quality was uncompromising.",
        },
        {
          number: "05",
          title: "Launch & Amplification",
          description: "Premiered at a major stakeholder launch event with government representatives, sector partners, and media. Simultaneously released on C Prime's digital platform \u2014 delivering both institutional credibility and mass audience reach from day one.",
        },
      ],
    },
    work: {
      heading: "The Work",
      body: "White Rice's relationship with Sightsavers International spans over 20 years \u2014 one of the longest-running partnerships in the White Rice portfolio. Across two decades, we have supported Sightsavers Pakistan with creative campaigns, research, short films, communication strategy, and disability inclusion advocacy. Together, our work has contributed to a measurable decline in preventable blindness and eye disease in Pakistan.\n\nThis particular project \u2014 Pakistan's first celebrity-fronted short film on children's eye health \u2014 represents the creative pinnacle of that partnership. It was not only a film. It was a research project, a co-creation process, a production achievement, an award-winning piece of communication, and a community health tool that continues to operate long after its premiere.\n\nWhite Rice designed a three-stage approach: deep research to find the stories; rigorous co-creation to ensure the script was community-true; and a production and distribution strategy that paired Pakistan's best creative talent with a platform large enough to give the film the audience it deserved.\n\nThe partnership with C Prime \u2014 one of Pakistan's most prominent production and digital media houses \u2014 was a deliberate strategic choice. It brought production excellence and a ready-made digital audience together with Sightsavers' credibility and White Rice's research and creative depth. The government and sector stakeholders were engaged from the beginning, ensuring the film's launch became a sector event rather than a single organisation's campaign.",
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
      body: "The film's impact operates on three levels simultaneously \u2014 and all three are still active. As a digital film, it has reached over one million viewers on C Prime's platform. As a Cannes-winning piece of creative work, it has positioned Pakistan's eye health advocacy on the global map. And as a community tool, it continues to be used by Sightsavers, schools, and health workers across the country \u2014 its work unfinished, its conversations still unfolding.",
      metrics: [
        { value: 1, suffix: "M+ Views", label: "Online views on C Prime's platform \u2014 Pakistan's most-watched short film on children's eye health, continuing to grow." },
        { value: 0, suffix: "", prefix: "", label: "Cannes Lions \u2014 International recognition \u2014 Health category winner at the world's most prestigious film and creative communications festival." },
        { value: 20, suffix: "Years", label: "Of partnership work contributing to a measurable decline in preventable blindness and eye disease in Pakistan." },
        { value: 0, suffix: "", prefix: "", label: "Still Screening \u2014 The film remains in active use in schools and communities \u2014 a living health intervention with no end date and no expiry." },
      ],
      closingNote: "The film's greatest impact may be unmeasurable \u2014 the children whose parents, after a school screening, booked an eye test they had never thought to arrange. The ones who can now read the board. The ones for whom a film that took months to make changed the next decade of their lives.",
    },
    gallery: {
      heading: "Gallery",
      images: [
        { src: "/images/sightsavers/sightsavers01.jpg", alt: "Scene from When They Can See documentary", span: "wide" },
        { src: "/images/sightsavers/sightsavers02.jpg", alt: "Eye health screening in rural Pakistan", span: "normal" },
        { src: "/images/sightsavers/sightsavers03.jpg", alt: "Child receiving eye care treatment", span: "normal" },
      ],
    },
  },

  /* 15 ─ Johns Hopkins CCP FLW Animation */
  {
    slug: "johns-hopkins-animation",
    year: "2019 - 2021",
    tags: ["Johns Hopkins CCP", "Frontline Worker Training", "Animation Series", "Global Health", "Immunization", "Vaccination", "250,000 FLWs", "4 Languages", "Africa", "Asia", "Gulf", "Western Europe", "UNICEF", "Mobile-First", "Scenario-Based Learning", "SBC"],
    challenge: {
      heading: "The Challenge",
      body: "The brief from Johns Hopkins CCP was as technically demanding as any White Rice had received. The training content needed to be simultaneously universal and specific \u2014 meaningful to a health worker in Nairobi and to one in Karachi, to one in Cairo and to one in Birmingham. It needed to depict real situations without privileging any single cultural context. It needed to be producible in four languages without losing its emotional or instructional impact in translation. And it needed to work on a phone screen in the field \u2014 not just in a training room.\n\nThe core tension in the brief was between specificity and universality. Health communication works through recognition \u2014 a viewer needs to see themselves or their community in the scenario to engage with it. But a scenario that is too specific to one context alienates every other. White Rice's creative challenge was to build characters, situations, and community dynamics specific enough to feel real, but archetypal enough to travel across continents.\n\nOverlaid on the creative challenge was a rigorous instructional one: the animations needed to function as genuine training tools within Johns Hopkins CCP's broader FLW capacity-building programme \u2014 not as awareness content, but as practical scenario-based learning that changed how workers showed up in the field.",
      quote: {
        text: "The hardest design problem is not making something powerful. It is making something powerful that means the same thing to different people in different worlds \u2014 and still moves all of them to act.",
      },
    },
    strategy: {
      heading: "The Strategy",
      intro: "White Rice worked closely with Johns Hopkins CCP's global teams \u2014 building an understanding of the specific field situations, community dynamics, and communication challenges that FLWs encounter across the programme's four deployment regions. This research informed the scenario design: each episode was built around a real situation type, not an invented one.",
      steps: [
        {
          number: "01",
          title: "Archetypal Characters",
          description: "Characters were designed to represent recognisable human archetypes \u2014 the hesitant father, the community gatekeeper, the sceptical grandmother, the exhausted mother \u2014 without being anchored to a specific nationality, religion, or ethnicity. Viewers across four continents recognise these people because they know them.",
        },
        {
          number: "02",
          title: "Scenario-First Structure",
          description: "Each episode began with a situation, not a message. The FLW encounters a real-world barrier \u2014 misinformation, refusal, access difficulty, cultural resistance \u2014 and the episode shows what skilled, compassionate communication looks like in that moment. Learning emerges from narrative, not instruction.",
        },
        {
          number: "03",
          title: "Mobile-Native Design",
          description: "Every visual and pacing decision was made for a phone screen in the field \u2014 high-contrast imagery, minimal visual complexity, short episode duration, and a structure that allows a worker to revisit a specific episode before a community visit without watching the entire series again.",
        },
      ],
    },
    work: {
      heading: "The Work",
      body: "Johns Hopkins Center for Communication Programs \u2014 one of the world's leading health communication institutions \u2014 engaged White Rice as their creative partner and communication design firm for a landmark global initiative: building a comprehensive animation-based training package for frontline immunization workers spanning four continents. Our mandate was to conceive, design, and produce content that could work everywhere \u2014 culturally representative, scenario-grounded, and powerful enough to train, challenge, and equip health workers operating in radically different settings.\n\nThe animation style was deliberately designed to sit in a culturally neutral register \u2014 characters, settings, and visual language that could represent multiple regions simultaneously, without defaulting to any single country's visual vocabulary. Scenarios were structured around decision moments: situations where the FLW's response made a measurable difference to whether a child received a vaccine.\n\nThe four-language localisation was treated as a design requirement from the beginning \u2014 not an afterthought. Scripts were built to carry meaning cleanly across translation. Visual storytelling carried the weight that language-specific nuance could not always sustain across four very different linguistic contexts.",
      deliverables: [
        "Creative Strategy",
        "Communication Design",
        "Scenario Development",
        "6-Part Animation Series",
        "FLW Training Content",
        "4-Language Localisation",
        "Mobile-First Delivery",
        "Global Stakeholder Collaboration",
        "UNICEF Aligned Content",
      ],
    },
    impact: {
      heading: "The Impact",
      body: "The programme's impact is measured not in views or impressions, but in the 250,000 frontline workers who entered the world's most difficult healthcare environments better equipped \u2014 with a clearer understanding of the human situations they would face, and better communication tools for navigating them. Every child vaccinated through those interactions is the programme's ultimate unit of success.",
      metrics: [
        { value: 250000, suffix: "", label: "Frontline immunization workers trained and given access to the series \u2014 across Africa, Asia, the Gulf, and Western Europe." },
        { value: 4, suffix: "Continents", label: "A single creative framework \u2014 6 episodes, 4 languages \u2014 that worked across radically different cultural and community contexts simultaneously." },
        { value: 0, suffix: "", prefix: "", label: "In Their Hands \u2014 Converted to a mobile field reference \u2014 the training travelled with the worker, not just into the training room." },
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
    year: "2018 - 2019",
    tags: ["ICRC Pakistan", "Barosakare", "Healthcare Violence", "HCD Research", "Visual Ethnography", "Bodystorming", "Journey Mapping", "Experience Design", "JPMC Karachi", "Lady Reading Peshawar", "TV Campaign", "Celebrity Engagement", "SBC", "4M+ Reach", "100+ Hospitals", "Pakistan"],
    challenge: {
      heading: "The Challenge",
      body: "When a patient's attendant strikes a doctor, it is rarely a simple act of cruelty. It is the end of a long chain of frustration, confusion, fear, and unmet need. ICRC Pakistan commissioned White Rice to find that chain \u2014 and break it \u2014 through embedded research, experience design, and a national behaviour change campaign that reached over 4 million people.\n\nA patient is critical. The attendant has been waiting for hours, has received no information, cannot find the right person to ask, and does not understand what is happening. Fear becomes frustration. Frustration becomes confrontation. The healthcare worker at the desk \u2014 often junior, often undertrained for conflict \u2014 becomes the target of a rage that belongs to the system, not to them.\n\nUnderstaffed, overstretched, managing dozens of patients and their families with minimal support systems. When violence strikes \u2014 and in Pakistan's major public hospitals, it strikes regularly \u2014 the consequences ripple outward immediately. Doctors abandon their work. Other patients are neglected. The entire ward suffers because one person's frustration was never addressed earlier in the chain.",
      quote: {
        text: "We sent a researcher into JPMC as a patient. What they experienced in those hours became the emotional foundation of the entire campaign.",
      },
    },
    strategy: {
      heading: "The Strategy",
      intro: "ICRC engaged White Rice for one of the most demanding briefs we have received \u2014 not a brief to make a campaign, but a brief to understand a crisis first, and then design the response. Our role spanned the complete arc: embedded HCD field research across two major hospitals, journey mapping and experience design recommendations for the healthcare system, training strategy for healthcare staff, and the full design and execution of Barosakare \u2014 a national multi-channel behaviour change campaign that changed the public conversation around healthcare violence in Pakistan.",
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
      body: "ICRC engaged White Rice for one of the most demanding briefs we have received \u2014 not a brief to make a campaign, but a brief to understand a crisis first, and then design the response. Our role spanned the complete arc: embedded HCD field research across two major hospitals, journey mapping and experience design recommendations for the healthcare system, training strategy for healthcare staff, and the full design and execution of Barosakare \u2014 a national multi-channel behaviour change campaign that changed the public conversation around healthcare violence in Pakistan.\n\nThe decision to have a White Rice researcher become a patient was not part of the original brief. It emerged from the field \u2014 from the recognition that no amount of observation could substitute for the experience of waiting three hours without information, being turned away from a desk, not knowing if your family member was alive or dying, and having no one in the building whose job it was to help you understand. The TV ad's emotional power traces directly to that day.\n\nThe Barosakare TV ad became the most visible and widely discussed element of the campaign. Its power came from a structural decision that was itself a product of the HCD research: instead of condemning violence, it showed the consequence chain. Not the act \u2014 the aftermath. Not the attacker \u2014 the patient who suffers next.",
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
      heading: "The Impact",
      body: "Barosakare demonstrated that healthcare violence in Pakistan is not an intractable cultural problem \u2014 it is a design and communication problem. When people understand the consequences of their actions, when they feel seen on both sides of the encounter, and when the healthcare system removes the friction points that trigger frustration, the behaviour changes. The campaign's reach proved the demand for this conversation existed and was waiting for a voice.",
      metrics: [
        { value: 4, suffix: "Million+", label: "People reached through TV, digital, celebrity, radio, and outdoor \u2014 creating a national conversation around healthcare violence for the first time." },
        { value: 100, suffix: "+ Hospitals", label: "Hospitals across Pakistan influenced by the Barosakare insights, recommendations, and campaign \u2014 extending the programme's impact well beyond the two research sites." },
        { value: 0, suffix: "", prefix: "", label: "System + Society \u2014 The dual-pronged strategy \u2014 experience design for hospitals and behaviour change for the public \u2014 addressed the crisis at both the structural and individual level simultaneously." },
        { value: 0, suffix: "", prefix: "", label: "A National First \u2014 Pakistan's first nationally coordinated, multi-channel behaviour change campaign specifically addressing violence against healthcare workers \u2014 grounded in empathy for everyone in the room." },
      ],
      closingNote: "The campaign's TV ad remains the most resonant piece of health communication on this issue ever produced in Pakistan \u2014 because it trusted the audience enough to show them both sides of the story, without deciding for them which side was right.",
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
    year: "2014 - 2018",
    tags: ["Girls' Education", "Advocacy Campaign", "Dunia Aali Larki", "Movement Building", "16 Days of Activism", "Children's Assembly", "Oxfam Pakistan", "Animation", "Socio-Ecological Model", "Policy Advocacy", "Grassroots Mobilisation", "SDG 4", "SDG 5", "Pakistan"],
    challenge: {
      heading: "The Challenge",
      body: "Pakistan's girl-child education crisis is not a secret. It is a well-documented, frequently reported, consistently underfunded emergency. 36 million children are out of school, and girls represent the majority of the excluded \u2014 kept home by a combination of poverty, patriarchal norms, distance, safety fears, early marriage, and institutional indifference. The problem is known. The barrier has always been the will to act \u2014 at the level of government, community, and family simultaneously.\n\nOxfam needed more than a public awareness campaign. Awareness of the crisis was not lacking \u2014 what was lacking was the social permission, political urgency, and grassroots momentum that would translate awareness into action across every tier of the system. Inspired directly by the Nike Girl Effect model, Oxfam and White Rice set out to do for Pakistan's girl-child education movement what that global initiative had done globally: make it feel like a cause that belonged to everyone.\n\nThe 16 Days of Activism window (November 25 to December 10) provided the launchpad. The question was what to put on it \u2014 something with enough emotional power to spark a movement, and enough strategic architecture to sustain one for four years.",
      quote: {
        text: "You cannot fix with a school what a community has already decided. The campaign had to change the decision before it could change the enrolment numbers.",
      },
    },
    strategy: {
      heading: "The Strategy",
      intro: "White Rice's strategy was built on three convictions: that storytelling \u2014 not statistics \u2014 moves people; that a movement needs architecture, not just energy; and that the socio-ecological model is not a theory to cite in a report, it is a design brief for reaching everyone who matters simultaneously.",
      steps: [
        { number: "01", title: "Animation as the Movement's Voice", description: "The animated film was not simply an ad \u2014 it was the campaign's emotional engine. Animation allowed White Rice to show a Pakistani girl's compounding disadvantages with the honesty and universality that live film rarely achieves in this context. It crossed language, class, and media format \u2014 airable on national TV and shareable on every digital platform." },
        { number: "02", title: "Multi-Tier, Simultaneous Activation", description: "The full socio-ecological model \u2014 from individual to family to community to enabling environment \u2014 was activated in parallel, not sequentially. School clubs ran at the same time as policy dialogues. Rallies happened while the global conference was being planned. Digital amplified everything." },
        { number: "03", title: "Children as Advocates, Not Beneficiaries", description: "The campaign's most radical design decision was to position children \u2014 specifically girls \u2014 not as objects of charity or policy concern, but as the campaign's most powerful advocates. School debates, rallies, and ultimately the Children's Assembly gave them the platform, the legitimacy, and the audience they deserved." },
        { number: "04", title: "Stories from the Ground, Amplified by Digital", description: "The campaign's digital strategy was not a megaphone for messaging \u2014 it was a distribution system for real stories. What happened at rallies, in school clubs, in community dialogues was captured and amplified to a national audience that could not attend in person." },
      ],
    },
    work: {
      heading: "The Intervention",
      body: "White Rice designed Dunia Aali Larki from its first frame to its national scale \u2014 beginning with the animated campaign film that launched on 16 Days of Activism, and growing through four years of advocacy into a multi-tier movement spanning policymakers, schools, communities, media, and Pakistan's first Children's Assembly. Our role spanned creative strategy, animation production, grassroots mobilisation design, school programme development, policy dialogue facilitation, and digital amplification \u2014 all in service of one sustained demand: that girls in Pakistan have the right to learn.",
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
      heading: "The Impact",
      body: "Dunia Aali Larki accomplished something that most advocacy campaigns do not: it outlasted itself. The programme formally ended, but the movement it built did not. Other organisations working on girls' education in Pakistan found themselves operating within a changed landscape \u2014 one in which their work had a stronger voice, a more receptive public, and a clearer precedent for what advocacy on this subject could look like.",
      metrics: [
        { value: 1000000, suffix: "", prefix: "$", label: "A 16-day animated campaign converted into a $1 million, 4-year national advocacy programme \u2014 the clearest possible validation of the creative strategy." },
        { value: 1, suffix: "", label: "Children's Assembly \u2014 held at the national convention centre in Islamabad, with political figures as moderators and children debating girls' right to education at parliamentary level." },
        { value: 4, suffix: "", label: "From a single animated film to a multi-tier, multi-year national movement \u2014 operating simultaneously at policy, community, school, and digital levels across Pakistan." },
        { value: 36000000, suffix: "", label: "Children out of school in Pakistan \u2014 the crisis the campaign was built to address \u2014 including one of the world's highest concentrations of out-of-school girls." },
      ],
      closingNote: "Dunia Aali Larki proved that a single, well-designed creative moment \u2014 an animated film that told the truth about a girl's life in Pakistan \u2014 can be the beginning of something much larger than a campaign. When the movement is built right, it doesn't end when the funding does. It becomes part of the air the sector breathes.",
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
    year: "2022 - 2023",
    tags: ["Recycling", "Waste Management", "Behaviour Change", "Waste Segregation", "Community Mobilisation", "Youth Engagement", "Digital Campaign", "Incentive Design", "Karachi", "Tier Fund", "SDG 11", "SDG 12"],
    challenge: {
      heading: "The Challenge",
      body: "Recycling was not part of how Karachi's low-income communities understood waste. Waste was disposed of \u2014 often wherever was most convenient \u2014 not sorted, segregated, and handed to a collection vehicle for a journey to a recycling hub. The concept of a Hariali Hub, of dry versus wet waste, of plastics being turned into driveways \u2014 all of it was genuinely new.\n\nThe campaign had to work across multiple segments simultaneously \u2014 women managing household waste, men and youth who influenced community norms, local influencers and religious leaders whose endorsement could shift social permission, waste collectors who needed to be part of the solution rather than bypassed by it, and government partners whose collection infrastructure only worked if households had already done their part.\n\nBehaviour change in this context also meant confronting deeply ingrained norms in communities where open dumping was normalised, where waste bins at home were uncommon, and where the connection between household practice and city-level cleanliness had never been made visible. White Rice's role was to make that connection \u2014 and to make it feel urgent, achievable, and personally meaningful.",
      quote: {
        text: "In a community that has never encountered recycling as a practice, the first job is not to motivate the behaviour. It is to make the behaviour imaginable.",
      },
    },
    strategy: {
      heading: "The Strategy",
      intro: "White Rice began with in-context qualitative research \u2014 observations, one-on-one interviews, and focus group discussions across target communities \u2014 mapping current waste disposal practices, identifying the moments where behaviour broke down, and understanding what would make long-term change possible rather than just compliance in the short term.\n\nThe strategic framework that emerged was built around four simultaneous layers of activation: the household, the community, mass media channels, and the incentive architecture that connected and rewarded performance across all of them.",
      steps: [
        { number: "01", title: "Women at Home", description: "Primary waste managers \u2014 targeted through household visits, kitchen nudges, and waste bin design for daily habit formation." },
        { number: "02", title: "Men & Youth", description: "Social norm influencers \u2014 engaged through sports tournaments, youth clubs, festivals, and TikTok-led peer campaigns." },
        { number: "03", title: "Community Influencers", description: "Trusted voices \u2014 local leaders and respected figures \u2014 brought in as champions to create social permission for behaviour change." },
        { number: "04", title: "Waste Collectors", description: "Frontline system actors \u2014 incentivised, recognised, and equipped as programme champions, not just operatives." },
      ],
    },
    work: {
      heading: "The Intervention",
      body: "White Rice designed the complete behaviour change strategy and communication campaign for the Saaf Karachi Meri Zimmedari initiative \u2014 from formative research and community engagement, through to household nudge design, social mobiliser toolkits, animation production, mass media, incentive architecture, and community recognition programmes. Working alongside local government, collection teams, and the Hariali Hub recycling centre, we built a campaign that touched every actor in the recycling chain.\n\nThe household was the first and most critical site of intervention. Before any community session or media campaign could take effect, the home needed to have the physical tools and environmental nudges to make the new behaviour the path of least resistance. Colour-coded waste bins for dry and wet waste, kitchen nudges and doorstickers placed at the point of behaviour, \"I Am a Clean Champion\" identity stickers connecting private practice to a larger community movement, and WhatsApp behaviour nudges keeping the behaviour salient between visits.\n\nThe incentive architecture recognised every actor in the chain: champion households with the highest segregation performance, top communities celebrated for collective performance, social mobiliser scorecards for frontline accountability, and collector awards treating waste collectors as essential programme champions.\n\nEvery channel working together \u2014 from the kitchen wall to TikTok. Community and outdoor channels included wall chalkings, shop fascia branding, branded collection vehicles, community sessions, sports tournaments, youth festivals, and youth clubs. Digital and social media included animated content series, TikTok influencer engagement, online PR, celebrity endorsement videos, WhatsApp nudges, and local influencer partnerships. Field and household channels included social mobiliser toolkits, animation series for facilitation, colour-coded bins, kitchen nudges, Clean Champion stickers, and scorecard documentation.",
      deliverables: ["Formative Research", "SBC Strategy", "Campaign Design & Branding", "Community Mobilisation", "Household Nudge Design", "Animation Production", "Social Media & Influencers", "Incentive & Rewards Architecture", "Youth Clubs & Events", "FLW Toolkit Design"],
    },
    impact: {
      heading: "The Impact",
      body: "Saaf Karachi Meri Zimmedari succeeded in doing what most recycling campaigns fail to do: making waste segregation feel like a community movement rather than a government instruction. By incentivising every actor in the recycling chain \u2014 from the household to the collector \u2014 and by making the behaviour visible, celebrated, and competitively desirable, the campaign created momentum that institutional programming alone cannot generate.",
      metrics: [
        { value: 1, suffix: " Full Chain", label: "Every actor incentivised \u2014 households, communities, social mobilisers, and collectors \u2014 creating aligned motivation across the entire recycling system for the first time." },
        { value: 360, suffix: "\u00B0 Reach", label: "From kitchen nudges to TikTok \u2014 the campaign reached community members through every relevant channel, in their homes, their streets, and their phones." },
        { value: 1, suffix: " Social Norm Shift", label: "Youth clubs, tournaments, and community recognition events transformed recycling from an individual chore into a collective identity \u2014 something Karachi's communities owned." },
        { value: 1, suffix: " Hariali Hub", label: "The campaign made the recycling chain legible to communities for the first time \u2014 connecting household action to a physical outcome they could see: products made from their own sorted waste." },
      ],
      closingNote: "What made this programme distinctive was the decision to treat recycling not as an environmental message but as a civic identity. Saaf Karachi Meri Zimmedari gave communities something to be proud of \u2014 a claim of ownership over their city that could be expressed every time they sorted their waste. That is the shift that lasts beyond any campaign cycle.",
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
    tags: ["Sport for Development", "SBC", "UNICEF", "Training Design", "Cricket"],
    challenge: {
      heading: "The Challenge",
      body: "Social and behaviour change (SBC) practitioners across Pakistan and South Asia lacked practical, engaging tools for applying SBC principles in community settings. Existing training resources were academic, dense, and disconnected from the cultural realities of the communities they were meant to serve.\n\nThe gap was not a shortage of theory - it was a failure of translation. Complex frameworks like the Socio-Ecological Model, Behaviour Change Techniques, and theories of change needed to be made tangible, participatory, and memorable for frontline practitioners who operate in resource-constrained environments.",
      quote: {
        text: "The challenge wasn't teaching SBC - it was making it stick. We needed a language that everyone already spoke.",
      },
    },
    strategy: {
      heading: "The Strategy",
      intro: "We used cricket - the region's most beloved sport - as a universal metaphor to make social behaviour change principles accessible, memorable, and genuinely fun to apply in the field.",
      steps: [
        { number: "01", title: "Concept Mapping", description: "Mapping core SBC theory to cricket analogies - from team strategy (stakeholder analysis) to match conditions (enabling environment) to player roles (community actors)." },
        { number: "02", title: "Toolkit Development", description: "Designing a suite of practical, visually rich tools - scorecards, prompt cards, facilitator guides - that made real SBC methodology hands-on and participatory." },
        { number: "03", title: "Workshop Design", description: "Creating interactive workshop formats where participants learned SBC through cricket-themed exercises, group scoring, and competitive team challenges." },
        { number: "04", title: "Master Trainer Cascade", description: "Training master trainers to deliver the SBC Cricket workshop independently - building sustainable capacity across UNICEF country offices and partner organisations." },
      ],
    },
    work: {
      heading: "The Intervention",
      body: "White Rice designed and produced a complete SBC Cricket training ecosystem for UNICEF - from the core facilitator guidebook to cricket-themed scorecards, prompt cards, and behaviour change technique posters in both English and Urdu. Every tool was designed for active, hands-on use in workshop settings.",
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
      downloadLink: {
        label: "Download SBC Facilitators Guidebook",
        url: "/downloads/SBC-Facilitators-Guidebook.pdf",
      },
    },
    impact: {
      heading: "The Impact",
      body: "The SBC Cricket toolkit transformed how practitioners engage with behaviour change methodology - making abstract theory actionable in the field. The toolkit has been adopted across UNICEF country offices and partner organisations across South Asia.",
      metrics: [
        { value: 2000, suffix: "+", label: "Practitioners Trained" },
        { value: 12, suffix: "", label: "Countries Reached" },
        { value: 500, suffix: "+", label: "Toolkits Distributed" },
        { value: 91, suffix: "%", label: "Usefulness Rating" },
      ],
      quote: { text: "For the first time, my team could explain behaviour change theory to community health workers - using a language they already loved.", attribution: "UNICEF SBC Specialist" },
      closingNote: "The SBC Cricket model established a replicable framework for making complex development methodology accessible through culturally resonant metaphor.",
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
    year: "2023 - 2024",
    tags: ["Mumkin", "CARE International", "Mastercard Foundation", "UBank", "Strivers Programme", "Women Entrepreneurs", "Micro-Enterprise", "HCD Research", "Digital Financial Inclusion", "Brand Identity", "Digital Campaign", "2M Reach", "Microfinance", "Skills Training", "Mentorship", "Pakistan"],
    challenge: {
      heading: "The Challenge",
      body: "Pakistan's micro-entrepreneur landscape is vast, diverse, and systematically underserved. Women who run small enterprises \u2014 from tailoring and food preparation to handicrafts and home-based retail \u2014 are often the primary or sole income earners in their households, but operate entirely outside formal financial systems, without access to credit, digital commerce, or business development support.\n\nThe challenge for the campaign was as much about perception as it was about access. Many of these women had never been told that formal financial services, business training, or digital commerce were options available to them. The programme existed. But without a compelling, aspirational, and culturally resonant campaign to connect women with it, it would reach only those who were already connected \u2014 not the millions who needed it most.\n\nWhite Rice's specific challenge was to translate what we learned in the HCD research \u2014 the real barriers, the real aspirations, the real language women used to talk about their businesses \u2014 into a brand and campaign that felt like it was built for them, not deployed at them.",
      quote: {
        text: "These women were not running businesses despite every barrier. They were running businesses because of their own resourcefulness. The programme's job was not to teach them to be entrepreneurs. It was to remove the obstacles that were limiting the entrepreneurs they already were.",
      },
    },
    strategy: {
      heading: "The Strategy",
      intro: "Before we built the campaign, we listened to the women it was built for.",
      steps: [
        {
          number: "01",
          title: "Field Immersion",
          description: "Embedded research with women micro-entrepreneurs across diverse contexts \u2014 urban, peri-urban, and rural \u2014 observing their businesses, homes, and daily routines.",
        },
        {
          number: "02",
          title: "Journey Mapping",
          description: "Mapping the complete entrepreneur journey \u2014 from the first idea to current operation \u2014 identifying every barrier to growth, every moment of friction, and every unmet need.",
        },
        {
          number: "03",
          title: "Barrier Analysis",
          description: "Identifying the specific challenges blocking growth: access to credit, digital literacy gaps, market connectivity, mobility constraints, family dynamics, and confidence.",
        },
        {
          number: "04",
          title: "Aspiration Research",
          description: "Understanding what these women wanted their businesses \u2014 and their lives \u2014 to look like. The dreams that were driving them, and the language they used to articulate them.",
        },
        {
          number: "05",
          title: "Insight Translation",
          description: "Translating field learnings into design principles for the Mumkin brand, campaign strategy, and programme communication \u2014 ensuring every decision traced back to a real insight.",
        },
      ],
    },
    work: {
      heading: "The Intervention",
      body: "The Mumkin digital campaign was the culmination of the HCD research \u2014 every creative decision traced back to something a real entrepreneur had said, felt, or shown us. The campaign was aspiration-first: it led with the dream, not the product. It showed women who looked like the target audience, in situations they recognised, having the conversations about their businesses that they were already having privately.\n\nThe campaign's job was not to explain the programme. It was to make women feel seen \u2014 and then give them a path forward. The brand assets, content strategy, and digital channel mix were all designed with one objective: reaching the right women, in the right moment, with a message that felt like it was meant for them.",
      deliverables: [
        "Human-Centred Design Research",
        "Entrepreneur Journey Mapping",
        "Mumkin Brand Identity",
        "Full Brand Asset Suite",
        "Campaign Strategy",
        "Digital Campaign Design",
        "Key Message Development",
        "Content Production",
        "Aspiration-Led Communication",
      ],
    },
    impact: {
      heading: "The Impact",
      body: "Mumkin demonstrated what happens when you design a programme's communication from the inside out \u2014 starting with deep understanding of the people you are trying to reach, and building the brand and campaign from that understanding rather than from institutional assumptions about what micro-entrepreneurs need to hear. Two million entrepreneurs is a reach figure. What it represents is two million women who saw a campaign that felt like it was speaking to them directly, and found a door that had not been visible before.",
      metrics: [
        { value: 2, suffix: " Million+", label: "Entrepreneurs reached through the Mumkin digital campaign \u2014 connected to financial services, training, mentorship, and market access." },
        { value: 0, suffix: "", prefix: "", label: "A brand identity built from real HCD field research \u2014 every creative decision traced to a real insight from a real entrepreneur's real life." },
        { value: 0, suffix: "", prefix: "", label: "Sustained content programme keeping enrolled entrepreneurs connected and motivated across the full cohort lifecycle \u2014 in person and digitally." },
        { value: 0, suffix: "", prefix: "", label: "A brand that did the most important job: made women feel that the resources, the training, the credit, and the dream of a bigger business were all within their reach." },
      ],
      closingNote: "Micro-entrepreneurs in Pakistan don't need to be taught ambition. They need to be shown the door that was always there but never pointed out. White Rice's job was to find that door in the research, name it with a brand, and open it wide enough that 2 million women could walk through.",
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
