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
        {/* Header: Unified Left-Aligned Typography */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-6 rounded-full border-blue-200 bg-blue-50/50 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#2563eb]">
                System Documentation
              </Badge>
              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0f172a] leading-[1.1] mb-6">
                Frequently Asked <br />
                <span className="text-[#2563eb]">Technical Queries</span>
              </h2>
              <p className="text-lg text-[#64748b] leading-relaxed font-medium">
                Everything you need to know about our engineering methodology,
                deployment protocols, and proactive support systems.
              </p>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Link href="/contact">
              <button className="group flex items-center gap-3 px-6 py-3 bg-white border border-slate-200 rounded-full text-sm font-bold text-[#0f172a] hover:border-blue-500 hover:text-blue-600 transition-all shadow-sm">
                Open Technical Ticket
                <MoveRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </Link>
          </motion.div>
        </div>

        {/* FAQ Architecture: Accordion Component */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`group relative border transition-all duration-500 overflow-hidden ${openIndex === index
                  ? "bg-white border-blue-200 shadow-2xl shadow-blue-500/5 rounded-3xl"
                  : "bg-slate-50/50 border-slate-100 rounded-2xl hover:bg-white hover:border-slate-200"
                }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between gap-6 p-6 md:p-8 text-left outline-none"
              >
                <div className="flex items-center gap-6">
                  <span className="hidden sm:block text-[10px] font-mono font-bold text-slate-400 group-hover:text-blue-400 transition-colors">
                    {faq.id}
                  </span>
                  <h3 className={`text-base md:text-lg font-bold tracking-tight transition-colors ${openIndex === index ? "text-blue-600" : "text-[#0f172a]"
                    }`}>
                    {faq.question}
                  </h3>
                </div>
                <div className={`flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-xl border transition-all duration-500 ${openIndex === index
                    ? "bg-blue-600 border-blue-400 text-white rotate-180"
                    : "bg-white border-slate-200 text-[#0f172a]"
                  }`}>
                  {openIndex === index ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="px-6 md:px-8 pb-8 md:pb-10 pt-0 ml-0 sm:ml-16">
                      <div className="h-px w-full bg-slate-100 mb-8" />
                      <p className="text-base text-[#64748b] leading-relaxed font-medium max-w-2xl">
                        {faq.answer}
                      </p>
                      <div className="mt-8 flex items-center gap-4">
                        <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-blue-600 group/link">
                          Initialize Full Doc
                          <ArrowUpRight className="h-3 w-3 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Decorative Interaction Mark */}
              {openIndex === index && (
                <div className="absolute top-0 right-0 w-24 h-24 border-t border-r border-blue-100 rounded-tr-3xl pointer-events-none" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Subsystem Metadata Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-28 py-10 border-y border-dashed border-slate-200 flex flex-wrap justify-between gap-8 items-center px-4"
        >
          <div className="flex items-center gap-6">
            <div className="flex flex-col">
              <span className="text-lg font-black text-[#0f172a]">FAQ_BUFFER</span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Registry Component</span>
            </div>
            <div className="h-8 w-[1px] bg-slate-200" />
            <div className="flex flex-col">
              <span className="text-lg font-black text-[#0f172a]">v.4.2.0</span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Build Authorization</span>
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-4 text-[10px] font-mono font-bold text-slate-300 uppercase tracking-widest">
            [ Status: All Subsystems Operational ]
          </div>
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#2563eb]">Ready for Deployment</span>
          </div>
        </motion.div>
      </div>

      {/* Support Metadata Overlay */}
      <div className="absolute top-1/2 -left-8 translate-y-[-50%] text-[10px] font-mono text-slate-300 tracking-[1.2em] vertical-rl uppercase pointer-events-none opacity-40">
        Support_Subsystem_A042
      </div>
      <div className="absolute bottom-12 right-12 text-[10px] font-mono text-slate-200 tracking-[0.4em] uppercase pointer-events-none">
        CruxLabs Engineering // MMXXVI
      </div>
    </motion.section>
  )
}