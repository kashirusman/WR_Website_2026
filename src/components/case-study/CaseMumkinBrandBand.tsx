"use client";
import { motion } from "framer-motion";

interface Props {
  data: {
    urdu: string;
    name: string;
    translation: string;
    body: string;
  };
}

export default function CaseMumkinBrandBand({ data }: Props) {
  return (
    <section className="cs-mum-brand">
      <motion.div
        className="cs-mum-brand__inner"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="cs-mum-brand__urdu">{data.urdu}</div>
        <div className="cs-mum-brand__name">{data.name}</div>
        <div className="cs-mum-brand__translation">{data.translation}</div>
        <p className="cs-mum-brand__body">{data.body}</p>
      </motion.div>
    </section>
  );
}
