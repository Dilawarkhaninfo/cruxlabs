export default function CampaignLiveDemoSection() {
  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        
        <div>
          <h3 className="text-xl font-semibold mb-4">🚀 Viral Campaign</h3>
          <p className="text-sm text-gray-400">
            Target: Global · Status: LIVE
          </p>
          <p className="mt-6 text-3xl font-bold text-green-400">
            ROI +450% Exceeded
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 text-center">
          {[
            ["Likes", "2.2k"],
            ["Clicks", "1.5k"],
            ["Shares", "129"],
            ["Conv. Rate", "4.8%"],
          ].map(([label, value]) => (
            <div key={label} className="p-4 border border-white/10 rounded-lg">
              <div className="text-xl font-bold">{value}</div>
              <div className="text-xs text-gray-400">{label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
