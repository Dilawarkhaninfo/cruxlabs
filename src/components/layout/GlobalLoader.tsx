"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Activity  } from "lucide-react"

export default function GlobalLoader() {
    const [isLoading, setIsLoading] = useState(true)
    const [statusIndex, setStatusIndex] = useState(0)

    const loadingStates = [
        "INITIALIZING_CORE_RUNTIME",
        "MOUNTING_DIAGONAL_MATRIX",
        "ESTABLISHING_SKY_LINK",
        "DECRYPTING_SYSTEM_REGISTRY",
        "OPTIMIZING_RENDER_NODES",
        "SYSTEM_READY_FOR_DEPLOYMENT"
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setStatusIndex((prev) => (prev < loadingStates.length - 1 ? prev + 1 : prev))
        }, 400)

        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 2800)

        return () => {
            clearInterval(interval)
            clearTimeout(timer)
        }
    }, [])

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                    key="loader"
                    className="fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden bg-zinc-950"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.6, delay: 0.8 } }}
                >
                    {/* GLOBAL ENGINEERING GRID */}
                    <div className="absolute inset-0 pointer-events-none opacity-[0.05]"
                        style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

                    {/* INTERACTIVE BACKGROUND ELEMENTS */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <motion.div
                            animate={{ opacity: [0.1, 0.3, 0.1] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-[120px]"
                        />
                        <motion.div
                            animate={{ opacity: [0.1, 0.2, 0.1] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "linear", delay: 1 }}
                            className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-sky-600/5 rounded-full blur-[150px]"
                        />
                    </div>

                    {/* CENTER CONTENT: HUD DESIGN */}
                    <motion.div
                        className="relative z-50 flex flex-col items-center justify-center"
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05, filter: "blur(20px)", transition: { duration: 0.5 } }}
                    >
                        {/* THE CORE LOGO MODULE */}
                        <div className="relative group mb-12">
                            {/* Skewed Frame */}
                            <div className="absolute inset-[-20px] border border-sky-500/20 -skew-x-[12deg] pointer-events-none">
                                <motion.div
                                    animate={{ width: ["0%", "100%", "0%"], left: ["0%", "0%", "100%"] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute top-0 h-[1px] bg-sky-500"
                                />
                                <motion.div
                                    animate={{ height: ["0%", "100%", "0%"], top: ["0%", "0%", "100%"] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                    className="absolute right-0 w-[1px] bg-sky-500"
                                />
                            </div>

                            <div className="relative w-32 h-32 md:w-36 md:h-36 flex items-center justify-center">
                                <Image
                                    src="/logo.png"
                                    alt="CruxLabs"
                                    fill
                                    className="object-contain drop-shadow-[0_0_30px_rgba(14,165,233,0.3)]"
                                    priority
                                />
                            </div>

                            {/* Corner HUD Data */}
                            <div className="absolute -top-4 -right-8">
                                <span className="text-[10px] font-mono text-sky-500 font-bold italic tracking-widest">BOOT_SEQ://0X2A</span>
                            </div>
                            <div className="absolute -bottom-4 -left-8">
                                <span className="text-[10px] font-mono text-zinc-500 italic">ARCH: V4.2_STABLE</span>
                            </div>
                        </div>

                        {/* STATUS MATRIX */}
                        <div className="flex flex-col items-center gap-6">
                            <div className="flex items-center gap-4">
                                <div className="h-10 w-10 bg-zinc-900 border border-sky-500/30 flex items-center justify-center -skew-x-[12deg]">
                                    <Activity className="h-5 w-5 text-sky-500 animate-pulse skew-x-[12deg]" />
                                </div>
                                <div className="flex flex-col">
                                    <div className="h-[2px] w-24 bg-sky-500/20 relative overflow-hidden mb-2">
                                        <motion.div
                                            animate={{ left: ["-100%", "100%"] }}
                                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                            className="absolute inset-y-0 w-1/3 bg-sky-500 shadow-[0_0_10px_#0ea5e9]"
                                        />
                                    </div>
                                    <span className="text-[11px] font-black italic tracking-[0.4em] text-white uppercase">
                                        {loadingStates[statusIndex]}
                                    </span>
                                </div>
                            </div>

                            {/* BITS STREAM */}
                            <div className="flex gap-1.5 overflow-hidden h-1">
                                {Array.from({ length: 12 }).map((_, i) => (
                                    <motion.div
                                        key={i}
                                        animate={{ opacity: [0.2, 1, 0.2] }}
                                        transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
                                        className="h-full w-4 bg-sky-500/40 -skew-x-[20deg]"
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* DIAGONAL TRANSITION WIPE */}
                    <div className="absolute inset-0 pointer-events-none z-[100]">
                        <motion.div
                            className="absolute inset-0 bg-sky-500 origin-bottom-left"
                            initial={{ x: "-100%", skewX: 12 }}
                            exit={{
                                x: "200%",
                                transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
                            }}
                        />
                        <motion.div
                            className="absolute inset-0 bg-zinc-950 origin-bottom-left"
                            initial={{ x: "-110%", skewX: 12 }}
                            exit={{
                                x: "200%",
                                transition: { duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }
                            }}
                        />
                    </div>

                    {/* SIDE MARKINGS */}
                    <div className="absolute bottom-10 left-10 text-[9px] font-mono text-zinc-500 tracking-[1em] uppercase vertical-rl rotate-180 opacity-30 italic">
                        SYSTEM_BOOTLOADER_v4.2.0_CRUX
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
