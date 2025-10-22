// src/pages/Tiers/TierStyles.tsx
export default function TierStyles() {
  return (
    <style>{`
      @keyframes chalkFlicker {
        0%, 100% { opacity: 0.7; }
        50% { opacity: 0.9; }
      }
      .tier-card {
        position: relative;
        background: rgba(0, 26, 36, 0.6);
        overflow: hidden;
      }
      .tier-card::before {
        content: "";
        position: absolute;
        top: 2px;
        left: 2px;
        right: 2px;
        bottom: 2px;
        border: 4px solid #9F854B;
        border-radius: 6px;
        opacity: 0.8;
        mix-blend-mode: screen;
        filter: blur(0.8px) brightness(1.2) contrast(150%);
        mask-image: url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='4' seed='5'/%3E%3CfeDisplacementMap in='SourceGraphic' scale='5'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
        -webkit-mask-image: url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='4' seed='5'/%3E%3CfeDisplacementMap in='SourceGraphic' scale='5'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
        mask-mode: alpha;
        -webkit-mask-mode: alpha;
        pointer-events: none;
        animation: chalkFlicker 3s ease-in-out infinite;
      }
    `}</style>
  );
}
