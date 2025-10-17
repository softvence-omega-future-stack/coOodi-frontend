import { useState } from 'react';

export default function Checkout() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    addressLine1: '',
    city: '',
    state: '',
    zip: '',
    cardholderName: '',
    cardNumber: '',
    expirationDate: '',
    cvc: '',
    billingCity: '',
    billingState: '',
    billingZip: '',
    sameAddress: false,
    paymentMethod: 'stripe',
    note: '',
  });

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [orderId] = useState('ORD-1562536');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const name = e.target.name;
    const isCheckbox = 'type' in e.target && (e.target as HTMLInputElement).type === 'checkbox';
    const value = isCheckbox ? (e.target as HTMLInputElement).checked : e.target.value;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePlaceOrder = () => {
    setShowConfirmation(true);
  };

  const handleBackToHome = () => {
    setShowConfirmation(false);
  };

  const items = [
    { name: 'Poster', price: '$10.00' },
    { name: 'Hoodie', price: '$60.00' },
    { name: 'Token Pack', price: '$25.00' },
    { name: 'Collectible Coin', price: '$15.00' },
    { name: 'Mystery Box', price: '$50.00' },
  ];

  return (
          <div className="min-h-screen bg-[#001117] pt-28 pb-12">
      <style>{`
        @keyframes chalkFlicker {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 0.9; }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .confirmation-modal {
          animation: slideIn 0.3s ease-out;
        }

        .chalk-input {
          position: relative;
          background: transparent;
          border-radius: 6px;
          overflow: hidden;
        }

        .chalk-input::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border: 2px solid #C9A961;
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

        .chalk-input input,
        .chalk-input textarea {
          position: relative;
          z-index: 2;
          background: transparent;
          border: none;
          outline: none;
          color: #d1d5db;
          width: 100%;
          padding: 12px;
          font-family: inherit;
        }

        .chalk-input input::placeholder,
        .chalk-input textarea::placeholder {
          color: #6b7280;
        }

        .chalk-input:focus-within::before {
          filter: blur(1px) brightness(1.3) contrast(160%);
          transition: all 0.3s ease-in-out;
        }

        .chalk-section {
          position: relative;
          padding: 24px;
          background: transparent;
          overflow: hidden;
        }

        .chalk-section::before {
          content: "";
          position: absolute;
          top: 2px;
          left: 2px;
          right: 2px;
          bottom: 2px;
          border: 3px solid #C9A961;
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

        .chalk-section-content {
          position: relative;
          z-index: 10;
        }

        .chalk-button {
          position: relative;
          background: #8B2E2E;
          border-radius: 25px;
          overflow: hidden;
          border: 2px solid #C9A961;
        }

        .chalk-button::before {
          content: "";
          position: absolute;
          top: 2px;
          left: 2px;
          right: 2px;
          bottom: 2px;
          border-radius: 23px;
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
          cursor: pointer;
        }

        .chalk-button:hover::before {
          filter: blur(1px) brightness(1.3) contrast(160%);
          transition: all 0.3s ease-in-out;
        }

        .payment-button {
          position: relative;
          background: #8B2E2E;
          border: 2px solid #C9A961;
          border-radius: 25px;
          padding: 8px 20px;
          color: white;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-right: 12px;
          margin-bottom: 8px;
        }

        .payment-button.active {
          border-color: #E8C547;
          box-shadow: 0 0 10px rgba(201, 169, 97, 0.3);
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }

        .confirmation-card {
          position: relative;
          background: #C9A961;
          border-radius: 12px;
          padding: 40px;
          width: 90%;
          max-width: 450px;
          text-align: center;
          overflow: hidden;
        }

        .confirmation-card::before {
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

        .confirmation-content {
          position: relative;
          z-index: 10;
        }

        .close-btn {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 32px;
          height: 32px;
          border: 2px solid #333;
          border-radius: 50%;
          background: transparent;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          color: #333;
          z-index: 20;
        }

        .gift-icon {
          font-size: 48px;
          margin-bottom: 20px;
        }

        .confirmation-title {
          font-size: 28px;
          font-weight: bold;
          color: #333;
          margin-bottom: 12px;
          line-height: 1.3;
        }

        .confirmation-subtitle {
          font-size: 14px;
          color: #666;
          margin-bottom: 24px;
        }

        .order-id-label {
          font-size: 12px;
          color: #666;
          margin-bottom: 8px;
        }

        .order-id-box {
          position: relative;
          background: transparent;
          border-radius: 6px;
          overflow: hidden;
          margin-bottom: 24px;
        }

        .order-id-box::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border: 2px solid #333;
          border-radius: 6px;
          opacity: 0.8;
          mix-blend-mode: multiply;
          filter: blur(0.5px);
          mask-image: url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='4' seed='5'/%3E%3CfeDisplacementMap in='SourceGraphic' scale='5'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          -webkit-mask-image: url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='4' seed='5'/%3E%3CfeDisplacementMap in='SourceGraphic' scale='5'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          mask-mode: alpha;
          -webkit-mask-mode: alpha;
          pointer-events: none;
        }

        .order-id-text {
          position: relative;
          z-index: 2;
          font-size: 20px;
          font-weight: bold;
          color: #333;
          padding: 12px;
          letter-spacing: 1px;
        }

        .button-group {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .confirmation-btn {
          position: relative;
          background: #1a1a1a;
          border-radius: 6px;
          overflow: hidden;
          border: 2px solid #333;
          color: white;
          font-weight: 600;
          padding: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .confirmation-btn::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border: 2px solid #333;
          border-radius: 4px;
          opacity: 0.6;
          mix-blend-mode: multiply;
          filter: blur(0.5px);
          mask-image: url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='4' seed='5'/%3E%3CfeDisplacementMap in='SourceGraphic' scale='5'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          -webkit-mask-image: url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='4' seed='5'/%3E%3CfeDisplacementMap in='SourceGraphic' scale='5'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          mask-mode: alpha;
          -webkit-mask-mode: alpha;
          pointer-events: none;
        }

        .confirmation-btn-content {
          position: relative;
          z-index: 2;
          font-size: 14px;
        }

        .confirmation-btn:hover {
          opacity: 0.9;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-center mb-2">
          <span className='gradient-text'>Checkout</span>
        </h1>
        <div className="hidden sm:flex justify-center gap-4 text-sm text-gray-400 mb-12">
          <span>Cart</span>
          <span>•</span>
          <span>Details</span>
          <span>•</span>
          <span>Shipping</span>
          <span>•</span>
          <span>Payment</span>
          <span>•</span>
          <span>Review</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Side */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Section */}
            <div className="chalk-section">
              <div className="chalk-section-content">
                <h2 className="text-2xl font-bold text-yellow-600 mb-6">Contact</h2>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="chalk-input">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name:"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="chalk-input">
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name:"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="chalk-input">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email:"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            {/* Shipping Address Section */}
            <div className="chalk-section">
              <div className="chalk-section-content">
                <h2 className="text-2xl font-bold text-yellow-600 mb-6">Shipping Address</h2>
                <div className="chalk-input mb-4">
                  <input
                    type="text"
                    name="addressLine1"
                    placeholder="Address Line 1:"
                    value={formData.addressLine1}
                    onChange={handleChange}
                  />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="chalk-input">
                    <input
                      type="text"
                      name="city"
                      placeholder="City:"
                      value={formData.city}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="chalk-input">
                    <input
                      type="text"
                      name="state"
                      placeholder="State:"
                      value={formData.state}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="chalk-input">
                    <input
                      type="text"
                      name="zip"
                      placeholder="ZIP:"
                      value={formData.zip}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Method Section */}
            <div className="chalk-section">
              <div className="chalk-section-content">
                <h2 className="text-2xl font-bold text-yellow-600 mb-6">Payment Method</h2>
                <div className="flex gap-3 mb-6 flex-wrap">
                  {['stripe', 'paypal', 'wallet'].map((method) => (
                    <button
                      key={method}
                      onClick={() => setFormData(prev => ({ ...prev, paymentMethod: method }))}
                      className={`payment-button ${formData.paymentMethod === method ? 'active' : ''}`}
                    >
                      {method.charAt(0).toUpperCase() + method.slice(1)}
                    </button>
                  ))}
                </div>

                <div className="chalk-input mb-4">
                  <input
                    type="text"
                    name="cardholderName"
                    placeholder="Card Holder Name:"
                    value={formData.cardholderName}
                    onChange={handleChange}
                  />
                </div>
                <div className="chalk-input mb-4">
                  <input
                    type="text"
                    name="cardNumber"
                    placeholder="Card Number:"
                    value={formData.cardNumber}
                    onChange={handleChange}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="chalk-input">
                    <input
                      type="text"
                      name="expirationDate"
                      placeholder="Expiration Date:"
                      value={formData.expirationDate}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="chalk-input">
                    <input
                      type="text"
                      name="cvc"
                      placeholder="CVC:"
                      value={formData.cvc}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="chalk-input">
                    <input
                      type="text"
                      name="billingCity"
                      placeholder="City:"
                      value={formData.billingCity}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="chalk-input">
                    <input
                      type="text"
                      name="billingState"
                      placeholder="State:"
                      value={formData.billingState}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="chalk-input">
                    <input
                      type="text"
                      name="billingZip"
                      placeholder="ZIP:"
                      value={formData.billingZip}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <label className="flex items-center gap-3 text-gray-400 cursor-pointer">
                  <input
                    type="checkbox"
                    name="sameAddress"
                    checked={formData.sameAddress}
                    onChange={handleChange}
                    className="w-4 h-4 border-2 border-yellow-600 rounded"
                  />
                  <span className="text-sm">Billing address same as shipping address</span>
                </label>
              </div>
            </div>
          </div>

          {/* Right Side - Order Summary */}
          <div className="lg:col-span-1">
            <div className="chalk-section">
              <div className="chalk-section-content">
                <h2 className="text-2xl font-bold text-yellow-600 mb-6">Order Summary</h2>
                
                <div className="space-y-3 mb-6">
                  {items.map((item, idx) => (
                    <div key={idx} className="flex justify-between text-sm text-gray-400">
                      <span>{item.name}</span>
                      <span className="text-yellow-600">{item.price}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-yellow-600 border-opacity-30 pt-4 space-y-2 mb-4 text-sm">
                  <div className="flex justify-between text-gray-400">
                    <span>Subtotal</span>
                    <span>$160.00</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Shipping</span>
                    <span>$10.00</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Tier Discount</span>
                    <span className="text-yellow-600">-$20.00</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Estimated Tax</span>
                    <span>$150.00</span>
                  </div>
                </div>

                <div className="border-t border-yellow-600 border-opacity-30 pt-4 mb-6">
                  <div className="flex justify-between text-xl font-bold text-yellow-600">
                    <span>Total</span>
                    <span>$150.00</span>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="text-xs text-gray-400 mb-2 block">Add a note to the prophet:</label>
                  <div className="chalk-input">
                    <textarea
                      name="note"
                      placeholder=""
                      value={formData.note}
                      onChange={handleChange}
                      rows={4}
                    />
                  </div>
                </div>

                <div className="chalk-button w-full" onClick={handlePlaceOrder}>
                  <button className="w-full py-3 text-white font-semibold uppercase tracking-wide text-sm">
                    PLACE ORDER
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="modal-overlay">
          <div className="confirmation-modal confirmation-card">
            <button className="close-btn" onClick={() => setShowConfirmation(false)}>
              ✕
            </button>
            <div className="confirmation-content">
              <div className="gift-icon">🎁</div>
              <h2 className="confirmation-title">Thank you! Your order has been placed successfully.</h2>
              <p className="confirmation-subtitle">You can track your order by using the order id.</p>
              
              <div className="order-id-label">Order ID:</div>
              <div className="order-id-box">
                <div className="order-id-text">{orderId}</div>
              </div>

              <div className="button-group">
                <button className="confirmation-btn" onClick={() => setShowConfirmation(false)}>
                  <div className="confirmation-btn-content">Track My Order</div>
                </button>
                <button className="confirmation-btn" onClick={handleBackToHome}>
                  <div className="confirmation-btn-content">Back To Home</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}