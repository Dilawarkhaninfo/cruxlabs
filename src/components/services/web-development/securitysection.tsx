"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Lock,
  ShieldCheck,
  Eye,
  CloudCog,
  FileCheck,
  CheckCircle2,
} from "lucide-react";

const securityFeatures = [
  {
    id: 1,
    title: "SSL / TLS Encryption",
    description: "Secure data transmission with industry-standard encryption protocols",
    icon: Lock,
  },
  {
    id: 2,
    title: "Firewall & DDoS Protection",
    description: "Advanced threat detection and mitigation against cyber attacks",
    icon: Shield,
  },
  {
    id: 3,
    title: "AES-256 Data Encryption",
    description: "Military-grade encryption for sensitive data at rest",
    icon: ShieldCheck,
  },
  {
    id: 4,
    title: "24/7 Monitoring",
    description: "Round-the-clock surveillance and instant threat response",
    icon: Eye,
  },
  {
    id: 5,
    title: "Automated Backups",
    description: "Regular automated backups with quick disaster recovery",
    icon: CloudCog,
  },
  {
    id: 6,
    title: "GDPR Compliance",
    description: "Full compliance with international data protection regulations",
    icon: FileCheck,
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

export default function SecuritySection() {
  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-blue-50/20" />

      {/* Floating Gradient Orbs - Blue only */}
      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/4 left-10 w-80 h-80 bg-blue-300/15 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, 60, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-1/4 right-10 w-80 h-80 bg-blue-300/15 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl"
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />

      <div className="mx-auto max-w-7xl relative z-10">
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
            <Shield className="h-3.5 w-3.5 text-[#2563eb]" />
            Enterprise Security
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-5">
            Built with{" "}
            <span className="bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] bg-clip-text text-transparent">
              Security
            </span>{" "}
            First
          </h2>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Your data protection is our top priority. We implement industry-leading
            security measures to keep your business safe.
          </p>
        </motion.div>

        {/* Security Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {securityFeatures.map((feature) => (
            <motion.div
              key={feature.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group relative p-6 sm:p-8 rounded-2xl border border-blue-100 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-2xl hover:border-blue-200 transition-all duration-500"
            >
              {/* Gradient Glow on Hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500" />

              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-14 h-14 mb-5 rounded-xl bg-gradient-to-br from-blue-500 to-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/20"
              >
                <feature.icon className="w-7 h-7 text-white" />
              </motion.div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                {feature.description}
              </p>

              {/* Checkmark indicator */}
              <div className="flex items-center gap-2 text-blue-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <CheckCircle2 className="w-4 h-4" />
                <span>Protected</span>
              </div>

              {/* Corner decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Bottom gradient line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl" />
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Badge Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12"
        >
          {[
            { label: "99.9%", sublabel: "Uptime SLA" },
            { label: "256-bit", sublabel: "Encryption" },
            { label: "24/7", sublabel: "Support" },
            { label: "SOC 2", sublabel: "Compliant" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="text-center"
            >
              <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] bg-clip-text text-transparent">
                {stat.label}
              </div>
              <div className="text-sm text-gray-500">{stat.sublabel}</div>
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
