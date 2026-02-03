"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import {
  ArrowRight,
  PenTool,
  FileText,
  Sparkles,
  MessageSquare,
  TrendingUp,
  CheckCircle2,
  Zap,
  Clock,
  Share2
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useRef } from "react"

export default function ContentHeroSection() {
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
            <PenTool className="h-3.5 w-3.5 text-[#2563eb]" />
            Premium Content Strategy
          </Badge>

          {/* Main Heading */}
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Content That{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent">
                Captivates
              </span>
              <span
                className="absolute -bottom-2 left-0 h-3 w-full bg-blue-600/10 -z-10"
                aria-hidden="true"
              />
            </span>
            <br className="hidden sm:block" />
            {" "}& Converts
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl max-w-3xl mx-auto">
            Turn passive readers into loyal customers. We craft data-backed narratives and SEO-optimized copy that amplifies your brand's voice.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button
                size="lg"
                className="group h-12 w-full sm:w-auto rounded-lg bg-[#2563eb] px-8 text-[15px] font-medium text-white hover:bg-[#1d4ed8] shadow-sm transition-all hover:shadow-lg"
              >
                Order Content
                <Sparkles className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>

            <Link href="/portfolio">
              <Button
                size="lg"
                variant="outline"
                className="h-12 w-full sm:w-auto rounded-lg border-border/60 px-8 text-[15px] font-medium hover:bg-muted/50 hover:border-border transition-all"
              >
                View Samples
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
                cruxlabs.com/content-studio
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
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Reader Engagement</h3>
                        <p className="text-xs text-muted-foreground">Avg. Time on Page • Last 30 Days</p>
                      </div>
                      <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                        Top 5% Industry
                      </span>
                    </div>

                    {/* Engagement Wave */}
                    <div className="absolute bottom-0 left-0 right-0 top-20 flex items-end">
                      <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 50">
                        <defs>
                          <linearGradient id="waveGradient" x1="0" x2="0" y1="0" y2="1">
                            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.2" />
                            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        <motion.path
                          d="M0,50 Q25,20 50,35 T100,10 V50 Z"
                          fill="url(#waveGradient)"
                          initial={{ d: "M0,50 Q25,50 50,50 T100,50 V50 Z" }}
                          animate={{ d: "M0,50 Q25,20 50,35 T100,10 V50 Z" }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                        />
                        <motion.path
                          d="M0,50 Q25,20 50,35 T100,10"
                          fill="none"
                          stroke="#06b6d4"
                          strokeWidth="0.5"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 2, ease: "easeInOut" }}
                        />
                      </svg>

                      {/* Floating Stats over graph */}
                      <div className="absolute top-1/3 left-1/4 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-2 border border-gray-100 dark:border-gray-700 animate-bounce">
                        <div className="text-[10px] text-gray-500">Avg Read Time</div>
                        <div className="text-sm font-bold text-gray-900 dark:text-gray-100">4m 12s</div>
                      </div>
                    </div>

                    {/* Grid Lines */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
                  </div>

                  {/* Secondary Metrics Row */}
                  <div className="grid grid-cols-2 gap-4 sm:gap-6">
                    <div className="bg-white dark:bg-gray-800/50 rounded-xl border border-gray-200/50 dark:border-gray-700/50 p-4 sm:p-5 shadow-sm">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-1.5 sm:p-2 bg-pink-100 dark:bg-pink-900/30 rounded-lg">
                          <Share2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-pink-600 dark:text-pink-400" />
                        </div>
                        <span className="text-xs font-medium text-muted-foreground">Shares</span>
                      </div>
                      <div className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">1.2k</div>
                      <div className="text-xs text-green-500 mt-1 flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" /> Viral Content
                      </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800/50 rounded-xl border border-gray-200/50 dark:border-gray-700/50 p-4 sm:p-5 shadow-sm">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-1.5 sm:p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                          <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 dark:text-emerald-400" />
                        </div>
                        <span className="text-xs font-medium text-muted-foreground">Publication</span>
                      </div>
                      <div className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">24h</div>
                      <div className="text-xs text-green-500 mt-1 flex items-center gap-1">
                        <Zap className="w-3 h-3" /> Fast Turnaround
                      </div>
                    </div>
                  </div>

                </div>

                {/* Sidebar / Live Feed */}
                <div className="hidden lg:flex bg-white dark:bg-gray-800/50 rounded-xl border border-gray-200/50 dark:border-gray-700/50 p-6 shadow-sm flex-col">
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    Content Pipeline
                  </h3>

                  <div className="space-y-4 overflow-hidden relative">
                    {[
                      { icon: FileText, text: "Blog 'AI Future' Published", time: "10m ago", color: "blue" },
                      { icon: CheckCircle2, text: "SEO Score: 98/100", time: "45m ago", color: "green" },
                      { icon: MessageSquare, text: "New Comment on Article", time: "1h ago", color: "blue" },
                      { icon: PenTool, text: "Whitepaper Draft Saved", time: "3h ago", color: "blue" },
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

                  {/* Decorative Content Calendar Visual */}
                  <div className="mt-auto pt-6 opacity-60">
                    <div className="text-xs font-medium text-muted-foreground mb-3">Editorial Calendar</div>
                    <div className="grid grid-cols-7 gap-1">
                      {[...Array(28)].map((_, i) => (
                        <div
                          key={i}
                          className={`h-1.5 rounded-sm ${[2, 5, 9, 12, 15, 20, 24].includes(i) ? 'bg-blue-500' : 'bg-gray-200 dark:bg-gray-700'}`}
                        />
                      ))}
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
