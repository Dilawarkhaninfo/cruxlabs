import { Mail, Phone, MapPin, MessageSquare } from "lucide-react"

export default function ContactInfoSection() {
  return (
    <div className="rounded-xl border border-border/50 bg-white/50 backdrop-blur-sm p-6">

      {/* Header */}
      <h3 className="text-lg font-semibold text-foreground mb-1">
        Project & Contact Details
      </h3>
      <p className="text-sm text-muted-foreground mb-5">
        Reach out directly or visit us — we’re happy to discuss your requirements.
      </p>

      {/* Info Items */}
      <div className="space-y-5 text-sm">

        {/* Email */}
        <div className="flex items-start gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#2563eb]/10 text-[#2563eb]">
            <Mail className="h-4.5 w-4.5" />
          </div>
          <div>
            <p className="font-medium text-foreground">Email Us</p>
            <p className="text-muted-foreground">
              team@cruxlabs.com.au
            </p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#2563eb]/10 text-[#2563eb]">
            <Phone className="h-4.5 w-4.5" />
          </div>
          <div>
            <p className="font-medium text-foreground">Call Us</p>
            <p className="text-muted-foreground">
              +61 (450) 046-310
            </p>
          </div>
        </div>

        {/* Address */}
        <div className="flex items-start gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#2563eb]/10 text-[#2563eb]">
            <MapPin className="h-4.5 w-4.5" />
          </div>
          <div>
            <p className="font-medium text-foreground">Visit Our Office</p>
            <p className="text-muted-foreground">
              7 Jermyn Street, Fraser Rise VIC, Melbourn, Australlia
            </p>
          </div>
        </div>

      </div>

      {/* Helper Line */}
      <p className="mt-6 text-[13px] text-muted-foreground">
        Prefer email or call? Our team responds within 24 hours.
      </p>

    </div>
  )
}
