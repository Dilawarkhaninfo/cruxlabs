"use client"

import { useRef, useEffect } from "react"
import { motion, useSpring, useMotionValue, useTransform, useScroll } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Sparkles, ArrowUpRight, MoveRight, Monitor, Smartphone, Tablet, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "Eco-Industrial OS",
    tag: "Enterprise System",
    desc: "A high-performance management architecture for sustainable production lines, optimized for sub-second data synchronization.",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=1200",
    metrics: ["99.8% Uptime", "React 19", "PostgreSQL"],
    type: "Web Architecture",
    accent: "#3b82f6"
  },
  {
    id: 2,
    title: "Quantum Banking Mobile",
    tag: "FinTech Module",
    desc: "Secure, real-time transaction engine with biometric zero-trust authentication layers and high-frequency API connectivity.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200",
    metrics: ["Bank-Grade", "Go + Flutter", "Real-time"],
    type: "Mobile System",
    accent: "#2563eb"
  },
  {
    id: 3,
    title: "Nexus Analytics Deck",
    tag: "Data Vis Engine",
    desc: "Real-time analytical infrastructure for global supply chains, featuring advanced nodal mapping and predictive modeling.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200",
    metrics: ["10k Events/s", "Python + Rust", "Redis"],
    type: "Technical Dashboard",
    accent: "#1d4ed8"
  },
  {
    id: 4,
    title: "Stratos SaaS Core",
    tag: "Cloud Infrastructure",
    desc: "Modular cloud architecture for distributed enterprise teams, focusing on zero-latency document collaborative logic.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200",
    metrics: ["Zero Latency", "Node.js", "Docker"],
    type: "SaaS Ecosystem",
    accent: "#1e40af"
  }
]

export default function ProjectShowcase() {
  const containerRef = useRef<HTMLDivElement>(null)
  const targetRef = useRef<HTMLDivElement>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 150 }
  const xGlow = useSpring(mouseX, springConfig)
  const yGlow = useSpring(mouseY, springConfig)

  // Scroll mapping for horizontal effect
  const { scrollYProgress } = useScroll({
    target: targetRef
  })

  // Horizontal translation mapping: 0 to -100% (plus some buffer)
  const x = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "-70%"])

  // Header and elements fade out as we scroll deep
  const headerOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0.8])
  const headerY = useTransform(scrollYProgress, [0, 0.1], [0, -20])

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
    <section ref={targetRef} className="relative h-[500vh] bg-[#fafafa]">
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen flex flex-col items-center overflow-hidden">

        {/* Global Engineering Grid */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

        {/* Interactive Mouse Glow */}
        <motion.div
          style={{ x: xGlow, y: yGlow, translateX: "-50%", translateY: "-50%", left: "50%", top: "50%" }}
          className="absolute w-[1200px] h-[1200px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none"
        />

        {/* 1. Header: Increased Breathing Room & Refined Polish */}
        <motion.div
          style={{ opacity: headerOpacity, y: headerY }}
          className="relative z-30 w-full pt-16 sm:pt-24 px-6 sm:px-12 mx-auto max-w-7xl"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Badge className="mb-8 rounded-full border-blue-200 bg-blue-50/50 px-5 py-2 text-[11px] font-bold uppercase tracking-[0.3em] text-[#2563eb] shadow-sm">
                  Project Architecture v2.0
                </Badge>
                <h2 className="text-5xl sm:text-6xl font-black tracking-tighter text-[#0f172a] leading-[1] mb-8">
                  Featured <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563eb] to-blue-400">Engineering Marvels</span>
                </h2>
                <p className="text-xl text-[#64748b] leading-relaxed font-medium max-w-xl">
                  Scroll to traverse our technical registry of custom-engineered
                  deployment modules and high-performance systems.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link href="/portfolio">
                <button className="group flex items-center gap-4 px-10 py-5 bg-[#0f172a] rounded-full text-[13px] font-black uppercase tracking-widest text-white hover:bg-blue-600 transition-all duration-500 shadow-2xl shadow-blue-500/20 active:scale-95">
                  Full System Registry
                  <MoveRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
                </button>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* 2. Horizontal Project Strip: Enhanced Padding & Visibility */}
        <div className="flex-grow flex items-center w-full px-6 sm:px-12 md:px-24">
          <motion.div
            style={{ x }}
            className="flex gap-12 md:gap-20 items-center justify-start"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="relative group flex-shrink-0 w-[85vw] md:w-[750px] aspect-[16/10] bg-white border border-slate-200 rounded-[3rem] overflow-hidden shadow-2xl shadow-slate-200/60"
              >
                {/* Visual Image Layer with Enhanced Contrast */}
                <div className="absolute inset-0 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out opacity-80 group-hover:opacity-100"
                  />
                  {/* Intelligent Dynamic Gradient Overlay for Text Legibility */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/40 via-transparent to-[#0f172a]/95 transition-opacity duration-700" />
                  <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>

                {/* Annotation Labels */}
                <div className="absolute top-10 left-10 flex gap-4 z-20">
                  <span className="px-4 py-1.5 bg-black/40 backdrop-blur-xl rounded-lg border border-white/20 text-[10px] font-mono font-bold text-white uppercase tracking-[0.2em] shadow-lg">
                    SYS_ID: 00{project.id}
                  </span>
                  <span className="px-4 py-1.5 bg-blue-600/40 backdrop-blur-xl rounded-lg border border-blue-400/30 text-[10px] font-mono font-bold text-white uppercase tracking-[0.2em] shadow-lg">
                    {project.tag}
                  </span>
                </div>

                {/* Content Overlay: Expert Formatting & High Visibility */}
                <div className="absolute inset-0 p-10 md:p-14 flex flex-col justify-end z-20">
                  <div className="max-w-xl">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <span className="text-xs font-mono font-black text-blue-400 uppercase tracking-[0.4em] mb-4 block drop-shadow-md">
                        {project.type}
                      </span>
                      <h3 className="text-4xl md:text-5xl font-black text-white mb-6 group-hover:text-blue-400 transition-colors tracking-tighter drop-shadow-xl leading-none">
                        {project.title}
                      </h3>
                      <p className="text-slate-200 text-base md:text-lg leading-relaxed font-semibold mb-10 line-clamp-2 md:line-clamp-3 drop-shadow-lg">
                        {project.desc}
                      </p>

                      {/* Technical Metrics: Enhanced UI */}
                      <div className="flex flex-wrap gap-5 mb-10 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                        {project.metrics.map(metric => (
                          <div key={metric} className="flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-xl">
                            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                            <span className="text-[11px] font-mono font-bold text-white uppercase tracking-widest">{metric}</span>
                          </div>
                        ))}
                      </div>

                      <button className="flex items-center gap-4 text-[12px] font-black uppercase tracking-[0.3em] text-white hover:text-blue-400 transition-all group/btn drop-shadow-lg">
                        Initialize System Interface
                        <div className="relative overflow-hidden w-6 h-6 flex items-center justify-center">
                          <ArrowUpRight className="h-5 w-5 group-hover/btn:translate-x-6 group-hover/btn:-translate-y-6 transition-transform duration-500" />
                          <ArrowUpRight className="h-5 w-5 absolute -translate-x-6 translate-y-6 group-hover/btn:translate-x-0 group-hover/btn:translate-y-0 transition-transform duration-500 text-blue-400" />
                        </div>
                      </button>
                    </motion.div>
                  </div>
                </div>

                {/* Expert Engineering Corner Mark: Animated */}
                <div className="absolute top-0 right-0 w-32 h-32 border-t-4 border-r-4 border-white/10 rounded-tr-[3rem] group-hover:border-blue-500/50 transition-all duration-700 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-32 h-32 border-b-4 border-l-4 border-white/10 rounded-bl-[3rem] group-hover:border-blue-500/50 transition-all duration-700 pointer-events-none" />

                {/* Hover Scanning Line Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity bg-[linear-gradient(to_bottom,transparent_0%,rgba(37,99,235,0.2)_50%,transparent_100%)] bg-[length:100%_400%] animate-scan pointer-events-none" />
              </motion.div>
            ))}

            {/* End Registry Node */}
            <div className="flex-shrink-0 w-[40vw] flex flex-col items-center justify-center">
              <div className="relative w-28 h-28 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-slate-200 animate-[spin_20s_linear_infinite]" />
                <Sparkles className="h-10 w-10 text-blue-500/40" />
              </div>
              <span className="mt-10 text-[11px] font-black text-slate-400 uppercase tracking-[1em] text-center">Registry_EOF</span>
            </div>
          </motion.div>
        </div>

        {/* Improved Vertical Progress/Scroll Indicator */}
        <div className="absolute bottom-16 right-12 flex flex-col items-center gap-6 opacity-60">
          <div className="h-[120px] w-[2px] bg-slate-200 relative overflow-hidden">
            <motion.div
              style={{ scaleY: scrollYProgress, originY: 0 }}
              className="absolute inset-0 bg-blue-600"
            />
          </div>
          <span className="text-[9px] font-mono font-black text-slate-400 uppercase tracking-[0.5em] vertical-rl rotate-180">
            System_Traversal_Status
          </span>
        </div>

        {/* Global Metadata Marks */}
        <div className="absolute top-1/2 -right-8 -translate-y-1/2 text-[9px] font-mono text-slate-300 tracking-[2em] vertical-rl uppercase rotate-180 opacity-60">
          Portfolio_Architecture_MMXXVI
        </div>
      </div>

      <style jsx global>{`
        @keyframes scan {
          0% { background-position: 0 -100%; }
          100% { background-position: 0 100%; }
        }
        .animate-scan {
          animation: scan 3s linear infinite;
        }
      `}</style>
    </section>
  )
}
