"use client";
import { motion } from "framer-motion";

interface Props {
  data: {
    eyebrow: string;
    heading: string;
    items: { phase: string; title: string; body: string }[];
  };
}

export default function CaseTimelineBand({ data }: Props) {
  return (
    <section className="cs-timeline">
      <div className="cs-timeline__inner">
        <p className="cs-timeline__eyebrow">{data.eyebrow}</p>
        <h2
          className="cs-timeline__heading"
          dangerouslySetInnerHTML={{ __html: data.heading }}
        />
        <div className="cs-timeline__track">
          <div className="cs-timeline__line" />
          {data.items.map((item, i) => (
            <motion.div
              key={i}
              className="cs-timeline__item"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              viewport={{ once: true }}
            >
              <div className="cs-timeline__dot" />
              <p className="cs-timeline__phase">{item.phase}</p>
              <h3 className="cs-timeline__title">{item.title}</h3>
              <p className="cs-timeline__body">{item.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
