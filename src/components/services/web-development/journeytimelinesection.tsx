"use client";

import { motion } from "framer-motion";
import {
  Search,
  Palette,
  Code2,
  TestTube,
  Rocket,
  ArrowRight,
  Clock,
} from "lucide-react";

const timeline = [
  {
    id: 1,
    phase: "Discovery",
    week: "Week 1",
    description: "Understanding your vision, goals, and target audience",
    icon: Search,
    gradient: "from-blue-500 to-blue-500",
    tasks: ["Requirements gathering", "Market research", "Project scope"],
  },
  {
    id: 2,
    phase: "Design",
    week: "Week 2–3",
    description: "Creating stunning visuals and intuitive user experiences",
    icon: Palette,
    gradient: "from-blue-500 to-blue-500",
    tasks: ["Wireframing", "UI/UX design", "Prototyping"],
  },
  {
    id: 3,
    phase: "Build",
    week: "Week 4–6",
    description: "Transforming designs into high-performance code",
    icon: Code2,
    gradient: "from-blue-500 to-blue-500",
    tasks: ["Frontend development", "Backend integration", "Database setup"],
  },
  {
    id: 4,
    phase: "Test",
    week: "Week 7",
    description: "Rigorous testing to ensure flawless performance",
    icon: TestTube,
    gradient: "from-blue-500 to-blue-500",
    tasks: ["Quality assurance", "Performance testing", "Bug fixes"],
  },
  {
    id: 5,
    phase: "Launch",
    week: "Week 8",
    description: "Deploying your project and celebrating success",
    icon: Rocket,
    gradient: "from-blue-500 to-blue-500",
    tasks: ["Deployment", "Go live", "Post-launch support"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
};

export default function JourneyTimelineSection() {
  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* Floating Gradient Orbs */}
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
        className="absolute top-1/4 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 50, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-1/4 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
      />

      <div className="mx-auto max-w-6xl relative z-10">
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
            className="inline-flex items-center gap-2 mb-6 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm px-4 py-1.5 text-[13px] font-medium text-gray-300 shadow-sm"
          >
            <Clock className="h-3.5 w-3.5 text-blue-400" />
            Our Process
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-5 text-white">
            Your Project{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-400 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>

          <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
            A streamlined 8-week process to bring your vision to life with
            precision and excellence
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Vertical Line - Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-blue-500/50 to-blue-500/50" />

          {/* Timeline Items */}
          <div className="space-y-8 lg:space-y-0">
            {timeline.map((item, index) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className={`relative flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
              >
                {/* Content Card */}
                <div
                  className={`flex-1 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"
                    }`}
                >
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="group relative p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-500"
                  >
                    {/* Gradient Glow on Hover */}
                    <div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    />

                    {/* Week Badge */}
                    <div
                      className={`inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-gradient-to-r ${item.gradient} text-white text-xs font-semibold`}
                    >
                      {item.week}
                    </div>

                    {/* Phase Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                      {item.phase}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 mb-4">{item.description}</p>

                    {/* Tasks */}
                    <div
                      className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "lg:justify-end" : "lg:justify-start"
                        }`}
                    >
                      {item.tasks.map((task, taskIndex) => (
                        <span
                          key={taskIndex}
                          className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300"
                        >
                          {task}
                        </span>
                      ))}
                    </div>

                    {/* Arrow indicator */}
                    <motion.div
                      initial={{ opacity: 0, x: index % 2 === 0 ? 10 : -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      className={`absolute top-1/2 -translate-y-1/2 hidden lg:block ${index % 2 === 0 ? "-right-12" : "-left-12"
                        }`}
                    >
                      <ArrowRight
                        className={`w-5 h-5 text-gray-600 ${index % 2 === 0 ? "" : "rotate-180"
                          }`}
                      />
                    </motion.div>
                  </motion.div>
                </div>

                {/* Center Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`relative z-10 flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg shadow-${item.gradient.split(" ")[0].replace("from-", "")}/20`}
                >
                  <item.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />

                  {/* Pulse Ring */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.gradient} animate-ping opacity-20`}
                  />
                </motion.div>

                {/* Empty space for alternating layout */}
                <div className="hidden lg:block flex-1" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-6">
            Ready to start your journey?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-blue-500 text-white font-semibold shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all"
          >
            Start Your Project
            <Rocket className="w-5 h-5" />
          </motion.button>
        </motion.div>

        {/* Bottom Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 mx-auto max-w-md h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"
        />
      </div>
    </section>
  );
}
