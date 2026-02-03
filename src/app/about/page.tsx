import AboutHeroSection from "@/components/about/AboutHeroSection"
import StatsSection from "@/components/about/statssection"
import OurStorySection from "@/components/about/ourstorysection"
import ValuesSection from "@/components/about/valuessection"
import TeamSection from "@/components/about/teamsection"
import CTASection from "@/components/home/ctasection"

export default function AboutPage() {
  return (
    <main className="flex flex-col">
      
      {/* 1. About Hero */}
      <AboutHeroSection />

      {/* 2. Company Stats */}
      <StatsSection />

      {/* 3. Our Story */}
      <OurStorySection />

      {/* 4. Our Values */}
      <ValuesSection />

      {/* 5. Meet the Team */}
      <TeamSection />

      {/* 6. Final CTA */}
      <CTASection />

    </main>
  )
}
