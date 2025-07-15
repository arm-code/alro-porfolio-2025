"use client"

import { CoverParticles } from "@/components/cover-particles.component";
import TransitionPage from "@/components/transition-page.component";

export default function Home() {
  return (
    <main>
      <TransitionPage />
      <div className="flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover">
        <CoverParticles />        
      </div>
    </main>
  );
}