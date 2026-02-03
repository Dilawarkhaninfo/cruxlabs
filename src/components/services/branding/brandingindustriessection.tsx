"use client"

import { motion } from "framer-motion"
import { ShoppingBag, Laptop, Building2, Home, Heart, GraduationCap, Utensils, Plane } from "lucide-react"

const industries = [
  { icon: ShoppingBag, label: "Retail & Fashion" },
  { icon: Laptop, label: "Tech Startups" },
  { icon: Utensils, label: "Food & Beverage" },
  { icon: Building2, label: "Corporate" },
  { icon: Home, label: "Real Estate" },
  { icon: Heart, label: "Health & Wellness" },
  { icon: GraduationCap, label: "Education" },
  { icon: Plane, label: "Travel & Tourism" },
]

export default function BrandingIndustriesSection() {
  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Industries We Transform</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-16">
          Every sector has its own language. We help you speak it fluently, whether you're selling software or streetwear.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {industries.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-blue-600 hover:border-blue-500 transition-all duration-300 group cursor-default"
            >
              <item.icon className="w-10 h-10 mx-auto mb-4 text-gray-400 group-hover:text-white transition-colors" />
              <h3 className="font-semibold text-lg">{item.label}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
