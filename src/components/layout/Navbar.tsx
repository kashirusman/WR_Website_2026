"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "20-Year Journey", href: "/20-years-journey" },
  { label: "Work", href: "/work" },
  { label: "Services", href: "/#services" },
  { label: "Get in Touch", href: "/#contact" },
];

export default function Navbar({ variant = "default" }: { variant?: "default" | "dark" }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const isDark = variant === "dark" || scrolled;

  useEffect(() => {
    const unsub = scrollY.on("change", (v) => setScrolled(v > 60));
    return unsub;
  }, [scrollY]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 overflow-x-hidden transition-all duration-500",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.06)]"
          : variant === "dark"
            ? "bg-white/80 backdrop-blur-sm"
            : "bg-transparent"
      )}
    >
      <div className="container-wide relative flex h-16 items-center justify-between md:h-20">
        {/* Logo */}
        <a href="/" className="relative z-10 flex items-center gap-2.5 group">
          <span
            className={cn(
              "font-bold text-lg tracking-tight transition-colors",
              isDark ? "text-[#0C0C0B]" : "text-white"
            )}
          >
            White Rice
          </span>
          <span
            className={cn(
              "text-xs font-semibold px-2 py-0.5 rounded transition-colors",
              isDark
                ? "bg-[#C9922A] text-white"
                : "bg-white/20 text-white border border-white/30"
            )}
          >
            20 YEARS
          </span>
        </a>

        {/* Desktop nav - absolutely centered */}
        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors",
                isDark
                  ? "text-[#4A4A46] hover:text-[#0C0C0B]"
                  : "text-white/80 hover:text-white"
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className={cn(
            "md:hidden flex flex-col gap-1.5 p-2",
            isDark ? "text-[#0C0C0B]" : "text-white"
          )}
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-current"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-0.5 bg-current"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-current"
          />
        </button>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={menuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-white border-t border-black/5"
      >
        <nav className="flex flex-col px-6 py-4 gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[#0C0C0B] font-bold py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 text-center px-5 py-3 bg-[#C9922A] text-white rounded-full font-semibold text-sm"
          >
            Get in Touch
          </a>
        </nav>
      </motion.div>
    </motion.header>
  );
}
