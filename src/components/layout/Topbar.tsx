"use client"

import { Phone, Mail, Clock, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export default function Topbar() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <AnimatePresence>
            {!scrolled && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0, overflow: "hidden" }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="relative z-[110] bg-[#020617] border-b border-white/5 text-slate-400 py-2.5 text-[11px] font-medium tracking-wide"
                >
                    {/* Top Glow Line */}
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-50" />

                    <div className="container mx-auto px-6 h-full flex items-center justify-between gap-4">

                        {/* Left: Contact Info (Technical/Mono feel) */}
                        <div className="flex items-center gap-6">
                            <a
                                href="mailto:contact@cruxlabs.io"
                                className="flex items-center gap-2.5 group hover:text-white transition-colors"
                            >
                                <Mail className="h-3 w-3 text-sky-500" />
                                <span className="font-mono opacity-80 group-hover:opacity-100 transition-opacity">
                                    CONTACT@CRUXLABS.IO
                                </span>
                            </a>
                            <div className="h-3 w-[1px] bg-white/10 hidden sm:block rotate-12" />
                            <a
                                href="tel:+1234567890"
                                className="flex items-center gap-2.5 group hover:text-white transition-colors"
                            >
                                <Phone className="h-3 w-3 text-sky-500" />
                                <span className="font-mono opacity-80 group-hover:opacity-100 transition-opacity">
                                    +1 (234) 567-890
                                </span>
                            </a>
                        </div>

                        {/* Right: Hours & Status */}
                        <div className="flex items-center gap-6">
                            <div className="hidden lg:flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                                <span className="uppercase tracking-wider text-[10px] font-bold text-emerald-500">
                                    Systems Operational
                                </span>
                            </div>

                            <div className="h-3 w-[1px] bg-white/10 hidden lg:block rotate-12" />

                            <div className="flex items-center gap-2 group cursor-pointer hover:text-sky-400 transition-colors">
                                <Clock className="h-3 w-3 text-slate-500 group-hover:text-sky-500 transition-colors" />
                                <span className="uppercase text-[10px] font-bold">
                                    Mon-Fri: 0900 - 1800
                                </span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
