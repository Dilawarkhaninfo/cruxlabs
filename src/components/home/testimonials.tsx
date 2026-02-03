"use client"

import { useRef, useEffect } from "react"
import { motion, useSpring, useMotionValue, useTransform, useScroll } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Quote, Star, ArrowUpRight, CheckCircle2, MoveRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Chief Executive",
    company: "TechFlow Systems",
    content: "CRUX_V4 architecture transformed our entire lead management protocol. We achieved zero packet loss in our sales funnel with their automated infrastructure.",
    tag: "VERIFIED_DEPLOYMENT",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    color: "sky-500"
  },
  {
    name: "Michael Chen",
    role: "Technical Founder",
    company: "GrowthPath",
    content: "Their Next.js 15 implementation replaced our legacy stack and reduced operational overhead by 60%. Performance metrics exceeded all benchmarks.",
    tag: "CORE_MIGRATION",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    color: "purple-500"
  },
  {
    name: "Emily Rodriguez",
    role: "CTO",
    company: "DataSync Global",
    content: "The most precise engineering partner we've integrated with. Their dashboard handles 10M+ concurrent events with sub-200ms latency regularly.",
    tag: "NODAL_SCALING",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    color: "orange-500"
  },
  {
    name: "David Thompson",
    role: "VP Engineering",
    company: "CloudScale",
    content: "CruxLabs delivered a hardened authentication framework with zero production friction. Documentation and code quality are absolutely top-tier.",
    tag: "SECURITY_HARDENING",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    color: "cyan-500"
  },
  {
    name: "Jessica Park",
    role: "Dir. Operations",
    company: "AutoFlow",
    content: "The custom automation engine eliminated 15 hours of manual latency per week. Their integration logic with our existing tech stack is flawless.",
    tag: "WORKFLOW_LOGIC",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
    color: "emerald-500"
  },
  {
    name: "Robert Kumar",
    role: "Systems Architect",
    company: "MarketPulse",
    content: "Technical SEO implementation that actually works. We saw a 150% authority increase within 90 days. They understand structural growth.",
    tag: "AUTHORITY_GROWTH",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    color: "pink-500"
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
      {/* 1. DIAGONAL BACKGROUND ACCENT */}
      <div
        className="absolute top-0 right-0 w-1/3 h-full bg-zinc-50 -z-10 hidden lg:block"
        style={{ clipPath: "polygon(40% 0, 100% 0, 100% 100%, 0 100%)" }}
      >
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      {/* Global Engineering Grid Alignment */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

      {/* Interactive Mouse Glow Signal */}
      <motion.div
        style={{ x, y, translateX: "-50%", translateY: "-50%", left: "50%", top: "50%" }}
        className="absolute w-[1000px] h-[1000px] bg-sky-500/5 rounded-full blur-[150px] pointer-events-none"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header: Diagonal Dynamic Style */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-28">
          <div className="max-w-2xl transform -skew-x-[6deg]">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="h-12 w-12 bg-sky-500/10 border-2 border-sky-500/30 flex items-center justify-center -skew-x-[12deg]">
                <CheckCircle2 className="h-6 w-6 text-sky-500 skew-x-[12deg]" />
              </div>
              <div className="flex flex-col gap-1">
                <div className="h-[2px] w-20 bg-sky-500" />
                <span className="text-sky-500 font-black italic tracking-[0.3em] text-[10px] uppercase">
                  Success_Validation_Registry
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black italic tracking-tighter text-zinc-950 leading-[0.85] mb-4">
                VALIDATED
              </h2>
              <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black italic tracking-tighter leading-[0.85] text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-purple-500">
                OUTCOMES
              </h2>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex flex-col items-start lg:items-end gap-6">
              <p className="text-lg text-zinc-500 italic font-medium max-w-sm lg:text-right border-r-4 border-sky-500/30 pr-6">
                We measure success through radical performance increases and absolute system stability.
              </p>
              <div className="flex items-center gap-4 px-8 py-4 bg-zinc-900 border-2 border-sky-500/30 text-white font-black italic uppercase tracking-wider text-[11px]"
                style={{ clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0 100%)" }}
              >
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                Registry_Active_[100%_Satis]
              </div>
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
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group relative flex flex-col h-full"
            >
              {/* SKEWED CARD BACKGROUND */}
              <div
                className="absolute inset-0 bg-white border-2 border-zinc-200 group-hover:border-zinc-950 transition-all duration-300 -z-10"
                style={{ clipPath: "polygon(0 0, 100% 5%, 95% 100%, 5% 95%)" }}
              />

              <div className="relative p-10 pt-12 flex flex-col h-full">
                {/* Technical Header */}
                <div className="flex justify-between items-start mb-10">
                  <div className={`px-4 py-1.5 bg-zinc-900 border border-${t.color}/30 flex items-center justify-center`}
                    style={{ clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0 100%)" }}
                  >
                    <span className="text-[9px] font-black italic text-white uppercase tracking-widest leading-none">
                      {t.tag}
                    </span>
                  </div>
                  <Quote className={`h-8 w-8 text-zinc-100 group-hover:text-sky-500/20 transition-colors duration-500`} />
                </div>

                {/* Content */}
                <p className="text-base md:text-lg text-zinc-950 font-bold leading-relaxed mb-12 flex-grow italic tracking-tight">
                  &ldquo;{t.content}&rdquo;
                </p>

                {/* Author Section */}
                <div className="pt-8 border-t border-zinc-100 flex items-center gap-5">
                  <div className="relative h-14 w-14 overflow-hidden border-2 border-zinc-100 group-hover:border-zinc-950 transition-colors scale-110"
                    style={{ clipPath: "polygon(20% 0, 100% 0, 80% 100%, 0 100%)" }}
                  >
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-lg font-black italic text-zinc-950 tracking-tighter leading-none">{t.name}</h4>
                    <span className={`text-[10px] font-black italic text-zinc-400 uppercase tracking-widest mt-2 block`}>
                      {t.role} // <span className="text-zinc-900">{t.company}</span>
                    </span>
                  </div>
                </div>

                {/* Status Indicator Bar */}
                <div className="absolute top-0 left-10 right-10 flex gap-1">
                  <div className={`h-[2px] flex-1 bg-zinc-100 relative overflow-hidden`}>
                    <div className={`absolute inset-0 bg-sky-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 delay-100`} />
                  </div>
                  <div className={`h-[10px] w-[10px] border border-zinc-200 mt-[-4px] transform rotate-45 group-hover:bg-zinc-950 transition-colors`} />
                </div>
              </div>

              {/* Decorative Corner Mark */}
              <div className={`absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-zinc-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`}
                style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }}
              />
            </motion.div>
          ))}
        </div>

        {/* Dynamic Verification Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-32 p-12 bg-zinc-900 border-2 border-sky-500/30 relative overflow-hidden"
          style={{ clipPath: "polygon(5% 0, 100% 0, 95% 100%, 0 100%)" }}
        >
          {/* Animated Background Scan */}
          <motion.div
            animate={{ left: ["-100%", "200%"] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 w-1/2 h-full bg-gradient-to-r from-transparent via-sky-500/5 to-transparent skew-x-[30deg] pointer-events-none"
          />

          <div className="relative flex flex-wrap justify-between gap-12 items-center">
            <div className="flex items-center gap-12">
              <div className="flex flex-col">
                <span className="text-sm font-black italic text-sky-500 uppercase tracking-[0.5em] mb-4">TRUST_REGISTRY_STATUS</span>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map(i => (
                    <Star key={i} className="h-5 w-5 fill-sky-500 text-sky-500 drop-shadow-[0_0_8px_rgba(14,165,233,0.5)]" />
                  ))}
                </div>
              </div>
              <div className="h-16 w-[1px] bg-zinc-800 rotate-12 hidden md:block" />
              <div className="flex gap-16">
                <div className="flex flex-col">
                  <span className="text-4xl font-black italic text-white tracking-widest">50+</span>
                  <span className="text-[10px] font-black italic text-zinc-500 uppercase tracking-[0.4em] mt-2">Systems Finalized</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-4xl font-black italic text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-500 tracking-widest">98%</span>
                  <span className="text-[10px] font-black italic text-zinc-500 uppercase tracking-[0.4em] mt-2">Growth Retention</span>
                </div>
              </div>
            </div>

            <Link href="/portfolio">
              <button className="group flex items-center gap-4 text-[11px] font-black italic uppercase tracking-[0.4em] text-white hover:text-sky-400 transition-colors">
                LAUNCH_CASE_STUDIES
                <MoveRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
              </button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Side Decorative Marks */}
      <div className="absolute top-1/2 -right-8 -translate-y-1/2 text-[9px] font-mono text-zinc-300 tracking-[1.5em] vertical-rl uppercase rotate-180 opacity-30 italic">
        SOCIAL_PROOF_REGISTRY_//_VERIFIED_NODE
      </div>
      <div className="absolute bottom-10 left-10 text-[9px] font-mono text-zinc-400 tracking-widest uppercase pointer-events-none italic">
        Architectural_Validation_[0x3B99]
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