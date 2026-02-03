import { Badge } from "@/components/ui/badge"
import { Building2 } from "lucide-react"

export default function AboutHeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50/50">

      {/* Subtle Grid Background */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-4xl text-center">

          {/* Badge */}
          <Badge
            variant="secondary"
            className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-border/50 bg-white/50 px-3 py-1.5 text-[13px] font-medium backdrop-blur-sm"
          >
            <Building2 className="h-3.5 w-3.5 text-[#2563eb]" />
            About cruxlabs Digital
          </Badge>

          {/* Heading */}
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            We Build Digital Systems
            <br className="hidden sm:block" />
            That Help Businesses{" "}
            <span className="bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] bg-clip-text text-transparent">
              Grow & Scale
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl max-w-3xl mx-auto">
            cruxlabs Digital is a full-service digital agency passionate about helping
            businesses thrive in the digital age. From web development and SEO to
            marketing and branding, we deliver solutions designed to drive real results.
          </p>

        </div>
      </div>

      {/* Bottom Fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"
        aria-hidden="true"
      />
    </section>
  )
}
