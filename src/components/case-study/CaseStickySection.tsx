"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";

interface CaseStickyProps {
  number: string;
  heading: string;
  children: React.ReactNode;
}

export default function CaseStickySection({ number, heading, children }: CaseStickyProps) {
  return (
    <div className="cs-section">
      <div className="cs-section__inner">
        <div className="cs-section__left">
          <div className="cs-section__label">
            <span className="cs-section__num">{number}</span>
            <span className="cs-section__line" />
          </div>
          <h2
            className="cs-section__heading"
            dangerouslySetInnerHTML={{ __html: heading }}
          />
        </div>
        <div className="cs-section__right">
          {children}
        </div>
      </div>
    </div>
  );
}
