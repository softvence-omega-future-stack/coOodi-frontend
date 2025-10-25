
import React, { useRef } from 'react';
import { gsap } from 'gsap';

interface AccountButtonProps {
  text?: string;
  onClick?: () => void;
  className?: string;
}

const AccountButton: React.FC<AccountButtonProps> = ({ 
  text = "ADD TO BAG",
  onClick,
  className = ""
}) => {
  const textRef = useRef<HTMLSpanElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMouseEnter = () => {
    if (textRef.current) {
      const tl = gsap.timeline();
      
      tl.to(textRef.current, {
        y: -50,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in"
      })
      .set(textRef.current, {
        y: 50
      })
      .to(textRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    }
  };

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      className={`relative px-4 py-2 bg-gradient-to-b from-[#6b1a1a] to-[#4a0d0d] rounded-full border-2 border-[#9F854B] overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(193,122,74,0.5)] hover:border-[#d4995f] ${className}`}
      style={{
        boxShadow: '0 0 20px rgba(193, 122, 74, 0.3), inset 0 2px 10px rgba(0,0,0,0.5)'
      }}
    >
      <span 
        ref={textRef}
        className="block text-[#d4b896] text-sm tracking-[0.08em] relative text-nowrap"
        style={{
          textShadow: '2px 2px 4px rgba(0,0,0,0.7)'
        }}
      >
        {text}
      </span>
    </button>
  );
};


export default AccountButton;