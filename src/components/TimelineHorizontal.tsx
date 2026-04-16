"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useMotionValue,
  useSpring,
  AnimatePresence,
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

const PANEL_COUNT = yearPanels.length;
const ease = [0.21, 0.47, 0.32, 0.98] as const;

/* ── Custom cursor ────────────────────────────────────────────────── */
function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { stiffness: 300, damping: 28 });
  const springY = useSpring(cursorY, { stiffness: 300, damping: 28 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest(".htl-panel__media, a, button")) setHovered(true);
    };
    const out = () => setHovered(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    window.addEventListener("mouseout", out);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      window.removeEventListener("mouseout", out);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        className="htl-cursor"
        style={{ x: springX, y: springY }}
        animate={{ scale: hovered ? 2.5 : 1, opacity: hovered ? 0.6 : 0.35 }}
        transition={{ duration: 0.25 }}
      />
      <motion.div
        className="htl-cursor-dot"
        style={{ x: cursorX, y: cursorY }}
      />
    </>
  );
}

/* ── Main component ───────────────────────────────────────────────── */
export default function TimelineHorizontal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const { scrollYProgress } = useScroll({ target: containerRef });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${(PANEL_COUNT - 1) * 100}%`]
  );

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.round(v * (PANEL_COUNT - 1));
    setActiveIndex(Math.min(Math.max(idx, 0), PANEL_COUNT - 1));
  });

  const currentProjects = yearPanels[activeIndex]?.projects ?? 0;

  const scrollToIndex = useCallback((idx: number) => {
    if (!containerRef.current) return;
    const clamped = Math.max(0, Math.min(idx, PANEL_COUNT - 1));
    const containerTop = containerRef.current.offsetTop;
    const containerHeight = containerRef.current.offsetHeight - window.innerHeight;
    const targetScroll = containerTop + (clamped / (PANEL_COUNT - 1)) * containerHeight;
    window.scrollTo({ top: targetScroll, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        scrollToIndex(activeIndex + 1);
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        scrollToIndex(activeIndex - 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIndex, scrollToIndex]);

  /* ── Mobile fallback ── */
  if (isMobile) {
    return (
      <section className="htl-mobile">
        {yearPanels.map((panel) => (
          <div key={panel.year} className="htl-mobile__panel">
            <div className="htl-mobile__year">{panel.year}</div>
            <div className="htl-mobile__img-wrap">
              <Image
                src={panel.image}
                alt={panel.headline}
                width={600}
                height={400}
                className="htl-mobile__img"
              />
            </div>
            <h3 className="htl-mobile__headline">{panel.headline}</h3>
            <p className="htl-mobile__line">{panel.line1}</p>
            <p className="htl-mobile__line htl-mobile__line--dim">{panel.line2}</p>
          </div>
        ))}
      </section>
    );
  }

  /* ── Desktop ── */
  return (
    <section
      ref={containerRef}
      className="htl-container"
      style={{ height: `${PANEL_COUNT * 100}vh` }}
    >
      <div className="htl-sticky">
        <CustomCursor />

        {/* Large year — pinned left */}
        <div className="htl-year-label">
          <AnimatePresence mode="popLayout">
            <motion.span
              key={activeIndex}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.4, ease }}
              className="htl-year-label__text"
            >
              {yearPanels[activeIndex]?.year}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* Counter — top right */}
        <div className="htl-counter">
          <motion.span
            className="htl-counter__value"
            key={currentProjects}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {currentProjects}+
          </motion.span>
          <span className="htl-counter__label">Projects Delivered</span>
        </div>

        {/* Horizontal track */}
        <motion.div className="htl-track" style={{ x }}>
          {yearPanels.map((panel, i) => (
            <div
              key={panel.year}
              className={`htl-panel ${i === activeIndex ? "htl-panel--active" : ""}`}
            >
              <div className="htl-panel__content">
                <span className="htl-panel__year-sm">{panel.year}</span>
                <h2 className="htl-panel__headline">{panel.headline}</h2>
                <p className="htl-panel__line">{panel.line1}</p>
                <p className="htl-panel__line htl-panel__line--dim">{panel.line2}</p>
              </div>
              <div className="htl-panel__media">
                <Image
                  src={panel.image}
                  alt={panel.headline}
                  fill
                  sizes="50vw"
                  style={{ objectFit: "cover" }}
                  priority={i < 2}
                />
                <div className="htl-panel__media-overlay" />
              </div>
            </div>
          ))}
        </motion.div>

        {/* Progress bar — bottom */}
        <div className="htl-progress">
          <motion.div
            className="htl-progress__fill"
            style={{ scaleX: scrollYProgress }}
          />
          <div className="htl-progress__labels">
            <span>2006</span>
            <span>2026</span>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="htl-nav-hint">
          <span>Scroll or use ← → arrow keys</span>
        </div>
      </div>
    </section>
  );
}
