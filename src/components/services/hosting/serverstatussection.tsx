"use client"

import { motion } from "framer-motion"
import { Terminal, Cpu, Activity, ShieldCheck, CheckCircle2 } from "lucide-react"

export default function ServerStatusSection() {
  return (
    <section className="py-24 bg-[#0a0a0a] relative overflow-hidden text-white">
      {/* Background Matrix Effect (Abstract) */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium mb-6">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Systems Operational
            </div>
            <h2 className="text-3xl font-bold mb-6">Transparency is our Policy.</h2>
            <p className="text-gray-400 mb-8 max-w-lg">
              Monitor your infrastructure in real-time. We provide granular insights into server health, latency, and resource uptime so you're never in the dark.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { label: "Network Uptime", val: "100%", icon: Activity },
                { label: "DDoS Mitigation", val: "Active", icon: ShieldCheck },
                { label: "Server Response", val: "< 35ms", icon: Terminal },
                { label: "Failed Requests", val: "0%", icon: CheckCircle2 },
              ].map(stat => (
                <div key={stat.label} className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <stat.icon className="w-4 h-4 text-blue-400" />
                    <span className="text-xs text-gray-400">{stat.label}</span>
                  </div>
                  <div className="text-xl font-mono font-bold">{stat.val}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative font-mono text-sm leading-relaxed">
            {/* Terminal Window */}
            <div className="w-full rounded-xl overflow-hidden bg-[#0c0c0c] border border-white/10 shadow-2xl">
              <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/5">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-blue-500/20" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                  <div className="w-3 h-3 rounded-full bg-green-500/20" />
                </div>
                <div className="text-xs text-gray-500 ml-2">root@crux-server01:~</div>
              </div>
              <div className="p-6 text-gray-300 min-h-[300px]">
                <div className="mb-2">
                  <span className="text-blue-400">➜</span> <span className="text-green-400">~</span> health-check --all
                </div>
                <div className="space-y-1 mb-4 text-gray-500">
                  <div>initializing diagnostic sequence...</div>
                  <div>checking core services [OK]</div>
                  <div>pinging global nodes...</div>
                </div>

                <div className="grid grid-cols-2 gap-x-8 gap-y-2 mb-4 text-xs">
                  <div className="flex justify-between"><span>US-East-1</span> <span className="text-green-400">2ms [OK]</span></div>
                  <div className="flex justify-between"><span>EU-West-2</span> <span className="text-green-400">14ms [OK]</span></div>
                  <div className="flex justify-between"><span>AP-South-1</span> <span className="text-green-400">45ms [OK]</span></div>
                  <div className="flex justify-between"><span>SA-East-1</span> <span className="text-green-400">88ms [OK]</span></div>
                </div>

                <div className="mb-2 mt-4">
                  <span className="text-blue-400">➜</span> <span className="text-green-400">~</span> resource-monitor
                </div>
                <div className="space-y-3 mt-2">
                  <div>
                    <div className="flex justify-between text-xs mb-1"><span>CPU Usage</span> <span>12%</span></div>
                    <div className="h-1 bg-gray-800 rounded-full"><div className="h-full w-[12%] bg-blue-500 rounded-full" /></div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1"><span>RAM Usage</span> <span>4.2GB / 16GB</span></div>
                    <div className="h-1 bg-gray-800 rounded-full"><div className="h-full w-[25%] bg-blue-500 rounded-full" /></div>
                  </div>
                </div>

                <motion.div
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="mt-4 w-2 h-4 bg-blue-500"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
