"use client";

import { motion } from "framer-motion";

export interface TouchpointCard {
  num: string;
  title: string;
  body: string;
  scale: string;
  color: string;
}

export interface TouchpointsData {
  eyebrow: string;
  heading: string;
  cards: TouchpointCard[];
}

interface CaseTouchpointsBandProps {
  data: TouchpointsData;
}

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export default function CaseTouchpointsBand({ data }: CaseTouchpointsBandProps) {
  return (
    <section className="cs-touchpoints">
      <div className="cs-touchpoints__inner">
        <motion.div
          className="cs-touchpoints__eyebrow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
        >
          {data.eyebrow}
        </motion.div>
        <motion.h2
          className="cs-touchpoints__heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.1, duration: 0.7, ease }}
          dangerouslySetInnerHTML={{ __html: data.heading }}
        />
        <motion.div
          className="cs-touchpoints__grid"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.2, duration: 0.7, ease }}
        >
          {data.cards.map((card, i) => (
            <div
              key={i}
              className="cs-touchpoints__card"
              style={{ "--tp-color": card.color } as React.CSSProperties}
            >
              <div className="cs-touchpoints__card-num">{card.num}</div>
              <div className="cs-touchpoints__card-title">{card.title}</div>
              <div className="cs-touchpoints__card-body">{card.body}</div>
              <div
                className="cs-touchpoints__card-scale"
                dangerouslySetInnerHTML={{ __html: card.scale }}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
