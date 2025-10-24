import { useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";
import TierCard from "../components/Tiers/TierCard";
import StatsCard from "../components/account/StatsCard";
import AccountButton from "../components/button/AccountButton";

gsap.registerPlugin(ScrollTrigger);

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState("active");
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
        duration: .9,
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
        duration: .9,
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
          border: 1px solid #C9A961;
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
          background: #C9A961;
          border: 2px solid #9F854B;
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
          border: 2px solid #C9A961;
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
          border: 2px solid #C9A961;
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
          border-bottom: 2px solid #C9A961;
        }

        tbody tr {
          // border-bottom: 1px solid #C9A961;
          border-opacity: 30%;
        }

        th, td {
          padding: 14px 16px;
          text-align: left;
        }

        th {
          font-weight: bold;
          font-size: 13px;
          color: #C9A961;
        }

        td {
          font-size: 13px;
          color: #9ca3af;
        }

        td:nth-child(4) {
          color: #C9A961;
          font-weight: 600;
        }

        td:nth-child(5) {
          color: #C9A961;
          cursor: pointer;
          font-weight: 500;
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
                  <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">{userProfile.name}</span>
                </h2>

                <p className="text-sm mb-2">
                  <span className="text-amber-500">
                    Joined: {userProfile.joined}
                  </span>
                </p>
                <AccountButton text="EDIT PROFILE" className="mb-2" onClick={() => navigate("/edit-profile")}/>
                {/* <button className="chalk-button">
                  <span>EDIT PROFILE</span>
                </button> */}
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
                <AccountButton text="CONNECT" className="mb-2" />
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
    </div>
  );
}