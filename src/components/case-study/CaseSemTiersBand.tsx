"use client";
import { motion } from "framer-motion";

interface Props {
  data: {
    eyebrow: string;
    heading: string;
    tiers: { level: string; label: string; name: string; activities: string[] }[];
  };
}

export default function CaseSemTiersBand({ data }: Props) {
  const shades = ["top", "upper", "mid", "lower", "base"];
  return (
    <section className="cs-sem">
      <div className="cs-sem__inner">
        <p className="cs-sem__eyebrow">{data.eyebrow}</p>
        <h2
          className="cs-sem__heading"
          dangerouslySetInnerHTML={{ __html: data.heading }}
        />
        <div className="cs-sem__tiers">
          {data.tiers.map((tier, i) => (
            <motion.div
              key={i}
              className={`cs-sem__tier cs-sem__tier--${shades[i] || "base"}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              viewport={{ once: true }}
            >
              <span className="cs-sem__level">{tier.level}</span>
              <div className="cs-sem__info">
                <p className="cs-sem__label">{tier.label}</p>
                <h3 className="cs-sem__name">{tier.name}</h3>
              </div>
              <div className="cs-sem__activities">
                {tier.activities.map((a, j) => (
                  <span key={j} className="cs-sem__act">{a}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
