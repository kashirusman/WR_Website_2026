"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionLabel from "@/components/ui/SectionLabel";

interface CaseWorkProps {
  data: {
    heading: string;
    body: string;
    deliverables: string[];
    downloadLink?: {
      label: string;
      url: string;
    };
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

        {data.downloadLink && (
          <ScrollReveal delay={data.deliverables.length * 0.08 + 0.1}>
            <a
              href={data.downloadLink.url}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="case-work__download"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              {data.downloadLink.label}
            </a>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
