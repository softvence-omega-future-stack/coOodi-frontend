import React, { useState } from "react";

interface Order {
  id: string;
  item: string;
  date: string;
  payment: string;
  action: string;
}

interface OrderHistoryProps {
  orders: {
    active: Order[];
    completed: Order[];
    cancelled: Order[];
  };
}

const OrderHistory: React.FC<OrderHistoryProps> = ({ orders }) => {
  const [activeTab, setActiveTab] = useState("active");
  const currentOrders = orders[activeTab as keyof typeof orders];

  return (
    <div>
      <h2 className="text-2xl font-bold text-yellow-600 mb-6">
        <span className="gradient-text">Order History</span>
      </h2>

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
  );
};

export default OrderHistory;
