import React from 'react';

const UserProfile = ({ user }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <h3 className="text-xl font-semibold text-primary">{user.name}</h3>
    <p className="text-gray-600">{user.email}</p>
  </div>
);

export default UserProfile;
