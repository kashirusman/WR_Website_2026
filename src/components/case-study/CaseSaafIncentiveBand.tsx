"use client";
import { motion } from "framer-motion";

interface Props {
  data: {
    eyebrow: string;
    heading: string;
    cards: { who: string; name: string; desc: string }[];
  };
}

export default function CaseSaafIncentiveBand({ data }: Props) {
  return (
    <section className="cs-saaf-incentive">
      <div className="cs-saaf-incentive__inner">
        <p className="cs-saaf-incentive__eyebrow">{data.eyebrow}</p>
        <h2
          className="cs-saaf-incentive__heading"
          dangerouslySetInnerHTML={{ __html: data.heading }}
        />
        <div className="cs-saaf-incentive__grid">
          {data.cards.map((card, i) => (
            <motion.div
              key={i}
              className="cs-saaf-incentive__card"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <p className="cs-saaf-incentive__who">{card.who}</p>
              <h3 className="cs-saaf-incentive__name">{card.name}</h3>
              <p className="cs-saaf-incentive__desc">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
