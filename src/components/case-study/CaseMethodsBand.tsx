"use client";

import { motion } from "framer-motion";

export interface MethodCard {
  title: string;
  body: string;
}

export interface MethodsData {
  eyebrow: string;
  heading: string;
  intro?: string;
  cards: MethodCard[];
}

interface CaseMethodsBandProps {
  data: MethodsData;
}

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export default function CaseMethodsBand({ data }: CaseMethodsBandProps) {
  return (
    <section className="cs-methods">
      <div className="cs-methods__inner">
        <motion.div
          className="cs-methods__eyebrow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
        >
          {data.eyebrow}
        </motion.div>
        <motion.h2
          className="cs-methods__heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.1, duration: 0.7, ease }}
          dangerouslySetInnerHTML={{ __html: data.heading }}
        />
        {data.intro && (
          <motion.p
            className="cs-methods__intro"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.15, duration: 0.7, ease }}
          >
            {data.intro}
          </motion.p>
        )}
        <motion.div
          className="cs-methods__grid"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.2, duration: 0.7, ease }}
        >
          {data.cards.map((card, i) => (
            <div key={i} className="cs-methods__card">
              <div className="cs-methods__title">{card.title}</div>
              <div className="cs-methods__body">{card.body}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
