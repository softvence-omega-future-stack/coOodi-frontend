import { useState, useEffect, Suspense, lazy } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";

const TierCard = lazy(() => import("../components/Tiers/TierCard"));
const StatsCard = lazy(() => import("../components/account/StatsCard"));
const AccountButton = lazy(() => import("../components/button/AccountButton"));

gsap.registerPlugin(ScrollTrigger);

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState("active");
  const [showChooseNetwork, setShowChooseNetwork] = useState(false);
  const [showConnecting, setShowConnecting] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [selectedNetwork, setSelectedNetwork] = useState("");
  const [selectedWallet, setSelectedWallet] = useState("");
  const navigate = useNavigate();

  const userProfile = {
    name: "Josof Yad",
    joined: "March 2024",
    UserImage: "account/ac.png",
  };

  const wallet = {
    balance: "22,450",
    icon: "/account/ac2.svg",
  };

  const orders = {
    active: [
      {
        id: "ORD-1562536",
        item: "📦 Poster",
        date: "27 Jun, 2024",
        payment: "$10.00",
        action: "active",
      },
      {
        id: "ORD-1562493",
        item: "👕 Hoodie",
        date: "27 Jun, 2024",
        payment: "$60.00",
        action: "active",
      },
    ],
    completed: [
      {
        id: "ORD-1562478",
        item: "🎵 Token Pack",
        date: "27 Jun, 2024",
        payment: "$25.00",
        action: "Completed",
      },
      {
        id: "ORD-1562583",
        item: "🪙 Collectible Coin",
        date: "27 Jun, 2024",
        payment: "$15.00",
        action: "Completed",
      },
    ],
    cancelled: [
      {
        id: "ORD-1562527",
        item: "🎁 Mystery Box",
        date: "27 Jun, 2024",
        payment: "$60.00",
        action: "Cancelled",
      },
    ],
  };

  const stats = [
    { value: "15", label: "Total Order", image: "/test.png" },
    { value: "04", label: "Active Order", image: "/test.png" },
    { value: "11", label: "Completed Order", image: "/test.png" },
    { value: "$8542", label: "Transactions", image: "/test.png" },
  ];

  const currentOrders = orders[activeTab as keyof typeof orders];

  const handleConnectClick = () => {
    setShowChooseNetwork(true);
  };

  const handleNetworkSelect = (network: string) => {
    setSelectedNetwork(network);
  };

  const handleWalletSelect = (wallet: string) => {
    setSelectedWallet(wallet);
  };

  const handleConnectWallet = () => {
    if (selectedNetwork && selectedWallet) {
      setShowChooseNetwork(false);
      setShowConnecting(true);

      setTimeout(() => {
        setShowConnecting(false);
        setIsConnected(true);
      }, 3000);
    }
  };

  const handleDisconnect = () => {
    setIsConnected(false);
    setSelectedNetwork("");
    setSelectedWallet("");
  };

  useEffect(() => {
    gsap.fromTo(
      "h1, h2",
      { opacity: 0, y: -30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2,
      }
    );

    gsap.fromTo(
      ".form-section",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: "power2.out",
        delay: 0.3,
      }
    );

    gsap.fromTo(
      ".stats-card",
      { opacity: 0, y: 60, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.9,
        stagger: 0.2,
        ease: "back.out(1.7)",
        delay: 0.6,
      }
    );
  }, []);

  return (
    <div className="min-h-screen bg-[#001117] pt-28 pb-12">
      <style>{`
        @keyframes chalkFlicker {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 0.9; }
        }

        @keyframes dotFlashing {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }

        .chalk-border {
          position: relative;
        //   border: 3px solid #C9A961;
          border-radius: 8px;
          overflow: hidden;
        }

        .chalk-border::before {
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

        .chalk-card {
          position: relative;
          background: transparent;
          border-radius: 8px;
          overflow: hidden;
          padding: 20px;
        }

        .chalk-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border: 3px solid #9F854B;
          border-radius: 8px;
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

        .chalk-card-content {
          position: relative;
          z-index: 10;
        }

        .chalk-button {
          position: relative;
          background: #8B2E2E;
          border-radius: 20px;
          overflow: hidden;
          border: 2px solid #9F854B;
          padding: 8px 16px;
          color: white;
          font-weight: 600;
          font-size: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          white-space: nowrap;
        }

        .chalk-button::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border: 1px solid #9F854B;
          border-radius: 20px;
          opacity: 0.6;
          mix-blend-mode: screen;
          filter: blur(0.5px);
          mask-image: url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='4' seed='5'/%3E%3CfeDisplacementMap in='SourceGraphic' scale='5'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          -webkit-mask-image: url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='4' seed='5'/%3E%3CfeDisplacementMap in='SourceGraphic' scale='5'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          mask-mode: alpha;
          -webkit-mask-mode: alpha;
          pointer-events: none;
        }

        .chalk-button span {
          position: relative;
          z-index: 2;
        }

        .chalk-button:hover {
          opacity: 0.9;
        }

        .tab-button {
          background: #9F854B;
          border: 2px solid #9F854B;
          border-radius: 10px;
          color: #001117;
          padding: 8px 16px;
          margin-right: 8px;
          margin-bottom: 8px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s ease;
          font-size: 14px;
        }

        .tab-button.inactive {
          background: transparent;
          border: 2px solid #9F854B;
          color: #C9A961;
        }

        .profile-avatar {
          position: relative;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: #1a1a1a;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 40px;
          flex-shrink: 0;
          overflow: hidden;
        }

        .profile-avatar::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border: 2px solid #9F854B;
          border-radius: 50%;
          opacity: 0.8;
          mix-blend-mode: screen;
          filter: blur(0.8px) brightness(1.2) contrast(150%);
          mask-image: url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='4' seed='5'/%3E%3CfeDisplacementMap in='SourceGraphic' scale='5'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          -webkit-mask-image: url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='4' seed='5'/%3E%3CfeDisplacementMap in='SourceGraphic' scale='5'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          mask-mode: alpha;
          -webkit-mask-mode: alpha;
          pointer-events: none;
          animation: chalkFlicker 3s ease-in-out infinite;
          z-index: 1;
        }

        .wallet-info {
          text-align: right;
        }

        .wallet-info p {
          color: #9ca3af;
          font-size: 12px;
          margin-bottom: 4px;
        }

        .wallet-info h3 {
          font-size: 32px;
          font-weight: bold;
          color: #C9A961;
        }

        .wallet-icon {
          font-size: 50px;
        }

        .tier-content {
          display: grid;
          grid-template-columns: 1fr 1.5fr 1fr;
          gap: 40px;
          align-items: center;
        }

        .tier-side-image {
          font-size: 80px;
          text-align: center;
        }

        .tier-middle {
          text-align: left;
        }

        .tier-middle h3 {
          font-size: 22px;
          font-weight: bold;
          color: #C9A961;
          margin-bottom: 12px;
        }

        .tier-middle p {
          color: #9ca3af;
          font-size: 13px;
          margin-bottom: 8px;
        }

        .tier-middle ul {
          color: #9ca3af;
          font-size: 13px;
          margin-bottom: 16px;
        }

        table {
          width: 100%;
          border-collapse: collapse;
        }

        thead tr {
          border-bottom: 2px solid #9F854B;
        }

        tbody tr {
          // border-bottom: 1px solid #9F854B;
          border-opacity: 30%;
        }

        th, td {
          padding: 14px 16px;
          text-align: left;
        }

        th {
          font-weight: bold;
          font-size: 13px;
          color: #9F854B;
        }

        td {
          font-size: 13px;
          color: #9ca3af;
        }

        td:nth-child(4) {
          color: #9F854B;
          font-weight: 600;
        }

        td:nth-child(5) {
          color: #9F854B;
          cursor: pointer;
          font-weight: 500;
        }

        .chalk-modal {
          position: relative;
          background: #9F854B;
          border-radius: 12px;
          padding: 40px;
          overflow: hidden;
          box-shadow: 0 0 20px rgba(159, 133, 75, 0.3);
        }

        .chalk-modal::before {
          content: "";
          position: absolute;
          inset: 0;
          border: 3px solid #9F854B;
          border-radius: 10px;
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

        .modal-content {
          position: relative;
          z-index: 10;
        }
          
        .option-card {
          position: relative;
          background: #9F854B;
          border-radius: 8px;
          padding: 16px;
          display: flex;
          align-items: center;
          gap: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
          overflow: hidden;
        }

        .option-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border: 2px solid #333;
          border-radius: 8px;
          opacity: 0.8;
          mix-blend-mode: multiply;
          filter: blur(0.5px);
          mask-image: url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='4' seed='5'/%3E%3CfeDisplacementMap in='SourceGraphic' scale='5'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          -webkit-mask-image: url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='4' seed='5'/%3E%3CfeDisplacementMap in='SourceGraphic' scale='5'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          mask-mode: alpha;
          -webkit-mask-mode: alpha;
          pointer-events: none;
        }

        .option-card.selected::before {
          border: 3px solid #333;
          opacity: 1;
        }

        .option-card:hover {
          transform: translateY(-2px);
        }

        .option-content {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          gap: 10px;
          width: 100%;
        }

        .checkbox {
          width: 24px;
          height: 24px;
          border: 2px solid #333;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .checkbox.checked {
          // background: #333;
          color: black;
        }

        .connect-btn {
          position: relative;
          background: #1a1a1a;
          border-radius: 8px;
          padding: 14px 32px;
          color: white;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          overflow: hidden;
          border: none;
          width: 100%;
        }

        .connect-btn::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border: 2px solid #333;
          border-radius: 8px;
          opacity: 0.6;
          mix-blend-mode: multiply;
          filter: blur(0.5px);
          mask-image: url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='4' seed='5'/%3E%3CfeDisplacementMap in='SourceGraphic' scale='5'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          -webkit-mask-image: url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='4' seed='5'/%3E%3CfeDisplacementMap in='SourceGraphic' scale='5'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          mask-mode: alpha;
          -webkit-mask-mode: alpha;
          pointer-events: none;
        }

        .connect-btn span {
          position: relative;
          z-index: 2;
        }

        .connect-btn:hover {
          opacity: 0.9;
        }

        .loading-dots {
          display: flex;
          gap: 8px;
          justify-content: center;
          margin: 20px 0;
        }

        .loading-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #333;
        }

        .loading-dot:nth-child(1) {
          animation: dotFlashing 1.5s infinite;
        }

        .loading-dot:nth-child(2) {
          animation: dotFlashing 1.5s infinite 0.3s;
        }

        .loading-dot:nth-child(3) {
          animation: dotFlashing 1.5s infinite 0.6s;
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }

        @media (max-width: 1024px) {
          .tier-content {
            gap: 20px;
          }
        }

        @media (max-width: 768px) {
          .chalk-button {
            padding: 6px 12px;
            font-size: 11px;
          }

          .tier-content {
            grid-template-columns: 1fr;
          }

          .tier-side-image {
            display: none;
          }

          .tier-middle h3 {
            font-size: 18px;
          }

          table {
            font-size: 12px;
          }

          th, td {
            padding: 10px 8px;
          }
        }
      `}</style>
      <Suspense
        fallback={
          <div className="text-center text-yellow-600 py-10">Loading...</div>
        }
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-center mb-10 lg:mb-16">
            <span className="gradient-text">Account</span>
          </h1>
          {/* Profile & Wallet Section */}
          <div className="form-section">
            <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between w-full gap-4 md:gap-0 mb-12">
              {/* Left: Profile */}
              <div className="flex items-center gap-4 sm:gap-4">
                <div className="">
                  <img src={userProfile.UserImage} alt="User Avatar" />
                </div>
                <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                  <h2 className="font-bold text-[#9F854B]">
                    <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                      {userProfile.name}
                    </span>
                  </h2>

                  <p className="text-sm mb-2">
                    <span className="text-amber-500">
                      Joined: {userProfile.joined}
                    </span>
                  </p>
                  <AccountButton
                    text="EDIT PROFILE"
                    className="mb-2"
                    onClick={() => navigate("/edit-profile")}
                  />
                </div>
              </div>

              {/* Right: Wallet */}
              <div className=" flex items-center sm:gap-6">
                <div className="">
                  <img src={wallet.icon} alt="Wallet Icon" />
                </div>
                <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                  <h2 className="font-bold text-[#9F854B]">
                    <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                      {wallet.balance}
                    </span>
                  </h2>
                  <p className="text-sm mb-2">
                    <span className="text-amber-500">Token Wallet Balance</span>
                  </p>
                  <AccountButton
                    text={isConnected ? "DISCONNECT" : "CONNECT"}
                    className="mb-2"
                    onClick={
                      isConnected ? handleDisconnect : handleConnectClick
                    }
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="flex flex-wrap gap-6 mb-18 justify-evenly form-section">
            {stats.map((card, idx) => (
              <StatsCard
                key={idx}
                value={card.value}
                label={card.label}
                image={card.image}
              />
            ))}
          </div>

          {/* Tier Status */}
          <div className="form-section">
            <h2>
              <span className="gradient-text text-2xl">Your Tier Status</span>
            </h2>
            <div
              className="chalk-border 
          my-5 "
            >
              <TierCard
                leftImage="/tiers/TC.svg"
                rightImage="/tiers/help.svg"
                title="Adventurer (Active)"
                requirement="10,000 Silkroad Coins"
                duration="3 months"
                perks={[
                  "All Tier 1 Perks",
                  "Early Access to Cartoon/Music Releases",
                ]}
                buttonText="UPGRADE TIER"
              />
            </div>
          </div>

          {/* Order History */}
          <div className="form-section">
            <h2 className="text-2xl font-bold text-yellow-600 mb-6">
              <span className="gradient-text">Order History</span>
            </h2>

            {/* Tabs */}
            <div className="flex gap-2 mb-6 flex-wrap">
              <button
                className={`tab-button ${activeTab === "active" ? "" : "inactive"}`}
                onClick={() => setActiveTab("active")}
              >
                Active
              </button>
              <button
                className={`tab-button ${activeTab === "completed" ? "" : "inactive"}`}
                onClick={() => setActiveTab("completed")}
              >
                Completed
              </button>
              <button
                className={`tab-button ${activeTab === "cancelled" ? "" : "inactive"}`}
                onClick={() => setActiveTab("cancelled")}
              >
                Cancelled
              </button>
            </div>

            {/* Table */}
            <div className="chalk-border overflow-x-auto">
              <div className="p-4 md:p-6">
                <table>
                  <thead>
                    <tr>
                      <th>Order ID</th>
                      <th>Item</th>
                      <th>Date</th>
                      <th>Payment</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentOrders.map((order, idx) => (
                      <tr key={idx}>
                        <td>{order.id}</td>
                        <td>{order.item}</td>
                        <td>{order.date}</td>
                        <td>{order.payment}</td>
                        <td>{order.action}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </Suspense>

      {/* Choose Network Modal */}
      {showChooseNetwork && (
        <div className="modal-overlay">
          <div
            className="chalk-modal"
            style={{ maxWidth: "600px", width: "90%" }}
          >
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
              onClick={() => setShowChooseNetwork(false)}
            >
              ✕
            </button>
            <div className="modal-content">
              <h2 className="text-3xl font-bold text-gray-800 mb-2 sm:mb-6 text-center text-nowrap">
                Choose Network
              </h2>

              <div className="grid grid-cols-2 gap-4 mb-2 sm:mb-6">
                <div
                  className={`option-card ${selectedNetwork === "solana" ? "selected" : ""}`}
                  onClick={() => handleNetworkSelect("solana")}
                >
                  <div className="option-content">
                    <div
                      className={`checkbox ${selectedNetwork === "solana" ? "checked" : ""}`}
                    >
                      {selectedNetwork === "solana" && "✓"}
                    </div>
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold">
                      <img src="/account/solana.svg" alt="Solana Logo" />
                    </div>
                    <span className="hidden sm:block text-xl font-semibold text-gray-800">
                      Solana
                    </span>
                  </div>
                </div>

                <div
                  className={`option-card ${selectedNetwork === "polygon" ? "selected" : ""}`}
                  onClick={() => handleNetworkSelect("polygon")}
                >
                  <div className="option-content">
                    <div
                      className={`checkbox ${selectedNetwork === "polygon" ? "checked" : ""}`}
                    >
                      {selectedNetwork === "polygon" && "✓"}
                    </div>
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold">
                      <img src="/account/polygon.svg" alt="Polygon Logo" />
                    </div>
                    <span className="hidden sm:block text-xl font-semibold text-gray-800">
                      Polygon
                    </span>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-2 sm:mb-6 text-center text-nowrap">
                Select Wallet
              </h2>

              <div className="grid grid-cols-2 gap-4 mb-2 sm:mb-6">
                <div
                  className={`option-card ${selectedWallet === "metamask" ? "selected" : ""}`}
                  onClick={() => handleWalletSelect("metamask")}
                >
                  <div className="option-content">
                    <div
                      className={`checkbox ${selectedWallet === "metamask" ? "checked" : ""}`}
                    >
                      {selectedWallet === "metamask" && "✓"}
                    </div>
                    <div className="w-16 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold">
                      M
                    </div>
                    <span className="hidden sm:block text-xl font-semibold text-gray-800">
                      Metamask
                    </span>
                  </div>
                </div>

                <div
                  className={`option-card ${selectedWallet === "coinbase" ? "selected" : ""}`}
                  onClick={() => handleWalletSelect("coinbase")}
                >
                  <div className="option-content">
                    <div
                      className={`checkbox ${selectedWallet === "coinbase" ? "checked" : ""}`}
                    >
                      {selectedWallet === "coinbase" && "✓"}
                    </div>
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                      C
                    </div>
                    <span className="hidden sm:block text-xl font-semibold text-gray-800">
                      Coinbase
                    </span>
                  </div>
                </div>
              </div>

              <button className="connect-btn" onClick={handleConnectWallet}>
                <span>Connect Wallet</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Connecting Modal */}
      {showConnecting && (
        <div className="modal-overlay">
          <div
            className="chalk-modal"
            style={{ maxWidth: "500px", width: "90%" }}
          >
            <div className="modal-content text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Connecting
              </h2>

              <div className="loading-dots">
                <div className="loading-dot"></div>
                <div className="loading-dot"></div>
                <div className="loading-dot"></div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                Connecting Wallet
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Please wait a while to connect with {selectedWallet} wallet via{" "}
                {selectedNetwork} network.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
