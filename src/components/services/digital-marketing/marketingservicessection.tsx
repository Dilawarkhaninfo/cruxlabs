const services = [
  {
    title: "Social Media Marketing",
    desc: "Build engaged communities and drive conversions.",
  },
  {
    title: "PPC Advertising",
    desc: "Instant visibility through targeted paid campaigns.",
  },
  {
    title: "Email Marketing",
    desc: "Personalized campaigns that nurture and convert leads.",
  },
  {
    title: "Content Marketing",
    desc: "SEO-optimized content that attracts and engages.",
  },
  {
    title: "Analytics & Reporting",
    desc: "Data insights to continuously optimize performance.",
  },
  {
    title: "Conversion Optimization",
    desc: "Improve funnels and maximize ROI.",
  },
]

export default function MarketingServicesSection() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map(service => (
          <div key={service.title} className="p-6 border rounded-xl">
            <h3 className="font-semibold">{service.title}</h3>
            <p className="mt-2 text-sm text-gray-600">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
