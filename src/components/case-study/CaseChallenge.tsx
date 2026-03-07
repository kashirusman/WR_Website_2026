"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionLabel from "@/components/ui/SectionLabel";

interface CaseChallengeProps {
  data: {
    heading: string;
    body: string;
    quote?: {
      text: string;
      attribution?: string;
    };
  };
}

export default function CaseChallenge({ data }: CaseChallengeProps) {
  const paragraphs = data.body.split("\n\n");

  return (
    <section className="case-challenge">
      <div className="case-challenge__container">
        <ScrollReveal>
          <SectionLabel>{data.heading}</SectionLabel>
          <h2 className="case-challenge__heading">
            Understanding the <span className="text-[#C9922A]">problem</span>
          </h2>
        </ScrollReveal>

        {paragraphs.map((p, i) => (
          <ScrollReveal key={i} delay={0.1 * (i + 1)}>
            <p className="case-challenge__body">{p}</p>
          </ScrollReveal>
        ))}

        {data.quote && (
          <ScrollReveal delay={0.1 * (paragraphs.length + 1)}>
            <blockquote className="case-challenge__quote">
              <span className="case-challenge__quote-mark">&ldquo;</span>
              <p>{data.quote.text}</p>
              {data.quote.attribution && (
                <cite>- {data.quote.attribution}</cite>
              )}
            </blockquote>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
