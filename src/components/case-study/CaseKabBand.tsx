"use client";

import { motion } from "framer-motion";

export interface KabCard {
  stage: string;
  name: string;
  channel: string;
  items: string[];
}

export interface KabData {
  eyebrow: string;
  heading: string;
  cards: KabCard[];
}

interface CaseKabBandProps {
  data: KabData;
}

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export default function CaseKabBand({ data }: CaseKabBandProps) {
  return (
    <section className="cs-kab">
      <div className="cs-kab__inner">
        <motion.div
          className="cs-kab__eyebrow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
        >
          {data.eyebrow}
        </motion.div>
        <motion.h2
          className="cs-kab__heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.1, duration: 0.7, ease }}
          dangerouslySetInnerHTML={{ __html: data.heading }}
        />
        <motion.div
          className="cs-kab__grid"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.2, duration: 0.7, ease }}
        >
          {data.cards.map((card, i) => (
            <div key={i} className="cs-kab__card">
              <div className="cs-kab__stage">{card.stage}</div>
              <div className="cs-kab__name">{card.name}</div>
              <div className="cs-kab__channel">{card.channel}</div>
              <ul className="cs-kab__items">
                {card.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
