"use client"

import { motion } from "framer-motion"
import { Search, Lightbulb, PenTool, Rocket } from "lucide-react"

const process = [
  {
    step: "01",
    title: "Discovery & Research",
    desc: "We dive deep into your business, analyzing your audience, competitors, and market position to find your unique angle.",
    icon: Search
  },
  {
    step: "02",
    title: "Strategy & Concept",
    desc: "We develop the core strategic foundation and explore initial creative directions that align with your business goals.",
    icon: Lightbulb
  },
  {
    step: "03",
    title: "Design & Refinement",
    desc: "We craft the visual system, iterating on logos, typography, and colors until every detail is perfect.",
    icon: PenTool
  },
  {
    step: "04",
    title: "Launch & Guidelines",
    desc: "We deliver your final assets along with a comprehensive brand book to ensure consistency as you grow.",
    icon: Rocket
  }
]

export default function BrandingProcessSection() {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Connecting Line (Desktop) */}
      <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Creative Process</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A proven methodology that transforms abstract ideas into concrete, impactful brand identities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {process.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative bg-white p-8 rounded-2xl shadow-sm border border-gray-100 z-10 hover:shadow-lg transition-shadow"
            >
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white p-2 rounded-full border border-gray-100 shadow-sm">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
              </div>

              <div className="mt-6 text-center">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4 text-blue-600">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
