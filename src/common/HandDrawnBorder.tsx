// HandDrawnBorder.tsx
import React from 'react';

const HandDrawnBorder = ({ children, className = "" }) => {
  return (
    <div className={`relative hand-drawn-border ${className}`}>
      {/* Outer border with scratch effect */}
      <div className="absolute inset-0 border-4 border-black rounded-lg 
                      [clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_100%)]
                      bg-gradient-to-b from-slate-900/30 to-transparent
                      before:absolute before:inset-0 before:border-[3px] 
                      before:border-dashed before:border-black/50 
                      before:rounded-lg before:[mask-image:radial-gradient(circle_at_center,transparent_40%,black_60%)]
                      after:absolute after:inset-2 after:border-2 after:border-dotted 
                      after:border-amber-600/30 after:rounded-lg
                      animate-hand-scratch">
      </div>
      
      {/* Content */}
      <div className="relative z-10 p-6">
        {children}
      </div>
      
      <style jsx>{`
        @keyframes hand-scratch {
          0% { clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%); }
          10% { clip-path: polygon(2% 1%, 98% 0%, 99% 99%, 1% 100%); }
          20% { clip-path: polygon(1% 2%, 97% 1%, 98% 98%, 0% 99%); }
          30% { clip-path: polygon(3% 0%, 95% 3%, 97% 97%, 2% 100%); }
          100% { clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%); }
        }
        .hand-drawn-border {
          position: relative;
          background: linear-gradient(145deg, #1e293b, #0f172a);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 
            0 0 0 4px #000,
            inset 0 0 20px rgba(0,0,0,0.5),
            0 8px 32px rgba(0,0,0,0.3);
        }
        .hand-drawn-border::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: 
            linear-gradient(45deg, transparent 30%, #fbbf24 50%, transparent 70%),
            linear-gradient(-45deg, transparent 30%, #fbbf24 50%, transparent 70%);
          background-size: 20px 2px, 15px 2px;
          background-position: 0 0, 10px 2px;
          opacity: 0.3;
          animation: scratch-lines 3s ease-in-out infinite;
        }
        @keyframes scratch-lines {
          0%, 100% { opacity: 0.3; transform: translateX(-10px); }
          50% { opacity: 0.6; transform: translateX(10px); }
        }
      `}</style>
    </div>
  );
};

export default HandDrawnBorder;