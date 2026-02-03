"use client"

import { motion } from "framer-motion"
import {
  ShieldCheck,
  TrendingUp,
  Search,
  Users,
  Award,
  Zap,
  CheckCircle2
} from "lucide-react"

const reasons = [
  {
    title: "Data-Driven Decisions",
    description: "We don't guess. We rely on advanced analytics and market data to drive every optimization decision.",
    icon: TrendingUp,
  },
  {
    title: "100% White Hat SEO",
    description: "Ethical, sustainable strategies that protect your brand from penalties and ensure long-term growth.",
    icon: ShieldCheck,
  },
  {
    title: "Transparent Reporting",
    description: "Clear, jargon-free weekly reports showing exactly where your budget is going and the results achieved.",
    icon: Search,
  },
  {
    title: "Conversion Focused",
    description: "Traffic is vanity, sales are sanity. Our primary goal is driving visitors who are ready to convert.",
    icon: Users,
  },
  {
    title: "Experienced Team",
    description: "Work with seasoned SEO veterans who have navigated every major algorithm update.",
    icon: Award,
  },
  {
    title: "Fast Results",
    description: "Our agile methodologies are designed to secure quick wins while building long-term authority.",
    icon: Zap,
  },
]

export default function WhyChooseSEOSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/20 to-blue-50/10" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center mb-16"
        >
          <div className="inline-flex items-center gap-1.5 mb-6 rounded-full border border-border/50 bg-white/50 backdrop-blur-sm px-3 py-1.5 text-[13px] font-medium text-muted-foreground shadow-sm">
            <Award className="h-3.5 w-3.5 text-[#2563eb]" />
            Why Partner With Us
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-5">
            The CruxLabs{" "}
            <span className="bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] bg-clip-text text-transparent">
              Advantage
            </span>
          </h2>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            We move beyond basic optimization to deliver a search presence that dominates your competition.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group relative p-6 sm:p-8 rounded-2xl border border-blue-100 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-2xl hover:border-blue-200 transition-all duration-500"
            >
              {/* Gradient Glow on Hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500" />

              {/* Number Badge */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[#2563eb] text-sm font-bold">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-14 h-14 mb-5 rounded-xl bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] flex items-center justify-center shadow-lg shadow-blue-500/20"
              >
                <reason.icon className="w-7 h-7 text-white" />
              </motion.div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-[#2563eb] transition-colors">
                {reason.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                {reason.description}
              </p>

              {/* Checkmark indicator */}
              <div className="flex items-center gap-2 text-[#2563eb] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <CheckCircle2 className="w-4 h-4" />
                <span>Guaranteed</span>
              </div>

              {/* Corner decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#2563eb]/10 to-transparent rounded-bl-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Bottom gradient line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
