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
            {/* ===== SECTION 1: Cream "Critical Question" ===== */}
            <section
                className="flex flex-col px-4 relative overflow-hidden"
                style={{
                    height: "100vh",
                    background: "#FDFBF7",
                    scrollSnapAlign: "start",
                }}
            >
                {/* Content — upper portion */}
                <div className="flex-1 flex flex-col items-center justify-start pt-[14vh] sm:pt-[16vh] relative z-10">
                    {/* Background Animation: Orbiting dots around the text */}
                    <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none -z-10">
                        {/* Outer orbit */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                            className="w-[320px] h-[320px] sm:w-[500px] sm:h-[500px] relative"
                        >
                            <motion.div
                                animate={{ opacity: [0.4, 0.8, 0.4] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-purple-300 blur-[1px]"
                            />
                            <motion.div
                                animate={{ opacity: [0.3, 0.6, 0.3] }}
                                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-pink-300 blur-[1px]"
                            />
                        </motion.div>
                    </div>

                    <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none -z-10">
                        {/* Inner orbit — reverse */}
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="w-[200px] h-[200px] sm:w-[320px] sm:h-[320px] relative"
                        >
                            <motion.div
                                animate={{ opacity: [0.4, 0.7, 0.4] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-indigo-300 blur-[1px]"
                            />
                            <motion.div
                                animate={{ opacity: [0.3, 0.6, 0.3] }}
                                transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                                className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-amber-300 blur-[1px]"
                            />
                        </motion.div>
                    </div>

                    <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none -z-10">
                        {/* Soft center glow */}
                        <motion.div
                            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="w-60 h-60 sm:w-80 sm:h-80 rounded-full
                bg-gradient-to-br from-purple-100/50 via-pink-100/50 to-indigo-100/50 blur-3xl"
                        />
                    </div>

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
                            className="inline-flex items-center gap-2 px-5 py-2 rounded-full
                                bg-amber-100/80 border border-amber-200/50 mb-8 backdrop-blur-sm shadow-lg shadow-amber-100/50"
                        >
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
                            </span>
                            <span className="text-sm text-amber-600 tracking-wider uppercase font-bold">
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
                                bg-clip-text text-transparent font-sans pb-4">
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
                            className="mt-2 flex items-center justify-center gap-2 mb-10"
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
                style={{ scrollSnapAlign: "start", background: "rgba(255, 248, 236, 0.55)" }}
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
                    <p className="text-black text-sm sm:text-base tracking-[0.3em] uppercase mb-8 font-bold"
                    >
                        A special question for you
                    </p>

                    <h1
                        className="font-sans text-5xl sm:text-6xl md:text-7xl lg:text-8xl
                            font-extrabold text-gray-800
                            leading-tight mb-10 tracking-tight"
                    >
                        Will you be my{" "}
                        <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-rose-400
                            bg-clip-text text-transparent pb-2">
                            Valentine?
                        </span>
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
