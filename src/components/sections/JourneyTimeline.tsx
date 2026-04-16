"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
} from "framer-motion";
import { timelineEntries } from "@/lib/milestones";
import type { TimelineEntry } from "@/lib/milestones";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

/* ── Group entries by year ────────────────────────────────────────── */
function groupByYear(entries: TimelineEntry[]) {
  const map = new Map<number, TimelineEntry[]>();
  for (const e of entries) {
    if (!map.has(e.year)) map.set(e.year, []);
    map.get(e.year)!.push(e);
  }
  return Array.from(map.entries()).sort(([a], [b]) => a - b);
}

/* ── CountUp ─────────────────────────────────────────────────────── */
function CountUp({ value }: { value: string }) {
  return (
    <span
      ref={(el) => {
        if (!el) return;
        const m = value.match(/^(\$?)(\d+(?:\.\d+)?)(.*)/);
        if (!m) return;
        let hasRun = false;
        const obs = new IntersectionObserver(
          ([e]) => {
            if (e.isIntersecting && !hasRun) {
              hasRun = true;
              const [, prefix, numStr, suffix] = m;
              const num = parseFloat(numStr);
              const t0 = performance.now();
              const tick = (now: number) => {
                const t = Math.min((now - t0) / 2000, 1);
                const eased = 1 - Math.pow(1 - t, 3);
                const cur =
                  num % 1 !== 0
                    ? (eased * num).toFixed(1)
                    : String(Math.round(eased * num));
                el.textContent = `${prefix}${cur}${suffix}`;
                if (t < 1) requestAnimationFrame(tick);
              };
              requestAnimationFrame(tick);
            }
          },
          { threshold: 0.3 }
        );
        obs.observe(el);
      }}
    >
      {value}
    </span>
  );
}

/* ── Date label "■ MONTH YEAR · CATEGORY" ───────────────────────── */
function DateLabel({
  year,
  month,
  category,
}: {
  year: number;
  month?: string;
  category: TimelineEntry["category"];
}) {
  return (
    <div className="sqtl-date">
      <span className="sqtl-date__dot" />
      <span className="sqtl-date__text">
        {month ? `${month} ` : ""}
        {year}
      </span>
      <span className="sqtl-date__sep">·</span>
      <span className="sqtl-date__cat">{category}</span>
    </div>
  );
}

/* ── Year Break — full-screen black with giant year number ────────── */
function YearBreak({ year }: { year: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["18%", "-18%"]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.8, 1],
    [0, 1, 1, 0]
  );

  return (
    <div ref={ref} className="sqtl-year-break">
      <motion.span className="sqtl-year-break__num" style={{ y, opacity }}>
        {year}
      </motion.span>
    </div>
  );
}

/* ── Entry: text left + image right (or reversed) ────────────────── */
function EntryTextImage({
  entry,
  reversed,
  priority,
}: {
  entry: TimelineEntry;
  reversed?: boolean;
  priority?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-8% 0px" });
  const objPos = entry.focalPoint ?? "center";

  return (
    <div
      ref={ref}
      className={`sqtl-split ${reversed ? "sqtl-split--rev" : ""}`}
    >
      <motion.div
        className="sqtl-split__text"
        initial={{ opacity: 0, x: reversed ? 32 : -32 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.75, ease }}
      >
        <DateLabel
          year={entry.year}
          month={entry.month}
          category={entry.category}
        />
        <h2 className="sqtl-split__title">{entry.title}</h2>
        <p className="sqtl-split__desc">{entry.description}</p>
        {entry.stat && (
          <div className="sqtl-split__stat">
            <span className="sqtl-split__stat-val">
              <CountUp value={entry.stat.value} />
            </span>
            <span className="sqtl-split__stat-lbl">{entry.stat.label}</span>
          </div>
        )}
      </motion.div>
      <motion.div
        className="sqtl-split__img"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.12, duration: 0.9 }}
      >
        <Image
          src={entry.image}
          alt={entry.imageAlt ?? entry.title}
          fill
          sizes="(max-width: 768px) 100vw, 60vw"
          quality={90}
          priority={priority}
          className="object-cover"
          style={{ objectPosition: objPos }}
        />
      </motion.div>
    </div>
  );
}

/* ── Entry: full-bleed hero with text overlay ─────────────────────── */
function EntryHero({ entry, priority }: { entry: TimelineEntry; priority?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-5% 0px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const objPos = entry.focalPoint ?? "center";

  return (
    <div ref={ref} className="sqtl-hero">
      <div className="sqtl-hero__bg">
        <motion.div className="sqtl-hero__par" style={{ y: imgY }}>
          <Image
            src={entry.image}
            alt={entry.imageAlt ?? entry.title}
            fill
            sizes="100vw"
            quality={90}
            priority={priority}
            className="object-cover"
            style={{ objectPosition: objPos }}
          />
        </motion.div>
        <div className="sqtl-hero__ov" />
      </div>
      <motion.div
        className="sqtl-hero__body"
        initial={{ opacity: 0, y: 56 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease }}
      >
        <DateLabel
          year={entry.year}
          month={entry.month}
          category={entry.category}
        />
        {entry.subtitle && (
          <p className="sqtl-hero__sub">{entry.subtitle}</p>
        )}
        <h2 className="sqtl-hero__title">{entry.title}</h2>
        <p className="sqtl-hero__desc">{entry.description}</p>
      </motion.div>
    </div>
  );
}

/* ── Entry: centered big stat / number ───────────────────────────── */
function EntryBigStat({ entry }: { entry: TimelineEntry }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const objPos = entry.focalPoint ?? "center";

  return (
    <div ref={ref} className="sqtl-bigstat">
      <div className="sqtl-bigstat__bg">
        <Image
          src={entry.image}
          alt=""
          fill
          sizes="100vw"
          quality={90}
          className="object-cover"
          style={{ filter: "brightness(0.2) blur(6px)", objectPosition: objPos }}
        />
        <div className="sqtl-bigstat__ov" />
      </div>
      <div className="sqtl-bigstat__body">
        <DateLabel
          year={entry.year}
          month={entry.month}
          category={entry.category}
        />
        {entry.stat && (
          <motion.p
            className="sqtl-bigstat__val"
            initial={{ opacity: 0, scale: 0.82 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.85, ease }}
          >
            <CountUp value={entry.stat.value} />
          </motion.p>
        )}
        <motion.p
          className="sqtl-bigstat__label"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.7, ease }}
        >
          {entry.title}
        </motion.p>
        <motion.p
          className="sqtl-bigstat__desc"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.55, duration: 0.7 }}
        >
          {entry.description}
        </motion.p>
      </div>
    </div>
  );
}

/* ── Entry router ─────────────────────────────────────────────────── */
function Entry({ entry, priority }: { entry: TimelineEntry; priority?: boolean }) {
  switch (entry.layout) {
    case "big-number":
      return <EntryBigStat entry={entry} />;
    case "text-image":
      return <EntryTextImage entry={entry} priority={priority} />;
    case "image-text":
      return <EntryTextImage entry={entry} reversed priority={priority} />;
    case "hero-bg":
    case "full-image":
    default:
      return <EntryHero entry={entry} priority={priority} />;
  }
}

/* ── Left progress line ───────────────────────────────────────────── */
function ProgressLine() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className="sqtl-pline-wrap">
      <div className="sqtl-pline-track">
        <motion.div className="sqtl-pline" style={{ scaleY }} />
      </div>
    </div>
  );
}

/* ── Main export ─────────────────────────────────────────────────── */
const PRIORITY_IDS = new Set(timelineEntries.slice(0, 3).map((e) => e.id));

export default function JourneyTimeline() {
  const yearGroups = groupByYear(timelineEntries);

  return (
    <section className="sqtl-wrap">
      <ProgressLine />
      {yearGroups.map(([year, entries]) => (
        <div key={year} className="sqtl-year-group">
          <YearBreak year={year} />
          {entries.map((e) => (
            <Entry key={e.id} entry={e} priority={PRIORITY_IDS.has(e.id)} />
          ))}
        </div>
      ))}
    </section>
  );
}
