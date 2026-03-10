"use client";

import { motion } from "framer-motion";

export interface JourneyStep {
  phase: string;
  title: string;
  body: string;
}

export interface JourneyData {
  label: string;
  steps: JourneyStep[];
}

interface CaseJourneyBandProps {
  data: JourneyData;
}

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export default function CaseJourneyBand({ data }: CaseJourneyBandProps) {
  return (
    <section className="cs-journey">
      <div className="cs-journey__inner">
        <motion.div
          className="cs-journey__label"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
        >
          {data.label}
        </motion.div>
        <motion.div
          className="cs-journey__flow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.15, duration: 0.7, ease }}
        >
          {data.steps.map((step, i) => (
            <div key={i} className="cs-journey__step">
              <div className="cs-journey__phase">{step.phase}</div>
              <div className="cs-journey__title">{step.title}</div>
              <div className="cs-journey__body">{step.body}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
