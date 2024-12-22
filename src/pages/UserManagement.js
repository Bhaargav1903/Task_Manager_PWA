// src/pages/UserManagement.js
import React from 'react';
import UserProfile from '../components/UserProfile';
import { useQuery, useMutation } from '@apollo/client';
import { GET_USERS_QUERY, ADD_USER_MUTATION } from '../graphql/queries';

const UserManagement = () => {
  const { data, loading, error } = useQuery(GET_USERS_QUERY);
  const [addUser] = useMutation(ADD_USER_MUTATION, {
    refetchQueries: [{ query: GET_USERS_QUERY }],
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleAddUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    addUser({ variables: { name, email } });
    e.target.reset();
  };

  return (
    <div className="p-6 space-y-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-semibold text-primary">User Management</h1>
      <form onSubmit={handleAddUser} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          required
          className="w-full p-3 border border-tertiary rounded-md"
        />
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          required
          className="w-full p-3 border border-tertiary rounded-md"
        />
        <button type="submit" className="w-full bg-secondary text-white p-3 rounded-md hover:bg-primary">
          Add User
        </button>
      </form>
      <h2 className="text-2xl font-semibold text-secondary">Existing Users</h2>
      <div className="mt-4 space-y-6">
        {data.getUsers.map((user) => (
          <UserProfile key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UserManagement;
