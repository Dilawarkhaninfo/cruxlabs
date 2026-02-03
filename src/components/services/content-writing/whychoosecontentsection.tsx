const reasons = [
  {
    id: "01",
    title: "Expert Writers",
    desc: "Industry-experienced writers who understand your niche.",
  },
  {
    id: "02",
    title: "SEO Optimized",
    desc: "Content crafted to rank high while remaining human-friendly.",
  },
  {
    id: "03",
    title: "Original Content",
    desc: "100% plagiarism-free, written exclusively for your brand.",
  },
  {
    id: "04",
    title: "Brand Consistency",
    desc: "Unified voice aligned with your tone and guidelines.",
  },
  {
    id: "05",
    title: "Fast Turnaround",
    desc: "Reliable delivery timelines that keep content flowing.",
  },
  {
    id: "06",
    title: "Unlimited Revisions",
    desc: "We refine content until it meets your expectations.",
  },
]

export default function WhyChooseContentSection() {
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
