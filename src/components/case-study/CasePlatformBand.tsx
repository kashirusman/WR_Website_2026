"use client";

import { motion } from "framer-motion";

export interface PlatformFeature {
  bold: string;
  text: string;
}

export interface PlatformData {
  eyebrow: string;
  heading: string;
  watermark?: string;
  paragraphs: string[];
  features: PlatformFeature[];
}

interface CasePlatformBandProps {
  data: PlatformData;
}

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export default function CasePlatformBand({ data }: CasePlatformBandProps) {
  return (
    <section className="cs-platform">
      <div className="cs-platform__inner">
        <motion.div
          className="cs-platform__eyebrow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
        >
          {data.eyebrow}
        </motion.div>
        <motion.h2
          className="cs-platform__heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.1, duration: 0.7, ease }}
          dangerouslySetInnerHTML={{ __html: data.heading }}
        />
        {data.watermark && (
          <div className="cs-platform__watermark" dangerouslySetInnerHTML={{ __html: data.watermark }} />
        )}
        <motion.div
          className="cs-platform__content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.15, duration: 0.7, ease }}
        >
          {data.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <ul className="cs-platform__features">
            {data.features.map((f, i) => (
              <li key={i}><strong>{f.bold}</strong> {f.text}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
