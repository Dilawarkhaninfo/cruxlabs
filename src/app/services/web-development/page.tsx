import WebHeroSection from "@/components/services/web-development/webherosection"
 import OfferingsSection from "@/components/services/web-development/offeringssection"
import TechStackSection from "@/components/services/web-development/techstacksection"
import ExecutionProcessSection from "@/components/services/web-development/executionprocesssection"
import IndustriesSection from "@/components/services/web-development/industriessection"
import WhyChooseWebSection from "@/components/services/web-development/whychoosewebsection"
import OldVsNewSection from "@/components/services/web-development/oldvsnewsection"
import JourneyTimelineSection from "@/components/services/web-development/journeytimelinesection"
import SecuritySection from "@/components/services/web-development/securitysection"
import FAQSection from "@/components/home/faq"
import CTASection from "@/components/home/ctasection"

export default function WebDevelopmentPage() {
  return (
    <main className="flex flex-col">
      <WebHeroSection />
       <OfferingsSection />
      <TechStackSection />
      <ExecutionProcessSection />
      <IndustriesSection />
      <WhyChooseWebSection />
      <OldVsNewSection />
      <JourneyTimelineSection />
      <SecuritySection />
      <FAQSection />
      <CTASection />
    </main>
  )
}
