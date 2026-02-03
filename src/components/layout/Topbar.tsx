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
                    className="relative z-[110] bg-[#0A0A0A] text-zinc-400 border-b border-white/5 overflow-hidden"
                >
                    {/* Background Pattern - Consistent Deep Black */}
                    <div className="absolute inset-0 bg-[#0A0A0A]" />

                    {/* Diagonal Accent - Subtler & Constrained */}
                    <div className="absolute top-0 right-[-20px] h-full w-32 bg-sky-500/10 -skew-x-[20deg] hidden md:block" />

                    <div className="max-w-7xl mx-auto px-4 md:px-6 py-2 flex items-center justify-between relative z-10">

                        {/* LEFT: Contact Information (Icons Only on Mobile) */}
                        <div className="flex items-center gap-4 sm:gap-6">

                            <a
                                href="mailto:contact@cruxlabs.io"
                                className="flex items-center gap-2 group"
                                aria-label="Email Us"
                            >
                                <Mail className="h-3.5 w-3.5 text-sky-500 group-hover:scale-110 transition-transform" />
                                <span className="hidden sm:block text-[11px] italic font-medium tracking-wide group-hover:text-white transition-colors">
                                    contact@cruxlabs.io
                                </span>
                            </a>

                            <div className="h-3 w-[1px] bg-white/10 hidden sm:block rotate-12" />

                            <a
                                href="tel:+1234567890"
                                className="flex items-center gap-2 group"
                                aria-label="Call Us"
                            >
                                <Phone className="h-3.5 w-3.5 text-sky-500 group-hover:scale-110 transition-transform" />
                                <span className="hidden sm:block text-[11px] italic font-medium tracking-wide group-hover:text-white transition-colors">
                                    +1 (555) 000-0000
                                </span>
                            </a>
                        </div>

                        {/* RIGHT: Socials & Status */}
                        <div className="flex items-center gap-4">

                            {/* Social Icons */}
                            <div className="flex items-center gap-3">
                                {[
                                    { Icon: Linkedin, href: "#" },
                                    { Icon: Twitter, href: "#" },
                                    { Icon: Github, href: "#" }
                                ].map((item, index) => (
                                    <a
                                        key={index}
                                        href={item.href}
                                        className="text-zinc-500 hover:text-sky-400 transition-colors"
                                    >
                                        <item.Icon className="h-3.5 w-3.5" />
                                    </a>
                                ))}
                            </div>

                            <div className="h-3 w-[1px] bg-white/10 rotate-12" />

                            {/* System Status */}
                            <div className="flex items-center gap-2">
                                <span className="relative flex h-1.5 w-1.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-none bg-emerald-500 opacity-75"></span>
                                    <span className="relative inline-flex rounded-none h-1.5 w-1.5 bg-emerald-500"></span>
                                </span>
                                <span className="hidden sm:block text-[10px] italic font-bold text-zinc-300 uppercase tracking-wider">
                                    System Online
                                </span>
                            </div>

                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
