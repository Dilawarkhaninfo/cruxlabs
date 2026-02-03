"use client";

import { useEffect, useState } from "react";

// Pre-computed particle positions for consistent rendering
const PARTICLE_POSITIONS = [
  { left: 12, top: 23, delay: 0.5, duration: 4.2 },
  { left: 87, top: 15, delay: 1.2, duration: 5.1 },
  { left: 34, top: 78, delay: 2.3, duration: 3.8 },
  { left: 65, top: 45, delay: 0.8, duration: 4.5 },
  { left: 23, top: 56, delay: 3.1, duration: 5.5 },
  { left: 78, top: 67, delay: 1.7, duration: 4.0 },
  { left: 45, top: 12, delay: 2.9, duration: 3.5 },
  { left: 91, top: 89, delay: 0.3, duration: 4.8 },
  { left: 56, top: 34, delay: 4.2, duration: 5.2 },
  { left: 8, top: 91, delay: 1.5, duration: 3.9 },
  { left: 72, top: 28, delay: 2.6, duration: 4.3 },
  { left: 19, top: 82, delay: 3.8, duration: 5.0 },
  { left: 83, top: 41, delay: 0.9, duration: 4.7 },
  { left: 41, top: 63, delay: 2.1, duration: 3.6 },
  { left: 67, top: 95, delay: 4.5, duration: 5.3 },
  { left: 5, top: 38, delay: 1.0, duration: 4.1 },
  { left: 95, top: 52, delay: 3.4, duration: 3.7 },
  { left: 28, top: 19, delay: 2.0, duration: 4.9 },
  { left: 59, top: 76, delay: 0.6, duration: 5.4 },
  { left: 14, top: 47, delay: 3.7, duration: 4.4 },
];

const codeLines = [
  { text: "const ", type: "keyword" },
  { text: "createExperience", type: "function" },
  { text: " = ", type: "operator" },
  { text: "async ", type: "keyword" },
  { text: "() => {", type: "punctuation" },
  { text: "\n" },
  { text: "  const ", type: "keyword" },
  { text: "web", type: "variable" },
  { text: " = ", type: "operator" },
  { text: "await ", type: "keyword" },
  { text: "build", type: "function" },
  { text: "({", type: "punctuation" },
  { text: "\n" },
  { text: "    quality", type: "property" },
  { text: ": ", type: "punctuation" },
  { text: "'Premium'", type: "string" },
  { text: ",", type: "punctuation" },
  { text: "\n" },
  { text: "    performance", type: "property" },
  { text: ": ", type: "punctuation" },
  { text: "'Ultra-Fast'", type: "string" },
  { text: ",", type: "punctuation" },
  { text: "\n" },
  { text: "    design", type: "property" },
  { text: ": ", type: "punctuation" },
  { text: "'Modern'", type: "string" },
  { text: "\n" },
  { text: "  });", type: "punctuation" },
  { text: "\n" },
  { text: "  return ", type: "keyword" },
  { text: "web", type: "variable" },
  { text: ".", type: "punctuation" },
  { text: "launch", type: "function" },
  { text: "();", type: "punctuation" },
  { text: "\n" },
  { text: "};", type: "punctuation" },
];

const getColorClass = (type: string) => {
  switch (type) {
    case "keyword":
      return "text-blue-400";
    case "function":
      return "text-yellow-300";
    case "string":
      return "text-emerald-400";
    case "variable":
      return "text-blue-300";
    case "property":
      return "text-blue-300";
    case "operator":
      return "text-pink-400";
    case "punctuation":
      return "text-gray-400";
    default:
      return "text-gray-300";
  }
};

export default function CodeIntroSection() {
  const [displayedChars, setDisplayedChars] = useState(0);

  const totalChars = codeLines.reduce((acc, line) => acc + line.text.length, 0);
  const isComplete = displayedChars >= totalChars;

  useEffect(() => {
    if (displayedChars < totalChars) {
      const timer = setTimeout(() => {
        setDisplayedChars((prev) => prev + 1);
      }, 30);
      return () => clearTimeout(timer);
    }
  }, [displayedChars, totalChars]);

  const renderCode = () => {
    let charCount = 0;
    return codeLines.map((segment, segmentIndex) => {
      const segmentStart = charCount;
      charCount += segment.text.length;

      if (segmentStart >= displayedChars) {
        return null;
      }

      const visibleLength = Math.min(
        segment.text.length,
        displayedChars - segmentStart
      );
      const visibleText = segment.text.slice(0, visibleLength);

      if (segment.text === "\n") {
        return <br key={segmentIndex} />;
      }

      return (
        <span key={segmentIndex} className={getColorClass(segment.type || "")}>
          {visibleText}
        </span>
      );
    });
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-950 via-black to-gray-950 overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

      {/* Floating light orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-emerald-500/20 rounded-full blur-[100px] animate-pulse-slow animation-delay-2000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] animate-float" />

      {/* Glowing particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {PARTICLE_POSITIONS.map((particle, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/40 rounded-full animate-float-particle"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
        {/* Terminal window */}
        <div className="relative group">
          {/* Glow effect behind terminal */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/30 via-emerald-500/30 to-blue-600/30 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Terminal container */}
          <div className="relative rounded-2xl border border-white/10 bg-gray-900/90 backdrop-blur-xl shadow-2xl overflow-hidden">
            {/* Terminal header */}
            <div className="flex items-center justify-between px-4 py-3 bg-gray-800/50 border-b border-white/5">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-lg shadow-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500 shadow-lg shadow-green-500/50" />
              </div>
              <div className="flex items-center gap-2 text-gray-500 text-xs">
                <span className="hidden sm:inline">experience.ts</span>
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <div className="flex items-center gap-1 text-gray-600">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>

            {/* Code content */}
            <div className="p-6 sm:p-8 font-mono text-sm sm:text-base leading-relaxed">
              {/* Line numbers */}
              <div className="flex">
                <div className="hidden sm:flex flex-col pr-6 text-gray-600 select-none border-r border-white/5 mr-6">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                    <span key={num} className="leading-relaxed">
                      {num}
                    </span>
                  ))}
                </div>

                {/* Code with syntax highlighting */}
                <pre className="flex-1 overflow-x-auto">
                  <code>
                    {renderCode()}
                    {/* Blinking cursor */}
                    <span
                      className={`inline-block w-2 h-5 ml-0.5 bg-emerald-400 align-middle ${isComplete ? "animate-blink" : ""
                        }`}
                    />
                  </code>
                </pre>
              </div>
            </div>

            {/* Terminal footer with status */}
            <div className="flex items-center justify-between px-4 py-2 bg-gray-800/30 border-t border-white/5 text-xs text-gray-500">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  TypeScript
                </span>
                <span>UTF-8</span>
              </div>
              <div className="flex items-center gap-4">
                <span>Ln 9, Col 2</span>
                <span className="text-emerald-400">Ready</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tagline below terminal */}
        <p className="mt-8 text-center text-gray-400 text-sm sm:text-base animate-fade-in-up">
          Building exceptional digital experiences with{" "}
          <span className="text-emerald-400 font-medium">clean code</span> and{" "}
          <span className="text-blue-400 font-medium">modern practices</span>
        </p>
      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            transform: translate(-50%, -50%) scale(1.1);
          }
        }

        @keyframes float-particle {
          0%,
          100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) translateX(20px);
            opacity: 0;
          }
        }

        @keyframes blink {
          0%,
          50% {
            opacity: 1;
          }
          51%,
          100% {
            opacity: 0;
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

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-particle {
          animation: float-particle 5s ease-in-out infinite;
        }

        .animate-blink {
          animation: blink 1s step-end infinite;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out 0.5s both;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
}
