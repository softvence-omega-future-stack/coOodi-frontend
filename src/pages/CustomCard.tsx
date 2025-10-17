import React from 'react';

export default function FeatureCards() {
  const features = [
    {
      icon: '🕐',
      title: '24-48h',
      subtitle: 'Response Time'
    },
    {
      icon: '✨',
      title: 'FAQ',
      subtitle: ''
    },
    {
      icon: '👁️',
      title: 'COMMUNITY',
      subtitle: ''
    }
  ];

  return (
    <div className="min-h-screen bg-[#001117] flex items-center justify-center p-4">
      <style>{`
        @keyframes chalkFlicker {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 0.9; }
        }

        .feature-card {
          position: relative;
          background: transparent;
          border-radius: 20px;
          padding: 40px 30px;
          width: 280px;
          height: 320px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          overflow: hidden;
        }

        .feature-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border: 3px solid #C9A961;
          border-radius: 20px;
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

        .feature-card::after {
          content: "";
          position: absolute;
          top: 15px;
          left: 15px;
          right: 15px;
          bottom: 15px;
          border: 2px solid #C9A961;
          border-radius: 16px;
          opacity: 0.4;
          mix-blend-mode: screen;
          filter: blur(0.5px) brightness(1.1);
          mask-image: url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' seed='2'/%3E%3CfeDisplacementMap in='SourceGraphic' scale='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          -webkit-mask-image: url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' seed='2'/%3E%3CfeDisplacementMap in='SourceGraphic' scale='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          mask-mode: alpha;
          -webkit-mask-mode: alpha;
          pointer-events: none;
        }

        .feature-content {
          position: relative;
          z-index: 10;
        }

        .feature-icon {
          font-size: 60px;
          margin-bottom: 20px;
          display: block;
        }

        .feature-title {
          font-size: 28px;
          font-weight: bold;
          color: #C9A961;
          margin-bottom: 8px;
          letter-spacing: 2px;
        }

        .feature-subtitle {
          font-size: 14px;
          color: #C9A961;
          font-weight: 400;
          letter-spacing: 1px;
        }

        .cards-container {
          display: flex;
          gap: 40px;
          flex-wrap: wrap;
          justify-content: center;
          max-width: 1000px;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          .cards-container {
            gap: 20px;
          }

          .feature-card {
            width: 240px;
            height: 280px;
            padding: 30px 20px;
          }

          .feature-icon {
            font-size: 48px;
            margin-bottom: 15px;
          }

          .feature-title {
            font-size: 24px;
          }

          .feature-subtitle {
            font-size: 12px;
          }
        }
      `}</style>

      <div className="cards-container">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-content">
              <div className="feature-icon">{feature.icon}</div>
              <div className="feature-title">{feature.title}</div>
              {feature.subtitle && (
                <div className="feature-subtitle">{feature.subtitle}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}