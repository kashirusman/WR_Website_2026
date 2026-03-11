"use client";
import { motion } from "framer-motion";

interface Props {
  data: {
    eyebrow: string;
    heading: string;
    steps: { num: string; title: string; body: string }[];
  };
}

export default function CaseHcdProcessBand({ data }: Props) {
  return (
    <section className="cs-hcd-process">
      <div className="cs-hcd-process__inner">
        <p className="cs-hcd-process__eyebrow">{data.eyebrow}</p>
        <h2
          className="cs-hcd-process__heading"
          dangerouslySetInnerHTML={{ __html: data.heading }}
        />
        <div className="cs-hcd-process__flow">
          <div className="cs-hcd-process__line" />
          {data.steps.map((s, i) => (
            <motion.div
              key={i}
              className="cs-hcd-process__step"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="cs-hcd-process__dot">
                <span>{i + 1}</span>
              </div>
              <p className="cs-hcd-process__step-num">{s.num}</p>
              <h3 className="cs-hcd-process__step-title">{s.title}</h3>
              <p className="cs-hcd-process__step-body">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
