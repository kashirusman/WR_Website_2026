"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionLabel from "@/components/ui/SectionLabel";

interface Program {
  id: string;
  label: string;
  headline: string;
  body: string;
  stats: { value: string; label: string }[];
  image: string;
  imageAlt: string;
  accent: string;
  reverse?: boolean;
}

const programs: Program[] = [
  {
    id: "last-mile",
    label: "Last Mile Training",
    headline: "Reaching the Unreachable",
    body: "In the world's hardest-to-reach communities - remote villages, fragile states, and urban slums - behaviour change is the last mile. Our training programmes equip frontline health workers with practical skills and culturally resonant tools to drive adoption of critical health practices at the household level.",
    stats: [
      { value: "1,200+", label: "Trainers Certified" },
      { value: "30+", label: "Countries" },
      { value: "18M+", label: "Households Reached" },
    ],
    image: "/images/last-mile.jpg",
    imageAlt: "Community health worker training session in rural Africa",
    accent: "#1A6B5A",
    reverse: false,
  },
  {
    id: "sbc",
    label: "SBC Community Interventions",
    headline: "Science Meets Community",
    body: "Our Social and Behaviour Change interventions blend rigorous behavioural science with deep community engagement. From formative research to campaign design, interpersonal communication, and community mobilisation - we design programmes that shift social norms, address barriers, and sustain change over time.",
    stats: [
      { value: "47", label: "Country Programmes" },
      { value: "35M+", label: "People Reached" },
      { value: "200+", label: "Materials Developed" },
    ],
    image: "/images/sbc.jpg",
    imageAlt: "SBC community gathering and participatory session",
    accent: "#0D2B45",
    reverse: true,
  },
  {
    id: "ecd",
    label: "ECD & PlayLabs",
    headline: "The First 1,000 Days - and Beyond",
    body: "Early childhood is where lifelong outcomes are forged. Our PlayLabs model creates stimulating, play-based learning environments in the most resource-constrained settings. By working with caregivers, educators and communities, we transform the early years into a foundation for wellbeing, resilience and future learning.",
    stats: [
      { value: "50+", label: "PlayLabs Established" },
      { value: "120K+", label: "Children Enrolled" },
      { value: "15", label: "Partner Countries" },
    ],
    image: "/images/ecd.jpg",
    imageAlt: "Children playing in a PlayLab learning environment",
    accent: "#7B3F00",
    reverse: false,
  },
];

function ProgramSection({ program }: { program: Program }) {
  const { reverse } = program;

  return (
    <section id={program.id} className="section-padding overflow-hidden">
      <div className="container-wide">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
            reverse ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          {/* Image */}
          <ScrollReveal
            direction={reverse ? "right" : "left"}
            className="relative aspect-[4/3] lg:aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100"
          >
            <Image
              src={program.image}
              alt={program.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              onError={(e) => {
                // Fallback gradient if image missing
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />
            {/* Colour overlay */}
            <div
              className="absolute inset-0 mix-blend-multiply opacity-20"
              style={{ backgroundColor: program.accent }}
            />
            {/* Gradient on image edges */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

            {/* Stat pills overlaid on image */}
            <div className="absolute bottom-6 left-6 flex flex-wrap gap-3">
              {program.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="backdrop-blur-md bg-black/40 text-white rounded-xl px-4 py-3"
                >
                  <div className="text-xl font-bold leading-none">{stat.value}</div>
                  <div className="text-xs text-white/70 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Content */}
          <div className="text-center">
            <ScrollReveal direction={reverse ? "left" : "right"}>
              <SectionLabel>{program.label}</SectionLabel>

              <h2 className="display-md text-[#0C0C0B] mb-6 mx-auto">
                {program.headline}
              </h2>

              <p className="text-[#4A4A46] text-lg leading-relaxed mb-8 mx-auto">
                {program.body}
              </p>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#0C0C0B] border-b-2 border-[#C9922A] pb-0.5 hover:text-[#C9922A] transition-colors group"
              >
                Learn More
                <motion.span
                  className="inline-block"
                  animate={{ x: [0, 4, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeInOut",
                  }}
                >
                  →
                </motion.span>
              </a>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="container-wide mt-16 md:mt-20">
        <div className="h-px bg-black/6" />
      </div>
    </section>
  );
}

export default function Programs() {
  return (
    <div id="programs">
      {/* Programs intro */}
      <div className="section-padding bg-[#F8F5EF]">
        <div className="container-wide text-center">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#C9922A]" />
              <span className="label-caps text-[#C9922A]">Our Programmes</span>
              <div className="h-px w-8 bg-[#C9922A]" />
            </div>
            <h2 className="display-lg text-[#0C0C0B] max-w-3xl mx-auto mb-6">
              Three pillars of lasting change
            </h2>
            <p className="text-[#4A4A46] text-xl max-w-2xl mx-auto leading-relaxed">
              From training the last-mile health worker to designing national
              SBC campaigns and nurturing early childhood development - our
              integrated approach creates durable behaviour change at scale.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Program sections */}
      {programs.map((program) => (
        <ProgramSection key={program.id} program={program} />
      ))}
    </div>
  );
}
