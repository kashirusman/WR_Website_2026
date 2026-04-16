"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { impactStats } from "@/lib/milestones";

/* ── CountUp (stats bar) ─────────────────────────────────────────── */
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

/* ── Trail image sources (half-size) ─────────────────────────────── */
const TRAIL_IMAGES = [
  { src: "/images/timeline/2006.png",   w: 110, h: 74  },
  { src: "/images/timeline/2012.png",   w: 130, h: 87  },
  { src: "/images/timeline/2017.png",   w: 90,  h: 60  },
  { src: "/images/timeline/2009.png",   w: 75,  h: 50  },
  { src: "/images/timeline/2019.png",   w: 140, h: 94  },
  { src: "/images/timeline/2020.png",   w: 105, h: 70  },
  { src: "/images/timeline/2016-b.png", w: 80,  h: 54  },
  { src: "/images/timeline/2011.png",   w: 95,  h: 64  },
] as const;

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
  const loaderRef   = useRef<HTMLDivElement>(null);
  const counterRef  = useRef<HTMLSpanElement>(null);
  const sectionRef  = useRef<HTMLDivElement>(null);

  // "revealed" drives CSS classes on hero content
  const [revealed,   setRevealed]   = useState(false);
  const [loaderDone, setLoaderDone] = useState(false);
  const [trailReady, setTrailReady] = useState(false);
  const [trail,      setTrail]      = useState<TrailItem[]>([]);

  const lastPos = useRef({ x: -999, y: -999 });
  const imgIdx  = useRef(0);

  /* ── Loader sequence (rAF-based, not GSAP — works in any tab state) ── */
  useEffect(() => {
    const loader  = loaderRef.current;
    const counter = counterRef.current;
    if (!loader || !counter) return;

    const SCRAMBLE_MS = 2000; // scramble for 2 s
    const RESOLVE_MS  = 400;  // resolve to 100 over 0.4 s
    const HOLD_MS     = 350;  // hold at 100
    const FADE_MS     = 650;  // loader fade-out

    /* Stage 1: scramble — setInterval fires even in background tabs */
    const t0 = Date.now();
    const scramble = setInterval(() => {
      counter.textContent = String(Math.floor(Math.random() * 890) + 10);
    }, 60);

    /* Stage 2: resolve to 100 */
    const resolveTimer = setTimeout(() => {
      clearInterval(scramble);
      const t1 = Date.now();
      const resolve = setInterval(() => {
        const rp = Math.min((Date.now() - t1) / RESOLVE_MS, 1);
        counter.textContent = String(Math.round(rp * 100));
        if (rp >= 1) {
          clearInterval(resolve);
          counter.textContent = "100";

          /* Stage 3: hold then fade */
          setTimeout(() => {
            loader.style.transition = `opacity ${FADE_MS}ms cubic-bezier(0.4,0,0.2,1)`;
            loader.style.opacity    = "0";
            loader.style.pointerEvents = "none";

            setTimeout(() => {
              setLoaderDone(true);
              setRevealed(true);
              setTimeout(() => setTrailReady(true), 1200);
            }, FADE_MS);
          }, HOLD_MS);
        }
      }, 16);
    }, SCRAMBLE_MS);

    return () => {
      clearInterval(scramble);
      clearTimeout(resolveTimer);
    };
  }, []);

  /* ── Cursor trail ── */
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!trailReady) return;
    const section = sectionRef.current;
    if (!section) return;

    const rect = section.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const dx = x - lastPos.current.x;
    const dy = y - lastPos.current.y;

    if (Math.sqrt(dx * dx + dy * dy) < 90) return;

    lastPos.current = { x, y };
    const img    = TRAIL_IMAGES[imgIdx.current % TRAIL_IMAGES.length];
    imgIdx.current++;

    const id     = ++uid;
    const rotate = (Math.random() - 0.5) * 12;

    setTrail((t) => [...t.slice(-6), { id, src: img.src, w: img.w, h: img.h, x, y, rotate }]);
    setTimeout(() => setTrail((t) => t.filter((item) => item.id !== id)), 1800);
  }, [trailReady]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    section.addEventListener("mousemove", handleMouseMove);
    return () => section.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return (
    <>
      {/* ── Loader overlay ── */}
      {!loaderDone && (
        <div ref={loaderRef} className="jv2-loader" aria-hidden="true">
          <span ref={counterRef} className="jv2-loader__num">0</span>
          <p className="jv2-loader__lbl">LOADING</p>
        </div>
      )}

      {/* ── Hero section ── */}
      <section ref={sectionRef} className="jv2-hero">

        {/* Cursor trail images */}
        <div className="jv2-hero__imgs" aria-hidden="true">
          {trail.map((item) => (
            <div
              key={item.id}
              className="jv2-trail-item"
              style={{
                position: "absolute",
                left:   item.x - item.w / 2,
                top:    item.y - item.h / 2,
                width:  item.w,
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

        {/* Brand lockup */}
        <div className="jv2-hero__center">
          <h1 className={`jv2-hero__brand${revealed ? " jv2-hero__brand--in" : ""}`}>
            <span className="jv2-hero__brand-wh">White Rice</span>
            <em className="jv2-hero__brand-ri">20</em>
          </h1>

          <p className={`jv2-hero__tagline${revealed ? " jv2-hero__tagline--in" : ""}`}>
            Celebrating <em>Twenty Years</em> of Changing Behaviour
          </p>
        </div>

        {/* Scroll cue */}
        <div className={`jv2-hero__cue${revealed ? " jv2-hero__cue--in" : ""}`}>
          <span>SCROLL TO EXPLORE</span>
          <span className="jv2-hero__cue-arrow">↓</span>
        </div>

      </section>

      {/* ── Impact stats bar ── */}
      <div className="jv2-bar">
        {impactStats.map((s, i) => (
          <div key={s.label} className="jv2-bar__stat" style={{ animationDelay: `${i * 0.12}s` }}>
            <div className="jv2-bar__val"><CountUp value={s.value} /></div>
            <div className="jv2-bar__lbl">{s.label}</div>
          </div>
        ))}
      </div>
    </>
  );
}
