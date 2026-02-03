const process = [
  {
    step: "01",
    title: "Briefing",
    desc: "Understanding your goals, audience, and tone.",
  },
  {
    step: "02",
    title: "Research",
    desc: "Topic research, competitor analysis, and keywords.",
  },
  {
    step: "03",
    title: "Drafting",
    desc: "Crafting the initial content with structure and clarity.",
  },
  {
    step: "04",
    title: "Review",
    desc: "Editing, polishing, and quality assurance.",
  },
]

export default function WritingProcessSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
        {process.map(item => (
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
