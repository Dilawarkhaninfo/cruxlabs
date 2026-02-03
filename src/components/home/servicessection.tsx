"use client"

import { useRef, useEffect } from "react"
import {
  Layers,
  Server,
  Workflow,
  Database,
  ShieldCheck,
  Search,
  ArrowUpRight,
  MoveRight
} from "lucide-react"
import { motion, useSpring, useMotionValue, useTransform, useScroll } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const services = [
  {
    icon: Layers,
    title: "Enterprise Web Systems",
    desc: "Engineered with Next.js 15 for sub-second performance and radical scalability.",
    tag: "Primary Infrastructure"
  },
  {
    icon: Server,
    title: "High-Frequency APIs",
    desc: "Robust Node.js & Go backends optimized for low-latency data throughput.",
    tag: "Data Pipeline"
  },
  {
    icon: Workflow,
    title: "Intelligent Automation",
    desc: "Eliminating operational friction through custom AI-driven workflow engines.",
    tag: "Core Systems"
  },
  {
    icon: Database,
    title: "Relational Architecture",
    desc: "Hardened PostgreSQL systems designed for data integrity and complex logic.",
    tag: "Persistence"
  },
  {
    icon: ShieldCheck,
    title: "Hardened Security",
    desc: "Bank-grade authentication frameworks and zero-trust security layers.",
    tag: "Resilience"
  },
  {
    icon: Search,
    title: "Technical SEO",
    desc: "Architecture-level optimization for maximum indexability and authority.",
    tag: "Growth Engine"
  }
]

export default function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smooth spring physics for mouse movement
  const springConfig = { damping: 25, stiffness: 150 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  // Scroll-based reveal effects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  const sectionOpacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0])
  const sectionScale = useTransform(scrollYProgress, [0, 0.2], [0.95, 1])

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
      className="relative py-24 sm:py-32 px-6 overflow-hidden bg-[#fafafa] border-t border-slate-200"
    >
      {/* 1. Unified Engineering Grid (Matching Hero & WhyChooseUs) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

      {/* 2. Interactive Area Mouse Glow */}
      <motion.div
        style={{ x, y, translateX: "-50%", translateY: "-50%", left: "50%", top: "50%" }}
        className="absolute w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header: Unified Scaling & Typography */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-6 rounded-full border-blue-200 bg-blue-50/50 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#2563eb]">
                Service Architecture
              </Badge>
              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0f172a] leading-[1.1] mb-6">
                Professional <br />
                <span className="text-[#2563eb]">Engineering Modules</span>
              </h2>
              <p className="text-lg text-[#64748b] leading-relaxed font-medium">
                We don't provide services; we install growth systems. Each module is
                integrated to work as a unified engine for your business success.
              </p>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Link href="/services">
              <button className="group flex items-center gap-3 px-6 py-3 bg-white border border-slate-200 rounded-full text-sm font-bold text-[#0f172a] hover:border-blue-500 hover:text-blue-600 transition-all shadow-sm">
                Explore All Systems
                <MoveRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Services Matrix: Staggered Scroll Entrances */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative p-8 bg-white border border-slate-200 rounded-3xl transition-all hover:border-blue-500/20 hover:shadow-2xl hover:shadow-blue-500/5 overflow-hidden"
            >
              {/* Card Decoration: Engineering marks */}
              <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-slate-100 rounded-tr-3xl" />

              <div className="relative z-10">
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block mb-6 px-3 py-1 bg-slate-50 rounded-lg w-fit border border-slate-100 group-hover:bg-blue-50 group-hover:border-blue-100 group-hover:text-blue-500 transition-colors">
                  Module ID: {index + 1} // {service.tag}
                </span>

                <div className="mb-8 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 text-[#0f172a] border border-slate-100 group-hover:bg-[#2563eb] group-hover:text-white group-hover:border-blue-400 transition-all duration-300">
                  <service.icon className="h-6 w-6" />
                </div>

                <h3 className="text-xl font-bold text-[#0f172a] mb-3 group-hover:text-blue-600 transition-colors flex items-center gap-2">
                  {service.title}
                  <ArrowUpRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </h3>

                <p className="text-sm text-[#64748b] leading-relaxed font-medium mb-8">
                  {service.desc}
                </p>

                <div className="h-[1px] w-full bg-slate-100 mb-6" />

                <button className="text-[11px] font-bold uppercase tracking-widest text-[#2563eb] opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                  Initialize Integration
                </button>
              </div>

              {/* Hover Interactive Glow Overlay */}
              <div className="absolute bottom-[-20%] right-[-20%] w-[150px] h-[150px] bg-blue-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Side Background Markings */}
      <div className="absolute top-1/2 -right-4 translate-y-[-50%] text-[10px] font-mono text-slate-300 tracking-[0.8em] vertical-rl uppercase rotate-180 pointer-events-none opacity-40">
        Growth Infrastructure Systems // CRUX_V4.0
      </div>
      <div className="absolute bottom-10 left-10 text-[10px] font-mono text-slate-200 tracking-widest uppercase pointer-events-none">
        Integrated Framework [0x2A4C9]
      </div>
    </motion.section>
  )
}
