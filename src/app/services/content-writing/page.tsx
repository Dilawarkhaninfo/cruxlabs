import ContentHeroSection from "@/components/services/content-writing/contentherosection"
import WritingProcessSection from "@/components/services/content-writing/writingprocesssection"
import ContentServicesSection from "@/components/services/content-writing/contentservicessection"
import ContentSpecialtiesSection from "@/components/services/content-writing/contentspecialtiessection"
import ContentIndustriesSection from "@/components/services/content-writing/contentindustriessection"
import WhyChooseContentSection from "@/components/services/content-writing/whychoosecontentsection"
import FAQSection from "@/components/home/faq"
import CTASection from "@/components/home/ctasection"

export default function ContentWritingPage() {
  return (
    <main className="flex flex-col">
      <ContentHeroSection />
      <WritingProcessSection />
      <ContentServicesSection />
      <ContentSpecialtiesSection />
      <ContentIndustriesSection />
      <WhyChooseContentSection />
      <FAQSection />
      <CTASection />
    </main>
  )
}
