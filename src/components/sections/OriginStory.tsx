"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export default function OriginStory() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-15% 0px" });

  return (
    <section className="origin-section">
      <motion.div
        ref={ref}
        className="origin-container"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.9, ease }}
      >
        <span className="origin-label">Where It All Began</span>
        <h2 className="origin-heading">
          A studio in Islamabad. A belief that communication could shift behaviour
          at scale.
        </h2>
        <p className="origin-text">
          In 2006, a small team set out to prove that storytelling, design, and
          behavioural science could drive real social change. What started as an
          experiment in gamified learning and animated films grew into a movement
          - reaching millions of people across Pakistan and beyond. This is the
          story of that journey, told in four chapters.
        </p>
      </motion.div>
    </section>
  );
}
