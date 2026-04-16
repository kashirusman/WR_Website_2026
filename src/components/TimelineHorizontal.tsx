"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useMotionValue,
  useSpring,
  AnimatePresence,
  MotionValue,
} from "framer-motion";

/* ── Data: one panel per year ─────────────────────────────────────── */
export interface YearPanel {
  year: number;
  headline: string;
  line1: string;
  line2: string;
  image: string;
  projects: number;
}

export const yearPanels: YearPanel[] = [
  {
    year: 2006,
    headline: "BHAID — Gamified Learning",
    line1: "Pakistan's first gamified multimedia learning program deployed across 100+ schools.",
    line2: "A bold experiment asking whether design could drive real social change.",
    image: "/images/timeline/2006.png",
    projects: 8,
  },
  {
    year: 2007,
    headline: "Abdullah's Story Wins Gold",
    line1: "Gold award-winning animated film on visual impairment and disability stigma.",
    line2: "One of Pakistan's earliest examples of film as a tool for behaviour change.",
    image: "/images/timeline/2007.png",
    projects: 18,
  },
  {
    year: 2008,
    headline: "Oxfam & Aflatoun Partnership",
    line1: "First international NGO collaboration and award-winning e-learning series.",
    line2: "Proved Pakistani creative talent could operate at a global standard.",
    image: "/images/timeline/2008.png",
    projects: 30,
  },
  {
    year: 2009,
    headline: "100+ Schools Impacted",
    line1: "Gamified learning reaches classrooms across Pakistan.",
    line2: "The first chapter closes with proof that design-led education works.",
    image: "/images/timeline/2009.png",
    projects: 42,
  },
  {
    year: 2010,
    headline: "New Studio, New Ambitions",
    line1: "White Rice expanded into a full-service creative studio.",
    line2: "Design Thinking and HCD became the operating system.",
    image: "/images/timeline/2010.png",
    projects: 60,
  },
  {
    year: 2011,
    headline: "We Can — 600K Changemakers",
    line1: "A movement of 600,000 people fighting violence against women and girls.",
    line2: "Pakistan's largest citizen-driven advocacy campaign.",
    image: "/images/timeline/2011.png",
    projects: 85,
  },
  {
    year: 2012,
    headline: "Alif Ailaan — Education Revolution",
    line1: "100,000 children re-enrolled in schools. 10 million citizens reached.",
    line2: "Pakistan's largest education campaign shifted the national conversation.",
    image: "/images/timeline/2012.png",
    projects: 120,
  },
  {
    year: 2013,
    headline: "Relax — First Mental Health App",
    line1: "Pakistan's first digital mental health intervention reaching 10,000 teenagers.",
    line2: "A pioneering step in using technology for wellbeing at scale.",
    image: "/images/timeline/2013.png",
    projects: 155,
  },
  {
    year: 2014,
    headline: "$1 Million Raised for Oxfam",
    line1: "A benchmark in fundraising through behaviour-centred design.",
    line2: "International partnerships deepened across Asia and Europe.",
    image: "/images/timeline/2014.png",
    projects: 195,
  },
  {
    year: 2015,
    headline: "Australian High Commission Award",
    line1: "International recognition for White Rice's contribution to social impact.",
    line2: "The world started paying attention.",
    image: "/images/timeline/2015.png",
    projects: 235,
  },
  {
    year: 2016,
    headline: "Polio Frontline Workers",
    line1: "Training videos for 27,000+ health workers addressing community resistance.",
    line2: "Behavioural science meets public health at national scale.",
    image: "/images/timeline/2016-b.png",
    projects: 280,
  },
  {
    year: 2017,
    headline: "Girl Effect — 1 Million Girls",
    line1: "Nike Foundation partnership: 100+ life-skills stories accessed by 1M+ girls.",
    line2: "Storytelling as empowerment across Pakistan.",
    image: "/images/timeline/2017.png",
    projects: 330,
  },
  {
    year: 2018,
    headline: "Misaali Maa — 11,000 Voices",
    line1: "World's largest storytelling exercise captured 11,000 mothers' voices.",
    line2: "Foundation for a nationwide maternal health campaign.",
    image: "/images/timeline/2018.png",
    projects: 380,
  },
  {
    year: 2019,
    headline: "Clean & Green Punjab",
    line1: "Pakistan's largest WASH behaviour change initiative. 36 districts.",
    line2: "30 million+ digital reach across the province.",
    image: "/images/timeline/2019.png",
    projects: 430,
  },
  {
    year: 2020,
    headline: "COVID-19 National Response",
    line1: "Life-saving behaviour change campaigns reaching 50 million+ people.",
    line2: "Ehsaas emergency cash program supported 10.7 million families.",
    image: "/images/timeline/2020.png",
    projects: 490,
  },
  {
    year: 2021,
    headline: "VR & AI Initiatives",
    line1: "Pakistan's first VR film series on water and sanitation.",
    line2: "AI-driven impact programs — a new era of tech-powered behaviour change.",
    image: "/images/timeline/2021.png",
    projects: 530,
  },
  {
    year: 2022,
    headline: "UNICEF Community PlayLabs",
    line1: "Community play spaces promoting early childhood development across Sindh.",
    line2: "Behaviour change through play — mothers and children learning together.",
    image: "/images/timeline/2022/playlabs-hero.jpg",
    projects: 580,
  },
  {
    year: 2023,
    headline: "Parental Engagement for ECD",
    line1: "UNICEF behaviourally designed parenting program for responsive caregiving.",
    line2: "Shifting how families interact with their youngest children.",
    image: "/images/timeline/2023/parenting-hero.jpg",
    projects: 620,
  },
  {
    year: 2024,
    headline: "National Food Safety Campaign",
    line1: "ITC nationwide campaign helping food vendors adopt safer hygiene practices.",
    line2: "World Bank child stimulation program reaching caregivers at systems level.",
    image: "/images/timeline/2024/food-safety-hero.jpg",
    projects: 670,
  },
  {
    year: 2025,
    headline: "Films for Change",
    line1: "Storytelling platform using films to drive behaviour change across sectors.",
    line2: "Climate, health, and gender — twenty years distilled into film.",
    image: "/images/timeline/2025/films-hero.png",
    projects: 700,
  },
  {
    year: 2026,
    headline: "20 Years of Changing Behaviour",
    line1: "From a studio in Islamabad to a force for social impact across continents.",
    line2: "The journey continues.",
    image: "/images/timeline/2006-team.jpg",
    projects: 720,
  },
];

/* ── Floating hero thumbnails — positions and images ─────────────── */
const heroThumbs = [
  { src: "/images/timeline/2006.png", x: "8%", y: "12%", w: 140, h: 95, delay: 0 },
  { src: "/images/timeline/2009.png", x: "78%", y: "8%", w: 120, h: 80, delay: 0.15 },
  { src: "/images/timeline/2012.png", x: "4%", y: "65%", w: 130, h: 88, delay: 0.3 },
  { src: "/images/timeline/2017.png", x: "82%", y: "58%", w: 125, h: 85, delay: 0.1 },
  { src: "/images/timeline/2020.png", x: "18%", y: "38%", w: 110, h: 75, delay: 0.25 },
  { src: "/images/timeline/2011.png", x: "72%", y: "34%", w: 115, h: 78, delay: 0.05 },
  { src: "/images/timeline/2018.png", x: "50%", y: "72%", w: 135, h: 90, delay: 0.2 },
  { src: "/images/timeline/2015.png", x: "35%", y: "5%", w: 105, h: 72, delay: 0.35 },
];

/* ── Month names for display ─────────────────────────────────────── */
const yearMonths: Record<number, string> = {
  2006: "January",
  2007: "March",
  2008: "June",
  2009: "September",
  2010: "February",
  2011: "April",
  2012: "August",
  2013: "May",
  2014: "November",
  2015: "July",
  2016: "October",
  2017: "January",
  2018: "March",
  2019: "June",
  2020: "March",
  2021: "September",
  2022: "February",
  2023: "April",
  2024: "January",
  2025: "July",
  2026: "January",
};

/* ── Layout type per entry for visual variety ────────────────────── */
type LayoutType = "full-image" | "text-left" | "big-number" | "big-text";

function getLayoutType(index: number): LayoutType {
  const cycle: LayoutType[] = ["full-image", "text-left", "big-number", "full-image", "big-text", "text-left"];
  return cycle[index % cycle.length];
}

/* ── Floating Hero Thumbnail ─────────────────────────────────────── */
function FloatingThumb({
  src,
  x,
  y,
  w,
  h,
  delay,
  scrollYProgress,
}: {
  src: string;
  x: string;
  y: string;
  w: number;
  h: number;
  delay: number;
  scrollYProgress: MotionValue<number>;
}) {
  const yOffset = useTransform(scrollYProgress, [0, 0.3], [0, -120]);
  const opacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const springY = useSpring(yOffset, { stiffness: 80, damping: 20 });

  return (
    <motion.div
      className="sqtl-hero__thumb"
      style={{
        position: "absolute",
        left: x,
        top: y,
        width: w,
        height: h,
        y: springY,
        opacity,
        zIndex: 1,
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 0.7, scale: 1 }}
      transition={{ duration: 1.2, delay: 0.5 + delay, ease: "easeOut" }}
    >
      <Image
        src={src}
        alt=""
        fill
        sizes={`${w}px`}
        style={{ objectFit: "cover", borderRadius: 4 }}
      />
    </motion.div>
  );
}

/* ── Timeline Entry ──────────────────────────────────────────────── */
function TimelineEntry({ panel, index }: { panel: YearPanel; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });
  const layout = getLayoutType(index);
  const month = yearMonths[panel.year] || "January";

  return (
    <motion.div
      ref={ref}
      className={`sqtl-entry sqtl-entry--${layout}`}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >
      {/* Background image */}
      <div className="sqtl-entry__bg">
        <motion.div
          className="sqtl-entry__bg-inner"
          initial={{ scale: 1.1 }}
          animate={isInView ? { scale: 1 } : { scale: 1.1 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
        >
          <Image
            src={panel.image}
            alt={panel.headline}
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
            priority={index < 2}
          />
        </motion.div>
        <div className="sqtl-entry__bg-overlay" />
      </div>

      {/* Content */}
      <div className={`sqtl-entry__content sqtl-entry__content--${layout}`}>
        {layout === "big-number" && (
          <motion.div
            className="sqtl-entry__big-number"
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {panel.projects}+
          </motion.div>
        )}

        {layout === "big-text" && (
          <motion.div
            className="sqtl-entry__big-text"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            {panel.headline}
          </motion.div>
        )}

        <motion.div
          className="sqtl-entry__date"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {month} {panel.year}
        </motion.div>

        {layout !== "big-text" && (
          <motion.h2
            className="sqtl-entry__title"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            {panel.headline}
          </motion.h2>
        )}

        <motion.p
          className="sqtl-entry__desc"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          {panel.line1}
        </motion.p>

        <motion.p
          className="sqtl-entry__desc sqtl-entry__desc--secondary"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.55 }}
        >
          {panel.line2}
        </motion.p>

        {layout === "big-number" && (
          <motion.span
            className="sqtl-entry__counter-label"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Projects Delivered
          </motion.span>
        )}
      </div>
    </motion.div>
  );
}

/* ── List View Toggle Item ───────────────────────────────────────── */
function ListViewItem({
  panel,
  index,
  onClose,
}: {
  panel: YearPanel;
  index: number;
  onClose: () => void;
}) {
  const month = yearMonths[panel.year] || "January";

  return (
    <motion.div
      className="sqtl-list__item"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3, delay: index * 0.03 }}
    >
      <div className="sqtl-list__item-date">
        {month} {panel.year}
      </div>
      <div className="sqtl-list__item-content">
        <h3 className="sqtl-list__item-title">{panel.headline}</h3>
        <p className="sqtl-list__item-desc">{panel.line1}</p>
      </div>
      <div className="sqtl-list__item-thumb">
        <Image
          src={panel.image}
          alt={panel.headline}
          width={120}
          height={80}
          style={{ objectFit: "cover", borderRadius: 2 }}
        />
      </div>
    </motion.div>
  );
}

/* ── Main Component ──────────────────────────────────────────────── */
export default function TimelineHorizontal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const [listView, setListView] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const { scrollYProgress } = useScroll({ target: containerRef });
  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const progressWidth = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const handleScrollPrompt = () => {
    if (heroRef.current) {
      const heroBottom = heroRef.current.offsetTop + heroRef.current.offsetHeight;
      window.scrollTo({ top: heroBottom, behavior: "smooth" });
    }
  };

  /* ── List View ── */
  if (listView) {
    return (
      <section className="sqtl-list">
        <div className="sqtl-list__header">
          <h1 className="sqtl-list__title">Timeline</h1>
          <button
            className="sqtl-list__toggle"
            onClick={() => setListView(false)}
          >
            TIMELINE VIEW
          </button>
        </div>
        <div className="sqtl-list__grid">
          <AnimatePresence>
            {yearPanels.map((panel, i) => (
              <ListViewItem
                key={panel.year}
                panel={panel}
                index={i}
                onClose={() => setListView(false)}
              />
            ))}
          </AnimatePresence>
        </div>
      </section>
    );
  }

  /* ── Main Timeline ── */
  return (
    <section ref={containerRef} className="sqtl">
      {/* ── LIST VIEW toggle — top right ── */}
      <motion.button
        className="sqtl-toggle"
        onClick={() => setListView(true)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        LIST VIEW
      </motion.button>

      {/* ── HERO SECTION ── */}
      <div ref={heroRef} className="sqtl-hero">
        {/* Floating thumbnail images */}
        <div className="sqtl-hero__thumbs">
          {heroThumbs.map((t, i) => (
            <FloatingThumb
              key={i}
              src={t.src}
              x={isMobile ? `${10 + i * 10}%` : t.x}
              y={isMobile ? `${8 + i * 10}%` : t.y}
              w={isMobile ? 80 : t.w}
              h={isMobile ? 55 : t.h}
              delay={t.delay}
              scrollYProgress={heroScrollProgress}
            />
          ))}
        </div>

        {/* Main hero typography */}
        <div className="sqtl-hero__center">
          <motion.div
            className="sqtl-hero__brand"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            <span className="sqtl-hero__brand-wh">WHITE</span>
            <span className="sqtl-hero__brand-ri">RICE</span>
          </motion.div>

          <motion.div
            className="sqtl-hero__number"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
          >
            20
          </motion.div>

          <motion.p
            className="sqtl-hero__tagline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
          >
            CELEBRATING <em>TWENTY YEARS</em> OF IMPACT
          </motion.p>
        </div>

        {/* Scroll prompt */}
        <motion.button
          className="sqtl-hero__scroll"
          onClick={handleScrollPrompt}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <span className="sqtl-hero__scroll-text">SCROLL TO EXPLORE</span>
          <motion.span
            className="sqtl-hero__scroll-arrow"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          >
            &#8595;
          </motion.span>
        </motion.button>
      </div>

      {/* ── TIMELINE ENTRIES ── */}
      <div className="sqtl-entries">
        {yearPanels.map((panel, i) => (
          <TimelineEntry key={panel.year} panel={panel} index={i} />
        ))}
      </div>

      {/* ── CLOSING SECTION ── */}
      <div className="sqtl-closing">
        <motion.div
          className="sqtl-closing__inner"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1 }}
        >
          <span className="sqtl-closing__number">720+</span>
          <span className="sqtl-closing__label">
            Projects Delivered Across <em>20 Years</em>
          </span>
        </motion.div>
      </div>

      {/* ── PROGRESS BAR — fixed bottom ── */}
      <div className="sqtl-progress">
        <motion.div
          className="sqtl-progress__fill"
          style={{ scaleX: progressWidth, transformOrigin: "left" }}
        />
        <div className="sqtl-progress__labels">
          <span>2006</span>
          <span>2026</span>
        </div>
      </div>
    </section>
  );
}
