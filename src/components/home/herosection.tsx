"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion"
import { MoveRight, Activity, Cpu, Globe, Shield, Zap, Server } from "lucide-react"
import { Button } from "@/components/ui/button"

function NetworkCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext("2d")
        if (!ctx) return

        let width = canvas.width = canvas.parentElement?.clientWidth || 600
        let height = canvas.height = canvas.parentElement?.clientHeight || 600

        // Configuration
        const sphereRadius = Math.min(width, height) * 0.35
        const particleCount = 200
        const connectionDistance = 100
        const rotationSpeed = 0.002

        // State w/ explicit typing
        const nodes: { x: number; y: number; z: number; baseX: number; baseY: number; baseZ: number; phase: number }[] = []
        const dataPackets: { fromIndex: number; toIndex: number; progress: number; speed: number }[] = []

        // Initialize Nodes on a Sphere using Fibonacci Sphere algorithm
        const phi = Math.PI * (3 - Math.sqrt(5))
        for (let i = 0; i < particleCount; i++) {
            const y = 1 - (i / (particleCount - 1)) * 2
            const radius = Math.sqrt(1 - y * y)
            const theta = phi * i

            const x = Math.cos(theta) * radius
            const z = Math.sin(theta) * radius

            nodes.push({
                x: x * sphereRadius,
                y: y * sphereRadius,
                z: z * sphereRadius,
                baseX: x * sphereRadius,
                baseY: y * sphereRadius,
                baseZ: z * sphereRadius,
                phase: Math.random() * Math.PI * 2
            })
        }

        let rotationY = 0
        let rotationX = 0.2 // Tilt

        const resize = () => {
            width = canvas.width = canvas.parentElement?.clientWidth || 600
            height = canvas.height = canvas.parentElement?.clientHeight || 600
        }
        window.addEventListener("resize", resize)

        const animate = () => {
            if (!ctx) return
            ctx.clearRect(0, 0, width, height)

            // Auto Rotate
            rotationY += rotationSpeed

            // Center Origin
            const cx = width / 2
            const cy = height / 2

            // Update & Project Nodes
            const projectedNodes: { x: number; y: number; scale: number; z: number; index: number }[] = []

            nodes.forEach((node, i) => {
                // Rotation Matrix Y
                let x1 = node.baseX * Math.cos(rotationY) - node.baseZ * Math.sin(rotationY)
                let z1 = node.baseZ * Math.cos(rotationY) + node.baseX * Math.sin(rotationY)

                // Rotation Matrix X (Tilt)
                let y1 = node.baseY * Math.cos(rotationX) - z1 * Math.sin(rotationX)
                let z2 = z1 * Math.cos(rotationX) + node.baseY * Math.sin(rotationX)

                // 3D wiggle
                node.phase += 0.02
                // x1 += Math.sin(node.phase) * 2

                // Projection
                const perspective = 800
                const scale = perspective / (perspective + z2)
                const x2D = cx + x1 * scale
                const y2D = cy + y1 * scale

                // Store projected
                projectedNodes.push({ x: x2D, y: y2D, scale, z: z2, index: i })

                // Draw Node
                const alpha = Math.max(0, (scale - 0.5) * 2) // Fade distant nodes
                if (alpha > 0) {
                    ctx.beginPath()
                    ctx.fillStyle = `rgba(14, 165, 233, ${alpha})`
                    ctx.arc(x2D, y2D, 1.5 * scale, 0, Math.PI * 2)
                    ctx.fill()
                }
            })

            // Draw Connections
            ctx.strokeStyle = "rgba(14, 165, 233, 0.15)"
            ctx.lineWidth = 1

            // Helper to find nearest neighbors quickly? O(N^2) is fine for N=200
            for (let i = 0; i < projectedNodes.length; i++) {
                const nodeA = projectedNodes[i]
                if (nodeA.z < -sphereRadius * 0.5) continue // Optimization: Don't draw connections for back-facing nodes

                let connectionsDef = 0
                for (let j = i + 1; j < projectedNodes.length; j++) {
                    const nodeB = projectedNodes[j]
                    const dist = Math.hypot(nodeA.x - nodeB.x, nodeA.y - nodeB.y)

                    if (dist < 60 * nodeA.scale) {
                        // Interactive chance to spawn packet
                        if (Math.random() < 0.0005) {
                            dataPackets.push({
                                fromIndex: i,
                                toIndex: j,
                                progress: 0,
                                speed: 0.02 + Math.random() * 0.03
                            })
                        }

                        ctx.beginPath()
                        ctx.moveTo(nodeA.x, nodeA.y)
                        ctx.lineTo(nodeB.x, nodeB.y)
                        ctx.stroke()
                        connectionsDef++
                        if (connectionsDef > 3) break; // Limit connections
                    }
                }
            }

            // Draw Data Packets
            for (let i = dataPackets.length - 1; i >= 0; i--) {
                const pkt = dataPackets[i]
                pkt.progress += pkt.speed
                if (pkt.progress >= 1) {
                    dataPackets.splice(i, 1)
                    continue
                }

                const nA = projectedNodes.find(n => n.index === pkt.fromIndex)
                const nB = projectedNodes.find(n => n.index === pkt.toIndex)

                if (nA && nB) {
                    const px = nA.x + (nB.x - nA.x) * pkt.progress
                    const py = nA.y + (nB.y - nA.y) * pkt.progress

                    ctx.beginPath()
                    ctx.fillStyle = "#fff"
                    ctx.shadowBlur = 4
                    ctx.shadowColor = "#38bdf8"
                    ctx.arc(px, py, 2 * ((nA.scale + nB.scale) / 2), 0, Math.PI * 2)
                    ctx.fill()
                    ctx.shadowBlur = 0
                }
            }

            requestAnimationFrame(animate)
        }

        const animationId = requestAnimationFrame(animate)
        return () => {
            cancelAnimationFrame(animationId)
            window.removeEventListener("resize", resize)
        }
    }, [])

    return <canvas ref={canvasRef} className="w-full h-full opacity-80" />
}

export default function HeroSection() {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] })

    const yHero = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
    const opacityHero = useTransform(scrollYProgress, [0, 0.5], [1, 0])

    // Specific tech items to animate
    const techItems = [
        { label: "AI_ARCHITECTURE", icon: Cpu },
        { label: "GLOBAL_SCALE", icon: Globe },
        { label: "SECURE_CORE", icon: Shield },
        { label: "HIGH_FREQ", icon: Zap },
    ]

    return (
        <section
            ref={containerRef}
            className="relative min-h-[100vh] bg-[#020617] overflow-hidden flex flex-col pt-24 pb-12"
        >
            {/* --- BACKGROUND GRIDS & LAYERS --- */}
            {/* Large Diagonal Split Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-0 right-0 w-[60%] h-full bg-[#0f172a]/40 skew-x-[-15deg] origin-top translate-x-[20%]"
                    style={{ borderLeft: '1px solid rgba(255,255,255,0.03)' }}
                />
            </div>

            {/* Subtle Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)] pointer-events-none" />

            {/* Glowing Orbs for ambiance */}
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-sky-900/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[10%] right-[-5%] w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="container relative z-10 mx-auto px-6 h-full flex flex-col lg:flex-row items-center justify-between gap-12 flex-1">

                {/* --- LEFT CONTENT: ENGINEERING AUTHORITY --- */}
                <motion.div
                    style={{ y: yHero }}
                    className="w-full lg:w-1/2 flex flex-col items-start text-left z-20"
                >
                    {/* Status Indicator */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center gap-3 mb-8 border border-sky-500/20 bg-sky-500/5 backdrop-blur-sm px-4 py-1.5 rounded-full"
                    >
                        <div className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                        </div>
                        <span className="text-[10px] font-mono font-medium text-sky-400 tracking-wider">
                            SYSTEMS_OPTIMIZED v2.0
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-5xl md:text-7xl lg:text-[5.5rem] font-[800] tracking-tight leading-[0.95] text-white mb-8"
                    >
                        ENGINEERING <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500">
                            INTELLIGENCE
                        </span> <br />
                        AT SCALE.
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-slate-400 text-lg md:text-xl font-light leading-relaxed max-w-lg mb-10 border-l-2 border-slate-700 pl-6"
                    >
                        We architect high-frequency digital infrastructure and intelligent systems that power global growth. Precision engineering for the modern enterprise.
                    </motion.p>

                    {/* CTA Layout */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="flex flex-col sm:flex-row items-center gap-6"
                    >
                        <Link href="/contact">
                            <Button
                                size="lg"
                                className="h-14 px-10 bg-white text-black hover:bg-sky-500 hover:text-white rounded-none skew-x-[-10deg] transition-all group"
                            >
                                <span className="skew-x-[10deg] font-bold tracking-widest uppercase text-xs flex items-center gap-2">
                                    Initialize Protocol
                                    <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </Button>
                        </Link>

                        <div className="flex items-center gap-6">
                            {/* Mini Tech Stats */}
                            <div className="flex flex-col">
                                <span className="text-[10px] font-mono text-slate-500 uppercase">Latency</span>
                                <span className="text-white font-mono font-bold text-sm">&lt; 25ms</span>
                            </div>
                            <div className="w-[1px] h-8 bg-slate-800" />
                            <div className="flex flex-col">
                                <span className="text-[10px] font-mono text-slate-500 uppercase">Uptime</span>
                                <span className="text-sky-400 font-mono font-bold text-sm">99.99%</span>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* --- RIGHT CONTENT: VISUALIZATION --- */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.2 }}
                    className="w-full lg:w-1/2 h-[500px] lg:h-[700px] relative flex items-center justify-center lg:justify-end"
                >
                    {/* Visual Container with Diagonal Mask */}
                    <div className="relative w-full h-full max-w-[800px] max-h-[800px]">

                        {/* The Canvas Animation */}
                        <div className="absolute inset-0 z-10">
                            <NetworkCanvas />
                        </div>

                        {/* Floating Tech Badges (Particles) */}
                        {techItems.map((item, i) => (
                            <motion.div
                                key={item.label}
                                className="absolute p-3 bg-[#020617]/80 backdrop-blur border border-sky-500/30 flex items-center gap-3 rounded-sm z-20 shadow-[0_0_30px_rgba(14,165,233,0.15)]"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{
                                    opacity: 1,
                                    x: 0,
                                    y: [0, -10, 0]
                                }}
                                transition={{
                                    delay: 0.8 + (i * 0.2),
                                    duration: 0.5,
                                    y: {
                                        duration: 3 + i,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }
                                }}
                                style={{
                                    top: `${20 + i * 20}%`,
                                    right: `${5 + (i % 2) * 10}%`,
                                }}
                            >
                                <item.icon className="w-4 h-4 text-sky-400" />
                                <span className="text-[10px] font-black text-slate-200 tracking-widest">{item.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

            </div>

            {/* --- FOOTER / SCROLL INDICATOR --- */}
            <div className="absolute bottom-0 w-full border-t border-white/5 bg-[#020617]/80 backdrop-blur-sm z-30">
                <div className="container mx-auto px-6 h-12 flex items-center justify-between text-[10px] font-mono text-slate-500">
                    <div className="flex items-center gap-4">
                        <span className="text-sky-500">///</span>
                        <span>SYSTEM_ID: CRUX_MAINNET</span>
                    </div>
                    <div className="hidden md:flex items-center gap-12">
                        <span>DATA_FLOW: NORMAL</span>
                        <span>ENCRYPTION: AES-256</span>
                        <span>NODES: ACTIVE</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span>SCROLL_TO_EXPLORE</span>
                        <div className="w-1 h-3 bg-sky-900 rounded-full overflow-hidden">
                            <motion.div
                                animate={{ y: ["-100%", "100%"] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                className="w-full h-full bg-sky-500"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
