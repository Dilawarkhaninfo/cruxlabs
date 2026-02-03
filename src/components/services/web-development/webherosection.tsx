"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Code } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

const codeSnippet = `const createExperience = async () => {
  const web = await build({
    quality: 'Premium',
    performance: 'Ultra-Fast',
    design: 'Modern'
  });
  return web.launch();
};`

export default function WebHeroSection() {
  const [displayedCode, setDisplayedCode] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (currentIndex < codeSnippet.length) {
        setDisplayedCode((prev) => prev + codeSnippet[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      } else {
        // Reset after completion with a pause
        setTimeout(() => {
          setDisplayedCode("")
          setCurrentIndex(0)
        }, 2000)
      }
    }, 50) // Typing speed

    return () => clearInterval(typingInterval)
  }, [currentIndex])

  const renderCodeWithSyntax = (code: string) => {
    const lines = code.split('\n')
    return lines.map((line, index) => {
      let formattedLine = line

      // Keywords
      formattedLine = formattedLine.replace(
        /(const|await|return|async)/g,
        '<span class="text-[#c586c0]">$1</span>'
      )

      // Function names
      formattedLine = formattedLine.replace(
        /(createExperience|build|launch)/g,
        '<span class="text-[#dcdcaa]">$1</span>'
      )

      // Variables
      formattedLine = formattedLine.replace(
        /\b(web)\b/g,
        '<span class="text-[#9cdcfe]">$1</span>'
      )

      // Properties
      formattedLine = formattedLine.replace(
        /(quality|performance|design)(?=:)/g,
        '<span class="text-[#9cdcfe]">$1</span>'
      )

      // Strings
      formattedLine = formattedLine.replace(
        /'([^']+)'/g,
        '<span class="text-[#ce9178]">\'$1\'</span>'
      )

      // Brackets and punctuation
      formattedLine = formattedLine.replace(
        /([{}();,:])/g,
        '<span class="text-gray-300">$1</span>'
      )

      return (
        <div
          key={index}
          className="text-left leading-relaxed"
          dangerouslySetInnerHTML={{ __html: formattedLine || '<br/>' }}
        />
      )
    })
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50/50">
      {/* Subtle Grid Background */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-24 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <Badge
              variant="secondary"
              className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-border/50 bg-white/50 px-3 py-1.5 text-[13px] font-medium backdrop-blur-sm text-muted-foreground shadow-sm"
            >
              <Code className="h-3.5 w-3.5 text-[#2563eb]" />
              Web Development
            </Badge>

            {/* Heading */}
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Build the{" "}
              <span className="bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] bg-clip-text text-transparent">
                Future of Web {" "}
              </span>
              Application
            </h1>

            {/* Description */}
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-xl">
              Transform your ideas into high-performance, scalable web applications.
              We combine engineering precision with modern design to build systems that scale.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="h-12 rounded-lg bg-[#2563eb] px-8 text-[15px] font-medium text-white hover:bg-[#1d4ed8] shadow-sm transition-all hover:shadow-lg hover:scale-105"
                >
                  Start Your Project
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button
                  variant="outline"
                  size="lg"
                  className="h-12 rounded-lg border-border/50 px-8 text-[15px] font-medium hover:bg-muted/50 transition-all"
                >
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Code IDE Window */}
          <div className="mx-auto w-full max-w-xl lg:max-w-none">
            <div className="rounded-xl border border-border/50 bg-[#1e1e1e] shadow-2xl overflow-hidden backdrop-blur-sm transform transition-all hover:scale-[1.02] hover:shadow-3xl">
              {/* IDE Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-[#2d2d2d] border-b border-white/10">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56] hover:opacity-80 transition-opacity cursor-pointer" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e] hover:opacity-80 transition-opacity cursor-pointer" />
                  <div className="w-3 h-3 rounded-full bg-[#27c93f] hover:opacity-80 transition-opacity cursor-pointer" />
                </div>
                <div className="ml-2 text-xs text-gray-400 font-mono">app.tsx</div>
                <div className="ml-auto flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] text-gray-500">Live</span>
                </div>
              </div>

              {/* Code Content */}
              <div className="p-6 font-mono text-sm min-h-[280px] relative">
                <div className="space-y-0">
                  {renderCodeWithSyntax(displayedCode)}
                  <span className="inline-block w-[2px] h-5 bg-[#2563eb] animate-pulse ml-0.5 align-middle" />
                </div>

                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#2563eb]/5 via-transparent to-[#1d4ed8]/5 pointer-events-none" />
              </div>

              {/* Bottom status bar */}
              <div className="px-4 py-2 bg-[#2d2d2d] border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-[10px] text-gray-500 font-mono">TypeScript</span>
                  <span className="text-[10px] text-gray-500 font-mono">UTF-8</span>
                </div>
                <div className="text-[10px] text-gray-500 font-mono">
                  Ln {displayedCode.split('\n').length}, Col {displayedCode.split('\n').pop()?.length || 0}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"
        aria-hidden="true"
      />
    </section>
  )
}