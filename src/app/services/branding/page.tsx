import BrandingHeroSection from "@/components/services/branding/brandingherosection"
import BrandingServicesSection from "@/components/services/branding/brandingservicessection"
import BrandingProcessSection from "@/components/services/branding/brandingprocesssection"
import BrandingDeliverablesSection from "@/components/services/branding/brandingdeliverablessection"
import BrandingIndustriesSection from "@/components/services/branding/brandingindustriessection"
import WhyChooseBrandingSection from "@/components/services/branding/whychoosebrandingsection"
import FAQSection from "@/components/home/faq"
import CTASection from "@/components/home/ctasection"

export default function BrandingPage() {
  return (
    <main className="flex flex-col">
      <BrandingHeroSection />
      <BrandingServicesSection />
      <BrandingProcessSection />
      <BrandingDeliverablesSection />
      <BrandingIndustriesSection />
      <WhyChooseBrandingSection />
      <FAQSection />
      <CTASection />
    </main>
  )
}
