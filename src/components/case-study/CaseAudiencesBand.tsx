"use client";

import { motion } from "framer-motion";

export interface AudienceCard {
  role: string;
  name: string;
  tag: string;
  body: string;
  incentive: string;
  color?: string;
}

export interface AudiencesData {
  label: string;
  cards: AudienceCard[];
}

interface CaseAudiencesBandProps {
  data: AudiencesData;
}

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export default function CaseAudiencesBand({ data }: CaseAudiencesBandProps) {
  return (
    <section className="cs-audiences">
      <div className="cs-audiences__inner">
        <motion.div
          className="cs-audiences__label"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
        >
          {data.label}
        </motion.div>
        <motion.div
          className="cs-audiences__grid"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.15, duration: 0.7, ease }}
        >
          {data.cards.map((card, i) => (
            <div key={i} className="cs-audiences__card" style={{ "--aud-color": card.color || "rgba(255,255,255,0.3)" } as React.CSSProperties}>
              <div className="cs-audiences__bar" />
              <div className="cs-audiences__role">{card.role}</div>
              <div className="cs-audiences__name">{card.name}</div>
              <div className="cs-audiences__tag">{card.tag}</div>
              <div className="cs-audiences__body">{card.body}</div>
              <div className="cs-audiences__incentive">
                <span className="cs-audiences__incentive-label">Incentive:</span> {card.incentive}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
