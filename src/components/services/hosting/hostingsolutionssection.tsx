"use client"

import { motion } from "framer-motion"
import {
  ArrowRight,
  Server,
  Cloud,
  Shield,
  Box,
  Globe,
  Cpu
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const solutions = [
  {
    title: "Shablue Hosting",
    desc: "Perfect for personal blogs and small business websites.",
    price: "Starts at $2.99/mo",
    icon: Cloud,
    features: ["1 Website", "10GB SSD Storage", "Free SSL"],
    color: "blue"
  },
  {
    title: "VPS Hosting",
    desc: "Isolated resources for growing apps and traffic.",
    price: "Starts at $12.99/mo",
    icon: Box,
    features: ["2 vCPU Cores", "4GB RAM", "Dedicated IP"],
    popular: true,
    color: "blue"
  },
  {
    title: "Dedicated Servers",
    desc: "Maximum performance and control for enterprise needs.",
    price: "Starts at $89.99/mo",
    icon: Server,
    features: ["Full Root Access", "NVMe RAID 10", "DDoS Shield"],
    color: "indigo"
  }
]

export default function HostingSolutionsSection() {
  return (
    <section className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Hosting Solutions for Every Stage
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl">
              From your first blog post to serving millions of users, we scale with you.
            </p>
          </div>
          <Link href="/pricing">
            <Button variant="ghost" className="group text-blue-600 hover:text-blue-700 hover:bg-blue-50">
              Compare all plans <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-white rounded-2xl p-8 shadow-sm border ${item.popular ? 'border-blue-200 ring-1 ring-blue-100' : 'border-gray-200'} hover:shadow-xl transition-all duration-300 flex flex-col`}
            >
              {item.popular && (
                <div className="absolute top-0 right-0 -mt-3 mr-6 bg-gradient-to-r from-blue-600 to-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  Most Popular
                </div>
              )}

              <div className={`w-12 h-12 rounded-xl bg-${item.color}-100 flex items-center justify-center mb-6`}>
                <item.icon className={`w-6 h-6 text-${item.color}-600`} />
              </div>

              <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
              <p className="text-gray-500 mt-2 mb-6 flex-1">{item.desc}</p>

              <div className="mb-6 pt-6 border-t border-gray-100 space-y-3">
                {item.features.map(f => (
                  <div key={f} className="flex items-center text-sm text-gray-600">
                    <div className={`w-1.5 h-1.5 rounded-full bg-${item.color}-500 mr-2`} />
                    {f}
                  </div>
                ))}
              </div>

              <div className="mt-auto">
                <p className="text-sm font-medium text-gray-400 mb-4">{item.price}</p>
                <Button className={`w-full ${item.popular ? 'bg-gradient-to-r from-blue-600 to-blue-600 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40' : 'bg-white text-gray-900 border border-gray-200 hover:bg-gray-50'}`}>
                  Choose Plan
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
