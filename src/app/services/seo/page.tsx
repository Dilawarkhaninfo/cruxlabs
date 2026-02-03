import SEOHeroSection from "@/components/services/seo/seoherosection"
import SEOServicesSection from "@/components/services/seo/seoservicessection"
import SEOProcessSection from "@/components/services/seo/seoprocesssection"
import SEOIndustriesSection from "@/components/services/seo/seoindustriessection"
import WhyChooseSEOSection from "@/components/services/seo/whychooseseosection"
import FAQSection from "@/components/home/faq"
import CTASection from "@/components/home/ctasection"

export default function SEOPage() {
  return (
    <main className="flex flex-col">
      <SEOHeroSection />
      <SEOServicesSection />
      <SEOProcessSection />
      <SEOIndustriesSection />
      <WhyChooseSEOSection />
      <FAQSection />
      <CTASection />
    </main>
  )
}
