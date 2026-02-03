"use client"

import Link from "next/link"
import { ArrowRight, Sparkles, Play, ShieldCheck, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import ClientsSlider from "./clientsslider"
import { motion } from "framer-motion"

export default function HeroSection() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#ffffff]">
            {/* Background elements */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#2563eb]/5 blur-[120px] rounded-full"
                    aria-hidden="true"
                />
                <div
                    className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#2563eb]/5 blur-[120px] rounded-full"
                    aria-hidden="true"
                />
                <div
                    className="absolute inset-0 bg-[linear-gradient(to_right,#8881_1px,transparent_1px),linear-gradient(to_bottom,#8881_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"
                    aria-hidden="true"
                />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 py-24 lg:py-32">
                <div className="flex flex-col items-center text-center">

                    {/* Animated Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Badge
                            variant="secondary"
                            className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#2563eb]/10 bg-[#2563eb]/5 px-4 py-2 text-[14px] font-semibold text-[#2563eb] backdrop-blur-sm shadow-sm"
                        >
                            <Sparkles className="h-4 w-4" />
                            Next-Gen Growth Systems
                        </Badge>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl font-bold tracking-tight text-[#0f172a] sm:text-6xl md:text-7xl lg:text-8xl max-w-5xl leading-[1.1]"
                    >
                        We Engineer{" "}
                        <span className="relative inline-block text-[#2563eb]">
                            Digital Dominance
                            <motion.span
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className="absolute -bottom-2 left-0 h-1.5 bg-[#2563eb]/20 rounded-full"
                            />
                        </span>
                        <br />
                        for Modern Business
                    </motion.h1>

                    {/* Subheading */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mt-8 text-lg leading-relaxed text-[#475569] sm:text-xl md:text-2xl max-w-3xl mx-auto font-medium"
                    >
                        CruxLabs builds high-performance digital infrastructure that
                        converts attention into revenue and complexity into growth.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto"
                    >
                        <Link href="/contact" className="w-full sm:w-auto">
                            <Button
                                size="lg"
                                className="group h-14 w-full sm:w-auto rounded-2xl bg-[#0f172a] px-10 text-[16px] font-bold text-white hover:bg-[#2563eb] shadow-[0_20px_40px_-10px_rgba(15,23,42,0.3)] transition-all duration-300 hover:shadow-[0_20px_40px_-10px_rgba(37,99,235,0.4)] hover:-translate-y-1"
                            >
                                Get Started
                                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </Link>

                        <Link href="/portfolio" className="w-full sm:w-auto">
                            <Button
                                size="lg"
                                variant="outline"
                                className="group h-14 w-full sm:w-auto rounded-2xl border-slate-200 px-10 text-[16px] font-bold text-[#1e293b] hover:bg-slate-50 transition-all duration-300 backdrop-blur-sm"
                            >
                                <Play className="mr-2 h-4 w-4 fill-current" />
                                Our Work
                            </Button>
                        </Link>
                    </motion.div>

                    {/* Features Grid (Modern Classical Touch) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 text-left max-w-4xl w-full"
                    >
                        <div className="flex items-start gap-4 p-4 rounded-2xl border border-transparent hover:border-slate-100 hover:bg-slate-50/50 transition-all">
                            <div className="h-10 w-10 shrink-0 flex items-center justify-center rounded-xl bg-[#2563eb]/10 text-[#2563eb]">
                                <Zap className="h-5 w-5" />
                            </div>
                            <div>
                                <h3 className="font-bold text-[#1e293b]">Rapid Growth</h3>
                                <p className="text-sm text-[#64748b]">Engineered for scale and speed.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 rounded-2xl border border-transparent hover:border-slate-100 hover:bg-slate-50/50 transition-all">
                            <div className="h-10 w-10 shrink-0 flex items-center justify-center rounded-xl bg-[#2563eb]/10 text-[#2563eb]">
                                <ShieldCheck className="h-5 w-5" />
                            </div>
                            <div>
                                <h3 className="font-bold text-[#1e293b]">Bank-Grade Security</h3>
                                <p className="text-sm text-[#64748b]">Protecing your digital assets.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 rounded-2xl border border-transparent hover:border-slate-100 hover:bg-slate-50/50 transition-all">
                            <div className="h-10 w-10 shrink-0 flex items-center justify-center rounded-xl bg-[#2563eb]/10 text-[#2563eb]">
                                <Sparkles className="h-5 w-5" />
                            </div>
                            <div>
                                <h3 className="font-bold text-[#1e293b]">Expert AI Integration</h3>
                                <p className="text-sm text-[#64748b]">Future-proofing your systems.</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Trust Indicators */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="mt-24 w-full pt-12 border-t border-slate-100"
                    >
                        <p className="mb-10 text-[12px] font-bold uppercase tracking-[0.2em] text-[#94a3b8]">
                            Powering growth for global innovators
                        </p>
                        <ClientsSlider />
                    </motion.div>
                </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-[#2563eb]/3 blur-[150px] -z-10 animate-pulse" />
            <div className="absolute bottom-[20%] left-[-10%] w-[400px] h-[400px] bg-[#2563eb]/2 blur-[130px] -z-10" />
        </section>
    )
}
