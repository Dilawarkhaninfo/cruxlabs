"use client";

import { Button } from "@/components/ui/button";
import React from "react";

// Tech stack data - split into two rows for carousel effect
const TECH_ROW1 = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "WordPress",
  "Shopify",
  "MongoDB",
  "PostgreSQL",
];

const TECH_ROW2 = [
  "Tailwind CSS",
  "GraphQL",
  "REST API",
  "AWS",
  "Docker",
  "Git",
  "blueis",
  "Firebase",
];

// Utility to repeat items enough times for seamless loop
const repeatedItems = (items: string[], repeat = 4) =>
  Array.from({ length: repeat }).flatMap(() => items);

export default function IntegrationHero() {
  return (
    <section className="relative py-24 overflow-hidden bg-gray-50 dark:bg-black">
      {/* Light grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.04)_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Technologies Powerhouse</h2>
        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto mb-12">
          Cutting-edge technologies powering your digital solutions
        </p>

        {/* Carousel */}
        <div className="overflow-hidden relative pb-2">
          {/* Row 1 - Scroll Left */}
          <div className="flex gap-4 whitespace-nowrap animate-scroll-left">
            {repeatedItems(TECH_ROW1, 4).map((tech, i) => (
              <span
                key={`${tech}-${i}`}
                className="px-6 py-3 flex-shrink-0 rounded-full border bg-white dark:bg-gray-800 text-sm font-medium shadow-sm hover:shadow-md transition-shadow"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Row 2 - Scroll Right */}
          <div className="flex gap-4 whitespace-nowrap mt-4 animate-scroll-right">
            {repeatedItems(TECH_ROW2, 4).map((tech, i) => (
              <span
                key={`${tech}-${i}`}
                className="px-6 py-3 flex-shrink-0 rounded-full border bg-white dark:bg-gray-800 text-sm font-medium shadow-sm hover:shadow-md transition-shadow"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Fade overlays */}
          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-gray-50 dark:from-black to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-gray-50 dark:from-black to-transparent pointer-events-none" />
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
