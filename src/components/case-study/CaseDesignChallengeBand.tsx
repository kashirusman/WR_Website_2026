"use client";
import { motion } from "framer-motion";

interface Props {
  data: {
    eyebrow: string;
    headline: string;
    body: string;
    pillars: { title: string; body: string }[];
  };
}

export default function CaseDesignChallengeBand({ data }: Props) {
  return (
    <section className="cs-design-challenge">
      <div className="cs-design-challenge__inner">
        <motion.p
          className="cs-design-challenge__eyebrow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {data.eyebrow}
        </motion.p>
        <motion.div
          className="cs-design-challenge__headline"
          dangerouslySetInnerHTML={{ __html: data.headline }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        />
        <motion.p
          className="cs-design-challenge__body"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {data.body}
        </motion.p>
        <div className="cs-design-challenge__pillars">
          {data.pillars.map((p, i) => (
            <motion.div
              key={i}
              className="cs-design-challenge__pillar"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * i + 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="cs-design-challenge__pillar-title">{p.title}</h3>
              <p className="cs-design-challenge__pillar-body">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
