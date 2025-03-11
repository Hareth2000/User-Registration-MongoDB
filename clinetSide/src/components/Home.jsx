import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get('/api/users/profile', { withCredentials: true });
        setUser(data);
      } catch (error) {
        console.error(error);
        alert('Failed to fetch user profile');
      }
    };
    fetchUser();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg text-center">
        {user ? (
          <>
            <h2 className="text-3xl font-bold text-gray-800">Welcome, {user.username}!</h2>
            <p className="text-gray-600">You are now logged in.</p>
          </>
        ) : (
          <div className="space-y-4">
            <p className="text-gray-700">Loading your profile...</p>
            <div className="animate-pulse h-6 w-3/4 bg-gray-300 rounded"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;