"use client";

import { motion } from "framer-motion";

export interface HospitalCard {
  city: string;
  abbrev: string;
  fullName: string;
  scale: string;
}

export interface ResearchMethod {
  name: string;
  body: string;
}

export interface HcdResearchData {
  eyebrow: string;
  heading: string;
  hospitals: HospitalCard[];
  methods: ResearchMethod[];
}

interface Props {
  data: HcdResearchData;
}

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export default function CaseHcdResearchBand({ data }: Props) {
  return (
    <section className="cs-hcd">
      <div className="cs-hcd__inner">
        <motion.div
          className="cs-hcd__eyebrow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
        >
          {data.eyebrow}
        </motion.div>

        <motion.h2
          className="cs-hcd__heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.1, duration: 0.7, ease }}
          dangerouslySetInnerHTML={{ __html: data.heading }}
        />

        {/* Hospital cards */}
        <motion.div
          className="cs-hcd__hospitals"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.2, duration: 0.7, ease }}
        >
          {data.hospitals.map((h, i) => (
            <div key={i} className="cs-hcd__hospital">
              <div className="cs-hcd__hosp-city">{h.city}</div>
              <div className="cs-hcd__hosp-abbrev">{h.abbrev}</div>
              <div className="cs-hcd__hosp-full">{h.fullName}</div>
              <div className="cs-hcd__hosp-scale">{h.scale}</div>
            </div>
          ))}
        </motion.div>

        {/* Research methods grid */}
        <motion.div
          className="cs-hcd__methods"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.3, duration: 0.7, ease }}
        >
          {data.methods.map((m, i) => (
            <div key={i} className="cs-hcd__method">
              <div className="cs-hcd__method-name">{m.name}</div>
              <div className="cs-hcd__method-body">{m.body}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
