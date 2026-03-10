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
import CaseBehavioursBand from "@/components/case-study/CaseBehavioursBand";
import CaseTheoryOfChangeBand from "@/components/case-study/CaseTheoryOfChangeBand";
import CaseCovidPivotBand from "@/components/case-study/CaseCovidPivotBand";
import CasePersonaCard from "@/components/case-study/CasePersonaCard";
import CaseCommunitiesBand from "@/components/case-study/CaseCommunitiesBand";
import CaseProgrammeBand from "@/components/case-study/CaseProgrammeBand";
import CaseGardenBand from "@/components/case-study/CaseGardenBand";
import CaseJourneyBand from "@/components/case-study/CaseJourneyBand";
import CaseAudiencesBand from "@/components/case-study/CaseAudiencesBand";
import CaseKabBand from "@/components/case-study/CaseKabBand";
import CaseHypothesisBand from "@/components/case-study/CaseHypothesisBand";
import CaseMethodsBand from "@/components/case-study/CaseMethodsBand";
import CaseTopicsBand from "@/components/case-study/CaseTopicsBand";
import CasePlatformBand from "@/components/case-study/CasePlatformBand";
import CaseDiversityBand from "@/components/case-study/CaseDiversityBand";
import CaseSbcBand from "@/components/case-study/CaseSbcBand";
import CaseScaleBand from "@/components/case-study/CaseScaleBand";
import CaseTwoSidesBand from "@/components/case-study/CaseTwoSidesBand";
import CaseHcdResearchBand from "@/components/case-study/CaseHcdResearchBand";
import CasePatientBand from "@/components/case-study/CasePatientBand";
import CaseStrategyProngsBand from "@/components/case-study/CaseStrategyProngsBand";
import CaseTvAdBand from "@/components/case-study/CaseTvAdBand";
import CaseChannelsBand from "@/components/case-study/CaseChannelsBand";

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

  // These custom bands REPLACE the Work/Intervention section entirely
  const skipWorkSection = !!(cs.cocreation || cs.touchpoints || cs.reframe || cs.verbatims || cs.reach || cs.episodes || cs.designProcess || cs.journey || cs.audiences || cs.kab || cs.hypothesis || cs.cocreationMethods || cs.topics || cs.platform || cs.diversity || cs.twoSides);

  // ICRC: custom bands replace Challenge + Strategy sections too
  const skipChallengeStrategy = !!(cs.twoSides);

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

        {/* 2b. Behaviours Band */}
        {cs.behaviours && <CaseBehavioursBand data={cs.behaviours} />}

        {/* 2c. Communities Band */}
        {cs.communities && <CaseCommunitiesBand data={cs.communities} />}

        {/* 3. Key Outcomes */}
        {cs.outcomes && (
          <CaseOutcomes
            cards={cs.outcomes.cards}
            watermark={cs.outcomes.watermark}
          />
        )}

        {/* 3b. Divider Band (between Outcomes and Challenge) */}
        {cs.divider && <CaseDividerBand data={cs.divider} />}

        {/* ICRC: Two Sides Band (replaces Challenge) */}
        {cs.twoSides && <CaseTwoSidesBand data={cs.twoSides} />}

        {/* ICRC: HCD Research Band */}
        {cs.hcdResearch && <CaseHcdResearchBand data={cs.hcdResearch} />}

        {/* ICRC: Patient Band (quote highlight) */}
        {cs.patientBand && <CasePatientBand data={cs.patientBand} />}

        {/* ICRC: Strategy Prongs Band */}
        {cs.strategyProngs && <CaseStrategyProngsBand data={cs.strategyProngs} />}

        {/* ICRC: TV Ad Band */}
        {cs.tvAd && <CaseTvAdBand data={cs.tvAd} />}

        {/* ICRC: Campaign Channels Band */}
        {cs.campaignChannels && <CaseChannelsBand data={cs.campaignChannels} />}

        {/* 4. Challenge — sticky sidebar (skip for ICRC) */}
        {!skipChallengeStrategy && (
          <CaseStickySection number="02" heading={cs.challenge.heading}>
            {cs.challenge.body.split("\n\n").map((p, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
            ))}
            {cs.challenge.quote && (
              <CasePullQuote text={cs.challenge.quote.text} />
            )}
          </CaseStickySection>
        )}

        {/* 5. Strategy — sticky sidebar (skip for ICRC) */}
        {!skipChallengeStrategy && (
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
            {cs.persona && <CasePersonaCard data={cs.persona} />}
          </CaseStickySection>
        )}

        {/* 5a-i. Theory of Change Band */}
        {cs.theoryOfChange && <CaseTheoryOfChangeBand data={cs.theoryOfChange} />}

        {/* 5a-ii. Journey Band */}
        {cs.journey && <CaseJourneyBand data={cs.journey} />}

        {/* 5a-iii. Audiences Band */}
        {cs.audiences && <CaseAudiencesBand data={cs.audiences} />}

        {/* 5a-iv. KAB Framework Band */}
        {cs.kab && <CaseKabBand data={cs.kab} />}

        {/* 5a-v. Co-Creation Methods Band (Springster) */}
        {cs.cocreationMethods && <CaseMethodsBand data={cs.cocreationMethods} />}

        {/* 5a-vi. Topics Band */}
        {cs.topics && <CaseTopicsBand data={cs.topics} />}

        {/* 5a-vii. Platform Band */}
        {cs.platform && <CasePlatformBand data={cs.platform} />}

        {/* 5a-viii. Diversity Band */}
        {cs.diversity && <CaseDiversityBand data={cs.diversity} />}

        {/* 5b. Co-Creation Band */}
        {cs.cocreation && <CaseCoCreationBand data={cs.cocreation} />}

        {/* 5c. Reframed Challenge Band */}
        {cs.reframe && <CaseReframeBand data={cs.reframe} />}

        {/* 5d. Touchpoints Band */}
        {cs.touchpoints && <CaseTouchpointsBand data={cs.touchpoints} />}

        {/* 5e. Verbatims Band */}
        {cs.verbatims && <CaseVerbatimsBand data={cs.verbatims} />}

        {/* 5e-ii. Hypothesis Table Band */}
        {cs.hypothesis && <CaseHypothesisBand data={cs.hypothesis} />}

        {/* 5f. Reach Band */}
        {cs.reach && <CaseReachBand data={cs.reach} />}

        {/* 5g. Episode Band */}
        {cs.episodes && <CaseEpisodeBand data={cs.episodes} />}

        {/* 5h. Design Process Band */}
        {cs.designProcess && <CaseDesignProcessBand data={cs.designProcess} />}

        {/* 5i. Programme Band */}
        {cs.programme && <CaseProgrammeBand data={cs.programme} />}

        {/* 5j. Garden Band */}
        {cs.garden && <CaseGardenBand data={cs.garden} />}

        {/* 6. Work / Intervention — sticky sidebar (skip when custom bands replace it) */}
        {!skipWorkSection && (
          <CaseStickySection number="04" heading={cs.work.heading}>
            {cs.work.body.split("\n\n").map((p, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
            ))}

            {/* 6-inline-a. Phases (PlayLab) */}
            {cs.phases && (
              <div className="cs-phases">
                {cs.phases.map((phase, i) => (
                  <div key={i} className="cs-phase">
                    <div className="cs-phase__num">{phase.num}</div>
                    <div className="cs-phase__title">{phase.title}</div>
                    <div className="cs-phase__body">{phase.body}</div>
                  </div>
                ))}
              </div>
            )}

            {/* 6-inline-b. Session Rhythm (PlayLab) */}
            {cs.sessionRhythm && (
              <>
                <h3 className="cs-session-rhythm__label">Session Rhythm</h3>
                <div className="cs-session-rhythm">
                  {cs.sessionRhythm.map((sr, i) => (
                    <div key={i} className="cs-sr-card">
                      <div className="cs-sr-card__time">{sr.time}</div>
                      <div className="cs-sr-card__title">{sr.title}</div>
                      <div className="cs-sr-card__body">{sr.body}</div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* 6-inline-c. Features Grid (PlayLab) */}
            {cs.featuresGrid && (
              <>
                {cs.featuresGridIntro && (
                  <p className="cs-feat-intro">{cs.featuresGridIntro}</p>
                )}
                <div className="cs-features">
                  {cs.featuresGrid.map((f, i) => (
                    <div key={i} className="cs-feat-card">
                      <div className="cs-feat-card__num">{f.num}</div>
                      <div className="cs-feat-card__title">{f.title}</div>
                      <div className="cs-feat-card__body">{f.body}</div>
                    </div>
                  ))}
                </div>
              </>
            )}

            <div className="cs-tags">
              {cs.work.deliverables.map((d, i) => (
                <span key={i} className="cs-tag">{d}</span>
              ))}
            </div>
            {cs.work.quote && (
              <CasePullQuote text={cs.work.quote} />
            )}
          </CaseStickySection>
        )}

        {/* 6a. SBC Band (PlayLab — between Work and Impact) */}
        {cs.sbc && <CaseSbcBand data={cs.sbc} />}

        {/* 6b. COVID Pivot Band */}
        {cs.covidPivot && <CaseCovidPivotBand data={cs.covidPivot} />}

        {/* 7. Impact — sticky sidebar */}
        <CaseStickySection number="05" heading={cs.impact.heading}>
          {cs.impact.body &&
            cs.impact.body.split("\n\n").map((p, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
            ))}
          {cs.impactCells && <CaseImpactGrid cells={cs.impactCells} />}

          {/* 7-inline. Stories (PlayLab) */}
          {cs.stories && (
            <>
              {cs.storiesIntro && (
                <p className="cs-stories__intro" dangerouslySetInnerHTML={{ __html: cs.storiesIntro }} />
              )}
              <div className="cs-stories">
                {cs.stories.map((story, i) => (
                  <div key={i} className="cs-story">
                    <div className="cs-story__initial">{story.initial}</div>
                    <div className="cs-story__content">
                      <div className="cs-story__name">{story.name}</div>
                      <div className="cs-story__text">{story.text}</div>
                      <blockquote className="cs-story__quote">&ldquo;{story.quote}&rdquo;</blockquote>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {cs.impact.quote && (
            <CasePullQuote text={cs.impact.quote.text} />
          )}
          {cs.impact.closingNote && <p>{cs.impact.closingNote}</p>}
        </CaseStickySection>

        {/* 7a. Scale Band (PlayLab — between Impact and Closing) */}
        {cs.scaleBand && <CaseScaleBand data={cs.scaleBand} />}

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
