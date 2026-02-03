const platforms = [
  "Google Ads",
  "Meta (Facebook & Instagram)",
  "LinkedIn Ads",
  "YouTube",
  "Email Automation",
]

export default function PlatformsSection() {
  return (
    <section className="py-24 text-center">
      <h2 className="text-3xl font-bold mb-10">Platforms We Master</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {platforms.map(p => (
          <span key={p} className="px-4 py-2 border rounded-full text-sm">
            {p}
          </span>
        ))}
      </div>
    </section>
  )
}
