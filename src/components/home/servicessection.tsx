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
  MoveRight,
  Activity,
  Cpu,
  Zap,
  Terminal,
} from "lucide-react"
import { motion, useSpring, useMotionValue, useTransform, useScroll } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

const services = [
  {
    icon: Cpu,
    title: "ENTERPRISE_WEB",
    subtitle: "SYSTEMS",
    desc: "Engineered with Next.js 15 for sub-second performance and radical scalability in demanding market environments.",
    id: "SRV_001_WEB",
    tag: "PRIMARY_INFRASTRUCTURE",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
  },
  {
    icon: Zap,
    title: "HIGH_FREQUENCY",
    subtitle: "BACKENDS",
    desc: "Robust Node.js & Go architectures optimized for low-latency data throughput and massive concurrent operations.",
    id: "SRV_002_CORE",
    tag: "DATA_PIPELINE",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    icon: Workflow,
    title: "INTELLIGENT",
    subtitle: "AUTOMATION",
    desc: "Eliminating operational friction through custom AI-driven workflow engines and autonomous process logic.",
    id: "SRV_003_AUTO",
    tag: "SYSTEMIC_EFFICIENCY",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80"
  },
  {
    icon: Database,
    title: "RELATIONAL",
    subtitle: "ARCHITECTURE",
    desc: "Hardened data structures designed for absolute integrity, complex business logic, and horizontal scaling.",
    id: "SRV_004_DATA",
    tag: "PERSISTENCE_LAYER",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&q=80"
  },
  {
    icon: ShieldCheck,
    title: "HARDENED",
    subtitle: "SECURITY",
    desc: "Bank-grade authentication frameworks and zero-trust security layers protecting critical enterprise assets.",
    id: "SRV_005_SEC",
    tag: "SYSTEM_RESILIENCE",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80"
  },
  {
    icon: Search,
    title: "TECHNICAL",
    subtitle: "SEO_LOGIC",
    desc: "Architecture-level optimization for maximum indexability, authority, and organic dominance in global search.",
    id: "SRV_006_GROWTH",
    tag: "MARKET_DOMINANCE",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
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
  const sectionScale = useTransform(scrollYProgress, [0, 0.2], [0.98, 1])

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
      id="services"
      className="relative py-24 sm:py-32 px-6 overflow-hidden bg-white"
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
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 top-0 w-[1px] h-40 bg-sky-500/20 blur-sm"
        />
      </div>

      {/* INTERACTIVE MOUSE GLOW */}
      <motion.div
        style={{ x, y, translateX: "-50%", translateY: "-50%", left: "50%", top: "50%" }}
        className="absolute w-[800px] h-[800px] bg-sky-500/5 rounded-full blur-[150px] pointer-events-none z-0"
      />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* HEADER SECTION */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-24">

          {/* LEFT: Title & Description */}
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
                    REGISTRY://SERVICE_ARCHITECTURE
                  </span>
                </div>
              </div>

              {/* MAIN HEADING - SCALED DOWN 20% */}
              <div className="mb-8">
                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black italic tracking-tighter text-zinc-950 leading-[0.9] uppercase">
                  ENGINEERING
                </h2>
                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black italic tracking-tighter leading-[0.9] text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-sky-700 uppercase">
                  MODULES
                </h2>
              </div>

              {/* DESCRIPTION */}
              <div className="pl-8 border-l-2 border-sky-500/20 max-w-lg">
                <p className="text-[15px] text-zinc-500 leading-relaxed italic font-medium uppercase tracking-wide">
                  Deploying high-fidelity <span className="text-zinc-900 font-bold">technical components</span> engineered for absolute reliability. Each module integrates as a <span className="text-sky-500 font-bold">unified system</span> for market dominance.
                </p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Link href="/services">
              <div className="group relative">
                <div
                  className="relative px-10 py-5 bg-zinc-950 text-white font-black italic uppercase tracking-[0.2em] text-[11px] transition-all duration-300 overflow-hidden shadow-2xl shadow-sky-500/5 group-hover:shadow-sky-500/10"
                  style={{ clipPath: "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)" }}
                >
                  <div className="absolute inset-0 bg-sky-500/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
                  <div className="relative flex items-center gap-3">
                    <span>EXPLORE_SYSTEMS</span>
                    <MoveRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* CARD CONTAINER */}
              <div className="relative h-full flex flex-col overflow-hidden bg-white border border-zinc-200 group-hover:border-sky-500/50 transition-all duration-300 shadow-sm hover:shadow-xl">

                {/* Visual Module Header */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 brightness-[0.85] group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-80" />

                  {/* Registry ID Tag */}
                  <div className="absolute top-4 right-4">
                    <div className="px-3 py-1 bg-zinc-950/80 backdrop-blur-md border border-white/10 -skew-x-[12deg]">
                      <span className="text-[8px] font-mono text-zinc-400 skew-x-[12deg] tracking-tighter">{service.id}</span>
                    </div>
                  </div>

                  {/* Icon Module */}
                  <div className="absolute bottom-4 left-6">
                    <div className="h-12 w-12 bg-zinc-950 border border-sky-500/30 flex items-center justify-center -skew-x-[12deg] group-hover:bg-sky-500 transition-all duration-300 shadow-xl shadow-sky-500/10">
                      <service.icon className="h-6 w-6 text-sky-500 group-hover:text-white transition-colors skew-x-[12deg]" />
                    </div>
                  </div>
                </div>

                {/* Content Module */}
                <div className="p-8 flex flex-col flex-grow">
                  {/* Service Classification */}
                  <span className="text-[9px] font-black italic text-sky-500 uppercase tracking-[0.3em] block mb-4">
                    {service.tag}
                  </span>

                  {/* Title Block */}
                  <div className="mb-4">
                    <h3 className="text-xl font-black italic text-zinc-950 tracking-tighter leading-none flex items-start justify-between group-hover:text-sky-500 transition-colors uppercase">
                      <span>
                        {service.title}<br />
                        <span className="text-zinc-400 group-hover:text-sky-600 transition-colors">{service.subtitle}</span>
                      </span>
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </h3>
                  </div>

                  {/* Logic Description */}
                  <p className="text-[13px] text-zinc-500 leading-relaxed italic mb-8 uppercase tracking-wide">
                    {service.desc}
                  </p>

                  {/* Operational Controls */}
                  <div className="mt-auto pt-6 border-t border-zinc-100 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[9px] font-black italic text-zinc-400 uppercase tracking-widest group-hover:text-zinc-950 transition-colors">STATUS: ACTIVE</span>
                    </div>
                    <Terminal className="h-3 w-3 text-zinc-300 group-hover:text-sky-500 transition-colors" />
                  </div>
                </div>

                {/* Hover Scanning Line */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-sky-500 group-hover:w-full transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM METRIC BAR */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {[
            { label: "MODULES_DEPLOYED", value: "06", icon: Layers, code: "0x_MOD_ENUM" },
            { label: "INTEGRATION_SYNC", value: "100%", icon: Workflow, code: "0x_SYNC_ACK" },
            { label: "SYSTEM_UPTIME", value: "99.9%", icon: Server, code: "0x_SYS_UP" }
          ].map((stat, i) => (
            <div
              key={i}
              className="relative group/stat overflow-hidden"
              style={{ clipPath: "polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%)" }}
            >
              <div className="relative p-8 bg-zinc-950 border border-white/5 transition-all duration-300 group-hover/stat:border-sky-500/50">
                {/* Functional Pattern */}
                <div className="absolute inset-0 opacity-[0.03] group-hover/stat:opacity-[0.05] transition-opacity"
                  style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "20px 20px" }} />

                <div className="relative flex items-center gap-6">
                  <div className="h-10 w-10 bg-zinc-900 border border-sky-500/20 flex items-center justify-center -skew-x-[12deg] group-hover/stat:bg-sky-500 transition-colors">
                    <stat.icon className="h-5 w-5 text-sky-500 group-hover/stat:text-zinc-950 skew-x-[12deg]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[9px] font-mono text-zinc-600">{stat.code}</span>
                      <div className="h-1 w-8 bg-sky-500/20 group-hover/stat:bg-sky-500/50 transition-colors" />
                    </div>
                    <div className="text-3xl font-black italic text-white leading-none mb-1">{stat.value}</div>
                    <div className="text-[10px] font-black italic uppercase tracking-widest text-zinc-500 group-hover/stat:text-white transition-colors">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

      </div>

      {/* TECHNICAL TRACING ELEMENTS */}
      <div className="absolute top-1/2 -right-8 -translate-y-1/2 text-[10px] font-mono text-zinc-200 tracking-[0.8em] uppercase pointer-events-none opacity-20 hidden lg:block rotate-90 origin-right italic">
        INFRASTRUCTURE_REGISTRY_//_MASTER_NODE_v4.2
      </div>

      {/* BOTTOM SCANNER DECOR */}
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