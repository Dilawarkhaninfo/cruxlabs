"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useSpring, useMotionValue, useTransform, useScroll } from "framer-motion"
import { Github, Linkedin, Twitter, Mail, MapPin, Phone, Globe, Cpu, Shield, Zap, ArrowUpRight, MoveRight, Terminal } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import LogoImage from "../../../public/logo.png"

const services = [
  { name: "Enterprise Systems", href: "/services/enterprise-web-apps", id: "01" },
  { name: "Backend Infrastructure", href: "/services/backend-systems", id: "02" },
  { name: "Business Automation", href: "/services/crm-automation", id: "03" },
  { name: "Technical SEO", href: "/services/seo-systems", id: "04" },
]

const technologies = [
  { name: "Next.js 15 Core", icon: Zap },
  { name: "PostgreSQL Logic", icon: Cpu },
  { name: "AES-256 Security", icon: Shield },
]

const socialLinks = [
  { name: "GitHub", href: "https://github.com/cruxlabs", icon: Github },
  { name: "LinkedIn", href: "https://linkedin.com/company/cruxlabs", icon: Linkedin },
  { name: "Twitter", href: "https://twitter.com/cruxlabs", icon: Twitter },
]

export default function Footer() {
  const globeRef = useRef<HTMLCanvasElement>(null)
  const [isMounted, setIsMounted] = useState(false)

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
        ctx.fillStyle = `rgba(14, 165, 233, ${opacity * 0.6})`
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
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <footer className="relative bg-zinc-950 pt-32 pb-12 overflow-hidden border-t border-zinc-900">
      {/* 1. DIAGONAL BACKGROUND ACCENT */}
      <div
        className="absolute top-0 right-0 w-1/3 h-full bg-zinc-900/50 -z-10 hidden lg:block"
        style={{ clipPath: "polygon(40% 0, 100% 0, 100% 100%, 0 100%)" }}
      >
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      {/* Global Engineering Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

      {/* Construction Line-Art Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-[400px] opacity-[0.05] pointer-events-none overflow-hidden">
        <svg width="100%" height="100%" viewBox="0 0 1200 400" preserveAspectRatio="none">
          <path d="M0 400 L100 320 L200 350 L300 280 L400 340 L500 290 L600 330 L700 260 L800 310 L900 250 L1000 300 L1100 270 L1200 350 V400 H0 Z" fill="none" stroke="white" strokeWidth="1" />
          <path d="M0 400 L50 350 L150 310 L250 340 L350 290 L450 320 L550 270 L650 300 L750 250 L850 290 L950 240 L1050 280 L1150 230 L1200 280" fill="none" stroke="white" strokeWidth="0.5" strokeDasharray="5,5" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

          {/* Brand Architecture: Diagonal Style */}
          <div className="lg:col-span-5 space-y-12 transform -skew-x-[6deg]">
            <Link href="/" className="flex items-center gap-4 group transition-all skew-x-[6deg]">
              <div className="h-10 w-10 bg-sky-500/10 border-2 border-sky-500/30 flex items-center justify-center -skew-x-[12deg]">
                <Image src={LogoImage} alt="CruxLabs" width={24} height={24} className="h-6 w-6 object-contain skew-x-[12deg]" />
              </div>
              <span className="text-2xl font-black italic tracking-tighter text-white uppercase leading-none">CruxLabs</span>
            </Link>

            <div className="space-y-4">
              <h3 className="text-5xl sm:text-6xl font-black italic text-white leading-[0.85] tracking-tighter">
                ENGINEERING
              </h3>
              <h3 className="text-5xl sm:text-6xl font-black italic leading-[0.85] tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-500">
                INFRASTRUCTURE
              </h3>
            </div>

            <p className="text-lg text-zinc-500 italic font-medium max-w-sm border-l-4 border-sky-500/30 pl-8 skew-x-[6deg]">
              We architect high-frequency systems that bridge the gap between complex logic
              and digital authority. Worldwide deployment, local impact.
            </p>

            {/* Technical Node Metrics: Skewed Status */}
            <div className="flex flex-wrap gap-10 pt-4 skew-x-[6deg]">
              {technologies.map((tech) => (
                <div key={tech.name} className="flex flex-col gap-3 group">
                  <div className="flex items-center gap-3">
                    <tech.icon className="h-4 w-4 text-sky-500 transform group-hover:rotate-12 transition-transform" />
                    <span className="text-[10px] font-black italic text-zinc-400 group-hover:text-white uppercase tracking-[0.2em]">{tech.name}</span>
                  </div>
                  <div className="h-[2px] w-20 bg-zinc-800 relative overflow-hidden">
                    <motion.div
                      initial={{ left: "-100%" }}
                      whileInView={{ left: "0%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="absolute inset-y-0 left-0 w-2/3 bg-sky-500"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Social Matrix */}
            <div className="flex flex-wrap items-center gap-8 pt-6 skew-x-[6deg]">
              {socialLinks.map((social) => (
                <a key={social.name} href={social.href} className="text-zinc-500 hover:text-sky-500 transition-all flex items-center gap-3 group">
                  <social.icon className="h-5 w-5 transition-transform group-hover:scale-110" />
                  <span className="text-[11px] font-black italic uppercase tracking-[0.3em] group-hover:translate-x-1 duration-300">{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Matrix: Skewed Subsystems */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-12 pt-10">
            <div>
              <div className="flex flex-col gap-1 mb-10">
                <div className="h-[2px] w-12 bg-sky-500" />
                <h4 className="text-[11px] font-black italic text-sky-500 uppercase tracking-[0.4em]">SYSTEM_SERVICES</h4>
              </div>
              <ul className="space-y-6">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link href={service.href} className="flex items-center gap-4 group">
                      <div className="h-7 w-7 bg-zinc-900 border border-zinc-800 group-hover:border-sky-500/50 flex items-center justify-center -skew-x-[12deg] transition-all">
                        <span className="text-[9px] font-black italic text-zinc-600 group-hover:text-sky-500 skew-x-[12deg]">{service.id}</span>
                      </div>
                      <span className="text-[13px] font-black italic text-zinc-400 group-hover:text-white transition-all uppercase tracking-wider">
                        {service.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="flex flex-col gap-1 mb-10">
                <div className="h-[2px] w-12 bg-purple-500" />
                <h4 className="text-[11px] font-black italic text-purple-500 uppercase tracking-[0.4em]">COMPANY_LOGIC</h4>
              </div>
              <ul className="space-y-6">
                {[
                  { name: "About_Core", href: "/about" },
                  { name: "Technical_Portfolio", href: "/portfolio" },
                  { name: "Contact_Architect", href: "/contact" },
                  { name: "System_Status", href: "/status" }
                ].map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="flex items-center gap-4 group">
                      <div className="w-2 h-2 bg-zinc-800 group-hover:bg-purple-500 transform rotate-45 transition-colors" />
                      <span className="text-[13px] font-black italic text-zinc-400 group-hover:text-white transition-all uppercase tracking-wider">
                        {item.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 3D Global Infrastructure Monitor */}
          <div className="lg:col-span-3 flex flex-col items-center lg:items-end pt-10">
            <div className="relative w-64 h-64 md:w-80 md:h-80 group">
              <div className="absolute inset-0 bg-sky-500/5 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <canvas ref={globeRef} className="relative z-10 w-full h-full cursor-grab active:cursor-grabbing grayscale group-hover:grayscale-0 transition-all duration-1000" />

              {/* Technical Annotations */}
              <div className="absolute top-0 right-0 p-4 border-t-2 border-r-2 border-zinc-800 group-hover:border-sky-500/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] font-black italic text-zinc-500 uppercase tracking-widest leading-none">GLOBAL_NODES_ONLINE</span>
                </div>
              </div>

              <div className="absolute bottom-4 left-0 -skew-x-[12deg]">
                <div className="px-4 py-1.5 bg-zinc-900 border border-zinc-800">
                  <span className="text-[9px] font-black italic text-zinc-400 uppercase tracking-[0.2em] skew-x-[12deg] block">TRAJECTORY_STABLE_[0X01]</span>
                </div>
              </div>
            </div>

            <div className="mt-12 text-right space-y-4">
              <p className="text-[11px] font-mono text-zinc-500 uppercase tracking-[0.3em] leading-relaxed max-w-[200px] border-r-2 border-zinc-800 pr-4">
                Global Subsystem Registry <br />
                <span className="text-white">REF: 2026_CRUX_V4</span>
              </p>
              <div className="flex items-center justify-end gap-3 text-sky-500">
                <Globe className="h-4 w-4 animate-spin-slow" />
                <span className="text-[10px] font-black italic uppercase tracking-[0.4em]">MULTI_REGION_DEPLOYMENT</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Unified Deployment Protocol */}
        <div className="mt-32 pt-12 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-8">
            <p className="text-[11px] font-black italic text-zinc-500 uppercase tracking-[0.3em]">
              © {new Date().getFullYear()} CRUXLABS_INFRASTRUCTURE
            </p>
            <div className="h-4 w-[1px] bg-zinc-800 rotate-12 hidden md:block" />
            <div className="flex gap-8">
              <Link href="/privacy" className="text-[11px] font-black italic text-zinc-500 hover:text-white uppercase tracking-widest transition-colors">PRIVACY_PROTOCOL</Link>
              <Link href="/terms" className="text-[11px] font-black italic text-zinc-500 hover:text-white uppercase tracking-widest transition-colors">USAGE_AGREEMENT</Link>
            </div>
          </div>

          <div className="flex items-center gap-10">
            <div className="text-[10px] font-mono font-black italic text-zinc-600 uppercase tracking-[0.6em] hidden xl:block">
              LAT: 37.7749 // LONG: -122.4194
            </div>
            <Link href="/contact">
              <button
                className="group relative h-14 px-10 bg-zinc-900 border-2 border-zinc-800 hover:border-sky-500 hover:bg-sky-500 hover:text-zinc-950 text-white font-black italic uppercase tracking-[0.3em] text-[10px] transition-all duration-300"
                style={{ clipPath: "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)" }}
              >
                <span className="flex items-center gap-4">
                  INITIALIZE_CONSULTATION
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Extreme Decorative Tracing Overlay */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[9px] font-mono text-zinc-800 tracking-[2.5em] vertical-rl uppercase pointer-events-none opacity-20 italic">
        ARCHITECTURAL_FINALITY_//_MMXXVI
      </div>

      <motion.div
        animate={{ scaleX: [0, 1, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-sky-500/30 to-transparent z-10"
      />
    </footer>
  )
}