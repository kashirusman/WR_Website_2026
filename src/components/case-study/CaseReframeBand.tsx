"use client";

import { motion } from "framer-motion";

export interface ReframeData {
  eyebrow: string;
  challenge: string;
  note: string;
}

interface CaseReframeBandProps {
  data: ReframeData;
}

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export default function CaseReframeBand({ data }: CaseReframeBandProps) {
  return (
    <section className="cs-reframe">
      <div className="cs-reframe__inner">
        <motion.div
          className="cs-reframe__eyebrow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
        >
          {data.eyebrow}
        </motion.div>
        <motion.div
          className="cs-reframe__challenge"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.15, duration: 0.7, ease }}
        >
          {data.challenge}
        </motion.div>
        <motion.p
          className="cs-reframe__note"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.25, duration: 0.7, ease }}
        >
          {data.note}
        </motion.p>
      </div>
    </section>
  );
}
