"use client";
import { motion } from "framer-motion";

interface Props {
  data: {
    eyebrow: string;
    heading: string;
    steps: { phase: string; title: string; body: string }[];
    insights: { num: string; title: string; body: string }[];
  };
}

export default function CaseMumkinHcdBand({ data }: Props) {
  return (
    <section className="cs-mum-hcd">
      <div className="cs-mum-hcd__inner">
        <p className="cs-mum-hcd__eyebrow">{data.eyebrow}</p>
        <h2
          className="cs-mum-hcd__heading"
          dangerouslySetInnerHTML={{ __html: data.heading }}
        />

        {/* Journey Steps */}
        <div className="cs-mum-hcd__journey">
          {data.steps.map((s, i) => (
            <motion.div
              key={i}
              className="cs-mum-hcd__step"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="cs-mum-hcd__dot" />
              <p className="cs-mum-hcd__phase">{s.phase}</p>
              <h3 className="cs-mum-hcd__step-title">{s.title}</h3>
              <p className="cs-mum-hcd__step-body">{s.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Insights */}
        <div className="cs-mum-hcd__insights">
          {data.insights.map((ins, i) => (
            <motion.div
              key={i}
              className="cs-mum-hcd__insight"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="cs-mum-hcd__ins-num">{ins.num}</div>
              <h3 className="cs-mum-hcd__ins-title">{ins.title}</h3>
              <p className="cs-mum-hcd__ins-body">{ins.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
