"use client";

import { motion } from "framer-motion";

export interface WorkshopStep {
  num: string;
  name: string;
  body: string;
}

export interface ProvinceCard {
  name: string;
  city: string;
  stat: string;
  breakdown: string;
}

export interface CoCreationData {
  eyebrow: string;
  heading: string;
  workshopSteps: WorkshopStep[];
  provinceCards: ProvinceCard[];
}

interface CaseCoCreationBandProps {
  data: CoCreationData;
}

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export default function CaseCoCreationBand({ data }: CaseCoCreationBandProps) {
  return (
    <section className="cs-cocreation">
      <div className="cs-cocreation__inner">
        <motion.div
          className="cs-cocreation__eyebrow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
        >
          {data.eyebrow}
        </motion.div>
        <motion.h2
          className="cs-cocreation__heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.1, duration: 0.7, ease }}
          dangerouslySetInnerHTML={{ __html: data.heading }}
        />

        {/* Workshop Flow */}
        <motion.div
          className="cs-cocreation__flow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.2, duration: 0.7, ease }}
        >
          {data.workshopSteps.map((step, i) => (
            <div key={i} className="cs-cocreation__step">
              <div className="cs-cocreation__step-num">{step.num}</div>
              <div className="cs-cocreation__step-name">{step.name}</div>
              <div className="cs-cocreation__step-body">{step.body}</div>
            </div>
          ))}
        </motion.div>

        {/* Province Cards */}
        <motion.div
          className="cs-cocreation__provinces"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.3, duration: 0.7, ease }}
        >
          {data.provinceCards.map((p, i) => (
            <div key={i} className="cs-cocreation__province">
              <div className="cs-cocreation__province-name">{p.name}</div>
              <div className="cs-cocreation__province-city">{p.city}</div>
              <div className="cs-cocreation__province-stat">{p.stat}</div>
              <div className="cs-cocreation__province-breakdown">{p.breakdown}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
