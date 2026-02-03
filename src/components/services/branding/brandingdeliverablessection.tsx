"use client"

import { motion } from "framer-motion"
import { Check, Download, FileImage, FileType, Palette, Layers, Box, Film } from "lucide-react"

const deliverables = [
  { icon: FileImage, label: "Primary & Secondary Logos (Vector/Raster)" },
  { icon: Palette, label: "Comprehensive Color Palette (CMYK/RGB/Hex)" },
  { icon: FileType, label: "Typography System & Font Licenses" },
  { icon: Layers, label: "Brand Pattern & Texture Library" },
  { icon: Box, label: "Stationery Design (Business Cards, Letterhead)" },
  { icon: Film, label: "Social Media Asset Kit" },
]

export default function BrandingDeliverablesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What You&apos;ll Receive</h2>
            <p className="text-lg text-gray-600 mb-8">
              We don&apos;t just send you a logo. You get a complete, production-ready brand toolkit containing everything you need to launch with confidence.
            </p>

            <div className="space-y-4">
              {deliverables.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:bg-blue-50 hover:border-blue-100 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm text-gray-400 group-hover:text-blue-600 transition-colors">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-gray-700 group-hover:text-gray-900">{item.label}</span>
                  <Check className="w-5 h-5 text-green-500 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-4 text-sm text-gray-500">
              <Download className="w-4 h-4" />
              <span>All files deliveblue in AI, EPS, PDF, PNG, SVG, and JPG formats.</span>
            </div>
          </div>

          <div className="relative">
            {/* Visual representation of a Brand Book / Deliverables Pack */}
            <div className="relative aspect-[4/5] bg-gray-100 rounded-3xl overflow-hidden p-8 shadow-2xl border border-gray-200 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-200" />

              {/* Brand Book Cover */}
              <div className="relative h-full bg-white rounded-2xl shadow-xl flex flex-col items-center justify-center border border-gray-100">
                <div className="w-24 h-24 bg-blue-600 rounded-full mb-6 flex items-center justify-center">
                  <span className="text-white text-3xl font-bold">B</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Brand Guidelines</h3>
                <p className="text-gray-400 uppercase tracking-widest text-xs">Volume 1.0</p>

                <div className="absolute bottom-8 w-full px-8 flex justify-between text-xs text-gray-400">
                  <span>CruxLabs Design</span>
                  <span>2024 Edition</span>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-10 -right-4 bg-white p-4 rounded-xl shadow-lg border border-gray-100"
              >
                <Palette className="w-6 h-6 text-blue-500" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute bottom-20 -left-4 bg-white p-4 rounded-xl shadow-lg border border-gray-100"
              >
                <FileType className="w-6 h-6 text-blue-500" />
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
