"use client";
import { motion } from "framer-motion";

interface Props {
  data: {
    eyebrow: string;
    heading: string;
    cards: { label: string; title: string; body: string }[];
  };
}

export default function CaseMumkinOfferBand({ data }: Props) {
  return (
    <section className="cs-mum-offer">
      <div className="cs-mum-offer__inner">
        <p className="cs-mum-offer__eyebrow">{data.eyebrow}</p>
        <h2
          className="cs-mum-offer__heading"
          dangerouslySetInnerHTML={{ __html: data.heading }}
        />
        <div className="cs-mum-offer__grid">
          {data.cards.map((card, i) => (
            <motion.div
              key={i}
              className="cs-mum-offer__card"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`cs-mum-offer__icon cs-mum-offer__icon--${i + 1}`}>
                <span className="cs-mum-offer__icon-num">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="cs-mum-offer__label">{card.label}</p>
              <h3 className="cs-mum-offer__title">{card.title}</h3>
              <p className="cs-mum-offer__body">{card.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
