import { BentoGrid, BentoGridItem } from "@/components/BentoGrid";
import CountdownCard from "@/components/CountdownCard";
import MagneticButton from "@/components/MagneticButton";
import PulseDot from "@/components/PulseDot";
import UpsellCard from "@/components/UpsellCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-deep-void text-foreground p-4 md:p-8 flex flex-col items-center">
      {/* Header / Social Proof */}
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center mb-12 mt-4">
        <h1 className="text-2xl font-clash font-bold tracking-tight">
          PAGE<span className="text-neon-lime">NOW</span>
        </h1>
        <PulseDot />
      </div>

      {/* Hero Section (Optional, implied by Bento) */}
      <div className="max-w-7xl w-full mx-auto mb-12">
        <h2 className="text-4xl md:text-6xl font-clash font-bold leading-tight mb-4">
          Learn Local, <br />
          <span className="text-neon-lime">Go Global.</span>
        </h2>
        <p className="text-neutral-400 max-w-lg font-satoshi text-lg mb-8">
          The only platform merging Kerala State Syllabus with world-class tech skills.
        </p>
        <MagneticButton className="inline-block">
          <button className="px-8 py-3 bg-neon-lime text-black font-clash font-bold rounded-full transition-transform active:scale-95 flex items-center gap-2">
            Start Learning
            {/* Simple arrow icon if lucide not available */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4 ml-1"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </MagneticButton>
      </div>

      {/* Bento Grid layout */}
      <BentoGrid className="max-w-7xl mx-auto">
        {/* Zone 1: The Anchor (SSLC/Plus Two) */}
        <div className="md:col-span-2 row-span-1">
          <CountdownCard />
        </div>

        {/* Zone 2: The Upsell (Python) */}
        <div className="md:col-span-1 row-span-2 hidden md:block">
          <UpsellCard />
        </div>

        {/* Mobile View for Zone 2 to ensure it appears */}
        <div className="md:hidden row-span-1">
          <UpsellCard />
        </div>

        {/* Zone 3 Placeholder / Features */}
        <BentoGridItem
          title="Live Doubt Clearing"
          description="Instant help from top tutors."
          header={<div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-neutral-900 border border-white/5" />}
          className="md:col-span-1"
        />
        <BentoGridItem
          title="Gamified Learning"
          description="Earn XP and badges as you learn."
          header={<div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-neutral-900 border border-white/5" />}
          className="md:col-span-1"
        />
      </BentoGrid>
    </main>
  );
}
