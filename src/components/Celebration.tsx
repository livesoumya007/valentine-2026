"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";

interface FallingItem {
    id: number;
    x: number;
    delay: number;
    duration: number;
    size: number;
    type: "heart" | "petal" | "sparkle" | "flower";
    color: string;
    rotation: number;
}

export default function Celebration({ show }: { show: boolean }) {
    const [items, setItems] = useState<FallingItem[]>([]);

    useEffect(() => {
        if (!show) return;

        const colors = [
            "#FF69B4", "#DDA0DD", "#FFD700", "#FF1493",
            "#c4abff", "#FFB6E1", "#9B30FF", "#FF6EB4",
            "#FFC0CB", "#E6B0F0", "#F8C8DC",
        ];

        const newItems: FallingItem[] = [];
        for (let i = 0; i < 70; i++) {
            const types: FallingItem["type"][] = ["heart", "petal", "sparkle", "flower"];
            newItems.push({
                id: i,
                x: Math.random() * 100,
                delay: Math.random() * 3,
                duration: 3 + Math.random() * 4,
                size: 10 + Math.random() * 25,
                type: types[Math.floor(Math.random() * types.length)],
                color: colors[Math.floor(Math.random() * colors.length)],
                rotation: Math.random() * 360,
            });
        }
        setItems(newItems);
    }, [show]);

    const renderItem = (item: FallingItem) => {
        switch (item.type) {
            case "heart":
                return <Heart size={item.size} fill={item.color} color={item.color} />;
            case "petal":
                return (
                    <svg width={item.size} height={item.size * 1.5} viewBox="0 0 20 30">
                        <path
                            d="M10 0 C15 5, 20 15, 10 30 C0 15, 5 5, 10 0 Z"
                            fill={item.color}
                            opacity={0.8}
                        />
                    </svg>
                );
            case "flower":
                return (
                    <svg width={item.size * 1.2} height={item.size * 1.2} viewBox="0 0 24 24">
                        {[0, 60, 120, 180, 240, 300].map((angle) => (
                            <ellipse
                                key={angle}
                                cx="12"
                                cy="12"
                                rx="4"
                                ry="8"
                                fill={item.color}
                                opacity={0.7}
                                transform={`rotate(${angle} 12 12)`}
                            />
                        ))}
                        <circle cx="12" cy="12" r="3" fill="#FFD700" />
                    </svg>
                );
            case "sparkle":
                return (
                    <svg width={item.size} height={item.size} viewBox="0 0 20 20">
                        <circle cx="10" cy="10" r="4" fill={item.color} />
                        <circle cx="10" cy="10" r="8" fill={item.color} opacity={0.3} />
                    </svg>
                );
        }
    };

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
                >
                    {/* Backdrop — light warm glow */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute inset-0 bg-gradient-to-b from-pink-50/95 via-purple-50/90 to-pink-100/95 backdrop-blur-md"
                    />

                    {/* Falling items */}
                    {items.map((item) => (
                        <motion.div
                            key={item.id}
                            initial={{
                                y: -100,
                                x: `${item.x}vw`,
                                opacity: 0,
                                rotate: item.rotation,
                            }}
                            animate={{
                                y: "110vh",
                                opacity: [0, 1, 1, 0.5],
                                rotate: item.rotation + 360,
                            }}
                            transition={{
                                duration: item.duration,
                                delay: item.delay,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            className="absolute top-0"
                            style={{ left: `${item.x}%` }}
                        >
                            {renderItem(item)}
                        </motion.div>
                    ))}

                    {/* Message */}
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 200,
                            damping: 15,
                            delay: 0.3,
                        }}
                        className="relative z-10 text-center px-6"
                    >
                        <motion.div
                            animate={{ scale: [1, 1.15, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="mb-6"
                        >
                            <Heart
                                size={80}
                                className="mx-auto text-pink-500"
                                fill="currentColor"
                            />
                        </motion.div>

                        <motion.h2
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="font-cursive text-5xl sm:text-7xl bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent mb-4"
                        >
                            Yaaay! 💕
                        </motion.h2>

                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.9 }}
                            className="text-xl sm:text-2xl text-purple-700 max-w-md mx-auto leading-relaxed"
                        >
                            I knew you&apos;d say yes!
                        </motion.p>

                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 1.2 }}
                            className="text-lg text-pink-600/80 mt-4 font-light"
                        >
                            Every moment with you is a beautiful memory ✨
                        </motion.p>

                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 1.5 }}
                            className="text-lg text-purple-600/70 mt-2 font-light"
                        >
                            You make my world brighter just by being in it 🌸
                        </motion.p>

                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 1.8 }}
                            className="text-purple-400/60 mt-8 text-sm"
                        >
                            Scroll down to see our memories together 💐
                        </motion.p>

                        <motion.button
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 2.1 }}
                            onClick={() => {
                                const memoriesSection = document.getElementById("memories");
                                if (memoriesSection) {
                                    memoriesSection.scrollIntoView({ behavior: "smooth" });
                                }
                            }}
                            className="mt-6 px-8 py-3 rounded-full
                bg-gradient-to-r from-purple-500 via-pink-500 to-rose-400
                text-white font-semibold hover:shadow-lg hover:shadow-pink-400/30
                transition-all duration-300 hover:scale-105 cursor-pointer"
                        >
                            See Our Memories ↓
                        </motion.button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
