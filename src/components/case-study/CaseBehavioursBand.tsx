"use client";

import { motion } from "framer-motion";

export interface BehaviourItem {
  num: string;
  name: string;
  sub: string;
}

export interface BehavioursData {
  label: string;
  items: BehaviourItem[];
}

interface CaseBehavioursBandProps {
  data: BehavioursData;
}

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export default function CaseBehavioursBand({ data }: CaseBehavioursBandProps) {
  return (
    <section className="cs-behaviours">
      <div className="cs-behaviours__inner">
        <motion.div
          className="cs-behaviours__label"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
        >
          {data.label}
        </motion.div>
        <motion.div
          className="cs-behaviours__grid"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.15, duration: 0.7, ease }}
        >
          {data.items.map((item, i) => (
            <div key={i} className="cs-behaviours__item">
              <div className="cs-behaviours__num">{item.num}</div>
              <div className="cs-behaviours__name">{item.name}</div>
              <div className="cs-behaviours__sub">{item.sub}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
