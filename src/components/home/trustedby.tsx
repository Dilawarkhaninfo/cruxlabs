"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Building2 } from "lucide-react"

const clients = [
  {
    name: "TechFlow Solutions",
    logo: "/clients/techflow.png",
    alt: "TechFlow Solutions Logo"
  },
  {
    name: "GrowthPath",
    logo: "/clients/growthpath.png",
    alt: "GrowthPath Logo"
  },
  {
    name: "DataSync Inc",
    logo: "/clients/datasync.png",
    alt: "DataSync Inc Logo"
  },
  {
    name: "CloudScale",
    logo: "/clients/cloudscale.png",
    alt: "CloudScale Logo"
  },
  {
    name: "AutoFlow",
    logo: "/clients/autoflow.png",
    alt: "AutoFlow Logo"
  },
  {
    name: "MarketPulse",
    logo: "/clients/marketpulse.png",
    alt: "MarketPulse Logo"
  },
  {
    name: "Digital Dynamics",
    logo: "/clients/digitaldynamics.png",
    alt: "Digital Dynamics Logo"
  },
  {
    name: "InnovateHub",
    logo: "/clients/innovatehub.png",
    alt: "InnovateHub Logo"
  },
]

export default function TrustedBySection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let scrollPosition = 0
    const scroll = () => {
      scrollPosition += 0.5
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }
      scrollContainer.scrollLeft = scrollPosition
    }

    const interval = setInterval(scroll, 20)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-white overflow-hidden">

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 via-white to-gray-50/50" aria-hidden="true" />

      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-[#2563eb]/3 rounded-full blur-3xl -translate-y-1/2" aria-hidden="true" />
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-blue-500/3 rounded-full blur-3xl -translate-y-1/2" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-border/50 bg-white/50 backdrop-blur-sm px-3 py-1.5 text-[13px] font-medium text-muted-foreground mb-6 shadow-sm">
            <Building2 className="h-3.5 w-3.5 text-[#2563eb]" />
            Our Clients
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground mb-5">
            Trusted by{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] bg-clip-text text-transparent">
                Industry Leaders
              </span>
              <span
                className="absolute -bottom-2 left-0 h-3 w-full bg-[#2563eb]/10 -z-10"
                aria-hidden="true"
              />
            </span>
          </h2>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            We&apos;`re proud to partner with amazing companies who trust us with their digital success
          </p>
        </div>

        {/* Logo Carousel */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" aria-hidden="true" />
          <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" aria-hidden="true" />

          {/* Scrolling Container */}
          <div
            ref={scrollRef}
            className="flex gap-12 sm:gap-16 overflow-hidden py-8"
            style={{ scrollBehavior: 'auto' }}
          >
            {/* Duplicate logos for infinite scroll effect */}
            {[...clients, ...clients].map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 flex items-center justify-center w-32 sm:w-40 h-20 sm:h-24 px-6 rounded-lg bg-white border border-border/30 hover:border-[#2563eb]/30 hover:shadow-md transition-all duration-300 group"
              >
                {/* Placeholder for logo - Replace with actual Image component */}
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* If you have actual logos, use this: */}
                  {/* <Image
                    src={client.logo}
                    alt={client.alt}
                    width={120}
                    height={60}
                    className="object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-60 group-hover:opacity-100"
                  /> */}

                  {/* Placeholder text - Remove when using actual logos */}
                  <span className="text-sm font-semibold text-muted-foreground/40 group-hover:text-[#2563eb] transition-colors">
                    {client.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 sm:mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-center">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-green-500" />
            <span className="text-[13px] font-medium text-muted-foreground">
              10+ Happy Clients
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-blue-500" />
            <span className="text-[13px] font-medium text-muted-foreground">
              $2M+ Revenue Generated
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-blue-500" />
            <span className="text-[13px] font-medium text-muted-foreground">
              99% Client Retention
            </span>
          </div>
        </div>

      </div>
    </section>
  )
}