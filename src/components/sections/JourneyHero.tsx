"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { impactStats } from "@/lib/milestones";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

/* ── Animated counter (shared) ─────────────────────────────────────── */
function CountUp({ value, duration = 2200 }: { value: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState("0");
  const hasRun = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const m = value.match(/^(\$?)(\d+(?:\.\d+)?)(.*)/);
    if (!m) {
      setDisplay(value);
      return;
    }
    const prefix = m[1];
    const num = parseFloat(m[2]);
    const suffix = m[3];
    setDisplay(`${prefix}0${suffix}`);

    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !hasRun.current) {
          hasRun.current = true;
          const t0 = performance.now();
          const tick = (now: number) => {
            const t = Math.min((now - t0) / duration, 1);
            const eased = 1 - Math.pow(1 - t, 3);
            const cur =
              num % 1 !== 0
                ? (eased * num).toFixed(1)
                : Math.round(eased * num).toString();
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
  }, [value, duration]);

  return <span ref={ref}>{display}</span>;
}

/* ── Hero ──────────────────────────────────────────────────────────── */
export default function JourneyHero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const wmY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const wmOp = useTransform(scrollYProgress, [0, 0.6], [0.06, 0]);

  return (
    <>
      <section ref={sectionRef} className="jv2-hero">
        {/* Film-grain overlay */}
        <div className="jv2-grain" />

        {/* Massive "20" background watermark */}
        <motion.div className="jv2-hero__wm" style={{ y: wmY, opacity: wmOp }}>
          20
        </motion.div>

        <div className="jv2-hero__content">
          {/* Date range label */}
          <motion.div
            className="jv2-hero__label"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.4, duration: 1.2, ease }}
          >
            <span className="jv2-hero__rule" />
            <span className="jv2-hero__dates">2006 — 2026</span>
            <span className="jv2-hero__rule" />
          </motion.div>

          {/* Main title */}
          <motion.h1
            className="jv2-hero__title"
            initial={{ opacity: 0, y: 48 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1.1, ease }}
          >
            20 Years of
            <br />
            <em>Changing Behaviour</em>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="jv2-hero__sub"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8, ease }}
          >
            From a small studio in Islamabad to a force for social impact
            <br />
            across Asia, Africa, and Europe.
          </motion.p>

          {/* Scroll indicator */}
          <motion.div
            className="jv2-hero__scroll"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
          >
            <span>Scroll to explore</span>
            <div className="jv2-hero__pulse" />
          </motion.div>
        </div>
      </section>

      {/* ── Impact counter bar ── */}
      <div className="jv2-bar">
        {impactStats.map((s, i) => (
          <motion.div
            key={s.label}
            className="jv2-bar__stat"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.6, ease }}
          >
            <div className="jv2-bar__val">
              <CountUp value={s.value} />
            </div>
            <div className="jv2-bar__lbl">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </>
  );
}
