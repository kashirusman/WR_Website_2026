"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface Step {
  number: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

const steps: Step[] = [
  {
    number: "01",
    title: "Co-Creation Workshops",
    description:
      "Collaborative design sessions with communities, stakeholders, and technical experts to identify barriers and co-develop solutions.",
    image: "/images/timeline/2017-b.png",
    alt: "Community women and children raising hands in active participation during a workshop",
  },
  {
    number: "02",
    title: "SBC Pilots",
    description:
      "Rapid prototyping and field-testing of behaviour change interventions, refined through real-time data and community feedback.",
    image: "/images/timeline/2020-b.png",
    alt: "Team members showing and discussing communication materials with community groups",
  },
  {
    number: "03",
    title: "Community Engagement Model",
    description:
      "Scalable frameworks that embed lasting change through local ownership, peer networks, and sustained follow-through.",
    image: "/images/community-engagement.jpg",
    alt: "Team members sitting in a circle during a participatory community engagement activity",
  },
];

export default function Framework() {
  return (
    <section id="framework" className="framework-section">
      <div className="framework-container">
        {/* Header */}
        <ScrollReveal>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-8 bg-[#C9922A]" />
            <span className="label-caps text-[#C9922A]">Our Approach</span>
            <div className="h-px w-8 bg-[#C9922A]" />
          </div>
          <h2 className="display-lg text-[#0C0C0B] framework-title">
            How we design
            <br />
            <span className="text-[#C9922A]">behaviour change</span>
          </h2>
          <p className="text-[#4A4A46] text-lg framework-description">
            A proven three-step process that moves from insight to impact -
            grounded in evidence, shaped by communities, built to scale.
          </p>
        </ScrollReveal>

        {/* Steps */}
        <div className="framework-grid">
          {steps.map((step, i) => (
            <ScrollReveal key={step.title} delay={i * 0.15} direction="up">
              <div className="framework-step">
                <div className="step-image-wrap">
                  <Image
                    src={step.image}
                    alt={step.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="step-image"
                  />
                </div>
                <div className="step-content">
                  <span className="step-number">{step.number}</span>
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                </div>
              </div>
              {i < steps.length - 1 && (
                <div className="step-connector" aria-hidden="true" />
              )}
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
