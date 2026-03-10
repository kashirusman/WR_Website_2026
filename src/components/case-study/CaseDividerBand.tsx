"use client";

import { motion } from "framer-motion";

export interface DividerBandData {
  stat: string;
  text: string;
}

interface CaseDividerBandProps {
  data: DividerBandData;
}

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export default function CaseDividerBand({ data }: CaseDividerBandProps) {
  return (
    <section className="cs-divider-band">
      <motion.div
        className="cs-divider-band__stat"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease }}
        dangerouslySetInnerHTML={{ __html: data.stat }}
      />
      <motion.div
        className="cs-divider-band__text"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ delay: 0.15, duration: 0.7, ease }}
      >
        {data.text}
      </motion.div>
    </section>
  );
}
