import HeroSection from "../components/home/herosection";
import VisionSection from "@/components/home/visionsection";
import ServicesSection from "@/components/home/servicessection";
 import TechStackSection from "@/components/home/techstacksection";
import WhyChooseUsSection from "@/components/home/whychooseus";
 import FAQSection from "@/components/home/faq";
import TestimonialsSection from "@/components/home/testimonials";
import CTASection from "@/components/home/ctasection";
import ProjectShowcase from "@/components/home/projectshowcase";


export default function HomePage() {
  return (
    <main className="flex flex-col">
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Why Choose Us */}
      <WhyChooseUsSection />
      {/* 2. Vision & Mission */}
      <VisionSection />

        {/* 3. Core Services */}
      <ServicesSection />

 

      {/* 5. Technology Stack */}
      <TechStackSection />

      {/* 6. Project Showcase */}
      <ProjectShowcase />

      {/* 7. Testimonials */}
      <TestimonialsSection />

      <FAQSection />

      <CTASection />
    </main>
  );
}
