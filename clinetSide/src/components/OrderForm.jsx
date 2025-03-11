// // components/OrderForm.jsx
// import React, { useState } from 'react';
// import axios from 'axios';

// const OrderForm = () => {
//   const [products, setProducts] = useState([{ name: '', price: 0, quantity: 1 }]);
//   const [totalAmount, setTotalAmount] = useState(0);

//   const handleProductChange = (index, event) => {
//     const newProducts = [...products];
//     newProducts[index][event.target.name] = event.target.value;
//     setProducts(newProducts);
//     calculateTotalAmount(newProducts);
//   };

//   const handleAddProduct = () => {
//     setProducts([...products, { name: '', price: 0, quantity: 1 }]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await axios.post(
//         'http://localhost:5000/api/orders/create',
//         { products, totalAmount },
//         { withCredentials: true }
//       );
//       alert('Order created successfully');
//       console.log(data);
//     } catch (error) {
//       console.error(error);
//       alert('Failed to create order');
//     }
//   };

//   const calculateTotalAmount = (products) => {
//     const total = products.reduce((sum, product) => sum + product.price * product.quantity, 0);
//     setTotalAmount(total);
//   };

//   return (
//     <div>
//       <h2>Create Order</h2>
//       <form onSubmit={handleSubmit}>
//         {products.map((product, index) => (
//           <div key={index}>
//             <input
//               type="text"
//               name="name"
//               value={product.name}
//               placeholder="Product Name"
//               onChange={(e) => handleProductChange(index, e)}
//             />
//             <input
//               type="number"
//               name="price"
//               value={product.price}
//               placeholder="Price"
//               onChange={(e) => handleProductChange(index, e)}
//             />
//             <input
//               type="number"
//               name="quantity"
//               value={product.quantity}
//               placeholder="Quantity"
//               onChange={(e) => handleProductChange(index, e)}
//             />
//           </div>
//         ))}
//         <button type="button" onClick={handleAddProduct}>Add Product</button>
//         <div>Total: ${totalAmount}</div>
//         <button type="submit">Submit Order</button>
//       </form>
//     </div>
//   );
// };

// export default OrderForm;


import React, { useState } from 'react';
import axios from 'axios';

const OrderForm = () => {
  const [products, setProducts] = useState([{ name: '', price: 0, quantity: 1 }]);
  const [totalAmount, setTotalAmount] = useState(0);

  const handleProductChange = (index, event) => {
    const newProducts = [...products];
    newProducts[index][event.target.name] = event.target.value;
    setProducts(newProducts);
    calculateTotalAmount(newProducts);
  };

  const handleAddProduct = () => {
    setProducts([...products, { name: '', price: 0, quantity: 1 }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        'http://localhost:5000/api/orders/create',
        { products, totalAmount },
        { withCredentials: true }
      );
      alert('Order created successfully');
      console.log(data);
    } catch (error) {
      console.error(error);
      alert('Failed to create order');
    }
  };

  const calculateTotalAmount = (products) => {
    const total = products.reduce((sum, product) => sum + product.price * product.quantity, 0);
    setTotalAmount(total);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Create Order</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {products.map((product, index) => (
            <div key={index} className="flex space-x-4">
              <input
                type="text"
                name="name"
                value={product.name}
                placeholder="Product Name"
                onChange={(e) => handleProductChange(index, e)}
                className="flex-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="number"
                name="price"
                value={product.price}
                placeholder="Price"
                onChange={(e) => handleProductChange(index, e)}
                className="w-32 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="number"
                name="quantity"
                value={product.quantity}
                placeholder="Quantity"
                onChange={(e) => handleProductChange(index, e)}
                className="w-32 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddProduct}
            className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Add Product
          </button>
          <div className="text-xl font-semibold text-right text-gray-700">
            Total: ${totalAmount.toFixed(2)}
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-3 rounded-md hover:bg-green-600 transition duration-300"
          >
            Submit Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrderForm;