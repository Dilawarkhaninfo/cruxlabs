"use client"

import { useRef, useEffect } from "react"
import { motion, useSpring, useMotionValue, useTransform, useScroll } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, MoveRight, Sparkles, CheckCircle2, MessageSquare, Terminal } from "lucide-react"
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
      className="relative py-32 sm:py-44 px-6 overflow-hidden bg-white border-t border-slate-200"
    >
      {/* 1. Global Engineering Grid Alignment */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

      {/* 2. Unified Mouse Glow Signal */}
      <motion.div
        style={{ x, y, translateX: "-50%", translateY: "-50%", left: "50%", top: "50%" }}
        className="absolute w-[1200px] h-[1200px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none"
      />

      {/* 3. Shooting Infrastructure Beams */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute h-[1px] w-[300px] bg-gradient-to-r from-transparent via-[#2563eb]/20 to-transparent"
          style={{ top: "30%", left: "-300px" }}
          animate={{ x: ["0%", "2500%"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute h-[1px] w-[500px] bg-gradient-to-r from-transparent via-[#2563eb]/10 to-transparent"
          style={{ top: "70%", left: "-500px" }}
          animate={{ x: ["0%", "3000%"] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: 2 }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">

          {/* Content Architecture: Left Aligned for Consistency */}
          <div className="flex-1 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-8 rounded-full border-blue-200 bg-blue-50/50 px-5 py-2 text-[11px] font-bold uppercase tracking-[0.3em] text-[#2563eb] shadow-sm">
                System Initialization
              </Badge>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter text-[#0f172a] leading-[1] mb-10">
                Ready to scale <br />
                <span className="text-[#2563eb]">Your Architecture?</span>
              </h2>
              <p className="text-xl text-[#64748b] leading-relaxed font-semibold mb-12">
                We don&apos;t just build interfaces; we engineer digital ecosystems.
                Resolve your business friction with our high-frequency development core.
              </p>

              {/* Technical Advantage List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                {[
                  "Zero Deployment Friction",
                  "99.9% Uptime Guarantee",
                  "Real-time Logic Mapping",
                  "Next.js 15 Integration"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="h-5 w-5 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100">
                      <CheckCircle2 className="h-3 w-3 text-blue-600" />
                    </div>
                    <span className="text-[11px] font-mono font-black text-[#0f172a] uppercase tracking-widest">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Interactive CTA Hub */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full lg:w-auto"
          >
            {/* Technical Frame around buttons */}
            <div className="p-10 md:p-14 bg-white border border-slate-200 rounded-[3rem] shadow-2xl shadow-blue-500/10 flex flex-col gap-6 relative">
              <Link href="/contact" className="w-full">
                <button className="group relative w-full flex items-center justify-center gap-4 px-10 py-6 bg-[#0f172a] rounded-2xl text-white text-base font-black uppercase tracking-widest hover:bg-blue-600 transition-all duration-500 shadow-xl shadow-blue-900/10 overflow-hidden active:scale-95">
                  <span className="relative z-10 flex items-center gap-4">
                    Open Technical Ticket
                    <MoveRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </button>
              </Link>

              <Link href="/contact" className="w-full">
                <button className="group w-full flex items-center justify-center gap-4 px-10 py-6 bg-white border-2 border-slate-100 rounded-2xl text-[#0f172a] text-base font-black uppercase tracking-widest hover:border-blue-500 hover:text-blue-600 transition-all duration-500">
                  <MessageSquare className="h-5 w-5 text-blue-500" />
                  Consult an Architect
                </button>
              </Link>

              <div className="absolute -top-4 -right-4 h-12 w-12 flex items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-100 shadow-lg">
                <Terminal className="h-5 w-5" />
              </div>

              {/* Decorative Annotation */}
              <div className="mt-4 text-center">
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-[0.4em]">
                                    // Respond protocol: 0x24h_MAX
                </span>
              </div>
            </div>

            {/* Engineering Marks */}
            <div className="absolute -bottom-6 -left-6 h-24 w-24 border-b-2 border-l-2 border-slate-100 rounded-bl-3xl pointer-events-none" />
            <div className="absolute -top-6 -right-6 h-24 w-24 border-t-2 border-r-2 border-slate-100 rounded-tr-3xl pointer-events-none" />
          </motion.div>
        </div>

        {/* Status Bar Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32 py-10 border-y border-dashed border-slate-200 flex flex-wrap justify-center lg:justify-between items-center gap-10"
        >
          <div className="flex items-center gap-8">
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Build Status</span>
              <div className="flex gap-1 mt-2">
                {[1, 2, 3, 4, 5, 6].map(i => <div key={i} className="h-1.5 w-6 bg-blue-600 rounded-full" />)}
              </div>
            </div>
            <div className="h-10 w-[1px] bg-slate-200" />
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Security Layer</span>
              <span className="text-sm font-black text-[#0f172a] mt-1">AES-256_ACTIVE</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[11px] font-mono font-black text-slate-400 uppercase tracking-widest">Global Hub Operational</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Current Node:</span>
            <span className="px-4 py-1.5 bg-slate-50 border border-slate-100 rounded-lg text-[10px] font-mono font-bold text-[#0f172a]">
              CruxLabs_Core_V4
            </span>
          </div>
        </motion.div>
      </div>

      {/* Support Metadata Overlay */}
      <div className="absolute top-1/2 -right-8 translate-y-[-50%] text-[9px] font-mono text-slate-300 tracking-[1.5em] vertical-rl uppercase rotate-180 pointer-events-none opacity-40">
        Deployment_Protocol_Active // MMXXVI
      </div>
    </motion.section>
  )
}
