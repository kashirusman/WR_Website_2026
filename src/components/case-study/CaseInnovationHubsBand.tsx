"use client";
import { motion } from "framer-motion";

interface Props {
  data: {
    eyebrow: string;
    heading: string;
    intro: string;
    hubs: { province: string; name: string; desc: string; context: string }[];
    pathwaysHeading: string;
    pathways: { label: string; title: string; body: string }[];
  };
}

export default function CaseInnovationHubsBand({ data }: Props) {
  return (
    <section className="cs-hubs">
      <div className="cs-hubs__inner">
        <p className="cs-hubs__eyebrow">{data.eyebrow}</p>
        <h2
          className="cs-hubs__heading"
          dangerouslySetInnerHTML={{ __html: data.heading }}
        />
        <p className="cs-hubs__intro">{data.intro}</p>

        <div className="cs-hubs__grid">
          {data.hubs.map((hub, i) => (
            <motion.div
              key={i}
              className="cs-hubs__card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              <p className="cs-hubs__province">{hub.province}</p>
              <h3 className="cs-hubs__name">{hub.name}</h3>
              <p className="cs-hubs__desc">{hub.desc}</p>
              <p className="cs-hubs__context">{hub.context}</p>
            </motion.div>
          ))}
        </div>

        <h3 className="cs-hubs__pathways-heading">{data.pathwaysHeading}</h3>
        <div className="cs-hubs__pathways">
          {data.pathways.map((pw, i) => (
            <motion.div
              key={i}
              className="cs-hubs__pathway"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <p className="cs-hubs__pw-label">{pw.label}</p>
              <h4 className="cs-hubs__pw-title">{pw.title}</h4>
              <p className="cs-hubs__pw-body">{pw.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
