"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import { impactStats } from "@/lib/milestones";

export default function JourneyHero() {
  return (
    <>
      {/* Hero */}
      <section className="journey-hero">
        <motion.div
          className="journey-hero-container"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <SectionLabel>Our Journey</SectionLabel>
          <h1 className="journey-hero-title">
            20 Years of
            <br />
            <span className="gold">Changing Behaviour</span>
          </h1>
          <p className="journey-hero-subtitle">
            From a small studio in Islamabad to a force for social impact across
            Asia, Africa, and Europe - this is the story of how design and
            storytelling changed millions of lives.
          </p>
          <div className="scroll-indicator">
            <span>Scroll to explore</span>
            <div className="scroll-line" />
          </div>
        </motion.div>
      </section>

      {/* Impact stat bar */}
      <div className="impact-bar">
        {impactStats.map((stat) => (
          <motion.div
            key={stat.label}
            className="impact-stat"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <div className="impact-stat-value">{stat.value}</div>
            <div className="impact-stat-label">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </>
  );
}
