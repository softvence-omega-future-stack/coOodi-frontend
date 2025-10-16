import { useEffect } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Shop = () => {
  useEffect(() => {
    // Kill existing ScrollTriggers
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    // Animate shop items with ScrollTrigger
    gsap.fromTo(
      '.shop-item',
      { 
        opacity: 0, 
        y: 60, 
        scale: 0.85,
        rotationX: -10
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotationX: 0,
        duration: 0.8,
        stagger: {
          amount: 0.3,
          from: "start",
          grid: "auto",
          ease: "power2.out"
        },
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '.shop-grid',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        }
      }
    );

    // Hover animations for each item
    gsap.utils.toArray('.shop-item').forEach((item) => {
      const shopItem = item as HTMLElement;
      const btn = shopItem.querySelector('button');
      
      shopItem.addEventListener('mouseenter', () => {
        gsap.to(shopItem, {
          scale: 1.02,
          boxShadow: '0 10px 20px rgba(251, 191, 36, 0.3)',
          duration: 0.3,
          ease: 'power2.out'
        });
        gsap.to(btn, {
          scale: 1.05,
          y: -2,
          duration: 0.3,
          ease: 'power2.out'
        });
      });

      shopItem.addEventListener('mouseleave', () => {
        gsap.to(shopItem, {
          scale: 1,
          boxShadow: '0 0 0 rgba(251, 191, 36, 0)',
          duration: 0.3,
          ease: 'power2.out'
        });
        gsap.to(btn, {
          scale: 1,
          y: 0,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
    });

    // Title animation
    gsap.fromTo(
      'h1',
      { 
        opacity: 0, 
        y: -30,
        scale: 0.9 
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: 'h1',
          start: 'top 90%',
        }
      }
    );

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#001117] pt-22 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden ">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <svg className="absolute top-10 left-10 w-12 h-12 text-yellow-500/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 14v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
        <svg className="absolute top-20 right-10 w-10 h-10 text-yellow-500/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <svg className="absolute bottom-10 left-20 w-8 h-8 text-yellow-500/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      </div>

      <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-center mb-6 sm:mb-8 lg:mb-12">
        <span className='gradient-text' >Shop</span>
      </h1>
      
      <div className="shop-grid max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6">
        {/* Poster */}
        <div className="shop-item relative border-4 border-yellow-500/30 rounded-lg p-2 sm:p-3 lg:p-4 bg-slate-900/50 backdrop-blur-md hover:border-yellow-400 transition-all overflow-hidden">
          <div className="flex flex-col items-center space-y-4">
            <img src="/shop1.png" alt="Poster" className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 object-contain" />
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-yellow-400 text-center">Poster</h3>
            <button className="bg-gradient-to-r from-red-800 to-red-900 hover:from-red-700 hover:to-red-800 text-white px-16 py-2 rounded-full text-sm sm:text-base transition-all">
              ADD TO BAG
            </button>
          </div>
        </div>

        {/* Hoodie */}
        <div className="shop-item relative border-4 border-yellow-500/30 rounded-lg p-2 sm:p-3 lg:p-4 bg-slate-900/50 backdrop-blur-md hover:border-yellow-400 transition-all overflow-hidden">
          <div className="flex flex-col items-center space-y-4">
            <img src="/shop2.png" alt="Hoodie" className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 object-contain" />
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-yellow-400 text-center">Hoodie</h3>
            <button className="bg-gradient-to-r from-red-800 to-red-900 hover:from-red-700 hover:to-red-800 text-white px-16 py-2 rounded-full text-sm sm:text-base transition-all">
              ADD TO BAG
            </button>
          </div>
        </div>

        {/* Token Pack */}
        <div className="shop-item relative border-4 border-yellow-500/30 rounded-lg p-2 sm:p-3 lg:p-4 bg-slate-900/50 backdrop-blur-md hover:border-yellow-400 transition-all overflow-hidden">
          <div className="flex flex-col items-center space-y-4">
            <img src="/shop3.png" alt="Token Pack" className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 object-contain" />
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-yellow-400 text-center">Token Pack</h3>
            <button className="bg-gradient-to-r from-red-800 to-red-900 hover:from-red-700 hover:to-red-800 text-white px-16 py-2 rounded-full text-sm sm:text-base transition-all">
              ADD TO BAG
            </button>
          </div>
        </div>

        {/* Collectible Coin */}
        <div className="shop-item relative border-4 border-yellow-500/30 rounded-lg p-2 sm:p-3 lg:p-4 bg-slate-900/50 backdrop-blur-md hover:border-yellow-400 transition-all overflow-hidden">
          <div className="flex flex-col items-center space-y-4">
            <img src="/shop4.png" alt="Collectible Coin" className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 object-contain" />
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-yellow-400 text-center">Collectible Coin ($25)</h3>
            <button className="bg-gradient-to-r from-red-800 to-red-900 hover:from-red-700 hover:to-red-800 text-white px-16 py-2 rounded-full text-sm sm:text-base transition-all">
              ADD TO BAG
            </button>
          </div>
        </div>

        {/* Mystery Box - Full width */}
        <div className="shop-item relative col-span-full border-4 border-yellow-500/30 rounded-lg p-2 sm:p-3 lg:p-4 bg-slate-900/50 backdrop-blur-md hover:border-yellow-400 transition-all overflow-hidden">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <img src="/shop5.png" alt="Mystery Box" className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 object-contain" />
            <div className="text-center">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-yellow-400">Mystery Box</h3>
              <p className="text-lg sm:text-xl text-yellow-400 font-bold">$50</p>
            </div>
            <button className="bg-gradient-to-r from-red-800 to-red-900 hover:from-red-700 hover:to-red-800 text-white px-16 py-2 rounded-full text-sm sm:text-base transition-all">
              ADD TO BAG
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;