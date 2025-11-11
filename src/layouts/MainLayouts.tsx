// src/layouts/MainLayouts.tsx
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import FogTransition from "../components/FogTransition"; // ✅ add this
import { useRef, useEffect } from "react";

const Layout = () => {
  const navRef = useRef<HTMLElement>(null);
  const location = useLocation();

  useEffect(() => {
    if (navRef.current) {
      if (location.pathname === "/") {
        navRef.current.style.opacity = "1";
      } else {
        navRef.current.style.opacity = "1";
        navRef.current.style.transform = "translateY(0px)";
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen text-slate-100">
      <Navbar navRef={navRef} />

      {/* ✅ Fog transition overlay */}
      <FogTransition />

      {/* Main content */}
      <Outlet />
    </div>
  );
};

export default Layout;
