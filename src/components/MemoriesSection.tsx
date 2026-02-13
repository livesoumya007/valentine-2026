"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import MemoryCard from "./MemoryCard";

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

export default function MemoriesSection() {
    return (
        <section
            id="memories"
            className="relative py-20 sm:py-32 px-4 sm:px-6 z-20"
            style={{
                background: "linear-gradient(180deg, #FFF5F9 0%, #FFFFFF 20%, #FEFAFE 80%, #FFF5F9 100%)",
            }}
        >
            <div className="max-w-6xl mx-auto">
                {/* Section heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-purple-400 text-sm tracking-[0.3em] uppercase mb-4 font-medium"
                    >
                        Together Forever
                    </motion.p>

                    <h2
                        className="font-cursive text-4xl sm:text-5xl md:text-6xl
              bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600
              bg-clip-text text-transparent mb-6"
                    >
                        Our Beautiful Memories
                    </h2>

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
            </div>
        </section>
    );
}
