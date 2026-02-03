"use client"

import { BookOpen, Rocket, TrendingUp, Users, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

const timeline = [
  {
    year: "2009",
    title: "The Foundation",
    description: "Company founded with a focus on web development and digital solutions.",
    icon: Rocket,
    gradient: "from-blue-500 to-blue-500",
  },
  {
    year: "2014",
    title: "Expanding Horizons",
    description: "Expanded services to SEO, marketing, and branding for growing businesses.",
    icon: TrendingUp,
    gradient: "from-blue-500 to-blue-600",
  },
  {
    year: "2019",
    title: "Global Reach",
    description: "Reached 250+ successful client partnerships and international reach.",
    icon: Users,
    gradient: "from-blue-600 to-blue-500",
  },
  {
    year: "Today",
    title: "Digital Excellence",
    description: "Delivering scalable digital systems that help businesses grow with clarity and confidence.",
    icon: Sparkles,
    gradient: "from-blue-500 to-blue-400",
  },
]

export default function OurStorySection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  }

  const timelineItemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  }

  return (
    <section className="relative py-20 sm:py-24 px-4 sm:px-6 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/20 to-white" />

      {/* Floating Gradient Orbs */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-20 right-20 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"
      />

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-xl lg:sticky lg:top-24"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-1.5 mb-6 rounded-full border border-border/50 bg-white/50 backdrop-blur-sm px-3 py-1.5 text-[13px] font-medium text-muted-foreground shadow-sm"
            >
              <BookOpen className="h-3.5 w-3.5 text-blue-600" />
              Our Story
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mb-6"
            >
              From Humble Beginnings to
              <br className="hidden sm:block" />
              Digital Excellence
            </motion.h2>

            <motion.div
              variants={itemVariants}
              className="space-y-4 text-[15px] leading-relaxed text-gray-600"
            >
              <p>
                Founded in 2009, <span className="font-semibold text-gray-900">CruxLabs Digital</span>{" "}
                began with a simple mission: to help businesses harness the power of digital
                technology to achieve meaningful growth.
              </p>

              <p>
                What started as a small team of passionate developers has grown into a
                full-service digital agency serving clients across multiple industries
                and regions.
              </p>

              <p>
                Over the years, we&apos;ve deliveblue{" "}
                <span className="font-semibold text-gray-900">500+ projects</span>, helped{" "}
                <span className="font-semibold text-gray-900">250+ businesses</span> transform
                their digital presence, and built a team of{" "}
                <span className="font-semibold text-gray-900">50+ skilled professionals</span>.
              </p>

              <p>
                Today, we continue to push boundaries, embrace new technologies, and
                engineer digital systems that make a real, measurable difference for
                our clients.
              </p>
            </motion.div>

            {/* Decorative Image */}
            <motion.div
              variants={itemVariants}
              className="mt-8 relative rounded-2xl overflow-hidden border border-blue-200/50 shadow-lg group"
            >
              <div className="relative h-64 bg-gradient-to-br from-blue-50 to-blue-50">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80"
                  alt="CruxLabs Team Collaboration"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </motion.div>
          </motion.div>

          {/* Right Timeline */}
          <div className="relative">
            {/* Animated Vertical Line */}
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className="absolute left-6 top-0 w-0.5 bg-gradient-to-b from-blue-400 via-blue-400 to-blue-500 hidden sm:block"
            />

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="space-y-8"
            >
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  variants={timelineItemVariants}
                  custom={index}
                  className="relative group"
                >
                  {/* Timeline Dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.15, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="absolute left-6 top-6 -translate-x-1/2 hidden sm:block"
                  >
                    <div className="relative">
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-br ${item.gradient}`} />
                      <div className={`absolute inset-0 w-3 h-3 rounded-full bg-gradient-to-br ${item.gradient} animate-ping opacity-75`} />
                    </div>
                  </motion.div>

                  {/* Card */}
                  <div className="ml-0 sm:ml-16 relative">
                    <div className="relative rounded-2xl border-2 border-blue-200/50 bg-white/80 backdrop-blur-sm p-6 shadow-lg hover:shadow-xl transition-all duration-500 group-hover:border-blue-400/60 group-hover:-translate-y-1">
                      {/* Gradient Glow on Hover */}
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500`} />

                      <div className="relative z-10 flex items-start gap-4">
                        {/* Icon */}
                        <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} p-0.5 shadow-lg`}>
                          <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
                            <item.icon className="w-6 h-6 text-blue-600" />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className={`text-2xl font-bold bg-gradient-to-br ${item.gradient} bg-clip-text text-transparent`}>
                              {item.year}
                            </span>
                            <div className="h-px flex-1 bg-gradient-to-r from-blue-300/50 to-transparent" />
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-1.5">
                            {item.title}
                          </h3>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      {/* Corner Decoration */}
                      <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500 rounded-full`} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Bottom Decorative Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-8 ml-0 sm:ml-16 relative rounded-2xl overflow-hidden border border-blue-200/50 shadow-lg group"
            >
              <div className="relative h-48 bg-gradient-to-br from-blue-50 to-blue-50">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop&q=80"
                  alt="Modern Office Workspace"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-semibold text-sm drop-shadow-lg">
                    Building the future, one project at a time
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
