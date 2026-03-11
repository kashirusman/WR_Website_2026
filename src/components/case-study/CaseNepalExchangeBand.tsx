"use client";
import { motion } from "framer-motion";

interface Props {
  data: {
    eyebrow: string;
    heading: string;
    stat: string;
    body: string;
    phases: { num: string; text: string }[];
  };
}

export default function CaseNepalExchangeBand({ data }: Props) {
  return (
    <section className="cs-nepal">
      <div className="cs-nepal__inner">
        <div className="cs-nepal__left">
          <motion.p
            className="cs-nepal__eyebrow"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {data.eyebrow}
          </motion.p>
          <motion.h2
            className="cs-nepal__heading"
            dangerouslySetInnerHTML={{ __html: data.heading }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          />
          <div className="cs-nepal__stat">{data.stat}</div>
        </div>
        <div className="cs-nepal__right">
          <motion.p
            className="cs-nepal__body"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true }}
          >
            {data.body}
          </motion.p>
          <div className="cs-nepal__phases">
            {data.phases.map((p, i) => (
              <motion.div
                key={i}
                className="cs-nepal__phase"
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="cs-nepal__phase-num">{p.num}</span>
                <p
                  className="cs-nepal__phase-text"
                  dangerouslySetInnerHTML={{ __html: p.text }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
