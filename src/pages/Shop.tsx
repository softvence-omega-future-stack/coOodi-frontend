import { useEffect } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Shop = () => {
  useEffect(() => {
    gsap.fromTo(
      '.shop-item',
      { opacity: 0, y: 50, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
      }
    );
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-24 pb-12 px-4">
      <h1 className="text-6xl font-bold text-center mb-16 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 bg-clip-text text-transparent">
        Shop
      </h1>
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="shop-item border-2 border-amber-600/50 rounded-lg p-8 bg-slate-900/30 backdrop-blur-sm hover:border-amber-500 transition-all">
          <div className="flex flex-col items-center space-y-4">
            <svg className="w-32 h-32 text-amber-500" viewBox="0 0 100 100" fill="none" stroke="currentColor">
              <rect x="20" y="10" width="60" height="70" strokeWidth="2" rx="2" />
              <circle cx="50" cy="40" r="12" strokeWidth="2" />
              <path d="M35 55 Q50 65 65 55" strokeWidth="2" />
              <line x1="30" y1="75" x2="70" y2="75" strokeWidth="2" />
            </svg>
            <h3 className="text-2xl font-semibold bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">Poster</h3>
            <button className="bg-gradient-to-r from-red-800 to-red-900 hover:from-red-700 hover:to-red-800 text-white px-8 py-2 rounded-full transition-all">ADD TO BAG</button>
          </div>
        </div>

        <div className="shop-item border-2 border-amber-600/50 rounded-lg p-8 bg-slate-900/30 backdrop-blur-sm hover:border-amber-500 transition-all">
          <div className="flex flex-col items-center space-y-4">
            <svg className="w-32 h-32 text-amber-500" viewBox="0 0 100 100" fill="none" stroke="currentColor">
              <path d="M30 30 Q25 25 20 30 L20 50 L30 55 L30 30 Z" strokeWidth="2" />
              <path d="M70 30 Q75 25 80 30 L80 50 L70 55 L70 30 Z" strokeWidth="2" />
              <rect x="30" y="30" width="40" height="50" strokeWidth="2" rx="5" />
              <circle cx="50" cy="45" r="8" strokeWidth="2" />
            </svg>
            <h3 className="text-2xl font-semibold bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">Hoodie</h3>
            <button className="bg-gradient-to-r from-red-800 to-red-900 hover:from-red-700 hover:to-red-800 text-white px-8 py-2 rounded-full transition-all">ADD TO BAG</button>
          </div>
        </div>

        <div className="shop-item border-2 border-amber-600/50 rounded-lg p-8 bg-slate-900/30 backdrop-blur-sm hover:border-amber-500 transition-all">
          <div className="flex flex-col items-center space-y-4">
            <svg className="w-32 h-32 text-amber-500" viewBox="0 0 100 100" fill="none" stroke="currentColor">
              <circle cx="35" cy="45" r="15" strokeWidth="2" />
              <circle cx="50" cy="40" r="15" strokeWidth="2" />
              <circle cx="55" cy="55" r="15" strokeWidth="2" />
            </svg>
            <h3 className="text-2xl font-semibold bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">Token Pack</h3>
            <button className="bg-gradient-to-r from-red-800 to-red-900 hover:from-red-700 hover:to-red-800 text-white px-8 py-2 rounded-full transition-all">ADD TO BAG</button>
          </div>
        </div>

        <div className="shop-item border-2 border-amber-600/50 rounded-lg p-8 bg-slate-900/30 backdrop-blur-sm hover:border-amber-500 transition-all">
          <div className="flex flex-col items-center space-y-4">
            <svg className="w-32 h-32 text-amber-500" viewBox="0 0 100 100" fill="none" stroke="currentColor">
              <circle cx="50" cy="50" r="25" strokeWidth="3" />
              <path d="M50 30 L55 45 L70 45 L58 55 L63 70 L50 60 L37 70 L42 55 L30 45 L45 45 Z" strokeWidth="2" />
            </svg>
            <h3 className="text-2xl font-semibold bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">Collectible Coin ($25)</h3>
            <button className="bg-gradient-to-r from-red-800 to-red-900 hover:from-red-700 hover:to-red-800 text-white px-8 py-2 rounded-full transition-all">ADD TO BAG</button>
          </div>
        </div>

        <div className="shop-item md:col-span-2 border-2 border-amber-600/50 rounded-lg p-8 bg-slate-900/30 backdrop-blur-sm hover:border-amber-500 transition-all">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <svg className="w-32 h-32 text-amber-500" viewBox="0 0 100 100" fill="none" stroke="currentColor">
              <rect x="25" y="40" width="50" height="40" strokeWidth="2" rx="2" />
              <path d="M25 40 L50 25 L75 40" strokeWidth="2" />
              <line x1="50" y1="25" x2="50" y2="80" strokeWidth="2" />
              <circle cx="50" cy="60" r="5" fill="currentColor" />
            </svg>
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-semibold bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">Mystery Box</h3>
              <p className="text-xl text-amber-500">$50</p>
            </div>
            <button className="bg-gradient-to-r from-red-800 to-red-900 hover:from-red-700 hover:to-red-800 text-white px-8 py-2 rounded-full transition-all">ADD TO BAG</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Shop;