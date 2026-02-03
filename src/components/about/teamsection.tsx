"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Linkedin, Twitter, Mail, Users2 } from "lucide-react"

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&q=80",
    bio: "15+ years building digital products that scale",
    gradient: "from-blue-500 to-blue-500",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "sarah@cruxlabs.com",
    },
  },
  {
    name: "Michael Chen",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&q=80",
    bio: "Expert in scalable systems and cloud architecture",
    gradient: "from-blue-500 to-blue-600",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "michael@cruxlabs.com",
    },
  },
  {
    name: "Emily Rodriguez",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&q=80",
    bio: "Crafting beautiful experiences that users love",
    gradient: "from-blue-600 to-blue-500",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "emily@cruxlabs.com",
    },
  },
  {
    name: "David Kim",
    role: "Head of Marketing",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&q=80",
    bio: "Growth strategist with proven track record",
    gradient: "from-blue-500 to-blue-400",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "david@cruxlabs.com",
    },
  },
]

// Team Member Card Component
function TeamMemberCard({ member, index }: { member: typeof teamMembers[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.4, 0, 0.2, 1] as const,
      }}
      whileHover={{ y: -8 }}
      className="group relative"
    >
      {/* Glow Effect */}
      <div
        className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
      />

      {/* Card */}
      <div className="relative h-full rounded-2xl border-2 border-blue-200/50 bg-white/90 backdrop-blur-sm overflow-hidden transition-all duration-500 group-hover:border-blue-400/70 group-hover:shadow-2xl">
        {/* Top Gradient Bar */}
        <div className={`h-1.5 bg-gradient-to-r ${member.gradient}`} />

        {/* Card Content */}
        <div className="p-6">
          {/* Image Container */}
          <div className="relative mb-5">
            <div className="relative mx-auto w-32 h-32 rounded-2xl overflow-hidden">
              {/* Gradient Border */}
              <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} p-0.5 rounded-2xl`}>
                <div className="w-full h-full bg-white rounded-[15px] p-1">
                  <div className="relative w-full h-full rounded-xl overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Status Badge */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: index * 0.1 + 0.3, duration: 0.3 }}
              className={`absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r ${member.gradient} text-white text-[10px] font-semibold shadow-lg`}
            >
              Available
            </motion.div>
          </div>

          {/* Name & Role */}
          <div className="text-center mb-4">
            <h3 className={`text-lg font-bold mb-1 bg-gradient-to-br ${member.gradient} bg-clip-text text-transparent`}>
              {member.name}
            </h3>
            <p className="text-sm text-gray-600 font-medium mb-2">{member.role}</p>
            <p className="text-xs text-gray-500 leading-relaxed px-2">{member.bio}</p>
          </div>

          {/* Divider */}
          <div className={`h-px bg-gradient-to-r ${member.gradient} opacity-20 mb-4`} />

          {/* Social Links */}
          <div className="flex items-center justify-center gap-2">
            <motion.a
              href={member.social.linkedin}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br ${member.gradient} bg-opacity-10 hover:bg-opacity-20 transition-all group/icon`}
            >
              <Linkedin className="w-4 h-4 text-blue-600" />
            </motion.a>
            <motion.a
              href={member.social.twitter}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br ${member.gradient} bg-opacity-10 hover:bg-opacity-20 transition-all group/icon`}
            >
              <Twitter className="w-4 h-4 text-blue-600" />
            </motion.a>
            <motion.a
              href={`mailto:${member.social.email}`}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br ${member.gradient} bg-opacity-10 hover:bg-opacity-20 transition-all group/icon`}
            >
              <Mail className="w-4 h-4 text-blue-600" />
            </motion.a>
          </div>
        </div>

        {/* Hover Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none`} />
      </div>
    </motion.div>
  )
}

export default function TeamSection() {
  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/20 to-white" />

      {/* Floating Gradient Orbs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -80, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/3 left-0 w-96 h-96 bg-blue-300/15 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, -70, 0],
          y: [0, 70, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-1/3 right-0 w-96 h-96 bg-blue-300/15 rounded-full blur-3xl"
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-1.5 mb-6 rounded-full border border-border/50 bg-white/50 backdrop-blur-sm px-3 py-1.5 text-[13px] font-medium text-muted-foreground shadow-sm"
          >
            <Users2 className="h-3.5 w-3.5 text-blue-600" />
            Our Leadership Team
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground mb-5">
            Meet the Minds Behind CruxLabs
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            The experienced professionals driving innovation, strategy, and technical excellence.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={member.name} member={member} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl border-2 border-blue-200/50 bg-white/80 backdrop-blur-sm shadow-lg">
            <div className="text-left">
              <h3 className="text-lg font-bold text-gray-900 mb-1">Join Our Team</h3>
              <p className="text-sm text-gray-600">
                We&apos;re always looking for talented people to join us.
              </p>
            </div>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-600 text-white font-semibold text-sm shadow-lg hover:shadow-xl transition-all whitespace-nowrap"
            >
              View Openings
            </motion.a>
          </div>
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
  )
}
