"use client";
import { motion } from "framer-motion";

interface Props {
  data: {
    eyebrow: string;
    heading: string;
    sub: string;
    letters: { urdu: string; roman: string; word: string; meaning: string }[];
  };
}

export default function CaseCricketNameBand({ data }: Props) {
  return (
    <section className="cs-crk-name">
      <div className="cs-crk-name__inner">
        <p className="cs-crk-name__eyebrow">{data.eyebrow}</p>
        <h2
          className="cs-crk-name__heading"
          dangerouslySetInnerHTML={{ __html: data.heading }}
        />
        <p className="cs-crk-name__sub">{data.sub}</p>
        <div className="cs-crk-name__letters">
          {data.letters.map((l, i) => (
            <motion.div
              key={i}
              className={`cs-crk-name__letter cs-crk-name__letter--${i + 1}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="cs-crk-name__urdu">{l.urdu}</div>
              <div className="cs-crk-name__roman">{l.roman}</div>
              <div className="cs-crk-name__word">{l.word}</div>
              <div className="cs-crk-name__meaning">{l.meaning}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
