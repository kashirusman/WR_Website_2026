"use client";
import { motion } from "framer-motion";

interface Props {
  data: {
    eyebrow: string;
    heading: string;
    cards: { name: string; body: string }[];
    note?: string;
  };
}

export default function CaseDesignCycleBand({ data }: Props) {
  return (
    <section className="cs-cycle">
      <div className="cs-cycle__inner">
        <p className="cs-cycle__eyebrow">{data.eyebrow}</p>
        <h2
          className="cs-cycle__heading"
          dangerouslySetInnerHTML={{ __html: data.heading }}
        />
        <div className="cs-cycle__grid">
          {data.cards.map((card, i) => (
            <motion.div
              key={i}
              className="cs-cycle__card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="cs-cycle__num">{String(i + 1).padStart(2, "0")}</div>
              <h3 className="cs-cycle__name">{card.name}</h3>
              <p className="cs-cycle__body">{card.body}</p>
            </motion.div>
          ))}
        </div>
        {data.note && (
          <motion.div
            className="cs-cycle__note"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            dangerouslySetInnerHTML={{ __html: data.note }}
          />
        )}
      </div>
    </section>
  );
}
