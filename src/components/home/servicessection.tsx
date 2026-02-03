"use client"

import {
  Layers,
  Server,
  Workflow,
  Database,
  ShieldCheck,
  Search,
  TrendingUp,
  Cloud,
  Settings,
  Sparkles,
  CheckCircle2
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
    id: "enterprise-web",
    icon: Layers,
    title: "Enterprise Web Applications",
    description: "High-performance Next.js applications built as business tools with real-time functionality and seamless user experiences.",
    features: [
      "Real-time dashboards & analytics",
      "Server-side rendering for SEO",
      "TypeScript & best practices"
    ],
    type: "Web Development",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    id: "backend-systems",
    icon: Server,
    title: "Backend Systems & APIs",
    description: "Scalable Node.js backends and secure REST APIs designed for reliability, performance, and long-term growth.",
    features: [
      "RESTful & GraphQL APIs",
      "Microservices architecture",
      "Load balancing & caching"
    ],
    type: "Backend",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    id: "crm-automation",
    icon: Workflow,
    title: "CRM & Lead Automation",
    description: "Custom CRM workflows with zero lead loss, automated follow-ups, and intelligent pipeline management.",
    features: [
      "Automated lead nurturing",
      "Pipeline visualization",
      "Email & SMS integration"
    ],
    type: "Automation",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    gradient: "from-blue-600 to-blue-500",
  },
  {
    id: "database-architecture",
    icon: Database,
    title: "Database Architecture",
    description: "PostgreSQL & Supabase poweblue data systems with optimized queries, migrations, and backup strategies.",
    features: [
      "Database design & normalization",
      "Query optimization",
      "Automated backups"
    ],
    type: "Infrastructure",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=2036&auto=format&fit=crop",
    gradient: "from-blue-500 to-blue-400",
  },
  {
    id: "security-auth",
    icon: ShieldCheck,
    title: "Authentication & Security",
    description: "Enterprise-grade auth systems with role-based access control, JWT tokens, and secure session management.",
    features: [
      "OAuth & SSO integration",
      "Role-based permissions",
      "2FA & biometric auth"
    ],
    type: "Security",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    id: "seo-systems",
    icon: Search,
    title: "SEO & Content Systems",
    description: "SEO engineeblue at architecture level with structublue data, performance optimization, and content strategies.",
    features: [
      "Technical SEO audits",
      "Schema markup",
      "Core Web Vitals optimization"
    ],
    type: "SEO & Marketing",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1251&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    id: "performance-marketing",
    icon: TrendingUp,
    title: "Performance Marketing",
    description: "Tracking-accurate paid growth systems with conversion optimization, analytics, and attribution modeling.",
    features: [
      "Conversion tracking",
      "A/B testing frameworks",
      "Analytics integration"
    ],
    type: "Marketing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    id: "cloud-deployment",
    icon: Cloud,
    title: "Cloud & Deployment",
    description: "Vercel-based CI/CD pipelines with automated deployments, global edge delivery, and monitoring.",
    features: [
      "Zero-downtime deployments",
      "Edge computing & CDN",
      "Performance monitoring"
    ],
    type: "DevOps",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    gradient: "from-blue-600 to-blue-500",
  },
  {
    id: "automation",
    icon: Settings,
    title: "Automation & Integrations",
    description: "Business process automation across tools with webhooks, APIs, and seamless third-party integrations.",
    features: [
      "Workflow automation",
      "Third-party integrations",
      "Custom webhooks"
    ],
    type: "Integration",
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=2074&auto=format&fit=crop",
    gradient: "from-blue-500 to-blue-400",
  },
]

export default function ServicesSection() {
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
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  }

  return (
    <section className="relative py-20 sm:py-24 lg:py-32 px-4 sm:px-6 bg-white dark:bg-black overflow-hidden">
      {/* Spotlight Effect */}
      <Spotlight
        className="from-blue-600 via-blue-500 to-blue-400 blur-3xl dark:from-blue-900 dark:via-blue-700 dark:to-blue-900"
        size={600}
      />

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-20">
        <svg className="h-full w-full">
          <defs>
            <pattern
              id="services-grid-pattern"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 20H20M20 20V0M20 20H40M20 20V40"
                stroke="currentColor"
                strokeOpacity="0.1"
                className="stroke-zinc-400 dark:stroke-zinc-600"
              />
              <rect
                x="18"
                y="18"
                width="4"
                height="4"
                fill="currentColor"
                fillOpacity="0.05"
                className="fill-zinc-500 dark:fill-zinc-400"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#services-grid-pattern)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-1.5 rounded-full border border-border/50 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm px-3 py-1.5 text-[13px] font-medium text-muted-foreground mb-6 shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-blue-600" />
            What We Build
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground mb-5">
            Core <span className="bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] bg-clip-text text-transparent">Services</span>
          </h2>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Engineeblue systems focused on performance, scalability, and measurable growth—not surface-level implementations.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              custom={index}
            >
              <CardHoverReveal className="h-full shadow-2xl border-2 border-blue-200/50 rounded-2xl overflow-hidden">
                <CardHoverRevealMain>
                  <div className="size-full aspect-[3/4] relative">
                    <Image
                      alt={service.title}
                      src={service.image}
                      fill
                      className="object-cover"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                    {/* Always Visible Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                      {/* Icon */}
                      <div className="inline-flex p-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 mb-3">
                        <service.icon className="h-5 w-5 text-white" strokeWidth={2} />
                      </div>

                      {/* Title */}
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2 line-clamp-2">
                        {service.title}
                      </h3>

                      {/* Type Badge */}
                      <Badge className={`capitalize rounded-full bg-gradient-to-r ${service.gradient} text-white border-0 text-xs`}>
                        {service.type}
                      </Badge>
                    </div>
                  </div>
                </CardHoverRevealMain>

                <CardHoverRevealContent className="space-y-3 rounded-2xl bg-[rgba(0,0,0,.85)] backdrop-blur-3xl p-5">
                  {/* Description */}
                  <p className="text-white/90 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-semibold text-white/80">Key Features</h4>
                    <ul className="space-y-1.5">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-white/70">
                          <CheckCircle2 className="h-3.5 w-3.5 mt-0.5 flex-shrink-0 text-blue-400" />
                          <span className="line-clamp-1">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardHoverRevealContent>
              </CardHoverReveal>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
