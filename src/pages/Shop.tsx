// import { useEffect, lazy, Suspense } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// const ShopItem = lazy(() => import("../components/Shop/ShopItem")); // lazy load

// gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// const Shop = () => {
//   useEffect(() => {
//     ScrollTrigger.getAll().forEach((t) => t.kill());

//     gsap.fromTo(
//       ".shop-item",
//       { opacity: 0, y: 60, scale: 0.85, rotationX: -10 },
//       {
//         opacity: 1,
//         y: 0,
//         scale: 1,
//         rotationX: 0,
//         duration: 0.8,
//         stagger: {
//           amount: 0.3,
//           from: "start",
//           grid: "auto",
//           ease: "power2.out",
//         },
//         ease: "back.out(1.7)",
//         scrollTrigger: {
//           trigger: ".shop-grid",
//           start: "top 80%",
//           toggleActions: "play none none reverse",
//         },
//       }
//     );

//     gsap.utils.toArray(".shop-item").forEach((item) => {
//       const el = item as HTMLElement;
//       const btn = el.querySelector("button");

//       el.addEventListener("mouseenter", () => {
//         gsap.to(el, {
//           scale: 1.02,
//           boxShadow: "0 10px 20px rgba(251, 191, 36, 0.3)",
//           duration: 0.3,
//           ease: "power2.out",
//         });
//         if (btn)
//           gsap.to(btn, {
//             scale: 1.05,
//             y: -2,
//             duration: 0.3,
//             ease: "power2.out",
//           });
//       });

//       el.addEventListener("mouseleave", () => {
//         gsap.to(el, {
//           scale: 1,
//           boxShadow: "0 0 0 rgba(251, 191, 36, 0)",
//           duration: 0.3,
//           ease: "power2.out",
//         });
//         if (btn)
//           gsap.to(btn, { scale: 1, y: 0, duration: 0.3, ease: "power2.out" });
//       });
//     });

//     gsap.fromTo(
//       "h1",
//       { opacity: 0, y: -30, scale: 0.9 },
//       {
//         opacity: 1,
//         y: 0,
//         scale: 1,
//         duration: 1,
//         ease: "power2.out",
//         scrollTrigger: { trigger: "h1", start: "top 90%" },
//       }
//     );

//     return () => ScrollTrigger.getAll().forEach((t) => t.kill());
//   }, []);

//   return (
//     <div className="min-h-screen bg-[#001117] pt-28 pb-12 relative overflow-hidden w-full">
//       {/* ✨ Floating Decorative Icons in Background */}
//       <div className="absolute inset-0 pointer-events-none overflow-hidden">
//         {/* Stars / sparkles */}
//         <svg
//           className="absolute top-10 left-12 w-8 h-8 text-yellow-500/15"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M12 3v1m0 16v1m8-9h1M3 12H2m16.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"
//           />
//         </svg>

//         <svg
//           className="absolute top-32 right-10 w-10 h-10 text-yellow-500/15 rotate-12"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
//           />
//         </svg>

//         <svg
//           className="absolute bottom-16 left-24 w-8 h-8 text-yellow-500/10"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M12 6v6m0 0v6m0-6h6m-6 0H6"
//           />
//         </svg>

//         <svg
//           className="absolute bottom-28 right-24 w-12 h-12 text-yellow-500/10"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <circle cx="12" cy="12" r="9" strokeWidth="2" />
//         </svg>

//         <svg
//           className="absolute top-1/2 left-8 w-10 h-10 text-yellow-500/10"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M5 13l4 4L19 7"
//           />
//         </svg>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Title */}
//         <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-center mb-10 lg:mb-16">
//           <span className="gradient-text">Shop</span>
//         </h1>

//         {/* Cards */}
//         <div className="shop-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6">
//           <Suspense
//             fallback={
//               <div className="fixed inset-0 flex items-center justify-center z-50">
//                 <div className="text-yellow-400 text-xl font-semibold animate-pulse">
//                   Loading ...
//                 </div>
//               </div>
//             }
//           >
//             <ShopItem image="/shop1.png" title="Poster" />
//             <ShopItem image="/shop2.png" title="Hoodie" />
//             <ShopItem image="/shop3.png" title="Token Pack" />
//             <ShopItem image="/shop4.png" title="Collectible Coin ($25)" />
//             <ShopItem
//               image="/shop5.png"
//               title="Mystery Box"
//               price="$50"
//               fullWidth
//             />
//           </Suspense>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Shop;


// use background icons from /public/shop/icons/
// "use client";

// import { useEffect, lazy, Suspense } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// const ShopItem = lazy(() => import("../components/Shop/ShopItem"));

// gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// const Shop = () => {
//   useEffect(() => {
//     ScrollTrigger.getAll().forEach((t) => t.kill());

//     // ✨ Shop item entrance animation
//     gsap.fromTo(
//       ".shop-item",
//       { opacity: 0, y: 60, scale: 0.85, rotationX: -10 },
//       {
//         opacity: 1,
//         y: 0,
//         scale: 1,
//         rotationX: 0,
//         duration: 0.8,
//         stagger: { amount: 0.3, from: "start", grid: "auto" },
//         ease: "back.out(1.7)",
//         scrollTrigger: {
//           trigger: ".shop-grid",
//           start: "top 80%",
//           toggleActions: "play none none reverse",
//         },
//       }
//     );

//     // ✨ Hover animation for shop items
//     gsap.utils.toArray(".shop-item").forEach((item) => {
//       const el = item as HTMLElement;
//       const btn = el.querySelector("button");

//       el.addEventListener("mouseenter", () => {
//         gsap.to(el, {
//           scale: 1.02,
//           boxShadow: "0 10px 20px rgba(251, 191, 36, 0.3)",
//           duration: 0.3,
//           ease: "power2.out",
//         });
//         if (btn)
//           gsap.to(btn, { scale: 1.05, y: -2, duration: 0.3, ease: "power2.out" });
//       });

//       el.addEventListener("mouseleave", () => {
//         gsap.to(el, {
//           scale: 1,
//           boxShadow: "0 0 0 rgba(251, 191, 36, 0)",
//           duration: 0.3,
//           ease: "power2.out",
//         });
//         if (btn)
//           gsap.to(btn, { scale: 1, y: 0, duration: 0.3, ease: "power2.out" });
//       });
//     });

//     // ✨ Heading animation
//     gsap.fromTo(
//       "h1",
//       { opacity: 0, y: -30, scale: 0.9 },
//       {
//         opacity: 1,
//         y: 0,
//         scale: 1,
//         duration: 1,
//         ease: "power2.out",
//         scrollTrigger: { trigger: "h1", start: "top 90%" },
//       }
//     );

//     // ✨ Floating lights animation
//     gsap.to(".floating-light", {
//       x: "random(-50, 50)",
//       y: "random(-50, 50)",
//       opacity: "random(0.3, 0.8)",
//       duration: "random(6, 12)",
//       ease: "sine.inOut",
//       repeat: -1,
//       yoyo: true,
//       stagger: { amount: 5, from: "center" },
//     });

//     return () => ScrollTrigger.getAll().forEach((t) => t.kill());
//   }, []);

//   return (
//     <div className="min-h-screen bg-[#001117] backdrop-blur-2xl pt-28 pb-12 relative overflow-hidden w-full">
//       {/* 🌌 Soft Animated Light Glows */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="floating-light absolute top-[20%] left-[15%] w-[300px] h-[300px] rounded-full bg-yellow-500/10 blur-[120px]" />
//         <div className="floating-light absolute bottom-[25%] right-[10%] w-[400px] h-[400px] rounded-full bg-yellow-400/10 blur-[150px]" />
//         <div className="floating-light absolute top-[60%] left-[50%] w-[250px] h-[250px] rounded-full bg-amber-300/10 blur-[100px]" />
//       </div>

//       {/* ✨ Background Icons - MANUALLY positioned */}
//       <div className="absolute inset-0 pointer-events-none overflow-hidden">
//         {/* 🔹 Example icons — manually adjust top/left/width as needed */}
//         <img
//           src="/shop/icons/shop1.svg"
//           alt="bg-icon"
//           className="absolute"
//           style={{ top: "5%", right: "15%", width: "43px", opacity: 0.8 }}
//         />
//         <img
//           src="/shop/icons/shop2.svg"
//           alt="bg-icon"
//           className="absolute"
//           style={{ top: "10%", right: "10%", width: "84px", opacity: 0.9 }}
//         />
//         <img
//           src="/shop/icons/shop3.svg"
//           alt="bg-icon"
//           className="absolute"
//           style={{ top: "50%", left: "42%", width: "93px", opacity: 0.8 }}
//         />
//         <img
//           src="/shop/icons/shop4.svg"
//           alt="bg-icon"
//           className="absolute"
//           style={{ bottom: "17%", right: "8%", width: "57px", opacity: 0.7 }}
//         />
//         <img
//           src="/shop/icons/shop5.svg"
//           alt="bg-icon"
//           className="absolute"
//           style={{ bottom: "8%", left: "54%", width: "58px", opacity: 0.9 }}
//         />
//         <img
//           src="/shop/icons/shop8.svg"
//           alt="bg-icon"
//           className="absolute"
//           style={{ top: "12%", left: "25%", width: "27px", opacity: 0.8 }}
//         />
//         <img
//           src="/shop/icons/shop7.svg"
//           alt="bg-icon"
//           className="absolute"
//           style={{ top: "35%", right: "5%", width: "43px", opacity: 0.8 }}
//         />
//         <img
//           src="/shop/icons/shop8.svg"
//           alt="bg-icon"
//           className="absolute"
//           style={{ top: "10%", right: "10%", width: "84px", opacity: 0.9 }}
//         />
//         <img
//           src="/shop/icons/shop9.svg"
//           alt="bg-icon"
//           className="absolute"
//           style={{ top: "35%", left: "25%", width: "45px", opacity: 0.8 }}
//         />
//         <img
//           src="/shop/icons/shop10.svg"
//           alt="bg-icon"
//           className="absolute"
//           style={{ top: "60%", left: "5%", width: "70px", opacity: 0.7 }}
//         />
//         <img
//           src="/shop/icons/shop11.svg"
//           alt="bg-icon"
//           className="absolute"
//           style={{ top: "75%", left: "70%", width: "55px", opacity: 0.9 }}
//         />
//         <img
//           src="/shop/icons/shop12.svg"
//           alt="bg-icon"
//           className="absolute"
//           style={{ top: "85%", left: "40%", width: "60px", opacity: 0.8 }}
//         />
//         <img
//           src="/shop/icons/shop6.svg"
//           alt="bg-icon"
//           className="absolute"
//           style={{ top: "85%", left: "40%", width: "60px", opacity: 0.8 }}
//         />
//         <img
//           src="/shop/icons/shop13.svg"
//           alt="bg-icon"
//           className="absolute"
//           style={{ top: "85%", left: "40%", width: "60px", opacity: 0.8 }}
//         />
//       </div>

//       {/* 🌟 Main Content */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-center mb-10 lg:mb-16">
//           <span className="gradient-text">Shop</span>
//         </h1>

//         <div className="shop-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6">
//           <Suspense
//             fallback={
//               <div className="fixed inset-0 flex items-center justify-center z-50">
//                 <div className="text-yellow-600 text-xl font-semibold animate-pulse">
//                   Loading ...
//                 </div>
//               </div>
//             }
//           >
//             <ShopItem image="/shop1.png" title="Poster" />
//             <ShopItem image="/shop2.png" title="Hoodie" />
//             <ShopItem image="/shop3.png" title="Token Pack" />
//             <ShopItem image="/shop4.png" title="Collectible Coin ($25)" />
//             <ShopItem
//               image="/shop5.png"
//               title="Mystery Box"
//               price="$50"
//               fullWidth
//             />
//           </Suspense>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Shop;


"use client";

import { useEffect, lazy, Suspense, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

const ShopItem = lazy(() => import("../components/Shop/ShopItem"));

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Shop = () => {
  const [bgLoaded, setBgLoaded] = useState(false);

  // Preload background
  useEffect(() => {
    const bgImage = new Image();
    bgImage.src = "/shop/Shop.png";
    bgImage.onload = () => setBgLoaded(true);
  }, []);

  useEffect(() => {
    if (!bgLoaded) return; // only run after bg is loaded

    ScrollTrigger.getAll().forEach((t) => t.kill());

    // Fade in entire container
    gsap.to(".shop-container", { opacity: 1, duration: 0.8, ease: "power2.out" });

    // Shop item entrance
    gsap.fromTo(
      ".shop-item",
      { opacity: 0, y: 60, scale: 0.85 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: { amount: 0.3 },
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".shop-grid",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Hover animations
    gsap.utils.toArray(".shop-item").forEach((item) => {
      const el = item as HTMLElement;
      const btn = el.querySelector("button");
      el.addEventListener("mouseenter", () => {
        gsap.to(el, { scale: 1.02, boxShadow: "0 10px 20px rgba(251,191,36,0.3)", duration: 0.3 });
        if (btn) gsap.to(btn, { scale: 1.05, y: -2, duration: 0.3 });
      });
      el.addEventListener("mouseleave", () => {
        gsap.to(el, { scale: 1, boxShadow: "0 0 0 rgba(0,0,0,0)", duration: 0.3 });
        if (btn) gsap.to(btn, { scale: 1, y: 0, duration: 0.3 });
      });
    });

  }, [bgLoaded]);

  return (
    <div
      className="shop-container min-h-screen pt-28 pb-12 relative bg-[#001117]"
      style={{
        backgroundImage: bgLoaded ? "url('/shop/Shop.png')" : "none",
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-center mb-10 lg:mb-26">
          <span className="gradient-text">Shop</span>
        </h1>

        <div className="shop-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6">
          <Suspense
            fallback={
              <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="text-yellow-600 text-xl font-semibold animate-pulse">
                  Loading ...
                </div>
              </div>
            }
          >
            <ShopItem image="/shop1.png" title="Poster" />
            <ShopItem image="/shop2.png" title="Hoodie" />
            <ShopItem image="/shop3.png" title="Token Pack" />
            <ShopItem image="/shop4.png" title="Collectible Coin ($25)" />
            <ShopItem image="/shop5.png" title="Mystery Box" price="$50" fullWidth />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Shop;
