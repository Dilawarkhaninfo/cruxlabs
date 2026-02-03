"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion"
import {
  Code,
  Search,
  TrendingUp,
  FileText,
  Server,
  Palette,
  Menu,
  X,
  ChevronDown,
  Cpu,
  Globe,
  Activity
} from "lucide-react"

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import LogoImage from "../../../public/logo.png"
import { cn } from "@/lib/utils"

const services = [
  {
    title: "WEB_DEVELOPMENT",
    desc: "Custom websites and scalable applications.",
    icon: Code,
    href: "/services/web-development",
    id: "SRV_001"
  },
  {
    title: "SEO_SYSTEMS",
    desc: "Advanced optimization for search visibility.",
    icon: Search,
    href: "/services/seo",
    id: "SRV_002"
  },
  {
    title: "MARKETING_LOGIC",
    desc: "Strategic campaigns for business growth.",
    icon: TrendingUp,
    href: "/services/digital-marketing",
    id: "SRV_003"
  },
  {
    title: "TECHNICAL_CONTENT",
    desc: "Technical and creative content solutions.",
    icon: FileText,
    href: "/services/content-writing",
    id: "SRV_004"
  },
  {
    title: "INFRASTRUCTURE",
    desc: "Secure infrastructure and domain management.",
    icon: Server,
    href: "/services/hosting",
    id: "SRV_005"
  },
  {
    title: "BRAND_IDENTITY",
    desc: "Strategic identity and visual systems.",
    icon: Palette,
    href: "/services/branding",
    id: "SRV_006"
  },
]

export default function Navbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [navMenuValue, setNavMenuValue] = useState("")

  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50)
  })

  const isServicePage = pathname.startsWith("/services")

  const navItems = [
    { name: "HOME", href: "/", id: "N_01" },
    { name: "ABOUT", href: "/about", id: "N_02" },
    { name: "SERVICES", href: "#", id: "N_03", dropdown: true },
    { name: "PORTFOLIO", href: "/portfolio", id: "N_04" },
    { name: "CONTACT", href: "/contact", id: "N_05" },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed left-0 right-0 z-[100] transition-all duration-500 flex justify-center",
        scrolled ? "top-0" : "top-10" // Sync with Topbar height (10 = 40px)
      )}
    >
      <div
        className={cn(
          "relative flex flex-col transition-all duration-500 ease-in-out w-full max-w-7xl",
          "text-zinc-950"
        )}
      >
        {/* MAIN BAR */}
        <div className="relative flex items-center justify-between px-10 h-20">
          {/* HANGING TRAPEZOID BACKGROUND */}
          <div
            className={cn(
              "absolute inset-0 z-0 transition-all duration-500 ease-in-out shadow-2xl bg-white",
              scrolled ? "bg-white border-b-2 border-zinc-900" : "bg-white/95"
            )}
            style={{
              clipPath: "polygon(0 0, 100% 0, 98% 100%, 2% 100%)"
            }}
          />

          {/* CONTENT LAYER */}
          <div className="relative z-10 flex items-center justify-between w-full h-full">

            {/* LOGO AREA */}
            <Link
              href="/"
              className="flex items-center gap-4 group relative py-2 transform -skew-x-[6deg]"
            >
              <div className="relative">
                <div className="h-10 w-10 bg-zinc-900 border-2 border-sky-500/30 flex items-center justify-center -skew-x-[12deg] group-hover:border-sky-500 transition-all duration-500 shadow-xl shadow-sky-500/10">
                  <div className="relative h-6 w-6 skew-x-[12deg]">
                    <Image
                      src={LogoImage}
                      alt="CruxLabs Logo"
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-110"
                      priority
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col skew-x-[6deg]">
                <span className="text-xl font-black italic tracking-tighter leading-none text-zinc-950 uppercase">
                  CruxLabs
                </span>
                <div className="flex items-center gap-2 mt-1">
                  <div className="h-[2.5px] w-6 bg-sky-500" />
                  <span className="text-[9px] font-black italic uppercase tracking-[0.3em] text-zinc-400">
                    SYSTEMS_v4
                  </span>
                </div>
              </div>
            </Link>

            {/* DESKTOP NAVIGATION */}
            <div className="hidden lg:flex items-center h-full">
              <NavigationMenu value={navMenuValue} onValueChange={setNavMenuValue}>
                <NavigationMenuList className="gap-0 h-20">
                  {navItems.map((item) => {
                    const isActive = pathname === item.href

                    if (item.dropdown) {
                      return (
                        <NavigationMenuItem key={item.name} value="services" className="h-full">
                          <NavigationMenuTrigger
                            className={cn(
                              "group bg-transparent h-full px-8 transition-all hover:bg-sky-50/50 rounded-none border-0 flex items-center justify-center py-0 whitespace-nowrap",
                              "text-[11px] font-black italic uppercase tracking-[0.2em] text-zinc-800",
                              (isServicePage || navMenuValue === "services") && "bg-sky-50"
                            )}
                          >
                            <span className="relative z-10 flex items-center gap-1">
                              {item.name}
                              <ChevronDown className="h-3 w-3 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                            </span>
                            {isServicePage && (
                              <motion.div
                                layoutId="navActiveLine"
                                className="absolute bottom-0 left-0 right-0 h-[4px] bg-sky-500"
                              />
                            )}
                          </NavigationMenuTrigger>
                          <NavigationMenuContent>
                            <div className="w-[850px] bg-white border-2 border-zinc-900 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] p-12 grid grid-cols-2 gap-8"
                              style={{ clipPath: "polygon(0 0, 100% 2%, 98% 100%, 2% 98%)" }}>
                              {services.map((service) => (
                                <Link
                                  key={service.title}
                                  href={service.href}
                                  onClick={() => setNavMenuValue("")}
                                  className="group/item flex items-center gap-6 p-6 border border-zinc-100 hover:border-sky-500 hover:bg-sky-50/30 transition-all transform -skew-x-[6deg]"
                                >
                                  <div className="h-12 w-12 bg-zinc-900 flex items-center justify-center -skew-x-[12deg] group-hover/item:bg-sky-500 transition-colors">
                                    <service.icon className="h-6 w-6 text-sky-500 group-hover/item:text-white skew-x-[12deg]" />
                                  </div>
                                  <div className="flex-1 skew-x-[6deg]">
                                    <div className="flex items-center justify-between mb-1">
                                      <h4 className="text-[11px] font-black italic uppercase tracking-wider text-zinc-900">{service.title}</h4>
                                      <span className="text-[8px] font-mono text-zinc-300">{service.id}</span>
                                    </div>
                                    <p className="text-[12px] text-zinc-500 italic font-medium leading-tight">{service.desc}</p>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </NavigationMenuContent>
                        </NavigationMenuItem>
                      )
                    }

                    return (
                      <NavigationMenuItem key={item.name} className="h-full">
                        <Link href={item.href} legacyBehavior passHref>
                          <NavigationMenuLink
                            className={cn(
                              "relative flex items-center justify-center h-full px-8 transition-all hover:bg-sky-50/50 py-0",
                              "text-[11px] font-black italic uppercase tracking-[0.2em] text-zinc-800",
                              isActive && "bg-sky-50"
                            )}
                          >
                            <span className="relative z-10">{item.name}</span>
                            {isActive && (
                              <motion.div
                                layoutId="navActiveLine"
                                className="absolute bottom-0 left-0 right-0 h-[4px] bg-sky-500"
                              />
                            )}
                          </NavigationMenuLink>
                        </Link>
                      </NavigationMenuItem>
                    )
                  })}
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* RIGHT SIDE ACTION */}
            <div className="flex items-center">
              <Link href="/contact" className="hidden md:block">
                <Button
                  className="relative h-12 px-10 bg-zinc-950 text-white font-black italic uppercase tracking-[0.4em] text-[10px] border-0 hover:bg-zinc-900 transition-all duration-300 shadow-2xl shadow-black/20"
                  style={{ clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0 100%)" }}
                >
                  <span className="relative z-10">INITIALIZE_INTERFACE</span>
                  <div className="absolute inset-0 bg-sky-500/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
                </Button>
              </Link>

              {/* MOBILE MENU TOGGLE */}
              <div className="lg:hidden ml-4">
                <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-10 w-10 border-2 border-zinc-200">
                      <Menu className="h-5 w-5" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-full sm:w-[450px] border-l-2 border-zinc-900 bg-zinc-950 p-0 text-zinc-200">
                    <div className="flex flex-col h-full bg-[radial-gradient(circle_at_top_right,#18181b,transparent)]">
                      <div className="p-8 border-b border-zinc-900 flex items-center justify-between">
                        <span className="font-black italic text-xl tracking-tighter text-white uppercase tracking-[0.1em]">CRUXLABS</span>
                        <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                          <X className="h-6 w-6 text-zinc-500" />
                        </Button>
                      </div>
                      <div className="flex-1 p-8 space-y-4">
                        {navItems.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className={cn(
                              "flex items-center justify-between p-6 bg-zinc-900/50 border-l-4 transition-all overflow-hidden",
                              pathname === item.href ? "border-sky-500 text-white bg-zinc-900" : "border-transparent text-zinc-500 hover:text-white"
                            )}
                          >
                            <span className="text-sm font-black italic uppercase tracking-[0.3em]">{item.name}</span>
                            <span className="text-[10px] font-mono text-zinc-800">{item.id}</span>
                          </Link>
                        ))}
                      </div>
                      <div className="p-8 border-t border-zinc-900">
                        <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                          <Button
                            className="w-full h-16 bg-sky-500 text-zinc-950 font-black italic uppercase tracking-[0.3em] text-xs"
                            style={{ clipPath: "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)" }}
                          >
                            INITIALIZE_INTERFACE
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM DECORATIVE BAR (MATCHING THE IMAGE) */}
        {!scrolled && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 px-12 mt-2 pointer-events-none"
          >
            <div className="h-6 w-6 bg-sky-500/10 border border-sky-500/30 flex items-center justify-center -skew-x-[12deg]">
              <Activity className="h-3 w-3 text-sky-500 skew-x-[12deg]" />
            </div>
            <span className="text-[10px] font-black italic uppercase tracking-[0.5em] text-sky-500">
              OPERATIONAL_EXCELLENCE
            </span>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}