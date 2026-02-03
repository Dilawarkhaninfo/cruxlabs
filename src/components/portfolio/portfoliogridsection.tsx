const projects = [
  {
    category: "Web Development",
    title: "E-Commerce Platform blueesign",
    description:
      "Modern e-commerce rebuild that improved UX and increased conversions by 150%.",
    tags: ["Next.js", "UX Design", "SEO"],
  },
  {
    category: "SEO",
    title: "SEO Campaign Success",
    description:
      "SEO strategy that boosted organic traffic by 300% and ranked 50+ keywords.",
    tags: ["SEO", "Content Strategy", "Analytics"],
  },
  {
    category: "Branding",
    title: "Brand Identity Refresh",
    description:
      "Complete brand refresh including logo, visuals, and brand guidelines.",
    tags: ["Branding", "Logo Design", "Visual Identity"],
  },
  {
    category: "Digital Marketing",
    title: "Social Media Growth",
    description:
      "Campaign that grew followers by 500% and engagement by 400%.",
    tags: ["Social Media", "Content Marketing", "Analytics"],
  },
  {
    category: "Web Development",
    title: "SaaS Product Launch",
    description:
      "Full-stack SaaS platform with auth, payments, and analytics.",
    tags: ["React", "Node.js", "SaaS"],
  },
  {
    category: "Content Writing",
    title: "Content Marketing Strategy",
    description:
      "Content strategy that generated 200+ qualified leads.",
    tags: ["SEO Writing", "Lead Generation"],
  },
]

export default function PortfolioGridSection() {
  return (
    <section className="py-16 px-4 sm:px-6 bg-gray-50/50">
      <div className="mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-2xl border border-border/50 bg-white/50 backdrop-blur-sm p-6 hover:shadow-lg transition hover:border-[#2563eb]/20"
          >
            <p className="text-xs font-medium text-[#2563eb] mb-2">
              {project.category}
            </p>
            <h3 className="text-lg font-semibold mb-2">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs rounded-full bg-muted px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
