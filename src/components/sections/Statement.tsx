"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Statement() {
  return (
    <section id="story" className="story-section bg-[#F8F5EF]">
      <div className="story-container">
        <ScrollReveal>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-8 bg-[#C9922A]" />
            <span className="label-caps text-[#C9922A]">Our Story</span>
            <div className="h-px w-8 bg-[#C9922A]" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="display-lg text-[#0C0C0B] story-title">
            White Rice is a social and behaviour change
            <br />
            <span className="text-[#C9922A] whitespace-nowrap">communications agency</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-[#4A4A46] text-xl story-description mb-8">
            Since 2006, we have partnered with UNICEF, governments, and global
            organisations to design and deliver evidence-based programmes that
            shift behaviours, transform communities, and save lives — across
            47 countries and counting.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p className="text-[#4A4A46] text-lg story-description">
            From frontline health worker training in remote villages to
            national behaviour change campaigns, early childhood development
            programmes, and award-winning films — we work at the intersection
            of science, culture, and community to create lasting change at scale.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
