"use client";

import { motion } from "framer-motion";

export interface TopicCard {
  num: string;
  name: string;
  body: string;
  count: string;
  color?: string;
}

export interface TopicsData {
  eyebrow: string;
  heading: string;
  cards: TopicCard[];
}

interface CaseTopicsBandProps {
  data: TopicsData;
}

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export default function CaseTopicsBand({ data }: CaseTopicsBandProps) {
  return (
    <section className="cs-topics">
      <div className="cs-topics__inner">
        <motion.div
          className="cs-topics__eyebrow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
        >
          {data.eyebrow}
        </motion.div>
        <motion.h2
          className="cs-topics__heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.1, duration: 0.7, ease }}
          dangerouslySetInnerHTML={{ __html: data.heading }}
        />
        <motion.div
          className="cs-topics__grid"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.2, duration: 0.7, ease }}
        >
          {data.cards.map((card, i) => (
            <div key={i} className="cs-topics__card" style={{ "--topic-color": card.color || "var(--cs-accent-lt)" } as React.CSSProperties}>
              <div className="cs-topics__num">{card.num}</div>
              <div className="cs-topics__name">{card.name}</div>
              <div className="cs-topics__body">{card.body}</div>
              <div className="cs-topics__count" dangerouslySetInnerHTML={{ __html: card.count }} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
