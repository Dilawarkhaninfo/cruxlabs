"use client"

import { useRef, useEffect } from "react"
import { motion, useSpring, useMotionValue, useTransform, useScroll } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Cpu, Database, Layout, ArrowUpRight, MoveRight } from "lucide-react"
import Link from "next/link"

const techCategories = [
  {
    title: "FRONTEND_CORE",
    subtitle: "Architecture",
    icon: Layout,
    tag: "UI_ENGINE_V15",
    color: "sky-500",
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
    title: "BACKEND_GRID",
    subtitle: "Infrastructure",
    icon: Database,
    tag: "DATA_PIPELINE_H3",
    color: "purple-500",
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
    title: "NEURAL_SYSTEMS",
    subtitle: "Intelligence",
    icon: Cpu,
    tag: "WORKFLOW_LOGIC_AI",
    color: "orange-500",
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
      {/* 1. DIAGONAL BACKGROUND ACCENT */}
      <div
        className="absolute top-0 right-0 w-1/4 h-full bg-zinc-50 -z-10 hidden lg:block"
        style={{ clipPath: "polygon(40% 0, 100% 0, 100% 100%, 0 100%)" }}
      >
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header: Diagonal Dynamic Style */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-28">
          <div className="max-w-3xl transform -skew-x-[6deg]">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="h-12 w-12 bg-sky-500/10 border-2 border-sky-500/30 flex items-center justify-center -skew-x-[12deg]">
                <Cpu className="h-6 w-6 text-sky-500 skew-x-[12deg]" />
              </div>
              <div className="flex flex-col gap-1">
                <div className="h-[2px] w-20 bg-sky-500" />
                <span className="text-sky-500 font-black italic tracking-[0.3em] text-[10px] uppercase">
                  Technical_Stack_Architecture
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
                TECHNOLOGY
              </h2>
              <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black italic tracking-tighter leading-[0.85] text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-purple-500">
                CORE_MATRIX
              </h2>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col items-start lg:items-end gap-6"
          >
            <p className="text-lg text-zinc-500 italic font-medium max-w-sm lg:text-right border-r-4 border-sky-500/30 pr-6">
              We engineer solutions using only high-frequency, hardened technologies selected for radical stability.
            </p>
            <Link href="/services">
              <button
                className="h-14 px-10 bg-zinc-900 border-2 border-sky-500/30 hover:bg-sky-500 hover:text-white text-white font-black italic uppercase tracking-wider text-xs transition-all duration-300 group"
                style={{ clipPath: "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)" }}
              >
                EXPLORE_CORE
                <MoveRight className="inline-block ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
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
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="relative"
            >
              {/* Category Header: Sharp & Skewed */}
              <div className="flex items-center gap-5 mb-12 transform -skew-x-[12deg]">
                <div className={`h-16 w-16 flex items-center justify-center bg-white border-2 border-zinc-200 group-hover:border-zinc-950 transition-all shadow-xl`}>
                  <category.icon className={`h-8 w-8 text-zinc-950 skew-x-[12deg]`} />
                </div>
                <div className="skew-x-[12deg]">
                  <h3 className="text-2xl font-black italic text-zinc-950 tracking-tighter leading-none">{category.title}</h3>
                  <span className={`text-[10px] font-black italic text-zinc-400 uppercase tracking-[0.3em] mt-2 block`}>{category.tag}</span>
                </div>
              </div>

              {/* Tech Nodal Grid */}
              <div className="grid grid-cols-2 gap-4">
                {category.techs.map((tech, techIdx) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: catIdx * 0.1 + techIdx * 0.05 }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    className="relative p-6 bg-white border-2 border-zinc-100 group/tech flex flex-col items-center text-center overflow-hidden hover:border-zinc-900 transition-all duration-300"
                    style={{ clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0 100%)" }}
                  >
                    {/* Hover Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br from-zinc-50 to-white opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300`} />

                    <div className="relative z-10 w-12 h-12 mb-4 flex items-center justify-center grayscale group-hover/tech:grayscale-0 transition-all duration-500 hover:scale-110">
                      <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain p-1" />
                    </div>
                    <span className="relative z-10 text-[11px] font-black italic text-zinc-400 group-hover/tech:text-zinc-900 uppercase tracking-wider transition-colors">{tech.name}</span>

                    {/* Architectural Mark */}
                    <div className={`absolute top-0 right-0 w-6 h-6 border-t font-mono text-[8px] text-zinc-200 p-0.5 group-hover/tech:text-${category.color}`}>
                      {"["}
                    </div>
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
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-32 p-10 bg-zinc-900 border-2 border-sky-500/30 relative overflow-hidden"
          style={{ clipPath: "polygon(5% 0, 100% 0, 95% 100%, 0 100%)" }}
        >
          {/* Animated Background Scan */}
          <motion.div
            animate={{ left: ["-100%", "200%"] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 w-1/2 h-full bg-gradient-to-r from-transparent via-sky-500/5 to-transparent skew-x-[30deg] pointer-events-none"
          />

          <div className="relative flex flex-wrap justify-center lg:justify-between gap-12 items-center">
            <div className="flex items-center gap-10">
              <div className="flex flex-col">
                <span className="text-3xl font-black italic text-white tracking-widest uppercase">CORE_15.2</span>
                <span className="text-[10px] font-black italic text-sky-500 uppercase tracking-[0.4em] mt-2">Runtime Environment</span>
              </div>
              <div className="h-12 w-[2px] bg-zinc-800 rotate-12 hidden sm:block" />
              <div className="flex flex-col">
                <span className="text-3xl font-black italic text-white tracking-widest uppercase">MULTI_REG</span>
                <span className="text-[10px] font-black italic text-purple-500 uppercase tracking-[0.4em] mt-2">Deployment Coverage</span>
              </div>
            </div>

            <div className="flex flex-col items-center lg:items-end">
              <span className="text-4xl font-black italic text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-500">SUB_100MS</span>
              <span className="text-[10px] font-black italic text-zinc-500 uppercase tracking-[0.4em] mt-2">Target Engine Latency</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Extreme Decorative Overlays */}
      <div className="absolute top-[20%] -left-10 text-[9px] font-mono text-zinc-300 tracking-[1em] vertical-rl uppercase pointer-events-none opacity-30 italic">
        CRUX_STACK_SPEC_//_v.4.0.1_STABLE
      </div>
      <div className="absolute bottom-12 right-12 text-[10px] font-mono text-zinc-400 tracking-[0.4em] uppercase pointer-events-none italic opacity-40">
        AUTH_MASTER_ARCHITECT_//_2026
      </div>

      {/* BOTTOM SCAN LINE */}
      <motion.div
        animate={{ scaleX: [0, 1, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-sky-500 to-transparent z-30 opacity-50"
      />
    </motion.section>
  )
}