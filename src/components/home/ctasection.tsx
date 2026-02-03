"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, MessageCircle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50/50 py-20 sm:py-28 lg:py-32">
      {/* Background Grid Pattern (Matching Hero) */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20"
        aria-hidden="true"
      />

      {/* Animated Grid Beams - "Shooting Stars" effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Horizontal Beam 1 */}
        <motion.div
          className="absolute h-[1px] w-[200px] bg-gradient-to-r from-transparent via-[#2563eb] to-transparent"
          style={{ top: "20%", left: "-200px" }}
          animate={{ x: ["0%", "2000%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: 0 }}
        />
        {/* Horizontal Beam 2 */}
        <motion.div
          className="absolute h-[1px] w-[300px] bg-gradient-to-r from-transparent via-[#2563eb]/80 to-transparent"
          style={{ top: "75%", left: "-300px" }}
          animate={{ x: ["0%", "2000%"] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 4 }}
        />
        {/* Vertical Beam 1 */}
        <motion.div
          className="absolute w-[1px] h-[200px] bg-gradient-to-b from-transparent via-[#2563eb] to-transparent"
          style={{ left: "15%", top: "-200px" }}
          animate={{ y: ["0%", "2000%"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: 2 }}
        />
        {/* Vertical Beam 2 */}
        <motion.div
          className="absolute w-[1px] h-[250px] bg-gradient-to-b from-transparent via-[#2563eb]/70 to-transparent"
          style={{ left: "80%", top: "-250px" }}
          animate={{ y: ["0%", "2000%"] }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear", delay: 6 }}
        />
      </div>

      {/* Floating Gradient Orbs - Subtle Blue Only */}
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3], // Added opacity pulse
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/4 left-10 w-96 h-96 bg-[#2563eb]/20 rounded-full blur-3xl mix-blend-multiply"
      />
      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3], // Added opacity pulse
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#2563eb]/20 rounded-full blur-3xl mix-blend-multiply"
      />

      {/* Content */}
      <div className="relative mx-auto max-w-4xl text-center z-10 px-4 sm:px-6">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-8 rounded-full border border-border/50 bg-white/60 backdrop-blur-sm px-4 py-1.5 text-[13px] font-medium text-muted-foreground shadow-sm"
        >
          <Sparkles className="h-3.5 w-3.5 text-[#2563eb]" />
          Let&apos;s Work Together
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground mb-6"
        >
          Ready to Build Your{" "}
          <span className="bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] bg-clip-text text-transparent">
            Growth System?
          </span>
        </motion.h2>

        {/* Sub text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          If your business is stuck or scaling feels chaotic, we&apos;ll help you
          design systems that actually work.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/contact">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="h-12 px-8 rounded-lg bg-[#2563eb] text-white font-medium shadow-lg hover:bg-[#1d4ed8] hover:shadow-xl transition-all"
              >
                Start a Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </Link>

          <Link href="/contact">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-8 rounded-lg border-border/60 text-foreground hover:bg-muted/50 hover:border-border transition-all"
              >
                <MessageCircle className="mr-2 h-4 w-4 text-[#2563eb]" />
                Talk to an Expert
              </Button>
            </motion.div>
          </Link>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8"
        >
          {[
            "Free consultation",
            "No commitment",
            "Reply within 24 hours",
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <CheckCircle2 className="h-4 w-4 text-[#2563eb]" />
              <span>{item}</span>
            </motion.div>
          ))}
        </motion.div>


      </div>
    </section>
  );
}
