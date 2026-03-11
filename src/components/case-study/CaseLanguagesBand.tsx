"use client";
import { motion } from "framer-motion";

interface Props {
  data: {
    eyebrow: string;
    heading: string;
    bigText: string;
    cards: { flag: string; name: string; body: string }[];
  };
}

export default function CaseLanguagesBand({ data }: Props) {
  return (
    <section className="cs-languages">
      <div className="cs-languages__inner">
        <div className="cs-languages__left">
          <motion.p
            className="cs-languages__eyebrow"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {data.eyebrow}
          </motion.p>
          <motion.h2
            className="cs-languages__heading"
            dangerouslySetInnerHTML={{ __html: data.heading }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          />
          <div className="cs-languages__big">{data.bigText}</div>
        </div>
        <div className="cs-languages__right">
          <div className="cs-languages__cards">
            {data.cards.map((lang, i) => (
              <motion.div
                key={i}
                className="cs-languages__card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="cs-languages__flag">{lang.flag}</p>
                <h3 className="cs-languages__name">{lang.name}</h3>
                <p className="cs-languages__card-body">{lang.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
