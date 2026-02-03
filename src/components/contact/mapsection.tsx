import { MapPin } from "lucide-react"

export default function MapSection() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-white border-t border-border/40">
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="mb-8 max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-border/50 bg-white/50 px-3 py-1.5 text-[13px] font-medium backdrop-blur-sm text-muted-foreground shadow-sm">
            <MapPin className="h-3.5 w-3.5 text-[#2563eb]" />
            Office Location
          </div>

          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-2">
            Visit Our Melbourne Office
          </h2>

          <p className="text-sm sm:text-base text-muted-foreground">
            We’re located in Fraser Rise, Melbourne. Feel free to visit us or
            schedule a meeting in advance.
          </p>
        </div>



        {/* Map */}
        <div className="relative overflow-hidden rounded-xl border border-border/50">
          <iframe
            title="CruxLabs Office Location"
            src="https://www.google.com/maps?q=7%20Jermyn%20Street,%20Fraser%20Rise%20VIC%20Australia&output=embed"
            className="h-[420px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

      </div>
    </section>
  )
}
