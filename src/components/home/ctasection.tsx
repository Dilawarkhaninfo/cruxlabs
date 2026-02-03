"use client"

import { useRef, useEffect } from "react"
import { motion, useSpring, useMotionValue, useTransform, useScroll } from "framer-motion"
import { MoveRight, Sparkles, MessageSquare, Terminal, Activity, Shield, Zap, Cpu } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export default function CTASection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 150 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const sectionOpacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0])
  const sectionScale = useTransform(scrollYProgress, [0, 0.1], [0.98, 1])

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
    <motion.section
      ref={containerRef}
      style={{ opacity: sectionOpacity, scale: sectionScale }}
      className="relative py-32 sm:py-44 px-6 overflow-hidden bg-white"
    >
      {/* DIAGONAL BACKGROUND ACCENT (TECHNICAL SIDEBAR) */}
      <div
        className="absolute top-0 left-0 w-1/4 h-full bg-zinc-950 -z-10 hidden lg:block"
        style={{ clipPath: "polygon(0 0, 100% 0, 75% 100%, 0 100%)" }}
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
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute right-0 top-0 w-[1px] h-40 bg-sky-500/20 blur-sm"
        />
      </div>

      {/* Global Engineering Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

      {/* Interactive Mouse Glow */}
      <motion.div
        style={{ x, y, translateX: "-50%", translateY: "-50%", left: "50%", top: "50%" }}
        className="absolute w-[1200px] h-[1200px] bg-sky-500/5 rounded-full blur-[150px] pointer-events-none"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-20 lg:gap-32">

          {/* Content Architecture: Redesigned for standard professional aesthetic */}
          <div className="flex-1 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {/* SECTION REGISTRY BADGE */}
              <div className="flex items-center gap-4 mb-10">
                <div
                  className="h-12 w-12 bg-zinc-950 border border-sky-500/30 flex items-center justify-center -skew-x-[12deg] shadow-lg shadow-sky-500/5"
                >
                  <Cpu className="h-5 w-5 text-sky-500 skew-x-[12deg]" />
                </div>
                <div className="flex flex-col">
                  <div className="h-[2.5px] w-20 bg-sky-500 mb-1" />
                  <span className="text-zinc-400 font-black italic tracking-[0.3em] text-[10px] uppercase">
                    REGISTRY://OS_INIT_v4.2
                  </span>
                </div>
              </div>

              <div className="space-y-2 mb-10">
                <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black italic tracking-tighter text-zinc-950 leading-[0.9] uppercase">
                  READY TO
                </h2>
                <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black italic tracking-tighter leading-[0.9] text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-sky-700 uppercase">
                  INITIALIZE?
                </h2>
              </div>

              <p className="text-[15px] text-zinc-500 leading-relaxed italic font-bold uppercase tracking-wide mb-12 border-l-2 border-sky-500/20 pl-8 max-w-xl">
                We don&apos;t just build interfaces; we engineer <span className="text-zinc-950 font-bold">digital ecosystems</span>. Resolve your enterprise friction with our <span className="text-sky-500 font-bold">high-frequency</span> development core.
              </p>

              {/* Technical Advantage List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12 mb-12">
                {[
                  "ZERO_DEPLOYMENT_VARIANCE",
                  "99.9%_UPTIME_PROTOCOL",
                  "REAL_TIME_LOGIC_MAPPING",
                  "NEXT_15_RUNTIME_ENGINE"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="h-1.5 w-1.5 bg-sky-500 -skew-x-[12deg]" />
                    <span className="text-[10px] font-black italic text-zinc-950 uppercase tracking-[0.3em]">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Interactive CTA Hub: Skewed Architecture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative w-full lg:w-[480px]"
          >
            {/* TECHNICAL MODULE FRAME */}
            <div className="relative p-12 bg-white border border-zinc-200 group transition-all duration-500 hover:border-sky-500/30 shadow-2xl shadow-sky-500/5 hover:shadow-sky-500/10"
              style={{ clipPath: "polygon(5% 0, 100% 0, 95% 100%, 0 100%)" }}
            >
              <div className="flex flex-col gap-8">
                <Link href="/contact" className="w-full">
                  <div className="group/btn relative w-full h-20 bg-zinc-950 text-white flex items-center justify-center gap-6 overflow-hidden transition-all duration-300 active:scale-[0.98]"
                    style={{ clipPath: "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)" }}
                  >
                    <div className="absolute inset-0 bg-sky-500/10 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700 skew-x-12" />
                    <span className="relative z-10 text-[11px] font-black italic uppercase tracking-[0.3em] flex items-center gap-4">
                      OPEN_TECHNICAL_TICKET
                      <MoveRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-2" />
                    </span>
                  </div>
                </Link>

                <Link href="/contact" className="w-full">
                  <div className="group/btn w-full h-20 bg-zinc-50 border border-zinc-200 flex items-center justify-center gap-6 hover:border-zinc-950 transition-all duration-300 active:scale-[0.98]"
                    style={{ clipPath: "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)" }}
                  >
                    <MessageSquare className="h-4 w-4 text-sky-500" />
                    <span className="text-[11px] font-black italic text-zinc-950 uppercase tracking-[0.3em]">
                      CONSULT_AN_ARCHITECT
                    </span>
                  </div>
                </Link>

                {/* Decorative Annotation */}
                <div className="flex items-center justify-between pt-8 border-t border-zinc-100">
                  <div className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[9px] font-black italic text-zinc-400 uppercase tracking-widest">PROTOCOL: ACTIVE</span>
                  </div>
                  <span className="text-[9px] font-mono font-black italic text-zinc-300 uppercase tracking-tighter">
                    LOG_//_MAX_LATENCY_24H
                  </span>
                </div>
              </div>

              {/* Module Indicator */}
              <div className="absolute top-4 right-10 h-10 w-10 bg-zinc-950 border border-sky-500/30 flex items-center justify-center -skew-x-[12deg] shadow-xl shadow-sky-500/10">
                <Terminal className="h-4 w-4 text-sky-500 skew-x-[12deg]" />
              </div>
            </div>

            {/* Engineering Marks */}
            <div className="absolute -bottom-6 -left-6 w-16 h-16 border-b-2 border-l-2 border-sky-500/20 pointer-events-none" />
            <div className="absolute -top-6 -right-6 w-16 h-16 border-t-2 border-r-2 border-sky-500/20 pointer-events-none" />
          </motion.div>
        </div>

        {/* Status Bar Footer: Terminal Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-12 bg-zinc-950 border border-white/5 relative overflow-hidden"
          style={{ clipPath: "polygon(5% 0, 100% 0, 95% 100%, 0 100%)" }}
        >
          {/* Animated Background Scan Line */}
          <motion.div
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 w-1/2 h-full bg-gradient-to-r from-transparent via-sky-500/5 to-transparent skew-x-[30deg] pointer-events-none"
          />

          <div className="relative flex flex-wrap justify-center lg:justify-between items-center gap-12">
            <div className="flex items-center gap-12">
              <div className="flex flex-col items-end">
                <div className="flex items-center gap-2 mb-1">
                  <Zap className="h-3 w-3 text-sky-500" />
                  <span className="text-[9px] font-mono text-zinc-600">RT_CORE_v4</span>
                </div>
                <div className="flex gap-1.5">
                  {[1, 2, 3, 4, 5, 6].map(i => (
                    <motion.div
                      key={i}
                      animate={{ opacity: [0.2, 1, 0.2] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                      className="h-2 w-6 bg-sky-500 -skew-x-[20deg]"
                    />
                  ))}
                </div>
              </div>

              <div className="h-16 w-[1px] bg-zinc-900 rotate-12 hidden sm:block" />

              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-1">
                  <Shield className="h-3 w-3 text-sky-500" />
                  <span className="text-[9px] font-mono text-zinc-600">CRYPT_AES_256</span>
                </div>
                <span className="text-3xl font-black italic text-white tracking-widest uppercase leading-none">SECURE_LAYER</span>
              </div>
            </div>

            <div className="flex items-center gap-8 px-10 py-4 bg-zinc-900 border border-sky-500/20 -skew-x-[12deg]">
              <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse skew-x-[12deg]" />
              <span className="text-[10px] font-black italic text-zinc-300 uppercase tracking-[0.2em] skew-x-[12deg]">
                GLOBAL_HUB_OPERATIONAL
              </span>
            </div>

            <div className="flex items-center gap-6">
              <span className="text-[9px] font-black italic text-zinc-600 uppercase tracking-widest">NODE_ID</span>
              <div className="px-8 py-3 bg-sky-500 text-zinc-950 font-black italic text-[11px] tracking-[0.3em] -skew-x-[12deg]">
                CRUX_CORE_MASTER
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Extreme Decorative Overlays */}
      <div className="absolute top-1/2 -right-10 -translate-y-1/2 text-[10px] font-mono text-zinc-200 tracking-[1em] vertical-rl uppercase rotate-180 opacity-20 italic pointer-events-none">
        INITIALIZATION_LOG_//_2026
      </div>
      <div className="absolute bottom-10 left-10 text-[9px] font-mono text-zinc-400 tracking-widest uppercase pointer-events-none italic opacity-40">
        ARCHITECTURAL_NODE_[0x2A]
      </div>

      {/* BOTTOM SCAN LINE */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 w-full h-[1px] bg-sky-500/20"
      />
    </motion.section>
  )
}
