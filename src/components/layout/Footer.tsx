import Link from "next/link"
import {   Github, Linkedin, Twitter, Mail, MapPin, Phone } from "lucide-react"
import LogoImage from "../../../public/logo.png"
import Image from "next/image"

const services = [
  { name: "Enterprise Web Applications", href: "/services/enterprise-web-apps" },
  { name: "Backend & API Systems", href: "/services/backend-systems" },
  { name: "CRM & Lead Automation", href: "/services/crm-automation" },
  { name: "SEO & Content Systems", href: "/services/seo-systems" },
]

const systems = [
  { name: "Custom CRM Solutions", href: "/systems" },
  { name: "Lead Capture & Funnels", href: "/systems" },
  { name: "Business Automation", href: "/systems" },
  { name: "Scalable Architecture", href: "/systems" },
]

const company = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Systems", href: "/systems" },
  { name: "Contact", href: "/contact" },
]

const socialLinks = [
  { name: "GitHub", href: "https://github.com/cruxlabs", icon: Github },
  { name: "LinkedIn", href: "https://linkedin.com/company/cruxlabs", icon: Linkedin },
  { name: "Twitter", href: "https://twitter.com/cruxlabs", icon: Twitter },
  { name: "Email", href: "mailto:hello@cruxlabs.com", icon: Mail },
]

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 lg:pt-20">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Brand & Philosophy - Takes more space on desktop */}
          <div className="lg:col-span-4 space-y-5">
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
          <span className="text-base">CruxLabs</span>
        </Link>
            <p className="text-[14px] text-white/70 leading-relaxed max-w-sm">
              We solve the hardest part of your business by engineering
              scalable digital systems — not surface-level websites.
            </p>
            <div className="pt-2">
              <p className="text-[13px] font-medium text-white/90 mb-1">
                Engineering clarity. Automating growth.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-2.5 pt-3">
              <a 
                href="mailto:hello@cruxlabs.com" 
                className="flex items-center gap-2.5 text-[13px] text-white/70 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>hello@cruxlabs.com</span>
              </a>
              <a 
                href="tel:+61450046310" 
                className="flex items-center gap-2.5 text-[13px] text-white/70 hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>+61 (450) 046-310</span>
              </a>
              <div className="flex items-start gap-2.5 text-[13px] text-white/70">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>7 Jermyn Street, Fraser Rise VIC, Melbourn, Australlia</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-white/70 transition-all hover:bg-white/10 hover:text-white"
                  aria-label={social.name}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="text-[13px] font-semibold uppercase tracking-wider text-white/90 mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-[14px] text-white/70 hover:text-white transition-colors inline-block"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Systems */}
          <div className="lg:col-span-3">
            <h4 className="text-[13px] font-semibold uppercase tracking-wider text-white/90 mb-5">
              Systems
            </h4>
            <ul className="space-y-3">
              {systems.map((system) => (
                <li key={system.name}>
                  <Link
                    href={system.href}
                    className="text-[14px] text-white/70 hover:text-white transition-colors inline-block"
                  >
                    {system.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h4 className="text-[13px] font-semibold uppercase tracking-wider text-white/90 mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-[14px] text-white/70 hover:text-white transition-colors inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-[13px] text-white/60">
              © {new Date().getFullYear()} CruxLabs. All rights reserved.
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <Link 
                href="/privacy" 
                className="text-[13px] text-white/60 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms" 
                className="text-[13px] text-white/60 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
 
        </div>
      </div>
    </footer>
  )
}