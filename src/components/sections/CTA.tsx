"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";

export default function CTA() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <ScrollReveal>
          <span className="contact-label">Get in Touch</span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="display-lg text-white contact-title">
            Looking for a <span className="gold">behaviour change</span> partner?
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-white/55 text-lg contact-description">
            We work with UN agencies, governments, and donors to design
            behaviour change programmes that reach the last mile.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="contact-buttons">
            <a href="#contact" className="primary-btn">
              Start a Conversation
            </a>
            <span
              className="secondary-btn opacity-50 cursor-not-allowed"
              title="Coming soon"
            >
              Download Capability Deck
            </span>
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={0.2}>
        <div className="anniversary">
          <span className="anniversary-label">Celebrating</span>
          <div className="anniversary-number">20</div>
          <span className="anniversary-years">Years · 2006 - 2026</span>
        </div>
      </ScrollReveal>
    </section>
  );
}
