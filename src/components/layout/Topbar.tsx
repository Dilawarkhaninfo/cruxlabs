"use client"

import { Phone, Mail, Instagram, Linkedin, Twitter, Clock } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

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
                    className="relative z-[110] bg-[#2563eb] text-white py-2 text-[12px] font-medium"
                >
                    <div className="container mx-auto px-6 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-6">
                            <a
                                href="mailto:contact@cruxlabs.io"
                                className="flex items-center gap-2 group transition-opacity hover:opacity-80"
                            >
                                <Mail className="h-3.5 w-3.5 text-blue-100" />
                                <span className="hidden sm:inline text-blue-50 group-hover:text-white transition-colors">contact@cruxlabs.io</span>
                            </a>
                            <div className="h-3 w-[1px] bg-white/20 hidden sm:block" />
                            <a
                                href="tel:+1234567890"
                                className="flex items-center gap-2 group transition-opacity hover:opacity-80"
                            >
                                <Phone className="h-3.5 w-3.5 text-blue-100" />
                                <span className="hidden sm:inline text-blue-50 group-hover:text-white transition-colors uppercase">+1 (234) 567-890</span>
                            </a>
                        </div>

                        <div className="flex items-center gap-5">
                            <div className="hidden lg:flex items-center gap-2 text-blue-100/90 font-semibold tracking-tight">
                                <Clock className="h-3.5 w-3.5" />
                                <span>MON - FRI: 09:00 - 18:00</span>
                            </div>
                            <div className="flex items-center gap-4 sm:border-l sm:border-white/20 sm:pl-5">
                                <a href="#" className="text-blue-100 hover:text-white transition-all transform hover:scale-110">
                                    <Linkedin className="h-4 w-4" />
                                </a>
                                <a href="#" className="text-blue-100 hover:text-white transition-all transform hover:scale-110">
                                    <Instagram className="h-4 w-4" />
                                </a>
                                <a href="#" className="text-blue-100 hover:text-white transition-all transform hover:scale-110">
                                    <Twitter className="h-4 w-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
