"use client"

import { motion, Variants } from "framer-motion"
import { X, Check, Zap, TrendingDown, AlertCircle, Smartphone, RefreshCw, BarChart } from "lucide-react"

const oldFeatures = [
  {
    icon: TrendingDown,
    title: "Slow Loading",
    desc: "Heavy pages with poor optimization"
  },
  {
    icon: Smartphone,
    title: "Poor Mobile UX",
    desc: "Desktop-first, mobile afterthought"
  },
  {
    icon: AlertCircle,
    title: "Hard to Update",
    desc: "Manual deployments and configurations"
  },
  {
    icon: BarChart,
    title: "Limited Scalability",
    desc: "Performance degrades with growth"
  },
]

const modernFeatures = [
  {
    icon: Zap,
    title: "Lightning Fast",
    desc: "Optimized for Core Web Vitals"
  },
  {
    icon: Smartphone,
    title: "Mobile-First",
    desc: "Responsive design as foundation"
  },
  {
    icon: RefreshCw,
    title: "Easy Updates",
    desc: "Automated CI/CD pipelines"
  },
  {
    icon: BarChart,
    title: "Unlimited Scalability",
    desc: "Built to grow with your business"
  },
]

export default function OldVsNewSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  }

  return (
    <section className="relative py-20 sm:py-24 lg:py-32 px-4 sm:px-6 bg-white overflow-hidden">
      {/* Subtle Grid Background */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground mb-4">
            Why{" "}
            <span className="bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] bg-clip-text text-transparent">
              Modern Matters
            </span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            The difference between legacy systems and modern web architecture
          </p>
        </motion.div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Traditional/Old Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="h-full p-6 sm:p-8 rounded-xl border-2 border-blue-200/50 bg-blue-50/30 backdrop-blur-sm">
              {/* Header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-blue-200/50">
                <div className="p-2 rounded-lg bg-blue-500/10">
                  <X className="h-5 w-5 text-blue-600" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-foreground">
                    Traditional Approach
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">Legacy systems</p>
                </div>
              </div>

              {/* Features List */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4"
              >
                {oldFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-start gap-3 group"
                  >
                    <div className="mt-0.5 p-2 rounded-lg bg-blue-100/50 group-hover:bg-blue-100 transition-colors">
                      <feature.icon className="h-4 w-4 text-blue-600" strokeWidth={2} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-foreground mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Modern/New Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="h-full p-6 sm:p-8 rounded-xl border-2 border-[#2563eb]/30 bg-gradient-to-br from-[#2563eb]/5 to-[#1d4ed8]/5 backdrop-blur-sm shadow-lg shadow-[#2563eb]/5">
              {/* Header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#2563eb]/20">
                <div className="p-2 rounded-lg bg-gradient-to-br from-[#2563eb] to-[#1d4ed8]">
                  <Check className="h-5 w-5 text-white" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] bg-clip-text text-transparent">
                    Modern Stack
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">Next-gen architecture</p>
                </div>
              </div>

              {/* Features List */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4"
              >
                {modernFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-start gap-3 group"
                  >
                    <div className="mt-0.5 p-2 rounded-lg bg-gradient-to-br from-[#2563eb]/10 to-[#1d4ed8]/10 group-hover:from-[#2563eb]/20 group-hover:to-[#1d4ed8]/20 transition-all">
                      <feature.icon className="h-4 w-4 text-[#2563eb]" strokeWidth={2} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-foreground mb-1 group-hover:text-[#2563eb] transition-colors">
                        {feature.title}
                      </h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Subtle shine effect */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#2563eb]/10 to-transparent rounded-bl-full pointer-events-none" />
            </div>
          </motion.div>
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-muted-foreground">
            Modern architecture isn&apos;t just faster—it&apos;s built for the future
          </p>
        </motion.div>
      </div>
    </section>
  )
}