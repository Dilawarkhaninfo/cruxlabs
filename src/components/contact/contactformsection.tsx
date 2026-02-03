import { Button } from "@/components/ui/button"

export default function ContactFormSection() {
  return (
    <div className="bg-white/50 backdrop-blur-sm rounded-xl border border-border/50 p-8">
      <h2 className="text-2xl font-semibold text-foreground mb-2">
        Send Us a Message
      </h2>
      <p className="text-sm text-muted-foreground mb-6">
        Fill out the form and we’ll get back to you within 24 hours.
      </p>

      <form className="space-y-5">
        <input
          type="text"
          placeholder="Full Name *"
          className="w-full h-11 rounded-lg border border-border px-4 text-sm"
        />
        <input
          type="email"
          placeholder="Email Address *"
          className="w-full h-11 rounded-lg border border-border px-4 text-sm"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full h-11 rounded-lg border border-border px-4 text-sm"
        />
        <select className="w-full h-11 rounded-lg border border-border px-4 text-sm text-muted-foreground">
          <option>Select a service</option>
          <option>Web Development</option>
          <option>SEO Services</option>
          <option>Digital Marketing</option>
          <option>Branding & Design</option>
        </select>
        <textarea
          rows={4}
          placeholder="Tell us about your project..."
          className="w-full rounded-lg border border-border px-4 py-3 text-sm"
        />
        <Button className="w-full h-11 bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] hover:opacity-90 transition-opacity shadow-md">
          Send Message
        </Button>
      </form>
    </div>
  )
}
