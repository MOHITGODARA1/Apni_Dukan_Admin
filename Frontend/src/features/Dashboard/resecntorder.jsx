function RecentOrder() {
  // Example data for demonstration
  const recentOrders = [
    { OrderID: "1001", Customer: "John Doe", Date: "2025-10-19", Status: "Pending", Total: "₹499" },
    { OrderID: "1002", Customer: "Jane Smith", Date: "2025-10-18", Status: "Completed", Total: "₹299" },
    { OrderID: "1003", Customer: "Alice Johnson", Date: "2025-10-17", Status: "Shipped", Total: "₹799" },
  ];

  return (
    <div className="mt-6 mx-6">
      {/* Header */}
      <div className="ml-2 text-lg font-semibold text-gray-800 mb-3">
        <h1>Recent Orders</h1>
      </div>

      {/* Orders Table */}
      <div className="bg-white shadow-lg rounded-xl overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left text-gray-600">Order ID</th>
              <th className="px-4 py-3 text-left text-gray-600">Customer</th>
              <th className="px-4 py-3 text-left text-gray-600">Date</th>
              <th className="px-4 py-3 text-left text-gray-600">Status</th>
              <th className="px-4 py-3 text-left text-gray-600">Total</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {recentOrders.map((order) => (
              <tr key={order.OrderID} className="hover:bg-gray-50 transition cursor-pointer">
                <td className="px-4 py-3">{order.OrderID}</td>
                <td className="px-4 py-3">{order.Customer}</td>
                <td className="px-4 py-3">{order.Date}</td>
                <td className="px-4 py-3">
                  <span
                    className={`px-2 py-1 rounded-full text-white text-xs ${
                      order.Status === "Completed"
                        ? "bg-green-500"
                        : order.Status === "Pending"
                        ? "bg-yellow-500"
                        : "bg-blue-500"
                    }`}
                  >
                    {order.Status}
                  </span>
                </td>
                <td className="px-4 py-3 font-semibold">{order.Total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RecentOrder;
