"use client"

import { useState } from "react"
import { Plus, Minus, HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "What makes CruxLabs different from other development agencies?",
    answer: "We don't build websites—we engineer growth systems. Every project is architected as a scalable business asset, not a design deliverable. We focus on measurable ROI, automation, and long-term maintainability using battle-tested technologies like Next.js, PostgreSQL, and Vercel."
  },
  {
    question: "How long does a typical project take?",
    answer: "We ship fast without sacrificing quality. Most projects launch in 3-6 weeks thanks to our battle-tested processes, reusable components, and automation. Complex enterprise systems may take 8-12 weeks. We provide clear milestones, weekly updates, and realistic planning to keep your launch on schedule."
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer: "Yes. You get a dedicated team that knows your business and checks in regularly—not just when there's a bug. We offer proactive partnership including performance monitoring, security updates, feature enhancements, and scaling support as your business grows."
  },
  {
    question: "What technologies do you use?",
    answer: "Our stack is chosen around your goals, not trends. We primarily use Next.js, React, TypeScript, Node.js, PostgreSQL, Supabase, and Vercel. Every technology is selected for reliability, performance, and long-term maintainability. We prioritize proven solutions over experimental frameworks."
  },
  {
    question: "Can you integrate with our existing systems?",
    answer: "Absolutely. We specialize in business process automation and seamless integrations. Whether it's your CRM, payment gateway, marketing tools, or custom APIs—we build secure, reliable connections that eliminate manual work and prevent data loss."
  },
  {
    question: "How do you handle security and performance?",
    answer: "Security and performance are baked into every project from day one. We implement enterprise-grade authentication, role-based access control, SSL/TLS encryption, and follow OWASP best practices. Performance optimization includes code splitting, caching strategies, and CDN delivery for sub-second load times."
  },
  {
    question: "What's your pricing structure?",
    answer: "We offer project-based pricing with transparent timelines and budgets. Investment typically ranges from $5,000 for focused systems to $25,000+ for complex enterprise applications. We provide clear milestones, no hidden costs, and complete visibility throughout the engagement."
  },
  {
    question: "Do you work with startups or only established businesses?",
    answer: "We partner with both. For startups, we build MVPs that scale. For established businesses, we solve operational bottlenecks and automate growth. What matters most is that you're committed to building systems that compound value over time, not surface-level marketing sites."
  }
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="relative py-20 sm:py-24 lg:py-32 px-4 sm:px-6 bg-white">

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" aria-hidden="true" />

      {/* Decorative Blobs */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#2563eb]/5 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto max-w-4xl">

        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-border/50 bg-white/50 backdrop-blur-sm px-3 py-1.5 text-[13px] font-medium text-muted-foreground mb-6 shadow-sm">
            <HelpCircle className="h-3.5 w-3.5 text-[#2563eb]" />
            Questions & Answers
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground mb-5">
            Frequently Asked{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] bg-clip-text text-transparent">
                Questions
              </span>
              <span
                className="absolute -bottom-2 left-0 h-3 w-full bg-[#2563eb]/10 -z-10"
                aria-hidden="true"
              />
            </span>
          </h2>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about working with CruxLabs
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group border border-border/50 rounded-xl bg-white hover:border-[#2563eb]/30 transition-all duration-300 hover:shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-start justify-between gap-4 p-6 sm:p-7 text-left"
                aria-expanded={openIndex === index}
              >
                <span className="text-base sm:text-lg font-semibold text-foreground leading-tight pr-4">
                  {faq.question}
                </span>
                <span className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-lg bg-gray-50 text-[#2563eb] group-hover:bg-[#2563eb]/10 transition-colors">
                  {openIndex === index ? (
                    <Minus className="h-5 w-5" />
                  ) : (
                    <Plus className="h-5 w-5" />
                  )}
                </span>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
              >
                <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-0">
                  <p className="text-[15px] leading-relaxed text-muted-foreground border-t border-border/30 pt-6">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>



      </div>
    </section>
  )
}