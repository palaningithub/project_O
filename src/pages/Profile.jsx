import React from 'react';

const Profile = () => {
  // You can fetch user data from context or localStorage here
  const user = {
    name: 'Palani N',
    email: 'palani@example.com',
    role: 'Farmer',
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4 text-center">User Profile</h2>
      <div className="space-y-3">
        <div>
          <strong>Name:</strong> {user.name}
        </div>
        <div>
          <strong>Email:</strong> {user.email}
        </div>
        <div>
          <strong>Role:</strong> {user.role}
        </div>
      </div>
    </div>
  );
};

export default Profile;
