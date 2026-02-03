import { Lightbulb } from "lucide-react"

export default function PhilosophySection() {
  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6 bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" aria-hidden="true" />

      <div className="relative mx-auto max-w-4xl text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 rounded-full border border-border/50 bg-white/50 px-3 py-1.5 text-[13px] font-medium backdrop-blur-sm mb-8 text-muted-foreground shadow-sm">
          <Lightbulb className="h-3.5 w-3.5 text-[#2563eb]" />
          Our Philosophy
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground mb-6">
          Identify the Crux.{" "}
          <span className="bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] bg-clip-text text-transparent">
            Simplify Complexity.
          </span>
        </h2>

        {/* Description */}
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          We don't just write code. We engineer scalable solutions that automate growth and turn operational bottlenecks into competitive advantages.
        </p>
      </div>
    </section>
  );
}
