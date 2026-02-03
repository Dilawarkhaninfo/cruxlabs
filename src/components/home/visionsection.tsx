"use client"

import { Target, ArrowUpRight, Activity, Globe } from "lucide-react"
import { motion, useSpring, useMotionValue } from "framer-motion"
import { useRef, useEffect } from "react"

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
      className="relative py-24 sm:py-32 lg:py-48 px-6 overflow-hidden bg-zinc-950 text-white"
    >
      {/* 1. DIAGONAL BACKGROUND PARTITION */}
      <div
        className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(45deg, #18181b 25%, transparent 25%, transparent 50%, #18181b 50%, #18181b 75%, transparent 75%, transparent)",
          backgroundSize: "80px 80px"
        }}
      />

      <motion.div
        initial={{ x: "100%" }}
        whileInView={{ x: "0%" }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 z-0 bg-sky-500/5"
        style={{
          clipPath: "polygon(100% 0, 100% 100%, 40% 100%, 70% 0)"
        }}
      />

      {/* 2. TECHNICAL GRID & MOUSE GLOW */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <motion.div
          style={{ x, y, translateX: "-50%", translateY: "-50%", left: "50%", top: "50%" }}
          className="absolute w-[1000px] h-[1000px] bg-sky-500/10 rounded-full blur-[140px]"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Header Block - Diagonal Dynamic Style */}
        <div className="max-w-5xl mb-32 transform -skew-x-[6deg]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-6 mb-12"
          >
            <div className="h-16 w-16 bg-sky-500/10 border-2 border-sky-500/30 flex items-center justify-center -skew-x-[12deg]">
              <Globe className="h-8 w-8 text-sky-400 skew-x-[12deg] animate-spin-slow" />
            </div>
            <div className="flex flex-col gap-2">
              <div className="h-[2px] w-28 bg-sky-500" />
              <span className="text-sky-400 font-black italic tracking-[0.5em] text-[10px] uppercase">
                Global_Visionary_Status_v.04
              </span>
            </div>
          </motion.div>

          <div className="space-y-2 italic font-black tracking-tighter leading-[0.8] uppercase">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-7xl sm:text-9xl lg:text-[11rem] text-white"
            >
              MACRO
            </motion.h2>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-7xl sm:text-9xl lg:text-[11rem] text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-500 to-purple-600"
            >
              INTELLECT
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 text-xl sm:text-2xl text-zinc-400 italic max-w-3xl leading-relaxed border-l-4 border-sky-500/30 pl-10"
          >
            Engineering scalable futures through absolute technical mastery. We redefine the growth logic for the world's most ambitious enterprises.
          </motion.p>
        </div>

        {/* Dual Architecture Core */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          {/* Vision Terminal */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative"
          >
            <div className="relative p-12 bg-zinc-900/40 border-2 border-zinc-800 group-hover:border-sky-500 transition-all duration-500"
              style={{ clipPath: "polygon(0 0, 100% 5%, 100% 100%, 0 95%)" }}>

              <div className="relative flex flex-col items-start gap-10">
                <div className="h-20 w-20 bg-sky-500/10 border-2 border-sky-500/30 flex items-center justify-center -skew-x-[15deg] group-hover:bg-sky-500 group-hover:border-sky-500 transition-all duration-500">
                  <Target className="h-10 w-10 text-sky-400 group-hover:text-zinc-950 skew-x-[15deg]" />
                </div>

                <div className="space-y-6">
                  <h3 className="text-4xl font-black italic tracking-tighter uppercase text-white">Systemic_Vision</h3>
                  <p className="text-zinc-400 text-lg italic leading-relaxed font-medium">
                    To engineer the world&apos;s most reliable growth infrastructure, enabling businesses to operate with zero-loss efficiency through master-class code.
                  </p>
                </div>

                <ul className="space-y-4 w-full pt-6">
                  {[
                    "Architectural Scaling Protocol",
                    "Autonomous Operational Logic",
                    "Infinite Value Compounding"
                  ].map((item, i) => (
                    <li key={item} className="flex items-center justify-between group/item py-4 border-b border-zinc-800">
                      <span className="italic font-black text-xs tracking-[0.2em] text-zinc-500 group-hover/item:text-sky-400 transition-colors uppercase">
                        {item}
                      </span>
                      <ArrowUpRight className="h-5 w-5 text-zinc-700 group-hover/item:text-sky-400 transition-all" />
                    </li>
                  ))}
                </ul>
              </div>

              {/* Registry Tags */}
              <div className="absolute top-6 right-10 flex flex-col items-end gap-1 opacity-20 group-hover:opacity-100 transition-opacity">
                <span className="text-[9px] font-black italic text-sky-500 uppercase tracking-widest">REG_ID: 0xVISION</span>
                <div className="h-1 w-12 bg-sky-500" />
              </div>
            </div>
          </motion.div>

          {/* Mission Command */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative"
          >
            <div className="relative p-12 bg-zinc-900/40 border-2 border-zinc-800 group-hover:border-purple-500 transition-all duration-500"
              style={{ clipPath: "polygon(0 5%, 100% 0, 100% 95%, 0 100%)" }}>

              <div className="relative flex flex-col items-start gap-10">
                <div className="h-20 w-20 bg-purple-500/10 border-2 border-purple-500/30 flex items-center justify-center -skew-x-[15deg] group-hover:bg-purple-500 group-hover:border-purple-500 transition-all duration-500">
                  <Activity className="h-10 w-10 text-purple-400 group-hover:text-zinc-950 skew-x-[15deg]" />
                </div>

                <div className="space-y-6">
                  <h3 className="text-4xl font-black italic tracking-tighter uppercase text-white">Mission_Critical</h3>
                  <p className="text-zinc-400 text-lg italic leading-relaxed font-medium">
                    To solve complex expansion bottlenecks through expert-level logic, delivering hardened digital assets for modern enterprise dominance.
                  </p>
                </div>

                <ul className="space-y-4 w-full pt-6">
                  {[
                    "Bank-Grade Security Matrix",
                    "Sub-ms Latency Framework",
                    "Human-Interface Synergy"
                  ].map((item, i) => (
                    <li key={item} className="flex items-center justify-between group/item py-4 border-b border-zinc-800">
                      <span className="italic font-black text-xs tracking-[0.2em] text-zinc-500 group-hover/item:text-purple-400 transition-colors uppercase">
                        {item}
                      </span>
                      <ArrowUpRight className="h-5 w-5 text-zinc-700 group-hover/item:text-purple-400 transition-all" />
                    </li>
                  ))}
                </ul>
              </div>

              {/* Status Bar */}
              <div className="absolute top-8 right-12 flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-black italic text-emerald-500/60 uppercase tracking-widest">ACTIVE_LINK</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Extreme Decorative Footers */}
      <div className="absolute bottom-16 left-16 hidden xl:block z-20 pointer-events-none opacity-20">
        <div className="flex flex-col font-black text-[10px] tracking-[0.4em] text-white italic gap-2 uppercase">
          <div className="h-[1px] w-24 bg-white" />
          <span>CRUX_VISION_MODULE_V4.2</span>
          <span>AUTH: MASTER_ARCHITECT_II</span>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-sky-500/20 to-transparent" />

      {/* VERTICAL TRACING */}
      <div className="absolute top-1/2 left-6 -translate-y-1/2 text-[9px] font-mono text-zinc-800 tracking-[1.5em] vertical-rl uppercase opacity-40 italic">
        ARCHITECTURAL_INITIALIZATION_NODE_[0x2A]
      </div>
    </section>
  )
}
