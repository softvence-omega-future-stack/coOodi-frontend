import React, { useState } from 'react';
import { ChevronDown, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router';



interface NavbarProps {
  currentPage: string;
  onNavigate: (path: string) => void;
  navRef: React.RefObject<HTMLElement | null>;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, navRef }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50"
      style={{ opacity: currentPage === 'home' ? 0 : 1 }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between backdrop-blur-md bg-transparent px-6 py-3">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => onNavigate('/')}>
            <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400 bg-clip-text text-transparent text-2xl font-bold">The</span>
            <span className="bg-gradient-to-r from-rose-400 to-amber-400 bg-clip-text text-transparent text-2xl font-bold">Silk Road</span>
          </div>

          <div className="hidden md:flex space-x-8">
            <Link to={"/shop"} className={`${currentPage === 'shop' ? 'text-amber-400 font-bold' : 'text-slate-300'} hover:text-amber-400 transition-colors`}>Shop</Link>
            <Link to={"/tiers"} className={`${currentPage === 'tiers' ? 'text-amber-400 font-bold' : 'text-slate-300'} hover:text-amber-400 transition-colors`}>Tiers</Link>
            <Link to={"/faq"} className={`${currentPage === 'faq' ? 'text-amber-400 font-bold' : 'text-slate-300'} hover:text-amber-400 transition-colors`}>FAQ</Link>
            <Link to={"/contact"} className={`${currentPage === 'contact' ? 'text-amber-400 font-bold' : 'text-slate-300'} hover:text-amber-400 transition-colors`}>Contact</Link>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-teal-500/20 px-4 py-2 rounded-lg border border-teal-500/30">
              <span className="text-teal-400 font-bold">$22,450</span>
            </div>
            
            <div className="relative">
              <button 
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="p-2 hover:bg-slate-800/50 rounded-lg transition-colors flex items-center space-x-1"
              >
                <ShoppingBag className="w-6 h-6 text-amber-400" />
                <ChevronDown className={`w-4 h-4 text-amber-400 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-gradient-to-b from-amber-900 to-amber-950 rounded-lg shadow-xl overflow-hidden border border-amber-600/30">
                  <button 
                    onClick={() => setDropdownOpen(false)}
                    className="block w-full text-left px-6 py-3 text-amber-100 hover:bg-amber-800/50 transition-colors"
                  >
                    My Account
                  </button>
                  <button 
                    onClick={() => { setDropdownOpen(false); onNavigate('/tiers'); }}
                    className="block w-full text-left px-6 py-3 text-amber-100 hover:bg-amber-800/50 transition-colors"
                  >
                    Tiers
                  </button>
                  <button 
                    onClick={() => setDropdownOpen(false)}
                    className="block w-full text-left px-6 py-3 text-amber-100 hover:bg-amber-800/50 transition-colors border-t border-amber-700/30"
                  >
                    Log Out
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;