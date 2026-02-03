import PortfolioHeroSection from "@/components/portfolio/portfolioherosection"
import PortfolioStatsSection from "@/components/portfolio/portfoliostatssection"
import CTASection from "@/components/home/ctasection"
import PortfolioSection from "@/components/portfolio/portfoliosection"
import ProjectShowcase from "@/components/home/projectshowcase"

export default function PortfolioPage() {
  return (
    <main className="flex flex-col">

      {/* 1. Hero */}
      <PortfolioHeroSection />

      <PortfolioSection />

      {/* 4. Stats */}
      <PortfolioStatsSection />

      {/* 6. Project Showcase */}
      <ProjectShowcase />
      {/* 5. Final CTA */}
      <CTASection />

    </main>
  )
}
