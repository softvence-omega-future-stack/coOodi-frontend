import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useRef, useEffect } from "react";

const Layout = () => {
  const navRef = useRef<HTMLElement>(null);
  const location = useLocation();

  // Always make navbar visible on all routes except home
  useEffect(() => {
    if (navRef.current) {
      if (location.pathname === "/") {
        navRef.current.style.opacity = "0";
      } else {
        navRef.current.style.opacity = "1";
        navRef.current.style.transform = "translateY(0px)";
      }
    }
  }, [location]);

  return (
    <div className=" min-h-screen text-slate-100">
      <Navbar navRef={navRef} />
      <Outlet /> {/* This renders the current page */}
    </div>
  );
};

export default Layout;
