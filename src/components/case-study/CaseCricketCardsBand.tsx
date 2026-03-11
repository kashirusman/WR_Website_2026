"use client";
import { motion } from "framer-motion";

interface Props {
  data: {
    eyebrow: string;
    heading: string;
    body: string;
    cardCount: number;
    categories: { label: string; title: string; body: string }[];
  };
}

export default function CaseCricketCardsBand({ data }: Props) {
  return (
    <section className="cs-crk-cards">
      <div className="cs-crk-cards__inner">
        <p className="cs-crk-cards__eyebrow">{data.eyebrow}</p>
        <h2
          className="cs-crk-cards__heading"
          dangerouslySetInnerHTML={{ __html: data.heading }}
        />
        <p className="cs-crk-cards__body">{data.body}</p>

        {/* Mini card deck */}
        <div className="cs-crk-cards__deck">
          {Array.from({ length: data.cardCount }, (_, i) => (
            <motion.div
              key={i}
              className="cs-crk-cards__mini"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25, delay: i * 0.03 }}
              viewport={{ once: true }}
            >
              <span className="cs-crk-cards__num">{String(i + 1).padStart(2, "0")}</span>
              <span className={`cs-crk-cards__dot ${i % 2 === 0 ? "cs-crk-cards__dot--green" : "cs-crk-cards__dot--amber"}`} />
            </motion.div>
          ))}
        </div>

        {/* Technique categories */}
        <div className="cs-crk-cards__cats">
          {data.categories.map((cat, i) => (
            <motion.div
              key={i}
              className="cs-crk-cards__cat"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <p className="cs-crk-cards__cat-label">{cat.label}</p>
              <h3 className="cs-crk-cards__cat-title">{cat.title}</h3>
              <p className="cs-crk-cards__cat-body">{cat.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
