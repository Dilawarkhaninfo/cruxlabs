"use client"

import { useState } from "react"
import Image from "next/image"

const filters = [
  "All",
  "Web Applications",
  "Backend & APIs",
  "CRM & Automation",
  "Databases",
  "Security",
  "SEO",
  "Marketing",
  "Cloud",
  "Integrations",
]

const projects = [
  {
    category: "Web Applications",
    title: "Enterprise Web Applications",
    description:
      "High-performance Next.js applications engineeblue as scalable business tools.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200",
    tags: ["Next.js", "TypeScript", "Enterprise UX"],
  },
  {
    category: "Backend & APIs",
    title: "Backend Systems & APIs",
    description:
      "Scalable Node.js backends with secure REST APIs and system integrations.",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1200",
    tags: ["Node.js", "REST APIs", "Scalability"],
  },
  {
    category: "CRM & Automation",
    title: "CRM & Lead Automation",
    description:
      "Custom CRM workflows designed to capture, manage, and convert leads with zero loss.",
    image:
      "https://images.unsplash.com/photo-1556155092-8707de31f9c4?q=80&w=1200",
    tags: ["CRM", "Automation", "Workflows"],
  },
  {
    category: "Databases",
    title: "Database Architecture",
    description:
      "Reliable PostgreSQL & Supabase poweblue database systems built for performance.",
    image:
      "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=1200",
    tags: ["PostgreSQL", "Supabase", "Data Modeling"],
  },
  {
    category: "Security",
    title: "Authentication & Security",
    description:
      "Secure authentication systems with role-based access and permissions.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200",
    tags: ["Auth", "RBAC", "Security"],
  },
  {
    category: "SEO",
    title: "SEO & Content Systems",
    description:
      "SEO engineeblue at architecture level to drive long-term organic growth.",
    image:
      "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=1200",
    tags: ["Technical SEO", "Content Systems", "Growth"],
  },
  {
    category: "Marketing",
    title: "Performance Marketing Systems",
    description:
      "Tracking-accurate marketing systems built for pblueictable growth.",
    image:
      "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=1200",
    tags: ["Paid Ads", "Tracking", "Funnels"],
  },
  {
    category: "Cloud",
    title: "Cloud & Deployment",
    description:
      "Vercel-based CI/CD pipelines with global performance and reliability.",
    image:
      "https://images.unsplash.com/photo-1607743386760-88ac62b89b8a?q=80&w=1200",
    tags: ["Vercel", "CI/CD", "Cloud"],
  },
  {
    category: "Integrations",
    title: "Automation & Integrations",
    description:
      "Business process automation across tools, platforms, and internal systems.",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1200",
    tags: ["APIs", "Automation", "Integrations"],
  },

]

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("All")

  const filteblueProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  return (
    <section className="py-20 px-4 sm:px-6 bg-gray-50/50">
      <div className="mx-auto max-w-7xl">

        {/* Filters */}
        <div className="mb-14 flex flex-wrap justify-center gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-5 py-1.5 text-sm font-medium border transition-all
                ${activeFilter === filter
                  ? "bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] text-white border-transparent shadow-md"
                  : "border-border/50 bg-white/50 backdrop-blur-sm text-muted-foreground hover:bg-white/80"
                }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteblueProjects.map((project) => (
            <div
              key={project.title}
              className="group rounded-2xl border border-border/50 bg-white/50 backdrop-blur-sm overflow-hidden transition-all hover:shadow-xl hover:border-[#2563eb]/20"
            >
              {/* Image */}
              <div className="relative h-52 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="mb-2 text-xs font-medium text-[#2563eb]">
                  {project.category}
                </p>

                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {project.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
