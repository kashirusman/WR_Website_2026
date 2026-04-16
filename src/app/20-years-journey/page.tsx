import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import JourneyHero from "@/components/sections/JourneyHero";
import OriginStory from "@/components/sections/OriginStory";
// import JourneyTimeline from "@/components/sections/JourneyTimeline"; // old vertical timeline
import TimelineHorizontal from "@/components/TimelineHorizontal";
import NextDecade from "@/components/sections/NextDecade";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "20-Year Journey - White Rice Impact",
  description:
    "Explore 20 years of social impact, behaviour change, and human-centered design. From 2006 to 2026 - the White Rice story.",
};

export default function TwentyYearJourneyPage() {
  return (
    <>
      <Navbar />
      <main>
        <JourneyHero />
        <OriginStory />
        <TimelineHorizontal />
        <NextDecade />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
