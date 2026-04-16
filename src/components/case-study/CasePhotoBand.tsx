"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface CasePhotoBandProps {
  images: { src: string; alt: string; fit?: "cover" | "contain" }[];
}

export default function CasePhotoBand({ images }: CasePhotoBandProps) {
  if (!images || images.length === 0) return null;

  const count = images.length;

  // Layout class based on image count
  const layoutClass =
    count === 1
      ? "cs-photo-band--single"
      : count === 2
        ? "cs-photo-band--duo"
        : "cs-photo-band--trio";

  return (
    <section className={`cs-photo-band ${layoutClass}`}>
      {images.map((img, i) => {
        const fit = img.fit ?? "cover";
        return (
          <ScrollReveal key={i} delay={i * 0.1}>
            <div className={`cs-photo-band__item${fit === "contain" ? " cs-photo-band__item--contain" : ""}`}>
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes={
                  count === 1
                    ? "100vw"
                    : count === 2
                      ? "(max-width: 640px) 100vw, 50vw"
                      : i === 0
                        ? "(max-width: 640px) 100vw, 60vw"
                        : "(max-width: 640px) 100vw, 30vw"
                }
                style={{ objectFit: fit, objectPosition: "center" }}
              />
            </div>
          </ScrollReveal>
        );
      })}
    </section>
  );
}
