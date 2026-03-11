"use client";
import { motion } from "framer-motion";

interface Props {
  data: {
    eyebrow: string;
    heading: string;
    body: string;
    body2: string;
    assets: { label: string; value: string }[];
  };
}

export default function CaseMumkinDigitalBand({ data }: Props) {
  return (
    <section className="cs-mum-digital">
      <div className="cs-mum-digital__inner">
        <div className="cs-mum-digital__left">
          <p className="cs-mum-digital__eyebrow">{data.eyebrow}</p>
          <h2
            className="cs-mum-digital__heading"
            dangerouslySetInnerHTML={{ __html: data.heading }}
          />
          <p className="cs-mum-digital__body">{data.body}</p>
          <p className="cs-mum-digital__body">{data.body2}</p>
        </div>
        <div className="cs-mum-digital__right">
          <div className="cs-mum-digital__assets">
            {data.assets.map((asset, i) => (
              <motion.div
                key={i}
                className="cs-mum-digital__asset"
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                viewport={{ once: true }}
              >
                <div className="cs-mum-digital__asset-icon">
                  <span className="cs-mum-digital__asset-num">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div>
                  <p className="cs-mum-digital__asset-label">{asset.label}</p>
                  <p className="cs-mum-digital__asset-value">{asset.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
