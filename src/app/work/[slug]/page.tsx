import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { projects } from "@/lib/projects";
import { getCaseStudy } from "@/lib/case-studies";
import CaseHeroV2 from "@/components/case-study/CaseHeroV2";
import CaseRoleBand from "@/components/case-study/CaseRoleBand";
import CaseOutcomes from "@/components/case-study/CaseOutcomes";
import CaseStickySection from "@/components/case-study/CaseStickySection";
import CasePullQuote from "@/components/case-study/CasePullQuote";
import CaseImpactGrid from "@/components/case-study/CaseImpactGrid";
import CaseClosing from "@/components/case-study/CaseClosing";
import NextProject from "@/components/case-study/NextProject";
import CaseDividerBand from "@/components/case-study/CaseDividerBand";
import CaseCoCreationBand from "@/components/case-study/CaseCoCreationBand";
import CaseReframeBand from "@/components/case-study/CaseReframeBand";
import CaseTouchpointsBand from "@/components/case-study/CaseTouchpointsBand";
import CaseVerbatimsBand from "@/components/case-study/CaseVerbatimsBand";
import CaseReachBand from "@/components/case-study/CaseReachBand";
import CaseEpisodeBand from "@/components/case-study/CaseEpisodeBand";
import CaseDesignProcessBand from "@/components/case-study/CaseDesignProcessBand";

interface PageProps {
  params: Promise<{ slug: string }>;
}

/* Static generation for all 20 slugs */
export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

/* Dynamic metadata per project */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} - ${project.client} | White Rice Impact`,
    description: project.description,
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  const cs = getCaseStudy(slug);

  if (!project || !cs) notFound();

  // Next project (circular: last wraps to first)
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  // Theme CSS custom properties
  const themeStyle = cs.theme
    ? ({
        "--cs-primary": cs.theme.primary,
        "--cs-primary-lt": cs.theme.primaryLight,
        "--cs-accent": cs.theme.accent,
        "--cs-accent-lt": cs.theme.accentLight,
      } as React.CSSProperties)
    : undefined;

  // Does this study have custom bands (skips generic Work section)
  const hasCustomBands = !!(cs.cocreation || cs.touchpoints || cs.reframe || cs.verbatims || cs.reach || cs.episodes || cs.designProcess);

  return (
    <>
      {/* Navbar hidden on V2 pages — hero-label acts as nav */}
      {!cs.theme && <Navbar />}
      <main className="cs-page" style={themeStyle}>
        {/* 1. Hero */}
        {cs.hero ? (
          <CaseHeroV2 hero={cs.hero} year={cs.year} tags={cs.tags} heroImage={cs.heroImage} heroVideo={cs.heroVideo} />
        ) : null}

        {/* 2. Role Band */}
        {cs.role && (
          <CaseRoleBand
            heading={cs.role.heading}
            body={cs.role.body}
            services={cs.role.services}
          />
        )}

        {/* 3. Key Outcomes */}
        {cs.outcomes && (
          <CaseOutcomes
            cards={cs.outcomes.cards}
            watermark={cs.outcomes.watermark}
          />
        )}

        {/* 3b. Divider Band (between Outcomes and Challenge) */}
        {cs.divider && <CaseDividerBand data={cs.divider} />}

        {/* 4. Challenge — sticky sidebar */}
        <CaseStickySection number="02" heading={cs.challenge.heading}>
          {cs.challenge.body.split("\n\n").map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          {cs.challenge.quote && (
            <CasePullQuote text={cs.challenge.quote.text} />
          )}
        </CaseStickySection>

        {/* 5. Strategy — sticky sidebar */}
        <CaseStickySection number="03" heading={cs.strategy.heading}>
          <p>{cs.strategy.intro}</p>
          <div className="cs-pillars">
            {cs.strategy.steps.map((step, i) => (
              <div key={i} className="cs-pillar">
                <div className="cs-pillar__icon">{step.number}</div>
                <div>
                  <div className="cs-pillar__title">{step.title}</div>
                  <div className="cs-pillar__body">{step.description}</div>
                </div>
              </div>
            ))}
          </div>
        </CaseStickySection>

        {/* 5b. Co-Creation Band */}
        {cs.cocreation && <CaseCoCreationBand data={cs.cocreation} />}

        {/* 5c. Reframed Challenge Band */}
        {cs.reframe && <CaseReframeBand data={cs.reframe} />}

        {/* 5d. Touchpoints Band */}
        {cs.touchpoints && <CaseTouchpointsBand data={cs.touchpoints} />}

        {/* 5e. Verbatims Band */}
        {cs.verbatims && <CaseVerbatimsBand data={cs.verbatims} />}

        {/* 5f. Reach Band */}
        {cs.reach && <CaseReachBand data={cs.reach} />}

        {/* 5g. Episode Band */}
        {cs.episodes && <CaseEpisodeBand data={cs.episodes} />}

        {/* 5h. Design Process Band */}
        {cs.designProcess && <CaseDesignProcessBand data={cs.designProcess} />}

        {/* 6. Work / Intervention — sticky sidebar (skip if custom bands present) */}
        {!hasCustomBands && (
          <CaseStickySection number="04" heading={cs.work.heading}>
            {cs.work.body.split("\n\n").map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <div className="cs-tags">
              {cs.work.deliverables.map((d, i) => (
                <span key={i} className="cs-tag">{d}</span>
              ))}
            </div>
          </CaseStickySection>
        )}

        {/* 7. Impact — sticky sidebar */}
        <CaseStickySection number="05" heading={cs.impact.heading}>
          {cs.impact.body &&
            cs.impact.body.split("\n\n").map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          {cs.impactCells && <CaseImpactGrid cells={cs.impactCells} />}
          {cs.impact.quote && (
            <CasePullQuote text={cs.impact.quote.text} />
          )}
          {cs.impact.closingNote && <p>{cs.impact.closingNote}</p>}
        </CaseStickySection>

        {/* 8. Closing */}
        {cs.closing && (
          <CaseClosing
            heading={cs.closing.heading}
            body={cs.closing.body}
            tags={cs.tags}
          />
        )}

        {/* 9. Next Project */}
        <NextProject project={nextProject} />
      </main>
      <Footer />
    </>
  );
}
