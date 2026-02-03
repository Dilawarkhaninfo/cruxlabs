import {
  Code,
  Search,
  Smartphone,
  PenTool,
  Globe,
  Palette,
} from "lucide-react"
import ServiceCard from "./servicecard"

export default function ServicesGridSection() {
  return (
    <section className="py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        <ServiceCard
          icon={<Code />}
          title="Web Development"
          description="Custom websites and web applications built with modern technologies."
          features={[
            "Responsive Design",
            "E-commerce Solutions",
            "Custom Web Applications",
            "CMS Integration",
            "Performance Optimization",
            "Ongoing Maintenance",
          ]}
        />

        <ServiceCard
          icon={<Search />}
          title="SEO Services"
          description="Improve search rankings and drive organic traffic."
          features={[
            "Keyword Research",
            "On-Page Optimization",
            "Technical SEO",
            "Link Building",
            "Local SEO",
            "SEO Reporting",
          ]}
        />

        <ServiceCard
          icon={<Smartphone />}
          title="Digital Marketing"
          description="Data-driven marketing campaigns that maximize ROI."
          features={[
            "Social Media Marketing",
            "PPC Advertising",
            "Email Marketing",
            "Content Marketing",
            "Analytics",
            "Conversion Optimization",
          ]}
        />

        <ServiceCard
          icon={<PenTool />}
          title="Content Writing"
          description="SEO-optimized content that engages and converts."
          features={[
            "Blog Writing",
            "Website Copy",
            "Product Descriptions",
            "SEO Content",
            "Social Media Content",
            "Email Newsletters",
          ]}
        />

        <ServiceCard
          icon={<Globe />}
          title="Domain & Hosting"
          description="Secure and reliable hosting solutions."
          features={[
            "Domain Registration",
            "Shablue Hosting",
            "VPS Hosting",
            "Dedicated Servers",
            "SSL Certificates",
            "24/7 Support",
          ]}
        />

        <ServiceCard
          icon={<Palette />}
          title="Branding & Logo Design"
          description="Build a brand identity that stands out."
          features={[
            "Logo Design",
            "Brand Strategy",
            "Visual Identity",
            "Brand Guidelines",
            "Marketing Materials",
            "Brand Refresh",
          ]}
        />

      </div>
    </section>
  )
}
