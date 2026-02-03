"use client"

import { useRef, useEffect } from "react"
import { motion, useSpring, useMotionValue, useTransform, useScroll } from "framer-motion"
import { Quote, Star, ArrowUpRight, CheckCircle2, MoveRight, Activity, Terminal, Shield, User, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    name: "SARAH_MITCHELL",
    role: "CHIEF_EXECUTIVE",
    company: "TECHFLOW_SYSTEMS",
    content: "CRUX_V4 ARCHITECTURE TRANSFORMED OUR ENTIRE LEAD MANAGEMENT PROTOCOL. WE ACHIEVED ZERO PACKET LOSS IN OUR SALES FUNNEL WITH THEIR AUTOMATED INFRASTRUCTURE.",
    tag: "VERIFIED_DEPLOYMENT",
    id: "AUTH_001_CEO",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  },
  {
    name: "MICHAEL_CHEN",
    role: "TECHNICAL_FOUNDER",
    company: "GROWTHPATH",
    content: "THEIR NEXT.JS 15 IMPLEMENTATION REPLACED OUR LEGACY STACK AND REDUCED OPERATIONAL OVERHEAD BY 60%. PERFORMANCE METRICS EXCEEDED ALL BENCHMARKS.",
    tag: "CORE_MIGRATION",
    id: "AUTH_002_FOUNDER",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
  },
  {
    name: "EMILY_RODRIGUEZ",
    role: "CTO",
    company: "DATASYNC_GLOBAL",
    content: "THE MOST PRECISE ENGINEERING PARTNER WE'VE INTEGRATED WITH. THEIR DASHBOARD HANDLES 10M+ CONCURRENT EVENTS WITH SUB-200MS LATENCY REGULARLY.",
    tag: "NODAL_SCALING",
    id: "AUTH_003_CTO",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
  },
  {
    name: "DAVID_THOMPSON",
    role: "VP_ENGINEERING",
    company: "CLOUDSCALE",
    content: "CRUXLABS DELIVERED A HARDENED AUTHENTICATION FRAMEWORK WITH ZERO PRODUCTION FRICTION. DOCUMENTATION AND CODE QUALITY ARE ABSOLUTELY TOP-TIER.",
    tag: "SECURITY_HARDENING",
    id: "AUTH_004_VPE",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
  },
  {
    name: "JESSICA_PARK",
    role: "DIR_OPERATIONS",
    company: "AUTOFLOW",
    content: "THE CUSTOM AUTOMATION ENGINE ELIMINATED 15 HOURS OF MANUAL LATENCY PER WEEK. THEIR INTEGRATION LOGIC WITH OUR EXISTING TECH STACK IS FLAWLESS.",
    tag: "WORKFLOW_LOGIC",
    id: "AUTH_005_OPS",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
  },
  {
    name: "ROBERT_KUMAR",
    role: "SYSTEMS_ARCHITECT",
    company: "MARKETPULSE",
    content: "TECHNICAL SEO IMPLEMENTATION THAT ACTUALLY WORKS. WE SAW A 150% AUTHORITY INCREASE WITHIN 90 DAYS. THEY UNDERSTAND STRUCTURAL GROWTH.",
    tag: "AUTHORITY_GROWTH",
    id: "AUTH_006_ARCH",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  }
]

export default function TestimonialsSection() {
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
      id="testimonials"
      className="relative py-28 sm:py-36 px-6 overflow-hidden bg-white"
    >
      {/* DIAGONAL BACKGROUND ACCENT (TECHNICAL SIDEBAR) */}
      <div
        className="absolute top-0 right-0 w-1/4 h-full bg-zinc-950 -z-10 hidden lg:block"
        style={{ clipPath: "polygon(25% 0, 100% 0, 100% 100%, 0 100%)" }}
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
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 top-0 w-[1px] h-40 bg-sky-500/20 blur-sm"
        />
      </div>

      {/* Global Engineering Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

      {/* Interactive Mouse Glow */}
      <motion.div
        style={{ x, y, translateX: "-50%", translateY: "-50%", left: "50%", top: "50%" }}
        className="absolute w-[1000px] h-[1000px] bg-sky-500/5 rounded-full blur-[150px] pointer-events-none"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header Block: Redesigned for standard professional aesthetic */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-28">
          <div className="max-w-2xl">
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
                  <Activity className="h-5 w-5 text-sky-500 skew-x-[12deg]" />
                </div>
                <div className="flex flex-col">
                  <div className="h-[2.5px] w-20 bg-sky-500 mb-1" />
                  <span className="text-zinc-400 font-black italic tracking-[0.3em] text-[10px] uppercase">
                    REGISTRY://SUCCESS_VALIDATION
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black italic tracking-tighter text-zinc-950 leading-[0.9] uppercase">
                  VALIDATED
                </h2>
                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black italic tracking-tighter leading-[0.9] text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-sky-700 uppercase">
                  OUTCOMES
                </h2>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-start lg:items-end gap-6"
          >
            <p className="text-[15px] text-zinc-500 italic font-medium max-w-sm lg:text-right border-r-2 border-sky-500/20 pr-8 uppercase tracking-wide">
              We measure system success through <span className="text-zinc-950 font-bold">radical performance increases</span> and absolute technical stability.
            </p>
            <div className="flex items-center gap-4 px-8 py-4 bg-zinc-950 border border-sky-500/30 text-white font-black italic uppercase tracking-widest text-[11px] shadow-2xl shadow-sky-500/5"
              style={{ clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0 100%)" }}
            >
              <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              REGISTRY_IDENTIFIED_[100%_ACK]
            </div>
          </motion.div>
        </div>

        {/* Testimonials Matrix: Engineering Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col h-full bg-white border border-zinc-200 hover:border-sky-500/50 transition-all duration-300 shadow-sm hover:shadow-xl"
              style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, 0 100%)" }}
            >
              <div className="relative p-10 pt-12 flex flex-col h-full">
                {/* Technical Header */}
                <div className="flex justify-between items-start mb-10">
                  <div className="px-4 py-2 bg-zinc-950 border border-sky-500/30 flex items-center justify-center -skew-x-[12deg]">
                    <span className="text-[9px] font-black italic text-sky-500 uppercase tracking-widest skew-x-[12deg]">
                      {t.tag}
                    </span>
                  </div>
                  <div className="flex flex-col items-end opacity-20 group-hover:opacity-100 transition-opacity">
                    <span className="text-[8px] font-mono text-zinc-400">{t.id}</span>
                  </div>
                </div>

                {/* Content */}
                <p className="text-[15px] md:text-base text-zinc-950 font-bold leading-relaxed mb-12 flex-grow italic tracking-tight uppercase border-l-2 border-sky-500/10 pl-6">
                  &ldquo;{t.content}&rdquo;
                </p>

                {/* Author Section */}
                <div className="pt-8 border-t border-zinc-100 flex items-center gap-5">
                  <div className="relative h-14 w-14 overflow-hidden bg-zinc-900 border border-zinc-200 group-hover:border-sky-500 transition-colors -skew-x-[12deg]"
                  >
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-opacity duration-700 opacity-60 group-hover:opacity-100 skew-x-[12deg] scale-[1.2]"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-lg font-black italic text-zinc-950 tracking-tighter leading-none uppercase">{t.name}</h4>
                    <span className="text-[10px] font-black italic text-zinc-400 uppercase tracking-widest mt-2 block">
                      {t.role} <span className="text-sky-500">//</span> <span className="text-zinc-900">{t.company}</span>
                    </span>
                  </div>
                </div>

                {/* Hover Scanning Line */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-sky-500 group-hover:w-full transition-all duration-500" />
              </div>

              {/* Functional Decorative Marker */}
              <div className="absolute top-4 right-6 text-zinc-100 group-hover:text-sky-500/10 transition-colors pointer-events-none">
                <Quote className="h-10 w-10 rotate-180" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Verification Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-32 p-12 bg-zinc-950 border border-white/5 relative overflow-hidden"
          style={{ clipPath: "polygon(5% 0, 100% 0, 95% 100%, 0 100%)" }}
        >
          {/* Animated Background Scan Line */}
          <motion.div
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 w-1/2 h-full bg-gradient-to-r from-transparent via-sky-500/5 to-transparent skew-x-[30deg] pointer-events-none"
          />

          <div className="relative flex flex-wrap justify-between gap-12 items-center">
            <div className="flex items-center gap-12">
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <Shield className="h-4 w-4 text-sky-500" />
                  <span className="text-[10px] font-black italic text-sky-500 uppercase tracking-[0.5em]">TRUST_REGISTRY_STATUS</span>
                </div>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map(i => (
                    <Star key={i} className="h-5 w-5 fill-sky-500 text-sky-500 drop-shadow-[0_0_8px_rgba(14,165,233,0.3)]" />
                  ))}
                </div>
              </div>

              <div className="h-16 w-[1px] bg-zinc-900 rotate-12 hidden md:block" />

              <div className="flex gap-16">
                <div className="flex flex-col">
                  <div className="flex items-center gap-2 mb-1">
                    <Activity className="h-3 w-3 text-zinc-600" />
                    <span className="text-[9px] font-mono text-zinc-600">SYS_FINAL</span>
                  </div>
                  <span className="text-4xl font-black italic text-white tracking-tighter uppercase leading-none">50+</span>
                  <span className="text-[10px] font-black italic text-zinc-500 uppercase tracking-widest mt-2">Systems Active</span>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2 mb-1">
                    <Zap className="h-3 w-3 text-sky-500" />
                    <span className="text-[9px] font-mono text-zinc-600">RT_DELTA</span>
                  </div>
                  <span className="text-4xl font-black italic text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-sky-700 tracking-tighter uppercase leading-none">98%</span>
                  <span className="text-[10px] font-black italic text-zinc-500 uppercase tracking-widest mt-2">Global Retention</span>
                </div>
              </div>
            </div>

            <Link href="/portfolio">
              <div className="group relative">
                <div
                  className="relative px-10 py-5 bg-zinc-900 border border-white/10 text-white font-black italic uppercase tracking-[0.2em] text-[11px] transition-all duration-300 overflow-hidden shadow-2xl shadow-sky-500/5 group-hover:shadow-sky-500/10"
                  style={{ clipPath: "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)" }}
                >
                  <div className="absolute inset-0 bg-sky-500/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
                  <div className="relative flex items-center gap-3">
                    <span>LAUNCH_CASE_STUDIES</span>
                    <MoveRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Side Decorative Marks */}
      <div className="absolute top-1/2 -right-10 -translate-y-1/2 text-[10px] font-mono text-zinc-200 tracking-[1em] vertical-rl uppercase rotate-180 opacity-20 italic pointer-events-none">
        SOCIAL_PROOF_LOG_//_VERIFIED_NODE
      </div>
      <div className="absolute bottom-10 left-10 text-[9px] font-mono text-zinc-400 tracking-widest uppercase pointer-events-none italic opacity-40">
        VALIDATION_ENGINE_[0x3B99]
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