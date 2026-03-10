"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export default function OriginStory() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-15% 0px" });

  return (
    <section className="jv2-origin">
      <div className="jv2-grain" />
      <motion.div
        ref={ref}
        className="jv2-origin__inner"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1.2, ease }}
      >
        <motion.span
          className="jv2-origin__label"
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.7, ease }}
        >
          Where It All Began
        </motion.span>

        <motion.blockquote
          className="jv2-origin__quote"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.25, duration: 0.9, ease }}
        >
          Could storytelling, design, and behavioural science drive{" "}
          <em>real social change</em>?
        </motion.blockquote>

        <motion.div
          className="jv2-origin__rule"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.8, ease }}
        />

        <motion.p
          className="jv2-origin__text"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8, ease }}
        >
          In 2006, a small team in Islamabad set out to answer that question.
          What started as an experiment in gamified learning and animated films
          grew into a movement — reaching millions of people across Pakistan
          and beyond. This is the story of that journey, told in five chapters.
        </motion.p>
      </motion.div>
    </section>
  );
}
