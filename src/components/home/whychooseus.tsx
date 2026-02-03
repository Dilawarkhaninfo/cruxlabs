"use client"

import {
  Zap,
  Shield,
  Users,
  Clock,
  ArrowUpRight,
  Activity,
  Terminal,
  TrendingUp,
  Cpu,
  Layers
} from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { InteractiveImageAccordion } from "../ui/interactive-image-accordion"
import { cn } from "@/lib/utils"

const reasons = [
  {
    icon: Cpu,
    title: "VETTED_INTELLIGENCE",
    description: "Zero junior overhead. Work exclusively with senior engineers who understand business logic as deeply as they understand code.",
    id: "MOD_001_INTEL"
  },
  {
    icon: Zap,
    title: "VELOCITY_ENGINE",
    description: "Our proprietary CI/CD pipelines allow us to ship architectural foundations in days, not months. We build at the speed of thought.",
    id: "MOD_002_SPEED"
  },
  {
    icon: Shield,
    title: "FORTRESS_GRADE",
    description: "Security isn't a feature; it's the foundation. We build hardened, bank-grade systems that scale horizontally without friction.",
    id: "MOD_003_SECURE"
  },
  {
    icon: Layers,
    title: "ZERO_VARIANCE",
    description: "Weekly sprints, transparent roadmaps, and 100% adherence to deadlines. We engineer certainty into every project lifecycle.",
    id: "MOD_004_SYNC"
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
      {/* DIAGONAL BACKGROUND ACCENT (TECHNICAL SIDEBAR) */}
      <div
        className="absolute top-0 right-0 w-1/3 h-full bg-zinc-950 -z-10 hidden lg:block"
        style={{ clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0 100%)" }}
      >
        {/* Technical Grid Texture */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
            backgroundSize: "30px 30px"
          }}
        />

        {/* Vertical Scan Line */}
        <motion.div
          animate={{ y: ["-100%", "100%"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 top-0 w-[1px] h-32 bg-sky-500/30 blur-sm"
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* LEFT COLUMN: Content */}
          <div className="relative flex flex-col items-start gap-8">

            {/* SECTION REGISTRY BADGE */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              <div
                className="h-12 w-12 bg-zinc-950 border border-sky-500/30 flex items-center justify-center -skew-x-[12deg] shadow-lg shadow-sky-500/5"
              >
                <Activity className="h-5 w-5 text-sky-500 skew-x-[12deg]" />
              </div>
              <div className="flex flex-col">
                <div className="h-[2.5px] w-16 bg-sky-500 mb-1" />
                <span className="text-zinc-400 font-black italic tracking-[0.3em] text-[10px] uppercase">
                  REGISTRY://ENGINEERING_LOGIC
                </span>
              </div>
            </motion.div>

            {/* MAIN HEADING - SCALED DOWN 20% */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black italic tracking-tighter text-zinc-950 leading-[0.9] uppercase">
                ARCHITECTING
              </h2>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black italic tracking-tighter leading-[0.9] text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-sky-700 uppercase">
                DOMINANCE
              </h2>
              <div className="mt-8 pl-8 border-l-2 border-sky-500/20 max-w-lg">
                <p className="text-[15px] text-zinc-500 leading-relaxed italic font-medium uppercase tracking-wide">
                  We eliminate architectural variance. CruxLabs provides the <span className="text-zinc-900 font-bold">strategic infrastructure</span> that transforms ambitious visions into <span className="text-sky-500 font-bold">hardened market systems</span>.
                </p>
              </div>
            </motion.div>

            {/* REASONS MODULES */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="relative p-6 bg-zinc-50 border border-zinc-200 hover:border-sky-500/50 hover:bg-white transition-all duration-300 overflow-hidden">

                    {/* Skewed ID Overlay */}
                    <div className="absolute top-2 right-2 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="h-[1px] w-4 bg-sky-500/30" />
                      <span className="text-[8px] font-mono text-zinc-400">{reason.id}</span>
                    </div>

                    {/* Icon Module */}
                    <div className="relative mb-6">
                      <div className="h-10 w-10 bg-zinc-950 flex items-center justify-center -skew-x-[12deg] group-hover:bg-sky-500 transition-colors duration-300">
                        <reason.icon className="h-5 w-5 text-sky-500 group-hover:text-white transition-colors skew-x-[12deg]" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xs font-black italic text-zinc-950 mb-3 tracking-[0.1em] uppercase flex items-center justify-between">
                      {reason.title}
                      <ArrowUpRight className="h-3 w-3 text-sky-500 translate-x-1 -translate-y-1 opacity-0 group-hover:opacity-100 transition-all" />
                    </h3>
                    <p className="text-[11px] text-zinc-500 leading-relaxed italic uppercase tracking-wider font-medium">
                      {reason.description}
                    </p>

                    {/* Bottom Scanning Line */}
                    <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-sky-500 group-hover:w-full transition-all duration-500" />
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

          {/* RIGHT COLUMN: Visual Terminal */}
          <motion.div
            style={{
              opacity: useTransform(scrollYProgress, [0, 0.3], [0, 1]),
              scale: useTransform(scrollYProgress, [0, 0.3], [0.98, 1])
            }}
            className="relative"
          >
            {/* Technical Brackets */}
            <div className="absolute -top-10 -right-10 w-32 h-32 border-t-2 border-r-2 border-sky-500/20 pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 border-b-2 border-l-2 border-zinc-950/10 pointer-events-none" />

            {/* Main Visual Module */}
            <div className="relative z-10 p-4 bg-zinc-950 shadow-2xl"
              style={{ clipPath: "polygon(5% 0, 100% 0, 100% 95%, 0 100%)" }}>
              <div
                className="relative overflow-hidden border border-white/5 bg-zinc-900/50"
                style={{ clipPath: "polygon(0 0, 100% 0, 98% 100%, 2% 100%)" }}
              >
                <InteractiveImageAccordion />
              </div>

              {/* Terminal Data Feed */}
              <div className="absolute top-8 right-8 p-3 bg-zinc-950/80 backdrop-blur-md border border-sky-500/20 -skew-x-[12deg]">
                <div className="flex flex-col gap-1 skew-x-[12deg]">
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[8px] font-mono text-emerald-500 uppercase">Live_Analysis</span>
                  </div>
                  <span className="text-[10px] font-black italic text-white uppercase tracking-tighter">DATA_STREAM_v4.2</span>
                </div>
              </div>
            </div>

            {/* Floating Metric Module */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              animate={{ y: [0, -8, 0] }}
              transition={{
                y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                opacity: { duration: 0.6, delay: 0.5 }
              }}
              className="absolute -bottom-12 -right-12 z-50 hidden md:block"
            >
              <div
                className="relative p-6 bg-sky-500 text-zinc-950 shadow-2xl overflow-hidden"
                style={{ clipPath: "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)" }}
              >
                <div className="relative z-10 flex flex-col items-end gap-1">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-3 w-3" />
                    <span className="text-[9px] font-black italic uppercase tracking-[0.2em]">
                      Velocity_Delta
                    </span>
                  </div>
                  <span className="text-4xl font-black italic tracking-tighter leading-none">
                    +184%
                  </span>
                  <span className="text-[9px] font-black italic uppercase tracking-wider opacity-60">
                    Deployment_Speed
                  </span>
                </div>
                {/* Internal Scan Effect */}
                <motion.div
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-white/20 -skew-x-12 opacity-50"
                />
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>

      {/* BOTTOM SCANNER DECOR */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 w-full h-[1px] bg-sky-500/30"
      />

    </section>
  )
}