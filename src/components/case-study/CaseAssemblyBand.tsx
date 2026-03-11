"use client";
import { motion } from "framer-motion";

interface Props {
  data: {
    eyebrow: string;
    heading: string;
    stat: string;
    paragraphs: string[];
    features: { bold: string; text: string }[];
  };
}

export default function CaseAssemblyBand({ data }: Props) {
  return (
    <section className="cs-assembly">
      <div className="cs-assembly__inner">
        <motion.div
          className="cs-assembly__left"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="cs-assembly__eyebrow">{data.eyebrow}</p>
          <h2
            className="cs-assembly__heading"
            dangerouslySetInnerHTML={{ __html: data.heading }}
          />
          <div
            className="cs-assembly__stat"
            dangerouslySetInnerHTML={{ __html: data.stat }}
          />
        </motion.div>
        <div className="cs-assembly__right">
          {data.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <div className="cs-assembly__features">
            {data.features.map((f, i) => (
              <motion.div
                key={i}
                className="cs-assembly__feature"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <p><strong>{f.bold}</strong> {f.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
