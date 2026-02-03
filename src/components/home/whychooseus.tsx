"use client"

import {
  Zap,
  Shield,
  Users,
  Clock,
  ArrowUpRight,
  Sparkles,
  Terminal,
  TrendingUp,
} from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { InteractiveImageAccordion } from "../ui/interactive-image-accordion"

const reasons = [
  {
    icon: Users,
    title: "VETTED_INTELLIGENCE",
    description: "Zero junior overhead. Work exclusively with senior engineers who understand business logic as deeply as they understand code.",
    gradient: "from-sky-400 to-blue-500",
    color: "sky-500"
  },
  {
    icon: Zap,
    title: "VELOCITY_MODE",
    description: "Our proprietary CI/CD pipelines allow us to ship architectural foundations in days, not months. We build at the speed of thought.",
    gradient: "from-purple-400 to-pink-500",
    color: "purple-500"
  },
  {
    icon: Shield,
    title: "FORTRESS_GRADE",
    description: "Security isn't a feature; it's the foundation. We build hardened, bank-grade systems that scale horizontally without friction.",
    gradient: "from-orange-400 to-red-500",
    color: "orange-500"
  },
  {
    icon: Clock,
    title: "ZERO_VARIANCE",
    description: "Weekly sprints, transparent roadmaps, and 100% adherence to deadlines. We engineer certainty into every project lifecycle.",
    gradient: "from-emerald-400 to-teal-500",
    color: "emerald-500"
  }
]

export default function WhyChooseUsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  return (
    <section
      ref={containerRef}
      className="relative py-24 sm:py-32 px-6 bg-white overflow-hidden"
    >
      {/* DIAGONAL BACKGROUND ACCENT */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full bg-zinc-50 -z-10 hidden lg:block"
        style={{ clipPath: "polygon(25% 0, 100% 0, 100% 100%, 0 100%)" }}
      >
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
            backgroundSize: "40px 40px"
          }}
        />
      </div>

      {/* FLOATING DECORATIVE ELEMENTS */}
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 left-10 w-32 h-32 border-2 border-sky-500/20 hidden xl:block"
        style={{ clipPath: "polygon(20% 0, 100% 0, 80% 100%, 0 100%)" }}
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* LEFT COLUMN: Content */}
          <div className="relative flex flex-col items-start gap-8">

            {/* SECTION BADGE */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4"
            >
              <div
                className="h-14 w-14 bg-sky-500/10 border-2 border-sky-500/30 flex items-center justify-center"
                style={{ clipPath: "polygon(20% 0, 100% 0, 80% 100%, 0 100%)" }}
              >
                <Sparkles className="h-7 w-7 text-sky-500" />
              </div>
              <div className="flex flex-col gap-1">
                <div className="h-[2px] w-20 bg-sky-500" />
                <span className="text-sky-500 font-black italic tracking-[0.2em] text-[11px] uppercase">
                  Operational_Excellence
                </span>
              </div>
            </motion.div>

            {/* MAIN HEADING */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black italic tracking-tighter text-zinc-950 leading-[0.95] mb-4">
                ENGINEERED
              </h2>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black italic tracking-tighter leading-[0.95] text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-purple-500">
                FOR SUCCESS
              </h2>
              <div className="mt-6 pl-6 border-l-4 border-sky-500/30">
                <p className="text-lg text-zinc-600 leading-relaxed italic font-medium">
                  We eliminate the gap between <span className="font-bold text-zinc-900">strategy and execution</span>.
                  CruxLabs provides the technical infrastructure that turns ambitious ideas into <span className="font-bold text-zinc-900">dominant market positions</span>.
                </p>
              </div>
            </motion.div>

            {/* STATS BAR */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 w-full mt-2"
            >
              {[
                { label: "Projects", value: "500+", icon: Terminal },
                { label: "Clients", value: "120+", icon: Users },
                { label: "Growth", value: "184%", icon: TrendingUp }
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className="relative p-4 bg-zinc-900 text-white overflow-hidden group"
                  style={{ clipPath: "polygon(15% 0, 100% 0, 85% 100%, 0 100%)" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-sky-500/20 to-purple-500/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
                  <stat.icon className="h-4 w-4 text-sky-500 mb-1" />
                  <div className="text-2xl font-black italic">{stat.value}</div>
                  <div className="text-[10px] uppercase tracking-wider text-zinc-400 font-bold italic">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* REASONS GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mt-4">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="group relative"
                >
                  {/* Card Container */}
                  <div className="relative p-6 bg-white border-2 border-zinc-200 hover:border-zinc-900 transition-all duration-300 overflow-hidden">

                    {/* Diagonal Hover Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${reason.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                    {/* Top Diagonal Accent */}
                    <div
                      className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${reason.gradient} opacity-20`}
                      style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
                    />

                    {/* Icon */}
                    <div className="relative mb-4 inline-flex">
                      <div
                        className={`h-12 w-12 bg-${reason.color}/10 border-2 border-${reason.color}/30 flex items-center justify-center group-hover:bg-${reason.color} group-hover:border-${reason.color} transition-all duration-300`}
                        style={{ clipPath: "polygon(20% 0, 100% 0, 80% 100%, 0 100%)" }}
                      >
                        <reason.icon className={`h-6 w-6 text-${reason.color} group-hover:text-white transition-colors duration-300`} />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-sm font-black italic text-zinc-950 mb-2 flex items-center gap-2 tracking-wide">
                      {reason.title}
                      <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-1 translate-x-1" />
                    </h3>
                    <p className="text-xs text-zinc-600 leading-relaxed italic">
                      {reason.description}
                    </p>

                    {/* Bottom Diagonal Line */}
                    <div className={`absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r ${reason.gradient} group-hover:w-full transition-all duration-500`} />
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

          {/* RIGHT COLUMN: Visual */}
          <motion.div
            style={{
              opacity: useTransform(scrollYProgress, [0, 0.3], [0, 1]),
              scale: useTransform(scrollYProgress, [0, 0.3], [0.95, 1])
            }}
            className="relative"
          >
            {/* Decorative Corner Lines */}
            <div className="absolute -top-6 -right-6 w-24 h-24 border-t-2 border-r-2 border-sky-500/30 pointer-events-none hidden lg:block" />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b-2 border-l-2 border-purple-500/30 pointer-events-none hidden lg:block" />

            {/* Main Visual Container */}
            <div className="relative z-10">
              {/* Diagonal Border Wrapper */}
              <div
                className="relative overflow-hidden border-4 border-zinc-900 bg-white shadow-2xl"
                style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, 0 100%)" }}
              >
                <InteractiveImageAccordion />
              </div>
            </div>

            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              animate={{ y: [0, -10, 0] }}
              transition={{
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                opacity: { duration: 0.6, delay: 0.8 }
              }}
              className="absolute -bottom-8 -right-8 lg:-right-12 z-50 hidden md:block"
            >
              <div
                className="relative p-6 bg-zinc-900 border-2 border-sky-500/50 shadow-2xl overflow-hidden"
                style={{ clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0 100%)" }}
              >
                {/* Animated Background Glow */}
                <motion.div
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 bg-gradient-to-r from-sky-500/20 to-purple-500/20"
                />

                {/* Content */}
                <div className="relative flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-sky-500 animate-pulse" />
                    <span className="text-[10px] font-black italic text-sky-400 uppercase tracking-widest">
                      Active_Velocity
                    </span>
                  </div>
                  <span className="text-3xl font-black italic text-white tracking-tight bg-clip-text">
                    184%
                  </span>
                  <span className="text-[10px] font-bold italic text-zinc-400 uppercase tracking-wider">
                    Faster Delivery
                  </span>
                </div>

                {/* Diagonal Accent Line */}
                <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-sky-500 to-purple-500" />
              </div>
            </motion.div>

            {/* Floating Tech Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              animate={{ rotate: [0, 5, 0] }}
              transition={{
                rotate: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                opacity: { duration: 0.6, delay: 1 },
                scale: { duration: 0.6, delay: 1 }
              }}
              className="absolute -top-8 -left-8 z-50 hidden lg:block"
            >
              <div
                className="relative p-4 bg-white border-2 border-zinc-900 shadow-xl"
                style={{ clipPath: "polygon(15% 0, 100% 0, 85% 100%, 0 100%)" }}
              >
                <Terminal className="h-6 w-6 text-zinc-900" />
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>

      {/* BOTTOM DIAGONAL LINE */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-sky-500 via-purple-500 to-transparent"
      />

    </section>
  )
}