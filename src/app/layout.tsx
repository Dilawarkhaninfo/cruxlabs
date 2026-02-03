import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

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
          bg-background
          text-foreground
          antialiased
          flex
          flex-col
        `}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
