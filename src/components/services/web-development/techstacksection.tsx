"use client";

import { Code2 } from "lucide-react";
import React, { useState, useEffect } from "react";

interface TechIcon {
  name: string;
  icon: string;
}

interface SemiCircleOrbitProps {
  radius: number;
  centerX: number;
  centerY: number;
  count: number;
  iconSize: number;
  icons: TechIcon[];
  orbitIndex: number;
}

function SemiCircleOrbit({
  radius,
  centerX,
  centerY,
  count,
  iconSize,
  icons,
  orbitIndex,
}: SemiCircleOrbitProps) {
  return (
    <>
      {/* Animated orbit circle line */}
      <div
        className="absolute border border-border/20 rounded-full pointer-events-none"
        style={{
          width: radius * 2,
          height: radius * 2,
          left: centerX - radius,
          top: centerY - radius,
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          animation: `pulse ${3 + orbitIndex}s ease-in-out infinite`,
        }}
      />

      {/* Orbit icons */}
      {Array.from({ length: count }).map((_, index) => {
        const angle = (index / (count - 1)) * 180;
        const x = radius * Math.cos((angle * Math.PI) / 180);
        const y = radius * Math.sin((angle * Math.PI) / 180);
        const tech = icons[index % icons.length];
        const tooltipAbove = angle > 90;

        return (
          <div
            key={index}
            className="absolute flex flex-col items-center group animate-float"
            style={{
              left: `${centerX + x - iconSize / 2}px`,
              top: `${centerY - y - iconSize / 2}px`,
              zIndex: 5,
              animationDelay: `${index * 0.1}s`,
            }}
          >
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-xl border-2 border-border/50 hover:border-[#2563eb]/70 hover:bg-blue-50/50 transition-all duration-300 cursor-pointer shadow-md hover:shadow-xl hover:scale-110 group-hover:-translate-y-1">
              <img
                src={tech.icon}
                alt={tech.name}
                width={iconSize}
                height={iconSize}
                className="object-contain transition-transform duration-300 group-hover:scale-110"
                style={{
                  minWidth: iconSize * 0.6,
                  minHeight: iconSize * 0.6,
                  maxWidth: iconSize * 0.6,
                  maxHeight: iconSize * 0.6,
                }}
              />
            </div>

            {/* Tooltip */}
            <div
              className={`absolute ${tooltipAbove
                ? "bottom-[calc(100%+16px)]"
                : "top-[calc(100%+16px)]"
                } opacity-0 group-hover:opacity-100 transition-opacity duration-200 w-auto min-w-[80px] whitespace-nowrap rounded-lg bg-gray-900/95 backdrop-blur-sm px-3 py-2 text-xs font-medium text-white shadow-xl text-center z-50`}
            >
              {tech.name}
              <div
                className={`absolute left-1/2 -translate-x-1/2 w-2.5 h-2.5 rotate-45 bg-gray-900/95 ${tooltipAbove ? "top-full -mt-1.5" : "bottom-full -mb-1.5"
                  }`}
              ></div>
            </div>
          </div>
        );
      })}
    </>
  );
}

interface TechStackSectionProps {
  icons?: TechIcon[];
  title?: string;
  description?: string;
}

// Default technology icons with CDN URLs
const defaultIcons: TechIcon[] = [
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

export default function TechStackSection({
  icons,
  description = "We leverage cutting-edge technologies to build powerful, scalable solutions",
}: TechStackSectionProps) {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateSize = () =>
      setSize({ width: window.innerWidth, height: window.innerHeight });
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const baseWidth = Math.min(size.width * 0.85, 800);
  const centerX = baseWidth / 2;
  const centerY = baseWidth * 0.55;
  const iconSize =
    size.width < 480
      ? Math.max(28, baseWidth * 0.06)
      : size.width < 768
        ? Math.max(32, baseWidth * 0.065)
        : Math.max(36, baseWidth * 0.07);

  const techIcons = icons || defaultIcons;

  return (
    <section className="relative py-20 sm:py-24 lg:py-32 px-4 sm:px-6 bg-gradient-to-b from-gray-50/50 via-white to-gray-50/50 overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"
        aria-hidden="true"
      />

      {/* Decorative Blobs with animation */}
      <div
        className="absolute top-20 left-0 w-96 h-96 bg-[#2563eb]/5 rounded-full blur-3xl animate-blob"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-20 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-blob animation-delay-2000"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl animate-blob animation-delay-4000"
        aria-hidden="true"
      />

      {/* Radial glow in center */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.08),transparent_70%)] animate-pulse-slow" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-border/50 bg-white/50 backdrop-blur-sm px-3 py-1.5 text-[13px] font-medium text-muted-foreground mb-6 shadow-sm animate-fade-in">
            <Code2 className="h-3.5 w-3.5 text-[#2563eb]" />
            Technologies We Use
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-5 animate-fade-in-up">
            Our{" "}
            <span className="bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] bg-clip-text text-transparent">
              Technology
            </span>{" "}
            Stack
          </h2>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed animate-fade-in-up animation-delay-200">
            {description}
          </p>
        </div>

        {/* Orbit Animation Container */}
        <div className="relative flex flex-col items-center text-center z-10 px-4">
          <div
            className="relative"
            style={{
              width: baseWidth,
              height: baseWidth * 0.65,
              minHeight: "400px",
            }}
          >
            <SemiCircleOrbit
              radius={baseWidth * 0.22}
              centerX={centerX}
              centerY={centerY}
              count={6}
              iconSize={iconSize}
              icons={techIcons.slice(0, 6)}
              orbitIndex={0}
            />
            <SemiCircleOrbit
              radius={baseWidth * 0.36}
              centerX={centerX}
              centerY={centerY}
              count={8}
              iconSize={iconSize}
              icons={techIcons.slice(6, 14)}
              orbitIndex={1}
            />
            <SemiCircleOrbit
              radius={baseWidth * 0.5}
              centerX={centerX}
              centerY={centerY}
              count={10}
              iconSize={iconSize}
              icons={techIcons.slice(14, 24)}
              orbitIndex={2}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.6;
          }
          50% {
            opacity: 0.8;
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}
