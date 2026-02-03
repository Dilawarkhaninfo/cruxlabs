"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import {
  ShoppingCart,
  Building2,
  GraduationCap,
  Scale,
  Stethoscope,
  Cloud,
  ArrowRight,
  Layers,
} from "lucide-react"

const industries = [
  {
    id: 1,
    title: "E-commerce",
    description: "Drive sales with product-focused SEO strategies",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&q=80",
    icon: ShoppingCart,
    gradient: "from-blue-500 to-blue-600",
    stats: "50% Traffic Increase",
  },
  {
    id: 2,
    title: "SaaS & Tech",
    description: "Scale user acquisition with technical SEO",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80",
    icon: Cloud,
    gradient: "from-blue-500 to-blue-500",
    stats: "3x Leads Generated",
  },
  {
    id: 3,
    title: "Legal & Finance",
    description: "Build authority and trust in competitive markets",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=800&h=600&fit=crop&q=80",
    icon: Scale,
    gradient: "from-indigo-500 to-blue-500",
    stats: "Top 3 Rankings",
  },
  {
    id: 4,
    title: "Medical / Health",
    description: "Patient-centric SEO for healthcare providers",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop&q=80",
    icon: Stethoscope,
    gradient: "from-emerald-500 to-teal-500",
    stats: "200+ New Patients",
  },
  {
    id: 5,
    title: "Real Estate",
    description: "Capture local market share with location SEO",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop&q=80",
    icon: Building2,
    gradient: "from-amber-500 to-blue-500",
    stats: "150+ Listings Ranked",
  },
  {
    id: 6,
    title: "Education",
    description: "Attract students with informative content strategies",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: GraduationCap,
    gradient: "from-violet-500 to-blue-500",
    stats: "40% Enrollment Boost",
  },
]

export default function SEOIndustriesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  }

  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/20 to-blue-50/10" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-1.5 mb-6 rounded-full border border-border/50 bg-white/50 backdrop-blur-sm px-3 py-1.5 text-[13px] font-medium text-muted-foreground shadow-sm"
          >
            <Layers className="h-3.5 w-3.5 text-[#2563eb]" />
            Industries We Serve
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-5"
          >
            Tailoblue SEO for{" "}
            <span className="bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] bg-clip-text text-transparent">
              Every Sector
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-muted-foreground leading-relaxed"
          >
            We understand the unique search challenges of different industries and build custom strategies to overcome them.
          </motion.p>
        </motion.div>

        {/* Industries Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {industries.map((industry) => (
            <motion.div
              key={industry.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group relative h-[320px] sm:h-[360px] overflow-hidden rounded-2xl border border-gray-200/60 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src={industry.image}
                  alt={industry.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  {/* Top - Icon Badge */}
                  <div className="flex justify-between items-start">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${industry.gradient} flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300`}
                    >
                      <industry.icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Stats Badge */}
                    <div className="px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-semibold border border-white/10">
                      {industry.stats}
                    </div>
                  </div>

                  {/* Bottom - Text Content */}
                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {industry.title}
                    </h3>

                    <p className="text-sm text-gray-300 mb-6 opacity-90 group-hover:opacity-100 transition-opacity">
                      {industry.description}
                    </p>

                    {/* Learn More Link */}
                    <div
                      className="inline-flex items-center gap-2 text-white font-medium text-sm group-hover:gap-3 transition-all cursor-pointer"
                    >
                      View Strategy
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
