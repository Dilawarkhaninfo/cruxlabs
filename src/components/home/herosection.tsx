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
    Sparkles,
    Rocket,
    Code2,
    Lightbulb
} from "lucide-react"
import { Button } from "@/components/ui/button"

const slides = [
    {
        id: 1,
        badge: "Next_Gen_Systems",
        title: "DIGITAL",
        subtitle: "VELOCITY",
        description: "Architecting the infrastructure of tomorrow. We build hyper-scalable platforms designed for speed, security, and absolute dominance.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80",
        gradient: "from-sky-400 to-white",
        accentColor: "sky-500",
        icon: Zap,
        diagonal: "polygon(0 0, 75% 0, 55% 100%, 0 100%)",
    },
    {
        id: 2,
        badge: "Innovation_Unleashed",
        title: "CREATIVE",
        subtitle: "MASTERY",
        description: "Transform vision into reality with cutting-edge design systems. We craft experiences that captivate, convert, and dominate the digital landscape.",
        image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=1920&q=80",
        gradient: "from-purple-400 to-pink-400",
        accentColor: "purple-500",
        icon: Sparkles,
        diagonal: "polygon(0 0, 65% 0, 45% 100%, 0 100%)",
    },
    {
        id: 3,
        badge: "Performance_Peak",
        title: "BLAZING",
        subtitle: "SPEED",
        description: "Milliseconds matter. Our optimization frameworks deliver lightning-fast performance that leaves competitors in the dust and users amazed.",
        image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=1920&q=80",
        gradient: "from-orange-400 to-red-400",
        accentColor: "orange-500",
        icon: Rocket,
        diagonal: "polygon(0 0, 70% 0, 50% 100%, 0 100%)",
    },
    {
        id: 4,
        badge: "Code_Excellence",
        title: "TECH",
        subtitle: "SUPREMACY",
        description: "Built on enterprise-grade architecture with military-level security. Your digital fortress engineered by the world's elite developers.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80",
        gradient: "from-cyan-400 to-blue-400",
        accentColor: "cyan-500",
        icon: Code2,
        diagonal: "polygon(0 0, 68% 0, 48% 100%, 0 100%)",
    },
    {
        id: 5,
        badge: "Future_Forward",
        title: "RADICAL",
        subtitle: "VISION",
        description: "We don't follow trends—we create them. Pioneering tomorrow's digital experiences with AI-powered solutions and breakthrough innovation.",
        image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=1920&q=80",
        gradient: "from-emerald-400 to-teal-400",
        accentColor: "emerald-500",
        icon: Lightbulb,
        diagonal: "polygon(0 0, 72% 0, 52% 100%, 0 100%)",
    },
]

export default function HeroSlider() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [direction, setDirection] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setDirection(1)
            setCurrentSlide((prev) => (prev + 1) % slides.length)
        }, 7000)
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

    const current = slides[currentSlide]
    const Icon = current.icon

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? "100%" : "-100%",
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            x: direction > 0 ? "-100%" : "100%",
            opacity: 0,
        }),
    }

    return (
        <section className="relative h-screen w-full overflow-hidden bg-[#020617] text-white">

            {/* BACKGROUND IMAGES WITH ANIMATION */}
            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    key={current.id}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 z-0"
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center brightness-50"
                        style={{ backgroundImage: `url(${current.image})` }}
                    />
                    {/* Mobile Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/60 to-transparent lg:hidden" />
                </motion.div>
            </AnimatePresence>

            {/* DIAGONAL OVERLAY WITH GRID TEXTURE */}
            <AnimatePresence initial={false}>
                <motion.div
                    key={`diagonal-${current.id}`}
                    initial={{ x: "-100%" }}
                    animate={{ x: "0%" }}
                    exit={{ x: "-100%" }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 z-10 hidden lg:block bg-[#020617]"
                    style={{ clipPath: current.diagonal }}
                >
                    {/* Radial Grid Texture */}
                    <div
                        className="absolute inset-0 opacity-20"
                        style={{
                            backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
                            backgroundSize: "40px 40px",
                        }}
                    />

                    {/* Accent Glow */}
                    <div
                        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-${current.accentColor}/10 blur-3xl rounded-full`}
                    />
                </motion.div>
            </AnimatePresence>

            {/* MAIN CONTENT CONTAINER */}
            <div className="relative z-20 mx-auto h-full max-w-7xl px-6 flex items-center pt-20">

                <div className="w-full flex flex-col lg:flex-row lg:justify-between lg:items-center gap-8">

                    {/* LEFT CONTENT */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current.id}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -40 }}
                            transition={{ duration: 0.6 }}
                            className="max-w-xl lg:max-w-2xl flex flex-col items-start gap-6 lg:gap-8"
                        >

                            {/* BADGE WITH ICON */}
                            <div className="flex items-center gap-4">
                                <div className={`h-12 w-12 rounded-none bg-${current.accentColor}/20 border border-${current.accentColor}/30 flex items-center justify-center`}
                                    style={{ clipPath: "polygon(20% 0, 100% 0, 80% 100%, 0 100%)" }}
                                >
                                    <Icon className={`h-6 w-6 text-${current.accentColor}`} />
                                </div>
                                <div className="flex flex-col">
                                    <div className={`h-[2px] w-16 bg-${current.accentColor} mb-2`} />
                                    <span className={`text-${current.accentColor} font-bold italic tracking-widest text-xs uppercase`}>
                                        {current.badge}
                                    </span>
                                </div>
                            </div>

                            {/* MAIN HEADLINES - STAGGER ANIMATION */}
                            <div className="space-y-0">
                                <motion.div
                                    initial={{ x: -100, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.2, duration: 0.8 }}
                                    className="overflow-hidden"
                                >
                                    <h1 className="text-6xl sm:text-7xl lg:text-9xl font-black italic tracking-tighter leading-[0.9] text-white">
                                        {current.title}
                                    </h1>
                                </motion.div>

                                <motion.div
                                    initial={{ x: -100, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.4, duration: 0.8 }}
                                    className="overflow-hidden"
                                >
                                    <h1
                                        className={`text-6xl sm:text-7xl lg:text-9xl font-black italic tracking-tighter leading-[0.9] text-transparent bg-clip-text bg-gradient-to-r ${current.gradient}`}
                                    >
                                        {current.subtitle}
                                    </h1>
                                </motion.div>
                            </div>

                            {/* DESCRIPTION */}
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                className={`text-zinc-400 italic text-sm sm:text-lg max-w-lg leading-relaxed border-l-4 border-${current.accentColor}/30 pl-6`}
                            >
                                {current.description}
                            </motion.p>

                            {/* CTA BUTTONS */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.8 }}
                                className="flex flex-col sm:flex-row items-start gap-4 mt-4"
                            >
                                <Link href="/contact">
                                    <Button
                                        className={`relative h-14 px-10 bg-${current.accentColor} hover:bg-white text-white hover:text-black font-black italic uppercase tracking-wider text-xs transition-all duration-300 group overflow-hidden border-0 rounded-none`}
                                        style={{ clipPath: "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)" }}
                                    >
                                        <span className="relative z-10 mr-2">Init_Project</span>
                                        <ArrowUpRight className="relative z-10 h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                                        <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
                                    </Button>
                                </Link>

                                <div
                                    className="hidden sm:flex items-center gap-4 px-6 py-4 border border-white/10 bg-white/5 backdrop-blur-sm cursor-pointer hover:bg-white/10 transition-all duration-300 group rounded-none"
                                    style={{ clipPath: "polygon(8% 0, 100% 0, 92% 100%, 0 100%)" }}
                                >
                                    <div className={`h-10 w-10 rounded-none border-2 border-${current.accentColor}/50 flex items-center justify-center group-hover:bg-${current.accentColor} group-hover:border-${current.accentColor} transition-all duration-300`}>
                                        <Play className={`h-4 w-4 fill-${current.accentColor} text-${current.accentColor} group-hover:fill-white group-hover:text-white transition-colors`} />
                                    </div>
                                    <span className="text-xs font-bold italic text-zinc-300 tracking-wider group-hover:text-white transition-colors">
                                        WATCH_DEMO
                                    </span>
                                </div>
                            </motion.div>

                        </motion.div>
                    </AnimatePresence>

                    {/* RIGHT SIDE - NAVIGATION DOTS (Desktop) */}
                    <div className="hidden lg:flex flex-col items-center gap-6">
                        {slides.map((slide, index) => {
                            const SlideIcon = slide.icon
                            return (
                                <button
                                    key={slide.id}
                                    onClick={() => goToSlide(index)}
                                    className={`group relative transition-all duration-300 ${index === currentSlide ? 'scale-110' : 'scale-100 opacity-60 hover:opacity-100'
                                        }`}
                                >
                                    <div
                                        className={`relative h-16 w-16 flex items-center justify-center border-2 transition-all duration-300 ${index === currentSlide
                                                ? `border-${slide.accentColor} bg-${slide.accentColor}/10`
                                                : 'border-white/20 hover:border-white/40'
                                            }`}
                                        style={{ clipPath: "polygon(25% 0, 100% 0, 75% 100%, 0 100%)" }}
                                    >
                                        <SlideIcon className={`h-7 w-7 transition-colors ${index === currentSlide ? `text-${slide.accentColor}` : 'text-white/60'
                                            }`} />
                                    </div>

                                    {/* Progress Bar */}
                                    {index === currentSlide && (
                                        <motion.div
                                            initial={{ scaleY: 0 }}
                                            animate={{ scaleY: 1 }}
                                            transition={{ duration: 7, ease: "linear" }}
                                            className={`absolute -left-2 top-0 w-1 h-full bg-${slide.accentColor} origin-top`}
                                        />
                                    )}
                                </button>
                            )
                        })}
                    </div>

                </div>

            </div>

            {/* NAVIGATION ARROWS */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 lg:left-10 lg:translate-x-0 flex items-center gap-4 z-30">
                <button
                    onClick={prevSlide}
                    className="group h-12 w-12 border-2 border-white/20 hover:border-white/60 flex items-center justify-center transition-all duration-300 hover:scale-110 rounded-none"
                    style={{ clipPath: "polygon(20% 0, 100% 0, 80% 100%, 0 100%)" }}
                >
                    <ChevronLeft className="h-6 w-6 text-white group-hover:translate-x-[-2px] transition-transform" />
                </button>

                <div className="flex items-center gap-2">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`h-1 transition-all duration-300 ${index === currentSlide
                                    ? `w-12 bg-${current.accentColor}`
                                    : 'w-6 bg-white/30 hover:bg-white/50'
                                }`}
                        />
                    ))}
                </div>

                <button
                    onClick={nextSlide}
                    className="group h-12 w-12 border-2 border-white/20 hover:border-white/60 flex items-center justify-center transition-all duration-300 hover:scale-110 rounded-none"
                    style={{ clipPath: "polygon(20% 0, 100% 0, 80% 100%, 0 100%)" }}
                >
                    <ChevronRight className="h-6 w-6 text-white group-hover:translate-x-[2px] transition-transform" />
                </button>
            </div>

            {/* STATUS BAR (Bottom Right) */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={current.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="absolute bottom-10 right-10 hidden xl:flex items-center gap-4 z-20"
                >
                    <div className="flex flex-col items-end">
                        <span className={`text-xs font-bold italic text-${current.accentColor} tracking-widest`}>
                            SLIDE_{String(currentSlide + 1).padStart(2, '0')}
                        </span>
                        <span className="text-[10px] font-mono text-zinc-500">
                            AUTO_ROTATE: 7s
                        </span>
                    </div>
                    <div className={`h-10 w-[2px] bg-${current.accentColor} rotate-12`} />
                    <Icon className={`h-6 w-6 text-${current.accentColor}`} />
                </motion.div>
            </AnimatePresence>

            {/* DECORATIVE LINE */}
            <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
                className={`absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-${current.accentColor} via-transparent to-transparent z-30`}
            />

        </section>
    )
}