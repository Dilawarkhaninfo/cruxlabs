const specialties = [
  "Long-Form Articles",
  "Landing Page Copy",
  "Technical Documentation",
  "Whitepapers",
  "Case Studies",
  "Brand Storytelling",
]

export default function ContentSpecialtiesSection() {
  return (
    <section className="py-24 text-center">
      <h2 className="text-3xl font-bold mb-10">Content Specialties</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {specialties.map(item => (
          <span
            key={item}
            className="px-4 py-2 border rounded-full text-sm"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  )
}
