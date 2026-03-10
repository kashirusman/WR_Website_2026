"use client";

import { motion } from "framer-motion";

interface CaseClosingProps {
  heading: string;
  body: string;
  tags: string[];
}

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export default function CaseClosing({ heading, body, tags }: CaseClosingProps) {
  return (
    <section className="cs-closing">
      <motion.div
        className="cs-closing__inner"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease }}
      >
        <h3
          className="cs-closing__heading"
          dangerouslySetInnerHTML={{ __html: heading }}
        />
        <p className="cs-closing__body">{body}</p>
        <div className="cs-closing__pills">
          {tags.map((tag, i) => (
            <span key={i} className="cs-closing__pill">
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
