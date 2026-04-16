"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { impactStats } from "@/lib/milestones";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

/* ── Loader ──────────────────────────────────────────────────────── */
function JourneyLoader() {
  const [count, setCount] = useState(0);
  const [hiding, setHiding] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const duration = 1800;
    const t0 = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const progress = Math.min((now - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 2.5);
      setCount(Math.round(eased * 100));
      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          setHiding(true);
          setTimeout(() => setDone(true), 700);
        }, 300);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  if (done) return null;

  return (
    <div className={`jv2-loader${hiding ? " jv2-loader--hide" : ""}`} aria-hidden="true">
      <p className="jv2-loader__num">{count}</p>
      <p className="jv2-loader__lbl">LOADING</p>
    </div>
  );
}

/* ── CountUp ─────────────────────────────────────────────────────── */
function CountUp({ value, duration = 2200 }: { value: string; duration?: number }) {
  return (
    <span
      ref={(el) => {
        if (!el) return;
        const m = value.match(/^(\$?)(\d+(?:\.\d+)?)(.*)/);
        if (!m) { el.textContent = value; return; }
        let hasRun = false;
        const obs = new IntersectionObserver(([e]) => {
          if (e.isIntersecting && !hasRun) {
            hasRun = true;
            const [, prefix, numStr, suffix] = m;
            const num = parseFloat(numStr);
            const t0 = performance.now();
            const tick = (now: number) => {
              const t = Math.min((now - t0) / duration, 1);
              const eased = 1 - Math.pow(1 - t, 3);
              const cur = num % 1 !== 0
                ? (eased * num).toFixed(1)
                : String(Math.round(eased * num));
              el.textContent = `${prefix}${cur}${suffix}`;
              if (t < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        }, { threshold: 0.3 });
        obs.observe(el);
      }}
    >
      {value}
    </span>
  );
}

/* ── Trail image sources ─────────────────────────────────────────── */
const TRAIL_IMAGES = [
  { src: "/images/timeline/2006.png",   w: 110, h: 74 },
  { src: "/images/timeline/2012.png",   w: 130, h: 87 },
  { src: "/images/timeline/2017.png",   w: 90,  h: 60 },
  { src: "/images/timeline/2009.png",   w: 75,  h: 50 },
  { src: "/images/timeline/2019.png",   w: 140, h: 94 },
  { src: "/images/timeline/2020.png",   w: 105, h: 70 },
  { src: "/images/timeline/2016-b.png", w: 80,  h: 54 },
  { src: "/images/timeline/2011.png",   w: 95,  h: 64 },
] as const;

/* ── Trail item type ─────────────────────────────────────────────── */
interface TrailItem {
  id: number;
  src: string;
  w: number;
  h: number;
  x: number;
  y: number;
  rotate: number;
}

let uid = 0;

/* ── Main export ─────────────────────────────────────────────────── */
export default function JourneyHero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [trail, setTrail] = useState<TrailItem[]>([]);
  const lastPos = useRef({ x: -999, y: -999 });
  const imgIdx = useRef(0);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const section = sectionRef.current;
    if (!section) return;

    const rect = section.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const dx = x - lastPos.current.x;
    const dy = y - lastPos.current.y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    // Only spawn a new image after cursor has moved 90px
    if (dist < 90) return;

    lastPos.current = { x, y };
    const img = TRAIL_IMAGES[imgIdx.current % TRAIL_IMAGES.length];
    imgIdx.current++;

    const id = ++uid;
    const rotate = (Math.random() - 0.5) * 12; // ±6° tilt

    setTrail((t) => [...t.slice(-6), { id, src: img.src, w: img.w, h: img.h, x, y, rotate }]);

    // Remove after animation completes
    setTimeout(() => {
      setTrail((t) => t.filter((item) => item.id !== id));
    }, 1800);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    section.addEventListener("mousemove", handleMouseMove);
    return () => section.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return (
    <>
      <JourneyLoader />

      <section ref={sectionRef} className="jv2-hero">
        {/* Cursor trail images */}
        <div className="jv2-hero__imgs" aria-hidden="true">
          {trail.map((item) => (
            <div
              key={item.id}
              className="jv2-trail-item"
              style={{
                position: "absolute",
                left: item.x - item.w / 2,
                top: item.y - item.h / 2,
                width: item.w,
                height: item.h,
                ["--r" as string]: `${item.rotate}deg`,
                pointerEvents: "none",
              }}
            >
              <Image
                src={item.src}
                alt=""
                width={item.w}
                height={item.h}
                className="object-cover"
                style={{ display: "block", borderRadius: "2px" }}
              />
            </div>
          ))}
        </div>

        {/* Brand lockup — z-index 3 */}
        <div className="jv2-hero__center">
          <motion.h1
            className="jv2-hero__brand"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.9, ease }}
          >
            <span className="jv2-hero__brand-wh">White Rice</span>
            <em className="jv2-hero__brand-ri">20</em>
          </motion.h1>

          <motion.p
            className="jv2-hero__tagline"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.8, ease }}
          >
            Celebrating <em>Twenty Years</em> of Changing Behaviour
          </motion.p>
        </div>

        {/* Scroll cue */}
        <motion.div
          className="jv2-hero__cue"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
        >
          <span>SCROLL TO EXPLORE</span>
          <span className="jv2-hero__cue-arrow">↓</span>
        </motion.div>
      </section>

      {/* Impact stats bar */}
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
