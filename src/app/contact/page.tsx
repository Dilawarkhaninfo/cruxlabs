import ContactHeroSection from "@/components/contact/contactherosection"
import ContactFormSection from "@/components/contact/contactformsection"
import ContactInfoSection from "@/components/contact/contactinfosection"
import OfficeHoursSection from "@/components/contact/officehourssection"
import MapSection from "@/components/contact/mapsection"
import CTASection from "@/components/home/ctasection"

export default function ContactPage() {
  return (
    <main className="flex flex-col">

      {/* 1. Hero */}
      <ContactHeroSection />

      {/* 2. Form + Info */}
      <section className="py-20 px-4 sm:px-6 bg-gray-50/50">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactFormSection />

          <div className="space-y-6">
            <ContactInfoSection />
            <OfficeHoursSection />
          </div>
        </div>
      </section>

      {/* 3. Map */}
      <MapSection />

      {/* 4. Final CTA */}
      <CTASection />
    </main>
  )
}
