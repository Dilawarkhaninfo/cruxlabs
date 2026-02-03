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
  Sparkles,
  Terminal
} from "lucide-react"
import { motion, useSpring, useMotionValue, useTransform, useScroll } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

const services = [
  {
    icon: Layers,
    title: "ENTERPRISE_WEB",
    subtitle: "Systems",
    desc: "Engineered with Next.js 15 for sub-second performance and radical scalability.",
    tag: "Primary_Infrastructure",
    image: "/WebSystems.avif",
    gradient: "from-sky-400 to-blue-500",
    color: "sky-500"
  },
  {
    icon: Server,
    title: "HIGH_FREQUENCY",
    subtitle: "APIs",
    desc: "Robust Node.js & Go backends optimized for low-latency data throughput.",
    tag: "Data_Pipeline",
    image: "/Performance.avif",
    gradient: "from-purple-400 to-pink-500",
    color: "purple-500"
  },
  {
    icon: Workflow,
    title: "INTELLIGENT",
    subtitle: "Automation",
    desc: "Eliminating operational friction through custom AI-driven workflow engines.",
    tag: "Core_Systems",
    image: "/BackendCRM.avif",
    gradient: "from-orange-400 to-red-500",
    color: "orange-500"
  },
  {
    icon: Database,
    title: "RELATIONAL",
    subtitle: "Architecture",
    desc: "Hardened PostgreSQL systems designed for data integrity and complex logic.",
    tag: "Persistence",
    image: "/Infrastructure.avif",
    gradient: "from-cyan-400 to-blue-500",
    color: "cyan-500"
  },
  {
    icon: ShieldCheck,
    title: "HARDENED",
    subtitle: "Security",
    desc: "Bank-grade authentication frameworks and zero-trust security layers.",
    tag: "Resilience",
    image: "/Security.avif",
    gradient: "from-emerald-400 to-teal-500",
    color: "emerald-500"
  },
  {
    icon: Search,
    title: "TECHNICAL",
    subtitle: "SEO",
    desc: "Architecture-level optimization for maximum indexability and authority.",
    tag: "Growth_Engine",
    image: "/SEO.avif",
    gradient: "from-pink-400 to-rose-500",
    color: "pink-500"
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
      id="services"
      className="relative py-24 sm:py-32 px-6 overflow-hidden bg-white"
    >
      {/* DIAGONAL BACKGROUND ACCENT */}
      <div
        className="absolute top-0 left-0 w-1/3 h-full bg-zinc-50 -z-10 hidden lg:block"
        style={{ clipPath: "polygon(0 0, 100% 0, 75% 100%, 0 100%)" }}
      >
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
            backgroundSize: "40px 40px"
          }}
        />
      </div>

      {/* INTERACTIVE MOUSE GLOW */}
      <motion.div
        style={{ x, y, translateX: "-50%", translateY: "-50%", left: "50%", top: "50%" }}
        className="absolute w-[800px] h-[800px] bg-sky-500/5 rounded-full blur-[150px] pointer-events-none"
      />

      {/* FLOATING DECORATIVE FRAME */}
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 right-20 w-32 h-32 border-2 border-sky-500/20 hidden xl:block"
        style={{ clipPath: "polygon(20% 0, 100% 0, 80% 100%, 0 100%)" }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* HEADER SECTION */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20">

          {/* LEFT: Title & Description */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* BADGE */}
              <div className="flex items-center gap-4 mb-8">
                <div
                  className="h-14 w-14 bg-sky-500/10 border-2 border-sky-500/30 flex items-center justify-center"
                  style={{ clipPath: "polygon(20% 0, 100% 0, 80% 100%, 0 100%)" }}
                >
                  <Sparkles className="h-7 w-7 text-sky-500" />
                </div>
                <div className="flex flex-col">
                  <div className="h-[2px] w-20 bg-sky-500 mb-2" />
                  <span className="text-sky-500 font-black italic tracking-[0.2em] text-[11px] uppercase">
                    Service_Architecture
                  </span>
                </div>
              </div>

              {/* MAIN HEADING */}
              <div className="mb-6">
                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black italic tracking-tighter text-zinc-950 leading-[0.95] mb-2">
                  ENGINEERING
                </h2>
                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black italic tracking-tighter leading-[0.95] text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-purple-500">
                  MODULES
                </h2>
              </div>

              {/* DESCRIPTION */}
              <div className="pl-6 border-l-4 border-sky-500/30">
                <p className="text-lg text-zinc-600 leading-relaxed italic font-medium">
                  We don't provide services; we <span className="font-bold text-zinc-900">install growth systems</span>.
                  Each module is integrated to work as a <span className="font-bold text-zinc-900">unified engine</span> for your business success.
                </p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link href="/services">
              <div className="group relative">
                <div
                  className="relative px-8 py-4 bg-zinc-900 border-2 border-sky-500/30 hover:border-sky-500 transition-all duration-300 overflow-hidden"
                  style={{ clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0 100%)" }}
                >
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-sky-500/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />

                  {/* Content */}
                  <div className="relative flex items-center gap-3 text-white">
                    <span className="text-sm font-black italic tracking-wider uppercase">Explore_Systems</span>
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
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative"
            >
              {/* CARD CONTAINER */}
              <div className="relative h-full flex flex-col overflow-hidden">

                {/* Diagonal Background */}
                <div
                  className="absolute inset-0 bg-white border-2 border-zinc-200 group-hover:border-zinc-900 transition-all duration-300"
                  style={{ clipPath: "polygon(0 0, 100% 0, 97% 100%, 0 100%)" }}
                >
                  {/* Gradient Hover Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                </div>

                {/* Content Wrapper */}
                <div className="relative z-10 flex flex-col h-full">

                  {/* IMAGE SECTION */}
                  <div className="relative h-52 w-full overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 brightness-90 group-hover:brightness-100"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-white/80" />

                    {/* Top Badge - ID Tag */}
                    <div className="absolute top-4 left-4">
                      <div
                        className="px-3 py-1.5 bg-zinc-900/90 backdrop-blur-sm border border-white/20"
                        style={{ clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0 100%)" }}
                      >
                        <span className="text-[9px] font-black italic text-white uppercase tracking-widest">
                          ID:{String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                    </div>

                    {/* Diagonal Icon Container */}
                    <div className="absolute bottom-4 left-4">
                      <div
                        className={`h-12 w-12 bg-white/90 backdrop-blur-sm border-2 border-${service.color}/30 flex items-center justify-center group-hover:bg-${service.color} group-hover:border-${service.color} transition-all duration-300 shadow-lg`}
                        style={{ clipPath: "polygon(20% 0, 100% 0, 80% 100%, 0 100%)" }}
                      >
                        <service.icon className={`h-6 w-6 text-${service.color} group-hover:text-white transition-colors`} />
                      </div>
                    </div>

                    {/* Top Right Diagonal Accent */}
                    <div
                      className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${service.gradient} opacity-30 group-hover:opacity-50 transition-opacity`}
                      style={{ clipPath: "polygon(100% 0, 100% 100%, 0 0)" }}
                    />
                  </div>

                  {/* CONTENT SECTION */}
                  <div className="relative p-6 flex flex-col flex-grow">

                    {/* Tag */}
                    <span className={`text-[10px] font-black italic text-zinc-500 group-hover:text-${service.color} uppercase tracking-wider block mb-4 transition-colors`}>
                      {service.tag}
                    </span>

                    {/* Title */}
                    <div className="mb-3">
                      <h3 className="text-xl font-black italic text-zinc-950 tracking-tight leading-tight flex items-start gap-2">
                        <span className="flex-1">
                          {service.title}
                          <br />
                          <span className={`text-transparent bg-clip-text bg-gradient-to-r ${service.gradient}`}>
                            {service.subtitle}
                          </span>
                        </span>
                        <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-1 translate-x-1 flex-shrink-0" />
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-zinc-600 leading-relaxed italic mb-6">
                      {service.desc}
                    </p>

                    {/* Bottom Section */}
                    <div className="mt-auto">
                      {/* Separator */}
                      <div className="h-[2px] w-full bg-zinc-100 mb-4 relative overflow-hidden">
                        <div className={`absolute inset-y-0 left-0 w-0 bg-gradient-to-r ${service.gradient} group-hover:w-full transition-all duration-500`} />
                      </div>

                      {/* CTA */}
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-black italic uppercase tracking-widest text-zinc-400 group-hover:text-zinc-900 transition-colors">
                          Initialize
                        </span>
                        <Terminal className={`h-4 w-4 text-zinc-300 group-hover:text-${service.color} transition-colors`} />
                      </div>
                    </div>

                  </div>

                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM STATS BAR */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {[
            { label: "Modules", value: "06", icon: Layers },
            { label: "Integration", value: "100%", icon: Workflow },
            { label: "Uptime", value: "99.9%", icon: Server }
          ].map((stat, i) => (
            <div
              key={i}
              className="relative group/stat"
            >
              <div
                className="relative p-6 bg-zinc-900 border-2 border-sky-500/30 hover:border-sky-500 transition-all duration-300 overflow-hidden"
                style={{ clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0 100%)" }}
              >
                {/* Shimmer */}
                <div className="absolute inset-0 bg-gradient-to-r from-sky-500/20 to-transparent translate-x-[-100%] group-hover/stat:translate-x-[100%] transition-transform duration-700 skew-x-12" />

                {/* Content */}
                <div className="relative flex items-center gap-4">
                  <stat.icon className="h-6 w-6 text-sky-500" />
                  <div className="flex-1">
                    <div className="text-3xl font-black italic text-white">{stat.value}</div>
                    <div className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold italic">{stat.label}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

      </div>

      {/* DECORATIVE TEXT ELEMENTS */}
      <div className="absolute top-1/2 -right-4 -translate-y-1/2 text-[9px] font-mono text-zinc-200 tracking-[0.5em] uppercase pointer-events-none opacity-30 hidden lg:block rotate-90 origin-right italic">
        Growth_Infrastructure_Systems_//_CRUX_V4.0
      </div>
      <div className="absolute bottom-10 left-10 text-[9px] font-mono text-zinc-300 tracking-widest uppercase pointer-events-none italic hidden lg:block">
        Integrated_Framework_[0x2A4C9]
      </div>

      {/* BOTTOM DIAGONAL LINE */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-sky-500 via-purple-500 to-transparent"
      />

    </motion.section>
  )
}