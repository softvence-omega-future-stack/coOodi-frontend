import { useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Shop from './pages/Shop';
import HomePage from './pages/Home';
import Tiers from './pages/Tiers';
import FAQ from './pages/Faq';
import Contact from './pages/Contact';
import gsap from 'gsap';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// Register the plugin
gsap.registerPlugin(ScrollToPlugin);

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const navRef = useRef<HTMLElement>(null);

  const handleEnterNow = () => {
    gsap.to(window, { scrollTo: 0, duration: 0.5 });
    setCurrentPage('shop');
  };

  interface HandleNavClick {
    (page: string): void;
  }

  const handleNavClick: HandleNavClick = (page) => {
    gsap.to(window, { scrollTo: 0, duration: 0.5 });
    setCurrentPage(page);
  };

  return (
    <div>
      <Navbar currentPage={currentPage} onNavigate={handleNavClick} navRef={navRef} />
      
      {currentPage === 'home' && <HomePage onEnterNow={handleEnterNow} navRef={navRef} />}
      {currentPage === 'shop' && <Shop />}
      {currentPage === 'tiers' && <Tiers />}
      {currentPage === 'faq' && <FAQ />}
      {currentPage === 'contact' && <Contact />}
    </div>
  );
};

export default App;