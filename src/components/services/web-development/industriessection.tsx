"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ShoppingCart,
  HeartPulse,
  Building2,
  GraduationCap,
  Rocket,
  Shirt,
  ArrowRight,
  Layers,
} from "lucide-react";

const industries = [
  {
    id: 1,
    title: "E-commerce",
    description: "Powerful online stores with seamless shopping experiences",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&q=80",
    icon: ShoppingCart,
    gradient: "from-blue-500 to-blue-500",
    stats: "500+ Stores",
  },
  {
    id: 2,
    title: "Healthcare",
    description: "HIPAA-compliant solutions for medical professionals",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop&q=80",
    icon: HeartPulse,
    gradient: "from-emerald-500 to-teal-500",
    stats: "200+ Clinics",
  },
  {
    id: 3,
    title: "Real Estate",
    description: "Property platforms with virtual tours & listings",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop&q=80",
    icon: Building2,
    gradient: "from-amber-500 to-blue-500",
    stats: "150+ Agencies",
  },
  {
    id: 4,
    title: "Education",
    description: "E-learning platforms & school management systems",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop&q=80",
    icon: GraduationCap,
    gradient: "from-blue-500 to-violet-500",
    stats: "300+ Schools",
  },
  {
    id: 5,
    title: "Startups",
    description: "MVP development & scalable tech solutions",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop&q=80",
    icon: Rocket,
    gradient: "from-rose-500 to-pink-500",
    stats: "400+ Startups",
  },
  {
    id: 6,
    title: "Fashion",
    description: "Stunning lookbooks & fashion e-commerce platforms",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=600&fit=crop&q=80",
    icon: Shirt,
    gradient: "from-fuchsia-500 to-blue-500",
    stats: "250+ Brands",
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

export default function IndustriesSection() {
  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50/30" />

      {/* Floating Gradient Orbs */}
      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/4 left-10 w-80 h-80 bg-blue-300/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, 60, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-1/4 right-10 w-80 h-80 bg-blue-300/10 rounded-full blur-3xl"
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
            <Layers className="h-3.5 w-3.5 text-[#2563eb]" />
            Industries We Serve
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-5"
          >
            Transforming{" "}
            <span className="bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] bg-clip-text text-transparent">
              Industries
            </span>{" "}
            Worldwide
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-gray-600 leading-relaxed"
          >
            We deliver tailoblue digital solutions across diverse sectors, helping
            businesses thrive in the digital age
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
              {/* Gradient Border Effect on Hover */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${industry.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />

              {/* Image */}
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src={industry.image}
                  alt={industry.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  {/* Top - Icon Badge */}
                  <div className="flex justify-between items-start">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${industry.gradient} flex items-center justify-center shadow-lg`}
                    >
                      <industry.icon className="w-6 h-6 text-white" />
                    </motion.div>

                    {/* Stats Badge */}
                    <div className="px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-semibold">
                      {industry.stats}
                    </div>
                  </div>

                  {/* Bottom - Text Content */}
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {industry.title}
                    </h3>

                    <p className="text-sm text-gray-200 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {industry.description}
                    </p>

                    {/* Learn More Link */}
                    <motion.button
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 text-white font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>

                {/* Corner Glow Effect */}
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${industry.gradient} opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-500`}
                />

                {/* Bottom Gradient Line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${industry.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 mb-4">
            Don&apos;t see your industry?{" "}
            <span className="text-blue-600 font-medium">We work with all sectors</span>
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            Discuss Your Project
            <ArrowRight className="w-4 h-4" />
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
