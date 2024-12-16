
// import React from 'react';
// import UserProfile from '../components/UserProfile';
// //import Form from '../components/Form';
// import { useQuery } from '@apollo/client';
// import { GET_USERS_QUERY } from '../graphql/queries';

// const UserManagement = () => {
//   const { data, loading, error } = useQuery(GET_USERS_QUERY);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;

//   return (
//     <div>
//       <h1>User Management</h1>
//       <Form fields={[{ name: 'name' }, { name: 'email' }]} />
//       {data.getUsers.map((user) => (
//         <UserProfile key={user.id} user={user} />
//       ))}
//     </div>
//   );
// };

// export default UserManagement;


import React from 'react';
import UserProfile from '../components/UserProfile';
//import Form from '../components/Form';
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
      <div>
        <h1>User Management</h1>
        <form onSubmit={handleAddUser}>
          <input type="text" name="name" placeholder="Enter Name" required />
          <input type="email" name="email" placeholder="Enter Email" required />
          <button type="submit">Add User</button>
        </form>
      <h2>Existing Users</h2>
      {/* Display existing users */}
      {data.getUsers.map((user) => (
        <UserProfile key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserManagement;
