"use client";
import { motion } from "framer-motion";

interface Props {
  data: {
    eyebrow: string;
    heading: string;
    profiles: { archetype: string; title: string; body: string; barrier: string }[];
  };
}

export default function CaseMumkinProfilesBand({ data }: Props) {
  return (
    <section className="cs-mum-profiles">
      <div className="cs-mum-profiles__inner">
        <p className="cs-mum-profiles__eyebrow">{data.eyebrow}</p>
        <h2
          className="cs-mum-profiles__heading"
          dangerouslySetInnerHTML={{ __html: data.heading }}
        />
        <div className="cs-mum-profiles__grid">
          {data.profiles.map((p, i) => (
            <motion.div
              key={i}
              className="cs-mum-profiles__card"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.12 }}
              viewport={{ once: true }}
            >
              <p className="cs-mum-profiles__archetype">{p.archetype}</p>
              <h3 className="cs-mum-profiles__title">{p.title}</h3>
              <p className="cs-mum-profiles__body">{p.body}</p>
              <div className="cs-mum-profiles__barrier">{p.barrier}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
