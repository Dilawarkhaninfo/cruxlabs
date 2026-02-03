export default function WhyChooseServicesSection() {
  return (
    <section className="py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        <h2 className="text-3xl font-bold">Why Choose Us</h2>
        <p className="text-gray-600">
          We combine strategy, creativity, and technology to deliver
          exceptional digital experiences.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
          {[
            "Expert Team",
            "Modern Tech Stack",
            "Transparent Communication",
          ].map((item) => (
            <div
              key={item}
              className="rounded-xl border p-6 text-sm font-medium"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
