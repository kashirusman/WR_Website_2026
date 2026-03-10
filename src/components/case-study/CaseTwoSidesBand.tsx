"use client";

import { motion } from "framer-motion";

export interface TwoSidesData {
  left: {
    label: string;
    heading: string;
    body: string;
  };
  right: {
    label: string;
    heading: string;
    body: string;
  };
}

interface Props {
  data: TwoSidesData;
}

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export default function CaseTwoSidesBand({ data }: Props) {
  return (
    <section className="cs-twosides">
      <motion.div
        className="cs-twosides__side cs-twosides__side--left"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease }}
      >
        <div className="cs-twosides__cross" />
        <div className="cs-twosides__label">{data.left.label}</div>
        <h2
          className="cs-twosides__heading"
          dangerouslySetInnerHTML={{ __html: data.left.heading }}
        />
        <p className="cs-twosides__body">{data.left.body}</p>
      </motion.div>

      <motion.div
        className="cs-twosides__side cs-twosides__side--right"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ delay: 0.15, duration: 0.8, ease }}
      >
        <div className="cs-twosides__cross" />
        <div className="cs-twosides__label">{data.right.label}</div>
        <h2
          className="cs-twosides__heading"
          dangerouslySetInnerHTML={{ __html: data.right.heading }}
        />
        <p className="cs-twosides__body">{data.right.body}</p>
      </motion.div>
    </section>
  );
}
