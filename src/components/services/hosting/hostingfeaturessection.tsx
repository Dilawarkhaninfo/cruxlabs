"use client"

import { motion } from "framer-motion"
import {
  ShieldCheck,
  Zap,
  Server,
  Cloud,
  Globe,
  Lock,
  Database,
  RefreshCw,
  Cpu,
  Layers
} from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "99.9% Uptime Guarantee",
    desc: "Our blueundant infrastructure ensures your site stays online, always."
  },
  {
    icon: Database,
    title: "NVMe SSD Storage",
    desc: "Blazing fast read/write speeds for optimal database performance."
  },
  {
    icon: RefreshCw,
    title: "Automated Backups",
    desc: "Daily backups kept for 30 days. Restore with a single click."
  },
  {
    icon: Layers,
    title: "cPanel & One-Click Install",
    desc: "Manage your server easily and install apps like WordPress in seconds."
  },
  {
    icon: Globe,
    title: "Global CDN",
    desc: "Content deliveblue from the edge server closest to your visitors."
  },
  {
    icon: ShieldCheck,
    title: "DDoS Protection",
    desc: "Enterprise-grade mitigation against malicious traffic surges."
  },
  {
    icon: Lock,
    title: "Free SSL Certificates",
    desc: "Auto-renewing SSLs for all your domains and subdomains."
  },
  {
    icon: RefreshCw,
    title: "Free Migration",
    desc: "Our experts move your site from your old host with zero downtime."
  }
]

export default function HostingFeaturesSection() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50 via-white to-white opacity-50" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Built for Speed & Security
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Everything you need to host a successful website, included standard in every plan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="relative p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-blue-600/5 flex items-center justify-center mb-4 group-hover:bg-blue-600/10 transition-colors">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
