"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";

interface Pillar {
  image: string;
  title: string;
  description: string;
  impact: string;
}

const pillars: Pillar[] = [
  {
    image: "/images/child-smiling.jpg",
    title: "Last Mile Training",
    description:
      "Training frontline health workers to deliver life-saving services in remote communities.",
    impact: "800+ frontline workers trained",
  },
  {
    image: "/images/sbc-commumnity.jpg",
    title: "SBC Community Interventions",
    description:
      "Evidence-based campaigns that shift behaviours and social norms at scale.",
    impact: "20,000+ communities reached",
  },
  {
    image: "/images/ecd-playlabs.jpeg",
    title: "ECD & PlayLabs",
    description:
      "Play-based learning environments that nurture early childhood development.",
    impact: "11,000 mothers supported",
  },
];

export default function ProgramShowcase() {
  return (
    <section id="services" className="services-section">
      {/* Header */}
      <div className="services-container">
        <ScrollReveal>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-8 bg-[#C9922A]" />
            <span className="label-caps text-[#C9922A]">Our Services</span>
            <div className="h-px w-8 bg-[#C9922A]" />
          </div>
          <h2 className="display-lg text-[#0C0C0B] services-title">
            Three pillars of
            <br />
            <span className="text-[#C9922A]">lasting change</span>
          </h2>
          <p className="text-[#4A4A46] text-lg services-description">
            From training the last-mile health worker to designing national
            SBC campaigns and nurturing early childhood development - our
            integrated approach creates durable behaviour change at scale.
          </p>
        </ScrollReveal>
      </div>

      {/* Pillar cards */}
      <div className="pillars-grid">
        {pillars.map((pillar, i) => (
          <ScrollReveal key={pillar.title} delay={i * 0.1} direction="up">
            <div className="pillar">
              <img
                src={pillar.image}
                alt={pillar.title}
                className="pillar-image"
              />
              <div className="pillar-content">
                <h3>{pillar.title}</h3>
                <p className="pillar-description">{pillar.description}</p>
                <p className="pillar-impact">{pillar.impact}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
