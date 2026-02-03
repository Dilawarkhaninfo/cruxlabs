"use client"

import { Star, Quote } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CEO",
    company: "TechFlow Solutions",
    content: "CruxLabs transformed our entire lead management system. We went from losing 30% of leads to zero loss with their automated CRM solution.",
    flag: "🇺🇸"
  },
  {
    name: "Michael Chen",
    role: "Founder",
    company: "GrowthPath",
    content: "Their Next.js application replaced our legacy system and cut our operational costs by 60%. The performance improvements alone justified the investment.",
    flag: "🇨🇦"
  },
  {
    name: "Emily Rodriguez",
    role: "CTO",
    company: "DataSync Inc",
    content: "Best engineering partner we've worked with. They don't just code—they solve problems. Our dashboard processes 10M+ records daily without breaking a sweat.",
    flag: "🇬🇧"
  },
  {
    name: "David Thompson",
    role: "VP Engineering",
    company: "CloudScale",
    content: "CruxLabs deliveblue a complete authentication system with role-based access control in 3 weeks. Clean code, excellent documentation, zero issues in production.",
    flag: "🇦🇺"
  },
  {
    name: "Jessica Park",
    role: "Head of Operations",
    company: "AutoFlow",
    content: "The automation system they built saved us 15 hours per week. Their webhook integrations work flawlessly with our entire tech stack.",
    flag: "🇩🇪"
  },
  {
    name: "Robert Kumar",
    role: "Founder",
    company: "MarketPulse",
    content: "Exceptional SEO implementation. We saw 150% organic traffic increase within 3 months. They understand both technical SEO and business goals.",
    flag: "🇮🇳"
  },
  {
    name: "Lisa Anderson",
    role: "Product Manager",
    company: "DataFlow",
    content: "Professional team that delivers on time. Their Next.js expertise helped us launch our SaaS platform 2 months ahead of schedule.",
    flag: "🇸🇪"
  },
  {
    name: "James Wilson",
    role: "CTO",
    company: "ScaleUp",
    content: "Their backend architecture scaled seamlessly from 1K to 100K users. Zero downtime, zero issues. Exactly what we needed.",
    flag: "🇳🇱"
  }
]

export default function TestimonialsSection() {
  // Split testimonials into two rows
  const firstRow = testimonials.slice(0, 4)
  const secondRow = testimonials.slice(4, 8)

  return (
    <section className="relative py-20 sm:py-24 lg:py-32 px-4 sm:px-6 bg-gradient-to-b from-white via-gray-50/30 to-white overflow-hidden">

      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" aria-hidden="true" />

      {/* Decorative Elements */}
      <div className="absolute top-20 -left-40 w-96 h-96 bg-[#2563eb]/5 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-20 -right-40 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-border/50 bg-white/50 backdrop-blur-sm px-3 py-1.5 text-[13px] font-medium text-muted-foreground mb-6 shadow-sm">
            <Star className="h-3.5 w-3.5 text-[#2563eb] fill-[#2563eb]" />
            Client Success Stories
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground mb-5">
            Trusted by Engineering Teams
          </h2>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Real results from businesses that chose systems over websites.
          </p>
        </div>

        {/* Testimonials Infinite Scroll - Row 1 */}
        <div className="relative mb-6 overflow-hidden">
          {/* Fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-white to-transparent z-10" />

          {/* Slider */}
          <div className="flex w-max animate-marquee gap-6 hover:[animation-play-state:paused]">
            {[...firstRow, ...firstRow, ...firstRow].map((testimonial, index) => (
              <div
                key={index}
                className="group relative w-[380px] flex-shrink-0 rounded-xl border border-border/50 bg-white p-6 hover:border-[#2563eb]/30 transition-all duration-300 hover:shadow-lg"
              >
                {/* Quote Icon */}
                <Quote className="h-6 w-6 text-[#2563eb]/20 mb-3" />

                {/* Content */}
                <p className="text-[13px] leading-relaxed text-foreground mb-5">
                  &ldquo;{testimonial.content}&ldquo;
                </p>

                {/* Author Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10 border border-border/50">
                      <AvatarFallback className="bg-[#2563eb]/10 text-[#2563eb] text-[13px] font-semibold">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-[13px] font-semibold text-foreground leading-tight">
                        {testimonial.name}
                      </p>
                      <p className="text-[11px] text-muted-foreground">
                        {testimonial.role} • {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <span className="text-2xl">{testimonial.flag}</span>
                </div>

                {/* Subtle Hover Gradient */}
                <div
                  className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#2563eb]/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  aria-hidden="true"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Infinite Scroll - Row 2 (Reverse Direction) */}
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-white to-transparent z-10" />

          {/* Slider */}
          <div className="flex w-max animate-marquee-reverse gap-6 hover:[animation-play-state:paused]">
            {[...secondRow, ...secondRow, ...secondRow].map((testimonial, index) => (
              <div
                key={index}
                className="group relative w-[380px] flex-shrink-0 rounded-xl border border-border/50 bg-white p-6 hover:border-[#2563eb]/30 transition-all duration-300 hover:shadow-lg"
              >
                {/* Quote Icon */}
                <Quote className="h-6 w-6 text-[#2563eb]/20 mb-3" />

                {/* Content */}
                <p className="text-[13px] leading-relaxed text-foreground mb-5">
                  &ldquo;{testimonial.content}&ldquo;
                </p>

                {/* Author Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10 border border-border/50">
                      <AvatarFallback className="bg-[#2563eb]/10 text-[#2563eb] text-[13px] font-semibold">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-[13px] font-semibold text-foreground leading-tight">
                        {testimonial.name}
                      </p>
                      <p className="text-[11px] text-muted-foreground">
                        {testimonial.role} • {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <span className="text-2xl">{testimonial.flag}</span>
                </div>

                {/* Subtle Hover Gradient */}
                <div
                  className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#2563eb]/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  aria-hidden="true"
                />
              </div>
            ))}
          </div>
        </div>





      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes marquee-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-marquee {
          animation: marquee 40s linear infinite;
        }

        .animate-marquee-reverse {
          animation: marquee-reverse 40s linear infinite;
        }
      `}</style>
    </section>
  )
}