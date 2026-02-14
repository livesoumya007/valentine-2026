"use client";

import { motion } from "framer-motion";
import { Heart, ArrowLeft } from "lucide-react";
import Link from "next/link";
import MemoryCard from "@/components/MemoryCard";

const MEMORIES = [
    {
        imageSrc: "/memories/memory-1.svg",
        caption: "The day we first met — everything changed ✨",
        date: "Our Beginning",
    },
    {
        imageSrc: "/memories/memory-2.svg",
        caption: "Our first adventure together — pure magic 🌅",
        date: "First Adventure",
    },
    {
        imageSrc: "/memories/memory-3.svg",
        caption: "That spontaneous trip that became unforgettable 🎉",
        date: "Road Trip",
    },
    {
        imageSrc: "/memories/memory-4.svg",
        caption: "Lazy Sunday mornings are my favourite with you ☕",
        date: "Cozy Moments",
    },
    {
        imageSrc: "/memories/memory-5.svg",
        caption: "Dancing in the rain like nobody was watching 💃",
        date: "Rainy Day",
    },
    {
        imageSrc: "/memories/memory-6.svg",
        caption: "Every sunset is prettier because you're next to me 🌇",
        date: "Golden Hour",
    },
];

export default function MemoriesPage() {
    return (
        <main
            className="relative min-h-screen py-12 sm:py-20 px-4 sm:px-6"
            style={{
                background:
                    "linear-gradient(180deg, #FFF5F9 0%, #FFFFFF 20%, #FEFAFE 80%, #FFF5F9 100%)",
            }}
        >
            {/* Back button */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-6xl mx-auto mb-10"
            >
                <Link href="/success">
                    <motion.div
                        whileHover={{ x: -4 }}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full
              bg-white/80 backdrop-blur-sm border border-purple-200/50
              shadow-sm hover:shadow-md hover:shadow-purple-100/40
              text-purple-600 font-medium text-sm
              transition-all duration-300 cursor-pointer"
                    >
                        <ArrowLeft size={16} />
                        Back to Date Info
                    </motion.div>
                </Link>
            </motion.div>

            <div className="max-w-6xl mx-auto">
                {/* Section heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-purple-400 text-sm tracking-[0.3em] uppercase mb-4 font-medium"
                    >
                        Together Forever
                    </motion.p>

                    <h1
                        className="font-cursive text-4xl sm:text-5xl md:text-6xl
              bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600
              bg-clip-text text-transparent mb-6"
                    >
                        Our Beautiful Memories
                    </h1>

                    {/* Heart divider */}
                    <div className="flex items-center justify-center gap-3">
                        <div className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent to-pink-400/50" />
                        <Heart size={16} className="text-pink-500" fill="currentColor" />
                        <div className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent to-pink-400/50" />
                    </div>
                </motion.div>

                {/* Cards grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {MEMORIES.map((memory, index) => (
                        <MemoryCard
                            key={index}
                            imageSrc={memory.imageSrc}
                            caption={memory.caption}
                            date={memory.date}
                            index={index}
                        />
                    ))}
                </div>

                {/* Footer message */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="text-center mt-16 sm:mt-20"
                >
                    <p className="font-cursive text-2xl sm:text-3xl text-purple-400/70">
                        ...and many more to come 💕
                    </p>
                </motion.div>

                {/* Back to date info */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 }}
                    className="text-center mt-10"
                >
                    <Link href="/success">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full
                bg-gradient-to-r from-purple-500 via-pink-500 to-rose-400
                text-white font-semibold
                shadow-lg shadow-purple-400/25
                hover:shadow-xl hover:shadow-pink-400/30
                transition-all duration-300 cursor-pointer"
                        >
                            <ArrowLeft size={18} />
                            Back to Date Info
                        </motion.div>
                    </Link>
                </motion.div>
            </div>
        </main>
    );
}
