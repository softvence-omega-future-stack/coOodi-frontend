// src/pages/Tiers/TierAnimations.ts
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initTierAnimations = () => {
  ScrollTrigger.getAll().forEach((t) => t.kill());

  // Tier cards animation
  gsap.fromTo(
    ".tier-card",
    { opacity: 0, y: 60, scale: 0.85, rotationX: -10 },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      rotationX: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: ".tiers-container",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    }
  );

  // Hover effects
  gsap.utils.toArray(".tier-card").forEach((item) => {
    const el = item as HTMLElement;
    const btn = el.querySelector("button");

    el.addEventListener("mouseenter", () => {
      gsap.to(el, {
        scale: 1.02,
        boxShadow: "0 10px 20px rgba(251, 191, 36, 0.3)",
        duration: 0.3,
        ease: "power2.out",
      });
      if (btn)
        gsap.to(btn, { scale: 1.05, y: -2, duration: 0.3, ease: "power2.out" });
    });

    el.addEventListener("mouseleave", () => {
      gsap.to(el, {
        scale: 1,
        boxShadow: "0 0 0 rgba(251, 191, 36, 0)",
        duration: 0.3,
        ease: "power2.out",
      });
      if (btn)
        gsap.to(btn, { scale: 1, y: 0, duration: 0.3, ease: "power2.out" });
    });
  });

  // Title animation
  gsap.fromTo(
    "h1",
    { opacity: 0, y: -30, scale: 0.9 },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: { trigger: "h1", start: "top 90%" },
    }
  );

  return () => ScrollTrigger.getAll().forEach((t) => t.kill());
};
