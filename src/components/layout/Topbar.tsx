"use client"

import { Phone, Mail, Twitter, Linkedin, Github } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

export default function Topbar() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            // Hide topbar on scroll to give more space to sticky navbar
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
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="relative z-[110] bg-zinc-950 text-zinc-400 border-b border-zinc-900 overflow-hidden"
                >
                    {/* Background Pattern - Consistent Deep Black */}
                    <div className="absolute inset-0 bg-zinc-950" />

                    {/* Diagonal Accent - Subtler & Constrained */}
                    <div className="absolute top-0 right-[-20px] h-full w-48 bg-sky-500/5 -skew-x-[30deg] hidden md:block" />

                    <div className="max-w-7xl mx-auto px-4 md:px-6 py-2 flex items-center justify-between relative z-10">

                        {/* LEFT: Contact Information (Technical Registry) */}
                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-4">
                                <a
                                    href="mailto:contact@cruxlabs.io"
                                    className="flex items-center gap-2 group"
                                    aria-label="Email Us"
                                >
                                    <div className="h-6 w-6 bg-sky-500/10 border border-sky-500/30 flex items-center justify-center -skew-x-[12deg] group-hover:bg-sky-500 group-hover:text-zinc-950 transition-all duration-300">
                                        <Mail className="h-3 w-3 skew-x-[12deg]" />
                                    </div>
                                    <span className="hidden sm:block text-[10px] font-black italic uppercase tracking-widest text-zinc-500 group-hover:text-white transition-colors">
                                        contact@cruxlabs.io
                                    </span>
                                </a>

                                <div className="h-4 w-[1px] bg-zinc-800 rotate-12 hidden sm:block" />

                                <a
                                    href="tel:+1234567890"
                                    className="flex items-center gap-2 group"
                                    aria-label="Call Us"
                                >
                                    <div className="h-6 w-6 bg-zinc-900 border border-zinc-800 flex items-center justify-center -skew-x-[12deg] group-hover:border-sky-500/50 transition-all duration-300">
                                        <Phone className="h-3 w-3 text-sky-500 skew-x-[12deg]" />
                                    </div>
                                    <span className="hidden sm:block text-[10px] font-black italic uppercase tracking-widest text-zinc-500 group-hover:text-white transition-colors">
                                        +1 (555) 000-0000
                                    </span>
                                </a>
                            </div>
                        </div>

                        {/* RIGHT: Socials & System Status (Registry Style) */}
                        <div className="flex items-center gap-6">
                            {/* Technical Version Badge */}
                            <div className="hidden lg:flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-zinc-800 -skew-x-[12deg]">
                                <span className="text-[9px] font-black italic text-zinc-500 uppercase tracking-widest skew-x-[12deg]">
                                    BUILD: <span className="text-sky-500">v.4.2.0</span>
                                </span>
                            </div>

                            {/* Social Icons */}
                            <div className="flex items-center gap-4">
                                {[
                                    { Icon: Linkedin, href: "#" },
                                    { Icon: Twitter, href: "#" },
                                    { Icon: Github, href: "#" }
                                ].map((item, index) => (
                                    <a
                                        key={index}
                                        href={item.href}
                                        className="text-zinc-500 hover:text-sky-500 transition-all duration-300 hover:scale-110"
                                    >
                                        <item.Icon className="h-3.5 w-3.5" />
                                    </a>
                                ))}
                            </div>

                            <div className="h-4 w-[1px] bg-zinc-800 rotate-12" />

                            {/* System Status Module */}
                            <div className="flex items-center gap-3 px-4 py-1 bg-zinc-900 border-l-2 border-emerald-500 -skew-x-[12deg]">
                                <span className="relative flex h-1.5 w-1.5 skew-x-[12deg]">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                                </span>
                                <span className="text-[9px] font-black italic text-white uppercase tracking-[0.2em] skew-x-[12deg]">
                                    SYSTEM_ONLINE
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* BOTTOM SCAN LINE (Subtle) */}
                    <motion.div
                        animate={{ scaleX: [0, 1, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-sky-500/20 to-transparent z-30"
                    />
                </motion.div>
            )}
        </AnimatePresence>
    )
}
