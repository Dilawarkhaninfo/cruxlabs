"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useSpring, useTransform, useMotionValueEvent } from "framer-motion"
import { Terminal, Shield, Cpu, Activity } from "lucide-react"

export default function GlobalEffects() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const { scrollYProgress } = useScroll()

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })

    const [percent, setPercent] = useState(0)

    useMotionValueEvent(scrollYProgress, "change", (latest: number) => {
        setPercent(Math.round(latest * 100))
    })

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
        }
        window.addEventListener("mousemove", updateMousePosition)
        return () => window.removeEventListener("mousemove", updateMousePosition)
    }, [])

    return (
        <>
            {/* TECHNICAL PROGRESS HUD (TOP FIXED) */}
            <div className="fixed top-0 left-0 right-0 z-[9999] pointer-events-none">
                {/* Scroll Progress Bar - Refined */}
                <motion.div
                    className="h-[2px] bg-sky-500 origin-left shadow-[0_0_10px_rgba(14,165,233,0.5)]"
                    style={{ scaleX }}
                />

                {/* Scroll Percentage Marker */}
                <div className="absolute top-2 right-6 flex items-center gap-4">
                    <div className="flex flex-col items-end">
                        <span className="text-[9px] font-black italic text-sky-500 uppercase tracking-widest leading-none">TRAVERSAL_OFFSET</span>
                        <motion.span className="text-[10px] font-mono text-zinc-500 font-bold mt-1">
                            {percent}%
                        </motion.span>
                    </div>
                </div>

                {/* Left Side Status Trace */}
                <div className="absolute top-2 left-6 flex items-center gap-4 opacity-40">
                    <div className="h-6 w-6 bg-zinc-950 border border-sky-500/30 flex items-center justify-center -skew-x-[12deg]">
                        <Activity className="h-3 w-3 text-sky-500 skew-x-[12deg]" />
                    </div>
                    <span className="text-[9px] font-black italic text-zinc-400 uppercase tracking-[0.3em]">
                        SYSTEM_LINK_STABLE
                    </span>
                </div>
            </div>

            {/* GLOBAL MOUSE SPOTLIGHT (TECHNICAL FLARE) */}
            <div
                className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300 hidden lg:block"
                style={{
                    background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(14, 165, 233, 0.04), transparent 50%)`
                }}
            />

            {/* SYSTEM NOISE TEXTURE OVERLAY */}
            <div className="fixed inset-0 pointer-events-none z-[9998] opacity-[0.015] mix-blend-overlay">
                <svg className="w-full h-full">
                    <filter id="noiseFilter">
                        <feTurbulence
                            type="fractalNoise"
                            baseFrequency="0.6"
                            numOctaves="3"
                            stitchTiles="stitch"
                        />
                    </filter>
                    <rect width="100%" height="100%" filter="url(#noiseFilter)" />
                </svg>
            </div>

            {/* SIDE MARKINGS (GLOBAL) */}
            <div className="fixed top-1/2 left-0 -translate-y-1/2 z-[80] pointer-events-none hidden xl:block">
                <div className="text-[9px] font-mono text-zinc-600 tracking-[1.5em] vertical-rl uppercase rotate-180 opacity-20 italic">
                    CRUX_RUNTIME_v4.2_ENGINE
                </div>
            </div>

            {/* SCAN LINE ANIMATION (SUBTLE) */}
            <motion.div
                animate={{ y: ["-100%", "200%"] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="fixed left-0 top-0 w-full h-[30vh] bg-gradient-to-b from-transparent via-sky-500/1 to-transparent z-[90] pointer-events-none"
            />
        </>
    )
}
