"use client";

import { motion } from "framer-motion";

interface ImpactCell {
  big: string;
  desc: string;
}

interface CaseImpactGridProps {
  cells: ImpactCell[];
}

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export default function CaseImpactGrid({ cells }: CaseImpactGridProps) {
  return (
    <div className="cs-impact-grid">
      {cells.map((cell, i) => (
        <motion.div
          key={i}
          className="cs-impact-grid__cell"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ delay: i * 0.06, duration: 0.5, ease }}
        >
          <div className="cs-impact-grid__big">{cell.big}</div>
          <div className="cs-impact-grid__desc">{cell.desc}</div>
        </motion.div>
      ))}
    </div>
  );
}
