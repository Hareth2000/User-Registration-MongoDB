import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Profile from './components/Profile';
import Home from './components/Home';
import OrderForm from './components/OrderForm';
import OrdersList from './components/OrdersList';
import axios from 'axios';

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);

  const handleLogin = () => {
    setAuthenticated(true);
  };

  const handleLogout = async () => {
    setAuthenticated(false);
    await axios.post('http://localhost:5000/api/users/logout', {}, { withCredentials: true });
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {/* Navbar */}
        <nav className="bg-white shadow-md">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <div className="text-xl font-bold text-gray-800">MyApp</div>
            <div className="flex space-x-4">
              <Link
                to="/"
                className="text-gray-700 hover:text-blue-600 transition duration-300"
              >
                Home
              </Link>
              <Link
                to="/register"
                className="text-gray-700 hover:text-blue-600 transition duration-300"
              >
                Register
              </Link>
              <Link
                to="/login"
                className="text-gray-700 hover:text-blue-600 transition duration-300"
              >
                Login
              </Link>
              {authenticated && (
                <>
                  <Link
                    to="/orders"
                    className="text-gray-700 hover:text-blue-600 transition duration-300"
                  >
                    Orders
                  </Link>
                  <Link
                    to="/order-form"
                    className="text-gray-700 hover:text-blue-600 transition duration-300"
                  >
                    Create Order
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300"
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="container mx-auto px-6 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login handleLogin={handleLogin} />} />
            <Route
              path="/profile"
              element={authenticated ? <Profile /> : <h1 className="text-center text-gray-600">Please log in first</h1>}
            />
            <Route
              path="/orders"
              element={authenticated ? <OrdersList /> : <h1 className="text-center text-gray-600">Please log in first</h1>}
            />
            <Route
              path="/order-form"
              element={authenticated ? <OrderForm /> : <h1 className="text-center text-gray-600">Please log in first</h1>}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;