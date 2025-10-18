import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";

export default function FogTransition() {
  const containerRef = useRef<HTMLDivElement>(null);
  const fog1Ref = useRef<HTMLDivElement>(null);
  const fog2Ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const container = containerRef.current;
    const fog1 = fog1Ref.current;
    const fog2 = fog2Ref.current;
    if (!container || !fog1 || !fog2) return;

    const prevPath = sessionStorage.getItem("prevPath");
    const isEnteringShop = prevPath === "/" && location.pathname === "/shop";

    if (isEnteringShop) {
      setActive(true);
      document.body.style.overflow = "hidden";

      gsap.set(container, { display: "block", opacity: 1 });
      gsap.set([fog1, fog2], { opacity: 0, scale: 1.3 });

      const mm = gsap.matchMedia();

      mm.add(
        {
          // define responsive breakpoints
          isDesktop: "(min-width: 1024px)",
          isTablet: "(min-width: 640px) and (max-width: 1023px)",
          isMobile: "(max-width: 639px)",
        },
        (context) => {
          const { isTablet, isMobile } = context.conditions!;
          let moveX = "-100%";
          let moveY = "100%";
          let targetX = "30%";
          let targetY = "-30%";
          let fog2OffsetX = "-20%";
          let fog2OffsetY = "-20%";

          // Adjust motion depending on screen size
          if (isTablet) {
            moveX = "-80%";
            moveY = "80%";
            targetX = "20%";
            targetY = "-20%";
            fog2OffsetX = "-10%";
            fog2OffsetY = "-10%";
          }
          if (isMobile) {
            moveX = "-60%";
            moveY = "60%";
            targetX = "10%";
            targetY = "-10%";
            fog2OffsetX = "-5%";
            fog2OffsetY = "-5%";
          }

          gsap.set([fog1, fog2], { x: moveX, y: moveY });

          const tl = gsap.timeline({
            onComplete: () => {
              gsap.to(container, {
                opacity: 0,
                duration: 1.2,
                ease: "power2.inOut",
                onComplete: () => {
                  gsap.set(container, { display: "none" });
                  setActive(false);
                  document.body.style.overflow = "auto";
                },
              });
            },
          });

          tl.to(fog1, {
            x: targetX,
            y: targetY,
            opacity: 1,
            duration: 1.8,
            ease: "power2.out",
          })
            .to(
              fog2,
              {
                x: fog2OffsetX,
                y: fog2OffsetY,
                opacity: 0.8,
                duration: 2.2,
                ease: "power2.out",
              },
              0.3
            )
            .to(fog1, {
              scale: 1.1,
              duration: 1.8,
              ease: "sine.inOut",
            }, 1);
        }
      );
    }

    sessionStorage.setItem("prevPath", location.pathname);
  }, [location.pathname]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] overflow-hidden pointer-events-none bg-[#051318]"
      style={{ display: active ? "block" : "none" }}
    >
      {/* Front fog */}
      <div
        ref={fog1Ref}
        className="absolute inset-0 bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: "url('/fog1.png')",
          filter: "none",
        }}
      />

      {/* Back fog */}
      <div
        ref={fog2Ref}
        className="absolute inset-0 bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: "url('/fog1.png')",
          filter: "none",
          transform: "scale(3.5)",
        }}
      />
    </div>
  );
}
