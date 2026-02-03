"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import {
  ArrowRight,
  Palette,
  LayoutTemplate,
  Sparkles,
  Layers,
  Image as ImageIcon,
  Type,
  PenTool,
  Download,
  CheckCircle2
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useRef } from "react"

export default function BrandingHeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  // Animation values for the screen tilt
  const rotateX = useTransform(scrollYProgress, [0, 0.5], [15, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1])

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50/50 pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16 lg:pb-24 perspective-1000">

      {/* Background Grid Pattern - Matching Unified Style */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 z-10">

        {/* Text Content - Centeblue */}
        <div className="mx-auto max-w-4xl text-center mb-16 sm:mb-20">

          {/* Badge */}
          <Badge
            variant="secondary"
            className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-border/50 bg-white/50 px-3 py-1.5 text-[13px] font-medium backdrop-blur-sm"
          >
            <Palette className="h-3.5 w-3.5 text-[#2563eb]" />
            Elite Brand Identity Design
          </Badge>

          {/* Main Heading */}
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            We Craft Brands That{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent">
                Defy Expectations
              </span>
              <span
                className="absolute -bottom-2 left-0 h-3 w-full bg-blue-600/10 -z-10"
                aria-hidden="true"
              />
            </span>
            <br className="hidden sm:block" />
            {" "}& Inspire Trust
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl max-w-3xl mx-auto">
            Your brand is more than a logo. It's an entire ecosystem. We build cohesive visual identities that resonate with your audience and scale with your ambition.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button
                size="lg"
                className="group h-12 w-full sm:w-auto rounded-lg bg-[#2563eb] px-8 text-[15px] font-medium text-white hover:bg-[#1d4ed8] shadow-sm transition-all hover:shadow-lg"
              >
                Start Your Project
                <Sparkles className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>

            <Link href="/portfolio">
              <Button
                size="lg"
                variant="outline"
                className="h-12 w-full sm:w-auto rounded-lg border-border/60 px-8 text-[15px] font-medium hover:bg-muted/50 hover:border-border transition-all"
              >
                View Case Studies
              </Button>
            </Link>
          </div>
        </div>

        {/* The "Screen" Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          style={{ rotateX, scale }}
          className="relative w-full max-w-5xl mx-auto"
        >
          {/* Glow Behind Screen */}
          <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 to-blue-500/20 blur-3xl -z-10 rounded-[2rem]" />

          {/* Browser Window Frame */}
          <div className="rounded-xl sm:rounded-2xl border border-gray-200/50 dark:border-gray-700/50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-2xl overflow-hidden ring-1 ring-gray-900/5 dark:ring-white/10">

            {/* Window Header / Traffic Lights */}
            <div className="h-10 sm:h-12 border-b border-gray-200/50 dark:border-gray-700/50 flex items-center px-4 gap-2 bg-gray-50/50 dark:bg-gray-800/50">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-400/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
              </div>
              {/* Fake URL Bar */}
              <div className="ml-4 flex-1 max-w-sm h-6 sm:h-7 bg-gray-200/50 dark:bg-gray-700/50 rounded-md flex items-center justify-center text-[10px] text-gray-500 dark:text-gray-400 font-medium">
                cruxlabs.com/brand-identity
              </div>
            </div>

            {/* Window Content (HUD) */}
            <div className="relative p-6 sm:p-8 lg:p-10 min-h-[400px] sm:min-h-[500px] bg-gradient-to-br from-gray-50 via-white to-indigo-50 dark:from-gray-950 dark:via-gray-900 dark:to-indigo-950/20">

              {/* Dashboard Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">

                {/* Main Design Area */}
                <div className="lg:col-span-2 flex flex-col gap-6">

                  {/* Brand Guidelines Card */}
                  <div className="flex-1 bg-white dark:bg-gray-800/50 rounded-xl border border-gray-200/50 dark:border-gray-700/50 p-6 shadow-sm relative overflow-hidden group">
                    <div className="flex justify-between items-center mb-6">
                      <div>
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Visual Identity System</h3>
                        <p className="text-xs text-muted-foreground">Version 2.0 • Active</p>
                      </div>
                      <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400">
                        Approved
                      </span>
                    </div>

                    {/* Color Palette Visual */}
                    <div className="flex gap-2 mb-6">
                      {['#4f46e5', '#3b82f6', '#06b6d4', '#1e293b'].map((color, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.5 + (i * 0.1) }}
                          className="h-16 flex-1 rounded-lg shadow-sm border border-black/5 relative group/color cursor-pointer"
                          style={{ backgroundColor: color }}
                        >
                          <div className="absolute inset-0 bg-white opacity-0 group-hover/color:opacity-20 transition-opacity rounded-lg" />
                          <span className="absolute bottom-1 left-1 text-[8px] text-white/80 font-mono opacity-0 group-hover/color:opacity-100 transition-opacity">
                            {color}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Typography Specimen */}
                    <div className="border border-gray-100 dark:border-gray-700 rounded-lg p-4 bg-gray-50/50 dark:bg-gray-900/30">
                      <div className="flex items-center gap-2 mb-2">
                        <Type className="w-3 h-3 text-muted-foreground" />
                        <span className="text-[10px] font-medium text-muted-foreground">Primary Typeface • Inter</span>
                      </div>
                      <h4 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Aa Bb Cc</h4>
                      <p className="text-sm text-gray-500 mt-1">The quick brown fox jumps over the lazy dog.</p>
                    </div>

                    {/* Grid Lines */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
                  </div>

                  {/* Secondary Metrics Row */}
                  <div className="grid grid-cols-2 gap-4 sm:gap-6">
                    <div className="bg-white dark:bg-gray-800/50 rounded-xl border border-gray-200/50 dark:border-gray-700/50 p-4 sm:p-5 shadow-sm">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-1.5 sm:p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                          <LayoutTemplate className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 dark:text-blue-400" />
                        </div>
                        <span className="text-xs font-medium text-muted-foreground">Touchpoints</span>
                      </div>
                      <div className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">12</div>
                      <div className="text-xs text-green-500 mt-1 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> Consistent
                      </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800/50 rounded-xl border border-gray-200/50 dark:border-gray-700/50 p-4 sm:p-5 shadow-sm">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-1.5 sm:p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                          <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 dark:text-blue-400" />
                        </div>
                        <span className="text-xs font-medium text-muted-foreground">Brand Equity</span>
                      </div>
                      <div className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">High</div>
                      <div className="text-xs text-green-500 mt-1 flex items-center gap-1">
                        <ArrowRight className="w-3 h-3 -rotate-45" /> Growing
                      </div>
                    </div>
                  </div>

                </div>

                {/* Sidebar / Asset Manager */}
                <div className="hidden lg:flex bg-white dark:bg-gray-800/50 rounded-xl border border-gray-200/50 dark:border-gray-700/50 p-6 shadow-sm flex-col">
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                    Asset Library
                  </h3>

                  <div className="space-y-4 overflow-hidden relative">
                    {[
                      { icon: ImageIcon, text: "logo_primary.svg", size: "125 KB", color: "blue" },
                      { icon: ImageIcon, text: "logo_inverted.png", size: "2.4 MB", color: "blue" },
                      { icon: PenTool, text: "brand_guidelines.pdf", size: "14 MB", color: "blue" },
                      { icon: Type, text: "inter_font_family.zip", size: "8 MB", color: "gray" },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex gap-3 items-center p-3 rounded-lg bg-gray-50 dark:bg-gray-900/50 border border-transparent hover:border-gray-200 dark:hover:border-gray-700 transition-colors cursor-pointer group"
                      >
                        <div className={`p-2 rounded-md bg-${item.color}-100 dark:bg-${item.color}-900/30 text-${item.color}-600 dark:text-${item.color}-400 shrink-0`}>
                          <item.icon className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-medium text-gray-900 dark:text-gray-200 leading-snug truncate">{item.text}</p>
                          <p className="text-[10px] text-muted-foreground">{item.size}</p>
                        </div>
                        <Download className="w-3 h-3 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    ))}
                  </div>

                  {/* Decorative Logo Construction Visual */}
                  <div className="mt-auto pt-6 opacity-60 flex justify-center">
                    <div className="relative w-24 h-24 border border-dashed border-gray-300 dark:border-gray-600 rounded-full flex items-center justify-center">
                      <div className="w-16 h-16 border border-gray-300 dark:border-gray-600 rounded-full" />
                      <div className="absolute w-full h-[1px] bg-gray-200 dark:bg-gray-700" />
                      <div className="absolute h-full w-[1px] bg-gray-200 dark:bg-gray-700" />

                      {/* Golden Ratio Spiral hint */}
                      <svg className="absolute inset-0 w-full h-full text-indigo-500 opacity-30" viewBox="0 0 100 100">
                        <path d="M50,50 m-40,0 a40,40 0 1,0 80,0 a40,40 0 1,0 -80,0" fill="none" stroke="currentColor" strokeWidth="1" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-center text-[10px] text-muted-foreground mt-2">Geometric Construction</p>

                </div>

              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
