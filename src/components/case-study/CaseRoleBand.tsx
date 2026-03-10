"use client";

import { motion } from "framer-motion";

interface CaseRoleBandProps {
  heading: string;
  body: string;
  services: string[];
}

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export default function CaseRoleBand({ heading, body, services }: CaseRoleBandProps) {
  return (
    <section className="cs-role">
      <motion.div
        className="cs-role__inner"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease }}
      >
        <div>
          <div className="cs-role__eyebrow">Our Role</div>
          <h2
            className="cs-role__heading"
            dangerouslySetInnerHTML={{ __html: heading }}
          />
        </div>
        <div className="cs-role__body">
          {body.split("\n\n").map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <div className="cs-role__services">
            {services.map((s, i) => (
              <span key={i} className="cs-role__tag">
                {s}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
