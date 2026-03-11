"use client";
import { motion } from "framer-motion";

interface Props {
  data: {
    eyebrow: string;
    heading: string;
    cards: { title: string; body: string }[];
  };
}

export default function CaseTargetAudiencesBand({ data }: Props) {
  return (
    <section className="cs-audiences">
      <div className="cs-audiences__inner">
        <p className="cs-audiences__eyebrow">{data.eyebrow}</p>
        <h2
          className="cs-audiences__heading"
          dangerouslySetInnerHTML={{ __html: data.heading }}
        />
        <div className="cs-audiences__grid">
          {data.cards.map((card, i) => (
            <motion.div
              key={i}
              className="cs-audiences__card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="cs-audiences__title">{card.title}</h3>
              <p className="cs-audiences__body">{card.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
