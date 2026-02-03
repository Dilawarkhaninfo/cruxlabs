const industries = [
  "E-commerce",
  "SaaS",
  "Finance",
  "Healthcare",
  "Real Estate",
  "Startups",
]

export default function ContentIndustriesSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {industries.map(industry => (
          <div key={industry} className="p-6 bg-white border rounded-xl">
            {industry}
          </div>
        ))}
      </div>
    </section>
  )
}
