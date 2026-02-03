"use client"

import { motion } from "framer-motion"
import { ShoppingBag, Code2, Building2, Briefcase, PenTool, Radio } from "lucide-react"

const industries = [
  { icon: ShoppingBag, label: "E-commerce" },
  { icon: Code2, label: "SaaS Startups" },
  { icon: Building2, label: "Enterprise" },
  { icon: Briefcase, label: "Agencies" },
  { icon: PenTool, label: "Bloggers" },
  { icon: Radio, label: "Media" },
]

export default function HostingTrustSection() {
  return (
    <section className="py-24 bg-gray-50/50 border-y border-gray-200/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-10">Trusted by High-Growth Industries</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {industries.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center justify-center gap-4 group cursor-default"
            >
              <div className="w-16 h-16 rounded-2xl bg-white border border-gray-200 flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:border-blue-200 transition-all">
                <item.icon className="w-7 h-7 text-gray-400 group-hover:text-blue-600 transition-colors" />
              </div>
              <span className="text-sm font-medium text-gray-500 group-hover:text-gray-900 transition-colors">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
