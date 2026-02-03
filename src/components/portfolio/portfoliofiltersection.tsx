const filters = [
  "All",
  "Web Development",
  "SEO",
  "Branding",
  "Digital Marketing",
  "Content Writing",
]

export default function PortfolioFilterSection() {
  return (
    <section className="py-8 px-4 sm:px-6 bg-white border-b border-border/40">
      <div className="mx-auto max-w-7xl flex flex-wrap gap-3 justify-center">
        {filters.map((filter) => (
          <button
            key={filter}
            className="rounded-full border border-border/50 bg-white/50 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-muted-foreground hover:bg-white/80 transition-all"
          >
            {filter}
          </button>
        ))}
      </div>
    </section>
  )
}
