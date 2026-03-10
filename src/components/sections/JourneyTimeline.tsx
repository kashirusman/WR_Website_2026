"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
} from "framer-motion";
import { chapters } from "@/lib/milestones";
import type { Chapter, Moment } from "@/lib/milestones";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

/* ── CountUp (inline) ─────────────────────────────────────────────── */
function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);
  const hasRun = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const m = value.match(/^(\$?)(\d+(?:\.\d+)?)(.*)/);
    if (!m) return;
    const [, prefix, numStr, suffix] = m;
    const num = parseFloat(numStr);
    setDisplay(`${prefix}0${suffix}`);

    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !hasRun.current) {
          hasRun.current = true;
          const t0 = performance.now();
          const tick = (now: number) => {
            const t = Math.min((now - t0) / 2000, 1);
            const eased = 1 - Math.pow(1 - t, 3);
            const cur =
              num % 1 !== 0
                ? (eased * num).toFixed(1)
                : String(Math.round(eased * num));
            setDisplay(`${prefix}${cur}${suffix}`);
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [value]);

  return <span ref={ref}>{display}</span>;
}

/* ── Era Divider — full-viewport chapter title card ─────────────── */
function EraDivider({ chapter }: { chapter: Chapter }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20% 0px" });

  return (
    <div ref={ref} className="jv2-era">
      <div className="jv2-grain" />
      <motion.div
        className="jv2-era__content"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, ease }}
      >
        <motion.span
          className="jv2-era__chapter"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.7, ease }}
        >
          Chapter {chapter.number}
        </motion.span>

        <motion.div
          className="jv2-era__rule"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.8, ease }}
        />

        <motion.h2
          className="jv2-era__years"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.35, duration: 0.9, ease }}
        >
          {chapter.era}
        </motion.h2>

        <motion.p
          className="jv2-era__title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.55, duration: 0.7, ease }}
        >
          {chapter.title}
        </motion.p>
      </motion.div>
    </div>
  );
}

/* ── Parallax chapter hero image ─────────────────────────────────── */
function ChapterHero({ chapter }: { chapter: Chapter }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div ref={ref} className="jv2-chero">
      <motion.div className="jv2-chero__bg" style={{ y }}>
        <Image
          src={chapter.heroImage}
          alt={chapter.title}
          fill
          sizes="100vw"
          className="jv2-chero__img"
          priority={chapter.number === "01"}
        />
      </motion.div>
      <div className="jv2-chero__overlay" />
    </div>
  );
}

/* ── Narrative block ─────────────────────────────────────────────── */
function Narrative({ text }: { text: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-15% 0px" });

  return (
    <motion.div
      ref={ref}
      className="jv2-narrative"
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease }}
    >
      <p>{text}</p>
    </motion.div>
  );
}

/* ── Moment card ─────────────────────────────────────────────────── */
function MomentCard({ moment, index }: { moment: Moment; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <motion.div
      ref={ref}
      className="jv2-moment"
      initial={{ opacity: 0, y: 48 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12, ease }}
    >
      <div className="jv2-moment__img-wrap">
        <Image
          src={moment.image}
          alt={moment.title}
          width={600}
          height={400}
          className="jv2-moment__img"
        />
        <span className="jv2-moment__year">{moment.year}</span>
      </div>
      <h3 className="jv2-moment__title">{moment.title}</h3>
      <p className="jv2-moment__caption">{moment.caption}</p>
    </motion.div>
  );
}

/* ── Stats row with counting animation ───────────────────────────── */
function StatsRow({ stats }: { stats: Chapter["stats"] }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <motion.div
      ref={ref}
      className="jv2-stats"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6, ease }}
    >
      {stats.map((s, i) => (
        <motion.div
          key={s.label}
          className="jv2-stats__item"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: i * 0.15, duration: 0.6, ease }}
        >
          <span className="jv2-stats__val">
            <CountUp value={s.value} />
          </span>
          <span className="jv2-stats__lbl">{s.label}</span>
        </motion.div>
      ))}
    </motion.div>
  );
}

/* ── Full chapter block ──────────────────────────────────────────── */
function ChapterBlock({ chapter, isOdd }: { chapter: Chapter; isOdd: boolean }) {
  return (
    <div className={`jv2-chapter ${isOdd ? "jv2-chapter--dark" : ""}`}>
      <EraDivider chapter={chapter} />
      <ChapterHero chapter={chapter} />
      <div className="jv2-chapter__body">
        <Narrative text={chapter.narrative} />
        <div className="jv2-moments">
          {chapter.moments.map((m, i) => (
            <MomentCard key={`${m.year}-${m.title}`} moment={m} index={i} />
          ))}
        </div>
        <StatsRow stats={chapter.stats} />
      </div>
    </div>
  );
}

/* ── Golden scroll-progress thread ───────────────────────────────── */
function GoldenThread() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className="jv2-thread-track">
      <motion.div className="jv2-thread-line" style={{ scaleY }} />
    </div>
  );
}

/* ── Main export ─────────────────────────────────────────────────── */
export default function JourneyTimeline() {
  return (
    <div className="jv2-timeline">
      <GoldenThread />
      {chapters.map((chapter, i) => (
        <ChapterBlock key={chapter.id} chapter={chapter} isOdd={i % 2 === 0} />
      ))}
    </div>
  );
}
