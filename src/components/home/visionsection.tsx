import { Target, Lightbulb, Zap, Users, } from "lucide-react"

export default function VisionSection() {
  return (
    <section className="relative py-20 sm:py-24 lg:py-32 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-[#020617] via-[#020617] to-[#020617] text-white">

      {/* Subtle Grid Pattern */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30"
        aria-hidden="true"
      />

      {/* Glow Orbs */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#2563eb]/20 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2" />

      <div className="relative mx-auto max-w-7xl">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur px-3 py-1.5 text-[13px] font-medium text-white/80 mb-6">
            <Lightbulb className="h-3.5 w-3.5 text-[#60a5fa]" />
            Our Philosophy
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-5">
            Vision & <span className="text-[#60a5fa]">Mission</span>
          </h2>

          <p className="text-base sm:text-lg text-white/70 leading-relaxed">
            We design digital ecosystems that operate as revenue-generating machines —
            not surface-level websites.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

          {/* Vision */}
          <div className="relative group">
            <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 sm:p-10 transition-all hover:border-[#2563eb]/40 hover:shadow-[0_0_40px_#2563eb33]">

              <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#2563eb]/20 text-[#60a5fa] mb-6">
                <Target className="h-7 w-7" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
                Our Vision
              </h3>

              <p className="text-[15px] leading-relaxed text-white/70 mb-8">
                To become the trusted growth partner for businesses worldwide by engineering
                systems that eliminate operational chaos and unlock scalable revenue.
              </p>

              <div className="space-y-4">
                {[
                  "Build systems that compound value over time",
                  "Transform complexity into clarity and control",
                  "Engineer growth through automation and intelligence",
                ].map((text) => (
                  <div key={text} className="flex items-start gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-md bg-[#2563eb]/20 mt-0.5">
                      <Zap className="h-3.5 w-3.5 text-[#60a5fa]" />
                    </div>
                    <p className="text-[14px] text-white/85">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mission */}
          <div className="relative group">
            <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 sm:p-10 transition-all hover:border-blue-500/40 hover:shadow-[0_0_40px_#3b82f633]">

              <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-blue-500/20 text-blue-400 mb-6">
                <Users className="h-7 w-7" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
                Our Mission
              </h3>

              <p className="text-[15px] leading-relaxed text-white/70 mb-8">
                To solve the hardest operational and growth challenges businesses face by
                delivering engineeblue digital systems that work as strategic business assets.
              </p>

              <div className="space-y-4">
                {[
                  "Identify and eliminate critical business bottlenecks",
                  "Automate operations with zero-loss precision",
                  "Build scalable systems that drive measurable ROI",
                ].map((text) => (
                  <div key={text} className="flex items-start gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-500/20 mt-0.5">
                      <Zap className="h-3.5 w-3.5 text-blue-400" />
                    </div>
                    <p className="text-[14px] text-white/85">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>



      </div>
    </section>
  )
}
