"use client";
import { Code2 } from "lucide-react";
import React, { useState, useEffect } from "react";
interface OrbitRingProps {
  radius: number;
  icons: { name: string; icon: string }[];
  iconSize: number;
  duration: number; // Duration of one full rotation in seconds
  reverse?: boolean; // If true, rotates counter-clockwise
}

function OrbitRing({
  radius,
  icons,
  iconSize,
  duration,
  reverse = false,
}: OrbitRingProps) {
  const count = icons.length;

  return (
    <div
      className="absolute rounded-full border border-border/20 group hover:pause-animation"
      style={{
        width: radius * 2,
        height: radius * 2,
        left: "50%",
        top: "50%",
        marginTop: -radius,
        marginLeft: -radius,
        // The container rotates
        animation: `orbit ${duration}s linear infinite ${reverse ? "reverse" : "normal"}`,
      }}
    >
      {icons.map((tech, index) => {
        // Distribute icons evenly around the circle
        const angleStep = 360 / count;
        const angle = index * angleStep;

        // Position on the circle (start at 0deg = right side)
        // We use absolute positioning relative to this rotating container
        // transform-origin is center by default for divs, so we can just translate
        // But simpler: use standard trigonometry relative to center (radius, radius)
        const x = radius + radius * Math.cos((angle * Math.PI) / 180);
        const y = radius + radius * Math.sin((angle * Math.PI) / 180);

        return (
          <div
            key={index}
            className="absolute flex items-center justify-center"
            style={{
              left: x - iconSize / 2,
              top: y - iconSize / 2,
              width: iconSize,
              height: iconSize,
              // Counter-rotate the icon so it stays upright
              animation: `orbit-reverse ${duration}s linear infinite ${reverse ? "reverse" : "normal"}`,
            }}
          >
            <div className="relative group/icon">
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-xl border-2 border-border/50 hover:border-[#2563eb]/70 hover:bg-blue-50/50 transition-all duration-300 cursor-pointer shadow-md hover:shadow-xl hover:scale-110">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  width={iconSize}
                  height={iconSize}
                  className="object-contain transition-transform duration-300 group-hover/icon:scale-110"
                  style={{
                    minWidth: iconSize * 0.6,
                    minHeight: iconSize * 0.6,
                    maxWidth: iconSize * 0.6,
                    maxHeight: iconSize * 0.6,
                  }}
                />
              </div>

              {/* Tooltip */}
              <div className="absolute bottom-[calc(100%+12px)] left-1/2 -translate-x-1/2 opacity-0 group-hover/icon:opacity-100 transition-opacity duration-200 pointer-events-none z-50">
                <div className="bg-gray-900/95 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap shadow-xl">
                  {tech.name}
                  {/* Tooltip Arrow */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-900/95" />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

interface TechStackSectionProps {
  icons?: { name: string; icon: string }[];
  title?: string;
  description?: string;
}

export default function TechStackSection({
  icons,
  description = "We leverage cutting-edge technologies to build powerful, scalable solutions",
}: TechStackSectionProps) {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Only access window on client
    const updateSize = () =>
      setSize({ width: window.innerWidth, height: window.innerHeight });
    updateSize(); // Initial set
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // Responsive adjustments for the Orbit System
  const containerSize = Math.min(size.width, 1000); // Used for relative scaling

  // Icon sizes
  const iconSize =
    size.width < 480 ? 32 : size.width < 768 ? 40 : 48;

  // Radii for 3 rings
  const radius1 = Math.min(containerSize * 0.15, 120);
  const radius2 = Math.min(containerSize * 0.28, 220);
  const radius3 = Math.min(containerSize * 0.42, 320);

  // Default icons (reused)
  const defaultIcons = [
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Tailwind CSS", icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "AWS", icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
    { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "GraphQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
    { name: "blueis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blueis/blueis-original.svg" },
    { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
    { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
    { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
    { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
    { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
    { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
    { name: "Google Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
  ];

  const techIcons = icons || defaultIcons;

  // Slice icons for rings
  const iconsRing1 = techIcons.slice(0, 6);
  const iconsRing2 = techIcons.slice(6, 14);
  const iconsRing3 = techIcons.slice(14, 24);

  return (
    <section className="relative py-24 lg:py-32 px-4 bg-gradient-to-b from-gray-50/50 via-white to-gray-50/50 overflow-hidden">

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" aria-hidden="true" />

      {/* Radial glow in center */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.05),transparent_70%)] animate-pulse-slow" />
      </div>

      <div className="relative mx-auto max-w-7xl flex flex-col items-center">

        {/* Section Header */}
        <div className="max-w-3xl text-center mb-16 z-20">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-border/50 bg-white/50 backdrop-blur-sm px-3 py-1.5 text-[13px] font-medium text-muted-foreground mb-6 shadow-sm">
            <Code2 className="h-3.5 w-3.5 text-[#2563eb]" />
            Technologies We Use
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-5">
            Our <span className="bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] bg-clip-text text-transparent">Technology</span> Stack
          </h2>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>

        {/* Solar System Container */}
        {/* Using a fixed height container to avoid layout shifts, but centering the orbits */}
        <div
          className="relative w-full flex items-center justify-center -mt-8 sm:-mt-12"
          style={{ height: radius3 * 2 + 100 }} // Ensure enough height for largest ring
        >
          {/* Center Logo/Core */}
          <div className="absolute z-10 w-24 h-24 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white flex items-center justify-center shadow-lg shadow-blue-500/20 animate-pulse-slow">
            <img
              src="/logo.png"
              alt="CruxLabs Logo"
              className="w-16 h-16 object-contain"
            />
          </div>

          {/* Orbit Rings */}
          {/* Ring 1 (Inner) - Clockwise */}
          <OrbitRing
            radius={radius1}
            icons={iconsRing1}
            iconSize={iconSize}
            duration={40}
          />
          {/* Ring 2 (Middle) - Counter Clockwise, Slower */}
          <OrbitRing
            radius={radius2}
            icons={iconsRing2}
            iconSize={iconSize}
            duration={60}
            reverse
          />
          {/* Ring 3 (Outer) - Clockwise, Slowest */}
          <OrbitRing
            radius={radius3}
            icons={iconsRing3}
            iconSize={iconSize}
            duration={80}
          />
        </div>

      </div>

      <style jsx>{`
        @keyframes orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes orbit-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        /* When hovering any part of the ring/icons, pause animations */
        .hover\\:pause-animation:hover {
            animation-play-state: paused !important;
        }
        .hover\\:pause-animation:hover * {
            animation-play-state: paused !important;
        }
      `}</style>
    </section>
  );
}