import React, { useEffect, useRef} from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DropletIcon } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// HomePage Component
type HomePageProps = {
  onEnterNow: () => void;
  navRef: React.RefObject<HTMLElement | null>;
};

const HomePage: React.FC<HomePageProps> = ({ onEnterNow, navRef }) => {
  const containerRef = useRef(null);
  const icon1Ref = useRef(null);
  const icon2Ref = useRef(null);
  const icon3Ref = useRef(null);
  const extraIconsRef = useRef<(HTMLDivElement | null)[]>([]);
  const contentRef = useRef(null);
  const scrollMessageRef = useRef(null); // Add ref for scroll message
  
  useEffect(() => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    gsap.to(window, { scrollTo: 0, duration: 0.8, ease: "power2.out" });

    // Animate scroll message to hide when first icon animation starts
    gsap.fromTo(
      scrollMessageRef.current,
      { opacity: 1, scale: 1 },
      {
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '5% top',
          scrub: 0.5,
        },
      }
    );

    gsap.fromTo(
      icon1Ref.current,
      { opacity: 0, scale: 0.5, rotation: 0 },
      {
        opacity: 1,
        scale: 1,
        rotation: 360,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '20% top',
          scrub: 1,
        },
      }
    );

    gsap.to(icon1Ref.current, {
      scale: 1.1,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    });

    gsap.fromTo(
      icon2Ref.current,
      { opacity: 0, scale: 0.5, rotation: 0 },
      {
        opacity: 1,
        scale: 1,
        rotation: -360,
        scrollTrigger: {
          trigger: containerRef.current,
          start: '20% top',
          end: '35% top',
          scrub: 1,
        },
      }
    );

    gsap.to(icon2Ref.current, {
      x: 30,
      y: -30,
      rotation: 120,
      duration: 8,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    gsap.fromTo(
      icon3Ref.current,
      { opacity: 0, scale: 0.5, rotation: 0 },
      {
        opacity: 1,
        scale: 1,
        rotation: 360,
        scrollTrigger: {
          trigger: containerRef.current,
          start: '35% top',
          end: '50% top',
          scrub: 1,
        },
      }
    );

    gsap.to(icon3Ref.current, {
      scale: 1.15,
      opacity: 0.8,
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    });

    extraIconsRef.current.forEach((icon, index) => {
      if (icon) {
        gsap.fromTo(
          icon,
          { opacity: 0, scale: 0.5, rotation: 0 },
          {
            opacity: 1,
            scale: 1,
            rotation: 360,
            duration: 1.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: '50% top',
              end: '55% top',
              scrub: 0.5,
            },
            delay: index * 0.1,
          }
        );

        gsap.to(icon, {
          y: -30,
          rotation: 90,
          duration: 10 + index * 2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      }
    });

    gsap.fromTo(
      navRef.current,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: containerRef.current,
          start: '50% top',
          end: '60% top',
          scrub: 1,
        },
      }
    );

    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 100, scale: 0.8 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: '60% top',
          end: '80% top',
          scrub: 1,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [navRef]);

  return (
    <div ref={containerRef} className="relative bg-[#001117] min-h-[400vh]">
      {/* Scroll to Explore Message - Initially visible */}
      <div 
        ref={scrollMessageRef}
        className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none flex flex-col items-center space-y-2"
      >
        <div className="text-slate-400 text-sm font-medium tracking-wide" >SCROLL TO EXPLORE</div>
        <DropletIcon className="w-6 h-6 text-slate-400 animate-bounce" />
      </div>

      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Top Left */}
        <div ref={icon1Ref} className="absolute top-10 left-16 w-56 h-56 opacity-0">
          <img src="/Vector.png" alt="1" className="opacity-[0.4]" />
        </div>

        {/* Top Right */}
        <div ref={icon2Ref} className="absolute top-50 right-20 w-72 h-72 opacity-0">
          <img src="/Vector2.png" alt="2" className="opacity-[0.35]" />
        </div>

        {/* Bottom Left */}
        <div ref={icon3Ref} className="absolute bottom-10 left-20 w-64 h-64 opacity-0">
          <img src="/Vector3.png" alt="3" className="opacity-[0.4]" />
        </div>

        {/* Floating extras */}
        <div ref={(el) => { extraIconsRef.current[0] = el; }} className="absolute top-1/4 left-[65%] w-44 h-44 opacity-0">
          <img src="/Vector4.png" alt="" className="opacity-[0.45]" />
        </div>

        <div ref={(el) => { extraIconsRef.current[1] = el; }} className="absolute top-[38%] left-[18%] w-48 h-48 opacity-0">
          <img src="/Vector.png" alt="" className="opacity-[0.35]" />
        </div>

        <div ref={(el) => { extraIconsRef.current[2] = el; }} className="absolute bottom-[22%] right-[28%] w-60 h-60 opacity-0">
          <img src="/Vector2.png" alt="" className="opacity-[0.3]" />
        </div>

        <div ref={(el) => { extraIconsRef.current[3] = el; }} className="absolute top-2 left-1/2 -translate-x-1/2 w-52 h-52 opacity-0">
          <img src="/Vector3.png" alt="" className="opacity-[0.4]" />
        </div>

        <div ref={(el) => { extraIconsRef.current[4] = el; }} className="absolute bottom-10 left-[42%] w-48 h-48 opacity-0">
          <img src="/Vector4.png" alt="" className="opacity-[0.35]" />
        </div>

        <div ref={(el) => { extraIconsRef.current[5] = el; }} className="absolute top-[50%] right-[50%] w-40 h-40 opacity-0">
          <img src="/Vector.png" alt="" className="opacity-[0.4]" />
        </div>
      </div>

      <div ref={contentRef} className="fixed inset-0 flex items-center justify-center pointer-events-none opacity-0">
        <div className="text-center space-y-8 px-4">
          <h1 className="text-7xl md:text-8xl font-bold gradient-text">
            <span> Welcome to</span>
            <br />
            <span>Yhe Silk Road</span>
          </h1>
          <p className="text-xl text-[#B59652] max-w-2xl mx-auto">Collect. Trade. Discover the Unknown.</p>
          <button 
            onClick={onEnterNow}
            className="pointer-events-auto bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white px-12 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-rose-500/50 "
          >
            ENTER NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;