const steps = [
  { step: "01", title: "Discovery", desc: "We learn about your business and goals" },
  { step: "02", title: "Strategy", desc: "We create a customized action plan" },
  { step: "03", title: "Execution", desc: "We build and launch with precision" },
  { step: "04", title: "Optimization", desc: "We refine for maximum results" },
]

export default function OurProcessSection() {
  return (
    <section className="py-24 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center space-y-12">

        <h2 className="text-3xl font-bold">Our Process</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item) => (
            <div
              key={item.step}
              className="rounded-xl bg-white p-6 shadow-sm"
            >
              <span className="text-blue-600 font-bold text-xl">
                {item.step}
              </span>
              <h3 className="mt-2 font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
