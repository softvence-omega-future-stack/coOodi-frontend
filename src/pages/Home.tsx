
import React, { useEffect, useRef} from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
  

  useEffect(() => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    gsap.to(window, { scrollBehavior: 'smooth', duration: 0 });

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
    <div ref={containerRef} className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 min-h-[400vh]">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div ref={icon1Ref} className="absolute top-8 left-8 w-64 h-64 opacity-0">
          <svg viewBox="0 0 200 200" className="w-full h-full text-teal-500/15">
            <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="2" fill="none" />
            <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="1" fill="none" />
            <circle cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="1" fill="none" />
            <line x1="100" y1="10" x2="100" y2="40" stroke="currentColor" strokeWidth="2" />
            <line x1="100" y1="160" x2="100" y2="190" stroke="currentColor" strokeWidth="2" />
            <line x1="10" y1="100" x2="40" y2="100" stroke="currentColor" strokeWidth="2" />
            <line x1="160" y1="100" x2="190" y2="100" stroke="currentColor" strokeWidth="2" />
            <polygon points="100,60 110,100 100,140 90,100" fill="currentColor" />
          </svg>
        </div>

        <div ref={icon2Ref} className="absolute top-1/2 -translate-y-1/2 right-12 w-72 h-72 opacity-0">
          <svg viewBox="0 0 200 200" className="w-full h-full text-amber-500/15">
            <path d="M40,120 Q50,100 70,110 Q80,100 90,110 L95,140 L85,145 L80,140 L75,145 L70,140 L45,140 Z" fill="currentColor" />
            <circle cx="60" cy="105" r="15" fill="currentColor" />
            <path d="M100,115 Q110,95 130,105 Q140,95 150,105 L155,135 L145,140 L140,135 L135,140 L130,135 L105,135 Z" fill="currentColor" />
            <circle cx="120" cy="100" r="15" fill="currentColor" />
            <line x1="30" y1="145" x2="160" y2="145" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
          </svg>
        </div>

        <div ref={icon3Ref} className="absolute bottom-12 left-12 w-64 h-64 opacity-0">
          <svg viewBox="0 0 200 200" className="w-full h-full text-rose-500/15">
            <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="2" fill="none" />
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
              <g key={angle} transform={`rotate(${angle} 100 100)`}>
                <path d="M100,30 Q110,50 100,70 Q90,50 100,30" fill="currentColor" />
                <circle cx="100" cy="55" r="5" fill="currentColor" />
              </g>
            ))}
            <circle cx="100" cy="100" r="20" fill="currentColor" />
          </svg>
        </div>

        <div ref={(el) => { extraIconsRef.current[0] = el; }} className="absolute top-16 right-1/4 w-40 h-40 opacity-0">
          <svg viewBox="0 0 200 200" className="w-full h-full text-purple-500/10">
            <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M100,40 L120,80 L100,120 L80,80 Z" fill="currentColor" />
          </svg>
        </div>

        <div ref={(el) => { extraIconsRef.current[1] = el; }} className="absolute top-1/3 left-1/4 w-48 h-48 opacity-0">
          <svg viewBox="0 0 200 200" className="w-full h-full text-cyan-500/10">
            <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="3" fill="none" />
            <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="2" fill="none" />
            <circle cx="100" cy="100" r="20" fill="currentColor" />
          </svg>
        </div>

        <div ref={(el) => { extraIconsRef.current[2] = el; }} className="absolute bottom-1/4 right-1/3 w-56 h-56 opacity-0">
          <svg viewBox="0 0 200 200" className="w-full h-full text-indigo-500/10">
            <polygon points="100,20 180,180 20,180" stroke="currentColor" strokeWidth="2" fill="none" />
            <polygon points="100,60 140,140 60,140" fill="currentColor" />
          </svg>
        </div>

        <div ref={(el) => { extraIconsRef.current[3] = el; }} className="absolute top-1/4 left-1/2 -translate-x-1/2 w-44 h-44 opacity-0">
          <svg viewBox="0 0 200 200" className="w-full h-full text-emerald-500/10">
            <rect x="50" y="50" width="100" height="100" stroke="currentColor" strokeWidth="2" fill="none" transform="rotate(45 100 100)" />
            <circle cx="100" cy="100" r="30" fill="currentColor" />
          </svg>
        </div>

        <div ref={(el) => { extraIconsRef.current[4] = el; }} className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-52 h-52 opacity-0">
          <svg viewBox="0 0 200 200" className="w-full h-full text-orange-500/10">
            <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="2" fill="none" />
            {[0, 60, 120, 180, 240, 300].map((angle) => (
              <circle key={angle} cx={100 + 60 * Math.cos(angle * Math.PI / 180)} cy={100 + 60 * Math.sin(angle * Math.PI / 180)} r="10" fill="currentColor" />
            ))}
          </svg>
        </div>

        <div ref={(el) => { extraIconsRef.current[5] = el; }} className="absolute top-2/3 right-1/4 w-36 h-36 opacity-0">
          <svg viewBox="0 0 200 200" className="w-full h-full text-pink-500/10">
            {[0, 72, 144, 216, 288].map((angle) => (
              <line key={angle} x1="100" y1="100" x2={100 + 80 * Math.cos(angle * Math.PI / 180)} y2={100 + 80 * Math.sin(angle * Math.PI / 180)} stroke="currentColor" strokeWidth="3" />
            ))}
            <circle cx="100" cy="100" r="25" fill="currentColor" />
          </svg>
        </div>
      </div>

      <div ref={contentRef} className="fixed inset-0 flex items-center justify-center pointer-events-none opacity-0">
        <div className="text-center space-y-8 px-4">
          <h1 className="text-7xl md:text-8xl font-bold">
            <span className="text-amber-400">Wel</span>
            <span className="text-teal-400">come</span>
            <span className="text-rose-400"> to</span>
            <br />
            <span className="text-amber-400">Y</span>
            <span className="text-rose-400">he </span>
            <span className="text-teal-400">Silk</span>
            <span className="text-rose-400"> Road</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">Collect. Trade. Discover the Unknown.</p>
          <button 
            onClick={onEnterNow}
            className="pointer-events-auto bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white px-12 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-rose-500/50"
          >
            ENTER NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;