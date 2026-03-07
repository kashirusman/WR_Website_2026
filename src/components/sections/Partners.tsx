"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";

interface Partner {
  name: string;
  logo: string;
  className?: string;
}

const partners: Partner[] = [
  { name: "UNICEF", logo: "/logos/unicef.svg" },
  { name: "WHO", logo: "/logos/who.svg" },
  { name: "FAO", logo: "/logos/fao.svg", className: "fao" },
  { name: "World Bank", logo: "/logos/worldbank.svg" },
  { name: "European Union", logo: "/logos/eu.svg", className: "eu" },
  { name: "WaterAid", logo: "/logos/wateraid.svg", className: "wateraid-logo" },
  { name: "UNDP", logo: "/logos/undp.svg", className: "undp" },
  { name: "IOM", logo: "/logos/iom.svg" },
];

export default function Partners() {
  return (
    <section id="partners" className="partners-section bg-[#F8F5EF]">
      <div className="partners-container">
        {/* Header */}
        <ScrollReveal>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-8 bg-[#C9922A]" />
            <span className="label-caps text-[#C9922A]">Our Partners</span>
            <div className="h-px w-8 bg-[#C9922A]" />
          </div>
          <h2 className="display-md text-[#0C0C0B] partners-title">
            Trusted by the world&apos;s leading organisations
          </h2>
          <p className="text-[#4A4A46] text-lg partners-description">
            For 20 years we have partnered with the agencies at the
            frontier of global development and humanitarian response.
          </p>
        </ScrollReveal>

        {/* Logo grid */}
        <ScrollReveal delay={0.1}>
          <div className="partners-grid">
            {partners.map((partner) => (
              <div key={partner.name} className="partner-logo-wrapper">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className={`partner-logo${partner.className ? ` ${partner.className}` : ""}`}
                />
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Trust footer */}
        <ScrollReveal delay={0.2}>
          <p className="text-[#4A4A46] text-base">
            And many more national governments, UN agencies, bilateral donors,
            and civil society organisations across{" "}
            <strong className="text-[#0C0C0B]">47 countries</strong>.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
