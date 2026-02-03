import { Badge } from "@/components/ui/badge"
import { Briefcase } from "lucide-react"

export default function PortfolioHeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50/50">

      {/* Background Grid Pattern (Same system as Home / About / Contact) */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-4xl text-center">

          {/* Badge */}
          <Badge
            variant="secondary"
            className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-border/50 bg-white/50 px-3 py-1.5 text-[13px] font-medium backdrop-blur-sm text-muted-foreground shadow-sm"
          >
            <Briefcase className="h-3.5 w-3.5 text-[#2563eb]" />
            Our Portfolio
          </Badge>

          {/* Main Heading */}
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Projects That{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] bg-clip-text text-transparent">
                Drive Real Results
              </span>
              <span
                className="absolute -bottom-2 left-0 h-3 w-full bg-[#2563eb]/10 -z-10"
                aria-hidden="true"
              />
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl max-w-3xl mx-auto">
            Explore a selection of projects and case studies where we’ve helped
            businesses solve complex challenges, improve performance, and scale
            through well-engineeblue digital systems.
          </p>

          {/* Supporting Line */}
          <p className="mt-6 text-[13px] font-medium text-muted-foreground">
            Real problems • Measurable impact • Long-term value
          </p>

        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"
        aria-hidden="true"
      />
    </section>
  )
}
