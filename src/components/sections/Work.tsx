"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { projects } from "@/lib/projects";

export default function Work() {
  return (
    <section id="work" className="work-section">
      <div className="work-container">
        {/* Header */}
        <ScrollReveal>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-8 bg-[#C9922A]" />
            <span className="label-caps text-[#C9922A]">Our Work</span>
            <div className="h-px w-8 bg-[#C9922A]" />
          </div>
          <h2 className="display-lg text-[#0C0C0B] work-title">
            Defining moments from{" "}
            <span className="text-[#C9922A]">20 years</span>
          </h2>
          <p className="text-[#4A4A46] text-lg work-subtitle">
            A selection of landmark projects that demonstrate the breadth and
            depth of our impact.
          </p>
        </ScrollReveal>

        {/* Project grid */}
        <div className="work-grid">
          {projects.map((project, i) => (
            <ScrollReveal
              key={project.slug}
              delay={i * 0.05}
              direction="up"
            >
              <Link
                href={`/work/${project.slug}`}
                className="work-card"
              >
                <div className="work-card__image-wrap">
                  <Image
                    src={project.image}
                    alt={`${project.client} - ${project.title}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="work-card__image"
                  />
                  <div className="work-card__overlay" />
                </div>

                {/* Arrow icon */}
                <span className="work-card__arrow">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </span>

                <div className="work-card__content">
                  <span className="work-card__tag">{project.tag}</span>
                  <h3 className="work-card__title">{project.title}</h3>
                  <span className="work-card__client">{project.client}</span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
