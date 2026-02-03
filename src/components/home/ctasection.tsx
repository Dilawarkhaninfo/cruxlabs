"use client"

import { useRef, useEffect } from "react"
import { motion, useSpring, useMotionValue, useTransform, useScroll } from "framer-motion"
import { MoveRight, Sparkles, MessageSquare, Terminal } from "lucide-react"
import Link from "next/link"

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
      {/* 1. DIAGONAL BACKGROUND ACCENT */}
      <div
        className="absolute top-0 left-0 w-1/3 h-full bg-zinc-50 -z-10 hidden lg:block"
        style={{ clipPath: "polygon(0 0, 100% 0, 60% 100%, 0 100%)" }}
      >
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      {/* Global Engineering Grid Alignment */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

      {/* Unified Mouse Glow Signal */}
      <motion.div
        style={{ x, y, translateX: "-50%", translateY: "-50%", left: "50%", top: "50%" }}
        className="absolute w-[1200px] h-[1200px] bg-sky-500/5 rounded-full blur-[150px] pointer-events-none"
      />

      {/* Shooting Infrastructure Beams */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute h-[1px] w-[400px] bg-gradient-to-r from-transparent via-sky-500/20 to-transparent"
          style={{ top: "40%", left: "-400px" }}
          animate={{ x: ["0%", "2500%"] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute h-[2px] w-[600px] bg-gradient-to-r from-transparent via-purple-500/10 to-transparent"
          style={{ top: "60%", left: "-600px" }}
          animate={{ x: ["0%", "3000%"] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear", delay: 3 }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-20 lg:gap-32">

          {/* Content Architecture: Diagonal Dynamic Style */}
          <div className="flex-1 max-w-3xl transform -skew-x-[6deg]">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-10"
            >
              <div className="h-14 w-14 bg-sky-500/10 border-2 border-sky-500/30 flex items-center justify-center -skew-x-[12deg]">
                <Sparkles className="h-7 w-7 text-sky-500 skew-x-[12deg]" />
              </div>
              <div className="flex flex-col gap-1">
                <div className="h-[2px] w-24 bg-sky-500" />
                <span className="text-sky-500 font-black italic tracking-[0.4em] text-[10px] uppercase">
                  System_Initialization_v04
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-6xl sm:text-7xl lg:text-9xl font-black italic tracking-tighter text-zinc-950 leading-[0.85] mb-6">
                READY TO
              </h2>
              <h2 className="text-6xl sm:text-7xl lg:text-9xl font-black italic tracking-tighter leading-[0.85] text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-purple-500 mb-10">
                SCALE?
              </h2>
              <p className="text-xl md:text-2xl text-zinc-500 leading-relaxed italic font-medium mb-12 border-l-4 border-sky-500/30 pl-8 max-w-xl">
                We don&apos;t just build interfaces; we engineer digital ecosystems.
                Resolve your business friction with our high-frequency development core.
              </p>

              {/* Technical Advantage List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                {[
                  "Zero Deployment Friction",
                  "99.9% Uptime Protocol",
                  "Real-time Logic Mapping",
                  "Next.js 15 Engine"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="h-2 w-2 bg-sky-500 transform rotate-45 group-hover:scale-150 transition-transform" />
                    <span className="text-xs font-black italic text-zinc-950 uppercase tracking-[0.2em]">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Interactive CTA Hub: Skewed Architecture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative w-full lg:w-[450px]"
          >
            {/* TECHNICAL MODULE FRAME */}
            <div className="relative p-12 bg-white border-2 border-zinc-200 group transition-all duration-500 hover:border-zinc-950"
              style={{ clipPath: "polygon(0 0, 100% 8%, 92% 100%, 8% 92%)" }}
            >
              <div className="flex flex-col gap-8">
                <Link href="/contact" className="w-full">
                  <button className="group relative w-full h-20 bg-zinc-950 text-white flex items-center justify-center gap-6 overflow-hidden transition-all duration-300 active:scale-95"
                    style={{ clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0 100%)" }}
                  >
                    <span className="relative z-10 text-xs font-black italic uppercase tracking-[0.3em] flex items-center gap-4">
                      OPEN_TECHNICAL_TICKET
                      <MoveRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sky-500/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </button>
                </Link>

                <Link href="/contact" className="w-full">
                  <button className="group w-full h-20 bg-white border-2 border-zinc-100 flex items-center justify-center gap-6 hover:border-zinc-950 transition-all duration-300"
                    style={{ clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0 100%)" }}
                  >
                    <MessageSquare className="h-5 w-5 text-sky-500" />
                    <span className="text-xs font-black italic text-zinc-950 uppercase tracking-[0.3em]">
                      CONSULT_AN_ARCHITECT
                    </span>
                  </button>
                </Link>

                {/* Decorative Annotation */}
                <div className="flex items-center justify-between pt-6 border-t border-zinc-50">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-black italic text-zinc-400 uppercase tracking-widest">Protocol: Active</span>
                  </div>
                  <span className="text-[10px] font-mono font-black italic text-zinc-300 uppercase tracking-[0.4em]">
                      // 0X24H_MAX_RESPONSE
                  </span>
                </div>
              </div>

              {/* Module Indicator */}
              <div className="absolute top-4 right-10 h-10 w-10 bg-zinc-900 border border-sky-500/30 flex items-center justify-center -skew-x-[12deg]">
                <Terminal className="h-5 w-5 text-sky-500 skew-x-[12deg]" />
              </div>
            </div>

            {/* Engineering Marks */}
            <div className="absolute -bottom-4 -left-4 w-12 h-12 border-b-4 border-l-4 border-sky-500/20" />
            <div className="absolute -top-4 -right-4 w-12 h-12 border-t-4 border-r-4 border-sky-500/20" />
          </motion.div>
        </div>

        {/* Status Bar Footer: Terminal Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-32 p-10 bg-zinc-900 border-2 border-sky-500/30 relative overflow-hidden"
          style={{ clipPath: "polygon(5% 0, 100% 0, 95% 100%, 0 100%)" }}
        >
          {/* Background Scan Line */}
          <motion.div
            animate={{ left: ["-100%", "200%"] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 w-1/3 h-full bg-gradient-to-r from-transparent via-sky-500/5 to-transparent skew-x-[30deg] pointer-events-none"
          />

          <div className="relative flex flex-wrap justify-center lg:justify-between items-center gap-12">
            <div className="flex items-center gap-12">
              <div className="flex flex-col">
                <span className="text-[10px] font-black italic text-zinc-500 uppercase tracking-[0.4em]">BUILD_REACTION_CORE</span>
                <div className="flex gap-1.5 mt-3">
                  {[1, 2, 3, 4, 5, 6].map(i => (
                    <motion.div
                      key={i}
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                      className="h-2 w-8 bg-sky-500 transform -skew-x-[20deg]"
                    />
                  ))}
                </div>
              </div>
              <div className="h-12 w-[1px] bg-zinc-800 rotate-12 hidden sm:block" />
              <div className="flex flex-col">
                <span className="text-[10px] font-black italic text-zinc-500 uppercase tracking-[0.4em]">SECURITY_LAYER</span>
                <span className="text-xl font-black italic text-white mt-1 tracking-widest">AES-256_ACTIVE</span>
              </div>
            </div>

            <div className="flex items-center gap-8 px-8 py-3 bg-zinc-800/50 border border-zinc-700/50 -skew-x-[12deg]">
              <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse skew-x-[12deg]" />
              <span className="text-[11px] font-black italic text-zinc-300 uppercase tracking-widest skew-x-[12deg]">
                GLOBAL_HUB_OPERATIONAL
              </span>
            </div>

            <div className="flex items-center gap-6">
              <span className="text-[10px] font-black italic text-zinc-500 uppercase tracking-widest">NODE_ID:</span>
              <div className="px-6 py-2 bg-sky-500 text-zinc-950 font-black italic text-[11px] tracking-widest transform -skew-x-[12deg]">
                CRUXLABS_CORE_V4
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Extreme Decorative Overlays */}
      <div className="absolute top-1/2 -right-10 text-[9px] font-mono text-zinc-300 tracking-[1.5em] vertical-rl uppercase rotate-180 opacity-30 italic">
        DEPLOYMENT_PROTOCOL_ACTIVE_//_MMXXVI
      </div>
      <div className="absolute bottom-12 left-12 text-[10px] font-mono text-zinc-400 tracking-[0.4em] uppercase pointer-events-none italic opacity-40">
        ARCHITECTURAL_INITIALIZATION_NODE_[0x2A]
      </div>

      {/* BOTTOM SCAN LINE */}
      <motion.div
        animate={{ scaleX: [0, 1, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-sky-500 to-transparent z-30 opacity-50"
      />
    </motion.section>
  )
}
