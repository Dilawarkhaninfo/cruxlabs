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
  X,
  ChevronDown
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

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "sticky top-0 left-0 right-0 z-[100] transition-all duration-500 flex justify-center", // Added flex center for the container
        scrolled ? "py-4" : "py-6"
      )}
    >
      <div
        className={cn(
          "relative flex items-center justify-between transition-all duration-500 ease-in-out px-6",
          // SCROLLED VS TOP STATE
          scrolled
            ? "w-full max-w-7xl bg-white text-zinc-950 shadow-2xl rounded-sm" // White bg, Dark text, container constrained
            : "w-full bg-transparent text-white" // Transparent bg, White text, full width
        )}
        style={{
          // DIAGONAL SHAPE ON SCROLLED
          // Using clip-path to create a subtle tech/diagonal shape when scrolled
          clipPath: scrolled ? "polygon(0 0, 100% 0, 98% 100%, 2% 100%)" : "none"
        }}
      >

        {/* LOGO AREA */}
        <Link
          href="/"
          className="flex items-center gap-2 group relative z-10 py-2"
        >
          <div className="relative">
            {/* Logo Glow Effect - Colored based on scroll state */}
            <div className={cn(
              "absolute inset-0 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500",
              scrolled ? "bg-sky-500/20" : "bg-sky-500/40"
            )} />
            <Image
              src={LogoImage}
              alt="CruxLabs Logo"
              width={36}
              height={36}
              className="relative h-9 w-9 object-contain transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className={cn(
              "text-[18px] font-bold tracking-tight leading-tight transition-colors",
              scrolled ? "text-zinc-950" : "text-white"
            )}>
              CruxLabs
            </span>
            <span className="text-[9px] uppercase tracking-[0.2em] text-zinc-500 font-medium group-hover:text-sky-500 transition-colors">
              Systems
            </span>
          </div>
        </Link>


        {/* DESKTOP NAVIGATION */}
        <div className={cn(
          "hidden lg:flex items-center gap-1 p-1.5 rounded-full transition-all duration-500",
          // Nav Container Background
          scrolled ? "bg-zinc-100 border border-zinc-200" : "bg-black/20 border border-white/5 backdrop-blur-sm"
        )}>
          <NavigationMenu value={navMenuValue} onValueChange={setNavMenuValue}>
            <NavigationMenuList className="gap-1">

              {/* Standard Links - Left */}
              {navItems.slice(0, 2).map((item) => (
                <NavigationMenuItem key={item.name}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        "relative group px-5 py-2 text-[13px] font-medium transition-all duration-300 rounded-full",
                        // Active State & Hover State Text Colors
                        pathname === item.href
                          ? (scrolled ? "text-white" : "text-white")
                          : (scrolled
                            ? "text-zinc-600 hover:text-zinc-950"  // Scrolled: Dark Text -> Darker on Hover
                            : "text-zinc-300 hover:text-white"     // Top: Light Text -> White on Hover
                          )
                      )}
                    >
                      <span className="relative z-10">{item.name}</span>

                      {/* Hover Background */}
                      <span className={cn(
                        "absolute inset-0 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 origin-center",
                        scrolled ? "bg-zinc-200" : "bg-white/10" // Darker hover on white bg, Light hover on dark bg
                      )} />

                      {/* Active Indicator & Text Fix */}
                      {pathname === item.href && (
                        <motion.span
                          layoutId="navIndicator"
                          className={cn(
                            "absolute inset-0 rounded-full",
                            scrolled ? "bg-zinc-900" : "bg-white/20 border border-white/10"
                          )}
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
                    "bg-transparent h-auto py-2 px-4 text-[13px] font-medium rounded-full focus:bg-transparent",
                    // Text Color Logic
                    scrolled
                      ? "text-zinc-600 data-[state=open]:text-zinc-950 hover:bg-zinc-200 data-[state=open]:bg-zinc-200"
                      : "text-zinc-300 data-[state=open]:text-white hover:bg-white/10 data-[state=open]:bg-white/10",
                    isServicePage && (scrolled ? "text-white bg-zinc-900" : "text-white bg-white/20")
                  )}
                >
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  {/* Dropdown Content - Always Dark Theme for Consistency or Adaptive? Keeping Dark for 'Tech' feel even on white navbar looks good, or match theme. Let's match theme relative to global, but dropdowns usually pop. Let's keep dark for contrast. */}
                  <div className="w-[600px] p-6 bg-[#09090b] border border-white/10 shadow-2xl rounded-2xl grid grid-cols-2 gap-4 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                    {services.map((service) => {
                      const isActive = pathname === service.href
                      return (
                        <Link
                          key={service.title}
                          href={service.href}
                          onClick={() => setNavMenuValue("")}
                          className={cn(
                            "group/item relative flex items-start gap-4 p-4 rounded-xl transition-all duration-300 overflow-hidden",
                            isActive
                              ? "bg-white/5 border border-white/10"
                              : "hover:bg-white/5 border border-transparent hover:border-white/5"
                          )}
                        >
                          <div className="absolute inset-0 bg-sky-500/10 translate-x-[-100%] group-hover/item:translate-x-[100%] transition-transform duration-700 ease-in-out skew-x-12" />

                          <div className={cn(
                            "relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-all duration-300",
                            isActive
                              ? "bg-sky-500 text-white shadow-lg shadow-sky-500/20"
                              : "bg-zinc-900 text-zinc-400 group-hover/item:text-sky-400 group-hover/item:scale-110"
                          )}>
                            <service.icon className="h-5 w-5" />
                          </div>
                          <div className="relative z-10 space-y-1">
                            <p className={cn(
                              "text-[14px] font-semibold flex items-center gap-2",
                              isActive ? "text-sky-400" : "text-zinc-200 group-hover/item:text-white"
                            )}>
                              {service.title}
                            </p>
                            <p className="text-[12px] text-zinc-500 group-hover/item:text-zinc-400 leading-relaxed line-clamp-2">
                              {service.desc}
                            </p>
                          </div>
                        </Link>
                      )
                    })}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Remaining Links - Right */}
              {navItems.slice(2).map((item) => (
                <NavigationMenuItem key={item.name}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        "relative group px-5 py-2 text-[13px] font-medium transition-all duration-300 rounded-full",
                        pathname === item.href
                          ? (scrolled ? "text-white" : "text-white")
                          : (scrolled
                            ? "text-zinc-600 hover:text-zinc-950"
                            : "text-zinc-300 hover:text-white"
                          )
                      )}
                    >
                      <span className="relative z-10">{item.name}</span>
                      <span className={cn(
                        "absolute inset-0 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 origin-center",
                        scrolled ? "bg-zinc-200" : "bg-white/10"
                      )} />
                      {pathname === item.href && (
                        <motion.span
                          layoutId="navIndicator"
                          className={cn(
                            "absolute inset-0 rounded-full",
                            scrolled ? "bg-zinc-900" : "bg-white/20 border border-white/10"
                          )}
                        />
                      )}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}

            </NavigationMenuList>
          </NavigationMenu>
        </div>


        {/* RIGHT SIDE ACTIONS */}
        <div className="flex items-center gap-4">

          <Link href="/contact" className="hidden md:block">
            <Button
              className={cn(
                "relative h-10 px-8 font-bold uppercase tracking-wider text-[11px] overflow-hidden group border-0 rounded-sm hover:shadow-lg transition-all duration-300",
                scrolled ? "bg-zinc-900 text-white hover:bg-zinc-800" : "bg-sky-500 text-white hover:bg-sky-400 hover:shadow-sky-500/30"
              )}
              style={{ clipPath: "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)" }}
            >
              <span className="relative z-10">Start Project</span>
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
            </Button>
          </Link>

          {/* MOBILE MENU TOGGLE */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className={cn(
                "hover:bg-black/10 transition-colors",
                scrolled ? "text-zinc-950" : "text-white hover:bg-white/10"
              )}>
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-[400px] border-l border-white/10 bg-zinc-950 p-0 text-zinc-200">

              <div className="p-6 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Image src={LogoImage} alt="CruxLabs" width={28} height={28} />
                  <span className="font-bold text-lg text-white">CruxLabs</span>
                </div>
                <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                  <X className="h-5 w-5 text-zinc-400" />
                </Button>
              </div>

              <div className="p-6 space-y-6">
                <div className="grid gap-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "flex items-center justify-between p-4 rounded-xl border transition-all duration-300",
                        pathname === item.href
                          ? "bg-white/5 border-sky-500/30 text-sky-400"
                          : "bg-zinc-900/50 border-transparent text-zinc-400 hover:bg-zinc-900 hover:text-white"
                      )}
                    >
                      <span className="text-sm font-medium">{item.name}</span>
                      {pathname === item.href && <div className="h-1.5 w-1.5 rounded-full bg-sky-500 shadow-md shadow-sky-500/50" />}
                    </Link>
                  ))}
                </div>

                <div className="space-y-4">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-600 pl-1">
                    Our Expertise
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 text-zinc-400 hover:text-white transition-colors"
                      >
                        <service.icon className="h-4 w-4 text-sky-500" />
                        <span className="text-sm">{service.title}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                    <Button className="w-full h-12 bg-sky-500 hover:bg-sky-400 text-white font-bold tracking-widest uppercase">
                      Start Project
                    </Button>
                  </Link>
                </div>

              </div>
            </SheetContent>
          </Sheet>

        </div>

      </div>
    </motion.header>
  )
}
