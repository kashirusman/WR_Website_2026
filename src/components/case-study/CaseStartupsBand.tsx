"use client";
import { motion } from "framer-motion";

interface Props {
  data: {
    eyebrow: string;
    heading: string;
    cards: { sector: string; name: string; body: string; tags: string[] }[];
    note?: string;
  };
}

export default function CaseStartupsBand({ data }: Props) {
  return (
    <section className="cs-startups">
      <div className="cs-startups__inner">
        <p className="cs-startups__eyebrow">{data.eyebrow}</p>
        <h2
          className="cs-startups__heading"
          dangerouslySetInnerHTML={{ __html: data.heading }}
        />
        <div className="cs-startups__grid">
          {data.cards.map((c, i) => (
            <motion.div
              key={i}
              className="cs-startups__card"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.12 }}
              viewport={{ once: true }}
            >
              <p className="cs-startups__sector">{c.sector}</p>
              <h3 className="cs-startups__name">{c.name}</h3>
              <p className="cs-startups__body">{c.body}</p>
              <div className="cs-startups__tags">
                {c.tags.map((t, j) => (
                  <span key={j} className="cs-startups__tag">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        {data.note && (
          <div className="cs-startups__note">
            <p>{data.note}</p>
          </div>
        )}
      </div>
    </section>
  );
}
