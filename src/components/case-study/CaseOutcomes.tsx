"use client";

import { motion } from "framer-motion";

interface OutcomeCard {
  stat: string;
  description: string;
}

interface CaseOutcomesProps {
  cards: OutcomeCard[];
  watermark?: string;
}

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export default function CaseOutcomes({ cards, watermark }: CaseOutcomesProps) {
  return (
    <section className="cs-outcomes" data-watermark={watermark || ""}>
      <div className="cs-outcomes__header">
        <span className="cs-outcomes__num">01</span>
        <h2 className="cs-outcomes__title">Key Outcomes</h2>
      </div>
      <div className="cs-outcomes__grid">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            className="cs-outcomes__card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.08, duration: 0.6, ease }}
          >
            <div className="cs-outcomes__stat">{card.stat}</div>
            <div className="cs-outcomes__desc">{card.description}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
