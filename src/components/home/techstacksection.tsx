"use client"

import { useRef, useEffect } from "react"
import { motion, useSpring, useMotionValue, useTransform, useScroll } from "framer-motion"
import { Cpu, Database, Layout, ArrowUpRight, MoveRight, Activity, Terminal, Shield, Zap } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

const techCategories = [
  {
    title: "INTERFACE_ENGINE",
    subtitle: "Architecture",
    icon: Layout,
    tag: "UI_MODULE_V15",
    id_code: "0x_UEX_ALPHA",
    techs: [
      { name: "Next.js 15", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "React 19", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "Tailwind CSS", icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
      { name: "Framer Motion", icon: "https://www.vectorlogo.zone/logos/framer/framer-icon.svg" },
      { name: "TanStack", icon: "https://tanstack.com/_next/static/media/logo-color.63254b36.png" }
    ]
  },
  {
    title: "INFRA_MATRIX",
    subtitle: "Infrastructure",
    icon: Database,
    tag: "DATA_CORE_H3",
    id_code: "0x_DBX_BETA",
    techs: [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
      { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
      { name: "Go Lang", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" }
    ]
  },
  {
    title: "NEURAL_CORE",
    subtitle: "Intelligence",
    icon: Cpu,
    tag: "LOGIC_STREAM_AI",
    id_code: "0x_AIX_GAMMA",
    techs: [
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
      { name: "OpenAI API", icon: "https://static.cdnlogo.com/logos/o/38/openai.svg" },
      { name: "GitHub Actions", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "AWS", icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
      { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" }
    ]
  }
]

export default function TechStackSection() {
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
      id="tech-stack"
      className="relative py-28 sm:py-36 px-6 overflow-hidden bg-white"
    >
      {/* DIAGONAL BACKGROUND ACCENT (TECHNICAL SIDEBAR) */}
      <div
        className="absolute top-0 left-0 w-1/4 h-full bg-zinc-950 -z-10 hidden lg:block"
        style={{ clipPath: "polygon(0 0, 100% 0, 75% 100%, 0 100%)" }}
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
          className="absolute right-0 top-0 w-[1px] h-40 bg-sky-500/20 blur-sm"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header Block: Redesigned for standard professional aesthetic */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-28">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-10"
            >
              <div className="h-12 w-12 bg-zinc-950 border border-sky-500/30 flex items-center justify-center -skew-x-[12deg] shadow-lg shadow-sky-500/5">
                <Activity className="h-5 w-5 text-sky-500 skew-x-[12deg]" />
              </div>
              <div className="flex flex-col">
                <div className="h-[2.5px] w-20 bg-sky-500 mb-1" />
                <span className="text-zinc-400 font-black italic tracking-[0.3em] text-[10px] uppercase">
                  REGISTRY://TECH_STACK_v4.2
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black italic tracking-tighter text-zinc-950 leading-[0.9] uppercase">
                HARDENED
              </h2>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black italic tracking-tighter leading-[0.9] text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-sky-700 uppercase">
                CORE_MATRIX
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
              We deploy solutions using only high-frequency, <span className="text-zinc-950 font-bold">hardened technologies</span> calibrated for absolute system stability.
            </p>
            <Link href="/services">
              <div className="group relative">
                <div
                  className="relative px-10 py-5 bg-zinc-950 text-white font-black italic uppercase tracking-[0.2em] text-[11px] transition-all duration-300 overflow-hidden shadow-2xl shadow-sky-500/5 group-hover:shadow-sky-500/10"
                  style={{ clipPath: "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)" }}
                >
                  <div className="absolute inset-0 bg-sky-500/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
                  <div className="relative flex items-center gap-3">
                    <span>EXPLORE_CORE</span>
                    <MoveRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>

        {/* Tech Matrix: Engineering Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
          {techCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.1 }}
              className="relative"
            >
              {/* Category Header: Sharp & Skewed Technical Module */}
              <div className="flex items-center gap-6 mb-12">
                <div className="h-14 w-14 bg-zinc-950 flex items-center justify-center -skew-x-[12deg] shadow-xl shadow-sky-500/5 group-hover:bg-sky-500 transition-colors duration-300">
                  <category.icon className="h-7 w-7 text-sky-500 skew-x-[12deg]" />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-2xl font-black italic text-zinc-950 tracking-tighter leading-none uppercase">{category.title}</h3>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="h-[1px] w-8 bg-sky-500/30" />
                    <span className="text-[9px] font-black italic text-zinc-400 uppercase tracking-[0.3em]">{category.tag}</span>
                  </div>
                </div>
              </div>

              {/* Tech Nodal Grid */}
              <div className="grid grid-cols-2 gap-4">
                {category.techs.map((tech, techIdx) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIdx * 0.1 + techIdx * 0.05 }}
                    className="group/tech relative p-6 bg-zinc-50 border border-zinc-200 hover:border-sky-500/50 hover:bg-white transition-all duration-300 flex flex-col items-center text-center overflow-hidden"
                    style={{ clipPath: "polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%)" }}
                  >
                    {/* Skewed ID Tag */}
                    <div className="absolute top-1 right-2 opacity-0 group-hover/tech:opacity-100 transition-opacity">
                      <span className="text-[7px] font-mono text-zinc-300">{category.id_code}</span>
                    </div>

                    <div className="relative z-10 w-10 h-10 mb-4 flex items-center justify-center grayscale group-hover/tech:grayscale-0 transition-all duration-500 hover:scale-110">
                      <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
                    </div>
                    <span className="relative z-10 text-[10px] font-black italic text-zinc-400 group-hover/tech:text-zinc-900 uppercase tracking-widest transition-colors mb-1">{tech.name}</span>

                    {/* Status Dot */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 h-1 w-4 bg-zinc-200 group-hover/tech:bg-sky-500 transition-colors" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Performance Stat Footer: Terminal Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-12 bg-zinc-950 border border-white/5 relative overflow-hidden"
          style={{ clipPath: "polygon(5% 0, 100% 0, 95% 100%, 0 100%)" }}
        >
          {/* Animated Background Scan Line */}
          <motion.div
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 w-1/2 h-full bg-gradient-to-r from-transparent via-sky-500/5 to-transparent skew-x-[30deg] pointer-events-none"
          />

          <div className="relative flex flex-wrap justify-center lg:justify-between gap-12 items-center">
            <div className="flex items-center gap-12">
              <div className="flex flex-col items-end">
                <div className="flex items-center gap-2 mb-1">
                  <Zap className="h-3 w-3 text-sky-500" />
                  <span className="text-[9px] font-mono text-zinc-600">RT_ENV_v15.2</span>
                </div>
                <span className="text-4xl font-black italic text-white tracking-tighter uppercase leading-none">STABLE_CORE</span>
              </div>

              <div className="h-16 w-[1px] bg-zinc-900/50 rotate-12 hidden sm:block" />

              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-1">
                  <Shield className="h-3 w-3 text-sky-500" />
                  <span className="text-[9px] font-mono text-zinc-600">SEC_GRADE: AA</span>
                </div>
                <span className="text-4xl font-black italic text-white tracking-tighter uppercase leading-none">HARDENED</span>
              </div>
            </div>

            <div className="flex flex-col items-center lg:items-end p-4 border-l border-white/10">
              <span className="text-5xl font-black italic text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-sky-700 leading-none">SUB_100MS</span>
              <span className="text-[10px] font-black italic text-zinc-500 uppercase tracking-[0.4em] mt-3">Target_Latency_Threshold</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Extreme Decorative Overlays */}
      <div className="absolute top-[20%] -left-12 text-[9px] font-mono text-zinc-200 tracking-[1em] vertical-rl uppercase pointer-events-none opacity-20 hidden lg:block rotate-180 italic">
        CRUX_CORE_ARCHITECTURE_SPEC_//_MASTER_STACK
      </div>

      {/* HUD DECOR (Bottom Center) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-10 opacity-30 pointer-events-none hidden xl:flex">
        <div className="flex items-center gap-3">
          <Terminal className="h-3 w-3 text-sky-500" />
          <span className="text-[8px] font-black italic uppercase tracking-[0.4em] text-zinc-400">STACK_SYNCED_2026</span>
        </div>
        <div className="flex items-center gap-3">
          <Shield className="h-3 w-3 text-sky-500" />
          <span className="text-[8px] font-black italic uppercase tracking-[0.4em] text-zinc-400">AUTH_MODE: MASTER</span>
        </div>
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