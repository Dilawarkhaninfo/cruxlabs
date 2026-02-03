const reasons = [
  {
    id: "01",
    title: "Multi-Channel Expertise",
    desc: "Cohesive campaigns across social, search, and email.",
  },
  {
    id: "02",
    title: "Data-Driven Decisions",
    desc: "Every optimization backed by performance metrics.",
  },
  {
    id: "03",
    title: "Creative Excellence",
    desc: "High-performing visuals and ad copy.",
  },
  {
    id: "04",
    title: "Targeted Campaigns",
    desc: "Laser-focused audience targeting.",
  },
  {
    id: "05",
    title: "Brand Loyalty",
    desc: "Build communities, not just conversions.",
  },
  {
    id: "06",
    title: "Transparent Reporting",
    desc: "Clear ROI and spend breakdowns.",
  },
]

export default function WhyChooseMarketingSection() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {reasons.map(reason => (
          <div key={reason.id} className="p-6 border rounded-xl">
            <span className="text-blue-600 font-bold">{reason.id}</span>
            <h3 className="mt-2 font-semibold">{reason.title}</h3>
            <p className="mt-2 text-sm text-gray-600">{reason.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
