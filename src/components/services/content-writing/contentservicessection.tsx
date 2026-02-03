const services = [
  {
    title: "Blog Posts & Articles",
    desc: "Engaging blog content that boosts traffic and SEO.",
  },
  {
    title: "Website Copy",
    desc: "Persuasive copy that converts visitors into customers.",
  },
  {
    title: "Product Descriptions",
    desc: "Compelling descriptions that highlight value and drive sales.",
  },
  {
    title: "SEO Content",
    desc: "Keyword-optimized content built to rank and convert.",
  },
  {
    title: "Social Media Content",
    desc: "Posts and captions that drive engagement and brand growth.",
  },
  {
    title: "Email Newsletters",
    desc: "Emails that nurture leads and retain customers.",
  },
]

export default function ContentServicesSection() {
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
