"use client"

import { motion } from "framer-motion"
import { Target, PenTool, Search, Layers, Lock, Zap } from "lucide-react"

const reasons = [
  {
    title: "Strategic Approach",
    desc: "We don't just make things look pretty. We solve business problems with design thinking.",
    icon: Target
  },
  {
    title: "Bespoke Design",
    desc: "Zero templates. Every pixel is crafted specifically for your brand's unique needs.",
    icon: PenTool
  },
  {
    title: "Research-Backed",
    desc: "Our creative decisions are grounded in competitor research and market analysis.",
    icon: Search
  },
  {
    title: "Holistic Systems",
    desc: "We build flexible design systems that scale effortlessly across web, mobile, and print.",
    icon: Layers
  },
  {
    title: "Full Ownership",
    desc: "You own 100% of the final assets and source files. No hidden licensing fees.",
    icon: Lock
  },
  {
    title: "Rapid Turnaround",
    desc: "Efficient workflows that get you to market faster without sacrificing quality.",
    icon: Zap
  }
]

export default function WhyChooseBrandingSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Why Partner With CruxLabs?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We bridge the gap between creative artistry and commercial strategy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-4 p-6 rounded-2xl hover:bg-gray-50 transition-colors"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                <reason.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{reason.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {reason.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
