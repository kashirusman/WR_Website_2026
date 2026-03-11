"use client";
import { motion } from "framer-motion";

interface Props {
  data: {
    eyebrow: string;
    heading: string;
    partners: { role: string; name: string; body: string }[];
    wrRole: { label: string; name: string; body: string };
  };
}

export default function CaseMumkinEcosystemBand({ data }: Props) {
  return (
    <section className="cs-mum-eco">
      <div className="cs-mum-eco__inner">
        <p className="cs-mum-eco__eyebrow">{data.eyebrow}</p>
        <h2
          className="cs-mum-eco__heading"
          dangerouslySetInnerHTML={{ __html: data.heading }}
        />
        <div className="cs-mum-eco__grid">
          {data.partners.map((p, i) => (
            <motion.div
              key={i}
              className={`cs-mum-eco__card cs-mum-eco__card--${i + 1}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <p className="cs-mum-eco__role">{p.role}</p>
              <h3 className="cs-mum-eco__name">{p.name}</h3>
              <p className="cs-mum-eco__body">{p.body}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="cs-mum-eco__wr-wrap"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="cs-mum-eco__wr">
            <p className="cs-mum-eco__wr-label">{data.wrRole.label}</p>
            <h3 className="cs-mum-eco__wr-name">{data.wrRole.name}</h3>
            <p className="cs-mum-eco__wr-body">{data.wrRole.body}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
