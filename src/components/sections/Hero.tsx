"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen min-h-[640px] flex items-center justify-center overflow-hidden"
    >
      {/* Background video with parallax */}
      <motion.div style={{ y }} className="absolute inset-0 scale-110">
        {/* Gradient fallback - sits behind the video */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D2B45] via-[#1B4F72] to-[#0A3D2B]" />

        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Overlay */}
      <div className="video-overlay" />

      {/* Grain texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 text-white hero-container"
      >
        {/* Year badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="inline-flex items-center gap-2 mb-8"
        >
          <div className="h-px w-10 bg-[#C9922A]" />
          <span className="label-caps text-[#F0D080]">
            2006 - 2026 · 20 Years of Impact
          </span>
          <div className="h-px w-10 bg-[#C9922A]" />
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="display-xl text-white hero-title mb-8"
        >
          Changing Behaviour.
          <br />
          <span className="text-[#F0D080]">Changing Lives.</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.8 }}
          className="text-white/75 text-xl md:text-2xl font-light leading-relaxed hero-description"
        >
          Two decades of evidence-based social and behavioural change work
          with UNICEF and global partners, reaching the world's most
          vulnerable communities.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.7 }}
          className="hero-buttons"
        >
          <a
            href="#impact"
            className="flex items-center justify-center px-6 py-3 bg-[#C9922A] hover:bg-[#B07A1E] text-white font-semibold rounded-full transition-all text-[15px] whitespace-nowrap"
          >
            See Our Impact
          </a>
          <a
            href="#work"
            className="flex items-center justify-center px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-medium rounded-full transition-all text-[15px] backdrop-blur-sm whitespace-nowrap"
          >
            Explore Our Work
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
      >
        <span className="label-caps text-white/40">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-white/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
