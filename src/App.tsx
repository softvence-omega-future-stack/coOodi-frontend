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


// import React, { useRef, useState } from "react";
// import HomePage from "./pages/Home";
// import gsap from "gsap";
// import { ScrollToPlugin } from "gsap/ScrollToPlugin";
// import PageTransition from "./components/PageTransition";

// gsap.registerPlugin(ScrollToPlugin);

// const App = () => {
//   const navRef = useRef<HTMLElement>(null);
//   const [showTransition, setShowTransition] = useState(false);

//   const handleEnterNow = () => {
//     gsap.to(window, { scrollTo: 0, duration: 0.6, ease: "power2.inOut" });

//     // start transition overlay animation
//     setShowTransition(true);
//   };

//   const handleTransitionComplete = () => {
//     // navigate AFTER animation completes
//     window.location.href = "/shop";
//   };

//   return (
//     <>
//       <HomePage onEnterNow={handleEnterNow} navRef={navRef} />

//       {showTransition && (
//         <PageTransition onComplete={handleTransitionComplete} />
//       )}
//     </>
//   );
// };

// export default App;
