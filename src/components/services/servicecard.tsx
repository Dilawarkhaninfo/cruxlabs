import { Check } from "lucide-react"

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  features: string[]
}

export default function ServiceCard({
  icon,
  title,
  description,
  features,
}: ServiceCardProps) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-3 rounded-xl bg-blue-100 text-blue-600">
          {icon}
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>

      <p className="text-gray-600 mb-4">{description}</p>

      <ul className="space-y-2 mb-6">
        {features.map((item, index) => (
          <li key={index} className="flex items-center gap-2 text-sm text-gray-700">
            <Check className="w-4 h-4 text-green-500" />
            {item}
          </li>
        ))}
      </ul>

      <div className="flex gap-3">
        <button className="flex-1 rounded-lg border px-4 py-2 text-sm hover:bg-gray-50">
          Learn More
        </button>
        <button className="flex-1 rounded-lg bg-blue-600 text-white px-4 py-2 text-sm hover:bg-blue-700">
          Get Started
        </button>
      </div>
    </div>
  )
}
