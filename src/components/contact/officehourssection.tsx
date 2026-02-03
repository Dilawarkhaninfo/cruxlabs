export default function OfficeHoursSection() {
  return (
    <div className="bg-white/50 backdrop-blur-sm rounded-xl border border-border/50 p-6">
      <h3 className="text-lg font-semibold text-foreground mb-4">
        Office Hours
      </h3>
      <div className="space-y-2 text-sm text-muted-foreground">
        <p>Monday – Friday: 9:00 AM – 6:00 PM</p>
        <p>Saturday: 10:00 AM – 4:00 PM</p>
        <p>Sunday: Closed</p>
      </div>
    </div>
  )
}
