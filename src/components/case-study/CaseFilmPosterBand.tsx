"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export interface FilmPosterData {
  image: string;
  video?: string;
  title: string;
  titleUrdu?: string;
  tagline?: string;
  award: string;
  awardBody: string;
  awardCategory: string;
  platform: string;
  cast: string;
  director: string;
  producer?: string;
  watchUrl?: string;
}

interface Props {
  data: FilmPosterData;
}

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export default function CaseFilmPosterBand({ data }: Props) {
  return (
    <section className="cs-film-poster">
      <div className="cs-film-poster__inner">

        {/* ── Video or Poster ── */}
        <motion.div
          className="cs-film-poster__media-wrap"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.85, ease }}
        >
          {data.video ? (
            <video
              className="cs-film-poster__video"
              controls
              poster={data.image}
              preload="metadata"
            >
              <source src={data.video} type="video/mp4" />
            </video>
          ) : (
            <div className="cs-film-poster__img-wrap">
              <Image
                src={data.image}
                alt={`${data.title} official film poster`}
                fill
                sizes="(max-width: 768px) 100vw, 42vw"
                className="object-contain"
              />
            </div>
          )}
        </motion.div>

        {/* ── Info ── */}
        <motion.div
          className="cs-film-poster__info"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.15, duration: 0.85, ease }}
        >
          {/* Award badge */}
          <div className="cs-film-poster__award">
            <div className="cs-film-poster__award-icon">🏆</div>
            <div>
              <div className="cs-film-poster__award-body">{data.awardBody}</div>
              <div className="cs-film-poster__award-name">{data.award}</div>
              <div className="cs-film-poster__award-cat">{data.awardCategory}</div>
            </div>
          </div>

          {/* Title */}
          <h2 className="cs-film-poster__title">
            {data.title}
            {data.titleUrdu && (
              <span className="cs-film-poster__title-urdu"> {data.titleUrdu}</span>
            )}
          </h2>
          {data.tagline && (
            <p className="cs-film-poster__tagline">{data.tagline}</p>
          )}

          {/* Credits */}
          <dl className="cs-film-poster__credits">
            <div className="cs-film-poster__credit-row">
              <dt>Platform</dt>
              <dd>{data.platform}</dd>
            </div>
            <div className="cs-film-poster__credit-row">
              <dt>Starring</dt>
              <dd>{data.cast}</dd>
            </div>
            <div className="cs-film-poster__credit-row">
              <dt>Director</dt>
              <dd>{data.director}</dd>
            </div>
            {data.producer && (
              <div className="cs-film-poster__credit-row">
                <dt>Producer</dt>
                <dd>{data.producer}</dd>
              </div>
            )}
          </dl>

          {/* Watch CTA */}
          {data.watchUrl && (
            <a
              href={data.watchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cs-film-poster__cta"
            >
              Watch on {data.platform} ↗
            </a>
          )}
        </motion.div>

      </div>
    </section>
  );
}
