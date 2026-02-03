import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import Topbar from "@/components/layout/Topbar"
import GlobalLoader from "@/components/layout/GlobalLoader"
import GlobalEffects from "@/components/layout/GlobalEffects"
import TechnicalChatbot from "@/components/layout/TechnicalChatbot"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    default: "CruxLabs — Engineering Growth Systems",
    template: "%s | CruxLabs",
  },
  description:
    "We solve the hardest part of your business by engineering scalable digital systems.",
  keywords: [
    "CruxLabs",
    "Growth Systems",
    "Next.js Agency",
    "Business Automation",
    "Enterprise Web Development",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          min-h-screen
          bg-[#020617]
          text-slate-200
          antialiased
          flex
          flex-col
        `}
      >
        <GlobalLoader />
        <GlobalEffects />
        <Topbar />
        <Navbar />
        <main className="flex-1 relative z-10">{children}</main>
        <Footer />
        <TechnicalChatbot />
      </body>
    </html>
  )
}
