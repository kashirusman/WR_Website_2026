"use client";

import { motion } from "framer-motion";

export interface PatientBandData {
  eyebrow: string;
  headline: string;
  body: string;
}

interface Props {
  data: PatientBandData;
}

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export default function CasePatientBand({ data }: Props) {
  return (
    <section className="cs-patient">
      <div className="cs-patient__inner">
        <motion.div
          className="cs-patient__eyebrow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
        >
          {data.eyebrow}
        </motion.div>

        <motion.div
          className="cs-patient__headline"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.1, duration: 0.7, ease }}
        >
          &ldquo;{data.headline}&rdquo;
        </motion.div>

        <motion.p
          className="cs-patient__body"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.2, duration: 0.7, ease }}
        >
          {data.body}
        </motion.p>
      </div>
    </section>
  );
}
