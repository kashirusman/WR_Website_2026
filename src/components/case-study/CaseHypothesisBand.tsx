"use client";

import { motion } from "framer-motion";

export interface HypothesisRow {
  expected: string;
  reality: string;
}

export interface HypothesisData {
  eyebrow: string;
  heading: string;
  rows: HypothesisRow[];
}

interface CaseHypothesisBandProps {
  data: HypothesisData;
}

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export default function CaseHypothesisBand({ data }: CaseHypothesisBandProps) {
  return (
    <section className="cs-hypothesis">
      <div className="cs-hypothesis__inner">
        <motion.div
          className="cs-hypothesis__eyebrow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
        >
          {data.eyebrow}
        </motion.div>
        <motion.h2
          className="cs-hypothesis__heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.1, duration: 0.7, ease }}
          dangerouslySetInnerHTML={{ __html: data.heading }}
        />
        <motion.div
          className="cs-hypothesis__table"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.2, duration: 0.7, ease }}
        >
          <div className="cs-hypothesis__header">
            <div className="cs-hypothesis__cell cs-hypothesis__cell--header">Expected Barrier</div>
            <div className="cs-hypothesis__cell cs-hypothesis__cell--header">What Actually Happened</div>
          </div>
          {data.rows.map((row, i) => (
            <div key={i} className="cs-hypothesis__row">
              <div className="cs-hypothesis__cell cs-hypothesis__cell--expected">{row.expected}</div>
              <div className="cs-hypothesis__cell cs-hypothesis__cell--reality">
                <span className="cs-hypothesis__tick">✓</span> {row.reality}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
