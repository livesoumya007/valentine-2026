"use client";

import { useEffect, useRef, useCallback } from "react";

interface Particle {
    x: number;
    y: number;
    baseX: number;
    baseY: number;
    vx: number;
    vy: number;
    size: number;
    opacity: number;
    type: "tulip" | "rose" | "petal" | "sparkle" | "sunflower";
    rotation: number;
    rotationSpeed: number;
    color: string;
    floatOffset: number;
    floatSpeed: number;
}

const COLORS = {
    tulip: ["#9B30FF", "#7B2D8E", "#6A0DAD"],
    rose: ["#FF69B4", "#DB7093", "#FF6EB4"],
    petal: ["#DDA0DD", "#E6B0F0", "#D8BFD8", "#c4abff"],
    sparkle: ["#FFD700", "#FFC0CB", "#E6E6FA"],
    sunflower: ["#FFD700", "#FFA500", "#F4A460", "#DAA520"],
};

export default function ParticleBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particlesRef = useRef<Particle[]>([]);
    const mouseRef = useRef({ x: -1000, y: -1000 });
    const animFrameRef = useRef<number>(0);

    const drawTulip = useCallback(
        (ctx: CanvasRenderingContext2D, x: number, y: number, size: number, rotation: number, color: string) => {
            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(rotation);

            ctx.fillStyle = color;
            ctx.globalAlpha = 0.85;
            ctx.beginPath();
            ctx.ellipse(-size * 0.3, -size * 0.15, size * 0.35, size * 0.65, -0.3, 0, Math.PI * 2);
            ctx.fill();

            ctx.globalAlpha = 0.9;
            ctx.beginPath();
            ctx.ellipse(size * 0.3, -size * 0.15, size * 0.35, size * 0.65, 0.3, 0, Math.PI * 2);
            ctx.fill();

            ctx.globalAlpha = 0.95;
            ctx.beginPath();
            ctx.ellipse(0, -size * 0.25, size * 0.28, size * 0.55, 0, 0, Math.PI * 2);
            ctx.fill();

            ctx.strokeStyle = "#6DBE6D";
            ctx.lineWidth = 1.5;
            ctx.globalAlpha = 0.7;
            ctx.beginPath();
            ctx.moveTo(0, size * 0.3);
            ctx.quadraticCurveTo(size * 0.15, size * 0.8, 0, size * 1.2);
            ctx.stroke();

            ctx.restore();
        },
        []
    );

    const drawRose = useCallback(
        (ctx: CanvasRenderingContext2D, x: number, y: number, size: number, rotation: number, color: string) => {
            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(rotation);

            for (let i = 0; i < 6; i++) {
                const angle = (i * Math.PI * 2) / 6;
                const px = Math.cos(angle) * size * 0.3;
                const py = Math.sin(angle) * size * 0.3;
                ctx.fillStyle = color;
                ctx.globalAlpha = 0.6 + (i % 2) * 0.15;
                ctx.beginPath();
                ctx.ellipse(px, py, size * 0.32, size * 0.45, angle, 0, Math.PI * 2);
                ctx.fill();
            }

            ctx.fillStyle = "#FF69B4";
            ctx.globalAlpha = 0.9;
            ctx.beginPath();
            ctx.arc(0, 0, size * 0.12, 0, Math.PI * 2);
            ctx.fill();

            ctx.restore();
        },
        []
    );

    const drawPetal = useCallback(
        (ctx: CanvasRenderingContext2D, x: number, y: number, size: number, rotation: number, color: string) => {
            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(rotation);
            ctx.fillStyle = color;
            ctx.globalAlpha = 0.65;
            ctx.beginPath();
            ctx.moveTo(0, -size);
            ctx.bezierCurveTo(size * 0.8, -size * 0.6, size * 0.8, size * 0.6, 0, size);
            ctx.bezierCurveTo(-size * 0.8, size * 0.6, -size * 0.8, -size * 0.6, 0, -size);
            ctx.fill();
            ctx.restore();
        },
        []
    );

    const drawSparkle = useCallback(
        (ctx: CanvasRenderingContext2D, x: number, y: number, size: number, rotation: number, color: string) => {
            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(rotation);
            ctx.fillStyle = color;
            ctx.globalAlpha = 0.5;

            ctx.beginPath();
            for (let i = 0; i < 8; i++) {
                const angle = (i * Math.PI) / 4;
                const r = i % 2 === 0 ? size : size * 0.35;
                ctx.lineTo(Math.cos(angle) * r, Math.sin(angle) * r);
            }
            ctx.closePath();
            ctx.fill();

            ctx.restore();
        },
        []
    );

    const drawSunflower = useCallback(
        (ctx: CanvasRenderingContext2D, x: number, y: number, size: number, rotation: number, color: string) => {
            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(rotation);

            // Petals — elongated ellipses around center
            const petalCount = 10;
            for (let i = 0; i < petalCount; i++) {
                const angle = (i * Math.PI * 2) / petalCount;
                ctx.fillStyle = color;
                ctx.globalAlpha = 0.75;
                ctx.beginPath();
                ctx.ellipse(
                    Math.cos(angle) * size * 0.45,
                    Math.sin(angle) * size * 0.45,
                    size * 0.18,
                    size * 0.4,
                    angle,
                    0,
                    Math.PI * 2
                );
                ctx.fill();
            }

            // Brown center
            ctx.fillStyle = "#8B4513";
            ctx.globalAlpha = 0.9;
            ctx.beginPath();
            ctx.arc(0, 0, size * 0.25, 0, Math.PI * 2);
            ctx.fill();

            // Inner dots pattern
            ctx.fillStyle = "#5C3317";
            ctx.globalAlpha = 0.6;
            for (let i = 0; i < 5; i++) {
                const angle = (i * Math.PI * 2) / 5 + 0.3;
                ctx.beginPath();
                ctx.arc(
                    Math.cos(angle) * size * 0.1,
                    Math.sin(angle) * size * 0.1,
                    size * 0.04,
                    0,
                    Math.PI * 2
                );
                ctx.fill();
            }

            ctx.restore();
        },
        []
    );

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resizeCanvas = () => {
            const dpr = window.devicePixelRatio || 1;
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            canvas.style.width = `${window.innerWidth}px`;
            canvas.style.height = `${window.innerHeight}px`;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        };

        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        // Plenty of particles, distributed evenly
        const count = Math.max(90, Math.floor((window.innerWidth * window.innerHeight) / 8000));
        const particles: Particle[] = [];

        for (let i = 0; i < count; i++) {
            // Mix of types — more variety, less pink dominance
            const types: Particle["type"][] = ["tulip", "rose", "petal", "petal", "sparkle", "sunflower", "sunflower"];
            const type = types[Math.floor(Math.random() * types.length)];
            const colorArr = COLORS[type];

            // Grid-based distribution for full coverage
            const cols = Math.ceil(Math.sqrt(count * (window.innerWidth / window.innerHeight)));
            const rows = Math.ceil(count / cols);
            const col = i % cols;
            const row = Math.floor(i / cols);
            const cellW = window.innerWidth / cols;
            const cellH = window.innerHeight / rows;
            const x = col * cellW + Math.random() * cellW;
            const y = row * cellH + Math.random() * cellH;

            particles.push({
                x,
                y,
                baseX: x,
                baseY: y,
                vx: 0,
                vy: 0,
                size: type === "sparkle" ? 3 + Math.random() * 4 : type === "petal" ? 5 + Math.random() * 7 : 7 + Math.random() * 9,
                opacity: 0.2 + Math.random() * 0.45,
                type,
                rotation: Math.random() * Math.PI * 2,
                rotationSpeed: (Math.random() - 0.5) * 0.01,
                color: colorArr[Math.floor(Math.random() * colorArr.length)],
                floatOffset: Math.random() * Math.PI * 2,
                floatSpeed: 0.003 + Math.random() * 0.007,
            });
        }

        particlesRef.current = particles;

        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };

        window.addEventListener("mousemove", handleMouseMove);

        let time = 0;
        const animate = () => {
            const w = window.innerWidth;
            const h = window.innerHeight;
            ctx.clearRect(0, 0, w, h);
            const mouse = mouseRef.current;
            time += 16;

            for (const p of particles) {
                // Gentle floating
                const floatX = Math.cos(time * 0.001 * p.floatSpeed * 100 + p.floatOffset) * 0.2;
                const floatY = Math.sin(time * 0.001 * p.floatSpeed * 100 + p.floatOffset) * 0.25;
                p.baseX += floatX * 0.01;
                p.baseY += floatY * 0.01;

                // Mouse interaction — GENTLE attraction with DEAD ZONE around cursor
                const dx = mouse.x - p.x;
                const dy = mouse.y - p.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const deadZone = 80;   // No attraction within 80px of cursor
                const maxDist = 280;   // Attraction radius

                if (dist > deadZone && dist < maxDist) {
                    // Slower, gentler force
                    const force = ((maxDist - dist) / maxDist) * 0.005;
                    p.vx += dx * force;
                    p.vy += dy * force;
                } else if (dist <= deadZone && dist > 0) {
                    // Gently push away from cursor within dead zone
                    const pushForce = ((deadZone - dist) / deadZone) * 0.008;
                    p.vx -= dx * pushForce;
                    p.vy -= dy * pushForce;
                }

                // Spring back to base position (gentle)
                p.vx += (p.baseX - p.x) * 0.004;
                p.vy += (p.baseY - p.y) * 0.004;

                // More damping = slower overall movement
                p.vx *= 0.96;
                p.vy *= 0.96;

                p.x += p.vx;
                p.y += p.vy;

                p.rotation += p.rotationSpeed;

                // Wrap around edges
                if (p.x < -60) { p.x = w + 60; p.baseX = p.x; }
                if (p.x > w + 60) { p.x = -60; p.baseX = p.x; }
                if (p.y < -60) { p.y = h + 60; p.baseY = p.y; }
                if (p.y > h + 60) { p.y = -60; p.baseY = p.y; }

                ctx.globalAlpha = p.opacity;

                switch (p.type) {
                    case "tulip":
                        drawTulip(ctx, p.x, p.y, p.size, p.rotation, p.color);
                        break;
                    case "rose":
                        drawRose(ctx, p.x, p.y, p.size, p.rotation, p.color);
                        break;
                    case "petal":
                        drawPetal(ctx, p.x, p.y, p.size, p.rotation, p.color);
                        break;
                    case "sparkle":
                        drawSparkle(ctx, p.x, p.y, p.size, p.rotation, p.color);
                        break;
                    case "sunflower":
                        drawSunflower(ctx, p.x, p.y, p.size, p.rotation, p.color);
                        break;
                }
            }

            ctx.globalAlpha = 1;
            animFrameRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animFrameRef.current);
        };
    }, [drawTulip, drawRose, drawPetal, drawSparkle, drawSunflower]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0"
        />
    );
}
