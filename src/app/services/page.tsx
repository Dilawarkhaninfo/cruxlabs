import ServicesHeroSection from "@/components/services/servicesherosection"
import ServicesGridSection from "@/components/services/servicesgridsection"
import OurProcessSection from "@/components/services/ourprocesssection"
import WhyChooseServicesSection from "@/components/services/whychooseservices"
import CTASection from "@/components/home/ctasection"

export default function ServicesPage() {
  return (
    <main className="flex flex-col">

      {/* 1. Services Hero */}
      <ServicesHeroSection />

      {/* 2. Services Grid */}
      <ServicesGridSection />

      {/* 3. Our Process */}
      <OurProcessSection />

      {/* 4. Why Choose Us */}
      <WhyChooseServicesSection />

      {/* 5. Final CTA */}
      <CTASection />

    </main>
  )
}
