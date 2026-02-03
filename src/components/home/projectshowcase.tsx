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
    title: "ECO_INDUSTRIAL",
    subtitle: "Operating System",
    tag: "ENTERPRISE_CORE",
    desc: "A high-performance management architecture for sustainable production lines, optimized for sub-second data synchronization.",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=1200",
    metrics: ["99.8% Uptime", "Next_15", "PostgreSQL"],
    type: "WEB_ARCHITECTURE",
    gradient: "from-sky-400 to-blue-600",
    color: "sky-500"
  },
  {
    id: 2,
    title: "QUANTUM_BANK",
    subtitle: "Mobile Matrix",
    tag: "FINTECH_MODULE",
    desc: "Secure, real-time transaction engine with biometric zero-trust authentication layers and high-frequency API connectivity.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200",
    metrics: ["Bank-Grade", "Go + Flutter", "Secure_01"],
    type: "MOBILE_SYSTEM",
    gradient: "from-purple-400 to-pink-600",
    color: "purple-500"
  },
  {
    id: 3,
    title: "NEXUS_VISUAL",
    subtitle: "Analytics Deck",
    tag: "DATA_VIS_ENGINE",
    desc: "Real-time analytical infrastructure for global supply chains, featuring advanced nodal mapping and predictive modeling.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200",
    metrics: ["10k Events/s", "Rust_Core", "Redis"],
    type: "TECHNICAL_DASHBOARD",
    gradient: "from-orange-400 to-red-600",
    color: "orange-500"
  },
  {
    id: 4,
    title: "STRATOS_CLOUD",
    subtitle: "SaaS Core",
    tag: "CLOUD_INFRA",
    desc: "Modular cloud architecture for distributed enterprise teams, focusing on zero-latency document collaborative logic.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200",
    metrics: ["Zero_Latency", "Node_H3", "Docker"],
    type: "SAAS_ECOSYSTEM",
    gradient: "from-cyan-400 to-blue-600",
    color: "cyan-500"
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
    <section ref={targetRef} className="relative h-[400vh] bg-white">
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen flex flex-col items-center overflow-hidden">

        {/* DIAGONAL BACKGROUND ACCENT */}
        <div
          className="absolute top-0 right-0 w-1/4 h-full bg-zinc-50 -z-10 hidden lg:block"
          style={{ clipPath: "polygon(35% 0, 100% 0, 100% 100%, 0 100%)" }}
        >
          <div className="absolute inset-0 opacity-20"
            style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>

        {/* Global Engineering Grid */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

        {/* Interactive Mouse Glow */}
        <motion.div
          style={{ x: xGlow, y: yGlow, translateX: "-50%", translateY: "-50%", left: "50%", top: "50%" }}
          className="absolute w-[1200px] h-[1200px] bg-sky-500/5 rounded-full blur-[150px] pointer-events-none"
        />

        {/* 1. Header: Diagonal Dynamic Style */}
        <motion.div
          style={{ opacity: headerOpacity, y: headerY }}
          className="relative z-30 w-full pt-16 sm:pt-24 px-6 sm:px-12 mx-auto max-w-7xl"
        >
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
            <div className="max-w-3xl transform -skew-x-[6deg]">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {/* Badge */}
                <div className="flex items-center gap-4 mb-8">
                  <div
                    className="h-12 w-12 bg-sky-500/10 border-2 border-sky-500/30 flex items-center justify-center -skew-x-[12deg]"
                  >
                    <Sparkles className="h-6 w-6 text-sky-500 skew-x-[12deg]" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="h-[2px] w-20 bg-sky-500" />
                    <span className="text-sky-500 font-black italic tracking-[0.3em] text-[10px] uppercase">
                      Deployment_Registry_v4
                    </span>
                  </div>
                </div>

                <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black italic tracking-tighter text-zinc-950 leading-[0.85] mb-4">
                  FEATURED
                </h2>
                <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black italic tracking-tighter leading-[0.85] text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-purple-500">
                  DEPLOYMENTS
                </h2>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link href="/portfolio">
                <button
                  className="h-14 px-10 bg-zinc-900 border-2 border-sky-500/30 hover:bg-sky-500 hover:text-white text-white font-black italic uppercase tracking-wider text-[11px] transition-all duration-300 group"
                  style={{ clipPath: "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)" }}
                >
                  FULL_SYSTEM_REGISTRY
                  <MoveRight className="inline-block ml-3 h-4 w-4 transition-transform group-hover:translate-x-2" />
                </button>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* 2. Horizontal Project Strip */}
        <div className="flex-grow flex items-center w-full mt-12 md:mt-24">
          <motion.div
            style={{ x }}
            className="flex gap-8 md:gap-12 items-center justify-start px-6 md:px-24"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="relative group flex-shrink-0 w-[85vw] md:w-[800px] aspect-[16/10] overflow-hidden border-2 border-zinc-200 hover:border-zinc-950 transition-colors duration-500"
                style={{ clipPath: "polygon(0 0, 100% 0, 96% 100%, 4% 100%)" }}
              >
                {/* Visual Image Layer */}
                <div className="absolute inset-0 overflow-hidden transform scale-[1.05] group-hover:scale-100 transition-transform duration-[1.5s] ease-out">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 opacity-40 group-hover:opacity-100 transition-all duration-700"
                  />
                  {/* Diagonal Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 transition-opacity duration-700`} />
                  <div className="absolute inset-0 bg-zinc-950/60 group-hover:bg-zinc-950/40 transition-colors duration-700" />
                </div>

                {/* Annotation Labels - Technical Style */}
                <div className="absolute top-8 left-8 flex gap-4 z-20">
                  <div className="h-10 px-4 bg-zinc-900 border border-sky-500/30 flex items-center justify-center"
                    style={{ clipPath: "polygon(15% 0, 100% 0, 85% 100%, 0 100%)" }}
                  >
                    <span className="text-[10px] font-black italic text-white uppercase tracking-widest leading-none">
                      ID:00{project.id}
                    </span>
                  </div>
                  <div className="h-10 px-4 bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center"
                    style={{ clipPath: "polygon(15% 0, 100% 0, 85% 100%, 0 100%)" }}
                  >
                    <span className="text-[10px] font-black italic text-white uppercase tracking-widest leading-none">
                      {project.tag}
                    </span>
                  </div>
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 p-10 md:p-16 flex flex-col justify-end z-20">
                  <div className="max-w-xl">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <span className={`text-[10px] font-black italic text-${project.color} uppercase tracking-[0.4em] mb-4 block`}>
                        {project.type}
                      </span>
                      <h3 className="text-4xl md:text-6xl font-black italic text-white mb-2 leading-[0.9] tracking-tighter">
                        {project.title}
                      </h3>
                      <h4 className="text-lg md:text-xl font-bold italic text-zinc-400 uppercase tracking-widest mb-6">
                        {project.subtitle}
                      </h4>
                      <p className="text-zinc-300 text-sm md:text-base leading-relaxed italic font-medium mb-10 line-clamp-3">
                        {project.desc}
                      </p>

                      {/* Technical Metrics */}
                      <div className="flex flex-wrap gap-4 mb-10">
                        {project.metrics.map((metric, i) => (
                          <div key={metric} className="flex items-center gap-3 px-4 py-2 bg-zinc-900 border border-zinc-800"
                            style={{ clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0 100%)" }}
                          >
                            <div className={`w-2 h-2 rounded-full bg-${project.color} animate-pulse`} />
                            <span className="text-[10px] font-black italic text-white uppercase tracking-widest leading-none">{metric}</span>
                          </div>
                        ))}
                      </div>

                      <button className="group/btn flex items-center gap-4 text-[11px] font-black italic uppercase tracking-[0.3em] text-white hover:text-sky-400 transition-colors">
                        INITIALIZE_INTERFACE
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1" />
                      </button>
                    </motion.div>
                  </div>
                </div>

                {/* Decorative Sharp Accents */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-700`}
                  style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
                />
              </motion.div>
            ))}

            {/* End Registry Node */}
            <div className="flex-shrink-0 w-[40vw] flex flex-col items-center justify-center transform -skew-x-[12deg]">
              <div className="relative w-32 h-32 flex items-center justify-center bg-zinc-900 border-2 border-sky-500/30">
                <div className="absolute inset-[4px] border border-dashed border-sky-500/20 animate-spin-slow" />
                <Sparkles className="h-10 w-10 text-sky-500/40 skew-x-[12deg]" />
              </div>
              <span className="mt-10 text-[10px] font-black italic text-zinc-400 uppercase tracking-[1em] text-center skew-x-[12deg]">
                REGISTRY_EOF
              </span>
            </div>
          </motion.div>
        </div>

        {/* Progress Indicator */}
        <div className="absolute bottom-16 right-12 flex flex-col items-center gap-6">
          <div className="h-[150px] w-[2px] bg-zinc-100 relative overflow-hidden">
            <motion.div
              style={{ scaleY: scrollYProgress, originY: 0 }}
              className="absolute inset-0 bg-zinc-950"
            />
          </div>
          <span className="text-[9px] font-mono font-black italic text-zinc-400 uppercase tracking-[0.5em] vertical-rl rotate-180">
            TRAVERSAL_STATUS
          </span>
        </div>

        {/* Side Markings */}
        <div className="absolute top-1/2 -right-6 -translate-y-1/2 text-[9px] font-mono text-zinc-200 tracking-[1.5em] vertical-rl uppercase rotate-180 opacity-40 italic">
          CRUX_DEPLOYMENT_ARCHITECTURE_//_2026
        </div>
      </div>
    </section>
  )
}
