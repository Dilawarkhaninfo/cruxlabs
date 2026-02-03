import {
  CheckCircle2,
  Zap,
  Shield,
  Users,
  Clock,
} from "lucide-react"
import { InteractiveImageAccordion } from "../ui/interactive-image-accordion"

const reasons = [
  {
    icon: Users,
    title: "Senior talent on every project",
    description: "No outsourcing. Work directly with experienced engineers who understand your business goals."
  },
  {
    icon: Zap,
    title: "Fast delivery, zero compromises",
    description: "Battle-tested processes and automation help us ship production-ready systems in 3-6 weeks."
  },
  {
    icon: Shield,
    title: "Security & performance built-in",
    description: "Enterprise-grade architecture, authentication, and optimization from day one."
  },
  {
    icon: Clock,
    title: "On-time, every time",
    description: "Clear milestones, weekly updates, and realistic planning. Zero missed deadlines."
  }
]



export default function WhyChooseUsSection() {
  return (
    <section className="relative py-20 sm:py-24 lg:py-32 px-4 sm:px-6 bg-gradient-to-b from-white via-gray-50/30 to-white overflow-hidden">

      {/* Subtle animated background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" aria-hidden="true" />

      {/* Floating gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-[#2563eb]/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} aria-hidden="true" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-[#2563eb]/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl">

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Column - Content */}
          <div className="space-y-8">

            {/* Section Header */}
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-border/50 bg-white/50 backdrop-blur-sm px-3 py-1.5 text-[13px] font-medium text-muted-foreground mb-6 shadow-sm">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#2563eb]" />
                The CruxLabs Difference
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground mb-5">
                Why Choose Us
              </h2>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                We don&apos;t just build websites—we engineer growth systems. Every project is architected
                for performance, security, and scalability from day one.
              </p>
            </div>

            {/* Reasons List */}
            <div className="space-y-6">
              {reasons.map((reason) => (
                <div
                  key={reason.title}
                  className="flex items-start gap-4 group"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#2563eb]/10 text-[#2563eb] group-hover:bg-[#2563eb]/20 transition-colors">
                    <reason.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-foreground mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-[14px] text-muted-foreground leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>



          </div>

          {/* Right Column - Dashboard Visual */}
          <div className="relative">


            <InteractiveImageAccordion />
          </div>

        </div>

      </div>
    </section>
  )
}