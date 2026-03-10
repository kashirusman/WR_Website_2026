"use client";

import { motion } from "framer-motion";

export interface EpisodeCard {
  num: string;
  tag: string;
  name: string;
  description: string;
}

export interface EpisodeData {
  eyebrow: string;
  heading: string;
  cards: EpisodeCard[];
  note?: string;
}

interface CaseEpisodeBandProps {
  data: EpisodeData;
}

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export default function CaseEpisodeBand({ data }: CaseEpisodeBandProps) {
  return (
    <section className="cs-episodes">
      <div className="cs-episodes__inner">
        <motion.div
          className="cs-episodes__eyebrow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
        >
          {data.eyebrow}
        </motion.div>
        <motion.h2
          className="cs-episodes__heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.1, duration: 0.7, ease }}
          dangerouslySetInnerHTML={{ __html: data.heading }}
        />
        <motion.div
          className="cs-episodes__grid"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.2, duration: 0.7, ease }}
        >
          {data.cards.map((card, i) => (
            <div key={i} className="cs-episodes__card">
              <div className="cs-episodes__card-num">{card.num}</div>
              <div className="cs-episodes__card-tag">{card.tag}</div>
              <div className="cs-episodes__card-name">{card.name}</div>
              <div className="cs-episodes__card-desc">{card.description}</div>
            </div>
          ))}
        </motion.div>
        {data.note && (
          <motion.div
            className="cs-episodes__note"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.3, duration: 0.7, ease }}
            dangerouslySetInnerHTML={{ __html: data.note }}
          />
        )}
      </div>
    </section>
  );
}
