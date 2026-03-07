"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import type { ImpactMetric } from "@/lib/case-studies";

interface CaseImpactProps {
  data: {
    heading: string;
    body?: string;
    metrics: ImpactMetric[];
    quote?: {
      text: string;
      attribution: string;
    };
    closingNote?: string;
  };
}

export default function CaseImpact({ data }: CaseImpactProps) {
  return (
    <section className="case-impact">
      <div className="case-impact__container">
        <ScrollReveal>
          <SectionLabel>{data.heading}</SectionLabel>
          <h2 className="case-impact__heading">
            Measurable <span className="text-[#C9922A]">results</span>
          </h2>
        </ScrollReveal>

        {data.body && (
          <ScrollReveal delay={0.1}>
            <p className="case-impact__body">{data.body}</p>
          </ScrollReveal>
        )}

        <div className="case-impact__grid">
          {data.metrics.map((metric, i) => (
            <ScrollReveal key={metric.label} delay={i * 0.1} direction="up">
              <div className="case-impact__metric">
                <AnimatedCounter
                  target={metric.value}
                  suffix={metric.suffix}
                  prefix={metric.prefix}
                  className="case-impact__metric-value"
                />
                <span className="case-impact__metric-label">{metric.label}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {data.quote && (
          <ScrollReveal delay={0.3}>
            <blockquote className="case-impact__quote">
              <p>&ldquo;{data.quote.text}&rdquo;</p>
              <cite>- {data.quote.attribution}</cite>
            </blockquote>
          </ScrollReveal>
        )}

        {data.closingNote && (
          <ScrollReveal delay={0.4}>
            <p className="case-impact__closing">{data.closingNote}</p>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
