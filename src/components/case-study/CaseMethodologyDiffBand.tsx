"use client";
import { motion } from "framer-motion";

interface Props {
  data: {
    eyebrow: string;
    heading: string;
    intro: string;
    rows: { conventional: string; oxfam: string }[];
  };
}

export default function CaseMethodologyDiffBand({ data }: Props) {
  return (
    <section className="cs-diff">
      <div className="cs-diff__inner">
        <div className="cs-diff__left">
          <p className="cs-diff__eyebrow">{data.eyebrow}</p>
          <h2
            className="cs-diff__heading"
            dangerouslySetInnerHTML={{ __html: data.heading }}
          />
        </div>
        <div className="cs-diff__right">
          <p className="cs-diff__intro">{data.intro}</p>
          <div className="cs-diff__table">
            <div className="cs-diff__row cs-diff__row--header">
              <div className="cs-diff__cell">
                <span className="cs-diff__label cs-diff__label--conv">Conventional Approach</span>
              </div>
              <div className="cs-diff__cell">
                <span className="cs-diff__label cs-diff__label--ox">The Oxfam / White Rice Approach</span>
              </div>
            </div>
            {data.rows.map((row, i) => (
              <motion.div
                key={i}
                className="cs-diff__row"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="cs-diff__cell cs-diff__cell--conv">
                  <p>{row.conventional}</p>
                </div>
                <div className="cs-diff__cell cs-diff__cell--ox">
                  <p>{row.oxfam}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
