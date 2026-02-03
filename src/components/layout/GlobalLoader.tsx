"use client"

import { useEffect, useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

export default function GlobalLoader() {
    const [isLoading, setIsLoading] = useState(true)

    // Generate particles with random properties for the space effect
    const particles = useMemo(() => {
        return Array.from({ length: 50 }).map((_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            size: Math.random() * 4 + 2, // 2px to 6px
            duration: Math.random() * 20 + 10,
            delay: Math.random() * 5,
            opacity: Math.random() * 0.5 + 0.1,
            moveX: Math.random() * 50 - 25,
            moveY: Math.random() * 50 - 25,
        }))
    }, [])

    useEffect(() => {
        // Premium load duration
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 2500)

        return () => clearTimeout(timer)
    }, [])

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                    key="loader"
                    className="fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden bg-[#0A0A0A]"
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        transition: { duration: 0.5, delay: 0.5 } // Fade out main container after slices start
                    }}
                >
                    {/* 
            Background Gradient 
            Deep Black (#0A0A0A) to Charcoal (#1E1E1E)
          */}
                    <div className="absolute inset-0 bg-gradient-radial from-[#1E1E1E] to-[#0A0A0A] opacity-80" />

                    {/* 
            Floating Particles 
            Creates the "Space/Tech" atmosphere
          */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        {particles.map((particle) => (
                            <motion.div
                                key={particle.id}
                                className="absolute rounded-full bg-sky-500/30 blur-[1px]"
                                style={{
                                    left: particle.left,
                                    top: particle.top,
                                    width: particle.size,
                                    height: particle.size,
                                    opacity: particle.opacity,
                                    backgroundColor: particle.id % 2 === 0 ? "#0EA5E9" : "#FFFFFF", // Mix of SkyBlue and White
                                }}
                                animate={{
                                    x: [0, particle.moveX],
                                    y: [0, particle.moveY],
                                    opacity: [particle.opacity, particle.opacity * 1.5, particle.opacity],
                                }}
                                transition={{
                                    duration: particle.duration,
                                    delay: particle.delay,
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    ease: "linear",
                                }}
                            />
                        ))}
                    </div>

                    {/* 
            Center Content: Logo & Text 
          */}
                    <motion.div
                        className="relative z-50 flex flex-col items-center justify-center"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)", transition: { duration: 0.5 } }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        {/* Logo Image */}
                        <div className="relative w-32 h-32 md:w-40 md:h-40 mb-6 drop-shadow-2xl">
                            {/* 
                  Using direct path to public folder image. 
                  Ensure logo.png has the white diamond + text if possible, 
                  or we rely on just the image provided.
               */}
                            <Image
                                src="/logo.png"
                                alt="CruxLabs Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>

                        {/* Loading Status Text */}
                        <motion.div
                            className="flex flex-col items-center space-y-2"
                        >
                            {/* 
                    "SYSTEM LOADING" 
                    Small, spaced out, Sky Blue
                */}
                            <div className="flex items-center gap-3">
                                <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-sky-500/50" />
                                <span className="text-xs md:text-sm font-mono tracking-[0.3em] text-sky-500 uppercase font-semibold">
                                    System Loading
                                </span>
                                <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-sky-500/50" />
                            </div>
                        </motion.div>
                    </motion.div>


                    {/* 
            Exit Animation: Diagonal Slices 
            These overlay the dark screen and wipe it away to reveal the site
          */}
                    <motion.div
                        className="absolute inset-0 z-[60] pointer-events-none"
                        initial={{ opacity: 1 }}
                    >
                        {/* Slice 1: Sky Blue Wipe */}
                        <motion.div
                            className="absolute inset-0 bg-sky-500 transform origin-bottom-left"
                            initial={{ x: "-100%", skewX: 20 }}
                            exit={{
                                x: "200%",
                                skewX: 20,
                                transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
                            }}
                        />
                        {/* Slice 2: White Follower */}
                        <motion.div
                            className="absolute inset-0 bg-white transform origin-bottom-left"
                            initial={{ x: "-100%", skewX: 20 }}
                            exit={{
                                x: "200%",
                                skewX: 20,
                                transition: { duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }
                            }}
                        />
                    </motion.div>

                </motion.div>
            )}
        </AnimatePresence>
    )
}
