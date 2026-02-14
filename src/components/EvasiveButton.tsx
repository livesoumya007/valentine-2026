"use client";

import { useState, useCallback, useRef } from "react";
import { motion } from "framer-motion";

export default function EvasiveButton({
    onGiveUp,
}: {
    onGiveUp?: () => void;
}) {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isEscaping, setIsEscaping] = useState(false);
    const [attempts, setAttempts] = useState(0);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const moveButton = useCallback(() => {
        if (!containerRef.current) return;

        const container = containerRef.current.parentElement;
        if (!container) return;

        const containerRect = container.getBoundingClientRect();
        const btnWidth = 160;
        const btnHeight = 48;

        const maxX = Math.min(containerRect.width - btnWidth, window.innerWidth - containerRect.left - btnWidth - 20);
        const maxY = Math.max(300, window.innerHeight - containerRect.top - btnHeight - 20);

        const newX = (Math.random() - 0.5) * maxX;
        const newY = Math.random() * maxY * 0.5;

        setPosition({ x: newX, y: newY });
        setIsEscaping(true);
        setAttempts((prev) => {
            const next = prev + 1;
            if (next >= 5 && onGiveUp) {
                onGiveUp();
            }
            return next;
        });

        setTimeout(() => setIsEscaping(false), 300);
    }, [onGiveUp]);

    const playfulMessages = [
        "No 💔",
        "Are you sure? 🥺",
        "Try again! 😜",
        "Nope! 🏃‍♀️",
        "Can't catch me! 💨",
        "Think again! 😏",
        "Really?! 😢",
        "No way! 🙅‍♀️",
    ];

    return (
        <div ref={containerRef} className="relative">
            <motion.button
                ref={buttonRef}
                animate={{
                    x: position.x,
                    y: position.y,
                    scale: isEscaping ? 0.9 : 1,
                }}
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                }}
                onMouseEnter={moveButton}
                onTouchStart={moveButton}
                className="relative px-8 py-3 rounded-full font-semibold text-sm
          bg-white shadow-md shadow-purple-200/40
          border-2 border-purple-300 text-purple-600
          hover:shadow-lg hover:shadow-purple-300/50 hover:border-purple-400
          transition-colors duration-300 cursor-pointer
          whitespace-nowrap"
            >
                {playfulMessages[attempts % playfulMessages.length]}
            </motion.button>
        </div>
    );
}
