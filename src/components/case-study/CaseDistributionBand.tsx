"use client";
import { motion } from "framer-motion";

interface Props {
  data: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
    features: { label: string; value: string }[];
  };
}

export default function CaseDistributionBand({ data }: Props) {
  return (
    <section className="cs-distribution">
      <div className="cs-distribution__inner">
        <div className="cs-distribution__left">
          <motion.p
            className="cs-distribution__eyebrow"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {data.eyebrow}
          </motion.p>
          <motion.h2
            className="cs-distribution__heading"
            dangerouslySetInnerHTML={{ __html: data.heading }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          />
          {data.paragraphs.map((p, i) => (
            <motion.p
              key={i}
              className="cs-distribution__body"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
              viewport={{ once: true }}
            >
              {p}
            </motion.p>
          ))}
        </div>
        <div className="cs-distribution__right">
          <div className="cs-distribution__features">
            {data.features.map((f, i) => (
              <motion.div
                key={i}
                className="cs-distribution__feature"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="cs-distribution__feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <div>
                  <p className="cs-distribution__feature-label">{f.label}</p>
                  <p className="cs-distribution__feature-value">{f.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
