"use client";

import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/work/${project.slug}`} className="workpage-card">
      {/* Image - CSS handles zoom + darken on hover */}
      <div className="workpage-card__image-wrap">
        <div className="workpage-card__image-inner">
          <Image
            src={project.image}
            alt={`${project.client} - ${project.title}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="workpage-card__image"
          />
        </div>
        <div className="workpage-card__overlay" />
      </div>

      {/* Arrow - top right */}
      <span className="workpage-card__arrow">
        <svg
          width="20"
          height="20"
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

      {/* Content - slides up on hover */}
      <div className="workpage-card__content">
        <span className="workpage-card__tag">{project.tag}</span>
        <span className="workpage-card__client">{project.client}</span>
        <h3 className="workpage-card__title">{project.title}</h3>
      </div>
    </Link>
  );
}
