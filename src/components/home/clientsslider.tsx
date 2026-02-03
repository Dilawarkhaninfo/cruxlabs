"use client"

import Image from "next/image"
import AlKababiImage from "../../../public/companies/alkababi.png"
import ChauffeurTopImage from "../../../public/companies/ChauffeurTop.png"
import ExecutiveFleetImage from "../../../public/companies/Executivefleet.webp"
import FreshPlusImage from "../../../public/companies/freshplus.webp"
import MetroGuardsImage from "../../../public/companies/metroguards.png"
import UltimateSolarEnergyImage from "../../../public/companies/ultimatesolrenergy.avif"

const clients = [
  {
    name: "Al-Kababi",
    logo: AlKababiImage,
  },
  {
    name: "ChauffeurTop",
    logo: ChauffeurTopImage,
  },
  {
    name: "Executive Fleet",
    logo: ExecutiveFleetImage,
  },
  {
    name: "Fresh Plus",
    logo: FreshPlusImage,
  },
  {
    name: "Metro Guards",
    logo: MetroGuardsImage,
  },
  {
    name: "Ultimate Solar Energy",
    logo: UltimateSolarEnergyImage,
  },
]


export default function ClientsSlider() {
  return (
    <div className="relative overflow-hidden">
      
      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10" />

      {/* Slider */}
      <div className="flex w-max animate-marquee gap-14 py-2 hover:[animation-play-state:paused]">
        {[...clients, ...clients].map((client, index) => (
          <div
            key={index}
            className="flex items-center justify-center opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
          >
            <Image
              src={client.logo}
              alt={client.name}
              width={140}
              height={60}
              className="h-8 w-auto object-contain sm:h-10"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
