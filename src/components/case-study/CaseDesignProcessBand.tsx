"use client";

import { motion } from "framer-motion";

export interface DesignItem {
  label: string;
  body: string;
}

export interface DesignProcessData {
  heading: string;
  paragraphs: string[];
  items: DesignItem[];
}

interface CaseDesignProcessBandProps {
  data: DesignProcessData;
}

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export default function CaseDesignProcessBand({ data }: CaseDesignProcessBandProps) {
  return (
    <section className="cs-design-process">
      <div className="cs-design-process__inner">
        <motion.h2
          className="cs-design-process__heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
          dangerouslySetInnerHTML={{ __html: data.heading }}
        />
        {data.paragraphs.map((p, i) => (
          <motion.p
            key={i}
            className="cs-design-process__body"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.1 + i * 0.08, duration: 0.7, ease }}
          >
            {p}
          </motion.p>
        ))}
        <motion.div
          className="cs-design-process__items"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.25, duration: 0.7, ease }}
        >
          {data.items.map((item, i) => (
            <div key={i} className="cs-design-process__item">
              <div className="cs-design-process__item-label">{item.label}</div>
              <div className="cs-design-process__item-body">{item.body}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
