"use client";

import { motion } from "framer-motion";

export interface DiversityCard {
  label: string;
  title: string;
  body: string;
}

export interface DiversityData {
  eyebrow: string;
  heading: string;
  cards: DiversityCard[];
}

interface CaseDiversityBandProps {
  data: DiversityData;
}

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export default function CaseDiversityBand({ data }: CaseDiversityBandProps) {
  return (
    <section className="cs-diversity">
      <div className="cs-diversity__inner">
        <motion.div
          className="cs-diversity__eyebrow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
        >
          {data.eyebrow}
        </motion.div>
        <motion.h2
          className="cs-diversity__heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.1, duration: 0.7, ease }}
          dangerouslySetInnerHTML={{ __html: data.heading }}
        />
        <motion.div
          className="cs-diversity__grid"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.2, duration: 0.7, ease }}
        >
          {data.cards.map((card, i) => (
            <div key={i} className="cs-diversity__card">
              <div className="cs-diversity__label">{card.label}</div>
              <div className="cs-diversity__title">{card.title}</div>
              <div className="cs-diversity__body">{card.body}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
