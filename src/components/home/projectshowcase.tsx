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
    type: "Web Architecture"
  },
  {
    id: 2,
    title: "Quantum Banking Mobile",
    tag: "FinTech Module",
    desc: "Secure, real-time transaction engine with biometric zero-trust authentication layers and high-frequency API connectivity.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200",
    metrics: ["Bank-Grade", "Go + Flutter", "Real-time"],
    type: "Mobile System"
  },
  {
    id: 3,
    title: "Nexus Analytics Deck",
    tag: "Data Vis Engine",
    desc: "Real-time analytical infrastructure for global supply chains, featuring advanced nodal mapping and predictive modeling.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200",
    metrics: ["10k Events/s", "Python + Rust", "Redis"],
    type: "Technical Dashboard"
  },
  {
    id: 4,
    title: "Stratos SaaS Core",
    tag: "Cloud Infrastructure",
    desc: "Modular cloud architecture for distributed enterprise teams, focusing on zero-latency document collaborative logic.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200",
    metrics: ["Zero Latency", "Node.js", "Docker"],
    type: "SaaS Ecosystem"
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

  // Horizontal translation mapping
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"])

  // Section entrance animations
  const sectionOpacity = useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0])

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
    <section ref={targetRef} className="relative h-[400vh] bg-white">
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen flex flex-col items-center overflow-hidden">

        {/* Header: Unified with Sections */}
        <div className="relative z-20 w-full pt-20 px-6 sm:px-12 mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Badge className="mb-6 rounded-full border-blue-200 bg-blue-50/50 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#2563eb]">
                  Project Architecture
                </Badge>
                <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0f172a] leading-[1.1] mb-6">
                  Featured <br />
                  <span className="text-[#2563eb]">Engineering Marvels</span>
                </h2>
                <p className="text-lg text-[#64748b] leading-relaxed font-medium">
                  Each deployment is a custom-engineered system designed to resolve
                  complex business friction. Scroll to explore our technical portfolio.
                </p>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <Link href="/portfolio">
                <button className="group flex items-center gap-3 px-8 py-4 bg-[#0f172a] rounded-full text-sm font-bold text-white hover:bg-blue-600 transition-all shadow-xl shadow-blue-500/10">
                  View Full Registry
                  <MoveRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Global Engineering Grid */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

        {/* Interactive Mouse Glow */}
        <motion.div
          style={{ x: xGlow, y: yGlow, translateX: "-50%", translateY: "-50%", left: "50%", top: "50%" }}
          className="absolute w-[1000px] h-[1000px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"
        />

        {/* Horizontal Project Strip */}
        <div className="flex-grow flex items-center w-full px-6 sm:px-12">
          <motion.div
            style={{ x }}
            className="flex gap-12 items-center"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="relative group flex-shrink-0 w-[85vw] md:w-[650px] aspect-[4/3] md:aspect-[16/10] bg-white border border-slate-200 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200/50"
              >
                {/* Image Layer */}
                <div className="absolute inset-0 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/95 via-[#0f172a]/40 to-transparent" />
                </div>

                {/* Annotation Badges */}
                <div className="absolute top-8 left-8 flex gap-3 z-20">
                  <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-md border border-white/20 text-[10px] font-mono font-bold text-white uppercase tracking-widest">
                    ID: 00{project.id}
                  </span>
                  <span className="px-3 py-1 bg-blue-500/20 backdrop-blur-md rounded-md border border-blue-400/30 text-[10px] font-mono font-bold text-blue-400 uppercase tracking-widest">
                    {project.tag}
                  </span>
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end z-20">
                  <div className="max-w-md">
                    <span className="text-[11px] font-mono font-bold text-blue-400 uppercase tracking-[0.3em] mb-4 block">
                      {project.type}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-black text-white mb-6 group-hover:text-blue-400 transition-colors tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-slate-300 text-sm md:text-base leading-relaxed font-medium mb-8 line-clamp-2 md:line-clamp-none">
                      {project.desc}
                    </p>

                    {/* Metrics Node */}
                    <div className="flex flex-wrap gap-4 mb-8">
                      {project.metrics.map(metric => (
                        <div key={metric} className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-lg border border-white/10">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                          <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">{metric}</span>
                        </div>
                      ))}
                    </div>

                    <button className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-white hover:text-blue-400 transition-colors group/btn">
                      System Initialization
                      <ArrowUpRight className="h-4 w-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </button>
                  </div>
                </div>

                {/* Engineering Corner Mark */}
                <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-blue-500/30 rounded-tr-[2.5rem] group-hover:border-blue-500 transition-colors duration-500" />
              </motion.div>
            ))}

            {/* End of Registry Placeholder */}
            <div className="flex-shrink-0 w-[40vw] flex flex-col items-center justify-center">
              <div className="w-20 h-20 rounded-full border border-dashed border-slate-300 flex items-center justify-center animate-spin-slow">
                <Sparkles className="h-8 w-8 text-slate-300" />
              </div>
              <span className="mt-8 text-[11px] font-mono font-bold text-slate-400 uppercase tracking-[0.5em]">End of Preview</span>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-50 group">
          <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-[0.4em]">Vertical Scroll Interface</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-blue-500 to-transparent" />
        </div>

        {/* Global Metadata */}
        <div className="absolute top-1/2 -right-8 -translate-y-1/2 text-[9px] font-mono text-slate-300 tracking-[1.5em] vertical-rl uppercase rotate-180 opacity-40">
          Portfolio_Subsystem_Registry // CRUX_CORE
        </div>
      </div>
    </section>
  )
}
