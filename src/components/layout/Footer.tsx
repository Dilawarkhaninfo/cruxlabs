"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useSpring, useMotionValue, useTransform, useScroll } from "framer-motion"
import { Github, Linkedin, Twitter, Mail, MapPin, Phone, Globe, Cpu, Shield, Zap, ArrowUpRight, MoveRight } from "lucide-react"
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
        // Rotate around Y axis
        const x1 = dot.x * Math.cos(rotation) - dot.z * Math.sin(rotation)
        const z1 = dot.x * Math.sin(rotation) + dot.z * Math.cos(rotation)

        // Perspective
        const fieldOfView = 800
        const scale = fieldOfView / (fieldOfView + z1 * radius)
        const xi = centerX + x1 * radius * scale
        const yi = centerY + dot.y * radius * scale

        const opacity = (z1 + 1) / 2
        ctx.beginPath()
        ctx.arc(xi, yi, 1.5 * scale, 0, 2 * Math.PI)
        ctx.fillStyle = `rgba(37, 99, 235, ${opacity * 0.6})`
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
    <footer className="relative bg-[#05070a] pt-32 pb-12 overflow-hidden border-t border-white/5">
      {/* 1. Global Infrastructure Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

      {/* 2. Global Construction Line-Art (Expert Aesthetic) */}
      <div className="absolute bottom-0 left-0 right-0 h-[400px] opacity-[0.03] pointer-events-none overflow-hidden">
        <svg width="100%" height="100%" viewBox="0 0 1200 400" preserveAspectRatio="none">
          <path d="M0 400 L100 320 L200 350 L300 280 L400 340 L500 290 L600 330 L700 260 L800 310 L900 250 L1000 300 L1100 270 L1200 350 V400 H0 Z" fill="none" stroke="white" strokeWidth="1" />
          <path d="M0 400 L50 350 L150 310 L250 340 L350 290 L450 320 L550 270 L650 300 L750 250 L850 290 L950 240 L1050 280 L1150 230 L1200 280" fill="none" stroke="white" strokeWidth="0.5" strokeDasharray="5,5" />
          {/* Architectural Building Symbols */}
          {[200, 400, 600, 800, 1000].map(x => (
            <g key={x} transform={`translate(${x}, 300)`}>
              <rect width="40" height="100" fill="none" stroke="white" strokeWidth="0.5" opacity="0.5" />
              <line x1="10" y1="20" x2="30" y2="20" stroke="white" strokeWidth="0.5" />
              <line x1="10" y1="40" x2="30" y2="40" stroke="white" strokeWidth="0.5" />
            </g>
          ))}
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

          {/* Brand & Global Presence */}
          <div className="lg:col-span-5 space-y-10">
            <Link href="/" className="flex items-center gap-3 transition-opacity hover:opacity-80">
              <Image src={LogoImage} alt="CruxLabs" width={40} height={40} className="h-10 w-10 object-contain" />
              <span className="text-xl font-black tracking-tighter text-white uppercase italic">CruxLabs</span>
            </Link>

            <h3 className="text-3xl sm:text-4xl font-black text-white leading-tight tracking-tight max-w-md">
              Engineering the <br />
              <span className="text-blue-500">Global Infrastructure</span>
            </h3>

            <p className="text-base text-white/50 leading-relaxed font-medium max-w-sm">
              We architect high-frequency systems that bridge the gap between complex logic
              and digital authority. Worldwide deployment, local impact.
            </p>

            {/* Technical Node Metrics */}
            <div className="flex flex-wrap gap-8 pt-4">
              {technologies.map((tech) => (
                <div key={tech.name} className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <tech.icon className="h-4 w-4 text-blue-500" />
                    <span className="text-[10px] font-mono font-bold text-white/80 uppercase tracking-widest">{tech.name}</span>
                  </div>
                  <div className="h-1 w-12 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-2/3 bg-blue-600" />
                  </div>
                </div>
              ))}
            </div>

            {/* Social & Contact Architecture */}
            <div className="flex flex-wrap items-center gap-6 pt-6">
              {socialLinks.map((social) => (
                <a key={social.name} href={social.href} className="text-white/40 hover:text-blue-500 transition-all flex items-center gap-2 group">
                  <social.icon className="h-4 w-4" />
                  <span className="text-[11px] font-bold uppercase tracking-widest group-hover:translate-x-1 transition-transform">{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Matrix */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-12">
            <div>
              <h4 className="text-[11px] font-mono font-bold text-blue-500 uppercase tracking-[0.3em] mb-8">System_Services</h4>
              <ul className="space-y-4">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link href={service.href} className="text-[13px] font-bold text-white/60 hover:text-white transition-all flex items-center gap-3 group">
                      <span className="text-[9px] font-mono text-white/20 group-hover:text-blue-400 Transition-colors">{service.id}</span>
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[11px] font-mono font-bold text-blue-500 uppercase tracking-[0.3em] mb-8">Company_Logic</h4>
              <ul className="space-y-4">
                {["About Core", "Technical Portfolio", "Contact Architect", "System Status"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-[13px] font-bold text-white/60 hover:text-white transition-all">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 3. The 3D Globe Module */}
          <div className="lg:col-span-3 flex flex-col items-center lg:items-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Globe Canvas */}
              <canvas ref={globeRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

              {/* Floating Data Markers */}
              <div className="absolute top-0 right-0 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-[10px] font-mono font-bold text-white/40 uppercase tracking-widest">Global_Nodes_Online</span>
              </div>
              <div className="absolute bottom-4 left-0">
                <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-md">
                  <span className="text-[9px] font-mono text-white/60 uppercase">Trajectory: Stable</span>
                </div>
              </div>
            </div>

            <div className="mt-8 text-right space-y-4">
              <p className="text-[11px] font-mono text-white/30 uppercase tracking-[0.2em] leading-relaxed max-w-[200px]">
                Global Subsystem Registry <br />
                Ref: 2026_CRUX_V4
              </p>
              <div className="flex items-center justify-end gap-3 text-blue-500">
                <Globe className="h-4 w-4" />
                <span className="text-[10px] font-black uppercase tracking-widest">Multi-Region Deployment</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Unified Architectural Mark */}
        <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-8">
            <p className="text-[11px] font-bold text-white/30 uppercase tracking-widest">
              © {new Date().getFullYear()} CruxLabs Infrastructure
            </p>
            <div className="h-4 w-[1px] bg-white/10 hidden md:block" />
            <div className="flex gap-6">
              <Link href="/privacy" className="text-[11px] font-bold text-white/30 hover:text-white uppercase tracking-widest transition-colors">Privacy_Protocol</Link>
              <Link href="/terms" className="text-[11px] font-bold text-white/30 hover:text-white uppercase tracking-widest transition-colors">Usage_Agreement</Link>
            </div>
          </div>

          <div className="flex items-center gap-10">
            {/* Engineering Coordinate */}
            <div className="text-[10px] font-mono text-white/20 uppercase tracking-[0.5em] hidden sm:block">
              LAT: 37.7749 / LONG: -122.4194
            </div>
            <Link href="/contact">
              <button className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-[11px] font-black uppercase tracking-widest text-white hover:bg-white/10 transition-all group">
                Initialize Technical Consultation
                <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative Final Trace */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[9px] font-mono text-white/5 tracking-[2em] vertical-rl uppercase pointer-events-none">
        Architectural_Finality // MMXXVI
      </div>
    </footer>
  )
}