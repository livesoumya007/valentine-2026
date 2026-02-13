"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface MemoryCardProps {
    imageSrc: string;
    caption: string;
    date: string;
    index: number;
}

export default function MemoryCard({
    imageSrc,
    caption,
    date,
    index,
}: MemoryCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut",
            }}
            whileHover={{
                y: -8,
                transition: { duration: 0.3 },
            }}
            className="group relative rounded-2xl overflow-hidden
        bg-white/50 backdrop-blur-sm
        border border-purple-200/30
        hover:border-pink-300/50 hover:shadow-2xl hover:shadow-purple-300/20
        shadow-lg shadow-purple-100/20
        transition-all duration-500"
        >
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                    src={imageSrc}
                    alt={caption}
                    fill
                    className="object-cover transition-transform duration-700
            group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Overlay gradient */}
                <div
                    className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent
            opacity-40 group-hover:opacity-20 transition-opacity duration-500"
                />
            </div>

            {/* Content */}
            <div className="p-5">
                <p className="text-purple-400 text-xs tracking-wider uppercase mb-2 font-medium">
                    {date}
                </p>
                <p className="text-purple-900/80 text-sm sm:text-base leading-relaxed">
                    {caption}
                </p>
            </div>

            {/* Corner glow on hover */}
            <div
                className="absolute -top-20 -right-20 w-40 h-40 rounded-full
          bg-pink-300/0 group-hover:bg-pink-300/15
          blur-3xl transition-all duration-700"
            />
        </motion.div>
    );
}
