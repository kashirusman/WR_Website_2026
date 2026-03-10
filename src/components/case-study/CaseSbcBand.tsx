"use client";

import { motion } from "framer-motion";

export interface SbcCard {
  title: string;
  body: string;
}

export interface SbcData {
  eyebrow: string;
  heading: string;
  cards: SbcCard[];
  quote?: { text: string; attribution?: string };
}

interface CaseSbcBandProps {
  data: SbcData;
}

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export default function CaseSbcBand({ data }: CaseSbcBandProps) {
  return (
    <section className="cs-sbc">
      <div className="cs-sbc__inner">
        <motion.div
          className="cs-sbc__eyebrow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
        >
          {data.eyebrow}
        </motion.div>
        <motion.h2
          className="cs-sbc__heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.1, duration: 0.7, ease }}
          dangerouslySetInnerHTML={{ __html: data.heading }}
        />
        <motion.div
          className="cs-sbc__grid"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.2, duration: 0.7, ease }}
        >
          {data.cards.map((card, i) => (
            <div key={i} className="cs-sbc__card">
              <div className="cs-sbc__title">{card.title}</div>
              <div className="cs-sbc__body">{card.body}</div>
            </div>
          ))}
        </motion.div>
        {data.quote && (
          <motion.blockquote
            className="cs-sbc__quote"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.3, duration: 0.7, ease }}
          >
            <p>&ldquo;{data.quote.text}&rdquo;</p>
            {data.quote.attribution && <cite>{data.quote.attribution}</cite>}
          </motion.blockquote>
        )}
      </div>
    </section>
  );
}
