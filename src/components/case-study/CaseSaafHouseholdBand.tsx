"use client";
import { motion } from "framer-motion";

interface Props {
  data: {
    eyebrow: string;
    heading: string;
    intro: string;
    tools: { title: string; body: string }[];
  };
}

export default function CaseSaafHouseholdBand({ data }: Props) {
  return (
    <section className="cs-saaf-hh">
      <div className="cs-saaf-hh__inner">
        <div className="cs-saaf-hh__left">
          <p className="cs-saaf-hh__eyebrow">{data.eyebrow}</p>
          <h2
            className="cs-saaf-hh__heading"
            dangerouslySetInnerHTML={{ __html: data.heading }}
          />
          <p className="cs-saaf-hh__intro">{data.intro}</p>
        </div>
        <div className="cs-saaf-hh__tools">
          {data.tools.map((tool, i) => (
            <motion.div
              key={i}
              className="cs-saaf-hh__tool"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              viewport={{ once: true }}
            >
              <div className="cs-saaf-hh__icon">
                <span className="cs-saaf-hh__icon-num">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div>
                <h3 className="cs-saaf-hh__tool-title">{tool.title}</h3>
                <p className="cs-saaf-hh__tool-body">{tool.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
