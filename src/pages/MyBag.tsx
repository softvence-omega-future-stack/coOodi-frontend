import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import AnimatedButton from "../components/button/AnimatedButton";

export default function MyBag() {
  const navigate = useNavigate();

  const [items, setItems] = useState([
    {
      id: 1,
      name: "Poster",
      date: "27 Jun, 2024",
      quantity: "01",
      payment: "$10.00",
      selected: false,
    },
    {
      id: 2,
      name: "Hoodie",
      date: "27 Jun, 2024",
      quantity: "02",
      payment: "$120.00",
      selected: false,
    },
    {
      id: 3,
      name: "Token Pack",
      date: "27 Jun, 2024",
      quantity: "01",
      payment: "$25.00",
      selected: false,
    },
    {
      id: 4,
      name: "Collectible Coin",
      date: "27 Jun, 2024",
      quantity: "02",
      payment: "$30.00",
      selected: false,
    },
    {
      id: 5,
      name: "Mystery Box",
      date: "27 Jun, 2024",
      quantity: "01",
      payment: "$50.00",
      selected: false,
    },
  ]);

  const toggleItem = (id: number) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const subtotal = items
    .filter((item) => item.selected)
    .reduce((sum, item) => {
      const amount = parseFloat(item.payment.replace("$", ""));
      return sum + amount;
    }, 0);

  // ✅ GSAP ANIMATION (like FAQ)
  useEffect(() => {
    gsap.fromTo(
      "h1",
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );

    gsap.fromTo(
      ".chalk-table",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.4,
        ease: "power2.out",
      }
    );

    gsap.fromTo(
      ".table-item",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: 0.6,
        stagger: 0.1,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <div className="min-h-screen bg-[#001117] pt-28 pb-12 relative"
      style={{
        backgroundImage: 'url("/mybag/MyBag.webp")', 
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <style>{`
        @keyframes chalkFlicker {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 0.9; }
        }
        
        .chalk-table {
          position: relative;
          background: transparent;
          overflow: hidden;
        }

        .chalk-table::before {
          content: "";
          position: absolute;
          top: 2px;
          left: 2px;
          right: 2px;
          bottom: 2px;
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

        .chalk-table:hover::before {
          filter: blur(1px) brightness(1.3) contrast(160%);
          transition: all 0.3s ease-in-out;
        }

        .table-content {
          position: relative;
          z-index: 10;
          padding: 16px 12px;
        }

        @media (min-width: 640px) {
          .table-content {
            padding: 32px;
          }
        }

        .table-header {
          display: grid;
          grid-template-columns: 1.5fr 1fr 0.8fr 0.5fr;
          gap: 8px;
          padding-bottom: 20px;
          margin-bottom: 20px;
          position: relative;
        }

        @media (min-width: 640px) {
          .table-header {
            grid-template-columns: repeat(5, 1fr);
            gap: 40px;
          }
        }

        .table-header::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: #9F854B;
          opacity: 0.8;
          mix-blend-mode: screen;
          filter: blur(0.8px) brightness(1.2) contrast(150%);
          mask-image: url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='4' seed='5'/%3E%3CfeDisplacementMap in='SourceGraphic' scale='5'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          -webkit-mask-image: url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='4' seed='5'/%3E%3CfeDisplacementMap in='SourceGraphic' scale='5'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          mask-mode: alpha;
          -webkit-mask-mode: alpha;
        }

        .header-cell {
          color: #9F854B;
          font-weight: 600;
          font-size: 12px;
        }

        @media (min-width: 640px) {
          .header-cell {
            font-size: 14px;
          }
        }

        .table-items {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .table-item {
          position: relative;
          padding: 12px 0;
        }

        @media (min-width: 640px) {
          .table-item {
            padding: 20px 0;
          }
        }

        .table-item::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: #9F854B;
          opacity: 0.3;
          mix-blend-mode: screen;
          filter: blur(0.5px);
          mask-image: url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='4' seed='5'/%3E%3CfeDisplacementMap in='SourceGraphic' scale='5'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          -webkit-mask-image: url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='4' seed='5'/%3E%3CfeDisplacementMap in='SourceGraphic' scale='5'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          mask-mode: alpha;
          -webkit-mask-mode: alpha;
        }

        .item-row {
          display: grid;
          grid-template-columns: 1.5fr 1fr 0.8fr 0.5fr;
          gap: 8px;
          align-items: start;
        }

        @media (min-width: 640px) {
          .item-row {
            grid-template-columns: repeat(5, 1fr);
            gap: 40px;
          }
        }

        .item-col {
          color: #gray-300;
          min-width: 0;
          justify-self: start;
        }

        .item-name {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #d1d5db;
          font-weight: 500;
          font-size: 13px;
        }

        @media (min-width: 640px) {
          .item-name {
            font-size: 15px;
          }
        }

        .item-date {
          color: #9ca3af;
          font-size: 12px;
          // margin-bottom: 4px;
        }

        @media (min-width: 640px) {
          .item-date {
            font-size: 14px;
          }
        }

        .item-qty {
          color: #9ca3af;
          font-size: 12px;
          // margin-bottom: 8px;
        }

        @media (min-width: 640px) {
          .item-qty {
            font-size: 14px;
          }
        }

        .item-price {
          color: #9F854B;
          font-weight: 600;
          font-size: 14px;
          // margin-bottom: 8px;
        }

        @media (min-width: 640px) {
          .item-price {
            font-size: 16px;
          }
        }

        .checkbox-wrapper {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .chalk-checkbox {
          position: relative;
          width: 20px;
          height: 20px;
          background: transparent;
          border: 2px solid #9F854B;
          border-radius: 3px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }

        .chalk-checkbox::before {
          content: "";
          position: absolute;
          inset: 2px;
          opacity: 0.6;
          mix-blend-mode: screen;
          filter: blur(0.5px) brightness(1.2) contrast(150%);
          mask-image: url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='4' seed='5'/%3E%3CfeDisplacementMap in='SourceGraphic' scale='5'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          -webkit-mask-image: url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='4' seed='5'/%3E%3CfeDisplacementMap in='SourceGraphic' scale='5'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          mask-mode: alpha;
          -webkit-mask-mode: alpha;
          pointer-events: none;
        }

        .chalk-checkbox input {
          width: 100%;
          height: 100%;
          cursor: pointer;
          margin: 0;
          opacity: 0;
        }

        .chalk-checkbox input:checked ~ .checkmark {
          color: #C9A961;
          font-weight: bold;
          font-size: 14px;
        }

        .checkmark {
          position: absolute;
          color: transparent;
          transition: all 0.3s ease;
        }

        .remove-btn {
          color: #9F854B;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 14px;
          font-weight: bold;
        }

        .remove-btn:hover {
          color: #E8C547;
        }

        .chalk-button {
          position: relative;
          background: #9F854B;
          border-radius: 25px;
          overflow: hidden;
          border: 2px solid #9F854B;
        }

        .chalk-button::before {
          content: "";
          position: absolute;
          top: 2px;
          left: 2px;
          right: 2px;
          bottom: 2px;
          opacity: 0.8;
          mix-blend-mode: screen;
          filter: blur(0.8px) brightness(1.2) contrast(150%);
          mask-image: url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='4' seed='5'/%3E%3CfeDisplacementMap in='SourceGraphic' scale='5'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          -webkit-mask-image: url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='4' seed='5'/%3E%3CfeDisplacementMap in='SourceGraphic' scale='5'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          mask-mode: alpha;
          -webkit-mask-mode: alpha;
          pointer-events: none;
        }

        .chalk-button button {
          position: relative;
          z-index: 2;
          background: transparent;
          border: none;
          outline: none;
        }

        .chalk-button:hover::before {
          filter: blur(1px) brightness(1.3) contrast(160%);
          transition: all 0.3s ease-in-out;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-center mb-10 lg:mb-26">
          <span className="gradient-text">My Bag</span>
        </h1>
        {/* Table */}
        <div className="chalk-table mb-12">
          <div className="table-content">
            {/* Header */}
            <div className="table-header">
              <div className="header-cell">
                <span className="gradient-text text-lg">Item</span>
              </div>
              <div className="header-cell hidden sm:block">
                <span className="gradient-text text-lg">Date</span>
              </div>
              <div className="header-cell">
                <span className="gradient-text text-lg">Quantity</span>
              </div>
              <div className="header-cell">
                <span className="gradient-text text-lg">Payment</span>
              </div>
              <div className="header-cell">
                <span className="gradient-text text-lg">Remove</span>
              </div>
            </div>

            {/* Items */}
            <div className="table-items">
              {items.map((item) => (
                <div key={item.id} className="table-item">
                  <div className="item-row">
                    {/* Item Column */}
                    <div className="item-col">
                      <div className="checkbox-wrapper">
                        <label className="chalk-checkbox">
                          <input
                            type="checkbox"
                            checked={item.selected}
                            onChange={() => toggleItem(item.id)}
                          />
                          <span className="checkmark">✓</span>
                        </label>
                        <span className="item-name">{item.name}</span>
                      </div>
                    </div>

                    {/* Date Column */}
                    <div className="item-col hidden sm:block">
                      <div className="item-date">{item.date}</div>
                    </div>

                    {/* Quantity Column */}
                    <div className="item-col">
                      <div className="item-qty">{item.quantity}</div>
                    </div>

                    {/* Payment Column */}
                    <div className="item-col">
                      <div className="item-price">{item.payment}</div>
                    </div>
                    <div className="item-col">
                      <button
                        onClick={() => removeItem(item.id)}
                        className="remove-btn"
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Subtotal and Checkout */}
        <div className="flex justify-end items-center gap-12 mb-8">
          <div className="text-gray-400">
            Subtotal{" "}
            <span className="text-yellow-600 font-semibold ml-4">
              ${subtotal.toFixed(2)}
            </span>
          </div>
        </div>

        {/* Proceed Checkout Button */}
        <div className="flex justify-end">
          <div className="">
            <AnimatedButton
              text="Proceed to Checkout"
              onClick={() => navigate("/checkout")}
              className="w-full py-3 text-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
