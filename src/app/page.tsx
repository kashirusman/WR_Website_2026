import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Statement from "@/components/sections/Statement";
import Metrics from "@/components/sections/Metrics";
import Work from "@/components/sections/Work";
import ProgramShowcase from "@/components/sections/ProgramShowcase";
import Partners from "@/components/sections/Partners";
import CTA from "@/components/sections/CTA";
import Framework from "@/components/sections/Framework";
import Ecosystem from "@/components/sections/Ecosystem";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Framework />
        <Ecosystem />
        <Statement />
        <Metrics />
        <Work />
        <ProgramShowcase />
        <Partners />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
