"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import {
    ArrowUpRight,
    Play,
    ChevronLeft,
    ChevronRight,
    Zap,
    Code2,
    Cpu,
    Shield,
    Globe,
    Activity
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const slides = [
    {
        id: 1,
        badge: "STRATEGIC_FRAMEWORK_v4",
        title: "ENGINEERING",
        subtitle: "SCALABLE_GROWTH",
        description: "We architect high-performance digital systems that transform complex business challenges into streamlined revenue engines with scientific precision.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80",
        accentColor: "sky-500",
        icon: Cpu,
        diagonal: "polygon(0 0, 75% 0, 55% 100%, 0 100%)",
        id_code: "SYS_001_ALPHA"
    },
    {
        id: 2,
        badge: "INFRASTRUCTURE_MODULE",
        title: "TECHNICAL",
        subtitle: "INFRASTRUCTURE",
        description: "Deploying enterprise-grade architecture engineered for absolute stability, global availability, and impenetrable security protocols.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80",
        accentColor: "sky-500",
        icon: Code2,
        diagonal: "polygon(0 0, 65% 0, 45% 100%, 0 100%)",
        id_code: "SYS_002_BETA"
    },
    {
        id: 3,
        badge: "DEPLOYMENT_STRATEGY",
        title: "DIGITAL",
        subtitle: "DOMINANCE",
        description: "Executing data-driven marketing logic that bypasses traditional inefficiencies to capture market share with high-velocity precision.",
        image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=1920&q=80",
        accentColor: "sky-500",
        icon: Zap,
        diagonal: "polygon(0 0, 70% 0, 50% 100%, 0 100%)",
        id_code: "SYS_003_GAMMA"
    },
]

export default function HeroSlider() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [direction, setDirection] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setDirection(1)
            setCurrentSlide((prev) => (prev + 1) % slides.length)
        }, 8000)
        return () => clearInterval(timer)
    }, [])

    const goToSlide = (index: number) => {
        setDirection(index > currentSlide ? 1 : -1)
        setCurrentSlide(index)
    }

    const nextSlide = () => {
        setDirection(1)
        setCurrentSlide((prev) => (prev + 1) % slides.length)
    }

    const prevSlide = () => {
        setDirection(-1)
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    }

    const current = slides[currentSlide] || slides[0]
    const Icon = current.icon

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? "20%" : "-20%",
            opacity: 0,
            scale: 1.1
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1,
            transition: {
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1] as any
            }
        },
        exit: (direction: number) => ({
            x: direction > 0 ? "-10%" : "10%",
            opacity: 0,
            transition: {
                duration: 0.8,
                ease: "easeIn" as any
            }
        }),
    }

    return (
        <section className="relative h-screen w-full overflow-hidden bg-zinc-950 text-white">

            {/* BACKGROUND IMAGES WITH ANIMATION */}
            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    key={current.id}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="absolute inset-0 z-0"
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center brightness-[0.3] scale-105"
                        style={{ backgroundImage: `url(${current.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/40 to-transparent" />
                </motion.div>
            </AnimatePresence>

            {/* DIAGONAL TRAPEZOID OVERLAY */}
            <AnimatePresence initial={false}>
                <motion.div
                    key={`diagonal-${current.id}`}
                    initial={{ x: "-100%" }}
                    animate={{ x: "0%" }}
                    exit={{ x: "-100%" }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 z-10 hidden lg:block bg-zinc-950/20 backdrop-blur-[2px]"
                    style={{ clipPath: current.diagonal }}
                >
                    {/* Technical Grid Texture */}
                    <div
                        className="absolute inset-0 opacity-[0.03]"
                        style={{
                            backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
                            backgroundSize: "30px 30px",
                        }}
                    />

                    {/* Skewed Accent Line */}
                    <div className="absolute top-0 right-0 w-[1px] h-full bg-sky-500/20 shadow-[0_0_20px_rgba(14,165,233,0.3)]" />
                </motion.div>
            </AnimatePresence>

            {/* MAIN CONTENT CONTAINER */}
            <div className="relative z-20 mx-auto h-full max-w-7xl px-10 flex items-center pt-12">

                <div className="w-full flex flex-col lg:flex-row lg:justify-between lg:items-center">

                    {/* LEFT CONTENT */}
                    <div className="max-w-xl lg:max-w-2xl flex flex-col items-start gap-6">

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={current.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.5 }}
                                className="flex flex-col gap-4"
                            >
                                {/* BADGE MODULE */}
                                <div className="flex items-center gap-4">
                                    <div className="h-10 w-10 bg-zinc-900 border border-sky-500/30 flex items-center justify-center -skew-x-[12deg] shadow-lg shadow-sky-500/5">
                                        <Icon className="h-5 w-5 text-sky-500 skew-x-[12deg]" />
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="h-[2px] w-12 bg-sky-500 mb-1" />
                                        <span className="text-sky-500 font-black italic tracking-[0.2em] text-[10px] uppercase">
                                            {current.badge}
                                        </span>
                                    </div>
                                </div>

                                {/* HEADLINES - 20% REDUCED SIZE */}
                                <div className="space-y-1">
                                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black italic tracking-tighter leading-[0.95] text-white uppercase">
                                        {current.title}
                                    </h1>
                                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black italic tracking-tighter leading-[0.95] text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-sky-600 uppercase">
                                        {current.subtitle}
                                    </h1>
                                </div>

                                {/* DESCRIPTION */}
                                <p className="text-zinc-400 italic text-[14px] sm:text-[16px] max-w-lg leading-relaxed border-l-2 border-sky-500/20 pl-6 mt-2 uppercase tracking-wide">
                                    {current.description}
                                </p>

                                {/* CTA ACTIONS */}
                                <div className="flex flex-col sm:flex-row items-start gap-4 mt-6">
                                    <Link href="/contact">
                                        <Button
                                            className="relative h-14 px-10 bg-sky-500 hover:bg-white text-zinc-950 font-black italic uppercase tracking-[0.2em] text-[11px] transition-all duration-300 group overflow-hidden border-0 rounded-none shadow-xl shadow-sky-500/10"
                                            style={{ clipPath: "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)" }}
                                        >
                                            <span className="relative z-10 flex items-center gap-2">
                                                INITIALIZE_PROJECT <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                                            </span>
                                            <div className="absolute inset-0 bg-white/40 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12 opacity-0 group-hover:opacity-100" />
                                        </Button>
                                    </Link>

                                    <div
                                        className="flex items-center gap-4 px-6 py-4 border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm cursor-pointer hover:bg-zinc-800 transition-all duration-300 group rounded-none"
                                        style={{ clipPath: "polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%)" }}
                                    >
                                        <div className="h-8 w-8 bg-zinc-950 border border-sky-500/20 flex items-center justify-center -skew-x-[12deg] group-hover:border-sky-500 group-hover:bg-sky-500 transition-all duration-300">
                                            <Play className="h-3 w-3 fill-sky-500 text-sky-500 skew-x-[12deg] group-hover:fill-zinc-950 group-hover:text-zinc-950" />
                                        </div>
                                        <span className="text-[10px] font-black italic text-zinc-400 tracking-[0.2em] group-hover:text-white transition-colors uppercase">
                                            VIEW_OPERATIONS
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* RIGHT SIDE - TECHNICAL METRIC INDICATORS */}
                    <div className="hidden lg:flex flex-col items-end gap-10">
                        {slides.map((slide, index) => (
                            <button
                                key={slide.id}
                                onClick={() => goToSlide(index)}
                                className={cn(
                                    "group relative flex items-center gap-6 transition-all duration-500",
                                    index === currentSlide ? "opacity-100" : "opacity-30 hover:opacity-60"
                                )}
                            >
                                <div className="flex flex-col items-end">
                                    <span className="text-[10px] font-mono text-sky-500 tracking-tighter">{slide.id_code}</span>
                                    <span className="text-[11px] font-black italic uppercase tracking-widest text-white">{slide.title}</span>
                                </div>
                                <div className={cn(
                                    "h-14 w-1 flex items-start justify-center transition-all duration-500",
                                    index === currentSlide ? "bg-sky-500 scale-y-100" : "bg-zinc-800 scale-y-50"
                                )}>
                                    {index === currentSlide && (
                                        <motion.div
                                            layoutId="heroIndicator"
                                            className="h-2 w-4 bg-sky-500 absolute -right-1"
                                            style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%)" }}
                                        />
                                    )}
                                </div>
                            </button>
                        ))}
                    </div>

                </div>

            </div>

            {/* NAVIGATION MODULE (Bottom Left) */}
            <div className="absolute bottom-10 left-10 flex items-center gap-6 z-30">
                <div className="flex items-center gap-2">
                    <button
                        onClick={prevSlide}
                        className="group h-10 w-10 border border-zinc-800 hover:border-sky-500 flex items-center justify-center transition-all bg-zinc-950/50 -skew-x-[12deg]"
                    >
                        <ChevronLeft className="h-4 w-4 text-zinc-500 group-hover:text-sky-500 skew-x-[12deg]" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="group h-10 w-10 border border-zinc-800 hover:border-sky-500 flex items-center justify-center transition-all bg-zinc-950/50 -skew-x-[12deg]"
                    >
                        <ChevronRight className="h-4 w-4 text-zinc-500 group-hover:text-sky-500 skew-x-[12deg]" />
                    </button>
                </div>

                <div className="flex flex-col">
                    <div className="flex items-baseline gap-1">
                        <span className="text-xl font-black italic text-white leading-none">0{currentSlide + 1}</span>
                        <span className="text-[10px] font-mono text-zinc-600 leading-none">/ 0{slides.length}</span>
                    </div>
                    <div className="w-24 h-[2px] bg-zinc-800 mt-2 overflow-hidden">
                        <motion.div
                            key={currentSlide}
                            initial={{ x: "-100%" }}
                            animate={{ x: "0%" }}
                            transition={{ duration: 8, ease: "linear" }}
                            className="h-full bg-sky-500 w-full"
                        />
                    </div>
                </div>
            </div>

            {/* LIVE DATA STREAM (Bottom Center) */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden xl:flex items-center gap-12 text-zinc-500 z-30 pointer-events-none">
                <div className="flex items-center gap-3">
                    <Activity className="h-3 w-3 text-sky-500 animate-pulse" />
                    <span className="text-[9px] font-black italic uppercase tracking-[0.3em]">System_Pulse_Active</span>
                </div>
                <div className="flex items-center gap-3">
                    <Globe className="h-3 w-3 text-sky-500" />
                    <span className="text-[9px] font-black italic uppercase tracking-[0.3em]">Latency: 12ms</span>
                </div>
                <div className="flex items-center gap-3">
                    <Shield className="h-3 w-3 text-sky-500" />
                    <span className="text-[9px] font-black italic uppercase tracking-[0.3em]">Security: Grade_AA</span>
                </div>
            </div>

            {/* RADIAL SCAN ANIMATION */}
            <motion.div
                animate={{
                    opacity: [0, 0.2, 0],
                    y: ["0%", "100%", "0%"]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-transparent via-sky-500/5 to-transparent h-20 w-full"
            />

        </section>
    )
}