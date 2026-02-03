const steps = [
  { step: "01", title: "Strategy", desc: "Market research & planning." },
  { step: "02", title: "Content", desc: "Creating engaging assets." },
  { step: "03", title: "Launch", desc: "Executing campaigns." },
  { step: "04", title: "Optimize", desc: "Maximizing ROI." },
]

export default function MarketingProcessSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
        {steps.map(item => (
          <div key={item.step} className="p-6 bg-white border rounded-xl">
            <span className="text-blue-600 font-bold">{item.step}</span>
            <h3 className="mt-2 font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
