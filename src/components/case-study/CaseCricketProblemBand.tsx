"use client";
import { motion } from "framer-motion";

interface Props {
  data: {
    eyebrow: string;
    headline: string;
    body: string;
  };
}

export default function CaseCricketProblemBand({ data }: Props) {
  return (
    <section className="cs-crk-problem">
      <div className="cs-crk-problem__inner">
        <motion.p
          className="cs-crk-problem__eyebrow"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
        >
          {data.eyebrow}
        </motion.p>
        <motion.div
          className="cs-crk-problem__headline"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          &ldquo;{data.headline}&rdquo;
        </motion.div>
        <motion.p
          className="cs-crk-problem__body"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {data.body}
        </motion.p>
      </div>
    </section>
  );
}
