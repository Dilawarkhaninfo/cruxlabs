"use client"

import { useRef, useEffect } from "react"
import { motion, useSpring, useMotionValue, useTransform, useScroll } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Quote, Star, ArrowUpRight, CheckCircle2, MoveRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Chief Executive",
    company: "TechFlow Systems",
    content: "CRUX_V4 architecture transformed our entire lead management protocol. We achieved zero packet loss in our sales funnel with their automated infrastructure.",
    tag: "Verified Deployment",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
  },
  {
    name: "Michael Chen",
    role: "Technical Founder",
    company: "GrowthPath",
    content: "Their Next.js 15 implementation replaced our legacy stack and reduced operational overhead by 60%. Performance metrics exceeded all benchmarks.",
    tag: "Core Migration",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
  },
  {
    name: "Emily Rodriguez",
    role: "CTO",
    company: "DataSync Global",
    content: "The most precise engineering partner we've integrated with. Their dashboard handles 10M+ concurrent events with sub-200ms latency regularly.",
    tag: "Nodal Scaling",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
  },
  {
    name: "David Thompson",
    role: "VP Engineering",
    company: "CloudScale",
    content: "CruxLabs delivered a hardened authentication framework with zero production friction. Documentation and code quality are absolutely top-tier.",
    tag: "Security Hardening",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
  },
  {
    name: "Jessica Park",
    role: "Dir. Operations",
    company: "AutoFlow",
    content: "The custom automation engine eliminated 15 hours of manual latency per week. Their integration logic with our existing tech stack is flawless.",
    tag: "Workflow Logic",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop"
  },
  {
    name: "Robert Kumar",
    role: "Systems Architect",
    company: "MarketPulse",
    content: "Technical SEO implementation that actually works. We saw a 150% authority increase within 90 days. They understand structural growth.",
    tag: "Authority Growth",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
  }
]

export default function TestimonialsSection() {
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
      id="testimonials"
      className="relative py-28 sm:py-36 px-6 overflow-hidden bg-[#fafafa] border-t border-slate-200"
    >
      {/* 1. Unified Engineering Grid Alignment */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

      {/* 2. Interactive Mouse Glow Signal */}
      <motion.div
        style={{ x, y, translateX: "-50%", translateY: "-50%", left: "50%", top: "50%" }}
        className="absolute w-[1000px] h-[1000px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header: Unified Left-Aligned Architecture */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-6 rounded-full border-blue-200 bg-blue-50/50 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#2563eb]">
                Success Verification
              </Badge>
              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0f172a] leading-[1.1] mb-6">
                System <br />
                <span className="text-[#2563eb]">Validation Results</span>
              </h2>
              <p className="text-lg text-[#64748b] leading-relaxed font-medium">
                We measure success through radical performance increases and absolute
                system stability. Here is how our engineering transforms global leaders.
              </p>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 px-6 py-3 bg-white border border-slate-200 rounded-full text-sm font-bold text-[#0f172a] shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              100% Client Satisfaction Rate
            </div>
          </motion.div>
        </div>

        {/* Testimonials Matrix: Engineering Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative p-8 bg-white border border-slate-200 rounded-3xl transition-all hover:border-blue-500/20 hover:shadow-2xl hover:shadow-blue-500/5 overflow-hidden flex flex-col"
            >
              {/* Technical Tag */}
              <div className="flex justify-between items-start mb-8">
                <span className="text-[10px] font-mono font-bold text-[#2563eb] uppercase tracking-widest px-3 py-1 bg-blue-50 rounded-lg border border-blue-100">
                  {t.tag}
                </span>
                <Quote className="h-6 w-6 text-slate-100 group-hover:text-blue-100 transition-colors" />
              </div>

              {/* Verified Content */}
              <p className="text-sm md:text-base text-[#0f172a] font-semibold leading-relaxed mb-10 flex-grow italic">
                &ldquo;{t.content}&rdquo;
              </p>

              {/* Author Architecture */}
              <div className="pt-8 border-t border-slate-50 flex items-center gap-4">
                <div className="relative h-12 w-12 rounded-xl overflow-hidden border-2 border-slate-100 group-hover:border-blue-500/30 transition-colors">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="flex flex-col">
                  <h4 className="text-sm font-black text-[#0f172a] tracking-tight">{t.name}</h4>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    {t.role} // {t.company}
                  </span>
                </div>
                <CheckCircle2 className="h-4 w-4 text-blue-500 ml-auto opacity-40 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Support Mark */}
              <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-slate-100 rounded-tr-3xl group-hover:border-blue-200 transition-colors" />
            </motion.div>
          ))}
        </div>

        {/* Global Verification Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 py-10 px-8 border-y border-dashed border-slate-200 flex flex-wrap justify-between gap-12 items-center"
        >
          <div className="flex flex-col">
            <span className="text-sm font-mono font-black text-slate-400 uppercase tracking-widest">Trust_Registry_Status</span>
            <div className="flex gap-1 mt-3">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} className="h-4 w-4 fill-blue-500 text-blue-500" />)}
            </div>
          </div>

          <div className="flex gap-16">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-black text-[#0f172a]">50+</span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Systems Finalized</span>
            </div>
            <div className="flex flex-col items-center text-[#2563eb]">
              <span className="text-3xl font-black">98%</span>
              <span className="text-[10px] font-bold uppercase tracking-widest mt-1">Growth Retention</span>
            </div>
          </div>

          <Link href="/portfolio" className="hidden md:block">
            <button className="group flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em] text-[#0f172a] hover:text-[#2563eb] transition-all">
              Launch Case Studies
              <MoveRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </motion.div>
      </div>

      {/* Decorative Metadata Overlay */}
      <div className="absolute top-1/2 -right-6 translate-y-[-50%] text-[10px] font-mono text-slate-300 tracking-[1em] vertical-rl uppercase rotate-180 pointer-events-none opacity-40">
        Social Proof Registry // VERIFIED_NODE
      </div>
      <div className="absolute bottom-10 left-10 text-[10px] font-mono text-slate-200 tracking-widest uppercase pointer-events-none">
        Architectural Validation [0x3B99]
      </div>
    </motion.section>
  )
}