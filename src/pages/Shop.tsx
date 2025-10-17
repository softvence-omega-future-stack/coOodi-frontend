import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import ShopItem from "../components/Shop/ShopItem"; // adjust import path if needed

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Shop = () => {
  useEffect(() => {
    ScrollTrigger.getAll().forEach((t) => t.kill());

    gsap.fromTo(
      ".shop-item",
      { opacity: 0, y: 60, scale: 0.85, rotationX: -10 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotationX: 0,
        duration: 0.8,
        stagger: { amount: 0.3, from: "start", grid: "auto", ease: "power2.out" },
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".shop-grid",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.utils.toArray(".shop-item").forEach((item) => {
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
        if (btn) gsap.to(btn, { scale: 1, y: 0, duration: 0.3, ease: "power2.out" });
      });
    });

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
  }, []);

  return (
    <div className="min-h-screen bg-[#001117] pt-22 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* ✨ Floating Decorative Icons in Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Stars / sparkles */}
        <svg
          className="absolute top-10 left-12 w-8 h-8 text-yellow-500/15"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m8-9h1M3 12H2m16.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
        </svg>

        <svg
          className="absolute top-32 right-10 w-10 h-10 text-yellow-500/15 rotate-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>

        <svg
          className="absolute bottom-16 left-24 w-8 h-8 text-yellow-500/10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>

        <svg
          className="absolute bottom-28 right-24 w-12 h-12 text-yellow-500/10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="9" strokeWidth="2" />
        </svg>

        <svg
          className="absolute top-1/2 left-8 w-10 h-10 text-yellow-500/10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      </div>

      {/* Title */}
      <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-center mb-6 sm:mb-8 lg:mb-12">
        <span className="gradient-text">Shop</span>
      </h1>

      {/* Cards */}
      <div className="shop-grid max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6">
        <ShopItem image="/shop1.png" title="Poster" />
        <ShopItem image="/shop3.png" title="Token Pack" />
        <ShopItem image="/shop3.png" title="Token Pack" />
        <ShopItem image="/shop4.png" title="Collectible Coin ($25)" />
        <ShopItem image="/shop5.png" title="Mystery Box" price="$50" fullWidth />
      </div>
    </div>
  );
};

export default Shop;
