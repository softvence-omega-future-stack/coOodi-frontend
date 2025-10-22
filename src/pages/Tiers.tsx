// src/pages/Tiers/index.tsx
import { useEffect } from "react";
import TierCard from "../components/Tiers/TierCard";
import TierStyles from "../components/Tiers/TierStyles";
import { initTierAnimations } from "../components/Tiers/TierAnimations";

export default function Tiers() {
  useEffect(() => {
    const cleanup = initTierAnimations();
    return cleanup;
  }, []);

  const tiers = [
    {
      title: "Wanderer",
      requirement: "1,000 Silkroad Coins",
      duration: "3 months",
      perks: [
        "Voting Rights on Polls (votes cost 2 in final)",
        "Early Access to Shop Drops",
      ],
      buttonText: "UPGRADE TIER",
      leftImage: "/tiers/TC.svg",
      rightImage: "/tiers/eye.svg",
    },
    {
      title: "Adventurer",
      requirement: "10,000 Silkroad Coins",
      duration: "3 months",
      perks: ["All Tier 1 Perks", "Early Access to Cartoon/ Music Releases"],
      buttonText: "UPGRADE TIER",
      leftImage: "/tiers/TC.svg",
      rightImage: "/tiers/help.svg",
    },
    {
      title: "Lorekeeper",
      requirement: "100,000,000 Silkroad Coins",
      duration: "12 months",
      perks: [
        "All Tier 1, 2, & 3 Perks",
        "Limited Edition Physical Silk Road Tokens",
        "Free Original Paintings by You",
      ],
      buttonText: "UPGRADE TIER",
      leftImage: "/tiers/TC.svg",
      rightImage: "/tiers/help.svg",
    },
  ];

  return (
    <div className="min-h-screen bg-[#001117] pt-28 pb-12 relative overflow-hidden w-full">
      <TierStyles />

      {/* Decorative Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="absolute top-10 left-8 md:left-12 w-6 h-6 md:w-8 md:h-8 text-yellow-500/15" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" strokeWidth="2" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-center mb-10 lg:mb-16">
          <span className="gradient-text">Yhe Silk Tiers</span>
        </h1>

        {/* Tiers */}
        <div className="tiers-container space-y-6 md:space-y-8 lg:space-y-10">
          {tiers.map((tier, index) => (
            <TierCard key={index} {...tier} index={index} />
          ))}
        </div>

        {/* Bottom Icon */}
        <div className="flex justify-center mt-12 md:mt-16">
          <svg className="w-12 h-12 md:w-16 md:h-16 text-yellow-500/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
  );
}
