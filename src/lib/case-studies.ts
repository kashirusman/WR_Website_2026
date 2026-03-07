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
  /* 1 ─ Misali Ma */
  {
    slug: "misali-ma-storycircle",
    year: "2024",
    tags: ["Maternal Health", "Community Media", "SBC"],
    challenge: {
      heading: "The Challenge",
      body: "In rural Pakistan, critical maternal and newborn health messages often fail to reach the women who need them most. Traditional top-down communication approaches struggle to overcome cultural barriers, limited literacy, and deeply rooted community beliefs.\n\nPVMS needed a way to deliver life-saving health messaging that communities would trust, internalise, and act upon - moving beyond awareness to genuine behaviour change.",
    },
    strategy: {
      heading: "Our Approach",
      intro: "We designed a participatory media model that placed mothers at the centre of the storytelling process.",
      steps: [
        { number: "01", title: "Community Research", description: "Ethnographic fieldwork across target districts to map existing beliefs, barriers, and trusted information sources." },
        { number: "02", title: "Story Circle Design", description: "Co-creation workshops with mothers to develop culturally resonant health narratives in local languages." },
        { number: "03", title: "Media Production", description: "Production of audio-visual materials featuring community members as both storytellers and protagonists." },
        { number: "04", title: "Facilitated Screenings", description: "Trained community facilitators to lead group screenings with structured discussion guides for behaviour reinforcement." },
      ],
    },
    work: {
      heading: "Our Work",
      body: "We produced a series of community-led story circle sessions supported by short films and discussion kits that enabled mothers to share experiences and learn from each other in safe, trusted settings.",
      deliverables: ["12 community story circle films", "Training toolkit for facilitators", "Discussion guide series", "Monitoring and evaluation framework"],
    },
    impact: {
      heading: "Impact",
      metrics: [
        { value: 11000, suffix: "+", label: "Mothers Reached" },
        { value: 45, suffix: "", label: "Districts Covered" },
        { value: 800, suffix: "+", label: "Facilitators Trained" },
        { value: 92, suffix: "%", label: "Recall Rate" },
      ],
      quote: { text: "The story circles created a safe space where mothers could share and learn - it changed how we think about health communication.", attribution: "PVMS Programme Lead" },
    },
    gallery: {
      heading: "Gallery",
      images: [
        { src: "/images/misali-ma/misali-ma01.jpg", alt: "Mothers and children raising hands during a Misali Ma StoryCircle session", span: "wide" },
        { src: "/images/misali-ma/misali-ma02.jpg", alt: "Mother holding her child - portrait from a StoryCircle community", span: "normal" },
        { src: "/images/misali-ma/misali-ma03.jpg", alt: "Outdoor community gathering with Misali Ma banner and discussion materials", span: "normal" },
        { src: "/images/misali-ma/misali-ma04.jpg", alt: "Toddler smiling on a colourful traditional rug during a community session", span: "wide" },
        { src: "/images/misali-ma/misali-ma05.jpg", alt: "Women using StoryCircle materials during a facilitated health discussion", span: "normal" },
        { src: "/images/misali-ma/misali-ma06.jpg", alt: "Community health worker engaging with a mother during a field visit", span: "normal" },
      ],
    },
  },

  /* 2 ─ Alif Ailaan */
  {
    slug: "alif-ailaan-education",
    year: "2013 - 2018",
    tags: ["Education", "Social Mobilisation", "Policy Advocacy", "Gender Equity", "SDG 4"],
    challenge: {
      heading: "The Challenge",
      body: "Pakistan had over 25 million children out of school - but the crisis wasn't invisible. It was normalised. Dropout was woven into everyday life, rationalised by economic necessity, entrenched gender norms, and the belief that school systems weren't built for children like theirs.\n\nPoliticians cited education in speeches but rarely in budgets. What was missing was not awareness - it was a shared conviction that the status quo was intolerable and that change was demanded.",
      quote: {
        text: "The barrier was not access alone - it was a deeply held social norm that made non-enrolment feel acceptable, even rational.",
      },
    },
    strategy: {
      heading: "The Strategy",
      intro: "The strategy was built on one insight: lasting change doesn't travel top-down. It is negotiated - through trusted voices, collective action, and structured accountability at every level of the socio-ecological system.",
      steps: [
        { number: "01", title: "Community-Led Mobilisation", description: "Parents, children, teachers, religious leaders as co-architects - not audiences. Trust is infrastructure." },
        { number: "02", title: "Norm Disruption via Credible Voices", description: "Elders, scholars, educators as norm ambassadors - shifting what communities publicly value." },
        { number: "03", title: "Political Accountability at Election Time", description: "Election cycles as strategic windows - community demand converted into binding budget commitments." },
        { number: "04", title: "Media as Accountability Architecture", description: "Media as a structural force - tracking commitments, surfacing failures, amplifying community voice." },
      ],
    },
    work: {
      heading: "The Intervention",
      body: "Alif Ailan was a true 360-degree movement. White Rice built and led the full creative and communications architecture - activating simultaneously across all four tiers of the socio-ecological model. White Rice built Alif Ailan from the ground up - the name, the brand, the strategic positioning, and the full communications ecosystem.",
      deliverables: [
        "Brand Naming & Identity",
        "Massive Digital Campaign",
        "Educational Consortiums",
        "Community Programmes",
        "Teacher Recognition Awards",
        "District Leaderboards & Data",
        "Public Walks & Marches",
        "Road Shows",
        "Storytelling Sessions",
        "Media Narrative Strategy",
      ],
    },
    impact: {
      heading: "The Impact",
      body: "Over five years, Alif Ailan produced measurable change at every level it targeted - household behaviour, community norms, political accountability, and national narrative.",
      metrics: [
        { value: 100000, suffix: "+", label: "Children Returned to School" },
        { value: 12000, suffix: "", label: "Decision-Makers Engaged" },
        { value: 750, suffix: "+", label: "Community Visioning Boards" },
        { value: 4, suffix: "", label: "Provinces Mobilised" },
      ],
      quote: { text: "We coined 'educational emergency' - and when the Prime Minister used those words in a national address, the narrative had permanently shifted.", attribution: "White Rice Impact" },
      closingNote: "Alif Ailan established a replicable model for behaviour-change-led social mobilisation - one that has since informed SDG programming across health, climate, and gender equity in Pakistan and beyond.",
    },
    gallery: {
      heading: "Gallery",
      images: [
        { src: "/images/alif-ailaan/alif-ailaan01.jpg", alt: "Alif Ailaan education rights march with campaign banner", span: "wide" },
        { src: "/images/alif-ailaan/alif-ailaan02.jpg", alt: "School children in blue uniforms gathering for an Alif Ailaan event", span: "normal" },
        { src: "/images/alif-ailaan/alif-ailaan06.jpg", alt: "Alif Ailaan town hall with packed audience for education awareness", span: "normal" },
        { src: "/images/alif-ailaan/alif-ailaan03.jpg", alt: "Community mobilisation march for education enrolment", span: "wide" },
        { src: "/images/alif-ailaan/alif-ailaan04.jpg", alt: "National Teachers Conference in Islamabad - education leaders on stage", span: "wide" },
      ],
    },
  },

  /* 3 ─ UNICEF ECD */
  {
    slug: "unicef-ecd",
    year: "2023 - 2024",
    tags: ["Early Childhood", "UNICEF", "Behaviour Change"],
    challenge: {
      heading: "The Challenge",
      body: "Early childhood development in Pakistan's most marginalised communities was severely underserved. Caregivers lacked knowledge about responsive caregiving, early stimulation, and the critical importance of the first 1,000 days.\n\nUNICEF needed an evidence-based programme that could shift caregiver behaviours at scale across diverse cultural and geographic contexts.",
    },
    strategy: {
      heading: "Our Approach",
      intro: "We designed a community-based ECD programme combining media, training, and direct caregiver engagement.",
      steps: [
        { number: "01", title: "Formative Research", description: "Mapping caregiver knowledge, attitudes, and practices across target communities." },
        { number: "02", title: "Content Development", description: "Creating age-appropriate ECD messaging and visual materials for low-literacy audiences." },
        { number: "03", title: "Community Sessions", description: "Structured group sessions with caregivers using interactive, play-based learning approaches." },
        { number: "04", title: "Follow-up & Monitoring", description: "Home visits and tracking to reinforce positive behaviours and measure lasting change." },
      ],
    },
    work: {
      heading: "Our Work",
      body: "We developed a comprehensive ECD programme toolkit including training materials, community session guides, and monitoring frameworks that enabled frontline workers to deliver consistent, high-quality ECD interventions.",
      deliverables: ["ECD community session toolkit", "Caregiver engagement materials", "Frontline worker training programme", "Behaviour tracking dashboard"],
    },
    impact: {
      heading: "Impact",
      metrics: [
        { value: 15000, suffix: "+", label: "Caregivers Reached" },
        { value: 120, suffix: "+", label: "Communities Served" },
        { value: 500, suffix: "+", label: "Workers Trained" },
        { value: 78, suffix: "%", label: "Behaviour Adoption" },
      ],
    },
    gallery: {
      heading: "Gallery",
      images: [
        { src: "/images/timeline/2024/child-stim-hero.jpg", alt: "ECD session with children", span: "wide" },
        { src: "/images/timeline/2024/child-stim-learning.jpg", alt: "Child learning activity", span: "normal" },
        { src: "/images/timeline/2024/child-stim-village.jpg", alt: "Village ECD programme", span: "normal" },
        { src: "/images/ecd-playlabs.jpg", alt: "Early childhood development session", span: "wide" },
      ],
    },
  },

  /* 4 ─ UNICEF Parental Engagement */
  {
    slug: "unicef-parental-engagement",
    year: "2023",
    tags: ["Parenting", "UNICEF", "Mobile-First"],
    challenge: {
      heading: "The Challenge",
      body: "Parental engagement in children's development remained low across many communities in Pakistan. Existing approaches relied heavily on in-person workshops that were difficult to scale and failed to reach fathers and working caregivers.\n\nUNICEF needed a blended approach that could deliver parenting support through both community and digital channels.",
    },
    strategy: {
      heading: "Our Approach",
      intro: "We created a hybrid engagement model combining face-to-face sessions with mobile-first parenting content.",
      steps: [
        { number: "01", title: "Audience Mapping", description: "Segmenting caregiver groups by access patterns, literacy levels, and engagement preferences." },
        { number: "02", title: "Content Design", description: "Short-form video and audio content optimised for feature phones and low-bandwidth environments." },
        { number: "03", title: "Community Integration", description: "Embedding digital content into existing community health worker routines and group sessions." },
        { number: "04", title: "Peer Networks", description: "Activating parent-to-parent sharing networks to amplify reach organically." },
      ],
    },
    work: {
      heading: "Our Work",
      body: "We produced a library of mobile-first parenting content supported by community session guides and a peer-sharing mechanism that allowed content to spread organically through trusted networks.",
      deliverables: ["40+ short-form parenting videos", "Audio content series for feature phones", "Community session integration guide", "Peer sharing activation toolkit"],
    },
    impact: {
      heading: "Impact",
      metrics: [
        { value: 20000, suffix: "+", label: "Parents Engaged" },
        { value: 40, suffix: "+", label: "Videos Produced" },
        { value: 8, suffix: "", label: "Districts Reached" },
        { value: 85, suffix: "%", label: "Content Recall" },
      ],
    },
    gallery: {
      heading: "Gallery",
      images: [
        { src: "/images/peie/unicef-peie02.jpg", alt: "Father engaging with children in a hands-on learning activity at home", span: "wide" },
        { src: "/images/peie/unicef-peie05.jpg", alt: "Parent-Teacher Meeting being filmed at a school in Peshawar", span: "normal" },
        { src: "/images/peie/unicef-peie04.jpg", alt: "Team members reviewing educational visioning materials outdoors", span: "normal" },
        { src: "/images/peie/unicef-peie01.jpg", alt: "Family portrait with UNICEF parental engagement team member", span: "wide" },
        { src: "/images/peie/unicef-peie03.jpg", alt: "School girls gathered with programme team members in a park", span: "normal" },
        { src: "/images/peie/unicef-peie07.jpg", alt: "Mother and daughter studying together at home", span: "normal" },
      ],
    },
    video: {
      heading: "See It in Action",
      src: "/videos/unicef-peie.mp4",
      caption: "UNICEF Parental Engagement in Education - community impact across Pakistan",
    },
  },

  /* 5 ─ UNICEF WASH Film Screenings */
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
        { src: "/images/play-lab/play-lab10.jpeg", alt: "Village-wide effort painting a PlayLab building exterior", span: "wide" },
        { src: "/images/play-lab/play-lab04.jpeg", alt: "Community members painting a colourful mural on a PlayLab wall", span: "normal" },
      ],
    },
  },

  /* 7 ─ UNFPA Transgender */
  {
    slug: "unfpa-transgender",
    year: "2020 - 2021",
    tags: ["Inclusion", "Animation", "UNFPA"],
    challenge: {
      heading: "The Challenge",
      body: "Transgender communities in Pakistan face severe stigma, discrimination, and violence. Deeply held misconceptions and cultural taboos made it nearly impossible to have open conversations about transgender rights and dignity.\n\nUNFPA needed a communication tool that could bypass defensive reactions and open hearts and minds through storytelling.",
    },
    strategy: {
      heading: "Our Approach",
      intro: "We chose animation as the medium - it lowers defensive barriers and allows audiences to engage with difficult topics through empathy rather than confrontation.",
      steps: [
        { number: "01", title: "Community Consultation", description: "Working with transgender activists and community leaders to ensure authentic, dignified representation." },
        { number: "02", title: "Script Development", description: "Crafting narratives that centre the universal human experiences of transgender individuals." },
        { number: "03", title: "Animation Production", description: "Producing high-quality animated short films suitable for broadcast and digital distribution." },
        { number: "04", title: "Distribution Strategy", description: "Multi-platform release targeting both mainstream audiences and community-level screenings." },
      ],
    },
    work: {
      heading: "Our Work",
      body: "We produced an animated series that told the stories of transgender individuals through a lens of shared humanity, distributed across TV, social media, and community screening events.",
      deliverables: ["Animated short film series", "Social media distribution package", "Community screening toolkit", "Discussion and reflection guide"],
    },
    impact: {
      heading: "Impact",
      metrics: [
        { value: 5, suffix: "", label: "Films Produced" },
        { value: 2, suffix: "M+", label: "Online Views" },
        { value: 50, suffix: "+", label: "Community Screenings" },
        { value: 73, suffix: "%", label: "Empathy Shift" },
      ],
    },
    gallery: {
      heading: "Gallery",
      images: [
        { src: "/images/timeline/2020.png", alt: "Animation stills from transgender series", span: "wide" },
        { src: "/images/timeline/2020-b.png", alt: "Community screening event", span: "normal" },
        { src: "/images/timeline/2021.png", alt: "Animation production process", span: "normal" },
      ],
    },
  },

  /* 8 ─ UNICEF Clean and Green */
  {
    slug: "unicef-clean-green",
    year: "2019 - 2020",
    tags: ["Environment", "UNICEF", "Community Mobilisation"],
    challenge: {
      heading: "The Challenge",
      body: "Waste management and environmental cleanliness were not seen as community responsibilities in many urban and peri-urban areas. The cultural norm of public littering and poor waste disposal created serious public health risks.\n\nUNICEF needed a campaign that could shift deeply ingrained behaviours around cleanliness and environmental responsibility.",
    },
    strategy: {
      heading: "Our Approach",
      intro: "We designed a community mobilisation campaign that made cleanliness a matter of collective pride rather than individual duty.",
      steps: [
        { number: "01", title: "Behavioural Mapping", description: "Understanding the social norms, triggers, and barriers around waste disposal and community cleanliness." },
        { number: "02", title: "Champion Activation", description: "Identifying and training community champions as role models for clean and green behaviours." },
        { number: "03", title: "Campaign Design", description: "Multi-media campaign connecting cleanliness to community pride, health, and children's futures." },
        { number: "04", title: "Community Action", description: "Organised community clean-up events with sustained follow-up and public commitment mechanisms." },
      ],
    },
    work: {
      heading: "Our Work",
      body: "We designed and rolled out a multi-channel Clean and Green campaign that turned environmental cleanliness into a badge of community pride, supported by practical community action plans.",
      deliverables: ["Multi-media campaign package", "Community champion training manual", "Clean-up event planning toolkit", "Behaviour monitoring framework"],
    },
    impact: {
      heading: "Impact",
      metrics: [
        { value: 50000, suffix: "+", label: "People Mobilised" },
        { value: 200, suffix: "+", label: "Clean-up Events" },
        { value: 15, suffix: "", label: "Cities Covered" },
        { value: 45, suffix: "%", label: "Waste Reduction" },
      ],
    },
    gallery: {
      heading: "Gallery",
      images: [
        { src: "/images/timeline/2019.png", alt: "Clean and Green campaign", span: "wide" },
        { src: "/images/timeline/2019-b.png", alt: "Community clean-up event", span: "normal" },
        { src: "/images/timeline/2018.png", alt: "Campaign materials distribution", span: "normal" },
      ],
    },
  },

  /* 9 ─ FAO Road Safety */
  {
    slug: "fao-road-safety",
    year: "2018 - 2019",
    tags: ["Road Safety", "FAO", "Rural Communities"],
    challenge: {
      heading: "The Challenge",
      body: "Road traffic accidents in rural agricultural corridors were causing significant loss of life, particularly among farming communities using agricultural vehicles on public roads. Awareness of road safety practices was critically low.\n\nFAO needed a creative campaign that could reach dispersed rural populations with road safety messaging in culturally appropriate formats.",
    },
    strategy: {
      heading: "Our Approach",
      intro: "We designed a rural-focused road safety campaign using trusted community channels and locally relevant storytelling.",
      steps: [
        { number: "01", title: "Risk Assessment", description: "Mapping road accident hotspots and identifying the highest-risk behaviours in agricultural corridors." },
        { number: "02", title: "Message Design", description: "Developing road safety messages in local languages using familiar agricultural metaphors." },
        { number: "03", title: "Community Channels", description: "Distributing messages through mosques, markets, agricultural cooperatives, and local transport hubs." },
        { number: "04", title: "Reinforcement", description: "Installing visual reminders at key junctions and integrating road safety into agricultural extension visits." },
      ],
    },
    work: {
      heading: "Our Work",
      body: "We produced a comprehensive road safety communication package tailored for rural audiences, distributed through the channels they trust most - from market stalls to mosque announcements.",
      deliverables: ["Road safety awareness films", "Visual signage for hotspot areas", "Community announcement scripts", "Agricultural extension integration guide"],
    },
    impact: {
      heading: "Impact",
      metrics: [
        { value: 100000, suffix: "+", label: "People Reached" },
        { value: 30, suffix: "+", label: "Hotspots Addressed" },
        { value: 5, suffix: "", label: "Districts Covered" },
        { value: 28, suffix: "%", label: "Accident Reduction" },
      ],
    },
    gallery: {
      heading: "Gallery",
      images: [
        { src: "/images/timeline/2018.png", alt: "Road safety campaign materials", span: "wide" },
        { src: "/images/timeline/2018-b.png", alt: "Community road safety session", span: "normal" },
        { src: "/images/timeline/2017.png", alt: "Rural awareness drive", span: "normal" },
      ],
    },
  },

  /* 10 ─ UKAID TearFund */
  {
    slug: "ukaid-tearfund",
    year: "2017 - 2018",
    tags: ["Disaster Resilience", "UKAID", "Faith-Based"],
    challenge: {
      heading: "The Challenge",
      body: "Communities in disaster-prone regions of Pakistan were repeatedly devastated by floods and natural disasters, yet preparedness remained dangerously low. Top-down disaster messaging failed to resonate with local beliefs and practices.\n\nTearFund needed a community-owned resilience model that worked through trusted local structures - particularly faith-based networks.",
    },
    strategy: {
      heading: "Our Approach",
      intro: "We embedded disaster preparedness within faith-based community networks to create culturally grounded resilience.",
      steps: [
        { number: "01", title: "Network Mapping", description: "Identifying faith-based leaders and community structures with the greatest local trust and influence." },
        { number: "02", title: "Resilience Training", description: "Developing and delivering disaster preparedness training through mosque and community networks." },
        { number: "03", title: "Resource Development", description: "Creating locally relevant preparedness materials including early warning systems and evacuation plans." },
        { number: "04", title: "Practice Drills", description: "Organising community-led preparedness drills to build muscle memory and confidence." },
      ],
    },
    work: {
      heading: "Our Work",
      body: "We created a faith-integrated disaster preparedness programme that empowered local leaders to become resilience champions, supported by practical tools and regular community practice drills.",
      deliverables: ["Faith-leader training curriculum", "Community preparedness toolkit", "Early warning communication system", "Drill planning and evaluation framework"],
    },
    impact: {
      heading: "Impact",
      metrics: [
        { value: 25000, suffix: "+", label: "People Prepared" },
        { value: 100, suffix: "+", label: "Communities Trained" },
        { value: 300, suffix: "+", label: "Faith Leaders Engaged" },
        { value: 60, suffix: "%", label: "Preparedness Increase" },
      ],
    },
    gallery: {
      heading: "Gallery",
      images: [
        { src: "/images/timeline/2017.png", alt: "Community resilience training", span: "wide" },
        { src: "/images/timeline/2017-b.png", alt: "Faith leader engagement", span: "normal" },
        { src: "/images/timeline/2016.png", alt: "Disaster preparedness materials", span: "normal" },
      ],
    },
  },

  /* 11 ─ UNICEF MHH */
  {
    slug: "unicef-mhh",
    year: "2021 - 2022",
    tags: ["Menstrual Health", "UNICEF", "Co-Creation"],
    challenge: {
      heading: "The Challenge",
      body: "Menstrual health and hygiene remained deeply taboo across Pakistan, causing girls to miss school, suffer in silence, and lack access to safe menstrual products. Existing MHH interventions were designed without the input of those most affected.\n\nUNICEF needed a co-created approach that centred adolescent girls' voices in the design of MHH solutions.",
    },
    strategy: {
      heading: "Our Approach",
      intro: "We put adolescent girls at the centre of the design process, co-creating MHH solutions that reflected their real needs and contexts.",
      steps: [
        { number: "01", title: "Girl-Led Research", description: "Training adolescent girls as co-researchers to investigate MHH barriers in their own communities." },
        { number: "02", title: "Co-Design Workshops", description: "Facilitated design sessions where girls created their own MHH communication and product solutions." },
        { number: "03", title: "Prototype Testing", description: "Community testing of girl-designed interventions with iterative feedback and refinement." },
        { number: "04", title: "Scale Strategy", description: "Packaging co-created solutions for integration into school and community health programmes." },
      ],
    },
    work: {
      heading: "Our Work",
      body: "We facilitated a groundbreaking co-creation process where adolescent girls designed their own MHH interventions - from communication materials to product distribution models - resulting in solutions with significantly higher adoption rates.",
      deliverables: ["Co-creation methodology guide", "Girl-designed MHH communication kit", "School integration toolkit", "Product distribution model"],
    },
    impact: {
      heading: "Impact",
      metrics: [
        { value: 8000, suffix: "+", label: "Girls Reached" },
        { value: 60, suffix: "+", label: "Schools Engaged" },
        { value: 200, suffix: "+", label: "Co-Creators" },
        { value: 88, suffix: "%", label: "Solution Adoption" },
      ],
      quote: { text: "When girls design their own solutions, adoption isn't a challenge - it's a natural outcome.", attribution: "UNICEF WASH Officer" },
    },
    gallery: {
      heading: "Gallery",
      images: [
        { src: "/images/timeline/2016.png", alt: "MHH co-creation workshop", span: "wide" },
        { src: "/images/timeline/2021.png", alt: "Girl-led research session", span: "normal" },
        { src: "/images/timeline/2021-b.png", alt: "Co-design workshop materials", span: "normal" },
      ],
    },
  },

  /* 12 ─ Nike Girls Effect */
  {
    slug: "nike-girls-effect",
    year: "2012 - 2014",
    tags: ["Youth Empowerment", "Nike", "Sport"],
    challenge: {
      heading: "The Challenge",
      body: "Adolescent girls in Pakistan faced systemic barriers to participation in public life - from limited mobility and social restrictions to a lack of safe spaces for physical activity and self-expression.\n\nNike's Girls Effect initiative needed a local partner to design culturally appropriate empowerment programming that used sport and media as vehicles for social change.",
    },
    strategy: {
      heading: "Our Approach",
      intro: "We used sport and creative media as twin engines for building girls' confidence, voice, and community visibility.",
      steps: [
        { number: "01", title: "Safe Space Creation", description: "Establishing girl-friendly spaces within communities where physical activity and self-expression were normalised." },
        { number: "02", title: "Sport Programming", description: "Designing accessible sport activities that built physical confidence and team-building skills." },
        { number: "03", title: "Media Training", description: "Equipping girls with storytelling and media skills to amplify their own voices and experiences." },
        { number: "04", title: "Community Negotiation", description: "Working with families and community leaders to expand the boundaries of acceptable girl participation." },
      ],
    },
    work: {
      heading: "Our Work",
      body: "We designed and delivered an integrated girls' empowerment programme combining sport, media production, and community engagement to create lasting shifts in how communities perceived and supported adolescent girls.",
      deliverables: ["Girls' empowerment programme curriculum", "Sport activity toolkit", "Girl-produced media content", "Community engagement strategy"],
    },
    impact: {
      heading: "Impact",
      metrics: [
        { value: 3000, suffix: "+", label: "Girls Empowered" },
        { value: 50, suffix: "+", label: "Safe Spaces Created" },
        { value: 120, suffix: "+", label: "Media Pieces Produced" },
        { value: 75, suffix: "%", label: "Mobility Increase" },
      ],
    },
    gallery: {
      heading: "Gallery",
      images: [
        { src: "/images/timeline/2013.png", alt: "Girls Effect programme", span: "wide" },
        { src: "/images/timeline/2012.png", alt: "Sport activity session", span: "normal" },
        { src: "/images/timeline/2012-b.png", alt: "Girls media workshop", span: "normal" },
      ],
    },
  },

  /* 13 ─ SPRING */
  {
    slug: "spring-program",
    year: "2014 - 2016",
    tags: ["Nutrition", "SBC", "Global Health"],
    challenge: {
      heading: "The Challenge",
      body: "Malnutrition remained a leading cause of child mortality in Pakistan despite significant investment in nutrition programmes. Knowledge about proper infant and young child feeding practices was low, and cultural practices often contradicted nutritional best practices.\n\nThe SPRING programme needed SBC approaches that could shift deeply embedded feeding behaviours at the household level.",
    },
    strategy: {
      heading: "Our Approach",
      intro: "We integrated nutrition messaging into community-level behaviour change interventions, working through trusted local channels.",
      steps: [
        { number: "01", title: "Practice Analysis", description: "Documenting current infant and young child feeding practices and identifying key behaviour change opportunities." },
        { number: "02", title: "Message Design", description: "Developing nutrition messages that aligned with local food cultures and household dynamics." },
        { number: "03", title: "Channel Integration", description: "Embedding nutrition SBC into health worker visits, community groups, and media channels." },
        { number: "04", title: "Household Monitoring", description: "Tracking feeding practice changes at household level to measure real behaviour shift." },
      ],
    },
    work: {
      heading: "Our Work",
      body: "We designed a comprehensive nutrition SBC package that transformed how frontline workers communicated about infant feeding, complementary foods, and maternal nutrition - making the science of nutrition culturally accessible.",
      deliverables: ["Nutrition SBC communication package", "Health worker counselling cards", "Community group facilitation guide", "Household behaviour monitoring tool"],
    },
    impact: {
      heading: "Impact",
      metrics: [
        { value: 40000, suffix: "+", label: "Households Reached" },
        { value: 600, suffix: "+", label: "Health Workers Trained" },
        { value: 10, suffix: "", label: "Districts Covered" },
        { value: 35, suffix: "%", label: "Feeding Practice Improvement" },
      ],
    },
    gallery: {
      heading: "Gallery",
      images: [
        { src: "/images/timeline/2014.png", alt: "SPRING nutrition programme", span: "wide" },
        { src: "/images/timeline/2015.png", alt: "Community nutrition session", span: "normal" },
        { src: "/images/timeline/2013-b.png", alt: "Health worker training", span: "normal" },
      ],
    },
  },

  /* 14 ─ Oxfam IKEA HCD */
  {
    slug: "oxfam-ikea-hcd",
    year: "2016 - 2017",
    tags: ["Human-Centered Design", "Oxfam", "IKEA"],
    challenge: {
      heading: "The Challenge",
      body: "Livelihood programmes in marginalised communities often failed because they were designed in offices far removed from the realities of the people they aimed to serve. Solutions didn't account for local constraints, cultural dynamics, or the creative capacity of communities themselves.\n\nOxfam and IKEA needed a human-centered design approach that put community members at the centre of solution design.",
    },
    strategy: {
      heading: "Our Approach",
      intro: "We facilitated immersive HCD workshops where community members became the designers of their own livelihood solutions.",
      steps: [
        { number: "01", title: "Immersion", description: "Deep community immersion to understand daily realities, assets, constraints, and aspirations." },
        { number: "02", title: "Co-Design Sprints", description: "Facilitated design sprints where community members ideated, prototyped, and tested livelihood solutions." },
        { number: "03", title: "Rapid Prototyping", description: "Quick, low-cost prototyping of community-generated ideas with real-world testing cycles." },
        { number: "04", title: "Solution Packaging", description: "Refining and packaging viable solutions for scale-up through Oxfam and partner networks." },
      ],
    },
    work: {
      heading: "Our Work",
      body: "We facilitated a series of human-centered design workshops that empowered communities to design their own livelihood solutions, producing practical, locally grounded innovations that conventional programming would never have discovered.",
      deliverables: ["HCD workshop facilitation methodology", "Community-generated solution prototypes", "Scaling and replication guide", "Visual documentation of design process"],
    },
    impact: {
      heading: "Impact",
      metrics: [
        { value: 500, suffix: "+", label: "Participants" },
        { value: 15, suffix: "", label: "Solutions Prototyped" },
        { value: 8, suffix: "", label: "Solutions Scaled" },
        { value: 3, suffix: "", label: "Countries" },
      ],
    },
    gallery: {
      heading: "Gallery",
      images: [
        { src: "/images/timeline/2012.png", alt: "HCD workshop session", span: "wide" },
        { src: "/images/timeline/2016.png", alt: "Community co-design sprint", span: "normal" },
        { src: "/images/timeline/2016-b.png", alt: "Prototype testing", span: "normal" },
      ],
    },
  },

  /* 15 ─ Sightsavers Film */
  {
    slug: "sightsavers-film",
    year: "2024 - 2025",
    tags: ["Disability Inclusion", "Film", "Sightsavers"],
    challenge: {
      heading: "The Challenge",
      body: "People with disabilities in Pakistan remain largely invisible in mainstream media and public discourse. Negative stereotypes, pity-based framing, and outright exclusion prevented meaningful inclusion and participation in social life.\n\nSightsavers needed a national film movement that could shift public perception and create genuine demand for disability inclusion.",
    },
    strategy: {
      heading: "Our Approach",
      intro: "We designed a national film movement that centred the agency, talent, and lived experiences of people with disabilities.",
      steps: [
        { number: "01", title: "Story Discovery", description: "Identifying powerful stories of people with disabilities who are challenging stereotypes through their achievements." },
        { number: "02", title: "Inclusive Production", description: "Ensuring people with disabilities were involved in production - as subjects, crew members, and creative consultants." },
        { number: "03", title: "Cinema Release", description: "Securing mainstream cinema and broadcast distribution to reach mass audiences." },
        { number: "04", title: "Advocacy Integration", description: "Connecting film screenings with policy advocacy moments and public commitment campaigns." },
      ],
    },
    work: {
      heading: "Our Work",
      body: "We produced and distributed a series of films that showcased the capabilities, dreams, and contributions of people with disabilities - creating a national movement for inclusive visibility.",
      deliverables: ["Documentary film series", "Cinema distribution package", "School screening programme", "Advocacy integration toolkit"],
    },
    impact: {
      heading: "Impact",
      metrics: [
        { value: 1, suffix: "M+", label: "Viewers Reached" },
        { value: 6, suffix: "", label: "Films Produced" },
        { value: 100, suffix: "+", label: "Cinema Screenings" },
        { value: 82, suffix: "%", label: "Attitude Shift" },
      ],
    },
    gallery: {
      heading: "Gallery",
      images: [
        { src: "/images/timeline/2025/films-hero.jpg", alt: "Film movement premiere", span: "wide" },
        { src: "/images/timeline/2024/child-stim-hero.jpg", alt: "Film production behind the scenes", span: "normal" },
        { src: "/images/timeline/2024/child-stim-learning.jpg", alt: "Community screening event", span: "normal" },
      ],
    },
  },

  /* 16 ─ Johns Hopkins Animation */
  {
    slug: "johns-hopkins-animation",
    year: "2021 - 2022",
    tags: ["Last Mile Training", "Animation", "Johns Hopkins"],
    challenge: {
      heading: "The Challenge",
      body: "Frontline health workers in remote areas of Pakistan lacked access to quality training. Traditional classroom-based training was logistically impossible for workers serving the most isolated communities, and text-heavy materials failed those with limited literacy.\n\nJohns Hopkins needed an animated training series that could deliver complex health content in a simple, memorable, and accessible format.",
    },
    strategy: {
      heading: "Our Approach",
      intro: "We used animation to make complex health training content accessible, engaging, and memorable for last-mile health workers.",
      steps: [
        { number: "01", title: "Curriculum Analysis", description: "Breaking down clinical training content into visual, animation-friendly learning modules." },
        { number: "02", title: "Script & Storyboard", description: "Writing scripts in simple language with visual metaphors that reinforce key clinical concepts." },
        { number: "03", title: "Animation Production", description: "Producing a series of animated training episodes with consistent characters and progressive complexity." },
        { number: "04", title: "Field Testing", description: "Testing with frontline workers to validate comprehension, recall, and practical application." },
      ],
    },
    work: {
      heading: "Our Work",
      body: "We produced a comprehensive animated training series that equipped frontline health workers with essential clinical skills - from newborn care to vaccination protocols - in a format they could watch repeatedly on mobile devices.",
      deliverables: ["Animated training episode series", "Companion discussion guides", "Mobile distribution platform", "Knowledge assessment tools"],
    },
    impact: {
      heading: "Impact",
      metrics: [
        { value: 800, suffix: "+", label: "Workers Trained" },
        { value: 20, suffix: "+", label: "Episodes Produced" },
        { value: 15, suffix: "", label: "Districts Reached" },
        { value: 94, suffix: "%", label: "Knowledge Retention" },
      ],
      quote: { text: "The animations made complex medical concepts understandable for workers who had never received formal clinical training.", attribution: "Johns Hopkins Programme Manager" },
    },
    gallery: {
      heading: "Gallery",
      images: [
        { src: "/images/digital-training/digital-training01.JPG", alt: "Facilitator leading a classroom training session with students at desks", span: "wide" },
        { src: "/images/digital-training/digital-training02.JPG", alt: "Camera operator filming a digital training session for frontline health workers", span: "wide" },
      ],
    },
  },

  /* 17 ─ ICRC Bharosa */
  {
    slug: "icrc-bharosa",
    year: "2017 - 2018",
    tags: ["Humanitarian", "Trust-Building", "ICRC"],
    challenge: {
      heading: "The Challenge",
      body: "Conflict-affected communities in Pakistan harboured deep distrust of external organisations, including humanitarian agencies. Years of broken promises and politicised aid had created a trust deficit that prevented people from accessing life-saving services.\n\nICRC needed a communication campaign that could rebuild trust and reconnect communities with humanitarian services.",
    },
    strategy: {
      heading: "Our Approach",
      intro: "We designed the Bharosa Karein (Trust Us) campaign - a community-led trust-building initiative centred on transparency, consistency, and local voice.",
      steps: [
        { number: "01", title: "Trust Mapping", description: "Understanding the specific trust barriers, grievances, and information needs of conflict-affected populations." },
        { number: "02", title: "Community Ambassadors", description: "Identifying and training trusted community members as ICRC information ambassadors." },
        { number: "03", title: "Transparent Communication", description: "Creating communication materials that honestly addressed community concerns and ICRC's mandate." },
        { number: "04", title: "Service Connection", description: "Facilitating direct connections between communities and available ICRC services through trusted intermediaries." },
      ],
    },
    work: {
      heading: "Our Work",
      body: "We created and deployed the Bharosa Karein campaign - combining mass media with community ambassador networks to rebuild trust between conflict-affected populations and humanitarian services.",
      deliverables: ["Bharosa Karein campaign materials", "Community ambassador training programme", "Trust measurement framework", "Service connection facilitation guide"],
    },
    impact: {
      heading: "Impact",
      metrics: [
        { value: 50000, suffix: "+", label: "People Reached" },
        { value: 200, suffix: "+", label: "Ambassadors Trained" },
        { value: 7, suffix: "", label: "Conflict Regions" },
        { value: 55, suffix: "%", label: "Trust Increase" },
      ],
    },
    gallery: {
      heading: "Gallery",
      images: [
        { src: "/images/timeline/2011.png", alt: "Bharosa Karein campaign", span: "wide" },
        { src: "/images/timeline/2017.png", alt: "Community trust-building session", span: "normal" },
        { src: "/images/timeline/2017-b.png", alt: "Ambassador training event", span: "normal" },
      ],
    },
  },

  /* 18 ─ EU GRASP Food Safety */
  {
    slug: "eu-grasp-food-safety",
    year: "2024",
    tags: ["Food Safety", "European Union", "Supply Chain"],
    challenge: {
      heading: "The Challenge",
      body: "Food safety practices across Pakistan's supply chains - from farm to market to table - fell far below international standards. Contamination, improper handling, and lack of awareness contributed to widespread foodborne illness affecting millions.\n\nThe European Union's GRASP programme needed behaviour change interventions that could improve food safety practices across the entire supply chain.",
    },
    strategy: {
      heading: "Our Approach",
      intro: "We designed a supply-chain-wide food safety SBC programme targeting every link from production to consumption.",
      steps: [
        { number: "01", title: "Supply Chain Audit", description: "Mapping food safety risks and behaviour gaps at each stage of the supply chain." },
        { number: "02", title: "Audience-Specific Messaging", description: "Developing tailored food safety messages for farmers, transporters, vendors, and consumers." },
        { number: "03", title: "Visual Standards", description: "Creating visual food safety standards and checklists for low-literacy audiences." },
        { number: "04", title: "Market Activation", description: "Implementing food safety campaigns at markets with vendor training and consumer awareness activities." },
      ],
    },
    work: {
      heading: "Our Work",
      body: "We developed a comprehensive food safety behaviour change programme spanning the entire supply chain - from farm-level handling protocols to market-level vendor training to consumer awareness campaigns.",
      deliverables: ["Supply chain food safety communication package", "Vendor training curriculum", "Visual safety standards posters", "Consumer awareness campaign materials"],
    },
    impact: {
      heading: "Impact",
      metrics: [
        { value: 10000, suffix: "+", label: "Vendors Trained" },
        { value: 50, suffix: "+", label: "Markets Reached" },
        { value: 4, suffix: "", label: "Provinces Covered" },
        { value: 42, suffix: "%", label: "Practice Improvement" },
      ],
    },
    gallery: {
      heading: "Gallery",
      images: [
        { src: "/images/timeline/2024/food-safety-hero.jpg", alt: "Food safety programme fieldwork", span: "wide" },
        { src: "/images/timeline/2024/food-safety-interview.jpg", alt: "Vendor interview and training", span: "normal" },
        { src: "/images/timeline/2024/food-safety-vendor.jpg", alt: "Market food safety standards", span: "normal" },
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
      closingNote: "The SBC Cricket model established a replicable framework for making complex development methodology accessible through culturally resonant metaphor - a principle White Rice has since applied across health, nutrition, WASH, and education programming.",
    },
    gallery: {
      heading: "Gallery",
      images: [
        { src: "/images/sbc-cricket/workshop-scoreboard.jpg", alt: "Workshop participants working with SBC Scoreboard and Behaviour Change Technique materials", span: "wide" },
        { src: "/images/sbc-cricket/cricket-snapshot.jpg", alt: "SBC Cricket methodology - four-step behaviour change framework in English and Urdu", span: "wide" },
      ],
    },
  },

  /* 20 ─ World Bank ECS */
  {
    slug: "world-bank-ecs",
    year: "2024 - 2025",
    tags: ["Early Childhood", "World Bank", "Rural"],
    challenge: {
      heading: "The Challenge",
      body: "In Pakistan's most rural communities, children under five received minimal cognitive stimulation. Caregivers - overwhelmed by poverty, labour, and lack of knowledge - did not engage in the responsive caregiving practices critical for early brain development.\n\nThe World Bank needed a village-level programme that could transform caregiver-child interaction without requiring infrastructure or expensive materials.",
    },
    strategy: {
      heading: "Our Approach",
      intro: "We designed a zero-infrastructure early childhood stimulation programme built entirely around caregiver behaviour change.",
      steps: [
        { number: "01", title: "Behavioural Baseline", description: "Measuring current caregiver-child interaction patterns and identifying the highest-impact behaviour change opportunities." },
        { number: "02", title: "Session Design", description: "Creating structured group sessions that modelled responsive caregiving using everyday household items." },
        { number: "03", title: "Home Practice", description: "Designing take-home practice activities that caregivers could integrate into daily routines." },
        { number: "04", title: "Peer Learning", description: "Establishing caregiver peer groups for ongoing support, practice, and accountability." },
      ],
    },
    work: {
      heading: "Our Work",
      body: "We developed and delivered a village-level early childhood stimulation programme that required zero infrastructure - only caregivers, their children, and everyday household items - to create transformative developmental outcomes.",
      deliverables: ["Village-level ECS programme manual", "Caregiver session facilitation guide", "Home practice activity cards", "Peer group establishment toolkit"],
    },
    impact: {
      heading: "Impact",
      metrics: [
        { value: 12000, suffix: "+", label: "Children Reached" },
        { value: 200, suffix: "+", label: "Villages Served" },
        { value: 450, suffix: "+", label: "Facilitators Trained" },
        { value: 70, suffix: "%", label: "Interaction Improvement" },
      ],
      quote: { text: "You don't need expensive toys to stimulate a child's brain - you need an engaged caregiver. This programme proved that.", attribution: "World Bank ECD Specialist" },
    },
    gallery: {
      heading: "Gallery",
      images: [
        { src: "/images/timeline/2024/child-stim-village.jpg", alt: "Village stimulation programme", span: "wide" },
        { src: "/images/timeline/2024/child-stim-hero.jpg", alt: "Caregiver-child interaction", span: "normal" },
        { src: "/images/timeline/2024/child-stim-learning.jpg", alt: "Early learning activity", span: "normal" },
      ],
    },
  },
];

/* ─── Lookup helper ──────────────────────────────────────────────── */

export function getCaseStudy(slug: string): CaseStudyData | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
