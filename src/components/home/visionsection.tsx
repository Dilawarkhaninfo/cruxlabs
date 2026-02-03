"use client"

import { Target, ArrowUpRight, Activity, Globe, Cpu, Zap, Shield } from "lucide-react"
import { motion, useSpring, useMotionValue } from "framer-motion"
import { useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

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
      className="relative py-24 sm:py-32 lg:py-40 px-6 overflow-hidden bg-zinc-950 text-white"
    >
      {/* 1. DIAGONAL BACKGROUND PARTITION */}
      <div
        className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(45deg, #18181b 25%, transparent 25%, transparent 50%, #18181b 50%, #18181b 75%, transparent 75%, transparent)",
          backgroundSize: "60px 60px"
        }}
      />

      <motion.div
        initial={{ x: "100%" }}
        whileInView={{ x: "0%" }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 z-0 bg-sky-500/5"
        style={{
          clipPath: "polygon(100% 0, 100% 100%, 45% 100%, 75% 0)"
        }}
      />

      {/* 2. TECHNICAL GRID & MOUSE GLOW */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div className="absolute inset-0 opacity-[0.05]"
          style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <motion.div
          style={{ x, y, translateX: "-50%", translateY: "-50%", left: "50%", top: "50%" }}
          className="absolute w-[800px] h-[800px] bg-sky-500/5 rounded-full blur-[120px]"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Header Block - Redesigned for standard professional aesthetic */}
        <div className="max-w-5xl mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-6 mb-12"
          >
            <div className="h-14 w-14 bg-zinc-900 border border-sky-500/30 flex items-center justify-center -skew-x-[12deg] shadow-xl shadow-sky-500/5">
              <Globe className="h-6 w-6 text-sky-500 skew-x-[12deg]" />
            </div>
            <div className="flex flex-col">
              <div className="h-[2.5px] w-24 bg-sky-500 mb-1" />
              <span className="text-zinc-400 font-black italic tracking-[0.4em] text-[10px] uppercase">
                STRATEGIC_INTEL_MODULE_v4
              </span>
            </div>
          </motion.div>

          <div className="space-y-1 italic font-black tracking-tighter leading-[0.85] uppercase">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-6xl sm:text-8xl lg:text-9xl text-white"
            >
              ENGINEERING
            </motion.h2>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-6xl sm:text-8xl lg:text-9xl text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-sky-600"
            >
              FUTURE_LOGIC
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-12 text-lg sm:text-xl text-zinc-400 italic max-w-3xl leading-relaxed border-l-2 border-sky-500/20 pl-10 uppercase tracking-wide"
          >
            Transforming high-level vision into architectural dominance. We engineer the world&apos;s most reliable systems with surgical precision and master-grade logic.
          </motion.p>
        </div>

        {/* Dual Architecture Core */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8">

          {/* Vision Terminal (Sky Blue) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="relative p-12 bg-zinc-900/50 border border-zinc-800 group-hover:border-sky-500/50 transition-all duration-500 overflow-hidden"
              style={{ clipPath: "polygon(0 0, 100% 5%, 95% 100%, 0 100%)" }}>

              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 -skew-y-12 translate-x-16 -translate-y-16" />

              <div className="relative flex flex-col items-start gap-10">
                <div className="h-16 w-16 bg-zinc-950 border border-sky-500/30 flex items-center justify-center -skew-x-[15deg] group-hover:bg-sky-500 transition-all duration-500">
                  <Cpu className="h-8 w-8 text-sky-500 group-hover:text-zinc-950 skew-x-[15deg]" />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-1 w-8 bg-sky-500" />
                    <h3 className="text-3xl font-black italic tracking-tighter uppercase text-white">SYSTEM_VISION</h3>
                  </div>
                  <p className="text-zinc-500 text-[15px] italic leading-relaxed font-bold uppercase tracking-wide">
                    To architect the world&apos;s most resilient growth framework, enabling zero-loss expansion through enterprise-grade technical dominance.
                  </p>
                </div>

                <ul className="space-y-2 w-full pt-4">
                  {[
                    { label: "Architectural_Scaling", id: "0x_SCAL_01" },
                    { label: "Autonomous_Logic", id: "0x_AUTO_02" },
                    { label: "Asset_Compounding", id: "0x_CMPD_03" }
                  ].map((item, i) => (
                    <li key={item.label} className="flex items-center justify-between group/item py-4 border-b border-zinc-800/50">
                      <div className="flex flex-col">
                        <span className="text-[11px] font-black italic text-zinc-400 group-hover/item:text-sky-500 transition-colors uppercase tracking-[0.2em]">
                          {item.label}
                        </span>
                        <span className="text-[8px] font-mono text-zinc-700">{item.id}</span>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-zinc-800 group-hover/item:text-sky-500 transition-all" />
                    </li>
                  ))}
                </ul>
              </div>

              {/* Functional Tags */}
              <div className="absolute bottom-6 right-10 flex flex-col items-end gap-1">
                <span className="text-[9px] font-black italic text-sky-500/40 uppercase tracking-widest group-hover:text-sky-500 transition-colors">VISION_MODULE_ALPHA</span>
              </div>
            </div>
          </motion.div>

          {/* Mission Command (Sky Blue/Zinc) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group relative"
          >
            <div className="relative p-12 bg-zinc-900 border border-zinc-800 group-hover:border-sky-500/30 transition-all duration-500 overflow-hidden shadow-2xl"
              style={{ clipPath: "polygon(5% 0, 100% 0, 100% 95%, 5% 100%)" }}>

              <div className="relative flex flex-col items-start gap-10">
                <div className="h-16 w-16 bg-zinc-950 border border-sky-500/20 flex items-center justify-center -skew-x-[15deg] group-hover:bg-sky-500 transition-all duration-500">
                  <Shield className="h-8 w-8 text-sky-500 group-hover:text-zinc-950 skew-x-[15deg]" />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-1 w-8 bg-sky-500/40" />
                    <h3 className="text-3xl font-black italic tracking-tighter uppercase text-white">MISSION_CRITICAL</h3>
                  </div>
                  <p className="text-zinc-500 text-[15px] italic leading-relaxed font-bold uppercase tracking-wide">
                    To eliminate operational friction through expert logic, delivering hardened technical assets for massive market dominance.
                  </p>
                </div>

                <ul className="space-y-2 w-full pt-4">
                  {[
                    { label: "Hardened_Matrix", id: "0x_SEC_01" },
                    { label: "Sub_MS_Framework", id: "0x_LAT_02" },
                    { label: "Synergistic_UX", id: "0x_SYN_03" }
                  ].map((item, i) => (
                    <li key={item.label} className="flex items-center justify-between group/item py-4 border-b border-zinc-800/50">
                      <div className="flex flex-col">
                        <span className="text-[11px] font-black italic text-zinc-400 group-hover/item:text-sky-500 transition-colors uppercase tracking-[0.2em]">
                          {item.label}
                        </span>
                        <span className="text-[8px] font-mono text-zinc-700">{item.id}</span>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-zinc-800 group-hover/item:text-sky-500 transition-all" />
                    </li>
                  ))}
                </ul>
              </div>

              {/* Status Indicator */}
              <div className="absolute top-8 right-12 flex items-center gap-3 p-2 bg-zinc-950/50 border border-white/5 skew-x-[-12deg]">
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse skew-x-[12deg]" />
                <span className="text-[9px] font-black italic text-white uppercase tracking-widest skew-x-[12deg]">ACTIVE_OPS</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Decorative Technical Footers */}
      <div className="absolute bottom-16 left-16 hidden xl:block z-20 pointer-events-none opacity-30">
        <div className="flex flex-col font-black text-[9px] tracking-[0.5em] text-sky-500 italic gap-2 uppercase">
          <div className="h-[2px] w-12 bg-sky-500" />
          <span>CRUX_ARCHITECT_v4.2</span>
          <span className="text-zinc-600">INTEL_AUTH: MASTER_02</span>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-sky-500/20" />

      {/* VERTICAL TRACING ID */}
      <div className="absolute top-1/2 left-6 -translate-y-1/2 text-[8px] font-mono text-zinc-800 tracking-[1.5em] vertical-rl uppercase opacity-40 italic">
        NODE_INITIALIZATION_[0X_VISION_MODULE]
      </div>
    </section>
  )
}
