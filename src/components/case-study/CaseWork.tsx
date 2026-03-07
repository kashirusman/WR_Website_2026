"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionLabel from "@/components/ui/SectionLabel";

interface CaseWorkProps {
  data: {
    heading: string;
    body: string;
    deliverables: string[];
  };
}

export default function CaseWork({ data }: CaseWorkProps) {
  return (
    <section className="case-work">
      <div className="case-work__container">
        <ScrollReveal>
          <SectionLabel light>{data.heading}</SectionLabel>
          <h2 className="case-work__heading">
            What we <span className="text-[#F0D080]">delivered</span>
          </h2>
          <p className="case-work__body">{data.body}</p>
        </ScrollReveal>

        <div className="case-work__deliverables">
          {data.deliverables.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.08} direction="left">
              <div className="case-work__deliverable">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9922A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>{item}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
