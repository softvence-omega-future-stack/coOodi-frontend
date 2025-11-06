import React, { useState, useEffect } from "react";
import { LockKeyhole, Menu, X } from "lucide-react";
import { useNavigate, useLocation, Link } from "react-router-dom";

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

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  };

  const NavLink = ({
    to,
    children,
    className = "",
  }: {
    to: string;
    children: React.ReactNode;
    className?: string;
  }) => (
    <button
      onClick={() => {
        navigate(to);
        closeMobileMenu();
      }}
      className={`${
        currentPath === to
          ? "text-[#B59652] font-bold"
          : "text-slate-300 hover:text-[#B59652]"
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
        {/* ✅ Navbar height fixed so dropdown never moves it */}
        <div className="flex items-center justify-between h-[64px] relative max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
          {/* Logo */}
          <div
            className="flex items-center space-x-2 cursor-pointer flex-shrink-0"
            onClick={() => {
              navigate("/");
              closeMobileMenu();
            }}
          >
            <span className="gradient-text text-lg sm:text-2xl lg:text-3xl font-semibold">
              Yhe Silk Road
            </span>
          </div>

          {/* Mobile Menu Toggle */}
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

          {/* Desktop Links */}
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

          {/* Wallet + Dropdown */}
          <div className="hidden lg:flex items-center space-x-3 relative">
            <div className="flex items-center space-x-2 min-w-[90px]">
              <span className="gradient-text font-semibold text-lg">
                <img
                  src="/nav/nav-dol.svg"
                  alt="Wallet Icon"
                  className="w-5 h-4 inline-block mr-1"
                />
                $22,450
              </span>
            </div>

            {/* User Menu */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="p-2 hover:bg-slate-800/50 rounded-lg transition-colors flex items-center space-x-1"
              >
                <img
                  src="/user.svg"
                  alt="User Menu"
                  className="w-8 h-8 text-amber-400"
                />
                <img
                  src="/dropdown.svg"
                  alt="Dropdown"
                  className={`w-5 h-5 text-amber-400 transition-transform ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* ✅ Fixed dropdown positioning */}
              {dropdownOpen && (
                <div
                  className="
                    chalk-dropdown
                    absolute right-0 top-[calc(100%+10px)]
                    w-56 z-[9999]
                    backdrop-blur-md shadow-xl
                  "
                >
                  <NavLink
                    to="/account"
                    className="block w-full text-left px-6 py-3  text-amber-300 hover:text-amber-300 transition-all duration-200"
                  >
                    My Account
                  </NavLink>
                  <NavLink
                    to="/tiers"
                    className="block w-full text-left px-6 py-3 text-amber-300 hover:text-amber-300 transition-all duration-200"
                  >
                    Tiers
                  </NavLink>
                  <Link to="/login">
                    <button
                      onClick={() => setDropdownOpen(false)}
                      className="w-full text-left px-6 py-3 border-t  text-slate-300 border-[#9F854B]/40 hover:text-amber-300 transition-all duration-200"
                    >
                      Log Out
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 bg-slate-900/95 backdrop-blur-md rounded-lg border border-slate-700/50 overflow-hidden w-[90%] max-w-sm mx-auto shadow-lg">
            <div className="py-2">
              <NavLink to="/shop" className="block w-full text-left px-4 py-3">
                Shop
              </NavLink>
              <NavLink to="/tiers" className="block w-full text-left px-4 py-3">
                Tiers
              </NavLink>
              <NavLink to="/faq" className="block w-full text-left px-4 py-3">
                FAQ
              </NavLink>
              <NavLink to="/contact" className="block w-full text-left px-4 py-3">
                Contact
              </NavLink>
              <NavLink
                to="/my-bag"
                className=" w-full text-left px-4 py-3 flex items-center"
              >
                <LockKeyhole className="w-4 h-4 mr-2" />
                My Bag
              </NavLink>
              <NavLink
                to="/account"
                className="block w-full text-left px-4 py-3 border-t border-slate-700/50"
              >
                My Account
              </NavLink>

              <div className="px-4 py-3 border-t border-slate-700/50">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 text-sm">Wallet Balance</span>
                  <span className="text-teal-400 font-bold">$22,450</span>
                </div>
              </div>
              <Link to="/login" className="text-slate-300">
                <button
                  onClick={() => closeMobileMenu()}
                  className="w-full text-left px-4 py-3 hover:bg-amber-800/50 transition-colors border-t border-slate-700/50"
                >
                  Log Out
                </button>
              </Link>
            </div>
          </div>
        )}
    </nav>
  );
};

export default Navbar;
