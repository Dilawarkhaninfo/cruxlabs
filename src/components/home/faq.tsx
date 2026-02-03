"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useSpring, useMotionValue, useTransform, useScroll, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Plus, Minus, MoveRight, HelpCircle, ArrowUpRight } from "lucide-react"
import Link from "next/link"

const faqs = [
  {
    question: "What makes CruxLabs different from other development agencies?",
    answer: "We don't build websites—we engineer growth systems. Every project is architected as a scalable business asset, not a design deliverable. We focus on measurable ROI, automation, and long-term maintainability using battle-tested technologies like Next.js, PostgreSQL, and Vercel.",
    id: "LOG_001"
  },
  {
    question: "How long does a typical project take?",
    answer: "We ship fast without sacrificing quality. Most projects launch in 3-6 weeks thanks to our battle-tested processes, reusable components, and automation. Complex enterprise systems may take 8-12 weeks. We provide clear milestones and weekly updates.",
    id: "LOG_002"
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer: "Yes. You get a dedicated team that knows your business and checks in regularly—not just when there's a bug. We offer proactive partnership including performance monitoring, security updates, feature enhancements, and scaling support.",
    id: "LOG_003"
  },
  {
    question: "What technologies do you use?",
    answer: "Our stack is chosen around your goals, not trends. We primarily use Next.js, React, TypeScript, Node.js, PostgreSQL, Supabase, and Vercel. Every technology is selected for reliability, performance, and long-term maintainability.",
    id: "LOG_004"
  },
  {
    question: "Can you integrate with our existing systems?",
    answer: "Absolutely. We specialize in business process automation and seamless integrations. Whether it's your CRM, payment gateway, marketing tools, or custom APIs—we build secure, reliable connections that eliminate manual work.",
    id: "LOG_005"
  },
  {
    question: "How do you handle security and performance?",
    answer: "Security and performance are baked into every project from day one. We implement enterprise-grade authentication, role-based access control, SSL/TLS encryption, and follow OWASP best practices for sub-second load times.",
    id: "LOG_006"
  }
]

export default function FAQSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [openIndex, setOpenIndex] = useState<number | null>(0)

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
      id="faq"
      className="relative py-28 sm:py-36 px-6 overflow-hidden bg-white"
    >
      {/* 1. DIAGONAL BACKGROUND ACCENT */}
      <div
        className="absolute top-0 right-0 w-1/4 h-full bg-zinc-50 -z-10 hidden lg:block"
        style={{ clipPath: "polygon(35% 0, 100% 0, 100% 100%, 0 100%)" }}
      >
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      {/* Global Engineering Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

      {/* Interactive Mouse Glow */}
      <motion.div
        style={{ x, y, translateX: "-50%", translateY: "-50%", left: "50%", top: "50%" }}
        className="absolute w-[1000px] h-[1000px] bg-sky-500/5 rounded-full blur-[150px] pointer-events-none"
      />

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
                <HelpCircle className="h-6 w-6 text-sky-500 skew-x-[12deg]" />
              </div>
              <div className="flex flex-col gap-1">
                <div className="h-[2px] w-20 bg-sky-500" />
                <span className="text-sky-500 font-black italic tracking-[0.3em] text-[10px] uppercase">
                  System_Documentation_FAQ
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
                TECHNICAL
              </h2>
              <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black italic tracking-tighter leading-[0.85] text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-purple-500">
                QUERIES
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
              Full transparency on our engineering methodology, deployment protocols, and proactive support.
            </p>
            <Link href="/contact">
              <button
                className="h-14 px-10 bg-zinc-900 border-2 border-sky-500/30 hover:bg-sky-500 hover:text-white text-white font-black italic uppercase tracking-wider text-xs transition-all duration-300 group"
                style={{ clipPath: "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)" }}
              >
                OPEN_SUPPORT_TICKET
                <MoveRight className="inline-block ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </Link>
          </motion.div>
        </div>

        {/* FAQ Architecture: Skewed Accordion Matrix */}
        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="relative group h-full"
            >
              {/* SKEWED ITEM BACKGROUND */}
              <div
                className={`absolute inset-0 border-2 transition-all duration-500 ${openIndex === index ? "bg-white border-zinc-950 shadow-2xl shadow-sky-500/10" : "bg-zinc-50 border-zinc-100 group-hover:bg-white group-hover:border-zinc-400"}`}
                style={{ clipPath: "polygon(0 0, 100% 2%, 98% 100%, 2% 98%)" }}
              />

              <div className="relative">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between gap-6 p-8 md:p-10 text-left outline-none"
                >
                  <div className="flex items-center gap-8">
                    <div className={`h-10 px-3 flex items-center justify-center bg-zinc-900 border border-sky-500/30 transform -skew-x-[12deg]`}>
                      <span className="text-[10px] font-black italic text-sky-500 uppercase tracking-widest skew-x-[12deg]">
                        {faq.id}
                      </span>
                    </div>
                    <h3 className={`text-lg md:text-xl font-black italic tracking-tight transition-colors ${openIndex === index ? "text-sky-500" : "text-zinc-950"}`}>
                      {faq.question}
                    </h3>
                  </div>
                  <div className={`flex-shrink-0 h-12 w-12 flex items-center justify-center border-2 transition-all duration-500 ${openIndex === index
                    ? "bg-zinc-950 border-zinc-950 text-white rotate-180"
                    : "bg-white border-zinc-200 text-zinc-950"
                    }`}
                    style={{ clipPath: "polygon(20% 0, 100% 0, 80% 100%, 0 100%)" }}
                  >
                    {openIndex === index ? <Minus className="h-6 w-6" /> : <Plus className="h-6 w-6" />}
                  </div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-10 md:px-14 pb-12 pt-0">
                        <div className="h-[2px] w-full bg-zinc-100 mb-8 relative">
                          <div className="absolute inset-y-0 left-0 w-1/4 bg-sky-500" />
                        </div>
                        <p className="text-base md:text-lg text-zinc-600 leading-relaxed italic font-medium max-w-2xl border-l-4 border-sky-500/30 pl-8">
                          {faq.answer}
                        </p>
                        <div className="mt-10 flex items-center gap-6">
                          <button className="flex items-center gap-2 text-[11px] font-black italic uppercase tracking-[0.3em] text-zinc-950 hover:text-sky-500 transition-colors group/link">
                            INITIALIZE_FULL_DOC
                            <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Decorative Corner Accents */}
              {openIndex === index && (
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-sky-500/5 to-transparent pointer-events-none"
                  style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Global Metadata Terminal Bar */}
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
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 w-1/2 h-full bg-gradient-to-r from-transparent via-sky-500/5 to-transparent skew-x-[30deg] pointer-events-none"
          />

          <div className="relative flex flex-wrap justify-center lg:justify-between gap-12 items-center">
            <div className="flex items-center gap-10">
              <div className="flex flex-col">
                <span className="text-3xl font-black italic text-white tracking-widest uppercase">FAQ_BUFFER</span>
                <span className="text-[10px] font-black italic text-sky-500 uppercase tracking-[0.4em] mt-2">Registry Component</span>
              </div>
              <div className="h-12 w-[2px] bg-zinc-800 rotate-12 hidden sm:block" />
              <div className="flex flex-col">
                <span className="text-3xl font-black italic text-white tracking-widest uppercase">v.4.2.0</span>
                <span className="text-[10px] font-black italic text-purple-500 uppercase tracking-[0.4em] mt-2">Build Authorization</span>
              </div>
            </div>

            <div className="flex items-center gap-8">
              <div className="hidden lg:flex flex-col items-end">
                <span className="text-[10px] font-mono font-black italic text-zinc-500 uppercase tracking-widest">SUBSYSTEM_STATUS</span>
                <span className="text-xs font-black italic text-emerald-500 mt-1 uppercase tracking-widest">[ ALL OPERATIONAL ]</span>
              </div>
              <div className="h-14 w-1 flex bg-zinc-800 hidden lg:block" />
              <div className="flex items-center gap-4">
                <div className="h-3 w-3 rounded-full bg-sky-500 animate-pulse drop-shadow-[0_0_8px_rgba(14,165,233,0.5)]" />
                <span className="text-[12px] font-black italic uppercase tracking-[0.3em] text-white">READY_FOR_DEPLOYMENT</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Extreme Decorative Overlays */}
      <div className="absolute top-1/2 -left-10 text-[9px] font-mono text-zinc-300 tracking-[1em] vertical-rl uppercase pointer-events-none opacity-30 italic">
        SUPPORT_SUBSYSTEM_//_A042
      </div>
      <div className="absolute bottom-12 right-12 text-[10px] font-mono text-zinc-400 tracking-[0.4em] uppercase pointer-events-none italic opacity-40">
        CRUXLABS_ENGINEERING_//_MMXXVI
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