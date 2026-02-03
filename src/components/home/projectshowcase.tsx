"use client"

import { useRef, useEffect } from "react"
import { motion, useSpring, useMotionValue, useTransform, useScroll, AnimatePresence } from "framer-motion"
import { Sparkles, ArrowUpRight, MoveRight, Monitor, Smartphone, Tablet, ExternalLink, Activity, Terminal, Shield, Cpu, Zap, Globe } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

const projects = [
  {
    id: "DEPL_001_ALPHA",
    title: "SYSTEM_CORE",
    subtitle: "INDUSTRIAL_OS",
    tag: "ENTERPRISE_ARCH",
    desc: "A high-performance management infrastructure for high-scale production systems, optimized for sub-second data synchronization and massive throughput.",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=1200&q=80",
    metrics: ["99.9% UPTIME", "NEXT_15_RT", "POSTGRES_SQL"],
    type: "INFRASTRUCTURE_CORE",
  },
  {
    id: "DEPL_002_BETA",
    title: "QUANTUM_GRID",
    subtitle: "FINANCIAL_MATRIX",
    desc: "Secure, real-time transaction engine with biometric absolute-trust authentication layers and high-frequency global API connectivity.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80",
    tag: "FINTECH_ENGINE",
    metrics: ["SECURE_LAYER_01", "GO_RUNTIME", "ELK_STACK"],
    type: "FINANCIAL_SYSTEM",
  },
  {
    id: "DEPL_003_GAMMA",
    title: "NEXUS_ANALYTICS",
    subtitle: "DATA_VIS_DECK",
    desc: "Real-time analytical infrastructure for global supply chains, featuring advanced nodal mapping, predictive modeling, and live metrics visualization.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    tag: "INTELLIGENCE_UNIT",
    metrics: ["10K_EPS", "RUST_CORE", "REDIS_CACHE"],
    type: "ANALYTICS_PLATFORM",
  },
  {
    id: "DEPL_004_DELTA",
    title: "STRATOS_CLOUD",
    subtitle: "COLLAB_SAAS",
    desc: "Modular cloud architecture for distributed enterprise environments, focusing on zero-latency collaborative logic and elastic resource management.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    tag: "CLOUD_MODULE",
    metrics: ["ZERO_LATENCY", "DOCKER_V3", "K8S_ORCH"],
    type: "SAAS_ARCHITECTURE",
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

  // Horizontal translation mapping: Adjusted for better traversal
  const x = useTransform(scrollYProgress, [0.05, 0.95], ["0%", "-75%"])

  // Header and elements fade out as we scroll deep
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.95])
  const headerScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.98])

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
    <section ref={targetRef} className="relative h-[450vh] bg-white">
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen flex flex-col items-center overflow-hidden">

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
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 top-0 w-[1px] h-40 bg-sky-500/20 blur-sm"
          />
        </div>

        {/* Global Engineering Grid */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

        {/* Interactive Mouse Glow */}
        <motion.div
          style={{ x: xGlow, y: yGlow, translateX: "-50%", translateY: "-50%", left: "50%", top: "50%" }}
          className="absolute w-[1200px] h-[1200px] bg-sky-500/5 rounded-full blur-[150px] pointer-events-none"
        />

        {/* 1. Header Block - Redesigned for standard professional aesthetic */}
        <motion.div
          style={{ opacity: headerOpacity, scale: headerScale }}
          className="relative z-30 w-full pt-20 sm:pt-32 px-10 mx-auto max-w-7xl"
        >
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
            <div className="max-w-3xl">
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
                      REGISTRY://DEPLOYMENT_LOG_v4
                    </span>
                  </div>
                </div>

                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black italic tracking-tighter text-zinc-950 leading-[0.9] uppercase mb-1">
                  FEATURED
                </h2>
                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black italic tracking-tighter leading-[0.9] text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-sky-700 uppercase">
                  DEPLOYMENTS
                </h2>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex flex-col items-start lg:items-end gap-6"
            >
              <p className="text-[15px] text-zinc-500 italic font-medium max-w-sm lg:text-right border-r-2 border-sky-500/20 pr-8 uppercase tracking-wide">
                Reviewing high-fidelity <span className="text-zinc-950 font-bold">architectural deployments</span> engineered for elite enterprise integration.
              </p>
              <Link href="/portfolio">
                <div className="group relative">
                  <div
                    className="relative px-10 py-5 bg-zinc-950 text-white font-black italic uppercase tracking-[0.2em] text-[11px] transition-all duration-300 overflow-hidden shadow-2xl shadow-sky-500/5 group-hover:shadow-sky-500/10"
                    style={{ clipPath: "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)" }}
                  >
                    <div className="absolute inset-0 bg-sky-500/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
                    <div className="relative flex items-center gap-3">
                      <span>FULL_SYSTEM_REGISTRY</span>
                      <MoveRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* 2. Horizontal Project Strip - Enhanced Card Logic */}
        <div className="flex-grow flex items-center w-full mt-10">
          <motion.div
            style={{ x }}
            className="flex gap-10 md:gap-20 items-center justify-start px-10 md:px-32 pr-[50vw]"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="relative group flex-shrink-0 w-[85vw] md:w-[750px] aspect-[16/10] overflow-hidden bg-zinc-950 border border-zinc-800 shadow-2xl"
                style={{ clipPath: "polygon(5% 0, 100% 0, 95% 100%, 0 100%)" }}
              >
                {/* Visual Image Layer */}
                <div className="absolute inset-0 overflow-hidden transform scale-[1.05] group-hover:scale-100 transition-transform duration-[1.5s] ease-out">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 opacity-30 group-hover:opacity-60 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-zinc-950/40 group-hover:bg-transparent transition-colors duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                </div>

                {/* Annotation Labels - Technical Style */}
                <div className="absolute top-10 left-12 flex gap-4 z-20">
                  <div className="h-10 px-6 bg-sky-500 border border-sky-600 flex items-center justify-center -skew-x-[12deg]">
                    <span className="text-[10px] font-black italic text-zinc-950 uppercase tracking-widest skew-x-[12deg]">
                      ID:{project.id}
                    </span>
                  </div>
                  <div className="h-10 px-6 bg-zinc-900/80 backdrop-blur-md border border-white/10 flex items-center justify-center -skew-x-[12deg]">
                    <span className="text-[10px] font-black italic text-zinc-400 uppercase tracking-widest skew-x-[12deg]">
                      {project.tag}
                    </span>
                  </div>
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 p-12 md:p-16 flex flex-col justify-end z-20">
                  <div className="max-w-xl">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <span className="text-[10px] font-black italic text-sky-500 uppercase tracking-[0.4em] mb-4 block">
                        {project.type}
                      </span>
                      <h3 className="text-4xl md:text-6xl font-black italic text-white mb-2 leading-[0.9] tracking-tighter uppercase">
                        {project.title}
                      </h3>
                      <h4 className="text-lg md:text-xl font-bold italic text-zinc-400 uppercase tracking-widest mb-6">
                        {project.subtitle}
                      </h4>
                      <p className="text-zinc-500 text-sm md:text-[15px] leading-relaxed italic font-medium mb-10 line-clamp-3 uppercase tracking-wide border-l-2 border-sky-500/20 pl-6">
                        {project.desc}
                      </p>

                      {/* Technical Metrics GRID */}
                      <div className="flex flex-wrap gap-3 mb-10">
                        {project.metrics.map((metric, i) => (
                          <div key={metric} className="flex items-center gap-3 px-4 py-2 bg-zinc-900 border border-zinc-800 -skew-x-[12deg]">
                            <div className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse skew-x-[12deg]" />
                            <span className="text-[9px] font-mono font-black italic text-zinc-400 uppercase tracking-widest leading-none skew-x-[12deg]">{metric}</span>
                          </div>
                        ))}
                      </div>

                      <button className="group/btn flex items-center gap-5 text-[11px] font-black italic uppercase tracking-[0.3em] text-white hover:text-sky-500 transition-colors">
                        INITIALIZE_INTERFACE
                        <div className="h-8 w-8 bg-white/5 border border-white/10 flex items-center justify-center -skew-x-[12deg] group-hover/btn:bg-sky-500 group-hover/btn:border-sky-500 transition-all">
                          <ArrowUpRight className="h-4 w-4 text-white group-hover/btn:text-zinc-950 skew-x-[12deg] transition-transform group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1" />
                        </div>
                      </button>
                    </motion.div>
                  </div>
                </div>

                {/* Decorative Sharp Accents */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 -skew-y-12 translate-x-16 -translate-y-16 group-hover:bg-sky-500/10 transition-colors" />
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-sky-500/20 group-hover:bg-sky-500 transition-all duration-700" />
              </motion.div>
            ))}

            {/* End Registry Node */}
            <div className="flex-shrink-0 w-[40vw] flex flex-col items-center justify-center transform -skew-x-[12deg]">
              <div className="relative w-32 h-32 flex items-center justify-center bg-zinc-950 border border-sky-500/20">
                <div className="absolute inset-[4px] border border-dashed border-sky-500/10 animate-spin-slow" />
                <Globe className="h-10 w-10 text-sky-500/30 skew-x-[12deg]" />
              </div>
              <span className="mt-12 text-[10px] font-black italic text-zinc-600 uppercase tracking-[0.8em] text-center skew-x-[12deg]">
                REGISTRY_EOF_DONE
              </span>
            </div>
          </motion.div>
        </div>

        {/* Progress Indicator - HUD STYLE */}
        <div className="absolute bottom-12 right-12 flex items-center gap-8 z-40">
          <div className="flex flex-col items-end">
            <span className="text-[10px] font-black italic text-sky-500 uppercase tracking-widest">TRAVERSAL_DATA</span>
            <span className="text-[9px] font-mono text-zinc-600 uppercase">OFFSET: {Math.round(scrollYProgress.get() * 100)}%</span>
          </div>
          <div className="h-1 w-48 bg-zinc-100 relative overflow-hidden">
            <motion.div
              style={{ scaleX: scrollYProgress, originX: 0 }}
              className="absolute inset-0 bg-sky-500"
            />
          </div>
        </div>

        {/* Side Markings */}
        <div className="absolute top-1/2 -right-10 -translate-y-1/2 text-[10px] font-mono text-zinc-200 tracking-[1.5em] vertical-rl uppercase rotate-180 opacity-20 italic pointer-events-none">
          CRUX_DEPLOYMENT_SYSTEM_LOG_//_2026
        </div>

        {/* HUD FOOTER MARKER */}
        <div className="absolute bottom-10 left-10 flex items-center gap-10 opacity-30 pointer-events-none hidden xl:flex">
          <div className="flex items-center gap-3">
            <Terminal className="h-3 w-3 text-sky-500" />
            <span className="text-[8px] font-black italic uppercase tracking-[0.4em] text-zinc-400">NODE_ACK: MASTER_LINK</span>
          </div>
        </div>
      </div>
    </section>
  )
}
