"use client";

import { motion } from "framer-motion";

export interface TocStep {
  num: string;
  title: string;
  body: string;
}

export interface TheoryOfChangeData {
  label: string;
  steps: TocStep[];
}

interface CaseTheoryOfChangeBandProps {
  data: TheoryOfChangeData;
}

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export default function CaseTheoryOfChangeBand({ data }: CaseTheoryOfChangeBandProps) {
  return (
    <section className="cs-toc-band">
      <div className="cs-toc-band__inner">
        <motion.div
          className="cs-toc-band__label"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
        >
          {data.label}
        </motion.div>
        <motion.div
          className="cs-toc-band__flow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.15, duration: 0.7, ease }}
        >
          {data.steps.map((step, i) => (
            <div key={i} className="cs-toc-band__step">
              <div className="cs-toc-band__dot">{step.num}</div>
              <div className="cs-toc-band__step-title">{step.title}</div>
              <div className="cs-toc-band__step-body">{step.body}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
