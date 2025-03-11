// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Profile = () => {
//     const [user, setUser] = useState(null);

//     useEffect(() => {
//         const fetchUser = async () => {
//             try {
//                 const response = await axios.get('/api/users/profile', { withCredentials: true });
//                 setUser(response.data);
//             } catch (error) {
//                 console.error(error);
//                 alert('Please login first');
//             }
//         };

//         fetchUser();
//     }, []);

//     if (!user) return <div>Loading...</div>;

//     return (
//         <div>
//             <h1>Welcome, {user.username}</h1>
//             <p>Email: {user.email}</p>
//         </div>
//     );
// };

// export default Profile;


import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('/api/users/profile', { withCredentials: true });
        setUser(response.data);
      } catch (error) {
        console.error(error);
        alert('Please login first');
      }
    };

    fetchUser();
  }, []);

  if (!user)
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="animate-pulse h-6 w-3/4 bg-gray-300 rounded"></div>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold text-gray-800">Welcome, {user.username}!</h1>
        <p className="text-gray-600">Your profile details:</p>
        <div className="space-y-4 text-left">
          <div className="flex justify-between text-gray-700">
            <span className="font-medium">Username:</span>
            <span>{user.username}</span>
          </div>
          <div className="flex justify-between text-gray-700">
            <span className="font-medium">Email:</span>
            <span>{user.email}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;