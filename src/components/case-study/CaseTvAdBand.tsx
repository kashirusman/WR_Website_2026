"use client";

import { motion } from "framer-motion";

export interface ArcStep {
  label: string;
  text: string;
  color: "steel" | "red" | "amber";
}

export interface TvAdData {
  eyebrow: string;
  heading: string;
  paragraphs: string[];
  arcSteps: ArcStep[];
}

interface Props {
  data: TvAdData;
}

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export default function CaseTvAdBand({ data }: Props) {
  return (
    <section className="cs-tvad">
      <div className="cs-tvad__inner">
        <div className="cs-tvad__left">
          <motion.div
            className="cs-tvad__eyebrow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease }}
          >
            {data.eyebrow}
          </motion.div>

          <motion.h2
            className="cs-tvad__heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.1, duration: 0.7, ease }}
            dangerouslySetInnerHTML={{ __html: data.heading }}
          />

          {data.paragraphs.map((p, i) => (
            <motion.p
              key={i}
              className="cs-tvad__body"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.15 + i * 0.08, duration: 0.6, ease }}
            >
              {p}
            </motion.p>
          ))}
        </div>

        <motion.div
          className="cs-tvad__right"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.25, duration: 0.7, ease }}
        >
          <div className="cs-tvad__arc">
            {data.arcSteps.map((step, i) => (
              <div key={i} className={`cs-tvad__arc-step cs-tvad__arc-step--${step.color}`}>
                <div className="cs-tvad__arc-dot" />
                <div>
                  <div className="cs-tvad__arc-label">{step.label}</div>
                  <div className="cs-tvad__arc-text">{step.text}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
