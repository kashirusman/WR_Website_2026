"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/lib/projects";

interface NextProjectProps {
  project: Project;
}

export default function NextProject({ project }: NextProjectProps) {
  return (
    <section className="next-project">
      <Link href={`/work/${project.slug}`} className="next-project__link">
        <div className="next-project__container">
          {/* Text side */}
          <div className="next-project__content">
            <span className="next-project__label">Next Project</span>
            <h2 className="next-project__title">{project.title}</h2>
            <span className="next-project__client">{project.client}</span>
            <div className="next-project__arrow">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
          </div>

          {/* Image side */}
          <div className="next-project__image-wrap">
            <motion.div
              className="next-project__image-inner"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <Image
                src={project.image}
                alt={`${project.client} — ${project.title}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="next-project__image"
              />
            </motion.div>
          </div>
        </div>
      </Link>
    </section>
  );
}
