import HostingHeroSection from "@/components/services/hosting/hostingherosection"
import ServerStatusSection from "@/components/services/hosting/serverstatussection"
import HostingStepsSection from "@/components/services/hosting/hostingstepssection"
import HostingSolutionsSection from "@/components/services/hosting/hostingsolutionssection"
import HostingFeaturesSection from "@/components/services/hosting/hostingfeaturessection"
import HostingTrustSection from "@/components/services/hosting/hostingtrustsection"
import WhyChooseHostingSection from "@/components/services/hosting/whychoosehostingsection"
import FAQSection from "@/components/home/faq"
import CTASection from "@/components/home/ctasection"

export default function HostingPage() {
  return (
    <main className="flex flex-col">
      <HostingHeroSection />
      <ServerStatusSection />
      <HostingStepsSection />
      <HostingSolutionsSection />
      <HostingFeaturesSection />
      <HostingTrustSection />
      <WhyChooseHostingSection />
      <FAQSection />
      <CTASection />
    </main>
  )
}
