"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import type { Project } from "@/lib/projects";
import type { CaseStudyData } from "@/lib/case-studies";

interface CaseHeroProps {
  project: Project;
  caseStudy: CaseStudyData;
}

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export default function CaseHero({ project, caseStudy }: CaseHeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.45], ["0px", "60px"]);

  const hasVideo = !!caseStudy.video;
  const videoRef = useRef<HTMLVideoElement>(null);

  /* Ensure video plays on mobile (iOS/Android sometimes block autoplay) */
  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;
    vid.muted = true;
    const tryPlay = () => {
      vid.play().catch(() => {});
    };
    tryPlay();
    document.addEventListener("touchstart", tryPlay, { once: true });
    return () => document.removeEventListener("touchstart", tryPlay);
  }, []);

  return (
    <section ref={sectionRef} className="case-hero">
      {/* Parallax background - video or image */}
      <motion.div className="case-hero__bg" style={{ y: imageY }}>
        {hasVideo ? (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="case-hero__video"
          >
            <source src={caseStudy.video!.src} type="video/mp4" />
          </video>
        ) : (
          <Image
            src={project.image}
            alt={`${project.client} - ${project.title}`}
            fill
            priority
            sizes="100vw"
            className="case-hero__image"
          />
        )}
      </motion.div>

      {/* Gradient overlay */}
      <div className="case-hero__overlay" />

      {/* Back link */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5, ease }}
        className="case-hero__back-wrap"
      >
        <Link href="/work" className="case-hero__back">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          All Work
        </Link>
      </motion.div>

      {/* Content */}
      <motion.div className="case-hero__content" style={{ opacity: contentOpacity, y: contentY }}>
        {/* Client badge */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease }}
          className="case-hero__client"
        >
          {project.client}
        </motion.span>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8, ease }}
          className="case-hero__title"
        >
          {project.title}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7, ease }}
          className="case-hero__description"
        >
          {project.description}
        </motion.p>

        {/* Tags + Year */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65, duration: 0.6, ease }}
          className="case-hero__meta"
        >
          {caseStudy.year && (
            <span className="case-hero__year">{caseStudy.year}</span>
          )}
          {caseStudy.tags.map((tag) => (
            <span key={tag} className="case-hero__tag">{tag}</span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
