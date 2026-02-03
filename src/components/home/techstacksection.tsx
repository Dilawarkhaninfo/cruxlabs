"use client"

import { useRef, useEffect } from "react"
import { motion, useSpring, useMotionValue, useTransform, useScroll } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Cpu, Database, Layout, ArrowUpRight, MoveRight } from "lucide-react"
import Link from "next/link"

const techCategories = [
  {
    title: "Frontend Architecture",
    icon: Layout,
    tag: "UI Engine",
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
    title: "Backend Infrastructure",
    icon: Database,
    tag: "Data Pipeline",
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
    title: "Systems & Intelligence",
    icon: Cpu,
    tag: "Workflow Logic",
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
      className="relative py-28 sm:py-36 px-6 overflow-hidden bg-white border-t border-slate-200"
    >
      {/* 1. Global Engineering Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

      {/* 2. Interactive Mouse Glow */}
      <motion.div
        style={{ x, y, translateX: "-50%", translateY: "-50%", left: "50%", top: "50%" }}
        className="absolute w-[1000px] h-[1000px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header: Unified Left-Aligned Typography (Matching Services) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-6 rounded-full border-blue-200 bg-blue-50/50 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#2563eb]">
                Technical Stack Architecture
              </Badge>
              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0f172a] leading-[1.1] mb-6">
                Scalable <br />
                <span className="text-[#2563eb]">Technology Matrix</span>
              </h2>
              <p className="text-lg text-[#64748b] leading-relaxed font-medium">
                We engineer solutions using only high-frequency, hardened technologies.
                Every node in our stack is selected for radical stability and performance.
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
                Explore Technical Core
                <MoveRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Tech Matrix: Engineering Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {techCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="group relative"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-10 pb-4 border-b border-slate-100">
                <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-slate-50 text-[#0f172a] border border-slate-100 group-hover:bg-[#2563eb] group-hover:text-white group-hover:border-blue-400 transition-all shadow-sm">
                  <category.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-[#0f172a] tracking-tight">{category.title}</h3>
                  <span className="text-[10px] font-mono font-bold text-[#2563eb] uppercase tracking-[0.2em]">{category.tag}</span>
                </div>
              </div>

              {/* Tech Nodal Grid */}
              <div className="grid grid-cols-2 gap-4">
                {category.techs.map((tech, techIdx) => (
                  <motion.div
                    key={tech.name}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="relative p-5 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-blue-500/5 hover:border-blue-500/20 transition-all overflow-hidden group/tech flex flex-col items-center text-center"
                  >
                    <div className="relative z-10 w-10 h-10 mb-3 flex items-center justify-center grayscale group-hover/tech:grayscale-0 transition-all duration-500 ease-out">
                      <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain p-1" />
                    </div>
                    <span className="text-xs font-bold text-[#64748b] group-hover/tech:text-[#0f172a] transition-colors">{tech.name}</span>

                    {/* Precision Engineering Marks */}
                    <div className="absolute top-0 right-0 p-1 opacity-0 group-hover/tech:opacity-100 transition-opacity">
                      <div className="w-2 h-2 border-t border-r border-blue-500" />
                    </div>
                    <div className="absolute bottom-0 left-0 p-1 opacity-0 group-hover/tech:opacity-100 transition-opacity">
                      <div className="w-2 h-2 border-b border-l border-blue-500" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Performance Stat Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-28 py-10 px-8 border-y border-dashed border-slate-200 bg-slate-50/50 rounded-lg flex flex-wrap justify-center lg:justify-between gap-12 items-center"
        >
          <div className="flex items-center gap-6">
            <div className="flex flex-col">
              <span className="text-2xl font-black text-[#0f172a]">Core 15.2</span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Runtime Environment</span>
            </div>
            <div className="h-8 w-[1px] bg-slate-200 hidden sm:block" />
            <div className="flex flex-col">
              <span className="text-2xl font-black text-[#0f172a]">Multi-Reg</span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Deployment Coverage</span>
            </div>
          </div>

          <Link href="/contact" className="hidden lg:block">
            <div className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#2563eb] hover:text-[#1d4ed8] transition-colors cursor-pointer group">
              Initialize Technical Consultation
              <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </Link>

          <div className="flex flex-col items-center lg:items-end text-[#2563eb]">
            <span className="text-2xl font-black">Sub-100ms</span>
            <span className="text-[10px] font-bold uppercase tracking-widest mt-1">Target Engine Latency</span>
          </div>
        </motion.div>
      </div>

      {/* Architecture Annotation Overlays */}
      <div className="absolute top-[15%] -left-8 text-[9px] font-mono text-slate-300 tracking-[1.2em] vertical-rl uppercase pointer-events-none opacity-50">
        Crux_Stack_Spec // v.4.0.1_release
      </div>
      <div className="absolute bottom-12 right-12 text-[10px] font-mono text-slate-200 tracking-[0.4em] uppercase pointer-events-none">
        Verified Architectural Node // 2026
      </div>
    </motion.section>
  )
}