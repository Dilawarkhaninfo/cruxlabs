"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import {
  ChevronDown,
  Code,
  Search,
  TrendingUp,
  FileText,
  Server,
  Palette,
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

export default function NavbarEnhanced() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [navMenuValue, setNavMenuValue] = useState("")

  // Check if current page is a service page
  const isServicePage = pathname.startsWith("/services")

  // Close dropdown handler
  const closeNavMenu = () => setNavMenuValue("")

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300",
        scrolled
          ? "border-border/40 bg-white/95 backdrop-blur-md shadow-sm supports-[backdrop-filter]:bg-white/80"
          : "border-border/40 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60"
      )}
    >
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-[15px] font-semibold tracking-tight transition-opacity hover:opacity-80"
        >
          <Image
            src={LogoImage}
            alt="CruxLabs Logo"
            width={36}
            height={36}
            className="h-9 w-9 object-contain"
            priority
          />
          <span className="text-foreground">CruxLabs</span>
        </Link>

        {/* Desktop Navigation with NavigationMenu */}
        <NavigationMenu className="hidden lg:flex" value={navMenuValue} onValueChange={setNavMenuValue}>
          <NavigationMenuList className="gap-1">
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    "group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-[14px] font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                    pathname === "/" && "text-[#2563eb]"
                  )}
                >
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    "group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-[14px] font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                    pathname === "/about" && "text-[#2563eb]"
                  )}
                >
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            {/* Services Dropdown */}
            <NavigationMenuItem value="services">
              <NavigationMenuTrigger
                className={cn(
                  "text-[14px] font-medium",
                  isServicePage && "text-[#2563eb]"
                )}
              >
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[640px] p-6">
                  <div className="grid grid-cols-2 gap-3">
                    {services.map((service) => {
                      const isActive = pathname === service.href
                      return (
                        <Link
                          key={service.title}
                          href={service.href}
                          onClick={closeNavMenu}
                          className={cn(
                            "group/item flex items-start gap-4 rounded-lg border p-4 transition-all duration-200",
                            isActive
                              ? "border-[#2563eb]/30 bg-[#2563eb]/5"
                              : "border-transparent hover:border-border/60 hover:bg-muted/30"
                          )}
                        >
                          <div className={cn(
                            "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors",
                            isActive
                              ? "bg-[#2563eb]/15 text-[#2563eb]"
                              : "bg-[#2563eb]/5 text-[#2563eb] group-hover/item:bg-[#2563eb]/10"
                          )}>
                            <service.icon className="h-5 w-5" />
                          </div>
                          <div className="space-y-1">
                            <p className={cn(
                              "text-[14px] font-semibold leading-none",
                              isActive ? "text-[#2563eb]" : "text-foreground"
                            )}>
                              {service.title}
                            </p>
                            <p className="text-[13px] leading-snug text-muted-foreground">
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

            <NavigationMenuItem>
              <Link href="/portfolio" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    "group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-[14px] font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                    pathname === "/portfolio" && "text-[#2563eb]"
                  )}
                >
                  Portfolio
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    "group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-[14px] font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                    pathname === "/contact" && "text-[#2563eb]"
                  )}
                >
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right Side Actions */}
        <div className="flex items-center gap-2 sm:gap-4">
          <Link href="/contact">
            <Button
              size="sm"
              className="hidden h-9 rounded-lg bg-[#2563eb] px-3 text-[13px] font-medium text-white hover:bg-[#1d4ed8] sm:inline-flex sm:px-4 shadow-sm"
            >
              <span className="hidden sm:inline">Start your project</span>
              <span className="sm:hidden">Get Started</span>
            </Button>
          </Link>

          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <MenuToggleIcon open={mobileMenuOpen} className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[85vw] max-w-[380px] p-0 overflow-y-auto"
            >
              {/* Mobile Menu Header */}
              <div className="sticky top-0 z-10 bg-white border-b border-border/40 px-6 py-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Image
                      src={LogoImage}
                      alt="CruxLabs"
                      width={24}
                      height={24}
                      className="h-6 w-6"
                    />
                    <span className="text-base font-semibold text-foreground">
                      CruxLabs
                    </span>
                  </div>
                </div>
              </div>

              {/* Mobile Menu Content */}
              <div className="px-4 py-6 space-y-6">
                {/* Services Collapsible */}
                <Collapsible className="space-y-3">
                  <div className="flex items-center justify-between px-2">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Services
                    </h3>
                    <CollapsibleTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7 hover:bg-muted/50"
                      >
                        <ChevronDown className="h-4 w-4 text-muted-foreground" />
                      </Button>
                    </CollapsibleTrigger>
                  </div>

                  <CollapsibleContent className="space-y-1 pt-2">
                    {services.map((service) => {
                      const isActive = pathname === service.href
                      return (
                        <Link
                          key={service.title}
                          href={service.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={cn(
                            "flex items-start gap-3 rounded-lg p-3 transition-colors duration-200",
                            isActive
                              ? "bg-[#2563eb]/10"
                              : "hover:bg-muted/50 active:bg-muted"
                          )}
                        >
                          <div className={cn(
                            "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors",
                            isActive ? "bg-[#2563eb]/15" : "bg-[#2563eb]/5"
                          )}>
                            <service.icon className="h-4 w-4 text-[#2563eb]" />
                          </div>
                          <div className="flex-1 pt-0.5">
                            <p className={cn(
                              "text-[13px] font-semibold leading-tight",
                              isActive ? "text-[#2563eb]" : "text-foreground"
                            )}>
                              {service.title}
                            </p>
                            <p className="mt-1 text-[12px] leading-snug text-muted-foreground">
                              {service.desc}
                            </p>
                          </div>
                        </Link>
                      )
                    })}
                  </CollapsibleContent>
                </Collapsible>

                {/* Other Links */}
                <div className="space-y-1 border-t border-border/40 pt-6">
                  <Link
                    href="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "flex items-center rounded-lg px-4 py-3 text-[15px] font-medium transition-colors",
                      pathname === "/"
                        ? "bg-[#2563eb]/10 text-[#2563eb]"
                        : "text-foreground hover:bg-muted/50"
                    )}
                  >
                    Home
                  </Link>
                  <Link
                    href="/portfolio"
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "flex items-center rounded-lg px-4 py-3 text-[15px] font-medium transition-colors",
                      pathname === "/portfolio"
                        ? "bg-[#2563eb]/10 text-[#2563eb]"
                        : "text-foreground hover:bg-muted/50"
                    )}
                  >
                    Portfolio
                  </Link>
                  <Link
                    href="/about"
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "flex items-center rounded-lg px-4 py-3 text-[15px] font-medium transition-colors",
                      pathname === "/about"
                        ? "bg-[#2563eb]/10 text-[#2563eb]"
                        : "text-foreground hover:bg-muted/50"
                    )}
                  >
                    About
                  </Link>
                  <Link
                    href="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "flex items-center rounded-lg px-4 py-3 text-[15px] font-medium transition-colors",
                      pathname === "/contact"
                        ? "bg-[#2563eb]/10 text-[#2563eb]"
                        : "text-foreground hover:bg-muted/50"
                    )}
                  >
                    Contact
                  </Link>
                </div>

                {/* CTA Button */}
                <div className="border-t border-border/40 pt-6">
                  <Link href="/contact" className="block">
                    <Button
                      className="w-full h-11 rounded-lg bg-[#2563eb] text-[15px] font-medium text-white hover:bg-[#1d4ed8] shadow-sm"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Start your project
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}