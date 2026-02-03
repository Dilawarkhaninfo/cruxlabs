"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useSpring, useMotionValue, useTransform, useScroll, AnimatePresence } from "framer-motion"
import { Plus, Minus, MoveRight, HelpCircle, ArrowUpRight, Activity, Terminal, Shield, Zap } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "WHAT_DIFFERENTIATES_CRUX_FROM_TRADITIONAL_AGENCIES?",
    answer: "WE DON'T BUILD WEBSITES—WE ENGINEER GROWTH SYSTEMS. EVERY PROJECT IS ARCHITECTED AS A SCALABLE BUSINESS ASSET, NOT A DESIGN DELIVERABLE. WE FOCUS ON MEASURABLE ROI, AUTOMATION, AND LONG-TERM MAINTAINABILITY USING BATTLE-TESTED TECHNOLOGIES.",
    id: "QUERY_001_DIFF"
  },
  {
    question: "WHAT_IS_THE_EXPECTED_DEPLOYMENT_TIMELINE?",
    answer: "WE SHIP FAST WITHOUT SACRIFICING QUALITY. MOST PROJECTS DEPLOY IN 3-6 WEEKS THANKS TO OUR BATTLE-TESTED PROCESSES, REUSABLE COMPONENTS, AND AUTOMATION. COMPLEX ENTERPRISE SYSTEMS MAY TAKE 8-12 WEEKS FOR FULL INTEGRATION.",
    id: "QUERY_002_TIME"
  },
  {
    question: "DO_YOU_PROVIDE_POST_LAUNCH_SYSTEM_MAINTENANCE?",
    answer: "YES. YOU GET A DEDICATED TEAM THAT MONITOR PERFORMANCE METRICS REGULARLY—NOT JUST WHEN THERE'S A BUG. WE OFFER PROACTIVE PARTNERSHIP INCLUDING PERFORMANCE AUDITS, SECURITY UPDATES, AND FEATURE SCALING SUPPORT.",
    id: "QUERY_003_SUPPORT"
  },
  {
    question: "WHICH_CORE_TECHNOLOGIES_DRIVE_YOUR_SOLUTIONS?",
    answer: "OUR STACK IS CHOSEN AROUND YOUR GOALS, NOT TRENDS. WE PRIMARILY USE NEXT.JS 15, REACT 19, TYPESCRIPT, NODE.JS, POSTGRESQL, AND VERCEL. EVERY TECHNOLOGY IS SELECTED FOR RELIABILITY, PERFORMANCE, AND SYSTEMIC SYNERGY.",
    id: "QUERY_004_TECH"
  },
  {
    question: "CAN_CRUX_INTEGRATE_WITH_EXISTING_ENTERPRISE_SYSTEMS?",
    answer: "ABSOLUTELY. WE SPECIALIZE IN BUSINESS PROCESS AUTOMATION AND SEAMLESS INTEGRATIONS. WHETHER IT'S YOUR CRM, PAYMENT GATEWAY, MARKETING TOOLS, OR CUSTOM APIS—WE BUILD SECURE, RELIABLE CONNECTIONS THAT ELIMINATE MANUAL OVERHEAD.",
    id: "QUERY_005_INTEG"
  },
  {
    question: "HOW_ARE_SYSTEM_SECURITY_AND_LATENCY_MANAGED?",
    answer: "SECURITY AND PERFORMANCE ARE BAKED INTO EVERY PROJECT FROM DAY ONE. WE IMPLEMENT ENTERPRISE-GRADE AUTHENTICATION, ROLE-BASED ACCESS CONTROL, SSL/TLS ENCRYPTION, AND FOLLOW OWASP BEST PRACTICES TO ENSURE SUB-SECOND LOAD TIMES.",
    id: "QUERY_006_SEC"
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
      {/* DIAGONAL BACKGROUND ACCENT (TECHNICAL SIDEBAR) */}
      <div
        className="absolute top-0 right-0 w-1/4 h-full bg-zinc-950 -z-10 hidden lg:block"
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
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 top-0 w-[1px] h-40 bg-sky-500/20 blur-sm"
        />
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
        {/* Header Block: Redesigned for standard professional aesthetic */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-24">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {/* SECTION REGISTRY BADGE */}
              <div className="flex items-center gap-4 mb-10">
                <div
                  className="h-12 w-12 bg-zinc-950 border border-sky-500/30 flex items-center justify-center -skew-x-[12deg] shadow-lg shadow-sky-500/5"
                >
                  <Activity className="h-5 w-5 text-sky-500 skew-x-[12deg]" />
                </div>
                <div className="flex flex-col">
                  <div className="h-[2.5px] w-20 bg-sky-500 mb-1" />
                  <span className="text-zinc-400 font-black italic tracking-[0.3em] text-[10px] uppercase">
                    REGISTRY://DOC_FAQ_v4.2
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black italic tracking-tighter text-zinc-950 leading-[0.9] uppercase">
                  TECHNICAL
                </h2>
                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black italic tracking-tighter leading-[0.9] text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-sky-700 uppercase">
                  QUERIES
                </h2>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-start lg:items-end gap-6"
          >
            <p className="text-[15px] text-zinc-500 italic font-medium max-w-sm lg:text-right border-r-2 border-sky-500/20 pr-8 uppercase tracking-wide">
              Full transparency on our <span className="text-zinc-950 font-bold">engineering methodology</span>, deployment protocols, and proactive support logic.
            </p>
            <Link href="/contact">
              <div className="group relative">
                <div
                  className="relative px-10 py-5 bg-zinc-950 text-white font-black italic uppercase tracking-[0.2em] text-[11px] transition-all duration-300 overflow-hidden shadow-2xl shadow-sky-500/5 group-hover:shadow-sky-500/10"
                  style={{ clipPath: "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)" }}
                >
                  <div className="absolute inset-0 bg-sky-500/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
                  <div className="relative flex items-center gap-3">
                    <span>OPEN_SUPPORT_TICKET</span>
                    <MoveRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>

        {/* FAQ Architecture: Optimized Accordion Matrix */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative group h-full"
            >
              {/* SKEWED ITEM CONTAINER */}
              <div
                className={cn(
                  "relative border transition-all duration-500 overflow-hidden",
                  openIndex === index
                    ? "bg-white border-sky-500/50 shadow-2xl shadow-sky-500/5"
                    : "bg-zinc-50 border-zinc-200 hover:border-sky-500/30 group-hover:bg-white"
                )}
                style={{ clipPath: "polygon(0 0, 100% 0, 98% 100%, 0 100%)" }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between gap-6 p-8 md:p-10 text-left outline-none"
                >
                  <div className="flex items-center gap-8">
                    <div className="h-10 px-4 flex items-center justify-center bg-zinc-950 border border-sky-500/30 -skew-x-[12deg]">
                      <span className="text-[9px] font-mono font-black italic text-sky-500 uppercase tracking-widest skew-x-[12deg]">
                        {faq.id}
                      </span>
                    </div>
                    <h3 className={cn(
                      "text-lg md:text-xl font-black italic tracking-tighter uppercase transition-colors",
                      openIndex === index ? "text-sky-500" : "text-zinc-950"
                    )}>
                      {faq.question}
                    </h3>
                  </div>
                  <div className={cn(
                    "flex-shrink-0 h-10 w-10 flex items-center justify-center border-2 transition-all duration-500",
                    openIndex === index
                      ? "bg-sky-500 border-sky-500 text-zinc-950 rotate-180"
                      : "bg-transparent border-zinc-200 text-zinc-400"
                  )}
                    style={{ clipPath: "polygon(20% 0, 100% 0, 80% 100%, 0 100%)" }}
                  >
                    {openIndex === index ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
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
                        {/* Technical Logic Separator */}
                        <div className="h-[1px] w-full bg-zinc-100 mb-8 relative">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "25%" }}
                            className="absolute inset-y-0 left-0 bg-sky-500"
                          />
                        </div>

                        <p className="text-[15px] md:text-base text-zinc-500 leading-relaxed italic font-bold uppercase tracking-wide max-w-2xl border-l-2 border-sky-500/20 pl-8">
                          {faq.answer}
                        </p>

                        <div className="mt-10 flex items-center gap-6">
                          <button className="flex items-center gap-3 text-[10px] font-black italic uppercase tracking-[0.3em] text-zinc-950 hover:text-sky-500 transition-colors group/link">
                            INITIALIZE_SYSTEM_DOCS
                            <div className="h-7 w-7 bg-zinc-950 flex items-center justify-center -skew-x-[12deg] group-hover/link:bg-sky-500 transition-colors">
                              <ArrowUpRight className="h-3 w-3 text-sky-500 group-hover/link:text-zinc-950 skew-x-[12deg]" />
                            </div>
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Hover Scan Accent */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-sky-500 group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>

        {/* Global Metadata Terminal Bar: Standardized professional footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-12 bg-zinc-950 border border-white/5 relative overflow-hidden"
          style={{ clipPath: "polygon(5% 0, 100% 0, 95% 100%, 0 100%)" }}
        >
          {/* Animated Background Scan Line */}
          <motion.div
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 w-1/2 h-full bg-gradient-to-r from-transparent via-sky-500/5 to-transparent skew-x-[30deg] pointer-events-none"
          />

          <div className="relative flex flex-wrap justify-center lg:justify-between gap-12 items-center">
            <div className="flex items-center gap-12">
              <div className="flex flex-col items-end">
                <div className="flex items-center gap-2 mb-1">
                  <Shield className="h-3 w-3 text-sky-500" />
                  <span className="text-[9px] font-mono text-zinc-600">QRY_ACK_v4.2</span>
                </div>
                <span className="text-4xl font-black italic text-white tracking-tighter uppercase leading-none">DOCS_ALIGNED</span>
              </div>

              <div className="h-16 w-[1px] bg-zinc-900 rotate-12 hidden sm:block" />

              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-1">
                  <Zap className="h-3 w-3 text-sky-500" />
                  <span className="text-[9px] font-mono text-zinc-600">BUILD: MASTER_STABLE</span>
                </div>
                <span className="text-4xl font-black italic text-white tracking-tighter uppercase leading-none">OPERATIONAL</span>
              </div>
            </div>

            <div className="flex flex-center lg:items-end gap-5">
              <div className="flex flex-col items-end">
                <span className="text-[9px] font-mono font-black italic text-zinc-600 uppercase tracking-widest">SUB_SYSTEM_STATUS</span>
                <span className="text-[10px] font-black italic text-emerald-500 mt-1 uppercase tracking-widest">[ ALL SYSTEMS ONLINE ]</span>
              </div>
              <div className="h-12 w-12 bg-zinc-900 border border-sky-500/20 flex items-center justify-center -skew-x-[12deg]">
                <Activity className="h-5 w-5 text-sky-500 animate-pulse skew-x-[12deg]" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Extreme Decorative Overlays */}
      <div className="absolute top-1/2 -right-10 -translate-y-1/2 text-[10px] font-mono text-zinc-200 tracking-[1em] vertical-rl uppercase rotate-180 opacity-20 italic pointer-events-none">
        SUPPORT_REGISTRY_//_A042
      </div>
      <div className="absolute bottom-10 left-10 text-[9px] font-mono text-zinc-400 tracking-widest uppercase pointer-events-none italic opacity-40">
        CRUX_ENGINEERING_DOCS_//_2026
      </div>

      {/* BOTTOM SCAN LINE */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 w-full h-[1px] bg-sky-500/20"
      />
    </motion.section>
  )
}