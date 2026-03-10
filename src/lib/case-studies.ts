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

export interface CaseStudyData {
  slug: string;
  year: string;
  tags: string[];

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

  /* 2 ─ Awaz Programme / UK Aid */
  {
    slug: "awaz-programme",
    year: "2010 - 2021",
    tags: ["Citizen Accountability", "UK Aid", "Community Mobilisation", "Women's Leadership"],
    challenge: {
      heading: "The Challenge",
      body: "Pakistan's marginalised communities -- particularly women and religious minority groups -- face compounding exclusions: under-represented in local government, absent from political decision-making, unconnected to media, and without channels to raise community challenges. For women, the barriers are layered: social norms restrict mobility, low literacy limits access to information, and deep-rooted cultural beliefs keep them from politics and public life.\n\nStandard advocacy approaches -- workshops, pamphlets, one-off training events -- had failed to shift entrenched power dynamics. What was needed was not more awareness, but sustained infrastructure for voice: tools, platforms, and peer networks that could give marginalised communities a channel to decision-makers and the confidence to use it.",
      quote: {
        text: "These communities were not voiceless. They had never been given a channel that reached the right ears. Awaz was about building that channel -- and the confidence to use it.",
      },
    },
    strategy: {
      heading: "The Strategy",
      intro: "The Awaz strategy treated communities not as beneficiaries to be informed, but as agents to be activated. The programme operated across four simultaneous registers: grassroots capacity-building, programme documentation, platform creation, and media and advocacy linkage.",
      steps: [
        { number: "01", title: "Community Mobilisation Toolkit", description: "A comprehensive, field-tested toolkit designed for frontline workers operating in low-literacy contexts -- visual, participatory, and built to function without dependence on external facilitators." },
        { number: "02", title: "Documentaries & Animation", description: "Capturing community transformation through documentary film and animation -- not as communications afterthoughts, but as evidence of change that could be used for advocacy and replication." },
        { number: "03", title: "Awaz iReporter Platform", description: "Pakistan's first community citizen reporting platform -- designed, built, and deployed by White Rice -- enabling citizens to document and report local issues directly to decision-makers." },
        { number: "04", title: "Resource & Campaign Materials", description: "Multi-platform communication materials bridging grassroots mobilisation and national-level advocacy, ensuring community voices reached media and policymakers." },
      ],
    },
    work: {
      heading: "The Work",
      body: "White Rice served as the creative and communication partner for the Awaz programme from its inception. Over more than a decade of continuous engagement, White Rice designed grassroots mobilisation tools for frontline workers, produced documentary films and animation series capturing community transformation, built and deployed the Awaz iReporter platform, and connected community voices directly to media outlets and decision-makers.",
      deliverables: [
        "SBC Campaign Strategy",
        "Community Mobilisation Toolkit",
        "FLW Training Toolkit",
        "Documentaries",
        "Animation Series",
        "Awaz iReporter Platform",
        "Citizen Journalism Training",
        "Resource & Communication Materials",
        "Media Linkage & Advocacy",
      ],
    },
    impact: {
      heading: "Impact",
      metrics: [
        { value: 15000000, suffix: "+", label: "People Reached" },
        { value: 13, suffix: "", label: "Districts Across Punjab & KPK" },
        { value: 10, suffix: "+", label: "Years of Continuous Programming" },
        { value: 1, suffix: "", label: "First Citizen Journalism Platform" },
      ],
      closingNote: "The impact of Awaz lives in the woman who stood up in a union council meeting for the first time, in the school repaired because a community member filmed its broken roof.",
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

  /* 3 ─ The First 8 Years / UNICEF ECD */
  {
    slug: "unicef-ecd",
    year: "2022 - 2026",
    tags: ["Early Childhood", "UNICEF", "Positive Parenting", "Fatherhood"],
    challenge: {
      heading: "The Challenge",
      body: "Pakistan's early childhood development crisis is not a knowledge gap -- it is a behaviour gap. Responsive caregiving, stimulation through play, reading together, and engaging fathers in child development remain absent in millions of households across the country. Existing ECD programmes were fragmented, inconsistent in quality, and almost universally excluded fathers.\n\nThe scale of the challenge is staggering: with one of the world's largest under-five populations, Pakistan's failure to invest in the first eight years has compounding consequences for education, health, and economic productivity.",
      quote: {
        text: "Parents in Pakistan are not indifferent to their children's development. They simply have never been shown what it looks like.",
      },
    },
    strategy: {
      heading: "The Strategy",
      intro: "The programme strategy was built on massive co-creation across all provinces, designing for the full socio-ecological system, ensuring everything was built to be owned by government, and deliberately bringing fathers into the conversation.",
      steps: [
        { number: "01", title: "Co-Creation Across All Provinces", description: "Extensive formative research and co-creation workshops bringing together parents, frontline workers, government officials, and community leaders across every province." },
        { number: "02", title: "Design for the Full System", description: "Intervene at policy, community, household, and individual layers simultaneously -- not sequentially. Behaviour change that targets only one layer fails." },
        { number: "03", title: "Built to Be Owned", description: "Every design decision was made with government adoption and long-term sustainability in mind. Materials, training systems, and monitoring tools were built for institutional handover." },
        { number: "04", title: "Bring Fathers In", description: "The programme was explicitly designed to engage fathers as active participants in early childhood development -- not as secondary supporters, but as essential caregivers." },
      ],
    },
    work: {
      heading: "The Work",
      body: "White Rice designed the national SBC architecture for UNICEF's early childhood development programme. The work spanned strategy, content creation, and systems design: from Pakistan's first parenting film broadcast on Geo Network to the Peeka Boo puppet series, ClayLabs, a 12-week digital FLW training, WhatsApp behaviour nudges, and a 22-milestone coaching toolkit.",
      deliverables: [
        "National SBC Strategy",
        "Role of the Father Film",
        "Peeka Boo ECD Series",
        "ClayLabs Programme",
        "12-Week Digital FLW Training",
        "WhatsApp Behaviour Nudges",
        "22-Milestone Coaching Toolkit",
        "Community Film Screenings",
        "Wall Chalkings & Branding",
      ],
    },
    impact: {
      heading: "Impact",
      metrics: [
        { value: 20000000, suffix: "", label: "Families Targeted by 2026" },
        { value: 1000, suffix: "+", label: "Frontline Workers Trained" },
        { value: 10, suffix: "+", label: "ClayLabs Scaled" },
        { value: 62000000, suffix: "+", label: "Reach via Geo Network" },
      ],
      closingNote: "This is White Rice's most ambitious and most impactful programme to date. It demonstrated that social behaviour change can shift how an entire nation understands the first eight years of a child's life.",
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
    tags: ["Parental Engagement", "UNICEF", "WhatsApp", "Education"],
    challenge: {
      heading: "The Challenge",
      body: "Parental engagement in Pakistan's public school system is structurally limited. Economic pressure forces parents to prioritise immediate livelihood over education. Low literacy among mothers restricts their ability to support learning at home. Teachers managing 50+ students have minimal capacity to build parent relationships. Fathers are largely absent from their children's educational lives.\n\nThe result is a cycle of disengagement: parents see education as disconnected from economic reality, teachers see parents as uninvolved, and children fall through the gap.",
      quote: {
        text: "Parents consider education a fruitless effort -- there are examples in every home where someone who completed their MA or BS is unemployed.",
      },
    },
    strategy: {
      heading: "The Strategy",
      intro: "The programme was built around the Socio-Ecological Model, with the Behavioural Driver Model framing interventions across psychological, sociological, and environmental dimensions.",
      steps: [
        { number: "01", title: "Start with Aspiration", description: "A Future Visioning exercise -- asking parents to imagine their child's life 10 years ahead -- reframed education from a cost to an investment, creating emotional momentum." },
        { number: "02", title: "WhatsApp as Backbone", description: "A 30-day habit challenge delivered through WhatsApp combined microlearning, gamification, and peer discussion to build daily engagement habits." },
        { number: "03", title: "Teachers as Champions", description: "Teachers were trained with practical tools and a new understanding of their bridge role between school and home." },
        { number: "04", title: "Peer-to-Peer as Sustaining Force", description: "P2P gatherings created social permission for fathers to engage in their children's education, normalising involvement through community demonstration." },
      ],
    },
    work: {
      heading: "The Work",
      body: "White Rice served as SBC Design, Co-Creation, and Content Lead for Walidain HumQadam. The team conducted 4-province co-creation workshops, designed the SBC Theory of Change, built the WhatsApp engagement programme, developed the vision board methodology, created the teacher training curriculum, and redesigned Parent-Teacher Meetings.",
      deliverables: [
        "Formative Research",
        "4-Province Co-Creation Workshops",
        "SBC Theory of Change",
        "WhatsApp Programme Design",
        "Vision Board Methodology",
        "Teacher Training Programme",
        "PTM Framework Redesign",
        "P2P Community Sessions",
        "Digital Campaign",
      ],
    },
    impact: {
      heading: "Impact",
      metrics: [
        { value: 13998, suffix: "", label: "Parents Reached" },
        { value: 6400000, suffix: "+", label: "Digital Campaign Reach" },
        { value: 550, suffix: "+", label: "Vision Canvases Created" },
        { value: 250, suffix: "", label: "Champion Teachers Trained" },
      ],
      closingNote: "Walidain HumQadam proved that parental engagement is not an infrastructure problem. It is a behaviour change problem -- one that starts with aspiration, is sustained through habit, and is scaled through technology.",
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

  /* 7 ─ Apni Kahani / UNFPA Transgender */
  {
    slug: "unfpa-transgender",
    year: "2020 - 2021",
    tags: ["HIV Prevention", "Animation", "UNFPA", "Khawaja Sira"],
    challenge: {
      heading: "The Challenge",
      body: "Pakistan's Khawaja Sira community lives at the intersection of social marginalisation, economic precarity, and a healthcare system that failed them. Existing HIV prevention materials were generic, clinical, and created without community input. They used neither the community's language (Farsi) nor their cultural references.\n\nMyths were widespread, screening was avoided, and peer conversations were nonexistent. The challenge was not a communications problem -- it was a trust, representation, and shame problem.",
      quote: {
        text: "Standard awareness campaigns don't work when the community has never seen themselves represented, has no reason to trust the messenger, and carries a lifetime of shame around the subject being discussed.",
      },
    },
    strategy: {
      heading: "The Strategy",
      intro: "We spent 3 months inside the community before a single frame was drawn. Ethnographic observation spanning 50+ days, in-depth interviews, and co-creation sessions informed four pillars: entertainment over instruction, peer-led facilitation, radical cultural authenticity, and an indirect approach to taboo subjects.",
      steps: [
        { number: "01", title: "Ethnographic Research", description: "50+ days of direct shadowing across Lahore and Karachi, building trust and understanding the lived realities of the Khawaja Sira community." },
        { number: "02", title: "Co-Creation Sessions", description: "Community members as active design partners contributing storylines, characters, and language to ensure authentic representation." },
        { number: "03", title: "Animation Production", description: "6-part drama series produced with community voiceovers and co-created illustrations, rooted in the community's own visual and narrative language." },
        { number: "04", title: "Peer Facilitation Design", description: "Structured question guides designed for 30-40 minute post-episode conversations led by trained peer facilitators." },
      ],
    },
    work: {
      heading: "The Work",
      body: "We created Apni Kahani -- a 6-episode animation drama series designed to open the conversations that HIV prevention requires. Each episode ran 5-6 minutes and was followed by a structured peer-facilitated discussion session. Episodes: Community & Belonging, The Myth and the Fear, The Moment of Choice, Seeking Help, What We Don't Say, and Our Responsibility.",
      deliverables: ["Ethnographic Research", "Script & Storyline Development", "6-Part Animation Series", "Illustration & Visual Design", "Peer Educator Facilitation Guide", "Behaviour Change Strategy", "Farsi Language Integration", "Community Voiceovers"],
    },
    impact: {
      heading: "Impact",
      metrics: [
        { value: 6, suffix: "", label: "Episode Animation Series" },
        { value: 90, suffix: "", label: "Days of Ethnographic Research" },
        { value: 35, suffix: "", label: "Minutes Average Conversation per Episode" },
        { value: 1, suffix: "", label: "National Standard Tool" },
      ],
      quote: { text: "The episode was five minutes. The conversation that followed was forty. That is the gap this programme was designed to open.", attribution: "White Rice Impact" },
      closingNote: "Apni Kahani demonstrated that the most powerful behaviour change tool is not a message -- it is a mirror. When a marginalised community sees itself represented with honesty, dignity, and cultural depth, the conversation that has always needed to happen finally can.",
    },
    gallery: {
      heading: "Gallery",
      images: [
        { src: "/images/timeline/2020.png", alt: "Apni Kahani animation series artwork for UNFPA Khawaja Sira HIV prevention programme", span: "wide" },
      ],
    },
  },

  /* 8 ─ Clean & Green Punjab */
  {
    slug: "unicef-clean-green",
    year: "2019 - 2021",
    tags: ["WASH & Environment", "UNICEF", "Punjab Government", "Digital SBC"],
    challenge: {
      heading: "The Challenge",
      body: "Punjab's Clean & Green initiative had a clear mandate: shift five critical behaviours -- handwashing, ending open defecation, safe drinking water, tree plantation, and waste disposal -- across Pakistan's most populous province.\n\nThe problem was not just scale but sustainability. One-time change is easy; long-term change is hard. Existing community mobilisers lacked a proper SBC framework. Then COVID-19 arrived.",
      quote: {
        text: "Getting a community to wash their hands once is a trick. Getting them to wash their hands every day for the rest of their lives -- that requires changing what feels normal.",
      },
    },
    strategy: {
      heading: "The Strategy",
      intro: "We began with immersive design research -- spending days and nights with households. From this emerged the central behavioural persona 'Mitti 2' (the Jugaad Innovator) -- frugal, resourceful, solutions-oriented. Our strategy mapped across the socio-ecological model.",
      steps: [
        { number: "01", title: "Immersive Design Research", description: "Observational methods embedded within households to understand behaviour in its actual context, not its reported version." },
        { number: "02", title: "Sustainability Over Reach", description: "Designing for long-term habit formation rather than short-term awareness, ensuring behaviours outlast the programme." },
        { number: "03", title: "Community as the Engine", description: "Leveraging indigenous methods and human agency to make communities the drivers of their own behaviour change." },
        { number: "04", title: "Digital as Core Channel", description: "Digital tools integrated from the outset as a primary delivery mechanism, not treated as a backup or afterthought." },
      ],
    },
    work: {
      heading: "The Work",
      body: "We designed a comprehensive SBC training programme for frontline workers, established village watch committees for community-led accountability, and executed a full digital pivot during COVID-19 -- deploying youth digital ambassadors and local cable TV content to maintain momentum.",
      deliverables: ["SBC Strategy & FLW Training", "Behavioural Persona Design (Mitti 2)", "Group Facilitation Sessions", "Village Watch Committees", "Digital & Social Media Strategy", "Youth Digital Ambassadors", "Mobile Phone Content", "Local Cable TV Programming", "COVID-19 Digital Pivot Design"],
    },
    impact: {
      heading: "Impact",
      metrics: [
        { value: 2000000, suffix: "+", label: "People Directly Reached" },
        { value: 34000000, suffix: "+", label: "Digital Platform Engagement" },
        { value: 5, suffix: "", label: "Target Behaviours Simultaneously" },
        { value: 1, suffix: "", label: "COVID-Proof Digital Pivot" },
      ],
      closingNote: "The programme demonstrated what becomes possible when SBC is designed for sustainability -- when communities are treated as the engine of change, not the audience for it.",
    },
    gallery: {
      heading: "Gallery",
      images: [
        { src: "/images/timeline/2019.png", alt: "Clean & Green Punjab behaviour change campaign", span: "wide" },
      ],
    },
  },

  /* 9 ─ The Diverse Dastarkhwan / FAO */
  {
    slug: "fao-road-safety",
    year: "2019 - 2020",
    tags: ["Food & Nutrition", "FAO", "Balochistan", "Stunting Prevention"],
    challenge: {
      heading: "The Challenge",
      body: "Balochistan's stunting rate sits at approximately 50%. The paradox: communities are not food insecure -- they have strong food traditions and adequate calories from meat and staples. The problem is dietary diversity. Vegetables, legumes, and micronutrient-rich foods are largely absent.\n\nThree distinct communities -- Baloch, Pashtun, and Makrani -- each with different languages, food customs, and gender dynamics meant a single approach would fail.",
      quote: {
        text: "You cannot ask a mother to change how she feeds her family without first understanding why she feeds them the way she does -- and what that food means to her.",
      },
    },
    strategy: {
      heading: "The Strategy",
      intro: "We conducted intensive qualitative research across all three cultural contexts, mapping food practices, cooking rituals, and deeply held beliefs about nutrition.",
      steps: [
        { number: "01", title: "Integrate Don't Replace", description: "Showing mothers how new ingredients sit alongside existing traditions, making dietary diversity feel like an extension of what they already do." },
        { number: "02", title: "Work with What's Already There", description: "Identifying locally available vegetables and ingredients as building blocks for change, rather than introducing unfamiliar foods." },
        { number: "03", title: "Make Behaviour Change Visible and Joyful", description: "Live cooking demonstrations rather than lectures -- making the new behaviour something to experience, taste, and celebrate." },
        { number: "04", title: "Peer-Led Change", description: "Identifying positive deviants within the community as living proof that dietary diversity is possible and desirable." },
      ],
    },
    work: {
      heading: "The Work",
      body: "We designed a 12-week programme: Weeks 1-3 laid the foundation through household visits, Weeks 4-6 introduced community cooking demonstrations, Weeks 7-9 positioned women as recipe innovators, and Weeks 10-12 elevated positive deviants to lead peer change. Kitchen gardens were established to sustain dietary diversity.",
      deliverables: ["12-Week Field Facilitator Programme", "Household 1-on-1 Visits", "Bi-Weekly Cooking Demonstrations", "Community Kitchen Gardens", "Positive Deviance Peer Educators", "Pregnancy & Lactation Nutrition Guidance", "Illustrated Communication Tools", "Multi-Culture Contextualisation"],
    },
    impact: {
      heading: "Impact",
      metrics: [
        { value: 11000, suffix: "", label: "Families Directly Reached" },
        { value: 100000, suffix: "", label: "People Within Target Families" },
        { value: 3, suffix: "", label: "Cultures Successfully Adapted" },
        { value: 1, suffix: "", label: "Programme Scaled to New Districts" },
      ],
      closingNote: "The Dastarkhwan programme demonstrated that when you design behaviour change around what a community already has -- its cooks, its crops, its food pride -- the intervention feels less like a programme and more like a community discovering what it was always capable of.",
    },
    gallery: {
      heading: "Gallery",
      images: [
        { src: "/images/timeline/2018.png", alt: "The Diverse Dastarkhwan nutrition programme in Balochistan", span: "wide" },
      ],
    },
  },

  /* 10 ─ Dunia Aali Larki / Oxfam */
  {
    slug: "oxfam-dunia-aali-larki",
    year: "2014 - 2018",
    tags: ["Girls' Education", "Oxfam", "Advocacy", "Movement Building"],
    challenge: {
      heading: "The Challenge",
      body: "36 million children were out of school in Pakistan, and girls represented the majority. The problem was not awareness -- it was social permission, political urgency, and grassroots momentum.\n\nOxfam needed more than a public awareness campaign. Inspired by the Nike Girl Effect model, and with the 16 Days of Activism providing the launchpad, the ambition was to build a sustained movement for girls' education across Pakistan.",
    },
    strategy: {
      heading: "The Strategy",
      intro: "Our strategy was built on three convictions: storytelling moves people, movements need architecture, and the socio-ecological model is a design brief.",
      steps: [
        { number: "01", title: "Animation as the Movement's Voice", description: "An emotional engine that crossed language, class, and media format -- giving the movement a visual identity and narrative that anyone could share." },
        { number: "02", title: "Multi-Tier Simultaneous Activation", description: "School clubs, policy dialogues, rallies, and digital campaigns running in parallel to build pressure across every level of the system." },
        { number: "03", title: "Children as Advocates", description: "Girls positioned as the campaign's most powerful advocates -- not objects of charity, but agents of their own right to education." },
        { number: "04", title: "Stories Amplified by Digital", description: "A distribution system designed to take real stories from communities and amplify them through digital channels to national audiences." },
      ],
    },
    work: {
      heading: "The Work",
      body: "We produced an animated campaign film that became the movement's emotional centrepiece, secured a $1M grant to fund a 4-year advocacy campaign, and built the full movement architecture -- from school clubs and grassroots mobilisation to policy dialogues and Pakistan's first Children's Assembly.",
      deliverables: ["Campaign Strategy & Creative Direction", "Animation Production", "Movement Architecture", "Policy Dialogue Design", "Grassroots Mobilisation", "School Club Programme", "Children's Assembly Design", "Mass Media Strategy", "Digital Amplification"],
    },
    impact: {
      heading: "Impact",
      metrics: [
        { value: 1000000, suffix: "", prefix: "$", label: "Grant Secured" },
        { value: 4, suffix: "", label: "Years of National Movement" },
        { value: 36000000, suffix: "", label: "Out-of-School Children Addressed" },
        { value: 1, suffix: "", label: "First Children's Assembly in Pakistan" },
      ],
      closingNote: "Dunia Aali Larki accomplished something most advocacy campaigns do not: it outlasted itself. The programme ended, but the movement it built did not.",
    },
    gallery: {
      heading: "Gallery",
      images: [
        { src: "/images/timeline/2017.png", alt: "Dunia Aali Larki girls' education advocacy campaign", span: "wide" },
      ],
    },
  },

  /* 11 ─ Breaking Barriers / UNICEF MHH */
  {
    slug: "unicef-mhh",
    year: "2021 - 2023",
    tags: ["Menstrual Health", "UNICEF", "Co-Creation", "KAB Framework"],
    challenge: {
      heading: "The Challenge",
      body: "Menstrual health in rural Pakistan is a deeply entrenched social norm problem shaped by shame, silence, misinformation, and absence of dialogue. A 2021-2022 national study identified four root causes: socio-cultural norms, product affordability, accessibility barriers, and inadequate WASH infrastructure.\n\nPhase II scaled from Sindh's Khairpur to conservative Rajanpur (Punjab) and remote Battagram (KPK).",
      quote: {
        text: "In Pakistan, nearly half of all girls experience their first period with no prior knowledge of menstruation.",
      },
    },
    strategy: {
      heading: "The Strategy",
      intro: "Three foundational commitments guided the programme: co-creation before design; a KAB (Knowledge-Attitude-Behaviour) framework; and the radical inclusion of fathers as enabling participants.",
      steps: [
        { number: "01", title: "Co-Creation First", description: "A 3-day embedded workshop in Khairpur brought together women, girls, fathers, and community influencers to co-design every element of the programme." },
        { number: "02", title: "The KAB Arc", description: "Three staged sessions per audience -- Knowledge in large groups, Attitude in smaller breakouts, Behaviour one-to-one with personal pledges." },
        { number: "03", title: "Fathers as Enabling Environment", description: "Fathers were treated as equal participants -- not obstacles. Their engagement was designed from the outset as a core pillar." },
        { number: "04", title: "Storytelling as Primary Vehicle", description: "A girls' guide built around Sara and Saba characters provided an emotionally safe entry point for engagement with menstrual health." },
      ],
    },
    work: {
      heading: "The Work",
      body: "White Rice served as SBC strategy and creative partner across the full programme lifecycle. We designed Pakistan's first MHH SBC Toolkit -- including conversation flip books, a girls' storybook, a CRP training programme, and a monitoring system built for provincial scale-up.",
      deliverables: ["National Study & Formative Research", "Community Co-Creation Workshops", "SBC Toolkit Design", "KAB Framework Design", "CRP Training Programme", "Conversation Flip Books", "Girls' Storybook (Sara & Saba)", "Monitoring & Data System", "Provincial Scale-Up Design"],
    },
    impact: {
      heading: "Impact",
      metrics: [
        { value: 90, suffix: "%", label: "Toolkit Effectiveness Rate" },
        { value: 3, suffix: "", label: "Provinces Piloted" },
        { value: 3000, suffix: "+", label: "Participants Reached" },
        { value: 1, suffix: "", label: "National MHH Toolkit Created" },
      ],
      closingNote: "Every assumption about male resistance was disproved -- fathers emerged as the programme's most engaged and vocal participants.",
    },
    gallery: {
      heading: "Gallery",
      images: [
        { src: "/images/timeline/2016.png", alt: "UNICEF MHH programme co-creation workshop", span: "wide" },
      ],
    },
  },

  /* 12 ─ Springster / Nike Girls Effect */
  {
    slug: "nike-girls-effect",
    year: "2013 - 2015",
    tags: ["Girls' Digital Content", "Nike Foundation", "Girl Effect", "Mobile-First"],
    challenge: {
      heading: "The Challenge",
      body: "Pakistan's adolescent girls face information poverty. Questions about bodies, safety, money, and the right to speak are precisely the ones that home, school, and community offer the least trustworthy answers to. Topics too sensitive for open conversation, too personal for the classroom, too complex for existing internet content.\n\nNike Foundation's Springster programme needed Pakistani localisation reflecting full diversity -- Muslim and Christian girls, Lahore and Karachi, in school and dropped out.",
    },
    strategy: {
      heading: "The Strategy",
      intro: "Before content was written, we spent time in schools conducting HCD research across diverse populations. Four pillars guided everything: Girls as Designers, Mobile-First by Design, Storytelling as Medium, and Diversity as Non-Negotiable.",
      steps: [
        { number: "01", title: "In-School HCD Research", description: "Co-creation sessions across religious and socioeconomic backgrounds -- Muslim and Christian girls, urban and rural contexts." },
        { number: "02", title: "Girls as Content Designers", description: "Girls participated through moodboarding, story co-creation, and live artwork sessions -- shaping themes, characters, and tone." },
        { number: "03", title: "100+ Mobile-First Stories", description: "Over one hundred unique stories covering financial wellbeing, voice & agency, safety, and health -- all designed for small screens." },
        { number: "04", title: "Internet.org Deployment", description: "All content deployed with zero data required, accessible on any phone including basic handsets on 2G networks." },
      ],
    },
    work: {
      heading: "The Work",
      body: "White Rice led the full creative and research cycle for Springster Pakistan. Over 100 unique content stories were co-created with girls across diverse communities, designed for mobile-first consumption and stress-tested across religious, geographic, and socioeconomic diversity.",
      deliverables: ["Human-Centred Design Research", "In-School Co-Creation Sessions", "Brand & Platform Identity", "100+ Content Stories", "Mobile-First Design", "Visual & Illustrative Design", "Multi-Community Contextualisation"],
    },
    impact: {
      heading: "Impact",
      metrics: [
        { value: 1000000, suffix: "+", label: "Girls Reached in Pakistan" },
        { value: 100, suffix: "+", label: "Co-Created Stories" },
        { value: 4, suffix: "", label: "Content Topics Covered" },
        { value: 1, suffix: "", label: "Multi-Faith Digital Platform" },
      ],
      closingNote: "The feedback from girls consistently returned to one theme: Springster was a place where they could be curious about the things that actually mattered to them, without shame or judgement.",
    },
    gallery: {
      heading: "Gallery",
      images: [
        { src: "/images/timeline/2013.png", alt: "Springster Pakistan mobile-first content platform", span: "wide" },
      ],
    },
  },

  /* 13 ─ Spring Accelerator / USAID */
  {
    slug: "spring-program",
    year: "2015 - 2017",
    tags: ["Startup Acceleration", "USAID", "HCD", "Girls 10-19"],
    challenge: {
      heading: "The Challenge",
      body: "Startups entering the cohort had initial prototypes and a clear sense of the problem. What they lacked was deep, contextual understanding of their actual end users -- adolescent girls aged 10-19. The challenge was to compress the user research and iteration cycle into a structured programme while operating as part of a 4-country consortium spanning Pakistan, Nepal, Kenya, and Tanzania.",
    },
    strategy: {
      heading: "The Strategy",
      intro: "Human-centred design methodology was applied as a practical, iterative process. Four principles guided every sprint: start with the user, prototype-test-repeat, value proposition as final test, global learning with local depth.",
      steps: [
        { number: "01", title: "User Journey Mapping", description: "Each startup mapped how target girls actually experienced the problem -- not how the startup assumed they did." },
        { number: "02", title: "Co-Creation with Users", description: "Girls participated directly in solution design, shaping features, language, and delivery mechanisms." },
        { number: "03", title: "Prototype & Testing", description: "Live demos tested with actual end users across multiple rounds, each iteration informed by direct feedback." },
        { number: "04", title: "Value Proposition Development", description: "The final value proposition for each startup was verified and user-grounded -- a pitch backed by real insight." },
      ],
    },
    work: {
      heading: "The Work",
      body: "White Rice served as HCD partner for the Pakistan cohort, working alongside 7 startups -- including EDCASA, Sabak, and LearnerBots -- through research, prototyping, user testing, iteration, and value proposition development. The engagement included a visit to Nepal for cross-country learning.",
      deliverables: ["User Journey Mapping", "Co-Creation with End Users", "Prototype Development", "Live User Testing", "Mockup & Demo Design", "Value Proposition Development", "Iterative Design Cycles", "Cross-Country Knowledge Exchange"],
    },
    impact: {
      heading: "Impact",
      metrics: [
        { value: 7, suffix: "", label: "Pakistan Cohort Startups" },
        { value: 4, suffix: "", label: "Countries in Consortium" },
        { value: 3, suffix: "+", label: "Startups Became Credible Ventures" },
        { value: 1, suffix: "", label: "Cross-Country Learning Exchange" },
      ],
      closingNote: "Several cohort startups -- including EDCASA, Sabak, and LearnerBots -- went on to become credible, operating organisations.",
    },
    gallery: {
      heading: "Gallery",
      images: [
        { src: "/images/timeline/2014.png", alt: "Spring Accelerator Pakistan cohort co-creation sessions", span: "wide" },
      ],
    },
  },

  /* 14 ─ Empowering Youth for Work / Oxfam IKEA */
  {
    slug: "oxfam-ikea-hcd",
    year: "2018 - 2020",
    tags: ["Youth Empowerment", "Oxfam", "IKEA Foundation", "HCD"],
    challenge: {
      heading: "The Challenge",
      body: "Youth unemployment in Pakistan's semi-urban and rural areas -- particularly climate-affected Punjab and Sindh -- is a system of interconnected barriers: limited market access, weak skills-employer connectivity, gender norms restricting girls' participation, and climate disruption.\n\nOxfam and the IKEA Foundation had a 5-year programme ambition but needed confidence the design was right before scale. Added complexity: the programme was running simultaneously in 4 countries.",
    },
    strategy: {
      heading: "The Strategy",
      intro: "The entire 5-year programme was treated as something to be designed before it was built. Four pillars: Partners as Designers, Productive Failure as Intelligence, Region-Specific Design, and Scale Only When Ready.",
      steps: [
        { number: "01", title: "Empathy & Field Research", description: "Immersive research with young people in climate-affected areas of Punjab and Sindh, building deep understanding of lived realities." },
        { number: "02", title: "Challenge Definition", description: "Cross-partner workshops synthesised field insights into clearly defined challenge statements reflecting regional specificity." },
        { number: "03", title: "Co-Creation & Prototyping", description: "Facilitated ideation with implementing partners and youth to co-design prototypes intended to fail instructively." },
        { number: "04", title: "Test, Learn & Scale", description: "Rigorous feedback loops and iterative testing produced final region-specific programme designs -- earned through iteration." },
      ],
    },
    work: {
      heading: "The Work",
      body: "White Rice led an 18-month HCD engagement structured around 6 quarterly design sprints. Two innovation hubs were established in Punjab and Sindh. Three youth pathways emerged: Entrepreneurs, Agri-Tech Youth, and Employability.",
      deliverables: ["HCD Strategy & Facilitation", "Quarterly Design Workshops", "Empathy & Field Research", "Challenge Definition", "Ideation & Co-Creation", "Prototyping", "Live User Testing", "Innovation Hub Design", "Implementing Partner Capacity Building"],
    },
    impact: {
      heading: "Impact",
      metrics: [
        { value: 10000, suffix: "+", label: "Young People Reached" },
        { value: 18, suffix: "", label: "Months of HCD Engagement" },
        { value: 2, suffix: "", label: "Innovation Hubs Established" },
        { value: 6, suffix: "", label: "Quarterly Design Sprints" },
      ],
      closingNote: "The HCD methodology White Rice developed became a replicable model -- proving that sustained design investment before programme scale is the most cost-effective path to impact.",
    },
    gallery: {
      heading: "Gallery",
      images: [
        { src: "/images/timeline/2012.png", alt: "Oxfam IKEA youth empowerment HCD workshops", span: "wide" },
      ],
    },
  },

  /* 15 ─ When They Can See / Sightsavers */
  {
    slug: "sightsavers-film",
    year: "2018 - 2020",
    tags: ["Eye Health Film", "Sightsavers", "Cannes Lions", "C Prime"],
    challenge: {
      heading: "The Challenge",
      body: "Vision problems in children are among the most reversible causes of learning difficulty and the most consistently undetected. In Pakistan, low parental awareness, limited school screening, and cultural barriers mean millions of children struggle to see.\n\nThe barrier is behavioural: a gap between vague awareness and the specific decision to take a child to an eye health provider.",
      quote: {
        text: "A child who cannot see cannot learn. But a child who cannot see clearly often doesn't know they are supposed to see differently. The problem is invisible -- until a film makes it unmissable.",
      },
    },
    strategy: {
      heading: "The Strategy",
      intro: "The most powerful health communication is discovered, not invented. Three-stage approach: deep research, rigorous co-creation, and production/distribution pairing Pakistan's best creative talent with scale.",
      steps: [
        { number: "01", title: "Deep Field Research", description: "Over 100 in-depth interviews with families, children, teachers, and eye health workers across Pakistan." },
        { number: "02", title: "Story Identification", description: "Two core stories chosen from 100+ interviews for their universality -- narratives that could carry emotional truth to the widest audience." },
        { number: "03", title: "Script & Community Testing", description: "Script woven from real verbatims and tested with community members before production began." },
        { number: "04", title: "Production & Launch", description: "Partnership with C Prime, well-known Pakistani actors, national premiere with government and media stakeholders." },
      ],
    },
    work: {
      heading: "The Work",
      body: "White Rice led creative strategy, research, and scriptwriting for Pakistan's first celebrity-fronted short film on early childhood vision screening. Produced with C Prime, the film continues screening in schools and communities across Pakistan.",
      deliverables: ["20+ Year Partnership", "Research & Data Collection", "Scriptwriting", "Community Pre-Testing", "Celebrity Collaboration", "Film Production Strategy", "Campaign Launch Design", "School & Community Rollout", "Government Stakeholder Engagement"],
    },
    impact: {
      heading: "Impact",
      metrics: [
        { value: 1000000, suffix: "+", label: "Views on C Prime Platform" },
        { value: 1, suffix: "", label: "Cannes Lions Winner" },
        { value: 100, suffix: "+", label: "Field Interviews Conducted" },
        { value: 20, suffix: "+", label: "Years of Sightsavers Partnership" },
      ],
      closingNote: "The film's greatest impact may be unmeasurable -- the children whose parents, after a school screening, booked an eye test they had never thought to arrange.",
    },
    gallery: {
      heading: "Gallery",
      images: [
        { src: "/images/timeline/2025/films-hero.jpg", alt: "Sightsavers eye health film production", span: "wide" },
      ],
    },
  },

  /* 16 ─ The Last Mile / Johns Hopkins */
  {
    slug: "johns-hopkins-animation",
    year: "2019 - 2021",
    tags: ["Global Health", "Johns Hopkins CCP", "Animation", "FLW Training"],
    challenge: {
      heading: "The Challenge",
      body: "Training content needed to be simultaneously universal and specific -- meaningful to health workers in Nairobi, Karachi, Cairo, and Birmingham. It must depict real situations without privileging any single cultural context, be producible in 4 languages without losing impact, and work on phone screens in the field.\n\nThe core tension was between specificity and universality. Health communication works through recognition -- a viewer needs to see themselves -- but a scenario too specific to one context alienates every other.",
      quote: {
        text: "The hardest design problem is not making something powerful. It is making something powerful that means the same thing to different people in different worlds -- and still moves all of them to act.",
      },
    },
    strategy: {
      heading: "The Strategy",
      intro: "White Rice worked closely with Johns Hopkins CCP's global teams. The animation style was deliberately culturally neutral. Scenarios were structured around decision moments. Four-language localisation was treated as a design requirement from the start.",
      steps: [
        { number: "01", title: "Global Stakeholder Collaboration", description: "Building understanding of field situations, community dynamics, and communication challenges across four deployment regions." },
        { number: "02", title: "Scenario Development", description: "Six episodes built around real immunisation challenges: vaccine hesitancy, community gatekeepers, geographic barriers, misinformation, missed doses, and peer advocacy." },
        { number: "03", title: "4-Language Production", description: "English, French, Urdu/Hindi, and Arabic -- each fully localised with culturally neutral visual design." },
        { number: "04", title: "Mobile-First Deployment", description: "Converted into a hands-on mobile reference guide, accessible offline for field use across 4 continents." },
      ],
    },
    work: {
      heading: "The Work",
      body: "A 6-episode animation series: The Resistant Household, The Gatekeeper, The Unreachable Village, The Misinformation Moment, The Second Visit, and The Community Champion. Each built around a real-world decision moment that frontline immunisation workers face daily.",
      deliverables: ["Creative Strategy & Communication Design", "6-Part Animation Series", "Scenario Development", "4-Language Localisation", "Mobile-First Reference Guide", "Global Stakeholder Collaboration", "UNICEF-Aligned Content"],
    },
    impact: {
      heading: "Impact",
      metrics: [
        { value: 250000, suffix: "", label: "Frontline Workers Trained" },
        { value: 6, suffix: "", label: "Episode Animation Series" },
        { value: 4, suffix: "", label: "Languages Localised" },
        { value: 4, suffix: "", label: "Continents Deployed" },
      ],
      closingNote: "The result was a training tool technically credible enough for Johns Hopkins and humanly compelling enough for a health worker at 6am on a difficult village visit.",
    },
    gallery: {
      heading: "Gallery",
      images: [
        { src: "/images/digital-training/digital-training01.JPG", alt: "Facilitator leading a training session for frontline health workers", span: "wide" },
        { src: "/images/digital-training/digital-training02.JPG", alt: "Camera operator filming a digital training session", span: "normal" },
      ],
    },
  },

  /* 17 ─ Barosakare / ICRC */
  {
    slug: "icrc-bharosa",
    year: "2018 - 2019",
    tags: ["Healthcare Safety", "ICRC", "HCD Research", "National Campaign"],
    challenge: {
      heading: "The Challenge",
      body: "When a patient's attendant strikes a doctor, it is rarely simple cruelty -- it is the end of a chain of frustration, confusion, fear, and unmet need. The attendant has been waiting hours, received no information, cannot find the right person to ask. Fear becomes frustration. Frustration becomes confrontation.\n\nHealthcare workers are understaffed, overstretched, managing dozens of patients with minimal support. When violence strikes, consequences ripple: doctors abandon work, other patients are neglected, the entire ward suffers.",
    },
    strategy: {
      heading: "The Strategy",
      intro: "A dual-pronged approach: hospital experience design to fix system failures that trigger violence, and a national behaviour change campaign to shift public attitudes before people arrive at hospital. White Rice embedded in JPMC Karachi and Lady Reading Hospital Peshawar for 2-3 days each.",
      steps: [
        { number: "01", title: "Embedded HCD Research", description: "Visual ethnography, shadowing, bodystorming, and becoming the patient at JPMC Karachi and Lady Reading Peshawar -- mapping every friction point in the hospital experience." },
        { number: "02", title: "Hospital Experience Design", description: "Patient journey mapping, wayfinding recommendations, behavioural nudges at high-friction points, and staff training on de-escalation." },
        { number: "03", title: "National Campaign Strategy", description: "Barosakare -- trust the healer -- repositioning the healthcare worker as a partner, not an obstacle. Empathy-building through dual-perspective storytelling." },
        { number: "04", title: "Multi-Channel Activation", description: "TV ad showing the full consequence chain, digital media, celebrity engagement, radio reaching low-income communities, and outdoor branding at hospitals." },
      ],
    },
    work: {
      heading: "The Work",
      body: "White Rice produced comprehensive experience design recommendations, a healthcare staff training framework, and the Barosakare national campaign. The TV ad showed the attendant's world, the break point, the ripple of consequences, the doctor's perspective, and a resolution built on empathy rather than blame.",
      deliverables: ["Embedded HCD Research", "Visual Ethnography", "Patient Journey Mapping", "Hospital Experience Design", "Healthcare Staff Training Design", "National Campaign Strategy", "TV Ad Production", "Celebrity Engagement", "Radio & Outdoor Campaign", "Digital Media"],
    },
    impact: {
      heading: "Impact",
      metrics: [
        { value: 4000000, suffix: "+", label: "People Reached" },
        { value: 100, suffix: "+", label: "Hospitals Influenced" },
        { value: 2, suffix: "", label: "Embedded Research Hospital Sites" },
        { value: 1, suffix: "", label: "National First Campaign" },
      ],
      closingNote: "The campaign's TV ad remains the most resonant piece of health communication on this issue ever produced in Pakistan -- because it trusted the audience enough to show them both sides of the story.",
    },
    gallery: {
      heading: "Gallery",
      images: [
        { src: "/images/timeline/2011.png", alt: "Barosakare national healthcare safety campaign", span: "wide" },
      ],
    },
  },

  /* 18 ─ Saaf Karachi Meri Zimmedari */
  {
    slug: "saaf-karachi-waste",
    year: "2022 - 2023",
    tags: ["Recycling & Waste", "Behaviour Change", "Community Mobilisation", "Karachi"],
    challenge: {
      heading: "The Challenge",
      body: "Recycling was not part of how Karachi's low-income communities understood waste. The concept of a Hariali Hub, dry versus wet waste, plastics turned into driveways -- all genuinely new. Open dumping was normalised, waste bins uncommon.\n\nThe campaign had to work across women managing household waste, men and youth influencing norms, local influencers, waste collectors, and government partners -- simultaneously.",
      quote: {
        text: "In a community that has never encountered recycling as a practice, the first job is not to motivate the behaviour. It is to make the behaviour imaginable.",
      },
    },
    strategy: {
      heading: "The Strategy",
      intro: "White Rice began with in-context qualitative research, mapping waste disposal practices and identifying where behaviour broke down. The framework operated across four simultaneous layers: household, community, mass media, and incentive architecture.",
      steps: [
        { number: "01", title: "Women at Home", description: "Primary waste managers targeted through household visits, kitchen nudges, colour-coded bins, and doorstickers for daily habit formation." },
        { number: "02", title: "Men & Youth", description: "Social norm influencers engaged through sports tournaments, youth clubs, festivals, and TikTok-led peer campaigns." },
        { number: "03", title: "Community Influencers", description: "Trusted local leaders and respected figures brought in as champions to create social permission for behaviour change." },
        { number: "04", title: "Waste Collectors", description: "Frontline system actors incentivised, recognised, and equipped as programme champions, not just operatives." },
      ],
    },
    work: {
      heading: "The Work",
      body: "A full-spectrum campaign: colour-coded bins, kitchen nudges, Clean Champion identity stickers, WhatsApp nudges, and a 360-degree channel strategy spanning wall chalkings, branded vehicles, TikTok influencers, celebrity endorsements, animation series, and youth festivals. Incentive architecture recognised champion households, top communities, mobiliser scorecards, and collector awards.",
      deliverables: ["SBC Strategy & Campaign Design", "Formative Research", "Community Mobilisation", "Household Nudge Design", "Colour-Coded Waste Bins", "Animation Production", "Social Media & TikTok Campaign", "Incentive & Rewards Architecture", "Youth Clubs & Events", "FLW Toolkit Design"],
    },
    impact: {
      heading: "Impact",
      metrics: [
        { value: 1, suffix: "", label: "Full Recycling Chain Incentivised" },
        { value: 360, suffix: "\u00B0", label: "Campaign Channel Coverage" },
        { value: 1, suffix: "", label: "Social Norm Shift Achieved" },
        { value: 1, suffix: "", label: "Hariali Hub Connection Made Visible" },
      ],
      closingNote: "What made this programme distinctive was the decision to treat recycling not as an environmental message but as a civic identity -- something Karachi's communities owned.",
    },
    gallery: {
      heading: "Gallery",
      images: [
        { src: "/images/timeline/2024/food-safety-hero.jpg", alt: "Saaf Karachi Meri Zimmedari community waste campaign", span: "wide" },
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
    tags: ["Women Entrepreneurship", "CARE International", "Mastercard Foundation", "Digital Financial Inclusion"],
    challenge: {
      heading: "The Challenge",
      body: "Pakistan's women micro-entrepreneurs -- tailoring, food preparation, handicrafts, home-based retail -- are often primary income earners but operate entirely outside formal financial systems, without access to credit, digital commerce, or business development support.\n\nThe challenge was perception as much as access. Many had never been told that formal financial services, training, or digital commerce were options available to them.",
      quote: {
        text: "These women were not running businesses despite every barrier. They were running businesses because of their own resourcefulness. The programme's job was to remove the obstacles limiting the entrepreneurs they already were.",
      },
    },
    strategy: {
      heading: "The Strategy",
      intro: "Deep HCD research embedded with women micro-entrepreneurs across urban, peri-urban, and rural contexts -- understanding real journeys, barriers, and aspirations before designing anything.",
      steps: [
        { number: "01", title: "Field Immersion", description: "Embedded research across diverse contexts -- observing businesses, homes, and daily routines of women micro-entrepreneurs." },
        { number: "02", title: "Journey & Barrier Mapping", description: "Mapping the complete entrepreneur journey -- identifying every barrier to growth, every moment of friction, and every unmet need." },
        { number: "03", title: "Aspiration Research", description: "Understanding what women wanted their businesses and lives to look like -- the dreams driving them and the language they used to articulate them." },
        { number: "04", title: "Brand & Campaign Design", description: "Translating field insights into the Mumkin brand identity and aspiration-led digital campaign reaching 2 million entrepreneurs." },
      ],
    },
    work: {
      heading: "The Work",
      body: "White Rice conducted the HCD research, translated insights into the Mumkin brand identity, developed all brand assets, and launched a digital campaign reaching 2 million entrepreneurs -- connecting them to financial, training, and mentorship resources through an aspiration-first approach.",
      deliverables: ["Human-Centred Design Research", "Entrepreneur Journey Mapping", "Mumkin Brand Identity", "Full Brand Asset Suite", "Campaign Strategy", "Digital Campaign Design", "Key Message Development", "Content Production", "Aspiration-Led Communication"],
    },
    impact: {
      heading: "Impact",
      metrics: [
        { value: 2000000, suffix: "+", label: "Entrepreneurs Reached" },
        { value: 4, suffix: "", label: "Programme Partners Aligned" },
        { value: 1, suffix: "", label: "Research-Led Brand Created" },
        { value: 1, suffix: "", label: "Aspiration-First Campaign" },
      ],
      closingNote: "Mumkin did the most important job: it made women feel that the resources, training, credit, and dream of a bigger business were all within their reach.",
    },
    gallery: {
      heading: "Gallery",
      images: [
        { src: "/images/timeline/2024/child-stim-village.jpg", alt: "Mumkin women entrepreneurship programme", span: "wide" },
      ],
    },
  },
];

/* ─── Lookup helper ──────────────────────────────────────────────── */

export function getCaseStudy(slug: string): CaseStudyData | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
