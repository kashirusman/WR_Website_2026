"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export default function NextDecade() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-15% 0px" });

  return (
    <section className="next-decade-section">
      <motion.div
        ref={ref}
        className="next-decade-container"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.9, ease }}
      >
        <span className="next-decade-label">Looking Ahead</span>
        <h2 className="next-decade-heading">
          The Next Decade of Behaviour Change
        </h2>
        <p className="next-decade-text">
          Twenty years of evidence have taught us one thing — behaviour change
          at scale is possible when you combine science with storytelling. The
          next chapter is about taking that further. AI-powered nudge systems,
          immersive VR experiences, real-time behavioural data, and
          community-driven design will define how we create impact in the years
          ahead.
        </p>
        <p className="next-decade-text">
          From health and education to climate action and financial inclusion,
          the challenges are bigger than ever. But so is our ability to meet
          them. The journey continues.
        </p>
      </motion.div>
    </section>
  );
}
