"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Heart, MapPin, Clock } from "lucide-react";
// import Link from "next/link"; // Uncomment when memories section is enabled

interface FallingItem {
    id: number;
    x: number;
    delay: number;
    duration: number;
    size: number;
    type: "heart" | "petal" | "sparkle" | "flower" | "star" | "leaf";
    color: string;
    rotation: number;
}

export default function SuccessPage() {
    const [items, setItems] = useState<FallingItem[]>([]);

    useEffect(() => {
        const colors = [
            "#FF69B4", "#DDA0DD", "#FFD700", "#FF1493",
            "#c4abff", "#FFB6E1", "#9B30FF", "#FF6EB4",
            "#FFC0CB", "#E6B0F0", "#F8C8DC",
        ];

        const starColors = ["#FFD700", "#FFC107", "#FFEB3B", "#FFF176", "#c4abff"];
        const leafColors = ["#4CAF50", "#66BB6A", "#81C784", "#388E3C", "#A5D6A7"];

        const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
        const itemCount = isMobile ? 50 : 80;

        const newItems: FallingItem[] = [];
        for (let i = 0; i < itemCount; i++) {
            const types: FallingItem["type"][] = ["heart", "petal", "sparkle", "flower", "star", "star", "leaf", "leaf"];
            const type = types[Math.floor(Math.random() * types.length)];
            newItems.push({
                id: i,
                x: Math.random() * 100,
                delay: Math.random() * 3,
                duration: 3 + Math.random() * 4,
                size: 10 + Math.random() * 25,
                type,
                color: type === "star"
                    ? starColors[Math.floor(Math.random() * starColors.length)]
                    : type === "leaf"
                        ? leafColors[Math.floor(Math.random() * leafColors.length)]
                        : colors[Math.floor(Math.random() * colors.length)],
                rotation: Math.random() * 360,
            });
        }
        setItems(newItems);
    }, []);

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
            case "star":
                return (
                    <svg width={item.size} height={item.size} viewBox="0 0 24 24">
                        <path
                            d="M12 0 L14.5 8.5 L24 12 L14.5 15.5 L12 24 L9.5 15.5 L0 12 L9.5 8.5 Z"
                            fill={item.color}
                            opacity={0.85}
                        />
                    </svg>
                );
            case "leaf":
                return (
                    <svg width={item.size * 1.2} height={item.size * 1.8} viewBox="0 0 20 30">
                        <path
                            d="M10 0 C16 6, 18 14, 10 30 C2 14, 4 6, 10 0 Z"
                            fill={item.color}
                            opacity={0.75}
                        />
                        <line x1="10" y1="4" x2="10" y2="26" stroke="#2E7D32" strokeWidth="0.6" opacity={0.5} />
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
        <main className="relative min-h-screen overflow-hidden" style={{ background: "#fdf8e1" }}>

            {/* Falling celebration items */}
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
                    className="fixed top-0 pointer-events-none z-0"
                    style={{ left: `${item.x}%` }}
                >
                    {renderItem(item)}
                </motion.div>
            ))}

            {/* Main content */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-16">

                {/* Yaaay! */}
                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="font-sans text-5xl sm:text-7xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent mb-3"
                >
                    Wise Choice!
                </motion.h1>

                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="text-xl sm:text-2xl text-purple-700 max-w-md mx-auto leading-relaxed mb-2"
                >
                    Like there was ever any doubt 😌
                </motion.p>

                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.0 }}
                    className="text-lg text-black font-light mb-12"
                >
                    Now you&apos;re officially stuck with me 😜
                </motion.p>

                {/* Restaurant / Cafe Card */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.4, type: "spring", stiffness: 120 }}
                    className="w-full max-w-md mb-10"
                >
                    <div
                        className="rounded-2xl p-6 sm:p-8 text-center
              bg-white/70 backdrop-blur-md border border-purple-100/50
              shadow-xl shadow-purple-100/30"
                    >
                        <p className="text-purple-400 text-xs tracking-widest uppercase font-medium mb-3">
                            Our Valentine&apos;s Date 💝
                        </p>

                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
                            The Cozy Café
                        </h2>

                        <div className="flex flex-col gap-3 text-gray-600">
                            <div className="flex items-center justify-center gap-2">
                                <MapPin size={16} className="text-pink-500" />
                                <span className="text-sm sm:text-base">123 Love Street, Romanticville</span>
                            </div>
                            <div className="flex items-center justify-center gap-2">
                                <Clock size={16} className="text-purple-500" />
                                <span className="text-sm sm:text-base">February 14, 2026 • 7:00 PM</span>
                            </div>
                        </div>

                        <div className="mt-5 pt-4 border-t border-purple-100/50">
                            <p className="text-purple-400/70 text-sm italic">
                                Can&apos;t wait to see you there 🥰
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* See Our Memories CTA — commented out
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.8 }}
                >
                    <Link href="/memories">
                        <motion.div
                            whileHover={{ scale: 1.05, boxShadow: "0 8px 40px rgba(168, 85, 247, 0.3)" }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-full
                bg-gradient-to-r from-purple-500 via-pink-500 to-rose-400
                text-white font-semibold text-lg
                shadow-lg shadow-purple-400/25
                hover:shadow-xl hover:shadow-pink-400/30
                transition-all duration-300 cursor-pointer"
                        >
                            See Our Memories
                            <ArrowRight size={20} />
                        </motion.div>
                    </Link>
                </motion.div>
                */}
            </div>
        </main>
    );
}
