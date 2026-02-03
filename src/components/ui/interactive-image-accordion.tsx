"use client"

import   { useState } from 'react';
import WebSystemImage from "../../../public/WebSystems.avif"
import BackendCRMImage from "../../../public/BackendCRM.avif"
import InfrastructureImage from "../../../public/Infrastructure.avif"
import PerformanceImage from "../../../public/Performance.avif"
import SecurityImage from "../../../public/Security.avif"
import type { StaticImageData } from "next/image"
import Image from 'next/image';

const accordionItems: {
  id: number
  title: string
  image: StaticImageData
}[] = [
  {
    id: 1,
    title: "Enterprise Web Systems",
    image: WebSystemImage,
  },
  {
    id: 2,
    title: "Backend & CRM Automation",
    image: BackendCRMImage,
  },
  {
    id: 3,
    title: "Scalable Infrastructure",
    image: InfrastructureImage,
  },
  {
    id: 4,
    title: "Performance & Conversion Systems",
    image: PerformanceImage,
  },
  {
    id: 5,
    title: "Security-First Architecture",
    image: SecurityImage,
  },
]


// --- Accordion Item Component ---
const AccordionItem = ({
  item,
  isActive,
  onMouseEnter,
}: {
  item: (typeof accordionItems)[0]
  isActive: boolean
  onMouseEnter: () => void
}) => {
  return (
    <div
      className={`
        relative h-[450px] rounded-2xl overflow-hidden cursor-pointer
        transition-all duration-700 ease-in-out
        ${isActive ? "w-[400px]" : "w-[60px]"}
      `}
      onMouseEnter={onMouseEnter}
    >
      {/* Optimized Background Image */}
      <Image
        src={item.image}
        alt={item.title}
        fill
        priority={isActive}              // 👈 boosts LCP for active panel
        sizes="(min-width: 1024px) 400px, 100vw"
        className="object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Caption */}
      <span
        className={`
          absolute text-white text-lg font-semibold whitespace-nowrap
          transition-all duration-300 ease-in-out
          ${
            isActive
              ? "bottom-6 left-1/2 -translate-x-1/2 rotate-0"
              : "bottom-24 left-1/2 -translate-x-1/2 rotate-90"
          }
        `}
      >
        {item.title}
      </span>
    </div>
  )
}


// --- Main Component ---
export function InteractiveImageAccordion() {
  const [activeIndex, setActiveIndex] = useState(2);

  const handleItemHover = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="w-full">
      <div className="flex flex-row items-center justify-center gap-4 overflow-x-auto p-4">
        {accordionItems.map((item, index) => (
          <AccordionItem
            key={item.id}
            item={item}
            isActive={index === activeIndex}
            onMouseEnter={() => handleItemHover(index)}
          />
        ))}
      </div>
    </div>
  );
}