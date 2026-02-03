"use client"

import { motion } from "framer-motion"
import {
  Search,
  Palette,
  Code2,
  Rocket,
  ArrowRight,
  CheckCircle2,
  Sparkles
} from "lucide-react"

const steps = [
  {
    id: "01",
    title: "Discovery",
    desc: "Understanding goals, users, and constraints through deep analysis and strategic planning.",
    icon: Search,
    details: ["Requirement analysis", "User research", "Technical audit"]
  },
  {
    id: "02",
    title: "Design",
    desc: "Crafting intuitive UX and clean interfaces that resonate with your target audience.",
    icon: Palette,
    details: ["Wireframing", "UI design", "Prototyping"]
  },
  {
    id: "03",
    title: "Development",
    desc: "Engineering scalable, maintainable systems with modern technologies and best practices.",
    icon: Code2,
    details: ["Clean code", "Testing", "Documentation"]
  },
  {
    id: "04",
    title: "Launch & Grow",
    desc: "Deployment, optimization, and continuous iteration for sustained success.",
    icon: Rocket,
    details: ["Deployment", "Monitoring", "Optimization"]
  },
]

export default function ExecutionProcessSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  }

  return (
    <section className="relative py-20 sm:py-24 lg:py-32 px-4 sm:px-6 bg-gradient-to-b from-gray-50/50 to-white overflow-hidden">
      {/* Subtle Grid Background - Same as Hero */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center mb-14 sm:mb-20"
        >
          <div className="inline-flex items-center gap-1.5 rounded-full border border-border/50 bg-white/50 backdrop-blur-sm px-3 py-1.5 text-[13px] font-medium text-muted-foreground mb-6 shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-[#2563eb]" />
            Our Process
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-tight text-foreground mb-6">
            From Idea to{" "}
            <span className="bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] bg-clip-text text-transparent">
              Reality
            </span>
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            A proven execution process that transforms concepts into high-performing digital products.
          </p>
        </motion.div>

        {/* Process Steps Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              variants={itemVariants}
              className="group relative"
            >
              {/* Connection Line (Desktop Only) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-[calc(50%+2rem)] w-[calc(100%-2rem)] h-[2px] bg-gradient-to-r from-[#2563eb]/20 to-transparent z-0">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2">
                    <ArrowRight className="h-4 w-4 text-[#2563eb]/40" />
                  </div>
                </div>
              )}

              <div className="relative h-full p-6 sm:p-8 rounded-xl border border-border/50 bg-white/80 backdrop-blur-sm hover:border-[#2563eb]/50 hover:shadow-xl transition-all duration-500 group-hover:-translate-y-2">
                {/* Step Number Badge */}
                <div className="absolute -top-4 -left-4 z-10">
                  <div className="relative w-12 h-12 rounded-lg bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] shadow-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{step.id}</span>
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
                  </div>
                </div>

                {/* Icon */}
                <div className="mb-6 mt-2">
                  <div className="inline-flex p-3 rounded-lg bg-[#2563eb]/10 group-hover:bg-[#2563eb]/15 group-hover:scale-110 transition-all duration-300">
                    <step.icon className="h-6 w-6 text-[#2563eb]" strokeWidth={2} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-3 group-hover:text-[#2563eb] transition-colors">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {step.desc}
                </p>

                {/* Details List */}
                <div className="space-y-2 pt-4 border-t border-border/50">
                  {step.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#2563eb] opacity-70 group-hover:opacity-100 transition-opacity" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>

                {/* Hover Gradient Effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#2563eb]/5 to-[#1d4ed8]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-muted-foreground mb-4">
            Ready to start your project journey?
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] text-white font-medium hover:gap-3 hover:shadow-lg hover:scale-105 transition-all cursor-pointer group">
            <span>Let&apos;s get started</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </motion.div>
      </div>

      {/* Bottom Fade - Same as Hero */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"
        aria-hidden="true"
      />
    </section>
  )
}