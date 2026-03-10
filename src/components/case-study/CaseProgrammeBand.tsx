"use client";

import { motion } from "framer-motion";

export interface WeekCard {
  badge: string;
  title: string;
  body: string;
}

export interface ProgrammeData {
  eyebrow: string;
  heading: string;
  cards: WeekCard[];
}

interface CaseProgrammeBandProps {
  data: ProgrammeData;
}

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export default function CaseProgrammeBand({ data }: CaseProgrammeBandProps) {
  return (
    <section className="cs-programme">
      <div className="cs-programme__inner">
        <motion.div
          className="cs-programme__eyebrow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
        >
          {data.eyebrow}
        </motion.div>
        <motion.h2
          className="cs-programme__heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.1, duration: 0.7, ease }}
          dangerouslySetInnerHTML={{ __html: data.heading }}
        />
        <motion.div
          className="cs-programme__flow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.2, duration: 0.7, ease }}
        >
          {data.cards.map((card, i) => (
            <div key={i} className="cs-programme__card">
              <div className="cs-programme__badge">{card.badge}</div>
              <div className="cs-programme__title">{card.title}</div>
              <div className="cs-programme__body">{card.body}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
