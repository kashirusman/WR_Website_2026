"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import type { GalleryImage } from "@/lib/case-studies";

interface CaseGalleryProps {
  data: {
    heading: string;
    images: GalleryImage[];
  };
}

export default function CaseGallery({ data }: CaseGalleryProps) {
  return (
    <section className="case-gallery">
      <div className="case-gallery__container">
        <ScrollReveal>
          <SectionLabel>{data.heading}</SectionLabel>
          <h2 className="case-gallery__heading">
            Project <span className="text-[#C9922A]">visuals</span>
          </h2>
        </ScrollReveal>

        <div className="case-gallery__grid">
          {data.images.map((img, i) => (
            <ScrollReveal
              key={img.src}
              delay={i * 0.08}
              direction="up"
              className={`case-gallery__item ${img.span === "wide" ? "case-gallery__item--wide" : ""} ${img.span === "tall" ? "case-gallery__item--tall" : ""}`}
            >
              <div className="case-gallery__image-wrap">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="case-gallery__image"
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
