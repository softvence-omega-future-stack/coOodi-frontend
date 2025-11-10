// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { DropletIcon} from "lucide-react";
// import HomeButton from "../components/button/HomeButton";

// gsap.registerPlugin(ScrollTrigger);

// // HomePage Component
// type HomePageProps = {
//   onEnterNow: () => void;
//   navRef: React.RefObject<HTMLElement | null>;
// };

// const HomePage: React.FC<HomePageProps> = ({ onEnterNow, navRef }) => {
//   const containerRef = useRef(null);
//   const icon1Ref = useRef(null);
//   const icon2Ref = useRef(null);
//   const icon3Ref = useRef(null);
//   const extraIconsRef = useRef<(HTMLDivElement | null)[]>([]);
//   const contentRef = useRef(null);
//   const scrollMessageRef = useRef(null); // Add ref for scroll message

//   useEffect(() => {
//     ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     gsap.to(window, { scrollTo: 0, duration: 0.8, ease: "power2.out" });

//     // Animate scroll message to hide when first icon animation starts
//     gsap.fromTo(
//       scrollMessageRef.current,
//       { opacity: 1, scale: 1 },
//       {
//         opacity: 0,
//         scale: 0.8,
//         duration: 0.8,
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "top top",
//           end: "5% top",
//           scrub: 0.5,
//         },
//       }
//     );

//     gsap.fromTo(
//       icon1Ref.current,
//       { opacity: 0, scale: 0.5, rotation: 0 },
//       {
//         opacity: 1,
//         scale: 1,
//         rotation: 360,
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "top top",
//           end: "20% top",
//           scrub: 1,
//         },
//       }
//     );

//     gsap.to(icon1Ref.current, {
//       scale: 1.1,
//       duration: 4,
//       repeat: -1,
//       yoyo: true,
//       ease: "power1.inOut",
//     });

//     gsap.fromTo(
//       icon2Ref.current,
//       { opacity: 0, scale: 0.5, rotation: 0 },
//       {
//         opacity: 1,
//         scale: 1,
//         rotation: -360,
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "20% top",
//           end: "35% top",
//           scrub: 1,
//         },
//       }
//     );

//     gsap.to(icon2Ref.current, {
//       x: 30,
//       y: -30,
//       rotation: 120,
//       duration: 8,
//       repeat: -1,
//       yoyo: true,
//       ease: "sine.inOut",
//     });

//     gsap.fromTo(
//       icon3Ref.current,
//       { opacity: 0, scale: 0.5, rotation: 0 },
//       {
//         opacity: 1,
//         scale: 1,
//         rotation: 360,
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "35% top",
//           end: "50% top",
//           scrub: 1,
//         },
//       }
//     );

//     gsap.to(icon3Ref.current, {
//       scale: 1.15,
//       opacity: 0.8,
//       duration: 5,
//       repeat: -1,
//       yoyo: true,
//       ease: "power1.inOut",
//     });

//     extraIconsRef.current.forEach((icon, index) => {
//       if (icon) {
//         gsap.fromTo(
//           icon,
//           { opacity: 0, scale: 0.5, rotation: 0 },
//           {
//             opacity: 1,
//             scale: 1,
//             rotation: 360,
//             duration: 1.5,
//             ease: "power2.out",
//             scrollTrigger: {
//               trigger: containerRef.current,
//               start: "50% top",
//               end: "55% top",
//               scrub: 0.5,
//             },
//             delay: index * 0.1,
//           }
//         );

//         gsap.to(icon, {
//           y: -30,
//           rotation: 90,
//           duration: 10 + index * 2,
//           repeat: -1,
//           yoyo: true,
//           ease: "sine.inOut",
//         });
//       }
//     });

//     gsap.fromTo(
//       navRef.current,
//       { opacity: 0, y: -50 },
//       {
//         opacity: 1,
//         y: 0,
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "50% top",
//           end: "60% top",
//           scrub: 1,
//         },
//       }
//     );

//     gsap.fromTo(
//       contentRef.current,
//       { opacity: 0, y: 100, scale: 0.8 },
//       {
//         opacity: 1,
//         y: 0,
//         scale: 1,
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "60% top",
//           end: "80% top",
//           scrub: 1,
//         },
//       }
//     );

//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, [navRef]);

//   return (
//     <div ref={containerRef} className="relative bg-[#051318] min-h-[400vh]">
//       {/* Scroll to Explore Message - Initially visible */}
//       <div
//         ref={scrollMessageRef}
//         className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none flex flex-col items-center space-y-2"
//       >
//         <div className="text-slate-400 text-sm font-medium tracking-wide">
//           SCROLL TO EXPLORE
//         </div>
//         <DropletIcon className="w-6 h-6 text-slate-400 animate-bounce" />
//       </div>

//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         {/* Top Left */}
//         <div
//           ref={icon1Ref}
//           className="absolute top-10 left-16 w-56 h-56 opacity-0"
//         >
//           <img src="/Vector.png" alt="1" className="opacity-[0.4]" />
//         </div>

//         {/* Top Right */}
//         <div
//           ref={icon2Ref}
//           className="absolute top-50 right-20 w-72 h-72 opacity-0"
//         >
//           <img src="/Vector2.png" alt="2" className="opacity-[0.35]" />
//         </div>

//         {/* Bottom Left */}
//         <div
//           ref={icon3Ref}
//           className="absolute bottom-10 left-20 w-64 h-64 opacity-0"
//         >
//           <img src="/Vector3.png" alt="3" className="opacity-[0.4]" />
//         </div>

//         {/* Floating extras */}
//         <div
//           ref={(el) => {
//             extraIconsRef.current[0] = el;
//           }}
//           className="absolute top-1/4 left-[65%] w-44 h-44 opacity-0"
//         >
//           <img src="/Vector4.png" alt="" className="opacity-[0.45]" />
//         </div>

//         <div
//           ref={(el) => {
//             extraIconsRef.current[1] = el;
//           }}
//           className="absolute top-[38%] left-[18%] w-48 h-48 opacity-0"
//         >
//           <img src="/Vector.png" alt="" className="opacity-[0.35]" />
//         </div>

//         <div
//           ref={(el) => {
//             extraIconsRef.current[2] = el;
//           }}
//           className="absolute bottom-[22%] right-[28%] w-60 h-60 opacity-0"
//         >
//           <img src="/Vector2.png" alt="" className="opacity-[0.3]" />
//         </div>

//         <div
//           ref={(el) => {
//             extraIconsRef.current[3] = el;
//           }}
//           className="absolute top-2 left-1/2 -translate-x-1/2 w-52 h-52 opacity-0"
//         >
//           <img src="/Vector3.png" alt="" className="opacity-[0.4]" />
//         </div>

//         <div
//           ref={(el) => {
//             extraIconsRef.current[4] = el;
//           }}
//           className="absolute bottom-10 left-[42%] w-48 h-48 opacity-0"
//         >
//           <img src="/Vector4.png" alt="" className="opacity-[0.35]" />
//         </div>

//         <div
//           ref={(el) => {
//             extraIconsRef.current[5] = el;
//           }}
//           className="absolute top-[50%] right-[50%] w-40 h-40 opacity-0"
//         >
//           <img src="/Vector.png" alt="" className="opacity-[0.4]" />
//         </div>
//       </div>

//       <div
//         ref={contentRef}
//         className="fixed inset-0 flex items-center justify-center opacity-0"
//       >
//         <div className="text-center space-y-8 px-4">
//           <h1 className="text-7xl md:text-8xl font-bold gradient-text">
//             <span> Welcome to</span>
//             <br />
//             <span>Yhe Silk Road</span>
//           </h1>
//           <p className="text-xl text-[#B59652] max-w-2xl mx-auto">
//             Collect. Trade. Discover the Unknown.
//           </p>
//           <HomeButton
//             text="ENTER NOW"
//             onClick={onEnterNow}
//             className="text-[2rem]"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;

// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { DropletIcon } from "lucide-react";
// import HomeButton from "../components/button/HomeButton";

// gsap.registerPlugin(ScrollTrigger);

// // SVG Cloud Components for realistic fog
// const CloudSVG1 = ({ className = "", style = {} }) => (
//   <svg
//     viewBox="0 0 1200 400"
//     className={className}
//     style={style}
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <defs>
//       <filter id="glow1">
//         <feGaussianBlur stdDeviation="15" result="coloredBlur" />
//         <feMerge>
//           <feMergeNode in="coloredBlur" />
//           <feMergeNode in="SourceGraphic" />
//         </feMerge>
//       </filter>
//     </defs>
//     <g filter="url(#glow1)" opacity="0.6">
//       <ellipse
//         cx="200"
//         cy="150"
//         rx="180"
//         ry="100"
//         fill="rgba(100, 200, 255, 0.3)"
//       />
//       <ellipse
//         cx="400"
//         cy="180"
//         rx="200"
//         ry="120"
//         fill="rgba(120, 220, 255, 0.25)"
//       />
//       <ellipse
//         cx="600"
//         cy="160"
//         rx="190"
//         ry="110"
//         fill="rgba(140, 230, 255, 0.28)"
//       />
//       <ellipse
//         cx="800"
//         cy="170"
//         rx="210"
//         ry="115"
//         fill="rgba(110, 210, 255, 0.26)"
//       />
//       <ellipse
//         cx="1000"
//         cy="155"
//         rx="195"
//         ry="105"
//         fill="rgba(130, 225, 255, 0.27)"
//       />
//     </g>
//   </svg>
// );

// const CloudSVG2 = ({ className = "", style = {} }) => (
//   <svg
//     viewBox="0 0 1200 400"
//     className={className}
//     style={style}
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <defs>
//       <filter id="glow2">
//         <feGaussianBlur stdDeviation="18" result="coloredBlur" />
//         <feMerge>
//           <feMergeNode in="coloredBlur" />
//           <feMergeNode in="SourceGraphic" />
//         </feMerge>
//       </filter>
//     </defs>
//     <g filter="url(#glow2)" opacity="0.5">
//       <ellipse
//         cx="150"
//         cy="200"
//         rx="170"
//         ry="95"
//         fill="rgba(80, 180, 240, 0.3)"
//       />
//       <ellipse
//         cx="350"
//         cy="220"
//         rx="190"
//         ry="110"
//         fill="rgba(90, 190, 250, 0.28)"
//       />
//       <ellipse
//         cx="550"
//         cy="210"
//         rx="185"
//         ry="105"
//         fill="rgba(100, 200, 255, 0.26)"
//       />
//       <ellipse
//         cx="750"
//         cy="195"
//         rx="200"
//         ry="115"
//         fill="rgba(85, 185, 245, 0.29)"
//       />
//       <ellipse
//         cx="950"
//         cy="205"
//         rx="180"
//         ry="100"
//         fill="rgba(95, 195, 252, 0.27)"
//       />
//       <ellipse
//         cx="1100"
//         cy="190"
//         rx="175"
//         ry="98"
//         fill="rgba(88, 188, 248, 0.28)"
//       />
//     </g>
//   </svg>
// );

// const CloudSVG3 = ({ className = "", style = {} }) => (
//   <svg
//     viewBox="0 0 1200 400"
//     className={className}
//     style={style}
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <defs>
//       <filter id="glow3">
//         <feGaussianBlur stdDeviation="20" result="coloredBlur" />
//         <feMerge>
//           <feMergeNode in="coloredBlur" />
//           <feMergeNode in="SourceGraphic" />
//         </feMerge>
//       </filter>
//     </defs>
//     <g filter="url(#glow3)" opacity="0.55">
//       <ellipse
//         cx="250"
//         cy="180"
//         rx="195"
//         ry="108"
//         fill="rgba(110, 210, 255, 0.32)"
//       />
//       <ellipse
//         cx="450"
//         cy="200"
//         rx="205"
//         ry="118"
//         fill="rgba(120, 220, 255, 0.3)"
//       />
//       <ellipse
//         cx="650"
//         cy="190"
//         rx="198"
//         ry="112"
//         fill="rgba(105, 205, 250, 0.31)"
//       />
//       <ellipse
//         cx="850"
//         cy="185"
//         rx="210"
//         ry="120"
//         fill="rgba(115, 215, 255, 0.29)"
//       />
//     </g>
//   </svg>
// );

// // Decorative SVG Icons
// const MysticalIcon1 = ({ className = "" }) => (
//   <svg
//     viewBox="0 0 200 200"
//     className={className}
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <defs>
//       <radialGradient id="iconGrad1">
//         <stop offset="0%" stopColor="rgba(181, 150, 82, 0.4)" />
//         <stop offset="100%" stopColor="rgba(181, 150, 82, 0.05)" />
//       </radialGradient>
//     </defs>
//     <circle cx="100" cy="100" r="80" fill="url(#iconGrad1)" opacity="0.6" />
//     <circle
//       cx="100"
//       cy="100"
//       r="60"
//       fill="none"
//       stroke="rgba(181, 150, 82, 0.3)"
//       strokeWidth="2"
//     />
//     <circle
//       cx="100"
//       cy="100"
//       r="40"
//       fill="none"
//       stroke="rgba(181, 150, 82, 0.5)"
//       strokeWidth="1.5"
//     />
//     <path
//       d="M 100,30 L 105,95 L 100,100 L 95,95 Z"
//       fill="rgba(181, 150, 82, 0.4)"
//     />
//     <path
//       d="M 170,100 L 105,105 L 100,100 L 105,95 Z"
//       fill="rgba(181, 150, 82, 0.4)"
//     />
//     <path
//       d="M 100,170 L 95,105 L 100,100 L 105,105 Z"
//       fill="rgba(181, 150, 82, 0.4)"
//     />
//     <path
//       d="M 30,100 L 95,95 L 100,100 L 95,105 Z"
//       fill="rgba(181, 150, 82, 0.4)"
//     />
//   </svg>
// );

// const MysticalIcon2 = ({ className = "" }) => (
//   <svg
//     viewBox="0 0 200 200"
//     className={className}
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <defs>
//       <radialGradient id="iconGrad2">
//         <stop offset="0%" stopColor="rgba(181, 150, 82, 0.5)" />
//         <stop offset="100%" stopColor="rgba(181, 150, 82, 0.08)" />
//       </radialGradient>
//     </defs>
//     <polygon
//       points="100,20 130,80 190,90 130,120 140,180 100,150 60,180 70,120 10,90 70,80"
//       fill="url(#iconGrad2)"
//       opacity="0.5"
//     />
//     <circle
//       cx="100"
//       cy="100"
//       r="25"
//       fill="none"
//       stroke="rgba(181, 150, 82, 0.4)"
//       strokeWidth="2"
//     />
//   </svg>
// );

// const MysticalIcon3 = ({ className = "" }) => (
//   <svg
//     viewBox="0 0 200 200"
//     className={className}
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <defs>
//       <linearGradient id="iconGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
//         <stop offset="0%" stopColor="rgba(181, 150, 82, 0.4)" />
//         <stop offset="100%" stopColor="rgba(181, 150, 82, 0.1)" />
//       </linearGradient>
//     </defs>
//     <rect
//       x="50"
//       y="50"
//       width="100"
//       height="100"
//       fill="url(#iconGrad3)"
//       opacity="0.5"
//       transform="rotate(45 100 100)"
//     />
//     <rect
//       x="65"
//       y="65"
//       width="70"
//       height="70"
//       fill="none"
//       stroke="rgba(181, 150, 82, 0.5)"
//       strokeWidth="2"
//       transform="rotate(45 100 100)"
//     />
//   </svg>
// );

// type HomePageProps = {
//   onEnterNow: () => void;
//   navRef: React.RefObject<HTMLElement | null>;
// };

// const HomePage: React.FC<HomePageProps> = ({ onEnterNow, navRef }) => {
//   const containerRef = useRef<HTMLDivElement | null>(null);
//   const icon1Ref = useRef<HTMLDivElement | null>(null);
//   const icon2Ref = useRef<HTMLDivElement | null>(null);
//   const icon3Ref = useRef<HTMLDivElement | null>(null);
//   const extraIconsRef = useRef<(HTMLDivElement | null)[]>([]);
//   const contentRef = useRef<HTMLDivElement | null>(null);
//   const scrollMessageRef = useRef<HTMLDivElement | null>(null);

//   // Cloud refs
//   const cloud1Ref = useRef<HTMLDivElement | null>(null);
//   const cloud2Ref = useRef<HTMLDivElement | null>(null);
//   const cloud3Ref = useRef<HTMLDivElement | null>(null);
//   const cloud4Ref = useRef<HTMLDivElement | null>(null);
//   const cloud5Ref = useRef<HTMLDivElement | null>(null);
//   const cloud6Ref = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     gsap.to(window, { scrollTo: 0, duration: 0.8, ease: "power2.out" });

//     // Hide scroll indicator
//     gsap.fromTo(
//       scrollMessageRef.current,
//       { opacity: 1, scale: 1 },
//       {
//         opacity: 0,
//         scale: 0.8,
//         duration: 0.8,
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "top top",
//           end: "5% top",
//           scrub: 0.5,
//         },
//       }
//     );

//     // 🌫️ Enhanced cloud animation function
//     const createCloudAnimation = (
//       cloudRef: React.RefObject<HTMLDivElement | null>,
//       start: string,
//       end: string,
//       direction: "leftToRight" | "rightToLeft" = "leftToRight",
//       yStart: number = 30,
//       yEnd: number = -20
//     ) => {
//       if (!cloudRef.current) return;

//       const xFrom = direction === "leftToRight" ? "-130%" : "130%";
//       const xTo = direction === "leftToRight" ? "130%" : "-130%";

//       gsap.fromTo(
//         cloudRef.current,
//         {
//           x: xFrom,
//           y: `${yStart}vh`,
//           opacity: 0,
//           scale: 1.2,
//         },
//         {
//           x: xTo,
//           y: `${yEnd}vh`,
//           opacity: 1,
//           scale: 1.4,
//           ease: "sine.inOut",
//           scrollTrigger: {
//             trigger: containerRef.current,
//             start,
//             end,
//             scrub: 3,
//           },
//         }
//       );

//       // Add floating animation
//       gsap.to(cloudRef.current, {
//         y: `+=${10 + Math.random() * 5}vh`,
//         duration: 4 + Math.random() * 2,
//         ease: "sine.inOut",
//         repeat: -1,
//         yoyo: true,
//       });
//     };

//     // Cloud sequence - overlapping for continuous fog effect
//     createCloudAnimation(cloud1Ref, "0% top", "25% top", "leftToRight", 40, 10);
//     createCloudAnimation(cloud2Ref, "8% top", "30% top", "rightToLeft", 50, 20);
//     createCloudAnimation(cloud3Ref, "20% top", "45% top", "leftToRight", 35, 5);
//     createCloudAnimation(
//       cloud4Ref,
//       "35% top",
//       "60% top",
//       "rightToLeft",
//       45,
//       15
//     );
//     createCloudAnimation(cloud5Ref, "50% top", "75% top", "leftToRight", 38, 8);
//     createCloudAnimation(
//       cloud6Ref,
//       "65% top",
//       "90% top",
//       "rightToLeft",
//       42,
//       12
//     );

//     // Icons fade in
//     gsap.fromTo(
//       icon1Ref.current,
//       { opacity: 0, scale: 0.9, rotation: -5 },
//       {
//         opacity: 1,
//         scale: 1,
//         rotation: 0,
//         scrollTrigger: {
//           start: "10% top",
//           end: "20% top",
//           scrub: 2,
//           trigger: containerRef.current,
//         },
//       }
//     );

//     gsap.fromTo(
//       icon2Ref.current,
//       { opacity: 0, scale: 0.9, rotation: 5 },
//       {
//         opacity: 1,
//         scale: 1,
//         rotation: 0,
//         scrollTrigger: {
//           start: "30% top",
//           end: "40% top",
//           scrub: 2,
//           trigger: containerRef.current,
//         },
//       }
//     );

//     gsap.fromTo(
//       icon3Ref.current,
//       { opacity: 0, scale: 0.9, rotation: -5 },
//       {
//         opacity: 1,
//         scale: 1,
//         rotation: 0,
//         scrollTrigger: {
//           start: "50% top",
//           end: "60% top",
//           scrub: 2,
//           trigger: containerRef.current,
//         },
//       }
//     );

//     extraIconsRef.current.forEach((icon, i) => {
//       if (icon)
//         gsap.fromTo(
//           icon,
//           { opacity: 0, scale: 0.8, rotation: Math.random() * 20 - 10 },
//           {
//             opacity: 1,
//             scale: 1,
//             rotation: 0,
//             scrollTrigger: {
//               start: "70% top",
//               end: "75% top",
//               scrub: 1.5,
//               trigger: containerRef.current,
//             },
//             delay: i * 0.3,
//           }
//         );
//     });

//     // 🌟 Main content reveal
//     gsap.fromTo(
//       contentRef.current,
//       { opacity: 0, y: 120, filter: "blur(15px)" },
//       {
//         opacity: 1,
//         y: 0,
//         filter: "blur(0px)",
//         duration: 1.8,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "70% center",
//           end: "85% center",
//           scrub: 1,
//         },
//       }
//     );

//     // Navbar reveal
//     gsap.fromTo(
//       navRef.current,
//       { opacity: 0, y: -40 },
//       {
//         opacity: 1,
//         y: 0,
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "75% center",
//           end: "85% center",
//           scrub: 1,
//         },
//       }
//     );

//     // ✅ Icon Glow Logic (only added, all else untouched)
//     const setGray = (el: HTMLElement | null, gray: boolean) => {
//       if (!el) return;
//       gsap.to(el, {
//         filter: gray
//           ? "grayscale(1) brightness(0.6)"
//           : "grayscale(0) brightness(1.2)",
//         duration: 1.2,
//         ease: "power2.out",
//       });
//     };

//     ScrollTrigger.create({
//       trigger: containerRef.current,
//       start: "5% top",
//       end: "25% top",
//       scrub: true,
//       onEnter: () => setGray(icon1Ref.current, false),
//       onEnterBack: () => setGray(icon1Ref.current, false),
//       onLeave: () => setGray(icon1Ref.current, true),
//     });

//     ScrollTrigger.create({
//       trigger: containerRef.current,
//       start: "25% top",
//       end: "45% top",
//       scrub: true,
//       onEnter: () => {
//         setGray(icon1Ref.current, true);
//         setGray(icon2Ref.current, false);
//       },
//       onLeave: () => setGray(icon2Ref.current, true),
//     });

//     ScrollTrigger.create({
//       trigger: containerRef.current,
//       start: "45% top",
//       end: "65% top",
//       scrub: true,
//       onEnter: () => {
//         setGray(icon2Ref.current, true);
//         setGray(icon3Ref.current, false);
//       },
//       onLeave: () => setGray(icon3Ref.current, true),
//     });

//     // 🌟 NEW: When extra icons appear at the end, all 3 main icons glow together
//     ScrollTrigger.create({
//       trigger: containerRef.current,
//       start: "75% top",
//       end: "100% bottom",
//       scrub: true,
//       onEnter: () => {
//         [icon1Ref.current, icon2Ref.current, icon3Ref.current].forEach((el) =>
//           setGray(el, false)
//         );
//       },
//       onEnterBack: () => {
//         [icon1Ref.current, icon2Ref.current, icon3Ref.current].forEach((el) =>
//           setGray(el, false)
//         );
//       },
//     });

//     return () => ScrollTrigger.getAll().forEach((t) => t.kill());
//   }, [navRef]);

//   return (
//     <div
//       ref={containerRef}
//       className="relative bg-[#051318] min-h-[400vh] overflow-hidden"
//     >
//       {/* Scroll indicator */}
//       <div
//         ref={scrollMessageRef}
//         className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none flex flex-col items-center space-y-2"
//       >
//         <div className="text-slate-400 text-sm font-medium tracking-wide">
//           SCROLL TO EXPLORE
//         </div>
//         <DropletIcon className="w-6 h-6 text-slate-400 animate-bounce" />
//       </div>

//       {/* 🌫️ SVG Cloud layers */}
//       <div
//         className="fixed inset-0 pointer-events-none overflow-hidden"
//         style={{ filter: "blur(1px)" }}
//       >
//         <div
//           ref={cloud1Ref}
//           className="absolute"
//           style={{
//             width: "200vw",
//             height: "100vh",
//             top: 0,
//             left: 0,
//             mixBlendMode: "screen",
//           }}
//         >
//           <CloudSVG1
//             style={{ width: "100%", height: "100%", filter: "blur(60px)" }}
//           />
//         </div>
//         <div
//           ref={cloud2Ref}
//           className="absolute"
//           style={{
//             width: "200vw",
//             height: "100vh",
//             top: 0,
//             left: 0,
//             mixBlendMode: "screen",
//           }}
//         >
//           <CloudSVG2
//             style={{ width: "100%", height: "100%", filter: "blur(70px)" }}
//           />
//         </div>
//         <div
//           ref={cloud3Ref}
//           className="absolute"
//           style={{
//             width: "200vw",
//             height: "100vh",
//             top: 0,
//             left: 0,
//             mixBlendMode: "screen",
//           }}
//         >
//           <CloudSVG3
//             style={{ width: "100%", height: "100%", filter: "blur(65px)" }}
//           />
//         </div>
//         <div
//           ref={cloud4Ref}
//           className="absolute"
//           style={{
//             width: "200vw",
//             height: "100vh",
//             top: 0,
//             left: 0,
//             mixBlendMode: "screen",
//           }}
//         >
//           <CloudSVG1
//             style={{ width: "100%", height: "100%", filter: "blur(75px)" }}
//           />
//         </div>
//         <div
//           ref={cloud5Ref}
//           className="absolute"
//           style={{
//             width: "200vw",
//             height: "100vh",
//             top: 0,
//             left: 0,
//             mixBlendMode: "screen",
//           }}
//         >
//           <CloudSVG2
//             style={{ width: "100%", height: "100%", filter: "blur(68px)" }}
//           />
//         </div>
//         <div
//           ref={cloud6Ref}
//           className="absolute"
//           style={{
//             width: "200vw",
//             height: "100vh",
//             top: 0,
//             left: 0,
//             mixBlendMode: "screen",
//           }}
//         >
//           <CloudSVG3
//             style={{ width: "100%", height: "100%", filter: "blur(72px)" }}
//           />
//         </div>
//       </div>

//       {/* SVG Icons */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         <div
//           ref={icon1Ref}
//           className="absolute w-30 h-30 top-10 left-16 sm:w-40 sm:h-40 lg:w-56 lg:h-56 opacity-0"
//         >
//           <MysticalIcon1 className="w-full h-full" />
//         </div>
//         <div
//           ref={icon2Ref}
//           className="absolute w-30 h-30 top-50 sm:w-40 sm:h-40 right-20 lg:w-72 lg:h-72 opacity-0"
//         >
//           <MysticalIcon2 className="w-full h-full" />
//         </div>
//         <div
//           ref={icon3Ref}
//           className="absolute w-30 h-30 bottom-10 sm:w-40 sm:h-40 left-20 lg:w-64 lg:h-64 opacity-0"
//         >
//           <MysticalIcon3 className="w-full h-full" />
//         </div>

//         {[
//           [0, "top-1/4 left-[65%] w-25 h-25 sm:w-35 sm:h-35 lg:w-44 lg:h-44", 1],
//           [1, "top-[38%] left-[18%] w-25 h-25 sm:w-35 sm:h-35 lg:w-48 lg:h-48", 2],
//           [2, "bottom-[22%] right-[28%] w-25 h-25 sm:w-35 sm:h-35 lg:w-60 lg:h-60", 3],
//           [3, "top-2 left-1/2 -translate-x-1/2 w-25 h-25 sm:w-35 sm:h-35 lg:w-52 lg:h-52", 1],
//           [4, "bottom-10 left-[42%] w-25 h-25 sm:w-35 sm:h-35 lg:w-48 lg:h-48", 2],
//           [5, "top-[50%] right-[50%] w-25 h-25 sm:w-35 sm:h-35 lg:w-40 lg:h-40", 3],
//         ].map(([i, pos, iconType]) => (
//           <div
//             key={i as number}
//             ref={(el: HTMLDivElement | null) => {
//               extraIconsRef.current[i as number] = el;
//             }}
//             className={`absolute ${pos} opacity-0`}
//           >
//             {iconType === 1 && <MysticalIcon1 className="w-full h-full" />}
//             {iconType === 2 && <MysticalIcon2 className="w-full h-full" />}
//             {iconType === 3 && <MysticalIcon3 className="w-full h-full" />}
//           </div>
//         ))}
//       </div>

//       {/* 🌟 Main content */}
//       <div
//         ref={contentRef}
//         className="fixed inset-0 flex items-center justify-center opacity-0 z-40"
//       >
//         <div className="text-center space-y-8 px-4">
//           <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold gradient-text">
//             <span className="gradient-text">Welcome to</span>
//             <br />
//             <span className="gradient-text">Yhe Silk Road</span>
//           </h1>
//           <p className="text-md sm:text-lg md:text-xl text-[#B59652] max-w-2xl mx-auto">
//             Collect. Trade. Discover the Unknown.
//           </p>
//           <HomeButton text="ENTER NOW" onClick={onEnterNow} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;




"use client";

import React, { useState, useEffect } from "react";
import HomeButton from "../components/button/HomeButton";

type HomePageProps = {
  onEnterNow: () => void;
  navRef: React.RefObject<HTMLElement | null>;
};

const HomePage: React.FC<HomePageProps> = ({ onEnterNow }) => {
  const [bgLoaded, setBgLoaded] = useState(false);

  // Preload background
  useEffect(() => {
    const img = new Image();
    img.src = "/home/homebg.png";
    img.onload = () => setBgLoaded(true);
  }, []);

  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat transition-opacity duration-700 ease-out"
      style={{
        backgroundImage: bgLoaded ? "url('/home/homebg.png')" : "none",
        backgroundColor: "#001117", // fallback so no white flash
      }}
    >
      {/* Optional overlay for better text contrast */}
      {bgLoaded && <div className="absolute inset-0 bg-black/40"></div>}

      {/* Main content */}
      <div className="relative z-10 text-center space-y-8 px-4">
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold text-white drop-shadow-lg">
          <span className="gradient-text">Welcome to</span> <br />
          <span className="gradient-text">The Silk Road</span>
        </h1>
        <p className="text-md sm:text-lg md:text-xl text-[#d4b87a] max-w-2xl mx-auto">
          Collect. Trade. Discover the Unknown.
        </p>
        <HomeButton text="ENTER NOW" onClick={onEnterNow} />
      </div>
    </div>
  );
};

export default HomePage;

