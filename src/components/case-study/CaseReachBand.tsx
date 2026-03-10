"use client";

import { motion } from "framer-motion";

export interface ReachNumber {
  label: string;
  big: string;
  sub: string;
}

export interface DigitalPlatform {
  name: string;
  reach: string;
  impressions: string;
}

export interface ReachData {
  eyebrow: string;
  heading: string;
  numbers: ReachNumber[];
  platforms?: DigitalPlatform[];
}

interface CaseReachBandProps {
  data: ReachData;
}

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export default function CaseReachBand({ data }: CaseReachBandProps) {
  return (
    <section className="cs-reach">
      <div className="cs-reach__inner">
        <motion.div
          className="cs-reach__eyebrow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
        >
          {data.eyebrow}
        </motion.div>
        <motion.h2
          className="cs-reach__heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.1, duration: 0.7, ease }}
          dangerouslySetInnerHTML={{ __html: data.heading }}
        />

        <motion.div
          className="cs-reach__numbers"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.2, duration: 0.7, ease }}
        >
          {data.numbers.map((n, i) => (
            <div key={i} className="cs-reach__card">
              <div className="cs-reach__label">{n.label}</div>
              <div className="cs-reach__big">{n.big}</div>
              <div className="cs-reach__sub">{n.sub}</div>
            </div>
          ))}
        </motion.div>

        {data.platforms && (
          <motion.div
            className="cs-reach__platforms"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.3, duration: 0.7, ease }}
          >
            {data.platforms.map((p, i) => (
              <div key={i} className="cs-reach__platform">
                <div className="cs-reach__platform-name">{p.name}</div>
                <div className="cs-reach__platform-reach">{p.reach}</div>
                <div className="cs-reach__platform-imp">{p.impressions}</div>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
