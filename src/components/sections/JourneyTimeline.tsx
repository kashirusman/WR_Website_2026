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

/* ── CountUp ─────────────────────────────────────────────────────── */
function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const hasRun = useRef(false);
  const displayRef = useRef(value);

  // Use a simple approach: render value, animate on mount
  return (
    <span
      ref={(el) => {
        if (!el) return;
        const m = value.match(/^(\$?)(\d+(?:\.\d+)?)(.*)/);
        if (!m || hasRun.current) return;

        const obs = new IntersectionObserver(
          ([e]) => {
            if (e.isIntersecting && !hasRun.current) {
              hasRun.current = true;
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

/* ── Category badge ──────────────────────────────────────────────── */
function CategoryBadge({ category }: { category: TimelineEntry["category"] }) {
  return <span className="tl-badge">{category}</span>;
}

/* ── Year marker ─────────────────────────────────────────────────── */
function YearMarker({ year, month }: { year: number; month?: string }) {
  return (
    <div className="tl-year-marker">
      <div className="tl-year-marker__dot" />
      <span className="tl-year-marker__text">
        {month ? `${month} ` : ""}{year}
      </span>
    </div>
  );
}

/* ── Layout: Hero Background ─────────────────────────────────────── */
function HeroBgEntry({ entry }: { entry: TimelineEntry }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <div ref={ref} className="tl-entry tl-entry--hero-bg">
      <YearMarker year={entry.year} month={entry.month} />
      <div className="tl-hero-bg">
        <motion.div className="tl-hero-bg__img-wrap" style={{ y }}>
          <Image
            src={entry.image}
            alt={entry.title}
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </motion.div>
        <div className="tl-hero-bg__overlay" />
        <motion.div
          className="tl-hero-bg__content"
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease }}
        >
          <CategoryBadge category={entry.category} />
          {entry.subtitle && (
            <motion.p
              className="tl-hero-bg__subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15, duration: 0.7, ease }}
            >
              {entry.subtitle}
            </motion.p>
          )}
          <motion.h2
            className="tl-hero-bg__title"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.9, ease }}
          >
            {entry.title}
          </motion.h2>
          <motion.p
            className="tl-hero-bg__desc"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.7, ease }}
          >
            {entry.description}
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}

/* ── Layout: Big Number ──────────────────────────────────────────── */
function BigNumberEntry({ entry }: { entry: TimelineEntry }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <div ref={ref} className="tl-entry tl-entry--big-number">
      <YearMarker year={entry.year} month={entry.month} />
      <div className="tl-big-number">
        <div className="tl-big-number__bg">
          <Image
            src={entry.image}
            alt={entry.title}
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
          <div className="tl-big-number__bg-overlay" />
        </div>
        <motion.div
          className="tl-big-number__content"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, ease }}
        >
          <CategoryBadge category={entry.category} />
          {entry.subtitle && (
            <p className="tl-big-number__subtitle">{entry.subtitle}</p>
          )}
          <motion.div
            className="tl-big-number__value"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 1, ease }}
          >
            {entry.stat ? <CountUp value={entry.stat.value} /> : entry.title}
          </motion.div>
          <motion.p
            className="tl-big-number__label"
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.7, ease }}
          >
            {entry.title}
          </motion.p>
          <motion.p
            className="tl-big-number__desc"
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.7, ease }}
          >
            {entry.description}
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}

/* ── Layout: Text + Image (text left, image right or vice versa) ─ */
function TextImageEntry({
  entry,
  reversed,
}: {
  entry: TimelineEntry;
  reversed?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <div
      ref={ref}
      className={`tl-entry tl-entry--text-image ${reversed ? "tl-entry--reversed" : ""}`}
    >
      <YearMarker year={entry.year} month={entry.month} />
      <div className="tl-text-image">
        <motion.div
          className="tl-text-image__text"
          initial={{ opacity: 0, x: reversed ? 40 : -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease }}
        >
          <CategoryBadge category={entry.category} />
          <h3 className="tl-text-image__title">{entry.title}</h3>
          <p className="tl-text-image__desc">{entry.description}</p>
          {entry.stat && (
            <div className="tl-text-image__stat">
              <span className="tl-text-image__stat-val">
                {entry.stat.value}
              </span>
              <span className="tl-text-image__stat-lbl">
                {entry.stat.label}
              </span>
            </div>
          )}
        </motion.div>
        <motion.div
          className="tl-text-image__media"
          initial={{ opacity: 0, x: reversed ? -40 : 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.8, ease }}
        >
          <Image
            src={entry.image}
            alt={entry.title}
            width={700}
            height={480}
            className="tl-text-image__img"
          />
        </motion.div>
      </div>
    </div>
  );
}

/* ── Layout: Full-width cinematic image ──────────────────────────── */
function FullImageEntry({ entry }: { entry: TimelineEntry }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <div ref={ref} className="tl-entry tl-entry--full-image">
      <YearMarker year={entry.year} month={entry.month} />
      <motion.div
        className="tl-full-image"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease }}
      >
        <div className="tl-full-image__wrap">
          <motion.div className="tl-full-image__inner" style={{ y }}>
            <Image
              src={entry.image}
              alt={entry.title}
              fill
              sizes="100vw"
              style={{ objectFit: "cover" }}
            />
          </motion.div>
        </div>
        <div className="tl-full-image__caption">
          <CategoryBadge category={entry.category} />
          <h3>{entry.title}</h3>
          <p>{entry.description}</p>
        </div>
      </motion.div>
    </div>
  );
}

/* ── Entry router ────────────────────────────────────────────────── */
function TimelineEntryComponent({ entry }: { entry: TimelineEntry }) {
  switch (entry.layout) {
    case "hero-bg":
      return <HeroBgEntry entry={entry} />;
    case "big-number":
      return <BigNumberEntry entry={entry} />;
    case "text-image":
      return <TextImageEntry entry={entry} />;
    case "image-text":
      return <TextImageEntry entry={entry} reversed />;
    case "full-image":
      return <FullImageEntry entry={entry} />;
    default:
      return <HeroBgEntry entry={entry} />;
  }
}

/* ── Vertical timeline line ──────────────────────────────────────── */
function TimelineLine() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className="tl-line-track">
      <motion.div className="tl-line" style={{ scaleY }} />
    </div>
  );
}

/* ── Main export ─────────────────────────────────────────────────── */
export default function JourneyTimeline() {
  return (
    <section className="tl-timeline">
      <TimelineLine />
      {timelineEntries.map((entry) => (
        <TimelineEntryComponent key={entry.id} entry={entry} />
      ))}
    </section>
  );
}
