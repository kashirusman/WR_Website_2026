"use client";
import { motion } from "framer-motion";

interface Props {
  data: {
    label: string;
    steps: { title: string; body: string; color: string }[];
  };
}

export default function CaseSaafChainBand({ data }: Props) {
  return (
    <section className="cs-saaf-chain">
      <div className="cs-saaf-chain__inner">
        <p className="cs-saaf-chain__label">{data.label}</p>
        <div className="cs-saaf-chain__flow">
          {data.steps.map((s, i) => (
            <motion.div
              key={i}
              className="cs-saaf-chain__step"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div
                className="cs-saaf-chain__dot"
                style={{ background: s.color }}
              >
                <span className="cs-saaf-chain__num">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="cs-saaf-chain__title">{s.title}</h3>
              <p className="cs-saaf-chain__body">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
