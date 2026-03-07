"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionLabel from "@/components/ui/SectionLabel";

interface CaseVideoProps {
  data: {
    heading: string;
    src: string;
    caption?: string;
  };
}

export default function CaseVideo({ data }: CaseVideoProps) {
  return (
    <section className="case-video">
      <div className="case-video__container">
        <ScrollReveal>
          <SectionLabel>{data.heading}</SectionLabel>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="case-video__player">
            <video
              controls
              playsInline
              preload="metadata"
              className="case-video__element"
            >
              <source src={data.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </ScrollReveal>

        {data.caption && (
          <ScrollReveal delay={0.2}>
            <p className="case-video__caption">{data.caption}</p>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
