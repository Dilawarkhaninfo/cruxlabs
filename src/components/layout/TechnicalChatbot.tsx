"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion"
import { MessageSquare, X, Send, Terminal, Activity, Shield, Cpu, MoveRight } from "lucide-react"
import { cn } from "@/lib/utils"

export default function TechnicalChatbot() {
    const [isOpen, setIsOpen] = useState(false)
    const [hasAutoClosed, setHasAutoClosed] = useState(false)
    const [messages, setMessages] = useState([
        { role: "system", content: "INITIALIZING_CHAT_PROTOCOL_v4.2..." },
        { role: "assistant", content: "GREETINGS. I AM THE CRUX_V4 SYSTEMS ARCHITECT. HOW CAN I OPTIMIZE YOUR INQUIRY TODAY?" }
    ])
    const [inputValue, setInputValue] = useState("")
    const scrollContainerRef = useRef<HTMLDivElement>(null)

    const { scrollY } = useScroll()

    // Auto-open on mount, auto-close on scroll
    useEffect(() => {
        // Small delay to ensure smooth entry after page load
        const timer = setTimeout(() => {
            setIsOpen(true)
        }, 1500)
        return () => clearTimeout(timer)
    }, [])

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 300 && isOpen && !hasAutoClosed) {
            setIsOpen(false)
            setHasAutoClosed(true)
        }
    })

    useEffect(() => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight
        }
    }, [messages])

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault()
        if (!inputValue.trim()) return

        const newMessages = [...messages, { role: "user", content: inputValue.toUpperCase() }]
        setMessages(newMessages)
        setInputValue("")

        // Fake AI Response
        setTimeout(() => {
            setMessages([...newMessages, {
                role: "assistant",
                content: "QUERY_RECEIVED. PROCESSING_LOGIC... OUR ARCHITECTS WILL FINALIZE THIS DEPLOYMENT VIA THE CONTACT REGISTRY SHORTLY."
            }])
        }, 1000)
    }

    return (
        <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end pointer-events-none">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95, rotate: 2 }}
                        animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95, rotate: 2 }}
                        className="w-[350px] mb-6 pointer-events-auto"
                    >
                        {/* CHAT WINDOW INTERFACE */}
                        <div
                            className="bg-zinc-950 border border-sky-500/30 shadow-[0_0_50px_rgba(14,165,233,0.15)] overflow-hidden"
                            style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%)" }}
                        >
                            {/* Header: Technical Style */}
                            <div className="p-4 bg-zinc-900 border-b border-white/5 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="h-8 w-8 bg-zinc-950 border border-sky-500/30 flex items-center justify-center -skew-x-[12deg]">
                                        <Terminal className="h-4 w-4 text-sky-500 skew-x-[12deg]" />
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="flex items-center gap-2">
                                            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                            <span className="text-[10px] font-black italic text-white uppercase tracking-widest">SYSTEM_ARCHITECT</span>
                                        </div>
                                        <span className="text-[8px] font-mono text-zinc-500 uppercase tracking-tighter">NODE_ID: 0x_CHAT_STABLE</span>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="h-8 w-8 hover:bg-white/5 flex items-center justify-center transition-colors group"
                                >
                                    <X className="h-4 w-4 text-zinc-500 group-hover:text-white transition-colors" />
                                </button>
                            </div>

                            {/* Messages Area */}
                            <div
                                ref={scrollContainerRef}
                                className="h-[350px] overflow-y-auto p-6 space-y-4 bg-[radial-gradient(circle_at_center,_rgba(14,165,233,0.03)_0%,_transparent_100%)]"
                            >
                                {messages.map((msg, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: msg.role === 'user' ? 10 : -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        className={cn(
                                            "flex flex-col max-w-[85%]",
                                            msg.role === 'user' ? "ml-auto items-end" : "mr-auto items-start"
                                        )}
                                    >
                                        <div
                                            className={cn(
                                                "p-3 text-[11px] font-black italic uppercase tracking-wide leading-relaxed",
                                                msg.role === 'user'
                                                    ? "bg-sky-500 text-zinc-950"
                                                    : "bg-zinc-900 text-zinc-400 border border-white/5"
                                            )}
                                            style={{
                                                clipPath: msg.role === 'user'
                                                    ? "polygon(10px 0, 100% 0, 100% 100%, 0 100%)"
                                                    : "polygon(0 0, 100% 0, calc(100% - 10px) 100%, 0 100%)"
                                            }}
                                        >
                                            {msg.content}
                                        </div>
                                        {msg.role === 'system' && (
                                            <span className="text-[7px] font-mono text-zinc-600 mt-1">LOG_SUCCESS_0x22</span>
                                        )}
                                    </motion.div>
                                ))}
                            </div>

                            {/* Input Area */}
                            <form onSubmit={handleSendMessage} className="p-4 bg-zinc-900 border-t border-white/5 flex items-center gap-2">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder="INITIALIZE_QUERY..."
                                    className="flex-1 bg-zinc-950 border border-white/10 px-4 py-2 text-[10px] font-black italic text-white placeholder:text-zinc-600 outline-none focus:border-sky-500/50 transition-all uppercase tracking-widest"
                                />
                                <button
                                    type="submit"
                                    className="h-10 w-10 bg-sky-500 text-zinc-950 flex items-center justify-center -skew-x-[12deg] hover:bg-white transition-all active:scale-90"
                                >
                                    <Send className="h-4 w-4 skew-x-[12deg]" />
                                </button>
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* CHAT TRIGGER BUTTON */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="pointer-events-auto h-16 w-16 bg-zinc-950 border border-sky-500/30 flex items-center justify-center group relative shadow-2xl shadow-sky-500/10"
                style={{ clipPath: "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)" }}
            >
                <div className="absolute inset-0 bg-sky-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                        >
                            <X className="h-6 w-6 text-sky-500" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="open"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                        >
                            <MessageSquare className="h-6 w-6 text-sky-500 animate-pulse" />
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Badge Indicator */}
                {!isOpen && (
                    <div className="absolute -top-1 -right-1 h-3 w-3 bg-red-600 rounded-full animate-ping" />
                )}
            </motion.button>
        </div>
    )
}
