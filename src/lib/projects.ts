export interface Project {
  slug: string;
  title: string;
  client: string;
  tag: string;
  image: string;
  description: string;
}

export const projects: Project[] = [
  /* ─ Kept as-is (no new HTML) ───────────────────────────────── */
  {
    slug: "misali-ma-storycircle",
    title: "Nurturing Change - Stunting Prevention",
    client: "UNICEF Pakistan",
    tag: "Stunting Prevention",
    image: "/images/unicef-misaali-maa/_MG_8795.jpg",
    description:
      "A social behaviour change intervention reaching 26,000 mothers across Sindh to reduce child stunting through the Kahani Asani Adehani model.",
  },
  {
    slug: "unicef-wash-film",
    title: "WASH - Film Screenings Punjab",
    client: "UNICEF",
    tag: "WASH",
    image: "/images/unicef-wash-film/celebrity-film.jpg",
    description:
      "Community film screenings across Punjab driving awareness and behaviour change around water, sanitation, and hygiene.",
  },
  {
    slug: "unicef-playlab",
    title: "PlayLab at Scale",
    client: "UNICEF",
    tag: "Play-Based Learning",
    image: "/images/play-lab/play-lab02.jpeg",
    description:
      "Scaling Pakistan's first play-based early learning model to reach resource-constrained communities nationwide.",
  },
  {
    slug: "sbc-cricket",
    title: "SBC Cricket - Social Behaviour Change Guide",
    client: "UNICEF",
    tag: "Sport for Development",
    image: "/images/sbc-cricket/cricket-snapshot.jpg",
    description:
      "A practical guide leveraging cricket as a platform to apply social and behaviour change communication.",
  },

  /* ─ Updated from HTML files ────────────────────────────────── */
  {
    slug: "unicef-ecd",
    title: "The First 8 Years",
    client: "UNICEF Pakistan",
    tag: "Early Childhood",
    image: "/images/timeline/2024/child-stim-hero.jpg",
    description:
      "A national SBC programme designed to transform how Pakistan's parents and institutions show up in the first eight years of a child's life, built to reach 20 million families by 2026.",
  },
  {
    slug: "unicef-parental-engagement",
    title: "Walidain HumQadam",
    client: "UNICEF Pakistan",
    tag: "Parental Engagement",
    image: "/images/peie/unicef-peie04.jpg",
    description:
      "A pioneering SBC initiative using WhatsApp, vision boards, and peer-to-peer learning to transform parental engagement across 52 schools in 4 provinces.",
  },
  {
    slug: "unfpa-transgender",
    title: "Apni Kahani",
    client: "UNFPA Pakistan",
    tag: "HIV Prevention",
    image: "/images/timeline/2013.jpg",
    description:
      "A six-part animation drama series built on 90 days of ethnographic co-creation with Pakistan's Khawaja Sira community for HIV prevention.",
  },
  {
    slug: "unicef-clean-green",
    title: "Clean & Green Punjab",
    client: "Punjab Government & UNICEF",
    tag: "WASH & Environment",
    image: "/images/unicef-cg/DSC03510.JPG",
    description:
      "A province-wide SBC intervention across five critical environmental and hygiene behaviours, reaching 2 million people directly and 34 million through digital platforms.",
  },
  {
    slug: "fao-road-safety",
    title: "The Diverse Dastarkhwan",
    client: "FAO Pakistan",
    tag: "Food & Nutrition",
    image: "/images/FAO Dastarkhwan.png",
    description:
      "A 12-week behaviour change programme shifting food and nutrition practices across three culturally distinct communities in Balochistan, reaching 11,000 families.",
  },
  {
    slug: "unicef-mhh",
    title: "Breaking Barriers",
    client: "UNICEF Pakistan",
    tag: "Menstrual Health",
    image: "/images/UNICEF MHH.jpeg",
    description:
      "A national SBC initiative dismantling silence and shame around menstrual health across three provinces, with a 90% communication effectiveness rate.",
  },
  {
    slug: "nike-girls-effect",
    title: "Springster",
    client: "Girl Effect / Nike Foundation",
    tag: "Girls' Digital Content",
    image: "/images/nike-girl-effect/IMG_2687.JPG",
    description:
      "100+ co-created stories on a free mobile platform reaching one million girls in Pakistan with trusted content on health, safety, voice, and financial wellbeing.",
  },
  {
    slug: "spring-program",
    title: "Spring Accelerator",
    client: "USAID / Proportion Netherlands",
    tag: "Startup Acceleration",
    image: "/images/Spring Accelerator.jpg",
    description:
      "A four-country accelerator where White Rice led Pakistan's cohort of seven startups through HCD research and user testing for products targeting girls aged 10-19.",
  },
  {
    slug: "oxfam-ikea-hcd",
    title: "Empowering Youth for Work",
    client: "Oxfam Pakistan / IKEA Foundation",
    tag: "Youth Empowerment",
    image: "/images/oxfam-hcd/DSC_2440-copy.jpg",
    description:
      "An 18-month HCD consulting engagement, the longest in White Rice's history, compressing a 5-year programme into a living design laboratory for 10,000+ young entrepreneurs.",
  },
  {
    slug: "sightsavers-film",
    title: "When They Can See",
    client: "Sightsavers International",
    tag: "Eye Health Film",
    image: "/images/sightsavers/noor-poster.jpg",
    description:
      "A data-driven short film shaped by 100 interviews, brought to life by Pakistan's finest actors, and winner at Cannes Lions, still screening in schools across Pakistan.",
  },
  {
    slug: "johns-hopkins-animation",
    title: "The Last Mile",
    client: "Johns Hopkins CCP",
    tag: "Global Health",
    image: "/images/LastMile.png",
    description:
      "A globally deployable animation training series for 250,000 frontline immunisation workers across 4 continents in 4 languages.",
  },
  {
    slug: "icrc-bharosa",
    title: "Barosakare",
    client: "ICRC Pakistan",
    tag: "Healthcare Safety",
    image: "/images/ICRC Barosakare.png",
    description:
      "Pakistan's first national behaviour change campaign addressing violence against healthcare workers, reaching 4 million people through HCD research and multi-channel activation.",
  },

  /* ─ New entries (replacing entries without HTML) ────────────── */
  {
    slug: "awaz-programme",
    title: "Awaz - Give Voice",
    client: "UK Aid (FCDO) / DAI",
    tag: "Citizen Accountability",
    image: "/images/alif-ailaan/alif-ailaan01.jpg",
    description:
      "A decade-long programme reaching 15 million people across 13 districts, building Pakistan's first citizen journalism platform and transforming marginalised women into community leaders.",
  },
  {
    slug: "oxfam-dunia-aali-larki",
    title: "Dunia Aur Larki",
    client: "Oxfam Pakistan",
    tag: "Girls' Education",
    image: "/images/timeline/15x/2010/2010-foto2.jpg",
    description:
      "What began as an animated campaign for 16 Days of Activism became Pakistan's most powerful girls' education movement, earning a $1M grant and producing Pakistan's first Children's Assembly.",
  },
  {
    slug: "saaf-karachi-waste",
    title: "Saaf Karachi Meri Zimmedari",
    client: "Tier Fund",
    tag: "Recycling & Waste",
    image: "/images/tearFund/tearFund.png",
    description:
      "A full-spectrum community behaviour change campaign shifting Karachi's waste practices from household to hub, turning segregation, collection, and recycling into a community movement.",
  },
  {
    slug: "care-mastercard-mumkin",
    title: "Mumkin - Make It Possible",
    client: "CARE International / Mastercard Foundation",
    tag: "Women Entrepreneurship",
    image: "/images/CARE Mastercard Mumkin.jpeg",
    description:
      "An HCD research-led campaign connecting Pakistan's women micro-entrepreneurs with digital financial services, skills training, and microfinance, reaching 2 million people.",
  },
];
