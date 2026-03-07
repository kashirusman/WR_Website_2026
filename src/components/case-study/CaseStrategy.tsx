"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import type { StrategyStep } from "@/lib/case-studies";

interface CaseStrategyProps {
  data: {
    heading: string;
    intro: string;
    steps: StrategyStep[];
  };
}

export default function CaseStrategy({ data }: CaseStrategyProps) {
  return (
    <section className="case-strategy">
      <div className="case-strategy__container">
        <ScrollReveal>
          <SectionLabel>{data.heading}</SectionLabel>
          <h2 className="case-strategy__heading">
            How we <span className="text-[#C9922A]">approached</span> it
          </h2>
          <p className="case-strategy__intro">{data.intro}</p>
        </ScrollReveal>

        <div className="case-strategy__grid">
          {data.steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 0.1} direction="up">
              <div className="case-strategy__step">
                <span className="case-strategy__step-number">{step.number}</span>
                <h3 className="case-strategy__step-title">{step.title}</h3>
                <p className="case-strategy__step-desc">{step.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
