"use client"

import { motion } from "framer-motion"
import {
  Palette,
  LayoutTemplate,
  Type,
  BookOpen,
  Megaphone,
  RefreshCw,
  Sparkles,
  ArrowRight
} from "lucide-react"

const services = [
  {
    title: "Logo Design",
    desc: "Distinctive, memorable logos crafted to capture your brand's essence and stand the test of time.",
    icon: Palette,
    color: "blue"
  },
  {
    title: "Brand Strategy",
    desc: "In-depth market positioning and messaging frameworks that differentiate you from competitors.",
    icon: Megaphone,
    color: "blue"
  },
  {
    title: "Visual Identity Systems",
    desc: "Comprehensive design languages including color palettes, typography, and graphic elements.",
    icon: LayoutTemplate,
    color: "pink"
  },
  {
    title: "Brand Guidelines",
    desc: "Detailed brand books ensuring consistency across every touchpoint and team member.",
    icon: BookOpen,
    color: "indigo"
  },
  {
    title: "Typography Design",
    desc: "Custom type pairings or bespoke font modification to give your voice a unique tone.",
    icon: Type,
    color: "blue"
  },
  {
    title: "Brand Refresh",
    desc: "Modernizing legacy brands to stay relevant while retaining their core equity and recognition.",
    icon: RefreshCw,
    color: "emerald"
  }
]

export default function BrandingServicesSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-50 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Our Expertise
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
            Everything You Need to Build an <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-600">Iconic Brand</span>
          </h2>
          <p className="text-lg text-gray-600">
            From foundational strategy to pixel-perfect execution, we provide a full suite of services to bring your vision to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className={`absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity text-${service.color}-500`}>
                <service.icon className="w-24 h-24 transform rotate-12" />
              </div>

              <div className={`w-12 h-12 rounded-xl bg-${service.color}-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className={`w-6 h-6 text-${service.color}-600`} />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-500 leading-relaxed mb-6">
                {service.desc}
              </p>

              <div className="flex items-center text-sm font-medium text-blue-600 opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </div>

              <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-blue-500 w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
