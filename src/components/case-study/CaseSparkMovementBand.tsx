"use client";
import { motion } from "framer-motion";

interface Props {
  data: {
    eyebrow: string;
    heading: string;
    steps: { badge: string; title: string; body: string }[];
  };
}

export default function CaseSparkMovementBand({ data }: Props) {
  return (
    <section className="cs-spark">
      <div className="cs-spark__inner">
        <p className="cs-spark__eyebrow">{data.eyebrow}</p>
        <h2
          className="cs-spark__heading"
          dangerouslySetInnerHTML={{ __html: data.heading }}
        />
        <div className="cs-spark__flow">
          {data.steps.map((step, i) => (
            <motion.div
              key={i}
              className="cs-spark__step-wrap"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              {i > 0 && (
                <div className="cs-spark__arrow">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              )}
              <div className="cs-spark__step">
                <p className="cs-spark__badge">{step.badge}</p>
                <h3 className="cs-spark__title">{step.title}</h3>
                <p className="cs-spark__body">{step.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
