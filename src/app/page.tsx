"use client";

import { useState } from "react";
import ParticleBackground from "@/components/ParticleBackground";
import HeroSection from "@/components/HeroSection";
import MemoriesSection from "@/components/MemoriesSection";
import Celebration from "@/components/Celebration";

export default function Home() {
  const [showCelebration, setShowCelebration] = useState(false);

  return (
    <main className="relative min-h-screen">
      <ParticleBackground />
      <Celebration show={showCelebration} />
      <HeroSection onSayYes={() => setShowCelebration(true)} />
      <MemoriesSection />
    </main>
  );
}
