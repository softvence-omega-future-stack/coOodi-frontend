import { useRef } from "react";
import HomePage from "./pages/Home";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const App = () => {
  const navRef = useRef<HTMLElement>(null);

  const handleEnterNow = () => {
    gsap.to(window, { scrollTo: 0, duration: 0.5 });
    window.location.href = "/shop";
  };

  return <HomePage onEnterNow={handleEnterNow} navRef={navRef} />;
};

export default App;
