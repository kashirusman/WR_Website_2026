"use client";
import { motion } from "framer-motion";

interface Props {
  data: {
    eyebrow: string;
    heading: string;
    cards: { num: string; title: string; scenario: string; body: string }[];
  };
}

export default function CaseSeriesBand({ data }: Props) {
  return (
    <section className="cs-series">
      <div className="cs-series__inner">
        <p className="cs-series__eyebrow">{data.eyebrow}</p>
        <h2
          className="cs-series__heading"
          dangerouslySetInnerHTML={{ __html: data.heading }}
        />
        <div className="cs-series__grid">
          {data.cards.map((ep, i) => (
            <motion.div
              key={i}
              className="cs-series__card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              viewport={{ once: true }}
            >
              <span className="cs-series__card-bg">{i + 1}</span>
              <p className="cs-series__card-num">{ep.num}</p>
              <h3 className="cs-series__card-title">{ep.title}</h3>
              <p className="cs-series__card-scenario">{ep.scenario}</p>
              <p className="cs-series__card-body">{ep.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
