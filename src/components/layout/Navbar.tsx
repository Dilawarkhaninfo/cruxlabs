"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion"
import {
  ChevronDown,
  Code,
  Search,
  TrendingUp,
  FileText,
  Server,
  Palette,
  ArrowRight,
} from "lucide-react"

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

import { Button } from "@/components/ui/button"
import { MenuToggleIcon } from "@/components/ui/menu-toggle-icon"
import Image from "next/image"
import LogoImage from "../../../public/logo.png"
import { cn } from "@/lib/utils"

const services = [
  {
    title: "Web Development",
    desc: "Custom websites and web applications built with modern technologies.",
    icon: Code,
    href: "/services/web-development",
  },
  {
    title: "SEO Services",
    desc: "Search engine optimization to boost your online visibility.",
    icon: Search,
    href: "/services/seo",
  },
  {
    title: "Digital Marketing",
    desc: "Strategic marketing campaigns to grow your business online.",
    icon: TrendingUp,
    href: "/services/digital-marketing",
  },
  {
    title: "Content Writing",
    desc: "Professional content creation for websites and marketing.",
    icon: FileText,
    href: "/services/content-writing",
  },
  {
    title: "Domain & Hosting",
    desc: "Reliable domain registration and web hosting solutions.",
    icon: Server,
    href: "/services/hosting",
  },
  {
    title: "Branding & Logo",
    desc: "Creative branding and logo design for your business identity.",
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
    setScrolled(latest > 40)
  })

  // Check if current page is a service page
  const isServicePage = pathname.startsWith("/services")

  // Close dropdown handler
  const closeNavMenu = () => setNavMenuValue("")

  return (
    <motion.header
      className={cn(
        "sticky top-0 left-0 right-0 z-[100] transition-all duration-500",
        scrolled ? "pt-4 px-4" : "pt-0 px-0"
      )}
    >
      <div
        className={cn(
          "mx-auto transition-all duration-500",
          scrolled
            ? "container max-w-7xl bg-white/80 backdrop-blur-xl border border-white/40 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] rounded-2xl"
            : "max-w-full bg-white border-b border-slate-100 rounded-none"
        )}
      >
        <div className={cn(
          "flex h-16 items-center justify-between transition-all duration-500",
          scrolled ? "px-6" : "container mx-auto max-w-7xl px-4 sm:px-6"
        )}>
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-[#2563eb]/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <Image
                src={LogoImage}
                alt="CruxLabs Logo"
                width={32}
                height={32}
                className="relative h-8 w-8 object-contain transition-transform duration-300 group-hover:scale-110"
                priority
              />
            </div>
            <span className="text-[17px] font-bold tracking-tight text-[#0f172a] transition-colors group-hover:text-[#2563eb]">
              CruxLabs
            </span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex" value={navMenuValue} onValueChange={setNavMenuValue}>
            <NavigationMenuList className="gap-1">
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
              ].map((item) => (
                <NavigationMenuItem key={item.name}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        "relative inline-flex h-10 items-center justify-center rounded-full px-5 text-[14px] font-medium transition-all duration-200 hover:text-[#2563eb]",
                        pathname === item.href ? "text-[#2563eb]" : "text-[#475569]"
                      )}
                    >
                      {item.name}
                      {pathname === item.href && (
                        <motion.div
                          layoutId="nav-underline"
                          className="absolute bottom-1 left-5 right-5 h-[1.5px] bg-[#2563eb]"
                        />
                      )}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}

              {/* Services Dropdown */}
              <NavigationMenuItem value="services">
                <NavigationMenuTrigger
                  className={cn(
                    "bg-transparent h-10 px-5 text-[14px] font-medium rounded-full hover:bg-transparent data-[state=open]:text-[#2563eb]",
                    isServicePage ? "text-[#2563eb]" : "text-[#475569]"
                  )}
                >
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[680px] p-6 bg-white/95 backdrop-blur-xl border border-white/40 shadow-2xl rounded-2xl">
                    <div className="grid grid-cols-2 gap-4">
                      {services.map((service) => {
                        const isActive = pathname === service.href
                        return (
                          <Link
                            key={service.title}
                            href={service.href}
                            onClick={closeNavMenu}
                            className={cn(
                              "group/item flex items-start gap-4 rounded-xl border p-4 transition-all duration-300",
                              isActive
                                ? "border-[#2563eb]/20 bg-[#2563eb]/5 shadow-[0_4px_12px_rgba(37,99,235,0.05)]"
                                : "border-transparent hover:border-[#2563eb]/10 hover:bg-slate-50"
                            )}
                          >
                            <div className={cn(
                              "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-all duration-300",
                              isActive
                                ? "bg-[#2563eb] text-white"
                                : "bg-slate-100 text-[#475569] group-hover/item:bg-[#2563eb] group-hover/item:text-white"
                            )}>
                              <service.icon className="h-5 w-5" />
                            </div>
                            <div className="space-y-1">
                              <p className={cn(
                                "text-[14px] font-semibold leading-none flex items-center gap-1.5",
                                isActive ? "text-[#2563eb]" : "text-[#1e293b] group-hover/item:text-[#2563eb]"
                              )}>
                                {service.title}
                                <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 transition-all duration-300 group-hover/item:opacity-100 group-hover/item:translate-x-0" />
                              </p>
                              <p className="text-[13px] leading-snug text-[#64748b]">
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

              {[
                { name: "Portfolio", href: "/portfolio" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <NavigationMenuItem key={item.name}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        "relative inline-flex h-10 items-center justify-center rounded-full px-5 text-[14px] font-medium transition-all duration-200 hover:text-[#2563eb]",
                        pathname === item.href ? "text-[#2563eb]" : "text-[#475569]"
                      )}
                    >
                      {item.name}
                      {pathname === item.href && (
                        <motion.div
                          layoutId="nav-underline"
                          className="absolute bottom-1 left-5 right-5 h-[1.5px] bg-[#2563eb]"
                        />
                      )}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            <Link href="/contact" className="hidden md:block">
              <Button
                className="h-10 rounded-full bg-[#0f172a] px-6 text-[14px] font-semibold text-white transition-all duration-300 hover:bg-[#2563eb] hover:shadow-[0_8px_20px_rgba(37,99,235,0.25)] hover:-translate-y-0.5"
              >
                Let&apos;s Talk
              </Button>
            </Link>

            {/* Mobile Menu */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="h-10 w-10 hover:bg-slate-100 rounded-full">
                  <MenuToggleIcon open={mobileMenuOpen} className="h-5 w-5 text-[#1e293b]" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="w-[90vw] max-w-[400px] p-0 border-l border-white/20 bg-white/95 backdrop-blur-xl"
              >
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <Image
                      src={LogoImage}
                      alt="CruxLabs"
                      width={28}
                      height={28}
                      className="h-7 w-7"
                    />
                    <span className="text-lg font-bold text-[#0f172a]">
                      CruxLabs
                    </span>
                  </div>
                </div>

                {/* Mobile Menu Content */}
                <div className="px-5 py-8 space-y-8 overflow-y-auto max-h-[calc(100vh-80px)]">
                  {/* Services Collapsible */}
                  <div className="space-y-4">
                    <h3 className="text-[12px] font-bold uppercase tracking-[0.1em] text-[#94a3b8] px-2">
                      Our Expertise
                    </h3>
                    <div className="grid gap-2">
                      {services.map((service) => {
                        const isActive = pathname === service.href
                        return (
                          <Link
                            key={service.title}
                            href={service.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className={cn(
                              "flex items-center gap-4 rounded-2xl p-4 transition-all duration-200",
                              isActive
                                ? "bg-[#2563eb]/10 border border-[#2563eb]/20"
                                : "hover:bg-slate-50 border border-transparent"
                            )}
                          >
                            <div className={cn(
                              "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors",
                              isActive ? "bg-[#2563eb] text-white" : "bg-white shadow-sm text-[#475569]"
                            )}>
                              <service.icon className="h-5 w-5" />
                            </div>
                            <div className="flex-1">
                              <p className={cn(
                                "text-[14px] font-bold leading-tight",
                                isActive ? "text-[#2563eb]" : "text-[#1e293b]"
                              )}>
                                {service.title}
                              </p>
                              <p className="mt-0.5 text-[12px] text-[#64748b]">
                                {service.desc}
                              </p>
                            </div>
                          </Link>
                        )
                      })}
                    </div>
                  </div>

                  {/* Main Links */}
                  <div className="space-y-2 border-t border-slate-100 pt-8">
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
                          "flex items-center rounded-xl px-4 py-3.5 text-[16px] font-semibold transition-all",
                          pathname === item.href
                            ? "bg-[#2563eb] text-white shadow-lg shadow-[#2563eb]/20"
                            : "text-[#475569] hover:bg-slate-50"
                        )}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="pt-4">
                    <Link href="/contact" className="block">
                      <Button
                        className="w-full h-12 rounded-xl bg-[#0f172a] text-[15px] font-bold text-white hover:bg-[#2563eb] transition-all"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Start Your Growth Journey
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
