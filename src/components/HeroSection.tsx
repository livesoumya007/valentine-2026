"use client";

import { motion } from "framer-motion";
import { Heart, ChevronDown } from "lucide-react";
import EvasiveButton from "./EvasiveButton";

interface HeroSectionProps {
    onSayYes: () => void;
}

export default function HeroSection({ onSayYes }: HeroSectionProps) {
    return (
        <div className="relative z-10">
            {/* ===== SECTION 1: White "Critical Question" ===== */}
            <section
                className="flex flex-col px-4 relative overflow-hidden"
                style={{
                    minHeight: "90vh",
                    background: "#ffffff",
                }}
            >
                {/* Minimal background: orbiting dots for "thinking" feel */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    {/* Outer orbit */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                        className="absolute w-[280px] h-[280px] sm:w-[360px] sm:h-[360px]"
                    >
                        <motion.div
                            animate={{ opacity: [0.12, 0.3, 0.12] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="absolute top-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-purple-300"
                        />
                        <motion.div
                            animate={{ opacity: [0.08, 0.2, 0.08] }}
                            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-pink-300"
                        />
                    </motion.div>

                    {/* Inner orbit — reverse */}
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute w-[160px] h-[160px] sm:w-[220px] sm:h-[220px]"
                    >
                        <motion.div
                            animate={{ opacity: [0.08, 0.22, 0.08] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-indigo-300"
                        />
                        <motion.div
                            animate={{ opacity: [0.06, 0.18, 0.06] }}
                            transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                            className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-amber-300"
                        />
                    </motion.div>

                    {/* Soft center glow */}
                    <motion.div
                        animate={{ scale: [1, 1.15, 1], opacity: [0.03, 0.07, 0.03] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute w-40 h-40 sm:w-52 sm:h-52 rounded-full
              bg-gradient-to-br from-purple-100 via-pink-50 to-indigo-100 blur-3xl"
                    />
                </div>

                {/* Content — upper portion */}
                <div className="flex-1 flex flex-col items-center justify-start pt-[14vh] sm:pt-[16vh]">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                        className="text-center"
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5, type: "spring" }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                bg-gray-50 border border-gray-200 mb-8"
                        >
                            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                            <span className="text-xs text-gray-500 tracking-widest uppercase font-medium">
                                Attention Required
                            </span>
                        </motion.div>

                        {/* Main text */}
                        <motion.h2
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold
                text-gray-800 tracking-tight mb-4 font-sans"
                        >
                            Critical Question
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.1, duration: 0.8 }}
                            className="flex items-center justify-center gap-3 mb-6"
                        >
                            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold
                bg-gradient-to-r from-purple-600 via-pink-500 to-amber-400
                bg-clip-text text-transparent font-sans">
                                Incoming
                            </h2>
                            <motion.span
                                animate={{ rotate: [0, 15, -15, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                                className="text-4xl sm:text-5xl md:text-6xl"
                            >
                                ⚡
                            </motion.span>
                        </motion.div>

                        {/* Suspense dots */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5 }}
                            className="flex items-center justify-center gap-2 mb-10"
                        >
                            {[0, 1, 2].map((i) => (
                                <motion.div
                                    key={i}
                                    animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.1, 0.8] }}
                                    transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                                    className="w-2 h-2 rounded-full bg-purple-400"
                                />
                            ))}
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2 }}
                            className="text-gray-400 text-sm sm:text-base"
                        >
                            Something important awaits below...
                        </motion.p>
                    </motion.div>
                </div>

                {/* Scroll hint at bottom */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5 }}
                    className="pb-8 flex flex-col items-center gap-2"
                >
                    <div className="flex items-center gap-3">
                        <div className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent to-gray-200" />
                        <motion.div
                            animate={{ y: [0, 4, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            <ChevronDown size={20} className="text-gray-300" />
                        </motion.div>
                        <div className="h-px w-16 sm:w-24 bg-gradient-to-l from-transparent to-gray-200" />
                    </div>
                    <p className="text-gray-300 text-xs tracking-widest uppercase">Scroll to reveal</p>
                </motion.div>
            </section>

            {/* ===== SECTION 2: Valentine question — pink/lavender theme ===== */}
            <section
                className="min-h-screen flex flex-col items-center justify-center px-4 relative"
            >
                {/* Floating hearts */}
                <motion.div
                    animate={{ y: [0, -12, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-40 left-1/4 opacity-20"
                >
                    <Heart size={25} fill="#FFD700" color="#FFD700" />
                </motion.div>
                <motion.div
                    animate={{ y: [0, -18, 0], rotate: [0, 10, 0] }}
                    transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute top-1/3 right-1/4 opacity-20"
                >
                    <Heart size={20} fill="#c4abff" color="#c4abff" />
                </motion.div>
                <motion.div
                    animate={{ y: [0, -15, 0], rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-20 left-10 sm:left-20 opacity-30"
                >
                    <Heart size={35} fill="#FF69B4" color="#FF69B4" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-center max-w-3xl"
                >
                    <p className="text-purple-500/70 text-sm sm:text-base tracking-[0.3em] uppercase mb-8">
                        A special question for you
                    </p>

                    <h1
                        className="font-dancing text-5xl sm:text-7xl md:text-8xl lg:text-9xl
              bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600
              bg-clip-text text-transparent
              leading-tight mb-10 drop-shadow-sm font-bold"
                    >
                        Will you be my Valentine?
                    </h1>

                    <div className="flex items-center justify-center gap-3 mb-10">
                        <div className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent to-pink-400/50" />
                        <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            <Heart size={20} className="text-pink-500" fill="currentColor" />
                        </motion.div>
                        <div className="h-px w-16 sm:w-24 bg-gradient-to-l from-transparent to-pink-400/50" />
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
                        <motion.button
                            whileHover={{ scale: 1.08, boxShadow: "0 8px 40px rgba(168, 85, 247, 0.35)" }}
                            whileTap={{ scale: 0.95 }}
                            onClick={onSayYes}
                            className="px-10 py-4 rounded-full font-semibold text-lg
                bg-gradient-to-r from-purple-500 via-pink-500 to-rose-400
                text-white shadow-lg shadow-purple-400/25
                hover:shadow-xl hover:shadow-pink-400/30
                transition-all duration-300 cursor-pointer
                border border-purple-300/30"
                        >
                            Yes, I&apos;d love to! 💜
                        </motion.button>
                        <EvasiveButton />
                    </div>

                    <p className="text-purple-400/40 text-xs mt-12 italic">
                        psst... the right answer is just one click away ✨
                    </p>
                </motion.div>
            </section>
        </div>
    );
}
