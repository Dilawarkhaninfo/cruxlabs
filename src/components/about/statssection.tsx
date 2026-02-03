"use client";

import { motion } from "framer-motion";
import { Briefcase, Smile, Users, Award, TrendingUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const stats = [
  {
    id: 1,
    label: "Projects Completed",
    value: 500,
    suffix: "+",
    icon: Briefcase,
  },
  {
    id: 2,
    label: "Happy Clients",
    value: 250,
    suffix: "+",
    icon: Smile,
  },
  {
    id: 3,
    label: "Team Members",
    value: 50,
    suffix: "+",
    icon: Users,
  },
  {
    id: 4,
    label: "Years Experience",
    value: 15,
    suffix: "+",
    icon: Award,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
};

// Animated Counter Component
function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 }
    );

    const currentRef = counterRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [isInView]);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setCount(Math.min(Math.floor(increment * currentStep), value));

      if (currentStep >= steps) {
        clearInterval(timer);
        setCount(value);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div
      ref={counterRef}
      className="text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] bg-clip-text text-transparent"
    >
      {count}
      <span className="text-3xl sm:text-4xl">{suffix}</span>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-blue-50/20" />

      {/* Floating Gradient Orbs - Blue only */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/4 left-10 w-80 h-80 bg-blue-300/15 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 50, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-1/4 right-10 w-80 h-80 bg-blue-300/15 rounded-full blur-3xl"
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />

      <div className="relative mx-auto max-w-7xl z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 mb-6 rounded-full border border-border/50 bg-white/50 backdrop-blur-sm px-3 py-1.5 text-[13px] font-medium text-muted-foreground shadow-sm"
          >
            <TrendingUp className="h-3.5 w-3.5 text-blue-600" />
            Our Impact
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-5">
            Numbers That{" "}
            <span className="bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] bg-clip-text text-transparent">
              Speak
            </span>
          </h2>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Our track record of success and dedication to excellence
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group relative flex flex-col items-center text-center p-6 sm:p-8 rounded-2xl border border-blue-100 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-2xl hover:border-blue-200 transition-all duration-500"
            >
              {/* Gradient Glow on Hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500" />

              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="mb-5 w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/20"
              >
                <stat.icon className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
              </motion.div>

              {/* Counter */}
              <div className="mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>

              {/* Label */}
              <p className="text-sm sm:text-base font-medium text-gray-500 group-hover:text-gray-700 transition-colors">
                {stat.label}
              </p>

              {/* Bottom gradient line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 mx-auto max-w-md h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent"
        />
      </div>
    </section>
  );
}
