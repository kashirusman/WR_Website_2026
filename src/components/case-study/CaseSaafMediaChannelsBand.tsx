"use client";
import { motion } from "framer-motion";

interface Props {
  data: {
    eyebrow: string;
    heading: string;
    categories: { cat: string; items: string[] }[];
  };
}

export default function CaseSaafMediaChannelsBand({ data }: Props) {
  return (
    <section className="cs-saaf-channels">
      <div className="cs-saaf-channels__inner">
        <p className="cs-saaf-channels__eyebrow">{data.eyebrow}</p>
        <h2
          className="cs-saaf-channels__heading"
          dangerouslySetInnerHTML={{ __html: data.heading }}
        />
        <div className="cs-saaf-channels__grid">
          {data.categories.map((cat, i) => (
            <motion.div
              key={i}
              className="cs-saaf-channels__card"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <p className="cs-saaf-channels__cat">{cat.cat}</p>
              <div className="cs-saaf-channels__list">
                {cat.items.map((item, j) => (
                  <div key={j} className="cs-saaf-channels__item">
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
