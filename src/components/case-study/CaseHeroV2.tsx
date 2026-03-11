"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface HeroData {
  eyebrow: string;
  title: string;
  subtitle?: string;
  description: string;
  meta: { label: string; value: string }[];
}

interface CaseHeroV2Props {
  hero: HeroData;
  year: string;
  tags: string[];
  heroImage?: string;
  heroVideo?: string;
}

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export default function CaseHeroV2({ hero, year, tags, heroImage, heroVideo }: CaseHeroV2Props) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.play().catch(() => {});
  }, [heroVideo]);

  return (
    <section className="cs-hero">
      {/* Background video layer */}
      {heroVideo && (
        <div className="cs-hero__video">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            src={heroVideo}
          />
        </div>
      )}

      {/* Background image layer (hidden if video present) */}
      {heroImage && !heroVideo && (
        <div className="cs-hero__image">
          <Image
            src={heroImage}
            alt=""
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center 30%" }}
          />
        </div>
      )}

      {/* Decorative overlay gradient */}
      <div className="cs-hero__overlay" />

      {/* Tag bar */}
      <div className="cs-hero__label">
        <div className="cs-hero__tag-top">
          {tags.slice(0, 3).join(" \u00B7 ")}
        </div>
      </div>

      {/* Main content */}
      <div className="cs-hero__body">
        <motion.div
          className="cs-hero__eyebrow"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7, ease }}
        >
          {hero.eyebrow}
        </motion.div>

        <motion.h1
          className="cs-hero__title"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.22, duration: 0.8, ease }}
          dangerouslySetInnerHTML={{ __html: hero.title }}
        />

        {hero.subtitle && (
          <motion.div
            className="cs-hero__subtitle"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.34, duration: 0.8, ease }}
          >
            {hero.subtitle}
          </motion.div>
        )}

        <motion.p
          className="cs-hero__description"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.38, duration: 0.8, ease }}
        >
          {hero.description}
        </motion.p>
      </div>

      {/* Meta bar */}
      <motion.div
        className="cs-hero__meta"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8, ease }}
      >
        {year && (
          <div className="cs-hero__meta-item">
            <span className="cs-hero__meta-label">Year</span>
            <span className="cs-hero__meta-value">{year}</span>
          </div>
        )}
        {hero.meta.map((m, i) => (
          <div key={i} className="cs-hero__meta-item">
            <span className="cs-hero__meta-label">{m.label}</span>
            <span className="cs-hero__meta-value">{m.value}</span>
          </div>
        ))}
      </motion.div>

      {/* Back link */}
      <motion.div
        className="cs-hero__back-wrap"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5, ease }}
      >
        <Link href="/work" className="cs-hero__back">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          All Work
        </Link>
      </motion.div>
    </section>
  );
}
