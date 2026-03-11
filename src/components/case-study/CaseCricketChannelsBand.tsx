"use client";
import { motion } from "framer-motion";

interface Props {
  data: {
    eyebrow: string;
    heading: string;
    channels: { title: string; body: string }[];
  };
}

export default function CaseCricketChannelsBand({ data }: Props) {
  return (
    <section className="cs-crk-channels">
      <div className="cs-crk-channels__inner">
        <p className="cs-crk-channels__eyebrow">{data.eyebrow}</p>
        <h2
          className="cs-crk-channels__heading"
          dangerouslySetInnerHTML={{ __html: data.heading }}
        />
        <div className="cs-crk-channels__grid">
          {data.channels.map((ch, i) => (
            <motion.div
              key={i}
              className="cs-crk-channels__card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="cs-crk-channels__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  {i === 0 && <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></>}
                  {i === 1 && <><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></>}
                  {i === 2 && <><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></>}
                  {i === 3 && <><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></>}
                </svg>
              </div>
              <h3 className="cs-crk-channels__title">{ch.title}</h3>
              <p className="cs-crk-channels__body">{ch.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
