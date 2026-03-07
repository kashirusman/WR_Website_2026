"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { chapters } from "@/lib/milestones";
import type { Chapter, Moment } from "@/lib/milestones";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

/* ── Scroll-driven parallax hero for each chapter ── */
function ChapterHero({ chapter }: { chapter: Chapter }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.6, 1, 1, 0.6]);

  return (
    <div ref={ref} className="chapter-hero">
      <motion.div className="chapter-hero-bg" style={{ y }}>
        <Image
          src={chapter.heroImage}
          alt={chapter.title}
          fill
          sizes="100vw"
          className="chapter-hero-img"
          priority={chapter.number === "01"}
        />
      </motion.div>
      <div className="chapter-hero-overlay" />
      <motion.div className="chapter-hero-content" style={{ opacity }}>
        <span className="chapter-label">Chapter {chapter.number}</span>
        <span className="chapter-era">{chapter.era}</span>
        <h2 className="chapter-title">{chapter.title}</h2>
      </motion.div>
    </div>
  );
}

/* ── Narrative text with fade-in ── */
function Narrative({ text }: { text: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20% 0px" });

  return (
    <motion.div
      ref={ref}
      className="chapter-narrative"
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{ duration: 0.8, ease }}
    >
      <p>{text}</p>
    </motion.div>
  );
}

/* ── Moment card with image fade-in + zoom ── */
function MomentCard({ moment, index }: { moment: Moment; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <motion.div
      ref={ref}
      className="moment-card"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, delay: index * 0.12, ease }}
    >
      <div className="moment-image-wrap">
        <Image
          src={moment.image}
          alt={moment.title}
          width={600}
          height={400}
          className="moment-image"
        />
      </div>
      <span className="moment-year">{moment.year}</span>
      <h3 className="moment-title">{moment.title}</h3>
      <p className="moment-caption">{moment.caption}</p>
    </motion.div>
  );
}

/* ── Stats row ── */
function StatsRow({ stats }: { stats: Chapter["stats"] }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <motion.div
      ref={ref}
      className="chapter-stats"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6, ease }}
    >
      {stats.map((s) => (
        <div key={s.label} className="chapter-stat">
          <span className="chapter-stat-value">{s.value}</span>
          <span className="chapter-stat-label">{s.label}</span>
        </div>
      ))}
    </motion.div>
  );
}

/* ── Full chapter section ── */
function ChapterSection({ chapter }: { chapter: Chapter }) {
  return (
    <section className="chapter-section">
      <ChapterHero chapter={chapter} />
      <div className="chapter-body">
        <Narrative text={chapter.narrative} />
        <div className="moments-grid">
          {chapter.moments.map((m, i) => (
            <MomentCard key={`${m.year}-${m.title}`} moment={m} index={i} />
          ))}
        </div>
        <StatsRow stats={chapter.stats} />
      </div>
    </section>
  );
}

/* ── Scroll progress line ── */
function ScrollProgressLine() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className="timeline-progress-track">
      <motion.div className="timeline-progress-line" style={{ scaleY }} />
    </div>
  );
}

export default function JourneyTimeline() {
  return (
    <div className="timeline-outer">
      <ScrollProgressLine />
      {chapters.map((chapter) => (
        <ChapterSection key={chapter.id} chapter={chapter} />
      ))}
    </div>
  );
}
