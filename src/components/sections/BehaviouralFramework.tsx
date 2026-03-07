"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface Layer {
  id: number;
  label: string;
  title: string;
  description: string;
  ringClass: string;
}

const layers: Layer[] = [
  {
    id: 0,
    label: "Society",
    title: "Society & National Systems",
    description:
      "Policy frameworks, institutional capacity, media landscapes, and cultural systems that set the conditions for change at scale.",
    ringClass: "outer",
  },
  {
    id: 1,
    label: "Community",
    title: "Community",
    description:
      "Social networks, local leaders, peer groups, and community norms that create the enabling environment for sustained behaviour change.",
    ringClass: "community",
  },
  {
    id: 2,
    label: "Family",
    title: "Family & Emotional Environment",
    description:
      "The household and intimate relationships that reinforce or challenge individual behaviour through daily interaction and emotional support.",
    ringClass: "family",
  },
  {
    id: 3,
    label: "Individual",
    title: "Individual",
    description:
      "At the core: personal knowledge, attitudes, beliefs, and skills that shape individual health decisions and behaviours.",
    ringClass: "center",
  },
];

export default function BehaviouralFramework() {
  const [activeLayer, setActiveLayer] = useState<number | null>(null);

  const activeData = activeLayer !== null ? layers[activeLayer] : null;

  function ringClassName(layerId: number, ringClass: string) {
    let cls = `sem-ring ${ringClass}`;
    if (activeLayer !== null) {
      if (activeLayer === layerId) {
        cls += " active";
      } else {
        cls += " dimmed";
      }
    }
    return cls;
  }

  return (
    <section id="behavioural-framework" className="sem-section">
      <div className="sem-container">
        {/* Header */}
        <ScrollReveal>
          <div className="sem-header">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#C9922A]" />
              <span className="label-caps text-[#C9922A]">Our Model</span>
              <div className="h-px w-8 bg-[#C9922A]" />
            </div>
            <h2 className="display-lg text-[#0C0C0B] sem-title">
              Our Behavioural
              <br />
              <span className="text-[#C9922A]">Framework</span>
            </h2>
            <p className="text-[#4A4A46] text-lg sem-subtitle">
              We use the Social Ecological Model to design interventions that
              work across every layer of influence — from the individual to
              national systems.
            </p>
          </div>
        </ScrollReveal>

        {/* Diagram + Panel */}
        <ScrollReveal delay={0.15}>
          <div
            className="sem-layout"
            onMouseLeave={() => setActiveLayer(null)}
          >
            {/* Concentric circles */}
            <div className="sem-diagram">
              <div
                className={ringClassName(0, "outer")}
                onMouseEnter={() => setActiveLayer(0)}
              >
                <span className="sem-ring-label">Society</span>
                <div
                  className={ringClassName(1, "community")}
                  onMouseEnter={(e) => {
                    e.stopPropagation();
                    setActiveLayer(1);
                  }}
                >
                  <span className="sem-ring-label">Community</span>
                  <div
                    className={ringClassName(2, "family")}
                    onMouseEnter={(e) => {
                      e.stopPropagation();
                      setActiveLayer(2);
                    }}
                  >
                    <span className="sem-ring-label">Family</span>
                    <div
                      className={ringClassName(3, "center")}
                      onMouseEnter={(e) => {
                        e.stopPropagation();
                        setActiveLayer(3);
                      }}
                    >
                      <span className="sem-ring-label">Individual</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Description panel */}
            <div className="sem-panel">
              {activeData ? (
                <div
                  key={activeData.id}
                  className="sem-panel-content visible"
                >
                  <span className="sem-panel-number">
                    Layer {activeData.id + 1} of 4
                  </span>
                  <h3 className="sem-panel-title">{activeData.title}</h3>
                  <p className="sem-panel-text">{activeData.description}</p>
                </div>
              ) : (
                <div className="sem-panel-content visible">
                  <p className="sem-panel-prompt">
                    Hover over each layer to explore how we design behaviour
                    change interventions at every level of influence.
                  </p>
                </div>
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
