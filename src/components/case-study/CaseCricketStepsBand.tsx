"use client";
import { motion } from "framer-motion";

interface Props {
  data: {
    eyebrow: string;
    heading: string;
    steps: {
      bg: string;
      step: string;
      letter: string;
      urdu: string;
      word: string;
      translation: string;
      body: string;
      promptLabel: string;
      promptText: string;
    }[];
  };
}

export default function CaseCricketStepsBand({ data }: Props) {
  return (
    <section className="cs-crk-steps">
      <div className="cs-crk-steps__inner">
        <p className="cs-crk-steps__eyebrow">{data.eyebrow}</p>
        <h2
          className="cs-crk-steps__heading"
          dangerouslySetInnerHTML={{ __html: data.heading }}
        />
        <div className="cs-crk-steps__cards">
          {data.steps.map((s, i) => (
            <motion.div
              key={i}
              className={`cs-crk-steps__card cs-crk-steps__card--${i + 1}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="cs-crk-steps__bg" aria-hidden="true">{s.bg}</div>
              <p className="cs-crk-steps__step">{s.step}</p>
              <div className="cs-crk-steps__letter">{s.letter}</div>
              <div className="cs-crk-steps__urdu">{s.urdu}</div>
              <div className="cs-crk-steps__word">{s.word}</div>
              <p className="cs-crk-steps__translation">{s.translation}</p>
              <p className="cs-crk-steps__body">{s.body}</p>
              <div className="cs-crk-steps__prompt">
                <p className="cs-crk-steps__prompt-label">{s.promptLabel}</p>
                <p className="cs-crk-steps__prompt-text">{s.promptText}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
