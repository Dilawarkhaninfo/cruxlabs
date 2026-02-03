"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useSpring, useMotionValue, useTransform, useScroll } from "framer-motion"
import { Github, Linkedin, Twitter, Mail, MapPin, Phone, Globe, Cpu, Shield, Zap, ArrowUpRight, MoveRight, Terminal, Activity, Database, Layout } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import LogoImage from "../../../public/logo.png"
import { cn } from "@/lib/utils"

const services = [
  { name: "ENTERPRISE_SYSTEMS", href: "/services/enterprise-web-apps", id: "SRV_01" },
  { name: "BACKEND_INFRASTRUCTURE", href: "/services/backend-systems", id: "SRV_02" },
  { name: "BUSINESS_AUTOMATION", href: "/services/crm-automation", id: "SRV_03" },
  { name: "TECHNICAL_SEO", href: "/services/seo-systems", id: "SRV_04" },
]

const technologies = [
  { name: "NEXTJS_15_RUNTIME", icon: Zap, id: "TK_01" },
  { name: "POSTGRESQL_CORE", icon: Database, id: "TK_02" },
  { name: "AES_256_HARDENING", icon: Shield, id: "TK_03" },
]

const socialLinks = [
  { name: "GITHUB", href: "https://github.com/cruxlabs", icon: Github },
  { name: "LINKEDIN", href: "https://linkedin.com/company/cruxlabs", icon: Linkedin },
  { name: "TWITTER", href: "https://twitter.com/cruxlabs", icon: Twitter },
]

export default function Footer() {
  const globeRef = useRef<HTMLCanvasElement>(null)
  const [isMounted, setIsMounted] = useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 150 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  useEffect(() => {
    setIsMounted(true)
    if (!globeRef.current) return

    const canvas = globeRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = canvas.offsetWidth
    let height = canvas.offsetHeight
    canvas.width = width * 2
    canvas.height = height * 2

    const dots: { x: number; y: number; z: number }[] = []
    const dotCount = 400
    for (let i = 0; i < dotCount; i++) {
      const theta = Math.random() * 2 * Math.PI
      const phi = Math.acos(2 * Math.random() - 1)
      dots.push({
        x: Math.sin(phi) * Math.cos(theta),
        y: Math.sin(phi) * Math.sin(theta),
        z: Math.cos(phi)
      })
    }

    let rotation = 0
    const animate = () => {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      rotation += 0.002

      const radius = canvas.width * 0.35
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2

      dots.forEach((dot) => {
        const x1 = dot.x * Math.cos(rotation) - dot.z * Math.sin(rotation)
        const z1 = dot.x * Math.sin(rotation) + dot.z * Math.cos(rotation)

        const fieldOfView = 800
        const scale = fieldOfView / (fieldOfView + z1 * radius)
        const xi = centerX + x1 * radius * scale
        const yi = centerY + dot.y * radius * scale

        const opacity = (z1 + 1) / 2
        ctx.beginPath()
        ctx.arc(xi, yi, 1.5 * scale, 0, 2 * Math.PI)
        ctx.fillStyle = `rgba(14, 165, 233, ${opacity * 0.4})`
        ctx.fill()
      })
      requestAnimationFrame(animate)
    }
    animate()

    const handleResize = () => {
      width = canvas.offsetWidth
      height = canvas.offsetHeight
      canvas.width = width * 2
      canvas.height = height * 2
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = window.document.body.getBoundingClientRect()
      mouseX.set(e.clientX - rect.width / 2)
      mouseY.set(e.clientY - rect.height / 2)
    }

    window.addEventListener("resize", handleResize)
    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <footer className="relative bg-zinc-950 pt-32 pb-12 overflow-hidden border-t border-white/5">
      {/* DIAGONAL BACKGROUND ACCENT (TECHNICAL SIDEBAR REVERSED) */}
      <div
        className="absolute top-0 right-0 w-1/4 h-full bg-zinc-900/30 -z-10 hidden lg:block"
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
          className="absolute left-0 top-0 w-[1px] h-40 bg-sky-500/10 blur-sm"
        />
      </div>

      {/* Global Engineering Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

      {/* Interactive Mouse Glow */}
      <motion.div
        style={{ x, y, translateX: "-50%", translateY: "-50%", left: "50%", top: "50%" }}
        className="absolute w-[1200px] h-[1200px] bg-sky-500/5 rounded-full blur-[150px] pointer-events-none"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

          {/* Brand Architecture: Redesigned for standard professional aesthetic */}
          <div className="lg:col-span-5 space-y-12">
            <Link href="/" className="flex items-center gap-4 group transition-all">
              <div className="h-10 w-10 bg-zinc-900 border border-sky-500/30 flex items-center justify-center -skew-x-[12deg] shadow-lg shadow-sky-500/5 group-hover:bg-sky-500 transition-colors">
                <Image src={LogoImage} alt="CruxLabs" width={24} height={24} className="h-6 w-6 object-contain skew-x-[12deg]" />
              </div>
              <span className="text-2xl font-black italic tracking-tighter text-white uppercase leading-none">CRUXLABS</span>
            </Link>

            <div className="space-y-2">
              <h3 className="text-5xl sm:text-6xl font-black italic text-white leading-[0.9] tracking-tighter uppercase">
                ENGINEERING
              </h3>
              <h3 className="text-5xl sm:text-6xl font-black italic leading-[0.9] tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-sky-700 uppercase">
                FINALITY
              </h3>
            </div>

            <p className="text-[15px] text-zinc-500 leading-relaxed italic font-bold uppercase tracking-wide max-w-sm border-l-2 border-sky-500/20 pl-8">
              We architect <span className="text-white">high-frequency systems</span> that bridge the gap between complex logic and digital authority. Worldwide deployment, absolute stability.
            </p>

            {/* Technical Node Metrics: Skewed Status */}
            <div className="flex flex-wrap gap-8 pt-4">
              {technologies.map((tech) => (
                <div key={tech.name} className="flex flex-col gap-3 group">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 bg-zinc-900 border border-white/5 flex items-center justify-center -skew-x-[12deg] group-hover:border-sky-500/50 transition-colors">
                      <tech.icon className="h-4 w-4 text-sky-500 skew-x-[12deg]" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest">{tech.id}</span>
                      <span className="text-[10px] font-black italic text-zinc-400 group-hover:text-white uppercase tracking-[0.2em] transition-colors">{tech.name}</span>
                    </div>
                  </div>
                  <div className="h-[2px] w-24 bg-zinc-900 relative overflow-hidden">
                    <motion.div
                      initial={{ x: "-100%" }}
                      whileInView={{ x: "0%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="absolute inset-0 bg-sky-500/30"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Social Matrix: Technical Style */}
            <div className="flex flex-wrap items-center gap-6 pt-6">
              {socialLinks.map((social) => (
                <a key={social.name} href={social.href} className="flex items-center gap-3 group">
                  <div className="h-10 w-10 bg-zinc-900 border border-white/5 flex items-center justify-center -skew-x-[12deg] group-hover:bg-white group-hover:border-white transition-all duration-300">
                    <social.icon className="h-4 w-4 text-zinc-500 group-hover:text-zinc-950 skew-x-[12deg] transition-colors" />
                  </div>
                  <span className="text-[11px] font-black italic text-zinc-500 uppercase tracking-[0.3em] group-hover:text-white transition-colors">{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Matrix: Skewed Subsystems */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-12 pt-10">
            <div>
              <div className="flex items-center gap-3 mb-10">
                <div className="h-8 w-8 bg-zinc-900 border border-sky-500/20 flex items-center justify-center -skew-x-[12deg]">
                  <Terminal className="h-4 w-4 text-sky-500 skew-x-[12deg]" />
                </div>
                <div className="flex flex-col">
                  <div className="h-[2px] w-12 bg-sky-500 mb-1" />
                  <h4 className="text-[10px] font-black italic text-sky-500 uppercase tracking-[0.4em]">SYSTEM_SERVICES</h4>
                </div>
              </div>
              <ul className="space-y-6">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link href={service.href} className="flex items-center gap-5 group">
                      <div className="h-7 w-7 bg-zinc-900 border border-white/5 group-hover:border-sky-500/50 flex items-center justify-center -skew-x-[12deg] transition-all">
                        <span className="text-[9px] font-mono font-black text-zinc-600 group-hover:text-sky-500 skew-x-[12deg] transition-colors">{service.id}</span>
                      </div>
                      <span className="text-[12px] font-black italic text-zinc-400 group-hover:text-white transition-all uppercase tracking-widest">
                        {service.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-10">
                <div className="h-8 w-8 bg-zinc-900 border border-sky-500/20 flex items-center justify-center -skew-x-[12deg]">
                  <Activity className="h-4 w-4 text-sky-500 skew-x-[12deg]" />
                </div>
                <div className="flex flex-col">
                  <div className="h-[2px] w-12 bg-sky-500 mb-1" />
                  <h4 className="text-[10px] font-black italic text-sky-500 uppercase tracking-[0.4em]">COMPANY_LOGIC</h4>
                </div>
              </div>
              <ul className="space-y-6">
                {[
                  { name: "ABOUT_CORE", href: "/about" },
                  { name: "TECHNICAL_PORTFOLIO", href: "/portfolio" },
                  { name: "CONTACT_ARCHITECT", href: "/contact" },
                  { name: "SYSTEM_STATUS", href: "/status" }
                ].map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="flex items-center gap-5 group">
                      <div className="w-1.5 h-1.5 bg-zinc-800 group-hover:bg-sky-500 -skew-x-[12deg] transition-colors" />
                      <span className="text-[12px] font-black italic text-zinc-400 group-hover:text-white transition-all uppercase tracking-widest">
                        {item.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 3D Global Infrastructure Monitor: High Fidelity */}
          <div className="lg:col-span-3 flex flex-col items-center lg:items-end pt-10">
            <div className="relative w-72 h-72 group">
              <div className="absolute inset-0 bg-sky-500/5 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <canvas ref={globeRef} className="relative z-10 w-full h-full cursor-pointer grayscale group-hover:grayscale-0 transition-all duration-1000 opacity-60 group-hover:opacity-100" />

              {/* Technical Annotations */}
              <div className="absolute top-0 right-0 p-4 border-t border-r border-white/10 group-hover:border-sky-500/30 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[9px] font-black italic text-zinc-600 uppercase tracking-widest leading-none">GLOBAL_NODES_ACTIVE</span>
                </div>
              </div>

              <div className="absolute bottom-4 left-0 -skew-x-[12deg]">
                <div className="px-5 py-2 bg-zinc-950 border border-white/5 group-hover:border-sky-500/20 transition-colors">
                  <span className="text-[9px] font-mono font-black italic text-zinc-600 uppercase tracking-[0.2em] skew-x-[12deg] block group-hover:text-sky-500">TRAJECTORY_STABLE_[0X01]</span>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center lg:text-right space-y-4">
              <p className="text-[11px] font-mono text-zinc-600 uppercase tracking-[0.4em] leading-relaxed max-w-[200px] lg:border-r-2 border-zinc-900 lg:pr-6">
                GLOBAL_SUBSYSTEM_REGISTRY <br />
                <span className="text-zinc-400 italic font-bold">REG_ID: 2026_CRUX_V4</span>
              </p>
              <div className="flex items-center justify-center lg:justify-end gap-3 text-sky-500">
                <Globe className="h-4 w-4 animate-spin-slow" />
                <span className="text-[10px] font-black italic uppercase tracking-[0.5em]">MULTI_REGION_SYNERGY</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Unified Deployment Protocol */}
        <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-8">
            <p className="text-[10px] font-black italic text-zinc-600 uppercase tracking-[0.4em]">
              © {new Date().getFullYear()} CRUXLABS_CORE_ARCHITECTURE
            </p>
            <div className="h-4 w-[1px] bg-zinc-900 rotate-12 hidden md:block" />
            <div className="flex gap-10">
              <Link href="/privacy" className="text-[10px] font-black italic text-zinc-500 hover:text-sky-500 uppercase tracking-widest transition-colors">PRIVACY_PROTOCOL</Link>
              <Link href="/terms" className="text-[10px] font-black italic text-zinc-500 hover:text-sky-500 uppercase tracking-widest transition-colors">USAGE_AGREEMENT</Link>
            </div>
          </div>

          <div className="flex items-center gap-10">
            <div className="text-[9px] font-mono font-black italic text-zinc-700 uppercase tracking-[0.5em] hidden xl:block">
              LAT: 37.7749 // LONG: -122.4194
            </div>
            <Link href="/contact">
              <div className="group relative">
                <div
                  className="relative px-10 py-5 bg-zinc-900 border border-white/10 text-white font-black italic uppercase tracking-[0.3em] text-[10px] transition-all duration-300 overflow-hidden group-hover:border-sky-500/50"
                  style={{ clipPath: "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)" }}
                >
                  <div className="absolute inset-0 bg-sky-500/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
                  <span className="relative z-10 flex items-center gap-4">
                    INITIALIZE_CONSULTATION
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-sky-500" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Extreme Decorative Tracing Overlay */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[10px] font-mono text-zinc-900 tracking-[3em] vertical-rl uppercase pointer-events-none opacity-20 italic">
        ARCHITECTURAL_FINALITY_//_MMXXVI
      </div>

      {/* BOTTOM SCAN LINE */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 w-full h-[1px] bg-sky-500/20"
      />
    </footer>
  )
}