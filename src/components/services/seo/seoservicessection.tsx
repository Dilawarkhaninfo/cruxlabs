"use client"

import {
  Search,
  Target,
  BarChart3,
  Link2,
  MapPin,
  FileSearch,
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

const services = [
  {
    title: "Keyword Research",
    description: "Identify high-value keywords that drive qualified traffic and align with user intent.",
    features: [
      "Competitor gap analysis",
      "Long-tail opportunity finding",
      "Search intent mapping"
    ],
    type: "Strategy",
    image: "/images/seo/keyword-research.png",
    icon: Search,
  },
  {
    title: "On-Page Optimization",
    description: "Optimize content, metadata, and site structure for maximum search visibility.",
    features: [
      "Meta tag optimization",
      "Content structuring",
      "Internal linking strategy"
    ],
    type: "Content",
    image: "/images/seo/on-page.png",
    icon: Target,
  },
  {
    title: "Technical SEO",
    description: "Fix performance, indexing, and crawlability issues to ensure a healthy site foundation.",
    features: [
      "Site speed optimization",
      "Schema markup implementation",
      "Mobile-friendliness audit"
    ],
    type: "Technical",
    image: "/images/seo/technical-seo.png",
    icon: FileSearch,
  },
  {
    title: "Link Building",
    description: "Earn high-authority backlinks to improve domain trust and search rankings.",
    features: [
      "High-authority outreach",
      "Guest posting strategy",
      "Broken link building"
    ],
    type: "Authority",
    image: "/images/seo/link-building.png",
    icon: Link2,
  },
  {
    title: "Local SEO",
    description: "Dominate local search results and attract customers in your specific geographic market.",
    features: [
      "GMB optimization",
      "Local citation building",
      "Review management"
    ],
    type: "Local",
    image: "/images/seo/local-seo.png",
    icon: MapPin,
  },
  {
    title: "SEO Audits & Reporting",
    description: "Comprehensive audits and transparent monthly reports to track growth and ROI.",
    features: [
      "Deep-dive site audits",
      "Competitor benchmarking",
      "ROI tracking & reporting"
    ],
    type: "Analytics",
    image: "/images/seo/seo-audits.png",
    icon: BarChart3,
  },
]

export default function SEOServicesSection() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
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
              id="seo-services-grid"
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
          <rect width="100%" height="100%" fill="url(#seo-services-grid)" />
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
            Comprehensive SEO
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-tight text-foreground mb-6">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] bg-clip-text text-transparent">
              Rank Higher
            </span>
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            From technical foundations to content strategy, we provide end-to-end SEO services designed for sustainable growth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
            >
              <CardHoverReveal className="h-full shadow-lg hover:shadow-xl transition-all duration-300 border border-border/50 rounded-2xl overflow-hidden group">
                <CardHoverRevealMain>
                  <div className="size-full aspect-[16/9] relative">
                    <Image
                      alt={service.title}
                      src={service.image}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                    {/* Content Overlay */}
                    <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <Badge
                          className="bg-white/90 text-blue-700 hover:bg-white border-0 shadow-sm backdrop-blur-sm"
                        >
                          {service.type}
                        </Badge>
                        <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white">
                          <service.icon className="h-5 w-5" />
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                          {service.title}
                        </h3>
                        <p className="text-white/80 text-sm line-clamp-2">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardHoverRevealMain>

                <CardHoverRevealContent className="bg-white dark:bg-zinc-900 p-6 sm:p-8 border-t border-border/50">
                  <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-blue-500" />
                    Key Features
                  </h4>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-muted-foreground group/item">
                        <CheckCircle2 className="h-4 w-4 text-blue-500 mt-0.5 shrink-0 group-hover/item:text-blue-600 transition-colors" />
                        <span className="group-hover/item:text-foreground transition-colors">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardHoverRevealContent>
              </CardHoverReveal>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
