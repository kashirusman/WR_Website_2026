"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { timelineEntries } from "@/lib/milestones";
import type { TimelineEntry } from "@/lib/milestones";

gsap.registerPlugin(ScrollTrigger);

/* ── Panel: full-bleed hero-bg / full-image ──────────────────────── */
function HeroBgPanel({ entry }: { entry: TimelineEntry }) {
  return (
    <div className="htl-panel htl-panel--hero">
      <div className="htl-bg">
        <Image
          src={entry.image}
          alt={entry.title}
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="htl-bg__ov" />
      </div>
      <div className="htl-content htl-content--hero">
        {entry.subtitle && <p className="htl-sub">{entry.subtitle}</p>}
        <h2 className="htl-title">{entry.title}</h2>
        <p className="htl-desc">{entry.description}</p>
      </div>
    </div>
  );
}

/* ── Panel: image + text (split) ─────────────────────────────────── */
function SplitPanel({
  entry,
  reversed,
}: {
  entry: TimelineEntry;
  reversed?: boolean;
}) {
  return (
    <div
      className={`htl-panel htl-panel--split${reversed ? " htl-panel--split-rev" : ""}`}
    >
      <div className="htl-split__img">
        <Image
          src={entry.image}
          alt={entry.title}
          fill
          sizes="50vw"
          className="object-cover"
        />
      </div>
      <div className="htl-split__text">
        <h2 className="htl-title">{entry.title}</h2>
        <p className="htl-desc">{entry.description}</p>
        {entry.stat && (
          <div className="htl-split__stat">
            <span className="htl-stat-val">{entry.stat.value}</span>
            <span className="htl-stat-lbl">{entry.stat.label}</span>
          </div>
        )}
      </div>
    </div>
  );
}

/* ── Panel: big-number / centered stat ───────────────────────────── */
function BigNumPanel({ entry }: { entry: TimelineEntry }) {
  return (
    <div className="htl-panel htl-panel--bignum">
      <div className="htl-bg">
        <Image
          src={entry.image}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          style={{ filter: "brightness(0.12) blur(10px)" }}
        />
        <div className="htl-bg__ov" />
      </div>
      <div className="htl-content htl-content--center">
        {entry.stat && <p className="htl-bignum">{entry.stat.value}</p>}
        <p className="htl-title htl-title--lg">{entry.title}</p>
        <p className="htl-desc">{entry.description}</p>
      </div>
    </div>
  );
}

/* ── Entry router ─────────────────────────────────────────────────── */
function Panel({ entry }: { entry: TimelineEntry }) {
  switch (entry.layout) {
    case "big-number":
      return <BigNumPanel entry={entry} />;
    case "text-image":
      return <SplitPanel entry={entry} />;
    case "image-text":
      return <SplitPanel entry={entry} reversed />;
    case "hero-bg":
    case "full-image":
    default:
      return <HeroBgPanel entry={entry} />;
  }
}

/* ── Main export ─────────────────────────────────────────────────── */
export default function TimelineHorizontalGSAP() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const yearRef = useRef<HTMLSpanElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(max-width: 767px)").matches) return;

      const wrapper = wrapperRef.current!;
      const track = trackRef.current!;

      const getScrollDist = () => track.scrollWidth - window.innerWidth;

      gsap.to(track, {
        x: () => -getScrollDist(),
        ease: "none",
        scrollTrigger: {
          trigger: wrapper,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${getScrollDist()}`,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const p = self.progress;
            const idx = Math.min(
              Math.floor(p * timelineEntries.length),
              timelineEntries.length - 1
            );
            if (yearRef.current) {
              yearRef.current.textContent = String(timelineEntries[idx].year);
            }
            if (counterRef.current) {
              counterRef.current.textContent = String(Math.round(p * 500));
            }
            if (progressRef.current) {
              progressRef.current.style.transform = `scaleX(${p})`;
            }
          },
        },
      });
    },
    { scope: wrapperRef }
  );

  return (
    <section className="htl-wrap" ref={wrapperRef}>
      {/* Pinned year overlay — bottom-left */}
      <div className="htl-year-pin" aria-hidden="true">
        <span ref={yearRef} className="htl-year-num">
          {timelineEntries[0].year}
        </span>
      </div>

      {/* Scroll counter — top-right */}
      <div className="htl-counter" aria-hidden="true">
        <span ref={counterRef} className="htl-counter__num">
          0
        </span>
        <span className="htl-counter__lbl">projects</span>
      </div>

      {/* Progress bar — bottom edge */}
      <div className="htl-progress" aria-hidden="true">
        <div ref={progressRef} className="htl-progress__fill" />
      </div>

      {/* Horizontal panels track */}
      <div className="htl-track" ref={trackRef}>
        {timelineEntries.map((entry) => (
          <Panel key={entry.id} entry={entry} />
        ))}
      </div>
    </section>
  );
}
