"use client";

import { motion } from "framer-motion";

export interface GardenData {
  eyebrow: string;
  heading: string;
  stat?: string;
  paragraphs: string[];
}

interface CaseGardenBandProps {
  data: GardenData;
}

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export default function CaseGardenBand({ data }: CaseGardenBandProps) {
  return (
    <section className="cs-garden">
      <div className="cs-garden__inner">
        <motion.div
          className="cs-garden__eyebrow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
        >
          {data.eyebrow}
        </motion.div>
        <motion.h2
          className="cs-garden__heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.1, duration: 0.7, ease }}
          dangerouslySetInnerHTML={{ __html: data.heading }}
        />
        {data.stat && (
          <div className="cs-garden__stat" dangerouslySetInnerHTML={{ __html: data.stat }} />
        )}
        {data.paragraphs.map((p, i) => (
          <motion.p
            key={i}
            className="cs-garden__body"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.15 + i * 0.08, duration: 0.7, ease }}
          >
            {p}
          </motion.p>
        ))}
      </div>
    </section>
  );
}
