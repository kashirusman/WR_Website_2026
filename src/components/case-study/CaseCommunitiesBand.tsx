"use client";

import { motion } from "framer-motion";

export interface CommunityCard {
  name: string;
  region: string;
  description: string;
  challenge: string;
}

export interface CommunitiesData {
  label: string;
  watermark?: string;
  cards: CommunityCard[];
}

interface CaseCommunitiesBandProps {
  data: CommunitiesData;
}

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export default function CaseCommunitiesBand({ data }: CaseCommunitiesBandProps) {
  return (
    <section className="cs-communities">
      <div className="cs-communities__inner">
        <motion.div
          className="cs-communities__label"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
        >
          {data.label}
        </motion.div>
        {data.watermark && <div className="cs-communities__watermark">{data.watermark}</div>}
        <motion.div
          className="cs-communities__grid"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.15, duration: 0.7, ease }}
        >
          {data.cards.map((card, i) => (
            <div key={i} className="cs-communities__card">
              <div className="cs-communities__name" dangerouslySetInnerHTML={{ __html: card.name }} />
              <div className="cs-communities__region">{card.region}</div>
              <div className="cs-communities__desc">{card.description}</div>
              <div className="cs-communities__challenge">
                <span className="cs-communities__challenge-label">Challenge:</span> {card.challenge}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
