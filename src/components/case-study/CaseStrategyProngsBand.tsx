"use client";

import { motion } from "framer-motion";

export interface Prong {
  num: string;
  label: string;
  title: string;
  body: string;
  points: string[];
}

export interface StrategyProngsData {
  eyebrow: string;
  heading: string;
  prongs: Prong[];
}

interface Props {
  data: StrategyProngsData;
}

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export default function CaseStrategyProngsBand({ data }: Props) {
  return (
    <section className="cs-prongs">
      <div className="cs-prongs__inner">
        <motion.div
          className="cs-prongs__eyebrow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
        >
          {data.eyebrow}
        </motion.div>

        <motion.h2
          className="cs-prongs__heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.1, duration: 0.7, ease }}
          dangerouslySetInnerHTML={{ __html: data.heading }}
        />

        <motion.div
          className="cs-prongs__grid"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.2, duration: 0.7, ease }}
        >
          {data.prongs.map((prong, i) => (
            <div key={i} className="cs-prong">
              <div className="cs-prong__num">{prong.num}</div>
              <div className="cs-prong__label">{prong.label}</div>
              <div className="cs-prong__title">{prong.title}</div>
              <div className="cs-prong__body">{prong.body}</div>
              <div className="cs-prong__points">
                {prong.points.map((pt, j) => (
                  <div key={j} className="cs-prong__point">
                    <span className="cs-prong__dot" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
