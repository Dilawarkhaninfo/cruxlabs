import Link from "next/link"
import {
  Workflow,
  Zap,
  GitBranch,
  Database,
  Shield,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Network
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const systemFeatures = [
  {
    icon: Workflow,
    title: "Workflow Analysis",
    description: "Deep-dive into your operations to identify bottlenecks and opportunities."
  },
  {
    icon: Zap,
    title: "Friction Elimination",
    description: "Remove manual processes and replace them with automated systems."
  },
  {
    icon: GitBranch,
    title: "System Architecture",
    description: "Build scalable infrastructure that grows with your business."
  },
  {
    icon: Database,
    title: "Data Pipelines",
    description: "Connect systems and automate data flow across your stack."
  }
]

const capabilities = [
  "Zero lead loss through automated capture",
  "Real-time analytics and business intelligence",
  "Role-based access control and security",
  "API integrations with existing tools",
  "Automated workflows and notifications",
  "Performance monitoring and optimization"
]

export default function SystemsSection() {
  return (
    <section className="relative py-20 sm:py-24 lg:py-32 px-4 sm:px-6 bg-white overflow-hidden">

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" aria-hidden="true" />

      {/* Decorative Blobs */}
      <div className="absolute top-20 -right-40 w-80 h-80 bg-[#2563eb]/5 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-20 -left-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl">

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Column - Content */}
          <div className="space-y-8">

            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 rounded-full border border-border/50 bg-white/50 backdrop-blur-sm px-3 py-1.5 text-[13px] font-medium text-muted-foreground shadow-sm">
              <Cpu className="h-3.5 w-3.5 text-[#2563eb]" />
              Engineering Approach
            </div>

            {/* Heading */}
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground mb-5">
                Website as a{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] bg-clip-text text-transparent">
                    Business System
                  </span>
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-3"
                    viewBox="0 0 200 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 10C60 2 140 2 198 10"
                      stroke="#2563eb"
                      strokeWidth="3"
                      strokeLinecap="round"
                      opacity="0.3"
                    />
                  </svg>
                </span>
              </h2>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                We analyze workflows, identify friction points, and engineer systems
                that automate growth and eliminate inefficiencies.
              </p>
            </div>

            {/* System Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {systemFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="flex items-start gap-3 p-4 rounded-lg bg-gray-50/50 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#2563eb]/10 text-[#2563eb]">
                    <feature.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-[14px] font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-[13px] text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Link href="/systems">
                <Button
                  size="lg"
                  className="group h-12 rounded-lg bg-[#2563eb] px-8 text-[15px] font-medium text-white hover:bg-[#1d4ed8] shadow-sm transition-all hover:shadow-lg"
                >
                  Explore Our Systems
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">

            {/* Main Card */}
            <Card className="relative border-border/50 bg-white shadow-xl">
              <CardContent className="p-8 sm:p-10">

                {/* Decorative Icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#2563eb]/10 text-[#2563eb] mb-6">
                  <Network className="h-7 w-7" />
                </div>

                <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-4">
                  System Capabilities
                </h3>

                <p className="text-[14px] text-muted-foreground mb-6">
                  Every system we build includes enterprise-grade capabilities designed for scale:
                </p>

                {/* Capabilities List */}
                <ul className="space-y-3">
                  {capabilities.map((capability) => (
                    <li
                      key={capability}
                      className="flex items-start gap-3 text-[14px] text-foreground"
                    >
                      <CheckCircle2 className="h-5 w-5 text-[#2563eb] mt-0.5 shrink-0" />
                      <span>{capability}</span>
                    </li>
                  ))}
                </ul>

                {/* Decorative SVG Graph */}
                <div className="mt-8 pt-6 border-t border-border/40">
                  <svg
                    className="w-full h-20"
                    viewBox="0 0 400 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    {/* Grid Lines */}
                    <line x1="0" y1="20" x2="400" y2="20" stroke="#e5e7eb" strokeWidth="1" />
                    <line x1="0" y1="40" x2="400" y2="40" stroke="#e5e7eb" strokeWidth="1" />
                    <line x1="0" y1="60" x2="400" y2="60" stroke="#e5e7eb" strokeWidth="1" />

                    {/* Growth Curve */}
                    <path
                      d="M 0 60 Q 50 55, 100 45 T 200 25 T 300 15 T 400 10"
                      stroke="#2563eb"
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                    />

                    {/* Gradient Fill */}
                    <path
                      d="M 0 60 Q 50 55, 100 45 T 200 25 T 300 15 T 400 10 L 400 80 L 0 80 Z"
                      fill="url(#gradient)"
                      opacity="0.1"
                    />

                    {/* Data Points */}
                    <circle cx="100" cy="45" r="4" fill="#2563eb" />
                    <circle cx="200" cy="25" r="4" fill="#2563eb" />
                    <circle cx="300" cy="15" r="4" fill="#2563eb" />

                    <defs>
                      <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#2563eb" />
                        <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <div className="flex items-center justify-between mt-3">
                    <span className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider">
                      Growth Trajectory
                    </span>
                    <span className="text-[11px] font-medium text-[#2563eb]">
                      +340% ROI
                    </span>
                  </div>
                </div>

              </CardContent>

              {/* Decorative Corner Element */}
              <div className="absolute -top-3 -right-3 w-24 h-24 bg-gradient-to-br from-[#2563eb]/20 to-blue-500/20 rounded-full blur-2xl" aria-hidden="true" />
            </Card>

            {/* Floating Stats Cards */}
            <div className="absolute -bottom-6 -left-6 hidden lg:block">
              <div className="bg-white border border-border/50 rounded-lg shadow-lg p-4 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10 text-green-600">
                    <Shield className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider">
                      Uptime
                    </p>
                    <p className="text-lg font-semibold text-foreground">
                      99.9%
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 hidden lg:block">
              <div className="bg-white border border-border/50 rounded-lg shadow-lg p-4 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-600">
                    <BarChart3 className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider">
                      Performance
                    </p>
                    <p className="text-lg font-semibold text-foreground">
                      A+ Grade
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}