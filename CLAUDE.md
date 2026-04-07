# White Rice Impact — 20th Anniversary Website

## Purpose

Commemorative website celebrating White Rice Impact's 20 years (2006–2026) of social and behavioral change (SBC) work. Showcases the organization's portfolio of 20 projects across global development (UNICEF, UNFPA, FAO, Oxfam, ICRC, Nike Foundation, CARE, Mastercard Foundation, World Bank, Johns Hopkins CCP, etc.). The site serves as both a portfolio and a narrative experience — telling the 20-year story through an interactive timeline, detailed case studies, and impact metrics.

## Tech Stack

- **Framework:** Next.js 16.1.6 (App Router, React 19.2.3)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (PostCSS plugin, no tailwind.config — all tokens in `globals.css` via `@theme inline`)
- **Animation:** Framer Motion 12.35
- **Icons:** Lucide React
- **UI Primitives:** Radix UI (Slot only), clsx + tailwind-merge (`cn()` utility)
- **Fonts:** Google Fonts via `next/font` — Inter (body), DM Sans (case study body), Cormorant Garamond (serif display/editorial)
- **Config:** `next.config.ts` is minimal (no special options). `postcss.config.mjs` uses `@tailwindcss/postcss`.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout (fonts, metadata, global setup)
│   ├── page.tsx                # Homepage (/)
│   ├── globals.css             # All design tokens, theme, 8600+ lines
│   ├── 20-years-journey/
│   │   └── page.tsx            # 20-Year Journey narrative page
│   └── work/
│       ├── page.tsx            # Work listing grid (/work)
│       └── [slug]/
│           └── page.tsx        # Dynamic case study pages (/work/[slug])
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Top nav (transparent + dark variants)
│   │   └── Footer.tsx          # Minimal dark footer
│   ├── sections/               # Homepage + Journey page sections (15 files)
│   ├── case-study/             # Case study band components (79 files)
│   ├── work/
│   │   └── ProjectCard.tsx     # Work page card component
│   └── ui/
│       ├── AnimatedCounter.tsx  # Intersection-observer number counter
│       ├── ScrollReveal.tsx     # Framer Motion scroll-triggered reveal
│       └── SectionLabel.tsx     # Reusable gold caps label with rules
└── lib/
    ├── projects.ts             # 20 projects array (slug, title, client, tag, image)
    ├── case-studies.ts         # Full case study data (3575 lines, 70+ optional fields each)
    ├── milestones.ts           # Journey timeline milestones data
    └── utils.ts                # cn() utility (clsx + tailwind-merge)

public/
├── images/                     # Project images, partner logos, timeline photos
├── logos/                      # Partner org SVG logos (8 logos)
├── videos/                     # Hero video, project videos (6 mp4 files)
├── downloads/                  # Downloadable PDFs (SBC Cricket materials)
├── project-sarah/              # Project Sarah presentation page (standalone HTML)
├── *.html                      # Legacy static case study HTML files (19 files)
tmp-html/                       # Source reference HTML files used during porting (16 files)
```

## Pages & Routes

### `/` — Homepage (DONE)
Server component. Sections in order:
1. **Navbar** — transparent, scrolls to white
2. **Hero** — full-screen video background with overlay gradient
3. **Framework** — 3-step SBC framework cards
4. **Ecosystem** — interactive SVG ecosystem diagram with tooltips
5. **Statement** — editorial quote/text section
6. **Metrics** — animated counters (impact numbers)
7. **Work** — 4-column project card grid on dark navy background
8. **ProgramShowcase** — program/service pillar cards
9. **Partners** — partner logos marquee/grid
10. **CTA** — contact/call-to-action section
11. **Footer**

### `/work` — Work Listing (DONE)
Client component. Dark navbar variant. Gold rule + "Our Work" label hero. 4-column responsive grid of all 20 projects with staggered scroll-reveal animations.

### `/work/[slug]` — Case Study Pages (DONE — 20 projects)
Server component with `generateStaticParams()` for all 20 slugs. Per-project color themes via CSS custom properties. Modular band system — each case study assembles from a shared set of 79 band components, with conditional rendering based on the project's data fields.

**All 20 case studies:**
1. `misali-ma-storycircle` — Nurturing Change (UNICEF, Stunting Prevention)
2. `unicef-wash-film` — WASH Film Screenings Punjab (UNICEF)
3. `unicef-playlab` — PlayLab at Scale (UNICEF, Play-Based Learning)
4. `sbc-cricket` — SBC Cricket Guide (UNICEF, Sport for Development)
5. `unicef-ecd` — The First 8 Years (UNICEF, Early Childhood)
6. `unicef-parental-engagement` — Walidain HumQadam (UNICEF)
7. `unfpa-transgender` — Apni Kahani (UNFPA, HIV Prevention)
8. `unicef-clean-green` — Clean & Green Punjab (Punjab Govt & UNICEF)
9. `fao-road-safety` — The Diverse Dastarkhwan (FAO, Nutrition)
10. `unicef-mhh` — Breaking Barriers (UNICEF, Menstrual Health)
11. `nike-girls-effect` — Springster (Girl Effect / Nike Foundation)
12. `spring-program` — Spring Accelerator (USAID / Proportion)
13. `oxfam-ikea-hcd` — Empowering Youth for Work (Oxfam / IKEA)
14. `sightsavers-film` — When They Can See (Sightsavers)
15. `johns-hopkins-animation` — The Last Mile (Johns Hopkins CCP)
16. `icrc-bharosa` — Barosakare (ICRC)
17. `awaz-programme` — Awaz - Give Voice (UK Aid / DAI)
18. `oxfam-dunia-aali-larki` — Dunia Aur Larki (Oxfam)
19. `saaf-karachi-waste` — Saaf Karachi (Tier Fund, Recycling)
20. `care-mastercard-mumkin` — Mumkin (CARE / Mastercard Foundation)

### `/20-years-journey` — 20-Year Journey (DONE)
Server component. Cinematic narrative page:
1. **JourneyHero** — full-screen dark hero with "20" watermark, Cormorant Garamond serif
2. **OriginStory** — dark background narrative section
3. **JourneyTimeline** — scroll-through 20-year timeline with golden thread progress, era dividers, chapter heroes, moment grids, stats rows
4. **NextDecade** — forward-looking closing (cream background)
5. **CTA** + **Footer**

## What Is Done

- Full homepage with all sections, animations, video hero
- Work listing page with all 20 project cards
- All 20 case study pages fully built with project-specific band components
- 20-year journey page with interactive timeline
- Responsive design (mobile, tablet, desktop)
- Navbar with transparent/dark variants, mobile hamburger menu
- Scroll-triggered animations (Framer Motion)
- Animated counters on intersection
- Per-case-study color theming via CSS custom properties
- Static generation for all case study pages
- Partner logos section
- Project Sarah standalone HTML presentation in `/public/project-sarah/`

## What Is Pending

- **Footer links** — "Privacy Policy" and "Terms" are placeholder `href="#"` links
- **SEO** — No per-page Open Graph images, no sitemap.xml, no robots.txt
- **Deployment** — No deployment config (no Vercel config, no Docker, no CI/CD)
- **Accessibility audit** — No documented a11y review
- **Performance optimization** — No image optimization config (`next.config.ts` has no `images` config), large CSS file (8600+ lines)
- **Contact form** — CTA section may need backend integration (check if it's just a link or has a form)
- **Legacy HTML cleanup** — 19 static HTML case study files in `public/` and 16 in `tmp-html/` — these are reference/legacy files from the porting process and could be cleaned up

## Design Decisions

### Brand Colors
```
cream:       #F8F5EF     (warm off-white backgrounds)
ink:         #0C0C0B     (near-black body text, dark sections)
gold:        #C9922A     (primary accent — links, labels, badges, scrollbar)
gold-light:  #F0D080     (light gold on dark backgrounds)
teal:        #1A6B5A     (secondary accent)
navy:        #0D2B45     (dark Work section background)
```

### Case Study Theming
Each case study gets its own color via CSS custom properties on `.cs-page`:
```
--cs-primary      (deep project color, default #4A2A5A)
--cs-primary-lt   (lighter variant)
--cs-accent       (golden accent, default #C4962A)
--cs-accent-lt    (lighter golden)
--cs-parchment    #F5F0E8  (warm page bg)
--cs-sand         #E2D9C8
```

### Typography
- **Inter** (`--font-inter`) — primary sans-serif for body text, UI
- **DM Sans** (`--font-dm-sans`) — case study body text
- **Cormorant Garamond** (`--font-cormorant`) — serif display/editorial, used heavily on Journey page and case study heroes
- Fluid typography via `clamp()` for display sizes

### Architecture Decisions
- **Modular band system** for case studies: 79 reusable band components, conditionally assembled per project based on data flags in `case-studies.ts`. This keeps each case study unique while sharing layout patterns.
- **Sticky section pattern** (`.cs-sticky`): Two-column layout with sticky left heading and scrolling right content, used for Challenge/Strategy/Work/Impact sections.
- **All data in TypeScript files** (`projects.ts`, `case-studies.ts`, `milestones.ts`) — no CMS, no database, no API calls. Content is fully static.
- **Tailwind v4** — config-less setup, all tokens defined in `globals.css` via `@theme inline`.
- **No external data fetching** — entire site is statically generated.

## Code Rules

1. **Styling**: Use Tailwind utility classes. Custom CSS goes in `globals.css` only — no CSS modules, no styled-components. Use the `cn()` utility from `src/lib/utils.ts` for conditional class merging.

2. **Components**: Keep case study bands in `src/components/case-study/`. Homepage/journey sections in `src/components/sections/`. Shared UI in `src/components/ui/`.

3. **Data**: Project data lives in `src/lib/projects.ts` and `src/lib/case-studies.ts`. Do not hardcode project content inside components — pull from data files.

4. **Animations**: Use Framer Motion for scroll-triggered animations. Use the `<ScrollReveal>` wrapper component for consistent reveal patterns.

5. **Fonts**: Use the CSS variables `--font-inter`, `--font-dm-sans`, `--font-cormorant`. Do not import additional fonts.

6. **Colors**: Use the brand tokens defined in `globals.css` (`cream`, `ink`, `gold`, `navy`, `teal`, etc.). Case study pages use `--cs-*` variables for project-specific theming.

7. **Images**: Place in `public/images/` organized by project. Reference via `/images/...` paths.

8. **New case studies**: Add entry to `projects.ts`, add data to `case-studies.ts`, create any new band components needed, conditionally render in `[slug]/page.tsx`.

9. **No CMS or API**: This is a fully static site. All content is in TypeScript data files.

10. **Legacy HTML files**: The `.html` files in `public/` and `tmp-html/` are reference files from the porting process. They are not part of the active Next.js app. Do not modify them expecting changes on the site.
