import React, { useEffect, useRef } from "react";
import gsap from "gsap";

type PageTransitionProps = {
  onComplete: () => void;
};

const PageTransition: React.FC<PageTransitionProps> = ({ onComplete }) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const splashRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    const splash = splashRef.current;

    if (!overlay || !splash) return;

    const tl = gsap.timeline({
      defaults: { ease: "power4.inOut" },
      onComplete,
    });

    // prepare
    gsap.set(overlay, { opacity: 1 });
    gsap.set(splash, { scale: 0.3, opacity: 0 });

    // step 1: fade & scale in splash
    tl.to(splash, {
      opacity: .8,
      scale: 1,
      duration: 1.8,
      ease: "power3.out",
    });

    // step 2: slight hold (feels cinematic)
    tl.to({}, { duration: 0.3 });

    // step 3: fade overlay to black, then complete
    tl.to(overlay, {
      opacity: 0,
      duration: 1.2,
      ease: "power2.inOut",
    });

    return () => { tl.kill(); };
  }, [onComplete]);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9999] bg-black flex items-center justify-center opacity-0"
    >
      <img
        ref={splashRef}
        src="/sp.png"
        alt="Transition Splash"
        className="w-[130vw] h-[130vh] object-cover mix-blend-screen"
      />
    </div>
  );
};

export default PageTransition;
