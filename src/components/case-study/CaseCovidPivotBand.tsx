"use client";

import { motion } from "framer-motion";

export interface CovidPivotData {
  label: string;
  heading: string;
  paragraphs: string[];
  tags: string[];
}

interface CaseCovidPivotBandProps {
  data: CovidPivotData;
}

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export default function CaseCovidPivotBand({ data }: CaseCovidPivotBandProps) {
  return (
    <section className="cs-covid-band">
      <div className="cs-covid-band__inner">
        <motion.div
          className="cs-covid-band__label"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
        >
          {data.label}
        </motion.div>
        <motion.h2
          className="cs-covid-band__heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.1, duration: 0.7, ease }}
          dangerouslySetInnerHTML={{ __html: data.heading }}
        />
        {data.paragraphs.map((p, i) => (
          <motion.p
            key={i}
            className="cs-covid-band__body"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.15 + i * 0.08, duration: 0.7, ease }}
          >
            {p}
          </motion.p>
        ))}
        <motion.div
          className="cs-covid-band__tags"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.3, duration: 0.7, ease }}
        >
          {data.tags.map((tag, i) => (
            <span key={i} className="cs-covid-band__tag">{tag}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
