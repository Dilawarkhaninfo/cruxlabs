import MarketingHeroSection from "@/components/services/digital-marketing/marketingherosection"
import CampaignLiveDemoSection from "@/components/services/digital-marketing/campaignlivedemosection"
import MarketingServicesSection from "@/components/services/digital-marketing/marketingservicessection"
import MarketingProcessSection from "@/components/services/digital-marketing/marketingprocesssection"
import PlatformsSection from "@/components/services/digital-marketing/platformssection"
import MarketingIndustriesSection from "@/components/services/digital-marketing/marketingindustriessection"
import WhyChooseMarketingSection from "@/components/services/digital-marketing/whychoosemarketingsection"
import FAQSection from "@/components/home/faq"
import CTASection from "@/components/home/ctasection"

export default function DigitalMarketingPage() {
  return (
    <main className="flex flex-col">
      <MarketingHeroSection />
      <CampaignLiveDemoSection />
      <MarketingServicesSection />
      <MarketingProcessSection />
      <PlatformsSection />
      <MarketingIndustriesSection />
      <WhyChooseMarketingSection />
      <FAQSection />
      <CTASection />
    </main>
  )
}
