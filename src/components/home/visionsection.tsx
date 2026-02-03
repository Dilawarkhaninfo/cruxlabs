"use client"

import { Target, Lightbulb, Zap, Users, ArrowRight } from "lucide-react"
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion"
import { useRef, useEffect } from "react"
import { Badge } from "@/components/ui/badge"

export default function VisionSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smooth spring physics for mouse movement
  const springConfig = { damping: 30, stiffness: 200 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  // Parallax effects for cards
  const cardX = useTransform(x, [-500, 500], [-20, 20])
  const cardY = useTransform(y, [-500, 500], [-15, 15])

  // Scroll parallax for background
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])

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
    <section
      ref={containerRef}
      className="relative py-24 sm:py-32 lg:py-40 px-6 overflow-hidden bg-[#020617] text-white"
    >
      {/* 1. Fixed Background Parallax Image */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 z-0 opacity-40 grayscale-[0.5] contrast-125"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("/images/vision-bg.png")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-transparent to-[#020617]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-transparent to-[#020617]" />
      </motion.div>

      {/* 2. Technical Grid & Glows */}
      <div className="absolute inset-0 z-1 z-[1] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#2563eb_0.5px,transparent_0.5px)] [background-size:32px_32px] opacity-10" />
        <motion.div
          style={{ x, y }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header: Systematic Approach */}
        <div className="mx-auto max-w-3xl text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge
              className="mb-6 rounded-full border-white/10 bg-white/5 backdrop-blur-md px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.25em] text-blue-400"
            >
              <Lightbulb className="mr-2 h-3.5 w-3.5" />
              Macro Vision
            </Badge>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-8">
              Transforming <br />
              <span className="text-[#2563eb]">The Growth Logic</span>
            </h2>
            <p className="text-lg text-white/60 leading-relaxed font-medium">
              We don't build projects; we engineer scalable futures. Our vision is to
              redefine the standard of digital performance through absolute technical mastery.
            </p>
          </motion.div>
        </div>

        {/* Cards: Dual System Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Vision Card */}
          <motion.div
            style={{ x: cardX, y: cardY }}
            className="group relative"
          >
            <div className="relative rounded-3xl border border-white/10 bg-[#0f172a]/40 backdrop-blur-2xl p-10 transition-all hover:border-blue-500/50 hover:bg-[#0f172a]/60">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600/10 text-blue-400 mb-8 border border-blue-500/20 group-hover:scale-110 transition-transform">
                <Target className="h-7 w-7" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 tracking-tight">Systemic Vision</h3>
              <p className="text-white/60 mb-10 leading-relaxed font-medium">
                To engineer the world&apos;s most reliable growth infrastructure,
                enabling businesses to operate with zero-loss efficiency and
                compound their digital value infinitely.
              </p>
              <ul className="space-y-5">
                {[
                  "Architectural Scalability by Design",
                  "Autonomous Operational Growth",
                  "Long-term Value Compounding"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm font-semibold text-white/80">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            style={{
              x: useTransform(x, [-500, 500], [20, -20]),
              y: useTransform(y, [-500, 500], [15, -15])
            }}
            className="group relative"
          >
            <div className="relative rounded-3xl border border-white/10 bg-[#0f172a]/40 backdrop-blur-2xl p-10 transition-all hover:border-blue-500/50 hover:bg-[#0f172a]/60">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600/10 text-blue-400 mb-8 border border-blue-500/20 group-hover:scale-110 transition-transform">
                <Users className="h-7 w-7" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 tracking-tight">Mission Critical</h3>
              <p className="text-white/60 mb-10 leading-relaxed font-medium">
                To solve complex growth bottlenecks through expert-level engineering,
                delivering hardened digital assets that serve as the backbone
                for modern enterprise success.
              </p>
              <ul className="space-y-5">
                {[
                  "Bank-Grade Digital Security",
                  "Sub-Millisecond System Performance",
                  "Human-Centric Engineering Logic"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm font-semibold text-white/80">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Background Engineering Markings */}
      <div className="absolute bottom-20 left-20 text-[10px] font-mono text-white/10 tracking-[0.5em] vertical-rl uppercase pointer-events-none">
        CruxLabs Systemic Framework v2.0
      </div>
      <div className="absolute top-20 right-20 text-[10px] font-mono text-white/10 tracking-[0.5em] uppercase pointer-events-none">
        Est. MMXXVI // Growth Infrastructure
      </div>
    </section>
  )
}
