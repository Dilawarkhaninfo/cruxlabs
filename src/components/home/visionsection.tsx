"use client"

import { Target, Lightbulb, Zap, Users, ArrowUpRight, Shield, Activity, Globe } from "lucide-react"
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion"
import { useRef, useEffect } from "react"
import { Badge } from "@/components/ui/badge"

export default function VisionSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smooth spring physics for mouse movement
  const springConfig = { damping: 30, stiffness: 200 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      mouseX.set(e.clientX - centerX)
      mouseY.set(e.clientY - centerY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <section
      ref={containerRef}
      className="relative py-24 sm:py-32 lg:py-48 px-6 overflow-hidden bg-[#020617] text-white"
    >
      {/* 1. DIAGONAL BACKGROUND PARTITION */}
      <div
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(45deg, #0f172a 25%, transparent 25%, transparent 50%, #0f172a 50%, #0f172a 75%, transparent 75%, transparent)",
          backgroundSize: "100px 100px"
        }}
      />

      <motion.div
        initial={{ x: "100%" }}
        whileInView={{ x: "0%" }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 z-0 bg-blue-600/5"
        style={{
          clipPath: "polygon(100% 0, 100% 100%, 40% 100%, 70% 0)"
        }}
      />

      {/* 2. TECHNICAL GRID & MOUSE GLOW */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <motion.div
          style={{ x, y }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px]"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Header Block - Diagonal Dynamic Style */}
        <div className="max-w-4xl mb-24 transform -skew-x-[6deg]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-12 w-12 bg-blue-500/10 border-2 border-blue-500/30 flex items-center justify-center -skew-x-[12deg]">
              <Globe className="h-6 w-6 text-blue-400 skew-x-[12deg]" />
            </div>
            <div className="flex flex-col gap-1">
              <div className="h-[2px] w-20 bg-blue-500" />
              <span className="text-blue-400 font-bold italic tracking-[0.3em] text-[10px] uppercase">
                Global_Visionary_Status
              </span>
            </div>
          </motion.div>

          <div className="space-y-0 italic font-black tracking-tighter leading-[0.85] uppercase">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-6xl sm:text-8xl lg:text-9xl text-white"
            >
              MACRO
            </motion.h2>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-6xl sm:text-8xl lg:text-9xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400"
            >
              INTELLECT
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 text-lg sm:text-xl text-zinc-400 italic max-w-2xl leading-relaxed border-l-4 border-blue-500/30 pl-8"
          >
            Engineering scalable futures through absolute technical mastery. We redefine the growth logic for the world's most ambitious enterprises.
          </motion.p>
        </div>

        {/* Dual Architecture Core */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 transition-all">

          {/* Vision Terminal */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="relative p-10 bg-zinc-900/50 backdrop-blur-3xl border-2 border-white/5 group-hover:border-blue-500/50 transition-all duration-500 -skew-x-[12deg] overflow-hidden">
              {/* Diagonal Corner Accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 pointer-events-none"
                style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }} />

              <div className="relative flex flex-col items-start gap-8 skew-x-[12deg]">
                <div className="h-16 w-16 bg-blue-500/10 border-2 border-blue-500/30 flex items-center justify-center -skew-x-[15deg] group-hover:bg-blue-500 group-hover:border-blue-500 transition-all duration-500">
                  <Target className="h-8 w-8 text-blue-400 group-hover:text-white skew-x-[15deg]" />
                </div>

                <div className="space-y-4">
                  <h3 className="text-3xl font-black italic tracking-tighter uppercase text-white">Systemic_Vision</h3>
                  <p className="text-zinc-400 italic leading-relaxed">
                    To engineer the world&apos;s most reliable growth infrastructure, enabling businesses to operate with zero-loss efficiency.
                  </p>
                </div>

                <ul className="space-y-4 w-full">
                  {[
                    "Architectural Scaling Protocol",
                    "Autonomous Operational Logic",
                    "Infinite Value Compounding"
                  ].map((item, i) => (
                    <li key={item} className="flex items-center justify-between group/item py-3 border-b border-white/5">
                      <span className="italic font-bold text-sm tracking-wide text-zinc-300 group-hover/item:text-blue-400 transition-colors">
                        {item}
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-blue-500/50 group-hover/item:text-blue-400 transition-all" />
                    </li>
                  ))}
                </ul>
              </div>

              {/* Scanning Line */}
              <motion.div
                animate={{ left: ["-100%", "200%"] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 w-20 h-full bg-blue-500/5 skew-x-[25deg] pointer-events-none"
              />
            </div>
          </motion.div>

          {/* Mission Command */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="relative p-10 bg-zinc-900/50 backdrop-blur-3xl border-2 border-white/5 group-hover:border-cyan-500/50 transition-all duration-500 -skew-x-[12deg] overflow-hidden">
              {/* Diagonal Corner Accent */}
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-cyan-500/10 pointer-events-none"
                style={{ clipPath: "polygon(0 0, 0 100%, 100% 100%)" }} />

              <div className="relative flex flex-col items-start gap-8 skew-x-[12deg]">
                <div className="h-16 w-16 bg-cyan-500/10 border-2 border-cyan-500/30 flex items-center justify-center -skew-x-[15deg] group-hover:bg-cyan-500 group-hover:border-cyan-500 transition-all duration-500">
                  <Activity className="h-8 w-8 text-cyan-400 group-hover:text-white skew-x-[15deg]" />
                </div>

                <div className="space-y-4">
                  <h3 className="text-3xl font-black italic tracking-tighter uppercase text-white">Mission_Critical</h3>
                  <p className="text-zinc-400 italic leading-relaxed">
                    To solve complex expansion bottlenecks through expert-level logic, delivering hardened digital assets for modern enterprise success.
                  </p>
                </div>

                <ul className="space-y-4 w-full">
                  {[
                    "Bank-Grade Security Matrix",
                    "Sub-ms Latency Framework",
                    "Human-Interface Synergy"
                  ].map((item, i) => (
                    <li key={item} className="flex items-center justify-between group/item py-3 border-b border-white/5">
                      <span className="italic font-bold text-sm tracking-wide text-zinc-300 group-hover/item:text-cyan-400 transition-colors">
                        {item}
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-cyan-500/50 group-hover/item:text-cyan-400 transition-all" />
                    </li>
                  ))}
                </ul>
              </div>

              {/* Status Bar */}
              <div className="absolute top-4 right-8 flex items-center gap-2 skew-x-[12deg]">
                <div className="h-2 w-2 rounded-full bg-cyan-500 animate-pulse" />
                <span className="text-[9px] font-mono text-cyan-500/60 uppercase tracking-widest">Active_Link</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Extreme Decorative Footers */}
      <div className="absolute bottom-12 left-12 hidden xl:block z-20 pointer-events-none opacity-20 transform -skew-x-[12deg]">
        <div className="flex flex-col font-mono text-[10px] tracking-widest text-white italic">
          <span>CRUX_VISION_MODULE_V4.2</span>
          <span>AUTH: MASTER_ARCHITECT</span>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

    </section>
  )
}
