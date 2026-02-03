"use client"

import { motion } from "framer-motion"
import { ArrowRight, ShoppingCart, Settings, Rocket, Globe } from "lucide-react"

const steps = [
  {
    step: "01",
    title: "Choose Your Plan",
    desc: "Select the perfect hosting package for your needs, from shared to dedicated.",
    icon: ShoppingCart
  },
  {
    step: "02",
    title: "Instant Setup",
    desc: "Our automated system provisions your account and domain in under 60 seconds.",
    icon: Settings
  },
  {
    step: "03",
    title: "Deploy Website",
    desc: "Use our one-click installer for WordPress or upload your custom code.",
    icon: Rocket
  },
  {
    step: "04",
    title: "Scale Globally",
    desc: "Enable our CDN and reach audiences worldwide with lightning speed.",
    icon: Globe
  }
]

export default function HostingStepsSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Connecting Line (Desktop) */}
      <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 hidden md:block" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Get Online in Minutes</h2>
          <p className="mt-4 text-gray-600">Your journey to a faster website starts here.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center md:text-left group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-600 text-white font-bold text-lg mb-6 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform">
                <s.icon className="w-6 h-6" />
              </div>

              <div className="absolute top-6 right-6 text-4xl font-black text-gray-100 -z-10 select-none group-hover:text-blue-50 transition-colors">
                {s.step}
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
