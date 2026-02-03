"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import {
  ArrowRight,
  BarChart3,
  Target,
  Sparkles,
  Search,
  Globe,
  TrendingUp,
  ShieldCheck,
  Zap,
  MousePointer2
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useRef } from "react"

export default function SEOHeroSection() {
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

      {/* Background Grid Pattern - Matching Home Page */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 z-10">

        {/* Text Content - Centeblue (Matching Home Hero Styles) */}
        <div className="mx-auto max-w-4xl text-center mb-16 sm:mb-20">

          {/* Badge */}
          <Badge
            variant="secondary"
            className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-border/50 bg-white/50 px-3 py-1.5 text-[13px] font-medium backdrop-blur-sm"
          >
            <Sparkles className="h-3.5 w-3.5 text-[#2563eb]" />
            Next-Gen Search Intelligence
          </Badge>

          {/* Main Heading */}
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Data-Driven{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] bg-clip-text text-transparent">
                Dominance
              </span>
              <span
                className="absolute -bottom-2 left-0 h-3 w-full bg-[#2563eb]/10 -z-10"
                aria-hidden="true"
              />
            </span>
            <br className="hidden sm:block" />
            {" "}of Your Niche
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl max-w-3xl mx-auto">
            Stop guessing. Start ranking. We leverage advanced analytics and AI-driven insights to secure your spot at the top of search results.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button
                size="lg"
                className="group h-12 w-full sm:w-auto rounded-lg bg-[#2563eb] px-8 text-[15px] font-medium text-white hover:bg-[#1d4ed8] shadow-sm transition-all hover:shadow-lg"
              >
                Get Free Audit
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>

            <Link href="/case-studies">
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
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-blue-500/20 blur-3xl -z-10 rounded-[2rem]" />

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
                cruxlabs.com/search-intelligence
              </div>
            </div>

            {/* Window Content (HUD) */}
            <div className="relative p-6 sm:p-8 lg:p-10 min-h-[400px] sm:min-h-[500px] bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950/20">

              {/* Dashboard Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">

                {/* Main Chart Area */}
                <div className="lg:col-span-2 flex flex-col gap-6">

                  {/* Performance Graph Card */}
                  <div className="flex-1 bg-white dark:bg-gray-800/50 rounded-xl border border-gray-200/50 dark:border-gray-700/50 p-6 shadow-sm relative overflow-hidden group">
                    <div className="flex justify-between items-center mb-6">
                      <div>
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Organic Growth</h3>
                        <p className="text-xs text-muted-foreground">Last 30 Days</p>
                      </div>
                      <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                        +127%
                      </span>
                    </div>

                    {/* Graph Bars */}
                    <div className="absolute bottom-0 left-6 right-6 top-20 flex items-end justify-between gap-2 pb-6">
                      {[40, 65, 50, 80, 70, 95, 85, 90, 100, 95, 110, 120].map((height, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-gradient-to-t from-blue-500/20 to-blue-600 rounded-t-sm relative group/bar min-w-[4px]"
                          style={{ height: `${height * 0.6}%` }}
                        >
                          <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover/bar:opacity-100 transition-opacity bg-black text-white text-[10px] px-1.5 py-0.5 rounded">
                            {height}k
                          </div>
                        </div>
                      ))}

                      {/* Scanning Line Effect */}
                      <motion.div
                        animate={{ left: ["0%", "100%", "0%"] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        className="absolute top-0 bottom-6 w-[1px] bg-blue-400 shadow-[0_0_15px_rgba(34,211,238,0.6)] z-10 opacity-50 pointer-events-none"
                      />
                    </div>
                    {/* Grid Lines */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
                  </div>

                  {/* Secondary Metrics Row */}
                  <div className="grid grid-cols-2 gap-4 sm:gap-6">
                    <div className="bg-white dark:bg-gray-800/50 rounded-xl border border-gray-200/50 dark:border-gray-700/50 p-4 sm:p-5 shadow-sm">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-1.5 sm:p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                          <Target className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 dark:text-blue-400" />
                        </div>
                        <span className="text-xs font-medium text-muted-foreground">Keywords</span>
                      </div>
                      <div className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">854</div>
                      <div className="text-xs text-green-500 mt-1 flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" /> +24 new
                      </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800/50 rounded-xl border border-gray-200/50 dark:border-gray-700/50 p-4 sm:p-5 shadow-sm">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-1.5 sm:p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                          <MousePointer2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 dark:text-blue-400" />
                        </div>
                        <span className="text-xs font-medium text-muted-foreground">CTR</span>
                      </div>
                      <div className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">4.2%</div>
                      <div className="text-xs text-green-500 mt-1 flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" /> +0.8%
                      </div>
                    </div>
                  </div>

                </div>

                {/* Sidebar / Live Feed */}
                <div className="hidden lg:flex bg-white dark:bg-gray-800/50 rounded-xl border border-gray-200/50 dark:border-gray-700/50 p-6 shadow-sm flex-col">
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    Live Insights
                  </h3>

                  <div className="space-y-4 overflow-hidden relative">
                    {[
                      { icon: Search, text: "Keyword 'seo audit' moved to #1", time: "2m ago", color: "blue" },
                      { icon: Globe, text: "New backlink detected from TechCrunch", time: "15m ago", color: "blue" },
                      { icon: Zap, text: "Page speed score improved to 98", time: "1h ago", color: "amber" },
                      { icon: ShieldCheck, text: "Site health check passed: 100%", time: "3h ago", color: "green" },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex gap-3 items-start p-3 rounded-lg bg-gray-50 dark:bg-gray-900/50 border border-transparent hover:border-gray-200 dark:hover:border-gray-700 transition-colors cursor-default"
                      >
                        <div className={`mt-0.5 p-1.5 rounded-md bg-${item.color}-100 dark:bg-${item.color}-900/30 text-${item.color}-600 dark:text-${item.color}-400 shrink-0`}>
                          <item.icon className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <p className="text-xs font-medium text-gray-900 dark:text-gray-200 leading-snug">{item.text}</p>
                          <p className="text-[10px] text-muted-foreground mt-1">{item.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Decorative Map (Abstract) */}
                  <div className="mt-auto pt-6 opacity-60">
                    <div className="text-xs font-medium text-muted-foreground mb-3">Global Traffic Source</div>
                    <div className="h-24 bg-blue-50 dark:bg-blue-900/10 rounded-lg relative overflow-hidden">
                      {/* Static dots for map visual */}
                      <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-blue-500 rounded-full opacity-50" />
                      <div className="absolute top-1/2 left-2/3 w-1.5 h-1.5 bg-blue-500 rounded-full opacity-70" />
                      <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-blue-500 rounded-full opacity-60" />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </motion.div>


      </div>
    </section>
  )
}