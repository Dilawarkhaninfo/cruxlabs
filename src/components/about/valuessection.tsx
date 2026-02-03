"use client"

import { Target, Lightbulb, Users, Award } from "lucide-react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useRef } from "react"

const values = [
  {
    title: "Mission-Driven",
    description:
      "We are committed to delivering exceptional results that exceed expectations and drive real business growth.",
    icon: Target,
    gradient: "from-blue-500 to-blue-500",
    glowColor: "rgba(59, 130, 246, 0.4)",
  },
  {
    title: "Innovation First",
    description:
      "We stay ahead of digital trends and leverage cutting-edge technologies to give our clients a competitive advantage.",
    icon: Lightbulb,
    gradient: "from-blue-500 to-blue-600",
    glowColor: "rgba(6, 182, 212, 0.4)",
  },
  {
    title: "Client-Focused",
    description:
      "Your success is our success. We build long-term partnerships based on trust, transparency, and measurable results.",
    icon: Users,
    gradient: "from-blue-600 to-blue-500",
    glowColor: "rgba(37, 99, 235, 0.4)",
  },
  {
    title: "Excellence",
    description:
      "We maintain the highest standards in everything we do — from strategy and execution to ongoing support.",
    icon: Award,
    gradient: "from-blue-400 to-blue-400",
    glowColor: "rgba(59, 130, 246, 0.4)",
  },
]

// 3D Value Card Component
function ValueCard({ value, index }: { value: typeof values[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), {
    stiffness: 300,
    damping: 30,
  })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), {
    stiffness: 300,
    damping: 30,
  })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const deltaX = (e.clientX - centerX) / (rect.width / 2)
    const deltaY = (e.clientY - centerY) / (rect.height / 2)

    mouseX.set(deltaX)
    mouseY.set(deltaY)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.4, 0, 0.2, 1] as const,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative h-full"
    >
      {/* Outer Glow */}
      <div
        className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
        style={{
          background: `linear-gradient(135deg, ${value.glowColor}, transparent)`,
        }}
      />

      {/* Card */}
      <div
        className="relative h-full rounded-2xl border-2 border-blue-200/50 bg-white/90 backdrop-blur-sm p-8 transition-all duration-500 group-hover:border-blue-400/70 group-hover:shadow-2xl"
        style={{
          transform: "translateZ(20px)",
          boxShadow:
            "0 10px 40px -10px rgba(59, 130, 246, 0.2), inset 0 1px 0 0 rgba(255, 255, 255, 0.9)",
        }}
      >
        {/* Gradient Background on Hover */}
        <div
          className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500`}
        />

        {/* Icon Container */}
        <motion.div
          style={{ transform: "translateZ(40px)" }}
          className="relative mb-6"
        >
          <div className={`relative inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br ${value.gradient} p-0.5 shadow-lg group-hover:shadow-xl transition-all duration-500`}>
            <div className="w-full h-full bg-white rounded-[11px] flex items-center justify-center">
              <motion.div
                whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <value.icon className="w-7 h-7 text-blue-600 group-hover:text-blue-700 transition-colors" />
              </motion.div>
            </div>
          </div>

          {/* Pulsing Ring */}
          <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-500`} />
        </motion.div>

        {/* Title */}
        <motion.h3
          style={{ transform: "translateZ(30px)" }}
          className={`text-xl font-bold mb-3 bg-gradient-to-br ${value.gradient} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}
        >
          {value.title}
        </motion.h3>

        {/* Description */}
        <motion.p
          style={{ transform: "translateZ(25px)" }}
          className="text-sm leading-relaxed text-gray-600 group-hover:text-gray-700 transition-colors"
        >
          {value.description}
        </motion.p>

        {/* Decorative Elements */}
        <div className={`absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500 rounded-full`} />
        <div className={`absolute top-0 left-0 w-20 h-20 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-5 blur-xl transition-opacity duration-700 rounded-full`} />
      </div>
    </motion.div>
  )
}

export default function ValuesSection() {
  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-white" />

      {/* Floating Gradient Orbs */}
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 80, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/4 left-10 w-96 h-96 bg-blue-300/15 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-300/15 rounded-full blur-3xl"
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-1.5 mb-6 rounded-full border border-border/50 bg-white/50 backdrop-blur-sm px-3 py-1.5 text-[13px] font-medium text-muted-foreground shadow-sm"
          >
            <Award className="h-3.5 w-3.5 text-blue-600" />
            Our Core Values
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground mb-5">
            What Drives Us Forward
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            The principles that guide every decision we make and every solution we deliver.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6"
          style={{ perspective: "1000px" }}
        >
          {values.map((value, index) => (
            <ValueCard key={value.title} value={value} index={index} />
          ))}
        </div>

        {/* Bottom Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 mx-auto max-w-md h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent"
        />
      </div>
    </section>
  )
}
