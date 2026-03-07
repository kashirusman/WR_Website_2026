"use client";

import AnimatedCounter from "@/components/ui/AnimatedCounter";
import ScrollReveal from "@/components/ui/ScrollReveal";

const metrics = [
  {
    value: 700,
    suffix: "+",
    label: "Projects Delivered",
    description: "Evidence-based programmes across multiple sectors",
  },
  {
    value: 15,
    suffix: "",
    label: "Years Working with UNICEF",
    description: "A trusted long-term partnership for global impact",
  },
  {
    value: 50,
    suffix: "M+",
    label: "People Reached",
    description: "Communities transformed through behaviour change",
  },
  {
    value: 800,
    suffix: "+",
    label: "Frontline Workers Trained",
    description: "Health workers equipped with life-saving skills",
  },
];

export default function Metrics() {
  return (
    <section id="impact" className="impact-section bg-[#0D2B45]">
      <div className="impact-container">
        {/* Section header */}
        <ScrollReveal>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-8 bg-[#C9922A]" />
            <span className="label-caps text-[#C9922A]">Impact at a Glance</span>
            <div className="h-px w-8 bg-[#C9922A]" />
          </div>
          <h2 className="display-lg text-white impact-title">
            Two decades.{" "}
            <span className="text-[#F0D080]">Millions of lives.</span>
          </h2>
        </ScrollReveal>

        {/* Metrics grid */}
        <div className="impact-grid">
          {metrics.map((metric, i) => (
            <ScrollReveal
              key={metric.label}
              delay={i * 0.08}
              direction="up"
              className="metric"
            >
              <div className="metric-number text-[#F0D080] leading-none">
                <AnimatedCounter
                  target={metric.value}
                  suffix={metric.suffix}
                  duration={2400}
                />
              </div>
              <div className="metric-label text-white font-semibold text-lg leading-tight">
                {metric.label}
              </div>
              <div className="mt-2 text-white/45 text-sm leading-relaxed">
                {metric.description}
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Quote strip */}
        <ScrollReveal delay={0.2}>
          <blockquote className="impact-quote text-white/60 text-lg md:text-xl font-light leading-relaxed">
            &ldquo;White Rice Impact has been an invaluable partner in reaching
            the most marginalised communities with life-saving behaviour change
            interventions.&rdquo;
          </blockquote>
          <div className="mt-4 label-caps text-[#C9922A]">
            UNICEF Senior Programme Specialist
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
