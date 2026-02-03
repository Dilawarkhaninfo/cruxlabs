"use client"

import {
  Smartphone,
  ShoppingCart,
  Code2,
  FileEdit,
  Zap,
  ShieldCheck,
  CheckCircle2,
  Sparkles
} from "lucide-react"
import { motion } from "framer-motion"
import { Spotlight } from "@/components/ui/spotlight"
import {
  CardHoverReveal,
  CardHoverRevealContent,
  CardHoverRevealMain,
} from "@/components/ui/reveal-on-hover"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const offerings = [
  {
    id: "responsive-design",
    icon: Smartphone,
    title: "Responsive Design",
    description: "Mobile-first websites that work flawlessly across all devices with adaptive layouts and touch-optimized interfaces.",
    features: [
      "Mobile-first approach",
      "Cross-browser compatibility",
      "Touch-optimized UI"
    ],
    type: "Design",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=2036&auto=format&fit=crop",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    id: "ecommerce",
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "Secure, scalable online stores with integrated payment gateways, inventory management, and analytics.",
    features: [
      "Payment gateway integration",
      "Inventory management",
      "Order tracking system"
    ],
    type: "E-commerce",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    id: "custom-apps",
    icon: Code2,
    title: "Custom Web Applications",
    description: "Tailoblue platforms built around your business workflows with advanced features and seamless integrations.",
    features: [
      "Custom business logic",
      "Third-party integrations",
      "Scalable architecture"
    ],
    type: "Development",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    id: "cms",
    icon: FileEdit,
    title: "CMS Integration",
    description: "Easily manage your content without technical complexity through intuitive admin panels and workflows.",
    features: [
      "User-friendly interface",
      "Content versioning",
      "Media management"
    ],
    type: "Content",
    image: "https://images.unsplash.com/photo-1583965057951-f3e4a94d5cb3?q=80&w=1271&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    id: "performance",
    icon: Zap,
    title: "Performance Optimization",
    description: "Lightning-fast load times with Core Web Vitals optimization, lazy loading, and efficient code splitting.",
    features: [
      "Core Web Vitals optimization",
      "Image optimization",
      "Code splitting & caching"
    ],
    type: "Performance",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    id: "maintenance",
    icon: ShieldCheck,
    title: "Ongoing Maintenance",
    description: "Continuous security updates, performance monitoring, and long-term technical support for your platform.",
    features: [
      "Security patches",
      "Performance monitoring",
      "24/7 technical support"
    ],
    type: "Support",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop",
    gradient: "from-blue-500 to-blue-600",
  },
]

export default function OfferingsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
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
    <section className="relative py-20 sm:py-24 lg:py-32 px-4 sm:px-6 bg-gradient-to-b from-gray-50/50 to-white dark:from-zinc-900 dark:to-black overflow-hidden">
      {/* Spotlight Effect */}
      <Spotlight
        className="from-blue-600 via-blue-500 to-blue-400 blur-3xl dark:from-blue-900 dark:via-blue-700 dark:to-blue-900"
        size={700}
      />

      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-[0.15]">
        <svg className="h-full w-full">
          <defs>
            <pattern
              id="offerings-grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 30H30M30 30V0M30 30H60M30 30V60"
                stroke="currentColor"
                strokeWidth="1"
                strokeOpacity="0.2"
                className="stroke-blue-500 dark:stroke-blue-400"
              />
              <circle
                cx="30"
                cy="30"
                r="2"
                fill="currentColor"
                fillOpacity="0.3"
                className="fill-blue-500 dark:fill-blue-400"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#offerings-grid)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center mb-14 sm:mb-20"
        >
          <div className="inline-flex items-center gap-1.5 rounded-full border border-border/50 bg-white/50 backdrop-blur-sm px-3 py-1.5 text-[13px] font-medium text-muted-foreground mb-6 shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-[#2563eb]" />
            What We Offer
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-tight text-foreground mb-6">
            Complete Web{" "}
            <span className="bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            From concept to deployment, we deliver comprehensive web services that drive growth and exceed expectations.
          </p>
        </motion.div>

        {/* Offerings Grid - 2 Column Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {offerings.map((offering, index) => (
            <motion.div
              key={offering.id}
              variants={itemVariants}
              custom={index}
            >
              <CardHoverReveal className="h-full shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-border/50 rounded-2xl overflow-hidden">
                <CardHoverRevealMain>
                  <div className="size-full aspect-[16/10] relative">
                    <Image
                      alt={offering.title}
                      src={offering.image}
                      fill
                      className="object-cover"
                      priority={index < 2}
                    />
                    {/* Enhanced Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-transparent" />

                    {/* Content Overlay */}
                    <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between">
                      {/* Top Badge */}
                      <div className="flex items-start justify-between">
                        <Badge
                          className={`capitalize rounded-full bg-gradient-to-r ${offering.gradient} text-white border-0 text-xs font-semibold px-3 py-1 shadow-lg`}
                        >
                          {offering.type}
                        </Badge>

                        {/* Icon */}
                        <div className="p-3 rounded-xl bg-white/15 backdrop-blur-md border border-white/20">
                          <offering.icon className="h-6 w-6 text-white" strokeWidth={2} />
                        </div>
                      </div>

                      {/* Bottom Content */}
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                          {offering.title}
                        </h3>
                        <p className="text-sm text-white/80 line-clamp-2">
                          {offering.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardHoverRevealMain>

                <CardHoverRevealContent className="space-y-4 rounded-2xl bg-gradient-to-br from-black/95 via-black/90 to-black/85 backdrop-blur-xl p-6 sm:p-8">
                  {/* Description */}
                  <p className="text-white/90 text-sm leading-relaxed">
                    {offering.description}
                  </p>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                  {/* Features */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-bold text-white flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-blue-400" />
                      Key Features
                    </h4>
                    <ul className="space-y-2.5">
                      {offering.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 group">
                          <div className="mt-0.5 p-1 rounded-full bg-gradient-to-r from-blue-500/20 to-blue-500/20 group-hover:from-blue-500/40 group-hover:to-blue-500/40 transition-all">
                            <CheckCircle2 className="h-3.5 w-3.5 text-blue-400 group-hover:text-blue-300 transition-colors" />
                          </div>
                          <span className="text-sm text-white/80 group-hover:text-white/95 transition-colors">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Hint */}
                  <div className="pt-2">
                    <div className="inline-flex items-center gap-2 text-xs text-blue-400 group-hover:text-blue-300">
                      <span>Learn more</span>
                      <svg className="h-3 w-3 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </CardHoverRevealContent>
              </CardHoverReveal>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-muted-foreground mb-4">
            Need something custom? Let&apos;s discuss your requirements
          </p>
          <div className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:gap-3 transition-all cursor-pointer">
            <span>Get in touch</span>
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  )
}