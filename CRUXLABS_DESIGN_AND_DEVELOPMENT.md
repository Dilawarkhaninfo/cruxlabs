# CruxLabs | Engineering & Design Specification
## Strategic Frontend Architecture for Systemic Growth

### 1. Executive Summary
CruxLabs is a systems engineering and digital growth firm. We do not build "marketing brochures"; we engineer **digital growth systems**. This specification defines the visual and technical foundation for all CruxLabs interfaces, ensuring every pixel serves a functional purpose in communicating clarity, authority, and scalability.

---

### 2. Design Philosophy: The Crux Framework

#### 2.1 System-First Thinking
Design exists to explain complex systems. We prioritize **Information Architecture** over aesthetic decoration.
- **Hierarchy:** Radical clarity in content priority.
- **Predictability:** Consistent placement of functional elements.
- **Engineering Aesthetic:** The UI should feel built, not just styled.

#### 2.2 Modern Classical Aesthetic
A synthesis of Silicon Valley's technical precision and classical design restraint.
- **Inspiration:** Linear (Depth), Stripe (Clarity), Vercel (Precision), Supabase (Structure).
- **Tone:** Professional, objective, and authoritative.

---

### 3. Visual Language (Design Tokens)

#### 3.1 Typography
- **Primary Typeface:** `Geist Sans` (High-performance, technical legibility).
- **Mono Typeface:** `Geist Mono` (Used for data, metadata, and technical specifications).
- **Rules:**
  - **H1-H3:** Short, decisive positioning statements.
  - **Body Text:** Minimum 16px, optimized line-height (1.6) for sustained reading.
  - **Scale:** Modular scale approach to ensure consistent rhythm.

#### 3.2 Color System (The "Signal" Palette)
- **Neutral Base:** A grayscale foundation ranging from high-contrast white (`#FFFFFF`) to deep charcoal (`#0A0A0A`).
- **Primary Brand Color:** **Technical Blue** (`#0066FF` or similar) — Used exclusively for interaction signals (CTAs, focus states, active indicators).
- **Functional Accents:** Used sparingly for status (success, warning, error) only.

#### 3.3 Depth & Texture (Glassmorphism)
We use depth to communicate hierarchy, not for decoration.
- **Surface Elevation:** Subtle `backdrop-blur` (8px-12px) on sticky components.
- **Depth Layers:** Use of soft borders (`1px`) and contrast-based elevation rather than heavy drop shadows.
- **Micro-Textures:** Subtle grain or grid patterns to represent "engineering" foundations.

#### 3.4 Motion & Dynamics (Physiological Timing)
Motion is a feedback mechanism.
- **Reveals:** Subtle `y-axis` translation (10-20px) + opacity fade (duration: 400ms, ease: [0.22, 1, 0.36, 1]).
- **Micro-interactions:** Instant feedback on hover/click to reduce perceived latency.
- **Rule:** If an animation delays the retrieval of information, it is removed.

---

### 4. Component Architecture

#### 4.1 Folder Structure
```text
src/
├── components/
│   ├── ui/             # shadcn/ui primitives
│   ├── shared/         # Reusable site-wide components (Navbar, Footer, CTA)
│   ├── sections/       # Page-specific block sections
│   └── icons/          # Lucide-wrapped custom iconography
├── lib/
│   ├── utils.ts        # Tailwind merge & utility functions
│   └── constants.ts    # Design tokens & static data
└── app/                # Next.js App Router (Layouts & Pages)
```

#### 4.2 Engineering Principles
- **Server-First:** All data-heavy components are Server Components (RSC) by default.
- **Interaction Boundaries:** Client islands (`'use client'`) are strictly limited to leaf nodes (buttons, sliders, forms).
- **Composability:** Components are designed as building blocks (slots/children pattern) to avoid prop drilling.

---

### 5. Technical Stack

| Category | Technology | Rationale |
| :--- | :--- | :--- |
| **Framework** | Next.js 15+ (App Router) | SEO, SSR, and high-performance routing. |
| **Styling** | Tailwind CSS v4 | Utility-first, optimized build size, design-system-friendly. |
| **Component UI** | shadcn/ui | Radix UI primitives for world-class accessibility. |
| **Icons** | Lucide Icons | Consistent stroke weight (2px) and vector precision. |
| **Type** | next/font | Zero-layout shift, optimized local performance. |

---

### 6. Page Architecture

| Page | Primary Objective | Key UI Pattern |
| :--- | :--- | :--- |
| **Home** | Establish authority & trust | Hero Section + Vision Grid |
| **Services** | Define solution sets | Feature-cards with technical specs |
| **Systems** | Showcase methodology | Engineering diagrams & process steps |
| **About** | The 'Crux' philosophy | Long-form reading optimized layout |
| **Contact** | Conversion / Intake | Compact, frictionless form system |

---

### 7. Performance & SEO Strategy

- **Core Web Vitals:** Aiming for 95+ Score across all metrics.
- **SEO Metadata:** Dynamic metadata generation per page.
- **Semantics:** 100% adherence to WAI-ARIA and HTML5 semantic standards (`<main>`, `<section>`, `<article>`).
- **Images:** LCP optimization via `next/image` with Blurhash placeholders.

---

### 8. Scalability & Future Expansion
This system is architected to transition seamlessly from a marketing site to a:
1. **SaaS Dashboard:** Using the same design tokens for data visualization.
2. **Internal Tools:** Structured grid systems for heavy data entry.
3. **Product Documentation:** Leveraging the MDX-friendly typography scale.

---

### 9. Final Assertion
CruxLabs does not build websites; we build **growth-oriented infrastructure**. This specification ensures that our digital presence is as engineered, precise, and reliable as the solutions we provide to our clients.

