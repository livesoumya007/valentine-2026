"use client";

import { useRouter } from "next/navigation";
import ParticleBackground from "@/components/ParticleBackground";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  const router = useRouter();

  return (
    <main className="relative min-h-screen">
      <ParticleBackground />
      <HeroSection onSayYes={() => router.push("/success")} />
    </main>
  );
}
