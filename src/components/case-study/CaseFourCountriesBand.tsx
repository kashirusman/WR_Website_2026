"use client";
import { motion } from "framer-motion";

interface Props {
  data: {
    label: string;
    cards: { flag: string; name: string; role: string; highlighted?: boolean }[];
  };
}

export default function CaseFourCountriesBand({ data }: Props) {
  return (
    <section className="cs-countries">
      <div className="cs-countries__inner">
        <p className="cs-countries__label">{data.label}</p>
        <div className="cs-countries__row">
          {data.cards.map((c, i) => (
            <motion.div
              key={i}
              className={`cs-countries__card${c.highlighted ? " cs-countries__card--hl" : ""}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <span className="cs-countries__flag">{c.flag}</span>
              <h3 className="cs-countries__name">{c.name}</h3>
              <p className="cs-countries__role">{c.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
