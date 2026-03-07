"use client";

import { useState, useEffect, useRef } from "react";

/* ── Ring definitions ──────────────────────────────────────────── */
interface Ring {
  id: number;
  label: string;
  descriptor: string;
  color: string;
  fillOpacity: number;
  innerR: number;
  outerR: number;
  tooltip: string;
}

const CX = 340;
const CY = 340;

const rings: Ring[] = [
  {
    id: 0,
    label: "Individual",
    descriptor: "Habits, beliefs, motivation",
    color: "#D9A441",
    fillOpacity: 0.22,
    innerR: 0,
    outerR: 58,
    tooltip: "Behaviour triggers, habits, motivation, knowledge",
  },
  {
    id: 1,
    label: "Family",
    descriptor: "Parenting and home environment",
    color: "#6F9E84",
    fillOpacity: 0.2,
    innerR: 70,
    outerR: 134,
    tooltip: "Parenting practices, emotional relationships, home routines",
  },
  {
    id: 2,
    label: "Digital",
    descriptor: "WhatsApp, media and social platforms",
    color: "#6C9BD2",
    fillOpacity: 0.18,
    innerR: 146,
    outerR: 210,
    tooltip: "WhatsApp messaging, short video storytelling, digital campaigns",
  },
  {
    id: 3,
    label: "Community",
    descriptor: "Frontline workers and community leaders",
    color: "#B8794A",
    fillOpacity: 0.18,
    innerR: 222,
    outerR: 280,
    tooltip: "Frontline workers, religious leaders, peer networks",
  },
  {
    id: 4,
    label: "Society",
    descriptor: "Policies, institutions and national systems",
    color: "#7C6BB3",
    fillOpacity: 0.16,
    innerR: 292,
    outerR: 340,
    tooltip: "Government programs, policy frameworks, mass media",
  },
];

/* ── Annular path helper ──────────────────────────────────────── */
function annularPath(innerR: number, outerR: number) {
  return [
    `M ${CX + outerR} ${CY}`,
    `A ${outerR} ${outerR} 0 1 0 ${CX - outerR} ${CY}`,
    `A ${outerR} ${outerR} 0 1 0 ${CX + outerR} ${CY} Z`,
    `M ${CX + innerR} ${CY}`,
    `A ${innerR} ${innerR} 0 1 1 ${CX - innerR} ${CY}`,
    `A ${innerR} ${innerR} 0 1 1 ${CX + innerR} ${CY} Z`,
  ].join(" ");
}

/* ── Component ─────────────────────────────────────────────────── */
export default function Ecosystem() {
  const [hoveredRing, setHoveredRing] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  /* Scroll reveal with fallback */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const check = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const visibleH = Math.min(vh, rect.bottom) - Math.max(0, rect.top);
      if (visibleH / rect.height > 0.1) setVisible(true);
    };

    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    observer.observe(el);
    window.addEventListener("scroll", check, { passive: true });
    check();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", check);
    };
  }, []);

  const hoveredData = hoveredRing !== null ? rings[hoveredRing] : null;
  const tooltipY = hoveredData ? CY - hoveredData.outerR - 14 : 0;

  return (
    <section id="ecosystem" className="eco-section" ref={sectionRef}>
      {/* ── Header ─────────────────────────────────────────────── */}
      <div className="eco-header">
        <p className="eco-label">Our Model</p>
        <h2 className="eco-heading">The Behaviour Change Ecosystem</h2>
        <p className="eco-subtitle">
          How behaviour spreads from individuals to families, communities, and national systems.
        </p>
      </div>

      {/* ── Diagram ────────────────────────────────────────────── */}
      <div className="eco-diagram-wrap">
        <div className="eco-diagram">
          <svg
            className="eco-svg"
            viewBox="0 0 680 680"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Render outer → inner so inner rings paint on top */}
            {[...rings].reverse().map((ring, ri) => {
              const delay = ri * 0.14;
              const isHovered = hoveredRing === ring.id;

              /* Label position: center of the ring band, at the top arc */
              const midR = ring.id === 0 ? 0 : (ring.innerR + ring.outerR) / 2;
              const labelY = ring.id === 0 ? CY - 7 : CY - midR + 1;
              const descY = labelY + 15;

              /* Hover fill: slightly more opaque version of the color */
              const hoverFill = ring.color;
              const normalFill = ring.color;

              return (
                <g
                  key={ring.id}
                  style={{
                    opacity: visible ? 1 : 0,
                    transition: `opacity 0.6s ease ${delay}s`,
                    cursor: "pointer",
                  }}
                  onMouseEnter={() => setHoveredRing(ring.id)}
                  onMouseLeave={() => setHoveredRing(null)}
                >
                  {/* Ring shape */}
                  {ring.id === 0 ? (
                    <circle
                      cx={CX} cy={CY} r={ring.outerR}
                      fill={normalFill}
                      fillOpacity={isHovered ? 0.45 : ring.fillOpacity}
                      stroke={ring.color}
                      strokeWidth={isHovered ? 2.5 : 1.5}
                      strokeOpacity={isHovered ? 0.7 : 0.35}
                      style={{ transition: "fill-opacity 0.25s ease, stroke-width 0.25s ease, stroke-opacity 0.25s ease" }}
                    />
                  ) : (
                    <path
                      d={annularPath(ring.innerR, ring.outerR)}
                      fill={hoverFill}
                      fillOpacity={isHovered ? 0.4 : ring.fillOpacity}
                      fillRule="evenodd"
                      stroke={ring.color}
                      strokeWidth={isHovered ? 2.5 : 1.5}
                      strokeOpacity={isHovered ? 0.65 : 0.3}
                      style={{ transition: "fill-opacity 0.25s ease, stroke-width 0.25s ease, stroke-opacity 0.25s ease" }}
                    />
                  )}

                  {/* Label - ring name */}
                  <text
                    x={CX} y={labelY}
                    textAnchor="middle"
                    dominantBaseline="central"
                    fill={isHovered ? "#1a1a18" : ring.color}
                    style={{
                      fontSize: ring.id === 0 ? "14px" : "12.5px",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      transition: "fill 0.25s ease",
                      pointerEvents: "none",
                    }}
                  >
                    {ring.label.toUpperCase()}
                  </text>

                  {/* Descriptor */}
                  <text
                    x={CX} y={descY}
                    textAnchor="middle"
                    dominantBaseline="central"
                    fill={isHovered ? "rgba(26,26,24,0.7)" : "rgba(0,0,0,0.32)"}
                    style={{
                      fontSize: ring.id === 0 ? "9.5px" : "8.5px",
                      fontWeight: 400,
                      letterSpacing: "0.01em",
                      transition: "fill 0.25s ease",
                      pointerEvents: "none",
                    }}
                  >
                    {ring.descriptor}
                  </text>
                </g>
              );
            })}
          </svg>

          {/* Tooltip */}
          {hoveredData && (
            <div
              className="eco-tooltip"
              style={{
                left: "50%",
                top: `${(tooltipY / 680) * 100}%`,
              }}
            >
              <div className="eco-tooltip-title">{hoveredData.label}</div>
              <div className="eco-tooltip-text">{hoveredData.tooltip}</div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
