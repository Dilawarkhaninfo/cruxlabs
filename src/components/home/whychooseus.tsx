"use client"

import {
  CheckCircle2,
  Zap,
  Shield,
  Users,
  Clock,
  ArrowUpRight,
} from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { InteractiveImageAccordion } from "../ui/interactive-image-accordion"
import { Badge } from "@/components/ui/badge"

const reasons = [
  {
    icon: Users,
    title: "Vetted Senior Intelligence",
    description: "Zero junior overhead. Work exclusively with senior engineers who understand business logic as deeply as they understand code."
  },
  {
    icon: Zap,
    title: "High-Frequency Delivery",
    description: "Our proprietary CI/CD pipelines allow us to ship architectural foundations in days, not months. We build at the speed of thought."
  },
  {
    icon: Shield,
    title: "Resilient Architecture",
    description: "Security isn't a feature; it's the foundation. We build hardened, bank-grade systems that scale horizontally without friction."
  },
  {
    icon: Clock,
    title: "Predictable Velocity",
    description: "Weekly sprints, transparent roadmaps, and 100% adherence to deadlines. We engineer certainty into every project lifecycle."
  }
]

export default function WhyChooseUsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  return (
    <section
      ref={containerRef}
      className="relative py-24 sm:py-32 px-6 bg-[#fafafa] overflow-hidden border-t border-slate-200"
    >
      {/* 1. Engineering Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Left Column: Technical Value Proposition */}
          <div className="relative flex flex-col items-start gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge
                variant="outline"
                className="mb-4 rounded-full border-blue-200 bg-blue-50/50 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#2563eb]"
              >
                Operational Excellence
              </Badge>
              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0f172a] leading-[1.1] mb-6">
                Engineered for <br />
                <span className="text-[#2563eb]">The Crux of Success</span>
              </h2>
              <p className="max-w-xl text-lg text-[#64748b] leading-relaxed font-medium">
                We eliminate the gap between strategy and execution. CruxLabs provides the technical
                infrastructure that turns ambitious ideas into dominant market positions.
              </p>
            </motion.div>

            {/* Reasons Grid: Modern Service Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full mt-4">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative p-6 bg-white border border-slate-200 rounded-2xl hover:border-[#2563eb]/30 transition-all hover:shadow-xl hover:shadow-[#2563eb]/5"
                >
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 text-[#2563eb] group-hover:bg-[#2563eb] group-hover:text-white transition-all duration-300">
                    <reason.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-[15px] font-bold text-[#0f172a] mb-2 flex items-center gap-2">
                    {reason.title}
                    <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-[13px] text-[#64748b] leading-relaxed">
                    {reason.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual System Logic */}
          <motion.div
            style={{
              opacity: useTransform(scrollYProgress, [0, 0.3], [0, 1]),
              scale: useTransform(scrollYProgress, [0, 0.3], [0.95, 1])
            }}
            className="relative"
          >
            {/* Background Decoration: Engineering Marks */}
            <div className="absolute -top-10 -right-10 w-32 h-32 border-t border-r border-[#2563eb]/10 pointer-events-none hidden lg:block" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 border-b border-l border-[#2563eb]/10 pointer-events-none hidden lg:block" />

            <div className="relative z-10 rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-2xl">
              <InteractiveImageAccordion />
            </div>

            {/* Floating Technical Overlay */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 lg:-right-12 p-6 bg-[#0f172a] z-50 rounded-2xl border border-white/10 shadow-2xl hidden md:block"
            >
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">Active Velocity</span>
                <span className="text-2xl font-bold text-white tracking-tight">184% Faster</span>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
