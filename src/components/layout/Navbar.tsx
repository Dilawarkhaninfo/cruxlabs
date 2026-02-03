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
  ArrowRight,
  Menu,
  X
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
    title: "Web Development",
    desc: "Custom websites and scalable applications.",
    icon: Code,
    href: "/services/web-development",
  },
  {
    title: "SEO Services",
    desc: "Advanced optimization for search visibility.",
    icon: Search,
    href: "/services/seo",
  },
  {
    title: "Digital Marketing",
    desc: "Strategic campaigns for business growth.",
    icon: TrendingUp,
    href: "/services/digital-marketing",
  },
  {
    title: "Content Writing",
    desc: "Technical and creative content solutions.",
    icon: FileText,
    href: "/services/content-writing",
  },
  {
    title: "Domain & Hosting",
    desc: "Secure infrastructure and domain management.",
    icon: Server,
    href: "/services/hosting",
  },
  {
    title: "Branding",
    desc: "Strategic identity and visual systems.",
    icon: Palette,
    href: "/services/branding",
  },
]

export default function Navbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [navMenuValue, setNavMenuValue] = useState("")

  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20)
  })

  // Check if current page is a service page
  const isServicePage = pathname.startsWith("/services")

  // Close dropdown handler
  const closeNavMenu = () => setNavMenuValue("")

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
  ]

  const rightNavItems = [
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <motion.header
      className={cn(
        "sticky top-0 left-0 right-0 z-[100] transition-all duration-300",
        scrolled ? "py-2" : "py-4"
      )}
    >
      <div
        className={cn(
          "mx-auto transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          scrolled
            ? "container max-w-7xl bg-[#020617]/80 backdrop-blur-md border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.4)] rounded-full"
            : "container max-w-[100%] bg-transparent border-transparent"
        )}
      >
        <div className="flex h-14 items-center justify-between px-6">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-sky-500/30 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Image
                src={LogoImage}
                alt="CruxLabs Logo"
                width={32}
                height={32}
                className="relative h-8 w-8 object-contain transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </div>
            <span className={cn(
              "text-[18px] font-bold tracking-tight transition-colors duration-300",
              scrolled ? "text-white" : "text-white" // Always white on Hero if dark, but check other pages.
            )}>
              CruxLabs
            </span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex" value={navMenuValue} onValueChange={setNavMenuValue}>
            <NavigationMenuList className="gap-1">

              {navItems.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        "relative inline-flex h-9 items-center justify-center rounded-md px-4 text-[13px] font-medium tracking-wide transition-colors hover:text-sky-400",
                        pathname === item.href ? "text-sky-400" : "text-slate-300"
                      )}
                    >
                      {item.name}
                      {pathname === item.href && (
                        <span className="absolute -bottom-1 left-1.5 right-1.5 h-[2px] bg-sky-500 shadow-[0_0_8px_#0ea5e9]" />
                      )}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}

              {/* Services Dropdown */}
              <NavigationMenuItem value="services">
                <NavigationMenuTrigger
                  className={cn(
                    "bg-transparent h-9 px-4 text-[13px] font-medium tracking-wide rounded-md hover:bg-white/5 data-[state=open]:text-sky-400 focus:bg-white/5",
                    isServicePage ? "text-sky-400" : "text-slate-300"
                  )}
                >
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[600px] p-4 bg-[#0f172a] border border-white/10 shadow-2xl rounded-xl backdrop-blur-3xl ring-1 ring-black/50">
                    <div className="grid grid-cols-2 gap-2">
                      {services.map((service) => {
                        const isActive = pathname === service.href
                        return (
                          <Link
                            key={service.title}
                            href={service.href}
                            onClick={closeNavMenu}
                            className={cn(
                              "group/item flex items-start gap-4 rounded-lg border p-3 transition-all duration-200",
                              isActive
                                ? "border-sky-500/30 bg-sky-500/10"
                                : "border-transparent hover:border-white/10 hover:bg-white/5"
                            )}
                          >
                            <div className={cn(
                              "flex h-9 w-9 shrink-0 items-center justify-center rounded-md transition-all duration-200",
                              isActive
                                ? "bg-sky-500 text-white shadow-[0_0_10px_rgba(14,165,233,0.3)]"
                                : "bg-white/5 text-slate-400 group-hover/item:text-sky-400 group-hover/item:bg-white/10"
                            )}>
                              <service.icon className="h-4 w-4" />
                            </div>
                            <div className="space-y-1">
                              <p className={cn(
                                "text-[13px] font-bold leading-none flex items-center gap-1.5",
                                isActive ? "text-sky-400" : "text-slate-200 group-hover/item:text-sky-400"
                              )}>
                                {service.title}
                                <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 transition-all duration-300 group-hover/item:opacity-100 group-hover/item:translate-x-0" />
                              </p>
                              <p className="text-[11px] leading-snug text-slate-500 group-hover/item:text-slate-400">
                                {service.desc}
                              </p>
                            </div>
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {rightNavItems.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        "relative inline-flex h-9 items-center justify-center rounded-md px-4 text-[13px] font-medium tracking-wide transition-colors hover:text-sky-400",
                        pathname === item.href ? "text-sky-400" : "text-slate-300"
                      )}
                    >
                      {item.name}
                      {pathname === item.href && (
                        <span className="absolute -bottom-1 left-1.5 right-1.5 h-[2px] bg-sky-500 shadow-[0_0_8px_#0ea5e9]" />
                      )}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}

            </NavigationMenuList>
          </NavigationMenu>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            <Link href="/contact" className="hidden md:block">
              <Button
                className="h-9 rounded-none bg-sky-500 px-6 text-[12px] font-black uppercase tracking-widest text-white transition-all duration-300 hover:bg-sky-400 hover:shadow-[0_0_20px_rgba(14,165,233,0.4)] clip-path-button"
                style={{ clipPath: "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)" }}
              >
                Start Project
              </Button>
            </Link>

            {/* Mobile Menu */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="h-9 w-9 text-white hover:bg-white/10 rounded-full">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="w-full sm:w-[350px] p-0 border-l border-white/10 bg-[#020617] text-white"
              >
                <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <Image
                      src={LogoImage}
                      alt="CruxLabs"
                      width={24}
                      height={24}
                      className="h-6 w-6"
                    />
                    <span className="text-lg font-bold">
                      CruxLabs
                    </span>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-slate-400 hover:text-white"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                <div className="px-5 py-8 space-y-8 overflow-y-auto max-h-[calc(100vh-80px)]">
                  <div className="space-y-1">
                    {[
                      { name: "Home", href: "/" },
                      { name: "Portfolio", href: "/portfolio" },
                      { name: "About", href: "/about" },
                      { name: "Contact", href: "/contact" },
                    ].map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={cn(
                          "flex items-center justify-between p-3 rounded-lg text-[14px] font-medium tracking-wide transition-all",
                          pathname === item.href
                            ? "bg-white/10 text-sky-400"
                            : "text-slate-300 hover:bg-white/5 hover:text-white"
                        )}
                      >
                        {item.name}
                        {pathname === item.href && (
                          <div className="w-1.5 h-1.5 rounded-full bg-sky-500 shadow-[0_0_8px_#0ea5e9]" />
                        )}
                      </Link>
                    ))}
                  </div>

                  {/* Services */}
                  <div className="space-y-4 pt-4 border-t border-white/10">
                    <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 px-2">
                      Expertise
                    </h3>
                    <div className="grid gap-1">
                      {services.map((service) => {
                        const isActive = pathname === service.href
                        return (
                          <Link
                            key={service.title}
                            href={service.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className={cn(
                              "flex items-center gap-3 rounded-lg p-3 transition-all duration-200",
                              isActive
                                ? "bg-sky-500/10 text-sky-400"
                                : "hover:bg-white/5 text-slate-400 hover:text-white"
                            )}
                          >
                            <service.icon className="h-4 w-4" />
                            <span className="text-[13px] font-medium">
                              {service.title}
                            </span>
                          </Link>
                        )
                      })}
                    </div>
                  </div>

                  <div className="pt-6">
                    <Link href="/contact" className="block">
                      <Button
                        className="w-full h-12 bg-white text-black font-bold uppercase tracking-widest hover:bg-sky-500 hover:text-white transition-all"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Start Project
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
