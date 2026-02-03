"use client"

import { motion } from "framer-motion"
import { Check, Shield, Zap, Globe, Clock, Headphones } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const reasons = [
  {
    icon: Zap,
    title: "Blazing Fast Performance",
    desc: "Our NVMe SSDs and optimized stack ensure your site loads instantly."
  },
  {
    icon: Globe,
    title: "Global Reach",
    desc: "24 datacenter locations worldwide to get close to your audience."
  },
  {
    icon: Shield,
    title: "Ironclad Security",
    desc: "AI-driven firewalls and automated malware scanning keep you safe."
  },
  {
    icon: Clock,
    title: "99.9% Uptime SLA",
    desc: "We guarantee your site stays online, or we pay you back."
  },
  {
    icon: Headphones,
    title: "24/7 Expert Support",
    desc: "Real engineers ready to help via chat, ticket, or phone anytime."
  },
  {
    icon: Check,
    title: "30-Day Money Back",
    desc: "Try us risk-free. If you're not happy, get a full refund."
  }
]

export default function WhyChooseHostingSection() {
  return (
    <section className="py-24 relative bg-gray-900 text-white overflow-hidden">
      {/* Background World Map / Grid (Abstract) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-blue-900/20" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              Why CruxLabs Hosting?
            </h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              We don't just host websites; we power digital experiences. With infrastructure designed for speed and reliability, you can focus on growing your business while we handle the tech.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {reasons.map((r, index) => (
                <motion.div
                  key={r.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <r.icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{r.title}</h3>
                    <p className="text-sm text-gray-500 leading-snug">{r.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-10">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                  Get Started Today
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative">
            {/* 3D-like Abstract Server Illustration */}
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Center Glowing Core */}
              <motion.div
                animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute inset-20 bg-blue-500/30 blur-[60px] rounded-full"
              />

              {/* Isometric Plates */}
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (i * 0.2) }}
                  className="absolute inset-0 border border-white/10 bg-white/5 backdrop-blur-md rounded-2xl shadow-2xl transform"
                  style={{
                    top: `${i * 40}px`,
                    left: `${i * 40}px`,
                    right: `${80 - i * 40}px`, // Offset to create stack effect
                    bottom: `${80 - i * 40}px`,
                    zIndex: 3 - i
                  }}
                >
                  <div className="h-full w-full p-6 flex flex-col justify-between">
                    <div className="flex justify-between items-center">
                      <div className="w-8 h-8 rounded-full bg-white/10" />
                      <div className="h-2 w-16 bg-white/10 rounded-full" />
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 w-full bg-white/5 rounded-full" />
                      <div className="h-2 w-2/3 bg-white/5 rounded-full" />
                    </div>
                  </div>
                </motion.div>
              ))}

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
