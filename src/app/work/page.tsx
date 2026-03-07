"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ProjectCard from "@/components/work/ProjectCard";
import { projects } from "@/lib/projects";

export default function WorkPage() {
  return (
    <>
      <Navbar />

      {/* ── Hero header ── */}
      <section className="workpage-hero">
        <div className="workpage-hero-container">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#C9922A]" />
              <span className="label-caps text-[#C9922A]">Our Work</span>
              <div className="h-px w-8 bg-[#C9922A]" />
            </div>
            <h1 className="workpage-hero-title">
              20 years of <span className="text-[#C9922A]">impact</span>,
              <br />
              one project at a time
            </h1>
            <p className="workpage-hero-subtitle">
              From community-level interventions to national campaigns — explore
              the projects that define two decades of social and behavioural
              change.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Project grid ── */}
      <section className="workpage-grid-section">
        <div className="workpage-grid">
          {projects.map((project, i) => (
            <ScrollReveal key={project.slug} delay={i * 0.04} direction="up">
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
