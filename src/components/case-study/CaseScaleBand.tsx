"use client";

import { motion } from "framer-motion";

export interface ScaleItem {
  title: string;
  body: string;
}

export interface ScaleData {
  heading: string;
  paragraphs: string[];
  items: ScaleItem[];
}

interface CaseScaleBandProps {
  data: ScaleData;
}

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export default function CaseScaleBand({ data }: CaseScaleBandProps) {
  return (
    <section className="cs-scale">
      <div className="cs-scale__inner">
        <motion.h2
          className="cs-scale__heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
          dangerouslySetInnerHTML={{ __html: data.heading }}
        />
        <motion.div
          className="cs-scale__text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.1, duration: 0.7, ease }}
        >
          {data.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </motion.div>
        <motion.div
          className="cs-scale__items"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.2, duration: 0.7, ease }}
        >
          {data.items.map((item, i) => (
            <div key={i} className="cs-scale__item">
              <div className="cs-scale__item-title">{item.title}</div>
              <div className="cs-scale__item-body">{item.body}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
