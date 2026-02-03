"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion"
import { MoveRight, Activity, Server, Database } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

// --- Expert Visual Components ---

function GridBackground() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none">
            {/* Dynamic skewed grid */}
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: `linear-gradient(to right, #334155 1px, transparent 1px),
                                     linear-gradient(to bottom, #334155 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                    transform: 'perspective(1000px) rotateX(60deg) scale(2)',
                    transformOrigin: 'top center',
                    maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)'
                }}
            />
            {/* Radial glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(14,165,233,0.15),transparent_70%)]" />
        </div>
    )
}

function FloatingParticles() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext("2d")
        if (!ctx) return

        let width = canvas.width = window.innerWidth
        let height = canvas.height = window.innerHeight

        // Expert mode: fewer, sharper particles
        const particleCount = 40
        const particles: { x: number, y: number, speed: number, length: number }[] = []

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                speed: Math.random() * 2 + 1,
                length: Math.random() * 20 + 5
            })
        }

        const animate = () => {
            if (!ctx) return
            ctx.clearRect(0, 0, width, height)
            ctx.fillStyle = 'rgba(56, 189, 248, 0.3)' // Sky-400 equivalent

            particles.forEach(p => {
                p.y += p.speed
                if (p.y > height) p.y = 0

                ctx.fillRect(p.x, p.y, 1, p.length)
            })
            requestAnimationFrame(animate)
        }

        const animationId = requestAnimationFrame(animate)
        const handleResize = () => {
            width = canvas.width = window.innerWidth
            height = canvas.height = window.innerHeight
        }
        window.addEventListener('resize', handleResize)
        return () => {
            cancelAnimationFrame(animationId)
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-40 z-0" />
}

export default function HeroSection() {
    const containerRef = useRef<HTMLElement>(null)
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] })

    // Mouse Interaction for 3D Tilt
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)
    const springConfig = { damping: 25, stiffness: 150 }
    const tiltX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), springConfig)
    const tiltY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), springConfig)

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { innerWidth, innerHeight } = window
            mouseX.set((e.clientX / innerWidth) - 0.5)
            mouseY.set((e.clientY / innerHeight) - 0.5)
        }
        window.addEventListener("mousemove", handleMouseMove)
        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [mouseX, mouseY])

    const expertSystems = [
        { id: 1, title: "CORE_ANALYTICS", status: "ONLINE", img: "/hero-image-1.jpg", pos: "left-[5%] top-[20%]" },
        { id: 2, title: "NETWORK_GRID", status: "ACTIVE", img: "/hero-image-2.jpg", pos: "right-[5%] top-[15%]" },
        { id: 3, title: "SECURITY_MAIN", status: "LOCKED", img: "/hero-image-3.jpg", pos: "left-[15%] bottom-[15%]" },
        { id: 4, title: "DATA_STREAM", status: "SYNCING", img: "/hero-image-4.jpg", pos: "right-[15%] bottom-[20%]" },
        { id: 5, title: "CLOUD_NODE", status: "HEALTHY", img: "/hero-image-5.jpg", pos: "left-[50%] -translate-x-1/2 bottom-[10%]" },
    ]

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen bg-[#020617] overflow-hidden flex flex-col items-center justify-center pt-10"
        >
            <GridBackground />
            <FloatingParticles />

            {/* --- Diagonal Expert Systems Layer --- */}
            <div className="absolute inset-0 z-10 perspective-[2000px] pointer-events-none hidden lg:block">
                <motion.div
                    style={{ rotateX: tiltX, rotateY: tiltY }}
                    className="w-full h-full relative preserve-3d"
                >
                    {expertSystems.map((sys, i) => (
                        <motion.div
                            key={sys.id}
                            className={`absolute ${sys.pos} w-[240px] md:w-[280px] aspect-video group`}
                            initial={{ opacity: 0, scale: 0, y: 100 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ delay: 0.5 + (i * 0.1), duration: 0.8, ease: "backOut" }}
                        >
                            {/* System Card Container with Diagonal Styling */}
                            <div className="relative w-full h-full bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-lg overflow-hidden transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(14,165,233,0.3)] will-change-transform">

                                {/* Header Bar */}
                                <div className="absolute top-0 left-0 right-0 h-8 bg-slate-950/80 border-b border-slate-700 flex items-center justify-between px-3 z-20">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                        <span className="text-[10px] font-mono text-sky-400 tracking-wider font-bold">{sys.title}</span>
                                    </div>
                                    <span className="text-[9px] font-mono text-slate-500">{sys.status}</span>
                                </div>

                                {/* Diagonal Scanline Overlay */}
                                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent,rgba(255,255,255,0.03),transparent)] z-20 bg-[length:200%_200%] animate-shine pointer-events-none" />

                                {/* Image Content */}
                                <div className="relative w-full h-full pt-8">
                                    <Image
                                        src={sys.img}
                                        alt={sys.title}
                                        fill
                                        className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                                    />
                                    {/* Tech Overlay lines */}
                                    <div className="absolute inset-0 border-[0.5px] border-sky-500/10 z-10" />
                                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end z-20">
                                        <div className="flex flex-col gap-0.5">
                                            <div className="h-0.5 w-12 bg-sky-500/50" />
                                            <div className="h-0.5 w-8 bg-sky-500/30" />
                                        </div>
                                        <Activity className="w-4 h-4 text-sky-400/70" />
                                    </div>
                                </div>
                            </div>

                            {/* Decorative angled bracket */}
                            <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-sky-500 rounded-br-lg opacity-0 group-hover:opacity-100 transition-all duration-300" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>


            {/* --- Main Center Content --- */}
            <div className="relative z-30 container mx-auto px-4 flex flex-col items-center text-center">

                {/* Expert Status Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-8 relative group"
                >
                    <div className="absolute inset-0 bg-sky-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative flex items-center gap-3 px-4 py-2 bg-slate-900/60 border border-sky-500/30 rounded-full backdrop-blur-md">
                        <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                        </span>
                        <span className="text-xs font-mono font-bold text-sky-300 tracking-[0.2em] uppercase">
                            System_Architecture v5.0
                        </span>
                    </div>
                </motion.div>

                {/* Hero Typing Heading */}
                <motion.h1
                    initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
                    animate={{ opacity: 1, clipPath: 'inset(0 0% 0 0)' }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter leading-[0.9] mb-8 relative z-30"
                >
                    <span className="block drop-shadow-2xl">HYPER</span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-300 to-slate-600">
                        SCALABLE
                    </span>
                    <span className="relative inline-block mt-2 px-1">
                        <span className="relative z-10 bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">LOGIC</span>
                        <div className="absolute -inset-2 -skew-x-12 bg-blue-900/20 -z-10 border border-blue-500/20 rounded-sm" />
                    </span>
                </motion.h1>


                {/* Interactive CTA Cluster */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center gap-6"
                >
                    <Link href="/contact">
                        <Button className="h-14 px-8 bg-sky-500 hover:bg-sky-600 text-white rounded-none -skew-x-12 group relative overflow-hidden transition-all shadow-[0_0_40px_rgba(14,165,233,0.3)]">
                            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                            <div className="flex items-center gap-3 skew-x-12">
                                <span className="font-bold tracking-widest text-sm uppercase">Initialize</span>
                                <MoveRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Button>
                    </Link>

                    <Button variant="outline" className="h-14 px-8 border-slate-700 hover:border-sky-500/50 bg-slate-950/50 text-slate-300 rounded-none -skew-x-12 group transition-all">
                        <div className="skew-x-12 flex items-center gap-3">
                            <Server className="w-4 h-4 text-slate-500 group-hover:text-sky-400 transition-colors" />
                            <span className="font-mono text-xs">VIEW_DOCS</span>
                        </div>
                    </Button>
                </motion.div>
            </div>

            {/* --- Improved Footer / Status Bar --- */}
            <div className="absolute bottom-0 w-full z-40">
                {/* Tech Ticker */}
                <div className="w-full h-12 bg-[#000510]/95 border-t border-slate-800 flex items-center overflow-hidden">
                    <div className="container mx-auto px-4 flex justify-between items-center text-[10px] font-mono text-slate-500">
                        {/* Left Status */}
                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-2 text-emerald-500">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                <span>ALL_SYSTEMS_GO</span>
                            </div>
                            <span className="hidden sm:inline text-slate-700 text-xs">|</span>
                            <span className="hidden sm:flex items-center gap-2">
                                <Database className="w-3 h-3 text-slate-600" />
                                <span>DB_SHARD_01: ACTIVE</span>
                            </span>
                        </div>

                        {/* Center Ticker (Mobile Hidden) */}
                        <div className="hidden lg:flex items-center gap-12 opacity-50">
                            <span>ENCRYPTION: QUANTUM_SAFE</span>
                            <span>LATENCY: 12ms</span>
                            <span>NODES: 4,096</span>
                        </div>

                        {/* Right Controls */}
                        <div className="flex items-center gap-4">
                            <span className="text-slate-600 cursor-pointer hover:text-sky-400 transition-colors">CONFIG</span>
                            <div className="w-[1px] h-4 bg-slate-800" />
                            <span className="text-slate-600 cursor-pointer hover:text-sky-400 transition-colors">TERMINAL</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}