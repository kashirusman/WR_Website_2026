"use client";
import { motion } from "framer-motion";

interface Props {
  data: {
    eyebrow: string;
    heading: string;
    cards: { name: string; sub: string; body: string; color: string }[];
  };
}

export default function CaseRegionsBand({ data }: Props) {
  return (
    <section className="cs-regions">
      <div className="cs-regions__inner">
        <p className="cs-regions__eyebrow">{data.eyebrow}</p>
        <h2
          className="cs-regions__heading"
          dangerouslySetInnerHTML={{ __html: data.heading }}
        />
        <div className="cs-regions__grid">
          {data.cards.map((r, i) => (
            <motion.div
              key={i}
              className={`cs-regions__card cs-regions__card--${r.color}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="cs-regions__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h3 className="cs-regions__name">{r.name}</h3>
              <p className="cs-regions__sub">{r.sub}</p>
              <p className="cs-regions__body">{r.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
