"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface Project {
  id: string;
  tag: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: "story-gathering",
    tag: "Nationwide",
    title: "Largest Story Gathering Exercise",
    description:
      "Capturing lived experiences across villages to shape national policy and programme design.",
    image: "/images/timeline/2024/child-stim-village.jpg",
    alt: "Camera crew documenting community stories in a rural village",
    featured: true,
  },
  {
    id: "misali-ma",
    tag: "Maternal Health",
    title: "Misali Ma Project",
    description:
      "Reaching 11,000 mothers with life-saving health messaging through mobile-first content.",
    image: "/images/timeline/2023/parenting-hero.jpg",
    alt: "Health worker sharing maternal health content with mothers in a community setting",
  },
  {
    id: "community-visioning",
    tag: "Community Engagement",
    title: "Largest Community Visioning Exercise",
    description:
      "750 visioning boards shaping local education priorities across Pakistan.",
    image: "/images/timeline/2015.png",
    alt: "Girls engaged in a participatory visioning exercise with educational cards",
  },
  {
    id: "award-films",
    tag: "Film & Storytelling",
    title: "Award-Winning Films",
    description:
      "12 Hours and Noor — driving national discourse on health and education.",
    image: "/images/timeline/2023/parenting-session.jpg",
    alt: "Cinematic still from an award-winning behaviour change film broadcast on national television",
    featured: true,
  },
  {
    id: "playlab",
    tag: "Early Childhood",
    title: "Pakistan's First PlayLab",
    description:
      "Play-based early learning reaching resource-constrained communities.",
    image: "/images/timeline/2023/parenting-screening.jpg",
    alt: "UNICEF Bachpan Bemisaal children's educational programme screening",
    featured: true,
  },
  {
    id: "digital-training",
    tag: "Digital Health",
    title: "Digital Last Mile Training",
    description:
      "Mobile-first training platform for frontline health workers across districts.",
    image: "/images/timeline/2021-b.png",
    alt: "Digital training session being recorded in a community classroom",
  },
];

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

        {/* Bento grid */}
        <div className="work-bento">
          {projects.map((project, i) => (
            <ScrollReveal
              key={project.id}
              delay={i * 0.08}
              direction="up"
            >
              <div
                className={`work-card ${project.featured ? "work-card--featured" : ""}`}
              >
                <div className="work-card__image-wrap">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes={project.featured ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
                    className="work-card__image"
                  />
                  <div className="work-card__overlay" />
                </div>
                <div className="work-card__content">
                  <span className="work-card__tag">{project.tag}</span>
                  <h3 className="work-card__title">{project.title}</h3>
                  <p className="work-card__desc">{project.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
