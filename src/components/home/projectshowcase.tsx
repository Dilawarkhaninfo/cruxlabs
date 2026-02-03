"use client"

import { Carousel } from "@/components/ui/carousel"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sparkles, ArrowRight, Monitor, Smartphone, Tablet } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Modern e-commerce solution with seamless checkout experience",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&h=600&fit=crop&q=80",
    deviceType: "Desktop View",
    icon: Monitor,
    gradient: "from-blue-500 to-blue-500",
  },
  {
    id: 2,
    title: "Banking Mobile App",
    description: "Secure and intuitive mobile banking application",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop&q=80",
    deviceType: "Mobile View",
    icon: Smartphone,
    gradient: "from-blue-500 to-blue-600",
  },
  {
    id: 3,
    title: "Dashboard Analytics",
    description: "Real-time analytics dashboard for data visualization",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80",
    deviceType: "Tablet View",
    icon: Tablet,
    gradient: "from-blue-600 to-blue-500",
  },
  {
    id: 4,
    title: "SaaS Platform",
    description: "Cloud-based SaaS solution for business automation",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80",
    deviceType: "Desktop View",
    icon: Monitor,
    gradient: "from-blue-500 to-blue-400",
  },
  {
    id: 5,
    title: "Fitness Tracking App",
    description: "Health and fitness tracker with AI-poweblue insights",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop&q=80",
    deviceType: "Mobile View",
    icon: Smartphone,
    gradient: "from-blue-500 to-blue-600",
  },
  {
    id: 6,
    title: "Social Media Platform",
    description: "Next-generation social networking platform",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop&q=80",
    deviceType: "Tablet View",
    icon: Tablet,
    gradient: "from-blue-600 to-blue-500",
  },
]

export default function ProjectShowcase() {
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
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-blue-50/20" />

      {/* Floating Gradient Orbs */}
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -60, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/4 left-10 w-96 h-96 bg-blue-300/15 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, -60, 0],
          y: [0, 80, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
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
            <Sparkles className="h-3.5 w-3.5 text-[#2563eb]" />
            Our Recent Work
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-5"
          >
            Our Recent{" "}
            <span className="bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-gray-600 leading-relaxed"
          >
            Explore our latest web design and development projects showcasing responsive
            designs across all devices
          </motion.p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <Carousel
            slides={projects.map((project) => (
              <div
                key={project.id}
                className="group relative h-[400px] sm:h-[500px] overflow-hidden rounded-2xl border-2 border-blue-200/50 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                {/* Image */}
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                    {/* Device Badge */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      className={`inline-flex items-center gap-2 mb-3 px-3 py-1.5 rounded-full bg-gradient-to-r ${project.gradient} text-white text-xs font-semibold shadow-lg`}
                    >
                      <project.icon className="w-3.5 h-3.5" />
                      {project.deviceType}
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-gray-200 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {project.description}
                    </p>

                    {/* View Project Button */}
                    <motion.button
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/20 backdrop-blur-sm text-white font-medium text-sm hover:bg-white/30 transition-all opacity-0 group-hover:opacity-100 duration-500 delay-200"
                    >
                      View Project
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>

                {/* Corner Glow */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500`} />
              </div>
            ))}
            options={{ loop: true }}
          />
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link href="/portfolio">
            <Button
              size="lg"
              className="h-12 px-8 rounded-full bg-gradient-to-r from-blue-600 to-blue-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all group"
            >
              View All Projects
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>

        {/* Bottom Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 mx-auto max-w-md h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent"
        />
      </div>
    </section>
  )
}
