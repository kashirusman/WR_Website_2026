"use client";
import { motion } from "framer-motion";

interface Props {
  data: {
    eyebrow: string;
    heading: string;
    steps: { num: string; title: string; body: string }[];
  };
}

export default function CaseCricketCascadeBand({ data }: Props) {
  return (
    <section className="cs-crk-cascade">
      <div className="cs-crk-cascade__inner">
        <p className="cs-crk-cascade__eyebrow">{data.eyebrow}</p>
        <h2
          className="cs-crk-cascade__heading"
          dangerouslySetInnerHTML={{ __html: data.heading }}
        />
        <div className="cs-crk-cascade__steps">
          {data.steps.map((s, i) => (
            <motion.div
              key={i}
              className="cs-crk-cascade__step"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="cs-crk-cascade__num" aria-hidden="true">{s.num}</div>
              <h3 className="cs-crk-cascade__title">{s.title}</h3>
              <p className="cs-crk-cascade__body">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
