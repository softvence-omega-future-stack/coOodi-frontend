import { useState } from 'react';

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState('active');

  const userProfile = {
    name: 'Josof Yad',
    joined: 'March 2024',
    avatar: '👤'
  };

  const wallet = {
    balance: '22,450',
    icon: '💰'
  };

  const stats = [
    { number: '15', label: 'Total Order' },
    { number: '04', label: 'Active Order' },
    { number: '11', label: 'Completed Order' },
    { number: '$8542', label: 'Transactions' }
  ];

  const orders = {
    active: [
      { id: 'ORD-1562536', item: '📦 Poster', date: '27 Jun, 2024', payment: '$10.00', action: 'active' },
      { id: 'ORD-1562493', item: '👕 Hoodie', date: '27 Jun, 2024', payment: '$60.00', action: 'active' }
    ],
    completed: [
      { id: 'ORD-1562478', item: '🎵 Token Pack', date: '27 Jun, 2024', payment: '$25.00', action: 'Completed' },
      { id: 'ORD-1562583', item: '🪙 Collectible Coin', date: '27 Jun, 2024', payment: '$15.00', action: 'Completed' }
    ],
    cancelled: [
      { id: 'ORD-1562527', item: '🎁 Mystery Box', date: '27 Jun, 2024', payment: '$60.00', action: 'Cancelled' }
    ]
  };

  const currentOrders = orders[activeTab as keyof typeof orders];

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
          border: 4px solid #C9A961;
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
          border: 3px solid #C9A961;
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
          border: 2px solid #C9A961;
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
          border: 2px solid #C9A961;
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

        .profile-avatar-content {
          position: relative;
          z-index: 2;
        }

        .user-section {
          background: transparent;
          padding: 24px;
          border-radius: 8px;
          margin-bottom: 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 60px;
        }

        .user-left {
          display: flex;
          align-items: center;
          gap: 20px;
          flex: 1;
        }

        .user-info h2 {
          font-size: 24px;
          font-weight: bold;
          color: #C9A961;
          margin-bottom: 4px;
        }

        .user-info p {
          color: #9ca3af;
          font-size: 13px;
          margin-bottom: 12px;
        }

        .user-right {
          display: flex;
          align-items: center;
          gap: 30px;
          flex: 1;
          justify-content: flex-end;
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
          border-bottom: 1px solid #C9A961;
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
          .user-section {
            flex-direction: column;
            gap: 16px;
          }

          .user-left, .user-right {
            width: 100%;
            justify-content: flex-start;
          }

          .user-right {
            justify-content: space-between;
          }

          .tier-content {
            gap: 20px;
          }
        }

        @media (max-width: 768px) {
          .profile-avatar {
            width: 64px;
            height: 64px;
            font-size: 32px;
          }

          .user-info h2 {
            font-size: 18px;
          }

          .wallet-info h3 {
            font-size: 24px;
          }

          .wallet-icon {
            font-size: 40px;
          }

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
          <span className='gradient-text'>Account</span>
        </h1>

        {/* User Section - Profile and Wallet */}
        <div className="user-section">
          <div className="user-left">
            <div className="profile-avatar">{userProfile.avatar}</div>
            <div className="user-info">
              <h2 >{userProfile.name}</h2>
              <p>Joined: {userProfile.joined}</p>
              <button className="chalk-button">
                <span>EDIT PROFILE</span>
              </button>
            </div>
          </div>
          <div className="user-right">
            <div className="wallet-icon">{wallet.icon}</div>
            <div className="user-info">
              <h3>{wallet.balance}</h3>
              <p>Token Wallet Balance</p>
              <button className="chalk-button">
                <span>DISCONNECT</span>
              </button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8 md:mb-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="chalk-card">
              <div className="chalk-card-content text-center">
                <p className="text-3xl md:text-4xl font-bold text-yellow-600 mb-2">{stat.number}</p>
                <p className="text-yellow-600 text-xs md:text-sm">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Tier Status */}
        <div className="mb-8 md:mb-12">
          <h2 className="text-2xl font-bold text-yellow-600 mb-6">Tier Status</h2>
          <div className="chalk-border">
            <div className="p-6 md:p-8">
              <div className="chalk-card-content">
                <div className="tier-content">
                  <div className="tier-side-image">🏛️</div>
                  <div className="tier-middle">
                    <h3>
                      Yhe Adventurer <span className="text-sm">(Active)</span>
                    </h3>
                    <p>Requirement: 10 000 Silkroad Coins</p>
                    <p>Duration: 3 months</p>
                    <ul className="space-y-2 mb-6">
                      <li>1. All Tier 1 Perks</li>
                      <li>2. Early Access to Cartoon/Music Releases</li>
                    </ul>
                    <button className="chalk-button">
                      <span>UPGRADE TIER</span>
                    </button>
                  </div>
                  <div className="tier-side-image">👥</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Order History */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-600 mb-6">Order History</h2>
          
          {/* Tabs */}
          <div className="flex gap-2 mb-6 flex-wrap">
            <button 
              className={`tab-button ${activeTab === 'active' ? '' : 'inactive'}`}
              onClick={() => setActiveTab('active')}
            >
              Active
            </button>
            <button 
              className={`tab-button ${activeTab === 'completed' ? '' : 'inactive'}`}
              onClick={() => setActiveTab('completed')}
            >
              Completed
            </button>
            <button 
              className={`tab-button ${activeTab === 'cancelled' ? '' : 'inactive'}`}
              onClick={() => setActiveTab('cancelled')}
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