// // components/OrdersList.jsx
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const OrdersList = () => {
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const { data } = await axios.get('http://localhost:5000/api/orders', { withCredentials: true });
//         setOrders(data);
//       } catch (error) {
//         console.error(error);
//         alert('Failed to fetch orders');
//       }
//     };

//     fetchOrders();
//   }, []);

//   return (
//     <div>
//       <h2>Your Orders</h2>
//       {orders.map((order) => (
//         <div key={order._id}>
//           <h3>Order ID: {order._id}</h3>
//           <ul>
//             {order.products.map((product, index) => (
//               <li key={index}>{product.name} - ${product.price} x {product.quantity}</li>
//             ))}
//           </ul>
//           <p>Total Amount: ${order.totalAmount}</p>
//           <p>Status: {order.status}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default OrdersList;


import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OrdersList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/orders', { withCredentials: true });
        setOrders(data);
      } catch (error) {
        console.error(error);
        alert('Failed to fetch orders');
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl space-y-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Your Orders</h2>
        {orders.length === 0 ? (
          <p className="text-center text-gray-600">No orders found.</p>
        ) : (
          orders.map((order) => (
            <div key={order._id} className="bg-gray-50 p-6 rounded-lg shadow-md space-y-4">
              <h3 className="text-xl font-semibold text-gray-700">Order ID: {order._id}</h3>
              <ul className="space-y-2">
                {order.products.map((product, index) => (
                  <li key={index} className="flex justify-between text-gray-600">
                    <span>{product.name}</span>
                    <span>
                      ${product.price} x {product.quantity}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-between text-gray-700 font-medium">
                <p>Total Amount:</p>
                <p>${order.totalAmount.toFixed(2)}</p>
              </div>
              <div className="flex justify-between text-gray-700 font-medium">
                <p>Status:</p>
                <p
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    order.status === 'Completed'
                      ? 'bg-green-200 text-green-800'
                      : order.status === 'Pending'
                      ? 'bg-yellow-200 text-yellow-800'
                      : 'bg-red-200 text-red-800'
                  }`}
                >
                  {order.status}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default OrdersList;