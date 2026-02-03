"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Layers,
  Search,
  ShieldCheck,
  Zap,
  HeadphonesIcon,
  CheckCircle2,
  Award,
} from "lucide-react";

const reasons = [
  {
    id: 1,
    title: "Custom Solutions",
    description: "Tailoblue web applications designed specifically for your unique business needs",
    icon: Sparkles,
  },
  {
    id: 2,
    title: "Scalable Architecture",
    description: "Built to grow with your business, handling increased traffic seamlessly",
    icon: Layers,
  },
  {
    id: 3,
    title: "SEO Optimized",
    description: "Search engine friendly code ensuring maximum visibility and organic reach",
    icon: Search,
  },
  {
    id: 4,
    title: "Security First",
    description: "Enterprise-grade security measures protecting your data and users",
    icon: ShieldCheck,
  },
  {
    id: 5,
    title: "Fast Delivery",
    description: "Agile development process ensuring quick turnaround without compromising quality",
    icon: Zap,
  },
  {
    id: 6,
    title: "Ongoing Support",
    description: "Dedicated support team available to help you succeed post-launch",
    icon: HeadphonesIcon,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

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
};

export default function WhyChooseWebSection() {
  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-blue-50/20" />

      {/* Floating Gradient Orbs - Blue only */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/4 right-10 w-80 h-80 bg-blue-300/15 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 50, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-1/4 left-10 w-80 h-80 bg-blue-300/15 rounded-full blur-3xl"
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 mb-6 rounded-full border border-border/50 bg-white/50 backdrop-blur-sm px-3 py-1.5 text-[13px] font-medium text-muted-foreground shadow-sm"
          >
            <Award className="h-3.5 w-3.5 text-[#2563eb]" />
            Why Choose Us
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-5">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] bg-clip-text text-transparent">
              CruxLabs
            </span>
          </h2>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            We combine expertise, innovation, and dedication to deliver exceptional
            web solutions that drive real results
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group relative p-6 sm:p-8 rounded-2xl border border-blue-100 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-2xl hover:border-blue-200 transition-all duration-500"
            >
              {/* Gradient Glow on Hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500" />

              {/* Number Badge */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 text-sm font-bold">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-14 h-14 mb-5 rounded-xl bg-gradient-to-br from-blue-500 to-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/20"
              >
                <reason.icon className="w-7 h-7 text-white" />
              </motion.div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {reason.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                {reason.description}
              </p>

              {/* Checkmark indicator */}
              <div className="flex items-center gap-2 text-blue-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <CheckCircle2 className="w-4 h-4" />
                <span>Included</span>
              </div>

              {/* Corner decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Bottom gradient line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl" />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 mb-6">
            Ready to build something amazing?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-blue-600 text-white font-semibold shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all"
          >
            Start Your Project
            <Sparkles className="w-5 h-5" />
          </motion.button>
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
  );
}
