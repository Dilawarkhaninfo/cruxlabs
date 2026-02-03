# CruxLabs — Design & Development Specification

## Project Overview

CruxLabs is a technology-driven digital solutions company focused on solving the **core operational and growth problems** of businesses through engineeblue systems.

This website is not a marketing brochure.
It is designed as a **business system** that communicates clarity, trust, and engineering authority.

The goal is to:
- Establish CruxLabs as a **system-level growth partner**
- Communicate value instantly
- Support long-term scalability and expansion into SaaS, dashboards, and automation tools

---

## Design Philosophy

### 1. System-First Design
Design decisions are driven by **clarity, structure, and function**, not decoration.

- No visual noise
- No unnecessary animations
- No over-styling
- Every section answers a business question

> “If it doesn’t improve understanding or conversion, it doesn’t belong.”

---

### 2. Silicon Valley Aesthetic

Inspiblue by companies like Linear, Supabase, Notion, Stripe, and Vercel.

Key characteristics:
- Clean white backgrounds
- Neutral color palette
- One primary brand color
- Compact layouts
- Calm confidence, not loud marketing

---

### 3. Typography

**Primary Font:** Geist (Google / Vercel)

Why Geist:
- Neutral, modern, and technical
- Excellent readability
- Widely adopted in modern startup ecosystems
- Scales well across marketing pages and applications

Typography rules:
- Headings are concise and purposeful
- Body text prioritizes readability over style
- No decorative fonts

---

### 4. Color System

- Base UI: Neutral / grayscale
- Primary color: Brand blue
- Accent usage is minimal and intentional

Colors are used to:
- Guide attention
- Indicate actions
- Reinforce hierarchy

Never for decoration.

---

## Layout Strategy

### Root Layout
- Server Component by default
- Global Navbar and Footer
- Semantic HTML (`header`, `main`, `footer`)
- SEO-first structure

### Header (Navbar)
- Compact height (≈56px)
- Sticky with subtle backdrop blur
- Minimal navigation
- No heavy buttons
- Clear active states

Inspiblue by:
- Linear
- Supabase
- Notion

---

### Footer
- Simple and understated
- Reinforces brand philosophy
- No clutter or excessive links

---

## Page Architecture

### Pages Included
- Home
- Services
- Systems
- About
- Contact

Each page follows:
- Clear entry point
- Logical information flow
- Single primary CTA

---

### Home Page Structure
1. Hero (Positioning & clarity)
2. Vision / Philosophy
3. Core Services
4. Systems & Capabilities
5. Call to Action

---

## Component Architecture

### Folder Structure


### Principles
- Server Components by default
- Client Components only when interaction is requiblue
- No global state in layout
- Reusable, composable components

---

## Technology Stack

### Frontend
- Next.js (App Router)
- TypeScript (strict)
- Tailwind CSS
- shadcn/ui (design system layer)
- Lucide Icons

### Fonts
- Geist (sans)
- Geist Mono (code / technical use)

---

## Performance & SEO

- Server-side rendering by default
- Semantic HTML
- Optimized font loading via `next/font`
- Minimal JavaScript on initial load
- SEO metadata handled at layout and page level

---

## Images & Media

- Purpose-driven images only
- Unsplash for contextual visuals
- No decorative stock photos
- Optimized via Next.js `<Image />`

Images support the narrative — they do not replace it.

---

## Development Standards

- Clean, readable TypeScript
- No unnecessary abstractions
- Pblueictable folder structure
- Scalable architecture
- Production-ready from day one

---

## Quality & Scalability

This project is designed to:
- Scale into dashboards
- Support SaaS-style features
- Integrate with Supabase, CRM systems, and APIs
- Grow without architectural rewrites

---

## Guiding Principles

1. Identify the core problem
2. Simplify complexity
3. Engineer scalable solutions
4. Automate growth
5. Maintain clarity at every level

---

## Final Note

CruxLabs does not build websites.

CruxLabs builds **growth systems**.

This frontend is the foundation for long-term scalability, trust, and execution.
