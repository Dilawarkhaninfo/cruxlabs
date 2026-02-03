# CruxLabs | Diagonal Design System & Engineering Specification

## 1. Executive Vision
CruxLabs is adopting a **"Diagonal Dynamic"** visual identity. This design breaks away from the traditional boxy grid of the web, introducing energy, motion, and a futuristic edge through diagonal lines and slanted layouts. 

The goal is to create an interface that feels **alive, unique, and premium**, distinguishing CruxLabs from every other "square" competitor. It combines the maturity of a professional firm with the forward-thinking energy of a tech leader.

---

## 2. Design Philosophy: "The Diagonal Shift"

### 2.1 Core Concept
- **Desktop:** Bold diagonal section dividers, slanted image containers, and asymmetric layouts. The user flow should feel like sliding down a dynamic path rather than stepping down a ladder.
- **Mobile:** Elements naturally stack for readability, but the "Diagonal" brand DNA is preserved through background gradients, subtle angled separators, and icon geometry. No broken layouts; functionality matches the desktop wow-factor.

### 2.2 Aesthetic Principles
- **Less Content, More Vision:** We prioritize high-impact imagery over long paragraphs. Text is concise, punchy, and minimal.
- **Eye-Catching & Smoothing:** Animations and transitions should be fluid ("smoothing"). The eye should glide across the page.
- **Mature & Clean:** Despite the unique geometry, the design remains uncluttered. No chaos. Just clean lines and purposeful space.

---

## 3. Visual Language (Design Tokens)

### 3.1 Color Palette
A high-contrast, fresh, and sharp palette designed to pop.

| Color Name | Hex Code | Usage |
| :--- | :--- | :--- |
| **Sky Blue** | `#0EA5E9` (Tailwind `sky-500`) | Primary accents, buttons, diagonal overlays, gradients. |
| **Crisp White** | `#FFFFFF` | Primary background, main text on dark sections, clean space. |
| **Dark Black** | `#09090B` (Tailwind `zinc-950`) | Deep emphasis sections, footers, primary text on white. |
| **Soft Gray** | `#F4F4F5` (Tailwind `zinc-100`) | Subtle backgrounds to create depth between diagonals. |

### 3.2 Typography
- **Font Family:** `Geist Sans` or `Inter`. Clean, modern, sans-serif.
- **Sizing:**
  - **Headings:** Bold but not overpowering. Avoid massive "shouting" fonts.
  - **Body:** Simple, readable, highly legible. 
  - **Style:** Clean and aesthetic. No decorative serifs.

### 3.3 Imagery Strategy
**Critical Requirement:** Every image slot MUST have a descriptive `alt` tag. This serves two purposes: accessibility and acting as a prompt for AI image generation.

*Example:* 
`<img src="..." alt="Futuristic glass office building with sky blue neon diagonal lighting, cinematic angle, 8k resolution" />`

---

## 4. Component Architecture

### 4.1 The "Diagonal" Layouts
- **angled-section:** A wrapper component that applies a `clip-path` or `skew` transformation to create diagonal boundaries between sections (e.g., `-3deg` or `5deg` tilt).
- **slanted-card:** Cards that have a subtle skew on hover or a permanent diagonal accent border.
- **hero-split:** A desktop split-screen where the division line is diagonal, separating text from the hero image.

### 4.2 Interactive Elements
- **Buttons:** Sharp corners or slightly skewed parallelograms to match the theme.
- **Hover Effects:** "Sky Blue" glow or slide effects that follow diagonal vectors.
- **Scroll Animations:** Parallax effects where background images move slightly slower than the foreground diagonal masks.

---

## 5. Technical Stack

| Category | Technology | Rationale |
| :--- | :--- | :--- |
| **Framework** | **Next.js 15+** | The React framework for production. Server Components for performance. |
| **UI Library** | **shadcn/ui** | Accessible, headless components (Radix UI) styled with Tailwind. |
| **Styling** | **Tailwind CSS** | Rapid styling. Essential for creating complex `clip-path` and `skew` utilities. |
| **Icons** | **Lucide Icons** | Clean, crisp, vector SVG icons. |
| **Language** | **TypeScript** | Type safety and robust code structure. |

---

## 6. Implementation Guidelines

### 6.1 Desktop vs. Mobile
- **Desktop:** Unleash the diagonals. Use `transform: skewY(-3deg)` on container backgrounds, then `transform: skewY(3deg)` on the content content so it remains straight.
- **Mobile:** Reset skews (`transform: none`). Use CSS gradients (e.g., `bg-gradient-to-br`) to mimic the diagonal feel without breaking text flow.

### 6.2 Code Structure
```tsx
// Example of a Diagonal Section Component
export default function DiagonalSection({ children, className }: Props) {
  return (
    <div className="relative overflow-hidden py-24">
      {/* Background with Diagonal Cut */}
      <div className="absolute inset-0 transform -skew-y-3 origin-top-left bg-zinc-950 z-0" />
      
      {/* Content - Counter Skewed to be straight */}
      <div className="relative z-10 container mx-auto">
        {children}
      </div>
    </div>
  )
}
```

### 6.3 Performance
- **LCP (Largest Contentful Paint):** Optimize the hero image as it will be large.
- **CLS (Cumulative Layout Shift):** Be careful with transforms; ensure layout space is reserved.

---

## 7. Development Checklist

1.  [ ] **Setup Theme:** Update `tailwind.config.ts` with "Sky Blue", "Dark Black" variables.
2.  [ ] **Create Layout Wrapper:** Build a `<DiagonalWrapper>` component for reusable section tilting.
3.  [ ] **Hero Section:** Implement the "Diagonal Split" hero with a prompt-ready placeholder image.
4.  [ ] **Image Audit:** Ensure every `<img>` component has a rich, descriptive `alt` property for future AI generation.
5.  [ ] **Responsive Check:** Verify that diagonals turn into clean stacks on screens `< 768px`.
