"use client";

import { motion } from "framer-motion";

export interface ChannelCard {
  name: string;
  body: string;
}

export interface ChannelsData {
  eyebrow: string;
  heading: string;
  channels: ChannelCard[];
}

interface Props {
  data: ChannelsData;
}

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export default function CaseChannelsBand({ data }: Props) {
  return (
    <section className="cs-channels">
      <div className="cs-channels__inner">
        <motion.div
          className="cs-channels__eyebrow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
        >
          {data.eyebrow}
        </motion.div>

        <motion.h2
          className="cs-channels__heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.1, duration: 0.7, ease }}
          dangerouslySetInnerHTML={{ __html: data.heading }}
        />

        <motion.div
          className="cs-channels__grid"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.2, duration: 0.7, ease }}
        >
          {data.channels.map((ch, i) => (
            <div key={i} className="cs-channels__card">
              <div className="cs-channels__name">{ch.name}</div>
              <div className="cs-channels__body">{ch.body}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
