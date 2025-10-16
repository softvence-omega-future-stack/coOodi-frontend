import React, { useState, useEffect } from "react";
import { ChevronDown, LockKeyhole, ShoppingBag, Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

interface NavbarProps {
  navRef: React.RefObject<HTMLElement | null>;
}

const Navbar: React.FC<NavbarProps> = ({ navRef }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    if (navRef.current) {
      if (currentPath === "/") {
        navRef.current.style.opacity = "0";
      } else {
        navRef.current.style.opacity = "1";
        navRef.current.style.transform = "translateY(0px)";
      }
    }
  }, [currentPath, navRef]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  };

  const NavLink = ({ to, children, className = "" }: { to: string; children: React.ReactNode; className?: string }) => (
    <button
      onClick={() => {
        navigate(to);
        closeMobileMenu();
      }}
      className={`${
        currentPath === to
          ? "text-amber-400 font-bold"
          : "text-slate-300 hover:text-amber-400"
      } ${className} transition-colors`}
    >
      {children}
    </button>
  );

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 transition-opacity duration-500"
    >
      <div className="container mx-auto px-4 lg:px-6 py-3 lg:py-4">
        <div className="flex items-center justify-between backdrop-blur-md bg-transparent">
          {/* Logo */}
          <div
            className="flex items-center space-x-2 cursor-pointer flex-shrink-0"
            onClick={() => {
              navigate("/");
              closeMobileMenu();
            }}
          >
            <span className="gradient-text text-lg lg:text-[1.75rem] font-semibold">Yhe Silk Road</span>
          </div>

          {/* Mobile menu button - Only show on small screens */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="p-2 hover:bg-slate-800/50 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-slate-300" />
              ) : (
                <Menu className="w-6 h-6 text-slate-300" />
              )}
            </button>
          </div>

          {/* Desktop Links - Start from lg breakpoint */}
          <div className="hidden lg:flex items-center space-x-6">
            <NavLink to="/shop">Shop</NavLink>
            <NavLink to="/tiers">Tiers</NavLink>
            <NavLink to="/faq">FAQ</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/my-bag" className="flex items-center space-x-1">
              <LockKeyhole className="w-4 h-4" />
              My Bag
            </NavLink>
          </div>

          {/* Right section - Wallet and User Menu - Start from lg */}
          <div className="hidden lg:flex items-center space-x-3">
            <div className="flex items-center space-x-2 min-w-[90px]">
              <span className="gradient-text font-semibold text-md">$22,450</span>
            </div>

            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="p-2 hover:bg-slate-800/50 rounded-lg transition-colors flex items-center space-x-1"
              >
                <ShoppingBag className="w-6 h-6 text-amber-400" />
                <ChevronDown
                  className={`w-4 h-4 text-amber-400 transition-transform ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-gradient-to-b from-amber-900 to-amber-950 rounded-lg shadow-xl overflow-hidden border border-amber-600/30 z-50">
                  <NavLink to="/my-account" className="block w-full text-left px-6 py-3">
                    My Account
                  </NavLink>
                  <NavLink to="/tiers" className="block w-full text-left px-6 py-3">
                    Tiers
                  </NavLink>
                  <button
                    onClick={() => {
                      setDropdownOpen(false);
                      // Handle logout
                    }}
                    className="w-full text-left px-6 py-3 text-amber-100 hover:bg-amber-800/50 transition-colors border-t border-amber-700/30"
                  >
                    Log Out
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Menu - Show on screens smaller than lg */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 bg-slate-900/95 backdrop-blur-md rounded-lg border border-slate-700/50 overflow-hidden">
            <div className="py-2">
              <NavLink to="/shop" className="w-full text-left px-4 py-3">Shop</NavLink>
              <NavLink to="/tiers" className="w-full text-left px-4 py-3">Tiers</NavLink>
              <NavLink to="/faq" className="w-full text-left px-4 py-3">FAQ</NavLink>
              <NavLink to="/contact" className="w-full text-left px-4 py-3">Contact</NavLink>
              <NavLink to="/my-bag" className="w-full text-left px-4 py-3 flex items-center">
                <LockKeyhole className="w-4 h-4 mr-2" />
                My Bag
              </NavLink>
              <NavLink to="/my-account" className="w-full text-left px-4 py-3 border-t border-slate-700/50">
                My Account
              </NavLink>
              
              {/* Wallet Display */}
              <div className="px-4 py-3 border-t border-slate-700/50">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 text-sm">Wallet Balance</span>
                  <span className="text-teal-400 font-bold">$22,450</span>
                </div>
              </div>
              
              <button
                onClick={() => {
                  // Handle logout
                  closeMobileMenu();
                }}
                className="w-full text-left px-4 py-3 text-amber-100 hover:bg-amber-800/50 transition-colors border-t border-slate-700/50"
              >
                Log Out
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;