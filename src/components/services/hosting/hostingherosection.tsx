"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import {
  ArrowRight,
  Server,
  ShieldCheck,
  Zap,
  Globe,
  Activity,
  Cpu,
  HardDrive,
  Wifi,
  Sparkles
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useEffect, useState, useRef } from "react"

// Uptime counter hook
const useUptime = () => {
  const [uptime, setUptime] = useState(99.99)

  useEffect(() => {
    const interval = setInterval(() => {
      setUptime((prev) => {
        // Micro-fluctuations to simulate live calculation, usually staying at 99.999
        return 99.990 + Math.random() * 0.009
      })
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return uptime.toFixed(3)
}

export default function HostingHeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const uptime = useUptime()
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
            <Zap className="h-3.5 w-3.5 text-[#2563eb]" />
            High Performance Cloud Infrastructure
          </Badge>

          {/* Main Heading */}
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Secure, Scalable{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent">
                Cloud Hosting
              </span>
              <span
                className="absolute -bottom-2 left-0 h-3 w-full bg-blue-600/10 -z-10"
                aria-hidden="true"
              />
            </span>
            <br className="hidden sm:block" />
            {" "}for Modern Apps
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl max-w-3xl mx-auto">
            Experience lightning-fast speeds and enterprise-grade reliability.
            Our global CDN and automated scaling ensure your site is always online and performing at its peak.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button
                size="lg"
                className="group h-12 w-full sm:w-auto rounded-lg bg-[#2563eb] px-8 text-[15px] font-medium text-white hover:bg-[#1d4ed8] shadow-sm transition-all hover:shadow-lg"
              >
                Deploy Server
                <Sparkles className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>

            <Link href="/pricing">
              <Button
                size="lg"
                variant="outline"
                className="h-12 w-full sm:w-auto rounded-lg border-border/60 px-8 text-[15px] font-medium hover:bg-muted/50 hover:border-border transition-all"
              >
                View Plans
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
          <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 blur-3xl -z-10 rounded-[2rem]" />

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
                cruxlabs.com/cloud-console
              </div>
            </div>

            {/* Window Content (HUD) */}
            <div className="relative p-6 sm:p-8 lg:p-10 min-h-[400px] sm:min-h-[500px] bg-gradient-to-br from-gray-50 via-white to-emerald-50 dark:from-gray-950 dark:via-gray-900 dark:to-emerald-950/20">

              {/* Dashboard Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">

                {/* Main Metrics Area */}
                <div className="lg:col-span-2 flex flex-col gap-6">

                  {/* System Status Card */}
                  <div className="flex-1 bg-white dark:bg-gray-800/50 rounded-xl border border-gray-200/50 dark:border-gray-700/50 p-6 shadow-sm relative overflow-hidden group">
                    <div className="flex justify-between items-center mb-6">
                      <div>
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white">System Status</h3>
                        <p className="text-xs text-muted-foreground">Global Network • 24 Regions</p>
                      </div>
                      <span className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        Operational
                      </span>
                    </div>

                    {/* Uptime Big Display */}
                    <div className="flex items-end gap-3 mb-8">
                      <span className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {uptime}%
                      </span>
                      <span className="text-sm text-green-500 font-medium mb-1.5">Uptime Guarantee</span>
                    </div>

                    {/* Latency Map / Network Visualization (Abstract) */}
                    <div className="relative h-24 border-t border-gray-100 dark:border-gray-700 pt-4 flex items-end justify-between gap-1">
                      {[...Array(20)].map((_, i) => {
                        // Generate random bar heights for "traffic"
                        const height = 30 + Math.random() * 60;
                        return (
                          <motion.div
                            key={i}
                            initial={{ height: `${height}%` }}
                            animate={{ height: [`${height}%`, `${Math.max(20, height + (Math.random() * 40 - 20))}%`, `${height}%`] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.1 }}
                            className="w-full bg-emerald-500/20 rounded-t-sm"
                          />
                        )
                      })}
                    </div>

                    {/* Grid Lines */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
                  </div>

                  {/* Secondary Metrics Row */}
                  <div className="grid grid-cols-2 gap-4 sm:gap-6">
                    <div className="bg-white dark:bg-gray-800/50 rounded-xl border border-gray-200/50 dark:border-gray-700/50 p-4 sm:p-5 shadow-sm">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-1.5 sm:p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                          <Wifi className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 dark:text-blue-400" />
                        </div>
                        <span className="text-xs font-medium text-muted-foreground">Latency</span>
                      </div>
                      <div className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">12ms</div>
                      <div className="text-xs text-green-500 mt-1 flex items-center gap-1">
                        <Activity className="w-3 h-3" /> Global Avg
                      </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800/50 rounded-xl border border-gray-200/50 dark:border-gray-700/50 p-4 sm:p-5 shadow-sm">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-1.5 sm:p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                          <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 dark:text-blue-400" />
                        </div>
                        <span className="text-xs font-medium text-muted-foreground">Security</span>
                      </div>
                      <div className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Active</div>
                      <div className="text-xs text-green-500 mt-1 flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3" /> DDoS Protected
                      </div>
                    </div>
                  </div>

                </div>

                {/* Sidebar / Server Resource Status */}
                <div className="hidden lg:flex bg-white dark:bg-gray-800/50 rounded-xl border border-gray-200/50 dark:border-gray-700/50 p-6 shadow-sm flex-col">
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                    Resource Monitoring
                  </h3>

                  <div className="space-y-6">
                    {/* CPU Usage */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span className="flex items-center gap-1.5 text-muted-foreground"><Cpu className="w-3 h-3" /> CPU Load</span>
                        <span className="font-medium">12%</span>
                      </div>
                      <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-blue-500 rounded-full"
                          initial={{ width: "12%" }}
                          animate={{ width: ["12%", "18%", "12%"] }}
                          transition={{ duration: 4, repeat: Infinity }}
                        />
                      </div>
                    </div>

                    {/* Memory Usage */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span className="flex items-center gap-1.5 text-muted-foreground"><HardDrive className="w-3 h-3" /> Memory</span>
                        <span className="font-medium">24%</span>
                      </div>
                      <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-blue-500 rounded-full"
                          initial={{ width: "24%" }}
                          animate={{ width: ["24%", "26%", "24%"] }}
                          transition={{ duration: 5, repeat: Infinity }}
                        />
                      </div>
                    </div>

                    {/* Storage Usage */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span className="flex items-center gap-1.5 text-muted-foreground"><Server className="w-3 h-3" /> SSD Storage</span>
                        <span className="font-medium">45%</span>
                      </div>
                      <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full w-[45%] bg-blue-500 rounded-full" />
                      </div>
                    </div>

                  </div>

                  {/* Locations List */}
                  <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-700">
                    <h4 className="text-xs font-semibold text-gray-900 dark:text-white mb-3">Active Regions</h4>
                    <div className="space-y-2">
                      {['US East (N. Virginia)', 'EU West (London)', 'Asia Pacific (Singapore)'].map((region, i) => (
                        <div key={i} className="flex items-center justify-between text-[10px] text-muted-foreground">
                          <span>{region}</span>
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500/80" />
                        </div>
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