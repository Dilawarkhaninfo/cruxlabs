"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight, Sparkles, MoveRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion"
import ClientsSlider from "./clientsslider"

export default function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null)
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    // Smooth spring physics for mouse movement
    const springConfig = { damping: 25, stiffness: 150 }
    const x = useSpring(mouseX, springConfig)
    const y = useSpring(mouseY, springConfig)

    // Parallax effects for different layers
    const textX = useTransform(x, [-500, 500], [-15, 15])
    const textY = useTransform(y, [-500, 500], [-10, 10])
    const glowX = useTransform(x, [-500, 500], [-50, 50])
    const glowY = useTransform(y, [-500, 500], [-50, 50])

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
            className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#fafafa] pt-20 pb-12"
        >
            {/* 1. Engineering Grid Background with Animated Movement */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    style={{ x: glowX, y: glowY }}
                    className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] opacity-40"
                />
                {/* 2. Interactive Cursor Glow */}
                <motion.div
                    style={{
                        x,
                        y,
                        translateX: "-50%",
                        translateY: "-50%",
                        left: "50%",
                        top: "50%"
                    }}
                    className="absolute w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] mix-blend-multiply"
                />
            </div>

            <div className="relative z-10 container mx-auto px-6">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto">

                    {/* Badge: Technical Precision */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Badge
                            variant="secondary"
                            className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.15em] text-[#2563eb] shadow-sm"
                        >
                            <Sparkles className="h-3 w-3" />
                            Next-Generation Systems
                        </Badge>
                    </motion.div>

                    {/* Headline: Refined Scale */}
                    <motion.div
                        style={{ x: textX, y: textY }}
                        className="relative"
                    >
                        <motion.h1
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                            className="text-[2.75rem] leading-[1.1] font-extrabold tracking-[-0.03em] text-[#0f172a] sm:text-5xl md:text-6xl"
                        >
                            Engineering
                            <span className="block text-[#2563eb]">Digital Authority</span>
                            for Global Leaders
                        </motion.h1>
                    </motion.div>

                    {/* Description: Tighter Spacing */}
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mt-6 text-base leading-relaxed text-[#64748b] sm:text-lg max-w-2xl font-medium"
                    >
                        We translate complex business logic into high-frequency digital systems.
                        No fluff. No decorators. Just scalable growth infrastructure.
                    </motion.p>

                    {/* Primary Actions: Modern & Professional */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
                    >
                        <Link href="/contact" className="w-full sm:w-auto">
                            <Button
                                size="lg"
                                className="group relative overflow-hidden h-12 w-full sm:w-auto rounded-full bg-[#0f172a] px-8 text-sm font-bold text-white transition-all hover:bg-[#2563eb] hover:shadow-xl hover:shadow-blue-500/20"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    Start Engineering
                                    <MoveRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </span>
                            </Button>
                        </Link>

                        <Link href="/portfolio" className="w-full sm:w-auto">
                            <Button
                                size="lg"
                                variant="outline"
                                className="h-12 w-full sm:w-auto rounded-full border-slate-200 bg-white/50 backdrop-blur-md px-8 text-sm font-bold text-[#1e293b] hover:bg-slate-50 transition-all"
                            >
                                Technical Portfolio
                            </Button>
                        </Link>
                    </motion.div>

                    {/* Functional Stats: Built for Trust */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-8 border-y border-dashed border-slate-200 py-6 w-full"
                    >
                        <div>
                            <p className="text-2xl font-bold text-[#0f172a]">99.8%</p>
                            <p className="text-[10px] font-bold uppercase tracking-wider text-[#94a3b8]">Uptime Ratio</p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-[#0f172a]">24/7</p>
                            <p className="text-[10px] font-bold uppercase tracking-wider text-[#94a3b8]">Support Latency</p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-[#0f172a]">2x</p>
                            <p className="text-[10px] font-bold uppercase tracking-wider text-[#94a3b8]">Revenue Growth</p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-[#0f172a]">12+</p>
                            <p className="text-[10px] font-bold uppercase tracking-wider text-[#94a3b8]">Global Systems</p>
                        </div>
                    </motion.div>

                    {/* Trust Bar */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="mt-12 w-full"
                    >
                        <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.2em] text-[#cbd5e1]">
                            Deployed for market leaders
                        </p>
                        <div className="opacity-60 hover:opacity-100 transition-opacity">
                            <ClientsSlider />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Corner Indicators: Purely Aesthetic Engineering Marks */}
            <div className="absolute top-10 left-10 w-8 h-8 border-t border-l border-slate-200 pointer-events-none hidden md:block" />
            <div className="absolute bottom-10 right-10 w-8 h-8 border-b border-r border-slate-200 pointer-events-none hidden md:block" />
        </section>
    )
}
