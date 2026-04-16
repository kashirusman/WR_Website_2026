"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export default function NextDecade() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-15% 0px" });

  return (
    <section className="jv2-next">
      <div className="jv2-grain" />

      {/* Faint watermark */}
      <div className="jv2-next__wm">20+</div>

      <motion.div
        ref={ref}
        className="jv2-next__inner"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1.2, ease }}
      >
        <motion.span
          className="jv2-next__label"
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.7, ease }}
        >
          Looking Ahead
        </motion.span>

        <motion.h2
          className="jv2-next__heading"
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.25, duration: 0.9, ease }}
        >
          The Next Decade of
          <br />
          <em>Behaviour Change</em>
        </motion.h2>

        <motion.div
          className="jv2-next__rule"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.8, ease }}
        />

        <motion.p
          className="jv2-next__text"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8, ease }}
        >
          Twenty years of evidence have taught us one thing: behaviour change
          at scale is possible when you combine science with storytelling. The
          next chapter is about taking that further. AI-powered nudge systems,
          immersive experiences, real-time behavioural data, and
          community-driven design will define how we create impact.
        </motion.p>

        <motion.p
          className="jv2-next__text"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.75, duration: 0.8, ease }}
        >
          From health and education to climate action and financial inclusion,
          the challenges are bigger than ever. But so is our ability to meet
          them. The journey continues.
        </motion.p>
      </motion.div>
    </section>
  );
}
