"use client";

import { motion } from "framer-motion";

export interface PersonaData {
  label: string;
  name: string;
  body: string;
}

interface CasePersonaCardProps {
  data: PersonaData;
}

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export default function CasePersonaCard({ data }: CasePersonaCardProps) {
  return (
    <motion.div
      className="cs-persona-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease }}
    >
      <div className="cs-persona-card__label">{data.label}</div>
      <div className="cs-persona-card__name">{data.name}</div>
      <div className="cs-persona-card__body" dangerouslySetInnerHTML={{ __html: data.body }} />
    </motion.div>
  );
}
