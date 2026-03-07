import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { projects } from "@/lib/projects";
import { getCaseStudy } from "@/lib/case-studies";
import CaseHero from "@/components/case-study/CaseHero";
import CaseChallenge from "@/components/case-study/CaseChallenge";
import CaseStrategy from "@/components/case-study/CaseStrategy";
import CaseWork from "@/components/case-study/CaseWork";
import CaseImpact from "@/components/case-study/CaseImpact";
import CaseGallery from "@/components/case-study/CaseGallery";
import NextProject from "@/components/case-study/NextProject";

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
  const caseStudy = getCaseStudy(slug);

  if (!project || !caseStudy) notFound();

  // Next project (circular: last wraps to first)
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <>
      <Navbar />
      <main>
        <CaseHero project={project} caseStudy={caseStudy} />
        <CaseChallenge data={caseStudy.challenge} />
        <CaseStrategy data={caseStudy.strategy} />
        <CaseWork data={caseStudy.work} />
        <CaseImpact data={caseStudy.impact} />
        <CaseGallery data={caseStudy.gallery} />
        <NextProject project={nextProject} />
      </main>
      <Footer />
    </>
  );
}
