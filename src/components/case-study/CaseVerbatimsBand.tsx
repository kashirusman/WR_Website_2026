"use client";

import { motion } from "framer-motion";

export interface VerbatimCard {
  quote: string;
  source: string;
}

export interface VerbatimsData {
  eyebrow: string;
  heading: string;
  cards: VerbatimCard[];
}

interface CaseVerbatimsBandProps {
  data: VerbatimsData;
}

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export default function CaseVerbatimsBand({ data }: CaseVerbatimsBandProps) {
  return (
    <section className="cs-verbatims">
      <div className="cs-verbatims__inner">
        <motion.div
          className="cs-verbatims__eyebrow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
        >
          {data.eyebrow}
        </motion.div>
        <motion.h2
          className="cs-verbatims__heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.1, duration: 0.7, ease }}
          dangerouslySetInnerHTML={{ __html: data.heading }}
        />
        <motion.div
          className="cs-verbatims__grid"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.2, duration: 0.7, ease }}
        >
          {data.cards.map((card, i) => (
            <div key={i} className="cs-verbatims__card">
              <div className="cs-verbatims__quote">{card.quote}</div>
              <div className="cs-verbatims__source">{card.source}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
